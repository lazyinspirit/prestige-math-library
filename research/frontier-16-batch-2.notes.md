# Frontier 16, batch 2 — Beta-2 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 artifacts are complete and under final gate/audit review.
- Owned artifact paths: `research/frontier-16-batch-2.pages.json`, `research/frontier-16-batch-2.coverage.json`, `research/frontier-16-batch-2.proof-contracts.json`, and this file.
- Completed checks: canonical instructions, schema, README, proof-contract schema, house exemplar, latest completed batch shape, current spec, both design sections, seven full-text source ranges, all proposed ids, and all published dependency statements were read; component provenance, proof decompositions, corollary passes, and all eight boundary dispositions were planned; 36 published citation quotes in the contracts match the cited disk sections exactly.
- Open constraint: `source-fetch-check --stamp` cannot resolve any host in this sandbox and returned `EAI_AGAIN` for all seven recorded URLs. The browser independently fetched each full PDF, but no stamp is fabricated; the engine must rerun the mechanical stamper in a network-enabled stage.
- Exact next action: run the remaining batch-scoped gates, reconcile any mechanical finding into these owned artifacts, and report the fetch-stamp blocker and all scaffold findings to Step-3 Alpha.
- Working-tree baseline: while this Beta was still running, concurrent commit `404a9c0b` swept the then-current tracked batch files into an unrelated gate commit. It captured this batch's coverage file and an earlier pages version. The current post-commit delta contains the final dependency refinements in `pages.json`; `notes.md` and `proof-contracts.json` remain untracked. This Beta did not make, stage, or amend that commit.

## Scope and owned artifacts

This batch owns two A/B pairs:

- `areas-of-elementary-plane-figures` at order 288.00007 and `areas-of-elementary-plane-figures-examples` at 288.00008;
- `improper-and-parameter-dependent-multiple-integrals` at order 288.00011 and `improper-and-parameter-dependent-multiple-integrals-examples` at 288.00012.

After the Step-3 fixes, the area A page has 17 items and its companion has 6. The improper-integral A page has 15 items and its companion has 4. Neither A page approaches the 60-item ceiling, so no split is proposed.

The dispatch's three-file write list accidentally omits the separately mandatory `coverage.json`. `CLAUDE.md`, `QUALITY-CONTROLS.md`, the canonical-harvest section of the dispatch, and the newest completed batch all require and gate that fourth namespaced artifact. No non-namespaced file was changed.

## Design/spec drift — do not settle inside this batch

The spec is carried unchanged, as the dispatch requires.

### Drift D2-1 — RC-4 prerequisite mismatch

Design file: `research/plan-realanalysis-completion-track.md`, section `#### RC-4 Areas of Elementary Plane Figures — level 23`.

Exact design text:

```text
`requires`: `fubini-and-change-of-variables`, `pi-the-equivalent-characterizations`, `inner-product-spaces-and-orthogonality`, `determinants-of-matrices-over-a-commutative-ring`.
```

Current `research/plan-spec.json` text represented by the batch manifest:

```text
`requires`: `fubini-and-change-of-variables`, `pi-the-equivalent-characterizations`, `inner-product-spaces-and-orthogonality`.
```

Recommendation: let the run's drift unit adjudicate; do not apply a batch-local edit. The determinant page is already in the transitive prerequisite closure of `fubini-and-change-of-variables`, and every determinant dependency used here is published at order 82, so the spec route is mathematically closed. Declining adjudication leaves documentary drift but does not create an unresolved item edge.

### Drift D2-2 — RC-6 prerequisite mismatch

Design file: `research/plan-realanalysis-completion-track.md`, section `#### RC-6 Improper and Parameter-Dependent Multiple Integrals — level 22`.

Exact design text:

```text
`requires`: `fubini-and-change-of-variables`, `improper-integrals`, `uniform-convergence-of-functions`, `the-fundamental-theorems-of-calculus`.
```

Current `research/plan-spec.json` text represented by the batch manifest:

```text
`requires`: `fubini-and-change-of-variables`, `improper-integrals`, `the-fundamental-theorems-of-calculus`.
```

Recommendation: let the drift unit adjudicate; do not apply a batch-local edit. The retained proof proves uniform tail control from an integrable dominator and does not cite a theorem from `uniform-convergence-of-functions`, so the spec route is mathematically closed. Declining adjudication preserves a design/spec mismatch but does not force an undeclared proof dependency.

## Applyable amendments to the prose design

### Amendment D2-3 — replace a constant derivative bound by an integrable dominator

Recommendation: approve. A constant uniform bound on an unbounded domain has infinite integral and does not control the tail.

Exact old RC-6 text:

```text
Continuity of $F$ under local uniform domination; differentiation under the integral sign on a non-compact domain under a uniform bound on $\partial_t f$; the multivariable Leibniz rule, extending the published `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` off the compact rectangle.
```

Exact new text:

```text
Continuity of $F$ under a locally uniform integrable dominator; differentiation under the integral sign on a non-compact domain when $|\partial_t f(x,t)|$ is bounded by one improper-integrable function of $x$ uniformly on a parameter neighbourhood and one parameter slice is absolutely integrable; the resulting multivariable Leibniz rule extends the published `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` beyond compact rectangles.
```

If declined, the central differentiation theorem would be false on infinite-volume domains.

### Amendment D2-4 — state the convention distinction behind “no conditional theory”

Recommendation: approve. The source's positive/negative-part definition makes signed domain-exhaustion convergence absolute in every dimension. One-variable conditional convergence survives only because `improper-integrals` fixes an endpoint order rather than requiring invariance under arbitrary compact exhaustions.

Exact old RC-6 text:

```text
Absolute convergence is necessary in dimension $\ge 2$: unlike the one-variable case there is no conditional theory, because there is no canonical order of approach.
```

Exact new text:

```text
For the exhaustion-independent definition used here, a signed improper multiple integral exists exactly when the integral of its absolute value is finite. This is true in every dimension for arbitrary compact Jordan exhaustions. The conditional one-variable theory on `improper-integrals` uses a separately fixed order of approach to each endpoint and is therefore a different convention, not a counterexample to the exhaustion statement.
```

If declined, the page would attach a dimension restriction to a fact caused by the chosen convergence notion.

### Amendment D2-5 — make the polygon convention and seam explicit

Recommendation: approve. The source and this page use “simple polygon” for the compact filled region. The published `def-polygonal-arc-and-polygon` on `plane-graphs-euler-and-the-five-colour-theorem` uses “polygon” for the boundary curve.

Exact old definition line in RC-4:

```text
**DEFS.** Translation of a set; the parallelogram $P(p;v,w)$ and the triangle $T(A,B,C)$ in $\mathbb{R}^2$; base and height of a side; a simple polygon and its triangulation.
```

Exact Step-3 replacement text after B2-2:

