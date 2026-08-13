# `subjects-01` — measure-theory lane: disk-verified inventory of the published library

**Scope of this document.** A pure repo read of
`/Users/ianx/Projects/prestige-math-library` at working-tree state of
2026-08-13. Every claim below is checkable from a named path. No web research
was done. Nothing was written outside this file.

**Method.** All 4172 files in `items/` and all 253 page files under `library/`
were parsed for frontmatter (`id`, `kind`, `title`, `status`,
`provenance.statement` / `provenance.proof`, `proved_here`, `deps`) and for
their `## Definition` / `## Statement` sections; page order came from
`research/plan-spec.json`. Item→page homing is by the `items:` / `examples:`
lists in the page files.

---

## Part 0 — the eight findings that most change the scaffold

1. **The cut is order 288, and neither Stone–Weierstrass page is authored.**
   `stone-weierstrass-general` (order 287) and
   `stone-weierstrass-general-examples` (order 288) are *planned only* — their
   `items` array in `research/plan-spec.json` is empty and no file exists under
   `library/`. So does `ascoli-arzela` / `-examples` (285/286) and
   `complete-metrizability-and-baire` / `-examples` (277/278). **236 authored
   pages carrying 3866 items sit at or below the cut.** A general
   Stone–Weierstrass is therefore *not* citable; the metric-space version
   `thm-real-stone-weierstrass-for-compact-metric-spaces` (order 171) is.

2. **`research/plan-spec.json`'s "empty `items` ⇒ not authored" heuristic fails
   for orders 1–8.** Eight pages — the five `deferred-*` / open-problems
   catalogues and `construction-of-the-natural-numbers`,
   `construction-of-r-via-cauchy-sequences`,
   `construction-of-r-via-dedekind-cuts` — have empty `items` in the plan but
   real, populated, `status: published` page files under `library/`. I used the
   page files as truth. This matters directly: **order 1,
   `library/not-proved-here/deferred-measure-and-integration.md`, is published
   and holds 29 `proved_here: false` remark items whose ids are exactly the
   ones a measure-theory level wants.**

3. **The confirmation you asked for: the measure-theoretic vocabulary is
   genuinely absent, and the one outer-measure item is
   `rem-lebesgue-measure-and-integral`.** Across all 4172 items, "σ-algebra"
   appears in **4** items, all four on `deferred-measure-and-integration`
   (`rem-lebesgue-measure-and-integral`, `rem-fubini-tonelli`,
   `rem-fubini-counting-measure-diagonal`, `rem-lp-separability`), and in **no
   definition**. "Countably additive" appears in 5 items, none a definition.
   "Outer measure" appears in 10 items; of those, exactly **one** actually
   *defines* Lebesgue outer measure —
   `items/rem-lebesgue-measure-and-integral.md`, `proved_here: false` — and the
   other nine merely use the phrase in passing (`def-measure-zero-and-content-zero`
   says the notion is "$\lambda^{*}(E)=0$ with no measurability theory
   attached"). There is **no** `simple function`, `algebra of sets`, `monotone
   class`, `π-system`, `λ-system`, `measurable space`, or `Borel σ-algebra`
   anywhere. **But the elementary layer is far richer than "zero":** see Part 2
   §1, §2, §3.

4. **The extended reals exist and deliberately leave $0\cdot\infty$ UNDEFINED.**
   `def-extended-reals` (order 122) builds $\overline{\mathbb{R}}$ with a total
   order, a total sup/inf (`lem-extended-reals-complete`), partial addition
   (with $(+\infty)+(-\infty)$ undefined) and partial multiplication, and it
   states in bold: *"every product with one factor $0$ and the other $\pm\infty$
   is left undefined"* and *"There is no subtraction, no division, no
   exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this
   library."* The measure-theory convention $0\cdot\infty=0$ is therefore **not
   available and must be minted**, as an explicit, separately-named convention
   — not by silently redefining `def-extended-reals`, which is published.

5. **The library has no "almost everywhere" definition item**, although it uses
   the phrase. `cor-ftc-integral-function-differentiable-almost-everywhere`
   (order 239) is the only id containing `almost-everywhere`, and
   `def-nowhere-dense-meager` explicitly says *"The phrase almost everywhere is
   avoided throughout this pair: it is a measure-theoretic term, and the only
   measure notion defined here is measure zero."* `almost-everywhere` is a
   **free id token**.

6. **No normed-space quotient, hence no ready-made $L^p$ construction site.**
   `def-norm-and-normed-space` (order 167) *does* exist and is fully general
   ("a norm on a real vector space"), with the induced metric. But page 76,
   despite its title `linear-maps-rank-nullity-and-quotient-spaces`, contains
   **no quotient-space item at all** (7 items: `def-linear-map`,
   `lem-linear-map-elementary-properties`, `def-kernel-and-image-of-a-linear-map`,
   `thm-linear-kernel-image-and-injectivity`,
   `lem-kernel-basis-extension-gives-image-basis`, `def-rank-and-nullity`,
   `thm-rank-nullity`). Quotients by a submodule/ideal/normal subgroup DO
   exist (`def-quotient-module`, `def-quotient-ring`, `def-quotient-group`),
   and the general quotient-set machinery is `def-equivalence-relation` +
   `thm-universal-property-of-the-quotient` (order 5.3). **A quotient vector
   space must be built before $L^p$.**

7. **The LCH block is strong but missing exactly the two things
   Riesz–Markov–Kakutani needs.** Present: `def-locally-compact-space`,
   `thm-locally-compact-hausdorff-basics` (incl. $x\in V\subseteq\overline V\subseteq O$
   with $\overline V$ compact), `def-one-point-compactification`,
   `thm-one-point-compactification-properties`,
   `thm-a-locally-compact-hausdorff-space-is-completely-regular`,
   `thm-urysohn-lemma` (normal spaces, under DC), `thm-tietze-extension-theorem`,
   `def-partition-of-unity-subordinate-to-a-cover`,
   `thm-subordinate-partitions-of-unity-exist`,
   `cor-compact-hausdorff-partitions-of-unity`, `thm-stone-metric-spaces-are-paracompact`,
   `cor-rn-is-locally-compact-and-sigma-compact`. **Absent: $C_c(X)$, $C_0(X)$,
   and the LCH Urysohn bump ($K \prec f \prec U$ with compact support).** The only
   "support" definitions are `def-support-and-compactly-supported-riemann-integral-in-rn`
   (order 237, for $\mathbb{R}^n$) and `\operatorname{supp}(\varphi_s)` inside
   `def-partition-of-unity-subordinate-to-a-cover`.

8. **The elementary FTC/BV/AC/Stieltjes track is essentially complete and the
   deferred remarks already write down what the measure track must prove.**
   `rem-ftc-absolutely-continuous`, `rem-absolutely-continuous-function`,
   `rem-lebesgue-measure-and-integral` each contain a "**What would prove it**"
   paragraph naming the exact route. These are published `proved_here: false`
   remarks and their ids are **taken** — a level that proves them will collide
   with `rem-monotone-convergence-theorem`, `rem-fatou-lemma`,
   `rem-dominated-convergence-theorem`, `rem-egorov-theorem`,
   `rem-lusin-theorem`, `rem-riesz-fischer`, `rem-fubini-tonelli`,
   `rem-vitali-non-measurable-set`, `rem-riesz-markov-kakutani`,
   `rem-banach-zarecki`, `rem-lebesgue-differentiation-theorem`,
   `rem-lebesgue-monotone-differentiation`, `rem-vitali-covering-theorem`,
   `rem-mini-vitali-covering-theorem`, `rem-holder-minkowski-integral`,
   `rem-lp-separability`, `rem-absolutely-continuous-function`,
   `rem-ftc-absolutely-continuous`, `rem-henstock-kurzweil-vs-lebesgue`,
   `rem-semicontinuous-not-ae-riemann`, `rem-null-set-not-discontinuity-set`,
   `rem-improper-riemann-not-lebesgue`, `rem-sierpinski-iterated-integrals`,
   `rem-fubini-counting-measure-diagonal`, `rem-banach-tarski`,
   `rem-du-bois-reymond-divergent-fourier`, `rem-kolmogorov-divergent-fourier`,
   `rem-sierpinski-ultrafilter-not-measurable`. Ids are immutable on `main`
   (SCHEMA §2) and published items are not retrofitted, so **what happens to
   the `deferred-measure-and-integration` page when the material stops being
   deferred is an owner decision, not mine — flag it early.**

---

## Part 1 — the order cut

### 1.1 Where the cut is

From `research/plan-spec.json`:

| page id | order | authored? |
|---|---|---|
| `stone-weierstrass-general` | **287** | **no** — `items: []` in the plan, no file under `library/` |
| `stone-weierstrass-general-examples` | **288** | **no** — same |

So my citable universe is **every authored page with `order` ≤ 288**. Also
unauthored inside the cut: `ascoli-arzela` (285), `ascoli-arzela-examples` (286),
`complete-metrizability-and-baire` (277/278), and a scattering of gaps
(17, 19, 58–59, 68–71, 88–91, 94–101, 106–111, 113, 139–150, 195–202, 205–206,
223–228, 244, 277–278, 285–288) whose plan rows carry no items.

### 1.2 The citable universe — 236 authored pages, 3866 items, order ≤ 288

| order | page id | title | items (A+B) | status |
|---|---|---|---|---|
| 1 | `deferred-measure-and-integration` | Measure and Integration: Recorded, Not Proved Here | 29 | published |
| 2 | `deferred-functional-analysis` | Functional Analysis: Recorded, Not Proved Here | 33 | draft |
| 3 | `deferred-set-theory-beyond-choice` | Set Theory Beyond Choice: Recorded, Not Proved Here | 22 | published |
| 4 | `deferred-algebraic-topology` | Algebraic Topology: Recorded, Not Proved Here | 17 | draft |
| 5 | `open-problems-and-research-frontier` | Open Problems and the Research Frontier | 13 | published |
| 5.1 | `the-zfc-axioms-and-basic-set-constructions` | The ZFC Axioms and the Basic Set Constructions | 39 | published |
| 5.2 | `the-zfc-axioms-and-basic-set-constructions-examples` | The ZFC Axioms and the Basic Set Constructions: Examples and Counterexamples | 10 | published |
| 5.3 | `relations-functions-and-quotients` | Relations, Functions, and Quotients | 39 | published |
| 5.4 | `relations-functions-and-quotients-examples` | Relations, Functions, and Quotients: Examples and Counterexamples | 10 | published |
| 6 | `construction-of-the-natural-numbers` | Construction of the Natural Numbers | 39 | published |
| 7 | `construction-of-r-via-cauchy-sequences` | Construction of the Real Numbers via Cauchy Sequences | 40 | published |
| 8 | `construction-of-r-via-dedekind-cuts` | Construction of the Real Numbers via Dedekind Cuts | 39 | published |
| 9 | `foundations-of-the-real-numbers` | Foundations of the Real Numbers for Analysis | 43 | published |
| 10 | `order-zorn-and-the-axiom-of-choice` | Order, Zorn's Lemma, and the Axiom of Choice | 21 | published |
| 11 | `order-zorn-and-the-axiom-of-choice-examples` | Order, Zorn's Lemma, and the Axiom of Choice: Examples and Counterexamples | 8 | published |
| 12 | `filters-and-ultrafilters` | Filters and Ultrafilters | 12 | published |
| 13 | `filters-and-ultrafilters-examples` | Filters and Ultrafilters: Examples and Counterexamples | 8 | published |
| 14 | `suprema-and-infima` | Suprema and Infima | 17 | published |
| 15 | `suprema-and-infima-examples` | Suprema and Infima: Examples and Counterexamples | 8 | published |
| 16 | `roots-and-rational-powers` | Roots, Rational Powers, and Classical Inequalities | 22 | published |
| 18 | `countability-and-uncountability` | Countability and Uncountability | 21 | published |
| 20 | `finite-counting-and-binomial-coefficients` | Finite Counting, Factorials and Binomial Coefficients | 26 | published |
| 21 | `finite-counting-and-binomial-coefficients-examples` | Finite Counting, Factorials and Binomial Coefficients: Examples and Counterexamples | 14 | published |
| 22 | `inclusion-exclusion-and-the-pigeonhole-principle` | Inclusion–Exclusion, the Pigeonhole Principle and Double Counting | 21 | published |
| 23 | `inclusion-exclusion-and-the-pigeonhole-principle-examples` | Inclusion–Exclusion, the Pigeonhole Principle and Double Counting: Examples and Counterexamples | 10 | published |
| 24 | `monoids-groups-and-subgroups` | Binary Operations, Monoids, Groups and Subgroups | 27 | published |
| 25 | `monoids-groups-and-subgroups-examples` | Monoids, Groups and Subgroups: Examples and Counterexamples | 11 | published |
| 26 | `divisibility-gcd-and-bezout` | Divisibility, Greatest Common Divisors and Bézout's Identity | 26 | published |
| 27 | `divisibility-gcd-and-bezout-examples` | Divisibility and Greatest Common Divisors: Examples and Counterexamples | 9 | published |
| 28 | `primes-and-the-fundamental-theorem-of-arithmetic` | Primes, Euclid's Lemma and the Fundamental Theorem of Arithmetic | 18 | published |
| 29 | `primes-and-the-fundamental-theorem-of-arithmetic-examples` | Primes and Factorisation: Examples and Counterexamples | 9 | published |
| 30 | `congruences-and-the-chinese-remainder-theorem` | Congruences, the Integers Modulo n and the Chinese Remainder Theorem | 23 | published |
| 31 | `congruences-and-the-chinese-remainder-theorem-examples` | Congruences and Modular Arithmetic: Examples and Counterexamples | 10 | published |
| 32 | `cosets-and-lagranges-theorem` | Cosets, Index and Lagrange's Theorem | 15 | published |
| 33 | `cosets-and-lagranges-theorem-examples` | Cosets and Lagrange's Theorem: Examples and Counterexamples | 8 | published |
| 34 | `normal-subgroups-and-quotient-groups` | Normal Subgroups and Quotient Groups | 18 | published |
| 35 | `normal-subgroups-and-quotient-groups-examples` | Normal Subgroups and Quotient Groups: Examples and Counterexamples | 5 | published |
| 36 | `group-homomorphisms-and-the-isomorphism-theorems` | Group Homomorphisms and the Isomorphism Theorems | 20 | published |
| 37 | `group-homomorphisms-and-the-isomorphism-theorems-examples` | Group Homomorphisms and the Isomorphism Theorems: Examples and Counterexamples | 5 | published |
| 38 | `cyclic-groups-and-direct-products` | Cyclic Groups and Direct Products | 6 | published |
| 39 | `cyclic-groups-and-direct-products-examples` | Cyclic Groups and Direct Products: Examples and Counterexamples | 2 | published |
| 40 | `the-structure-of-finite-abelian-groups` | The Fundamental Theorem of Finite Abelian Groups | 27 | published |
| 41 | `the-structure-of-finite-abelian-groups-examples` | Finite Abelian Groups: Examples and Counterexamples | 8 | published |
| 42 | `group-actions-and-cayleys-theorem` | Group Actions, Orbits, Stabilisers and Cayley's Theorem | 37 | published |
| 43 | `group-actions-and-cayleys-theorem-examples` | Group Actions: Examples and Counterexamples | 17 | published |
| 44 | `symmetric-groups-and-the-sign-homomorphism` | 'Symmetric Groups, Cycle Decomposition and the Sign Homomorphism' | 14 | published |
| 45 | `symmetric-groups-and-the-sign-homomorphism-examples` | 'Symmetric Groups and the Sign Homomorphism: Examples and Counterexamples' | 7 | published |
| 46 | `rings-subrings-and-integral-domains` | Rings, Subrings, Integral Domains and Fields | 28 | published |
| 47 | `rings-subrings-and-integral-domains-examples` | Rings, Domains and Fields: Examples and Counterexamples | 10 | published |
| 48 | `ideals-and-quotient-rings` | Ideals, Quotient Rings and the Isomorphism Theorems for Rings | 24 | published |
| 49 | `ideals-and-quotient-rings-examples` | Ideals and Quotient Rings: Examples and Counterexamples | 6 | published |
| 50 | `euclidean-domains-pids-and-unique-factorisation` | Divisibility, Euclidean Domains, Principal Ideal Domains and Unique Factorisation | 7 | published |
| 51 | `euclidean-domains-pids-and-unique-factorisation-examples` | Divisibility, Euclidean Domains, Principal Ideal Domains and Unique Factorisation: Examples and Counterexamples | 1 | published |
| 52 | `polynomial-rings-and-roots` | 'Polynomial Rings, the Division Algorithm and Roots' | 44 | published |
| 53 | `polynomial-rings-and-roots-examples` | 'Polynomial Rings and Roots: Examples and Counterexamples' | 14 | published |
| 53.2 | `the-field-of-fractions-and-localisation` | 'The Field of Fractions and Localisation' | 22 | published |
| 53.4 | `the-field-of-fractions-and-localisation-examples` | 'The Field of Fractions and Localisation: Examples' | 8 | published |
| 54 | `field-extensions-and-the-complex-numbers` | 'Simple Field Extensions and the Construction of the Complex Numbers' | 21 | published |
| 55 | `field-extensions-and-the-complex-numbers-examples` | Field Extensions and the Complex Numbers: Examples and Counterexamples | 7 | published |
| 56 | `splitting-fields` | 'Splitting Fields' | 18 | published |
| 57 | `splitting-fields-examples` | 'Splitting Fields: Examples' | 8 | published |
| 60 | `free-groups-and-presentations` | Free Groups and Presentations | 32 | published |
| 61 | `free-groups-and-presentations-examples` | Free Groups and Presentations: Examples and Counterexamples | 12 | published |
| 62 | `free-products-and-amalgamation` | Free Products and Amalgamation | 27 | published |
| 63 | `free-products-and-amalgamation-examples` | Free Products and Amalgamation — Examples | 8 | published |
| 64 | `conjugacy-and-simplicity-in-the-symmetric-groups` | 'Conjugacy in $S_n$, Generation, and the Simplicity of $A_n$' | 18 | published |
| 65 | `conjugacy-and-simplicity-in-the-symmetric-groups-examples` | 'Conjugacy in $S_n$, Generation, and the Simplicity of $A_n$ — Examples' | 8 | published |
| 66 | `composition-series-and-solvable-groups` | Composition Series, the Jordan–Hölder Theorem and Solvable Groups | 27 | published |
| 67 | `composition-series-and-solvable-groups-examples` | Composition Series, Solvability and Nilpotence: Examples and Counterexamples | 10 | published |
| 72 | `vector-spaces-and-subspaces` | Vector Spaces, Linear Subspaces, Span and Direct Sums | 17 | published |
| 73 | `vector-spaces-and-subspaces-examples` | Vector Spaces and Linear Subspaces: Examples and Counterexamples | 8 | published |
| 74 | `linear-independence-bases-and-dimension` | Linear Independence, Bases and Dimension | 20 | published |
| 75 | `linear-independence-bases-and-dimension-examples` | Bases and Dimension: Examples and Counterexamples | 8 | published |
| 76 | `linear-maps-rank-nullity-and-quotient-spaces` | Linear Transformations, Rank-Nullity and Quotient Spaces | 7 | published |
| 77 | `linear-maps-rank-nullity-and-quotient-spaces-examples` | Linear Transformations, Rank-Nullity and Quotient Spaces: Examples and Counterexamples | 1 | published |
| 78 | `matrices-and-the-matrix-of-a-linear-map` | 'Matrices, the Matrix of a Linear Map, and Change of Basis' | 32 | published |
| 79 | `matrices-and-the-matrix-of-a-linear-map-examples` | 'Matrices and Change of Basis: Examples and Counterexamples' | 7 | published |
| 80 | `gaussian-elimination-and-row-reduction` | Gaussian Elimination, Elementary Matrices and Reduced Row Echelon Form | 29 | published |
| 81 | `gaussian-elimination-and-row-reduction-examples` | Gaussian Elimination and Row Reduction: Examples and Counterexamples | 9 | published |
| 82 | `determinants-of-matrices-over-a-commutative-ring` | Determinants of Matrices over a Commutative Ring | 24 | published |
| 83 | `determinants-of-matrices-over-a-commutative-ring-examples` | Determinants over a Ring: Examples and Counterexamples | 7 | published |
| 84 | `the-determinant-of-a-linear-operator` | The Determinant of a Linear Operator, Cofactors and Cramer's Rule | 20 | published |
| 85 | `the-determinant-of-a-linear-operator-examples` | The Determinant of an Operator: Examples and Counterexamples | 8 | published |
| 86 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 'Eigenvalues, Eigenvectors and the Characteristic Polynomial' | 23 | published |
| 87 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples` | 'Eigenvalues and the Characteristic Polynomial: Examples and Counterexamples' | 7 | published |
| 92 | `dual-spaces-bilinear-forms-and-inertia` | 'Dual Spaces, Bilinear and Quadratic Forms, and Sylvester''s Law of Inertia' | 33 | published |
| 93 | `dual-spaces-bilinear-forms-and-inertia-examples` | 'Dual Spaces and Bilinear Forms: Examples and Counterexamples' | 12 | published |
| 102 | `modules-and-module-homomorphisms` | Modules, Submodules, Quotient Modules and the Isomorphism Theorems | 14 | published |
| 103 | `modules-and-module-homomorphisms-examples` | Modules, Submodules, Quotient Modules and the Isomorphism Theorems: Examples and Counterexamples | 2 | published |
| 104 | `free-modules-and-exact-sequences` | Free Modules, Exact Sequences, Projective and Injective Modules | 29 | published |
| 105 | `free-modules-and-exact-sequences-examples` | Free Modules and Exact Sequences: Examples and Counterexamples | 10 | published |
| 112 | `sequences-and-limits` | Sequences and Limits | 18 | published |
| 114 | `monotone-sequences-and-cauchy-completeness` | Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness | 20 | published |
| 115 | `monotone-sequences-and-cauchy-completeness-examples` | Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness: Examples and Counterexamples | 11 | published |
| 116 | `metric-spaces` | Metric Spaces | 28 | published |
| 117 | `metric-spaces-examples` | Metric Spaces: Examples and Counterexamples | 12 | published |
| 118 | `completeness-and-uniform-continuity` | Completeness, Completion, and Uniform Continuity | 24 | published |
| 119 | `completeness-and-uniform-continuity-examples` | Completeness, Completion, and Uniform Continuity: Examples and Counterexamples | 12 | published |
| 120 | `compactness-in-metric-spaces` | Compactness in Metric Spaces | 26 | published |
| 121 | `compactness-in-metric-spaces-examples` | Compactness in Metric Spaces: Examples and Counterexamples | 11 | published |
| 122 | `limsup-and-subsequential-limits` | limsup, liminf, and Subsequential Limits | 23 | published |
| 123 | `limsup-and-subsequential-limits-examples` | limsup, liminf, and Subsequential Limits: Examples and Counterexamples | 9 | published |
| 124 | `formal-laurent-series-field` | The Formal Laurent Series Field $\mathbb{R}((t^{-1}))$: Cauchy Complete, Non-Archimedean, Not Complete | 11 | published |
| 125 | `equivalent-forms-of-completeness` | Equivalent Forms of Completeness | 21 | published |
| 126 | `equivalent-forms-of-completeness-examples` | Equivalent Forms of Completeness: Examples and Counterexamples | 10 | published |
| 127 | `series-and-nonnegative-tests` | Series: Convergence and the Nonnegative Tests | 25 | published |
| 128 | `series-and-nonnegative-tests-examples` | Series: Convergence and the Nonnegative Tests: Examples and Counterexamples | 12 | published |
| 129 | `absolute-convergence-and-rearrangement` | Absolute and Conditional Convergence; Rearrangement; Products | 26 | published |
| 130 | `absolute-convergence-and-rearrangement-examples` | Absolute and Conditional Convergence; Rearrangement; Products: Examples and Counterexamples | 14 | published |
| 131 | `topology-of-r` | Topology of $\mathbb{R}$ | 22 | published |
| 132 | `topology-of-r-examples` | Topology of $\mathbb{R}$: Examples and Counterexamples | 11 | published |
| 133 | `cantor-set-baire-and-measure-zero` | The Cantor Set, Baire Category, and Measure Zero in $\mathbb{R}$ | 24 | published |
| 134 | `cantor-set-baire-and-measure-zero-examples` | The Cantor Set, Baire Category, and Measure Zero in $\mathbb{R}$: Examples and Counterexamples | 12 | published |
| 135 | `limits-of-real-functions` | Limits of Real Functions | 21 | published |
| 136 | `limits-of-real-functions-examples` | Limits of Real Functions: Examples and Counterexamples | 12 | published |
| 137 | `continuity-ivt-evt-and-uniform-continuity` | Continuity, IVT, EVT, and Uniform Continuity | 21 | published |
| 138 | `continuity-ivt-evt-and-uniform-continuity-examples` | Continuity, IVT, EVT, and Uniform Continuity: Examples and Counterexamples | 10 | published |
| 151 | `monotone-functions-and-discontinuities` | Monotone Functions, Discontinuities, and Continuity Sets | 32 | published |
| 152 | `monotone-functions-and-discontinuities-examples` | Monotone Functions, Discontinuities, and Continuity Sets: Examples and Counterexamples | 11 | published |
| 153 | `the-derivative-and-mean-value-theorems` | The Derivative and the Mean Value Theorems | 19 | published |
| 154 | `the-derivative-and-mean-value-theorems-examples` | The Derivative and the Mean Value Theorems: Examples and Counterexamples | 10 | published |
| 155 | `darboux-lhopital-and-taylor` | Darboux, L'Hôpital, and Taylor's Theorem | 20 | published |
| 156 | `darboux-lhopital-and-taylor-examples` | Darboux, L'Hôpital, and Taylor's Theorem: Examples and Counterexamples | 8 | published |
| 157 | `convexity` | Convexity | 19 | published |
| 158 | `convexity-examples` | Convexity: Examples and Counterexamples | 4 | published |
| 159 | `the-riemann-integral` | The Riemann Integral: Definition and Integrability | 18 | published |
| 160 | `the-riemann-integral-examples` | The Riemann Integral: Definition and Integrability: Examples and Counterexamples | 10 | published |
| 161 | `properties-of-the-integral-and-the-working-ftc` | Properties of the Integral and the Working FTC | 20 | published |
| 162 | `properties-of-the-integral-and-the-working-ftc-examples` | Properties of the Integral and the Working FTC: Examples and Counterexamples | 13 | published |
| 163 | `bounded-variation-and-riemann-stieltjes` | Bounded Variation and the Riemann–Stieltjes Integral | 33 | published |
| 164 | `bounded-variation-and-riemann-stieltjes-examples` | Bounded Variation and the Riemann–Stieltjes Integral: Examples and Counterexamples | 12 | published |
| 165 | `improper-integrals` | Improper Integrals | 25 | published |
| 166 | `improper-integrals-examples` | Improper Integrals: Examples and Counterexamples | 12 | published |
| 167 | `rn-as-a-normed-space` | R^n as a Normed Space; Vector-Valued Functions | 22 | published |
| 168 | `rn-as-a-normed-space-examples` | R^n as a Normed Space; Vector-Valued Functions: Examples and Counterexamples | 12 | published |
| 169 | `uniform-convergence-of-functions` | Sequences and Series of Functions; Uniform Convergence | 19 | published |
| 170 | `uniform-convergence-of-functions-examples` | Sequences and Series of Functions; Uniform Convergence: Examples and Counterexamples | 8 | published |
| 171 | `approximation-and-compactness-in-ck` | Approximation and Compactness in $C(K)$ | 29 | published |
| 172 | `approximation-and-compactness-in-ck-examples` | Approximation and Compactness in $C(K)$: Examples and Counterexamples | 7 | published |
| 173 | `power-series-and-real-analytic-functions` | Power Series and Real-Analytic Functions | 30 | published |
| 174 | `power-series-and-real-analytic-functions-examples` | Power Series and Real-Analytic Functions — Examples | 8 | published |
| 175 | `the-exponential-function` | The Exponential Function | 19 | published |
| 176 | `the-exponential-function-examples` | The Exponential Function: Examples and Counterexamples | 6 | published |
| 177 | `the-logarithm-and-general-powers` | The Logarithm and General Powers | 25 | published |
| 178 | `the-logarithm-and-general-powers-examples` | The Logarithm and General Powers: Examples and Counterexamples | 6 | published |
| 178.1 | `the-integral-logarithm-and-its-characterisations` | The Integral Logarithm and the Equivalence of Its Characterisations | 19 | published |
| 178.2 | `the-integral-logarithm-and-its-characterisations-examples` | The Integral Logarithm and the Equivalence of Its Characterisations: Examples and Counterexamples | 5 | published |
| 179 | `sine-cosine-and-the-definition-of-pi` | Sine, Cosine, and the Definition of Pi | 16 | published |
| 180 | `sine-cosine-and-the-definition-of-pi-examples` | Sine, Cosine, and the Definition of Pi: Examples and Counterexamples | 5 | published |
| 181 | `arc-length-and-rectifiable-curves` | Arc Length and Rectifiable Curves | 15 | published |
| 182 | `arc-length-and-rectifiable-curves-examples` | Arc Length and Rectifiable Curves: Examples and Counterexamples | 8 | published |
| 183 | `pi-the-equivalent-characterizations` | pi: the Equivalent Characterizations | 14 | published |
| 184 | `pi-the-equivalent-characterizations-examples` | pi: the Equivalent Characterizations: Examples and Counterexamples | 7 | published |
| 185 | `fundamental-trigonometric-identities` | Fundamental Trigonometric Identities | 19 | published |
| 186 | `fundamental-trigonometric-identities-examples` | Fundamental Trigonometric Identities: Examples and Counterexamples | 6 | published |
| 187 | `further-trigonometric-identities-and-inverses` | Further Trigonometric Identities and Inverse Functions | 5 | published |
| 188 | `further-trigonometric-identities-and-inverses-examples` | Further Trigonometric Identities and Inverse Functions: Examples and Counterexamples | 3 | published |
| 189 | `the-complex-exponential-and-eulers-formula` | The Complex Exponential and Euler's Formula | 28 | published |
| 190 | `the-complex-exponential-and-eulers-formula-examples` | The Complex Exponential and Euler's Formula: Examples and Counterexamples | 8 | published |
| 191 | `chains-antichains-sperner-and-dilworth` | Chains, Antichains, Sperner and Dilworth | 32 | published |
| 192 | `chains-antichains-sperner-and-dilworth-examples` | Chains, Antichains, Sperner and Dilworth — Examples | 8 | published |
| 193 | `formal-power-series` | Formal Power Series | 22 | published |
| 194 | `formal-power-series-examples` | Formal Power Series: Examples and Counterexamples | 9 | published |
| 203 | `incidence-algebras-and-mobius-inversion` | Incidence Algebras and Möbius Inversion | 24 | published |
| 204 | `incidence-algebras-and-mobius-inversion-examples` | Incidence Algebras and Möbius Inversion — Examples | 8 | published |
| 207 | `graphs-walks-and-connectivity` | Graphs, Walks and Connectivity | 35 | published |
| 208 | `graphs-walks-and-connectivity-examples` | Graphs, Walks and Connectivity — Examples | 8 | published |
| 209 | `trees-forests-and-spanning-trees` | Trees, Forests and Spanning Trees | 27 | published |
| 210 | `trees-forests-and-spanning-trees-examples` | Trees, Forests and Spanning Trees — Examples | 12 | published |
| 211 | `eulerian-and-hamiltonian-graphs` | Eulerian and Hamiltonian Graphs | 22 | published |
| 212 | `eulerian-and-hamiltonian-graphs-examples` | Eulerian and Hamiltonian Graphs: Examples and Counterexamples | 9 | published |
| 213 | `matchings-covers-menger-and-network-flows` | Matchings, Covers, Menger and Network Flows | 25 | published |
| 214 | `matchings-covers-menger-and-network-flows-examples` | Matchings, Covers, Menger and Network Flows — Examples | 6 | published |
| 215 | `graph-colouring` | Graph Colouring | 4 | published |
| 216 | `graph-colouring-examples` | Graph Colouring — Examples | 2 | published |
| 217 | `ramsey-theory` | Ramsey Theory | 21 | published |
| 218 | `ramsey-theory-examples` | Ramsey Theory — Examples | 8 | published |
| 219 | `extremal-graph-theory` | Extremal Graph Theory | 20 | published |
| 220 | `extremal-graph-theory-examples` | Extremal Graph Theory: Examples and False Statements | 9 | published |
| 220.2 | `finite-probability-spaces-and-random-variables` | Finite Probability Spaces and Random Variables | 37 | published |
| 220.4 | `finite-probability-spaces-and-random-variables-examples` | Finite Probability Spaces and Random Variables — Examples and Counterexamples | 11 | published |
| 221 | `finite-probability-and-the-probabilistic-method` | Finite Probability and the Probabilistic Method | 28 | published |
| 222 | `finite-probability-and-the-probabilistic-method-examples` | Finite Probability and the Probabilistic Method — Examples and Counterexamples | 6 | published |
| 229 | `the-total-derivative` | The Total Derivative in $\mathbb{R}^m \to \mathbb{R}^n$ | 17 | published |
| 230 | `the-total-derivative-examples` | The Total Derivative: Examples and Counterexamples | 6 | published |
| 231 | `mixed-partials-taylor-and-extrema` | Mixed Partials, Taylor Formulae, and Extrema | 30 | published |
| 232 | `mixed-partials-taylor-and-extrema-examples` | Mixed Partials, Taylor Formulae, and Extrema: Examples and Counterexamples | 9 | published |
| 233 | `inverse-and-implicit-function-theorems` | The Inverse and Implicit Function Theorems | 5 | published |
| 234 | `inverse-and-implicit-function-theorems-examples` | The Inverse and Implicit Function Theorems: Examples and Counterexamples | 3 | published |
| 235 | `the-riemann-integral-in-rn-and-jordan-content` | The Riemann Integral in R^m and Jordan Content | 30 | published |
| 236 | `the-riemann-integral-in-rn-and-jordan-content-examples` | The Riemann Integral in R^m and Jordan Content: Examples and Counterexamples | 8 | published |
| 237 | `fubini-and-change-of-variables` | Fubini and Change of Variables | 25 | published |
| 238 | `fubini-and-change-of-variables-examples` | Fubini and Change of Variables: Examples and Counterexamples | 13 | published |
| 239 | `the-fundamental-theorems-of-calculus` | The Fundamental Theorems of Calculus | 10 | published |
| 240 | `the-fundamental-theorems-of-calculus-examples` | The Fundamental Theorems of Calculus: Examples and Counterexamples | 6 | published |
| 241 | `line-integrals-and-the-gradient-theorem` | Line Integrals and the Gradient Theorem | 31 | published |
| 242 | `line-integrals-and-the-gradient-theorem-examples` | Line Integrals and the Gradient Theorem: Examples and Counterexamples | 9 | published |
| 243 | `ordinals-and-transfinite-recursion` | Ordinals, Cardinals, and Transfinite Recursion | 23 | published |
| 245 | `ordinal-arithmetic` | Ordinal Arithmetic and the First Uncountable Ordinal | 28 | published |
| 246 | `ordinal-arithmetic-examples` | Ordinal Arithmetic and the First Uncountable Ordinal — Examples | 8 | published |
| 247 | `cardinal-arithmetic-and-cofinality` | Cardinal Arithmetic, Cofinality and the Alephs | 26 | published |
| 248 | `cardinal-arithmetic-and-cofinality-examples` | Cardinal Arithmetic, Cofinality and the Alephs — Examples | 8 | published |
| 249 | `topological-spaces-and-continuity` | Topological Spaces and Continuity | 26 | published |
| 250 | `topological-spaces-and-continuity-examples` | Topological Spaces and Continuity: Examples and Counterexamples | 14 | published |
| 251 | `subspaces-products-and-quotients` | Subspaces, Products, and Quotients | 24 | published |
| 252 | `subspaces-products-and-quotients-examples` | Subspaces, Products, and Quotients: Examples and Counterexamples | 13 | published |
| 253 | `connectedness` | Connectedness | 28 | published |
| 254 | `connectedness-examples` | Connectedness: Examples and Counterexamples | 8 | published |
| 255 | `compactness` | Compactness | 31 | published |
| 256 | `compactness-examples` | Compactness: Examples and Counterexamples | 8 | published |
| 257 | `the-topology-of-euclidean-space` | The Topology of Euclidean Space | 23 | published |
| 258 | `the-topology-of-euclidean-space-examples` | The Topology of Euclidean Space — Examples | 6 | published |
| 259 | `nets-and-filters` | Convergence: Nets and Filters | 28 | published |
| 260 | `nets-and-filters-examples` | Convergence: Nets and Filters: Examples and Counterexamples | 8 | published |
| 261 | `separation-axioms` | Separation Axioms: the Hierarchy | 28 | published |
| 262 | `separation-axioms-examples` | Separation Axioms: the Hierarchy: Examples and Counterexamples | 8 | published |
| 263 | `hausdorff-via-the-diagonal` | Hausdorff via the Diagonal | 13 | published |
| 264 | `hausdorff-via-the-diagonal-examples` | Hausdorff via the Diagonal: Examples and Counterexamples | 8 | published |
| 265 | `hereditary-and-productive-separation` | Hereditary and Productive Behaviour of the Separation Axioms | 24 | published |
| 266 | `hereditary-and-productive-separation-examples` | Hereditary and Productive Behaviour of the Separation Axioms: Examples and Counterexamples | 7 | published |
| 267 | `urysohn-lemma-and-tietze` | Urysohn's Lemma and the Tietze Extension Theorem | 13 | published |
| 268 | `urysohn-lemma-and-tietze-examples` | Urysohn's Lemma and the Tietze Extension Theorem: Examples and Counterexamples | 8 | published |
| 269 | `partitions-of-unity-and-paracompactness` | Partitions of Unity and Paracompactness | 25 | published |
| 270 | `partitions-of-unity-and-paracompactness-examples` | Partitions of Unity and Paracompactness: Examples and Counterexamples | 7 | published |
| 271 | `tychonoff-embedding-and-stone-cech` | The Tychonoff Embedding and the Stone–Čech Compactification | 12 | published |
| 272 | `tychonoff-embedding-and-stone-cech-examples` | The Tychonoff Embedding and the Stone–Čech Compactification: Examples and Counterexamples | 4 | published |
| 273 | `countability-axioms-and-cardinal-functions` | Countability Axioms and Cardinal Functions | 35 | published |
| 274 | `countability-axioms-and-cardinal-functions-examples` | Countability Axioms and Cardinal Functions: Examples and Counterexamples | 9 | published |
| 275 | `metrization-theorems` | Metrization: Urysohn, Nagata–Smirnov, Bing, Smirnov | 13 | published |
| 276 | `metrization-theorems-examples` | Metrization: Urysohn, Nagata–Smirnov, Bing, Smirnov: Examples and Counterexamples | 4 | published |
| 279 | `uniform-spaces` | Uniform Spaces: the Three Definitions | 54 | published |
| 280 | `uniform-spaces-examples` | Uniform Spaces: the Three Definitions: Examples and Counterexamples | 8 | published |
| 281 | `uniform-completeness-and-samuel-compactification` | Uniform Completeness, Completion, and the Samuel Compactification | 12 | published |
| 282 | `uniform-completeness-and-samuel-compactification-examples` | Uniform Completeness, Completion, and the Samuel Compactification: Examples and Counterexamples | 5 | published |
| 283 | `function-space-topologies` | Function Space Topologies and the Exponential Law | 24 | published |
| 284 | `function-space-topologies-examples` | Function Space Topologies and the Exponential Law: Examples and Counterexamples | 9 | published |


**TOTAL citable pages: 236; total items on them: 3866**

### 1.3 Out of reach — authored pages ABOVE the cut

These 16 pages are authored and published but sit after order 288 in reading
order, so I may not cite them.

| order | page id | title | items | status |
|---|---|---|---|---|
| 289 | `homotopy-and-homotopy-equivalence` | Homotopy and Homotopy Equivalence | 22 | published |
| 290 | `homotopy-and-homotopy-equivalence-examples` | Homotopy and Homotopy Equivalence — Examples | 7 | published |
| 291 | `the-fundamental-group` | The Fundamental Group | 6 | published |
| 292 | `the-fundamental-group-examples` | The Fundamental Group — Examples | 1 | published |
| 303 | `complex-differentiability-and-cauchy-riemann` | Complex Differentiability and the Cauchy–Riemann Equations | 28 | published |
| 304 | `complex-differentiability-and-cauchy-riemann-examples` | Complex Differentiability and the Cauchy–Riemann Equations: Examples and Counterexamples | 13 | published |
| 357 | `plane-graphs-euler-and-the-five-colour-theorem` | Plane Graphs, Euler's Formula and the Five Colour Theorem | 41 | published |
| 358 | `plane-graphs-euler-and-the-five-colour-theorem-examples` | Plane Graphs, Euler's Formula and the Five Colour Theorem — Examples | 7 | published |
| 359 | `categories-functors-and-natural-transformations` | Categories, Functors and Natural Transformations | 60 | published |
| 360 | `categories-functors-and-natural-transformations-examples` | Categories, Functors and Natural Transformations — Examples | 25 | published |
| 361 | `universal-properties-and-the-yoneda-lemma` | Universal Properties, Representables and the Yoneda Lemma | 21 | published |
| 362 | `universal-properties-and-the-yoneda-lemma-examples` | Universal Properties, Representables and the Yoneda Lemma — Examples | 14 | published |
| 363 | `limits-and-colimits` | Limits and Colimits | 46 | published |
| 364 | `limits-and-colimits-examples` | Limits and Colimits: Examples and Counterexamples | 17 | published |
| 393 | `induced-subgraphs-and-hereditary-graph-classes` | Induced Subgraphs and Hereditary Graph Classes | 23 | published |
| 394 | `induced-subgraphs-and-hereditary-graph-classes-examples` | Induced Subgraphs and Hereditary Graph Classes — Examples | 12 | published |

---

## Part 2 — targeted inventories

Format: `id | kind | title | status | provenance statement/proof | home page | order`.
Statements are quoted from the item's own `## Definition` / `## Statement`
section; where truncated I say so. All items below are `status: published`
unless marked otherwise.

### §1 — Measure zero, null sets, content zero, almost everywhere, Jordan content

**The whole elementary layer lives on two A/B pairs:**
`cantor-set-baire-and-measure-zero` / `-examples` (orders 133/134) for
$\mathbb{R}$, and `the-riemann-integral-in-rn-and-jordan-content` / `-examples`
(orders 235/236) for $\mathbb{R}^m$. **Do not re-mint any of it.**

#### 1a. The one-dimensional definition — closed intervals, countable covers

`def-measure-zero-and-content-zero` | definition | published | `ai-altered`/`not-applicable` | `cantor-set-baire-and-measure-zero` | order **133**
`items/def-measure-zero-and-content-zero.md`

> Throughout, $\mathbb{R}$ is the complete ordered field
> ([[def-complete-ordered-field]]), intervals and their lengths are as in
> [[def-interval]], and a *sequence* is a function on $\mathbb{N}$, which contains
> $0$. Let $A \subseteq \mathbb{R}$.
>
> - $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
>   $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
>   $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such
>   that
>   $$A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k] \qquad \text{and} \qquad \sum_{k=0}^{\infty} (b_k - a_k) \text{ converges with sum } \le \varepsilon .$$
> - $A$ has **content zero** when for every real $\varepsilon > 0$ there are
>   $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with
>   $$A \subseteq \bigcup_{j \le n} [a_j, b_j] \qquad \text{and} \qquad \sum_{j=0}^{n} (b_j - a_j) \le \varepsilon .$$

