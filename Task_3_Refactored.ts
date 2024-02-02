interface WalletBalance {
    currency: string;
    amount: number;
  }
  interface FormattedWalletBalance extends WalletBalance {
    formatted: string;
  }
  
  class Datasource {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    async getPrices(): Promise<Record<string, number>> {
      try {
        const response = await fetch(this.apiUrl);
        const data = await response.json();
        return data.prices;
      } catch (error) {
        console.error('Error fetching prices:', error);
        throw error;
      }
    }
  }
  
  interface Props extends BoxProps {}
  
  const WalletPage: React.FC<Props> = (props: Props) => {
    const { ...rest } = props;
    const balances = useWalletBalances();
    const [prices, setPrices] = useState<Record<string, number>>({});
  
    useEffect(() => {
      const datasource = new Datasource("https://interview.switcheo.com/prices.json");
      datasource.getPrices().then((newPrices) => {
        setPrices(newPrices);
      }).catch((error) => {
        console.error(error);
      });
    }, []);
  
    const getPriority = (blockchain: string): number => {
      switch (blockchain) {
        case 'Osmosis':
          return 100;
        case 'Ethereum':
          return 50;
        case 'Arbitrum':
          return 30;
        case 'Zilliqa':
        case 'Neo':
          return 20;
        default:
          return -99;
      }
    };
  
    const sortedBalances = useMemo(() => {
      return balances
        .filter((balance: WalletBalance) => {
          const balancePriority = getPriority(balance.blockchain);
          if (balancePriority > -99 && balance.amount <= 0) {
            return true;
          }
          return false;
        })
        .sort((lhs: WalletBalance, rhs: WalletBalance) => {
          const leftPriority = getPriority(lhs.blockchain);
          const rightPriority = getPriority(rhs.blockchain);
          return rightPriority - leftPriority;
        });
    }, [balances, prices]);
  
    const formattedBalances = sortedBalances.map((balance: WalletBalance) => ({
      ...balance,
      formatted: balance.amount.toFixed(),
    }));
  
    const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    });
  
    return <div {...rest}>{rows}</div>;
  };
  