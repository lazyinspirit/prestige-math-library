# frontier-11 batch 2 — Step-5 authoring notes

Beta: `Beta-frontier-11-2`
Run/date: `frontier-11`, 2026-08-12
Writable research scope: the four `research/frontier-11-batch-2.*` artifacts named by the dispatch; authored page and item files are the Step-5 deliverables.

## Outcome, counts, and settled A-page summaries

No split is proposed. After the step-3 fixes, the FTC pair contains 10 A-page items and 6 B-page items; the arc-length pair contains 15 A-page items and 7 B-page items. The 25-item A-page total is distributed 10/15, far below the binding 60-item per-A-page ceiling. The exact proposed cut is therefore **none**: retain the page ids, companions, orders, and reading-order slots in the dispatch.

### `the-fundamental-theorems-of-calculus` — two-paragraph summary

This page preserves the published working FTC instead of duplicating it. Its opening roadmap points to the two named theorems at order 161 and locates the three FTC-I strengths and five Riemann FTC-II strengths. It then strengthens Newton–Leibniz to continuity on the closed interval with only an integrable extension of the interior derivative, treats finite exceptional sets, proves Botsko's countable-exception form by a shrinking-secant-interval argument, and derives integration by parts and substitution with their exact hypotheses. The substitution theorem requires neither monotonicity nor injectivity, and oriented endpoint images are retained.

The other half separates pointwise, one-sided, almost-everywhere, parameter-dependent, and Riemann–Stieltjes forms. It identifies derivatives of indefinite integrals at one-sided limit points, records the Countable-Choice cost of the almost-everywhere conclusion, proves compact-rectangle differentiation under the integral sign, and obtains both Stieltjes FTC forms from the published C¹-integrator reduction. The companion makes every hypothesis visible through bounded discontinuous derivatives, Volterra's derivative, dense jumps, Thomae's function, sparse spikes, and the Cantor function.

### `arc-length-and-rectifiable-curves` — two-paragraph summary

A path is a continuous parametrized map into `R^n`; its length is the supremum of its inscribed polygonal sums. The page names the endpoint-chord bound, proves refinement monotonicity, the equivalence between rectifiability and bounded variation of every coordinate, additivity under subdivision, invariance under continuous surjective monotone reparametrizations (including pauses and reversal), behavior under Lipschitz maps and similarities, and lower semicontinuity for uniform convergence.

For paths whose interior derivative extends continuously to the closed interval, length equals the Riemann integral of Euclidean speed; the graph-length formula and piecewise-C¹ form are explicit corollaries. The arc-length function is continuous and nondecreasing, strictly increasing exactly when no nondegenerate subpath is constant; every rectifiable path factors through it as a metric unit-speed parametrization, and regular C¹ paths receive a C¹ unit-speed parametrization. The companion now includes the worked unit-circle computation alongside polygonal calculations, a nonrectifiable oscillatory graph, a rectifiable corner, repeated-trace and zigzag counterexamples, and the rectifiable Cantor graph.

## Canonical-coverage harvest

The machine ledger is `research/frontier-11-batch-2.coverage.json`. It records 101 source-native or explicitly canonical headings:

| disposition | headings |
|---|---:|
| included as scaffolded items | 55 |
| absorbed inline | 22 |
| already published | 14 |
| deferred | 4 |
| out of scope | 6 |

Thus 77 harvested headings are scaffolded or absorbed, 14 resolve to exact published items, and 10 are declined. Repeated treatments of the same result by independent sources are intentionally counted separately.

All ten declines and the result-specific defense are:

1. The Lebesgue FTC for absolutely continuous functions is deferred because the library has not built Lebesgue integration and its a.e. representation theorem as a subject.
2. Banach–Zarecki is deferred because it specifically needs Luzin property N and the measure-theoretic BV/null-set machinery.
3. The full Henstock–Kurzweil FTC is deferred because gauge partitions and the Henstock–Kurzweil integral are a whole absent integration theory, not a local lemma.
4. Cousin's lemma is deferred because F2 proves the countable-exception monotonicity lemma directly by shrinking secant intervals, leaving no gauge-fine-partition consumer. The lemma is constructible now, but would be standalone padding; it belongs at the front of the future Henstock–Kurzweil development where it is load-bearing.
5. Hunter's finite-power-sum calculation belongs to the sequences-and-series calculation track and contributes no new FTC hypothesis.
6. Hunter's Gamma recurrence uses an improper unbounded-domain integral, outside this compact-interval pair.
7. Lebl's routine symbolic substitution example is displaced by hypothesis-sensitive companion examples; the substitution theorem itself is included.
8. Lebl's improper-integral substitution likewise belongs to the improper-integral page.
9. Denzler's geodesic-existence application is a direct-method calculus-of-variations theorem, whereas its lower-semicontinuity input is included here.
10. Apostol Theorem 6.20 classifies injective paths with the same trace by a compact-inverse argument. This pair instead needs and proves length invariance under a given monotone surjection, including pauses, and no retained result consumes the stronger trace classification.

The first three are the approved D4 declines. They are not missing-machinery excuses for a theorem inside the page's Riemann scope: each would require importing a whole integration theory the current reading order has not reached. Cousin's lemma is the deliberately different case—constructible but unused after selecting the direct proof of F2—and its coverage row says so rather than pretending machinery is absent.

## Step-3 finding dispositions

- **F1:** added `rem-ftc-roadmap` first on the FTC A page, with dependencies on the published `thm-ftc-first-part` and `thm-ftc-second-part`.
- **F2:** added `thm-newton-leibniz-with-a-countable-exceptional-set`; the final proof proves the countable-exception monotonicity lemma inline by nested intervals, spending a geometric slope-loss budget while excluding the enumerated exceptional points, followed by Darboux lower/upper bounds and telescoping.
- **F3:** added the required `deferred` coverage row for Cousin's lemma. It is deferred to the future Henstock–Kurzweil development because the direct F2 proof leaves it with no consumer.
- **F4:** not taken. No harvested heading or downstream scaffold item requires moving limits, while the fixed-limit theorem is the named plan obligation; adding the optional corollary here would be an unsourced enrichment contrary to generated-claim minimization.
- **A1:** added `cor-chord-length-is-at-most-arc-length` and made it an explicit dependency of both the arc-length-function strictness clause and the general arc-length parametrization.
- **A2:** added `cor-length-of-the-graph-of-a-c1-function` as a specialization of the C¹ speed formula.
- **A3:** chose the trigonometric route, added `ex-unit-circle-arc-has-length-theta`, and added the published page `sine-cosine-and-the-definition-of-pi` to the A page's `requires`.
- **R-A:** added Apostol, *Mathematical Analysis*, 2nd ed., Ch. 6 §§6.9–6.12, book pp. 133–137. Every section, definition, numbered theorem, and example heading through Theorem 6.20 is enumerated in the coverage ledger; the range stops before the Exercises.

## Step-4 B-leaf and prerequisite repair

The step-4 splice exposed ten validator errors. The four `b-leaf` errors and the four induced B-page `undeclared-prereq` errors are removed by replacing each formal dependency on a published examples-page item with an A-page route and an explicit inline specialization:

1. `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` now cites `thm-p-series-rational` at `p=1`, plus the A-page nonnegative-partial-sum and trigonometric results needed to turn the alternating extrema into unbounded coordinate variation. The reader-facing proof may mention the published harmonic-series example, but it is not a formal dependency.
2. `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous` now obtains BV from `thm-jordan-decomposition-for-bv-functions` and proves failure of absolute continuity directly from `def-absolutely-continuous-function` and the published Cantor recursion/digit construction. It no longer cites the Cantor-function examples page.
3. `ex-dense-jump-integrand-with-dense-nondifferentiability` now applies `thm-monotone-with-prescribed-discontinuity-set` to the countable set of rationals, using `thm-rationals-countable`, before restricting to `[0,1]`. It no longer cites the prescribed-jump example.
4. `ex-thomae-integral-function-differentiates-through-dense-discontinuities` now derives integrability from `cor-countably-many-discontinuities-integrable` and derives the zero integral from the A-page Darboux definitions and irrational density. It no longer cites the Thomae example.

The two independent A-page `undeclared-prereq` errors received different dispositions. `lem-uniform-integral-error-bound` is genuinely used to pass the uniformly controlled parameter difference quotients through the integral, so `uniform-convergence-of-functions` is now declared in the FTC page's `requires`. By contrast, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` has a single real parameter and needs only the ordinary derivative of each parameter slice. Its strategy and contract now use `def-derivative`; `def-directional-and-partial-derivatives` and the page `the-total-derivative` are not used or declared.

No coverage disposition changed: the harvested headings still resolve to the same 38 scaffold item ids, and none of the four removed B-page ids appeared as an `already-published` coverage receipt. The coverage ledger therefore needs no retag. No Alpha finding is disputed and there is no blocker.

## Source ledger

Every URL was opened and every freely exposed range in the coverage JSON was read through its listed headings. The Botsko primary record exposes the exact journal metadata but not the two-page text; its theorem statement was checked in full in Swartz's open paper, which explicitly identifies it as Botsko's corollary. This access qualification is recorded instead of claiming to have read paywalled prose.

