// Original vector schematics shared by research themes and project summaries.
// Colors come from the site's figure palette, including the manual dark theme.
(() => {
  const c = (name) => `var(--fig-${name})`;
  const nucleus = (x, y, angle = 0, size = 1) => `<g transform="translate(${x} ${y}) rotate(${angle}) scale(${size})"><ellipse rx="4.3" ry="6.4" fill="${c('purple')}"/><path d="M-1-3 1 2" stroke="${c('purple-light')}" stroke-width="1.2" stroke-linecap="round"/></g>`;
  const arrow = (x1, y, x2) => `<path d="M${x1} ${y}H${x2}m-6-5 6 5-6 5" fill="none" stroke="${c('ink')}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
  const tissue = `<rect x="8" y="15" width="94" height="100" rx="11" fill="${c('pink-light')}" stroke="${c('pink')}" stroke-width="1.5"/>
    <path d="M10 51c19-32 36 26 54-6s23-14 36-21M10 88c17-25 38 17 55-5s21-20 36-12M28 17c-8 34 34 36 24 69s8 23 15 28" fill="none" stroke="${c('pink')}" stroke-width="7" opacity=".7"/>
    <path d="M9 54c22-24 34 27 57-5M12 91c15-19 39 17 58-9" fill="none" stroke="${c('paper')}" stroke-width="3"/>
    ${[[22,32,25],[42,29,-25],[74,27,40],[89,43,-15],[30,58,60],[51,57,-20],[72,65,30],[23,86,-30],[47,94,20],[83,92,-45],[64,105,40]].map(p => nucleus(...p)).join('')}`;
  const map = (x, y, tone, rotation = 0) => {
    const levels = [[.22,.35,.7,.45],[.35,.85,1,.6],[.6,1,.8,.35],[.45,.65,.35,.2]];
    return `<g transform="translate(${x} ${y}) rotate(${rotation} 33 33)"><rect x="-4" y="-4" width="74" height="74" rx="7" fill="${c('paper')}" stroke="${c(tone)}" stroke-width="1.8"/>${levels.flatMap((row,r) => row.map((opacity,col) => `<rect x="${col*17}" y="${r*17}" width="15" height="15" rx="2.5" fill="${c(tone)}" opacity="${opacity}"/>`)).join('')}</g>`;
  };
  const cell = (x,y,tone,size=1,label='') => `<g transform="translate(${x} ${y}) scale(${size})"><path d="M-12-8c8-11 24-9 28 3s-3 23-15 23S-22 4-12-8Z" fill="${c(tone+'-light')}" stroke="${c(tone)}" stroke-width="2.5"/><ellipse cx="1" cy="2" rx="4.5" ry="6" fill="${c(tone)}"/>${label ? `<text x="13" y="-12" fill="${c('ink')}" font-size="13" font-weight="700">${label}</text>` : ''}</g>`;

  const drawings = {
    omics: `${tissue}${arrow(111,65,148)}
      <g><rect x="159" y="43" width="28" height="44" rx="7" fill="${c('blue-light')}" stroke="${c('blue')}" stroke-width="1.8"/><path d="M166 54h14m-14 8h14m-14 8h14m-14 8h9" stroke="${c('blue')}" stroke-width="2" stroke-linecap="round"/></g>
      ${arrow(194,65,222)}<g transform="translate(226 9) scale(.73)">${map(8,9,'purple',-7)}${map(40,52,'teal',7)}</g>
      <path d="M187 36l-8 7" fill="none" stroke="${c('purple')}" stroke-width="1.8" stroke-dasharray="3 4"/>
      <path d="M147 27h33l8 8V14a5 5 0 0 0-5-5h-36a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5Z" fill="${c('purple-light')}" stroke="${c('purple')}" stroke-width="1.5"/>
      <path d="M150 17h24" stroke="${c('purple')}" stroke-width="2" stroke-linecap="round"/>
      <circle cx="239" cy="122" r="4" fill="${c('teal')}"/><path d="M249 122h15" stroke="${c('teal')}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="279" cy="122" r="4" fill="${c('purple')}"/><path d="M289 122h15" stroke="${c('purple')}" stroke-width="3" stroke-linecap="round"/>`,
    unified: `${tissue}${arrow(111,65,145)}
      <rect x="156" y="15" width="155" height="100" rx="11" fill="${c('paper')}" stroke="${c('line')}" stroke-width="1.5"/>
      <path d="M159 99c24-30 37-6 58-24s30-24 53-10 26-1 39-18v57a9 9 0 0 1-9 9H166Z" fill="${c('blue-light')}" stroke="${c('blue')}" stroke-width="1.5"/>
      ${cell(180,41,'teal',.74,'1')}${cell(228,39,'purple',.77,'2')}${cell(279,38,'teal',.7,'3')}${cell(198,84,'purple',.7,'4')}${cell(262,84,'teal',.8,'5')}
      <path d="M169 125h16m17 0h16m17 0h16" stroke="${c('teal')}" stroke-width="4" stroke-linecap="round"/>
      <path d="M185 125h11m22 0h11m22 0h11" stroke="${c('purple')}" stroke-width="4" stroke-linecap="round"/>`,
    ecosystem: `<rect x="8" y="15" width="194" height="102" rx="11" fill="${c('paper')}" stroke="${c('line')}" stroke-width="1.5"/>
      <path d="M59 17c33 31-20 56 9 98" fill="none" stroke="${c('pink-light')}" stroke-width="21"/><path d="M59 17c33 31-20 56 9 98" fill="none" stroke="${c('pink')}" stroke-width="3"/>
      <path d="M19 28c25-14 40 5 34 34s-26 42-35 17Z" fill="${c('teal-light')}" stroke="${c('teal')}" stroke-width="1.4" stroke-dasharray="4 4"/>
      <path d="M114 31c41-31 83 12 65 52s-73 15-74-16Z" fill="${c('purple-light')}" stroke="${c('purple')}" stroke-width="1.4" stroke-dasharray="4 4"/>
      ${[[29,39,'teal'],[43,68,'teal'],[27,91,'teal'],[104,25,'blue'],[95,86,'blue'],[132,43,'purple'],[164,57,'purple'],[134,83,'purple'],[180,99,'teal']].map(([x,y,t]) => cell(x,y,t,.42)).join('')}
      ${arrow(210,65,238)}
      <path d="m270 28-17 40 39 31 9-50-31-21 22 71M253 68l48-19" fill="none" stroke="${c('line')}" stroke-width="2.5"/>
      <circle cx="270" cy="28" r="9" fill="${c('teal-light')}" stroke="${c('teal')}" stroke-width="2.5"/>
      <circle cx="253" cy="68" r="10" fill="${c('blue-light')}" stroke="${c('blue')}" stroke-width="2.5"/>
      <circle cx="292" cy="99" r="8" fill="${c('teal-light')}" stroke="${c('teal')}" stroke-width="2.5"/>
      <circle cx="301" cy="49" r="10" fill="${c('purple-light')}" stroke="${c('purple')}" stroke-width="2.5"/>`
  };
  const thumbnails = {
    omics: `<g transform="translate(3 -1) scale(.68)">${map(11,11,'purple',-9)}${map(43,39,'teal',8)}</g>`,
    unified: `<rect x="5" y="5" width="86" height="86" rx="14" fill="${c('paper')}" stroke="${c('line')}" stroke-width="1.5"/><path d="M6 73c21-20 46 4 83-30v38a10 10 0 0 1-10 10H17Z" fill="${c('blue-light')}"/>${cell(28,30,'teal',.73)}${cell(67,33,'purple',.74)}${cell(48,68,'teal',.78)}`,
    ecosystem: `<circle cx="48" cy="48" r="41" fill="${c('purple-light')}"/><path d="m24 24 48 9-16 43-32-3V24l32 52M24 73l48-40" fill="none" stroke="${c('line')}" stroke-width="2.5"/>${cell(24,24,'teal',.55)}${cell(72,33,'purple',.58)}${cell(56,76,'teal',.55)}${cell(24,73,'blue',.52)}`
  };
  const captions = {
    omics: 'Histology + query → RNA & protein maps',
    unified: 'Tissue image → cell masks & labels',
    ecosystem: 'Spatial cell atlas → tissue neighborhoods'
  };
  const descriptions = {
    omics: 'Histology and a text query enter a generative model to predict spatial molecular maps.',
    unified: 'A tissue image is resolved into individual cell boundaries, cell classes, and tissue structures.',
    ecosystem: 'Different cell populations cluster around a vessel and form spatial neighborhoods and relationships.'
  };
  const compactDescriptions = {
    omics: 'Layered spatial RNA and protein maps.',
    unified: 'Segmented cells with distinct cell-class colors.',
    ecosystem: 'Cell populations connected in a tissue neighborhood.'
  };
  const svg = (key, compact = false) => !drawings[key] ? '' : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${compact ? '96 96' : '320 136'}" role="img" aria-label="${(compact ? compactDescriptions : descriptions)[key]}" focusable="false"><g stroke-linejoin="round" stroke-linecap="round">${(compact ? thumbnails : drawings)[key]}</g></svg>`;
  window.RESEARCH_FIGURES = { svg, captions };
})();