```text
**DEFS.** Translation of a set; the parallelogram $P(p;v,w)$ and the triangle $T(A,B,C)$ in $\mathbb{R}^2$; base and height of a chosen nonzero side; a simple polygonal region as a compact connected set $P\subseteq\mathbb R^2$ with nonempty connected interior, $P=\overline{\operatorname{int}P}$, and boundary equal to an irredundant simple closed finite polygonal chain; a diagonal as a segment joining nonadjacent boundary vertices whose relative interior lies in $\operatorname{int}P$; and a frugal triangulation whose vertices are exactly the polygon vertices. Record, as non-load-bearing forward orientation, that `def-polygonal-arc-and-polygon` calls the boundary chain a polygon and `thm-polygonal-jordan-curve` supplies the corresponding complementary-region theorem on `plane-graphs-euler-and-the-five-colour-theorem`.
```

If declined, the library would carry two silent meanings of “polygon,” reproducing the two-notions seam defect.

### Amendment D2-6 — do not duplicate the published standard right triangle

Recommendation: approve.

Exact old RC-4 B-page text:

```text
**B page.** A triangle with explicit vertices, area by both formulas; a parallelogram from a matrix; a degenerate triangle with collinear vertices; the unit disc's content computed; a right triangle recovering the published `ex-triangle-has-jordan-content-one-half`.
```

Exact new text:

```text
**B page.** A triangle with explicit vertices, area by both formulas; a parallelogram from a matrix; a degenerate triangle with collinear vertices; the unit disc's content computed; an irregular pentagon by triangulation and the shoelace formula; and a linear-bijection counterexample to content invariance. The already-published `ex-triangle-has-jordan-content-one-half` is not re-minted: the general triangle theorem independently computes the standard triangle from graph-area agreement and an elementary antiderivative.
```

If declined, the companion would duplicate an immutable published construction under a new id.

### Amendment D2-7 — use the actual polar theorem, not a stronger paraphrase of the fixed annular-sector example

Recommendation: approve.

Exact old RC-6 Gaussian route:

```text
**The Gaussian integral** $\int_{-\infty}^{\infty} e^{-x^2}dx=\sqrt\pi$, by the polar-coordinate evaluation of $\bigl(\int e^{-x^2}\bigr)^2$ over an exhaustion by discs, using the published `ex-polar-change-of-variables-on-an-annular-sector`.
```

Exact new text:

```text
**The Gaussian integral** $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$, by identifying its square with the plane Gaussian integral on expanding squares and evaluating that plane integral on compact annular sectors whose radial and angular seams exhaust the punctured plane. Apply `thm-change-of-variables-for-compact-jordan-sets` directly and recompute the polar Jacobian; `ex-polar-change-of-variables-on-an-annular-sector` is a specific worked sector and is not paraphrased as a general polar theorem.
```

If declined, the proof would cite an example whose actual Statement covers only one fixed annular sector as though it proved all polar truncations.

## Web source ledger and convention disagreements

Every URL below was opened as a substantive full PDF in the browser during this session. The browser reported the full page count and searchable mathematical body. The mechanical Node stamper nevertheless failed before downloading because the shell sandbox cannot resolve external hosts; this is recorded under Final Step-2 checks rather than papered over.

### Areas of elementary plane figures

- William F. Trench, *Introduction to Real Analysis*: https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF. Read §7.2, Theorem 7.2.6 and Examples 7.2.7–7.2.8, and §7.3 from “Jordan Measurable Sets” through Theorem 7.3.7. Supports graph-region integration, Jordan measurability, linear content scaling, and the determinant route.
- Michael E. Taylor, *Introduction to Analysis in Several Variables*: https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf. Read §3.1, Propositions 3.1.4–3.1.10. Independently supports contented sets, graph-nullity, Fubini between graphs, translation invariance inside the linear-change proof, and determinant scaling.
- *Geometry: Combinatorics & Algorithms 2020*, Chapter 4: https://ti.inf.ethz.ch/ew/courses/Geo20/lecture/gca20-4.pdf. Read §§4.1–4.2 through Exercise 4.17. Supports the filled-region convention, triangulation definition and theorem, triangle count, and shoelace formula.
- Jeff Erickson, *Simple Polygons*: https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf. Read §1.4, Lemmas 1.3–1.9 and Theorem 1.5. Independently supports the diagonal decomposition, triangulation induction, incidence rules, and triangle count.
- The published `cex-rational-points-in-unit-square-have-no-jordan-content` supplies the bounded non-area witness required by B2-1. Its source route was reopened at J. Lebl, *Basic Analysis*, Jordan measurable sets, https://www.jirka.org/ra/html/sec_jordansets.html, and A. Treibergs, *MATH 3225 final solutions*, https://www.math.utah.edu/~treiberg/M3225_Final_Solutions.pdf. Treibergs explicitly records that the rational points of the unit square have the whole square as boundary and are not a Jordan region. Because the published counterexample is homed on an examples page, the new A-page false statement proves the short boundary argument from A-page dependencies and cross-links that counterexample only in its Remark.

Convention disagreements:

- Trench uses “Jordan measurable/Jordan content”; Taylor uses “contented/content.” The scaffold follows the published library's Jordan terminology.
- The ETH source calls the filled compact region a simple polygon. Erickson first distinguishes the boundary chain and later adopts the filled-region convention. The published library currently calls the boundary curve a polygon. The scaffold uses the unambiguous id and title “simple polygonal region” and plans a forward agreement remark.
- ETH permits a listed vertex sequence; the scaffold treats consecutive collinear subdivision points as redundant rather than genuine vertices. This makes the induction base and the diagonal statement stable without changing the underlying region or triangulations.

### Improper and parameter-dependent multiple integrals

- Victor Guillemin, *MIT 18.101 Analysis II Lecture Notes*: https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf. Read §§3.7–3.8. Supports open-set exhaustions, the nonnegative supremum definition, exhaustion independence, positive/negative parts, and equivalence with absolute convergence.
- Michael E. Taylor, *Introduction to Analysis in Several Variables*: https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf. Read §3.1, “Integrals over $\mathbb R^n$” and “Unbounded integrable functions.” Independently supports arbitrary compact exhaustions under absolute convergence, product limits, polar evaluation, and the Gaussian computation.
- William F. Trench, *Functions Defined by Improper Integrals*: https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF. Read §2 and §7. Supports continuity from uniform tails, differentiation under the sign, the exact failure witness $t^3e^{-t^2x}$, the sine-integral convention contrast, and the scaled Gaussian parameter family.

Convention disagreements:

- Guillemin calls boundary-zero sets “rectifiable”; the library reserves rectifiability for curves and uses “Jordan measurable.”
- Guillemin and Taylor build signed improper integration from positive and negative parts, so it is absolute by definition. The one-variable `improper-integrals` page allows conditional endpoint-ordered limits. The scaffold states both conventions without conflating them.
- Taylor's $R^\#$ theory also admits unbounded values on a fixed compact set by truncating the integrand. This scaffold changes the domain by compact Jordan exhaustion and assumes local Riemann integrability; unbounded-value truncation is not silently imported.
- Trench's parameter theorems use uniform convergence of one-dimensional improper tails. The scaffold uses the stronger, easily checked sufficient hypothesis of one integrable dominator, generalized to a multiple-integral domain.

