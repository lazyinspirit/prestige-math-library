# Batch 40 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-40`.

The scope owes exactly `refuter:40:1` (route `flagged`), and fifteen HIGH/CRITICAL risk reviews. Reader findings and touched/page obligations are empty. Pre/post snapshot carrier maps are identical; the original algorithm raw SHA256 is `1b9cd0f63f1149c573fdf01306e01542fa2451cac85d511efeeee15d08541e98`. The scope observed hash binds the composite carrier, rather than the raw source alone.

## Nelder–Mead obligation: confirmed_fatal, repaired

The original Definition supplies no objective calls for the new shrink vertices; in dimension two, their values generally differ from the contraction and reflection values. Sorting the next simplex and computing its spread therefore lacked inputs. The current repair specifies each sorted nonbest vertex, increasing evaluation order, fresh calls even at previously evaluated points, per-call budget/nonfinite handling and atomic commit after all values and nondegeneracy checks. All comparisons, tolerances, initial failure statuses and finite-budget content are preserved. `repair_confidence: 1`.

Source inspected: batch-40.sources/mckinnon-nelder-mead-nonstationary-point.txt, lines 83–109, two-variable procedure, including ordering, inside/outside contractions and shrink. The source is background for the geometric operations; this library explicitly defines its own call budget and caching policy. No convergence theorem is inferred.

Direct actual consumers: `lem-nelder-mead-finite-budget-returns-status` remains sound: every continuing iteration uses reflection, and the now-explicit shrink calls are finite and checked individually. `ex-nelder-mead-flat-plateau-stagnation` needs the necessary Verification 2.1 adjustment: two initial calls plus four iterations of three calls equals 14; the unchanged Example already allows budget 14 and still reaches diameter 1/16 and zero spread. At budget 13 the last shrink cannot commit. All scalar vertices remain distinct. The A-page actual summary makes only finite-status and no-convergence claims and needs no change. Search of items/library found no other direct consumers; neither consumer Statement changes, so propagation ends. Citation mirrors and the example derivation/boundary/finite-check contract are synchronized. No manifest interface changes are necessary. Algorithm provenance now records ai-altered; no judge stamp existed on either edited carrier.

## Review checkpoint

All assigned item reviews, supplier checks, consumer checks and fifteen HIGH/CRITICAL risk reviews are complete. Three confirmed carrier defects are repaired. No unresolved mathematical prerequisite or published defect was identified. The additional decision-coverage handoff is recorded below.

### lem-compact-set-in-open-neighborhood-has-uniform-radius

Reviewed both steps and all direct supplier statements. Empty K uses delta=1; otherwise the family of ALL admissible half-radius balls avoids arbitrary choice, ambient finite subcover follows from compactness-is-intrinsic, and the positive finite minimum plus triangle inequality places every delta-neighbor in V. Singleton and zero-dimensional cases satisfy the same argument; no quotient or biconditional is claimed. No repair required.

### lem-direct-search-local-descent-inequality

Reviewed steps 1.1–3.1 and all direct supplier statements. The d=0 case is equality, including dimension zero. For d nonzero, the open inverse path domain contains [0,1], directional differentiation gives phi prime, and Cauchy–Schwarz with the L-Lipschitz gradient yields q prime<=0. MVT applies to the continuous closed interval/differentiable interior restriction and gives the factor L/2, including L=0. No global convexity of U or integration theorem is needed. No repair required.

### lem-positive-spanning-poll-set-has-uniform-angle

Reviewed both steps, F1–F6 and all direct supplier statements. Nonempty finite D and n>=1 make maxima and the sphere available. Taking an inner product of a nonnegative representation of -u forces a negative dot product; max-difference/Cauchy–Schwarz gives continuity with constant Dmax. The nonempty closed bounded sphere is compact, so the minimum is attained and positive. Scaling covers nonzero v; v=0 is immediate even with zero vectors in D. Source Kolda et al. §3.3, Lemma 3.2 and (3.10)–(3.11), uses a normalized cosine measure; this item deliberately proves its unnormalized finite-list score. No repair required.

### lem-projected-subgradient-finite-budget-returns-status