| code | source | role |
|---|---|---|
| HUN | John K. Hunter, *An Introduction to Real Analysis*, Chapter 12, <https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf> | Textbook primary for Newton–Leibniz, pointwise FTC, integration by parts, substitution, and the oscillatory derivative examples. |
| LEB-FTC | Jiří Lebl, *Basic Analysis I & II*, §5.3, <https://www.jirka.org/ra/html/sec_ftc.html> | Independent textbook treatment of both Riemann FTC directions, finite exceptional points, change of variables, and dense jump examples. |
| LEB-DUI | Jiří Lebl, *Basic Analysis I & II*, §9.1, <https://www.jirka.org/ra/html/sec_diffunderint.html> | Exact compact-rectangle differentiation-under-the-integral theorem. |
| BOT | Michael W. Botsko, “A Fundamental Theorem of Calculus that Applies to All Riemann Integrable Functions,” *Mathematics Magazine* 64(5) (1991), 347–348, <https://doi.org/10.1080/0025570X.1991.11977632> | Primary bibliographic record for the countable-exception theorem; exact title, author, volume, issue, year, pages, and DOI confirmed. |
| SWA | Charles Swartz, “Even More on the Fundamental Theorem of Calculus,” *Proyecciones* 12(2) (1993), 129–135, <https://scispace.com/pdf/even-more-on-the-fundamental-theorem-of-calculus-ckox8bw1gn.pdf> | Open corroborating source: introduction and Theorem 1 give Botsko's exact Riemann-integrable/countable-exception statement and note that primitive continuity is indispensable. |
| CHE | Weibo Chen, *The Cantor Set Before Cantor*, §§3.1–3.3, <https://mat.uab.es/~rubio/students/Chen-FYP.pdf> | Detailed Volterra construction, oscillation criterion, bounded derivative, and nonintegrability proof. |
| IIT | A. R. Shastri, *Metric Spaces: Lecture Notes*, §§5–6, <https://www.math.iitb.ac.in/~ars/ma403.pdf> | Full lecture-note route for rectifiability/BV, C¹ length, reparametrization, and the graph of `x sin(1/x)`. |
| ETH | Urs Lang, *Differential Geometry I*, §1.1, <https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf> | Independent full treatment of path length, monotone reparametrizations, general arc-length factorization, and regular unit-speed parametrization. |
| UTK | Joachim Denzler, *Calculus of Variations*, §§4.4–4.10, <https://web.math.utk.edu/~denzler/M534-Sp2014/CalVar.pdf> | Independent lower-semicontinuity theorem and the uniformly convergent zigzag counterexample. |
| APO | Tom M. Apostol, *Mathematical Analysis*, 2nd ed., Ch. 6 §§6.9–6.12, book pp. 133–137, <https://studylib.net/doc/27619444/mathematical-analysis-2e-apostol> | Required textbook treatment: curves and paths, supremum arc length, BV equivalence, C¹ speed, additivity, continuity/strictness of the arc-length function, and change of parameter. |

Licensing and reuse: these sources were used for mathematical verification and citations only. No reusable-text licence was relied on. Step 5 uses original prose and exact source clauses in the citation contracts; no source exposition or exercise solution is reproduced.

## Convention decisions and disagreements

1. FTC numbering is not stable across sources: some call Newton–Leibniz the first theorem and the integral-function derivative the second, while the published library uses the opposite familiar naming. Item titles therefore name the mathematical content and do not depend on a numeral.
2. The published derivative is relative to the stated domain, so endpoint differentiability on `[a,b]` means a one-sided derivative. The strengthened Newton–Leibniz theorem deliberately assumes differentiability only on `(a,b)`; endpoint values of the integrable derivative extension are immaterial.
3. The first FTC is pointwise at continuity points. At a jump, the new theorem records distinct one-sided derivatives; changing the value at the jump does not change the integral function.
4. The almost-everywhere corollary states the Countable-Choice assumption because the published direction “integrable implies null discontinuity set” spends it. No choice-free claim is smuggled in.
5. Hunter's substitution theorem and the published working theorem do not require monotonicity or injectivity of the inner function. Oriented limits cover reversed and coincident endpoint images.
6. For a C¹ Stieltjes integrator, “C¹” means continuous on the closed interval, differentiable in the interior, with a derivative extending continuously to the closed interval; the reduction theorem uses that extension.
7. The compact-rectangle Leibniz rule is deliberately one-parameter: for each fixed integration variable, the ordinary derivative of the parameter slice is required only over the interior parameter range and is represented by a function extending continuously to the whole rectangle. The derivative of the parameter integral at the two endpoints is relative/one-sided. No total-derivative or multivariable partial-derivative definition is needed.
8. A path is a parametrized continuous map, not its trace. The base definition takes `n>=1`; singleton parameter intervals have length zero. This avoids silently invoking published vector-derivative notation, which is likewise stated for positive target dimension.
9. Reparametrization invariance uses ETH's continuous surjective nondecreasing/nonincreasing convention and is broader than IIT's differentiable map with positive derivative: pauses and reversal are included, while nonmonotone backtracking is not.
10. The C¹ speed formula uses an interior derivative with a continuous endpoint extension. The proof must first justify the relative endpoint derivatives before invoking the published vector Newton–Leibniz statement.
11. “Unit speed” for the general rectifiable factor means metric unit speed—every subpath has length equal to the parameter difference. Differentiability and derivative norm one are asserted only in the regular C¹ corollary.
12. Lower semicontinuity is stated for uniform convergence and gives `L(gamma) <= liminf L(gamma_k)`; equality or continuity of length is false, as the zigzag companion shows.
13. The authored prose writes canonical natural numbers directly and never applies the canonical embedding symbol. Applied `iota` notation found in legacy dependencies is left untouched, as required.
14. The older prose in `SCHEMA.md` and parts of the scaffold brief still mention a 100-item review ceiling. The owner-dated 2026-08-11 rule in `CLAUDE.md`, `LEVELS.md`, and this dispatch makes 60 the binding split ceiling for this run.
15. Botsko's theorem assumes the exceptional set lies in `(a,b)`, needs no endpoint derivatives, and uses continuity of the primitive at every point. Its proof does not invoke Cousin's lemma: nested secant intervals exclude one enumerated exceptional point at each stage while losing a summable amount of positive slope, and their nonexceptional limit contradicts the derivative inequality.
16. The Cantor-function companion remains the sharp warning that an almost-everywhere derivative identity without the required regularity does not control endpoint change; it is not used to prove Botsko's positive result.
17. Apostol's Theorem 6.19 adds strict increase of the arc-length function when the path is constant on no subinterval. The existing lemma is strengthened with that clause, and the newly named chord bound supplies the exact zero-length-implies-constant route.
18. The unit-circle computation depends on power-series sine and cosine from the published order-179 page; no geometric definition of angle or `pi` is used, so the dependency direction is noncircular.

## Authored component provenance

No AI-generated Statement or Construction is load-bearing. There are no dependencies on items homed on either examples page: the Volterra seed calculation, repeated-trace length computation, and zigzag length computation are proved inline from A-page results. Definitions have proof provenance `not-applicable`.