## Canonical coverage yield

After B2-3 and B2-5, the coverage artifact contains 84 harvested headings: 26 `included`, 11 `inline`, 20 `already-published`, and 27 `out-of-scope`. There are no `deferred` rows. The added rows enumerate Erickson's definitions of diagonals and frugal triangulations, ETH's three-dimensional tetrahedralization contrast including the Schönhardt obstruction and variable simplex counts, and Taylor Proposition 3.1.24. The area warning is explained by the mature prerequisites: the source ranges independently re-prove boundary criteria, graph-nullity, C1 preservation of null sets, linear content scaling, and matrix factorization that are already published. None of those results was dropped for want of a lemma.

The source harvest added the interior-diagonal lemma, triangulation theorem, triangulation face count, shoelace formula, uniform-tail lemma, comparison theorem, and the explicit parameter counterexample. The Step-3 breadth review further added the bounded-set false statement and the content-zero modification lemma. No page needs a split after those additions.

## Published dependencies opened and closure

Every proposed external dependency was opened from `items/` and its actual primary section read. In the Step-3-fixed manifest all 67 distinct external targets are `status: published`; 24 have `provenance.statement: literature-derived` and 43 have `provenance.statement: ai-altered`. None is AI-generated and none is legacy-unclassified. Every home is strictly earlier than its consumer; the standard square-root items are homed on `foundations-of-the-real-numbers` and `roots-and-rational-powers`, and the standard right-triangle example is not a dependency.

Source-checked or convention-sensitive dependencies:

- Jordan/Riemann block: `def-jordan-inner-and-outer-content`, `def-multidimensional-rectangle-and-volume`, `def-null-and-content-zero-in-rn`, `thm-jordan-content-and-indicator-integrability`, `cor-jordan-content-finite-additivity`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-multidimensional-integral-properties`, `thm-multidimensional-riemann-criterion`, `thm-fubini-over-a-region-between-continuous-graphs`, `thm-linear-images-scale-jordan-content-by-absolute-determinant`, `cor-parallelepiped-content-is-the-absolute-determinant`, `cor-riemann-integral-of-a-product-function`, `thm-change-of-variables-for-compact-jordan-sets`, `def-jacobian-determinant-of-a-c-one-map`, and `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set`.
- Plane geometry and linear algebra: `def-determinant-of-a-square-matrix`, `def-euclidean-inner-product`, `def-linear-independence`, `def-metric-bounded-diameter`, `prop-orthogonal-projection-formula-and-linearity`, `thm-orthogonal-projection-is-the-unique-nearest-point`, and `thm-of-square-roots`.
- Improper/parameter calculus: `def-improper-integral-at-infinity`, `def-mixed-improper-integral`, `thm-comparison-test-for-improper-integrals`, `thm-improper-p-test-rational`, `thm-substitution-for-improper-integrals`, `cor-mean-value-theorem`, `thm-ftc-second-part`, `thm-linearity-of-the-integral`, `lem-integral-elementary-bounds`, `thm-heine-cantor-metric`, and `lem-distance-to-set-is-lipschitz`.
- Exponential, trigonometric, and polar facts: `cor-exponential-reciprocal-and-positivity`, `lem-exponential-dominates-one-plus-x`, `thm-derivative-of-exponential`, `thm-exponential-addition-formula`, `thm-exponential-beats-every-polynomial`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-polar-form-with-unique-principal-argument`, `thm-principal-inverse-tangent-calculus`, and `thm-real-power-continuity-and-derivatives`.

Established standard definitions and finite infrastructure were also opened exactly: `def-countable`, `def-extended-reals`, `lem-extended-reals-complete`, `def-finite-cardinality`, `def-metric-compactness`, `def-metric-interior-closure-boundary`, `def-riemann-area-between-continuous-graphs`, `def-sections-and-iterated-riemann-integrals`, `lem-derivative-of-a-power`, `lem-finite-sum-laws`, `lem-finite-powers-of-countable-sets-are-countable`, `lem-q-and-irrationals-dense-r`, `thm-rationals-countable`, `thm-euclid-infinitude-of-primes`, `thm-heine-borel-rn`, and `thm-of-archimedean`.

The Step-3-fixed contracts contain 54 citations to published clauses, all verified as exact substrings of the cited primary section. The remaining same-batch quotes are exact Step-5 statement obligations. No published load-bearing claim was found false, so no published-dependency repair is proposed.

Every load-bearing edge is internal to its A/B pair or published earlier. There is no external fallback and no `proved_here: false` dependency. No B-page item is a dependency target.

## Planned component provenance and source rationale

### `areas-of-elementary-plane-figures`

| Item | Statement | Proof | Rationale and Step-5 source URL |
|---|---|---|---|
| `def-translation-of-a-set-in-rn` | literature-derived | not-applicable | Standard set translation used in Taylor §3.1; cite Taylor. |
| `thm-jordan-content-is-translation-invariant` | literature-derived | ai-altered | Taylor's translation identity and Trench's determinant-one linear rule support the statement; the direct inner/outer-cover proof is local. Cite Taylor and Trench. |
| `prop-riemann-graph-area-equals-jordan-content` | literature-derived | ai-altered | Taylor Theorem 3.1.9 and Trench Theorem 7.2.6; specialize to the constant-one integrand and bridge to the published graph-area definition. Cite Taylor and Trench. |
| `cor-disc-jordan-content-is-pi-r-squared` | ai-altered | ai-altered | The positive-radius clause is the source-backed graph/Jordan reconciliation; the zero-radius singleton clause is a local extension. Cite Trench. |
| `fs-a-bounded-plane-set-has-an-area` | ai-altered | ai-altered | RC-4's source-backed boundary is formulated as the universal false claim; the local refutation uses the rational-points witness from the published counterexample and its Lebl/Treibergs route, but proves boundedness, boundary, positive square content, and nonmeasurability locally so the examples-page item is not a dependency target. This is not an AI-generated false statement. |
| `def-parallelogram-and-triangle-in-r2` | literature-derived | not-applicable | Standard affine plane figures in Trench's linear-change discussion. Cite Trench. |
| `def-base-and-height-for-plane-figures` | literature-derived | not-applicable | Standard perpendicular-distance convention, consistent with the design source register. Cite Trench. |
| `lem-determinant-base-height-identity-in-r2` | ai-altered | ai-altered | Materially combines the determinant scale source with the published orthogonal-projection theorem. Cite Trench and Taylor. |
| `thm-parallelogram-content-and-base-height-formula` | literature-derived | ai-altered | Trench Theorem 7.3.7 and Taylor Proposition 3.1.10; specialize the published parallelepiped theorem, then use the local height lemma. Cite both. |
| `thm-triangle-content-and-base-height-formula` | literature-derived | ai-altered | Standard determinant/half-base-height theorem; compute the standard triangle from graph area, then use affine scaling. Cite Trench and Taylor. |
| `cor-triangle-content-zero-iff-collinear` | literature-derived | ai-altered | Standard degeneracy criterion derived by a complete two-coordinate case split. Cite Trench. |
| `def-simple-polygonal-region-and-triangulation` | ai-altered | not-applicable | ETH Definitions 4.1 and 4.7 and Erickson §1.4 are materially tightened into a self-contained filled-set convention: compact connected $P$, nonempty connected interior, $P=\overline{\operatorname{int}P}$, prescribed polygonal boundary, diagonal relative interior, and frugal triangulation. Cite ETH and Erickson. The definition does not assert that an arbitrary boundary chain produces such a set. |
| `lem-simple-polygon-has-an-interior-diagonal` | literature-derived | ai-altered | Erickson Lemma 1.4 and the constructive case in ETH Theorem 4.9. Cite both. |
| `thm-simple-polygon-admits-a-triangulation` | literature-derived | ai-altered | ETH Theorem 4.9 and Erickson Theorem 1.5. Cite both. |
| `cor-simple-polygon-triangulation-has-n-minus-two-triangles` | literature-derived | ai-altered | ETH Lemma 4.15 and Erickson Lemma 1.7. Cite both. |
| `thm-simple-polygon-content-is-the-sum-of-triangle-contents` | ai-altered | ai-altered | ETH states summation of triangle areas; the scaffold strengthens it into the library's Jordan-measurability/content language using published finite additivity. Cite ETH. |
| `thm-shoelace-formula-for-simple-polygons` | literature-derived | ai-altered | ETH Exercise 4.14; prove boundary cancellation through the preceding triangulation theorem. Cite ETH. |

