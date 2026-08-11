# frontier-11 batch 2 — Step-5 authoring notes

Beta: `Beta-frontier-11-2`  
Run/date: `frontier-11`, 2026-08-11  
Writable scope: the four `research/frontier-11-batch-2.*` artifacts only

## Outcome, counts, and settled A-page summaries

No split is proposed. The FTC pair contains 8 A-page items and 6 B-page items; the arc-length pair contains 13 A-page items and 6 B-page items. The 21-item A-page total is distributed 8/13, far below the binding 60-item per-A-page ceiling. The exact proposed cut is therefore **none**: retain the page ids, companions, orders, and reading-order slots in the dispatch.

### `the-fundamental-theorems-of-calculus` — two-paragraph summary

This page preserves the published working FTC instead of duplicating it. It strengthens Newton–Leibniz to continuity on the closed interval with only an integrable extension of the interior derivative, treats finitely many exceptional points, and derives integration by parts and substitution with their exact hypotheses. The substitution theorem requires neither monotonicity nor injectivity, and oriented endpoint images are retained.

The other half separates pointwise, one-sided, almost-everywhere, parameter-dependent, and Riemann–Stieltjes forms. It identifies derivatives of indefinite integrals at one-sided limit points, records the Countable-Choice cost of the almost-everywhere conclusion, proves compact-rectangle differentiation under the integral sign, and obtains both Stieltjes FTC forms from the published C¹-integrator reduction. The companion makes every hypothesis visible through bounded discontinuous derivatives, Volterra's derivative, dense jumps, Thomae's function, sparse spikes, and the Cantor function.

### `arc-length-and-rectifiable-curves` — two-paragraph summary

A path is a continuous parametrized map into `R^n`; its length is the supremum of its inscribed polygonal sums. The page proves refinement monotonicity, the equivalence between rectifiability and bounded variation of every coordinate, additivity under subdivision, invariance under continuous surjective monotone reparametrizations (including pauses and reversal), behavior under Lipschitz maps and similarities, and lower semicontinuity for uniform convergence.

For paths whose interior derivative extends continuously to the closed interval, length equals the Riemann integral of Euclidean speed; the piecewise-C¹ form then supplies the exact contour-integration seam while allowing corners. The arc-length function is continuous and nondecreasing, every rectifiable path factors through it as a metric unit-speed parametrization, and regular C¹ paths receive a C¹ unit-speed parametrization. The companion supplies polygonal calculations, a nonrectifiable oscillatory graph, a rectifiable corner, repeated-trace and zigzag counterexamples, and the rectifiable Cantor graph.

## Canonical-coverage harvest

The machine ledger is `research/frontier-11-batch-2.coverage.json`. It records 77 source-native or explicitly canonical headings:

| disposition | headings |
|---|---:|
| included as scaffolded items | 41 |
| absorbed inline | 14 |
| already published | 14 |
| deferred | 3 |
| out of scope | 5 |

Thus 55 harvested headings are scaffolded or absorbed, 14 resolve to exact published items, and 8 are declined. Repeated treatments of the same result by independent sources are intentionally counted separately.

All eight declines and the result-specific defense are:

1. The Lebesgue FTC for absolutely continuous functions is deferred because the library has not built Lebesgue integration and its a.e. representation theorem as a subject.
2. Banach–Zarecki is deferred because it specifically needs Luzin property N and the measure-theoretic BV/null-set machinery.
3. The full Henstock–Kurzweil FTC is deferred because gauge partitions and the Henstock–Kurzweil integral are a whole absent integration theory, not a local lemma.
4. Hunter's finite-power-sum calculation belongs to the sequences-and-series calculation track and contributes no new FTC hypothesis.
5. Hunter's Gamma recurrence uses an improper unbounded-domain integral, outside this compact-interval pair.
6. Lebl's routine symbolic substitution example is displaced by hypothesis-sensitive companion examples; the substitution theorem itself is included.
7. Lebl's improper-integral substitution likewise belongs to the improper-integral page.
8. Denzler's geodesic-existence application is a direct-method calculus-of-variations theorem, whereas its lower-semicontinuity input is included here.

