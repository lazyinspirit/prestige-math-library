# Step 3a adjudication — batch 7

Run: `non-ml-math-remaining-81-2026-10-18`. Group: `batch-7`. Scope group remains `n`.

Current outcome: 3/3 dispatched decisions authored; both touched carriers have final `amended_repair` verdicts and the refuter citation finding is `confirmed_fatal`, repaired. All 15 HIGH/CRITICAL risk reviews are complete and focused checks pass. One additional, fully repaired nonfatal risk finding needs owner/engine routing for native decision ownership; no mathematical blocker remains. No judge, stamp or gate cycle was initiated.

Read dispatch, scope, reader report/findings, refuter report, pre/post hash inventories, repository schema/workflow and Alpha brief. Initial risk-report: 19 items, 15 HIGH/CRITICAL, zero errors. Review follows generated dependency order.

## Completed item reviews

### lem-convex-generator-boundary-limits-exist

Checked every step against convexity and the complete ordered real field. Secant inequalities give finite local Lipschitz bounds, hence continuity. The left endpoint slope has an infimum in R union {-infinity}, producing f(0) in R union {+infinity}; normalized slopes at 1 are increasing and bounded below for t>=2, giving recession in the same range. Affine/constant generators and infinite endpoint limits are covered; no AC or -infinity arithmetic is used. No reader/refuter finding applies.

### lem-finite-kl-generator-is-admissible

Checked all three steps and exact calculus supplier statements: difference quotients give identity/constant derivatives, product and sum rules give log(t)+1 and 1/t on the open positive interval, and the nonnegative second derivative criterion applies. Substitution s=1/t and the alpha=1 logarithmic growth theorem give the zero limit; increasing surjective log gives infinite recession. Reader added def-derivative and explicit elementary calculations without changing the claim; accepted as prerequisite clarification, no mathematical defect. No AC or log(0) is used.

Exact prerequisites opened: convexity definition; real-number definition; ordered-field and LUB-completeness statements; complete-ordered-field definition; logarithm definition/laws/derivative/growth statements; derivative definition, derivative algebra, second derivative convexity criterion. No outside or published defect identified.

Next: remaining level-0 Renyi generators, then level-1 definitions and routed citation finding.

### lem-finite-renyi-generators-are-convex

Reviewed every step with positive-base power, power derivative, logarithm, exponential, reciprocal and convexity suppliers. Both second derivatives are strictly positive in their separate exponent ranges. Positive powers tend to zero at zero and infinity at infinity; h/t has infinite recession for alpha>1, while |g/t|<=t^{alpha-1} tends to zero for 0<alpha<1. Alpha=0,1 are explicitly excluded; no undefined zero or negative-base powers are evaluated. No AC or routed finding applies.

### def-finite-f-divergence

Checked the full Definition against the finite probability-vector and boundary-limit suppliers, and Sason-Verdu II-B (33)-(37). All positive-q terms are finite or +infinity, never -infinity; finitely many negative finite summands cause no undefined extended sum. The zero-zero coordinate is omitted and a zero total singular mass times infinite recession is defined as zero. f(0) and recession contributions are distinguished, including affine generators with negative boundary/recession values. No full-support hypothesis or AC is required.

Sources opened: https://arxiv.org/pdf/1508.00335 §II-B (33)–(43), PDF indices 7–8 (printed pp. 8–9), confirming zero and recession terms. Power/exponential supplier Statements were read exactly. Next: complete beta source disposition before level 2.

### def-finite-hypothesis-testing-beta

Reviewed the complete Definition and every actual finite-space, randomized-test, size/power, expectation and complete-real prerequisite. P is null, phi is rejection, so type-I is E_P phi and type-II is E_Q(1-phi); PW Definition 14.1 uses acceptance budget 1-epsilon. Feasible phi=0 and bounded objectives give a real infimum without compactness or choice. At epsilon=1 phi=1 gives zero; at epsilon=0 rejection on P-null coordinates is permitted. Oxford 10.1 reverses error labels: restrict its citation to 13.1.1/Definition 13.1, whose rejection/size/power conventions are correct. No mathematical definition or consumer interface changes.

