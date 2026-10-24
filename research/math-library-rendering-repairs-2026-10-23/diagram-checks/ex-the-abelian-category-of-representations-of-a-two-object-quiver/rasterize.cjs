const fs=require('node:fs');
const path=require('node:path');
const sharp=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/sharp');
const base=__dirname;
const files=fs.readdirSync(path.join(base,'tmp/pi-tikz-cache')).filter(x=>x.endsWith('.svg'));
if(files.length!==1)throw new Error('Expected one compiled SVG');
const svg=fs.readFileSync(path.join(base,'tmp/pi-tikz-cache',files[0]));
fs.writeFileSync(path.join(base,'diagram.svg'),svg);
sharp(svg,{density:288}).flatten({background:'#ffffff'}).png().toFile(path.join(base,'diagram.png')).then(()=>console.log('Rasterized actual renderer-compiled SVG at 288 DPI')).catch(e=>{console.error(e);process.exit(1)});
