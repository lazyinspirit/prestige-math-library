# Batch 70 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-70. Scope: batch 70 only; producer batch 58 read-only. Exactly two routed decisions: reader:70:1 and refuter:70:1; no touched/page obligations. Pre/post batch-70 snapshots have identical item inventories and hashes, hence no reader repair to accept/revert.

## Completed supplier review (level 1)

Reader:70:1 is confirmed_nonfatal. The authenticated original algorithm omits evaluation/retention of phi(0); current procedure explicitly evaluates and retains f(x), gradient, phi(0), and phi-prime(0). Independently checked expansion and zoom Armijo/curvature branches, distinct nonnegative endpoints including reversed order, feasibility checks, finite E/Z budgets, and E=0/Z=0 failures. Initial data are excluded from trial counts. Reviewed current batch-58 manifest (batch-58.pages.json); this algorithm has no phase-proof contract (null), as appropriate for a definition. Current Wolfe definition supplies exactly the used inequalities. Consumer alg-nonlinear-conjugate-gradient-methods still calls the same accepted-step/failure interface; no consumer source repair is needed. Use existing closed row numerical-optimization-dynamics-2026-10-16-3a-batch-58-D01 rather than duplicate this single defect.

Historical limit: observation_basis remains unbound and historical_delta_unknown true. ROOT root-registration.json explicitly authorizes preservation of this historical finding with unknown composite manifest/contract history. The full original source archive is available and its raw digest is 32f1660afa931dea153729a7a17f229b5b1b5a4b0d6797f17c1816cc57bfed29; its source-only binding cannot establish the historical composite carrier. Current-content review does not assert the old omission persists. Scope routing fingerprints, producer_batch=58, consumer_id and dependency_path are retained verbatim in the decision. No escalation was cleared by inference.

## Completed FR descent review (level 3)

lem-fr-descent-and-direction-growth-bound: checked q_0=1, |q_k-1|<=c2*q_(k-1), delta>0 for c2<1/2, geometric upper bound, and norm expansion with C3=1+2c2/(1-c2). Dividing by current gradient norm to the fourth power telescopes the norm bound; k=0 and all denominators use the explicit nonzero-gradient premise. No AC, compactness, bounded-gradient assumption, or full convergence conclusion is used. Current algorithm and Wolfe supplier read; reader/refuter evidence reviewed. No defect or edit.

Next: finish exact-CG induction obligation and its risk review before remaining level-3 items, then level-4 items. Checks pending.

## Completed exact-CG review (level 3)

refuter:70:1 confirmed_nonfatal, repaired with confidence 1. Step 1.2 now explicitly carries matching iterates/residuals through k and directions/accepted step lengths through k-1; step 2.1 no longer claims to close the whole induction prematurely. Steps 3.1/4.1 supply common positive minimizers, Wolfe acceptance and common next iterates/residuals. The published CG recurrence, denominator proposition and full residual-orthogonality proof were read; in the real restriction their hypotheses and conventions match. Checked initial zero residual, each nonzero denominator, exact Armijo sign (c1<1/2), and restriction to unrestarted PR+ or safeguarded runs without restart. Statement/dependencies unchanged; contract derivations synchronized. No existing judge stamp. Row: numerical-optimization-dynamics-2026-10-16-3a-batch-70-D01.

Next: finite-budget and concrete level-3 risk reviews.

## Completed finite-budget review (level 3)

thm-nonlinear-cg-finite-budget-terminates: counted at most K search calls, K(E+Z) trial objective/derivative pairs, K+1 outer gradients. Reviewed complete finite-return lemma, including midpoint positivity and reversed endpoints. Initial search data are excluded; no total gradient bound is asserted. Checked K=0, E=0/Z=0, stationary starts/accepted exits, domain-exit, exhaustion and exact-SPD branch. No repair or extra obligation.

## Completed counterexample review (level 3)

