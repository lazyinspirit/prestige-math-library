# Frontier 16 — independent reader 3 (batch 3)

Run: `frontier-16`  
Step: 6a independent batch read  
Scope source: `research/frontier-16-batch-3.pages.json`  
Pages assigned: `picard-lindelof-and-first-order-odes`, `picard-lindelof-and-first-order-odes-examples`, `the-gauge-integral-and-cousins-lemma`, and `the-gauge-integral-and-cousins-lemma-examples`.

## Findings

### Fatal

- **R3-1 — `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, Statement and [L2]/steps 1.1–2.1 — fatal.** The Statement never says that `I` is an interval with at least two elements. On the permitted one-point interval `I={t_0}`, the displayed Volterra equation is true, but `t_0` is not a limit point of `I`, so the library's `def-vector-valued-derivative-and-integral` does not define `x'(t_0)` and the curve is not a solution. [L2] also drops the cited primitive theorem's order-convexity and at-least-two-elements hypotheses. The contract's `degenerate` row incorrectly says constant solutions cover this case.
- **R3-2 — `def-picard-operator-and-picard-iterates`, Definition — fatal.** `J=[t_0-h,t_0+h]` is introduced without `h>=0`, even though the library permits empty reversed closed intervals. Its final sentence also calls every fixed point a solution at `h=0`; on the singleton interval the fixed-point equation is defined but the library derivative is not.
- **R3-3 — `lem-vector-valued-continuous-curve-space-is-complete`, title and Statement — fatal.** The first sentence correctly assumes a nonempty compact interval, but the title and the repeated final Statement sentence omit nonemptiness. Empty intervals exist in the library and the displayed supremum metric is then undefined, so the broader claim is not established.
- **R3-4 — `cor-uniform-picard-lindelof-for-nearby-initial-values`, [L1] and step 2.1 — fatal.** [L1] cites only the existential Statement that each IVP has a solution on *some* interval. That clause does not license the asserted common `h` for all nearby data; step 2.1 silently imports the quantitative construction from the cited proof. The quantitative cylinder clause must be stated and cited explicitly.
- **R3-5 — `cor-globally-lipschitz-odes-have-global-solutions`, Given/steps 1.1–2.1 — fatal.** The proof starts with “its maximal solution” but neither a Fact nor a declared direct dependency supplies existence and uniqueness of a maximal solution. The escape corollary assumes a maximal solution; it does not create one.
- **R3-6 — `thm-first-order-linear-ode-integrating-factor`, Statement and [L2]/step 1.1 — fatal.** “An interval containing `x_0`” includes the singleton `{x_0}`, where the library derivative is undefined and the displayed function is not a solution. In addition, [L2] records only the evaluation clause of `cor-primitives-of-a-continuous-function`, while step 1.1 uses its separate existence clause to assert `P'=p` without citing it.
- **R3-7 — `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous`, Statement — fatal.** The interval `[t_0,t_0+h]` and positive meshes are used without the required `h>0`; for `h<0` the interval is empty under the library convention, and for `h=0` the asserted positive-mesh construction is not the one proved.
- **R3-8 — `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence`, title and repeated Statement sentence — fatal.** The precise first sentence requires a nonempty compact interval, but the title and repeated sentence assert the subsequence conclusion for an unqualified sequence of curves. Compactness of the common domain is essential and is used in step 2.1.
- **R3-9 — `thm-peano-local-existence-for-continuous-odes`, steps 1.1–2.1 — fatal.** The proof constructs Euler polygons only on `[t_0,t_0+h]`, hence only a one-sided solution. The batch's own definition requires a local solution interval to contain a nondegenerate neighborhood of `t_0` in the open time projection. No reflected construction or gluing step proves the other side.
- **R3-10 — `thm-osgood-uniqueness-criterion-for-first-order-odes`, step 2.1 — fatal.** Replacing `sqrt(R)` by `sqrt(R+epsilon)` leads, after the chain rule, to an integral from `sqrt(epsilon)` to `sqrt(R(t)+epsilon)`, not the written integral from `epsilon` to `sqrt(R(t))+epsilon`. The latter would correspond to `sqrt(R)+epsilon`, which is not differentiable at zeros by the cited classical rules. Thus the displayed separation is not licensed.
- **R3-11 — `cex-continuous-ode-with-nonunique-delayed-solutions`, Given and step 1.1 — fatal.** The witnesses are defined only for `t>=0`, putting the initial time at a one-sided endpoint. They therefore do not refute the later claim of uniqueness for a *local* solution, whose domain must contain a two-sided neighborhood of zero. The same formulas become valid global witnesses when the zero branch is defined for all `t<=c`.
- **R3-12 — `thm-monotonicity-of-the-henstock-kurzweil-integral`, Statement line 36 — fatal.** The repeated sentence says `f<=g` alone implies `int f<=int g`, omitting the HK-integrability hypotheses from the proved Statement. For nonintegrable functions the displayed integrals are not defined.
- **R3-13 — `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity`, step 1.1 — fatal.** Completing two subinterval partitions by one complement proves a Cauchy estimate between their sums; it does not by itself produce the subinterval integral value. Step 1.1 invokes no completeness or HK Cauchy criterion, so the forward half of the iff is not established.
- **R3-14 — `thm-every-derivative-is-henstock-kurzweil-integrable`, Statement and step 1.1 — fatal.** The Statement permits `a=b`, but the library does not define `F'` on the isolated singleton domain, so `f=F'` is not a function on `[a,a]`. Step 1.1 also chooses one radius for every point of an uncountable interval without a choice hypothesis or a canonical selection, contrary to the explicit nonempty-choice contract row.
- **R3-15 — `cor-henstock-kurzweil-integration-by-parts`, Statement — fatal.** No relation between `a` and `b` is stated. At `a=b` the derivatives on the isolated singleton are undefined; at `a>b` the domain interval is empty. The contract nevertheless marks identical endpoints as checked.
- **R3-16 — `cor-henstock-kurzweil-substitution-for-derivatives`, Statement — fatal.** The same missing `a<b` hypothesis leaves `phi'` undefined on a singleton and the compact HK integral undefined for reversed endpoints, while the contract marks the degenerate case checked.
- **R3-17 — `thm-hake-extension-theorem-for-henstock-kurzweil-integrals`, step 1.2 — fatal.** The reverse implication says only to choose one prefix gauge and “split” an arbitrary fine partition there. A fine cell can straddle that cut and cannot in general be split into tagged cells with the old tag. The source proof requires a countable band decomposition, compatible local gauges, explicit boundary-distance shrinkage, and a tail/endpoint cell estimate; none of those obligations or the required countable choice appears.
- **R3-18 — `thm-saks-henstock-lemma`, step 2.1 — fatal.** Completing positive- and negative-error cells with arbitrary fine complements does not bound the selected errors: the complement's own local errors may cancel them. The proof must choose locally accurate complement partitions (using subinterval integrability) and account for their error before comparing with the full integral.
- **R3-29 — `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals`, [L1] — fatal.** [L1] restates monotonicity as though the pointwise inequality alone implied an integral inequality, omitting the cited theorem's hypothesis that both functions are HK integrable on the compact interval. The proof has local integrability available, but the citation itself is wider than its source.
- **R3-30 — `cex-uniqueness-does-not-require-local-lipschitz-continuity`, step 2.1 — fatal.** The proposed modulus `rho(r)=2r(1+|log r|)` is undefined at `r=0`, although a modulus is a function on `[0,r_0]` and the zero value is the boundary on which the witness depends. The continuous extension `rho(0)=0` and a positive-domain formula must be stated.

