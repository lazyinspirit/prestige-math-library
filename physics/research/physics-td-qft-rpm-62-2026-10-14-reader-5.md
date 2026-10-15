# Step 3a reader report — batch 5

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `5`

## Inventory reviewed

Assigned pages:

- [Local Pfaff Geometry](../library/thermodynamics-mathematics/td-math-local-pfaff-geometry.md)
- [Local Pfaff Geometry — Examples](../library/thermodynamics-mathematics/td-math-local-pfaff-geometry-examples.md)

Assigned items (all ten manifest entries):

- `def-tdmath-one-form-and-horizontal-path`
- `lem-tdmath-local-contraction-flow`
- `lem-tdmath-variational-flow-and-commutation`
- `lem-tdmath-exact-multiple-implies-pfaff-integrability`
- `thm-tdmath-codimension-one-frobenius`
- `lem-tdmath-integrable-horizontal-orbits-have-empty-interior`
- `thm-tdmath-local-caratheodory-inaccessibility`
- `ex-tdmath-two-dimensional-pfaff-factor`
- `cex-tdmath-contact-form-is-not-locally-integrable`
- `cex-tdmath-closed-punctured-plane-form-is-not-exact`

Other item dependencies opened:

- Calculus, flows, and completeness: `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-mean-value-inequality-for-total-derivatives`, `thm-continuous-implies-integrable`, `thm-newton-leibniz-with-interior-derivative`, `thm-euclidean-space-complete`, `thm-chain-rule-for-total-derivatives`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, and `thm-banach-fixed-point`.
- Topology and countability: `cor-mean-value-theorem`, `thm-connected-subsets-of-r-are-intervals`, `thm-rationals-countable`, `lem-q-and-irrationals-dense-r`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-compact-subset-is-closed-and-bounded`, `thm-recursion`, and `thm-well-ordering-principle`.
- Line-integral context: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `lem-line-integrals-are-independent-of-the-piecewise-c1-partition`, `def-piecewise-c1-path-operations-and-oriented-reparametrizations`, and `thm-gradient-theorem-for-line-integrals`.
- Current batch-4 supplier context: `thm-tdmath-local-implicit-rank`, `def-c-one-map-and-local-inverse`, `def-invertible-euclidean-linear-map`, `def-metric-topology`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `thm-euclidean-implicit-function-theorem`, and `thm-euclidean-inverse-function-theorem`.
- Euclidean-completeness definitions checked: `def-cauchy-in-metric`, `def-real-limit`, and `thm-cauchy-criterion-via-lub`.
- Additional published calculus context opened while checking the local computations: `thm-algebra-of-derivatives`, `thm-derivative-of-exponential`, `thm-product-rule`, and `thm-complex-exponential-is-entire-with-derivative-itself`. The final repairs establish the required calculations locally and add no dependency edges.

Prerequisite pages opened:

- `line-integrals-and-the-gradient-theorem`
- `the-fundamental-theorems-of-calculus`
- `the-riemann-integral`
- `topology-of-r`
- `td-math-nonsmooth-equilibrium`
- `td-math-ordered-composition`

## Source checks

- Ko Honda, *Differential Geometry Course Notes*, §33, Theorem 33.1 and Proposition 33.3, pp. 68–70. Proposition 33.3 states the differential-form criterion for an integrable distribution and derives it from the bracket identity. Honda leaves the general Frobenius proof as an exercise, so I did not treat that as a complete proof of the assigned local theorem. [Source](https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf)
- Pavel Etingof, *18.745 Lie Groups and Lie Algebras I*, §8.3, Theorem 8.10 and proof, PDF pp. 47–48. The theorem gives the involutivity criterion; the proof supplies a local induction argument. The assigned Pfaff and orbit arguments were checked from their own stated hypotheses. [Source](https://math.mit.edu/~etingof/lnlg.pdf)
- J. Lebl, *Basic Analysis II*, §9.3, Proposition 9.3.3 and Example 9.3.7. The example gives the punctured-plane angular form, equality of its cross partials, and the nonzero unit-circle period; the assigned counterexample independently computes these. [Source](https://www.jirka.org/ra/html/sec_pathind.html)

## Repairs

- `lem-tdmath-integrable-horizontal-orbits-have-empty-interior`: Step 4.1 previously required only the open ball to avoid `K_j`, while the constructed limit was known only to lie in the closed ball. I changed the recursion to require each closed ball to lie in the parent ball and avoid `K_j`; the limit is therefore outside every assigned closed nowhere-dense set. I also made the finite word/box and rational-ball enumerations explicit by finite index levels. This closes the needed countability and nested-ball arguments without a choice assumption.
- `lem-tdmath-exact-multiple-implies-pfaff-integrability`: Step 3.1 now derives the reciprocal and product differentiation identities from total-derivative increments before using the coordinate formula for `dω`. The mixed-partial cancellation is supplied by Step 2.1.
- `ex-tdmath-two-dimensional-pfaff-factor`: I replaced the exponential witness, whose derivative rules were not among the declared prerequisites, with a polynomial witness on the open half-plane `x > -1`. Step 1.1 expands its increment and controls the remainder to verify `dS = μω`, regularity, and nonvanishing directly. Step 2.1 states the chain-rule identity for horizontal tangents on smooth-piece interiors without inferring constancy without a mean-value premise. The item-reference search found no consumer beyond its B-page placement, whose unchanged summary remains accurate.
- `cex-tdmath-closed-punctured-plane-form-is-not-exact`: Steps 1.1 and 2.1 now establish nonvanishing and `C¹` regularity with the exact domain conditions, and give the four first-partial difference quotients explicitly before concluding `dω = 0`.

I updated the four corresponding entries in `research/physics-td-qft-rpm-62-2026-10-14-batch-5.proof-contracts.json`. None of the four edited carriers had a `verification.judge` record to remove. No page prose, other batch, plan specification, or published supplier was edited.

## Validation

- Reflow and precheck passed for all four changed item paths. Each final reflow reported the item unchanged; each precheck passed.
- Strict proof-contract validation passed for all four changed items: zero errors and zero warnings.
- Proof-layout passed for the four changed items: 13 numbered steps, zero defects. The default renderer invocation first failed because the application checkout could not resolve `@/components`; rerunning the same batched check with the existing `/private/tmp/physics-proof-layout-app/resolve-alias.mjs` runtime resolver passed. No application checkout files were changed.

## Page verdicts and remaining holds

- `td-math-local-pfaff-geometry` (A page): the assigned definitions and local arguments are mathematically sound after the orbit-lemma repair. The Frobenius theorem, orbit lemma, and local Carathéodory theorem use the current batch-4 `thm-tdmath-local-implicit-rank` carrier. I inspected that carrier and its exact minor hypothesis matches these uses, but the supplier remains a draft and has no independent acceptance recorded; these conclusions remain conditional on its owner review. Its raw source SHA-256, rechecked before handoff, is `3c8fb9f73c75bc60b26ab99efc1f05c27e255c3e3791fc5e9c0fb91b326ab8ef`. The page-level prerequisite closure through `td-math-nonsmooth-equilibrium` and `td-math-ordered-composition` is also still open in the current run evidence. I found no confirmed mathematical defect in the current batch-4 supplier bytes and did not edit it.
- `td-math-local-pfaff-geometry-examples` (B page): all three examples/counterexamples are mathematically supported after the local calculation repairs. The contact-form example only rules out local exact multiples when the Pfaff obstruction is nonzero; the punctured-plane example rules out a global potential for the displayed closed form and does not rule out every possible global integrating factor. No B-page prose was edited.

The category directory `library/thermodynamics-mathematics` still has no `_category.md`; this structural input is outside the assigned edit scope. No confirmed content defect remains unedited in batch 5.

## Coverage note

I read both assigned pages, all ten assigned items, all direct item dependencies in the manifest, the cited prerequisite pages listed above, and the relevant full source sections. I did not independently re-audit every transitive proof in the published mathematical suppliers' full dependency closures; the report records the exact supplier statements and proof uses inspected for this batch. The rank supplier and page-level prerequisites remain draft workflow holds, not accepted premises.
