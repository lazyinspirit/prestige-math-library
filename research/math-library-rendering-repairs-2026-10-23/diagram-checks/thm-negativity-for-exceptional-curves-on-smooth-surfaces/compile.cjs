const fs=require('node:fs'),path=require('node:path');
const root=process.cwd(), id='thm-negativity-for-exceptional-curves-on-smooth-surfaces';
const dir=path.join(root,'research/math-library-rendering-repairs-2026-10-23/diagram-checks',id);
process.chdir(dir);process.env.TMPDIR=dir+'/tmp'; fs.mkdirSync(process.env.TMPDIR,{recursive:true});
const tex2svg=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/node-tikzjax').default;
const sharp=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/sharp');
(async()=>{const raw=fs.readFileSync(root+'/items/'+id+'.md','utf8');const content=raw.match(/```tikz\n([\s\S]*?)```/)[1].trim();const tex='\\usepackage{amsmath,amssymb}\n\\begin{document}\n'+content+'\n\\end{document}';fs.writeFileSync('diagram.tex',tex);const svg=await tex2svg(tex,{showConsole:true});if(!svg.includes('<svg'))throw Error('No SVG'); fs.writeFileSync('diagram.svg',svg); await sharp(Buffer.from(svg),{density:200}).flatten({background:'#ffffff'}).png().toFile('diagram.png'); console.log('Compiled current item to diagram.svg and diagram.png');})().catch(e=>{console.error(e);process.exit(1)});