### `areas-of-elementary-plane-figures-examples`

| Item | Statement/construction | Verification | Rationale |
|---|---|---|---|
| `ex-triangle-area-by-determinant-and-base-height` | ai-generated | ai-generated | Locally selected vertices; `generation.role: example`. Recompute determinant 12, base 4, height 3, and content 6 at Step 5. |
| `ex-parallelogram-content-from-a-two-by-two-matrix` | ai-generated | ai-generated | Locally selected vectors; `generation.role: example`. Recompute determinant 8 and projection height $8/\sqrt{10}$. |
| `ex-collinear-triangle-has-zero-content` | ai-generated | ai-generated | Locally selected scalar-multiple witness; `generation.role: example`. Verify both determinant and height are zero. |
| `ex-unit-disc-has-jordan-content-pi` | literature-derived | ai-altered | Direct specialization of the source-backed disc reconciliation. Cite Trench. |
| `ex-irregular-pentagon-area-by-triangulation-and-shoelace` | ai-generated | ai-generated | Locally selected pentagon; `generation.role: example`. Check simplicity, both fan diagonals, triangle sum 15, and shoelace sum 30. |
| `cex-linear-bijection-need-not-preserve-jordan-content` | ai-generated | ai-generated | Explicit diagonal scaling witness; `generation.role: counterexample`. Verify bijectivity, determinant 2, and contents 1 and 2. |

### `improper-and-parameter-dependent-multiple-integrals`

| Item | Statement | Proof | Rationale and Step-5 source URL |
|---|---|---|---|
| `def-jordan-exhaustion-of-an-open-set` | literature-derived | not-applicable | Guillemin Definitions 3.21 and 3.23. Cite Guillemin. |
| `thm-open-subsets-of-rn-admit-jordan-exhaustions` | literature-derived | ai-altered | Guillemin Theorem 3.20; the local proof adds canonical least rational-grid codes to avoid hidden Countable Choice. Cite Guillemin. |
| `def-improper-multiple-integral-and-absolute-convergence` | literature-derived | not-applicable | Guillemin Definitions 3.22 and 3.25, independently Taylor §3.1. Cite both. |
| `thm-nonnegative-improper-multiple-integral-by-exhaustion` | literature-derived | ai-altered | Guillemin Theorem 3.24. Cite Guillemin. |
| `thm-absolute-improper-multiple-integral-by-exhaustion` | literature-derived | ai-altered | Guillemin's post-Definition-3.25 equivalence and Taylor Proposition 3.1.18. Cite both. |
| `thm-comparison-test-for-improper-multiple-integrals` | ai-altered | ai-altered | Generalizes the published one-variable comparison theorem through the nonnegative supremum definition. Cite Guillemin. |
| `def-parameter-dependent-improper-multiple-integral` | literature-derived | not-applicable | Trench §2 pointwise parameter convention, with the integration variable generalized to an open Jordan-exhausted domain. Cite Trench supplement. |
| `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` | ai-altered | ai-altered | Multiple-integral version of Trench's Weierstrass/uniform-tail mechanism. Cite Trench supplement. |
| `thm-continuity-of-dominated-parameter-dependent-improper-integrals` | ai-altered | ai-altered | Trench Theorem 10 adapted from uniform convergence to an integrable dominator and multiple domain. Cite Trench supplement. |
| `thm-differentiation-under-dominated-improper-multiple-integrals` | ai-altered | ai-altered | Trench Theorem 11 adapted to multiple domains; the proof makes the compact-core and tail steps explicit. Cite Trench supplement. |
| `lem-riemann-integral-unchanged-by-content-zero-modification` | ai-altered | ai-altered | Taylor §3.1 and Trench §7.3 support the standard invariance of bounded Riemann integrals under null/content-zero changes; the local version is adapted to the library's Jordan-set zero-extension convention and proved by finite cover/grid control. Cite Taylor and Trench. |
| `lem-gaussian-integral-is-finite-and-positive` | literature-derived | ai-altered | Standard preliminary in Taylor's Gaussian range; local comparison proof uses published exponential and p-test facts. Cite Taylor. |
| `lem-gaussian-square-is-the-plane-gaussian-integral` | literature-derived | ai-altered | Taylor formulas (3.1.71)–(3.1.75); prove on expanding squares. Cite Taylor. |
| `lem-plane-gaussian-integral-in-polar-coordinates` | literature-derived | ai-altered | Taylor's polar Gaussian computation, with radial origin and angular seam obligations exposed. Cite Taylor. |
| `thm-gaussian-integral` | literature-derived | ai-altered | Taylor's Gaussian evaluation and Trench Example 12. Cite both. |

### `improper-and-parameter-dependent-multiple-integrals-examples`

| Item | Statement/construction | Verification | Rationale |
|---|---|---|---|
| `ex-unequal-iterated-improper-integrals-on-the-unit-square` | ai-generated | ai-generated | The design supplies the formula but no literature extraction source. Treat the exact construction as generated, `generation.role: example`, and independently recompute both iterated values and the two rectangular exhaustion paths. |
| `cex-zero-iterated-integrals-without-a-double-integral` | ai-generated | ai-generated | Explicit prime-grid construction formulated locally; `generation.role: counterexample`. Recheck finite sections, density, dense complement, and the constant Darboux gap. |
| `cex-differentiation-under-an-improper-integral-without-domination` | literature-derived | ai-altered | Exact Trench Example 3 witness. Cite the Trench supplement and verify the parameter-zero branch separately. |
| `ex-scaled-gaussian-parameter-integral` | literature-derived | ai-altered | Trench Example 12 plus the retained Gaussian theorem; local proof adds the dominated derivative and second-moment formula. Cite Trench supplement and Taylor. |

