import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {recordStep1} from '../../../tools/physics-support/step1-decisions.mjs';
const run='physics-cm-qm-gr-79-2026-10-11', base=`research/${run}-resumed-orchestration/gr-recovery/native-holds`;
const findings={
 'lem-gr-smooth-composition-and-commutator-estimates':'Uniform coefficient bounds need compact time slab; top-order homogeneous commutators invoked by energy are absent. Compact values need not have convex hull inside open O.',
 'lem-gr-galerkin-second-time-derivative-bound':'Projected inverse induction needs homogeneous commutator, not additive constant; arbitrary nonlinear coefficients do not give asserted R-independent quadratic growth.',
 'lem-gr-galerkin-limit-is-classical-solution':'Compact K inside O need not have convex hull in O; claimed H^(s-1) to C^(s-2) embedding is false; exact norm passage must track Fourier equivalence.',
 'lem-gr-periodic-sobolev-embedding':'Proof Fourier Cauchy-Schwarz exponents are wrong; Holder endpoint cannot follow by increasing lower exponent; split-frequency endpoint proof missing.',
 'prop-gr-scalar-field-stress-energy-conservation':'Statement(c) false converse: phi=a constant and smooth V with Vprime(a)!=0 has conserved T=-K V(a)g but fails scalar equation. Preserve exact divergence identity, forward implication and converse only where dphi!=0.',
 'lem-gr-einstein-residual-and-subsidiary-identity':'Statement(a) formerly omitted reduced-equation premise; correction integrated, full old/current consumer transfer remains pending.',
 'lem-gr-barotropic-fluid-symmetric-hyperbolic-system':'Conormal decomposition sign inconsistent with zeta(u)>0; actual smooth coordinate velocity symmetrizer/reconstruction requires explicit supplier completion.'
};let rows=[];
for(const [item,reason] of Object.entries(findings)){
 let f=`research/${run}-step1-${item}.json`,before=`${base}/${item}.before-ready.json`;
 if(existsSync(f)&&!existsSync(before))writeFileSync(before,readFileSync(f));
 let text=readFileSync(`items/${item}.md`,'utf8'),deps=text.match(/^deps: \[([^\]]*)\]/m)[1].split(',').map(x=>x.trim()).filter(Boolean);
 rows.push(recordStep1(process.cwd(),{run,item,decision:'escalated',owner:true,dependencies:deps,reason:`GR recovery original cycle1/cap2 preserved: ${reason} Same-reviewer focused supplier/consumer closure pending; no readiness/audit acceptance.`}));
}
writeFileSync(`${base}/additional-recorded.json`,JSON.stringify(rows,null,2)+'\n');console.log('Additional truthful owner holds:',rows.length);
