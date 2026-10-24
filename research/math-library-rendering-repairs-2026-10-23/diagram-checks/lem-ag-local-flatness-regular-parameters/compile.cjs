const fs=require('node:fs');
const path=require('node:path');
const root='/home/lazyinspirit/Projects/prestige-math-library';
const id='lem-ag-local-flatness-regular-parameters';
const dir=path.join(root,'research/math-library-rendering-repairs-2026-10-23/diagram-checks',id);
process.chdir(dir);process.env.TMPDIR=dir+'/tmp';
const tex2svg=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/node-tikzjax').default;
const sharp=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/sharp');
(async()=>{
const raw=fs.readFileSync(root+'/items/'+id+'.md','utf8');
const content=raw.match(/```tikzcd\n([\s\S]*?)```/)[1].trim();
const tex='\\usepackage{amsfonts}\n\\usepackage{tikz-cd}\n\\begin{document}\n'+content+'\n\\end{document}';
fs.writeFileSync('diagram.tex',tex);
const svg=await tex2svg(tex,{showConsole:true});if(!svg.includes('<svg'))throw Error('No SVG');
fs.writeFileSync('diagram.svg',svg);
await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile('diagram.png');
console.log('Compiled current item tikzcd with node-tikzjax to diagram.svg and diagram.png');
})().catch(e=>{console.error(e);process.exit(1)});
