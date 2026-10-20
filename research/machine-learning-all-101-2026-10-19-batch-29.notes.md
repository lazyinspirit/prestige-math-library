# Batch 29 — authoring and evidence record

Run: `machine-learning-all-101-2026-10-19`  
Pair: `ml02-private-learning`  
A page: `ml02-private-learning`  
B page: `ml02-private-learning-examples`  
Batch dependency level: 2; prerequisite batches: 3 and 28  
Dispatch scheduling input: `c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4`

## Planning reconciliation

The current ML-28 design in `research/plan-machine-learning-track.md` and the matching `plan-spec.json` page description agree on the four proposed main items, finite-class agnostic ERM scope, online loss protocol, exact regret claims, and source route. The plan-spec prose preserves the owner correction in `research/machine-learning-all-101-2026-10-19-owner-privacy-composition-repair/ml28-planning-correction.md`: the full-transcript privacy choice is
`min{epsilon/sqrt(32 T ln(1/delta)), 1/2, sqrt(epsilon/(16 T))}`; the exact high-probability term uses the maximum of the three reciprocal caps; the original unrestricted big-O simplification is rejected. The privacy input is a fixed loss sequence with one whole-vector replacement. Regret permits earlier-transcript adaptation only when the current loss vector is fixed before the fresh action draw. The generic interactive-strategy extension requires the ordered per-round kernel inequalities at every common history.

No substantive plan/spec conflict was found. The task's design locator says line 270 while the current heading begins at line 271; the complete section was read. The plan-spec description includes digest `56d0af245eb83466ff732c53cc9ed87015121a9a56cbbc4e744fffea7af72d36`, while the current whole-file digest is `e0b139460972f1a07b1d984dd3a4389c73611df73f66db7989e3ec41112caddf`; this is recorded as a digest-scope difference, not a mathematical-content disagreement. The original page scaffold had empty item arrays; this batch fills the inventory before carrier authoring.

Historical batch evidence has two status statements superseded by current carriers. The batch-3 dependency-inputs file says `thm-finite-class-uniform-deviation` lacks an audit/verified marker; the current published carrier has `verification.verified` dated 2026-10-19, and its current-run Step-1 record is ready. The batch-28 notes say the arbitrary-output advanced-composition theorem remains escalated; its actual current item has a ready Step-1 record dated 2026-10-18 and a complete proof in the current carrier. Both readiness records will be rechecked through the ordinary full-run snapshot before any final decision.

The active run status was read from `.autopilot/machine-learning-all-101-2026-10-19`: Step 1 is held for owner repair, batch 29 is uncovered, and no workers are in flight. No run state, shared plan, or verdict is changed in this authoring work.

## Item inventory and dependency levels

| Item | Claim/interface | Direct in-run suppliers | Level |
|---|---|---|---:|
| `alg-private-randomized-weighted-majority` | Full-information exponential weights over (k) actions | none | 0 |
| `alg-private-finite-class-erm` | Finite binary-class selector using the conservative (1/n) score-sensitivity scale | none | 0 |
| `thm-private-online-learning-regret-under-composition` | Nonanticipating expected/high-probability regret and fixed-sequence replacement privacy | `thm-advanced-adaptive-composition-arbitrary-measurable-outputs` (batch 28, level 2) | 3 |
| `thm-private-erm-excess-risk` | Pure privacy, exact finite-range utility tail, and agnostic excess-risk/sample-size bound | `def-differential-privacy-and-adjacency` (batch 28, level 0); `thm-finite-class-agnostic-erm-bound` (batch 3, level 5) | 6 |
| `ex-online-one-round-replacement` | Two-action, three-round replacement witness | online algorithm and theorem | 4 |
| `ex-private-threshold-class-erm` | Four-threshold finite-class calculation | private ERM algorithm and theorem | 7 |
| `ex-private-erm-large-finite-class` | Direct-enumeration cost for all Boolean functions on (d) bits | private ERM algorithm and theorem | 7 |