Reviewed steps 1.1–2.1, the complete algorithm and projection/Jensen/finite-extrema/sum suppliers. Closed nonempty convex C and n>=1 give each projection; induction covers every successful update. Failure at the first call returns none as best and no full average. N>=1 and strictly positive steps ensure a nonzero denominator; normalized weights sum to one and remain feasible. Least-index finite minima require no arbitrary choice. Exact N-call completion is conditional on all valid oracle responses; no subgradient existence at every point is assumed. No repair required.

### lem-projected-subgradient-one-step-estimate

Reviewed both steps, full update, subgradient convention and the exact projection variational inequality. Its sign yields ||p-x*||²<=||u-x*||², and the square expansion plus alpha>0 substitutes the subgradient lower bound in the correct direction. x* need only be feasible, not optimal. Zero subgradient and xk=x* cases satisfy the same estimate. Source Bubeck §3.1 Lemma 3.1 and Theorem 3.2 proof agree with the projection sign and one-step algebra. No repair required.

### lem-proximal-bundle-subproblem-has-unique-minimizer

Reviewed steps 1.1–3.1 and all direct supplier statements. n=0 is handled separately as a singleton. Finite nonempty affine cuts and local quadratic bounds make Phi continuous; closed C makes its nonempty sublevel ambient closed. Completing the square using the first cut bounds the sublevel by radius 1+sqrt(2t(c-beta)); Heine–Borel and EVT attain a global minimum. Convexity of the max model and the strict midpoint quadratic deficit ||p-q||²/(8t) prove uniqueness. t>0, unbounded C and singleton C are handled; no arbitrary choice or smoothness is used. No repair required.

### lem-proximal-objective-has-quadratic-growth-from-minimizer

Reviewed both steps and the exact extended-real convexity and Euclidean identity suppliers. Finite Q(p) and F(z) make all endpoint values real and midpoint convexity applies. The quadratic midpoint deficit is ||z-p||²/(8t); combining with minimality and doubling gives the stated valid weaker growth coefficient 1/(4t). t>0, z=p and n=0 are sound. Properness/closedness and existence are not silently inferred: a finite minimizer is explicitly assumed. No repair required.

### lem-direct-search-finite-budget-returns-status

Reviewed both steps and the complete algorithm. The initial finite-valued feasible point ensures a nonempty best record even when N=0; every poll is a finite ordered scan and only feasible points are evaluated/accepted. Success and failure preserve feasibility. Positive mesh persists through multiplication/capping. The integer loop bounds polls, not total calls; no convergence or arbitrary choice is asserted.

### lem-proximal-bundle-finite-budget-returns-status

Reviewed both steps, complete initialization/serious/null rules and the proved subproblem supplier. Initialization failure returns with zero trials; otherwise the nonempty finite bundle persists and t>0 gives the unique candidate. Each trial either returns on a failure/nonpositive prediction or appends one cut and advances the counter. N>=1 bounds trials (initialization is separate). The result does not confuse exact mathematical minimization with a numerical inner-solver complexity bound.

### thm-direct-search-unsuccessful-poll-accumulations-are-stationary

Reviewed all three steps and each cited supplier. Uniform radius around compact K puts every sufficiently short poll segment in V; thus the unsuccessful scan actually tested the selected descent direction. Combining failure f(trial)>=f(center)-rho with local descent and the unnormalized angle yields kappa||grad||<=rho/Delta+L Delta Dmax²/2. Positive meshes permit division and both terms tend to zero. Compact metric sequential compactness supplies a limit in K; Lipschitz gradients transfer zero to every subsequential limit. The theorem assumes, rather than proves, an infinite unsuccessful subsequence with shrinking mesh. Source Kolda §3.6 Theorem 3.3 supplies the analogous failed-poll estimate.

### thm-projected-subgradient-best-and-average-bound

Reviewed both steps and all direct supplier statements. Confirmed and repaired the false comparison min observed gap<=gap at averaged point: on |x|, C=R, x0=1, alpha0=alpha1=2, valid g0=1,g1=-1 give x1=-1 and average0, so min gap1 exceeds average gap0. Telescoping the one-step estimate correctly bounds the weighted mean of gaps; Jensen bounds the averaged-point gap and the minimum term is also below that mean. The repaired maximum of these two gaps obeys the same upper bound. N>=1, positive weights, all-valid calls, attained x*, R>=distance and G>=each norm are essential; zero R/G and N=1 remain sound. Source Bubeck §3.1 Theorem 3.2 proves the averaged-point upper bound, not the false ordering.

