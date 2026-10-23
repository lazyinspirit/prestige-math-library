import {readFileSync as rf,writeFileSync as wf,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolveOwner,loopState} from '../../tools/physics-support/batch-scope-review.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,out=`${base}/native-owner-resolution-integration.json`,read=p=>JSON.parse(rf(p));
if(existsSync(out))throw Error('Already resolved');
const state=read(`.physics-autopilot/${run}/state.json`);if(!state.paused||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writer active');
if(!read(`${base}/current-readiness-integration.json`).complete||!read(`${base}/current-boundary-integration.json`).complete||!read(`${base}/final-explicit-layout-attributions.json`).complete)throw Error('Preparation integration incomplete');
const freshnessPath=`${base}/batch-2-final-attribution-freshness.json`;if(!existsSync(freshnessPath))throw Error('Final104 freshness missing');
const reasons={
 1:'The ensemble counterexample now states the refuted quantifier over finite ensembles explicitly; all regularity and the two-member witness are retained.',
 2:'Smooth-motion/pathline interval and endpoint conventions are precise. The same scientist checked the full104 old/current consumer union, including all final controlled attributions and canonical formatting, with no unresolved compatibility issue.',
 4:'The time-average comparison now names the field and finite window contained in its time interval; continuity justifies the componentwise integral.',
 6:'Steady streamline domains/ODE and the regular-axis r-squared calculation are explicit. All twenty actual consumers were checked by the same reviewer, and affected physical uses repaired.',
 7:'The application defines its torus and length scale explicitly, retaining exact units and results; the same reviewer checked all eight consumers.',
 9:'The authentic final native review accepts the scientific repair and all34 consumers. Its two nonempty finding strings explicitly say Resolved; root adopts that resolved disposition without rewriting the report or resetting bounded counters.',
 10:'The barotropic local/global pressure distinction is explicit; the negative-response consumer has a globally defined exact pressure law preserving all modes and constants.',
 11:'The isotropic viscous and potentially anisotropic conductivity scopes are preserved. Actual Frobenius squared norms and all affected energy/acoustic consumer uses are explicit and checked.',
 12:'The scalar gradient is defined before material acceleration, retaining the full nondimensionalization and physical scaling branches.',
 13:'Conditional residual claims remain precise and rich. All streamline, circulation, curl, regular-axis, and diagram observations are resolved by actual source/consumer review; direct formulation prerequisites and genuine Fact attributions now match the current proofs.',
 15:'Pathwise conformation and the generalized constitutive branches remain sound. Positivity is proved before spectral-energy use, with explicit step attribution and stable canonical ordering; the same scientist checked the full15/16 closure.',
 16:'Conformation matrix notation and pathwise material derivative are explicit; smooth-motion is declared as the actual prerequisite, and the complete Definition mirror and consumer closure are synchronized.',
 17:'Full periodic distribution/Fourier uniqueness and the rectangle H-minus-one arguments retain their scope. All18 consumers, including the two omitted from native collection, were checked at current source uses.',
 18:'The alleged embedded-rational supplier defect is a false positive: the cited dense-embedding lemma defines q-hat. Valid dependencies and complete local proofs are preserved.',
 22:'The weak-product counterexample specifies weak L1 tensor topology. The nonlinear functional is representative-independent and defined almost everywhere. All four actual downstream consumers were checked, with current generalized-space boundary evidence.',
 25:'The exact kinetic measure, test-domain, envelopes and entropy/Euler interfaces are resolved. Physical entropy uses the actual global supplier clause; physical Euler has a direct weak-moment proof under its retained hypotheses. Context-only BGK notes remain ordinary Remarks, not fabricated logical premises.',
 27:'The exact used Stokes clauses and local proofs match the consumer hypotheses. Missing audit stamps and conflicting original page prose remain documented observations; physics permits precisely identified unpublished prerequisites. No original or imported snapshot was edited.',
 31:'The actual HLL model-balance denominator is positive by SR-SL and its used algebraic proof is sound. The separate undefined-normal and inline-link original observations do not affect the used clause and remain documented without changing originals.',
 33:'The Banach observable, finite-family sampling proof, Sobol interface and complete failure-aware/certified-budget analysis are resolved. The new six-step result is truthfully registered as an AI-generated direct corollary, with no incoming logical/discharge use; all finite/conditional/optional-AC claims and eight boundary cases are retained.',
 37:'The time-integrated Holder bound now explicitly supplies restricted complete Lebesgue measure, Borel measurability and the finite nonnegative integral comparison, retaining the original Statement and checked consumers.',
 39:'The native measure and calculus repairs are complete and their actual consumers checked. Countable Choice is carried explicitly into the physical energy consumer, with declared mathematical-premise metadata.',
 40:'The rotating frame, Coriolis sign and periodic-background idealization are explicit. Countable Choice and iterated Lebesgue conventions are carried only into the actual energy deduction.',
 44:'The local residual and vector Holder argument and consumer are sound. The outside bibliography mismatch is documented without original edits; the local Axler locator now matches the actually retrieved edition and exact used theorem.',
 45:'Field types, domains, smoothness, positive viscosity and the periodic-pressure requirement are explicit, with all four alternatives and open-status caveats preserved.',
 46:'Keep the approved fd-bl01 to fd-l01 contextual reading prerequisite. The bounded-wall proof is proved separately; exact root/real-completeness, vector Cauchy-Schwarz and capillary suppliers are declared and the full46/47 consumer closure checked.',
 47:'Formal amplitudes remain unrestricted; optional actual surface geometry is parameterized by sufficiently small epsilon on compact windows. Reflection extension reconciles exact stated regularity, and vertical ODE/root/mode proofs and full consumer closure are retained.'
};
const evidence=[],receipts=[];
for(const b of Object.keys(reasons)){
 const name=['15','16'].includes(b)?'batches-15-16-resolution.json':`batch-${b}-resolution.json`,path=`${base}/${name}`;if(!existsSync(path))throw Error('Missing scientific resolution '+b);
 evidence.push({batch:b,path,sha256:createHash('sha256').update(rf(path)).digest('hex')});if(loopState(process.cwd(),run,b).phase!=='held')throw Error('Unexpected owner boundary '+b);
}
for(const b of Object.keys(reasons)){const name=['15','16'].includes(b)?'batches-15-16-resolution.json':`batch-${b}-resolution.json`;receipts.push(resolveOwner(process.cwd(),run,b,{decision:'accept',reviewer:'/root',reason:`Root resolves the drained owner escalation using ${base}/${name}. ${reasons[b]} Current305-item/94-page manifests, exact proof/Fact contracts, individualized boundary dispositions and authoring readiness are integrated; later independent review and ordinary native gates remain required. Final104 freshness evidence is ${freshnessPath}.`}));}
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),resolved_batches:receipts.length,scientific_evidence:evidence,final_consumer_freshness:{path:freshnessPath,sha256:createHash('sha256').update(rf(freshnessPath)).digest('hex')},receipts,complete:true,engine_review_counters_reset:false,additional_engine_reviews_dispatched:0,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({owner_resolved:receipts.length,gates_attempted:0,native_reviews_added:0}));