### Nonfatal / polish

- **R3-19 — `lem-weissinger-fixed-point-criterion`, steps 1.1–2.1 — nonfatal.** Step 1.1 claims the limit tail bound “after passage to the limit” before [L2] has supplied a limit. Moving that passage into step 2.1 closes the gap in well under 30 seconds.
- **R3-20 — `cex-henstock-kurzweil-integrability-is-not-absolute`, step 2.1 — nonfatal.** Monotonicity is applied to `|f|` on each compact interval before its local HK integrability is established. Away from zero, `f` and `|f|` are continuous, so the missing Riemann-to-HK bridge is routine but must be cited.
- **R3-21 — `ex-cousins-lemma-gives-heine-borel-on-an-interval`, [L2]/step 3.1 — polish.** The purported derivation lists the Heine–Borel conclusion itself as a Fact and direct dependency. It is used only to label the conclusion, not to prove it, but the presentation makes an independent proof look circular; the published theorem should be named non-load-bearingly after the construction.
- **R3-22 — `thm-gronwall-integral-inequality`, Statement and step 2.1 — nonfatal.** The forward theorem is correct, but the backward assertion says only “with oriented limits” and does not state the reflected hypothesis `int_t^{t_0}`; `t_0<=T` is also unstated under the library's empty-interval convention. The repeated generic sentences add no content. A precise reflected clause removes the ambiguity.
- **R3-23 — `cor-lipschitz-ode-uniqueness-and-stability-estimate`, Statement — nonfatal.** “State-Lipschitz constant `L` along both graphs” does not explicitly assert the pairwise inequality between `x(t)` and `y(t)` that step 1.1 uses. Stating that inequality pointwise makes the hypothesis exact.
- **R3-24 — `lem-picard-operator-preserves-a-closed-curve-ball`, [L1]–[L2]/step 1.1 — polish.** The Statement already supplies the bound `M`, but the proof re-derives it from compactness and an extreme-value citation, and [L1] is stated only for increasing limits while the step silently uses the reversed orientation. The given bound and an explicit orientation split are sufficient.
- **R3-25 — `research/frontier-16-batch-3.proof-contracts.json`, citation rows throughout the batch — nonfatal artifact defect.** Many `quote` values are merely a heading, an equation with no hypotheses, or a sentence fragment—for example Osgood [L2] is only `**Cauchy-Schwarz.**`, the quadratic example [L2] is only `the quotient`, and the Volterra [L2] quote is only `is a primitive of f on I`. These are not exact source clauses and do not preserve domains or hypotheses. Every citation row must be expanded to the containing source clause.
- **R3-26 — `research/frontier-16-batch-3.proof-contracts.json`, boundary rows for the items above — nonfatal artifact defect.** Several dispositions contradict the actual boundary: the Volterra `degenerate` row accepts singleton solutions, the derivative theorem says its pointwise gauge uses no choice, the integration-by-parts and substitution rows accept identical endpoints, and the delayed-solution endpoint row treats a one-sided witness as local. The rows must be rewritten with the repaired hypotheses and constructions.
- **R3-27 — `lem-ode-extension-from-a-compact-interior-region`, step 1.1 — nonfatal.** A convergent state subsequence and `t_j->beta` give convergence of the graph points, but the step concludes that `(beta,p)` lies in `K` without citing that a compact Euclidean set is closed. Adding the Heine–Borel clause closes this sub-30-second gap.
- **R3-28 — `thm-monotonicity-of-the-henstock-kurzweil-integral`, step 2.1 — nonfatal.** The constant bounds use linearity with the constant functions `m` and `M` without first establishing that constants are HK integrable. Every tagged sum of a constant is exactly `k(b-a)`, so the missing bridge is routine and was added inline.
- **R3-31 — `research/frontier-16-batch-3.pages.json`, item `deps` rows — nonfatal artifact defect.** The batch manifest lagged the authored frontmatter in several places (for example, the recursive Picard definition used `thm-recursion` and the global-Lipschitz proof used Euclidean compactness while the manifest omitted those authored edges). The manifest must be the scope of record, so all 61 title/dependency rows were synchronized from the final item frontmatter; `research/plan-spec.json` was not touched.