Verdicts: touched beta `amended_repair`; `refuter:7:1` `confirmed_fatal` (citation accuracy, not a false testing formula). Repair confidence 1. Oxford PDF indices 59 and 76–77, printed pp. 59 and 76–77: §10.1 reverses the error labels, while §13.1.1 and Definition 13.1 give the correct rejection/size/power convention. Reader title correction identifies the work correctly but retains the defective locator. Replaced it with §13.1.1, Definition 13.1 in item and manifest. The refuter cited PDF p.58; the erroneous sentence is actually at index/printed p.59. PW §14.1, Definition 14.1 (PDF indices 250–251, printed pp.230–231) independently fixes the beta orientation. No body change; no consumer repair required.

Historical comparison: KL exact owner-step2 baseline raw c2ba366ce81153dd54979453f430ebd58b8eeabe4b934237833dd470544ebd5d equals pre inventory; current reader-post cb3aa598141992ff760d926380d12f5159500cd97c347bf6a7ed48e685bc7b99 equals post. Delta: def-derivative/F2/Proof1.1 clarification and reflow only; reader proof accepted mathematically; final `amended_repair` because Alpha synchronizes supporting metadata, nonfatal citation prerequisite omission, confidence 1. Manifest def-derivative mirror synchronized here. Beta pre is exactly reconstructed by replacing the reader-post reference title with its old title from the baseline: resulting raw 474b21ba3a4b1c24f8b29bf4939ca96d313aea5ee4ce8d166383b180689653fb equals pre inventory; reader-post cffcee63eee9add051e95d4d36a4c8917dff9bd356090db46a29672de1c7c567 equals post. Thus reader delta is solely reference-title correction; the older step2 baseline has a different hash and is not claimed as the pre-reader carrier. No historical uncertainty inferred.

Next: level-2 perspective and binary threshold.

### lem-convex-perspective-is-subadditive

Checked all three steps and exact finite Jensen supplier. Empty family and B=0 give equality, including A=0 and finite negative/infinite recession. For B>0 and no singular pair, Jensen weights b_i/B sum to one; finite f(0) extends convexity by a one-sided limit, and infinite f(0) makes an included zero-ratio term trivially dominate. For a positive singular a_i, infinite recession is immediate; otherwise eta-regularization has positive A/B and all limits are finite, giving the inequality. Zero-zero pairs are omitted. No -infinity summand, undefined cancellation or AC occurs. The extension argument in 1.2 also justifies endpoint Jensen in 2.1; no substantial gap.

### ex-binary-neyman-pearson-randomized-threshold

Reviewed complete Verification and exact finite testing suppliers. Candidate (1/4,1) is admissible, with null rejection 1/2 and alternative acceptance 1/4. The cases u<=1/4 and u>1/4 exhaust all cube-constrained feasible tests and bound power by 3/4, proving global optimality without an external Neyman-Pearson theorem or AC. The q/p ratios 1/2 and 2 give rejection at b and randomization at a; direction matches the beta definition. Endpoints of the test cube are valid.

No level-2 repairs. Exact finite Jensen Statement opened, including N>=1, convex domain, and zero weights. Next: level-3 iid concentration and f-data processing.

### lem-finite-iid-log-likelihood-concentrates

Read both proof steps and all six actual suppliers. P<<Q ensures every positive-P log ratio is finite; assigning ell=0 off support avoids undefined logs. Product normalization and logarithm laws give the exact Q^n=P^n exp(-L_n) identity on P-support. The finite product expectation factors cross terms to zero, including n=1 (no cross terms), and square expansion gives sigma^2/n. The pointwise squared-indicator bound proves convergence without importing Chebyshev or an unproved LLN. Sigma=0 and one-point support are covered. No infinite moment, general product-space construction or AC is needed.

