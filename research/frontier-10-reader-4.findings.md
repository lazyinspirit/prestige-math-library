# Independent step-6 reader findings — frontier-10 batch 4

## Scope and method

I read all 81 dispatched item files in page order, including every Statement or Definition, Facts & Assumptions block, numbered proof or verification step, boundary case, title, and remark. I also read the four page files, the batch scaffold, coverage record, proof contract, notes, and the actual Statement or Definition of every external dependency cited by these items. For generated examples and counterexamples I checked the displayed witnesses directly rather than relying on their intended role.

Nothing in the assigned batch was left unchecked. I found no false dispatched Statement or false title. The repairs below are reader repairs only: they are not self-certified, and Alpha must confirm, refute, or extend each one from disk.

## Concrete findings and repairs

### Fatal findings

1. **F1 — `lem-bv-functions-are-regulated` — fatal proof defect; repaired.** The former step 1.1 took separate left and right one-sided small-oscillation neighborhoods at a point and said that shrinking them produced an open cover to which Heine–Borel applied. At a jump there is no two-sided open neighborhood of small oscillation, so those one-sided sets do not supply the asserted open cover; former step 2.1 therefore had no licensed finite partition. I replaced the argument by the standard supremum-of-reachable-endpoints construction, proved that the supremum is the right endpoint using the two one-sided limits, then handled avoidance of the prescribed countable set by perturbing only continuity-point breakpoints. Endpoint values and the singleton interval are explicit. Dependencies and the proof contract were updated.

2. **F2 — `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` — fatal proof/citation defect; repaired.** There were three independent failures. Former [L3] cited `cor-riemann-stieltjes-integral-bound`, whose Statement bounds an already existing integral and says nothing about differences of arbitrary sums. Former [L4] asserted convergence of a Cauchy net, but `thm-cauchy-criterion-via-lub` states only convergence of Cauchy sequences. Former step 2.1 also asserted integrability of the step approximants without controlling local variation at their discontinuities or the possibility of an endpoint jump of the integrator. I derived the sum estimate directly from finite sums and total variation; made the approximants continuous at every integrator discontinuity, including endpoints; used continuity of the variation function to control the finitely many remaining breakpoint neighborhoods; and converted the resulting Cauchy family to a sequential limit before comparing arbitrary fine sums to it. Dependencies and the proof contract were updated.

### Nonfatal findings

3. **F3 — `lem-variation-additive-on-subintervals` — nonfatal inaccurate citation; repaired.** `lem-sup-unique` states uniqueness only, not that suprema “preserve upper-bound comparisons.” The Fact now cites the least-upper-bound definition as well as uniqueness and describes partition splicing as the explicit concatenation of endpoint lists.

4. **F4 — `lem-jumps-of-the-variation-function` — nonfatal missing tail license; repaired.** `def-series`, `lem-series-tail-invariance`, and bounded monotone convergence do not by themselves state that all sufficiently remote finite tails are small. I added `lem-convergent-implies-cauchy` and made the partial-sum Cauchy step explicit.

5. **F5 — `def-riemann-stieltjes-sum-and-integral` and `thm-riemann-stieltjes-darboux-criterion` — nonfatal missing infimum source; repaired.** `def-complete-ordered-field` gives only the least-upper-bound property. It does not itself give the infima claimed in Darboux fact [L4]. The definition and theorem now cite `def-infimum` and `thm-infimum-property`, and the definition checks that each image set is nonempty and bounded before using its infimum or supremum.

6. **F6 — `lem-riemann-stieltjes-refinement-estimate` — nonfatal inaccurate citation; repaired.** The total-variation definition bounds partition sums but does not state interval additivity, which former [L2] used in step 2.1. I added and cited `lem-variation-additive-on-subintervals`.

7. **F7 — `thm-riemann-stieltjes-linearity-and-additivity` — nonfatal sequence/family mismatch; repaired.** Former [L8] inflated the sequence-only Cauchy theorem to a “Cauchy family.” The restricted sums are now shown Cauchy, a uniform-partition sequence is taken to a real limit, and arbitrary fine sums are compared with a late term of that sequence.

8. **F8 — `thm-riemann-stieltjes-c1-integrator-reduction` — nonfatal missing premise; repaired.** The product-integrability corollary requires both factors to be Riemann integrable. It did not license integrability of the continuous factor $\alpha'$ by itself. I added `thm-continuous-implies-integrable` and split the two uses explicitly.