| item | statement | proof | rationale |
|---|---|---|---|
| `rem-ftc-roadmap` | ai-altered | not-applicable | Non-load-bearing orientation from RA-39 and the published order-161 FTC items; every strength is marked published, present, or deferred. |
| `cor-ftc-integral-function-differentiable-almost-everywhere` | ai-altered | ai-altered | Combines the published Lipschitz estimate, Lebesgue criterion, and pointwise FTC; the Countable-Choice cost is part of the statement. |
| `thm-newton-leibniz-with-interior-derivative` | literature-derived | ai-altered | Hunter Theorem 12.1 and Lebl Theorem 5.3.1; adapted to the library's endpoint-relative derivative convention. |
| `cor-newton-leibniz-with-finitely-many-exceptional-points` | literature-derived | ai-altered | Lebl Exercise 5.3.3; finite split and telescope use published oriented-subinterval additivity. |
| `thm-newton-leibniz-with-a-countable-exceptional-set` | literature-derived | ai-altered | Botsko 1991, exact statement corroborated by Swartz Theorem 1; the countable-exception monotonicity bridge is proved locally by a nested-secant-interval argument with geometric slope-loss budgets. |
| `thm-integration-by-parts-with-interior-derivatives` | ai-altered | ai-altered | Hunter Theorem 12.10/Lebl Exercise 5.3.5, strengthened via the sourced interior-derivative Newton–Leibniz form. |
| `thm-substitution-with-riemann-integrable-inner-derivative` | ai-altered | ai-altered | Hunter Theorem 12.12 and Lebl Theorem 5.3.5; no monotonicity/injectivity and oriented endpoints are explicit. |
| `thm-one-sided-ftc-at-points-with-one-sided-limits` | literature-derived | ai-altered | Hunter Theorem 12.4 and Lebl §5.3.2; local-average proof covers both sides and endpoints. |
| `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` | literature-derived | ai-altered | Lebl Theorem 9.1.1, stated for ordinary derivatives of the one-variable parameter slices and decomposed through the library's mean-value and uniform integral-error lemmas. |
| `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators` | ai-altered | ai-altered | Synthesis of the published C¹-integrator reduction with the two exact Riemann FTC forms. |
| `ex-bounded-discontinuous-derivative-that-is-riemann-integrable` | literature-derived | ai-altered | Hunter Example 12.2 and Chen §3.2; endpoint calculation and integrability route made explicit. |
| `cex-volterra-bounded-derivative-not-riemann-integrable` | literature-derived | ai-altered | Chen §§3.2–3.3 and Theorem 3.5; adapted to the published Smith–Volterra–Cantor construction. |
| `ex-dense-jump-integrand-with-dense-nondifferentiability` | ai-altered | ai-altered | Lebl Exercise 5.3.12 combined with the A-page prescribed-discontinuity theorem specialized to the rationals and the new one-sided FTC. |
| `ex-thomae-integral-function-differentiates-through-dense-discontinuities` | ai-altered | ai-generated | New consequence after re-deriving Thomae integrability and zero integral inline from the A-page continuity-set, countable-discontinuity, and Darboux results; elementary and non-load-bearing. |
| `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` | ai-generated | ai-generated | New geometric-spike witness; checkable and non-load-bearing. |
| `cex-ae-zero-derivative-does-not-determine-endpoint-change` | literature-derived | ai-altered | Standard Cantor-function counterexample using published endpoint, local-constancy, and null-set facts. |
| `def-path-polygonal-length-and-rectifiability-in-rn` | literature-derived | not-applicable | IIT §5 and ETH §1.1; a parametrized continuous map and supremum of polygonal sums. |
| `cor-chord-length-is-at-most-arc-length` | literature-derived | ai-altered | Apostol §6.10's shortest-chord observation, proved from the endpoint-only partition and the defining supremum. |
| `lem-polygonal-length-is-monotone-under-refinement` | literature-derived | ai-generated | Canonical triangle-inequality lemma; direct one-point insertion proof. |
| `thm-rectifiable-iff-coordinate-functions-have-bounded-variation` | literature-derived | ai-altered | IIT §5(i); both inequalities and the exact bridge to the published BV page. |
| `thm-arc-length-is-additive-over-subintervals` | literature-derived | ai-altered | Standard result; proof split into partition splicing and refinement. |
| `thm-arc-length-is-invariant-under-monotone-reparametrization` | ai-altered | ai-altered | ETH §1.1, extending IIT's smooth increasing case to pauses and reversal. |
| `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities` | ai-altered | ai-generated | Standard chordwise estimate, including isometries and zero dilation. |
| `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence` | literature-derived | ai-altered | Denzler Theorem 4.9; fixed-partition/liminf proof. |
| `thm-c1-paths-have-length-equal-to-the-integral-of-speed` | literature-derived | ai-altered | IIT §5(ii) and ETH §1.1; exact endpoint-extension hypothesis and both inequalities. |
| `cor-length-of-the-graph-of-a-c1-function` | literature-derived | ai-altered | Standard graph specialization of the sourced C¹ speed formula; componentwise differentiation and the published Euclidean two-norm give the integrand. |
| `cor-piecewise-c1-paths-have-additive-speed-integral-length` | literature-derived | ai-altered | Standard contour-integration form from the C¹ formula and length additivity; corners allowed. |
| `def-arc-length-function` | literature-derived | not-applicable | ETH §1.1 definition, using restriction and established additive length. |
| `lem-arc-length-function-is-continuous-and-nondecreasing` | ai-altered | ai-altered | Continuity uses the published componentwise BV variation-jump theorem; Apostol Theorem 6.19 supplies the strictness clause, proved through the named chord bound. |
| `thm-every-rectifiable-path-has-an-arc-length-parametrization` | literature-derived | ai-altered | ETH Lemma 1.1; includes pauses, level sets, metric unit speed, and length zero. |
| `cor-regular-c1-paths-have-c1-unit-speed-parametrizations` | literature-derived | ai-altered | ETH §1.1 specialized to C¹ and the published inverse-derivative theorem. |
| `ex-line-segment-and-polygonal-path-length` | literature-derived | ai-altered | Canonical source example; kept literature-derived because a later companion item uses it. |
| `ex-unit-circle-arc-has-length-theta` | literature-derived | ai-altered | Standard circular-arc computation using the published order-179 trigonometric derivative and Pythagorean items plus the C¹ speed theorem. |
| `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` | literature-derived | ai-altered | IIT §6; the alternating-extrema variation is compared inline with the `p=1` specialization of the A-page rational p-series theorem before applying the componentwise BV theorem. |
| `ex-v-shaped-path-is-rectifiable-but-not-c1` | literature-derived | ai-generated | Standard corner example; direct piecewise-speed and one-sided quotient verification. |
| `cex-the-same-trace-can-have-different-path-lengths` | ai-generated | ai-generated | New bounded forward/backward traversal witness; checkable and non-load-bearing. |
| `cex-arc-length-is-not-continuous-under-uniform-convergence` | literature-derived | ai-altered | Denzler §4.7, normalized to height 1/n and exact length √2. |
| `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous` | ai-altered | ai-altered | The A-page Jordan-decomposition and absolute-continuity results, specialized inline to the published Cantor recursion/digit construction, plus the componentwise rectifiability theorem. |

## Published dependencies and coverage citations opened from disk

Every item below was opened from `items/<id>.md`, confirmed `status: published`, and its actual Definition, Statement, Example, or Counterexample content was read. The final authoring closure contains 85 unique items: 78 formal dependencies and 7 additional harvest-receipt citations. None is legacy-unclassified and none has `provenance.statement: ai-generated`.

Routes mean: `component-lit` = the exact literature-derived component on disk was accepted after checking its direction and conventions; `component-adapted/knowledge` = an AI-altered but standard exact statement was independently confirmed from the disk text and mathematical knowledge; `component-adapted/source` = the AI-altered statement was additionally checked against a named harvest source or the published construction it formalizes.

