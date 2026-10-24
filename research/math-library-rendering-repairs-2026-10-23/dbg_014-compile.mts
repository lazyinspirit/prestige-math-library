import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(),out=path.join(root,'research/math-library-rendering-repairs-2026-10-23/dbg_014-compile');
fs.mkdirSync(out,{recursive:true});process.env.TMPDIR=path.join(out,'runtime');fs.mkdirSync(process.env.TMPDIR,{recursive:true});
process.chdir('/home/lazyinspirit/Projects/prestige-intelligence/web');
const {renderTikz}=await import('/home/lazyinspirit/Projects/prestige-intelligence/web/lib/tikz.ts');
const raw=fs.readFileSync(path.join(root,'items/lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors.md'),'utf8');
const code=raw.match(/```tikz\n([\s\S]*?)\n```/)![1];
const svg=await renderTikz(code,'tikz');fs.writeFileSync(path.join(out,'figure.svg'),svg);console.log(JSON.stringify({svg:svg.includes('<svg'),fresh_runtime:process.env.TMPDIR,source:code}));