### ex-max-affine-bundle-null-and-serious-steps

Reviewed both verification steps, convexity derivation, subgradient supports and algorithm/subproblem suppliers. For t=2 and center1, model y has quadratic objective (y+1)²/4, candidate -1, prediction2 and decrease0, hence null. Adding -y gives model |y|; on y>=0 objective=(y+1)²/4, while on y<=0 its excess above 1/4 is y(y-6)/4>=0, uniquely minimized at0. Prediction1 and decrease1 pass the serious fraction1/2. All oracle choices 1,-1,0 satisfy global supports; no smoothness or asymptotic result is inferred.

## Additional confirmed defects and consumer closure

The projected-subgradient theorem and its fixed-step corollary both contained the false ordering between the best observed objective and the objective at the average. An exact valid two-step run on |x| with x0=1, alpha0=alpha1=2, g0=1 and g1=-1 has x1=-1 and average0: min observed gap=1>0=average gap. Both Statements now bound the maximum of the two gaps by the existing upper bound. This preserves both valid guarantees without asserting an ordering. The theorem Proof 2.1 now explicitly draws the two separate conclusions from the weighted mean. Repair confidence is 1 for both carriers. Their provenance already records ai-altered proofs; Statements are now ai-altered as well. Neither had a judge stamp.

Actual direct theorem consumer: the fixed-step corollary required the same surgical Statement correction; its algebra and boundary arguments remain valid. Its sole direct external reference is the owning A-page summary, whose separate best/average gap guarantee is sound and unchanged. The theorem also appears in that summary/inventory. Searches of items and library found no other reference/dependency consumers. No outside-batch repair or escalation is needed. Titles, dependency sets, manifest interfaces and stable IDs remain unchanged. Citation and derivation contract mirrors are updated.

### cor-projected-subgradient-fixed-step-square-root-rate

Reviewed steps 1.1–2.1, the corrected theorem and all direct suppliers. The same false min-gap<=average-gap ordering was copied into this Statement; replacing it by a bound on their maximum preserves both rate guarantees. For R,G>0, alpha=R/(G sqrt N)>0, sum alpha=R sqrt N/G and G² sum alpha²=R² yield RG/sqrt N. R=0 forces x0=x*, while G=0 forces g0=0 and the subgradient inequality certifies x0; the optional schedule is explicitly not used in either case. N>=1 prevents empty averaging. Sole direct reference consumer is the owning A-page, whose rate summary remains sound.

### lem-aggregate-model-error-controls-proximal-candidate

Reviewed both steps, full candidate/exact-proximal definitions, quadratic-growth lemma and the current proximal existence/resolvent proof. Proper closed convex F gives a unique finite-valued proximal point p in C; finite nonempty max-affine M and closed convex C give z. Model underestimation at p and model minimality give QF(z)<=QF(p)+e. The supplied growth lower bound then gives ||z-p||²<=4te, with no subtraction of infinities. Fixed t>0 turns e_k->0 into norm convergence. Zero error forces equality of candidates. No claim that full-memory cuts imply vanishing error is used.

### thm-proximal-bundle-accumulation-under-accurate-aggregate-model

Reviewed steps 1.1–3.1 and F1–F4, including the current full proximal existence/resolvent/nonexpansiveness proof and its affine-minorant, closed-sum, lower-semicontinuous-extrema and level-set suppliers. Serious steps decrease F and null steps retain the center, so compact K contains all centers and continuity bounds values below. Nonnegative decreases have bounded telescoping sums and hence tend to zero. Any convergent subsequence has limit in K (compact extraction plus uniqueness); proximal nonexpansiveness and ||z-p||²<=4te transfer candidates to prox(limit). Continuity of F on its closed finite domain permits both value limits. If the limit were nonoptimal, the resolvent fixed-point test forces positive proximal value decrease delta. P=D+e and ms in (0,1), e->0 then make every sufficiently late selected trial serious with decrease>=delta/2, contradicting decrease->0. Infinite continuation, exact candidates, positive P, compact sublevel and vanishing error are explicit premises; no finite-budget or unconditional full-memory convergence is inferred. Dimension zero admits no infinite positive-P run, so that case is vacuous; no extra choice is used. No repair required.