No AI-generated construction is a dependency target. The generated truth-risk obligations are finite or elementary and remain mandatory at Step 5: recompute every displayed determinant and area; test the pentagon's noncrossing fan; verify the prime-grid section finiteness and both density arguments; and symbolically recompute the rectangular truncation formula for the unequal improper integrals. No external fallback is planned.

## Proof decomposition, corollary pass, and boundary obligations

Both required passes were performed separately for each pair.

### Areas pair

Long-proof decomposition:

- Determinant/base-height is isolated in `lem-determinant-base-height-identity-in-r2`; the parallelogram and triangle theorems then use short, separate affine-content arguments.
- Triangle degeneracy is separated into `cor-triangle-content-zero-iff-collinear`, with both directions and repeated vertices explicit.
- Polygon area is decomposed into the region/triangulation definition, the interior-diagonal lemma, triangulation existence, triangulation face count, Jordan-content additivity, and shoelace cancellation.
- The design's boundedness boundary is isolated in `fs-a-bounded-plane-set-has-an-area`, whose short refutation reuses the published rational-points witness instead of duplicating its proof.

Useful corollaries added:

- `cor-disc-jordan-content-is-pi-r-squared` closes the graph-area/Jordan-content seam, including radius zero.
- `cor-triangle-content-zero-iff-collinear` records the exact degeneracy criterion.
- `cor-simple-polygon-triangulation-has-n-minus-two-triangles` records the source's useful exact face count.

The highest-risk boundaries are zero radius; zero chosen base vectors; repeated and collinear triangle vertices; the explicit filled-set condition $P=\overline{\operatorname{int}P}$; nonempty connected polygon interior; irredundant polygon vertices; the $n=3$ induction base; internal edges counted twice; cyclic final-to-first shoelace indexing; and zero-content overlaps along full closed triangle edges.

### Improper-integral pair

Long-proof decomposition:

- Open-set exhaustion existence is separated from the nonnegative convergence theorem and the signed absolute-convergence theorem.
- Parameter theorems share `lem-uniform-tail-control-for-dominated-improper-multiple-integrals`; continuity and differentiation no longer hide the compact-core/tail split.
- `lem-riemann-integral-unchanged-by-content-zero-modification` isolates the Darboux/grid argument that licenses adding or removing polar seams and other content-zero modifications.
- The Gaussian proof is decomposed into finiteness/positivity, the product-square identity, content-zero modification, the polar plane evaluation on full annuli and discs, and the final positive-square-root theorem.

Useful corollary pass:

- The pass found no additional item-level corollary beyond the comparison theorem: a separate “no conditional theory” corollary would merely restate the adopted definition, and compact-rectangle Leibniz is already published.

The highest-risk boundaries are the empty open set; $j=0$ versus $j+1$ in exhaustion cores; the empty complement of $\mathbb R^n$; avoiding Countable Choice in the recursive neighborhoods; finite versus infinite nonnegative integral values; excluding infinity-minus-infinity; relative parameter endpoints; increment zero in difference quotients; the zero bound in the modification lemma before division; separate improper tails; the polar origin, duplicated half-annulus seams, the limit from annuli to discs, and the actual expanding-disc exhaustion; and the two ratios of lower rectangle endpoints in the unequal-exhaustion example.

No registered `finite_smoke` type applies to these real-analysis statements. The proof contracts therefore use empty `finite_smoke` arrays and do not claim that as evidence; the generated arithmetic witnesses have explicit Step-5 recomputation obligations instead.

## Exact Step-5 statement clauses bound by same-batch citations

The following clauses must occur verbatim in the authored primary sections because downstream contract citations quote them:

- `thm-jordan-content-is-translation-invariant`: `For every bounded $E\subseteq\mathbb R^n$ and every $a\in\mathbb R^n$, the translates $E+a$ and $E$ have equal Jordan inner and outer contents.`
- `prop-riemann-graph-area-equals-jordan-content`: `Then $K$ is compact and Jordan measurable.`
- `cor-disc-jordan-content-is-pi-r-squared`: `A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$.`
- `fs-a-bounded-plane-set-has-an-area`: the `## Statement` must say `Every bounded subset of $\mathbb R^2$ is Jordan measurable and therefore has a Jordan area.` The refutation uses $E=(\mathbb Q\cap[0,1])^2$, proves $\partial E=[0,1]^2$ from density, computes the square's positive content directly, and applies the boundary criterion. Its Remark cross-links `cex-rational-points-in-unit-square-have-no-jordan-content`; that link is not a `deps` edge because the published counterexample is on an examples page.
- `lem-determinant-base-height-identity-in-r2`: `For $v\ne0$, $\lVert v\rVert_2\,d(w,\mathbb Rv)=|\det[v\ w]|$.`
- `thm-parallelogram-content-and-base-height-formula`: `A parallelogram has Jordan content $|\det[v\ w]|$, equal to base times height when $v\ne0$.`
- `thm-triangle-content-and-base-height-formula`: `Every triangle $T(A,B,C)$ is Jordan measurable and has content $\tfrac12|\det[B-A\ C-A]|$.`
- `cor-triangle-content-zero-iff-collinear`: `A triangle has zero Jordan content if and only if its vertices are collinear.`
- `def-simple-polygonal-region-and-triangulation`: `A simple polygonal region is a compact connected set $P\subseteq\mathbb R^2$ such that $\operatorname{int}P$ is nonempty and connected, $P=\overline{\operatorname{int}P}$, and $\partial P$ is the union of the edges of an irredundant simple closed finite polygonal chain.` Spell out the chain by distinct cyclic vertices $v_0,\ldots,v_{n-1}$ with $n\ge3$: nonconsecutive closed edges are disjoint, consecutive edges meet only at their common endpoint, and no three consecutive vertices are collinear. Also state `A diagonal $[v_i,v_j]$ joins two nonadjacent boundary vertices and its open segment $\{(1-t)v_i+tv_j:0<t<1\}$ lies in $\operatorname{int}P$.` and `A frugal triangulation is a finite family of nondegenerate closed triangles with union $P$, vertex set exactly the boundary-vertex set, and pairwise intersections empty or a common vertex or full common edge.` These are definitions imposed on an already given filled set; do not claim that every simple closed polygonal chain determines one.
- `lem-simple-polygon-has-an-interior-diagonal`: `Every simple polygon with more than three vertices has an interior diagonal.`
- `thm-simple-polygon-admits-a-triangulation`: `Every simple polygon admits a triangulation.`
- `thm-simple-polygon-content-is-the-sum-of-triangle-contents`: `A simple polygon is Jordan measurable and its content is the sum of the contents of the triangles in any triangulation.`
- `thm-shoelace-formula-for-simple-polygons`: `The shoelace formula gives the Jordan content of a counterclockwise simple polygon.`
- `def-improper-multiple-integral-and-absolute-convergence`: both `For nonnegative f, its improper integral is the extended-real supremum of its compact Jordan integrals.` and `A locally Riemann-integrable signed function is improperly integrable precisely when the nonnegative improper integral of its absolute value is finite.`
- `thm-open-subsets-of-rn-admit-jordan-exhaustions`: `Every open subset of $\mathbb R^n$ has a compact Jordan exhaustion.`
- `thm-nonnegative-improper-multiple-integral-by-exhaustion`: `Every compact Jordan exhaustion computes the nonnegative improper integral, independently of the exhaustion.`
- `thm-comparison-test-for-improper-multiple-integrals`: `For locally integrable $0\le f\le g$, comparison on compact subsets gives the same inequality for improper integrals.`
- `lem-uniform-tail-control-for-dominated-improper-multiple-integrals`: `An integrable dominator gives one compact Jordan core outside which every dominated slice has uniformly small integral.`
- `thm-continuity-of-dominated-parameter-dependent-improper-integrals`: `A locally dominated parameter-dependent improper multiple integral is continuous in the parameter.`
- `thm-differentiation-under-dominated-improper-multiple-integrals`: `The parameter derivative may be passed through the improper multiple integral under an integrable uniform derivative bound.`
- `lem-riemann-integral-unchanged-by-content-zero-modification`: `Let $E\subseteq\mathbb R^m$ be bounded and Jordan measurable, let $f,g:E\to\mathbb R$ be bounded, and suppose $\{x\in E:f(x)\ne g(x)\}$ has content zero. Then $f$ is Riemann integrable over $E$ if and only if $g$ is, and when they are integrable their integrals are equal.`
- `lem-gaussian-integral-is-finite-and-positive`: `The integral $I=\int_{-\infty}^{\infty}e^{-x^2}\,dx$ exists as a finite positive real number.`
- `lem-gaussian-square-is-the-plane-gaussian-integral`: `$$I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)}\,d(x,y).$$`
- `lem-plane-gaussian-integral-in-polar-coordinates`: `$$\int_{\mathbb R^2}e^{-(x^2+y^2)}\,d(x,y)=\pi.$$`
- `thm-gaussian-integral`: `$$\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi.$$`