| dependency | confidence route | use |
|---|---|---|
| `cex-an-integrable-function-with-no-primitive` | component-adapted/source (HUN/LEB-FTC) | Harvest receipt: exact sign-function discontinuity/primitive obstruction read. |
| `cor-archimedean-reciprocal` | component-adapted/knowledge | Manifest edge: reciprocals of positive natural numbers fall below every positive tolerance, used to send the oscillatory extrema to zero. |
| `cor-cantor-function-is-continuous` | component-lit | Manifest edge: exact published continuity, monotonicity, and endpoint-value content was read. |
| `cor-countably-many-discontinuities-integrable` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `cor-integrability-of-absolute-values-products-and-lattice-operations` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `cor-mean-value-theorem` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `cor-trigonometric-parity-and-pythagorean-identity` | component-adapted/source (published order-179 trigonometry page) | Manifest edge: the exact global Pythagorean identity used to make the circular-arc speed one was read. |
| `cor-vector-valued-ftc-and-lipschitz-bound` | component-adapted/source (published vector page + HUN) | Manifest edge: its FTC clause assumes relative endpoint derivatives; the authored C¹ proof establishes them before use. |
| `def-absolutely-continuous-function` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-bounded-variation-and-total-variation` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-cantor-function` | component-adapted/source (published Cantor construction) | Manifest edge: the ternary-to-binary digit definition used for stage endpoint increments was read. |
| `def-cantor-set` | component-lit | Manifest edge: the recursive middle-thirds construction and its disjoint scaled halves were read. |
| `def-complete-ordered-field` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-continuity-real` | component-adapted/knowledge | Manifest edge: the relative-domain epsilon-delta condition needed at Botsko's exceptional points and both endpoints was read. |
| `def-countable` | component-adapted/source (BOT/SWA) | Manifest edge: the library convention means at most countable, so the empty and finite exceptional cases are included. |
| `def-darboux-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-darboux-sums` | component-adapted/knowledge | Manifest edge: the local infima, suprema, and lower/upper sums used in Botsko's partitionwise squeeze were read. |
| `def-derivative` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-dirichlet-and-thomae-functions` | component-lit | Manifest edge: Thomae's least-denominator values, zero values at irrationals, and bound by one were read. |
| `def-euclidean-inner-product` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-extended-reals` | component-adapted/knowledge | Manifest edge: the two infinities and the order convention were read before defining length as an extended-real supremum. |
| `def-fat-cantor-set` | component-adapted/source (CHE §§3.2–3.3) | Manifest edge: the exact Smith–Volterra–Cantor interval construction was read. |
| `def-isometry-and-metric-embedding` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-limsup-liminf` | component-adapted/knowledge | Manifest edge: the exact extended-real tail-infimum definition of liminf was read for lower semicontinuity. |
| `def-lipschitz-holder-contraction` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-monotone-function` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-norm-and-normed-space` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-one-sided-limits` | component-adapted/source (HUN/LEB-FTC) | Manifest edge: exact published content and direction named by the item id were read. |
| `def-oriented-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-oscillation` | component-adapted/source (CHE Definition 3.1) | Manifest edge: exact published content and direction named by the item id were read. |
| `def-p-norms-on-rn` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-partition-and-refinement` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-pi-via-first-positive-cosine-zero` | component-adapted/source (published order-179 trigonometry page) | Manifest edge: the exact definition and the conclusion `pi>0` used in the oscillatory sequence were read. |
| `def-pointwise-uniform-and-uniformly-cauchy-convergence` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-the-integral-function` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `def-vector-valued-derivative-and-integral` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `def-vector-valued-functions-limits-and-continuity` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `ex-one-over-n-null` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `ex-polynomial-integrals-by-the-ftc` | component-lit | Harvest receipt: exact polynomial endpoint-evaluation example read. |
| `ex-two-root-x-and-its-unbounded-derivative` | component-adapted/source (HUN Example 12.3) | Harvest receipt: exact unbounded-endpoint-derivative example read. |
| `lem-basic-properties-of-total-variation` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `lem-countable-iff-surjection-from-n` | component-adapted/source (BOT/SWA) | Manifest edge: a nonempty countable exceptional set has a surjective enumeration with repetitions and without a choice principle. |
| `lem-extended-reals-complete` | component-adapted/knowledge | Manifest edge: every subset of the extended reals has a supremum, which supplies the length supremum even for unbounded polygonal sums. |
| `lem-geometric-sequence-null` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `lem-integral-elementary-bounds` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `lem-jumps-of-the-variation-function` | component-lit | Manifest edge: continuity of the variation function at continuity points is the used direction. |
| `lem-q-and-irrationals-dense-r` | component-adapted/knowledge | Manifest edge: the exact density of the irrationals used to force every Thomae lower Darboux sum to zero was read. |
| `lem-subset-of-countable` | component-adapted/knowledge | Manifest edge: the exact choice-free inheritance of at-most-countability by subsets was read. |
| `lem-uniform-integral-error-bound` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-additivity-over-subintervals` | component-adapted/knowledge | Manifest edge: restriction equivalence and the fully oriented additive identity were read. |
| `thm-algebra-of-derivatives` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-cantor-function-properties` | component-adapted/source (published Cantor construction) | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-cantor-set-properties` | component-adapted/source (published Cantor construction) | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-cantor-set-ternary-description` | component-adapted/source (published Cantor construction) | Manifest edge: the bijective ternary-digit description used to identify stage endpoints was read. |
| `thm-cauchy-schwarz-and-the-euclidean-norm` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-chain-rule` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-componentwise-limits-and-continuity` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-continuity-iff-oscillation-zero` | component-lit | Harvest receipt: both directions of the zero-oscillation criterion read. |
| `thm-continuous-implies-integrable` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-darboux-equals-riemann` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-derivative-of-an-inverse` | component-adapted/source (ETH inverse arc-length use) | Manifest edge: nonzero derivative gives the inverse derivative, including relative endpoints. |
| `thm-dirichlet-and-thomae-continuity-sets` | component-lit | Manifest edge: the exact irrational-continuity and rational-discontinuity statement for Thomae's function was read. |
| `thm-fat-cantor-set-has-positive-measure` | component-adapted/source (CHE §§3.2–3.3) | Manifest edge: the quantitative lower bound for interval covers, not merely non-nullity, was checked. |
| `thm-ftc-first-part` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-ftc-second-part` | component-lit | Manifest edge: the published closed-interval Newton–Leibniz theorem and its no-continuity-of-the-derivative convention were read for the roadmap. |
| `thm-heine-cantor-r` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-jordan-decomposition-for-bv-functions` | component-lit | Manifest edge: the converse saying a difference of nondecreasing functions is BV was read and specialized to `c=c-0`. |
| `thm-lebesgue-criterion` | component-lit | Manifest edge: the integrable-to-null direction and its Countable-Choice cost were read. |
| `thm-linearity-of-the-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-monotone-implies-integrable` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-monotone-with-prescribed-discontinuity-set` | component-adapted/source (published monotone-functions page) | Manifest edge: the exact bounded nondecreasing construction for any at-most-countable discontinuity set, with jumps at every listed point, was read. |
| `thm-monotonicity-of-the-integral` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-nested-interval-property` | component-adapted/knowledge | Manifest edge: the shrinking closed nested-interval conclusion and its singleton clause were read for the countable-exception monotonicity proof. |
| `thm-nonnegative-series-bounded-partial-sums` | component-lit | Manifest edge: divergence of a nonnegative series forces its partial sums to be unbounded, the form needed for variation sums. |
| `thm-norm-inequality-for-the-vector-valued-integral` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-of-square-roots` | component-adapted/knowledge | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-p-series-rational` | component-adapted/source (published series page) | Manifest edge: the exact rational p-series theorem and its explicit harmonic `p=1` divergence clause were read. |
| `thm-quarter-turn-values-and-shift-formulas` | component-adapted/source (published order-179 trigonometry page) | Manifest edge: the sine value at `pi/2` and shift by `pi` used to alternate extrema were read. |
| `thm-rationals-countable` | component-adapted/knowledge | Manifest edge: the exact countable-infinitude of the rationals was read for both prescribed jumps and Thomae integrability. |
| `thm-riemann-criterion` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |
| `thm-riemann-stieltjes-c1-integrator-reduction` | component-lit | Manifest + harvest: exact continuous interior derivative-extension hypotheses and equality direction checked. |
| `thm-riemann-stieltjes-change-of-variable` | component-lit | Harvest receipt: exact strictly increasing continuous-bijection hypothesis and both existence directions read. |
| `thm-riemann-stieltjes-integration-by-parts` | component-lit | Harvest receipt: exact iff-existence and endpoint identity read. |
| `thm-sine-and-cosine-derivatives` | component-adapted/source (published order-179 trigonometry page) | Manifest edge: the global derivative identities used componentwise for the circular arc were read. |
| `thm-the-integral-function-is-lipschitz` | component-lit | Manifest edge: exact published content and direction named by the item id were read. |

No opened dependency was false or ambiguous enough to block use. The main seam requiring care is `cor-vector-valued-ftc-and-lipschitz-bound`: its FTC clause assumes relative endpoint derivatives, so the C¹ arc-length proof must derive those endpoint values from the continuous interior derivative extension before citing it. The legacy applied-`iota` expressions visible in several published statements are not copied into new content.

## Proof contracts and Step-5 obligations

The version-1 machine map is `research/frontier-11-batch-2.proof-contracts.json`. Its scope is exactly the 35 proof-, verification-, or refutation-bearing items (all 38 items except the two definitions and the non-load-bearing roadmap remark), with exact authored source clauses, fact labels, proof-step mappings, at least two nonroutine derivation obligations, all eight standard boundary dispositions, and an empty finite-smoke list for each. The strict proof-contract gate passes 35/35 with no errors or warnings.

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
10. The `x sin(1/x)` graph must use the explicit sequence `x_m=2/((2m+1)pi)`, discard a finite prefix so the retained points lie in `[0,1]`, derive the alternating signs from the A-page quarter-turn shifts, and compare its vertical variation with the `p=1` specialization of `thm-p-series-rational`.
11. Botsko's theorem proves the countable-exception monotonicity bridge locally: nested intervals retain positive secant slope, exclude the $n$th exceptional point at stage $n$, and spend a finite geometric slope-loss budget before converging to a nonexceptional point with positive derivative. It does not cite the finite-exception theorem or an absent gauge theory.
12. The chord corollary must use the endpoint-only partition, and the arc-length-parametrization proof must cite that corollary instead of repeating the inequality inline.
13. The graph formula must compute the derivative and Euclidean norm explicitly. The circle example must use the published derivative identities, Pythagorean identity, and constant-integral formula, with `theta=0` separated.
14. The compact-rectangle Leibniz theorem must phrase its hypothesis in terms of the ordinary derivative of each one-variable parameter slice; the continuous representative is then controlled uniformly and `lem-uniform-integral-error-bound` is the exact passage-to-the-integral citation.
15. The Thomae integral-function example must re-establish integrability and zero integral from the A-page continuity-set, countability, and Darboux results before differentiating the constant integral function.
16. The Cantor graph example must derive its BV coordinate from Jordan decomposition and its failure of absolute continuity from the finite stage-interval families; neither conclusion may cite the published B-page example.

## Dependency closure, split decision, and blockers

All manifest dependencies resolve to published items on disk or earlier items in the same A/B pair; no other frontier-11 batch is referenced. The FTC A page now declares `uniform-convergence-of-functions` because it genuinely cites `lem-uniform-integral-error-bound`; it does not declare or use `the-total-derivative`, since the compact-rectangle result is stated through ordinary derivatives of one-variable parameter slices. The arc-length A page also requires the published order-179 `sine-cosine-and-the-definition-of-pi`, exactly as A3 requires. The shared `bounded-variation-and-riemann-stieltjes` page was opened once and its actual published items were used by both pairs; `rn-as-a-normed-space`, `sine-cosine-and-the-definition-of-pi`, `uniform-convergence-of-functions`, and the pre-existing working FTC page were opened directly.

Split proposal: none. The exact item cut is 10 items on `the-fundamental-theorems-of-calculus` and 15 on `arc-length-and-rectifiable-curves`; their companions contain 6 and 7 items respectively. No result was dropped to stay below the ceiling.

Batch blockers: none. No permission prompt, escalation, published-item edit, or cross-batch coordination was needed. The operation explicitly unavailable in the brief, `tools/gates.mjs`, was not run. The repository-wide dependency check currently reports only four out-of-batch published-status/audit-stamp errors on the separately authorized complex-number rewrites; those files are outside this batch and are recorded as an external global-gate blocker, not altered here.

## Step-4 repair validation snapshot

Run from the repository root on 2026-08-12:

- `node tools/coverage-checklist.mjs research/frontier-11-batch-2.coverage.json` — **pass**: 2 pages, 101 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-11-batch-2.pages.json --manifest-only --json` — **pass**: scope 38, 0 errors, 0 warnings.
- An in-memory replacement of the four affected page objects in the current spliced plan found **0** B-page dependency edges and **0** undeclared-prerequisite edges on those pages.
- Both edited JSON artifacts parse, every citation source newly used by the five repaired proof contracts is a direct dependency of its item, and `git diff --check` passes for the four owned artifacts.
- `node tools/prosecheck.mjs research/frontier-11-batch-2.notes.md --warnings` — **pass** with 0 errors and 8 expected count-word warnings in these durable planning notes.

Per the dispatch, `tools/validate-plan.mjs` was not rerun against the current `plan-spec.json`: the orchestrator must resplice this corrected manifest before running it. `tools/gates.mjs` was not run.

## Step-5 final authoring record

This section supersedes the scaffold-stage obligation and validation paragraphs above. All 38 settled items are authored: the FTC pair has 10 A-page and 6 B-page items, and the arc-length pair has 15 A-page and 7 B-page items. There are 35 proof-, verification-, or refutation-bearing items, two definitions, and one non-load-bearing roadmap remark. Four new page files were authored. Each A page has exactly two nonempty summary paragraphs under 150 words; the FTC summary paragraphs contain 72 and 62 words, and the arc-length paragraphs contain 48 and 66. Both B-page bodies are empty. Every item id, kind, title, page order, and page item order is unchanged; no claim or coverage result was dropped, renamed, merged, or narrowed.

### Authored departures from the settled scaffold