The online ERM uses the plan's conservative (1/n) upper bound directly. Its pairwise sensitivity and exponential-weight privacy/utility inequalities are proved locally, so no exact-attainment assertion or generic mechanism statement beyond the checked event-inequality definition is needed. The online theorem carries AC for both the arbitrary-output advanced-composition supplier and Azuma–Hoeffding.

## Sources and reading

Read complete relevant passages in these full-text sources; local proofs remain complete and carry every current hypothesis:

- Cynthia Dwork and Aaron Roth, *The Algorithmic Foundations of Differential Privacy*, Harvard-hosted PDF: `https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf`. Read Chapter 3 §3.4 (printed pp. 36–41), Chapter 3 §3.5.1 (pp. 44–51), and Chapter 11 §§11.1–11.2 (pp. 219–226). The online-learning section states Theorems 11.1–11.4 and gives the exponential-mechanism/composition route; it does not supply a separate full proof of every listed theorem. The local potential, martingale, per-round privacy, and cap checks supply those arguments. The source's simpler eta prescription and big-O summary are not imported beyond the stated valid region.
- Salil Vadhan, *The Complexity of Differential Privacy*, author-hosted full manuscript: `https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf`. Read §2.2 (PDF pp. 14–17) and §4.2 Proposition 4.2 (pp. 33–34). The finite-score proposition permits a sensitivity upper bound; its utility statement is asymptotic, so the batch-29 proof derives its exact finite-range tail. The advanced-composition argument is explicitly a sketch and is not substituted for the current arbitrary-measurable-output supplier proof.
- Shai Shalev-Shwartz and Shai Ben-David, *Understanding Machine Learning: From Theory to Algorithms*, full PDF: `https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf`. Read Chapter 4 §4.2 and Corollary 4.6 (printed pp. 54–57), including its finite-class union-bound, Hoeffding, uniform-convergence, and ERM comparison argument. This is the independent book treatment for the statistical component.

The upstream batch-3 `Mohri et al.` Dropbox URL returned a web-reader fetch error during candidate inspection. The accessible Shalev-Shwartz/Ben-David book and the actual current batch-3 theorem provide the full independent statistical treatment; no claim depends on the unavailable reader path. Source-fetch stamps, byte hashes, locators, harvested results, and dispositions will be recorded in the batch coverage/evidence artifacts.

## Current checkpoints

- Manifest inventory and planned levels are recorded above and in the batch pages manifest. No item carrier was written before those levels were assigned.
- At the initial scaffold review these obligations were pending; their completed work and the remaining blockers are recorded in the final sections below.

### `alg-private-randomized-weighted-majority` — authored

