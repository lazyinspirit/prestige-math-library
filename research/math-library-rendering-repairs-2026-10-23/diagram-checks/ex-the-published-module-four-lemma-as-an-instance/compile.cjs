const fs=require('node:fs');
const path=require('node:path');
const output=__dirname;
const app='/home/lazyinspirit/Projects/prestige-intelligence/web';
const tex2svg=require(app+'/node_modules/node-tikzjax').default;
const sharp=require(app+'/node_modules/sharp');
const source=fs.readFileSync(path.join(process.cwd(),'items/ex-the-published-module-four-lemma-as-an-instance.md'),'utf8');
(async()=>{
 const m=source.match(/```tikzcd\n([\s\S]*?)```/);
 const tex='\\usepackage{tikz-cd}\n\\begin{document}\n\\begin{tikzcd}\n'+m[1].trim()+'\n\\end{tikzcd}\n\\end{document}';
 fs.writeFileSync(path.join(output,'diagram-1.tex'),tex);
 const svg=await tex2svg(tex,{showConsole:true});
 if(!svg.includes('<svg'))throw Error('Missing SVG');
 fs.writeFileSync(path.join(output,'diagram-1.svg'),svg);
 await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile(path.join(output,'diagram-1.png'));
 console.log('PASS: node-tikzjax compilation and sharp rasterization of current item diagram.');
})().catch(e=>{console.error(e);process.exit(1)});