## Exact A-page summaries for Step 5

### `areas-of-elementary-plane-figures`

Jordan content assigns size to bounded sets through finite inner packings and outer covers, while Fubini evaluates integrals over regions between continuous graphs. Linear change of variables scales content by an absolute determinant, the Euclidean inner product supplies orthogonal projection and distance to a line, and the established characterizations of $\pi$ give the Riemann graph area of a disc.

Translation invariance first identifies graph area with Jordan content and gives the disc content $\pi r^2$, while the rational points of the unit square show that boundedness alone does not give Jordan area. Orthogonal projection turns a two-dimensional determinant into base times perpendicular height, yielding determinant and base--height formulas for parallelograms and triangles, including their degenerate cases. Compact filled polygonal regions are then defined through their interior, closure, boundary, and connectedness; interior diagonals give frugal triangulations, finite additivity sums the triangle contents, and cancellation of internal edges gives the shoelace formula.

### `improper-and-parameter-dependent-multiple-integrals`

Riemann integration on compact Jordan sets, Fubini, and compact change of variables provide the proper integrals used on each truncation. The one-variable improper-integral theory supplies comparison and tail estimates, while the fundamental theorem of calculus and the mean value theorem control parameter difference quotients on compact cores.

Compact Jordan exhaustions define nonnegative improper multiple integrals and show that signed exhaustion-independent convergence is absolute. An integrable dominator gives uniform tail control, from which continuity and differentiation under a parameter-dependent integral follow. A bounded integrand may be changed on a content-zero set without changing its Riemann integral. This licenses recombining injective polar half-annuli across their seams; full annuli pass to compact discs, and the expanding discs evaluate the plane Gaussian integral as $\pi$, giving the positive one-dimensional value $\sqrt\pi$.

Both B pages must have frontmatter only and no authored summary body.

## Per-page item lists

### `areas-of-elementary-plane-figures` — 17 items

1. `def-translation-of-a-set-in-rn` — definition — Translation of a subset of R^n
2. `thm-jordan-content-is-translation-invariant` — theorem — Jordan inner content, outer content, measurability, and content are translation invariant
3. `prop-riemann-graph-area-equals-jordan-content` — proposition — Riemann area between continuous graphs equals Jordan content
4. `cor-disc-jordan-content-is-pi-r-squared` — corollary — A closed disc of radius r ≥ 0 has Jordan content πr²
5. `fs-a-bounded-plane-set-has-an-area` — false statement — Every bounded plane set has Jordan area
6. `def-parallelogram-and-triangle-in-r2` — definition — Parallelograms and triangles in R²
7. `def-base-and-height-for-plane-figures` — definition — Base and perpendicular height for a chosen side of a plane figure
8. `lem-determinant-base-height-identity-in-r2` — lemma — Determinant equals base times distance to the spanning line in R²
9. `thm-parallelogram-content-and-base-height-formula` — theorem — Parallelogram content by determinant and base times height
10. `thm-triangle-content-and-base-height-formula` — theorem — Triangle content by determinant and half base times height
11. `cor-triangle-content-zero-iff-collinear` — corollary — A triangle has zero content iff its vertices are collinear
12. `def-simple-polygonal-region-and-triangulation` — definition — Simple polygonal regions, diagonals, and triangulations
13. `lem-simple-polygon-has-an-interior-diagonal` — lemma — Every nontriangular simple polygon has an interior diagonal
14. `thm-simple-polygon-admits-a-triangulation` — theorem — Every simple polygon admits a triangulation
15. `cor-simple-polygon-triangulation-has-n-minus-two-triangles` — corollary — Every triangulation of a simple n-gon has n−2 triangles
16. `thm-simple-polygon-content-is-the-sum-of-triangle-contents` — theorem — Polygon content is the sum of triangle contents
17. `thm-shoelace-formula-for-simple-polygons` — theorem — Shoelace formula for a counterclockwise simple polygon

### `areas-of-elementary-plane-figures-examples` — 6 items

1. `ex-triangle-area-by-determinant-and-base-height` — example — One triangle by both formulas
2. `ex-parallelogram-content-from-a-two-by-two-matrix` — example — Parallelogram content from a two-by-two matrix
3. `ex-collinear-triangle-has-zero-content` — example — Collinear triangle of zero content
4. `ex-unit-disc-has-jordan-content-pi` — example — Unit disc content π
5. `ex-irregular-pentagon-area-by-triangulation-and-shoelace` — example — Irregular pentagon by triangulation and shoelace
6. `cex-linear-bijection-need-not-preserve-jordan-content` — counterexample — Linear bijection need not preserve Jordan content

