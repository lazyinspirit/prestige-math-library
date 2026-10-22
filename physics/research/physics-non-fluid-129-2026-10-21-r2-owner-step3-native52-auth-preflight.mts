import {refuterContinuations} from '../tools/physics-autopilot/stages/refuter-continuations.mts';
const run='physics-non-fluid-129-2026-10-21-r2';
const rows=refuterContinuations({repo:process.cwd(),run},{units:()=>['52']},true);
if(rows.length!==1||rows[0].subjects.length!==14)throw Error('Unexpected continuation');
console.log('Installed native authentication preflight passed: one bounded continuation,14current subjects; no fresh reading claimed.');