1. The FTC A page adds `sine-cosine-and-the-definition-of-pi` to `requires`, because the final companion proves the oscillatory seed and Volterra specialisation inline from the exact sine/cosine derivative, bound, and special-value results. The batch manifest, A-page dependency paragraph, and machine-authoritative `research/plan-spec.json` are synchronized to this local authoring repair.
2. `thm-newton-leibniz-with-a-countable-exceptional-set` replaces the scaffold's compressed least-upper-bound first-crossing route with a complete nested-secant-interval proof. It adds `thm-nested-interval-property` and `lem-geometric-sequence-null` and drops the now-unused `def-complete-ordered-field`. At stage $n$ the proof excludes the $n$th exceptional point while spending less than a geometric slope-loss budget; the limit point is nonexceptional and has positive derivative, a contradiction. The theorem statement is unchanged.
3. `ex-bounded-discontinuous-derivative-that-is-riemann-integrable` adds `thm-chain-rule`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-pi-via-first-positive-cosine-zero`, and `thm-quarter-turn-values-and-shift-formulas`, which are the exact facts used to derive the derivative and its alternating values rather than treating them as elementary algebra.
4. `cex-volterra-bounded-derivative-not-riemann-integrable` adds `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-pi-via-first-positive-cosine-zero`, `thm-quarter-turn-values-and-shift-formulas`, and `cor-archimedean-reciprocal`. These replace the impermissible interim dependency on the companion seed example: the bounded seed derivative and its $\pm1$ sequences are now derived inline from A-page facts.
5. `ex-dense-jump-integrand-with-dense-nondifferentiability` adds `lem-q-and-irrationals-dense-r`, the exact density statement used at every rational jump.
6. `def-path-polygonal-length-and-rectifiability-in-rn` adds `def-extended-reals` and `lem-extended-reals-complete`, because the unrestricted supremum of polygonal sums may be $+\infty$.
7. `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence` adds `def-limsup-liminf`, which states the extended-real liminf used in the conclusion.
8. `thm-c1-paths-have-length-equal-to-the-integral-of-speed` adds `cor-mean-value-theorem` to justify the relative endpoint derivatives and adds the local path definition that supplies the length supremum.
9. `thm-every-rectifiable-path-has-an-arc-length-parametrization` drops the unused `lem-basic-properties-of-total-variation`; the named chord bound is the exact route from zero subpath length to constancy.
10. `cor-regular-c1-paths-have-c1-unit-speed-parametrizations` adds `cor-mean-value-theorem` for strict increase and `def-arc-length-function` for the displayed partial-integral parameter.
11. `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` adds `cor-trigonometric-parity-and-pythagorean-identity`, which supplies the global sine bound used for continuity at zero.
12. `cex-the-same-trace-can-have-different-path-lengths` drops the B-page line/polygonal example and adds the A-page piecewise-$C^1$ speed formula plus `lem-integral-elementary-bounds`; the three constant speed integrals are computed inline.
13. `cex-arc-length-is-not-continuous-under-uniform-convergence` makes the same B-leaf repair: it drops the line/polygonal example, cites the A-page piecewise-$C^1$ theorem and the constant-integral lemma, and computes all $2k$ affine contributions and the limit length inline.

These changes leave zero dependency edges to an item homed on an examples page and zero undeclared-prerequisite edges in an in-memory overlay of the final batch manifest on the current plan. All final item dependency lists agree exactly between item frontmatter and `research/frontier-11-batch-2.pages.json`.

### Published dependencies opened during authoring

The 85-row table in “Published dependencies and coverage citations opened from disk” is the exhaustive ledger: 78 are final formal dependencies and seven are additional coverage-route checks. Every one was opened from disk, confirmed `status: published`, and read at its actual Definition, Statement, Example, or Counterexample. `def-extended-reals`, `lem-extended-reals-complete`, `def-limsup-liminf`, and `thm-nested-interval-property` are the authoring-time additions to the original ledger. No published dependency was edited, and no retained dependency has an AI-generated Statement.

### Final component provenance

The per-item provenance table above is final. Statement/Construction labels total 25 `literature-derived`, 11 `ai-altered`, and two `ai-generated`. Proof/Verification labels total 29 `ai-altered`, six `ai-generated`, and three `not-applicable`. By pair, the exact combinations are: 21 `literature-derived / ai-altered`, two `literature-derived / ai-generated`, two `literature-derived / not-applicable`, eight `ai-altered / ai-altered`, two `ai-altered / ai-generated`, one `ai-altered / not-applicable`, and two `ai-generated / ai-generated`. The two generated statements are the sparse-spike example and repeated-trace counterexample; neither has a consumer. No AI-generated statement or construction is load-bearing.

### Final verification and blockers

- **PASS:** scoped reflow on all 38 item files; every file was unchanged.
- **PASS:** scoped precheck on all 38 item files; all 35 proof-bearing items pass, and the two definitions plus roadmap correctly retain `precheck: n/a`.
- **PASS:** strict proof contract, 35/35 items with 0 errors and 0 warnings. Every derivation claim is byte-for-byte synchronized to its final numbered step.
- **PASS:** coverage checklist, 2 pages and 101 harvested results with 0 errors and 0 warnings.
- **PASS:** content policy, 38 scoped items with 0 errors and 0 warnings.
- **PASS:** scoped citecheck on all 38 items; every recognized elementary move cites a source that states it.
- **PASS:** scoped prosecheck on all 38 items and four page files, with 0 errors and 0 warnings.
- **PASS:** `node tools/validate-plan.mjs research/plan-spec.json`; the current spliced plan is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages with item lists. The final-manifest overlay check independently reports 0 undeclared-prerequisite errors.
- **PASS:** global `fwdcheck.mjs` and `extcheck.mjs`; extcheck retains its expected published-unproved warnings and no hard error.
- **EXTERNAL GLOBAL-GATE BLOCKER ONLY:** global `depcheck.mjs` reports four `published-unaudited` errors, all on batch 1's owner-authorized in-place complex-number rewrites. No depcheck error names a batch-2 file. Global `git diff --check` also currently reports one trailing-whitespace line in `research/frontier-11-batch-5.notes.md`; the batch-2 scoped whitespace scan is clean. Those files are outside this Beta's ownership and were not altered.

There is no mathematical or batch-local blocker, and no requested operation was left undone. No permission prompt or escalation was issued. As expressly prohibited, `tools/gates.mjs` was not run.

## Step-6 reader-1 artifact reconciliation

Reader 1 repaired nine fatal and four nonfatal defects in the live batch text. This appended record supersedes only the stale Step-5 counts and interfaces above: the batch now has 39 items, including 36 proof-bearing items and eight arc-length companion examples. The sparse-spike example now takes \(f(0)=0\) and proves \(F'(0)=f(0)=0\) at a discontinuity; the repaired text is retained without qualification.

The proof-contract scope is now 36/36. Citation contracts were refreshed for thm-integration-by-parts-with-interior-derivatives L2, thm-substitution-with-riemann-integrable-inner-derivative L3, thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators L2, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle L2, ex-bounded-discontinuous-derivative-that-is-riemann-integrable L4--L6, thm-rectifiable-iff-coordinate-functions-have-bounded-variation L1, lem-arc-length-function-is-continuous-and-nondecreasing L2, and cex-arc-length-is-not-continuous-under-uniform-convergence L3. The semantic maps were also synchronized for the changed sparse-spike proof, the finite-tail partition in cex-graph-of-x-sin-one-over-x-is-not-rectifiable, the full chord-bound use in thm-every-rectifiable-path-has-an-arc-length-parametrization, and the narrowed conclusion of cex-ae-zero-derivative-does-not-determine-endpoint-change.

Reader 1 added cex-the-koch-curve-is-not-rectifiable to repair the D16 omission. Its new eight-step contract records the recursive polygonal construction, \((4/3)^n\) approximant lengths, uniform convergence, persistent-vertex lower bounds, snowflake-boundary transfer, and the reason lower semicontinuity alone is vacuous. The batch pages manifest now includes the already-live item and synchronizes the repaired dependency lists; research/plan-spec.json remains intentionally untouched because this dispatch expressly forbids editing it.

Coverage now records 103 harvested receipts: 57 included, 22 inline, 14 already-published, four deferred, and six out-of-scope. Two included receipts were added for the Koch result: one canonical page obligation and one source-native Exercise 9 receipt from Ghomi's *Curves and Surfaces, Lecture Notes 1*. No existing coverage row was retargeted. The Hausdorff-dimension and Schwarz-lantern suggestions remain absent for the specific missing-machinery reasons reader 1 recorded.

The strict proof-contract check passes 36/36 with zero errors or warnings; the coverage checklist passes two pages and 103 receipts with zero errors or warnings; and authored-scope content policy passes all 39 items. I found no reader repair to dispute and no batch-local blocker.

## Step-6 Beta contract-fidelity reconciliation (artifact only)

This pass is limited to `research/frontier-11-batch-2.proof-contracts.json` and
this appended note. I did not alter an item, page, manifest, plan, or any other
artifact. I opened the current item text and each named source section rather
than relying on the strict checker.

The citation audit found 184 partial or truncated `quote` rows. I replaced each
with the complete, byte-exact current source section. Five rows were already
complete, so all 189 citation rows now carry the complete named `Statement`,
`Statement refuted`, `Definition`, or `Example`. This is deliberately
conservative: it does not silently choose a shorter substring that might omit a
hypothesis, quantifier, direction, or qualification.

The boundary audit changed 280 of 288 rows. It removed generic or prospective
boilerplate, anchored every `checked` row to the numbered step or steps that do
the work, supplied a true item-specific reason for every `not_applicable` row,
and corrected 40 statuses. The eight standard boundary cases are abbreviated
below as **B** = `empty`, `zero`, `one`, `degenerate`, `endpoints`,
`nonempty-choice`, `iff-forward`, `iff-reverse`.

### Every changed contract row

Each `Lx -> source#section` entry below is one changed citation row (defect:
partial or truncated evidence). Each named boundary is one changed boundary row
(defect: generic/unanchored evidence, wrong status, or missed/spurious
biconditional). “B” means all eight rows just enumerated; it is not an aggregate
row.