The first three are the declines most likely to be challenged. They are not missing-machinery excuses for a theorem inside the page's Riemann scope: each would require importing a whole integration theory the current reading order has not reached. No retained result was declined for want of a constructible lemma.

## Source ledger

Every URL was opened and the exact range in the coverage JSON was read through its listed headings.

| code | source | role |
|---|---|---|
| HUN | John K. Hunter, *An Introduction to Real Analysis*, Chapter 12, <https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf> | Textbook primary for Newton–Leibniz, pointwise FTC, integration by parts, substitution, and the oscillatory derivative examples. |
| LEB-FTC | Jiří Lebl, *Basic Analysis I & II*, §5.3, <https://www.jirka.org/ra/html/sec_ftc.html> | Independent textbook treatment of both Riemann FTC directions, finite exceptional points, change of variables, and dense jump examples. |
| LEB-DUI | Jiří Lebl, *Basic Analysis I & II*, §9.1, <https://www.jirka.org/ra/html/sec_diffunderint.html> | Exact compact-rectangle differentiation-under-the-integral theorem. |
| CHE | Weibo Chen, *The Cantor Set Before Cantor*, §§3.1–3.3, <https://mat.uab.es/~rubio/students/Chen-FYP.pdf> | Detailed Volterra construction, oscillation criterion, bounded derivative, and nonintegrability proof. |
| IIT | A. R. Shastri, *Metric Spaces: Lecture Notes*, §§5–6, <https://www.math.iitb.ac.in/~ars/ma403.pdf> | Full lecture-note route for rectifiability/BV, C¹ length, reparametrization, and the graph of `x sin(1/x)`. |
| ETH | Urs Lang, *Differential Geometry I*, §1.1, <https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf> | Independent full treatment of path length, monotone reparametrizations, general arc-length factorization, and regular unit-speed parametrization. |
| UTK | Joachim Denzler, *Calculus of Variations*, §§4.4–4.10, <https://web.math.utk.edu/~denzler/M534-Sp2014/CalVar.pdf> | Independent lower-semicontinuity theorem and the uniformly convergent zigzag counterexample. |

Licensing and reuse: these sources were used for mathematical verification and citations only. No reusable-text licence was relied on. Step 5 must use original prose and only short exact fact clauses in the citation contracts; no source exposition or exercise solution is to be reproduced.

## Convention decisions and disagreements

1. FTC numbering is not stable across sources: some call Newton–Leibniz the first theorem and the integral-function derivative the second, while the published library uses the opposite familiar naming. Item titles therefore name the mathematical content and do not depend on a numeral.
2. The published derivative is relative to the stated domain, so endpoint differentiability on `[a,b]` means a one-sided derivative. The strengthened Newton–Leibniz theorem deliberately assumes differentiability only on `(a,b)`; endpoint values of the integrable derivative extension are immaterial.
3. The first FTC is pointwise at continuity points. At a jump, the new theorem records distinct one-sided derivatives; changing the value at the jump does not change the integral function.
4. The almost-everywhere corollary states the Countable-Choice assumption because the published direction “integrable implies null discontinuity set” spends it. No choice-free claim is smuggled in.
5. Hunter's substitution theorem and the published working theorem do not require monotonicity or injectivity of the inner function. Oriented limits cover reversed and coincident endpoint images.
6. For a C¹ Stieltjes integrator, “C¹” means continuous on the closed interval, differentiable in the interior, with a derivative extending continuously to the closed interval; the reduction theorem uses that extension.
7. The compact-rectangle Leibniz rule uses the same endpoint discipline: the parameter partial derivative is required only over the interior parameter range and must admit a continuous extension to the whole rectangle. The derivative of the parameter integral at the two endpoints is relative/one-sided.
8. A path is a parametrized continuous map, not its trace. The base definition takes `n>=1`; singleton parameter intervals have length zero. This avoids silently invoking published vector-derivative notation, which is likewise stated for positive target dimension.
9. Reparametrization invariance uses ETH's continuous surjective nondecreasing/nonincreasing convention and is broader than IIT's differentiable map with positive derivative: pauses and reversal are included, while nonmonotone backtracking is not.
10. The C¹ speed formula uses an interior derivative with a continuous endpoint extension. The proof must first justify the relative endpoint derivatives before invoking the published vector Newton–Leibniz statement.
11. “Unit speed” for the general rectifiable factor means metric unit speed—every subpath has length equal to the parameter difference. Differentiability and derivative norm one are asserted only in the regular C¹ corollary.
12. Lower semicontinuity is stated for uniform convergence and gives `L(gamma) <= liminf L(gamma_k)`; equality or continuity of length is false, as the zigzag companion shows.
13. New prose will write canonical natural numbers directly and never apply the canonical embedding symbol. Applied `iota` notation found in legacy dependencies is left untouched, as required.
14. The older prose in `SCHEMA.md` and parts of the scaffold brief still mention a 100-item review ceiling. The owner-dated 2026-08-11 rule in `CLAUDE.md`, `LEVELS.md`, and this dispatch makes 60 the binding split ceiling for this run.