## Changes made

No item was added or deleted. No published item and no item outside batch 3 was edited. No `verification.judge` block existed in the repaired drafts, so there was no stale block to delete. `research/plan-spec.json` was not touched.

### `picard-lindelof-and-first-order-odes`

- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`: required a nondegenerate order-convex interval, restored the full primitive hypothesis in [L2], separated `t=t_0`, and corrected its contract (R3-1).
- `def-picard-operator-and-picard-iterates`: required `h>=0` and separated the `h=0` fixed-point equation from the solution claim (R3-2).
- `lem-vector-valued-continuous-curve-space-is-complete`: narrowed title/Statement to a nonempty compact interval (R3-3).
- `lem-picard-operator-preserves-a-closed-curve-ball`: used the given bound directly, stated the oriented norm estimate faithfully, and removed two unused dependencies (R3-24).
- `thm-picard-lindelof-local-existence-and-uniqueness`: added the quantitative cylinder clause that its proof establishes and made the continuation argument explicit, thereby supplying the exact fact needed downstream (R3-4).
- `cor-uniform-picard-lindelof-for-nearby-initial-values`: cited that quantitative clause and chose one common radius and half-length from the compact margins (R3-4).
- `lem-weissinger-fixed-point-criterion`: moved passage to the limit and the tail bound after completeness supplies the limit (R3-19).
- `prop-picard-iteration-converges-with-explicit-error-bounds`: wrote the pointwise induction and factorial integration step explicitly.
- `thm-gronwall-integral-inequality`: required `t_0<=T`, stated the reflected hypothesis with `int_t^{t_0}`, removed duplicated prose, and made the reflected proof precise (R3-22).
- `cor-lipschitz-ode-uniqueness-and-stability-estimate`: stated the exact pairwise Lipschitz inequality and removed the now-unneeded definition edge (R3-23).
- `lem-ode-extension-from-a-compact-interior-region`: added the Euclidean closedness fact and applied it to the convergent graph-point subsequence (R3-27).
- `cor-globally-lipschitz-odes-have-global-solutions`: added and cited maximal-solution existence/uniqueness before applying compact escape (R3-5).
- `thm-first-order-linear-ode-integrating-factor`: excluded the isolated interval and cited both the primitive-existence and endpoint-evaluation clauses (R3-6).
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous`: required `h>0`, used the supplied field bound, and removed unused compactness/extreme-value edges (R3-7).
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence`: made the nonempty compact domain explicit in the title and repeated Statement (R3-8).
- `thm-peano-local-existence-for-continuous-odes`: constructed reflected Euler limits and glued the two half-solutions after checking their common derivative (R3-9).
- `thm-osgood-uniqueness-criterion-for-first-order-odes`: replaced the invalid separation with `q_epsilon=sqrt(R+epsilon)`, cited the primitive of `1/rho`, and integrated from `sqrt(epsilon)` (R3-10).

### `picard-lindelof-and-first-order-odes-examples`

- `ex-quadratic-ode-finite-time-blowup`: closed the nonzero-component argument and cited maximal-solution uniqueness when identifying the maximal interval.
- `cex-continuous-ode-with-nonunique-delayed-solutions`: extended the zero branch to every `t<=c`, making every delayed witness global and the initial time interior (R3-11).
- `cex-uniqueness-does-not-require-local-lipschitz-continuity`: defined `rho(0)=0` and restricted the logarithmic formula to `0<r<=e^{-1}` (R3-30).

### `the-gauge-integral-and-cousins-lemma`

- `thm-monotonicity-of-the-henstock-kurzweil-integral`: deleted the overbroad repeated Statement and proved the constant-function bridge inline (R3-12, R3-28).
- `thm-henstock-kurzweil-cauchy-criterion` and `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity`: moved the independent Cauchy criterion first on the page; the additivity theorem now uses it for restriction and gives an explicit cut-respecting gauge for the reverse direction (R3-13).
- `thm-saks-henstock-lemma`: chose locally accurate complement partitions and bounded positive and negative error classes separately (R3-18).
- `thm-every-derivative-is-henstock-kurzweil-integrable`: required `a<b` and defined the gauge canonically by a least admissible natural reciprocal, using the Archimedean reciprocal and well-ordering facts (R3-14).
- `cor-henstock-kurzweil-integration-by-parts` and `cor-henstock-kurzweil-substitution-for-derivatives`: added the required `a<b` hypotheses and corrected their boundary rows (R3-15, R3-16).
- `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals`: replaced the unstated sequential-limit criterion with an explicit cofinal truncation sequence and comparison to arbitrary truncations.
- `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals`: restored the local-integrability hypotheses in [L1] (R3-29).
- `thm-hake-extension-theorem-for-henstock-kurzweil-integrals`: required `a<b`, added explicit countable choice, and supplied the bandwise compatible-gauge proof with a summable error budget, final partial-band control, and endpoint cell; precheck's canonical stratification was adopted as steps 1.1, 1.2, 2.1, 3.1 (R3-17).

### `the-gauge-integral-and-cousins-lemma-examples`

- `cex-henstock-kurzweil-integrability-is-not-absolute`: established local HK integrability of `|f|` on each positive truncation before monotonicity and added the exact bridge dependencies (R3-20).
- `ex-cousins-lemma-gives-heine-borel-on-an-interval`: removed the Heine–Borel theorem from the load-bearing Facts/deps, finished the Cousin proof directly, and named the published theorem only in a Remark (R3-21).

### Batch artifacts

- `research/frontier-16-batch-3.pages.json`: synchronized all 61 item titles/dependencies with final frontmatter, recorded every dependency change above, updated affected proof strategies, and placed the HK Cauchy criterion before the additivity theorem (R3-31).
- `library/real-analysis/the-gauge-integral-and-cousins-lemma.md`: mirrored that safe same-page order and adjusted the two-paragraph summary's progression sentence.
- `research/frontier-16-batch-3.proof-contracts.json`: regenerated exact coverage for every current proof step, expanded 163 citation quotes to complete source clauses, updated all changed uses/step numbers, and rewrote the 424 boundary dispositions. `boundary-audit` now finds neither a contradicted disposition nor any rationale cluster of size three.

## Coverage and per-page verdicts

Final verdicts after the repair/gate pass:

- `picard-lindelof-and-first-order-odes` — **pass after repairs**; 26/26 scoped items opened. No unresolved fatal or nonfatal mathematical concern.
- `picard-lindelof-and-first-order-odes-examples` — **pass after repairs**; 8/8 scoped items opened. No unresolved fatal or nonfatal mathematical concern.
- `the-gauge-integral-and-cousins-lemma` — **pass after repairs**; 18/18 scoped items opened. No unresolved fatal or nonfatal mathematical concern.
- `the-gauge-integral-and-cousins-lemma-examples` — **pass after repairs**; 9/9 scoped items opened. No unresolved fatal or nonfatal mathematical concern.

I opened **61/61 scoped item files** and **52 distinct cited dependency items outside the batch**, for **113 unique item files** in the item/dependency read. I also opened all four page composition files and the Teschl, Lebl, Fonda, and Bruckner–Bruckner–Thomson source treatments used by the component-provenance ledger. Every scoped mathematical item has both component-provenance fields; no scoped Statement/Construction is `ai-generated`, so there is no AI-generated load-bearing dependency and no generated-claim counterexample search was triggered.

**Coverage statement:** I read every numbered proof step, every `[F#]`/`[A#]`/`[L#]` dependency citation, every title and Statement, every proof-contract boundary row, both directions of every iff, both A-page summaries, both bodyless B pages, and every component-provenance block in the assigned batch. There are no coverage exceptions and no unresolved findings.

Final gate results:

- Reflow: all 53 proof-bearing scoped items clean; no physical-line rewrite needed.
- Targeted precheck: 53/53 pass after adopting Hake's printed canonical stratification.
- `proof-contract --strict`: 53/53 contracts, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: 163 citations, every quote found, no widening candidate.
- `boundary-audit --fail-on-contradicted`: 424 rows, no contradicted disposition, no rationale cluster of size at least three.
- `content-policy`: 61 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pairs / 114 harvested results, 0 errors, 0 warnings.
- `finite-smoke`: 0 errors and 0 applicable checks; this is not evidence for correctness.
- `risk-report`: completed with 0 errors and 53 routed items; group Alpha, not this reader, owns the required high/critical `risk_review` dispositions.
- Targeted `rendercheck`: 65 item/page files clean.
- Targeted `prosecheck --warnings`: 65 item/page files, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: exit 0. The plan remains untouched; group Alpha must apply this report's licensed manifest changes with `splice-plan --update` at 6b.
- `depcheck --quiet`: exit 0; its warnings are pre-existing or concurrent-worktree warnings outside batch 3.
- `fwdcheck --quiet` and `extcheck --quiet`: exit 0; no batch-3 forward-reference or recorded-not-proved failure.
- Page-filtered `depsource` for all four assigned pages: 0 unresolved dependencies and no planned-later dependency.