9. **F9 — `thm-young-riemann-stieltjes-existence-rational` — nonfatal sequence/net mismatch; repaired.** Former [L2] said every Cauchy net converges while its source is sequence-only. The proof now first makes the dyadic left sums a Cauchy sequence using the geometric tail estimate, takes its sequential limit, and uses a common refinement to compare every arbitrary left sum and then every tagged sum with that limit.

10. **F10 — `ex-cantor-function-bv-not-absolutely-continuous` and `ex-cantor-function-as-riemann-stieltjes-integrator` — nonfatal inaccurate citation; repaired.** Both Facts attributed continuity to `thm-cantor-function-properties`, whose Statement expressly makes no continuity claim. I added `cor-cantor-function-is-continuous`; monotonicity and endpoint values remain licensed by the original theorem.

11. **F11 — `cex-continuous-function-of-unbounded-variation` — nonfatal inflated floor citation; repaired.** `lem-integer-part` supplies $n\le t<n+1$ but does not literally state the nearest-integer distance bound or the half-integer equality formerly put in [L2]. The Fact now derives both from the two adjacent integers before they are used in the witness calculation.

12. **F12 — `cex-common-jump-prevents-riemann-stieltjes-integrability` — nonfatal inflated variation citation; repaired.** The total-variation definition alone does not state that a nondecreasing function has variation equal to its endpoint increment. The Fact now removes the absolute values using nonnegative increments and cites the finite-sum telescope.

13. **F13 — `lem-improper-integral-splitting-and-tail-invariance`, `thm-linearity-of-improper-integrals`, and `thm-substitution-for-improper-integrals` — nonfatal wrong-domain limit citation; repaired.** All three used `thm-algebra-of-function-limits`, whose Statement is for a finite limit point $c$ and whose own remarks forbid assuming algebra at $\pm\infty$. Fixed-constant translation and finite linear combinations are now proved by direct epsilon estimates at the relevant one-sided or infinite end; substitution uses termwise equality of the two truncation families.

14. **F14 — `thm-absolute-improper-convergence-implies-convergence` — nonfatal wrong-domain order citation; repaired.** `lem-limit-preserves-order` is a theorem about sequences, not arbitrary real-parameter truncations. The proof now restricts to cofinal integer truncations or reciprocal endpoint truncations and applies the cited sequence theorem there.

15. **F15 — `cor-limit-comparison-test-for-improper-integrals` — nonfatal wrong-domain sign citation; repaired.** `lem-sign-preservation-near-a-limit` is stated only at a finite limit point, while the corollary also asserted infinite ends. The ratio bounds are now taken directly from `def-limits-at-infinity` or `def-one-sided-limits`; convergence of the positive scalar multiples is licensed by improper linearity.

16. **F16 — `cor-improper-integral-test-for-series` — nonfatal shifted-domain citation; repaired.** `thm-integral-test-for-series` is stated for $f:[0,\infty)$, sums from $0$, and integrals from $0$; the corollary formerly invoked it directly for a function known only on $[1,\infty)$. I replaced that invocation by the explicit inequalities $f(k+1)\le\int_k^{k+1}f\le f(k)$ and summed them.

17. **F17 — `thm-improper-p-test-rational` — nonfatal parameter mismatch; repaired.** Former [L2] cited a geometric *sequence* to justify $R^{1-p}\to0$ for arbitrary real $R\to\infty$ and $c^{1-p}\to0$ for arbitrary real $c\downarrow0$. The proof now gives the direct rational-power thresholds and also states the corresponding divergence limits used in the other cases.

18. **F18 — `thm-improper-convergence-implies-principal-value` — nonfatal unlicensed sum of limits; repaired.** The two proof steps asserted that two truncation limits could be added without a supporting fact. Each now uses a common scale and two $\varepsilon/2$ bounds.

19. **F19 — `cor-abel-test-for-improper-integrals` and `thm-dirichlet-divergence-transfer` — nonfatal unlicensed bounded-primitive fact; repaired.** Convergence controls the primitive only near the singular end; boundedness on the remaining compact interval still needed proof. Both Facts now combine the limiting bound with `thm-the-integral-function-is-lipschitz` on the compact initial piece. The divergence-transfer proof also spells out $v\to\infty\Rightarrow1/v\to0$.

20. **F20 — `ex-convergent-positive-continuous-unbounded-integrand` — nonfatal omitted Cauchy estimate; repaired.** Summability of the full spike areas did not by itself display the arbitrary-real-truncation estimate invoked by the Cauchy criterion. The verification now bounds every remote partial spike by its full area and combines the geometric spike tail with the explicit baseline tail.