- Claim/convention: for finite k and T, the full-information procedure samples each action from its normalized cumulative exponential weights before observing the current full loss vector, then updates the weights.
- Dependencies: `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, finite-space/kernel definitions, and the finite probability-kernel interface; no in-run suppliers, level 0.
- Source read: Dwork–Roth, Algorithm 15 and Algorithm 16, printed pp. 223–225; the full-text URL and author reading scope are recorded above.
- Validation: scoped precheck passes. Its first pass requested canonical phase relabeling from step 1.2 to step 2.1; the change was adopted and the final item precheck passes. Pair-wide gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Step-1 decision: ready; the final owner=false record and current item hash were verified below.
- Next: see final scoped checks and readiness decisions below.

### `alg-private-finite-class-erm` — authored

- Claim/convention: finite nonempty measurable binary classes; empirical error is the sample average of zero-one loss; the exponential weights use the conservative upper-bound scale (1/n). The definition covers both ordered statistical samples and the permutation-invariant finite-record database view.
- Dependencies: measurable spaces/rectangles, finite product sigma-algebra, real exponential, finite probability and kernel definitions, measurability of finite arithmetic/composition/thresholds; all are published external suppliers, so level 0. No choice axiom.
- Sources read: Dwork–Roth, Chapter 3 §3.4 and Chapter 11 §11.1; Vadhan, §4.2 Proposition 4.2. Their sensitivity-bound mechanism and utility statements support the design; the next theorem supplies the complete local privacy, utility, and statistical argument.
- Validation: scoped precheck passes with two explicit well-definedness steps. Pair-wide gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Step-1 decision: ready; the final owner=false record and current item hash were verified below.
- Next: see final scoped checks and readiness decisions below.

### thm-private-online-learning-regret-under-composition — authored at level 3

- Exact claim/conventions: nonanticipating full-information losses fixed before the fresh current draw; expected average regret \(\eta+\ln(k)/(\eta T)\) for every \(\eta>0\); AC-qualified Azuma tail with the exact \(\sqrt{\ln(1/\beta)/(2T)}\) term; fixed-sequence whole-vector replacement gives round kernels \((2\eta,0)\)-DP; the three-cap choice gives transcript \((\varepsilon,\delta)\)-DP and preserves both the exact maximum-form regret expression and the source-choice region \(\varepsilon\le\sqrt{8TL}\), \(\varepsilon\le2L\). The interactive extension is conditional on both ordered kernel inequalities at every common history. \(k=1\) is treated separately.
- Dependencies: local alg-private-randomized-weighted-majority; published lem-qa-30-exp-quadratic-bound, logarithm/exponential facts, filtration/conditional expectation/MDS and Azuma; batch-28 thm-advanced-adaptive-composition-arbitrary-measurable-outputs; def-axiom-of-choice. The composition supplier body and current Step-1 record were inspected and found ready; its arbitrary symmetric-adjacency and measurable-output hypotheses cover finite loss-sequence replacement. Highest in-run supplier level is 2, so this item is level 3.
- Proof/source evidence: the local proof separately derives the potential inequality, pathwise pseudo-regret, conditional martingale increment, predictable interval tail, per-round ordered event ratios, every composition cap, exact reciprocal maximum, and the two eta-region equivalences. Dwork–Roth, Chapter 11 §11.2, printed pp. 222–226, full text: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf; Vadhan, §2.2, full manuscript: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf. Full relevant proof passages were read earlier and are recorded in Sources and reading above.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/thm-private-online-learning-regret-under-composition.md passes. Initial precheck requested canonical layer numbering; adopted its dependency order (potential and one-round ratio, then pathwise potential and composition, then expected/tail, then cap specialization); final precheck passes. Batch-level gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Decision: ready; the final owner=false record and current item hash were verified below.
- Unresolved obligations: no unavailable supplier blocks this theorem. AC remains explicitly required only for Azuma and advanced composition; do not merge fixed-input privacy and adaptive-loss regret into one adversary quantifier.
- Next: owner reconciliation of the stale batch-3 agnostic ERM readiness record; local item proof and escalation are complete.

### thm-private-erm-excess-risk — authored at level 6; supplier reconciliation required

- Exact claim/conventions: finite nonempty measurable binary class; finite-support labeled record-count databases with add/remove neighbors restricted so both sizes are at least \(n\); empirical zero-one loss counts multiplicity and divides by the current database size. The algorithm uses the conservative \(1/n\) sensitivity upper bound and weights \(\exp(-\varepsilon n\widehat L/2)\). The statistical branch uses exactly \(n\) IID examples from any joint law, a joint sample/selector probability, the finite-class agnostic deviation event, and the displayed \(\ln(4/\beta)\), \(\ln(2/\beta)\) utility/risk constants. The 24 sample-size constant is proved from \(Q=\ln|\mathcal C|+\ln(1/\beta)\); singleton classes have zero excess.
- Dependencies: local alg-private-finite-class-erm; batch-28 def-differential-privacy-and-adjacency; batch-3 thm-finite-class-agnostic-erm-bound; published exponential positivity/monotonicity/addition, natural-log and probability union-bound suppliers. Dependency level is 6 because the batch-3 agnostic theorem is level 5 (and batch-28 DP definition is level 0). Current agnostic supplier body was re-read: its Statement provides the choice-free two-sided finite-class deviation event and its full proof; current Step-1 decision is nevertheless stale with exact closure reason “Item or dependency changed; record current readiness.” Its dependency sidecar must stay open, and this theorem must be escalated without altering or recertifying that supplier.
- Proof/source evidence: local proof derives the restricted-domain pairwise add/remove sensitivity formula, both ordered normalized-weight ratios, pure DP, the finite-range utility tail, two-event probability allocation, excess-risk decomposition, and sample-size constant. Dwork–Roth, Definition 3.4 and Chapter 11 §11.1, printed pp. 36–41 and 219–221, full text: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf. Shalev-Shwartz–Ben-David, Chapter 4 §4.2 and Corollary 4.6, printed pp. 54–57, full book: https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf. Full passages were read earlier and the current finite-class agnostic supplier body has now been inspected again.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/thm-private-erm-excess-risk.md passes. Those pair gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Decision: escalated; the final owner=false record and current item hash were verified below. The in-run finite-class agnostic proof body is a drafting interface, not current approval.
- Unresolved obligations: owner reconciliation of thm-finite-class-agnostic-erm-bound readiness; no correction to that other pair is authorized here. Keep its sidecar row open. The local derivation does not rely on its ERM-selection clause, only the stated deviation event.
- Next: owner reconciliation of the stale batch-3 agnostic ERM readiness record; the examples and pair evidence are complete.

### ex-online-one-round-replacement — authored at level 4

- Exact example: with \(k=2,T=3,\eta>0\), replacing the second loss vector \((0,0)\) by \((1,0)\) leaves the first two action kernels uniform and changes the third weights from \((1,1)\) to \((e^{-\eta},1)\); the event-\(\{1\}\) probability ratio is \((1+e^\eta)/2\). This is only a per-round kernel calculation, not a transcript-privacy counterexample.
- Dependencies: alg-private-randomized-weighted-majority at level 0 and thm-private-online-learning-regret-under-composition at level 3; correct level 4.
- Evidence: Dwork–Roth, Chapter 11 §11.2, printed pp. 222–226; URL and full-text reading are recorded in Sources and reading above.
- Validation: scoped precheck passes. Those pair gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Decision: ready; the final owner=false record and current item hash were verified below.
- Unresolved obligations: none specific to the example; the online theorem's AC condition applies only if invoking its transcript composition conclusion.
- Next: see the recorded ERM supplier escalation and final scoped checks below.

### ex-private-threshold-class-erm — authored at level 7

- Exact example: on discrete \(\{0,1,2\}\), the four thresholds \(h_r(x)=1\{x\ge r\}\), \(r=0,1,2,3\), and \(D=\{(0,0),(1,1),(2,0)\}\) have empirical risks \((2/3,1/3,2/3,1/3)\) at \(n=3\). For \(\varepsilon>0\), weights are \((e^{-\varepsilon},e^{-\varepsilon/2},e^{-\varepsilon},e^{-\varepsilon/2})\), with exact normalized probabilities derived in the Verification.
- Dependencies: alg-private-finite-class-erm at level 0 and thm-private-erm-excess-risk at level 6; correct level 7. The latter consumes stale batch-3 readiness and is escalated.
- Evidence: Dwork–Roth, Chapter 11 §11.1; Shalev-Shwartz–Ben-David, Chapter 4 §4.2. URLs and complete relevant source passages are recorded above.
- Validation: scoped precheck passes. Those pair gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Decision: escalated; the final owner=false record and current item hash were verified below, pending thm-finite-class-agnostic-erm-bound readiness reconciliation.
- Unresolved obligations: batch-3 consumer readiness remains open; no supplier edits authorized.
- Next: owner reconciliation of the batch-3 readiness record; the example is complete and escalated.

### ex-private-erm-large-finite-class — authored at level 7

- Exact example: on \(\{0,1\}^d\), \(d\ge1\), the class of every Boolean map has \(2^{2^d}\) members and log-cardinality \(2^d\ln2\). The private theorem's sufficient sample-size expression is specialized exactly; direct exhaustive risk evaluation costs \(m2^{2^d}\) loss evaluations, stated only as the cost of that implementation, not as a general lower bound.
- Dependencies: alg-private-finite-class-erm at level 0 and thm-private-erm-excess-risk at level 6; correct level 7. The latter's stale batch-3 agnostic readiness record forces escalation.
- Evidence: Dwork–Roth, Chapter 11 §11.1; Shalev-Shwartz–Ben-David, Chapter 4 §4.2. URLs and full relevant source passages are recorded above.
- Validation: scoped precheck passes. Those pair gates were pending at this item checkpoint; see Final scoped checks and readiness decisions below.
- Decision: escalated; the final owner=false record and current item hash were verified below, pending thm-finite-class-agnostic-erm-bound readiness reconciliation.
- Unresolved obligations: do not claim computational lower bounds or edit batch-3 supplier records.
- Next: owner reconciliation of the batch-3 readiness record; the pair artifacts and local scoped checks are complete.

## Dependency artifact reconciliation

The dispatch assigns batch 29 dependency level 2, prerequisites 3 and 28, with scheduling-input SHA-256 `c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4`. The current run dependency-level artifact independently lists the same batch level and prerequisites, but its own `input_sha256` is `1d686fe8e9d0c0983909ff0c6ac8d5781f279c08ce6b0f6f718c860efbcd2da7`. I recorded this hash-scope conflict in batch-29 dependency inputs (`scheduling_hash_conflict: true`) without editing the shared artifact or run state. The planned item levels still follow actual direct in-run dependencies.

## Final scoped checks and readiness decisions

The final batch-29 item graph recomputes from the complete run manifest as follows: alg-private-randomized-weighted-majority 0; alg-private-finite-class-erm 0; thm-private-online-learning-regret-under-composition 3 (batch-28 supplier level 2); thm-private-erm-excess-risk 6 (batch-3 supplier level 5); ex-online-one-round-replacement 4; ex-private-threshold-class-erm 7; ex-private-erm-large-finite-class 7. Direct dependency levels and manifests match for all seven items. The full command node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19 exits 1 because 70 unrelated pages still have empty scaffold inventories; there are zero dependency-level errors for any batch-29 item.

Current ordinary supplier readiness was recomputed from the run snapshot. Batch-28 def-differential-privacy-and-adjacency is ready/current (record and current SHA-256 24e9ac47cddef1be1a988233ae2527a959e32cb6e5dcd19524007ac2deb0ecd0). Batch-28 thm-advanced-adaptive-composition-arbitrary-measurable-outputs is ready/current (record and current SHA-256 1d5939ff45551b33f0f4968ebf57a60c48495934ecd1ad4fc1396f445b5ce824; its record is owner-originated but the current hash closes). Batch-3 thm-finite-class-agnostic-erm-bound remains the exact blocker: its ready/owner record SHA-256 is b67e2e3f949986f77bf3be0a8f36715f4db5578b760a159a86774f3ed70a842f, current hash is dc50490c1cc31a9587bcb551d005cba2bc1940482f7476a0804e2fb8e16ba2bf, and ordinary step1Decision returns closed:false, “Item or dependency changed; record current readiness.” Its body and full proof were inspected; do not repair or overwrite it here.

The seven final item records were written with node tools/step1-decisions.mjs record, all with owner=false and exactly their declared dependency IDs:

- **ready:** alg-private-randomized-weighted-majority; alg-private-finite-class-erm; thm-private-online-learning-regret-under-composition; ex-online-one-round-replacement.
- **escalated:** thm-private-erm-excess-risk; ex-private-threshold-class-erm; ex-private-erm-large-finite-class. Each escalation names the stale batch-3 supplier and its exact current-readiness reason; no escalation was overwritten.

Final checks:

- Scoped precheck: 7 items, 0 failures.
- Scoped proof-layout: 7 items, 27 steps, 0 defects.
- Strict proof-contract: 7/7 contracts, 0 errors, 0 warnings. Each numbered step is mapped to its actual claim and inputs, each linked fact has an exact excerpt from the cited supplier section, and all eight boundary axes are classified. No registered finite-smoke check applies to these privacy/ERM calculations; the two finite examples were separately evaluated below.
- Scoped depcheck: 0 errors and 0 warnings for the seven items, both pages, and their dependency closure.
- Rendercheck: 9 assigned item/page files, 0 errors, 0 warnings.
- Content policy: 7 items, 0 errors, 0 warnings.
- Statement-first check using the run-local math policy: all 7 assigned items, 0 defects.
- Page/manifest/carrier consistency: 7 carrier dependency lists and levels match the batch manifest; both assigned pages are frontmatter-only and their item/example inventories match.
- Coverage checklist: 2 pages, 30 harvested results, 0 errors, 0 warnings.
- Source fetch check: 6/6 source entries fetch-verified, 6/6 resolved, no new stamps, no drops. Reused exact prior stamps: Dwork–Roth, 2,202,474 bytes, 281 pages, SHA16 c2b2d0f67fd45768; Vadhan, 1,007,035 bytes, 96 pages, SHA16 685539d267589bd2; Shalev-Shwartz–Ben-David, 2,601,519 bytes, 449 pages, SHA16 c446eabd9212e983.
- Full-run proof-contract-coverage cannot complete because the unrelated frontier manifest has an empty page inventory: distribution-shift-and-domain-adaptation. The assigned strict contract gate independently passes all seven batch-29 items; no other manifest was edited.
- Manual finite calculations: at eta 0.7, the online witness ratio equals (1+exp(eta))/2 (1.5068763537352383); at epsilon 0.8, the threshold risks are (2/3,1/3,2/3,1/3), the derived weights normalize to total probability 1; Boolean-function cardinalities and log-cardinality formula were checked for dimensions 1 through 6.

The online theorem’s final Statement specifies a filtration and conditional action law for nonanticipating losses; its proof phases are 1.1–1.2, 2.1–2.2, 3.1, 4.1 and 5.1, with one final QED. The private ERM proof explicitly averages the fixed-sample utility tail over the sample and proves the finite output law is a measurable kernel on the restricted power-set database domain.

The owner has not been asked to approve publication. Batch-29 page records remain draft; the two required external pages are also draft. The dependency-input hash conflict recorded above remains for reconciliation.

Exact direct dependency IDs after final edits:

- thm-private-online-learning-regret-under-composition: alg-private-randomized-weighted-majority; cor-exponential-reciprocal-and-positivity; def-axiom-of-choice; def-conditional-expectation-given-a-sigma-algebra; def-filtration-and-filtered-probability-space; def-martingale-difference-sequence; def-natural-logarithm; def-real-exponential-function-and-e; lem-qa-30-exp-quadratic-bound; thm-advanced-adaptive-composition-arbitrary-measurable-outputs; thm-azuma-hoeffding-inequality; thm-exponential-addition-formula; thm-exponential-is-strictly-increasing; thm-logarithm-derivative-and-integral; thm-natural-logarithm-laws.
- thm-private-erm-excess-risk: alg-private-finite-class-erm; cor-exponential-reciprocal-and-positivity; def-differential-privacy-and-adjacency; def-natural-logarithm; lem-probability-measure-basic-identities; thm-exponential-addition-formula; thm-exponential-is-strictly-increasing; thm-finite-class-agnostic-erm-bound; thm-natural-logarithm-laws.
- ex-online-one-round-replacement: alg-private-randomized-weighted-majority; thm-private-online-learning-regret-under-composition.
- ex-private-threshold-class-erm and ex-private-erm-large-finite-class: alg-private-finite-class-erm; thm-private-erm-excess-risk.