- `cor-ftc-integral-function-differentiable-almost-everywhere`: quotes `L1 -> thm-the-integral-function-is-lipschitz#Statement`, `L2 -> thm-lebesgue-criterion#Statement`, `L3 -> thm-ftc-first-part#Statement`; boundaries B.
- `thm-newton-leibniz-with-interior-derivative`: quotes `L1 -> cor-mean-value-theorem#Statement`, `L2 -> def-partition-and-refinement#Definition`, `L2 -> def-darboux-integral#Definition`, `L3 -> def-darboux-integral#Definition`; boundaries B.
- `cor-newton-leibniz-with-finitely-many-exceptional-points`: quotes `L1 -> thm-newton-leibniz-with-interior-derivative#Statement`, `L2 -> thm-additivity-over-subintervals#Statement`; boundaries B.
- `thm-newton-leibniz-with-a-countable-exceptional-set`: quotes `L1 -> def-countable#Definition`, `L1 -> lem-countable-iff-surjection-from-n#Statement`, `L2 -> def-continuity-real#Definition`, `L3 -> def-derivative#Definition`, `L4 -> thm-nested-interval-property#Statement`, `L5 -> lem-geometric-sequence-null#Statement`, `L6 -> def-darboux-sums#Definition`, `L6 -> def-darboux-integral#Definition`, `L6 -> def-partition-and-refinement#Definition`; boundaries B.
- `thm-integration-by-parts-with-interior-derivatives`: quotes `L1 -> thm-algebra-of-derivatives#Statement`, `L2 -> thm-continuous-implies-integrable#Statement`, `L2 -> cor-integrability-of-absolute-values-products-and-lattice-operations#Statement`, `L3 -> thm-linearity-of-the-integral#Statement`, `L4 -> thm-newton-leibniz-with-interior-derivative#Statement`; boundaries B.
- `thm-substitution-with-riemann-integrable-inner-derivative`: quotes `L1 -> thm-ftc-first-part#Statement`, `L2 -> thm-chain-rule#Statement`, `L3 -> thm-continuous-implies-integrable#Statement`, `L3 -> cor-integrability-of-absolute-values-products-and-lattice-operations#Statement`, `L4 -> thm-newton-leibniz-with-interior-derivative#Statement`, `L5 -> def-oriented-integral#Definition`; boundaries B.
- `thm-one-sided-ftc-at-points-with-one-sided-limits`: quotes `L1 -> def-the-integral-function#Definition`, `L1 -> thm-additivity-over-subintervals#Statement`, `L2 -> def-one-sided-limits#Definition`, `L3 -> lem-integral-elementary-bounds#Statement`; boundaries B.
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`: quotes `L1 -> thm-continuous-implies-integrable#Statement`, `L2 -> thm-heine-borel-rn#Statement`, `L2 -> thm-heine-cantor-metric#Statement`, `L3 -> cor-mean-value-theorem#Statement`, `L4 -> lem-uniform-integral-error-bound#Statement`, `L5 -> def-derivative#Definition`; boundaries B.
- `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`: quotes `L1 -> thm-riemann-stieltjes-c1-integrator-reduction#Statement`, `L2 -> thm-continuous-implies-integrable#Statement`, `L2 -> cor-integrability-of-absolute-values-products-and-lattice-operations#Statement`, `L3 -> thm-ftc-first-part#Statement`, `L4 -> thm-newton-leibniz-with-interior-derivative#Statement`; boundaries B.
- `ex-bounded-discontinuous-derivative-that-is-riemann-integrable`: quotes `L1 -> thm-sine-and-cosine-derivatives#Statement`, `L1 -> thm-chain-rule#Statement`, `L1 -> thm-algebra-of-derivatives#Statement`, `L2 -> cor-trigonometric-parity-and-pythagorean-identity#Statement`, `L3 -> def-pi-via-first-positive-cosine-zero#Definition`, `L3 -> thm-quarter-turn-values-and-shift-formulas#Statement`, `L4 -> cor-archimedean-reciprocal#Statement`, `L5 -> cor-countably-many-discontinuities-integrable#Statement`, `L6 -> thm-newton-leibniz-with-interior-derivative#Statement`; boundaries B.
- `cex-volterra-bounded-derivative-not-riemann-integrable`: quotes `L1 -> def-fat-cantor-set#Definition`, `L2 -> thm-fat-cantor-set-has-positive-measure#Statement`, `L3 -> thm-algebra-of-derivatives#Statement`, `L3 -> thm-chain-rule#Statement`, `L4 -> def-pi-via-first-positive-cosine-zero#Definition`, `L5 -> cor-archimedean-reciprocal#Statement`, `L6 -> def-oscillation#Definition`, `L7 -> thm-riemann-criterion#Statement`; boundaries B. Its three already-complete rows, `L3 -> thm-sine-and-cosine-derivatives#Statement`, `L4 -> cor-trigonometric-parity-and-pythagorean-identity#Statement`, and `L4 -> thm-quarter-turn-values-and-shift-formulas#Statement`, were not changed.
- `ex-dense-jump-integrand-with-dense-nondifferentiability`: quotes `L1 -> thm-rationals-countable#Statement`, `L2 -> thm-monotone-with-prescribed-discontinuity-set#Statement`, `L3 -> thm-monotone-implies-integrable#Statement`, `L4 -> thm-ftc-first-part#Statement`, `L4 -> thm-one-sided-ftc-at-points-with-one-sided-limits#Statement`, `L5 -> lem-q-and-irrationals-dense-r#Statement`; boundaries B.
- `ex-thomae-integral-function-differentiates-through-dense-discontinuities`: quotes `L1 -> thm-dirichlet-and-thomae-continuity-sets#Statement`, `L2 -> thm-rationals-countable#Statement`, `L2 -> lem-subset-of-countable#Statement`, `L3 -> cor-countably-many-discontinuities-integrable#Statement`, `L4 -> def-darboux-sums#Definition`, `L4 -> def-darboux-integral#Definition`, `L4 -> thm-monotonicity-of-the-integral#Statement`, `L5 -> def-the-integral-function#Definition`, `L5 -> thm-additivity-over-subintervals#Statement`, `L6 -> lem-q-and-irrationals-dense-r#Statement`; boundaries B.
- `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity`: quotes `L1 -> lem-geometric-sequence-null#Statement`, `L2 -> thm-riemann-criterion#Statement`, `L3 -> def-the-integral-function#Definition`; boundaries `empty`, `zero`, `iff-forward`, `iff-reverse`. Its other four boundary rows were already specific and true.
- `cex-ae-zero-derivative-does-not-determine-endpoint-change`: quotes `L1 -> cor-cantor-function-is-continuous#Statement`, `L1 -> thm-cantor-function-properties#Statement`, `L2 -> thm-cantor-function-properties#Statement`, `L3 -> thm-cantor-set-properties#Statement`, `L4 -> def-derivative#Definition`; boundaries B.
- `cor-chord-length-is-at-most-arc-length`: quotes `L1 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`, `L2 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `lem-polygonal-length-is-monotone-under-refinement`: quotes `L1 -> def-partition-and-refinement#Definition`, `L2 -> def-norm-and-normed-space#Definition`, `L2 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `thm-rectifiable-iff-coordinate-functions-have-bounded-variation`: quotes `L1 -> def-euclidean-inner-product#Definition`, `L1 -> lem-standard-basis-of-f-n#Statement`, `L1 -> thm-cauchy-schwarz-and-the-euclidean-norm#Statement`, `L2 -> def-bounded-variation-and-total-variation#Definition`, `L3 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `thm-arc-length-is-additive-over-subintervals`: quotes `L1 -> lem-polygonal-length-is-monotone-under-refinement#Statement`, `L2 -> def-partition-and-refinement#Definition`, `L3 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `thm-arc-length-is-invariant-under-monotone-reparametrization`: quotes `L1 -> def-monotone-function#Definition`, `L2 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`: quotes `L1 -> def-lipschitz-holder-contraction#Definition`, `L2 -> def-isometry-and-metric-embedding#Definition`, `L3 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence`: quotes `L1 -> def-pointwise-uniform-and-uniformly-cauchy-convergence#Definition`, `L2 -> thm-componentwise-limits-and-continuity#Statement`, `L3 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`, `L4 -> def-limsup-liminf#Definition`; boundaries B.
- `thm-c1-paths-have-length-equal-to-the-integral-of-speed`: quotes `L1 -> def-vector-valued-derivative-and-integral#Definition`, `L2 -> cor-mean-value-theorem#Statement`, `L3 -> cor-vector-valued-ftc-and-lipschitz-bound#Statement`, `L4 -> thm-norm-inequality-for-the-vector-valued-integral#Statement`, `L5 -> thm-heine-cantor-r#Statement`, `L5 -> thm-darboux-equals-riemann#Statement`, `L6 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`; boundaries B.
- `cor-length-of-the-graph-of-a-c1-function`: quotes `L1 -> def-vector-valued-derivative-and-integral#Definition`, `L2 -> def-p-norms-on-rn#Definition`, `L2 -> thm-of-square-roots#Statement`, `L3 -> thm-c1-paths-have-length-equal-to-the-integral-of-speed#Statement`; boundaries B.
- `cor-piecewise-c1-paths-have-additive-speed-integral-length`: quotes `L1 -> thm-c1-paths-have-length-equal-to-the-integral-of-speed#Statement`, `L2 -> thm-arc-length-is-additive-over-subintervals#Statement`; boundaries B.
- `lem-arc-length-function-is-continuous-and-nondecreasing`: quotes `L1 -> def-arc-length-function#Definition`, `L1 -> thm-arc-length-is-additive-over-subintervals#Statement`, `L2 -> thm-rectifiable-iff-coordinate-functions-have-bounded-variation#Statement`, `L2 -> lem-variation-additive-on-subintervals#Statement`, `L3 -> lem-jumps-of-the-variation-function#Statement`, `L4 -> cor-chord-length-is-at-most-arc-length#Statement`; boundaries B.
- `thm-every-rectifiable-path-has-an-arc-length-parametrization`: quotes `L1 -> def-arc-length-function#Definition`, `L1 -> lem-arc-length-function-is-continuous-and-nondecreasing#Statement`, `L2 -> cor-chord-length-is-at-most-arc-length#Statement`, `L3 -> thm-arc-length-is-invariant-under-monotone-reparametrization#Statement`; boundaries `empty`, `nonempty-choice`, `iff-forward`, `iff-reverse`. Its other four boundary rows were already specific and true.
- `cor-regular-c1-paths-have-c1-unit-speed-parametrizations`: quotes `L1 -> thm-c1-paths-have-length-equal-to-the-integral-of-speed#Statement`, `L1 -> def-arc-length-function#Definition`, `L2 -> thm-ftc-first-part#Statement`, `L3 -> thm-derivative-of-an-inverse#Statement`, `L4 -> thm-chain-rule#Statement`, `L4 -> thm-componentwise-limits-and-continuity#Statement`, `L5 -> cor-mean-value-theorem#Statement`; boundaries B.
- `ex-line-segment-and-polygonal-path-length`: quotes `L1 -> cor-piecewise-c1-paths-have-additive-speed-integral-length#Statement`, `L2 -> thm-arc-length-is-additive-over-subintervals#Statement`; boundaries B.
- `ex-unit-circle-arc-has-length-theta`: quotes `L1 -> def-vector-valued-derivative-and-integral#Definition`, `L2 -> thm-sine-and-cosine-derivatives#Statement`, `L3 -> cor-trigonometric-parity-and-pythagorean-identity#Statement`, `L4 -> thm-c1-paths-have-length-equal-to-the-integral-of-speed#Statement`, `L5 -> lem-integral-elementary-bounds#Statement`; boundaries B.
- `cex-graph-of-x-sin-one-over-x-is-not-rectifiable`: quotes `L1 -> def-pi-via-first-positive-cosine-zero#Definition`, `L1 -> thm-quarter-turn-values-and-shift-formulas#Statement`, `L2 -> thm-p-series-rational#Statement`, `L2 -> thm-nonnegative-series-bounded-partial-sums#Statement`, `L3 -> def-bounded-variation-and-total-variation#Definition`, `L4 -> thm-rectifiable-iff-coordinate-functions-have-bounded-variation#Statement`, `L5 -> cor-archimedean-reciprocal#Statement`, `L6 -> cor-trigonometric-parity-and-pythagorean-identity#Statement`; boundaries B.
- `cex-the-koch-curve-is-not-rectifiable`: quotes `L2 -> thm-of-square-roots#Statement`, `L2 -> lem-standard-basis-of-f-n#Statement`, `L2 -> thm-cauchy-schwarz-and-the-euclidean-norm#Statement`, `L3 -> thm-uniform-cauchy-criterion-real-functions#Statement`, `L3 -> thm-uniform-limit-continuous-real-functions#Statement`, `L3 -> thm-componentwise-limits-and-continuity#Statement`, `L4 -> lem-geometric-sequence-null#Statement`, `L5 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition`, `L5 -> cor-piecewise-c1-paths-have-additive-speed-integral-length#Statement`, `L6 -> thm-arc-length-is-lower-semicontinuous-under-uniform-convergence#Statement`, `L7 -> prop-arc-length-under-lipschitz-maps-and-euclidean-similarities#Statement`, `L7 -> thm-arc-length-is-additive-over-subintervals#Statement`; boundaries B. Its already-complete `L1 -> thm-recursion#Statement` and `L2 -> cor-cauchy-reals-lub-complete#Statement` rows were not changed.
- `ex-v-shaped-path-is-rectifiable-but-not-c1`: quotes `L1 -> def-vector-valued-derivative-and-integral#Definition`, `L2 -> cor-piecewise-c1-paths-have-additive-speed-integral-length#Statement`, `L3 -> thm-of-square-roots#Statement`; boundaries B.
- `cex-the-same-trace-can-have-different-path-lengths`: quotes `L1 -> cor-piecewise-c1-paths-have-additive-speed-integral-length#Statement`, `L2 -> lem-integral-elementary-bounds#Statement`; boundaries B.
- `cex-arc-length-is-not-continuous-under-uniform-convergence`: quotes `L1 -> cor-piecewise-c1-paths-have-additive-speed-integral-length#Statement`, `L2 -> lem-integral-elementary-bounds#Statement`, `L3 -> cor-archimedean-reciprocal#Statement`, `L4 -> thm-arc-length-is-lower-semicontinuous-under-uniform-convergence#Statement`; boundaries B.
- `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous`: quotes `L1 -> cor-cantor-function-is-continuous#Statement`, `L1 -> thm-cantor-function-properties#Statement`, `L2 -> thm-jordan-decomposition-for-bv-functions#Statement`, `L2 -> thm-rectifiable-iff-coordinate-functions-have-bounded-variation#Statement`, `L3 -> def-absolutely-continuous-function#Definition`, `L4 -> def-cantor-set#Definition`, `L4 -> thm-cantor-set-ternary-description#Statement`, `L5 -> def-cantor-function#Definition`, `L5 -> thm-cantor-function-properties#Statement`, `L6 -> lem-geometric-sequence-null#Statement`, `L7 -> thm-componentwise-limits-and-continuity#Statement`; boundaries B.

