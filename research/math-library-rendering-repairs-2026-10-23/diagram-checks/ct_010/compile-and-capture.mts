import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const root=process.cwd();
const out=path.join(root,'research/math-library-rendering-repairs-2026-10-23/diagram-checks/ct_010');
process.env.TMPDIR=path.join(out,'fresh-runtime');fs.mkdirSync(process.env.TMPDIR,{recursive:true});
process.chdir('/home/lazyinspirit/Projects/prestige-intelligence/web');
const {renderTikz}=await import('/home/lazyinspirit/Projects/prestige-intelligence/web/lib/tikz.ts');
const src=fs.readFileSync(path.join(root,'items/thm-the-kernel-cokernel-sequence-of-a-composite.md'),'utf8');
const diagrams=[...src.matchAll(/```tikzcd\n([\s\S]*?)\n```/g)];
const req=createRequire('/home/lazyinspirit/Projects/prestige-intelligence/web/package.json');
const {chromium}=req('/home/lazyinspirit/.npm/_npx/e41f203b7505f1fb/node_modules/playwright'); const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1200,height:600},deviceScaleFactor:1});
const checks=[];
for(let n=0;n<diagrams.length;n++){
 const svg=await renderTikz(diagrams[n][1],'tikzcd');
 fs.writeFileSync(path.join(out,`figure-${n+1}.svg`),svg);
 await page.setContent(`<html><body style="margin:30px;background:black;color:white"><div id="figure" style="display:inline-block;padding:24px">${svg}</div></body></html>`);
 await page.evaluate(()=>document.fonts.ready);
 await page.locator('#figure').screenshot({path:path.join(out,`figure-${n+1}.png`)});
 checks.push({figure:n+1,svg:svg.includes('<svg'),source:diagrams[n][1],screenshot:`figure-${n+1}.png`});
}
await browser.close();fs.writeFileSync(path.join(out,'fresh-compile.json'),JSON.stringify({freshCache:true,checks},null,2)+'\n');
console.log(JSON.stringify({compiled:checks.length,all_svg:checks.every(x=>x.svg)}));
