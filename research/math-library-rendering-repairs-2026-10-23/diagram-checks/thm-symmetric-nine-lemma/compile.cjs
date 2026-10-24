const fs=require('node:fs');
const path=require('node:path');
const app='/home/lazyinspirit/Projects/prestige-intelligence/web';
const tex2svg=require(app+'/node_modules/node-tikzjax').default;
const sharp=require(app+'/node_modules/sharp');
const source=fs.readFileSync(path.resolve('items/thm-symmetric-nine-lemma.md'),'utf8');
(async()=>{
process.chdir(path.resolve('research/math-library-rendering-repairs-2026-10-23/diagram-checks/thm-symmetric-nine-lemma'));
const checks=[];
let i=0;
for(const m of source.matchAll(/```tikzcd\n([\s\S]*?)```/g)){
 i++;
 const tex='\\usepackage{amsfonts}\n\\usepackage{tikz-cd}\n\\begin{document}\n\\begin{tikzcd}\n'+m[1].trim()+'\n\\end{tikzcd}\n\\end{document}';
 fs.writeFileSync(`diagram-${i}-tikzjax.tex`,tex);
 const svg=await tex2svg(tex,{showConsole:true});
 if(!svg.includes('<svg'))throw new Error('Missing SVG');
 fs.writeFileSync(`diagram-${i}.svg`,svg);
 await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile(`diagram-${i}.png`);
 checks.push({diagram:i,engine:'node-tikzjax 1.0.5',svg:`diagram-${i}.svg`,png:`diagram-${i}.png`,result:'compiled and rasterized'});
}
fs.writeFileSync('compilation-checks.json',JSON.stringify({command:"FONTCONFIG_FILE=\"$PWD/research/math-library-rendering-repairs-2026-10-23/diagram-checks/thm-symmetric-nine-lemma/fonts.conf\" TMPDIR=\"$PWD/research/math-library-rendering-repairs-2026-10-23/diagram-checks/thm-symmetric-nine-lemma/tmp\" node research/math-library-rendering-repairs-2026-10-23/diagram-checks/thm-symmetric-nine-lemma/compile.cjs",checks},null,2)+'\n');
console.log(JSON.stringify(checks));
})().catch(e=>{console.error(e);process.exit(1)});