cex-raw-prplus-loses-descent-and-safeguard-restarts: found and repaired an additional claim-direction defect during its required risk review. The old Statement refuted asserted the true non-necessity of descent; its positive ascent witness therefore did not refute that sentence. The corrected universal descent claim (with nonzero new gradient) is exactly refuted by the unchanged witness. Closed row numerical-optimization-dynamics-2026-10-16-3a-batch-70-D02, repair confidence 1. Recomputed SPD square completion (139/140 remaining coefficient), objective -3/10, curvature 2/5<=49/100, beta=57/100, ascent product 29/500, gradient norm squared 17/100 and candidate norm squared 389/10000. The descent safeguard restarts; the norm safeguard alone passes. All item/page consumers searched: only the companion example page refers to this item; its actual ascent/restart description is correct and needs no edit. Generated counterexample provenance, title, witness, dependencies and manifest remain correct. No new routed obligation was invented; this additional defect is recorded under the assigned risk review.

Next: Rosenbrock exact-arithmetic review, then level-4 liminf and SPD example.

## Completed Rosenbrock review (level 3)

ex-rosenbrock-fr-prplus-trace: independently executed exact rational arithmetic for all ten floors, accepted midpoint point/r/objective/gradient/h/G1 and both Wolfe inequalities, FR/PR+ coefficients and ascent product >331. The first nine zoom midpoints fail Armijo, so the tenth is returned for the stated E/Z budgets. Recomputed all t=1/1000 hypothetical decimals and rationals; this is correctly distinguished from the dyadic output. No repair. This computation is a local finite sanity check, not a registered smoke-test or convergence proof. All level-3 risk reviews are complete before level 4.

## Completed level-4 reviews

thm-fletcher-reeves-liminf-gradient-under-strong-wolfe: read all proof steps and full current Zoutendijk/step-length supplier arguments. All lower-bound, uniform segment-Lipschitz, feasible Wolfe and nonzero-gradient hypotheses match. If liminf>0, including infinite liminf, a tail lower bound gamma and finite prefix give S_k<=A0*k for k>=K>=1. Normalized direction growth then gives a positive harmonic lower bound on Zoutendijk summands, a contradiction. No bounded-gradient assumption or full norm convergence is imported; no AC. No repair.

ex-spd-quadratic-nonlinear-cg-matches-linear-cg: exact rational recomputation confirms alpha0=2/3, beta0=1/9, d1=(4/9,-2/9), denominator 8/27, alpha1=3/4 and x2=(1,1/2), zero residual. SPD and c1<c2<1/2 match current repaired supplier, K>=2 permits both steps. No repair.

## Sources and review limits

Opened Nocedal–Wright, Numerical Optimization (2nd ed.), https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf: complete relevant text of Lemma 5.6 (printed pp. 125–126), Theorem 5.7/proof (128–130), FR/PR+ exact-quadratic context (122–124), and Algorithms 3.5–3.6 (60–61). These support the recurrence and source context; local budget modifications are proved locally. Opened Gilbert–Nocedal, https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf: Assumptions 2.1 and Theorem 2.1 (23), Lemma 3.1/proof and Theorem 3.2/proof (26–27). Their bounded level set and consequent bounded-gradient premises were explicitly compared with the local normalized argument, which does not require them. No claim that a finite example establishes convergence. A shell text-extraction attempt failed because pdftotext is unavailable; source review used the web PDF text instead.

Direct used foundational supplier statements read: Euclidean inner product/norm, C1 convention, Jacobian/gradient, energy inner product, Cauchy–Schwarz, chain rule and total-derivative directional identity. Full CG positivity and orthogonality proofs independently reviewed in their real specialization. No foundational transitive closure audit is claimed. No defective published item or new unmet mathematical prerequisite found; published content remains read-only.

All seven required HIGH/CRITICAL risk reviews are complete in batch-70.proof-contracts.json. Validation pending.

## Validation follow-up

Initial strict contract check found two mechanical mismatches: newly cited step 1.1 missing from the induction contract inputs, and Rosenbrock F3 retaining the old producer initialization quote. Added the input and refreshed the owned quote to the current full Definition. Strict check then passed 9/9. No mathematical defect rows were created for either mismatch.

