const fs=require('fs');
const root='/home/lazyinspirit/Projects/prestige-math-library';
const dir=root+'/research/math-library-rendering-repairs-2026-10-23/diagram-checks/ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration';
process.chdir(dir);process.env.TMPDIR=dir+'/tmp';
const tex2svg=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/node-tikzjax').default;
const sharp=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/sharp');
(async()=>{
const raw=fs.readFileSync(root+'/items/ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration.md','utf8');
const content=raw.match(/\x60\x60\x60tikz\n([\s\S]*?)\x60\x60\x60/)[1];
const tex='\\begin{document}\n'+content+'\n\\end{document}';
fs.writeFileSync('diagram.tex',tex);
const svg=await tex2svg(tex,{showConsole:true});if(!svg.includes('<svg'))throw Error('No SVG');
fs.writeFileSync('diagram.svg',svg);
await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile('diagram.png');
console.log('Compiled item TikZ to diagram.svg and diagram.png');
})().catch(e=>{console.error(e);process.exit(1)});