## Authored component provenance

No AI-generated Statement or Construction is load-bearing. The only within-batch B-to-B dependency is the line/polygonal-length example, whose statement is literature-derived. Definitions have proof provenance `not-applicable`.

| item | statement | proof | rationale |
|---|---|---|---|
| `cor-ftc-integral-function-differentiable-almost-everywhere` | ai-altered | ai-altered | Combines the published Lipschitz estimate, Lebesgue criterion, and pointwise FTC; the Countable-Choice cost is part of the statement. |
| `thm-newton-leibniz-with-interior-derivative` | literature-derived | ai-altered | Hunter Theorem 12.1 and Lebl Theorem 5.3.1; adapted to the library's endpoint-relative derivative convention. |
| `cor-newton-leibniz-with-finitely-many-exceptional-points` | literature-derived | ai-altered | Lebl Exercise 5.3.3; finite split and telescope use published oriented-subinterval additivity. |
| `thm-integration-by-parts-with-interior-derivatives` | ai-altered | ai-altered | Hunter Theorem 12.10/Lebl Exercise 5.3.5, strengthened via the sourced interior-derivative Newton–Leibniz form. |
| `thm-substitution-with-riemann-integrable-inner-derivative` | ai-altered | ai-altered | Hunter Theorem 12.12 and Lebl Theorem 5.3.5; no monotonicity/injectivity and oriented endpoints are explicit. |
| `thm-one-sided-ftc-at-points-with-one-sided-limits` | literature-derived | ai-altered | Hunter Theorem 12.4 and Lebl §5.3.2; local-average proof covers both sides and endpoints. |
| `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` | literature-derived | ai-altered | Lebl Theorem 9.1.1, decomposed through the library's mean-value and uniform integral-error lemmas. |
| `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators` | ai-altered | ai-altered | Synthesis of the published C¹-integrator reduction with the two exact Riemann FTC forms. |
| `ex-bounded-discontinuous-derivative-that-is-riemann-integrable` | literature-derived | ai-altered | Hunter Example 12.2 and Chen §3.2; endpoint calculation and integrability route made explicit. |
| `cex-volterra-bounded-derivative-not-riemann-integrable` | literature-derived | ai-altered | Chen §§3.2–3.3 and Theorem 3.5; adapted to the published Smith–Volterra–Cantor construction. |
| `ex-dense-jump-integrand-with-dense-nondifferentiability` | ai-altered | ai-altered | Lebl Exercise 5.3.12 combined with the published prescribed-jump example and the new one-sided FTC. |
| `ex-thomae-integral-function-differentiates-through-dense-discontinuities` | ai-altered | ai-generated | New consequence of the published Thomae integral-zero example; elementary and non-load-bearing. |
| `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` | ai-generated | ai-generated | New geometric-spike witness; checkable and non-load-bearing. |
| `cex-ae-zero-derivative-does-not-determine-endpoint-change` | literature-derived | ai-altered | Standard Cantor-function counterexample using published endpoint, local-constancy, and null-set facts. |
| `def-path-polygonal-length-and-rectifiability-in-rn` | literature-derived | not-applicable | IIT §5 and ETH §1.1; a parametrized continuous map and supremum of polygonal sums. |
| `lem-polygonal-length-is-monotone-under-refinement` | literature-derived | ai-generated | Canonical triangle-inequality lemma; direct one-point insertion proof. |
| `thm-rectifiable-iff-coordinate-functions-have-bounded-variation` | literature-derived | ai-altered | IIT §5(i); both inequalities and the exact bridge to the published BV page. |
| `thm-arc-length-is-additive-over-subintervals` | literature-derived | ai-altered | Standard result; proof split into partition splicing and refinement. |
| `thm-arc-length-is-invariant-under-monotone-reparametrization` | ai-altered | ai-altered | ETH §1.1, extending IIT's smooth increasing case to pauses and reversal. |
| `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities` | ai-altered | ai-generated | Standard chordwise estimate, including isometries and zero dilation. |
| `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence` | literature-derived | ai-altered | Denzler Theorem 4.9; fixed-partition/liminf proof. |
| `thm-c1-paths-have-length-equal-to-the-integral-of-speed` | literature-derived | ai-altered | IIT §5(ii) and ETH §1.1; exact endpoint-extension hypothesis and both inequalities. |
| `cor-piecewise-c1-paths-have-additive-speed-integral-length` | literature-derived | ai-altered | Standard contour-integration form from the C¹ formula and length additivity; corners allowed. |
| `def-arc-length-function` | literature-derived | not-applicable | ETH §1.1 definition, using restriction and established additive length. |
| `lem-arc-length-function-is-continuous-and-nondecreasing` | ai-altered | ai-altered | Standard properties proved through the published componentwise BV variation-jump theorem. |
| `thm-every-rectifiable-path-has-an-arc-length-parametrization` | literature-derived | ai-altered | ETH Lemma 1.1; includes pauses, level sets, metric unit speed, and length zero. |
| `cor-regular-c1-paths-have-c1-unit-speed-parametrizations` | literature-derived | ai-altered | ETH §1.1 specialized to C¹ and the published inverse-derivative theorem. |
| `ex-line-segment-and-polygonal-path-length` | literature-derived | ai-altered | Canonical source example; kept literature-derived because a later companion item uses it. |
| `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` | literature-derived | ai-altered | IIT §6; harmonic variation via the componentwise BV theorem. |
| `ex-v-shaped-path-is-rectifiable-but-not-c1` | literature-derived | ai-generated | Standard corner example; direct piecewise-speed and one-sided quotient verification. |
| `cex-the-same-trace-can-have-different-path-lengths` | ai-generated | ai-generated | New bounded forward/backward traversal witness; checkable and non-load-bearing. |
| `cex-arc-length-is-not-continuous-under-uniform-convergence` | literature-derived | ai-altered | Denzler §4.7, normalized to height 1/n and exact length √2. |
| `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous` | ai-altered | ai-altered | Published Cantor BV/not-AC example plus the componentwise rectifiability theorem. |

