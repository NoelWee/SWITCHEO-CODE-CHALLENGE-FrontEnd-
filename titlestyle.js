const titles = gsap.utils.toArray('p');
const tl = gsap.timeline();
titles.forEach(title => {
    const splitTitle = new SplitTextJS(title);

    tl.from(splitTitle.chars,{
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.2
    }, "<");

    tl.to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.2
    }, "<1");
    
});