### Boundary status corrections

These are the 40 rows whose status, rather than only their evidence or reason,
changed. The remaining changed boundary rows retained the right status but had
generic, prospective, or non-step-specific prose replaced.

Changed from `checked` to `not_applicable`:

- `cor-ftc-integral-function-differentiable-almost-everywhere`: `iff-forward`, `iff-reverse`.
- `thm-one-sided-ftc-at-points-with-one-sided-limits`: `nonempty-choice`.
- `cex-volterra-bounded-derivative-not-riemann-integrable`: `degenerate`.
- `thm-arc-length-is-invariant-under-monotone-reparametrization`: `one`.
- `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`: `endpoints`.
- `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence`: `endpoints`.
- `cor-piecewise-c1-paths-have-additive-speed-integral-length`: `nonempty-choice`.
- `lem-arc-length-function-is-continuous-and-nondecreasing`: `nonempty-choice`.
- `ex-unit-circle-arc-has-length-theta`: `one`.
- `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous`: `iff-forward`, `iff-reverse`.

Changed from `not_applicable` to `checked`:

- `thm-newton-leibniz-with-interior-derivative`: `one`, `nonempty-choice`.
- `cor-newton-leibniz-with-finitely-many-exceptional-points`: `one`.
- `thm-newton-leibniz-with-a-countable-exceptional-set`: `one`.
- `thm-integration-by-parts-with-interior-derivatives`: `iff-forward`, `iff-reverse`.
- `thm-one-sided-ftc-at-points-with-one-sided-limits`: `zero`.
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`: `zero`.
- `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`: `zero`.
- `ex-bounded-discontinuous-derivative-that-is-riemann-integrable`: `one`.
- `ex-thomae-integral-function-differentiates-through-dense-discontinuities`: `one`, `degenerate`.
- `cex-ae-zero-derivative-does-not-determine-endpoint-change`: `one`.
- `lem-polygonal-length-is-monotone-under-refinement`: `empty`, `zero`, `one`.
- `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`: `one`.
- `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence`: `one`, `degenerate`.
- `cor-length-of-the-graph-of-a-c1-function`: `zero`.
- `cor-regular-c1-paths-have-c1-unit-speed-parametrizations`: `one`.
- `ex-line-segment-and-polygonal-path-length`: `one`, `degenerate`.
- `ex-unit-circle-arc-has-length-theta`: `endpoints`.
- `cex-graph-of-x-sin-one-over-x-is-not-rectifiable`: `one`.
- `ex-v-shaped-path-is-rectifiable-but-not-c1`: `zero`, `one`.
- `cex-arc-length-is-not-continuous-under-uniform-convergence`: `zero`.

The genuine equivalence rows are now checked in both directions for exactly the
Statements that assert the relevant equivalence:
`thm-integration-by-parts-with-interior-derivatives` (the two displayed formulas
are algebraically equivalent),
`thm-rectifiable-iff-coordinate-functions-have-bounded-variation`,
`thm-arc-length-is-additive-over-subintervals` (rectifiability of the whole path
iff rectifiability of both restrictions), and
`lem-arc-length-function-is-continuous-and-nondecreasing` (strict increase iff
there is no constant nondegenerate subinterval). All other `iff` rows are honest
`not_applicable` rows because their Statements are not biconditionals.

### Every `not_applicable` row and its true reason

There are 158 such rows. The JSON carries the following exact reason for every
row of a given case:

- `empty`: “No empty family, set, or interval is quantified in the Statement.”
- `zero`: “No permitted zero index or zero-valued boundary requires a separate proof case.”
- `one`: “No permitted one-index or one-valued boundary requires a separate proof case.”
- `degenerate`: “The hypotheses exclude a degenerate domain or parameter, and no other degenerate case is asserted.”
- `endpoints`: “The Statement has no endpoint-specific conclusion requiring a separate proof case.”
- `nonempty-choice`: “The proof makes no simultaneous selection from a nonempty family.”
- `iff-forward`, `iff-reverse`: “The Statement is not a biconditional.”

The complete per-item row ledger is:

- `cor-ftc-integral-function-differentiable-almost-everywhere`: `empty`, `one`, `degenerate`, `iff-forward`, `iff-reverse`.
- `thm-newton-leibniz-with-interior-derivative`: `empty`, `zero`, `degenerate`, `iff-forward`, `iff-reverse`.
- `cor-newton-leibniz-with-finitely-many-exceptional-points`: `degenerate`, `iff-forward`, `iff-reverse`.
- `thm-newton-leibniz-with-a-countable-exceptional-set`: `zero`, `degenerate`, `iff-forward`, `iff-reverse`.
- `thm-integration-by-parts-with-interior-derivatives`: `empty`, `zero`, `one`, `degenerate`, `nonempty-choice`.
- `thm-substitution-with-riemann-integrable-inner-derivative`: `empty`, `one`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `thm-one-sided-ftc-at-points-with-one-sided-limits`: `empty`, `one`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`: `empty`, `one`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`: `empty`, `one`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `ex-bounded-discontinuous-derivative-that-is-riemann-integrable`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `cex-volterra-bounded-derivative-not-riemann-integrable`: `empty`, `degenerate`, `iff-forward`, `iff-reverse`.
- `ex-dense-jump-integrand-with-dense-nondifferentiability`: `empty`, `zero`, `one`, `degenerate`, `iff-forward`, `iff-reverse`.
- `ex-thomae-integral-function-differentiates-through-dense-discontinuities`: `empty`, `iff-forward`, `iff-reverse`.
- `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity`: `empty`, `iff-forward`, `iff-reverse`.
- `cex-ae-zero-derivative-does-not-determine-endpoint-change`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `cor-chord-length-is-at-most-arc-length`: `empty`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `lem-polygonal-length-is-monotone-under-refinement`: `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `thm-rectifiable-iff-coordinate-functions-have-bounded-variation`: `empty`, `nonempty-choice`.
- `thm-arc-length-is-additive-over-subintervals`: `empty`, `nonempty-choice`.
- `thm-arc-length-is-invariant-under-monotone-reparametrization`: `empty`, `one`, `iff-forward`, `iff-reverse`.
- `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`: `empty`, `endpoints`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence`: `empty`, `zero`, `endpoints`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `thm-c1-paths-have-length-equal-to-the-integral-of-speed`: `empty`, `iff-forward`, `iff-reverse`.
- `cor-length-of-the-graph-of-a-c1-function`: `empty`, `one`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `cor-piecewise-c1-paths-have-additive-speed-integral-length`: `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `lem-arc-length-function-is-continuous-and-nondecreasing`: `empty`, `nonempty-choice`.
- `thm-every-rectifiable-path-has-an-arc-length-parametrization`: `empty`, `iff-forward`, `iff-reverse`.
- `cor-regular-c1-paths-have-c1-unit-speed-parametrizations`: `empty`, `zero`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `ex-line-segment-and-polygonal-path-length`: `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `ex-unit-circle-arc-has-length-theta`: `empty`, `one`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `cex-graph-of-x-sin-one-over-x-is-not-rectifiable`: `empty`, `degenerate`, `iff-forward`, `iff-reverse`.
- `cex-the-koch-curve-is-not-rectifiable`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `ex-v-shaped-path-is-rectifiable-but-not-c1`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `cex-the-same-trace-can-have-different-path-lengths`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `cex-arc-length-is-not-continuous-under-uniform-convergence`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.
- `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous`: `empty`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse`.