### thm-finite-f-divergence-data-processing

Reviewed both steps against the current finite kernel, f-divergence and perspective lemma. Output laws normalize by finite row sums. Apply subadditivity per y, then homogeneity per x; homogeneity follows directly from all four defining cases, with lambda=0 interpreted as Pi(0,0)=0. Each row has a positive coefficient, so an infinite perspective remains infinite after summing; finite negative values also obey the row-sum identity. Summation contains no -infinity and hence no undefined cancellation. Zero output masses, singular supports, deterministic kernels and singleton alphabets are covered without full support or AC.

KL and stochastic-kernel Definitions opened as actual suppliers: natural logarithm, singular KL=+infinity, zero contributions, nonnegative normalized rows and finite pushforward sums are compatible. No repair. Next: level-4 corollaries, limit, exponent and examples.

### thm-finite-kullback-leibler-data-processing

Read both steps and all actual suppliers. The convex t log t generator gives the finite positive-ratio terms, zero when p=0, and +infinity for positive p at zero q, exactly matching the local directed KL definition. This identification holds for output probability vectors too, and common-kernel f-data processing applies without support assumptions. Zero rows/coordinates and singular input are covered, no undefined log evaluated and no choice used.

### thm-finite-renyi-data-processing

Reviewed all four steps with the current affinity definition and both proved generators. For alpha>1, singular input gives an immediate infinite upper bound; under P<<Q the nonnegative common kernel preserves absolute continuity, and D_h=S_alpha-1 on both input/output. The positive finite affinities permit increasing log and division by alpha-1>0. For 0<alpha<1, D_g=1-S_alpha even with singular mass because recession is zero; data processing increases affinity. A zero input affinity gives infinite divergence, otherwise both affinities are positive and division by alpha-1<0 reverses the log inequality. Alpha=1 is explicitly excluded, with KL handled separately. No AC.

Rényi Definition opened: only positive orders other than one define the displayed affinity; order one defines divergence as KL. Next: clarify the auxiliary affinity notation in limit Proof 1.1, inspect chain-rule hypothesis and finish its risk review.

### thm-finite-renyi-limit-is-kullback-leibler

Checked every step, the actual positive-base exponent derivative, finite derivative algebra, chain rule and logarithm derivative suppliers. Under P<<Q the corrected auxiliary S(h)=sum p_x(p_x/q_x)^h is defined and positive for every real h; its S(0)=1 and derivative give the two-sided order-one limit on 0<|h|<1. This corrects using the order-restricted affinity symbol at undefined orders, including order one. With singular mass, s=P(q>0)<1: s=0 gives identically infinite divergence below one; 0<s<1 gives log S tending to a negative number divided by a negative vanishing denominator. Above one the divergence is infinite by definition. Zero p terms are omitted, no zero powers or full-support hypothesis or AC is used. Statement unchanged; no consumer repair required.

Risk review found a local notation/domain defect: old Proof 1.1 wrote S_{1+h} for every real h and S_1, although the Definition only introduces S_alpha for positive alpha other than one. Defined S(h) explicitly instead, matching the original affinity only for 0<|h|<1. This is a nonfatal local well-formedness repair (the finite extension was immediate), confidence 1; contract derivation updated, no prior judge record existed. No additional routed decision is invented for this untouched/unflagged risk carrier; its repair disposition and defect reference are recorded in its risk_review. Owner routing is required for a native 3a decision for this newly discovered defect (see handoff below). Exact chain-rule Statement opened: inner domain R, outer domain (0,infinity), image positive, 0 and 1 both limit points, so all hypotheses apply. Next: finish exponent and binary examples.

### thm-kl-is-iid-type-ii-error-exponent