**Answers to your three questions, verbatim from the same item:**

- **Which intervals?** *Closed.* The item says: *"A bounded interval with
  endpoints $a \le b$ is contained in $[a,b]$ and has the same length, so a
  cover by intervals of any of the four bounded forms yields a cover by closed
  intervals with the same lengths. The definition is therefore stated with
  closed intervals once and for all. Covers by open intervals are a genuinely
  different demand, and passing to one costs a little extra length: the
  enlargement $[a_k,b_k] \subseteq (a_k - \delta_k,\ b_k + \delta_k)$ is carried
  out where it is needed, in [[lem-nondegenerate-interval-is-not-null]] and in
  [[thm-compact-null-is-content-zero]]."* — **Note the mismatch with
  `rem-lebesgue-measure-and-integral`, which defines $\lambda^{*}$ with OPEN
  intervals.** A measure level must reconcile the two explicitly.
- **Working form.** *"for a fixed $\varepsilon > 0$, $\sum_{k=0}^{\infty}(b_k - a_k)$
  converges with sum $\le \varepsilon$ $\iff$ $\sum_{k<n} (b_k - a_k) \le \varepsilon$
  for every $n \in \mathbb{N}$"* — so only bounded partial sums are ever checked.
- **Downward closure and content⇒null are stated inside the definition**, with
  content⇒null also recorded separately as `lem-content-zero-implies-null`
  *"because it is cited on its own."*

#### 1b. Everything else already proved about null sets in $\mathbb{R}$

| id | kind | prov (stmt/proof) | order | statement (quoted or smallest faithful shortening) |
|---|---|---|---|---|
| `lem-content-zero-implies-null` | lemma | ai-altered / ai-generated | 133 | "If $A \subseteq \mathbb{R}$ has content zero then $A$ has measure zero." |
| `lem-countable-sets-are-null` | lemma | literature-derived / ai-altered | 133 | "Every at most countable set $A \subseteq \mathbb{R}$ has measure zero." Item adds: **"No choice principle is used"** — a listing is one object and the cover is a formula in $k$. |
| `lem-nondegenerate-interval-is-not-null` | lemma | literature-derived / ai-altered | 133 | If $[a,b]\subseteq\bigcup_k[a_k,b_k]$ and $\sum_{k<n}(b_k-a_k)\le M$ for all $n$, then $M\ge b-a$; consequently for $a<b$ **no subset of $\mathbb{R}$ containing $[a,b]$ has measure zero**. |
| `lem-finite-interval-cover-total-length` | lemma | literature-derived / ai-altered | 133 | "If finitely many intervals cover a closed bounded interval $[a,b]$, the sum of their lengths is at least $b-a$." |
| `thm-countable-union-of-null-is-null` | theorem | literature-derived / ai-altered | 133 | "**Assume the Axiom of Countable Choice**. Let $(A_n)_{n\in\mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each of measure zero. Then $\bigcup_n A_n$ has measure zero." The item names the cost: *"$\mathrm{AC}_\omega$ is spent at exactly one step, step 2.1 below, where one covering sequence is selected for every $A_n$ at once."* |
| `thm-compact-null-is-content-zero` | theorem | ai-altered / ai-altered | 133 | "Let $K\subseteq\mathbb{R}$ be compact. Then $K$ has measure zero $\iff$ $K$ has content zero." |
| `fs-null-implies-content-zero` | false-statement | ai-altered / ai-generated | 133 | FALSE: every set of measure zero has content zero. |
| `fs-measure-zero-implies-nowhere-dense` | false-statement | ai-altered / ai-generated | 133 | FALSE. |
| `fs-nowhere-dense-implies-measure-zero` | false-statement | ai-altered / ai-generated | 133 | FALSE. |
| `cex-dense-set-of-measure-zero` | counterexample | literature-derived / ai-generated | 134 | $\mathbb{Q}$ is dense in $\mathbb{R}$ and has measure zero. |
| `cex-null-set-not-of-content-zero` | counterexample | ai-altered / ai-generated | 134 | $\mathbb{Q}\cap[0,1]$ has measure zero and not content zero, although bounded. |
| `cex-nowhere-dense-with-positive-measure` | counterexample | literature-derived / ai-generated | 134 | The Smith–Volterra–Cantor set is nowhere dense and does not have measure zero. |
| `cex-meager-set-of-full-measure` | counterexample | ai-altered / ai-altered | 134 | $\mathbb{R}$ is the union of a meager set and a set of measure zero. |
| `ex-q-covered-by-intervals-of-small-total-length` | example | ai-altered / ai-altered | 134 | $\mathbb{Q}$ is covered by open intervals of total length $\varepsilon$, for every $\varepsilon>0$. |
| `ex-fat-cantor-measure-computed` | example | ai-altered / ai-altered | 134 | The removed intervals of the SVC set have total length $1/2$. |

Companion category machinery on the same page: `def-nowhere-dense-meager`
(nowhere dense / meager / residual / second category, for subsets of
$\mathbb{R}$ only), `def-f-sigma-g-delta`, `thm-baire-category-r`,
`cor-q-is-meager-and-not-g-delta`, `rem-baire-in-r-is-choice-free`.

#### 1c. Null and content zero in $\mathbb{R}^m$, and Jordan content

| id | kind | prov | order | statement |
|---|---|---|---|---|
| `def-null-and-content-zero-in-rn` | definition | ai-altered / n-a | 235 | "Fix $m\ge1$. A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$. It has **content zero** when such a cover can be finite." Closing sentence: *"This terminology defines only cover-nullity; it does not define a measure on arbitrary sets."* |
| `cor-one-dimensional-null-and-content-zero-agree` | corollary | ai-altered / ai-generated | 235 | At $m=1$ cube-nullity and cube-content-zero are exactly the published interval-cover notions. |
| `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions` | lemma | ai-altered / ai-altered | 235 | "Every subset of a null subset of $\mathbb R^m$ is null. Assuming countable choice, every countable union of null subsets of $\mathbb R^m$ is null." |
| `lem-compact-null-iff-content-zero-in-rn` | lemma | ai-altered / ai-altered | 235 | For compact subsets of $\mathbb{R}^m$, measure zero and content zero coincide. |
| `thm-lipschitz-images-of-null-sets-in-rn-are-null` | theorem | ai-altered / ai-altered | 235 | "If $T:\mathbb R^m\to\mathbb R^m$ is Lipschitz and $E$ is null, then $T[E]$ is null." |
| `thm-graphs-of-continuous-functions-have-content-zero` | theorem | ai-altered / ai-altered | 235 | The graph of a continuous function on a closed nondegenerate rectangle in $\mathbb{R}^m$ has content zero in $\mathbb{R}^{m+1}$. |
| `def-jordan-inner-and-outer-content` | definition | ai-altered / n-a | 235 | "For bounded $E\subseteq\mathbb R^m$ … its **Jordan outer content** is the infimum of $\sum_{r<q}\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint. … The set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**." |
| `thm-jordan-content-and-indicator-integrability` | theorem | ai-altered / ai-altered | 235 | A bounded set is Jordan measurable iff its indicator is Riemann integrable, and the integral is its Jordan content. |
| `thm-jordan-boundary-criterion` | theorem | ai-altered / ai-altered | 235 | "A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only if its boundary $\partial E$ is null, equivalently has content zero." |
| `cor-jordan-content-finite-additivity` | corollary | ai-altered / ai-altered | 235 | Jordan content is finitely additive when the overlap has content zero. |
| `def-riemann-integral-over-a-jordan-set` | definition | ai-altered / n-a | 235 | The Riemann integral of a bounded function over a bounded Jordan measurable set. |
| `lem-jordan-set-integral-well-defined` | lemma | ai-altered / ai-generated | 235 | Independence of the bounding rectangle. |
| `thm-continuous-functions-on-compact-jordan-sets-are-integrable` | theorem | ai-altered / ai-altered | 235 | — |
| `lem-product-lower-bound-for-jordan-content` | lemma | ai-altered / ai-generated | 235 | — |
| `def-oscillation-in-rn` / `lem-oscillation-characterisation-in-rn` | definition/lemma | ai-altered | 235 | Oscillation on subsets of $\mathbb{R}^m$; continuity iff oscillation $0$; superlevel sets closed. |
| `cex-compact-set-without-jordan-content` | counterexample | ai-altered / ai-generated | 236 | The SVC slab $S\times[0,1]$ is compact and not Jordan measurable. |
| `cex-rational-points-in-unit-square-have-no-jordan-content` | counterexample | ai-altered / ai-generated | 236 | — |
| `ex-cantor-slab-has-content-zero`, `ex-parabola-graph-has-content-zero`, `ex-triangle-has-jordan-content-one-half` | examples | — | 236 | — |

`rem-jordan-rectifiable-terminology` (order 236) and
`rem-multidimensional-riemann-conventions-and-scope` (order 235) carry the
conventions and the explicit "no Lebesgue measure here" scope note.

#### 1d. "Almost everywhere" — NOT defined anywhere

- The only id containing `almost-everywhere` is
  `cor-ftc-integral-function-differentiable-almost-everywhere` (order 239),
  which phrases the notion inline rather than citing a definition.
- `def-nowhere-dense-meager` (order 133) states, in the item body: *"(The phrase
  **almost everywhere** is avoided throughout this pair: it is a
  measure-theoretic term, and the only measure notion defined here is measure
  zero.)"*