### `improper-and-parameter-dependent-multiple-integrals` — 15 items

1. `def-jordan-exhaustion-of-an-open-set` — definition — Compact Jordan exhaustions of open subsets of R^n
2. `thm-open-subsets-of-rn-admit-jordan-exhaustions` — theorem — Every open subset of R^n admits a compact Jordan exhaustion
3. `def-improper-multiple-integral-and-absolute-convergence` — definition — Improper multiple integrals and absolute convergence on open sets
4. `thm-nonnegative-improper-multiple-integral-by-exhaustion` — theorem — Every exhaustion computes a nonnegative improper multiple integral
5. `thm-absolute-improper-multiple-integral-by-exhaustion` — theorem — Absolute convergence makes signed exhaustion limits independent
6. `thm-comparison-test-for-improper-multiple-integrals` — theorem — Comparison and absolute comparison tests
7. `def-parameter-dependent-improper-multiple-integral` — definition — Parameter-dependent improper multiple integrals
8. `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` — lemma — Integrable domination gives uniform tail control
9. `thm-continuity-of-dominated-parameter-dependent-improper-integrals` — theorem — Dominated parameter integrals are continuous
10. `thm-differentiation-under-dominated-improper-multiple-integrals` — theorem — Differentiation under an improper multiple integral
11. `lem-riemann-integral-unchanged-by-content-zero-modification` — lemma — Content-zero modification does not change a bounded Riemann integral
12. `lem-gaussian-integral-is-finite-and-positive` — lemma — Gaussian integral is finite and positive
13. `lem-gaussian-square-is-the-plane-gaussian-integral` — lemma — Gaussian square equals the plane Gaussian integral
14. `lem-plane-gaussian-integral-in-polar-coordinates` — lemma — Plane Gaussian integral equals π
15. `thm-gaussian-integral` — theorem — Gaussian integral equals √π

### `improper-and-parameter-dependent-multiple-integrals-examples` — 4 items

1. `ex-unequal-iterated-improper-integrals-on-the-unit-square` — example — Iterated values π/4 and −π/4
2. `cex-zero-iterated-integrals-without-a-double-integral` — counterexample — Both iterated integrals zero without a double integral
3. `cex-differentiation-under-an-improper-integral-without-domination` — counterexample — Differentiation fails without domination
4. `ex-scaled-gaussian-parameter-integral` — example — Scaled Gaussian integral and parameter derivative

## New-id and reuse report

The exact collision command was one fixed-string `rg` invocation over `items/` and `research/plan-spec.json` with the Step-2 ids as `-e` patterns. It returned no match. During the Step-3 fix, fixed-string and semantic searches separately confirmed that `fs-a-bounded-plane-set-has-an-area` and `lem-riemann-integral-unchanged-by-content-zero-modification` are new; the semantic search found only the published rational-points counterexample and one-dimensional finite-point invariance, which are reused rather than duplicated. The final manifest has 42 proposed ids. A separate semantic `rg` covered translation invariance of content, graph/Jordan agreement, determinant/base-height formulas, polygon triangulation and shoelace, Jordan exhaustions, improper multiple integrals, Gaussian evaluation, unequal iterated integrals, and differentiation under improper integrals. It found the published general parallelepiped theorem, standard right-triangle example, graph-area definition, disc-area theorem, and the polygon boundary convention on `plane-graphs-euler-and-the-five-colour-theorem`; the scaffold reuses each as a dependency or agreement target rather than minting a duplicate.

The standard right-triangle example is not a dependency because examples pages are leaves. The local triangle theorem computes its own standard triangle from graph-area agreement, then applies affine scaling.

## Forward references and cross-batch dependencies

There are no load-bearing forward references. Two non-load-bearing orientation links are planned in the Remarks of `def-simple-polygonal-region-and-triangulation`:

- `def-polygonal-arc-and-polygon` on `plane-graphs-euler-and-the-five-colour-theorem` at order 357, to identify the later boundary-curve convention;
- `thm-polygonal-jordan-curve` on the same page, to point to the later complementary-region theorem.

Neither appears in a Statement, Facts section, proof, or `deps`. They are kept because the library otherwise carries two meanings of “polygon” with no dictionary seam.

This batch requires no item from another batch of `frontier-16`, and no current batch needs an item produced here. The planned `volumes-of-elementary-solids-and-solids-of-revolution` page will use `cor-disc-jordan-content-is-pi-r-squared`; the planned real Gamma/Beta page will use `thm-gaussian-integral` and the dominated parameter theorem. Those are future plan consumers, not cross-batch edges in this run.

## Findings for Step-3 Alpha

1. Approve Amendment D2-3: replace “uniform bound” by an improper-integrable uniform dominator. Declining leaves the differentiation theorem false on an infinite-volume domain.
2. Approve Amendment D2-4: scope the absence of conditional convergence to arbitrary compact exhaustions, not to dimension at least two. Declining states the wrong cause and dimension.
3. Approve Amendment D2-7: use the general compact-Jordan change-of-variables theorem for the Gaussian proof. Declining overstates the fixed annular-sector example's actual Statement.
4. Approve Amendment D2-5: define a filled simple polygonal region and record the later boundary-curve dictionary. Declining leaves a silent convention collision.
5. Approve Amendment D2-6: do not duplicate the published standard right-triangle example. Declining violates immutable-id reuse discipline.
6. Adjudicate Drift D2-1 through the run's drift unit. The determinant page is present in transitive closure, so either documented prerequisite list is mathematically viable; declining adjudication preserves inconsistent design/spec records.
7. Adjudicate Drift D2-2 through the run's drift unit. The retained proof builds uniformity from domination and does not need the omitted page; declining adjudication preserves inconsistent design/spec records.
8. Accept the two orientation-only forward references for the polygon dictionary. Declining them restores the two-notions seam; accepting them adds no proof dependency.

No finding requests a page split, load-bearing forward reference, external fallback, or published-dependency repair.

## Dependency-closure and confidence statement

Mathematical confidence is high in the scaffold. The determinant-height square identity, singular and repeated-vertex cases, graph/Jordan reconciliation, radius-zero disc, diagonal induction, internal-edge cancellation, arbitrary-exhaustion convention, extended-real nonnegative limit, signed absolute decomposition, domination tail estimates, parameter endpoint scope, Gaussian product/polar seams, and both explicit bad exhaustions were checked directly.

The generated examples and counterexamples were checked once: the explicit triangle gives 6; the parallelogram determinant gives 8; the collinear triangle gives 0; the pentagon shoelace sum is 30 and its area is 15; diagonal scaling changes square content from 1 to 2; the prime-grid set has finite coordinate sections and is dense; and the two rectangle aspect-ratio limits give opposite quarter-pi values. They remain flagged for independent recomputation at Step 5.

