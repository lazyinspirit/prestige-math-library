import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {recordStep1} from '../../../tools/physics-support/step1-decisions.mjs';
const run='physics-cm-qm-gr-79-2026-10-11', base=`research/${run}-resumed-orchestration/gr-recovery/native-holds`;
const findings={
 'thm-gr-periodic-symmetric-hyperbolic-existence':'Proof2.1 initializes every Fourier projection in K although Fourier truncation need not preserve K; strict bootstrap and backward energy prerequisites unresolved.',
 'thm-gr-periodic-symmetric-hyperbolic-smooth-persistence':'Higher-order induction estimates the assumed order M, never establishes M+1; m=M-1 may fall below supplier s>=5.',
 'lem-gr-finite-speed-independence-of-extension':'Statement(a) and L1 use b to bound combined 3D symbol though only each spatial matrix bounded by b; scalar Ai=b refutes cone positivity.',
 'thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability':'Proof of(b) uses forced Eprime<=C(1+E) to conclude homogeneous initial-error bound; requires actual difference energy.',
 'lem-gr-galerkin-ode-local-solution':'Initial admissibility cannot be asserted for every P_Nu0; continuation requires endpoint inside coefficient time interval.',
 'lem-gr-galerkin-energy-inequality':'Forward energy inequality cannot supply backward |t| estimate; derivative commutator prerequisite does not cover invoked top order.',
 'lem-gr-galerkin-time-derivative-bound':'Differentiated elliptic finite-dimensional estimate tests Dalpha u_N rather than Dalpha partial_t u_N; uniform bound needs coercive induction.'
};
let rows=[];
for(const [item,reason] of Object.entries(findings)){
 let f=`research/${run}-step1-${item}.json`; let before=`${base}/${item}.before-ready.json`;
 if(existsSync(f)&&!existsSync(before))writeFileSync(before,readFileSync(f));
 let text=readFileSync(`items/${item}.md`,'utf8'), deps=text.match(/^deps: \[([^\]]*)\]/m)[1].split(',').map(x=>x.trim()).filter(Boolean);
 rows.push(recordStep1(process.cwd(),{run,item,decision:'escalated',owner:true,dependencies:deps,reason:`GR recovery, original cycle1/cap2 preserved: ${reason} Smallest supplier repair and same-reviewer consumer closure pending; no readiness or audit acceptance.`}));
}
writeFileSync(`${base}/recorded.json`,JSON.stringify(rows,null,2)+'\n');
console.log('Recorded truthful owner holds:',rows.length);