- `rem-lebesgue-measure-and-integral` says the elementary $\lambda^*(E)=0$
  notion *"is in scope, and so is 'almost everywhere' in that sense"* — i.e. it
  is licensed but never actually defined.
- **`almost-everywhere` is a free id token.** Minting
  `def-almost-everywhere` is available and, given the existing corpus, needed.

Other a.e.-flavoured published items:
`rem-cantor-function-increases-only-on-a-null-set` (151),
`cex-ae-zero-derivative-does-not-determine-endpoint-change` (240),
`cor-ftc-integral-function-differentiable-almost-everywhere` (239, "Assuming
Countable Choice, the integral function of a Riemann-integrable function is
Lipschitz and differentiable almost everywhere, with derivative equal to the
integrand there").

---

### §2 — Lebesgue's criterion for Riemann integrability

Two items, one per dimension.

**`thm-lebesgue-criterion`** | theorem | published | `literature-derived`/`ai-altered` | `the-riemann-integral` | order **159** — `items/thm-lebesgue-criterion.md`

> Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded and let
> $$D := \{\, x \in [a,b] \ : \ f \text{ is discontinuous at } x \,\}.$$
> Then
> $$f \text{ is Riemann integrable on } [a,b] \quad \Longleftrightarrow \quad D \text{ has measure zero}.$$
>
> **The choice cost, named.** The implication from integrability to $D$ being null
> uses the Axiom of Countable Choice exactly once, through
> [[thm-countable-union-of-null-is-null]] at step 7.1 … The converse implication,
> from $D$ null to integrability, is a theorem of ZF: it uses no choice principle
> at all.
>
> **"Measure zero" here is the cover condition of
> [[def-measure-zero-and-content-zero]]** … No outer measure, no measurable set
> and no Lebesgue integral is used or needed; the criterion is a statement about
> interval covers throughout.

**`thm-lebesgue-criterion-in-rn`** | theorem | published | `ai-altered`/`ai-altered` | `the-riemann-integral-in-rn-and-jordan-content` | order **235**

> A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$,
> $m\ge1$, is Riemann integrable if and only if its discontinuity set is null.

Consequence already published: `cor-countably-many-discontinuities-integrable`
(159) — bounded with at most countable discontinuity set ⇒ integrable, **no
choice used**.

Counterexamples/examples that already exist:
`ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero` (160),
`cex-indicator-of-a-fat-cantor-set-is-not-integrable` (160),
`ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set` (160),
`fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set` (159).

---

### §3 — The Riemann integral: every item id

Four A/B pairs in one dimension (159/160, 161/162, 165/166, 239/240) plus two in
$\mathbb{R}^m$ (235/236, 237/238).

**`the-riemann-integral` (order 159)** — Darboux first, Riemann second:

`def-partition-and-refinement`, `def-darboux-sums`, `lem-refinement-inequalities`,
`def-darboux-integral` ("lower and upper Darboux integrals … as $\sup_P L(f,P)$
and $\inf_P U(f,P)$, Darboux integrability as their equality, and the notation
$\int_a^b f$"), `lem-integral-elementary-bounds`, **`thm-riemann-criterion`**
("a bounded $f$ on $[a,b]$ is Darboux integrable if and only if for every real
$\varepsilon>0$ there is a partition $P$ with $U(f,P)-L(f,P)<\varepsilon$"),
`def-tagged-partition-and-riemann-sum`, **`thm-darboux-equals-riemann`**,
`thm-continuous-implies-integrable`, `thm-monotone-implies-integrable`,
`thm-finitely-many-discontinuities-integrable`, `thm-lebesgue-criterion`,
`cor-countably-many-discontinuities-integrable`,
`rem-riemann-integral-choice-ledger`, and the false statements
`fs-bounded-implies-riemann-integrable`,
`fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set`,
`fs-nonnegative-integrable-with-zero-integral-vanishes`,
`fs-pointwise-limit-of-riemann-integrable-is-integrable`.

Examples page 160: `ex-integral-of-x-squared-from-the-definition`,
`ex-refinement-improves-the-darboux-sums`, `ex-integral-of-the-floor-function`,
`ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`,
`ex-thomae-is-riemann-integrable-with-integral-zero`,
`cex-dirichlet-is-not-riemann-integrable`,
`cex-indicator-of-a-fat-cantor-set-is-not-integrable`,
`ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set`,
`cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice`,
`cex-nonnegative-integrable-with-zero-integral-need-not-vanish`.

**`properties-of-the-integral-and-the-working-ftc` (order 161)** — properties and
BOTH FTC parts:

`def-oriented-integral`, `lem-integrability-on-a-subinterval`,
`thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`,
`thm-additivity-over-subintervals`,
`lem-changing-a-function-at-finitely-many-points`,
`thm-composition-with-a-continuous-function`,
`cor-integrability-of-absolute-values-products-and-lattice-operations`
($|f|$, $f^2$, $fg$, $\max$, $\min$, and $|\int f|\le\int|f|$),
`thm-first-mean-value-theorem-for-integrals`, `def-the-integral-function`
($F(x):=\int_a^x f$), `thm-the-integral-function-is-lipschitz`,
**`thm-ftc-first-part`** ("if $f$ is integrable on $[a,b]$ and continuous at $c$,
then $F'(c)=f(c)$"), **`thm-ftc-second-part`** ("if $G$ is differentiable on
$[a,b]$ with $G'=f$ and $f$ is integrable, then $\int_a^b f=G(b)-G(a)$"),
`cor-primitives-of-a-continuous-function`, **`thm-integration-by-parts`**,
**`thm-substitution`**, `thm-second-mean-value-theorem-for-integrals` (Bonnet),
`thm-nonnegative-continuous-with-zero-integral-vanishes`,
`thm-integral-test-for-series`, `rem-integral-conventions-and-scope`.
Examples page 162 has 13 items including
`cex-an-integrable-function-with-no-primitive`,
`cex-a-function-with-a-primitive-that-is-not-integrable`,
`cex-a-composition-of-integrable-functions-that-is-not-integrable`,
`cex-absolute-value-integrable-without-the-function`,
`cex-spikes-with-integral-one-converging-pointwise-to-zero`,
`fs-the-integral-function-is-always-a-primitive`.

**`the-fundamental-theorems-of-calculus` (order 239)** — the sharpened FTC:

`rem-ftc-roadmap`, `cor-ftc-integral-function-differentiable-almost-everywhere`,
`thm-newton-leibniz-with-interior-derivative`,
`cor-newton-leibniz-with-finitely-many-exceptional-points`,
`thm-newton-leibniz-with-a-countable-exceptional-set` (Botsko),
`thm-integration-by-parts-with-interior-derivatives`,
`thm-substitution-with-riemann-integrable-inner-derivative`,
`thm-one-sided-ftc-at-points-with-one-sided-limits`,
`thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` (Leibniz
rule), `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`.
Examples 240: `ex-bounded-discontinuous-derivative-that-is-riemann-integrable`,
`cex-volterra-bounded-derivative-not-riemann-integrable`,
`ex-dense-jump-integrand-with-dense-nondifferentiability`,
`ex-thomae-integral-function-differentiates-through-dense-discontinuities`,
`ex-sparse-spikes-ftc-conclusion-at-a-discontinuity`,
`cex-ae-zero-derivative-does-not-determine-endpoint-change`.

**`improper-integrals` (order 165)** — 25 items:
`def-improper-integral-at-infinity`, `def-improper-integral-at-a-finite-endpoint`,
`def-mixed-improper-integral`, `lem-improper-integral-splitting-and-tail-invariance`,
`thm-linearity-of-improper-integrals`, `thm-cauchy-criterion-for-improper-integrals`,
`def-absolute-and-conditional-improper-convergence`,
`thm-nonnegative-improper-integral-bounded-primitive-criterion`,
`thm-absolute-improper-convergence-implies-convergence`,
`cor-improper-integral-tails-tend-to-zero`,
`thm-comparison-test-for-improper-integrals`,
`cor-limit-comparison-test-for-improper-integrals`,
`cor-improper-integral-test-for-series`, `lem-truncated-integrals-of-rational-powers`,
`thm-improper-p-test-rational`, `def-cauchy-principal-value`,
`thm-improper-convergence-implies-principal-value`,
`thm-dirichlet-test-for-improper-integrals`, `cor-abel-test-for-improper-integrals`,
`thm-dirichlet-divergence-transfer`, `thm-absolute-divergence-from-uniform-tail-mass`,
**`thm-monotone-change-of-variable-for-riemann-integrals`**,
`thm-substitution-for-improper-integrals`, `thm-frullani-integral-proper-factor`,
`rem-improper-integral-conventions-and-scope`.

**$\mathbb{R}^m$: `the-riemann-integral-in-rn-and-jordan-content` (235)** —
`def-multidimensional-rectangle-and-volume`, `def-multidimensional-grid-partition`,
`def-multidimensional-darboux-sums`, `lem-multidimensional-refinement-inequalities`,
`def-multidimensional-darboux-integral`, `thm-multidimensional-riemann-criterion`,
`def-multidimensional-tagged-partition-and-riemann-sum`,
`thm-multidimensional-darboux-equals-riemann`,
`cor-one-dimensional-and-multidimensional-riemann-agree`,
`thm-multidimensional-integral-properties`,
`thm-continuous-on-a-rectangle-is-riemann-integrable`, plus the null/Jordan block
in §1c.

**Change of variables and Fubini: `fubini-and-change-of-variables` (237)** —
`def-sections-and-iterated-riemann-integrals`,
`lem-product-grid-bounds-for-section-integrals`,
**`thm-riemann-fubini-on-product-rectangles`**,
`cor-repeated-riemann-integrals-on-rectangles`,
`cor-riemann-integral-of-a-product-function`,
`cor-finite-section-support-forces-zero-integral`,
**`thm-jordan-fubini-by-sections`**, `cor-cavalieri-principle-for-jordan-content`,
`thm-fubini-over-a-region-between-continuous-graphs`,
`def-jacobian-determinant-of-a-c-one-map`, `lem-finite-jordan-cover-sum-bounds`,
`thm-linear-images-scale-jordan-content-by-absolute-determinant`,
`cor-parallelepiped-content-is-the-absolute-determinant`,
`lem-near-identity-c-one-maps-sandwich-cubes`, `lem-local-c-one-volume-distortion`,
`thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`,
`lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set`,
`lem-bounded-open-jordan-sets-have-compact-grid-exhaustions`,
**`thm-change-of-variables-for-compact-jordan-sets`**,
`cor-jordan-content-under-a-c-one-diffeomorphism`,
**`def-support-and-compactly-supported-riemann-integral-in-rn`**,
`lem-compactly-supported-riemann-integral-is-well-defined`,
`cor-change-of-variables-for-compactly-supported-functions`,
`cor-change-of-variables-on-bounded-open-jordan-sets`,
`cor-one-dimensional-change-of-variables-with-absolute-derivative`.
Examples 238 include `cex-one-existing-iterated-integral-does-not-give-riemann-integrability`,
`ex-riemann-integrable-function-with-a-nonintegrable-section`,
`ex-riemann-integrable-function-with-dense-nonintegrable-sections`.

Also relevant: `thm-uniform-limit-interchanges-riemann-integration` (order 169) —
the only interchange theorem the library has; and
`lem-uniform-integral-error-bound` (169).

---

### §4 — BV, total variation, Jordan decomposition, absolute continuity, Lipschitz, the hierarchy

All on `bounded-variation-and-riemann-stieltjes` / `-examples` (163/164), except
`def-lipschitz-holder-contraction` (118).

**`def-bounded-variation-and-total-variation`** | definition | `literature-derived`/`n-a` | 163

> Let $a\le b$ and let $f:[a,b]\to\mathbb R$. If $a<b$ and $P=(n,t)$ is a
> partition of $[a,b]$, the **variation of $f$ over $P$** is
> $$V(f,P):=\sum_{i<n}|f(t_{i+1})-f(t_i)|.$$
> … The function $f$ has **bounded variation** on $[a,b]$ when this set of sums
> is bounded above. In that case its **total variation** is
> $$\operatorname{Var}_{[a,b]}(f):=\sup_P V(f,P).$$
> On a singleton interval, by convention, $\operatorname{Var}_{[a,a]}(f):=0$.

**`def-variation-function-and-positive-negative-variation`** | 163 —
$V_f(x):=\operatorname{Var}_{[a,x]}(f)$ with $V_f(a)=0$;
$P_f(x):=\tfrac{V_f(x)+f(x)-f(a)}2$, $N_f(x):=\tfrac{V_f(x)-f(x)+f(a)}2$.

**`thm-jordan-decomposition-for-bv-functions`** | theorem | `literature-derived`/`ai-generated` | 163

> A real function $f$ on $[a,b]$ has bounded variation if and only if it is a
> difference of two nondecreasing functions. If $f(a)=0$, the canonical
> normalized decomposition is $f=P_f-N_f$. More generally $f=f(a)+P_f-N_f$.
> It is minimal: if $f=f(a)+g-h$ with nondecreasing $g,h$ and $g(a)=h(a)=0$,
> then $P_f(x)\le g(x)$ and $N_f(x)\le h(x)$ for every $x$.

**`def-absolutely-continuous-function`** | definition | `ai-altered`/`n-a` | 163

> Let $a\le b$ and $f:[a,b]\to\mathbb R$. The function $f$ is **absolutely
> continuous** on $[a,b]$ if for every $\varepsilon>0$ there is $\delta>0$ such
> that every finite family of subintervals $[u_j,v_j]\subseteq[a,b]$, indexed by
> $j<m$, whose open interiors are pairwise disjoint and which satisfies
> $\sum_{j<m}(v_j-u_j)<\delta$ also satisfies $\sum_{j<m}|f(v_j)-f(u_j)|<\varepsilon$.

**`thm-c1-lipschitz-ac-bv-hierarchy`** | theorem | `ai-altered`/`ai-generated` | 163

> 1. If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f'$ extends
>    continuously to $[a,b]$, then $f$ is Lipschitz.
> 2. Every Lipschitz $f$ is absolutely continuous.
> 3. Every absolutely continuous $f$ is continuous and has bounded variation.
>
> Thus, with $C^1$ understood in the endpoint-extension sense of claim 1,
> $C^1\subseteq\mathrm{Lipschitz}\subseteq AC\subseteq C\cap BV$ on a compact interval.

**`def-lipschitz-holder-contraction`** (order 118) defines Lipschitz,
$\alpha$-Hölder for **rational** $0<\alpha\le1$, and contraction, in metric-space
generality. The rational restriction is explicit and is because
`def-real-power` only arrives at order 177.

Supporting BV items on 163: `lem-basic-properties-of-total-variation`,
`lem-variation-additive-on-subintervals`,
`lem-variation-function-and-jordan-identities`,
`cor-bv-discontinuities-are-countable-and-of-first-kind`,
`lem-jumps-of-the-variation-function`, `lem-total-variation-seminorm-laws`,
`thm-bv-functions-form-an-algebra`, `cor-bv-functions-are-riemann-integrable`,
`lem-bv-functions-are-regulated` (uniform approximation by step functions).

Examples 164: `ex-absolute-value-lipschitz-not-c1`,
`ex-square-root-ac-not-lipschitz`,
**`ex-cantor-function-bv-not-absolutely-continuous`**,
`cex-continuous-function-of-unbounded-variation`.

#### `rem-ftc-absolutely-continuous` — QUOTED IN FULL

`items/rem-ftc-absolutely-continuous.md` | remark | **published** | `proved_here: false` |
`landmark: true` | `deps: [rem-lebesgue-measure-and-integral, rem-absolutely-continuous-function, rem-lebesgue-monotone-differentiation]` |
`aliases: [rem-ftc-sharp]` | page `deferred-measure-and-integration`, order 1 |
no `provenance` block (legacy-unclassified); `verification.sources_checked`
2026-07-26. References: Wikipedia FTC (Lebesgue form), Wikipedia Absolute
continuity, C. Heil, *Absolute continuity and the Banach–Zaretsky theorem*
(`https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf`).

> ## Statement
>
> Let $F : [a,b] \to \mathbb{R}$. The following are equivalent.
>
> 1. $F$ is absolutely continuous on $[a,b]$.
> 2. $F$ is differentiable almost everywhere on $[a,b]$, $F' \in L^{1}[a,b]$, and
>    $$F(x) = F(a) + \int_a^x F' \, d\lambda \qquad \text{for every } x \in [a,b].$$
> 3. There exists $g \in L^{1}[a,b]$ with $F(x) = F(a) + \int_a^x g \, d\lambda$
>    for every $x \in [a,b]$; and then $g = F'$ almost everywhere.
>
> In particular, for $F \in AC[a,b]$ the Newton-Leibniz formula
> $F(b) - F(a) = \int_a^b F' \, d\lambda$ holds, and $AC[a,b]$ is exactly the
> class of functions for which it holds in this sense.
>
> **The identity must be required at every $x$, not only at $x = b$.** The endpoint
> identity alone does not characterise absolute continuity. Let $c$ be the Cantor
> function and set $F(x) = c(2x)$ on $[0, 1/2]$ and $F(x) = c(2 - 2x)$ on
> $[1/2, 1]$. Then $F$ is continuous, $F' = 0$ almost everywhere, $F' \in L^1$, and
> $$\int_0^1 F' \, d\lambda = 0 = F(1) - F(0),$$
> yet $F$ is not absolutely continuous, since it is not constant while carrying all
> its variation on a null set. The identity fails at $x = 1/2$, where the left side
> is $1$ and the right side is $0$.
>
> ## Remarks
>
> **Not proved in this library.** It is recorded with citations and used in no
> proof here.
>
> **What would prove it.** The implication from 3 to 1 is absolute continuity of
> the indefinite Lebesgue integral, which follows from the dominated convergence
> theorem ([[rem-dominated-convergence-theorem]]). The implication from 3 to
> $g = F'$ almost everywhere is the Lebesgue differentiation theorem
> ([[rem-lebesgue-differentiation-theorem]]). The hard direction, from 1 to 2, uses
> that $F \in AC$ is of bounded variation, hence differentiable almost everywhere
> by [[rem-lebesgue-monotone-differentiation]], that $F' \in L^{1}$ with
> $\int_a^x F' \le F(x) - F(a)$ for increasing $F$, and then a Vitali covering
> argument to upgrade the inequality to equality using the $\delta$ from absolute
> continuity. Every step is measure-theoretic.
>
> **Which page it serves.** This is the natural endpoint of the fundamental
> theorems of calculus page, and the reason that page's results are called the
> working FTC rather than the FTC. That page proves: if $f$ is Riemann integrable
> on $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then
> $\int_a^b f = F(b) - F(a)$; and if $f$ is continuous then $x \mapsto \int_a^x f$
> is an antiderivative. Both statements carry hypotheses that the theorem above
> deletes. The library states the sharp version here so that no reader concludes
> the working FTC is the last word, and so that the counterexamples on that page
> (a derivative that is not Riemann integrable, the Cantor function, Volterra's
> function) have a stated theorem to be counterexamples to.
>
> **What this page's other items add.** [[rem-banach-zarecki]] characterises the
> same class without mentioning an integral at all, and
> [[rem-henstock-kurzweil-vs-lebesgue]] records the integral for which the
> Newton-Leibniz formula holds for every everywhere-differentiable $F$, with no
> integrability hypothesis on $F'$ whatsoever.

Its sibling `rem-absolutely-continuous-function` (order 1, `proved_here: false`,
`forward_refs: [def-absolutely-continuous-function, thm-c1-lipschitz-ac-bv-hierarchy]`)
states the same $AC$ definition with **open** disjoint intervals, records the
strict chain
$\text{Lipschitz} \subsetneq AC[a,b] \subsetneq \{C \cap BV\} \subsetneq \{C\}$,
and adds: *"$AC[a,b]$ is a vector space, closed under products, and
$F \in AC[a,b]$ has **Luzin's property (N)**: it maps null sets to null sets."*
Its Remarks say explicitly which parts are already proved
(`def-absolutely-continuous-function`, `thm-c1-lipschitz-ac-bv-hierarchy`) and
which are not (closure under vector-space operations and products, property (N),
the sharp FTC, Banach–Zarecki).

---

### §5 — Riemann–Stieltjes integration: every item

All on `bounded-variation-and-riemann-stieltjes` (163) except the FTC form on 239.

**`def-riemann-stieltjes-sum-and-integral`** | definition | `ai-altered`/`n-a` | 163

> Let $a<b$, let $f,\alpha:[a,b]\to\mathbb R$, and let $P=(n,t)$ be a partition.
> A choice of tags $\xi_i\in[t_i,t_{i+1}]$ for $i<n$ makes $(P,\xi)$ a tagged
> partition. Its **Riemann-Stieltjes sum** is
> $$S(f,\alpha;P,\xi):=\sum_{i<n}f(\xi_i)\bigl(\alpha(t_{i+1})-\alpha(t_i)\bigr).$$
> The function $f$ is **Riemann-Stieltjes integrable with respect to $\alpha$** on
> $[a,b]$ if there is $I\in\mathbb R$ such that for every $\varepsilon>0$ there is
> $\delta>0$ for which every tagged partition with $\|P\|<\delta$ satisfies
> $|S(f,\alpha;P,\xi)-I|<\varepsilon$. Then $I=\int_a^b f\,d\alpha$.
> [Upper/lower Stieltjes sums $L_\alpha(f,P), U_\alpha(f,P)$ are then defined for
> bounded $f$ and nondecreasing $\alpha$.] On $[a,a]$ the integral is $0$; for
> $b<a$ set $\int_a^b f\,d\alpha=-\int_b^a f\,d\alpha$.

Then: `thm-riemann-stieltjes-darboux-criterion`,
`lem-riemann-stieltjes-integral-unique`, `lem-riemann-stieltjes-refinement-estimate`,
`thm-riemann-stieltjes-existence-continuous-bv`,
`cor-riemann-stieltjes-integral-bound`,
`thm-riemann-stieltjes-linearity-and-additivity`,
`thm-riemann-stieltjes-integration-by-parts`,
`cor-riemann-stieltjes-existence-bv-continuous`,
`thm-riemann-stieltjes-existence-finitely-discontinuous`,
`thm-riemann-stieltjes-continuous-composition`,
`thm-riemann-stieltjes-existence-bv-no-common-discontinuities`,
`cor-riemann-stieltjes-agrees-with-riemann`,
`thm-riemann-stieltjes-c1-integrator-reduction`,
`thm-riemann-stieltjes-countable-step-integrator`,
`thm-riemann-stieltjes-change-of-variable`,
`lem-young-partition-sum-estimate-rational`,
`thm-young-riemann-stieltjes-existence-rational`,
`rem-riemann-stieltjes-conventions-and-scope`, and on page 239
`thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`.

Examples 164: `ex-step-integrator-evaluates-at-the-jump`,
`ex-finite-step-integrator-weighted-jump-sum`,
`ex-unbounded-integrand-stieltjes-integrable`,
`ex-cantor-function-as-riemann-stieltjes-integrator`,
`cex-common-jump-prevents-riemann-stieltjes-integrability`,
`ex-riemann-stieltjes-polynomial-computation`,
`ex-riemann-stieltjes-substitution`,
`ex-young-integral-beyond-bounded-variation`.

`rem-riemann-stieltjes-conventions-and-scope` ends: *"No Lebesgue–Stieltjes
measure, almost-everywhere differentiability theorem, or
arbitrary-real-exponent Stieltjes theorem is asserted on this page."*

---

### §6 — Suprema/infima, limsup/liminf, series, rearrangement, double series

**Suprema and infima — `suprema-and-infima` (order 14):** `def-bounded-set`,
`def-infimum`, `def-max-min`, `lem-sup-unique`, `lem-reflection`,
`thm-infimum-property`, `lem-sup-epsilon`, `lem-inf-epsilon`, `lem-max-is-sup`,
`lem-finite-set-has-max`, `lem-sup-monotone`, `lem-sup-translate`,
`lem-sup-scale`, `lem-sup-sum`, `rem-sup-conventions` (conventions:
$\sup\emptyset$, unbounded sets, and the extended reals), `fs-sup-belongs-to-set`,
`fs-every-set-has-sup`. The least-upper-bound property itself is
`def-complete-ordered-field` (order 9).

**limsup / liminf FOR SEQUENCES — `limsup-and-subsequential-limits` (order 122):**
`def-extended-reals`, `lem-extended-reals-complete`, `def-limsup-liminf`,
`lem-limsup-exists`, `lem-liminf-le-limsup`, `lem-limsup-epsilon-characterisation`,
`lem-limsup-reflection`, `lem-limsup-monotone-comparison`, `def-extended-limits`,
`thm-limsup-is-greatest-subsequential-limit`,
`cor-liminf-is-least-subsequential-limit`,
`thm-convergence-iff-limsup-equals-liminf`, `thm-limsup-subadditive`,
`thm-limsup-submultiplicative`, `thm-ratio-root-inequality`,
`rem-extended-real-conventions`, `fs-limsup-additive`,
`fs-ratio-and-root-limits-always-agree`.

`def-limsup-liminf`:
> $$\limsup_{k} x_k := \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k := \sup \{\, i_n : n \in \mathbb{N} \,\}$$
> with $s_n:=\sup T_n$, $i_n:=\inf T_n$ taken in $\overline{\mathbb{R}}$ over
> the tail range $T_n:=\{x_k : k\ge n\}$.

**limsup / liminf FOR SETS: ABSENT.** No item defines
$\limsup_n A_n=\bigcap_n\bigcup_{k\ge n}A_k$ or $\liminf_n A_n$. A
measure-theory level needs these and must mint them (no id collision — see
Part 3).

**Series — `series-and-nonnegative-tests` (127):** `def-series` (partial sums,
convergence, sum, divergence, tail), `lem-series-tail-invariance`,
`lem-nth-term-test`, `thm-series-cauchy-criterion`, `lem-series-linearity`,
`lem-absolute-convergence-implies-convergence`, `thm-geometric-series`,
`lem-telescoping-series`, **`thm-nonnegative-series-bounded-partial-sums`**
("A series of nonnegative terms converges iff its partial sums are bounded, and
then the sum is their supremum" — *this is the library's "monotone convergence
for series"*; it also gives $s_n\to+\infty$ when unbounded),
`thm-direct-comparison-test`, `thm-limit-comparison-test`,
`thm-cauchy-condensation`, `thm-p-series-rational`, `thm-root-test`,
`thm-ratio-test`, `cor-root-test-dominates-ratio-test`, `thm-kummer-test`,
`cor-ratio-test-is-kummer-with-constant-weights`, `cor-raabe-test`,
`thm-gauss-test`, `thm-abel-dini`, `rem-strength-order-of-the-nonnegative-tests`.
Real-exponent $p$-series is `thm-p-series-real-exponents` (order 177).

**Absolute convergence and rearrangement — `absolute-convergence-and-rearrangement` (129):**
`def-absolute-and-conditional-convergence`, `lem-positive-and-negative-parts`
($a_k=a_k^{+}-a_k^{-}$, $|a_k|=a_k^{+}+a_k^{-}$ — the scalar analogue of $f^\pm$),
`lem-abel-summation-by-parts`, `thm-dirichlet-test`, `thm-alternating-series-test`,
`thm-abel-test`, `def-rearrangement-and-unconditional-convergence`,
`thm-dirichlet-rearrangement`, `thm-riemann-series-theorem`,
`cor-unconditional-iff-absolute-in-r`, `thm-grouping-of-series`,
`def-cauchy-product`, `thm-mertens`, `cor-cauchy-product-absolute`,
**`thm-double-series-fubini`**, `def-infinite-product`,
`thm-infinite-product-criterion`, `thm-decimal-expansions`,
`rem-rearrangement-in-higher-dimensions`,
`rem-sums-proved-to-exist-but-not-evaluated`, plus
`fs-iterated-double-sums-always-agree` and friends.

`thm-double-series-fubini` (this is the library's Fubini/Tonelli for counting
measure, in all but name):
> **(H)** for every $i$ the series $\sum_j |a_{ij}|$ converges, with sum $A_i$;
> and the series $\sum_i A_i$ converges, with sum $L$.
> Then, with $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ any bijection:
> 1. $\sum_n a_{J(n)}$ converges absolutely, and its sum $S$ is the same for
>    every such bijection;
> 2. for every $i$ the series $\sum_j a_{ij}$ converges, say to $R_i$; the series
>    $\sum_i R_i$ converges absolutely; and $\sum_{i} R_i = S$;
> 3. for every $j$ … $\sum_j C_j = S$.

Also relevant: `thm-monotone-convergence` (order 114) — "A nondecreasing
sequence bounded above converges to the supremum of its range" — is for
sequences of reals only; `rem-monotone-convergence-theorem` (order 1,
`proved_here: false`) is Beppo Levi.

---

### §7 — Extended real numbers

**They exist**, at `limsup-and-subsequential-limits`, order **122**.

**`def-extended-reals`** | definition | `ai-altered`/`n-a` | title: *"The extended
real line $\overline{\mathbb{R}} = \mathbb{R}\cup\{-\infty,+\infty\}$, its order,
and the arithmetic that is left undefined"*. Key clauses, quoted:

> Fix two objects $-\infty$ and $+\infty$ … $\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}$.
> This is a **new object** … It is not an enlargement of the field $\mathbb{R}$,
> and no operation of $\mathbb{R}$ is redefined by anything below.
>
> **The order.** $a \le b :\Longleftrightarrow a = -\infty$ or $b = +\infty$ or
> ($a, b \in \mathbb{R}$ and $a \le b$ in $\mathbb{R}$). [Proved a total order;
> the inclusion of $\mathbb{R}$ preserves and reflects it.]
>
> **Reflection.** $-(+\infty) := -\infty$, $-(-\infty) := +\infty$; $a\le b \iff -b\le -a$.
>
> **Partial addition.** field sum on reals; $+\infty$ when one summand is
> $+\infty$ and the other $\ne-\infty$; $-\infty$ dually; and **the two sums
> $(+\infty)+(-\infty)$ and $(-\infty)+(+\infty)$ are left undefined**.
>
> **Partial multiplication.** field product on reals; $\pm\infty$ by the sign
> rule when one factor is $\pm\infty$ and the other is $\ne 0$; and **every
> product with one factor $0$ and the other $\pm\infty$ is left undefined**.
>
> **Nothing else is defined.** There is no subtraction, no division, no
> exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this
> library; where such an expression is wanted it is written out in the two
> defined operations, and where a case falls in the undefined list the statement
> carries an explicit hypothesis saying so.

**So: no $0\cdot\infty = 0$.** The measure convention is unavailable and must be
introduced by a new, explicitly-named item (a convention item or an extension
definition), never by editing `def-extended-reals`. The one counterexample about
this is `cex-zero-times-infinity-indeterminate` (order 123), and
`rem-extended-real-conventions` (122) is the conventions ledger.

**`lem-extended-reals-complete`** (122) is the workhorse a measure track needs:
> Let $A \subseteq \overline{\mathbb{R}}$ be **any** subset … Then $A$ has a
> least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, each
> unique … $\sup \emptyset = -\infty$, $\inf \emptyset = +\infty$ in
> $\overline{\mathbb{R}}$. **No hypothesis is placed on $A$.**

`def-extended-limits` (122) gives convergence in $\overline{\mathbb{R}}$ and the
extended subsequential limit set; `def-divergence-to-infinity` (112) is the
underlying $x_k\to\pm\infty$; `def-real-power-series-and-radius-of-convergence`
(173) already uses radius in $[0,+\infty]$.

---

### §8 — Countability, cardinality, and the choice ledger

**`countability-and-uncountability` (order 18):** `def-equinumerous`,
`lem-nat-order-is-membership`, `lem-pigeonhole`, **`def-countable`**
("$A$ is **finite** if $A\approx n$ for some $n\in\mathbb{N}$; **countably
infinite** if $A\approx\mathbb{N}$; **at most countable** if finite or countably
infinite; **uncountable** if not at most countable"), `thm-schroder-bernstein`,
`lem-subset-of-countable`, `lem-countable-iff-surjection-from-n`,
`lem-finite-subsets-listable`, `thm-n-cross-n-countable`,
`thm-product-of-countable`, **`def-countable-choice`**, **`thm-countable-union-of-countable`**,
`thm-rationals-countable`, `thm-cantor-powerset`, **`thm-r-uncountable`**,
`cor-interval-uncountable`, `cor-irrationals-uncountable`,
`rem-continuum-hypothesis`, `fs-countable-union-theorem-of-zf`,
`fs-infinite-has-countable-subset-in-zf`, `fs-uncountable-contains-interval`.

**Choice principles, exact ids and where they live:**

| principle | id | order | page |
|---|---|---|---|
| choice function | `def-choice-function` | 5.3 | `relations-functions-and-quotients` |
| **AC** | `def-axiom-of-choice` | 5.3 | same — *"Every family of nonempty sets has a choice function."* |
| finite choice (ZF theorem) | `lem-finite-choice` | 10 | `order-zorn-and-the-axiom-of-choice` |
| **Zorn** | `thm-zorn`, `thm-zorn-implies-ac`, `cor-ac-iff-zorn` | 10 | same |
| Bourbaki–Witt | `thm-bourbaki-witt` | 10 | same |
| **$\mathrm{AC}_\omega$** | `def-countable-choice` | 18 | `countability-and-uncountability` |
| **DC** | `def-dependent-choice` | **120** | `compactness-in-metric-spaces` |
| DC along a sequence of relations | `lem-dependent-choice-along-a-sequence-of-relations` | 255 | `compactness` |
| ultrafilter lemma | `thm-ultrafilter-lemma`, `rem-choice-strengths` | 12 | `filters-and-ultrafilters` |
| **well-ordering** | `def-well-order`, `thm-well-ordering-theorem`, `thm-well-ordering-implies-ac`, `cor-ac-iff-well-ordering` | 243 | `ordinals-and-transfinite-recursion` |
| well-ordering principle on $\mathbb{N}$ | `thm-well-ordering-principle` | 6 | `construction-of-the-natural-numbers` |
| cardinals, $\aleph$/$\beth$, cofinality | `cardinal-arithmetic-and-cofinality` page | 247 | — |
| Hamel basis of $\mathbb{R}/\mathbb{Q}$ | `lem-hamel-basis-exists` | 151 | `monotone-functions-and-discontinuities` |

`def-dependent-choice`:
> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a\in X$, there is a sequence $x:\mathbb{N}\to X$ with $x_0=a$ and
> $x_n\mathbin{R}x_{n+1}$ for every $n\in\mathbb{N}$.

**Items that say what a result COSTS in choice** — this library is unusually
explicit and a measure level is expected to match it. The dedicated ledger
remarks are: `rem-choice-ledger` (243), `rem-choice-strengths` (12),
`rem-compactness-choice-ledger-metric` (120),
`rem-compactness-conventions-and-choice-ledger` (255),
`rem-countability-axiom-implication-and-choice-ledger` (273),
`rem-paracompactness-choice-and-convention-ledger` (269),
`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` (267),
**`rem-riemann-integral-choice-ledger` (159)**, `rem-baire-in-r-is-choice-free` (133),
`rem-convexity-conventions-and-choice` (157), `rem-heine-criterion-choice-cost` (135),
`rem-cardinal-arithmetic-choice-ledger` (247),
`rem-omega-one-and-the-cost-of-choice` (245), `rem-tychonoff-choice-strengths` (259).

Individually cost-annotated theorems relevant to me:
`thm-countable-union-of-null-is-null` ($\mathrm{AC}_\omega$, once, step 2.1),
`thm-lebesgue-criterion` ($\mathrm{AC}_\omega$ once in the forward half only),
`lem-countable-sets-are-null` (choice-free),
`cor-countably-many-discontinuities-integrable` (choice-free),
`thm-arzela-ascoli-for-real-ck` ($\mathrm{AC}_\omega$ + DC),
`thm-urysohn-lemma` (DC; converse choice-free),
`thm-tietze-extension-theorem` (DC; converse choice-free),
`thm-subordinate-partitions-of-unity-exist` (AC + DC),
`thm-stone-metric-spaces-are-paracompact` (AC),
`thm-baire-category-locally-compact-hausdorff` (DC),
`thm-baire-category-for-complete-metric-spaces` (DC),
`thm-complete-and-totally-bounded-implies-compact` ($\mathrm{AC}_\omega$, once),
`thm-tychonoff` (AC), `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`.
On the deferred side, `rem-lebesgue-measure-and-integral` already carries the
choice paragraph a measure level must reproduce (Feferman–Levy).

---

### §9 — Topology: what the LCH block gives, and the two things it does not

The topology band runs 249–284 and is dense. Pages, with order:
`topological-spaces-and-continuity` 249, `subspaces-products-and-quotients` 251,
`connectedness` 253, **`compactness` 255**, `the-topology-of-euclidean-space` 257,
`nets-and-filters` 259, **`separation-axioms` 261**, `hausdorff-via-the-diagonal` 263,
`hereditary-and-productive-separation` 265, **`urysohn-lemma-and-tietze` 267**,
**`partitions-of-unity-and-paracompactness` 269**,
`tychonoff-embedding-and-stone-cech` 271,
**`countability-axioms-and-cardinal-functions` 273**, `metrization-theorems` 275,
`uniform-spaces` 279, `uniform-completeness-and-samuel-compactification` 281,
`function-space-topologies` 283 (each with an `-examples` companion).

#### 9a. Compactness and local compactness (page 255)

`def-compact-space`, `lem-compactness-of-a-subspace-is-ambient`,
`thm-compactness-agrees-with-metric-compactness`, `thm-compact-iff-fip`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-compact-subset-of-a-hausdorff-space-is-closed`,
`thm-compactness-under-continuous-maps`, `lem-tube-lemma-for-a-compact-factor`,
`thm-finite-products-of-compact-spaces`, `thm-alexander-subbase-lemma`,
`thm-tychonoff` (AC), **`def-compactness-variants`**,
`thm-compactness-variants-hierarchy`, `cor-heine-borel-in-the-product-topology`,
**`def-locally-compact-space`**, **`thm-locally-compact-hausdorff-basics`**,
`lem-dependent-choice-along-a-sequence-of-relations`, **`def-baire-space`**,
**`thm-baire-category-locally-compact-hausdorff`**,
**`def-one-point-compactification`**, **`thm-one-point-compactification-properties`**,
`lem-the-order-topology-on-an-ordinal`, `thm-ordinal-spaces-and-compactness`,
`thm-the-long-line-is-countably-compact-and-not-compact`,
`thm-quasicomponents-equal-components-in-a-compact-hausdorff-space`,
`rem-compactness-conventions-and-choice-ledger`, and five `fs-` items.

- **σ-compactness is inside `def-compactness-variants`**, not a separate item:
  *"Countably compact, Lindelöf, sequentially compact, limit point compact and
  $\sigma$-compact spaces, and relatively compact subsets."* The only other
  σ-compact hits in the whole corpus are `cor-rn-is-locally-compact-and-sigma-compact`
  (257) and `ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals` (256).
- `def-locally-compact-space`: *"every point of $X$ has a compact neighbourhood"*,
  with the item stressing that the neighbourhood **need not be open**.
- `thm-locally-compact-hausdorff-basics` clause 3 is the shrinking lemma
  RMK needs: *"If $X$ is locally compact and Hausdorff, $O\subseteq X$ is open
  and $x\in O$, there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq O$
  and $\overline{V}$ a compact subset of $X$."* Clause 4: *"compact sets sit in
  open sets with compact closure."* `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`
  (263) restates clause 3 and adds regularity.
- `thm-one-point-compactification-properties`: $X^*$ compact; $X$ open in $X^*$;
  $X$ dense in $X^*$ iff $X$ not compact; $X^*$ Hausdorff iff $X$ locally compact
  Hausdorff. **No choice used.**

#### 9b. Urysohn, Tietze, partitions of unity, paracompactness

- **`thm-urysohn-lemma`** (267), under **DC**: *"If $X$ is normal and
  $A,B\subseteq X$ are disjoint closed sets, there is a continuous
  $f : X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$."*
  Converse holds and *"uses no choice principle."* Supporting:
  `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function`,
  `def-the-dyadic-rationals-of-the-unit-interval`.
- **`thm-tietze-extension-theorem`** (267), under DC: continuous
  $f : A \to [a,b]$ on a closed $A$ in a normal $X$ extends to
  $F : X \to [a,b]$; and that property characterises normality.
  `cor-tietze-for-unbounded-and-open-interval-valued-maps` gives the
  $\mathbb{R}$-valued and open-interval-valued forms.
- **`thm-a-locally-compact-hausdorff-space-is-completely-regular`** (267), under
  DC — the bridge from LCH to Tychonoff, proved *through the one-point
  compactification*. `cor-a-compact-hausdorff-space-is-tychonoff` follows.
- **`def-partition-of-unity-subordinate-to-a-cover`** (269): a family
  $\{\varphi_s:X\to[0,1]\}$ with each $\varphi_s$ continuous, cozero sets locally
  finite, $\sum_s\varphi_s(x)=1$ for every $x$; **subordinate** when for every $s$
  some $U\in\mathcal U$ contains
  $\operatorname{supp}(\varphi_s):=\overline{\operatorname{coz}(\varphi_s)}$.
  (`def-zero-sets-and-cozero-sets` is on 261.)
- **`thm-subordinate-partitions-of-unity-exist`** (269), under **AC + DC**: every
  open cover of a paracompact Hausdorff space admits a locally finite subordinate
  partition of unity. **`cor-compact-hausdorff-partitions-of-unity`**: for a
  compact Hausdorff space, a **finite** subordinate partition of unity.
  `cor-metric-spaces-admit-subordinate-partitions-of-unity` for metric spaces.
  Also `thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces`,
  `lem-normalizing-a-locally-finite-positive-family`,
  `lem-locally-finite-sums-are-continuous`,
  `lem-algebra-of-continuous-real-maps-on-a-space`,
  `lem-paracompact-hausdorff-cover-shrinking`.
- **`def-paracompact-space`** (269) with *no* separation axiom built in;
  `thm-paracompact-hausdorff-implies-normal`, `lem-paracompact-hausdorff-is-regular`,
  `prop-compact-spaces-are-paracompact`,
  `prop-closed-subspaces-of-paracompact-spaces`,
  **`thm-stone-metric-spaces-are-paracompact`** (AC),
  `lem-regular-lindelof-spaces-are-paracompact` ($\mathrm{AC}_\omega$).

**A caution for RMK.** Every partition-of-unity result above is stated for
*paracompact Hausdorff* or *compact Hausdorff*; there is **no** LCH version and
**no** "$K \prec f \prec U$" bump lemma with compactly supported $f$. Building
RMK will require minting that lemma (it follows quickly from
`thm-locally-compact-hausdorff-basics` clause 3 + `thm-urysohn-lemma` applied in
$\overline V$, or via `cor-a-compact-hausdorff-space-is-tychonoff` in $X^*$).

#### 9c. Countability axioms, separability, Stone–Čech, $G_\delta$/$F_\sigma$

- `def-second-countable-space` (273): *"A topological space $X$ is **second
  countable** when its topology has a basis $\mathcal B$ that is at most
  countable."*
- `def-separable-space` (273): *"A topological space $X$ is **separable** if some
  at most countable subset $D\subseteq X$ is dense in $X$."*
- `thm-second-countable-implies-separable` ($\mathrm{AC}_\omega$),
  `thm-second-countable-implies-lindelof` ($\mathrm{AC}_\omega$),
  **`thm-metric-countability-equivalences`** ($\mathrm{AC}_\omega$: for
  metrizable, 2nd countable $\iff$ separable $\iff$ Lindelöf),
  `prop-second-countability-is-hereditary`,
  `thm-metric-weight-equals-density`, `def-weight-density-and-character`,
  `def-lindelof-degree-and-cellularity`, `def-countable-chain-condition`, plus
  seven `fs-` items and `rem-countability-axiom-implication-and-choice-ledger`.
- **Stone–Čech** (`tychonoff-embedding-and-stone-cech`, 271):
  `cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma`,
  `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`,
  `fs-every-hausdorff-compactification-is-stone-cech`.
- **$G_\delta$ / $F_\sigma$**, two definitions, deliberately consistent:
  `def-f-sigma-g-delta` (133, for $\mathbb{R}$) and
  `def-g-delta-and-f-sigma-in-a-topological-space` (261, general, titled
  *"…agreeing with the real-line notion"*). Consumers:
  `cor-q-is-meager-and-not-g-delta` (133), `fs-q-is-g-delta` (133),
  `cex-irrationals-are-not-f-sigma` (134),
  **`thm-discontinuity-set-is-f-sigma`** (151),
  **`thm-continuity-set-realisation`** (151, every $G_\delta$ is a continuity set),
  `cor-no-function-is-continuous-exactly-on-q` (151),
  `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set` (160),
  `def-zero-sets-and-cozero-sets`, `def-completely-normal-and-perfectly-normal-spaces`,
  `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (261),
  `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set` (267),
  `ex-every-closed-subset-of-the-line-is-a-zero-set` (268),
  `cor-perfect-normality-is-hereditary` (265).
- **Borel: nothing.** Outside `Heine–Borel`, the string "Borel" occurs in
  exactly nine items: `def-summability-matrix` (125, Borel summability),
  `lem-definite-quadratic-forms-have-a-uniform-sphere-bound` (231),
  `rem-darboux-lhopital-taylor-scope` (155, Borel's theorem on Taylor series),
  `rem-normality-of-pi-open` (5, Borel normality), and five deferred remarks
  (`rem-lebesgue-measure-and-integral`, `rem-fubini-counting-measure-diagonal`,
  `rem-null-set-not-discontinuity-set`, `rem-riesz-markov-kakutani`,
  `rem-spectral-theory-bounded-operators`). **No Borel σ-algebra, no Borel set,
  no Borel measurable function.**
- **$C_c(X)$ / $C_0(X)$: absent.** The string `C_c` / `C_0` in the function-space
  sense appears in no item; the only compactly-supported machinery is
  `def-support-and-compactly-supported-riemann-integral-in-rn` (237),
  `lem-compactly-supported-riemann-integral-is-well-defined` (237),
  `cor-change-of-variables-for-compactly-supported-functions` (237), and
  `ex-smooth-compactly-supported-bump` (176).

#### 9d. Baire category — which versions exist and at what cost

| id | order | statement | choice |
|---|---|---|---|
| `thm-baire-category-r` | 133 | a countable intersection of dense open subsets of $\mathbb{R}$ is dense; $\mathbb{R}$ is not a countable union of nowhere dense sets | **none** (`rem-baire-in-r-is-choice-free`) |
| `lem-baire-category-in-a-closed-interval` | 151 | Baire inside $[a,b]$ | — |
| `thm-baire-category-for-complete-metric-spaces` | 171 | a nonempty complete metric space is not a countable union of closed sets with empty interior | **DC** |
| `thm-baire-category-locally-compact-hausdorff` | 255 | every LCH space is a Baire space | **DC** |
| `def-baire-space` | 255 | the property itself, for any topological space | — |
| `rem-baire-category-choice-strength` | 3 | "The Baire category theorem is four inequivalent statements over ZF" | `proved_here: false` |

---

### §10 — Metric and normed-space material

**Metric spaces (116–121, 125–126):** `def-metric-space`, `def-metric-ball`,
`def-metric-topology`, `def-metric-bounded-diameter`, `lem-metrics-on-rn`,
`lem-sup-metric-is-a-metric`, `def-complete-metric-space`,
`thm-complete-subspace-iff-closed`, `thm-euclidean-space-complete`,
**`def-metric-completion`**, **`thm-metric-completion-exists`** ("constructed as
the equivalence classes of its Cauchy sequences"), `thm-metric-completion-unique`,
`def-lipschitz-holder-contraction`, `thm-metric-regularity-hierarchy`,
`lem-complete-remetrisation`, `def-metric-compactness`,
`thm-compact-implies-complete-and-totally-bounded`,
`thm-complete-and-totally-bounded-implies-compact` ($\mathrm{AC}_\omega$ once),
`thm-lebesgue-number-lemma`, `def-dependent-choice`,
`rem-compactness-choice-ledger-metric`.

**Uniform convergence (169/170):**
`def-pointwise-uniform-and-uniformly-cauchy-convergence`,
`thm-uniform-cauchy-criterion-real-functions`, `def-series-of-real-functions`,
`thm-uniform-limit-continuous-real-functions`,
**`def-continuous-real-functions-on-a-compact-metric-space`** ($C(K,\mathbb{R})$),
**`thm-c-k-complete-in-the-sup-metric`** ($d_\infty(f,g):=\sup_{x\in K}|f-g|$;
$C(K,\mathbb R)$ complete), `lem-uniform-integral-error-bound`,
**`thm-uniform-limit-interchanges-riemann-integration`**,
`thm-uniform-derivative-limit-on-a-closed-interval`,
`thm-weierstrass-m-test-for-function-series`,
`thm-uniform-dirichlet-test-for-function-series`,
`thm-uniform-abel-test-for-function-series`, `thm-dini-on-a-closed-interval`.

**Stone–Weierstrass and Arzelà–Ascoli (171/172) — the metric versions, both citable:**

- **`thm-real-stone-weierstrass-for-compact-metric-spaces`** | theorem |
  `literature-derived`/`ai-altered` | order 171:
  > Let $K$ be a nonempty compact metric space and let $A\subseteq C(K,\mathbb R)$
  > be a unital subalgebra which separates points. Then $A$ is dense in
  > $C(K,\mathbb R)$ for the supremum metric.

  with `def-unital-separating-real-function-algebra`,
  `lem-uniform-closure-of-a-real-function-algebra-is-a-lattice`,
  `lem-two-point-interpolation-in-a-separating-real-function-algebra`; and the
  Bernstein route `def-bernstein-polynomial`, `lem-bernstein-basis-moment-identities`,
  `thm-bernstein-polynomials-converge-uniformly`,
  `cor-weierstrass-approximation-on-the-unit-interval`,
  `cor-weierstrass-approximation-on-a-closed-interval`. Counterexamples
  `cex-even-polynomial-algebra-is-not-dense`,
  `cex-separating-algebra-without-constants-is-not-dense`.
  **There is no complex version and no locally-compact / $C_0$ version.**
- **`thm-arzela-ascoli-for-real-ck`** | theorem | `ai-altered`/`ai-altered` | 171:
  > **Assume $\mathrm{AC}_\omega$ and DC.** Let $K$ be a nonempty compact metric
  > space and $\mathcal F\subseteq C(K,\mathbb R)$. Its closure in the supremum
  > metric is compact if and only if $\mathcal F$ is equicontinuous and pointwise
  > bounded.

  with `def-equicontinuity-and-boundedness-in-ck`,
  `lem-equicontinuity-on-a-compact-domain-is-uniform`,
  `lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness`,
  `lem-equicontinuous-families-have-finite-sup-nets`,
  `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`.

**Normed and inner-product spaces — YES, but only over $\mathbb{R}$ and mostly
for $\mathbb{R}^n$.** `rn-as-a-normed-space` (order 167):

- **`def-norm-and-normed-space`** is fully general: *"Let $V$ be a vector space
  over $\mathbb{R}$… A **norm on $V$** is a function $N : V \to \mathbb{R}$ such
  that … **(N1) Separation.** $N(v)=0$ iff $v=0_V$. **(N2) Absolute
  homogeneity.** $N(\lambda v)=|\lambda|N(v)$. **(N3) Triangle inequality.**
  $N(u+v)\le N(u)+N(v)$."* Plus the induced metric and the dictionary with the
  metric axioms. **No seminorm, no Banach space, no completeness-of-a-normed-space
  definition.**
- `def-euclidean-inner-product` — the Euclidean inner product on $\mathbb{R}^n$
  only. **There is no abstract inner-product-space definition.**
- `thm-cauchy-schwarz-and-the-euclidean-norm` — Cauchy–Schwarz with equality
  case, triangle inequality, parallelogram law, polarisation.
- `def-p-norms-on-rn` — $\lVert x\rVert_p$ for **rational** $p\ge1$ and
  $\lVert x\rVert_\infty$; `lem-p-norms-are-norms-and-induce-the-published-metrics`;
  `def-equivalent-norms`; `thm-all-norms-on-rn-are-equivalent`;
  `thm-componentwise-convergence-and-completeness`; `cor-bolzano-weierstrass-in-rn`.
- Vector-valued calculus: `def-vector-valued-functions-limits-and-continuity`,
  `def-vector-valued-derivative-and-integral`,
  `thm-norm-inequality-for-the-vector-valued-integral`
  ($\lVert\int_a^b f\rVert_2 \le \int_a^b\lVert f\rVert_2$),
  `thm-mean-value-inequality`, `cor-vector-valued-ftc-and-lipschitz-bound`,
  `def-series-of-vectors-and-rearrangement`, `thm-absolute-convergence-in-rn`,
  `thm-steinitz-polygonal-confinement`,
  `thm-rearrangement-sums-lie-in-an-affine-subspace`.
- Refutations already published: `fs-all-norms-on-any-real-vector-space-are-equivalent`,
  `fs-heine-borel-holds-in-every-normed-space`,
  `cex-the-one-norm-comes-from-no-inner-product` (168).

Other function-space material: `ex-bounded-functions-with-sup-metric-are-complete`
(119), `lem-uniform-metric-on-a-function-space` (283),
`thm-function-space-is-complete-for-a-complete-target` (283),
`cex-closed-and-bounded-not-compact-in-the-sup-metric` (121).

**Verdict for $L^p$:** the norm axioms, $p$-norm idiom, Hölder/Minkowski for
finite sums with real exponents, and completeness vocabulary all exist. What is
missing is (a) a quotient vector space, (b) a seminorm/normed-quotient bridge,
(c) any notion of Banach space, and (d) $\ell^p$ (there is **no** $\ell^p$ item
anywhere).

---

### §11 — Convex functions and Jensen

Page `convexity` / `-examples` (157/158), 19 + 4 items.

- **`def-convex-concave-and-midpoint-convex-functions`**:
  *"Let $I\subseteq\mathbb R$ be an interval and let $f:I\to\mathbb R$. … $f$ is
  **convex** when the convex-combination inequality holds for every weight in
  $[0,1]$: $f(\lambda x+(1-\lambda)y)\le \lambda f(x)+(1-\lambda)f(y)$. It is
  **strictly convex** when this inequality is strict whenever $x\ne y$ and
  $0<\lambda<1$. It is **concave** … when $-f$ is convex … It is **midpoint
  convex** when the displayed inequality is required only at $\lambda=1/2$."*
- **`thm-finite-jensen-inequality`**:
  *"Let $f:I\to\mathbb R$ be convex. If $N\ge1$, $x_1,\ldots,x_N\in I$, and
  $\lambda_1,\ldots,\lambda_N\ge0$ satisfy $\sum_{i=1}^N\lambda_i=1$, then
  $f(\sum\lambda_i x_i)\le\sum\lambda_i f(x_i)$."* — **finite form only. There is
  no integral Jensen.**
- Also: `lem-three-slope-inequality-for-convex-functions`,
  `thm-convex-functions-are-locally-lipschitz-and-continuous`,
  `def-one-sided-derivatives-of-real-functions`,
  `thm-one-sided-derivatives-of-convex-functions`,
  `thm-convex-functions-are-differentiable-off-a-countable-set`,
  `def-supporting-line-for-a-real-function`,
  `thm-supporting-lines-for-convex-functions`,
  `thm-differentiable-convex-functions-and-monotone-derivatives`,
  `cor-convex-differentiable-functions-have-continuous-derivatives`,
  `cor-second-derivative-characterises-convexity`,
  `lem-midpoint-convexity-extends-to-dyadic-weights`,
  `thm-continuous-midpoint-convex-functions-are-convex`,
  `cor-local-minima-of-convex-functions-are-global`,
  `cor-strictly-convex-functions-have-at-most-one-minimizer`,
  `def-inflection-point-by-change-of-convexity`,
  `cor-second-derivative-sign-change-gives-an-inflection-point`,
  `rem-convexity-conventions-and-choice`;
  `ex-absolute-value-is-convex`, `ex-finite-jensen-gives-the-mean-square-inequality`,
  `cex-discontinuous-midpoint-convex-hamel-function` (AC),
  `ex-cubic-has-an-inflection-point-at-zero`.

**The inequality toolkit, in two tiers.** Rational exponents at order 16
(`roots-and-rational-powers`): `thm-young-inequality`, `thm-holder-finite`,
`thm-minkowski-finite`, `thm-cauchy-schwarz-finite`, `thm-am-gm`,
`thm-weighted-am-gm-rational`. Real exponents at order 177
(`the-logarithm-and-general-powers`): **`thm-young-inequality-real-exponents`**
("Let $p,q>1$ satisfy $1/p+1/q=1$. For $u,v\ge0$, $uv\le u^p/p+v^q/q$"),
**`thm-holder-finite-real-exponents`**, **`thm-minkowski-finite-real-exponents`**,
`thm-weighted-am-gm-real`, `thm-exponential-two-point-convexity`,
`thm-p-series-real-exponents`, and `def-real-power` / `thm-real-power-laws` /
`thm-real-power-continuity-and-derivatives`. **Note there is no
`def-conjugate-exponent` item** — the relation $1/p+1/q=1$ is written inline
each time; that id is free.

---

### §12 — σ-algebra, algebra of sets, monotone class, π/λ-systems, outer measure, countable additivity, Lebesgue measure, measurable function, simple function

**The orchestrator's report is CORRECT, and here is the precise version.**
Counts are over all 4172 items, matching on title + body + id.

| phrase | items containing it | any of them a definition? |
|---|---|---|
| `σ-algebra` / `sigma-algebra` | **4** — `rem-lebesgue-measure-and-integral`, `rem-fubini-tonelli`, `rem-fubini-counting-measure-diagonal`, `rem-lp-separability` (all order 1, all `proved_here: false`) | **no** |
| "countably additive" / "countable additivity" | **5** — the above plus `rem-extended-real-conventions` (122), `rem-riemann-integral-choice-ledger` (159), `rem-vitali-non-measurable-set` (1), `rem-dual-of-l-infinity` (2, draft) | **no** |
| "outer measure" / $\lambda^{*}$ | **10** — `rem-lebesgue-measure-and-integral`, `rem-lebesgue-monotone-differentiation`, `rem-mini-vitali-covering-theorem`, `rem-semicontinuous-not-ae-riemann`, `rem-vitali-covering-theorem` (all order 1); `def-measure-zero-and-content-zero` (133), `thm-fat-cantor-set-has-positive-measure` (133), `ex-fat-cantor-measure-computed` (134), `thm-lebesgue-criterion` (159), `cex-indicator-of-a-fat-cantor-set-is-not-integrable` (160) | **one, and only as a deferred remark**: `items/rem-lebesgue-measure-and-integral.md` |
| "Lebesgue measure" / "Lebesgue integral" | 24, of which 22 are deferred remarks | **no** |
| "measurable set/function/space" | 21, all either deferred remarks or *Jordan* measurable | **no** (only `def-jordan-inner-and-outer-content`) |
| "simple function" | **3** — `rem-lp-separability`, `rem-lusin-theorem`, `rem-dual-of-l-infinity` | **no** |
| "algebra of sets", "monotone class", "π-system", "λ-system", "Dynkin" | **1** — `rem-fubini-tonelli` | **no** |
| "Carathéodory" (measure sense) | 3 deferred remarks | **no** — but see the id collision below |

**The single outer-measure item, named exactly:**
`rem-lebesgue-measure-and-integral`, file
`items/rem-lebesgue-measure-and-integral.md`, kind `remark`, `status: published`,
`proved_here: false`, `landmark: true`, `deps: []`,
`forward_refs: [def-countable-choice]`, `aliases: [rem-lebesgue-integral]`,
`short: "Lebesgue outer measure, Caratheodory measurability, and the integral
built from them"`, no `provenance` block, `verification.sources_checked` 2026-07-26,
references Wikipedia (Lebesgue integration / Lebesgue measure / Carathéodory's
criterion) and Tao, *An Introduction to Measure Theory*, Ch. 1. Its Statement:

> For $E \subseteq \mathbb{R}$ put
> $$\lambda^{*}(E) := \inf\Big\{ \sum_{k=1}^{\infty} |I_k| \;:\; E \subseteq \bigcup_{k=1}^{\infty} I_k, \ I_k \text{ open intervals} \Big\},$$
> the **Lebesgue outer measure** of $E$. Call $E$ **measurable** when it satisfies
> the **Caratheodory criterion**
> $$\lambda^{*}(A) = \lambda^{*}(A \cap E) + \lambda^{*}(A \setminus E) \quad \text{for every } A \subseteq \mathbb{R}.$$
> Then the measurable sets form a $\sigma$-algebra $\mathcal{M}$ containing every
> open set, $\lambda := \lambda^{*}|_{\mathcal{M}}$ is countably additive,
> $\lambda([a,b]) = b - a$, $\lambda$ is invariant under translation, and
> $\mathcal{M}$ is complete … The same construction in $\mathbb{R}^n$ with boxes
> in place of intervals produces $\lambda_n$.
>
> A function $f : \mathbb{R} \to [-\infty, +\infty]$ is **measurable** when
> $f^{-1}((c, +\infty]) \in \mathcal{M}$ for every $c \in \mathbb{R}$. For
> measurable $f \ge 0$ the **Lebesgue integral** is
> $$\int f \, d\lambda := \sup\Big\{ \sum_{i=1}^{m} c_i \lambda(A_i) \;:\; 0 \le \sum_{i=1}^{m} c_i \mathbf{1}_{A_i} \le f, \ A_i \in \mathcal{M} \text{ disjoint} \Big\},$$
> and a measurable $f$ is **Lebesgue integrable** when $\int |f| \, d\lambda < \infty$,
> in which case $\int f \, d\lambda := \int f^{+} \, d\lambda - \int f^{-} \, d\lambda$.
> The integrable functions modulo equality almost everywhere form $L^{1}(\lambda)$.
> Finally, every Riemann integrable $f$ on $[a,b]$ is Lebesgue integrable there and
> the two integrals agree, so the Lebesgue integral extends the Riemann integral.

Its Remarks are worth reading in full before scaffolding; three load-bearing
sentences:

> **What is available here without it.** … The elementary notion "$E$ is null if
> for every $\varepsilon > 0$ it is covered by countably many intervals of total
> length below $\varepsilon$", that is $\lambda^{*}(E) = 0$ with no measurability
> theory attached, is in scope, and so is "almost everywhere" in that sense.
> Lebesgue's criterion for Riemann integrability, the vanishing of the Cantor
> function's derivative almost everywhere, Volterra's function, Jordan content and
> Jordan measurability all live inside the elementary theory. What is missing is
> the $\sigma$-algebra, the measure defined on it, and the integral.
>
> **Choice.** … What is choice-free is the definition of $\lambda^{*}$, its
> monotonicity, and its subadditivity over finitely many sets. What is not is
> countable subadditivity of $\lambda^{*}$, and with it the countable additivity
> of $\lambda$ … each needs a countable choice principle … in the Feferman-Levy
> model of ZF the set $\mathbb{R}$ is a countable union of countable sets, so
> $[0,1]$ there is a countable union of null sets while $\lambda^{*}([0,1]) = 1$.
> A measure track built here would have to keep the same ledger of choice
> principles that the rest of this library keeps.

**⚠ One real id collision to watch:** `thm-caratheodory-characterisation` is
**TAKEN** — order 153, `the-derivative-and-mean-value-theorems`, Carathéodory's
characterisation of *differentiability*. A measure level must not mint that id
for the Carathéodory extension theorem. `caratheodory` as a token appears in no
other id.

---

### §13 — Quotients, equivalence classes, well-definedness (for $L^p$)

**No quotient vector space exists.** `linear-maps-rank-nullity-and-quotient-spaces`
(order 76) has exactly seven items and none of them is a quotient:
`def-linear-map`, `lem-linear-map-elementary-properties`,
`def-kernel-and-image-of-a-linear-map`, `thm-linear-kernel-image-and-injectivity`,
`lem-kernel-basis-extension-gives-image-basis`, `def-rank-and-nullity`,
`thm-rank-nullity`. (The page title is aspirational; the content is not there.)

**What DOES exist, and is the right template:**

| id | order | page | what it gives |
|---|---|---|---|
| `def-equivalence-relation` | 5.3 | `relations-functions-and-quotients` | equivalence relation, equivalence class, and the quotient set $A/{\sim}$ |
| `lem-equivalence-classes-partition` | 5.3 | same | classes nonempty, cover, pairwise equal-or-disjoint; converse |
| `lem-the-kernel-of-a-function-is-an-equivalence-relation` | 5.3 | same | $\ker f$ |
| **`thm-universal-property-of-the-quotient`** | 5.3 | same | $f$ factors through $\pi:A\to A/{\sim}$ iff $f$ is constant on classes; the factorisation is unique |
| `def-quotient-group` / `thm-quotient-group-laws` / `thm-coset-multiplication-well-defined-iff-normal` / `thm-quotient-group-universal-property` | 34, 36 | — | the group template |
| `def-quotient-ring` / `thm-quotient-ring-laws` / `thm-quotient-ring-multiplication-well-defined-iff-ideal` / `thm-quotient-ring-universal-property` | 48 | — | the ring template |
| **`def-quotient-module` / `thm-quotient-module-laws` / `thm-quotient-module-universal-property` / `prop-canonical-quotient-module-map`** | 102 | `modules-and-module-homomorphisms` | **the closest available template** — $M/N$ with scalar multiplication on additive cosets, well-definedness proved, universal property proved. A real vector space is an $\mathbb{R}$-module, and `lem-restriction-of-scalars` (72) already connects fields and modules. |
| `def-quotient-topology`, `thm-quotient-universal-property`, `thm-quotient-canonical-factorisation` | 251 | topology | the topological quotient |

**Well-definedness idiom.** The library states well-definedness as its own named
lemma or as an explicit iff-theorem, never as a parenthetical: see
`cor-nat-addition-well-defined`, `lem-int-add-well-defined`,
`lem-rat-ops-well-defined`, `lem-rational-power-well-defined`,
`thm-coset-multiplication-well-defined-iff-normal`,
`thm-quotient-ring-multiplication-well-defined-iff-ideal`,
`lem-cardinal-operations-are-well-defined`,
`lem-jordan-set-integral-well-defined`,
`lem-compactly-supported-riemann-integral-is-well-defined`,
`lem-weight-is-well-defined` (and the four siblings on 273),
`lem-bondy-chvatal-closure-well-defined`. **Follow that idiom for $L^p$.**

---

### §14 — Cantor set, Cantor function, Vitali-type constructions, non-measurable sets

**Cantor set and function — all on 133/134 and 151/152, all published:**

| id | order | statement |
|---|---|---|
| `def-cantor-set` | 133 | $C_0=[0,1]$, $C_{n+1}=\tfrac13 C_n\cup(\tfrac23+\tfrac13 C_n)$ by the recursion theorem; $C:=\bigcap_n C_n$ |
| `thm-cantor-set-ternary-description` | 133 | $C$ = the $\sum_{k\ge1}a_k3^{-k}$ with $a_k\in\{0,2\}$; bijection with $\{0,1\}^{\mathbb{N}}$ |
| `thm-cantor-set-properties` | 133 | compact; **content zero, hence measure zero**; perfect; uncountable; nowhere dense; contains no interval; only nonempty connected subsets are points |
| `def-fat-cantor-set` | 133 | Smith–Volterra–Cantor: remove a middle interval of length $4^{-n}$ at stage $n$ |
| `thm-fat-cantor-set-has-positive-measure` | 133 | SVC is compact, perfect, nowhere dense and **does not have measure zero** |
| `def-cantor-function` | 133 | ternary-digit definition on $C$, extended constantly across each removed interval |
| `thm-cantor-function-properties` | 133 | well defined, nondecreasing, surjective onto $[0,1]$, constant on every removed interval |
| `cor-cantor-function-is-continuous` | 151 | — |
| `rem-cantor-function-increases-only-on-a-null-set` | 151 | "…all of its increase happens on a set of measure zero" |
| `ex-cantor-function-maps-a-null-set-onto-the-unit-interval` | 152 | a null set can have image an interval of length 1 |
| `ex-cantor-function-values` | 134 | $c\equiv 1/2$ on $[1/3,2/3]$; values at $1/9$, $1/4$, $7/9$ |
| `ex-cantor-set-in-ternary`, `ex-cantor-set-is-perfect-and-totally-disconnected`, `cex-cantor-point-that-is-not-an-endpoint`, `fs-cantor-set-countable` | 133/134 | — |
| `ex-cantor-function-bv-not-absolutely-continuous` | 164 | — |
| `ex-cantor-function-as-riemann-stieltjes-integrator` | 164 | $\int_0^1 1\,dc=1$ |
| `cex-ae-zero-derivative-does-not-determine-endpoint-change` | 240 | the Cantor function again |
| `ex-cantor-slab-has-content-zero`, `cex-compact-set-without-jordan-content` | 236 | $C\times[0,1]$ and $S\times[0,1]$ |
| `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`, `cex-indicator-of-a-fat-cantor-set-is-not-integrable` | 160 | — |

**Vitali / non-measurable — deferred only.** `rem-vitali-non-measurable-set`,
`rem-vitali-covering-theorem`, `rem-mini-vitali-covering-theorem`,
`rem-banach-tarski`, `rem-sierpinski-ultrafilter-not-measurable` (all order 1,
`proved_here: false`), plus `rem-solovay-model` and
`rem-shelah-inaccessible-and-the-baire-property` (order 3). **No Vitali set is
constructed anywhere in `items/`.**

**The Choice-powered pathologies that ARE proved** and would feed a Vitali
construction: `lem-hamel-basis-exists` (151, AC),
`ex-hamel-basis-of-r-over-q` (75), `ex-hamel-basis-additive-function` (152),
`cex-discontinuous-midpoint-convex-hamel-function` (158),
`cex-discontinuous-logarithmic-functional-equation` (178.2),
`cex-discontinuous-multiplicative-cauchy-solution` (176),
`thm-cauchy-functional-equation-regularity` (151),
`def-additive-function` (151), `thm-well-ordering-theorem` (243),
`thm-zorn` (10). Coset-of-$\mathbb{Q}$ machinery is available via
`def-quotient-group` / `prop-canonical-quotient-map` and
`def-equivalence-relation`.

---

### §15 — `sigma-compact`, `Borel`, `G_delta`, `F_sigma`: every hit

**`sigma-compact` — 3 items total.**
`def-compactness-variants` (255, where it is defined among five variants),
`cor-rn-is-locally-compact-and-sigma-compact` (257),
`ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals` (256).
No id contains `sigma-compact`.

**`Borel` (excluding Heine–Borel) — 9 items, none mathematically about Borel sets:**
`def-summability-matrix` (125), `lem-definite-quadratic-forms-have-a-uniform-sphere-bound` (231),
`rem-darboux-lhopital-taylor-scope` (155), `rem-normality-of-pi-open` (5),
`rem-lebesgue-measure-and-integral` (1), `rem-fubini-counting-measure-diagonal` (1),
`rem-null-set-not-discontinuity-set` (1), `rem-riesz-markov-kakutani` (1),
`rem-spectral-theory-bounded-operators` (2, draft). Ids containing `borel`:
`thm-heine-borel-r`, `thm-heine-borel-rn`, `thm-heine-borel-characterisation-r`,
`cor-heine-borel-in-the-product-topology`, `fs-heine-borel-holds-in-every-normed-space`,
`fs-closed-bounded-compact-without-completeness` (title mentions it) — **all
Heine–Borel.**

**`G_delta` / `F_sigma` — 28 items** (listed in §9c above): definitions
`def-f-sigma-g-delta` (133) and `def-g-delta-and-f-sigma-in-a-topological-space` (261);
theorems `thm-discontinuity-set-is-f-sigma` (151),
`thm-continuity-set-realisation` (151),
`thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set` (267),
`thm-metric-spaces-are-tychonoff-and-perfectly-normal` (261),
`thm-perfectly-normal-implies-completely-normal` (261),
`thm-completely-normal-implies-normal` (261); consequences
`cor-q-is-meager-and-not-g-delta` (133),
`cor-no-function-is-continuous-exactly-on-q` (151),
`cor-perfect-normality-is-hereditary` (265); definitions using them
`def-completely-normal-and-perfectly-normal-spaces` (261),
`def-zero-sets-and-cozero-sets` (261), `def-nowhere-dense-meager` (133);
examples/counterexamples `cex-irrationals-are-not-f-sigma` (134),
`fs-q-is-g-delta` (133), `cex-dense-set-of-measure-zero` (134),
`cex-meager-set-of-full-measure` (134),
`ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set` (160),
`ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (262),
`ex-every-closed-subset-of-the-line-is-a-zero-set` (268),
`ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (262);
plus incidental mentions in `lem-oscillation-superlevel-sets-are-closed` (151),
`lem-complete-remetrisation` (118),
`rem-complete-metrizability-is-the-topological-shadow` (118),
`lem-locally-finite-union-of-sigma-locally-finite-bases` (275),
`thm-smirnov-local-metrization` (275), `thm-baire-category-r` (133),
`thm-baire-one-continuity-points` (151), `rem-separation-axiom-conventions` (261),
`rem-null-set-not-discontinuity-set` (1).

---

## Part 3 — id-collision report

Method: `ls items/ | grep -i '<name>'` equivalent, run over all 4172 ids in
`items/`. For each name I report the ids that contain it **as a hyphen-delimited
token** — that is what actually constrains minting — and, where the raw
substring count differs, I say so. Statuses: everything listed is `published`
unless the row says `draft`.

### `sigma-algebra` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `measure` — **10 TAKEN**

- `cex-dense-set-of-measure-zero` · counterexample · ord 134 · page `cantor-set-baire-and-measure-zero-examples` · $\mathbb{Q}$ is dense in $\mathbb{R}$ and has measure zero
- `cex-meager-set-of-full-measure` · counterexample · ord 134 · page `cantor-set-baire-and-measure-zero-examples` · $\mathbb{R}$ is the union of a meager set and a set of measure zero, so smallness of category and sm…
- `cex-nowhere-dense-with-positive-measure` · counterexample · ord 134 · page `cantor-set-baire-and-measure-zero-examples` · The Smith-Volterra-Cantor set is nowhere dense and does not have measure zero
- `def-measure-zero-and-content-zero` · definition · ord 133 · page `cantor-set-baire-and-measure-zero` · Measure zero (a countable cover by intervals of total length below every $\varepsilon$) and content …
- `ex-fat-cantor-measure-computed` · example · ord 134 · page `cantor-set-baire-and-measure-zero-examples` · The intervals removed from the Smith-Volterra-Cantor set have total length $1/2$, so the set cannot …
- `fs-measure-zero-implies-nowhere-dense` · false-statement · ord 133 · page `cantor-set-baire-and-measure-zero` · FALSE: every subset of $\mathbb{R}$ of measure zero is nowhere dense
- `fs-nowhere-dense-implies-measure-zero` · false-statement · ord 133 · page `cantor-set-baire-and-measure-zero` · FALSE: every nowhere dense subset of $\mathbb{R}$ has measure zero
- `rem-fubini-counting-measure-diagonal` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Failure of Tonelli without $\sigma$-finiteness: the diagonal under Lebesgue times counting measure
- `rem-lebesgue-measure-and-integral` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue measure and the Lebesgue integral
- `thm-fat-cantor-set-has-positive-measure` · theorem · ord 133 · page `cantor-set-baire-and-measure-zero` · The Smith-Volterra-Cantor set is compact, perfect and nowhere dense, and does not have measure zero

### `outer-measure` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `measurable` — **2 TAKEN**

- `rem-sierpinski-ultrafilter-not-measurable` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Sierpiński 1938: no free ultrafilter on $\mathbb{N}$ is measurable or has the Baire property
- `rem-vitali-non-measurable-set` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · The Vitali set: a non-measurable subset of $\mathbb{R}$

### `lebesgue` — **10 TAKEN**

- `cex-open-cover-with-no-lebesgue-number` · counterexample · ord 121 · page `compactness-in-metric-spaces-examples` · The cover of $(0,1)$ by the intervals $(1/(k+2), 1)$ has no Lebesgue number, so the Lebesgue number …
- `ex-lebesgue-number-of-a-two-set-cover` · example · ord 121 · page `compactness-in-metric-spaces-examples` · The cover of $[0,1]$ by $(-1, 2/3)$ and $(1/3, 2)$ has Lebesgue number $1/3$, and no larger one
- `rem-henstock-kurzweil-vs-lebesgue` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Henstock-Kurzweil versus Lebesgue: $f$ is Lebesgue integrable iff $f$ and $|f|$ are both HK integrab…
- `rem-improper-riemann-not-lebesgue` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · An improper Riemann integral that no Lebesgue integral reproduces: the sine integral
- `rem-lebesgue-differentiation-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue differentiation theorem for $L^1$ functions
- `rem-lebesgue-measure-and-integral` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue measure and the Lebesgue integral
- `rem-lebesgue-monotone-differentiation` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue's differentiation theorem for monotone functions
- `thm-lebesgue-criterion` · theorem · ord 159 · page `the-riemann-integral` · Lebesgue's criterion for Riemann integrability: a bounded $f$ on $[a,b]$ is Riemann integrable if an…
- `thm-lebesgue-criterion-in-rn` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Lebesgue's criterion in $\mathbb{R}^m$: a bounded function on a closed nondegenerate rectangle is Ri…
- `thm-lebesgue-number-lemma` · theorem · ord 120 · page `compactness-in-metric-spaces` · Every open cover of a compact metric space has a Lebesgue number: a $\delta > 0$ such that every non…

### `borel` — **6 TAKEN**

- `cor-heine-borel-in-the-product-topology` · corollary · ord 255 · page `compactness` · A subset of $\mathbb{R}^n$ with the product topology is compact exactly when it is closed and bounde…
- `fs-heine-borel-holds-in-every-normed-space` · false-statement · ord 168 · page `rn-as-a-normed-space-examples` · FALSE: in every normed space a closed bounded set is compact
- `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` · theorem · ord 257 · page `the-topology-of-euclidean-space` · For a nonempty subset of $\mathbb{R}^n$ with $n\ge1$, compactness, closedness and boundedness, pseud…
- `thm-heine-borel-characterisation-r` · theorem · ord 131 · page `topology-of-r` · A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded
- `thm-heine-borel-r` · theorem · ord 131 · page `topology-of-r` · Heine-Borel by bisection: every closed bounded interval $[a,b]$ is compact
- `thm-heine-borel-rn` · theorem · ord 120 · page `compactness-in-metric-spaces` · Heine-Borel in $\mathbb{R}^n$: with the Euclidean metric a subset of $\mathbb{R}^n$ is compact if an…

### `integral` — **86 TAKEN**  (113 raw substring matches; 86 are real token collisions, listed below)

- `cex-nonnegative-integrable-with-zero-integral-need-not-vanish` · counterexample · ord 160 · page `the-riemann-integral-examples` · Thomae's function is nonnegative, Riemann integrable on $[0,1]$ with integral $0$, and nonzero at ev…
- `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` · counterexample · ord 238 · page `fubini-and-change-of-variables-examples` · One existing iterated integral does not imply multiple Riemann integrability
- `cex-oscillatory-step-function-improper-integral-diverges` · counterexample · ord 166 · page `improper-integrals-examples` · A bounded truncation function need not have an improper limit
- `cex-shrinking-rectangles-have-integral-one` · counterexample · ord 170 · page `uniform-convergence-of-functions-examples` · Shrinking rectangles converge pointwise to zero while every integral equals one
- `cex-spikes-with-integral-one-converging-pointwise-to-zero` · counterexample · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · Continuous $f_n \to 0$ pointwise on $[0,1]$ with $\int_0^1 f_n = 1$ for every $n$
- `cor-area-as-a-line-integral-for-elementary-regions` · corollary · ord 241 · page `line-integrals-and-the-gradient-theorem` · Area of an elementary Green region as a boundary line integral
- `cor-finite-section-support-forces-zero-integral` · corollary · ord 237 · page `fubini-and-change-of-variables` · An integrable function whose sections vanish outside finite sets has multiple integral zero
- `cor-ftc-integral-function-differentiable-almost-everywhere` · corollary · ord 239 · page `the-fundamental-theorems-of-calculus` · Assuming Countable Choice, the integral function of a Riemann-integrable function is Lipschitz and d…
- `cor-improper-integral-tails-tend-to-zero` · corollary · ord 165 · page `improper-integrals` · Tails of a convergent improper integral tend to zero
- `cor-improper-integral-test-for-series` · corollary · ord 165 · page `improper-integrals` · Integral test as an equivalence with an improper integral
- `cor-integral-exponential-addition-law` · corollary · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The inverse $E$ satisfies $E(a+b)=E(a)E(b)$
- `cor-integral-logarithm-agrees-with-natural-logarithm` · corollary · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral logarithm $L$ is the published natural logarithm
- `cor-integral-logarithm-is-strictly-increasing` · corollary · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral logarithm is continuous and strictly increasing on $(0,\infty)$
- `cor-integral-logarithm-reciprocals-and-integer-powers` · corollary · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · $L(1/x)=-L(x)$, $L(x^n)=nL(x)$, and in particular $L(2^n)=nL(2)$
- `cor-piecewise-c1-paths-have-additive-speed-integral-length` · corollary · ord 181 · page `arc-length-and-rectifiable-curves` · A continuous piecewise-$C^1$ path is rectifiable and its length is the sum of the speed integrals ov…
- `cor-riemann-integral-of-a-product-function` · corollary · ord 237 · page `fubini-and-change-of-variables` · The integral of a product function on a product rectangle is the product of the two integrals
- `cor-riemann-stieltjes-integral-bound` · corollary · ord 163 · page `bounded-variation-and-riemann-stieltjes` · The total-variation bound for a Riemann–Stieltjes integral
- `cor-scalar-line-integral-of-one-is-arc-length` · corollary · ord 241 · page `line-integrals-and-the-gradient-theorem` · The scalar line integral of one is the arc length
- `def-darboux-integral` · definition · ord 159 · page `the-riemann-integral` · The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\sup_P L(f,P)$ and $\inf_P U(f…
- `def-divisible-module-over-an-integral-domain` · definition · ord 104 · page `free-modules-and-exact-sequences` · Divisible modules over an integral domain
- `def-improper-integral-at-a-finite-endpoint` · definition · ord 165 · page `improper-integrals` · Improper integrals at a finite singular endpoint
- `def-improper-integral-at-infinity` · definition · ord 165 · page `improper-integrals` · Improper integrals over unbounded intervals
- `def-integral-exponential` · definition · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral exponential $E:\mathbb R\to(0,\infty)$ as the inverse of $L$
- `def-integral-logarithm` · definition · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral logarithm $L(x):=\int_1^x\frac{dt}{t}$ for $x>0$
- `def-integral-network-flow-cut-and-residual-network` · definition · ord 213 · page `matchings-covers-menger-and-network-flows` · Finite integral networks, feasible flows, values, cuts and residual networks
- `def-mixed-improper-integral` · definition · ord 165 · page `improper-integrals` · Improper integrals with several singular ends
- `def-multidimensional-darboux-integral` · definition · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · The lower and upper Darboux integrals over a nondegenerate rectangle in $\mathbb{R}^m$
- `def-oriented-integral` · definition · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · The integral with oriented limits: $\int_a^a f := 0$ and $\int_b^a f := -\int_a^b f$
- `def-riemann-integral-over-a-jordan-set` · definition · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · The Riemann integral of a bounded function over a bounded Jordan measurable set
- `def-riemann-stieltjes-sum-and-integral` · definition · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Riemann–Stieltjes sums, upper and lower sums, and the Riemann–Stieltjes integral
- `def-support-and-compactly-supported-riemann-integral-in-rn` · definition · ord 237 · page `fubini-and-change-of-variables` · 'The support of a function on $\mathbb{R}^n$ and its compactly supported Riemann integral'
- `def-the-integral-function` · definition · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · The integral function $F(x) := \int_a^x f$ of an integrable $f$
- `def-vector-valued-derivative-and-integral` · definition · ord 167 · page `rn-as-a-normed-space` · The derivative and the Riemann integral of a vector-valued function: an intrinsic derivative and a c…
- `def-zero-divisor-and-integral-domain` · definition · ord 46 · page `rings-subrings-and-integral-domains` · Zero divisor, and integral domain: a commutative ring with $1 \ne 0$ and no zero divisors
- `ex-a-vector-line-integral-counts-multiple-traversals` · example · ord 242 · page `line-integrals-and-the-gradient-theorem-examples` · A vector line integral around the vortex counts repeated traversals
- `ex-absolutely-convergent-rational-integral-on-the-line` · example · ord 166 · page `improper-integrals-examples` · '$\int_{-\infty}^{\infty}(1+x^2)^{-1}\,dx$ converges absolutely'
- `ex-componentwise-convergence-and-a-vector-valued-integral-computed` · example · ord 168 · page `rn-as-a-normed-space-examples` · A convergent sequence in $\mathbb{R}^{3}$ and the integral $\int_0^1 (1, t, t^{2})$, computed compon…
- `ex-conditionally-convergent-step-function-integral` · example · ord 166 · page `improper-integrals-examples` · A step function whose improper integral is the alternating harmonic series
- `ex-fubini-computes-the-integral-of-x-exp-xy` · example · ord 238 · page `fubini-and-change-of-variables-examples` · 'Fubini computes $\int_0^1\int_{-1}^1 x\exp(xy)\,dx\,dy$ by reversing the order'
- `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero` · example · ord 160 · page `the-riemann-integral-examples` · The indicator of the Cantor set is discontinuous exactly on the Cantor set, which is null, so it is …
- `ex-integers-are-an-integral-domain-not-a-field` · example · ord 47 · page `rings-subrings-and-integral-domains-examples` · $\mathbb{Z}$ is an integral domain of characteristic $0$ whose group of units is $\{1,-1\}$, so it i…
- `ex-integral-network-max-flow-min-cut` · example · ord 214 · page `matchings-covers-menger-and-network-flows-examples` · A four-vertex integral network with an exhibited maximum flow and minimum cut of value five
- `ex-integral-of-the-floor-function` · example · ord 160 · page `the-riemann-integral-examples` · $\int_0^3 \lfloor x \rfloor = 3$: the floor function is nondecreasing, hence integrable, and the int…
- `ex-integral-of-x-squared-from-the-definition` · example · ord 160 · page `the-riemann-integral-examples` · $\int_0^1 x^{2} = 1/3$, computed from the Darboux definition with uniform partitions and the closed …
- `ex-integral-test-applied-to-the-p-series` · example · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · The integral test applied to $\sum 1/\iota(k+1)^{p}$ for rational $p>0$, cross-checked against the p…
- `ex-one-over-square-root-improper-integral` · example · ord 166 · page `improper-integrals-examples` · '$\int_0^1 x^{-1/2}\,dx=2$'
- `ex-scalar-line-integral-over-a-unit-semicircle` · example · ord 242 · page `line-integrals-and-the-gradient-theorem-examples` · The scalar line integral of x over the right unit semicircle equals two
- `ex-thomae-integral-function-differentiates-through-dense-discontinuities` · example · ord 240 · page `the-fundamental-theorems-of-calculus-examples` · Thomae's integrand is discontinuous at every rational, yet its integral function is identically zero…
- `ex-thomae-is-riemann-integrable-with-integral-zero` · example · ord 160 · page `the-riemann-integral-examples` · Thomae's function is Riemann integrable on $[0,1]$ with integral $0$: it is continuous at every irra…
- `ex-unit-box-volume-and-integral` · example · ord 236 · page `the-riemann-integral-in-rn-and-jordan-content-examples` · The unit box in $\mathbb{R}^m$ has volume $1$, and the integral of a constant $c$ over it is $c$
- `ex-wallis-partial-products-and-integral-bounds` · example · ord 184 · page `pi-the-equivalent-characterizations-examples` · Wallis partial products are trapped by adjacent sine-power integrals
- `ex-young-integral-beyond-bounded-variation` · example · ord 164 · page `bounded-variation-and-riemann-stieltjes-examples` · Young's theorem integrates a Hölder function of unbounded variation against itself
- `fs-nonnegative-integrable-with-zero-integral-vanishes` · false-statement · ord 159 · page `the-riemann-integral` · FALSE: a nonnegative Riemann integrable function on $[a,b]$ with $\int_a^b f = 0$ is identically zer…
- `fs-the-integral-function-is-always-a-primitive` · false-statement · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · FALSE: for every integrable $f$ on $[a,b]$, the integral function $F(x)=\int_a^x f$ satisfies $F' = …
- `lem-compactly-supported-riemann-integral-is-well-defined` · lemma · ord 237 · page `fubini-and-change-of-variables` · The Riemann integral of a compactly supported function is independent of its bounding rectangle
- `lem-improper-integral-splitting-and-tail-invariance` · lemma · ord 165 · page `improper-integrals` · Improper convergence is independent of finite truncations and split points
- `lem-integral-elementary-bounds` · lemma · ord 159 · page `the-riemann-integral` · If $m \le f \le M$ on $[a,b]$ then $m(b-a) \le L(f,P) \le \underline{\int_a^b} f \le \overline{\int_…
- `lem-integral-unit-flow-decomposition` · lemma · ord 213 · page `matchings-covers-menger-and-network-flows` · An integral flow decomposes into source-sink path flows and directed cycle flows; unit capacities ma…
- `lem-jordan-set-integral-well-defined` · lemma · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · The Riemann integral over a Jordan set is independent of the bounding rectangle
- `lem-riemann-stieltjes-integral-unique` · lemma · ord 163 · page `bounded-variation-and-riemann-stieltjes` · The Riemann–Stieltjes integral is unique
- `lem-uniform-integral-error-bound` · lemma · ord 169 · page `uniform-convergence-of-functions` · Uniformly close integrable functions have integrals differing by at most the interval length times t…
- `rem-holder-minkowski-integral` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Holder and Minkowski inequalities in integral form
- `rem-improper-integral-conventions-and-scope` · remark · ord 165 · page `improper-integrals` · Conventions and proved scope for improper integrals
- `rem-integral-conventions-and-scope` · remark · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · Conventions of this page, and which sharpenings of the integral are taken up later in the reading or…
- `rem-lebesgue-measure-and-integral` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue measure and the Lebesgue integral
- `rem-riemann-integral-choice-ledger` · remark · ord 159 · page `the-riemann-integral` · What this page costs in choice: Riemann's criterion, the Darboux-Riemann equivalence and integrabili…
- `thm-c1-paths-have-length-equal-to-the-integral-of-speed` · theorem · ord 181 · page `arc-length-and-rectifiable-curves` · If $\gamma:[a,b]\to\mathbb{R}^n$ is continuous, differentiable on $(a,b)$, and $\gamma'$ extends con…
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` · theorem · ord 239 · page `the-fundamental-theorems-of-calculus` · Leibniz's rule on a compact rectangle: an interior parameter derivative with a continuous extension …
- `thm-ford-fulkerson-integral-max-flow-min-cut` · theorem · ord 213 · page `matchings-covers-menger-and-network-flows` · Ford-Fulkerson terminates for finite integer capacities and proves max-flow min-cut with an integral…
- `thm-frullani-integral-proper-factor` · theorem · ord 165 · page `improper-integrals` · Frullani's formula with its proper integral factor
- `thm-integral-exponential-agrees-with-exponential` · theorem · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral exponential $E$ is the published exponential function
- `thm-integral-exponential-solves-the-normalised-ivp` · theorem · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The inverse $E$ is differentiable, $E'=E$, and $E(0)=1$
- `thm-integral-logarithm-derivative-and-normalisation` · theorem · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral logarithm satisfies $L'(x)=1/x$ for $x>0$ and $L(1)=0$
- `thm-integral-logarithm-is-a-bijection` · theorem · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · $L:(0,\infty)\to\mathbb R$ is a continuous strictly increasing bijection
- `thm-integral-logarithm-is-unbounded` · theorem · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral logarithm is unbounded above and below
- `thm-integral-logarithm-product-law` · theorem · ord 178.1 · page `the-integral-logarithm-and-its-characterisations` · The integral logarithm satisfies $L(xy)=L(x)+L(y)$ for all positive $x$ and $y$
- `thm-integral-test-for-series` · theorem · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · The integral test: for $f \ge 0$ nonincreasing on $[0,\infty)$, $\sum_k f(k)$ converges if and only …
- `thm-linearity-of-the-integral` · theorem · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · Integrable functions on $[a,b]$ form a set closed under sums and scalar multiples, and $\int_a^b(\la…
- `thm-logarithm-derivative-and-integral` · theorem · ord 177 · page `the-logarithm-and-general-powers` · The natural logarithm has derivative 1/x and equals the integral from 1 to x of 1/t
- `thm-monotonicity-of-the-integral` · theorem · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · If $f \le g$ on $[a,b]$ and both are integrable then $\int_a^b f \le \int_a^b g$; and $m(b-a) \le \i…
- `thm-multidimensional-integral-properties` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Linearity, monotonicity, the absolute-value estimate and coordinate-slice additivity for the Riemann…
- `thm-nonnegative-continuous-with-zero-integral-vanishes` · theorem · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · A continuous $f \ge 0$ on $[a,b]$ with $\int_a^b f = 0$ is identically $0$
- `thm-nonnegative-improper-integral-bounded-primitive-criterion` · theorem · ord 165 · page `improper-integrals` · A nonnegative improper integral converges iff its truncated integrals are bounded
- `thm-norm-inequality-for-the-vector-valued-integral` · theorem · ord 167 · page `rn-as-a-normed-space` · For $a \le b$ and $f : [a,b] \to \mathbb{R}^m$ integrable when $a<b$, $\bigl\lVert\int_a^b f\bigr\rV…
- `thm-scalar-and-vector-line-integral-estimates` · theorem · ord 241 · page `line-integrals-and-the-gradient-theorem` · Line-integral estimates by arc length and the supremum of the field
- `thm-the-integral-function-is-lipschitz` · theorem · ord 161 · page `properties-of-the-integral-and-the-working-ftc` · The integral function of a bounded integrable $f$ is Lipschitz, hence uniformly continuous

### `integrable` — **27 TAKEN**

- `cex-a-composition-of-integrable-functions-that-is-not-integrable` · counterexample · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · Integrable $\varphi$ and integrable $f$ with $\varphi\circ f$ not integrable: the order of the hypot…
- `cex-a-function-with-a-primitive-that-is-not-integrable` · counterexample · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · A function differentiable on $[0,1]$ whose derivative is unbounded, hence not Riemann integrable
- `cex-absolute-value-integrable-without-the-function` · counterexample · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · A function that is not Riemann integrable although $\lvert f\rvert$ is
- `cex-an-integrable-function-with-no-primitive` · counterexample · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · The sign function is Riemann integrable on $[-1,1]$ and has no primitive there
- `cex-dirichlet-is-not-riemann-integrable` · counterexample · ord 160 · page `the-riemann-integral-examples` · The Dirichlet function on $[0,1]$ has lower Darboux integral $0$ and upper Darboux integral $1$, so …
- `cex-indicator-of-a-fat-cantor-set-is-not-integrable` · counterexample · ord 160 · page `the-riemann-integral-examples` · The indicator of the Smith-Volterra-Cantor set is discontinuous exactly on a nowhere dense set, and …
- `cex-nonnegative-integrable-with-zero-integral-need-not-vanish` · counterexample · ord 160 · page `the-riemann-integral-examples` · Thomae's function is nonnegative, Riemann integrable on $[0,1]$ with integral $0$, and nonzero at ev…
- `cex-volterra-bounded-derivative-not-riemann-integrable` · counterexample · ord 240 · page `the-fundamental-theorems-of-calculus-examples` · Volterra's function is differentiable everywhere with bounded derivative, but its derivative is not …
- `cor-bv-functions-are-riemann-integrable` · corollary · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Every bounded-variation function on a compact interval is Riemann integrable
- `cor-countably-many-discontinuities-integrable` · corollary · ord 159 · page `the-riemann-integral` · A bounded function on $[a,b]$ whose set of discontinuities is at most countable is Riemann integrabl…
- `ex-bounded-discontinuous-derivative-that-is-riemann-integrable` · example · ord 240 · page `the-fundamental-theorems-of-calculus-examples` · $G(x)=x^2\sin(1/x)$ has a bounded derivative discontinuous at $0$ that is nevertheless Riemann integ…
- `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero` · example · ord 160 · page `the-riemann-integral-examples` · The indicator of the Cantor set is discontinuous exactly on the Cantor set, which is null, so it is …
- `ex-riemann-integrable-function-with-a-nonintegrable-section` · example · ord 238 · page `fubini-and-change-of-variables-examples` · An integrable function on the unit square with one Dirichlet section and only one defined order of o…
- `ex-riemann-integrable-function-with-dense-nonintegrable-sections` · example · ord 238 · page `fubini-and-change-of-variables-examples` · A Riemann-integrable Thomae-type function whose $x$-sections are nonintegrable at every rational hei…
- `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set` · example · ord 160 · page `the-riemann-integral-examples` · For every $F_\sigma$ subset $E$ of $[0,1]$ of measure zero there is a bounded Riemann integrable fun…
- `ex-thomae-is-riemann-integrable-with-integral-zero` · example · ord 160 · page `the-riemann-integral-examples` · Thomae's function is Riemann integrable on $[0,1]$ with integral $0$: it is continuous at every irra…
- `ex-unbounded-integrand-stieltjes-integrable` · example · ord 164 · page `bounded-variation-and-riemann-stieltjes-examples` · A Riemann–Stieltjes integrable integrand need not be bounded
- `fs-bounded-implies-riemann-integrable` · false-statement · ord 159 · page `the-riemann-integral` · FALSE: every bounded function on $[a,b]$ is Riemann integrable
- `fs-nonnegative-integrable-with-zero-integral-vanishes` · false-statement · ord 159 · page `the-riemann-integral` · FALSE: a nonnegative Riemann integrable function on $[a,b]$ with $\int_a^b f = 0$ is identically zer…
- `fs-pointwise-limit-of-riemann-integrable-is-integrable` · false-statement · ord 159 · page `the-riemann-integral` · FALSE: a pointwise limit of a sequence of Riemann integrable functions on $[a,b]$ is Riemann integra…
- `fs-substitution-holds-for-every-integrable-integrand` · false-statement · ord 162 · page `properties-of-the-integral-and-the-working-ftc-examples` · FALSE: in the substitution theorem the continuity of $f$ may be weakened to integrability, $f\circ\v…
- `thm-continuous-functions-on-compact-jordan-sets-are-integrable` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · A continuous real function on a compact Jordan measurable set is Riemann integrable over that set
- `thm-continuous-implies-integrable` · theorem · ord 159 · page `the-riemann-integral` · A continuous function on $[a,b]$ is Riemann integrable, by Heine-Cantor and Riemann's criterion
- `thm-continuous-on-a-rectangle-is-riemann-integrable` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Every continuous function on a closed nondegenerate rectangle in $\mathbb{R}^m$ is Riemann integrabl…
- `thm-finitely-many-discontinuities-integrable` · theorem · ord 159 · page `the-riemann-integral` · A bounded function on $[a,b]$ that is continuous except at finitely many points is Riemann integrabl…
- `thm-monotone-implies-integrable` · theorem · ord 159 · page `the-riemann-integral` · A monotone function on $[a,b]$ is Riemann integrable: for the uniform partition into $N$ parts the u…
- `thm-substitution-with-riemann-integrable-inner-derivative` · theorem · ord 239 · page `the-fundamental-theorems-of-calculus` · Substitution for a continuous inner map with a Riemann-integrable extension of its interior derivati…

### `null` — **29 TAKEN**  (37 raw substring matches; 29 are real token collisions, listed below)

- `cex-null-set-not-of-content-zero` · counterexample · ord 134 · page `cantor-set-baire-and-measure-zero-examples` · $\mathbb{Q} \cap [0,1]$ has measure zero and not content zero, although it is bounded
- `cex-sqrt-k-differences-null-not-cauchy` · counterexample · ord 115 · page `monotone-sequences-and-cauchy-completeness-examples` · $x_k = \sqrt{k}$ has $x_{k+1} - x_k \to 0$ and is not Cauchy
- `cor-nonempty-hereditary-class-contains-the-null-graph` · corollary · ord 393 · page `induced-subgraphs-and-hereditary-graph-classes` · Every nonempty hereditary graph class contains the null graph
- `cor-one-dimensional-null-and-content-zero-agree` · corollary · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · At $m=1$, cube-nullity and cube-content-zero are exactly the published interval-cover notions
- `def-null-and-content-zero-in-rn` · definition · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Measure zero and content zero in $\mathbb{R}^m$ by countable and finite cube covers
- `def-null-sequence` · definition · ord 7 · page `construction-of-r-via-cauchy-sequences` · Null sequence
- `ex-cantor-function-maps-a-null-set-onto-the-unit-interval` · example · ord 152 · page `monotone-functions-and-discontinuities-examples` · The Cantor set has measure zero, yet the Cantor function maps it onto all of $[0,1]$: a null set can…
- `ex-null-sequences-as-a-maximal-ideal` · example · ord 49 · page `ideals-and-quotient-rings-examples` · 'Null rational sequences form a maximal ideal in the ring of rational Cauchy sequences'
- `ex-one-over-n-null` · example · ord 7 · page `construction-of-r-via-cauchy-sequences` · The sequence $1/n$ is null
- `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set` · example · ord 160 · page `the-riemann-integral-examples` · For every $F_\sigma$ subset $E$ of $[0,1]$ of measure zero there is a bounded Riemann integrable fun…
- `fs-consecutive-differences-null-implies-cauchy` · false-statement · ord 114 · page `monotone-sequences-and-cauchy-completeness` · FALSE: if $|x_{k+1} - x_k| \to 0$ then $(x_k)$ is Cauchy
- `fs-null-implies-content-zero` · false-statement · ord 133 · page `cantor-set-baire-and-measure-zero` · FALSE: every set of measure zero has content zero
- `lem-compact-null-iff-content-zero-in-rn` · lemma · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · For compact subsets of $\mathbb{R}^m$, measure zero and content zero coincide
- `lem-content-zero-implies-null` · lemma · ord 133 · page `cantor-set-baire-and-measure-zero` · A set of content zero has measure zero
- `lem-countable-sets-are-null` · lemma · ord 133 · page `cantor-set-baire-and-measure-zero` · Every at most countable subset of $\mathbb{R}$ has measure zero
- `lem-geometric-sequence-null` · lemma · ord 114 · page `monotone-sequences-and-cauchy-completeness` · For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\inft…
- `lem-nondegenerate-interval-is-not-null` · lemma · ord 133 · page `cantor-set-baire-and-measure-zero` · A sequence of intervals covering $[a,b]$ has total length at least $b - a$, so no interval of positi…
- `lem-null-ideal` · lemma · ord 7 · page `construction-of-r-via-cauchy-sequences` · Null sequences form an ideal
- `lem-null-is-cauchy` · lemma · ord 7 · page `construction-of-r-via-cauchy-sequences` · Null sequences are Cauchy
- `lem-null-maximal` · lemma · ord 7 · page `construction-of-r-via-cauchy-sequences` · The null ideal is maximal
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions` · lemma · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Subsets and countable unions of null subsets of $\mathbb{R}^m$ are null
- `lem-null-times-bounded` · lemma · ord 112 · page `sequences-and-limits` · A null sequence times a bounded sequence is null
- `lem-power-over-geometric-null` · lemma · ord 122 · page `limsup-and-subsequential-limits` · For every $p > 0$ and every positive rational $\alpha$, $n^{\alpha}/(1+p)^n \to 0$
- `lem-reciprocal-of-null-diverges` · lemma · ord 112 · page `sequences-and-limits` · For positive terms, null and divergence to $+\infty$ are reciprocal
- `rem-cantor-function-increases-only-on-a-null-set` · remark · ord 151 · page `monotone-functions-and-discontinuities` · The Cantor function is continuous and nondecreasing, climbs from $0$ to $1$, and is constant on ever…
- `rem-null-set-not-discontinuity-set` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · A null set that is the discontinuity set of no function whatsoever
- `thm-compact-null-is-content-zero` · theorem · ord 133 · page `cantor-set-baire-and-measure-zero` · For a compact subset of $\mathbb{R}$, measure zero and content zero coincide
- `thm-countable-union-of-null-is-null` · theorem · ord 133 · page `cantor-set-baire-and-measure-zero` · A countable union of measure-zero sets has measure zero, by countable choice
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · A Lipschitz map $\mathbb{R}^m\to\mathbb{R}^m$ sends null sets to null sets

### `almost-everywhere` — **1 TAKEN**

- `cor-ftc-integral-function-differentiable-almost-everywhere` · corollary · ord 239 · page `the-fundamental-theorems-of-calculus` · Assuming Countable Choice, the integral function of a Riemann-integrable function is Lipschitz and d…

### `simple-function` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `monotone-convergence` — **2 TAKEN**

- `rem-monotone-convergence-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Monotone convergence theorem (Beppo Levi)
- `thm-monotone-convergence` · theorem · ord 114 · page `monotone-sequences-and-cauchy-completeness` · A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing s…

### `dominated-convergence` — **1 TAKEN**

- `rem-dominated-convergence-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Dominated convergence theorem

### `fatou` — **1 TAKEN**

- `rem-fatou-lemma` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Fatou's lemma

### `egorov` — **1 TAKEN**

- `rem-egorov-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Egorov's theorem

### `lusin` — **1 TAKEN**

- `rem-lusin-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lusin's theorem

### `vitali` — **3 TAKEN**

- `rem-mini-vitali-covering-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Mini-Vitali covering theorem
- `rem-vitali-covering-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Vitali covering theorem
- `rem-vitali-non-measurable-set` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · The Vitali set: a non-measurable subset of $\mathbb{R}$

### `radon` — **1 TAKEN**

- `rem-radon-nikodym-property` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · The Radon-Nikodym property

### `nikodym` — **1 TAKEN**

- `rem-radon-nikodym-property` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · The Radon-Nikodym property

### `fubini` — **8 TAKEN**

- `ex-fubini-computes-the-integral-of-x-exp-xy` · example · ord 238 · page `fubini-and-change-of-variables-examples` · 'Fubini computes $\int_0^1\int_{-1}^1 x\exp(xy)\,dx\,dy$ by reversing the order'
- `lem-finite-sum-reindexing-and-fubini` · lemma · ord 46 · page `rings-subrings-and-integral-domains` · Finite commutative-monoid sums are invariant under bijective reindexing, split over disjoint unions,…
- `rem-fubini-counting-measure-diagonal` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Failure of Tonelli without $\sigma$-finiteness: the diagonal under Lebesgue times counting measure
- `rem-fubini-tonelli` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Fubini-Tonelli theorem and the $\sigma$-finiteness hypothesis
- `thm-double-series-fubini` · theorem · ord 129 · page `absolute-convergence-and-rearrangement` · Fubini for double series: if $\sum_i \sum_j |a_{ij}|$ converges then both iterated sums and the sum …
- `thm-fubini-over-a-region-between-continuous-graphs` · theorem · ord 237 · page `fubini-and-change-of-variables` · A region between two continuous graphs is Jordan measurable, and a continuous integrand extending to…
- `thm-jordan-fubini-by-sections` · theorem · ord 237 · page `fubini-and-change-of-variables` · Fubini over a bounded Jordan set when all but a content-zero family of sections are integrable
- `thm-riemann-fubini-on-product-rectangles` · theorem · ord 237 · page `fubini-and-change-of-variables` · Riemann--Fubini on product rectangles, with lower and upper section integrals and content-zero excep…

### `tonelli` — **1 TAKEN**

- `rem-fubini-tonelli` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Fubini-Tonelli theorem and the $\sigma$-finiteness hypothesis

### `product-measure` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `signed-measure` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `hahn` — **4 TAKEN**

- `rem-hahn-banach-choice-strength` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · The set-theoretic cost of Hahn-Banach
- `rem-hahn-banach-discontinuous-additive-open` · remark · ord 5 · page `open-problems-and-research-frontier` · `proved_here: false` · Does Hahn-Banach yield a discontinuous additive $f : \mathbb{R} \to \mathbb{R}$? (open)
- `rem-hahn-banach-hamel-basis-open` · remark · ord 5 · page `open-problems-and-research-frontier` · `proved_here: false` · Does Hahn-Banach yield a Hamel basis for $\mathbb{R}$ over $\mathbb{Q}$? (open)
- `rem-hahn-banach-theorem` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · Hahn-Banach theorem (dominated extension of linear functionals)

### `jordan` — **30 TAKEN**  (31 raw substring matches; 30 are real token collisions, listed below)

- `cex-compact-set-without-jordan-content` · counterexample · ord 236 · page `the-riemann-integral-in-rn-and-jordan-content-examples` · The Smith–Volterra–Cantor slab $S\times[0,1]$ is compact and not Jordan measurable
- `cex-rational-points-in-unit-square-have-no-jordan-content` · counterexample · ord 236 · page `the-riemann-integral-in-rn-and-jordan-content-examples` · The rational points of $[0,1]^2$ form a bounded null set that is not Jordan measurable
- `cor-cavalieri-principle-for-jordan-content` · corollary · ord 237 · page `fubini-and-change-of-variables` · Cavalieri: Jordan content is the integral of sectional contents, and equal sections give equal conte…
- `cor-change-of-variables-on-bounded-open-jordan-sets` · corollary · ord 237 · page `fubini-and-change-of-variables` · Change of variables on bounded open Jordan sets when both integrands are bounded and Riemann integra…
- `cor-jordan-content-finite-additivity` · corollary · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Jordan content is finitely additive when the overlap has content zero
- `cor-jordan-content-under-a-c-one-diffeomorphism` · corollary · ord 237 · page `fubini-and-change-of-variables` · The content of a compact Jordan image is the integral of the absolute Jacobian determinant
- `def-jordan-inner-and-outer-content` · definition · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · Jordan inner and outer content and Jordan measurable bounded sets in $\mathbb{R}^m$
- `def-riemann-integral-over-a-jordan-set` · definition · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · The Riemann integral of a bounded function over a bounded Jordan measurable set
- `ex-cavalieri-shear-preserves-jordan-content` · example · ord 238 · page `fubini-and-change-of-variables-examples` · A coordinate shear preserves Jordan content by translating every section
- `ex-triangle-has-jordan-content-one-half` · example · ord 236 · page `the-riemann-integral-in-rn-and-jordan-content-examples` · The right triangle $\{(x,y)\in[0,1]^2:x+y\leq1\}$ has Jordan content $1/2$
- `lem-bounded-open-jordan-sets-have-compact-grid-exhaustions` · lemma · ord 237 · page `fubini-and-change-of-variables` · A bounded open Jordan set has an increasing exhaustion by compact finite unions of grid rectangles w…
- `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set` · lemma · ord 237 · page `fubini-and-change-of-variables` · A compact subset of an open Euclidean set has a compact Jordan neighborhood inside that open set
- `lem-finite-jordan-cover-sum-bounds` · lemma · ord 237 · page `fubini-and-change-of-variables` · Finite Jordan covers bound upper integrals, while interior-disjoint Jordan subfamilies bound lower i…
- `lem-jordan-set-integral-well-defined` · lemma · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · The Riemann integral over a Jordan set is independent of the bounding rectangle
- `lem-product-lower-bound-for-jordan-content` · lemma · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · If every finite interval cover of $A\subseteq\mathbb{R}$ has total length at least $c$, then every r…
- `lem-variation-function-and-jordan-identities` · lemma · ord 163 · page `bounded-variation-and-riemann-stieltjes` · The positive and negative variations are nondecreasing and give the Jordan identities
- `rem-greens-theorem-jordan-domain-limitation` · remark · ord 241 · page `line-integrals-and-the-gradient-theorem` · Limitation: arbitrary Jordan domains are not covered by the elementary Green theorem
- `rem-jordan-curve-theorem` · remark · **draft** · ord 4 · page `deferred-algebraic-topology` · `proved_here: false` · The Jordan curve theorem
- `rem-jordan-rectifiable-terminology` · remark · ord 236 · page `the-riemann-integral-in-rn-and-jordan-content-examples` · The term “rectifiable” for Jordan measurable sets is unrelated to rectifiable curves
- `thm-change-of-variables-for-compact-jordan-sets` · theorem · ord 237 · page `fubini-and-change-of-variables` · Change of variables for an injective $C^1$ map on a compact Jordan set
- `thm-continuous-functions-on-compact-jordan-sets-are-integrable` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · A continuous real function on a compact Jordan measurable set is Riemann integrable over that set
- `thm-gauss-jordan-elimination-produces-reduced-row-echelon-form` · theorem · ord 80 · page `gaussian-elimination-and-row-reduction` · Gauss–Jordan elimination reduces every finite matrix over a field to reduced row echelon form
- `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan` · theorem · ord 237 · page `fubini-and-change-of-variables` · An injective $C^1$ map with invertible derivative sends compact Jordan sets to compact Jordan sets
- `thm-jordan-boundary-criterion` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · A bounded set in $\mathbb{R}^m$ is Jordan measurable iff its boundary is null, equivalently of conte…
- `thm-jordan-content-and-indicator-integrability` · theorem · ord 235 · page `the-riemann-integral-in-rn-and-jordan-content` · A bounded set is Jordan measurable iff its indicator is Riemann integrable, and the integral is its …
- `thm-jordan-decomposition-for-bv-functions` · theorem · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Jordan decomposition for functions of bounded variation
- `thm-jordan-fubini-by-sections` · theorem · ord 237 · page `fubini-and-change-of-variables` · Fubini over a bounded Jordan set when all but a content-zero family of sections are integrable
- `thm-jordan-holder-theorem-for-groups` · theorem · ord 66 · page `composition-series-and-solvable-groups` · The Jordan–Hölder theorem for groups
- `thm-linear-images-scale-jordan-content-by-absolute-determinant` · theorem · ord 237 · page `fubini-and-change-of-variables` · 'A linear endomorphism of $\mathbb R^n$ sends bounded Jordan sets to bounded Jordan sets and scales …
- `thm-polygonal-jordan-curve` · theorem · ord 357 · page `plane-graphs-euler-and-the-five-colour-theorem` · Polygonal Jordan curve theorem: a polygon has exactly two complementary regions and is the frontier …

### `total-variation` — **3 TAKEN**

- `def-bounded-variation-and-total-variation` · definition · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Bounded variation and total variation on an interval
- `lem-basic-properties-of-total-variation` · lemma · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Total variation bounds increments; bounded-variation functions are bounded; zero variation means con…
- `lem-total-variation-seminorm-laws` · lemma · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Homogeneity and subadditivity of total variation

### `absolutely-continuous` — **5 TAKEN**

- `def-absolutely-continuous-function` · definition · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Absolute continuity on a compact interval
- `ex-cantor-function-bv-not-absolutely-continuous` · example · ord 164 · page `bounded-variation-and-riemann-stieltjes-examples` · The Cantor function is continuous and of bounded variation but not absolutely continuous
- `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous` · example · ord 182 · page `arc-length-and-rectifiable-curves-examples` · The graph path $t\mapsto(t,c(t))$ of the Cantor function is rectifiable although its second coordina…
- `rem-absolutely-continuous-function` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Absolutely continuous functions
- `rem-ftc-absolutely-continuous` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · The sharp fundamental theorem of calculus (absolute continuity)

### `maximal-function` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `differentiation` — **4 TAKEN**

- `rem-lebesgue-differentiation-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue differentiation theorem for $L^1$ functions
- `rem-lebesgue-monotone-differentiation` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Lebesgue's differentiation theorem for monotone functions
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` · theorem · ord 239 · page `the-fundamental-theorems-of-calculus` · Leibniz's rule on a compact rectangle: an interior parameter derivative with a continuous extension …
- `thm-termwise-differentiation-of-a-real-power-series` · theorem · ord 173 · page `power-series-and-real-analytic-functions` · Inside its radius a real power series may be differentiated term by term, and the differentiated ser…

### `l-p` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token (the substring appears incidentally inside 100 unrelated ids).

### `lp-space` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `holder` — **8 TAKEN**

- `def-lipschitz-holder-contraction` · definition · ord 118 · page `completeness-and-uniform-continuity` · Lipschitz map, $\alpha$-Hölder map for rational $0 < \alpha \le 1$, and contraction
- `ex-square-root-is-half-holder` · example · ord 119 · page `completeness-and-uniform-continuity-examples` · $\sqrt{\cdot}$ on $[0,\infty)$ is uniformly continuous and exactly $1/2$-Hölder, and is not Lipschit…
- `ex-x-to-the-beta-separates-the-holder-classes` · example · ord 138 · page `continuity-ivt-evt-and-uniform-continuity-examples` · On $[0,1]$ the function $x^{\beta}$ is $\beta$-Hölder and is $\alpha$-Hölder for no rational $\alpha…
- `rem-holder-minkowski-integral` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Holder and Minkowski inequalities in integral form
- `thm-holder-exponent-above-one-forces-constancy` · theorem · ord 137 · page `continuity-ivt-evt-and-uniform-continuity` · If $|f(x) - f(y)| \le C|x-y|^{\alpha}$ on an interval for some rational $\alpha > 1$ then $f$ is con…
- `thm-holder-finite` · theorem · ord 16 · page `roots-and-rational-powers` · Hölder's inequality for finite sums (rational exponents)
- `thm-holder-finite-real-exponents` · theorem · ord 177 · page `the-logarithm-and-general-powers` · Holder's inequality for finite sums and conjugate real exponents
- `thm-jordan-holder-theorem-for-groups` · theorem · ord 66 · page `composition-series-and-solvable-groups` · The Jordan–Hölder theorem for groups

### `minkowski` — **3 TAKEN**

- `rem-holder-minkowski-integral` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Holder and Minkowski inequalities in integral form
- `thm-minkowski-finite` · theorem · ord 16 · page `roots-and-rational-powers` · Minkowski's inequality for finite sums (rational exponent)
- `thm-minkowski-finite-real-exponents` · theorem · ord 177 · page `the-logarithm-and-general-powers` · Minkowski's inequality for finite sums and real exponent p greater than one

### `riesz` — **3 TAKEN**

- `rem-riesz-fischer` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Riesz-Fischer theorem: completeness of $L^p$
- `rem-riesz-markov-kakutani` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Riesz-Markov-Kakutani representation theorem
- `rem-riesz-representation-hilbert` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · Riesz representation theorem for Hilbert space

### `fischer` — **1 TAKEN**

- `rem-riesz-fischer` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Riesz-Fischer theorem: completeness of $L^p$

### `completeness` — **12 TAKEN**

- `cex-completeness-is-not-topological` · counterexample · ord 119 · page `completeness-and-uniform-continuity-examples` · On the positive integers the metrics $|m-n|$ and $|1/m - 1/n|$ both induce the discrete topology, an…
- `cor-completeness-and-cocompleteness-criteria` · corollary · ord 363 · page `limits-and-colimits` · A category is complete exactly when it has all small products and equalizers, and cocomplete exactly…
- `cor-functor-categories-inherit-completeness-and-cocompleteness` · corollary · ord 363 · page `limits-and-colimits` · If A is small, then [A,C] is complete or cocomplete whenever C is respectively complete or cocomplet…
- `def-completeness-properties` · definition · ord 125 · page `equivalent-forms-of-completeness` · The five completeness properties of an ordered field: least upper bound, monotone convergence, neste…
- `def-small-finite-and-large-limits-completeness-and-cocompleteness` · definition · ord 363 · page `limits-and-colimits` · Finite, small, and large limits and colimits; complete and cocomplete categories
- `fs-closed-bounded-compact-without-completeness` · false-statement · ord 131 · page `topology-of-r` · FALSE: in every ordered field a closed bounded set is compact, so Heine-Borel needs no completeness
- `fs-completeness-is-a-topological-property` · false-statement · ord 118 · page `completeness-and-uniform-continuity` · FALSE: completeness of a metric space is determined by its topology
- `prop-completeness-and-cocompleteness-in-poset-categories` · proposition · ord 363 · page `limits-and-colimits` · A poset category is complete exactly when every small family has an infimum, and cocomplete exactly …
- `rem-completeness-routes` · remark · ord 114 · page `monotone-sequences-and-cauchy-completeness` · Two independent proofs that $\mathbb{R}$ is Cauchy complete, and why the library records both
- `thm-completeness-equivalences` · theorem · ord 125 · page `equivalent-forms-of-completeness` · For an ordered field the five completeness properties are equivalent, provided the Archimedean prope…
- `thm-componentwise-convergence-and-completeness` · theorem · ord 167 · page `rn-as-a-normed-space` · For $n \ge 1$ a sequence in $\mathbb{R}^n$ converges iff each coordinate sequence converges, is Cauc…
- `thm-x-adic-completeness-and-polynomial-density` · theorem · ord 193 · page `formal-power-series` · $R\llbracket x\rrbracket$ is complete in the $x$-adic topology and $R[x]$ is dense by truncation

### `separable` — **10 TAKEN**  (11 raw substring matches; 10 are real token collisions, listed below)

- `cor-irreducible-polynomial-is-separable-iff-derivative-nonzero` · corollary · ord 52 · page `polynomial-rings-and-roots` · 'An irreducible polynomial over a field is separable exactly when its derivative is nonzero'
- `def-repeated-root-and-separable-polynomial` · definition · ord 52 · page `polynomial-rings-and-roots` · 'Repeated roots in extension fields and separable polynomials'
- `def-separable-space` · definition · ord 273 · page `countability-axioms-and-cardinal-functions` · Separability: the existence of an at most countable dense subset
- `fs-ccc-spaces-are-separable` · false-statement · ord 273 · page `countability-axioms-and-cardinal-functions` · Assuming choice, refuted: every ccc space is separable
- `fs-separable-spaces-are-second-countable` · false-statement · ord 273 · page `countability-axioms-and-cardinal-functions` · Refuted: every separable space is second countable
- `lem-large-cantor-cubes-are-not-separable` · lemma · ord 273 · page `countability-axioms-and-cardinal-functions` · Under choice, if $|I|>2^{\aleph_0}$, then the Cantor cube $2^I$ is not separable
- `prop-separable-spaces-are-ccc` · proposition · ord 273 · page `countability-axioms-and-cardinal-functions` · Every separable space satisfies the countable chain condition
- `rem-separable-hilbert-isometric-l2` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · Every separable infinite-dimensional Hilbert space is isometrically isomorphic to $\ell^2$
- `thm-polynomial-is-separable-iff-coprime-to-its-derivative` · theorem · ord 52 · page `polynomial-rings-and-roots` · 'A nonzero polynomial over a field is separable exactly when its gcd with its derivative is $1$'
- `thm-second-countable-implies-separable` · theorem · ord 273 · page `countability-axioms-and-cardinal-functions` · Assuming countable choice, every second countable space is separable

### `duality` — **4 TAKEN**

- `lem-flow-cut-identity-and-weak-duality` · lemma · ord 213 · page `matchings-covers-menger-and-network-flows` · A flow's value is its net flow across every source-sink cut and never exceeds the cut capacity
- `prop-limit-colimit-duality` · proposition · ord 363 · page `limits-and-colimits` · A limiting cone for a diagram is exactly a colimiting cocone for the formally dual diagram in the op…
- `rem-stone-duality` · remark · **draft** · ord 2 · page `deferred-functional-analysis` · `proved_here: false` · Stone duality for Boolean algebras
- `thm-category-theoretic-duality-principle` · theorem · ord 359 · page `categories-functors-and-natural-transformations` · Every theorem about categories has a formal dual obtained by reversing morphisms and composition

### `ergodic` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `birkhoff` — **1 TAKEN**

- `thm-birkhoff-representation-finite-distributive-lattices` · theorem · ord 191 · page `chains-antichains-sperner-and-dilworth` · Birkhoff representation theorem: every finite distributive lattice is isomorphic to the lattice of o…

### `recurrence` — **2 TAKEN**  (3 raw substring matches; 2 are real token collisions, listed below)

- `lem-poset-mobius-recurrence` · lemma · ord 203 · page `incidence-algebras-and-mobius-inversion` · The Möbius recurrence: $\mu_P(x,x)=1$ and both interval sums of $\mu_P$ vanish when $x<y$
- `lem-wallis-integrals-recurrence-and-squeeze` · lemma · ord 183 · page `pi-the-equivalent-characterizations` · Wallis integrals satisfy the two-step recurrence, closed forms, and the adjacent-integral squeeze

### `measure-preserving` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `invariant` — **13 TAKEN**  (16 raw substring matches; 13 are real token collisions, listed below)

- `cor-determinant-is-invariant-under-similarity` · corollary · ord 82 · page `determinants-of-matrices-over-a-commutative-ring` · Similar matrices over a commutative ring have the same determinant
- `cor-finite-abelian-group-cyclic-iff-one-invariant-factor` · corollary · ord 40 · page `the-structure-of-finite-abelian-groups` · A nontrivial finite abelian group is cyclic if and only if it has one invariant factor
- `cor-order-and-exponent-from-invariant-factors` · corollary · ord 40 · page `the-structure-of-finite-abelian-groups` · Invariant factors determine the order and exponent of a finite abelian group
- `cor-trace-is-invariant-under-similarity` · corollary · ord 78 · page `matrices-and-the-matrix-of-a-linear-map` · 'Similar matrices have the same trace'
- `def-invariant-basis-number-and-rank-of-a-free-module` · definition · ord 104 · page `free-modules-and-exact-sequences` · Invariant basis number and the rank of a free module
- `def-invariant-factor-data-for-a-finite-abelian-group` · definition · ord 40 · page `the-structure-of-finite-abelian-groups` · Invariant-factor data for a finite abelian group
- `ex-z-six-in-elementary-divisor-and-invariant-factor-forms` · example · ord 41 · page `the-structure-of-finite-abelian-groups-examples` · The cyclic group of order six in elementary-divisor and invariant-factor forms
- `fs-vector-line-integrals-are-invariant-under-reversal` · false-statement · ord 242 · page `line-integrals-and-the-gradient-theorem-examples` · False: vector line integrals are invariant under reversing a path
- `lem-elementary-divisors-regroup-into-invariant-factors` · lemma · ord 40 · page `the-structure-of-finite-abelian-groups` · Elementary divisors regroup uniquely into invariant factors
- `thm-arc-length-is-invariant-under-monotone-reparametrization` · theorem · ord 181 · page `arc-length-and-rectifiable-curves` · Arc length is invariant under every continuous surjective monotone reparametrization, including paus…
- `thm-characteristic-polynomial-is-similarity-invariant` · theorem · ord 86 · page `eigenvalues-eigenvectors-and-the-characteristic-polynomial` · 'Similar matrices have the same characteristic polynomial'
- `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form` · theorem · ord 40 · page `the-structure-of-finite-abelian-groups` · Fundamental theorem of finite abelian groups: invariant-factor form
- `thm-nonzero-commutative-rings-have-invariant-basis-number` · theorem · ord 104 · page `free-modules-and-exact-sequences` · Every nonzero commutative ring has invariant basis number for finite bases

### `banach-zarecki` — **1 TAKEN**

- `rem-banach-zarecki` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Banach-Zarecki theorem

### `luzin` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `caratheodory` — **1 TAKEN**

- `thm-caratheodory-characterisation` · theorem · ord 153 · page `the-derivative-and-mean-value-theorems` · Carathéodory's characterisation: $f$ is differentiable at $c$ if and only if there is $\varphi : A \…

### `premeasure` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `extension-theorem` — **1 TAKEN**

- `thm-tietze-extension-theorem` · theorem · ord 267 · page `urysohn-lemma-and-tietze` · Tietze's extension theorem, under dependent choice: a continuous map from a closed subspace of a nor…

### `regular` — **32 TAKEN**  (42 raw substring matches; 32 are real token collisions, listed below)

- `cex-lagrange-multiplier-rule-needs-a-regular-constraint` · counterexample · ord 232 · page `mixed-partials-taylor-and-extrema-examples` · The degenerate constraint $x^2+y^2=0$ defeats the multiplier conclusion
- `cex-regular-graphs-are-not-hereditary` · counterexample · ord 394 · page `induced-subgraphs-and-hereditary-graph-classes-examples` · The class of regular graphs is not hereditary
- `cex-t1-free-regular-and-normal-conventions` · counterexample · ord 266 · page `hereditary-and-productive-separation-examples` · Regular and normal do not imply $T_1$ under the library's conventions
- `cor-cesaro-matrix-is-regular` · corollary · ord 125 · page `equivalent-forms-of-completeness` · The Cesaro matrix satisfies the Silverman-Toeplitz conditions, giving a second proof of the Cesaro m…
- `cor-regular-c1-paths-have-c1-unit-speed-parametrizations` · corollary · ord 181 · page `arc-length-and-rectifiable-curves` · A regular $C^1$ path has a $C^1$ arc-length reparametrization with derivative of Euclidean norm one
- `cor-topological-groups-are-completely-regular` · corollary · ord 279 · page `uniform-spaces` · Every topological group is uniformizable, and assuming dependent choice it is completely regular
- `def-completely-regular-and-tychonoff-spaces` · definition · ord 261 · page `separation-axioms` · Completely regular spaces and Tychonoff ($T_{3\frac{1}{2}}$) spaces
- `def-regular-and-t3-spaces` · definition · ord 261 · page `separation-axioms` · Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$…
- `ex-ideals-as-submodules-of-the-regular-module` · example · ord 103 · page `modules-and-module-homomorphisms-examples` · Left ideals are exactly the submodules of the regular left module $_RR$
- `ex-left-regular-action-is-free-and-transitive` · example · ord 43 · page `group-actions-and-cayleys-theorem-examples` · Left multiplication gives a free and transitive action of every group on itself
- `ex-lower-limit-line-is-regular-and-not-metrizable` · example · ord 276 · page `metrization-theorems-examples` · Under choice, the lower-limit line is regular and separable but not second countable and therefore n…
- `ex-sierpinski-space-is-normal-and-not-completely-regular` · example · ord 268 · page `urysohn-lemma-and-tietze-examples` · Sierpinski space is normal and not completely regular, so the $T_1$ hypothesis in the Urysohn coroll…
- `ex-sierpinski-space-is-t0-normal-and-not-regular` · example · ord 262 · page `separation-axioms-examples` · Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies …
- `fs-every-aleph-is-regular` · false-statement · ord 247 · page `cardinal-arithmetic-and-cofinality` · FALSE: $\aleph_\alpha$ is regular for every ordinal $\alpha$
- `fs-every-hausdorff-space-is-regular` · false-statement · ord 261 · page `separation-axioms` · FALSE: every Hausdorff space is regular
- `fs-every-normal-space-is-completely-regular` · false-statement · ord 267 · page `urysohn-lemma-and-tietze` · FALSE: Every normal space is completely regular
- `fs-every-regular-space-is-metrizable` · false-statement · ord 276 · page `metrization-theorems-examples` · FALSE: every regular space is metrizable
- `fs-every-regular-space-is-normal` · false-statement · ord 265 · page `hereditary-and-productive-separation` · Assuming countable choice, refuted: every regular space is normal
- `lem-completely-regular-topologies-come-from-continuous-pseudometrics` · lemma · ord 279 · page `uniform-spaces` · The topology of a nonempty completely regular space is induced by the gauge of its continuous $[0,1]…
- `lem-deleted-tychonoff-plank-is-regular-and-nonnormal` · lemma · ord 265 · page `hereditary-and-productive-separation` · Assuming countable choice, the deleted Tychonoff plank is a regular nonnormal open subspace of a com…
- `lem-lower-limit-line-is-regular-and-lindelof` · lemma · ord 265 · page `hereditary-and-productive-separation` · The lower-limit line has a clopen basis, is regular, and is Lindelöf under countable choice
- `lem-paracompact-hausdorff-is-regular` · lemma · ord 269 · page `partitions-of-unity-and-paracompactness` · Every paracompact Hausdorff space is regular
- `lem-regular-lindelof-spaces-are-normal` · lemma · ord 265 · page `hereditary-and-productive-separation` · Every regular Lindelöf space is normal
- `lem-regular-lindelof-spaces-are-paracompact` · lemma · ord 269 · page `partitions-of-unity-and-paracompactness` · Under countable choice, every regular Lindelöf space is paracompact
- `lem-the-k-topology-is-hausdorff-and-not-regular` · lemma · ord 261 · page `separation-axioms` · The $K$-topology on $\mathbb{R}$, generated by the open intervals together with their complements of…
- `lem-uniformizable-spaces-are-completely-regular` · lemma · ord 279 · page `uniform-spaces` · Assuming dependent choice, every uniformizable space is completely regular
- `lem-uniformizable-spaces-are-regular` · lemma · ord 279 · page `uniform-spaces` · Every uniformizable space is regular
- `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` · lemma · ord 261 · page `separation-axioms` · Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular …
- `thm-a-compact-hausdorff-space-is-regular-and-normal` · theorem · ord 263 · page `hausdorff-via-the-diagonal` · A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$
- `thm-a-locally-compact-hausdorff-space-is-completely-regular` · theorem · ord 267 · page `urysohn-lemma-and-tietze` · Under dependent choice a locally compact Hausdorff space is completely regular, hence Tychonoff
- `thm-completely-regular-implies-regular` · theorem · ord 261 · page `separation-axioms` · Every completely regular space is regular, and every Tychonoff space is $T_3$
- `thm-uniformizable-iff-completely-regular` · theorem · ord 279 · page `uniform-spaces` · Assuming dependent choice, a nonempty topological space is uniformizable if and only if it is comple…

### `tight` — **1 TAKEN**

- `lem-no-augmenting-path-gives-tight-cut` · lemma · ord 213 · page `matchings-covers-menger-and-network-flows` · If the residual network has no source-sink path, its reachable set gives a cut whose capacity equals…

### `convergence-in-measure` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `essential-supremum` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `conjugate-exponent` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `young` — **6 TAKEN**

- `ex-young-integral-beyond-bounded-variation` · example · ord 164 · page `bounded-variation-and-riemann-stieltjes-examples` · Young's theorem integrates a Hölder function of unbounded variation against itself
- `lem-young-partition-sum-estimate-rational` · lemma · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Young's partition estimate for rational Hölder exponents
- `thm-young-inequality` · theorem · ord 16 · page `roots-and-rational-powers` · Young's inequality for products (rational conjugate exponents)
- `thm-young-inequality-real-exponents` · theorem · ord 177 · page `the-logarithm-and-general-powers` · Young's inequality for conjugate real exponents
- `thm-young-mixed-partial-theorem` · theorem · ord 231 · page `mixed-partials-taylor-and-extrema` · Young's theorem: total differentiability of the first partials forces equality of mixed partials
- `thm-young-riemann-stieltjes-existence-rational` · theorem · ord 163 · page `bounded-variation-and-riemann-stieltjes` · Young's Riemann–Stieltjes existence theorem for rational Hölder exponents

### `jensen` — **2 TAKEN**

- `ex-finite-jensen-gives-the-mean-square-inequality` · example · ord 158 · page `convexity-examples` · Finite Jensen for $x\mapsto x^2$ gives that the square of a weighted mean is at most the weighted me…
- `thm-finite-jensen-inequality` · theorem · ord 157 · page `convexity` · Finite Jensen inequality for a convex function and nonnegative weights summing to one

### `convex` — **21 TAKEN**  (27 raw substring matches; 21 are real token collisions, listed below)

- `cex-discontinuous-midpoint-convex-hamel-function` · counterexample · ord 158 · page `convexity-examples` · Assuming Choice, a Hamel coefficient map is midpoint convex but discontinuous and therefore not conv…
- `cor-convex-differentiable-functions-have-continuous-derivatives` · corollary · ord 157 · page `convexity` · A differentiable convex function on an open interval has a continuous derivative
- `cor-convex-subsets-of-rn-are-contractible` · corollary · ord 289 · page `homotopy-and-homotopy-equivalence` · Every nonempty convex subset of $\mathbb{R}^n$ is contractible
- `cor-local-minima-of-convex-functions-are-global` · corollary · ord 157 · page `convexity` · Every local minimum of a convex function on an interval is a global minimum
- `cor-strictly-convex-functions-have-at-most-one-minimizer` · corollary · ord 157 · page `convexity` · A strictly convex function has at most one global minimizer
- `cor-zero-total-derivative-on-a-convex-open-set-is-constant` · corollary · ord 229 · page `the-total-derivative` · A totally differentiable map with zero derivative on a convex open set is constant
- `def-convex-concave-and-midpoint-convex-functions` · definition · ord 157 · page `convexity` · Convex, strictly convex, concave, strictly concave, and midpoint-convex real functions on an interva…
- `def-convex-subset-of-euclidean-space` · definition · ord 229 · page `the-total-derivative` · A convex subset of $\mathbb{R}^m$ contains every line segment between two of its points
- `ex-absolute-value-is-convex` · example · ord 158 · page `convexity-examples` · The absolute-value function is convex
- `ex-convex-subsets-of-rn-are-path-connected` · example · ord 254 · page `connectedness-examples` · Every convex subset of $\mathbb{R}^n$, in particular every ball and $\mathbb{R}^n$ itself, is path-c…
- `ex-infinite-convex-or-concave-subsequence-by-ramsey` · example · ord 218 · page `ramsey-theory-examples` · Infinite Ramsey for triples gives a convex or concave subsequence of every real sequence in general …
- `ex-path-homotopy-through-straight-segments-in-a-convex-set` · example · ord 290 · page `homotopy-and-homotopy-equivalence-examples` · Two paths with the same endpoints in a convex subset of $\mathbb{R}^n$ are path homotopic relative t…
- `lem-three-slope-inequality-for-convex-functions` · lemma · ord 157 · page `convexity` · For a convex function and $x<y<z$, the three secant slopes satisfy $s(x,y)\le s(x,z)\le s(y,z)$
- `thm-continuous-midpoint-convex-functions-are-convex` · theorem · ord 157 · page `convexity` · A continuous midpoint-convex function on an interval is convex
- `thm-convex-functions-are-differentiable-off-a-countable-set` · theorem · ord 157 · page `convexity` · A convex function on an open interval is differentiable except at at most countably many points
- `thm-convex-functions-are-locally-lipschitz-and-continuous` · theorem · ord 157 · page `convexity` · A convex real function is Lipschitz on every closed bounded subinterval of the interior of its domai…
- `thm-convex-subsets-have-trivial-fundamental-group` · theorem · ord 291 · page `the-fundamental-group` · Every nonempty convex subset of $\mathbb R^n$ is simply connected
- `thm-differentiable-convex-functions-and-monotone-derivatives` · theorem · ord 157 · page `convexity` · A differentiable function on an open interval is convex if and only if its derivative is nondecreasi…
- `thm-one-sided-derivatives-of-convex-functions` · theorem · ord 157 · page `convexity` · A convex function on an open interval has finite left and right derivatives everywhere, with $f'_-(u…
- `thm-supporting-lines-for-convex-functions` · theorem · ord 157 · page `convexity` · Every slope between the left and right derivatives of a convex function gives a supporting line
- `thm-two-maps-into-a-convex-set-are-homotopic` · theorem · ord 289 · page `homotopy-and-homotopy-equivalence` · Any two continuous maps into a nonempty convex subset of $\mathbb{R}^n$ are homotopic by straight li…

### `rising-sun` — **FREE as an id token** — 0 ids contain it as a hyphen-delimited token.

### `covering` — **5 TAKEN**  (6 raw substring matches; 5 are real token collisions, listed below)

- `def-vertex-and-edge-covers-and-covering-numbers` · definition · ord 213 · page `matchings-covers-menger-and-network-flows` · Vertex covers, edge covers and the covering numbers $\tau(G)$ and $\rho(G)$
- `rem-covering-spaces-and-universal-cover` · remark · **draft** · ord 4 · page `deferred-algebraic-topology` · `proved_here: false` · Covering spaces and the universal cover
- `rem-exponential-sequence-as-covering` · remark · **draft** · ord 4 · page `deferred-algebraic-topology` · `proved_here: false` · The exact sequence $0 \to \mathbb{Z} \to \mathbb{R} \to \mathbb{T} \to 0$ read as a covering
- `rem-mini-vitali-covering-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Mini-Vitali covering theorem
- `rem-vitali-covering-theorem` · remark · ord 1 · page `deferred-measure-and-integration` · `proved_here: false` · Vitali covering theorem

### `density` — **12 TAKEN**

- `cor-bipartite-extremal-density-zero` · corollary · ord 219 · page `extremal-graph-theory` · Every bipartite graph with at least one edge has Turán density zero
- `cor-chromatic-number-extremal-density` · corollary · ord 219 · page `extremal-graph-theory` · The asymptotic extremal density is determined exactly by chromatic number: $\pi(H)=1-1/(\chi(H)-1)$
- `def-asymptotic-extremal-notation-and-edge-density` · definition · ord 219 · page `extremal-graph-theory` · Edge density and the asymptotic notations $O$, $o$, $\Omega$, and $\Theta$ for extremal functions
- `def-weight-density-and-character` · definition · ord 273 · page `countability-axioms-and-cardinal-functions` · Under choice, weight $w(X)$, density $d(X)$, local character $\chi(x,X)$, and character $\chi(X)$ as…
- `ex-odd-cycle-extremal-density` · example · ord 220 · page `extremal-graph-theory-examples` · Every odd cycle $C_{2k+1}$ has Turán density $1/2$
- `ex-petersen-extremal-density` · example · ord 220 · page `extremal-graph-theory-examples` · The Petersen graph has chromatic number $3$, so its Turán density is $1/2$
- `lem-density-is-well-defined` · lemma · ord 273 · page `countability-axioms-and-cardinal-functions` · Under choice, $d(X)$ is a well-defined cardinal
- `lem-jones-normal-density-discrete-bound` · lemma · ord 265 · page `hereditary-and-productive-separation` · Jones's bound: under choice, a closed discrete subspace of a normal space cannot have more subsets t…
- `prop-continuous-image-density-and-lindelof-degree` · proposition · ord 273 · page `countability-axioms-and-cardinal-functions` · Under choice, a continuous surjection does not increase density or Lindelöf degree
- `thm-metric-weight-equals-density` · theorem · ord 273 · page `countability-axioms-and-cardinal-functions` · Under choice, every metrizable space has $w(X)=d(X)$
- `thm-turan-density-exists` · theorem · ord 219 · page `extremal-graph-theory` · Every finite graph with an edge has a Turán density $\pi(H)=\lim_{n\to\infty}\operatorname{ex}(n,H)/…
- `thm-x-adic-completeness-and-polynomial-density` · theorem · ord 193 · page `formal-power-series` · $R\llbracket x\rrbracket$ is complete in the $x$-adic topology and $R[x]$ is dense by truncation

---

**Names entirely free as id tokens:** `sigma-algebra`, `outer-measure`, `simple-function`, `product-measure`, `signed-measure`, `maximal-function`, `l-p`, `lp-space`, `ergodic`, `measure-preserving`, `luzin`, `premeasure`, `convergence-in-measure`, `essential-supremum`, `conjugate-exponent`, `rising-sun`.

---

## Part 4 — house style

### 4.1 The approved exemplar — `items/lem-cauchy-bounded.md`, verbatim

```markdown
---
id: lem-cauchy-bounded
kind: lemma
title: "Every Cauchy sequence of rationals is bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-cauchy-sequence, lem-rat-triangle]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Statement

Every Cauchy sequence $(a_n)_{n \ge 1}$ of rational numbers
([[def-rational-cauchy-sequence]]) is bounded: there exists a rational
$M \ge 0$ such that $|a_n| \le M$ for all $n \ge 1$.

## Facts & Assumptions

**Given:** A Cauchy sequence $(a_n)_{n \ge 1}$ of rational numbers.

[A1] For every rational $\varepsilon > 0$ there exists $N \in \mathbb{N}$ with $|a_m - a_n| < \varepsilon$ for all $m, n \ge N$.

[L1] Triangle inequality on $\mathbb{Q}$: $|x| \le |x - y| + |y|$ ([[lem-rat-triangle]]).

## Proof

**Proof technique:** direct.

1.1 Apply [A1] with $\varepsilon = 1$: fix $N \in \mathbb{N}$ such that $|a_m - a_n| < 1$ for all $m, n \ge N$. [A1]

1.2 For every $n \ge N$: $|a_n| \le |a_n - a_N| + |a_N|$. [L1]

2.1 For every $n \ge N$: $|a_n| < |a_N| + 1$. [step 1.1, step 1.2, algebra]

2.2 Define $M = \max\{|a_1|, |a_2|, \dots, |a_{N-1}|, |a_N| + 1\}$, a maximum of finitely many rationals, hence rational and $\ge 0$. [step 1.1, choose]

3.1 For every $n < N$: $|a_n| \le M$, since $|a_n|$ appears in the maximum. [step 2.2, algebra]

3.2 For every $n \ge N$: $|a_n| < |a_N| + 1 \le M$. [step 2.1, step 2.2, algebra]

4.1 For every $n \ge 1$: $|a_n| \le M$, so $(a_n)$ is bounded. [step 3.1, step 3.2] ∎
```

Note the shape: `## Statement` → `## Facts & Assumptions` (a **Given:** line,
then `[A#]` assumptions and `[L#]` cited lemmas, each *stating the cited
proposition itself*) → `## Proof` with a **Proof technique:** line and
strictly stratified numbered steps, each carrying a bracketed justification list
drawn from `[A#]`/`[L#]`/`step x.y`/`algebra`/`choose`, closing with `∎`.

### 4.2 A `def-` item from the topology band — `items/def-baire-space.md`, verbatim

```markdown
---
id: def-baire-space
kind: definition
title: "Baire space: a topological space in which every countable intersection of dense open subsets is dense"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-dense-top, def-sequence-convergence-top, def-interior-closure-boundary-top, def-natural-numbers]
justified_by: []
aliases: []
external_refs: [rem-baire-category-choice-strength]
landmark: true
short: "Baire space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Baire space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_space"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is a **Baire
space** when

> for every sequence $(U_n)_{n \in \mathbb{N}}$ of subsets of $X$ that are open
> and dense in $X$ ([[def-dense-top]], [[def-sequence-convergence-top]],
> [[def-natural-numbers]]), the intersection $\bigcap_{n \in \mathbb{N}} U_n$ is
> dense in $X$.

As everywhere in this library $\mathbb{N}$ contains $0$, so the sequence starts
at $U_0$ and an index range copied from a text that starts at $1$ must be shifted
before it is used here.

**The condition unwound.** Denseness of $A \subseteq X$ says $\overline{A} = X$
([[def-interior-closure-boundary-top]]), equivalently that $A$ meets every
nonempty open subset of $X$ ([[def-dense-top]]). So the Baire condition reads:

> for every sequence $(U_n)$ of dense open sets and every nonempty open
> $W \subseteq X$ there is a point of $W$ lying in every $U_n$.

That is the form every proof below uses, and it is the form in which the
condition is checked: one produces a single point, in a given nonempty open set,
belonging to all of the $U_n$ at once.

**The intersection itself need not be open.** Nothing in the definition asserts
that $\bigcap_n U_n$ is open, and in general it is not; what is asserted is only
that it is dense. A finite intersection of dense open sets is dense and open, and
that much holds in every space; the content of the definition is entirely in the
passage to a countable family.

**Why the meager formulation is not given here.** The usual equivalent phrasing
says that a countable union of nowhere dense sets has empty interior, or that a
nonempty open set is not meager. This page does not state it, because the
notions of nowhere dense and meager available to it are
[[def-nowhere-dense-meager]], which is stated for subsets of $\mathbb{R}$ and not
for subsets of an arbitrary topological space; restating them here in general
would create a second notion under the same name. The definition above is stated
in terms of denseness alone, which [[def-dense-top]] does define for an arbitrary
space, and it is equivalent to the meager formulation wherever both are
available.

## Remarks

**What the definition is for.** It isolates exactly the hypothesis under which a
countable family of "large" open sets still has a large intersection, and that is
the hypothesis a great many existence arguments run on: to produce an object with
countably many properties, one shows that each property is enjoyed by a dense open
set and then takes a point of the intersection. Nothing about the ambient space is
assumed here beyond the definition, so the notion applies to spaces with no metric
and no countability property.

**Which spaces satisfy it, and at what cost.** Every locally compact Hausdorff
space is a Baire space, assuming dependent choice
([[thm-baire-category-locally-compact-hausdorff]]); the corresponding statement
for complete metric spaces, and the exact choice principles the several versions
of the Baire category theorem are equivalent to over ZF, are recorded in
[[rem-baire-category-choice-strength]], which this library states and does not
prove.
```

Definition shape: `## Definition` carrying the definition in a blockquote, then
**bolded lead-in paragraphs** that unwind the condition, fix index conventions,
say what is *not* asserted, and explain why an alternative formulation was not
used; then `## Remarks` for purpose and for the theorems that consume it. There
is no `## Proof` and `provenance.proof` is `not-applicable`.

A shorter definition in the same band, for contrast —
`items/def-second-countable-space.md`:

```markdown
---
id: def-second-countable-space
kind: definition
title: "Second countability: an at most countable basis for the topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topology-basis-subbasis, def-countable]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Second-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Second-countable_space"
pipeline_run: null
---

## Definition

A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

## Remarks

The basis is global. This differs from first countability, where the countable family is allowed to depend on the point.
```

### 4.3 A `cex-` item from the topology band — `items/cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension.md`, verbatim

```markdown
---
id: cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension
kind: counterexample
title: "The reciprocal on $(0,1]$ is continuous and extends to no continuous function on $\\mathbb{R}$, so closedness of the subspace is not decoration in the $\\mathbb{R}$-valued Tietze extension"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends,
       thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps, def-continuity-real, thm-algebra-of-continuous-functions,
       cor-boundedness-theorem-r, cor-archimedean-reciprocal, def-interval,
       def-subspace-topology-top, thm-heine-borel-r]
justified_by: []
aliases: []
landmark: false
short: "reciprocal on $(0,1]$, no continuous extension"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
pipeline_run: null
---

## Statement refuted

The continuous function $f : (0,1] \to \mathbb{R}$, $f(x) := 1/x$, extends to a
continuous function $F : \mathbb{R} \to \mathbb{R}$.

This is the single witness behind
[[fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends]],
presented on its own as the counterexample it is: it shows that dropping the
hypothesis "$A$ closed" from
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]] is not a minor
loosening but breaks that extension statement outright, on the very space
$\mathbb{R}$ where it is otherwise available.

**Which statement this witness refutes, and which it does not.** The corollary is
the $\mathbb{R}$-valued form, and $f$ meets every one of its hypotheses except
closedness of $A$, so it isolates that hypothesis exactly. It does **not** refute
[[thm-tietze-extension-theorem]] itself with the closedness hypothesis removed:
that theorem is stated for maps into a bounded interval $[a,b]$, and $f$ is
unbounded, so $f$ fails its codomain hypothesis as well. A witness violating two
hypotheses cannot isolate one.

## Facts & Assumptions

**Given:** $A := (0,1] \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$, $f(x) := 1/x$.

[L1] Quotients of continuous real functions with nonvanishing denominator are continuous ([[thm-algebra-of-continuous-functions]], clause 4).

[L2] Continuity passes to subsets of the domain ([[def-continuity-real]]).

[L3] $[0,1]$ is compact ([[thm-heine-borel-r]]); a continuous real function on a compact subset of its domain is bounded there ([[cor-boundedness-theorem-r]]).

[L4] For every real $\varepsilon>0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $f$ is continuous on $A$ by [L1], with $0 \notin A$. [given, L1]

1.2 For every real $M$ there is $x \in A$ with $f(x)>M$: for $M \le 0$ take $x:=1$; for $M>0$, [L4] with $\varepsilon := 1/(M+1)$ gives a natural $n \ge 1$ with $1/n < 1/(M+1)$, hence $n>M$, and $x := 1/n \in (0,1]=A$ has $f(x)=n>M$. [given, L4, algebra, choose]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to \mathbb{R}$ extends $f$. [assume-contra]

2.1 Under step 1.3: $F|_{[0,1]}$ is continuous by [L2]; by [L3], $[0,1]$ is compact and $F|_{[0,1]}$ is therefore bounded: fix real $M_0 \ge 0$ with $|F(x)| \le M_0$ for every $x \in [0,1]$. [step 1.3, L2, L3, choose]

3.1 Under step 1.3: for $x \in A \subseteq [0,1]$, $F(x)=f(x)$, so $f(x) \le M_0$ for every $x \in A$ by step 2.1; but step 1.2 with $M:=M_0$ gives $x_0 \in A$ with $f(x_0)>M_0$, a contradiction. [step 1.3, step 2.1, step 1.2, discharge-contradiction] ∎

## Remarks

- **The only hypothesis of the $\mathbb{R}$-valued extension statement that fails here is closedness of $A$.** $\mathbb{R}$ is normal and $f$ is continuous on $A$; the closure of $A$ in $\mathbb{R}$ is $[0,1]$, and it is exactly the missing point $0$ where $f$ has nowhere finite to go. Against [[thm-tietze-extension-theorem]] itself the witness fails a second hypothesis, since that theorem takes values in a bounded interval and $f$ does not, which is why the statement refuted above is framed against [[cor-tietze-for-unbounded-and-open-interval-valued-maps]].

- **The obstruction is boundedness, not the existence of a limit.** Step 1.2 shows $f$ is unbounded on every neighbourhood of the missing point directly from the reciprocal's growth, with no appeal to $\lim_{x \to 0^+} f(x)$ failing to exist as a real number.
```

Counterexample shape: `## Statement refuted` (the FALSE proposition, stated
affirmatively, naming the `fs-` item it witnesses **and saying exactly which
hypothesis it isolates and which statement it does *not* refute**) →
`## Facts & Assumptions` → `## Counterexample` (numbered stratified steps,
same justification grammar, `∎`) → `## Remarks`. Frontmatter adds
`generation: {role: counterexample}` and `proof_strategy`.

### 4.4 Style rules visible across the corpus that a new lane must copy

1. **Every dependency restatement quotes the cited proposition**, never a
   summary of what it is "for" (CLAUDE.md's citation-fidelity rule; see the
   `[L1]`/`[A1]` lines above).
2. **Conventions and scope get their own `rem-` item per page**, named
   `rem-<topic>-conventions-and-scope` or `rem-<topic>-choice-ledger`
   (e.g. `rem-integral-conventions-and-scope`,
   `rem-riemann-stieltjes-conventions-and-scope`,
   `rem-multidimensional-riemann-conventions-and-scope`,
   `rem-riemann-integral-choice-ledger`,
   `rem-compactness-conventions-and-choice-ledger`). **A measure lane is expected
   to carry both per pair.**
3. **Choice cost is named in the Statement itself**, in bold, with the exact step
   where it is spent (`thm-countable-union-of-null-is-null`,
   `thm-lebesgue-criterion`, `thm-countable-union-of-countable`,
   `thm-urysohn-lemma`).
4. **`fs-` false statements are first-class page items**, not examples-page
   filler; the `cex-` that witnesses one names it in `deps`.
5. **$\mathbb{N}$ contains $0$** and index ranges copied from sources must be
   shifted — stated explicitly in `def-baire-space`,
   `def-g-delta-and-f-sigma-in-a-topological-space`, `def-series`.
6. **`\iota` applied to a natural number is banned in new content** (CLAUDE.md,
   owner 2026-08-11; gate `content-policy.mjs` code `notation-iota-applied`).
   Legacy items still carry it — e.g. `thm-monotone-implies-integrable` (159),
   `ex-polynomial-integrals-by-the-ftc` (162), `thm-am-gm` (16) — **do not copy
   that**.
7. **Titles state the theorem, not the topic**, and are often long
   (`thm-locally-compact-hausdorff-basics` has a 60-word title). The judge reads
   Statements and cannot see a false title, so the title must not claim more than
   the proof gives.

---

## Blockers and cautions

**No blockers.** Every file named above was read directly from disk; no
permission was requested and none was needed. Two cautions and one correction:

1. **Correction to the "authored = non-empty `items[]` in plan-spec" rule.**
   It is wrong for orders 1–8 (§Part 0, finding 2). If the scaffold is generated
   from `research/plan-spec.json` alone it will silently miss
   `deferred-measure-and-integration` — the single most relevant page in the
   library for this lane — and the two real-number-construction pages. Read
   `library/**/*.md` as the truth for what is authored.

2. **`research/plan-spec.json` has 448 page rows, 244 with items, but 253 page
   files exist under `library/`.** The reconciliation: 244 + 8 (orders 1–8, items
   in the file but not the plan) = 252 page files with a `page:` key, plus
   `library/topology/_category.md`, which is a category descriptor with
   `status: draft` and no plan order. 4171 of the 4172 items are homed on a page;
   the single orphan is `items/lem-pasted-squares-commute.md`
   ("Horizontally pasted commutative squares commute", `status: draft`,
   category-theory), listed on no page. 38 items appear on two pages each, in three clusters:
   **22** shared by `construction-of-r-via-cauchy-sequences` (order 7) and
   `construction-of-r-via-dedekind-cuts` (order 8) — the shared
   integer/rational construction; **9** listed on both
   `mixed-partials-taylor-and-extrema` (231) and its `-examples` page; **7**
   listed on both `approximation-and-compactness-in-ck` (171) and its
   `-examples` page. In the last two the A page's own `items:` list already
   contains its counterexamples.

3. **Order is not stable** (LEVELS.md §"`order` is not stable"). The cut used
   here is the order *as of this working tree*; splices at 5.1–5.4, 53.2–53.4,
   178.1–178.2 and 220.2–220.4 show fractional orders are the house idiom for
   inserting a pair without renumbering. A measure block inserted after 288 will
   most naturally take 288.1, 288.2, … or the free integer band 289+ is already
   occupied by homotopy (289–292), so **fractional orders after 288 are the only
   non-renumbering option**.

