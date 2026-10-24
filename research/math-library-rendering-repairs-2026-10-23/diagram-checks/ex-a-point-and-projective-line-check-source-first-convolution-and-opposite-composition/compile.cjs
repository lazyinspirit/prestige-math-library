const fs=require('node:fs');
const path=require('node:path');
const app='/home/lazyinspirit/Projects/prestige-intelligence/web';
const tex2svg=require(app+'/node_modules/node-tikzjax').default;
const sharp=require(app+'/node_modules/sharp');
process.chdir(__dirname);
const source=fs.readFileSync(path.resolve('../../../../items/ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition.md'),'utf8');
(async()=>{
const checks=[];
let i=0;
for(const m of source.matchAll(/```tikz\n([\s\S]*?)```/g)){
 i++;
 const tex='\\usepackage{amsfonts}\n\\usepackage{tikz}\n\\begin{document}\n'+m[1].trim()+'\n\\end{document}';
 fs.writeFileSync(`diagram-${i}-tikzjax.tex`,tex);
 const svg=await tex2svg(tex,{showConsole:true});
 if(!svg.includes('<svg'))throw new Error('Missing SVG');
 fs.writeFileSync(`diagram-${i}.svg`,svg);
 await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile(`diagram-${i}.png`);
 checks.push({diagram:i,engine:'node-tikzjax 1.0.5',svg:`diagram-${i}.svg`,png:`diagram-${i}.png`,result:'compiled and rasterized'});
}
fs.writeFileSync('compilation-checks.json',JSON.stringify({command:'TMPDIR="$PWD/tmp" node compile.cjs',checks,native_pdflatex_attempt:'failed before diagram compilation: standalone.cls unavailable; node-tikzjax bundled TeX successfully used instead'},null,2)+'\n');
console.log(JSON.stringify(checks));
})().catch(e=>{console.error(e);process.exit(1)});