### New item-level findings for Alpha (not papered over)

The full-section quotes made the following rows visibly unsupported by the
formal source section or by the inputs named on the current proof step. These
cannot be made true by editing the contract alone. I left every item byte-for-byte
untouched, as required. The affected contract rows and the exact item text are
quoted here.

1. **Darboux-sum formula is not in either direct source section.** In
   `thm-newton-leibniz-with-interior-derivative`, both citation rows
   `L2 -> def-partition-and-refinement#Definition` and
   `L2 -> def-darboux-integral#Definition` purport to support:

   > [L2] For a partition $P=(t_0,\ldots,t_m)$, the lower and upper Darboux sums are obtained by multiplying each subinterval length by the infimum and supremum of $f$ there.

   `def-partition-and-refinement` only defines partitions and refinement.
   `def-darboux-integral` names `L(f,P)` and `U(f,P)` and links onward to
   `def-darboux-sums`; it does not state the product formulas in its own
   Definition. The actual direct source is `def-darboux-sums`. The item must add
   that dependency/citation (or state the derivation); the contract must not
   pretend either current direct source contains it.

2. **The abstract norm axiom is never connected to the Euclidean norm.** In
   `lem-polygonal-length-is-monotone-under-refinement`, both citation rows
   `L2 -> def-norm-and-normed-space#Definition` and
   `L2 -> def-path-polygonal-length-and-rectifiability-in-rn#Definition` purport
   to support:

   > [L2] The Euclidean norm satisfies the triangle inequality.

   The first source says that an arbitrary function already known to be a norm
   satisfies its norm axioms. The second uses the notation `||.||_2` in the
   polygonal sum, but does not prove or state there that this function is a norm.
   A direct Euclidean-norm result such as
   `thm-cauchy-schwarz-and-the-euclidean-norm` is missing from the item.

3. **The V-path applies square-root existence without its field hypothesis and
   computes a Euclidean norm without its formula.** In
   `ex-v-shaped-path-is-rectifiable-but-not-c1`, citation row
   `L3 -> thm-of-square-roots#Statement` and derivation row `step-1-1` contain:

   > [L3] $\sqrt2$ is the nonnegative number whose square is $2$.

   > 1.1 On $[-1,0]$ the derivative is $(1,-1)$, and on $[0,1]$ it is $(1,1)$; each has Euclidean norm $\sqrt2$ by [L3].

   The cited theorem begins “Let $F$ be a complete ordered field”; this item does
   not cite or discharge that hypothesis for $\mathbb R$. It also has no source
   for `||(1,\pm1)||_2=sqrt(2)`. (The repaired Koch item does discharge the same
   square-root premise via `cor-cauchy-reals-lub-complete`.)

4. **Four facts strengthen an existential reciprocal bound to sequence
   convergence/eventual smallness.** The affected citation rows, all targeting
   `cor-archimedean-reciprocal#Statement`, are:

   - `ex-bounded-discontinuous-derivative-that-is-riemann-integrable` L4:
     > Reciprocals of positive natural numbers tend to zero.
   - `cex-volterra-bounded-derivative-not-riemann-integrable` L5:
     > Reciprocals of positive natural numbers tend to $0$.
   - `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` L5:
     > Reciprocals of positive naturals tend below every positive bound.
   - `cex-arc-length-is-not-continuous-under-uniform-convergence` L3:
     > The sequence $1/k$ of real numbers tends to zero.

   The cited Statement proves only
   `(for every epsilon>0)(there exists n>=1) 1/n<epsilon`; convergence needs the
   stronger threshold quantifier `(there exists N)(for every k>=N)`. The source's
   non-formal Remarks explain that extra line using
   `lem-of-naturals-positive` and `lem-of-inverse-positive`, but `Remarks` is not
   a valid citation-contract `source_section`, and none of the four items cites
   those inputs. The unsupported uses are derivation rows `step-2-2`,
   `step-4-2`, `step-1-2`, and `step-1-1`, respectively: they say the constructed
   points “tend to $0$”, “eventually lie in the half-support”, satisfy
   `$x_k\downarrow0$`, and give `$1/(2k)\to0$`. Each item needs the eventual
   monotonicity argument or a direct convergence source.

5. **Three facts silently iterate a one-step trigonometric shift over arbitrary
   integers.** The affected rows targeting
   `thm-quarter-turn-values-and-shift-formulas#Statement` are:

   - `ex-bounded-discontinuous-derivative-that-is-riemann-integrable` L3:
     > The number $\pi$ is positive, and shifts by $\pi$ alternate the signs of sine and cosine.
   - `cex-volterra-bounded-derivative-not-riemann-integrable` L4:
     > Sine and cosine have absolute value at most $1$; $\pi>0$, and their values at integer multiples of $\pi$ alternate by the quarter-turn and shift formulas.
   - `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` L1:
     > The number $\pi$ is positive, and the shift formulas give $\sin(\pi/2+k\pi)=(-1)^k$ for integers $k\ge0$.

   The source Statement gives only the one-step identities
   `sin(x+pi)=-sin(x)` and `cos(x+pi)=-cos(x)`, plus the four base values. The
   arbitrary-integer claims used in derivation rows `step-2-2`, `step-4-2`, and
   `step-1-2` require a finite induction that none of the items writes or cites.

6. **The unit-circle speed calculation has no Euclidean-norm input.** Contract
   derivation row `step-2-1` in `ex-unit-circle-arc-has-length-theta` quotes the
   current proof exactly:

   > 2.1 By [L3], $\lVert\gamma_\theta'(t)\rVert_2=\sqrt{\sin^2t+\cos^2t}=1$.

   L3 is only the Pythagorean identity. No fact or dependency supplies
   `||(x,y)||_2=sqrt(x^2+y^2)`, so the named input does not support the first
   equality.

7. **The sawtooth counterexample likewise computes Euclidean norms and speeds
   without a Euclidean-norm source.** The affected derivation rows in
   `cex-arc-length-is-not-continuous-under-uniform-convergence` are:

   > 1.1 Every $\gamma_k(t)$ has first coordinate $t$ and second coordinate between $0$ and $1/(2k)$, so $\sup_t\lVert\gamma_k(t)-\gamma(t)\rVert_2\le1/(2k)\to0$ by [L3].

   > 1.2 On each of the $2k$ parameter intervals, $\gamma_k$ has derivative $(1,1)$ or $(1,-1)$ and hence constant speed $\sqrt2$.

   > 1.3 The limit path has constant derivative $(1,0)$ and speed $1$.

   L1 is the piecewise-$C^1$ length theorem, L2 integrates constants, and L3 is
   the reciprocal claim; none defines or computes the Euclidean norm. The item
   needs the direct norm formula (and finding 4 independently applies to the
   convergence quantifier in step 1.1).

These findings supersede the earlier blanket sentence that there was “no
batch-local blocker.” They do not say the displayed mathematical conclusions
are false; they say the current evidence/input record cannot license them
without item changes, which this dispatch forbids. The pre-existing Alpha-owned
`risk_review` fields were not edited by Beta.

### Verification and blocker disposition

- `proof-contract --strict`: 36/36 items, 0 errors, 0 warnings.
- Live proof-step coverage: 177 current numbered steps, 177 derivation-map rows,
  with no missing, duplicated, or stale step id.
- Citation coverage: 189 rows; 189 exact source excerpts; five were already
  complete and 184 changed in this pass.
- Boundary coverage: 288 rows; 130 `checked` and 158 `not_applicable`; no
  prospective `must`/`should`/`will` evidence remains.
- No item file is changed in the working tree.
- There was no permission, shell, edit, web, or git blocker and no escalation or
  permission prompt. The only blocker to declaring semantic contract fidelity
  complete is the seven item-level finding families above, which require Alpha
  adjudication and an item-authorized repair round.