## Sources and prerequisites

Direct supplier Definitions/Statements were checked against each use. The actual proximal-operator proof (batch 27) was also read, including its zero-dimensional case, finite-domain compact-sublevel existence, both resolvent directions and firm nonexpansiveness; its four analytic prerequisite Statements were checked. No unresolved supplier defect was found. This is focused interface review, not a new audit of every transitive foundational proof. Archived source sections read: McKinnon procedure, lines 83–109; Kolda–Lewis–Torczon §3.3 Lemma 3.2 and (3.10)–(3.11), and §3.6 Theorem 3.3 with full proof; Bubeck §3.1 Lemma 3.1, projected updates (3.2)–(3.3), and Theorem 3.2 proof; Díaz–Grimmer §2 Algorithm 1 and Assumption A; Noll–Prot–Rondepierre §8.1 polyhedral tangent model. Their URLs are retained in item frontmatter. Source normalizations and assumptions differ where stated above; the local proofs establish the library claims.

## Ledger and owner handoff

Closed defect rows: `nod-b40-3a-nelder-mead-shrink-values` (the sole routed finding), `nod-b40-3a-subgradient-gap-order` (the theorem), and `nod-b40-3a-subgradient-rate-gap-order` (its corollary). All three repairs have confidence 1. The latter two were independently discovered during mandatory risk review; they were not original reader/refuter findings. Their local repair dispositions are confirmed fatal, now fixed.

**Owner/engine routing required:** the immutable dispatch owes only `refuter:40:1`, and its flagged decision must reference exactly one defect row. Accordingly the decisions array contains exactly that one owed entry. The two new risk-review defect rows need owner/engine decision routing before closure; no supplemental obligations, altered scope or extra decisions were fabricated. This is a decision-coverage handoff, not unresolved mathematics or a claim that gates passed. Their exact items, counterexample, local repair and complete direct-consumer closure are documented above.

No defective published carrier was identified, so no published-consumer ledger amendment or lock was needed. Frontier dependency notes were appended with this run/group marker; unrelated rows and proposed withdrawals remain intact. No page or manifest edit was required because item identities, dependencies, titles, kinds and placement remain unchanged.

## Local validation

- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-40.proof-contracts.json --strict`: 18/18 checked, zero errors/warnings. An initial boundary-evidence locator diagnostic was corrected to cite Verification steps 1.1 and 2.1; no defect row was created for that mechanical diagnostic.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four changed item paths: three proofs checked, zero failures; the algorithm has no phase proof.
- `node tools/rendercheck.mjs` on those same four paths: four files clean; actual KaTeX and renderer YAML checks passed.
- Final `node tools/proof-layout.mjs items/alg-nelder-mead-finite-budget.md items/ex-nelder-mead-flat-plateau-stagnation.md items/thm-projected-subgradient-best-and-average-bound.md items/cor-projected-subgradient-fixed-step-square-root-rate.md`: four items, seven steps, zero defects. No item edits followed it.
- Owning contract `risk-report.mjs` was run initially without `--require-reviewed`, and finally both without and with that flag: zero errors. Every required review is now specific, independent Alpha evidence rather than the inherited author-only note.
- Exact rational bounded calculations: budget 13 returns before the fourth shrink commit with diameter 1/8; budget 14 commits diameter 1/16 and meets tolerance. The subgradient witness gives best gap 1 and average gap 0; both satisfy the corrected upper bound 2, including the corollary schedule with R=2sqrt(2), G=1 and N=2. These are finite witness checks, not general proof certification.
- `defect-ledger.mjs append --file /tmp/nod-b40-3a-defects.json`: all three closed rows accepted; canonical view regenerated under the tool's append lock.

Changed content: the Nelder–Mead algorithm, its plateau example Verification, projected-subgradient theorem and fixed-step corollary. Supporting changes: owning proof contracts, the canonical defect ledger/view, frontier dependency notes, this report and its exact one-entry decisions file. No judge, stamping, dispatch, stage transition or gate battery was run. The engine retains all current-hash checks and closure duties; the two newly discovered risk defects require decision routing as described above.
