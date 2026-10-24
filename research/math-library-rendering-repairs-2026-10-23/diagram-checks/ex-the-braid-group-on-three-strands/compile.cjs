const fs=require('node:fs');
const path=require('node:path');
const app='/home/lazyinspirit/Projects/prestige-intelligence/web';
const tex2svg=require(app+'/node_modules/node-tikzjax').default;
const sharp=require(app+'/node_modules/sharp');
const dir=__dirname;
process.env.TMPDIR=path.join(dir,'tmp');
process.env.FONTCONFIG_FILE=path.join(dir,'fonts.conf');
const source=fs.readFileSync('items/ex-the-braid-group-on-three-strands.md','utf8');
(async()=>{
const fig=source.match(/```tikz\n([\s\S]*?)```/)[1];
const tex='\\begin{document}\n'+fig+'\n\\end{document}';
fs.writeFileSync(path.join(dir,'braid-relation-tikzjax.tex'),tex);
const svg=await tex2svg(tex,{showConsole:true});
if(!svg.includes('<svg'))throw new Error('Missing SVG');
fs.writeFileSync(path.join(dir,'braid-relation.svg'),svg);
await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile(path.join(dir,'braid-relation.png'));
console.log('Exact current fenced diagram compiled with node-tikzjax and rasterized at density 200.');
})().catch(e=>{console.error(e);process.exit(1)});