What was not verified: the authoritative `validate-plan` and `depsource` gates cannot classify this batch until Step 4 splices it into `research/plan-spec.json`; the proof-contract checker necessarily reports each scoped item missing before Step 5 authors the item files; no independent reader or paired judge has run. The shell fetch stamper could not produce required liveness stamps because DNS resolution is disabled. No claim that any of those unavailable gates passed is made.

## Final Step-2 checks

- `coverage-checklist` reports 2 pages, 75 harvested results, 0 errors, and 1 `coverage-low-yield` warning for the area pair. The warning is triaged above: mature published prerequisites account for the already-published rows, and Alpha must still audit the declines.
- `content-policy --manifest-only` reports 40 scoped items, 0 errors, and 0 warnings.
- The manifest parses as 16/6 and 14/4 items across the four pages.
- The proof-contract artifact parses as 33 scoped proof-bearing items and 33 contracts; every contract has all eight boundary dispositions, every planned step is mapped once, and all 36 citations to published items match the cited disk section exactly.
- The dependency overlay reports 63 distinct published external ids. All are earlier and provenance-eligible; there are no missing ids, B-page targets, or AI-generated dependency targets.
- The exact-id collision search reports all 40 ids new; the semantic search caused the published-standard-triangle reuse and polygon-convention seam described above.
- `source-fetch-check --stamp` was run and failed 7/7 URLs with `EAI_AGAIN`; 0 stamps were written. Browser full-text access is not substituted for the mandatory mechanical stamp.
- `prosecheck --warnings` reports 0 errors and 9 count warnings, all in the explicitly required Step-3 report and per-page item lists; it reports no spec-position contradiction.
- The applied-natural-embedding scan finds no occurrence, JSON parsing succeeds for all three machine-readable artifacts, and `git diff --check` reports no whitespace error in the four owned artifacts.

No authoritative claim is made for the unspliced plan gates.

## Step-3 fix pass

- **B2-1 — applied.** Added the A-page false statement `fs-a-bounded-plane-set-has-an-area` immediately after the graph/Jordan and disc reconciliation. Its explicit witness is $(\mathbb Q\cap[0,1])^2$. The proof uses the metric boundedness definition, rational/irrational density, metric boundary, Jordan inner/outer content, rectangle volume, and the boundary criterion; it proves the short refutation locally and places the published `cex-rational-points-in-unit-square-have-no-jordan-content` only in the Remark, preserving the examples-page leaf rule. The contract maps boundedness, the boundary computation, positive square content, nonmeasurability, and the final refutation separately. Planned provenance is `statement: ai-altered`, `proof: ai-altered`; the claim and witness route come from RC-4 and the counterexample's Lebl/Treibergs sources, so no generated false statement was introduced.

- **B2-2 — applied.** Tightened `def-simple-polygonal-region-and-triangulation` to define an already given filled set $P$ by compactness, connectedness, nonempty connected metric interior, $P=\overline{\operatorname{int}P}$, and boundary equal to an irredundant simple closed finite polygonal chain. The same item now defines a diagonal by relative interior in $\operatorname{int}P$ and a frugal triangulation by exact vertex set and common-face intersections. Added published dependencies `def-metric-compactness`, `def-metric-interior-closure-boundary`, and `def-connected-space`. The definition does not claim that an arbitrary boundary chain determines such a set; `def-polygonal-arc-and-polygon` and `thm-polygonal-jordan-curve` remain non-load-bearing orientation links to `plane-graphs-euler-and-the-five-colour-theorem`.

- **B2-3 — applied.** Added individual coverage dispositions for Erickson's diagonal and frugal-triangulation definitions. Added individual out-of-scope dispositions for ETH's three-dimensional tetrahedralization contrast, the Schönhardt obstruction, NP-completeness of nonconvex tetrahedralizability, the Steiner-vertex existence contrast, variable tetrahedron counts for one polyhedron, and minimum-size tetrahedralization complexity. Each decline has a result-specific reason; none is omitted merely for a missing prerequisite.

- **B2-4 — applied.** Added `lem-riemann-integral-unchanged-by-content-zero-modification` before the Gaussian lemmas, with a finite-cover/grid-control proof and a full proof contract including the zero bound and both iff directions. Replaced the polar strategy: two injective compact half-annulus parameter rectangles are evaluated separately, their radial-segment overlap is removed by the new lemma, the full-annulus formula passes to compact Jordan discs by an enclosing-square estimate, and the plane value is taken along an actual expanding-disc exhaustion. The polar contract now assigns every one of those steps to exact published or local inputs; it no longer treats a slit-sector family as an exhaustion of the plane.

- **B2-5 — applied.** Added Taylor Proposition 3.1.24 to the harvested range as `out-of-scope`. The reason distinguishes Taylor's compactly supported $R^\#$ truncation class from this page's locally bounded Riemann integrands and compact-domain exhaustion.

### Step-3 richness and closure update

Both decomposition and corollary passes were rerun separately for each pair. The area pair gained the design-required boundedness boundary but no new corollary; its determinant/height and polygon proof decompositions remain unchanged. The improper-integral pair gained the content-zero modification lemma as a focused decomposition of the polar proof; the corollary pass again found no separate consequence that was not a restatement. The A pages remain below the 60-item ceiling, so no split or pruning is proposed.

The two added ids were checked by fixed-string and semantic `rg` searches over `items/` and `research/plan-spec.json`; neither exists. The semantic search found the published rational-points counterexample, which is reused as a non-load-bearing Remark link, and no multidimensional Jordan-set modification lemma. The final manifest contains 42 items, of which 35 are proof-bearing; the proof-contract file has exactly those 35 ids and contracts. Its 54 published citation excerpts all match the named primary sections on disk. The dependency overlay has 67 distinct published external targets over 107 external edges, with no missing, draft, legacy-unclassified, AI-generated-statement, B-page, or local-order target. There is no load-bearing forward reference, external fallback, published-dependency repair, or current-run cross-batch dependency.

### Step-3 gate record

- `source-fetch-check --stamp`: 7/7 recorded sources fetch-verified, with no new stamp required.
- `coverage-checklist`: 2 pages, 84 harvested results, 0 errors, and the expected `coverage-low-yield` warning for the mature area prerequisites.
- `content-policy --manifest-only`: 42 scoped items, 0 errors, 0 warnings.
- `splice-plan --run frontier-16 --batch 2 --dry-run`: the four owned pages and 42 items form an accepted dry-run splice; no plan file was written.
- `validate-plan research/plan-spec.json`: exit 0 and reports the declared page order acyclic and consistent. The batch pages still have empty item lists in `plan-spec.json`, so this is the required current-plan gate, not an authoritative validation of the unspliced Batch 2 edges.
- `prosecheck --warnings`: 4 files checked, 0 errors, and 13 count heuristics confined to source/result names and this required recountable report; no positional claim contradicts the spec.
- Batch JSON parsing, contract-scope parity, all eight boundary dispositions, citation-to-dependency declarations, published status/provenance, and exact published citation excerpts: clean.