## Published dependencies and coverage citations opened from disk

Every item below was opened from `items/<id>.md`, confirmed `status: published`, and its actual Definition, Statement, Example, or Counterexample content was read. There are 64 unique items: 58 manifest dependencies and 6 additional harvest-receipt citations. None is legacy-unclassified and none has `provenance.statement: ai-generated`.

Routes mean: `component-lit` = the exact literature-derived component on disk was accepted after checking its direction and conventions; `component-adapted/knowledge` = an AI-altered but standard exact statement was independently confirmed from the disk text and mathematical knowledge; `component-adapted/source` = the AI-altered statement was additionally checked against a named harvest source or the published construction it formalizes.

| dependency | confidence route | use |
|---|---|---|
| `cex-an-integrable-function-with-no-primitive` | component-adapted/source (HUN/LEB-FTC) | Harvest receipt: exact sign-function discontinuity/primitive obstruction read. |
| `cor-cantor-function-is-continuous` | component-lit | Manifest edge: exact published continuity, monotonicity, and endpoint-value content was read. |
| `cor-countably-many-discontinuities-integrable` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `cor-integrability-of-absolute-values-products-and-lattice-operations` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `cor-mean-value-theorem` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `cor-vector-valued-ftc-and-lipschitz-bound` | component-adapted/source (published vector page + HUN) | Manifest edge: its FTC clause assumes relative endpoint derivatives; Step 5 must establish them before use. |
| `def-absolutely-continuous-function` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-bounded-variation-and-total-variation` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-complete-ordered-field` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-darboux-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-derivative` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-directional-and-partial-derivatives` | component-adapted/source (LEB-DUI conventions) | Manifest edge: exact published content and direction named by the item id were read. |
| `def-euclidean-inner-product` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-fat-cantor-set` | component-adapted/source (CHE §§3.2–3.3) | Manifest edge: the exact Smith–Volterra–Cantor interval construction was read. |
| `def-isometry-and-metric-embedding` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-lipschitz-holder-contraction` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-monotone-function` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-norm-and-normed-space` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-one-sided-limits` | component-adapted/source (HUN/LEB-FTC) | Manifest edge: exact published content and direction named by the item id were read. |
| `def-oriented-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-oscillation` | component-adapted/source (CHE Definition 3.1) | Manifest edge: exact published content and direction named by the item id were read. |
| `def-p-norms-on-rn` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-partition-and-refinement` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-pointwise-uniform-and-uniformly-cauchy-convergence` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-the-integral-function` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-vector-valued-derivative-and-integral` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-vector-valued-functions-limits-and-continuity` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `ex-cantor-function-bv-not-absolutely-continuous` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `ex-harmonic-series-diverges` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `ex-monotone-function-discontinuous-exactly-at-the-rationals` | component-lit | Manifest edge: monotonicity, exact rational discontinuity set, and jump type were read. |
| `ex-one-over-n-null` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `ex-polynomial-integrals-by-the-ftc` | component-lit | Harvest receipt: exact polynomial endpoint-evaluation example read. |
| `ex-thomae-is-riemann-integrable-with-integral-zero` | component-lit | Manifest edge: both integrability and zero integral were read. |
| `ex-two-root-x-and-its-unbounded-derivative` | component-adapted/source (HUN Example 12.3) | Harvest receipt: exact unbounded-endpoint-derivative example read. |
| `lem-basic-properties-of-total-variation` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `lem-geometric-sequence-null` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `lem-integral-elementary-bounds` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `lem-jumps-of-the-variation-function` | component-lit | Manifest edge: continuity of the variation function at continuity points is the used direction. |
| `lem-uniform-integral-error-bound` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-additivity-over-subintervals` | component-adapted/knowledge | Manifest edge: restriction equivalence and the fully oriented additive identity were read. |
| `thm-algebra-of-derivatives` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-cantor-function-properties` | component-adapted/source (published Cantor construction) | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-cantor-set-properties` | component-adapted/source (published Cantor construction) | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-cauchy-schwarz-and-the-euclidean-norm` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-chain-rule` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-componentwise-limits-and-continuity` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-continuity-iff-oscillation-zero` | component-lit | Harvest receipt: both directions of the zero-oscillation criterion read. |
| `thm-continuous-implies-integrable` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-darboux-equals-riemann` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-derivative-of-an-inverse` | component-adapted/source (ETH inverse arc-length use) | Manifest edge: nonzero derivative gives the inverse derivative, including relative endpoints. |
| `thm-fat-cantor-set-has-positive-measure` | component-adapted/source (CHE §§3.2–3.3) | Manifest edge: the quantitative lower bound for interval covers, not merely non-nullity, was checked. |
| `thm-ftc-first-part` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-heine-cantor-r` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-lebesgue-criterion` | component-lit | Manifest edge: the integrable-to-null direction and its Countable-Choice cost were read. |
| `thm-linearity-of-the-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-monotone-implies-integrable` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-monotonicity-of-the-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-norm-inequality-for-the-vector-valued-integral` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-of-square-roots` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-riemann-criterion` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-riemann-stieltjes-c1-integrator-reduction` | component-lit | Manifest + harvest: exact continuous interior derivative-extension hypotheses and equality direction checked. |
| `thm-riemann-stieltjes-change-of-variable` | component-lit | Harvest receipt: exact strictly increasing continuous-bijection hypothesis and both existence directions read. |
| `thm-riemann-stieltjes-integration-by-parts` | component-lit | Harvest receipt: exact iff-existence and endpoint identity read. |
| `thm-the-integral-function-is-lipschitz` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |

No opened dependency was false or ambiguous enough to block use. The main seam requiring care is `cor-vector-valued-ftc-and-lipschitz-bound`: its FTC clause assumes relative endpoint derivatives, so the C¹ arc-length proof must derive those endpoint values from the continuous interior derivative extension before citing it. The legacy applied-`iota` expressions visible in several published statements are not copied into new content.

## Proof contracts and Step-5 obligations

The version-1 machine map is `research/frontier-11-batch-2.proof-contracts.json`. Its scope is exactly the 31 proof-bearing scaffold items (all 33 items except the two definitions), with a source clause, two nonroutine derivation obligations, all eight standard boundary dispositions, and an empty finite-smoke list for each. Exact authored quotations, fact labels, and proof-step mappings must be reconciled against the Step-5 item text before the strict proof-contract gate.

Highest-risk authoring obligations:

1. Volterra must be constructed from the published Smith–Volterra–Cantor set and the truncated oscillatory seed; “a derivative need not be integrable” is not enough. The proof needs differentiability on the fat set, boundedness of the derivative, and a quantitative Darboux-gap argument.
2. Interior Newton–Leibniz must never use endpoint derivative values. The mean-value/Darboux squeeze is the point of the item.
3. Substitution must type-check `F circ phi`, prove `(f circ phi)h` integrable, and cover reversed or coincident endpoint images without adding monotonicity.
4. The almost-everywhere FTC must state and spend Countable Choice only in the integrable-to-null direction.
5. Rectifiable iff componentwise BV needs both inequalities and the positive-dimension convention; it cannot be demoted to a remark.
6. Monotone reparametrization must prove the converse partition comparison when pauses create repeated images and must handle reversal separately.
7. The C¹ length formula needs both inequalities. The upper bound uses vector Newton–Leibniz only after endpoint derivatives are established; the reverse bound uses uniform continuity of the extended derivative.
8. General arc-length parametrization must prove well-definedness on level sets of the length function, metric unit speed on every subinterval, and the total-length-zero case.
9. Lower semicontinuity fixes a partition before taking a liminf; interchanging the supremum and liminf without that argument is not licensed.
10. The `x sin(1/x)` graph must exhibit an explicit alternating sequence whose vertical variation dominates a divergent harmonic subseries.

## Dependency closure, split decision, and blockers

All manifest dependencies resolve to published items on disk or earlier items in the same A/B pair; no other frontier-11 batch is referenced. The pair-level `requires` arrays remain exactly those in the dispatch. The shared `bounded-variation-and-riemann-stieltjes` page was opened once and its actual published items were used by both pairs; `rn-as-a-normed-space` and the pre-existing working FTC page were also opened directly.

Split proposal: none. The exact item cut is 8 items on `the-fundamental-theorems-of-calculus` and 13 on `arc-length-and-rectifiable-curves`, with their 6-item companions unchanged. No result was dropped to stay below the ceiling.

Blockers: none. No permission prompt, escalation, shared-file edit, published-item edit, or cross-batch coordination was needed. The operation explicitly unavailable in the brief, `tools/gates.mjs`, was not run.

## Final validation snapshot

Run from the repository root on 2026-08-11:

- `node tools/validate-plan.mjs research/plan-spec.json` — **pass**: declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages with item lists.
- `node tools/coverage-checklist.mjs research/frontier-11-batch-2.coverage.json` — **pass**: 2 pages, 77 harvested results, 0 errors, 0 warnings.
- Additional scaffold check: `node tools/content-policy.mjs research/frontier-11-batch-2.pages.json --manifest-only --json` — **pass**: scope 33, 0 errors, 0 warnings.

Per the dispatch, `tools/gates.mjs` was not run.