Checked all four steps, the finite beta orientation and the independently reviewed concentration lemma. Singular mass r>0 gives Q-zero acceptance event of seeing a singular symbol, null rejection (1-r)^n tending to zero, hence beta=0 eventually; r=1 is also covered. Under P<<Q, lower threshold acceptance on P-support has P-mass tending to one and Q-mass <=exp[-n(D-delta)]. For every randomized feasible acceptance function psi, upper-threshold restriction bounds Q expectation below by exp[-n(D+delta)](1-epsilon-P(B_n^c)); nonnegative Q mass outside P-support can only increase it. The final factor tends to 1-epsilon>0, uniformly in psi, licensing infimum and logs and matching liminf/limsup. Epsilon endpoints are explicitly excluded; P=Q and zero variance are valid. No optimizer existence, NP lemma or AC is invoked.

### ex-binary-f-and-renyi-divergences

Verified all five steps against exact finite divergence, log and absolute-value suppliers. Directed KL is (1/2)log 3 in both directions by these symmetric coordinates. Half-order affinity sqrt(3)/2 gives log(4/3); second-order affinity 7/3 gives log(7/3). Triangle inequality and nonnegative scalar homogeneity prove convexity of |t-1|/2 for every s in [0,1], including endpoints, and direct substitution gives TV=1/2. Positive coordinates keep every ratio/log/power within domain; no general norm fact or AC is assumed.

### ex-disjoint-support-f-and-renyi-divergences

Checked all four steps and exact boundary definitions. Triangle inequality proves admissibility of |t-1|/2; one-sided formula gives f(0)=1/2 and recession=1/2, so the two distinct support contributions sum to 1. Both KL directions are infinite. For 0<alpha<1 only q-positive term has p=0, so affinity zero gives infinite divergence under the explicit logarithmic convention. For alpha>1 positive p at zero q gives infinity; alpha=1 is KL. Zero-zero coordinates and 0^0 are never evaluated. All results use finite arithmetic and no AC.

All 15 HIGH/CRITICAL current carriers and all actual cited prerequisite statements have now been independently reviewed, in generated order. The four additional ordinary/moderate local definitions were opened as suppliers. No further repairs, outside-owner alerts, published defects, missing prerequisite or AC use found. Next: source locator confirmation, final evidence/decisions and focused checks.

## Source evidence and prerequisite scope

