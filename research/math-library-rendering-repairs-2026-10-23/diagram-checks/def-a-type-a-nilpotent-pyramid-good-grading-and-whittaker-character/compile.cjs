const fs=require('node:fs');
const path=require('node:path');
const app='/home/lazyinspirit/Projects/prestige-intelligence/web';
const tex2svg=require(app+'/node_modules/node-tikzjax').default;
const sharp=require(app+'/node_modules/sharp');
(async()=>{
 const source=fs.readFileSync(path.resolve('../../../../items/def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character.md'),'utf8');
 const m=source.match(/```tikz\n([\s\S]*?)```/);
 const tex='\\begin{document}\n'+m[1].trim()+'\n\\end{document}';
 fs.writeFileSync('diagram.tex',tex);
 const svg=await tex2svg(tex,{showConsole:true});
 if(!svg.includes('<svg'))throw new Error('Missing SVG');
 fs.writeFileSync('diagram.svg',svg);
 await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile('diagram.png');
 console.log('Compiled exact fenced TikZ using node-tikzjax and rasterized SVG using sharp.');
})().catch(e=>{console.error(e);process.exit(1)});