21. **F21 — `ex-beta-kernel-convergence-rational` — nonfatal wrong-domain limit citation; repaired.** The quotient limit at infinity was attributed to finite-point limit algebra. I replaced both endpoint limit comparisons by two-sided constant comparisons: $1\le1+x\le2$ near zero and $1/2\le x/(1+x)<1$ at infinity, with separate signs of $q$.

22. **F22 — `ex-frullani-rational-kernel` — nonfatal unlicensed infinite limit; repaired.** The verification asserted $(1+t)^{-1}\to0$ while its only general limit-algebra dependency was finite-point. It now gives the direct bound $1/(1+t)<\varepsilon$ for $t>1/\varepsilon$ and removes the inapplicable dependency.

Every repaired proof-bearing item has a correspondingly updated exact-source proof-contract entry. No concrete finding remains intentionally unfixed.

## Per-item reading ledger

### `bounded-variation-and-riemann-stieltjes` (32/32)

- `def-bounded-variation-and-total-variation` — read the definition, nonempty partition-sum set, singleton convention, and supremum dependencies; no concrete defect.
- `lem-basic-properties-of-total-variation` — checked inserted-point bounds, boundedness, zero variation, and $a=b$; no concrete defect.
- `lem-variation-additive-on-subintervals` — read both inequalities and endpoint cuts; finding F3, repaired.
- `def-variation-function-and-positive-negative-variation` — checked the three definitions and normalization at $a$; no concrete defect.
- `lem-variation-function-and-jordan-identities` — checked increment identities and monotonicity in both signs; no concrete defect.
- `thm-jordan-decomposition-for-bv-functions` — checked both directions, normalization, and variation identity; no concrete defect.
- `cor-bv-discontinuities-are-countable-and-of-first-kind` — opened Jordan decomposition, the monotone jump theorem, Froda, and finite-point limit algebra; no concrete defect.
- `lem-jumps-of-the-variation-function` — checked both one-sided jump formulas, geometric annuli, and endpoints; finding F4, repaired.
- `lem-total-variation-seminorm-laws` — checked $c=0$, signs, and subadditivity partitionwise; no concrete defect.
- `thm-bv-functions-form-an-algebra` — checked the product estimate and the two required uniform bounds; no concrete defect.
- `cor-bv-functions-are-riemann-integrable` — checked Jordan reduction and linearity; no concrete defect.
- `def-absolutely-continuous-function` — checked empty finite family, singleton/degenerate intervals, and endpoint ordering; no concrete defect.
- `thm-c1-lipschitz-ac-bv-hierarchy` — checked all four implications, constant cases, finite disjoint-family estimate, and endpoint derivative convention; no concrete defect.
- `def-riemann-stieltjes-sum-and-integral` — checked tags, mesh limit, monotone Darboux sums, orientation, and singleton value; finding F5, repaired.
- `thm-riemann-stieltjes-darboux-criterion` — checked necessity, sufficiency, jump compatibility, endpoint jumps, and both iff directions; finding F5, repaired.
- `lem-riemann-stieltjes-integral-unique` — checked existence of arbitrarily fine partitions and the triangle estimate; no concrete defect.
- `lem-riemann-stieltjes-refinement-estimate` — checked block telescoping, local variation, zero variation, and common refinement; finding F6, repaired.
- `thm-riemann-stieltjes-existence-continuous-bv` — checked the zero-variation case and its explicit sequence-to-mesh-limit argument; no concrete defect.
- `cor-riemann-stieltjes-integral-bound` — checked the bound first on sums and then along the established limit; no concrete defect.
- `thm-riemann-stieltjes-linearity-and-additivity` — checked two linearities, both interval-additivity directions, endpoint cuts, and orientation; finding F7, repaired.
- `thm-riemann-stieltjes-integration-by-parts` — checked the exact endpoint-tagged finite summation identity and both existence directions; no concrete defect.
- `cor-riemann-stieltjes-existence-bv-continuous` — checked the integration-by-parts reversal and continuous/BV roles; no concrete defect.
- `thm-riemann-stieltjes-existence-finitely-discontinuous` — checked the finitely many bad neighborhoods, Jordan summands, and continuous-integrator variation control; no concrete defect.
- `thm-riemann-stieltjes-continuous-composition` — checked bounded range, uniform continuity, weighted oscillation split, and jump compatibility; no concrete defect.
- `lem-bv-functions-are-regulated` — checked one-sided limits, compact endpoint reach, endpoint values, and avoidance of a countable continuity set; finding F1, repaired.
- `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` — checked countability, step approximation, endpoint jumps, local variation, sum stability, and mesh convergence; finding F2, repaired.
- `cor-riemann-stieltjes-agrees-with-riemann` — checked equality of every tagged sum and orientation; no concrete defect.
- `thm-riemann-stieltjes-c1-integrator-reduction` — checked the mean-value points, product sums, uniform continuity, and product integrability; finding F8, repaired.
- `thm-riemann-stieltjes-change-of-variable` — checked transported partitions in both directions and strict monotonicity; no concrete defect.
- `lem-young-partition-sum-estimate-rational` — checked the insertion identity, dyadic rate, point-removal estimate, geometric grouping, $K_fK_g=0$, and $a=b$; no concrete defect.
- `thm-young-riemann-stieltjes-existence-rational` — checked the dyadic sequence, arbitrary partitions/tags, swapped integral, and telescoping identity; finding F9, repaired.
- `rem-riemann-stieltjes-conventions-and-scope` — checked every scope claim against the items on the page; no concrete defect.