- [Deligiannidis, Foundations of Statistical Inference](https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf): title/author on PDF index 0; §10.1 incorrect error-label sentence at index/printed p.59; complete relevant §13.1.1 and Definition 13.1 at indices 76–77. These independently establish the source defect and corrected locator.
- [Polyanskiy–Wu, Information Theory: From Coding to Learning](https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf): Definition 7.1, (7.1)–(7.2), PDF index 108 (printed p.88); Theorem 7.4 at index 113 (p.93); Definition 7.22 at index 136 (p.116). Definition 14.1, (14.2)–(14.3), indices 250–251 (pp.230–231) sets the acceptance-budget convention. Theorem 14.13 and complete proof, indices 260–261 (pp.240–241), includes threshold achievability, strong converse, and the singular event. Local finite proofs establish the needed conclusions directly; no general measure-theoretic supplier is silently imported.
- [van Erven–Harremoës, Rényi Divergence and Kullback-Leibler Divergence](https://arxiv.org/pdf/1206.2459): §I-A (1), §II-A Definition 2, §II-B Theorem 1/Example 2 and proof, §II-C Theorem 5 and complete proof at PDF indices 5–6. The right limit requires infinite KL or some finite order above one; the latter holds automatically for finite P<<Q. Singular finite laws meet the former case. Local proof uses a positive finite sum, not an unproved general continuity assertion.
- [Sason–Verdú, f-Divergence Inequalities](https://arxiv.org/pdf/1508.00335): §II-B Definition 3, (33)–(39), and relative-entropy example (41)–(43), PDF indices 7–8 (printed pp.8–9). These confirm the separate zero-coordinate and recession terms.

Every cited current local supplier Statement/Definition needed for the 19 carriers was opened; this was prerequisite-interface review, not an independent audit of all transitive published proofs. Both owned pages were opened and are consistent with the local finite statements. No page-only decision is owed. The inherited page-route resolution and cross-batch records remain intact. Added the actual def-derivative consumer edge to batch-7 cross-batch records and maintained the run/batch note in `briefs/tasks/frontier-dependency-ledger.md`. No published carrier was edited or found defective; no published-ledger change, outside consumer alert or withdrawal is needed.

## Final decisions and checks

Exactly three dispatched decisions are in the task-named JSON: two touched `amended_repair` entries and `refuter:7:1` with route `flagged`, verdict `confirmed_fatal`. The beta decisions explicitly share one defect. All completed repairs have confidence 1. Closed rows: `non-ml-math-remaining-81-2026-10-18-3a-b7-kl-derivative`, `non-ml-math-remaining-81-2026-10-18-3a-b7-beta-source`, and the separately reported risk finding `non-ml-math-remaining-81-2026-10-18-3a-b7-affinity-domain`.

- Reflow: beta unchanged; Rényi-limit proof reflowed. No mathematical edits after final reflow.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-finite-hypothesis-testing-beta.md items/lem-finite-kl-generator-is-admissible.md`: one proof checked, zero failures; beta has no phase proof. Separate precheck of the Rényi-limit theorem: one proof checked, zero failures.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-7.proof-contracts.json --strict`: 19/19, zero errors/warnings. Initial attempt exposed only missing literal `\;` spacing in the reader's def-derivative quotation; corrected to the exact source paragraph, without a mechanical-failure defect row.
- Risk report ran initially without `--require-reviewed` and finally with it: 19 carriers, all 15 required reviews complete, zero errors.
- Renderer on beta, KL-generator and Rényi-limit: three files, zero errors; actual YAML and KaTeX parse succeeded.
- Final item-layout command: `node tools/proof-layout.mjs items/def-finite-hypothesis-testing-beta.md items/lem-finite-kl-generator-is-admissible.md items/thm-finite-renyi-limit-is-kullback-leibler.md`: three items, six proof steps, zero defects. This includes both newly edited items and the accepted reader proof.
- Focused JSON/ledger consistency: exactly 3/3 dispatched obligations, no duplicates or extras, all referenced rows closed. The canonical sorted reader-post carrier fingerprint equals refuter observed fingerprint `f5833c1b85b3f04b1da68a90b50b77f3220b75afd81d58600999884f15c87b5a`. Three-row ledger validation: zero errors.
- Live read-only status confirmed this run remains at Step 3a; no state transition requested. No full engine gate, decision stamping, judge call, publication or commit performed.

## Owner handoff: additional risk finding needs decision routing

The mathematics is repaired and every risk review is complete. The dispatched inventory owes no touched/reader/refuter decision for `thm-finite-renyi-limit-is-kullback-leibler`; Alpha nevertheless found and repaired its local affinity-domain notation defect during the mandatory risk review. Its contract risk_review records `amended_repair`, confidence 1 and the closed defect ID. Per the instruction to decide exactly routed obligations, the decisions file contains only the three dispatched obligations.

The owner/engine must route a supplemental decision for closed row `non-ml-math-remaining-81-2026-10-18-3a-b7-affinity-domain` before native closure. `tools/step3-scope.mjs` requires a native decision reference for every owned 3a defect row; a report/risk_review reference alone does not satisfy that gate. Available native supplemental carrier is `gate:non-ml-math-remaining-81-2026-10-18-3a-b7-affinity-domain`, route `gate`, subject `thm-finite-renyi-limit-is-kullback-leibler`, proposed verdict `confirmed_nonfatal`, confidence 1, referencing exactly that row. This is a routing request, not an assertion that a gate failed or an invented mechanical defect. Owner may route it back to this adjudicator; no substantial mathematical prerequisite or further source repair is pending. Preserve this closed repair and the original three obligations when routing.
