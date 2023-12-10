(() => {
  const bar = document.querySelector(".dashboard-bar__bar");
  const valueBar = 75;

  bar.animate([{ transform: `rotate(${45 + valueBar * 1.8}deg)` }], {
    duration: 3000,
    fill: "forwards",
    easing: `steps(${valueBar}, end)`,
  });

  const barLines = document.querySelector(".dashboard-bar__lines");
  const valueBarLines = 60;

  barLines.animate([{ transform: `rotate(${45 + valueBarLines * 1.8}deg)` }], {
    duration: 3000,
    fill: "forwards",
    easing: `steps(${valueBarLines}, end)`,
  });
})();