Reflow joined the theorem's soft-wrapped step. Precheck required canonical phase numbering (the preexisting 1.1,1.2,2.1,3.1,4.1 sequence); adopted its 1.1,2.1,3.1,4.1,5.1 numbering with all proof and contract references updated. Earlier report/refuter locators refer to the original numbering: old 1.2 is now 2.1, old 2.1 is now 3.1, old 3.1 is now 4.1 and old 4.1 is now 5.1. No mathematics changed in this numbering repair. Final post-edit checks follow.

## Final local checks and handoff

All following commands ran after the final item edit/renumbering and passed:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-fr-and-raw-prplus-exact-line-search-match-linear-cg.md items/cex-raw-prplus-loses-descent-and-safeguard-restarts.md`: 2 checked, 0 failing, all clean.
- `node tools/rendercheck.mjs items/thm-fr-and-raw-prplus-exact-line-search-match-linear-cg.md items/cex-raw-prplus-loses-descent-and-safeguard-restarts.md`: both frontmatters and all math spans parse under actual renderer YAML/KaTeX.
- `node tools/proof-layout.mjs items/thm-fr-and-raw-prplus-exact-line-search-match-linear-cg.md items/cex-raw-prplus-loses-descent-and-safeguard-restarts.md`: 2 items, 9 steps, 0 defects. This batches every changed item after its final edit and formatter.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-70.proof-contracts.json --strict`: 0 errors, 0 warnings, 9/9 checked.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-70.proof-contracts.json --require-reviewed`: 0 errors, 9 routed items; seven HIGH/CRITICAL reviews completed by alpha-batch-70. Initial routing run without `--require-reviewed` also succeeded.
- Independent exact rational finite calculations for the Rosenbrock and SPD traces passed; these are local sanity checks, not registered finite-smoke or general mathematical certification.

Final decisions file contains exactly reader:70:1 (confirmed_nonfatal, historical producer repair independently accepted) and refuter:70:1 (confirmed_nonfatal, joint-invariant clarification repaired). Each references exactly one existing closed ledger row. The additional counterexample claim-direction defect D02 is closed and referenced by its assigned risk-review disposition in this report; it adds no unowed routed decision. Every completed repair has confidence 1.

Changed items: exact-CG theorem proof/numbering and counterexample refuted sentence. Changed supporting artifacts: owned proof contract, two task-named outputs, two owned closed defect-ledger rows, and frontier-dependency-ledger batch-70 consumer record. Manifest identities, titles, kind, deps and placement are unchanged and still match both carriers, so no manifest rewrite was needed. No page repair, published-content edit, new lemma, new AC assumption, or consumer source change was required.

No unresolved mathematical blocker or escalation. Historical composite uncertainty for reader:70:1 remains explicitly unknown under ROOT authorization; no source-only archive is treated as certification of missing manifest/contract history. No judge, stamp, self-certification, agent dispatch, engine transition or full gate battery was initiated. Next action belongs to the engine: bind decisions to actual current carriers and run its gate battery.

Focused identity annotation (2026-10-17, fresh metadata reviewer): read the complete exact-family-context.json and current native report/decisions, both original findings (reader-findings-70.json and refute-58.json), the batch-58 decision and relevant report passages, the producer pre-snapshot, the archived original reader source and current algorithm Definition, and the actual fixed ledger row numerical-optimization-dynamics-2026-10-16-3a-batch-58-D01. Both routes identify one physical omission: the initial objective baseline phi(0)=f(x) was used by expansion and zoom Armijo tests without an evaluation or supplied value. The single explicit initial evaluation/retention instruction in the current Definition is the repair recorded by D01. Added only same_defect_as: refuter:58:1 and explanatory same_defect_evidence to reader:70:1. Preserved the different routes, original findings, all prior decision fields and historical composite uncertainty. This session performs only that focused identity assessment; prior full reviews remain historical acceptance, with no original-session continuity or fresh whole-proof review claimed. No source repairs, hashes, validators, formatting, tests, gates or certification were performed; ROOT owns metadata binding and recertification.