### `bounded-variation-and-riemann-stieltjes-examples` (12/12)

- `ex-absolute-value-lipschitz-not-c1` — checked the reverse triangle inequality and both one-sided difference quotients at zero; no concrete defect.
- `ex-square-root-ac-not-lipschitz` — checked the disjoint-interval square-root estimate and the $x=0$ Lipschitz obstruction; no concrete defect.
- `ex-cantor-function-bv-not-absolutely-continuous` — checked variation one and the stage-$n$ absolute-continuity obstruction; finding F10, repaired.
- `cex-continuous-function-of-unbounded-variation` — checked continuity at zero, the zero/peak partition, and harmonic lower bound; finding F11, repaired.
- `ex-step-integrator-evaluates-at-the-jump` — checked the endpoint convention for the jump interval and continuity of the tag value; no concrete defect.
- `ex-finite-step-integrator-weighted-jump-sum` — checked linearity and coincident/endpoint jump conventions; no concrete defect.
- `ex-unbounded-integrand-stieltjes-integrable` — checked that sufficiently fine partitions isolate the sole jump away from the singularity; no concrete defect.
- `ex-cantor-function-as-riemann-stieltjes-integrator` — checked BV, existence, and exact telescoping of every constant-integrand sum; finding F10, repaired.
- `cex-common-jump-prevents-riemann-stieltjes-integrability` — checked the two fine tagged-sum subnetworks $0$ and $1$; finding F12, repaired.
- `ex-riemann-stieltjes-polynomial-computation` — checked reduction to $\int_0^1 2x^2$ and the FTC value; no concrete defect.
- `ex-riemann-stieltjes-substitution` — checked the source/target orientations and the value $1/2$; no concrete defect.
- `ex-young-integral-beyond-bounded-variation` — checked the tiling, global $3/4$-Hölder bound across tents and at zero, harmonic variation, and Young threshold; no concrete defect.

### `improper-integrals` (25/25)

- `def-improper-integral-at-infinity` — checked both orientations, local compact integrability, and exclusion of infinite values; no concrete defect.
- `def-improper-integral-at-a-finite-endpoint` — checked left/right endpoint limits and orientation; no concrete defect.
- `def-mixed-improper-integral` — checked separate convergence at every singular end and prohibition of cancellation; no concrete defect.
- `lem-improper-integral-splitting-and-tail-invariance` — checked all four one-ended orientations, interior splits, and whole-line splits; finding F13, repaired.
- `thm-linearity-of-improper-integrals` — checked zero coefficients, one-ended limits, and piecewise mixed addition; finding F13, repaired.
- `thm-cauchy-criterion-for-improper-integrals` — checked necessity, the integer-sequence converse, arbitrary real truncations, reciprocal endpoint sequences, and $-\infty$; no concrete defect.
- `def-absolute-and-conditional-improper-convergence` — checked separate mixed pieces and the conditional/absolute distinction; no concrete defect.
- `thm-nonnegative-improper-integral-bounded-primitive-criterion` — checked monotonicity, integer-to-real squeeze, reciprocal endpoints, and supremum value; no concrete defect.
- `thm-absolute-improper-convergence-implies-convergence` — checked the Cauchy implication, integral inequality, and each mixed piece; finding F14, repaired.
- `cor-improper-integral-tails-tend-to-zero` — checked improper and proper-tail formulations at every end; no concrete defect.
- `thm-comparison-test-for-improper-integrals` — checked eventual bounds, finite initial pieces, absolute comparison, and all endpoints; no concrete defect.
- `cor-limit-comparison-test-for-improper-integrals` — checked $L>0$, $L=0$, $L=+\infty$, and finite/infinite ends; finding F15, repaired.
- `cor-improper-integral-test-for-series` — checked the index-one boundary, both inequalities, integer-to-real squeeze, and finite changes; finding F16, repaired.
- `lem-truncated-integrals-of-rational-powers` — checked $p\ne1$, both dyadic $p=1$ bounds, positive bases, substitution, and endpoints; no concrete defect.
- `thm-improper-p-test-rational` — checked $p=1$, $p=0$, signs, both endpoint thresholds, and values; finding F17, repaired.
- `def-cauchy-principal-value` — checked symmetric finite and whole-line truncations and separation from ordinary improper convergence; no concrete defect.
- `thm-improper-convergence-implies-principal-value` — checked interior and whole-line coupled limits and the nonconverse; finding F18, repaired.
- `thm-dirichlet-test-for-improper-integrals` — checked Bonnet and differentiable-multiplier clauses, boundary terms, reflected ends, and finite endpoints; no concrete defect.
- `cor-abel-test-for-improper-integrals` — checked both monotonicity directions, finite limit of $g$, sign reduction, and primitive boundedness; finding F19, repaired.
- `thm-dirichlet-divergence-transfer` — checked the contrapositive setup, reciprocal derivative, reciprocal limit, and absolute derivative integral; finding F19, repaired.
- `thm-absolute-divergence-from-uniform-tail-mass` — checked bounded gaps, monotonicity direction, disjoint blocks, and series divergence; no concrete defect.
- `thm-monotone-change-of-variable-for-riemann-integrals` — checked nondecreasing, nonincreasing, flat subintervals, signed bounded $f$, both integrability directions, and FTC normalization; no concrete defect.
- `thm-substitution-for-improper-integrals` — checked matched ends, decreasing orientation, flat pieces, and separate mixed ends; finding F13, repaired.
- `thm-frullani-integral-proper-factor` — checked $a=b$, $a>b$, uniformity for $t$ between $a$ and $b$, zero-end and infinite-end limits, and orientation; no concrete defect.
- `rem-improper-integral-conventions-and-scope` — checked every convention and exclusion against the page; no concrete defect.

### `improper-integrals-examples` (12/12)

- `ex-principal-value-of-one-over-x` — checked exact cancellation and separate $p=1$ divergence; no concrete defect.
- `ex-conditionally-convergent-step-function-integral` — checked arbitrary real truncations, alternating harmonic convergence, and absolute divergence; no concrete defect.
- `ex-convergent-positive-continuous-unbounded-integrand` — checked disjoint/local-finite spikes, areas, positivity, continuity, remote tails, and unboundedness; finding F20, repaired.
- `ex-one-over-square-root-improper-integral` — checked threshold and truncated value $2$; no concrete defect.
- `ex-rational-p-integrals-at-both-endpoints` — checked the reversed thresholds and both values; no concrete defect.
- `ex-frullani-rational-kernel` — checked algebraic simplification, zero-end local behavior, $x^{-2}$ tail, and orientation in $a,b$; finding F22, repaired.
- `ex-absolutely-convergent-rational-integral-on-the-line` — checked local continuity and two $x^{-2}$ comparisons; no concrete defect.
- `ex-improper-substitution-reciprocal` — checked the decreasing bijection, absolute derivative, exponent algebra, and both p-test ends; no concrete defect.
- `cex-oscillatory-step-function-improper-integral-diverges` — checked integer and arbitrary truncations and the two subsequential values; no concrete defect.
- `ex-interior-square-root-singularity` — checked both one-sided substitutions, orientation, and value $2\sqrt{c-a}+2\sqrt{b-c}$; no concrete defect.
- `cex-principal-value-one-over-x-squared-diverges` — checked the symmetric truncation formula and divergence to $+\infty$; no concrete defect.
- `ex-beta-kernel-convergence-rational` — checked both singular ends, all signs of $p,q$, positive-base rational powers, and simultaneous necessity/sufficiency; finding F21, repaired.

## Page files, checks, and limits of this report

The two A-page summaries accurately describe the proved scope and contain no mathematical overclaim. The two B-page bodies are intentionally empty. I found no unchecked dependency, boundary case, or item in the dispatch. Mechanical check results after the reader repairs are recorded in the final check pass for this findings file; their success is evidence of structural consistency only, not reader certification of the mathematics.
