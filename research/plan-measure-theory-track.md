# Measure theory track — measure, integration, differentiation, duality, and ergodic theory

Prose scaffold, owner-commissioned 2026-08-13 (run `subjects-01`, track
`measure-theory`, wave 1). Machine-readable half: `research/plan-spec.json`.
Seam contract: `research/subjects-01-SEAMS.md`, which outranks this file on every
ownership and placement question.

> **STATUS: PROPOSED, NOT SPLICED.** Nothing in `research/plan-spec.json`,
> `items/` or `library/` was touched to produce this file. No `status:` field was
> changed and no item was authored. The splice is the orchestrator's job.

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

**AUTHORITY BOUNDARY.** This file is authoritative only for the 23 new A pages it
defines, **MT-1 … MT-23**, and their 23 `-examples` companions. It says nothing
about any existing page except through §"Amendments owed to other scaffolds",
which is addressed to the orchestrator.

**NO ABSOLUTE ORDERS.** Per SEAMS §0.2 this file numbers its pages **relative**
(`MT-1`, `MT-2`, …) and quotes only page **ids** for everything it cites. Where
an order appears below it is a *verified-from-disk reading of
`research/plan-spec.json` on 2026-08-13*, given so the reader can check the
placement argument, and it is stale the moment anything is spliced. Recompute
from the spec; never quote an order from this prose.

---

## 0. Summary for the orchestrator

**Placement.** Anchor `stone-weierstrass-general-examples` (spec order 288),
per SEAMS §3. The whole block appends after it, in relative order MT-1 … MT-23,
each A page followed immediately by its `-examples` companion.

**What was scaffolded.** 23 A/B pairs — 46 pages. Every result in the owner's
remit list is placed, and `DEFERRED.md` §1 is discharged **in full but for four
named rows**, listed in §7.

| label | A page id | one line |
|---|---|---|
| MT-1 | `sigma-algebras-and-borel-sets` | σ-algebras, generated σ-algebras, π-systems, λ-systems, monotone classes, the Borel σ-algebra and its size |
| MT-2 | `measures-and-their-basic-properties` | countably additive measures, continuity from below/above, completion, Borel–Cantelli, the π-system uniqueness theorem |
| MT-3 | `outer-measure-and-the-caratheodory-extension-theorem` | outer measures, Carathéodory measurability, premeasures on an algebra, the extension and uniqueness theorems, metric outer measures |
| MT-4 | `lebesgue-measure-on-euclidean-space` | the construction on $\mathbb{R}^n$, translation invariance, regularity, the Littlewood characterisations, the linear change of variables |
| MT-5 | `non-measurable-sets-and-the-cost-of-choice` | Vitali, Steinhaus, Bernstein sets, $\mathcal{L}\supsetneq\mathcal{B}$, the Solovay/Shelah ledger |
| MT-6 | `lebesgue-stieltjes-measures-and-distribution-functions` | the bijection between increasing right-continuous functions and Borel measures finite on compacta |
| MT-7 | `measurable-functions-and-simple-approximation` | measurable functions into $\overline{\mathbb{R}}$ and into a topological space, the lattice operations, the simple approximation theorem |
| MT-8 | `the-lebesgue-integral-and-the-convergence-theorems` | the integral, monotone convergence, Fatou, dominated convergence, $\int f = 0 \iff f = 0$ a.e. |
| MT-9 | `the-lebesgue-and-riemann-integrals-compared` | Riemann $\Rightarrow$ Lebesgue with the same value, the improper-integral gap, Arzelà's theorem recovered |
| MT-10 | `modes-of-convergence-egorov-and-lusin` | a.e., in measure, almost uniform, in $L^1$; Egorov, Lusin, Riesz's subsequence theorem, uniform integrability, Vitali convergence |
| MT-11 | `product-measures-and-the-fubini-tonelli-theorems` | the product measure, Tonelli, Fubini, the completed product, the layer-cake formula, every standard failure |
| MT-12 | `signed-and-complex-measures-hahn-and-jordan` | signed measures, Hahn and Jordan decompositions, total variation, complex measures |
| MT-13 | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | $\nu \ll \mu$, the derivative and its a.e. uniqueness, the chain rule, the Lebesgue decomposition, polar decomposition |
| MT-14 | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | conjugate exponents, Hölder, Minkowski, the quotient by null functions, completeness, the inclusion relations |
| MT-15 | `density-separability-and-convolution-in-lp` | simple and $C_c$ density, separability, non-separability of $L^\infty$, continuity of translation, convolution, mollifiers |
| MT-16 | `the-duality-of-lp-and-lq` | the Riesz representation of a bounded linear functional on $L^p$, $1 \le p < \infty$; the failure at $p = \infty$ |
| MT-17 | `the-maximal-function-and-lebesgue-differentiation` | the Vitali covering lemma, the Hardy–Littlewood maximal inequality, Marcinkiewicz interpolation, Lebesgue points, density |
| MT-18 | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | Dini derivates, the rising sun lemma, monotone $\Rightarrow$ differentiable a.e., the Vitali covering theorem, the jump/singular/AC decomposition |
| MT-19 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | AC, Luzin (N), the sharp FTC both directions, integration by parts, change of variables, Banach–Zarecki |
| MT-20 | `radon-measures-and-the-riesz-markov-kakutani-theorem` | Radon measures on a locally compact Hausdorff space, RMK for $C_c(X)^+$, regularity, the complex/bounded version |
| MT-21 | `hausdorff-measure-and-hausdorff-dimension` | metric outer measures, $\mathcal{H}^s$, dimension, $\mathcal{H}^n = c_n\lambda_n$, the Cantor set's dimension **(addition beyond the literal remit — see §D9)** |
| MT-22 | `measure-preserving-transformations-and-poincare-recurrence` | measure-preserving maps, invariant sets, ergodicity, mixing, Poincaré recurrence, Kac's formula |
| MT-23 | `the-ergodic-theorems-of-von-neumann-and-birkhoff` | the maximal ergodic theorem, Birkhoff, von Neumann, unique ergodicity, Weyl equidistribution, Borel's normal-number theorem |

**Sources obtained in full.** **§11 is the canonical-coverage harvest**, with §11.0
the honesty statement on what was obtained in full versus in part, §11.1 the
convention ledger, §§11.2–11.6 the per-source heading dispositions, and **§11.7 the
per-pair backing table, which is the row a reviewer should check first**. Thirteen
treatments were harvested; **Tao, Bass, Folland, Rudin, Stein–Shakarchi, Cohn,
Bruckner–Bruckner–Thomson, Hunter, Driver, Einsiedler–Ward (chs. 1–4) and
Wheeden–Zygmund were obtained as full text**; Bogachev, Schilling and Walters at
TOC level, and each is flagged as such. Every pair has two independent treatments
**with one recorded exception, MT-18's rising-sun route** (§11.6 finding 1).

**Four things the source research changed, all verified against the text and all
places where the scaffold would otherwise have shipped a false claim:**

1. **Tao's book does not contain signed measures, Radon–Nikodym, $L^p$, Hölder,
   Minkowski or the Riesz representation theorem** — he defers them to a later
   volume. So Tao cannot be a backing treatment for MT-12 … MT-16 or MT-20, and
   §11.7 routes those to Folland and Bass instead.
2. **"Radon measure" has four incompatible meanings across the sources**, and an
   earlier draft of this file asserted Cohn uses the strong one. He does not:
   Cohn's `regular Borel measure` is the weak (Folland) convention, and his
   `Radon measure` is **Bourbaki's linear functional**, not a measure at all.
   Well-definedness #31 and §11.1 row 5 now carry the corrected four-way split.
3. **The proof that a free ultrafilter is non-measurable runs through a tail
   $0$–$1$ law and the complement-swapping involution, NOT through Steinhaus.**
   The Steinhaus-based result is a *different* theorem of Sierpiński (two null sets
   with non-measurable sum). MT-5 previously named the wrong route; it is corrected,
   and MT-5 now carries the supporting dyadic $0$–$1$ law it needs.
4. **Bruckner–Bruckner–Thomson, Royden–Fitzpatrick and Driver all lack the rising
   sun lemma** — they run differentiation through Vitali covering. Its sources are
   Tao Lemma 1.6.17 and Riesz–Sz.-Nagy ch. I. MT-18 proves both routes and §11.6
   records that the rising-sun one is single-sourced.

**Two results added to the scaffold on the strength of the harvest**: Cohn Thm 6.3.11
(continuous, differentiable off a countable set, $F'$ integrable $\Rightarrow$ AC) at
MT-19, and the **Krylov–Bogolyubov existence theorem** (Royden–Fitzpatrick §22.4) at
MT-22, without which MT-23's unique-ergodicity theorem would be vacuous.

**Seams consumed** (I cite, I do not re-mint): the elementary covering-sense null
sets and Lebesgue's Riemann-integrability criterion of
`cantor-set-baire-and-measure-zero` and `the-riemann-integral`; the Riemann and
Riemann–Stieltjes integrals and bounded variation; `def-norm-and-normed-space`;
`def-extended-reals` and the `limsup`/`liminf` calculus; the locally compact
Hausdorff block (Urysohn, Tietze, partitions of unity, the one-point
compactification); the ordinal, cardinal and choice blocks. Every one is verified
present on disk in §2.

**Seams owed** — five, all in §8, of which three are genuinely unresolved and
need an orchestrator ruling: the word "Banach space" for $L^p$; the phrase
"the dual space $(L^p)^*$"; and complex scalars for a normed space. All three
have the same shape — `functional-analysis` owns a piece of vocabulary that lands
*after* this track and that this track's own remit obliges it to state. §8 gives
the recommended resolution, which costs no re-mint and no forward reference.

**Unresolved forward references: none load-bearing.** The track is closed
downwards; §6 lists the three orientation-only forward references it proposes.

**Blockers recorded: none.**

**Two corrections to the dispatch, verified from disk** — both matter:

1. **`deferred-measure-and-integration` is NOT empty.** Its `items` array in
   `research/plan-spec.json` is `[]`, but the page file
   `library/not-proved-here/deferred-measure-and-integration.md` is
   `status: published` and lists **29 published `rem-` items**, every one of them
   `proved_here: false`. The same is true of all five `not-proved-here` pages
   (22, 13, 33, 29, 17 items on disk against `[]` in the spec). So SEAMS §0.3's
   rule *"`items[]` is the only honest signal"* has a systematic exception at
   the ‡ catalogues, and a scaffolder that trusted it would have minted ids that
   already exist. The full list, with the ids, is §7.
2. **`rem-ftc-absolutely-continuous` is not on the FTC page.** It is homed on
   `deferred-measure-and-integration` (order 1), not on
   `the-fundamental-theorems-of-calculus` (order 239). That matters because the
   discharge route differs: see §7.

---

## 1. Why this track exists, and what "greenfield" actually means here

The owner's commission is to develop the theory **from the ground up, with every
definition justified and well defined, at the graduate level**, in the manner the
real-analysis track was built.

The orchestrator's probe is right in substance: there is no σ-additive measure
theory in this library. Confirmed independently on 2026-08-13 — no
`def-sigma-algebra`, no `def-measure`, no `def-outer-measure`, no
`def-measurable-function`, no `def-lebesgue-measure`, no `def-lebesgue-integral`
anywhere in `items/`.

But "greenfield" is the wrong word for the *neighbourhood*, and getting that
wrong is how a measure track ends up re-proving what it should be citing. Three
bodies of published work sit directly underneath this one and are load-bearing
for it.

### 1.1 The elementary measure-zero vocabulary — cite it, subsume it, never re-mint it

`cantor-set-baire-and-measure-zero` (spec order 133, 24 items, authored) is
already a small piece of measure theory done without a measure. Its
`def-measure-zero-and-content-zero` reads, verbatim from disk:

> $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
> $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
> $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such that
> $A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k]$ and
> $\sum_{k=0}^{\infty} (b_k - a_k)$ converges with sum $\le \varepsilon$.

Three things about that definition bind this track.

- **The covering intervals are CLOSED and the index set contains $0$.** Every
  agreement item written below must use *this* form, not the open-interval form
  most textbooks use. The two agree, and proving they agree is a numbered
  obligation (well-definedness row 12), not a parenthetical.
- **The page says in its own Remarks that "Lebesgue outer measure is still not
  defined"** and that the finite-cover notion is "the vanishing of the Jordan
  outer content". Those are order-relative scope statements, correctly phrased,
  and MT-4 is the page that closes them. It does not falsify them.
- **Its consequences are already proved and are ours to use**:
  `lem-countable-sets-are-null`, `thm-countable-union-of-null-is-null`,
  `lem-nondegenerate-interval-is-not-null`, `thm-compact-null-is-content-zero`,
  `lem-content-zero-implies-null`, `cex-null-set-not-of-content-zero`,
  `def-f-sigma-g-delta`, `def-nowhere-dense-meager`, `thm-baire-category-r`,
  `def-cantor-set`, `thm-cantor-set-properties`, `def-fat-cantor-set`,
  `thm-fat-cantor-set-has-positive-measure`, `def-cantor-function`,
  `thm-cantor-function-properties`, and the two false statements
  `fs-nowhere-dense-implies-measure-zero`, `fs-measure-zero-implies-nowhere-dense`.

`thm-fat-cantor-set-has-positive-measure` is worth a second look: it is stated
and proved *without* a measure, as "the fat Cantor set is not null". MT-4 upgrades
it to the exact value of $\lambda$ on the standard fat Cantor set, and the two
statements must be related explicitly rather than left as two facts about the
same object.

### 1.2 The Riemann and Riemann–Stieltjes integrals — the comparison is a required page, not an optional remark

Authored and published: `the-riemann-integral` (159, 18 items),
`the-riemann-integral-examples` (160), `bounded-variation-and-riemann-stieltjes`
(163, 33 items), `improper-integrals`, `the-riemann-integral-in-rn-and-jordan-content`
(235, 30 items), `fubini-and-change-of-variables` (237, 25 items),
`the-fundamental-theorems-of-calculus` (239, 10 items).

`thm-lebesgue-criterion` ("a bounded $f$ on $[a,b]$ is Riemann integrable if and
only if its set of discontinuities has measure zero") and its $\mathbb{R}^m$
counterpart `thm-lebesgue-criterion-in-rn` are **published, with full proofs, in
the elementary covering sense**. This track cites both and proves neither. What
it adds is the other half of the dictionary: that a Riemann-integrable function
is Lebesgue integrable with the same value, that the improper Riemann integral is
strictly larger in reach (the Dirichlet sine integral) and strictly smaller in
robustness, and that `cor-ftc-integral-function-differentiable-almost-everywhere`
— already published at 239 — is the shadow of the Lebesgue differentiation
theorem. That is MT-9, and it is a required page: a library with two integrals and
no theorem relating them is the canonical two-notions defect that `LEVELS.md`
§"Seams" was written about.

Likewise `thm-double-series-fubini` (129) is Fubini for absolutely summable double
series, proved. MT-11 must state that it is the case of counting measure on
$\mathbb{N}\times\mathbb{N}$, and prove that, rather than leave the library with
two unrelated Fubinis. Same for `thm-holder-finite-real-exponents` and
`thm-minkowski-finite-real-exponents` (both 177) against the integral forms on
MT-14: counting measure on a finite set. Three dictionary items, three seams
closed.

### 1.3 The locally compact Hausdorff block — the reason the anchor is where it is

SEAMS §3 places this track immediately above `stone-weierstrass-general-examples`
because measure theory's true prerequisites stop at real analysis and LCH
topology. Verified present and below the anchor:

| page (order) | what MT-20 and MT-15 take from it |
|---|---|
| `compactness` (255) | `def-compact-space`, `def-locally-compact-space`, `thm-locally-compact-hausdorff-basics`, `def-one-point-compactification`, `thm-one-point-compactification-properties`, `thm-baire-category-locally-compact-hausdorff`, `thm-tychonoff` |
| `the-topology-of-euclidean-space` (257) | `cor-rn-is-locally-compact-and-sigma-compact`, `thm-rational-points-and-boxes-in-rn` (the countable base that makes $L^p(\mathbb{R}^n)$ separable) |
| `urysohn-lemma-and-tietze` (267) | `thm-urysohn-lemma`, `thm-tietze-extension-theorem`, `thm-a-locally-compact-hausdorff-space-is-completely-regular`, `cor-a-compact-hausdorff-space-is-tychonoff` |
| `partitions-of-unity-and-paracompactness` (269) | `def-partition-of-unity-subordinate-to-a-cover`, `thm-subordinate-partitions-of-unity-exist`, `cor-compact-hausdorff-partitions-of-unity`, `lem-locally-finite-sums-are-continuous` |
| `countability-axioms-and-cardinal-functions` (273) | `def-separable-space`, second countability, Lindelöf |
| `approximation-and-compactness-in-ck` (171) | `thm-arzela-ascoli-for-real-ck`, `thm-real-stone-weierstrass-for-compact-metric-spaces`, `thm-baire-category-for-complete-metric-spaces` |
| `ordinals-and-transfinite-recursion` (243) | `thm-transfinite-induction`, `thm-transfinite-recursion`, `def-ordinal`, `thm-hartogs`, `def-cardinal`, `thm-well-ordering-theorem` |
| `cardinal-arithmetic-and-cofinality` (247) | `def-aleph-and-beth-hierarchies`, `thm-cardinal-power-set-and-cantor`, `thm-hessenberg`, `cor-cardinal-absorption` |
| `order-zorn-and-the-axiom-of-choice` (10) | `thm-zorn`, `cor-ac-iff-zorn`, `lem-finite-choice` |
| `relations-functions-and-quotients` (5.3) | `def-axiom-of-choice`, `def-equivalence-relation`, `lem-equivalence-classes-partition`, `thm-universal-property-of-the-quotient` |
| `countability-and-uncountability` (18) | `def-countable-choice`, `thm-countable-union-of-countable`, `thm-cantor-powerset`, `thm-r-uncountable` |
| `filters-and-ultrafilters` (12) | `def-ultrafilter`, `thm-ultrafilter-lemma` — the finitely-additive-not-countably-additive witness on MT-2 |
| `limsup-and-subsequential-limits` (122) | `def-extended-reals`, `lem-extended-reals-complete`, `def-limsup-liminf`, `rem-extended-real-conventions` |
| `rn-as-a-normed-space` (167) | `def-norm-and-normed-space`, `def-p-norms-on-rn`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-equivalent-norms` |
| `convexity` (157) | `def-convex-concave-and-midpoint-convex-functions`, `thm-finite-jensen-inequality`, the supporting-line theorem — Jensen's integral inequality on MT-8 is built on these |
| `roots-and-rational-powers` (16) / `the-logarithm-and-general-powers` (177) | `thm-young-inequality`, `thm-holder-finite-real-exponents`, `thm-minkowski-finite-real-exponents` |
| `monotone-functions-and-discontinuities` (151) | monotone functions, jump discontinuities, `def-semicontinuity` — MT-18's jump decomposition and MT-6's right-continuous representative live on these |

**Availability of the ordinal and cardinal machinery is not a detail.** It is what
lets MT-1 prove that $\lvert\mathcal{B}(\mathbb{R})\rvert = \mathfrak{c}$ by
transfinite induction to $\omega_1$, and MT-5 prove
$\lvert\mathcal{L}(\mathbb{R})\rvert = 2^{\mathfrak{c}}$, hence
$\mathcal{L} \supsetneq \mathcal{B}$ without exhibiting a witness. Most textbooks
leave both as exercises because their prerequisites are not stated; here they are
published and the results are in scope.

### 1.4 The empty category directory already exists

`library/real-analysis/measure-theory/` exists on disk, created 2026-07-30, with
a `_category.md` reading `name: measure-theory`, `title: Measure Theory`,
`status: draft`, and **no pages**. Siblings `functional-analysis/` and
`differential-geometry/` are in the same state. `tools/depcheck.mjs` walks
`library/` recursively and carries a nested category path, so a page at
`library/real-analysis/measure-theory/<page>.md` loads. **No page in the spec
currently uses a nested category**, so the exact `category` string for these 46
pages is a splice decision, not mine — recorded in §8 amendment 6.

---

## 2. What is deliberately not here

Scope denials. Each row says what is dropped, why, and what would license it.
A dropped result is deferred, not deleted; the row is what makes it recoverable.
Rows marked **partial** mean a weaker true statement IS scaffolded and the row
records exactly where the line falls.

| # | dropped | why | what would license it |
|---|---|---|---|
| 1 | **Hahn–Banach, the open mapping and closed graph theorems, Banach–Alaoglu, weak and weak\* topologies, reflexivity** | SEAMS §4 gives all of these to `functional-analysis`, which lands strictly **above** this track. They are unavailable, not merely unowned. | the `functional-analysis` block. Every proof route in this track was chosen to avoid them; §4 is the ledger of where that cost something. |
| 2 | **Hilbert space theory**: orthonormal bases, the Riesz representation $H^*\cong H$, the projection theorem in the abstract | `functional-analysis` owns them and lands above. | as row 1. **Partial**: MT-23 needs *one* Hilbert-space fact, the orthogonal decomposition of $L^2$ along a closed subspace, and builds exactly that one by hand from the parallelogram law and a minimising sequence, scoped to $L^2(\mu)$ and named as such. See §D6. |
| 3 | **The Fourier transform, Fourier series, Plancherel, the Riemann–Lebesgue lemma, Paley–Wiener** | SEAMS §4: `functional-analysis`, and it lands above. | the `functional-analysis` block. **Consequence recorded**: `rem-riesz-fischer` on the ‡ catalogue asserts "$L^2$ is isomorphic to $\ell^2$ through Fourier coefficients"; MT-14 proves the completeness half and **not** the Fourier half, and §7 says so. |
| 4 | **Sobolev spaces, weak derivatives, distributions** | SEAMS §4: `pde` and `functional-analysis`. | those tracks. |
| 5 | **Kolmogorov's extension theorem and infinite product measures; conditional expectation; martingales; weak convergence of measures and tightness; characteristic functions; the CLT** | SEAMS §4: `probability-theory`. | that track. **Partial**: MT-11 builds **finite** products, which is exactly what the remit assigns and exactly what `probability-theory` will need as its base case. The countably infinite product on $\{0,1\}^{\mathbb{N}}$ is used by MT-22 as an *example* built by hand from Carathéodory, not as a general theorem — see §D8. |
| 6 | **Riesz–Thorin interpolation** | its proof runs the Hadamard three-lines theorem, and complex analysis lands **above** this track (`complex-differentiability-and-cauchy-riemann` and the rest of the CA block are at 303+). | the `complex-analysis` block. **Partial**: MT-17 proves **Marcinkiewicz interpolation** between weak $(1,1)$ and $L^\infty$, which is purely real and is all the maximal function needs. §8 amendment 4 proposes `complex-analysis` add Riesz–Thorin now that $L^p$ sits below it. |
| 7 | **Haar measure on a locally compact group** | needs topological groups, which the library does not build below the anchor. | a topological-groups page. MT-20 gives the representation theorem Haar measure is usually constructed with, so the remaining cost is the group structure alone; recorded so it is not rediscovered. |
| 8 | **The Daniell integral; the Bourbaki functional approach; the Henstock–Kurzweil comparison** | `rem-henstock-kurzweil-vs-lebesgue` records the HK comparison as ‡ and `DEFERRED.md` §1 keeps it. The HK integral itself is in scope elsewhere and is not built here. | an HK-integral page. The Daniell route is a *different construction of the same object*; building it as well would double the track for no new theorem, and the library's own rule is that duplication across generality levels is intentional only where the proofs genuinely differ in tools. Recorded rather than silently omitted. |
| 9 | **Geometric measure theory**: rectifiability, the area and coarea formulas, currents, the structure theorem | rests on Hausdorff measure *plus* Lipschitz analysis in $\mathbb{R}^n$ well beyond this track | a geometric-measure-theory track. **Partial**: MT-21 builds Hausdorff measure and dimension, $\mathcal{H}^0$ = counting, $\mathcal{H}^n = c_n\lambda_n$ on $\mathbb{R}^n$, and the dimension of the Cantor set. |
| 10 | **Entropy, the Shannon–McMillan–Breiman theorem, the isomorphism theory of Bernoulli shifts (Ornstein)** | a second ergodic-theory page's worth of machinery, and Ornstein's theorem is a research-level proof | a dedicated ergodic-theory track. **Partial**: MT-22/MT-23 give recurrence, ergodicity, mixing, the two ergodic theorems, unique ergodicity, Weyl equidistribution and Borel's normal-number theorem — the part that is provable here and that everything else cites. |
| 11 | **Kolmogorov's $L^1$ function with an everywhere-divergent Fourier series; du Bois-Reymond's continuous function with a Fourier series divergent at a point** | both are Fourier statements (row 3) | row 3, plus `functional-analysis` for the uniform-boundedness packaging du Bois-Reymond wants. `rem-kolmogorov-divergent-fourier` and `rem-du-bois-reymond-divergent-fourier` stay ‡, and §7 says so. |
| 12 | **Sierpiński's CH example** of a non-measurable subset of the square with iterated integrals $0$ and $1$ | its construction needs a well-ordering of $\mathbb{R}$ in type $\omega_1$, i.e. CH, which is independent of ZFC (`deferred-set-theory-beyond-choice` owns the independence) | a forcing track. `rem-sierpinski-iterated-integrals` stays ‡ and MT-11 cites it as the sharpening of its own choice-free failure examples. **Not** a licence to omit those: MT-11 proves the counting-measure diagonal failure and the $(x^2-y^2)/(x^2+y^2)^2$ failure outright. |
| 13 | **Banach–Tarski** | needs free non-abelian subgroups of $SO(3)$ and the Hausdorff paradox; the group theory is not below the anchor | `rem-banach-tarski` is published on `deferred-set-theory-beyond-choice` and stays there. MT-5 cites it as an `external_refs` mention beside the Vitali set, which it *does* build. |
| 14 | **Lifting theory, von Neumann–Maharam; the Maharam classification of measure algebras** | a specialist theory nothing else here needs | a measure-algebras page. |
| 15b | **$(L^\infty)^* \supsetneq L^1$**, i.e. that the natural isometric embedding $L^1 \to (L^\infty)^*$ is not surjective | every standard construction of a bounded functional on $L^\infty$ that is not integration against an $L^1$ density extends a functional off a subspace, i.e. **uses Hahn–Banach** (row 1). It is not enough to say "the duality fails at $p=\infty$" and gesture; the witness is the whole content. | `functional-analysis`, which owns Hahn–Banach and on whose ‡ catalogue `rem-dual-of-l-infinity` already sits. **What IS proved on MT-16**: the duality theorem for $1\le p<\infty$ in full; that $q=\infty$ is the *conclusion* at $p=1$ and needs σ-finiteness, with a ZF counterexample on a non-semifinite measure space; and the honest order-relative statement that the $p=\infty$ case is recorded and not proved here, citing `rem-dual-of-l-infinity`. Do **not** let an author "prove" it with a Banach limit — that is Hahn–Banach in disguise. |
| 15 | **The Riesz representation of $C_0(X)^*$ stated as a Banach-space duality** — **partial** | "dual space" is `functional-analysis` vocabulary (row 1) | §8 seam 2. MT-20 proves the mathematics in full, in the concrete form "for every linear $\Lambda$ on $C_0(X)$ with $\lvert\Lambda f\rvert \le C\lVert f\rVert_\infty$ there is a unique regular complex Borel measure …". Only the words `(C_0(X))^*` are withheld. |

---

## 3. Design decisions

Each is a decision I took under the standing rule that the orchestrator settles
scaffold questions by best judgment (`CLAUDE.md` §"Step-3 decisions belong to the
orchestrator"). They are recorded here so they are not silently re-decided, and
each says what breaks if it is reversed.

**D1. Carathéodory is the spine; the Riesz representation theorem is not.**
Two standard routes build Lebesgue measure: extension of a premeasure by an outer
measure (Folland, Bass, Cohn, Tao), or the Riesz representation theorem applied to
the Riemann integral (Rudin's *Real and Complex Analysis*). This track takes the
first, and proves the second **as a theorem at MT-20**.

Reasons, in order of weight. (i) The outer-measure route is self-contained from
the length function on intervals and needs no topology at all, so MT-1 … MT-11 are
free of every dependency above `limsup-and-subsequential-limits`; the Riesz route
would put the whole LCH block underneath the *definition* of Lebesgue measure.
(ii) Carathéodory's construction is reused three times — for Lebesgue measure, for
Lebesgue–Stieltjes measures, and for Hausdorff measure — which is exactly the
"build the machinery once" discipline. (iii) The Riesz theorem is more interesting
when it is a theorem about an already-constructed object than when it is a
definition. **If reversed**: MT-3 through MT-6 collapse into MT-20's prerequisites
and the track loses its independence from topology.

**D2. Premeasures on an ALGEBRA, not on a semiring.**
Folland and Bass extend from an algebra; Cohn and Bogachev extend from a semiring
(or a "semialgebra") of half-open boxes. The semiring route saves one lemma at
the construction of $\lambda_n$ and costs a whole extra layer of definitions
everywhere else. This track defines a premeasure on an **algebra of sets** and
proves separately, as `lem-`, that the finite disjoint unions of half-open boxes
form an algebra and that the volume function on it is a premeasure. That lemma is
where the compactness argument lives and it is the hardest step of MT-4; hiding it
inside a semiring formalism would not make it easier. **If reversed**: MT-3 grows
a `def-semiring-of-sets` and every extension statement acquires a second form.

**D3. The integral is built from simple functions, in three stages, and the
unsigned stage is complete before signs appear.**
Stage 1: $\int s\,d\mu$ for a nonnegative simple measurable $s$, with
representation-independence as a numbered obligation. Stage 2:
$\int f\,d\mu := \sup\{\int s : 0 \le s \le f,\ s \text{ simple}\} \in [0,\infty]$
for nonnegative measurable $f$, with **no integrability hypothesis at all**.
Stage 3: $f = f^+ - f^-$ for real $f$ with $\int \lvert f\rvert < \infty$, then
complex $f$ by real and imaginary parts.

This is Folland's and Bass's order and it matters: monotone convergence is proved
at stage 2, where every quantity is defined and nothing has to be finite, and
linearity of the integral at stage 2 is then a *corollary* of monotone convergence
rather than a painful direct argument. Tao's alternative (the "unsigned integral"
via a lower Lebesgue integral) reaches the same place; the difference is
presentational and the simple-function route matches the library's existing
Darboux-sum idiom on `the-riemann-integral`. **If reversed**: linearity before MCT
needs the standard two-simple-function refinement argument, which is longer and
which the library would then have to repeat for Lebesgue–Stieltjes.

**D4. Measurable functions take values in $\overline{\mathbb{R}}$ by default.**
`def-extended-reals` is published, with a total order, a complete lattice
structure (`lem-extended-reals-complete`), and a *partial* arithmetic that
deliberately leaves $\infty - \infty$ undefined (`rem-extended-real-conventions`).
This track adopts it and adds exactly one convention item of its own: the
**measure-theoretic convention $0\cdot\infty := 0$**, which is not part of the
published arithmetic and which `cex-zero-times-infinity-indeterminate` (already
referenced from `def-extended-reals` as a forward reference) says is
indeterminate as a limit. The convention item must say plainly that this is a
*definition made for this theory*, that it is not a limit theorem, that it is what
makes $\int 0 \cdot \mathbf{1}_E = 0$ for $\mu(E) = \infty$, and that
`cex-zero-times-infinity-indeterminate` is not contradicted because that item is
about limits of products, not about a chosen value. This is the single most likely
place for a judge to see a contradiction where there is none, and MT-7 carries the
item explicitly. **If reversed**: every convergence theorem grows a finiteness
hypothesis and the lattice operations $\sup_k f_k$ stop being measurable functions.

**D5. $L^p$ is a set of equivalence classes from the start, and the quotient is
a numbered obligation.**
$\mathcal{L}^p(\mu)$ is the set of measurable $f$ with
$\int\lvert f\rvert^p < \infty$; $\mathcal{N}$ is the subspace of functions
vanishing a.e.; $L^p(\mu) := \mathcal{L}^p(\mu)/\mathcal{N}$. Three separate items
discharge it: $\mathcal{L}^p$ is a vector space (this is Minkowski), $\mathcal{N}$
is a subspace, and $\lVert\cdot\rVert_p$ is constant on cosets so the induced
function on the quotient is well defined *and* separates points. Only then is
$\lVert\cdot\rVert_p$ a norm in the sense of the published
`def-norm-and-normed-space`. **If reversed**: $\lVert\cdot\rVert_p$ is a seminorm
and the (N1) axiom of the published definition fails, so the library would
contain a "norm" that is not one.

**D6. MT-23 builds the one Hilbert-space fact it needs, by hand, scoped to
$L^2$.** Von Neumann's mean ergodic theorem is normally the statement that the
$L^2$ averages converge to the orthogonal projection onto the invariant subspace,
and orthogonal projection is `functional-analysis` vocabulary landing above this
track. Two honest routes exist and this track takes the second:

- prove Birkhoff first (Garsia's maximal-ergodic-theorem proof is *purely
  measure-theoretic* and uses no inner product at all) and deduce mean
  convergence in $L^1$ and $L^p$ from Birkhoff plus the Vitali convergence
  theorem of MT-10;
- **and additionally** prove the $L^2$ statement in its classical form, building
  the single fact it needs — a nonempty closed convex subset of $L^2(\mu)$ has a
  unique element of least norm, hence $L^2 = M \oplus M^\perp$ for closed
  subspaces $M$ — from the parallelogram law and completeness (Riesz–Fischer,
  MT-14). That is three lemmas, all elementary, all stated about $L^2(\mu)$
  specifically and never about an abstract Hilbert space.

`functional-analysis` then re-proves the general Hilbert-space projection theorem
and adds the agreement remark; §8 amendment 2 records that obligation. **If
reversed** (i.e. if the $L^2$ statement is dropped): von Neumann's theorem
disappears from a track whose remit names it, which the owner's rule forbids —
"dropping an important result for want of a definition or lemma that could have
been written is no longer a permitted disposition".

**D7. Radon–Nikodym is proved by the Hahn-decomposition exhaustion, not by von
Neumann's Hilbert-space trick.** Von Neumann's proof is shorter and is the one
Rudin gives, but it runs the Riesz representation theorem for $L^2$ — row 2 of §2.
The exhaustion proof (Folland 3.8, Bass ch. 13) uses only the Hahn decomposition
of MT-12 and a supremum argument, both available. MT-13 carries a Remark naming
von Neumann's route and what it costs, in the "why this proof and not that one"
form the library's Remarks rule endorses. **If reversed**: MT-13 acquires a
dependency on `functional-analysis` and the whole track's order collapses.

**D8. Ergodic theory is scaffolded on abstract measure-preserving systems, with
the shift on $\{0,1\}^{\mathbb{N}}$ built by hand as an example.**
A general infinite product measure is `probability-theory`'s (§2 row 5). But the
Bernoulli shift is the example that makes Birkhoff's theorem mean something, and
Borel's normal-number theorem is its cheapest striking corollary. So MT-22
constructs the $(1/2,1/2)$ product measure on $\{0,1\}^{\mathbb{N}}$ **directly**
— the cylinder sets form an algebra, the obvious set function on them is a
premeasure by a compactness argument in the product topology (Tychonoff, order
255, is available), and Carathéodory does the rest. That is one page-local
construction, not a general theorem, and MT-22 says so in the item title. It does
not trespass on `probability-theory`, which will prove the general Kolmogorov
extension theorem and may cite this as its motivating special case. **If
reversed**: MT-23 has no non-trivial example and Borel's normal-number theorem
drops.

**D9. Hausdorff measure (MT-21) is an addition beyond the literal remit list, and
I am flagging it rather than assuming it.**
The remit in the dispatch does not name it. I include it because: it is measure
theory and no other track in SEAMS §4 owns it; it costs exactly one new idea
(metric outer measures and Carathéodory's criterion, which MT-3 has to prove
anyway for the construction to be honest about which sets are measurable); it
gives the Cantor set a dimension, which the library has wanted since
`thm-cantor-set-properties`; and `rem-weierstrass-graph-hausdorff-dimension` is
already published and currently has no notion of dimension to refer to.
**Orchestrator: decline this page and nothing else in the track changes** — no
other page cites MT-21. MT-3's metric-outer-measure lemma stays either way,
because MT-4's regularity theorem uses it.

**D10. Every page carries a choice ledger where its cost is not zero, and none
where it is.** The library's house form is `rem-choice-ledger`,
`rem-riemann-integral-choice-ledger`, `rem-baire-in-r-is-choice-free`,
`rem-compactness-conventions-and-choice-ledger`. §4 is the full table. Measure
theory is the subject where this matters most, because the difference between
"countable additivity" and "a countable union of countable sets is countable" is
exactly a choice principle, and because the whole non-measurable-set story is a
choice story.

**D11. Complex scalars enter at MT-12 and are handled concretely.**
`def-norm-and-normed-space` is defined over $\mathbb{R}$ only (verified: "a vector
space over $\mathbb{R}$"), so there is no published notion of a complex normed
space, and `functional-analysis` owns the abstraction. This track therefore uses
$\mathbb{C}$-valued functions and measures **without ever invoking a complex
normed space**: $\int f := \int \operatorname{Re} f + i \int \operatorname{Im} f$,
and $\lvert \int f\rvert \le \int\lvert f\rvert$ is proved by the rotation trick
as its own lemma, exactly as `thm-norm-inequality-for-the-vector-valued-integral`
does at 167 for the vector-valued Riemann integral (and MT-8 records the
agreement). **If reversed**: the track mints `def-complex-normed-space`, which
SEAMS §4 assigns to `functional-analysis`. See §8 seam 3.

**D12. Page sizes.** Every A page below is written to land at **18–40 items**,
comfortably under the 60-item split ceiling. Two pages were split at design time
rather than after: the $L^p$ material became MT-14 / MT-15 / MT-16 (a single
"$L^p$ spaces entire" page would carry roughly 75 items), and the differentiation
material became MT-17 / MT-18 / MT-19 (roughly 80 items in one). Both splits are
recorded here so nobody re-merges them: splitting before authoring costs a spec
edit, splitting after is a rewrite.

---

## 4. Choice-strength ledger

The owner requirement is to say **which** weak form, **where**. This is the
subject where the answer is least obvious, so the table is per result rather than
per page, and it distinguishes what a proof *uses* from what a statement is
*equivalent to*.

Notation: **ZF** = no choice; **AC$_\omega$** = countable choice
(`def-countable-choice`, published, order 18); **DC** = dependent choice
(`lem-dependent-choice-along-a-sequence-of-relations` is published on
`compactness`, order 255); **AC** = full choice (`def-axiom-of-choice`,
`thm-zorn`); **BPI** = the ultrafilter/prime-ideal lemma (`thm-ultrafilter-lemma`,
order 12).

| where | result | cost | note |
|---|---|---|---|
| MT-1 | every σ-algebra generated by a family exists; π–λ; monotone class | **ZF** | intersections of a nonempty family, no selection anywhere |
| MT-1 | $\lvert\mathcal{B}(\mathbb{R})\rvert = \mathfrak{c}$ | **AC$_\omega$** | the transfinite construction picks, at each countable stage, a countable sequence from a fixed countable-cofinal family. State the cost in the Statement, not in a footnote. |
| MT-1 | an infinite σ-algebra is uncountable (in fact of size $\ge\mathfrak{c}$) | **ZF** | the standard atom argument builds an injection $2^{\mathbb{N}}\to\mathcal{A}$ from an explicitly constructed decreasing sequence; take care that the sequence is built by recursion from a *definable* choice, not by AC$_\omega$ |
| MT-2 | monotonicity, subadditivity, continuity from below and above; completion | **ZF** | |
| MT-2 | the first Borel–Cantelli lemma | **ZF** | it is countable subadditivity plus a tail estimate |
| MT-3 | Carathéodory's theorem; the extension of a premeasure; uniqueness on a π-system | **ZF** | every "choose a cover with $\sum \le \mu^*(E)+\varepsilon$" is a choice from a family indexed by $\mathbb{N}$ — **this is exactly AC$_\omega$ unless the infimum is taken over a set with a canonical enumeration.** Route: state the covers as elements of a *set* and take a single countable sequence of covers via AC$_\omega$; **do not** claim ZF. Recorded here because it is the single most commonly mis-stated line in the subject. |
| MT-3 | the outer measure induced by a premeasure is an outer measure | **AC$_\omega$**, as above | |
| MT-4 | the length premeasure is countably additive on the algebra of boxes | **ZF** | Heine–Borel does the work; `thm-heine-borel-rn` is published and its own choice ledger is the one to inherit, not to re-derive |
| MT-4 | outer and inner regularity of $\lambda_n$ | **AC$_\omega$** | one open set per $\varepsilon = 2^{-k}$ |
| MT-4 | translation invariance, the linear change of variables | **ZF** | |
| MT-5 | the Vitali set is not measurable | **AC** on the family of $\mathbb{Q}$-cosets | AC$_\omega$ is **not** enough: the family is of size $\mathfrak{c}$. The statement item says this. |
| MT-5 | every set of positive outer measure has a non-measurable subset | **AC** | |
| MT-5 | a Bernstein set exists | **AC**, via a well-ordering of the perfect sets in type $\mathfrak{c}$ | `thm-well-ordering-theorem` (243) is the input |
| MT-5 | ZF + DC does not prove a non-measurable set exists | ‡ | Solovay's model; **the inaccessible cardinal is part of the claim**, and Shelah showed it cannot be dropped for the measurability half. `rem-vitali-non-measurable-set` already states this correctly; MT-5 cites it and does not restate it loosely. |
| MT-5 | a free ultrafilter on $\mathbb{N}$ is non-measurable | **BPI** for existence, then ZF for non-measurability | `rem-sierpinski-ultrafilter-not-measurable` is published; MT-5 may now *prove* the non-measurability half from Steinhaus, and cite the remark for the historical statement. See §7. |
| MT-7 | $\sup_k f_k$, $\limsup_k f_k$ measurable; simple approximation | **ZF** | the approximating simple functions are given by an explicit formula, not chosen |
| MT-8 | MCT, Fatou, DCT | **ZF** | no selection; this is worth saying, because the *statements* are about sequences and the reflex is to assume a choice |
| MT-10 | convergence in measure $\Rightarrow$ an a.e.-convergent subsequence | **AC$_\omega$** | choosing $n_k$ with $\mu(\lvert f_{n}-f\rvert>2^{-k})<2^{-k}$ for $n \ge n_k$; a least-index convention removes the choice, and MT-10 uses the least index so the item is **ZF** |
| MT-10 | Egorov | **AC$_\omega$** | a countable family of sets, one per $(k,\varepsilon)$; again removable by least indices, and MT-10 removes it |
| MT-10 | Lusin | **AC$_\omega$**, inherited from regularity | |
| MT-11 | Tonelli, Fubini, the σ-finite product | **AC$_\omega$** | inherited from MT-3 |
| MT-12 | the Hahn decomposition | **AC$_\omega$** | the standard proof extracts a sequence of sets each nearly extremal; least-index conventions are not available here, so the cost is real and is stated |
| MT-13 | Radon–Nikodym (σ-finite) | **AC$_\omega$** | the exhaustion is a countable selection |
| MT-14 | Riesz–Fischer | **AC$_\omega$** | choosing a rapidly Cauchy subsequence; removable by least indices, and MT-14 removes it, so the item is **ZF** given a Cauchy sequence |
| MT-14 | $\mathcal{N}$ is a subspace and $L^p$ is a normed space | **ZF** | |
| MT-15 | separability of $L^p(\mathbb{R}^n)$, $1\le p<\infty$ | **AC$_\omega$** | |
| MT-15 | non-separability of $L^\infty[0,1]$ | **ZF** | the uncountable $1$-separated family $\{\mathbf{1}_{[0,t]}\}$ is explicit |
| MT-16 | the duality theorem | **AC$_\omega$**, from Radon–Nikodym | **no Hahn–Banach**: the whole point of D7's route |
| MT-17 | the Vitali covering **lemma** (finite, $5r$) | **ZF** for a finite family; **AC$_\omega$** for the countable greedy selection | the greedy step picks a ball of nearly maximal radius at each stage |
| MT-17 | Lebesgue differentiation | **AC$_\omega$** | inherited |
| MT-18 | the Vitali covering **theorem** (fine covers) | **DC** | the greedy exhaustion is a genuinely dependent recursion; this is the strongest principle the track uses outside MT-5, and the statement says so |
| MT-18 | monotone $\Rightarrow$ differentiable a.e. by the rising sun lemma | **AC$_\omega$** | the rising sun route needs much less than the Vitali route; MT-18 gives both and the ledger records the difference, which is the point of proving it twice |
| MT-19 | the sharp FTC; Banach–Zarecki | **DC**, inherited from MT-18 | |
| MT-20 | Riesz–Markov–Kakutani | **AC$_\omega$** | Urysohn functions and partitions of unity are supplied by published theorems whose own choice ledgers apply — `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` is published at 267 and is the one to inherit. **Urysohn's lemma is not a ZF theorem** (`DEFERRED.md` §3b, Läuchli/Tachtsis/Blass); this is not a detail we may skip. |
| MT-21 | $\mathcal{H}^s$ is a metric outer measure; Borel sets are $\mathcal{H}^s$-measurable | **AC$_\omega$** | |
| MT-22 | Poincaré recurrence | **ZF** | |
| MT-22 | the product measure on $\{0,1\}^{\mathbb{N}}$ | **AC$_\omega$** + BPI | BPI via `thm-tychonoff`'s compactness of $\{0,1\}^{\mathbb{N}}$; but $\{0,1\}^{\mathbb{N}}$ is a *compact metric* space and its compactness is provable in ZF, so the item uses that route and the ledger says why |
| MT-23 | the maximal ergodic theorem and Birkhoff | **ZF** given the system | Garsia's proof is a finite manipulation plus MCT |
| MT-23 | the $L^2$ decomposition built by hand | **ZF** | a minimising sequence indexed by $\mathbb{N}$ with the parallelogram law; the limit is unique, so no choice |
| MT-23 | Weyl equidistribution for an irrational rotation | **ZF** | via unique ergodicity, proved directly |

Two standing rules for the authors, from this table:

- **A "for each $k$ choose …" step is a choice step until a least-index or
  explicit-formula convention removes it.** Six results above are ZF only because
  the convention is adopted deliberately. Adopt it in the proof text, not in the
  ledger.
- **Never inherit a choice claim from a cited theorem without reading that
  theorem's own ledger.** The published Baire, Urysohn, Tychonoff and Heine–Borel
  items each carry one, and they do not all say the same thing.

---

## 5. Well-definedness obligations

Each row is a REQUIRED numbered item on its page, never a parenthetical, per the
`WORKFLOW.md` definition-justification rule. These are the rows where a
definition would otherwise be a phrase without a referent.

| # | page | the definition | what must be proved, as its own item |
|---|---|---|---|
| 1 | MT-1 | **the σ-algebra generated by $\mathcal{E}$** | the intersection of every σ-algebra containing $\mathcal{E}$ is a σ-algebra containing $\mathcal{E}$, and the family being intersected is **nonempty** (it contains $\mathcal{P}(X)$). Without the nonemptiness clause the intersection is not a set operation this library licenses. |
| 2 | MT-1 | **the Borel σ-algebra of a topological space** | it does not depend on which of the standard generating families is used, for $\mathbb{R}$: open sets, closed sets, open intervals, half-open intervals with rational endpoints, rays $(a,\infty)$, rays $(q,\infty)$ with $q\in\mathbb{Q}$. **Six generators, one σ-algebra**, proved, not asserted. This is what makes every later "it suffices to check on intervals" step legal. |
| 3 | MT-2 | **a measure** | countable additivity is stated for *pairwise disjoint* sequences and the empty-set clause $\mu(\emptyset)=0$ is **not** redundant: it fails exactly for $\mu \equiv \infty$, and the item says so with that witness. |
| 4 | MT-2 | **the completion $(X,\overline{\mathcal{A}},\overline\mu)$** | $\overline{\mathcal{A}} = \{A\cup N : A\in\mathcal{A},\ N\subseteq M \in \mathcal{A},\ \mu(M)=0\}$ is a σ-algebra; $\overline\mu(A\cup N) := \mu(A)$ is **independent of the decomposition**; $\overline\mu$ extends $\mu$; the completion is complete; and it is the smallest complete extension. Four claims, four items. |
| 5 | MT-3 | **the measure induced by an outer measure** | the Carathéodory-measurable sets form a σ-algebra (three lemmas: closed under complement — immediate; under finite unions; under countable disjoint unions with additivity) and $\mu^*$ restricted to it is countably additive **and complete**. |
| 6 | MT-3 | **the extension of a premeasure** | $\mu^*$ built from $\mu_0$ restricts to $\mu_0$ on the algebra $\mathcal{A}_0$ — i.e. **$\mu^*(A) = \mu_0(A)$ for $A \in \mathcal{A}_0$**, which is *not* automatic and is where countable additivity of $\mu_0$ is consumed — and every $A\in\mathcal{A}_0$ is Carathéodory measurable. Uniqueness on $\sigma(\mathcal{A}_0)$ under σ-finiteness is a separate item, with the standard counterexample showing σ-finiteness cannot be dropped. |
| 7 | MT-4 | **the volume of a box, and Lebesgue measure** | the volume function on half-open boxes is finitely additive under subdivision (a combinatorial lemma, and the one most often waved through); the finite disjoint unions of half-open boxes form an algebra; volume is a **premeasure** on it (the compactness step). Then $\lambda_n$ is the Carathéodory extension, and $\lambda_n([a,b]) = \prod(b_i-a_i)$ is a theorem, not a definition. |
| 8 | MT-4 | **$\mathcal{L}(\mathbb{R}^n)$ versus $\mathcal{B}(\mathbb{R}^n)$** | $\mathcal{B}\subseteq\mathcal{L}$, and $\mathcal{L}$ is exactly the completion of $\lambda_n\!\restriction\!\mathcal{B}$. The second half is what licenses every "modify on a null set" argument later. |
| 9 | MT-4 | **the two null notions agree** | $\lambda_n^*(A) = 0$ **iff** $A$ is null in the published elementary sense of `def-measure-zero-and-content-zero` (closed covering intervals, sum $\le\varepsilon$, index from $0$). Both directions, with the open/closed interval conversion done explicitly. **This is the single most important item in the track**: without it, `thm-lebesgue-criterion`, `thm-cantor-function-properties`, `thm-fat-cantor-set-has-positive-measure` and every published "almost everywhere" say nothing to the new theory. Owner-named in the dispatch ("say explicitly where the elementary notion is subsumed"). |
| 10 | MT-4 | **"almost everywhere"** | the published corpus uses "a.e." in the elementary covering sense (`cor-ftc-integral-function-differentiable-almost-everywhere`, `thm-cantor-function-properties`). MT-4 defines a.e. against a general measure and proves that for $\lambda_n$ the two usages coincide — a consequence of row 9, stated as its own item because a reader meeting "a.e." twice deserves to be told once that it is one notion. |
| 11 | MT-6 | **the Lebesgue–Stieltjes measure $\mu_F$** | for increasing right-continuous $F$, $\mu_F((a,b]) := F(b)-F(a)$ extends to a premeasure on the algebra of finite disjoint half-open intervals — right-continuity is exactly what makes it countably additive, and the item exhibits the failure for a non-right-continuous $F$. Conversely a Borel measure finite on compacta determines $F$ up to an additive constant. The correspondence is a **bijection between $\{F\}/\text{constants}$ and $\{\mu\}$**, and both directions are separate items. |
| 12 | MT-7 | **measurable function** | for $f : X \to \overline{\mathbb{R}}$ it suffices to check $f^{-1}((a,\infty])\in\mathcal{A}$ for all real $a$, and equivalently for all rational $a$ — the reduction is an item, using row 2. For $f : X \to Y$ with $Y$ topological, $f^{-1}(\text{open})\in\mathcal{A}$; and the two definitions agree on $\overline{\mathbb{R}}$ with its order topology. |
| 13 | MT-7 | **the convention $0\cdot\infty := 0$** | see §D4. Its own item, saying what it is and what it is not. |
| 14 | MT-8 | **$\int s\,d\mu$ for a nonnegative simple $s$** | independent of the representation $s = \sum_{j} c_j\mathbf{1}_{E_j}$: any two representations give the same value. Proved through the *canonical* representation (distinct values, disjoint preimages) and a common-refinement argument. Without it $\int$ is not a function. |
| 15 | MT-8 | **$\int f\,d\mu$ for $f \ge 0$ measurable** | it agrees with row 14 when $f$ is itself simple (the sup is attained). A one-line item that is skipped everywhere and is exactly the kind of gap that makes a later "by definition" false. |
| 16 | MT-8 | **$\int f\,d\mu$ for signed and complex $f$** | $f^+ , f^-$ are measurable and nonnegative; the value $\int f^+ - \int f^-$ is defined precisely when not both are $\infty$; it agrees with rows 14–15 on nonnegative $f$; it is unchanged if $f$ is altered on a null set. |
| 17 | MT-8 | **$\int_E f\,d\mu := \int f\mathbf{1}_E\,d\mu$** | agrees with the integral over the measure space $(E, \mathcal{A}\!\restriction\! E, \mu\!\restriction\! E)$. The two readings of "integrate over $E$" must be identified once. |
| 18 | MT-11 | **the product σ-algebra and the product measure** | sections $E_x$ of a product-measurable $E$ are measurable (the monotone class argument); $x\mapsto\nu(E_x)$ is measurable; the two candidate definitions $\int\nu(E_x)d\mu$ and $\int\mu(E^y)d\nu$ **agree**, and that common value is the product measure; it is the unique measure with $\pi(A\times B)=\mu(A)\nu(B)$ **when both factors are σ-finite**. Without σ-finiteness the uniqueness fails and the item exhibits it. |
| 19 | MT-11 | **$\lambda_{m+n} = \lambda_m\times\lambda_n$**, and the completion caveat | the *Borel* product σ-algebras satisfy $\mathcal{B}(\mathbb{R}^m)\otimes\mathcal{B}(\mathbb{R}^n) = \mathcal{B}(\mathbb{R}^{m+n})$ (second countability is what makes this true, and the item says so); but $\mathcal{L}(\mathbb{R}^m)\otimes\mathcal{L}(\mathbb{R}^n)\subsetneq\mathcal{L}(\mathbb{R}^{m+n})$, **strictly**, with a witness. So "Lebesgue measure on $\mathbb{R}^{m+n}$ is the product of Lebesgue measures" is true only after completion, and the page states the corrected form. |
| 20 | MT-12 | **a signed measure** | it may take **at most one** of the values $\pm\infty$ — the clause is not stylistic, it is what makes $\nu(A)+\nu(B)$ defined; and countable additivity is required to converge **absolutely** when $\nu(\bigcup E_k)$ is finite, because the union does not depend on the order. Both clauses get a sentence and the second gets a proof. |
| 21 | MT-12 | **the total variation $\lvert\nu\rvert$** | $\lvert\nu\rvert(E) := \sup\sum_k\lvert\nu(E_k)\rvert$ over countable measurable partitions of $E$ is a **measure**; for a signed $\nu$ it equals $\nu^+ + \nu^-$ from the Jordan decomposition; the Jordan decomposition is the **unique** decomposition into mutually singular positive measures, which is what licenses "the" positive and negative parts. |
| 22 | MT-13 | **$d\nu/d\mu$** | existence is Radon–Nikodym; **uniqueness is only $\mu$-a.e.**, so the symbol denotes an equivalence class, and every identity involving it is an a.e. identity. Stated once, loudly, and the chain rule and the $\nu\perp\mu$ case are then unambiguous. |
| 23 | MT-13 | **the Lebesgue decomposition** $\nu = \nu_a + \nu_s$ | existence, and **uniqueness** of the pair. Uniqueness is what makes "the absolutely continuous part" a phrase. |
| 24 | MT-14 | **$L^p(\mu)$ and $\lVert\cdot\rVert_p$** | §D5: three items. Plus, for $p=\infty$: the essential supremum is **attained as a supremum over a set of full measure**, i.e. $\lvert f\rvert \le \lVert f\rVert_\infty$ a.e., which needs a countable-union argument and is false for the pointwise sup. |
| 25 | MT-15 | **convolution $f*g$** | for $f,g\in L^1(\mathbb{R}^n)$: $y\mapsto f(x-y)g(y)$ is measurable for a.e. $x$ (needs the measurability of $(x,y)\mapsto f(x-y)$, which needs that $(x,y)\mapsto x-y$ is continuous **and** that composing a Lebesgue-measurable function with it need not be measurable — so the item is stated for Borel representatives and then transferred). This is a classical trap and gets its own lemma. Then $f*g$ is defined a.e., is in $L^1$, and $\lVert f*g\rVert_1 \le \lVert f\rVert_1\lVert g\rVert_1$; and $f*g = g*f$. |
| 26 | MT-16 | **the operator norm of a bounded linear functional on $L^p$** | the concrete definition $\lVert\Lambda\rVert := \sup\{\lvert\Lambda f\rvert : \lVert f\rVert_p\le 1\}$ is finite exactly when $\Lambda$ is bounded, and the sup is over a nonempty set. Deliberately **not** the abstract dual-space definition — §8 seam 2. |
| 27 | MT-17 | **the Hardy–Littlewood maximal function** | $Mf(x) := \sup_{r>0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}\lvert f\rvert$ is **measurable** — the sup is over an uncountable family, so measurability is a theorem (the set $\{Mf>t\}$ is open), not an observation. |
| 28 | MT-17 | **a Lebesgue point** | the defining limit is over $r\to 0^+$ of an average; the averaging denominators are nonzero; and the notion is **independent of the representative** of $f\in L^1_{loc}$ only in the sense that the *set* of Lebesgue points changes by a null set. Say it exactly. |
| 29 | MT-18 | **the four Dini derivates** | $D^+, D_+, D^-, D_-$ exist in $\overline{\mathbb{R}}$ for every function, always; $f'(x)$ exists iff all four agree and are finite. The published `def-derivative` is the two-sided limit, so the relation between the two notions is an item. |
| 30 | MT-19 | **Luzin's property (N)** | its own definition item, with the Cantor function as the standard failure and with the observation that (N) is *not* implied by continuity + BV — that is precisely the content of Banach–Zarecki. |
| 31 | MT-20 | **a Radon measure** | **Three inequivalent conventions and one homonym, all verified against the sources in §11.5.** (a) *Weak*: finite on compacta, outer regular on all Borel sets, inner regular on **open sets only** — Folland 7.1, Royden–Fitzpatrick §21.3, and Cohn's `regular Borel measure` (§7.2 p. 189) are the same object under two names, as RF's own footnote 4 records. (b) *Strong*: inner regular on **all** Borel or all measurable sets — Tao Ex. 1.7.11, Fremlin 411Hb; Rudin's "regular" is this, and he proves it is **unobtainable** from his representation theorem without σ-compactness. (c) *Not a measure at all*: Cohn's own `Radon measure` (§7.5 p. 217) is **Bourbaki's — a linear functional on $C_c(X)$**, and he exhibits one representable by no signed Borel measure. Wheeden–Zygmund and Bass never use the term. MT-20 adopts (a), names (b) and (c), and **proves** the coincidence of (a) and (b) when every open set is σ-compact. | MT-20 adopts one, names the other, and proves the coincidence theorem. Silent convention choice here is a real defect: the uniqueness clause of RMK is *false* without a regularity restriction, with a standard counterexample. |
| 32 | MT-20 | **$C_c(X)$ and a positive linear functional** | $C_c(X)$ is a vector space and a lattice; positivity ($f\ge0\Rightarrow\Lambda f\ge0$) implies monotonicity; and for the LCH Urysohn step, given $K$ compact $\subseteq U$ open there is $f\in C_c(X)$ with $\mathbf{1}_K\le f\le\mathbf{1}_U$ and $\operatorname{supp}f\subseteq U$ — a **lemma**, derived from `thm-locally-compact-hausdorff-basics` plus `thm-urysohn-lemma` on the compact Hausdorff set $\overline{V}$. The library does not have this LCH form and it must be built. |
| 33 | MT-21 | **$\mathcal{H}^s$** | the $\delta$-approximating quantities $\mathcal{H}^s_\delta$ **increase** as $\delta$ decreases, so the limit exists in $[0,\infty]$; $\mathcal{H}^s$ is an outer measure; it is a **metric** outer measure, hence every Borel set is measurable by Carathéodory's criterion (MT-3). |
| 34 | MT-21 | **Hausdorff dimension** | $\{s : \mathcal{H}^s(A) = \infty\}$ and $\{s : \mathcal{H}^s(A) = 0\}$ are complementary rays with a single crossover, so $\dim_H A := \inf\{s : \mathcal{H}^s(A)=0\}$ is well defined; and the crossover value itself may be $0$, finite positive, or $\infty$, with a witness for each. |
| 35 | MT-22 | **an ergodic system, and the invariant σ-algebra** | $\mathcal{I} := \{E : T^{-1}E = E\}$ is a σ-algebra; the variant $\{E : \mu(T^{-1}E \triangle E) = 0\}$ is a **different** σ-algebra, and the two give the same notion of ergodicity — an item, because the literature uses both and a proof citing the wrong one is a real defect. |
| 36 | MT-23 | **the time average $A_n f := \frac1n\sum_{k<n} f\circ T^k$** | $f\circ T$ is measurable; $A_nf$ is measurable; and for $f\in L^1$, $\lVert A_n f\rVert_1 \le \lVert f\rVert_1$, so the averages stay in $L^1$. Trivial, and it is what the whole page manipulates. |

---

## 6. Forward references

**None load-bearing, and none on a spine item.** SEAMS §5's mechanism
(`forward_refs`, gated by `tools/fwdcheck.mjs`) permits a load-bearing forward
reference only on a consequence kind, and this track proposes none.

Three orientation-only forward references are proposed, all on `rem-` items, all
pointing strictly later in plan order:

| from | to (track) | what it says |
|---|---|---|
| MT-14 `rem-lp-completeness-and-the-banach-property` | `functional-analysis`'s normed/Banach page | "A complete normed space is called a Banach space; that name and the general theory are taken up there." Orientation only; the mathematics is complete here. |
| MT-16 `rem-duality-as-a-dual-space-statement` | `functional-analysis`'s dual-space page | "In the language of dual spaces this theorem reads $(L^p)^*\cong L^q$ isometrically." Orientation only. |
| MT-13 `rem-radon-nikodym-via-hilbert-space` | `functional-analysis`'s Hilbert-space page | von Neumann's route, named, with what it costs. Orientation only; §D7. |

All three are contingent on the orchestrator's ruling in §8; if a seam is resolved
by letting this track mint the vocabulary, the corresponding forward reference
disappears and the remark becomes an ordinary agreement remark.

**Backward-citation hazard, recorded.** Because this block lands *below* complex
analysis, categories and homological algebra but *above* all of real analysis and
topology, nothing above it may be cited and everything below it may. The three
places where an author will be tempted to reach upward are: the Riesz–Thorin
theorem (§2 row 6), the Fourier characterisation of $L^2$ (§2 row 3), and
Hilbert-space projection (§D6). All three are handled.

---

## 7. Discharging `DEFERRED.md` §1 — the un-deferral ledger

`deferred-measure-and-integration` is **published** with 29 `rem-` items, each
`proved_here: false`, each carrying the fuchsia ‡ marker. This is the track's
explicit backlog and this table is its disposition, result by result.

**Mechanics first, because they constrain every row.** An id is immutable on
`main` and a `rem-` may not become a `thm-`. So a discharged row means: mint a new
proof-bearing item on the MT page, list the retired `rem-` id in the new item's
`aliases` so wikilinks resolve, and — only with explicit owner approval at that
time — remove the `rem-` from the catalogue page's `items` list. **Removal is a
deletion and deletions are owner-only** (`AUDIT-WORKFLOW.md` §2.3). Nothing in
this commission removes anything.

The blast radius is small and was measured: across all of `items/`, exactly
**four** edges point at these 29 ids — `rem-integral-conventions-and-scope`
mentions `rem-dominated-convergence-theorem` and `rem-ftc-absolutely-continuous`
in `external_refs`, `fs-every-ultrafilter-principal` mentions
`rem-sierpinski-ultrafilter-not-measurable`, and `rem-kolmogorov-divergent-fourier`
has a real `deps` edge to `rem-lebesgue-measure-and-integral`. So discharging the
backlog changes almost nothing downstream, and **no published ‡ marking is
falsified by this track**: the ‡ items sit at order 1 and the proofs sit above
order 288, so a consumer at order 1 still rests on an unproved result. That is
correct and must not be "fixed" by a backward citation.

| ‡ item | fate | discharged by |
|---|---|---|
| `rem-lebesgue-measure-and-integral` | **discharged** | MT-3 (Carathéodory) + MT-4 (the construction) + MT-8 (the integral). Its stated outer measure uses *open* intervals; MT-4 well-definedness row 9 proves the agreement with the closed-interval elementary notion, so the retired remark and the new theory say the same thing. |
| `rem-monotone-convergence-theorem` | **discharged** | MT-8 `thm-monotone-convergence-for-the-integral` (the bare id `thm-monotone-convergence` is **taken** by the published real-sequence theorem on `monotone-sequences-and-cauchy-completeness` — see §10) |
| `rem-fatou-lemma` | **discharged** | MT-8 `thm-fatou-lemma` |
| `rem-dominated-convergence-theorem` | **discharged** | MT-8 `thm-dominated-convergence` |
| `rem-vitali-covering-theorem` | **discharged** | MT-18 `thm-vitali-covering-theorem` |
| `rem-mini-vitali-covering-theorem` | **discharged** | MT-17 `thm-vitali-covering-lemma` + MT-18. Note the remark's `short` says it characterises measure zero by open, full and fine covers; MT-18 must prove **that** statement, not merely the $5r$ lemma, or the discharge is incomplete. |
| `rem-lebesgue-monotone-differentiation` | **discharged** | MT-18 `thm-monotone-functions-are-differentiable-almost-everywhere` |
| `rem-lebesgue-differentiation-theorem` | **discharged** | MT-17 `thm-lebesgue-differentiation-theorem` |
| `rem-absolutely-continuous-function` | **already half-discharged, and this completes it** | the elementary definition and the $C^1\subseteq\mathrm{Lip}\subseteq AC\subseteq C\cap BV$ hierarchy are **already published** at order 163 (`def-absolutely-continuous-function`, `thm-c1-lipschitz-ac-bv-hierarchy`). MT-19 adds Luzin (N), the FTC characterisation and Banach–Zarecki. The remark itself becomes redundant rather than replaced. |
| `rem-ftc-absolutely-continuous` | **discharged** | MT-19 `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`. Note it is homed on the ‡ catalogue at order 1, **not** on `the-fundamental-theorems-of-calculus` (239), correcting the dispatch. |
| `rem-banach-zarecki` | **discharged** | MT-19 `thm-banach-zarecki` |
| `rem-egorov-theorem` | **discharged** | MT-10 `thm-egorov` |
| `rem-lusin-theorem` | **discharged** | MT-10 (for $\lambda_n$) and MT-20 (for a Radon measure), with the agreement item |
| `rem-holder-minkowski-integral` | **discharged** | MT-14 `thm-holder-inequality-for-integrals`, `thm-minkowski-inequality-for-integrals` |
| `rem-riesz-fischer` | **PARTIALLY discharged — flag this row** | MT-14 `thm-riesz-fischer` proves completeness of $L^p$ for $1\le p\le\infty$. The remark's `short` additionally asserts "$L^2$ is isomorphic to $\ell^2$ through Fourier coefficients", which is Fourier analysis (§2 row 3) and stays deferred. **The catalogue entry may not be removed on the strength of MT-14 alone**; either the remark is narrowed by an owner-approved edit or it waits for `functional-analysis`. Recorded so nobody removes it and leaves the library claiming a Fourier theorem it has not proved. |
| `rem-lp-separability` | **discharged** | MT-15 `thm-lp-is-separable` + `cex-l-infinity-is-not-separable`. The remark says "separable for finite $p$ over a countably generated measure" — MT-15 proves exactly that hypothesis, not the false unrestricted form. |
| `rem-fubini-tonelli` | **discharged** | MT-11 `thm-tonelli` + `thm-fubini` |
| `rem-fubini-counting-measure-diagonal` | **discharged** | MT-11 `cex-tonelli-fails-without-sigma-finiteness` |
| `rem-sierpinski-iterated-integrals` | **STAYS ‡** | needs CH (§2 row 12). MT-11 cites it. |
| `rem-vitali-non-measurable-set` | **discharged for the construction; the independence half STAYS ‡** | MT-5 `thm-a-vitali-set-is-not-lebesgue-measurable` proves the construction and its AC cost. The Solovay/Shelah half ("ZF + DC does not prove one exists, on an inaccessible") is forcing and stays with `deferred-set-theory-beyond-choice`. The row must be split by an owner-approved edit or left in place; **do not remove it wholesale**. |
| `rem-sierpinski-ultrafilter-not-measurable` | **discharged** | MT-5 `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable`, proved from Steinhaus plus the $0$–$1$ law for the tail; the Baire-property half stays ‡. Same split caution as the row above. |
| `rem-banach-tarski` | **STAYS ‡** | §2 row 13; it is homed on `deferred-set-theory-beyond-choice`, not here, and this track does not touch it |
| `rem-henstock-kurzweil-vs-lebesgue` | **STAYS ‡** | §2 row 8 |
| `rem-du-bois-reymond-divergent-fourier` | **STAYS ‡** | §2 row 11 |
| `rem-kolmogorov-divergent-fourier` | **STAYS ‡** | §2 row 11. It is the only one of the 29 with a real `deps` edge (to `rem-lebesgue-measure-and-integral`); if that target is ever retired the edge must be re-pointed, and that is an owner decision. |
| `rem-riesz-markov-kakutani` | **discharged** | MT-20 `thm-riesz-markov-kakutani` |
| `rem-semicontinuous-not-ae-riemann` | **discharged** | MT-9 `cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function`. The catalogue page itself already flags this as a candidate for un-deferral; MT-9 has the fat Cantor set (published) and the Lebesgue criterion (published) and closes it. |
| `rem-null-set-not-discontinuity-set` | **discharged** | MT-9 `cex-a-null-set-that-is-no-functions-discontinuity-set`. Also already flagged as a candidate on the catalogue page: discontinuity sets are $F_\sigma$ (`def-f-sigma-g-delta` is published) and some null sets are not. **Honest note**: this may already be provable *without* this track, and if a future real-analysis level closes it first, MT-9 cites instead of re-proving. |
| `rem-improper-riemann-not-lebesgue` | **discharged** | MT-9 `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable` |

**Score, so the orchestrator can recount it from the table**: 23 discharged, 2
partially discharged with a named residue, 4 stay ‡ with a reason.

`DEFERRED.md` §1 also names two rows that are not on the catalogue page:
**Arzelà's bounded convergence theorem** ("not deferred, but its natural home is
next to dominated convergence") — MT-9 gives it that home, deriving the Riemann-level
statement from DCT and recording the agreement with whatever the Riemann pages
prove; and the **Gelbaum–Olmsted ch. 8** items, of which the two named
(`rem-semicontinuous-not-ae-riemann`, `rem-null-set-not-discontinuity-set`) are
discharged above and the third, "an improper Riemann integral existing where the
Lebesgue integral does not", is `rem-improper-riemann-not-lebesgue`, also
discharged.

---

## 8. Amendments owed to other scaffolds, and unresolved seams

Per SEAMS §0.1 this file writes nothing outside itself. Everything below is
addressed to the orchestrator, who applies it at reconciliation.

### 8A. Amendments owed

**1. To `research/plan-functional-analysis-track.md` (`functional-analysis`, wave 2, NEW).**
This is the largest amendment and the one that most changes another track's job.
That track lands **immediately above** this one (SEAMS §3: its anchor is
"`measure-theory`'s last page"), so everything here is available to it.

  a. **It must not re-mint anything in §0's table.** In particular not
     $\sigma$-algebras, measures, the integral, $L^p$, Hölder, Minkowski,
     Riesz–Fischer, Radon–Nikodym, Fubini, or Riesz–Markov–Kakutani.
  b. **It owes three dictionary items** — each closing a seam this track had to
     leave open, and each an *agreement* item in the style of
     `def-metrizable-space`, not a re-proof:
     - "a complete normed space is a **Banach space**", with $L^p(\mu)$ named as
       an example, citing MT-14 `thm-riesz-fischer`;
     - "$(L^p)^* \cong L^q$ isometrically", citing MT-16's concrete theorem;
     - the general **Hilbert-space projection theorem**, with a remark recording
       that MT-23 built the $L^2$ case by hand and that the two agree (§D6).
  c. **Its Hilbert-space page should state $L^2(\mu)$ as the motivating example**
     and may cite MT-14 for completeness rather than proving it again.
  d. **Its Fourier block is unblocked.** $L^1$, $L^2$, convolution, approximate
     identities and the Riemann–Lebesgue lemma all rest on MT-8, MT-14 and MT-15.
  e. **Its ‡ catalogue `deferred-functional-analysis` (33 published items) is
     unaffected by this track except for one row**: `rem-radon-nikodym-property`
     is a *Banach-space* property (a space has the RNP when vector-valued measures
     of bounded variation have densities) and is **not** discharged by MT-13,
     which proves the scalar theorem. Do not let a reconciliation pass confuse
     them. `rem-dual-of-l-infinity` likewise stays — §2 row 15b.
  f. **Uniform boundedness / Banach–Steinhaus is nearer than its catalogue entry
     suggests.** `DEFERRED.md` §2 already flags it as borderline; norms and the
     Baire theorem are published. That is that track's call, not mine, but the
     du Bois-Reymond row of this track's §2 depends on it.

**2. To `research/plan-complex-analysis-track.md` (`complex-analysis`, wave 4, ENRICH).**
That track's scope-denial table (its §"Scope denials (CX-D10 req. 3)") has
**seven rows whose stated blocker is "row 1 = measure theory"**. Since SEAMS §3
places the analysis band **below** complex analysis, five of those seven change.
This is the single largest downstream consequence of this track and it should be
routed to that scaffolder explicitly.

  | its row | its stated blocker | what changes |
  |---|---|---|
  | 1 — Lebesgue measure, $L^p$, DCT | "not in the library's plan" | **void.** The plan now has them, strictly below CA-1. Every other row that says "row 1" must be re-read. |
  | 2 — Hartogs on separate holomorphicity (partial) | Hartogs's lemma on subharmonic functions needs **Fatou's lemma** | **unblocked as to Fatou.** Whether the full theorem is now in scope depends on row 3 as well; flag for reconsideration, do not promise it. |
  | 3 — upper-semicontinuous subharmonic and plurisubharmonic theory | "the sub-mean-value inequality for a USC function is an inequality between integrals of USC functions" | **unblocked.** A USC function bounded above on a circle is measurable (it is Borel) and its integral against arc-length measure is defined by MT-8. CX-D6's "continuous convention" for plurisubharmonicity may be **upgraded to the standard USC convention**, which is the mathematically right one and which that track adopted only because of this blocker. |
  | 11 — Hardy spaces $H^p$, Fatou's radial-limit theorem, F. and M. Riesz, the Bergman kernel | "rows 1 and functional analysis" | **partly unblocked.** $H^p$ and Fatou's radial-limit theorem need $L^p$ of the circle (MT-6 gives arc-length measure as a Lebesgue–Stieltjes measure, MT-14 gives $L^p$) and the Poisson kernel, which that track already has. F. and M. Riesz additionally wants complex measures on the circle — MT-12 and MT-13 supply them. The Bergman kernel still wants Hilbert space. |
  | 12 — the Fourier transform, Paley–Wiener, Poisson summation | "row 1" | **re-point the blocker**: it is `functional-analysis`, not measure theory. Consequence: CA-22's choice of the Hankel-contour route for the functional equation of $\zeta$ over the theta/Poisson route is still forced, but for a different reason, and the remark that records the choice must be corrected. |
  | 15 — distributions, $\bar\partial$ distributionally | "rows 1 and 6" | **re-point**: `functional-analysis` and a sheaf track. |
  | 17 — Looman–Menchoff | "the proof is a genuine piece of real-variable measure theory" | **unblocked in principle.** Flag for reconsideration at that track's step 2. Its CA-1 currently plans a `rem-` recording the theorem in the "this proof assumes continuous partials" form; that remark's scope wording must be re-checked either way. |

  **New proposal to that track: it should take Riesz–Thorin interpolation.**
  §2 row 6 here: the three-lines theorem is CA machinery and $L^p$ now sits below
  it, so the natural home for Riesz–Thorin is a complex-analysis page, not this
  one. MT-17's Marcinkiewicz theorem is the real-variable half and would be its
  companion. If that track declines, the result is a genuine gap and should be
  recorded as such by whoever declines it.

**3. To `research/plan-probability-track.md` (`probability-theory`, wave 3, NEW).**

  a. It must **not** re-mint σ-algebras, measures, the integral, the convergence
     theorems, product measures, Radon–Nikodym or $L^p$. Its whole measure-theoretic
     base is MT-1 … MT-16.
  b. Its **Kolmogorov extension theorem** is the infinite-product generalisation
     of MT-11; MT-22 builds the $\{0,1\}^{\mathbb{N}}$ case by hand (§D8) and that
     track should cite it as the motivating special case rather than pretend it is
     new. If that track would rather own the coin-flip measure outright, say so at
     reconciliation and MT-22 will cite instead — but then MT-23 has no example
     and Borel's normal-number theorem moves with it.
  c. Its **conditional expectation** is Radon–Nikodym applied to $\nu = \int_A X d\mathbb{P}$;
     MT-13 is the input.
  d. Its **strong law for stationary sequences** is MT-23's Birkhoff theorem; the
     i.i.d. case is Birkhoff for the Bernoulli shift. SEAMS §4 already routes this
     ("`probability-theory` cites for stationary sequences") and MT-23 is written to
     be citable that way.
  e. **`finite-probability-spaces-and-random-variables` (220.2) is published and
     is `combinatorics`'s.** Its `thm-markov-inequality` and `thm-chebyshev-inequality`
     are stated on a **finite** probability space. MT-8 mints the general
     `thm-chebyshev-markov-inequality-for-the-integral` and owes an agreement
     remark; `probability-theory` should not mint a third.
  f. **It mints `def-conditional-expectation`, and owes MT-23 an agreement remark.**
     SEAMS §4 gives conditional expectation to that track, and it lands above this
     one — but Birkhoff's theorem needs its limit function identified, and the
     identification *is* a conditional expectation. MT-23 therefore states the
     characterising property outright ("the $\mu$-a.e. unique
     $\mathcal{I}$-measurable $f^*$ with $\int_Ef^*=\int_Ef$ for every
     $E\in\mathcal{I}$", existing by MT-13's Radon–Nikodym theorem) and never names
     it. That is complete mathematics and costs no forward reference.
     `probability-theory` mints the definition, proves it is the same object, and
     cites MT-23 rather than re-deriving the ergodic limit. **This seam was found
     while scaffolding MT-23 and is new**; it is the fifth owed seam counted in §0,
     and unlike seams 1–3 it is not a vocabulary question — getting it wrong would
     duplicate a construction.

**4. To `research/plan-pde-track.md` (`pde`, wave 3, NEW).** Sobolev spaces are
built on $L^p$ (MT-14), on convolution and mollifiers (MT-15), and on the density
of $C_c^\infty$ (MT-15). The Newtonian potential and Green's-function
representations are Lebesgue integrals over $\mathbb{R}^n$ with an integrable
singularity — MT-8 plus MT-11's Tonelli, and the polar-coordinates formula, which
**MT-11 must supply** and does (see MT-11's item list). Nothing is owed back.

**5. To `research/plan-differential-geometry-track.md` (`differential-geometry`, wave 3, NEW).**
Integration on manifolds against a density or a Riemannian volume form is a
Lebesgue integral in each chart glued by a partition of unity; the partition of
unity is published (269) and the chart-wise integral and its change-of-variables
invariance are MT-4 (linear) plus the $C^1$ change of variables, which **this
track does not prove** — see §2 and MT-11's traps. That track needs the
$C^1$-diffeomorphism change of variables for the *Lebesgue* integral. It is
reachable from `fubini-and-change-of-variables` (237, Riemann) plus MT-9's
comparison for continuous compactly supported integrands, and then a monotone-class
extension. **If `differential-geometry` needs it in full generality, it should say
so at reconciliation and this track will add it to MT-11** rather than have two
tracks each assume the other proved it. Recorded as unresolved seam 4.

**6. To the orchestrator, on splice mechanics.**

  a. **The `category` string.** `library/real-analysis/measure-theory/` exists on
     disk with a `_category.md` (`name: measure-theory`, `title: Measure Theory`,
     `status: draft`) and no pages. No page in `research/plan-spec.json` currently
     uses a nested category, so the orchestrator must decide whether these 46
     pages get `category: measure-theory` (a new top-level group, matching what
     `complex-analysis` did) or a nested value pointing into that directory.
     `tools/depcheck.mjs` walks `library/` recursively and carries the nested path,
     so both work mechanically. **Recommendation: a new top-level
     `measure-theory` group**, on the CA precedent (its CX-D3 verified that the
     frozen `web/lib/library-categories.ts` has no `topology` entry either and
     renders it through `FALLBACK`, so adding a group needs no change to a frozen
     file, and giving it a hue is the owner's call alone). The empty nested
     directory should then be left alone or removed by the owner, not silently
     repurposed.
  b. **`_category.md` says `status: draft`** and must be flipped when the first
     page publishes, or the group will not render.
  c. **Record the spec/disk divergence at the ‡ catalogues** (§0, correction 1) in
     whatever SEAMS successor the next commission reads, so no future scaffolder
     repeats the mistake of trusting `items: []` there.

**7. To `DEFERRED.md`.** §1's rows are discharged as tabulated in §7. That file is
owner-maintained and its §6 step 4 ("delete the entry when it is discharged")
happens at publication, not now.

### 8B. Unresolved seams — four, needing an orchestrator ruling

These follow SEAMS §5's escalation: I could not resolve them by reordering, by
proving a special case, or by a legal forward reference, so they are recorded
rather than silently decided. **In every case I have written the track to proceed
under the existing ruling**, so none of them blocks authoring; the ruling only
decides whether some vocabulary is nicer.

**Seam 1 — the word "Banach space".** SEAMS §4 gives "normed and Banach spaces"
to `functional-analysis`, which lands above this track. `def-norm-and-normed-space`
is **published** (order 167) so "normed space" is free; "Banach space" is not.
*Proceeding under the ruling*: MT-14 proves "$L^p(\mu)$ is a complete normed
space" and carries an orientation-only forward reference (§6). *Cost*: a reader
meets the object three pages before its name. *Alternative if the orchestrator
prefers*: let MT-14 mint `def-banach-space` and have `functional-analysis` cite
it. I do not recommend this — the definition belongs with the three big theorems
that use it.

**Seam 2 — the phrase "the dual space $(L^p)^*$".** Same shape. SEAMS §4 assigns
$L^p$ duality **to this track** ("$L^p$ spaces entire … **and the duality
$(L^p)^*\cong L^q$**") while assigning "dual spaces" to `functional-analysis`.
Those two assignments are in tension and the tension is unavoidable given the
placement.
*Proceeding under the ruling*: MT-16 states and proves the theorem concretely —
"for every linear $\Lambda : L^p(\mu)\to\mathbb{R}$ with
$\lvert\Lambda f\rvert \le C\lVert f\rVert_p$ there is a unique $g\in L^q(\mu)$
with $\Lambda f = \int fg\,d\mu$ for all $f$, and the least such $C$ is
$\lVert g\rVert_q$" — which is the whole mathematical content and needs no dual
space. `functional-analysis` then adds the one-line restatement. *Cost*: none
mathematically; the isometric-isomorphism *phrasing* waits.

**Seam 3 — complex scalars.** `def-norm-and-normed-space` is over $\mathbb{R}$
only, and there is no published complex normed space. `functional-analysis` owns
the abstraction and lands above.
*Proceeding under the ruling*: §D11 — complex-valued integrands and complex
measures are handled concretely and no complex normed space is named.
*If the orchestrator disagrees*, the cheapest fix is for `functional-analysis` to
generalise `def-norm-and-normed-space`'s successor to an arbitrary
$\mathbb{R}$- or $\mathbb{C}$-vector space and record the agreement; that is a new
definition in that track, not an edit to the published one.

**Seam 4 — the $C^1$ change of variables for the Lebesgue integral.** Neither
this track's remit list nor `differential-geometry`'s names it, and both need it.
This track proves the **linear** change of variables
$\lambda_n(T(E)) = \lvert\det T\rvert\,\lambda_n(E)$ on MT-4, which is what
Lebesgue measure's own theory requires, and the polar-coordinates formula on
MT-11, which is what MT-17 and MT-21 require. The general
$C^1$-diffeomorphism theorem is a further page's worth of work.
*Recommended ruling*: assign it to **this track**, as three or four items at the
end of MT-11, proved from the published Riemann change of variables
(`fubini-and-change-of-variables`, 237) for continuous compactly supported
integrands plus a monotone-class extension. It is measure theory, `pde` and
`differential-geometry` both want it, and neither of them is the natural home.
I have scaffolded it that way in MT-11 and marked the items **conditional on this
ruling** so they can be lifted out cleanly if the orchestrator decides otherwise.

---

## 9. Ids: what is already taken, and the naming rules this track follows

`ls items/ | grep -i '<name>'` was run for every name below, on 2026-08-13,
against the 4172-file item pool. The unqualified name is gone more often than not,
because the library has been minting per-category since the topology track and
because the ‡ catalogue already spent 29 measure-theoretic names.

**Taken, and the consequence.**

| the name I wanted | who has it | what this track uses instead |
|---|---|---|
| `thm-monotone-convergence` | the real-sequence theorem on `monotone-sequences-and-cauchy-completeness` | `thm-monotone-convergence-for-the-integral` |
| `thm-caratheodory-characterisation` | Carathéodory's *differentiability* characterisation on `the-derivative-and-mean-value-theorems` | `thm-caratheodory-measurable-sets-form-a-sigma-algebra`, `def-caratheodory-measurable` |
| `thm-jordan-decomposition-for-bv-functions` | the BV theorem at 163 | `thm-jordan-decomposition-for-signed-measures` |
| `def-bounded-variation-and-total-variation` | the BV definition at 163 | `def-total-variation-of-a-signed-measure` |
| `thm-markov-inequality`, `thm-chebyshev-inequality` | the finite-probability versions | `thm-chebyshev-markov-inequality-for-the-integral` |
| `thm-holder-finite-real-exponents`, `thm-minkowski-finite-real-exponents`, `thm-minkowski-finite` | the finite-sum versions at 177 and 16 | `thm-holder-inequality-for-integrals`, `thm-minkowski-inequality-for-integrals` |
| `thm-birkhoff-representation-finite-distributive-lattices` | the lattice theorem | `thm-birkhoff-ergodic-theorem` is free |
| `thm-poincare-lemma-for-star-shaped-domains` | the differential-forms lemma | `thm-poincare-recurrence` is free |
| `def-absolutely-continuous-function` | **published at 163, and it is exactly the definition this track needs** | cite it; MT-19 mints only `def-luzin-property-n` and the theorems |
| `def-measure-zero-and-content-zero` | published at 133 | cite it; MT-4 mints `def-lebesgue-outer-measure` and the agreement theorem |
| `def-metric-completion`, `thm-metric-completion-exists` | the metric completion at 118 | `def-completion-of-a-measure-space`, `thm-completion-of-a-measure-space-exists` |
| `def-separable-space` | the topological definition at 273 | cite it; `thm-lp-is-separable` says the metric space $L^p$ is separable **in that sense**, which is an agreement obligation, not a new definition |
| the 29 `rem-` names on `deferred-measure-and-integration` | see §7 | every one of them; the new items take `thm-`/`cex-` prefixes with the same stem, and list the `rem-` id in `aliases` |

**Free, checked**: `def-sigma-algebra`, `def-algebra-of-sets`, `def-measurable-space`,
`def-generated-sigma-algebra`, `def-borel-sigma-algebra`, `def-pi-system`,
`def-lambda-system`, `def-monotone-class`, `def-measure`, `def-measure-space`,
`def-sigma-finite`, `def-outer-measure`, `def-premeasure`, `def-lebesgue-measure`,
`def-measurable-function`, `def-simple-function`, `def-lebesgue-integral`,
`def-convergence-in-measure`, `def-uniformly-integrable`, `def-product-sigma-algebra`,
`def-signed-measure`, `def-absolutely-continuous-measure`, `def-mutually-singular`,
`def-lp-space`, `def-essential-supremum`, `def-conjugate-exponent`,
`def-convolution`, `def-maximal-function`, `def-lebesgue-point`,
`def-dini-derivates`, `def-radon-measure`, `def-regular-borel-measure`,
`def-hausdorff-measure`, `def-hausdorff-dimension`,
`def-measure-preserving-transformation`, `def-ergodic`, `def-invariant-sigma-algebra`,
`thm-egorov`, `thm-lusin`, `thm-fatou-lemma`, `thm-dominated-convergence`,
`thm-tonelli`, `thm-fubini`, `thm-radon-nikodym`, `thm-lebesgue-decomposition`,
`thm-riesz-fischer`, `thm-riesz-markov-kakutani`, `thm-hahn-decomposition`,
`thm-banach-zarecki`, `thm-vitali-covering-lemma`, `thm-vitali-covering-theorem`,
`thm-lebesgue-differentiation-theorem`, `thm-hardy-littlewood-maximal-inequality`,
`thm-marcinkiewicz-interpolation`, `thm-rising-sun-lemma`, `thm-steinhaus`,
`thm-von-neumann-mean-ergodic-theorem`, `thm-weyl-equidistribution`,
`thm-borel-normal-numbers`.

**Standing rule for step 1**: re-run the grep before minting. Twelve tracks are
scaffolding concurrently and this list is a snapshot, not a reservation.

**Notation.** No applied canonical embedding around a natural number:
write $2^{-k}$, $1/n$, $\lambda(B(x,1/k))$ — never $\iota(k)$ or $1/\iota(k)$
(`content-policy.mjs` error `notation-iota-applied`). Bare $\iota$ as the name of
an inclusion in a universal property is untouched and is not used in this track.

---

## 10. Component-provenance policy

`CLAUDE.md` requires `provenance.statement` and `provenance.proof` on every
mathematical-content item, with a recorded rationale, and forbids an
`ai-generated` **statement or construction** from being a `deps` target. A prose
scaffold is the wrong granularity for 700 individual rows, so the policy is
stated once here and each page section below lists only its **exceptions** — which
are exactly the items carrying truth risk.

**Default for this track.**

- `provenance.statement`: **`literature-derived`**. Every definition, theorem,
  lemma, proposition and corollary below is a standard result of measure theory
  and is backed by at least two of the sources in §11 with an exact locator. The
  step-1 Beta records the locator per item; if a locator cannot be produced for an
  item, that item is `ai-altered` at best and is re-examined, not relabelled.
- `provenance.proof`: **`ai-altered`** in general. The proofs are the standard
  ones, but they are rewritten against this library's dependencies and its phase
  format, and several are deliberately re-routed to avoid functional analysis
  (§D6, §D7) — that is material adaptation, not cosmetic editing, and it is what
  `ai-altered` means. Where a proof follows one named source clause for clause it
  is `literature-derived` and names it.
- Definitions and `rem-` items take `proof: not-applicable`.
- Agreement/dictionary items (well-definedness rows 9, 10, 17, 19; the seams of
  §1.2) are `statement: ai-altered` — the *content* is standard, but the exact
  claim "these two published notions coincide" is specific to this library's
  pairing of definitions and no source states it in that form. They are legitimate
  `deps` targets.

**The exceptions — every `ai-generated` statement or construction in the track.**
Each is a corollary, example or counterexample, each is directly checkable, and
**none may be a `deps` target** (`SCHEMA.md` §3, `generation.role` required).
They are listed per page below under "Generated items". The rule the author must
apply: if a would-be decomposition lemma has no source, keep it **inline** in the
proof it serves rather than minting a generated lemma.

**Truth-risk obligation.** Every `ai-generated` construction below is a
counterexample or a computed example, so its verification is a finite check, and
the step-1 Beta performs a counterexample search before authoring it. There are
**no** `ai-generated` theorems, propositions, definitions, false statements or
remarks in this track, which is what `CLAUDE.md` §"Generated-claim minimization"
requires.

---

## 11. The canonical-coverage harvest

`CLAUDE.md` §"Source depth and the canonical-coverage harvest" requires: (a) every
A/B pair backed by **at least two independent treatments**, one of them a textbook,
monograph or full lecture-note set with a harvestable table of contents; (b) the
**exact chapter/section range read** recorded per source, with **that source's own
section and named-result headings** enumerated over that range; (c) **every harvested
heading given an explicit disposition** — `included` (naming the scaffolded item),
`inline` (naming the item whose proof absorbs it), `already-published` (naming the
published item), `deferred` or `out-of-scope`, the last two with a reason about
*that specific result*.

### 11.0 Honesty statement — what was obtained, and how

| source | status | route |
|---|---|---|
| **Tao, _An Introduction to Measure Theory_** (AMS GSM 126) | **FULL TEXT** | author-hosted PDF, `https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf`, 265 pp., extracted locally with `pypdf`. 443 numbered environments recovered, **contiguous 1..max in every section**, which is what proves the whole body was read and not a fragment. |
| **Bass, _Real Analysis for Graduate Students_, version 5.0 (2024-10-31)** | **FULL TEXT** | `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`, 480 pp. 370 numbered declarations, contiguous in chapters 1–26. |
| **Folland, _Real Analysis_, 2nd ed. (Wiley 1999)** | **full text of chs. 0–3, 6–7**; TOC complete | university-hosted scan with an OCR text layer; the printed contents pages and every locator below read from the book's own body. |
| **Rudin, _Real and Complex Analysis_, 3rd ed.** | **full text**, chs. 1–3, 6–8 read | archive.org full-text derivative of the 1987 edition. |
| **Stein–Shakarchi, _Real Analysis_ (Princeton Lectures III)** | **full text**, subsection TOC verified twice | ETH library TOC scan **and** a publisher-quality (non-OCR) text layer; the two agree. |

**Two URL corrections worth recording so the next session does not repeat them.**
`https://bass.math.uconn.edu/3rd.pdf` and `.../real.html` are both **404**; Bass has
moved and the live text is **version 5.0**, not the 3rd edition. And **`WebFetch`
cannot read a PDF** — every source above was fetched with `curl` and extracted with
a `pypdf` venv.

**The gap this table exposes, stated before the harvest rather than after.** Tao's
book **does not contain** signed measures, the Hahn or Jordan decomposition,
Radon–Nikodym, $L^p$ spaces, Hölder, Minkowski, or the Riesz representation theorem
— verified by exhaustive search, not assumed; he defers them to *An epsilon of room*.
So **Tao cannot serve as one of the two independent treatments for MT-12, MT-13,
MT-14, MT-15, MT-16 or MT-20.** For those pairs the two treatments are Folland and
Bass (with Rudin third). Bass in turn has **no ergodic theory at all**, so MT-22 and
MT-23 are backed by Stein–Shakarchi ch. 6 §5 and the ergodic-theory sources of
§11.6, and MT-21 by Stein–Shakarchi ch. 7 and Folland ch. 11. §11.7 tabulates the
backing pair for each of the 23 pairs and is the row a reviewer should check first.

### 11.1 Convention ledger — where the sources disagree, and what this track adopts

Every row is a real divergence found in the text, not a stylistic difference.

| # | question | the divergence | **this track** |
|---|---|---|---|
| 1 | extend a premeasure from what? | **Algebra**: Tao (Def 1.7.7, "a pre-measure on a Boolean algebra"), Bass (Thm 4.17, "Suppose $\mathcal{A}_0$ is an algebra"), Folland (1.14), Stein–Shakarchi ch. 6 (Lemma 1.4/Thm 1.5). **Neither**: Rudin has no extension theorem at all — he builds Lebesgue measure from the Riesz representation theorem. **Semiring**: Cohn, Bogachev (§11.5). | **algebra** (§D2). Four of the five treatments agree; the semiring saves one lemma at MT-4 and costs a definition layer everywhere else. |
| 2 | how is Lebesgue measure constructed? | Folland and Bass: outer measure → Carathéodory → extension from an algebra. **Rudin: the Riesz representation theorem first** (Thm 2.14), Lebesgue measure as its corollary (2.20). **Stein–Shakarchi ch. 1: exterior measure from closed cubes, with measurability *defined* by open-set approximation**, not by Carathéodory — they reach Carathéodory only in ch. 6 for abstract exterior measures. | **Carathéodory** (§D1), with **Rudin's route proved as a theorem at MT-20** and its B page recovering $\lambda$ from the Riemann functional. A spine assuming "Carathéodory ⟹ Lebesgue measure" is Folland-shaped and **cannot cite Rudin ch. 2 for it**. |
| 3 | what is a measurable set? | Carathéodory criterion (Folland, Rudin, Tao, Bass) versus **Stein–Shakarchi ch. 1: $E$ measurable iff for every $\varepsilon$ there is an open $O\supseteq E$ with $m^*(O\setminus E)\le\varepsilon$**. S–S state the equivalence and do not prove it in ch. 1. | **Carathéodory**, with the S–S condition proved as one of MT-4's **Littlewood characterisations**. Any item citing S–S ch. 1 for a measurability fact inherits their definition, and MT-4 is what makes such a citation legal. |
| 4 | Lebesgue–Stieltjes normalisation | **Right-continuous, $(a,b]$**: Bass (Ex. 4.4, verbatim "increasing right continuous"), Folland (1.15/1.16, remarking the $[a,b)$/left-continuous theory works equally), Stein–Shakarchi (ch. 6 Thm 3.5, "normalized"). **Rudin uses $\mu((-\infty,x))$ — left-continuous** — at Thm 7.1. **Tao assumes no continuity at all**, specifying all four interval types through $F_-$ and $F_+$ (Thm 1.7.9), and shows $\mu_F=\mu_{F_+}=\mu_{F_-}$ (Ex. 1.7.12), so right-continuity is a choice of representative, not a hypothesis. | **right-continuous with $(a,b]$**, stated in a `rem-` on MT-6 and never mixed. MT-6's four interval formulas are Tao's Thm 1.7.9 specialised, and the item records that the general-$F$ form is available. **Mixing Rudin ch. 7 with a right-continuous convention shifts $F$ by its jump at every atom** — MT-18 cites Rudin's differentiation results and must convert. |
| 5 | Radon measure | **The single worst-behaved word in the subject; see well-definedness #31 for the full four-way split.** *Weak convention*: **Folland** 7.1 (inner regular on **open sets only**, inner regularity on σ-finite sets then *proved*), **Royden–Fitzpatrick** §21.3, and **Cohn**'s `regular Borel measure` §7.2 p. 189 — one object, two names, and RF's footnote 4 p. 456 says so. *Strong convention*: **Tao** Ex. 1.7.11 and **Fremlin** 411Hb (inner regular on all Borel/measurable sets); **Rudin**'s "regular" is this and he proves it is *not obtainable* from Thm 2.14 without σ-compactness. *A different object entirely*: **Cohn** §7.5 p. 217 reserves `Radon measure` for **Bourbaki's linear functional** on $C_c(X)$, and gives one representable by no signed Borel measure. **Absent**: Bass and Wheeden–Zygmund never define it. | **Folland's weak convention**, with the others named and the coincidence theorem proved for spaces whose open sets are σ-compact (MT-20, well-definedness #31). Citing Rudin 2.14 to license a Folland-style Radon conclusion **overstates the source** unless $X$ is σ-compact. **A previous draft of this file asserted that Cohn uses the strong convention; that was wrong and is corrected here from the text.** |
| 6 | the unsigned integral | **sup over simple minorants**: Bass (Def 6.1), Folland, Rudin (Def 1.23), Tao (Def 1.4.37) — though Tao routes it through a **lower/upper unsigned integral** defined for arbitrary functions (Def 1.3.12). **Stein–Shakarchi: sup over *bounded* functions of finite-measure support**, which makes their Bounded Convergence Theorem load-bearing before MCT. | **sup over simple minorants** (§D3). Tao's lower/upper pair is `inline`, not minted. |
| 7 | MCT before Fatou, or after? | Folland (2.14→2.18), Rudin (1.26→1.28), Bass (7.1→7.8), Tao (1.4.44→1.4.47) all prove **MCT first**. **Stein–Shakarchi invert it**: Fatou is Lemma 1.7 and MCT is Corollary 1.9. | **MCT first** (§D3). **A citation of S–S for MCT inverts the dependency edge** and would make MT-8's spine circular; the author must cite Folland/Rudin/Bass/Tao for that edge. |
| 8 | Radon–Nikodym proof route | **Hahn-decomposition exhaustion**: Folland (3.8, via Lemma 3.7), Bass (13.3–13.4, "consider the Hahn decomposition for $\nu-\frac1n\mu$"). **von Neumann's $L^2$ trick**: Rudin (6.10, "The idea of the following proof … is due to von Neumann") and Stein–Shakarchi (ch. 6 Thm 4.3, "exploits elegantly … a simple Hilbert space idea"). **Tao: absent.** | **exhaustion** (§D7). Only Folland's and Bass's route is available to a track that must reach Radon–Nikodym **before** any $L^2$ theory; MT-13 carries a `rem-` naming von Neumann's route and its cost. |
| 9 | which route to monotone differentiability? | **Rising sun lemma**: Tao (Lemma 1.6.17 → Thm 1.6.25). **Radon–Nikodym plus maximal functions**: Bass (14.6 → 14.7 → 14.8), who says so explicitly. **Vitali covering on Dini derivates**: Royden (§11.5). | **both of the first two**, deliberately, because they cost different choice principles (§4) — MT-18. Royden's third route is named in a `rem-` and not run. |
| 10 | monotone class or π–λ? | Bass proves and uses the **monotone class theorem** (2.10) and never mentions π-systems or λ-systems. Folland and most probability-facing texts use **Dynkin's π–λ**. Tao has the **monotone class lemma** (1.7.14). | **both**, on MT-1, with the standard relationship — because MT-2's uniqueness theorem is naturally π–λ and MT-11's product-measure argument is naturally monotone class, and the library should not have to fake one with the other. |

### 11.2 Tao — range read and heading dispositions

**Range read: the entire book** — ch. 1 §§1.1–1.7 (pp. 1–208) and ch. 2 §§2.1–2.4
(pp. 209–242), plus the Notation chapter. Tao has no numbered subsections; his
numbered environments are the citation units and all 443 were recovered.

| Tao's heading | disposition |
|---|---|
| Thm 0.0.2 *Tonelli's theorem for series*; Ex 0.0.2 *…over arbitrary sets* | `already-published` — `thm-double-series-fubini`; MT-11 adds the dictionary item identifying it as counting measure on $\mathbb{N}^2$ |
| Axiom 0.0.4 *Axiom of choice*; Cor 0.0.5 *Axiom of countable choice* | `already-published` — `def-axiom-of-choice`, `def-countable-choice` |
| §1.1 Def 1.1.1 *Intervals, boxes, elementary sets*; Lem 1.1.2 *Measure of an elementary set*; Ex 1.1.1 *Boolean closure*; Ex 1.1.3 *Uniqueness of elementary measure* | `included` — MT-4, as the algebra $\mathcal{E}_n$ and the finite-additivity lemma (well-definedness #7) |
| §1.1 Def 1.1.4 *Jordan measure*; Ex 1.1.5 *Characterisation of Jordan measurability*; Ex 1.1.15 *Uniqueness of Jordan measure* | `already-published` — `def-jordan-inner-and-outer-content` and the order-235 page; MT-4 adds only the $\lambda^*$-versus-content comparison |
| §1.1 Def 1.1.5 *Riemann integrability*; Def 1.1.6 *Darboux integral*; Ex 1.1.20 *Piecewise constant functions*; Ex 1.1.21, Ex 1.1.24 *Basic properties of the Riemann integral* | `already-published` — `the-riemann-integral` (159), `def-darboux-sums`, `thm-darboux-equals-riemann` |
| §1.1 Ex 1.1.7 *Regions under graphs are Jordan measurable*; Ex 1.1.25 *Area interpretation of the Riemann integral* | `included` — MT-11's region-under-the-graph theorem, in the σ-additive form |
| §1.1 Ex 1.1.14 *Metric entropy formulation of Jordan measurability* | `out-of-scope` — a Jordan-content characterisation belonging to the published order-235 page, which this track does not retrofit |
| §1.1 Ex 1.1.17 (equidecomposability of polytopes) | `out-of-scope` — Bolyai–Gerwien is plane geometry, not measure theory, and rests on no result this track builds |
| §1.1 Ex 1.1.19 *Carathéodory type property* | `included` — MT-3, as the finite-additivity half of Carathéodory measurability |
| §1.2 Def 1.2.2 *Lebesgue measurability*; Lem 1.2.5 *Finite additivity for separated sets*; Lem 1.2.6 *Outer measure of elementary sets*; Lem 1.2.9 *…countable unions of almost disjoint boxes*; Lem 1.2.11 (open sets are countable unions of almost disjoint boxes); Lem 1.2.15 *The measure axioms*; Ex 1.2.3 *The outer measure axioms* | `included` — MT-4's construction, but **through Carathéodory** rather than Tao's direct route (convention ledger row 2); Lem 1.2.11 is `inline` in MT-4's regularity proof |
| §1.2 Lem 1.2.12 *Outer regularity*; Lem 1.2.13 *Existence of Lebesgue measurable sets*; Ex 1.2.7 *Criteria for measurability*; Ex 1.2.15 *Inner regularity*; Ex 1.2.16 *Criteria for finite measure* | `included` — MT-4's regularity theorems and the Littlewood characterisations |
| §1.2 Ex 1.2.17 *Carathéodory criterion, one direction* | `included` — MT-3 (the metric criterion) and MT-4 |
| §1.2 Prop 1.2.18 (a non-measurable subset of $[0,1]$); Ex 1.2.26 *Outer measure is not finitely additive* | `included` — MT-5, `thm-a-vitali-set-is-not-lebesgue-measurable` and the outer-measure failure |
| §1.2 Ex 1.2.18 *Inner measure* | `included` — MT-5's `def-inner-measure` and the $\lambda_*=\lambda^*$ criterion |
| §1.2 Ex 1.2.20 *Translation invariance*; Ex 1.2.21 *Change of variables*; Ex 1.2.23 *Uniqueness of Lebesgue measure*; Ex 1.2.24 *Lebesgue measure as the completion of elementary measure* | `included` — MT-4's invariance, linear change of variables, uniqueness and completion items |
| §1.2 Ex 1.2.9 *Middle thirds Cantor set* | `already-published` — `def-cantor-set`, `thm-cantor-set-properties` |
| §1.2 Ex 1.2.27 *Projections of measurable sets need not be measurable* | **`deferred`** — the witness is an analytic (Suslin) set and the statement is a descriptive-set-theory theorem; the library has no analytic sets and building them is a track of its own. Named here so it is recoverable. |
| §1.3 Def 1.3.2 *Simple function*; Def 1.3.3 *Integral of a unsigned simple function*; Lem 1.3.4 *Well-definedness of simple integral*; Ex 1.3.1, Ex 1.3.2 | `included` — MT-7's simple functions and MT-8's well-definedness #14 |
| §1.3 Def 1.3.5 *Almost everywhere and support* | `included` — MT-2 (a.e. relative to $\mu$) and MT-4 (the agreement with the published elementary sense, well-definedness #9–#10) |
| §1.3 Def 1.3.8 *Unsigned measurable function*; Lem 1.3.9 *Equivalent notions of measurability*; Def 1.3.11 *Complex measurability* | `included` — MT-7 |
| §1.3 Def 1.3.12 *Lower unsigned Lebesgue integral*; Ex 1.3.10, Ex 1.3.12 | **`inline`** — MT-8 defines the integral as the sup over simple minorants and does not carry a separate lower/upper pair (convention ledger row 6); Tao's upper integral is used nowhere downstream |
| §1.3 Def 1.3.13 *Unsigned Lebesgue integral*; Cor 1.3.14 *Finite additivity*; Lem 1.3.15 *Markov's inequality*; Def 1.3.17 *Absolute integrability*; Lem 1.3.19 *Triangle inequality*; Ex 1.3.14 *Uniqueness of the Lebesgue integral*; Ex 1.3.19 *Integration is linear* | `included` — MT-8 |
| §1.3 Thm 1.3.20 *Approximation of $L^1$ functions* | `included` — MT-15's density theorems |
| §1.3 Def 1.3.21 *Locally uniform convergence*; Ex 1.3.25 *Littlewood-like principles* | `inline` — MT-10 carries a.e., in measure, almost uniform, $L^1$ and their full implication table in a `rem-`; locally uniform convergence is not a mode this track needs |
| §1.3 Thm 1.3.26 *Egorov's theorem*; Thm 1.3.28 *Lusin's theorem* | `included` — MT-10 `thm-egorov`, `thm-lusin` |
| §1.3 Ex 1.3.13 *Area interpretation of integral*; Ex 1.3.21 *Absolute summability is a special case* | `included` — MT-11 and MT-8's counting-measure dictionary |
| §1.3 Ex 1.3.15 *Translation invariance*; Ex 1.3.16 *Linear change of variables*; Ex 1.3.17 *Compatibility with the Riemann integral* | `included` — MT-4 and MT-9 |
| §1.4 Def 1.4.1–1.4.16 (Boolean algebras, generation, σ-algebras, Borel); Ex 1.4.6, 1.4.9, 1.4.13, 1.4.15 | `included` — MT-1 |
| §1.4 Ex 1.4.16 (cardinality of a generated σ-algebra); Rem 1.4.17 ($\omega_1$) | `included` — MT-1's transfinite description and $\lvert\mathcal{B}(\mathbb{R})\rvert=\mathfrak{c}$ |
| §1.4 Def 1.4.19–1.4.31 (finitely/countably additive measures, Dirac, counting, restriction, completeness); Ex 1.4.22, 1.4.26 *Completion*, 1.4.35 *Inclusion-exclusion*, 1.4.44 *Borel-Cantelli* | `included` — MT-2 |
| §1.4 Def 1.4.32–1.4.39 (measurable functions and the abstract integral); Thm 1.4.38 (additivity); Ex 1.4.33, 1.4.34, 1.4.36, 1.4.40 *Sums as integrals* | `included` — MT-7 and MT-8 |
| §1.4 Ex 1.4.40–1.4.42 *Escape to horizontal / width / vertical infinity* | `included` — MT-8's B page, the three canonical failures, kept under Tao's names because they are the clearest labels in the literature |
| §1.4 Thm 1.4.44 *Monotone convergence theorem*; Cor 1.4.46 *Tonelli's theorem for sums and integrals*; Cor 1.4.47 *Fatou's lemma*; Thm 1.4.49 *Dominated convergence theorem*; Ex 1.4.47 *Almost dominated convergence*; Ex 1.4.48 *Defect version of Fatou's lemma*; Ex 1.4.50 *Characterisation of the unsigned integral* | `included` — MT-8; the defect Fatou is `inline` in the reverse-Fatou item |
| §1.4 Ex 1.4.31 *Egorov's theorem* (abstract); Ex 1.4.42 *Uniform convergence on a finite measure space* | `included` — MT-10 |
| §1.5 Ex 1.5.5 *Typewriter sequence*; Prop 1.5.7; Thm 1.5.9 *Egorov's theorem, again*; Cor 1.5.10; Def 1.5.11 *Uniform integrability*; Thm 1.5.13 *Uniformly integrable convergence in measure*; Ex 1.5.12 | `included` — MT-10 in full; the typewriter sequence is its B page's headline example |
| §1.6 Thm 1.6.2 *Rolle*; Cor 1.6.5 *Mean value theorem*; Thm 1.6.7 / 1.6.9 *fundamental theorems of calculus*; Ex 1.6.4 | `already-published` — `cor-mean-value-theorem`, `thm-ftc-first-part`, `thm-ftc-second-part` |
| §1.6 Thm 1.6.11 / 1.6.12 / 1.6.19 *Lebesgue differentiation theorem*; Cor 1.6.10; Thm 1.6.20 *Hardy-Littlewood maximal inequality*; Lem 1.6.22 *Vitali-type covering lemma*; Ex 1.6.11 *Two-sided…*; Ex 1.6.20 *Dyadic maximal inequality* | `included` — MT-17 |
| §1.6 Lem 1.6.16 / 1.6.26 *One-sided Hardy-Littlewood maximal inequality*; Lem 1.6.17 *Rising sun lemma*; Ex 1.6.12 *Rising sun inequality*; Thm 1.6.25 *Monotone differentiation theorem*; Lem 1.6.28 *E has density less than one* | `included` — MT-18 (the rising-sun route); Lem 1.6.28 is `inline` |
| §1.6 Prop 1.6.13 *Translation is continuous in $L^1$*; Ex 1.6.27 *Approximations to the identity* | `included` — MT-15 |
| §1.6 Def 1.6.30 *Jump function*; Lem 1.6.31 *Continuous-singular decomposition for monotone functions* | `included` — MT-18's jump/singular/AC decomposition |
| §1.6 Def 1.6.33 *Bounded variation*; Prop 1.6.34 (Jordan decomposition of a BV function); Def 1.6.39 (absolute continuity) | `already-published` — `def-bounded-variation-and-total-variation`, `thm-jordan-decomposition-for-bv-functions`, `def-absolutely-continuous-function`, all at order 163 |
| §1.6 Cor 1.6.35 *BV differentiation theorem* | `included` — MT-18 |
| §1.6 Prop 1.6.37 *Upper bound for second fundamental theorem*; Thm 1.6.40 *Second fundamental theorem for absolutely continuous functions*; Prop 1.6.41; Ex 1.6.41 / 1.6.44 (Lipschitz); Ex 1.6.45 *Integration by parts formula* | `included` — MT-19, and Thm 1.6.40 is the discharge of `rem-ftc-absolutely-continuous` |
| §1.6 Ex 1.6.8 *Steinhaus theorem*; Ex 1.6.9 (measurable additive homomorphisms are linear) | `included` — MT-4 `thm-steinhaus`; the homomorphism corollary is on MT-4's B page |
| §1.6 Ex 1.6.47 *Cantor function*; Ex 1.6.28 *Weierstrass function* | `already-published` — `def-cantor-function`, `thm-cantor-function-properties`; and for the continuous nowhere-differentiable witness `thm-takagi-function-is-continuous-and-nowhere-differentiable`. Weierstrass's own function is **`deferred`**: the library already carries a witness of the same fact and a second one adds no theorem, only a computation. |
| §1.6 Ex 1.6.21 *Besicovich covering lemma in one dimension* | **`deferred`** — Besicovitch is the covering tool for differentiating measures **without** a doubling hypothesis; this track differentiates against $\lambda$ only, where the $5r$ lemma suffices, so the one-dimensional Besicovitch statement would be an orphan with no consumer. |
| §1.6 Ex 1.6.23 *Cousin's theorem*; Ex 1.6.53 *Henstock-Kurzweil integral*; Rem 1.6.43 (Denjoy/Perron) | `out-of-scope` — §2 row 8; `rem-henstock-kurzweil-vs-lebesgue` stays ‡, and Cousin's theorem is the gauge-integral tool that would only be built to serve it |
| §1.6 Ex 1.6.51 (strong versus weak derivative) | `out-of-scope` — weak derivatives belong to `pde` (SEAMS §4) |
| §1.6 Rem 1.6.24 (Melas's sharp maximal constant) | `inline` — MT-17 trap (ii): the item must not claim $5^n$ is optimal |
| §1.7 Def 1.7.1 *Abstract outer measure*; Def 1.7.2 *Carathéodory measurability*; Thm 1.7.3 *Carathéodory extension theorem*; Ex 1.7.1, Ex 1.7.2 | `included` — MT-3, well-definedness #5 |
| §1.7 Def 1.7.7 *Pre-measure*; Thm 1.7.8 *Hahn-Kolmogorov theorem*; Ex 1.7.4 | `included` — MT-3's extension theorem, well-definedness #6 |
| §1.7 Thm 1.7.9 *Existence of Lebesgue-Stieltjes measure*; Ex 1.7.12 *Near uniqueness*; Ex 1.7.13 / 1.7.14 / 1.7.15 (AC / pure point / singular continuous) | `included` — MT-6 for the construction and the four interval formulas, MT-13 and MT-18 for the trichotomy |
| §1.7 Ex 1.7.16 *Connection with Riemann-Stieltjes integral* | `included` — MT-9's Riemann–Stieltjes agreement theorem |
| §1.7 Ex 1.7.17 *Integration by parts formula* | `included` — MT-19 |
| §1.7 Def 1.7.10 *σ-finite*; Prop 1.7.11 *Existence and uniqueness of product measure*; Lem 1.7.14 *Monotone class lemma*; Thm 1.7.15 / 1.7.18 *Tonelli*; Cor 1.7.17, 1.7.19; Thm 1.7.21 *Fubini*; Cor 1.7.23 *Fubini-Tonelli*; Ex 1.7.21 *Associativity of product* | `included` — MT-2 (σ-finite), MT-1 (monotone class), MT-11 (everything else); associativity is `inline` |
| §1.7 Ex 1.7.24 *Area interpretation of integral*; Ex 1.7.25 *Distribution formula*; Ex 1.7.26 *Approximations to the identity* | `included` — MT-11's region-under-the-graph and layer-cake items, MT-15's mollifiers |
| §1.7 Ex 1.7.11 (Radon measure on $\mathbb{R}$) | `included` — MT-20's convention item (well-definedness #31); Tao's is the strong convention |
| §2.1 *Problem solving strategies* | `out-of-scope` — pedagogy, not mathematics |
| §2.2 Def 2.2.1–2.2.2, Thm 2.2.4 *Rademacher differentiation theorem*, Ex 2.2.2–2.2.4 | **`deferred`** — Rademacher's theorem is a.e. differentiability of a Lipschitz map $\mathbb{R}^n\to\mathbb{R}^m$; its proof needs the one-dimensional theory **plus** a Fubini argument over directions **plus** the identification of the a.e. directional derivative with a total derivative, which is a page of its own and whose natural consumers are `pde` and geometric measure theory, not this track. Recorded rather than dropped. |
| §2.3 Def 2.3.1–2.3.3, Ex 2.3.1–2.3.2 (probability spaces) | `out-of-scope` — SEAMS §4 gives measure-theoretic probability to `probability-theory` |
| §2.4 Def 2.4.1 *Inner regularity*; Thm 2.4.3 *Kolmogorov extension theorem*; Thm 2.4.4 *Existence of product measures*; Ex 2.4.7, Ex 2.4.8 | `out-of-scope` — §2 row 5, `probability-theory` |
| §2.4 Ex 2.4.6 *Bernoulli cube* | `included` — MT-22 builds exactly this measure by hand (§D8), as a page-local construction and not a general theorem |

### 11.3 Bass — range read and heading dispositions

**Range read: chapters 1–17 in full (pp. 1–184), plus ch. 24 §§24.1–24.3
(pp. 345–354).** Chapters 18–23 and 25–26 were read at heading level only and are
dispositioned as blocks, because SEAMS §4 assigns every one of them to another track.

| Bass's heading | disposition |
|---|---|
| **Ch. 2** *Families of sets* — 2.1 Def (algebra, σ-algebra), 2.2–2.6 Examples, 2.7 Lem (intersections), 2.8 Prop (six generators of $\mathcal{B}(\mathbb{R})$), 2.9 Def (monotone class), **2.10 Thm (monotone class theorem)** | `included` — MT-1 in full. Bass's 2.8 is well-definedness #2, and MT-1 states **seven** generating families to his six, adding the rational rays. Bass has no π-system or λ-system; MT-1 adds Dynkin's theorem from Folland. |
| **Ch. 3** *Measures* — 3.1 Def, 3.2–3.4 Ex (counting, weighted, point mass), 3.5 Prop (monotonicity, subadditivity, continuity both ways), 3.6 Ex (necessity of $\mu(A_1)<\infty$), 3.7 Def (finite, σ-finite, complete) | `included` — MT-2. Bass's 3.6 is MT-2's `fs-` plus its B-page witness. |
| **Ch. 4** §4.1 — 4.1 Def (outer measure), 4.2 Prop (outer measure from a covering family), 4.5 Def (Carathéodory), **4.6 Thm (Carathéodory's theorem)** | `included` — MT-3, well-definedness #5. Bass's 4.2 is the covering-family device; MT-3 states the premeasure-induced form, which is the one MT-4 and MT-6 both consume. |
| **Ch. 4** §4.2 — 4.3 Ex (intervals $(a,b]$), 4.4 Ex (Lebesgue–Stieltjes for increasing right-continuous $\alpha$), 4.7 Lem (finite cover estimate), 4.8 Prop ($m^*((e,f])=\ell((e,f])$), 4.9 Prop (Borel sets are $m^*$-measurable) | `included` — MT-4 (for $\alpha=\mathrm{id}$) and MT-6 (the general case). Bass's 4.7 is the compactness step, MT-4's hardest item. |
| **Ch. 4** §4.3 — 4.10 Ex (countable sets null), 4.11 Ex (Cantor set), 4.12 Ex (open dense set of small measure), 4.13 Ex (fat Cantor set), 4.14 Prop (regularity), 4.15 Cor | 4.10, 4.14, 4.15 `included` — MT-4's regularity and null-set items. 4.11 and 4.13 `already-published` — `def-cantor-set`, `def-fat-cantor-set`, `thm-fat-cantor-set-has-positive-measure`; MT-4 adds only the exact value. 4.12 `included` — MT-4's B page. |
| **Ch. 4** §4.4 — **4.16 Thm** ($m^*$ is not a measure on $\mathcal{P}(\mathbb{R})$) | `included` — MT-5, and Bass's phrasing as an **obstruction theorem** rather than a construction is adopted for MT-5's `thm-no-translation-invariant-measure-on-every-subset-of-the-line` |
| **Ch. 4** §4.5 — **4.17 Thm (Carathéodory extension theorem)**, with σ-finite uniqueness | `included` — MT-3's extension and uniqueness items, well-definedness #6 |
| **Ch. 5** — 5.1 Def, 5.5 Prop (four equivalent criteria), 5.6 Prop (continuous ⇒ measurable), 5.7 Prop (algebra operations), 5.8 Prop (sup/inf/limsup/liminf), 5.9 Def (a.e.), 5.10 Prop (monotone ⇒ Borel), 5.11 Prop, 5.13 Def (simple), 5.14 Prop (simple approximation) | `included` — MT-7 in full |
| **Ch. 5** — 5.12 Ex (a Lebesgue measurable non-Borel set) | `included` — MT-5, by the Cantor–Lebesgue-function route, proved there **twice** (explicit witness and cardinality) |
| **Ch. 5** §5.3 — **5.15 Thm (Lusin)**, 5.16 Ex (why it does not say "continuous a.e.") | `included` — MT-10, and 5.16 is MT-10's dedicated trap item |
| **Ch. 6** — 6.1 Def (the three-stage integral), 6.2 Def (integrable), 6.3 Prop | `included` — MT-8, §D3; Bass's $0\cdot\infty=0$ convention is MT-7's well-definedness #13 |
| **Ch. 7** — **7.1 Thm (MCT)**, 7.2 Ex, 7.3 Ex, **7.4 Thm (additivity)**, 7.5 Prop, 7.6 Prop (series), 7.7 Prop (triangle), **7.8 Thm (Fatou)**, **7.9 Thm (DCT)** | `included` — MT-8; 7.2 and 7.3 are two of MT-8's four canonical failures |
| **Ch. 7** Ex 7.22 (*the Vitali convergence theorem*) | `included` — MT-10 |
| **Ch. 8** — 8.1 Prop, 8.2 Prop, 8.3 Cor ($\int f=0\Rightarrow f=0$ a.e.), **8.4 Thm** ($C_c$ dense in $L^1$) | `included` — MT-8 and MT-15 |
| **Ch. 9** — **9.1 Thm (Lebesgue's criterion, with the two integrals equal)**, 9.2 Ex, 9.3 Ex (Thomae) | **split**: the criterion itself is `already-published` (`thm-lebesgue-criterion`); the *equality of the two integrals* is `included` at MT-9 and is the half the library lacks. 9.2 and 9.3 `already-published`/`included` on MT-9's B page. |
| **Ch. 10** — 10.1 Def, 10.2 Prop, 10.3 Ex, 10.4 Lem (Chebyshev), 10.5 Prop, 10.6 Ex, 10.7 Ex (the rotating-arc typewriter), **10.8 Thm (Egorov)** | `included` — MT-10 |
| **Ch. 11** — 11.1 Lem (sections), 11.2 Prop (product measure via the monotone class theorem), **11.3 Thm (Fubini/Fubini–Tonelli)**, 11.4 Ex, 11.6 Ex (double series) | `included` — MT-11, well-definedness #18 |
| **Ch. 11** — 11.5 Ex (the Sierpiński set-theoretic counterexample) | `already-published` as ‡ — `rem-sierpinski-iterated-integrals`; §2 row 12 keeps it deferred because it needs CH |
| **Ch. 12** — 12.1 Def, 12.2 Def (positive/negative/null sets), 12.3 Ex, 12.4 Prop (the negative-set lemma), **12.5 Thm (Hahn)**, 12.6 Ex, 12.7 Ex (Cantor–Lebesgue measure ⊥ $m$), **12.8 Thm (Jordan)** | `included` — MT-12; 12.4 is MT-12's positive-set lemma, stated in the dual sign |
| **Ch. 13** — 13.1 Def, 13.2 Prop ($\varepsilon$–$\delta$), 13.3 Lem (Hahn decomposition of $\nu-\frac1n\mu$), **13.4 Thm (Radon–Nikodym)**, **13.5 Thm (Lebesgue decomposition)** | `included` — MT-13, and 13.3 is the exhaustion lemma of §D7 step (c) |
| **Ch. 14** §14.1 — 14.1 Prop (Vitali covering, constant $5^n$), **14.2 Thm (weak 1-1 / maximal inequality)**, **14.3 Thm (Lebesgue differentiation)**, **14.4 Thm (Lebesgue points)** | `included` — MT-17 |
| **Ch. 14** §§14.2–14.3 — 14.5 Thm (first FTC), 14.6 Lem ($\lambda\perp m\Rightarrow H'=0$ a.e.), 14.7 Prop, **14.8 Thm (monotone differentiation)**, 14.9 Rem (Cantor–Lebesgue strictness) | `included` — MT-18 (the measure route) and MT-17 (the first FTC) |
| **Ch. 14** §§14.4–14.5 — 14.10 Lem (BV as a difference of increasing), 14.11 Lem, 14.12–14.13 Rem, 14.14 Lem (AC ⇒ BV), 14.15 Lem, **14.16 Thm (FTC for AC)** | 14.10 and 14.14 `already-published` (`thm-jordan-decomposition-for-bv-functions`, `thm-c1-lipschitz-ac-bv-hierarchy`); the rest `included` — MT-19 |
| **Ch. 15** §§15.1–15.2 — **15.1 Prop (Hölder)**, 15.2 Lem, **15.3 Prop (Minkowski)**, **15.4 Thm ($L^p$ complete)** | `included` — MT-14 |
| **Ch. 15** §15.3 — 15.5 Prop ($C_c$ dense), 15.6 Cor, 15.7 Prop (Young's convolution inequality), 15.8 Thm (approximations to the identity) | `included` — MT-15 |
| **Ch. 15** §15.4 — **15.9 Thm** ($\lVert f\rVert_p=\sup\int fg$), 15.10 Cor (simple $g$ suffice), 15.11 Prop ($\lVert\Lambda_g\rVert=\lVert g\rVert_q$), **15.12 Thm (duality)** | `included` — MT-16, and 15.9 is what MT-15's Minkowski integral inequality uses in its elementary half |
| **Ch. 16** *Fourier transforms* (16.1–16.9, incl. the inversion and Plancherel theorems) | `out-of-scope` — SEAMS §4: `functional-analysis`; §2 row 3 |
| **Ch. 17** §17.1 — 17.1 Rem, **17.2 Prop (partitions of unity)** | `included` — MT-20's topological lemmas (well-definedness #32), checked against the published `cor-compact-hausdorff-partitions-of-unity` |
| **Ch. 17** §§17.2–17.3 — **17.3 Thm (Riesz representation)**, 17.4 Ex (the Riemann integral as a positive functional), 17.5 Rem ($C_0$), **17.6 Prop (regularity)** | `included` — MT-20. Bass proves it for a **compact metric** $X$; MT-20 states the LCH version, so Bass is the special case and Folland ch. 7 is the general backing. 17.4 is MT-20's headline B-page example. |
| **Ch. 17** §17.4 — 17.7 Prop (decomposition of a bounded functional), **17.8 Thm (signed Riesz representation)** | `included` — MT-20's bounded version, stated concretely per §8 seam 2 |
| **Ch. 18** *Banach spaces*, **Ch. 19** *Hilbert spaces* | `out-of-scope` — SEAMS §4: `functional-analysis`; §2 rows 1–2. **Exception**: 19.2 *Subspaces* (the projection theorem) is the general form of the three $L^2$ lemmas MT-23 builds by hand (§D6), and §8 amendment 1b records the agreement that track owes. |
| **Ch. 20** *Topology* (§§20.1–20.14, incl. Tychonoff, Urysohn, Tietze, LCH, Stone–Čech, Ascoli–Arzelà, Stone–Weierstrass) | `already-published` — the entire published topology band, orders 243–287 (§1.3); this track cites and re-mints none of it |
| **Ch. 21** *Probability* (§§21.1–21.12) | `out-of-scope` — `probability-theory`; §2 row 5. §21.4's strong law is MT-23's Birkhoff theorem specialised (§8 amendment 3d). |
| **Ch. 22** *Harmonic functions*, **Ch. 23** *Sobolev spaces* | `out-of-scope` — SEAMS §4: `pde` (and the plane theory `complex-analysis`); §2 row 4 |
| **Ch. 24** §24.1 **Marcinkiewicz interpolation theorem**; §24.2 *Maximal functions*; §24.3 *Approximations to the identity* | `included` — MT-17 (Marcinkiewicz and the maximal function) and MT-15 (approximate identities) |
| **Ch. 24** §24.4 *The Calderon-Zygmund lemma*; §24.5 *Hilbert transform*; §24.6 *$L^p$ boundedness* | **`deferred`** — the CZ decomposition and the Hilbert transform are the entry to singular-integral theory. The library has no track that owns it, and the $L^p$ boundedness proof additionally wants complex interpolation (§2 row 6). Named here so the gap is recoverable; the maximal-function half **is** built at MT-17. |
| **Ch. 25** *Spectral theory*, **Ch. 26** *Distributions* | `out-of-scope` — SEAMS §4: `functional-analysis`; §2 rows 1 and 4 |

### 11.4 Folland, Rudin and Stein–Shakarchi — ranges read and dispositions

**Folland, range read: ch. 0 §§0.1–0.7, ch. 1 §§1.1–1.6, ch. 2 §§2.1–2.8, ch. 3
§§3.1–3.6, ch. 6 §§6.1–6.6, ch. 7 §§7.1–7.5.** Chapters 4, 5, 8–11 read at heading
level.

| Folland section | disposition |
|---|---|
| 0.1–0.4 (set theory, orderings, cardinality, well ordered sets) | `already-published` — orders 5.3, 10, 18, 243, 247 |
| 0.5 *The Extended Real Number System* | `already-published` — `def-extended-reals`, `rem-extended-real-conventions`; MT-7 adds only $0\cdot\infty:=0$ (§D4) |
| 0.6 *Metric Spaces* | `already-published` — the published metric-space band |
| 1.1 *Introduction*; 1.2 *σ-algebras* | `included` — MT-1. Folland is the source for the π-system/λ-system material Bass lacks. |
| 1.3 *Measures* | `included` — MT-2 |
| 1.4 *Outer Measures* — **1.11 Carathéodory's Theorem**, **1.14** (extension from an algebra, with σ-finite uniqueness as its final clause) | `included` — MT-3, well-definedness #5–#6. **Locator note: Carathéodory is 1.11 and the extension theorem is 1.14**; there is no separate numbered uniqueness theorem. |
| 1.5 *Borel Measures on the Real Line* — 1.15/1.16 | `included` — MT-6 |
| 2.1 *Measurable Functions* | `included` — MT-7 |
| 2.2 *Integration of Nonnegative Functions* — **2.14 MCT**, **2.18 Fatou** | `included` — MT-8 |
| 2.3 *Integration of Complex Functions* — **2.24 DCT** | `included` — MT-8, and Folland's complex handling is §D11's model |
| 2.4 *Modes of Convergence* | `included` — MT-10 |
| 2.5 *Product Measures* — **2.37 The Fubini–Tonelli Theorem** | `included` — MT-11 |
| 2.6 *The n-dimensional Lebesgue Integral* | `included` — MT-4 and MT-11 |
| 2.7 *Integration in Polar Coordinates* | `included` — MT-11's polar-coordinates theorem, the item that lets MT-17 and MT-21 work without a $C^1$ change of variables |
| 3.1 *Signed Measures* — **3.3 Hahn**, **3.4 Jordan** | `included` — MT-12 |
| 3.2 *The Lebesgue-Radon-Nikodym Theorem* — **3.8**, via Lemma 3.7 | `included` — MT-13, and the exhaustion route of §D7 |
| 3.3 *Complex Measures* | `included` — MT-12 and MT-13's polar decomposition |
| 3.4 *Differentiation on Euclidean Space* — **3.17 The Maximal Theorem**, **3.21 The Lebesgue Differentiation Theorem** | `included` — MT-17. **Locator note: the maximal theorem is 3.17, not 3.18**; 3.18 is the a.e. convergence of averages. |
| 3.5 *Functions of Bounded Variation* — **3.35 The Fundamental Theorem of Calculus for Lebesgue Integrals** | `included` — MT-18 and MT-19 |
| 4 *Point Set Topology*; 5 *Elements of Functional Analysis* | `already-published` (ch. 4) and `out-of-scope` (ch. 5, `functional-analysis`) |
| 6.1 *Basic Theory of $L^p$ Spaces* | `included` — MT-14 |
| 6.2 *The Dual of $L^p$* — **6.15** | `included` — MT-16. **Locator note: the duality theorem is 6.15, not 6.8**; 6.8 is the $L^1$/$L^\infty$ Hölder statement. |
| 6.3 *Some Useful Inequalities* | `included` — MT-14 (Lyapunov interpolation) and MT-15 (Minkowski's integral inequality, Young's convolution inequality) |
| 6.4 *Distribution Functions and Weak $L^p$* | `included` — MT-17's weak-type language and MT-11's layer cake |
| 6.5 *Interpolation of $L^p$ Spaces* | **split**: Marcinkiewicz `included` at MT-17; **Riesz–Thorin `deferred`** — §2 row 6, its proof runs the Hadamard three-lines theorem and complex analysis lands above this track; §8 amendment 2 proposes `complex-analysis` take it |
| 7.1 *Positive Linear Functionals on $C_c(X)$* — **7.2 The Riesz Representation Theorem** | `included` — MT-20 |
| 7.2 *Regularity and Approximation Theorems* — 7.5, 7.8 | `included` — MT-20's regularity theory and Radon-Lusin |
| 7.3 *The Dual of $C_0(X)$* — **7.17** (a second Riesz representation theorem, $M(X)\cong C_0(X)^*$) | `included` — MT-20's bounded version, stated concretely without the words "dual space" (§8 seam 2) |
| 7.4 *Products of Radon Measures* | **`deferred`** — the Radon product is genuinely subtler than the σ-finite product (the product of two Radon measures need not be Radon), and MT-11 builds the finite σ-finite product, which is what every consumer in this library needs. Named so the gap is visible. |
| 8 *Fourier Analysis*; 9 *Distribution Theory* | `out-of-scope` — `functional-analysis`; §2 rows 3–4 |
| 10 *Probability* | `out-of-scope` — `probability-theory` |
| 11 *More Measures and Integrals* (§§11.1–11.5, incl. Hausdorff measure) | **split**: the Hausdorff-measure sections are `included` at MT-21; the rest (topological/Riesz refinements) `deferred` |

**Rudin, range read: chs. 1–3 and 6–8 in full; ch. 4 §§4.1–4.2 and ch. 5 at heading
level.** Rudin's sections are titled, not numbered.

| Rudin section | disposition |
|---|---|
| Prologue *The Exponential Function* | `already-published` |
| Ch. 1 *Abstract Integration* — measurability 8, simple functions 15, elementary properties of measures 16, arithmetic in $[0,\infty]$ 18, integration of positive functions 19 (**1.26 MCT**, **1.28 Fatou**), integration of complex functions 24 (**1.34 DCT**), sets of measure zero 27 | `included` — MT-1, MT-2, MT-7, MT-8. **Locator note: MCT is 1.26 and Fatou 1.28, not 1.17/1.18**; 1.17 is simple-function approximation. |
| Ch. 2 *Positive Borel Measures* — topological preliminaries 35, **the Riesz representation theorem 40 (2.14)**, regularity properties 47 (2.15, 2.17), **Lebesgue measure 49 (2.20)**, continuity properties of measurable functions 55 | `included` — MT-20, and 2.20 is the alternative construction of Lebesgue measure recorded in §D1 and realised on MT-20's B page. Rudin's "regular" is convention-ledger row 5. |
| Ch. 3 *$L^p$-Spaces* — convex functions and inequalities 61 (**3.5 Hölder and Minkowski, one theorem**), the $L^p$-spaces 65 (**3.11 completeness**), approximation by continuous functions 69 | `included` — MT-14 and MT-15. **Naming note: Rudin does not print "Riesz–Fischer" on 3.11**; his named Riesz–Fischer is 4.17 (orthonormal sets), and at p. 91 he says the name "is sometimes given to" $L^p$ completeness. **An item citing Rudin 3.11 as "Riesz–Fischer" must carry that gloss** or it is a citation-fidelity defect. |
| Ch. 4 *Elementary Hilbert Space Theory*; Ch. 5 *Examples of Banach Space Techniques* | `out-of-scope` — `functional-analysis`. **Exception**: 4.17/4.18 are the source of the $\ell^2$ half of `rem-riesz-fischer`, which §7 keeps deferred. |
| Ch. 6 *Complex Measures* — total variation 116 (**6.4**, finiteness), absolute continuity 120, **6.10 The Theorem of Lebesgue-Radon-Nikodym**, **6.12** (polar decomposition), **6.14 The Hahn Decomposition Theorem**, bounded linear functionals on $L^p$ 126, **6.19** (Riesz representation for $C_0(X)^*$) | `included` — MT-12, MT-13, MT-16, MT-20. **Locator notes: Hahn is 6.14 (6.19 is the $C_0$ representation) and the polar decomposition is 6.12.** Rudin's 6.10 uses **von Neumann's $L^2$ route**, which this track cannot follow (§D7). |
| Ch. 7 *Differentiation* — derivatives of measures 135 (7.4 maximal weak-type with constant $3^k$, 7.7 Lebesgue points, 7.8, 7.10 nicely shrinking sets), the fundamental theorem of calculus 144 (7.11, **7.20 AC ⇒ FTC**), differentiable transformations 150 | `included` — MT-17, MT-18, MT-19. **"Differentiable transformations" is the $C^1$ change of variables**, which §8 seam 4 makes conditional at MT-11 — Rudin's is the source route to check against the published Riemann statement. **Rudin's distribution function at 7.1 is left-continuous** (convention ledger row 4) and an item citing it must convert. |
| Ch. 8 *Integration on Product Spaces* — measurability on cartesian products 160, product measures 163, **the Fubini theorem 164 (8.8)**, completion of product measures 167, convolutions 170, distribution functions 172 | `included` — MT-11 and MT-15. Rudin's "completion of product measures" is well-definedness #19. |
| Ch. 9 *Fourier Transforms*; chs. 10–20 | `out-of-scope` — `functional-analysis` and `complex-analysis` |

**Stein–Shakarchi, range read: chs. 1–3, 6 and 7 in full; chs. 4–5 at heading
level.** **Numbering trap, verified: S–S labels are `section.item` and are
chapter-local, so "Theorem 1.4" names three different results in three chapters.
Every citation of this source must carry the chapter number.**

| S–S section | disposition |
|---|---|
| Introduction §§1–5 | `out-of-scope` — motivational |
| 1 §1 *Preliminaries*; §2 *The exterior measure*; §3 *Measurable sets and the Lebesgue measure* (Thm 3.4 regularity, **Thm 3.6 a nonmeasurable set**) | `included` — MT-4 and MT-5, **through Carathéodory**, with S–S's open-set definition of measurability appearing instead as one of MT-4's Littlewood characterisations (convention ledger row 3) |
| 1 §4 *Measurable functions* (4.1 basic properties, 4.2 approximation by simple or step functions, 4.3 Littlewood's three principles; **Thm 4.4 Egorov**, **Thm 4.5 Lusin**) | `included` — MT-7 and MT-10 |
| 1 §5\* *The Brunn-Minkowski inequality* | **`deferred`** — a genuine theorem of convex geometry proved with measure theory, but nothing in this track or in any track SEAMS §4 names consumes it, and its natural home is a convex-geometry page the library does not have |
| 2 §1 *The Lebesgue integral: basic properties and convergence theorems* (Thm 1.4 bounded convergence, **Lemma 1.7 Fatou**, **Cor 1.9 MCT**, Thm 1.13 dominated convergence) | `included` — MT-8, **but with the edge direction reversed** (convention ledger row 7): this track proves MCT first and derives Fatou, so S–S may not be cited for MCT |
| 2 §2 *The space $L^1$ of integrable functions* (**Thm 2.2 Riesz-Fischer**) | `included` — MT-14. S–S is the source that prints the name "Riesz–Fischer" on the completeness theorem, which Rudin does not. |
| 2 §3 *Fubini's theorem* (3.1 statement and proof, 3.2 applications) | `included` — MT-11 |
| 2 §4\* *A Fourier inversion formula* | `out-of-scope` — `functional-analysis` |
| 3 §1 *Differentiation of the integral* (1.1 the Hardy-Littlewood maximal function, **Thm 1.1** with constant $3^d$, Lemma 1.2 covering, 1.2 the Lebesgue differentiation theorem, **Thm 1.3/1.4**) | `included` — MT-17 |
| 3 §2 *Good kernels and approximations to the identity* | `included` — MT-15 |
| 3 §3 *Differentiability of functions* (3.1 functions of bounded variation, **Thm 3.4**; 3.2 absolutely continuous functions, **Thm 3.11**; 3.3 differentiability of jump functions) | `included` — MT-18 and MT-19 |
| 3 §4 *Rectifiable curves and the isoperimetric inequality* (4.1\* Minkowski content, 4.2\* isoperimetric inequality) | **`deferred`** — the isoperimetric inequality is a theorem of geometric measure theory (§2 row 9); Minkowski content is a dimension-like notion adjacent to MT-21 but distinct from Hausdorff measure, and building both would double MT-21 for one theorem |
| 6 §1 *Abstract measure spaces* (1.1 exterior measures and **Carathéodory's theorem (Thm 1.1)**, **1.2 metric exterior measures (Thm 1.2)**, 1.3 the extension theorem (Lemma 1.4, **Thm 1.5**)) | `included` — MT-3 in full; **S–S §1.2 is the source for the metric-outer-measure criterion**, which MT-3 proves and MT-21 consumes |
| 6 §2 *Integration on a measure space* | `included` — MT-8 |
| 6 §3 *Examples* (3.1 product measures and a general Fubini theorem, **3.2 integration formula for polar coordinates**, **3.3 Borel measures on $\mathbb{R}$ and the Lebesgue-Stieltjes integral (Thm 3.5)**) | `included` — MT-11 and MT-6 |
| 6 §4 *Absolute continuity of measures* (4.1 signed measures, 4.2 absolute continuity, **Thm 4.3 Lebesgue decomposition + Radon–Nikodym**) | `included` — MT-12 and MT-13, **but the proof route is von Neumann's** and this track uses Folland's and Bass's exhaustion instead (§D7) |
| 6 §5\* *Ergodic theorems* (§§5.1–5.4) | `included` — **MT-22 and MT-23**, and with Bass carrying no ergodic theory at all this is the second treatment those two pairs are backed by, alongside the sources of §11.6 |
| 6 §6\* *Appendix: the spectral theorem* | `out-of-scope` — `functional-analysis` |
| 7 *Hausdorff Measure and Fractals* (§§1–6) | `included` — **MT-21**, and this is that page's primary textbook backing |
| 4 *Hilbert Spaces: An Introduction*; 5 *Hilbert Spaces: Several Examples* | `out-of-scope` — `functional-analysis`; §2 row 2. **Exception**: ch. 4 §5.1 (the Riesz representation theorem for a Hilbert space) is the general form of MT-23's hand-built $L^2$ decomposition (§D6). |

### 11.5 Cohn, Bogachev, Royden–Fitzpatrick and Wheeden–Zygmund

**Cohn, _Measure Theory_, 2nd ed. (Birkhäuser 2013) — full text; range read: chs.
1–7 and appendices G, H.** Section list: 1 Measures (1.1 Algebras and Sigma-Algebras
· 1.2 Measures · 1.3 Outer Measures · 1.4 Lebesgue Measure · 1.5 Completeness and
Regularity · 1.6 Dynkin Classes) · 2 Functions and Integrals (2.1–2.6, incl. **2.5
The Riemann Integral**) · 3 Convergence (3.1 Modes of Convergence · 3.2 Normed
Spaces · 3.3–3.4 $\mathcal{L}^p$ and $L^p$ · 3.5 Dual Spaces) · 4 Signed and Complex
Measures (4.1–4.5) · 5 Product Measures (5.1–5.3) · 6 Differentiation (6.1 Change of
Variable in $\mathbb{R}^d$ · 6.2 Differentiation of Measures · 6.3 Differentiation
of Functions) · 7 Measures on Locally Compact Spaces (7.1–7.7) · 8 Polish Spaces and
Analytic Sets · 9 Haar Measure · 10 Probability · App. G The Banach–Tarski Paradox ·
App. H The Henstock–Kurzweil and McShane Integrals.

| Cohn | disposition |
|---|---|
| 1.1–1.3 (algebras, measures, outer measures; **Thm 1.3.6 = Carathéodory, stated without attribution — "Carathéodory" occurs zero times in the book**); 1.6 **Thm 1.6.2 Dynkin π–λ** | `included` — MT-1, MT-2, MT-3 |
| **Example 1.2.1(d)** — a finitely additive measure on an algebra on $\mathbb{N}$ that provably cannot be extended to the generated σ-algebra | `included` — MT-3's `fs-` that a finitely additive set function always extends, with this as the witness. **The best counterexample found in any source for that `fs-`.** |
| 1.4 Lebesgue measure; **Prop 1.4.1** (outer regular by open, inner regular by compact on *all* Lebesgue measurable sets); **Thm 1.4.9** (a nonmeasurable subset of $(0,1)$); 1.5 completion | `included` — MT-4, MT-5 |
| **Prop 1.3.10** — a bounded nondecreasing **right-continuous** $F$ gives a unique finite Borel measure with $F(x)=\mu((-\infty,x])$, built from covers by half-open $(a_n,b_n]$ | `included` — MT-6. **Note: "Stieltjes" occurs zero times in Cohn**; he constructs these measures without naming them and has no Riemann–Stieltjes integral, so MT-9's agreement theorem must be sourced elsewhere (Wheeden–Zygmund Thm 11.11, or Tao Ex. 1.7.16). |
| 2.1–2.4 (measurable functions, a.e., the integral, **Thm 2.4.1 MCT, Cor 2.4.2 Beppo Levi, Thm 2.4.4 Fatou, Thm 2.4.5 DCT**) | `included` — MT-7, MT-8 |
| **2.5, Thm 2.5.4** — Riemann integrable **iff** continuous a.e.; and Riemann integrable $\Rightarrow$ Lebesgue integrable with the same value. **Prop 2.5.7** (Darboux $=$ Riemann sums) | **split**: the criterion is `already-published` (`thm-lebesgue-criterion`), the equality of the two integrals is `included` at MT-9. Cohn's whole Introduction (pp. xv–xxi) is the motivating comparison, and MT-9 is the library's version of it. |
| 3.1 **Prop 3.1.4 Egoroff**; 3.3 **Prop 3.3.2 Hölder, Prop 3.3.3 Minkowski**; 3.4 **Thm 3.4.1** ($L^p$ complete, **unnamed** in Cohn) | `included` — MT-10, MT-14 |
| 3.2 Normed Spaces; 3.5 Dual Spaces | `out-of-scope` as a *theory* (`functional-analysis`); the concrete $L^p$ statements are MT-14/MT-16 |
| 4.1–4.4 (signed and complex measures, absolute continuity, singularity, **Thm 4.2.2 Radon–Nikodym by exhaustion**; von Neumann's $L^2$ route is **Exercise 4.2.11**) | `included` — MT-12, MT-13; the exercise placement corroborates §D7 |
| **4.5 Thm 4.5.1** — $L^q\cong(L^p)^*$ isometrically, σ-finiteness needed **only when $p=1$** | `included` — MT-16, and this is the source for MT-16's hypothesis ledger |
| 5.1–5.3 (**Prop 5.2.1 Tonelli then Thm 5.2.2 Fubini**) | `included` — MT-11 |
| **6.1 Change of Variable in $\mathbb{R}^d$** | `included` **conditionally** — §8 seam 4; Cohn is the source route to check the conditional MT-11 items against |
| 6.2 **Thm 6.2.1 Vitali Covering Theorem (stated for cubes)**; Thm 6.2.3 | `included` — MT-17, MT-18. **Cohn has no maximal function at all** ("maximal function", "Hardy", "Marcinkiewicz": zero hits), so he is a covering-only treatment and cannot back MT-17's maximal-function items. |
| 6.3 **Thm 6.3.3** (monotone ⇒ differentiable a.e.), Cor 6.3.4, **Prop 6.3.5 (Fubini's series theorem)**, **Thm 6.3.6**, **Cor 6.3.8** (the AC characterisation), Cor 6.3.9 (integration by parts), **Thm 6.3.11** (continuous + differentiable off a countable set + $F'$ integrable ⇒ AC) | `included` — MT-18 and MT-19; **Thm 6.3.11 is added to MT-19 on the strength of this harvest** |
| **Cohn §6.2 p. 165's own disclaimer** — "differentiation theory can also be based on the 'rising sun lemma' of F. Riesz; see Chapter I of Riesz and Nagy" | `inline` — MT-18's `rem-` on the three routes; and it is the **locator for the rising sun lemma** (§11.6 finding 1) |
| 7.1–7.4 (**Thm 7.2.8 Riesz Representation**, with Prop 7.2.9 / Lemma 7.2.10 / Prop 7.2.11; **Thm 7.3.6** for $C_0(X)^*$ on LCH; Prop 7.2.6; **Thm 7.4.4 Lusin**) | `included` — MT-20 in full. Cohn's is the **LCH** statement MT-20 needs, where Bass's is compact metric. |
| 7.5 (the $\mu^*$-measurable sets and the dual of $L^1$; **Bourbaki's Radon measure**) | `inline` — MT-20's convention item (well-definedness #31) |
| **7.7 The Daniell–Stone Integral** | `out-of-scope` — §2 row 8: a different construction of the same object, and building it would double the track for no new theorem |
| 8 Polish Spaces and Analytic Sets | **`deferred`** — descriptive set theory; it is also what Tao Ex. 1.2.27 needs (§11.2), so the two deferrals are the same gap and a future track closes both |
| 9 Haar Measure | **`deferred`** — §2 row 7; needs topological groups, which the library does not build below the anchor. MT-20 supplies the representation theorem it is constructed with. |
| 10 Probability | `out-of-scope` — `probability-theory` |
| **App. G The Banach–Tarski Paradox** | `already-published` as ‡ — `rem-banach-tarski` on `deferred-set-theory-beyond-choice`; §2 row 13 |
| **App. H Henstock–Kurzweil and McShane** | `out-of-scope` — §2 row 8 |

**Bogachev, _Measure Theory_, vol. 1 (Springer 2007) — TOC, preface and §§1.1–1.4
obtained; the rest is TOC-level and is dispositioned as such. Flagged honestly: the
exact statements of §1.5 and §1.11 were NOT obtained (paywall), so no Bogachev
locator below is load-bearing.** Vol. 1 sections: 1.1–1.12 (Constructions and
extensions of measures) · 2.1–2.12 (The Lebesgue integral, incl. **2.10 Connections
with the Riemann integral**) · 3.1–3.10 (Operations on measures and functions, incl.
3.7 Change of variables in $\mathbb{R}^n$ and the **§3.10 supplement "Hausdorff
measures", p. 215**) · 4.1–4.7 ($L^p$ and spaces of measures) · 5.1–5.8 (Connections
between the integral and derivative, incl. **5.5 Covering theorems, 5.6 The maximal
function, 5.7 The Henstock–Kurzweil integral**) · Bibliographical and Historical
Comments pp. 409–440.

| Bogachev | disposition |
|---|---|
| 1.2–1.3 — **Def 1.2.13** defines ring, semiring, semialgebra, σ-ring, δ-ring; but **Def 1.3.2 makes the extended object an ALGEBRA**, and Prop 1.3.10 reduces a semiring to the generated ring. Preface: *"less attention than usual is given to measures on semirings etc."* | `included` — MT-3, and this is the fourth independent vote for the algebra convention (§11.1 row 1). The semiring vocabulary is **`out-of-scope`**: MT-3 defines an algebra only. |
| 1.5 Outer measure and the Lebesgue extension; **1.11 Carathéodory outer measures — a separate section ten sections later** | `included` — MT-3, with the structural note that Bogachev does **not** make Carathéodory measurability the definition (he uses the symmetric-difference/inner-measure form) |
| 1.7 Lebesgue measure · 1.8 Lebesgue–Stieltjes measures · 1.9 monotone and σ-additive classes · 1.10 Souslin sets and the A-operation | 1.7–1.9 `included` (MT-4, MT-6, MT-1); **1.10 `deferred`** — the same descriptive-set-theory gap as Cohn ch. 8 |
| 1.12 supplements — "Additive, but not countably additive measures" (67), "Invariant extensions of Lebesgue measure" (80), "Some interesting sets" (61), "Whitney's decomposition" (82) | `inline` where MT-2/MT-5 already carry the witness; **"Invariant extensions of Lebesgue measure" `deferred`** — a specialist theory (Banach's finitely additive invariant extension) with no consumer here |
| 2.1–2.9, 2.11 (measurable functions, convergence, the integral, convergence theorems, **Hölder and Minkowski**) | `included` — MT-7, MT-8, MT-10, MT-14. **Structural note from Schilling's review: Bogachev derives the convergence theorems through Egorov and $L^1$-completeness rather than the Beppo Levi → Fatou → DCT order** — a third proof order beyond the two in §11.1 row 7, and one this track does not follow. |
| 2.10 Connections with the Riemann integral; §2.12 supplement "The Lebesgue–Stieltjes integral" (152) | `included` — MT-9 |
| 3.1 Decomposition of signed measures · 3.2 Radon–Nikodym · 3.3–3.4 products and Fubini · 3.6 images of measures | `included` — MT-12, MT-13, MT-11 |
| 3.5 Infinite products of measures · 3.8 Fourier transform · 3.9 Convolution | 3.5 `out-of-scope` (`probability-theory`, §2 row 5); 3.8 `out-of-scope` (`functional-analysis`); 3.9 `included` at MT-15 |
| 3.7 Change of variables in $\mathbb{R}^n$ | `included` **conditionally** — §8 seam 4 |
| **§3.10 supplement "Hausdorff measures" (215)**; "Steiner's symmetrization" (212); "The Brunn–Minkowski inequality" (222); "Mixed volumes" (226) | Hausdorff measures `included` at MT-21. **Steiner symmetrisation `deferred`** — it is exactly the tool MT-21 declines in order to avoid identifying the constant in $\mathcal{H}^n=c_n\lambda_n$, and naming it here is what makes that scope denial recoverable. Brunn–Minkowski and mixed volumes `deferred` (convex geometry; also S–S ch. 1 §5). |
| 4.1–4.5 ($L^p$, approximation, $L^2$, **duality**, uniform integrability) | `included` — MT-14, MT-15, MT-16, MT-10 |
| 4.6 Convergence of measures; §4.7 supplements (weak topology, uniform convexity, Dunford–Pettis) | `out-of-scope` — weak convergence and tightness are `probability-theory`'s (SEAMS §4); Dunford–Pettis additionally needs `functional-analysis` |
| 5.1–5.4 (differentiability on the line, BV, absolutely continuous functions, **the Newton–Leibniz formula**) | `included` — MT-18, MT-19 |
| **5.5 Covering theorems · 5.6 The maximal function** | `included` — MT-17, MT-18 |
| 5.7 The Henstock–Kurzweil integral | `out-of-scope` — §2 row 8 |
| §5.8 supplements — "Density points and Lebesgue points" (366), "Differentiation of measures on $\mathbb{R}^n$" (367) | `included` — MT-17 |
| §5.8 supplements — "The class BMO" (373), "Weighted inequalities" (374), "Measures with the doubling property" (375), "Sobolev derivatives" (376), **"The area and coarea formulas and change of variables" (379)**, "Surface measures" (383), **"The Calderón–Zygmund decomposition" (385)** | **`deferred`** — BMO, weights, doubling and Calderón–Zygmund are the harmonic-analysis continuation (the same gap as Bass ch. 24, §11.3); the area/coarea formulas and surface measures are geometric measure theory (§2 row 9); Sobolev derivatives are `pde`. Each is named individually so none is silently lost. |
| Vol. 2 (chs. 6–10: Borel/Baire/Souslin sets, measures on topological spaces, weak convergence, transformations and isomorphisms, conditional measures — incl. **§10.9 Ergodic theorems**) | `out-of-scope` for chs. 6, 8, 9, 10 (descriptive set theory, `probability-theory`, measure-algebra isomorphism theory — §2 row 14); **ch. 7 §7.1 and §7.11 `included`** at MT-20 as a convention reference only, since its Radon definition was not verified (§11.0) |
| **Vol. 1 pp. 409–440 and vol. 2 pp. 439–464, "Bibliographical and Historical Comments"** | `inline` — **the recommended attribution source for the step-1 Beta.** Location verified; contents **not** read, so no attribution in this scaffold rests on it. Cohn's own ch. 1 Notes send readers here for exactly this purpose. |

**Royden–Fitzpatrick, _Real Analysis_, 4th ed. — full text; range read: Part I chs.
1–8 and Part III chs. 17–22.** **Numbering trap: results are numbered consecutively
per chapter with no section component, and named theorems carry no number at all.
"The Vitali Covering Lemma, Theorem 6.3" does not exist — it is unnumbered, §6.2,
p. 109.**

| Royden–Fitzpatrick | disposition |
|---|---|
| Ch. 1 (the reals, open/closed/Borel sets, sequences, continuity) | `already-published` |
| 2.1–2.5 (Lebesgue outer measure, the σ-algebra, outer and inner approximation, **countable additivity, continuity, and the Borel–Cantelli lemma**) | `included` — MT-2, MT-4. RF defines measurability by **Carathéodory**, matching this track. |
| 2.6 Nonmeasurable Sets · 2.7 The Cantor Set and the Cantor–Lebesgue Function | 2.6 `included` at MT-5; 2.7 `already-published` (`def-cantor-set`, `def-cantor-function`) |
| 3.1–3.2 (sums, products, compositions; sequential pointwise limits and simple approximation) | `included` — MT-7 |
| **3.3 Littlewood's Three Principles, Egoroff's Theorem, and Lusin's Theorem** | `included` — MT-10 |
| 4.1 The Riemann Integral · **5.3 Characterizations of Riemann and Lebesgue Integrability** | `included` — MT-9 |
| 4.2–4.5 (the integral in four stages, **countable additivity and continuity of integration**) | `included` — MT-8 |
| **4.6 and 5.1 — Uniform Integrability: the Vitali Convergence Theorem, in a finite-measure and a general tight form**; 5.2 Convergence in Measure | `included` — MT-10. **RF is the source that makes the Vitali convergence theorem the centrepiece** (his Preface says so) and proves the FTC through it; MT-10 and MT-23 both exploit that. |
| 6.1–6.2 (continuity and differentiability of monotone functions; **the Vitali Covering Lemma, unnumbered p. 109; Lebesgue's Theorem, unnumbered p. 112; Corollary 4**) | `included` — MT-18 |
| **6.3 Functions of Bounded Variation: Jordan's Theorem** (unnumbered, p. 117; Lemma 5 gives the explicit decomposition) | `already-published` — `thm-jordan-decomposition-for-bv-functions` |
| 6.4 Absolutely Continuous Functions (Prop 7, **Thm 8** AC ⇒ difference of increasing AC ⇒ BV, **Thm 9** the uniform-integrability characterisation) | Thm 8 `already-published` in part (`thm-c1-lipschitz-ac-bv-hierarchy`); **Thm 9 `included`** at MT-19 as an extra characterisation worth having |
| **6.5 Integrating Derivatives: Differentiating Indefinite Integrals** (**Thm 10** the sharp FTC, **Thm 11** AC iff an indefinite integral, Cor 12, Lemma 13, **Thm 14**) | `included` — MT-19 and MT-17 |
| 6.6 Convex Functions (Chordal Slope Lemma, Cor 17 convex ⇒ locally Lipschitz hence AC, Thm 18, **Jensen's Inequality** p. 133) | `already-published` in part (the published `convexity` page at order 157, `thm-supporting-lines-for-convex-functions`); **Jensen's integral inequality `included`** at MT-8 |
| 7.1–7.4 (**normed linear spaces; Young, Hölder, Minkowski; "$L^p$ Is Complete: The Riesz–Fischer Theorem"; approximation and separability**) | `included` — MT-14, MT-15. **RF is the source that prints "Riesz–Fischer" on $L^p$ completeness** (§11.1: Rudin does not, Cohn does not name it at all). |
| **8.1 The Riesz Representation for the Dual of $L^p$** (unnumbered, p. 160) | `included` — MT-16. **Note the route: RF proves it through Chapter 6** — $\Phi(x)=T(\chi_{[a,x]})$ is AC, then Thm 10 — where this track goes through Radon–Nikodym. Both are honest; MT-16 takes the R–N route because it generalises past $\mathbb{R}$. |
| 8.2–8.4 (weak sequential convergence, weak sequential compactness, minimisation of convex functionals) | `out-of-scope` — `functional-analysis` |
| Chs. 9–16 (metric and topological spaces, Banach spaces, duality, Hilbert spaces) | `already-published` (chs. 9–12) or `out-of-scope` (chs. 13–16, `functional-analysis`) |
| 17.1–17.2 (general measures; **signed measures: Hahn and Jordan decompositions**) | `included` — MT-2, MT-12 |
| **17.3–17.5 (the Carathéodory measure induced by an outer measure; the construction of outer measures; the Carathéodory–Hahn extension of a premeasure)** | `included` — MT-3. **RF extends from a SEMIRING** (§17.5 p. 354), the only one of the eight sources that does; MT-3 uses an algebra (§D2) and this row records the divergence. |
| 18.1–18.4 (measurable functions; the integral; **the Radon–Nikodym theorem**, by Hahn decomposition + exhaustion, with von Neumann's route as Problem 59) | `included` — MT-7, MT-8, MT-13; a third independent vote for §D7's route |
| 18.5 The Nikodym Metric Space: Vitali–Hahn–Saks | **`deferred`** — Vitali–Hahn–Saks is a Baire-category theorem about setwise limits of measures; its consumers are `functional-analysis` and `probability-theory`, not this track |
| 19.1–19.2 ($L^p$ completeness and Riesz representation for the dual, σ-finite) | `included` — MT-14, MT-16 |
| **19.3 Kantorovitch Representation for the Dual of $L^\infty$** | **`deferred`** — this is a representation by *finitely additive* set functions and it does **not** discharge `rem-dual-of-l-infinity` (§2 row 15b), which is about $L^1\subsetneq(L^\infty)^*$. Named so the two are not confused. |
| 19.4–19.5 (weak sequential compactness; **Dunford–Pettis**) | `out-of-scope` — `functional-analysis` |
| 20.1 Product Measures: Fubini and Tonelli · 20.2 Lebesgue Measure on $\mathbb{R}^n$ · **20.3 Cumulative Distribution Functions and Borel Measures on $\mathbb{R}$** (right-continuous, half-open $(c,d]$) | `included` — MT-11, MT-4, MT-6 |
| **20.4 Carathéodory Outer Measures and Hausdorff Measures on a Metric Space** | `included` — MT-3 (the metric criterion) and MT-21 |
| 21.1–21.2 (locally compact spaces; separating sets and extending functions) | `already-published` — the LCH block at orders 255–269; **21.2 is the LCH Urysohn material MT-20 must assemble** (well-definedness #32) |
| **21.3 The Construction of Radon Measures · 21.4 The Riesz–Markov Theorem · 21.5 The Riesz Representation Theorem for the Dual of $C(X)$** | `included` — MT-20. RF's footnote 4 p. 456 (*"what is here called a Radon measure is often called a regular Borel measure"*) is the citation for well-definedness #31. |
| 21.6 Regularity Properties of Baire Measures | **`deferred`** — the Baire σ-algebra is a genuine refinement on non-metrisable spaces, and MT-20 works with $\mathcal{B}(X)$; naming it keeps the refinement recoverable |
| 22.1–22.3 (topological groups; Kakutani's fixed point theorem; **invariant Borel measures on compact groups**) | **`deferred`** — §2 row 7, the Haar gap |
| **22.4 Measure Preserving Transformations and Ergodicity: Bogoliubov–Krilov** | `included` — MT-22; and the **Krylov–Bogolyubov existence theorem** (a continuous map on a compact metric space has an invariant Borel probability measure) is **added to MT-22 on the strength of this harvest**, because MT-23's unique-ergodicity theorem is vacuous without it |

**Wheeden–Zygmund, _Measure and Integral_, 2nd ed. (CRC 2015) — full text; range
read: chs. 1–11.** **Numbering trap: theorems and numbered displays share one running
counter per chapter (`Lemma 7.4`, then displays `(7.5)`–`(7.8)`, then `Lemma 7.9`),
and there are no numbered Definition environments. The 1st edition (1977) was not
obtained and its numbers must not be assumed to match.**

| Wheeden–Zygmund | disposition |
|---|---|
| Ch. 1 (points and sets in $\mathbb{R}^n$, Heine–Borel, the Riemann integral) | `already-published` |
| **Ch. 2 (functions of bounded variation and the Riemann–Stieltjes integral; Cor 2.7 Jordan's Theorem, Thm 2.21 R–S integration by parts, Thm 2.27 Mean-Value Theorem)** | `already-published` — the published order-163 block. **Thm 11.11 (Riemann–Stieltjes ↔ Lebesgue–Stieltjes) is `included` at MT-9** and is the locator MT-9's agreement theorem needs, since Cohn has no R–S integral. |
| 3.1–3.4 (Lebesgue outer measure and the Cantor set; measurable sets; **characterizations of measurability, Thm 3.30**) | `included` — MT-4. **W–Z defines measurability by open-set approximation and derives Carathéodory** (§11.1 row 3), so citing W–Z ch. 3 inherits that definition. |
| 3.5 Lipschitz Transformations of $\mathbb{R}^n$ | `included` — MT-4 (the linear case) and MT-21 (the Lipschitz scaling of $\mathcal{H}^s$) |
| **3.6 A Nonmeasurable Set, `Theorem 3.38 (Vitali)`** | `included` — MT-5. **Name collision to record: W–Z's "Vitali" at 3.38 is the non-measurable set, at 7.4/7.17 the covering lemmas.** MT-5 and MT-17/18 must not cross-cite. |
| 4.1–4.4 (measurable functions, **4.2 Semicontinuous Functions**, Egorov and Lusin, convergence in measure) | `included` — MT-7, MT-10; the semicontinuity section connects to the published `def-semicontinuity` used by MT-9's fat-Cantor counterexample |
| 5.1–5.3 (the integral of a nonnegative function; properties; the general case) | `included` — MT-8 |
| **5.4 Relation between Riemann–Stieltjes and Lebesgue Integrals, and the $L^p$ spaces $0<p<\infty$ · 5.5 Riemann and Lebesgue Integrals** | `included` — MT-9 and MT-14 (including MT-14's three-item $0<p<1$ block) |
| 6.1–6.3 (**Thm 6.1 Fubini, then Thm 6.10 Tonelli as its corollary by truncation** — the reverse of Cohn's order; Thm 6.14 convolution in $L^1$) | `included` — MT-11, MT-15. §11.1 row 7's caution applies again: **W–Z's Tonelli depends on Fubini**, this track's Fubini depends on Tonelli, so the edge direction must come from Folland/Bass/Tao. |
| **`Theorem 6.17 (Marcinkiewicz)`** | **`deferred` — and this is a name trap worth recording.** W–Z's Thm 6.17 is the **Marcinkiewicz *integral*** attached to a closed set, a singular-integral object, **not** the interpolation theorem. |
| 7.1–7.2 (the indefinite integral; **`Theorem 7.2` Lebesgue's Differentiation Theorem**; the **Hardy–Littlewood maximal function at display `(7.5)`, centred, over axis-parallel cubes**; **`Lemma 7.4` Simple Vitali with $\beta=5^{-n}$**; **`Lemma 7.9` the weak $(1,1)$ inequality**; `Thm 7.11`, `Thm 7.13` density points, `Thm 7.15` Lebesgue set, **`Thm 7.16` families shrinking regularly**) | `included` — MT-17 in full. **W–Z works with cubes, Folland and Rudin with balls**; MT-17 states balls and cites `Thm 7.16` for the general shrinking-family form, and the item must not import a cube constant into a ball statement. |
| **7.3 `Theorem 7.17` the Vitali Covering Lemma (fine covers, $\sum\lvert Q_j\rvert<(1+\varepsilon)\lvert E\rvert_e$)** | `included` — MT-18 |
| 7.4–7.5 (`Thm 7.21` monotone differentiation, `Thm 7.24` $V'=\lvert f'\rvert$, **`Lemma 7.25 (Fubini)`** termwise differentiation of series of monotone functions, `Thm 7.27`–`Thm 7.30` the AC/singular decomposition, **`Thm 7.32` integration by parts**) | `included` — MT-18, MT-19 |
| 7.6 Convex Functions (**`Thm 7.35` Jensen, `Thm 7.44` Jensen's integral inequality**) | `included` — MT-8's Jensen item; the finite case is `already-published` |
| **7.7 The Differential in $\mathbb{R}^n$, `Theorem 7.53 (Rademacher–Stepanov)`** | **`deferred`** — the same deferral as Tao §2.2 (§11.2), and for the same reason |
| 8.1–8.4 (**`Thm 8.4` Young, `Thm 8.6` Hölder, `Cor 8.7` Schwarz, `Thm 8.8` the converse of Hölder, `Thm 8.10` Minkowski, `Thm 8.12`/`8.13` $\ell^p$, `Thm 8.16` the $0<p<1$ case, `Thm 8.19` continuity in $L^p$**) | `included` — MT-14, MT-15 |
| **`Theorem 8.30 (Riesz–Fischer Theorem)`** | **name trap, recorded**: in W–Z this is the **orthonormal-system** statement, *not* $L^p$ completeness (which is `Thm 8.16`/`8.18`, unnamed). §11.1: three sources attach the name "Riesz–Fischer" to three different statements. MT-14's `thm-riesz-fischer` is $L^p$ completeness, following Royden–Fitzpatrick and Stein–Shakarchi, and the item must say which theorem it is. |
| 8.5–8.7 ($L^2$ and orthogonality, Fourier series and Parseval, Hilbert spaces) | `out-of-scope` — `functional-analysis`; §2 rows 2–3 |
| 9.1–9.2 (convolutions; approximations of the identity — `Thm 9.1` Young's convolution inequality, `Thm 9.6`, **`Thm 9.13` convergence at every Lebesgue point**) | `included` — MT-15 |
| **9.3 The Hardy–Littlewood Maximal Function (`Theorem 9.16`, $\lVert f^*\rVert_p\le c\lVert f\rVert_p$ with $C_p=2^ppc/(p-1)$)** | `included` — MT-17 |
| **Ch. 9 Exercise 10 — Marcinkiewicz interpolation** | **`inline`, with a correction to the record: interpolation is NOT a theorem in Wheeden–Zygmund.** It is an exercise, diagonal case only, weak $(1,1)$ to strong $(\infty,\infty)$. **W–Z therefore cannot be cited as a backing treatment for MT-17's `thm-marcinkiewicz-interpolation`**; Bass §24.1 and Folland §6.5 are. |
| 9.4 The Marcinkiewicz Integral | `deferred` — as `Theorem 6.17` above |
| 10.1–10.3 (additive set functions and measures; measurable functions and integration; **`Thm 10.14` Egorov, `Thm 10.27` MCT, `Thm 10.29` Fatou, `Thm 10.31` DCT, `Thm 10.36` Hahn, `Thm 10.38` Lebesgue Decomposition, `Thm 10.39` Radon–Nikodym as a three-line corollary of 10.38**) | `included` — MT-2, MT-8, MT-10, MT-12, MT-13. **W–Z derives Radon–Nikodym *from* the Lebesgue decomposition**; this track proves them together (MT-13's three theorems), which is Folland's order. |
| **10.4 The Dual Space of $L^p$, `Theorem 10.44`** (unnamed; σ-finite; "the main tool is the Radon–Nikodym theorem") | `included` — MT-16, and a fourth vote for the R–N route |
| 10.5 Relative Differentiation of Measures; **`Theorem 10.45 (Besicovitch Covering Lemma)`, for cubes** | `included` at MT-17 for the relative differentiation; **Besicovitch `deferred`**, the same deferral as Tao Ex. 1.6.21 (§11.2) and for the same reason |
| **11.1–11.2 (constructing measures from outer measures; metric outer measures, `Thm 11.5`)** | `included` — MT-3 |
| **11.3 Lebesgue–Stieltjes Measure (`Thm 11.10`, `Thm 11.11`, `Cor 11.22`)** | `included` — MT-6 and MT-9 |
| **11.4 Hausdorff Measure (`Thms 11.12`–`11.16`, with `11.16(i)`: $c_1H_n(A)\le\lvert A\rvert_e\le c_2H_n(A)$)** | `included` — MT-21, and **`11.16(i)` is precisely the comparability statement MT-21 proves via MT-4's uniqueness theorem rather than via the isodiametric inequality** |
| **11.5 The Carathéodory–Hahn Extension Theorem (`Thm 11.20`, from an ALGEBRA; "semiring" occurs zero times in W–Z)** | `included` — MT-3; the fifth vote for the algebra convention |
| Chs. 12–15 (harmonic analysis, the Fourier transform, fractional integration, weak derivatives and Poincaré–Sobolev) | `out-of-scope` — `functional-analysis` and `pde`; §2 rows 3–4 |

### 11.6 The open lecture-note corpus, the ergodic sources, and four verified statements

**Obtained in full**: Bruckner–Bruckner–Thomson, _Real Analysis_, 2nd ed. (2008),
free at `https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf`
(the triple "l" is in the real filename), 656 pp. — **the deepest open treatment of
differentiation available, and MT-18/MT-19's primary backing**; John K. Hunter,
_Measure Theory_ (UC Davis),
`https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`; Bruce
Driver, _Analysis Tools with Examples_ (UCSD),
`https://mathweb.ucsd.edu/~bdriver/240b-c_2012/Lecture_Notes/240Lecture_Notes_Ver8.pdf`;
S. R. S. Varadhan, _Probability Theory_ (Courant) — **note the URL trap: `PROB.intr.pdf`
is front matter only; the chapters are `PROB.ch1.pdf` … `PROB.ch7.pdf`**;
Einsiedler–Ward, _Ergodic Theory with a view towards Number Theory_ (GTM 259), chs.
1–4 and appendices free at
`https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf`;
Katznelson–Weiss (1982) and Petersen (arXiv:math/0004070), both in full.
**Obtained at heading level**: MIT OCW 18.125 (Viaclovsky, Fall 2003, 24 lectures);
Schilling, _Measures, Integrals and Martingales_ (contents only — **the author's
`content-2e.pdf` has a garbled text layer and the chapter list used is possibly
1st-edition numbering**); Tao's 254A ergodic-theory notes (17 posts); Walters,
_An Introduction to Ergodic Theory_ (GTM 79, publisher TOC).

**BBT's ranges read and dispositions** (chs. 3, 5, 7, 8 in detail): §3.8 Hausdorff
Measures and Hausdorff Dimension (227), §3.9 Methods III and IV (240), §3.10
**Mini-Vitali Theorem (249)**, §3.11 Lebesgue differentiation theorem (256), §3.12
Cantor, Bernstein and Lusin sets (264) — all `included` at MT-21, MT-18, MT-17 and
MT-5, **and BBT `Theorem 3.39 (Mini-Vitali Covering Theorem)` states the three
equivalent forms that `rem-mini-vitali-covering-theorem` asserts**, which is the
locator §7 needs for that discharge to be complete rather than partial. §5.7 Absolute
Continuity (368), §5.8 Radon–Nikodym (377) with **Cor 5.30 the Vitali–Lebesgue
theorem** — `included` at MT-19, MT-13. Ch. 7 in full: **`Thm 7.4`/`Lemma 7.7` the
Vitali covering theorem in two forms**, **`Thm 7.8`** (BV ⇒ finite derivative a.e.),
**`Thm 7.10`** ($\int_a^bf'\le f(b)-f(a)$), **`Lemma 7.12`/`Lemma 7.13` the two
growth lemmas**, **`Thm 7.14` Banach–Zarecki**, **`Cor 7.15`**, **`Thm 7.16`**
(continuous + (N) + $f'=0$ a.e. ⇒ constant), **`Thm 7.23` de la Vallée Poussin**,
**`Thm 7.24`**, **`Thm 7.35` the Lebesgue density theorem**, **`Thm 7.39`**
(measurable ⇒ approximately continuous a.e.), **`Thm 7.42`** (a.e. point is a
Lebesgue point) — all `included` at MT-17, MT-18, MT-19. §7.6.2 **VBG\* functions**
and Exercise **7:8.5 the Denjoy–Young–Saks theorem** are **`deferred`**: VBG\* is the
Denjoy-integration apparatus (§2 row 8), and Denjoy–Young–Saks is a beautiful
theorem about the four Dini derivates of an *arbitrary* function whose only consumer
would be itself. Ch. 8 (Differentiation of Measures, §§8.1–8.7) `included` at MT-17
and MT-13. Ch. 12 §12.6.2 the Banach–Tarski paradox — `already-published` as ‡.

**Finding 1, and it corrects an assumption this scaffold could have made.
Bruckner–Bruckner–Thomson does NOT contain the rising sun lemma** — zero hits across
1124 pages — and neither does Driver, and neither does Royden–Fitzpatrick, all three
of which run differentiation through Vitali covering and growth lemmas instead.
**The rising sun lemma's sources are Tao Lemma 1.6.17 (open, full text) and
Riesz–Sz.-Nagy, _Functional Analysis_, ch. I**, the latter being the classical
reference **Cohn §6.2 p. 165 explicitly points to**. MT-18 proves the rising sun
route and the measure route; its backing for the rising sun route is Tao, singly,
plus the Riesz–Nagy pointer — **so a step-1 Beta must obtain Riesz–Sz.-Nagy ch. I, or
demote that route to a `rem-`, rather than assert a second treatment it does not
have.** This is the one place in the track where the two-treatment rule is not yet
satisfied, and it is recorded rather than papered over.

**Hunter** (`included` throughout MT-1 … MT-17, MT-14 … MT-16) is a compact modern
treatment agreeing with this track's conventions at every point checked: extension
from a premeasure (Thm 5.9), the sup-over-simple integral, Lebesgue–Stieltjes from an
increasing **right-continuous** $F$ (Thm 2.34), Carathéodory measurability, monotone
class (Thm 5.17). **It has no BV/AC-of-functions chapter, no Luzin (N) and no
Banach–Zarecki**, so it backs nothing on MT-18 or MT-19. **Driver** ch. 25 (`included`
at MT-17 … MT-19) has the covering lemma, maximal inequality, Lebesgue differentiation,
monotone and BV functions, the FTC, integration by parts and **Prop 25.40 Rademacher's
theorem**; it likewise contains no Banach–Zarecki and no Luzin (N). **MIT OCW 18.125**
lectures 1–24 map essentially one-to-one onto MT-1 … MT-19 and are `included` as a
corroborating course-level treatment; its lecture 10 ("Riesz Representation Theorem
for Positive Linear Functionals; Lebesgue Integral is the *Completion* of the Riemann
Integral") is the same design decision as §D1. **Varadhan** ch. 1 is `included` at
MT-1 … MT-11 and ch. 6 §6.1 at MT-23; chs. 2–5 and 7 are `out-of-scope`
(`probability-theory`). **Schilling** chs. 3–16 are `included` across MT-1 … MT-16,
chs. 17–19 and 22–23 `out-of-scope` (martingales and conditional expectation belong
to `probability-theory`), chs. 20–21 and 24 `out-of-scope` (`functional-analysis`).

**The ergodic sources.** Einsiedler–Ward ch. 2 is MT-22 and MT-23's backbone and its
free portion covers exactly the ground this track needs: §2.1 Measure-Preserving
Transformations, §2.2 Recurrence (**Thm 2.11 Poincaré**), §2.3 Ergodicity (**Prop 2.14**
five equivalent characterisations, **Prop 2.15** Bernoulli shifts ergodic, **Prop 2.16**
$R_\alpha$ ergodic iff $\alpha$ irrational, **Prop 2.17** the doubling map), §2.4
Associated Unitary Operators, §2.5 **Thm 2.21 the Mean Ergodic Theorem**, §2.6
**Thm 2.24 the Maximal Ergodic Theorem**, **Prop 2.26 the Maximal Inequality**,
**Thm 2.30 Birkhoff**, §2.7–2.8 mixing and weak mixing, §2.9 Induced Transformations
(**Thm 2.44 Kac**, **Lemma 2.45 Kakutani–Rokhlin**) — all `included` at MT-22 and
MT-23. §2.8's weak-mixing equivalences are `included` only as far as the definition
and the implication chain; the spectral characterisation is `deferred`
(`functional-analysis`). E–W ch. 3 Continued Fractions and ch. 4 §4.1–4.2
(existence and **ergodic decomposition**) — **`deferred`**: the Gauss map's ergodicity
and the ergodic decomposition are each a page of machinery with no consumer inside
this track, and MT-22 includes the Gauss map's *invariance* (a computation) while
naming its ergodicity as deferred. **E–W §4.3 Unique Ergodicity is `included`** at
MT-23. Chs. 5–11 (conditional measures, joinings, Furstenberg, locally compact group
actions, homogeneous dynamics) are `out-of-scope`. **Walters** ch. 1 §§1.1–1.7 is
`included` at MT-22/MT-23, **ch. 6 §6.5 Unique Ergodicity** `included`, ch. 4 Entropy
**`deferred`** (§2 row 10), chs. 2–3, 5, 7–10 `out-of-scope`. **Tao's 254A** lectures
8–9 are `included` (the mean ergodic theorem, ergodicity, the maximal inequality and
the pointwise ergodic theorem); lectures 1–7 and 10–17 (topological dynamics,
Furstenberg correspondence, Ratner-type theorems) are `out-of-scope`.

**Finding 2 — the four verified statements**, each obtained from the primary source
and each fixing a place where a plausible restatement would have been wrong.

1. **Banach–Zarecki**, verbatim from **BBT Theorem 7.14, p. 467**: *"Let $f$ be
   defined on $[a,b]$. A necessary and sufficient condition that $f$ be absolutely
   continuous is that $f$ satisfy the following three conditions: (i) $f$ is
   continuous on $[a,b]$; (ii) $f$ is of bounded variation on $[a,b]$; (iii) $f$
   satisfies Lusin's condition (N)."* **The sufficiency direction is the hard one** —
   BBT's proof opens by disposing of necessity in one line (his Thm 5.27) and needs
   two growth lemmas (7.12, 7.13) for sufficiency. Independent second source:
   **Christopher Heil, "Absolute Continuity and the Banach–Zaretsky Theorem",
   _Excursions in Harmonic Analysis_ vol. 6, Springer 2021, §3.4 Theorem 17, p. 45**,
   free at `https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf`, which adds
   a **third** equivalent condition (continuous, differentiable a.e., $F'\in L^1$,
   and (N)) — MT-19 states that third form too, since it is the one Cohn Thm 6.3.11
   nearly reaches. Continuity + BV alone is **not** enough and the Cantor function is
   the exact witness (BBT p. 371, p. 576). Heil's Remark 3 p. 47 gives the
   complex-valued form, in which "(N)" must be required of the real and imaginary
   parts separately — **a trap MT-19 must avoid by stating the theorem for
   real-valued $F$**.
2. **Solovay and Shelah**, from the original papers. Solovay, _Ann. of Math._ 92
   (1970) 1–56, **Theorem 1, p. 1**: from a transitive $\in$-model of ZFC + "there is
   an inaccessible cardinal" one obtains a transitive model of ZF in which DC holds,
   **every** set of reals is Lebesgue measurable, every set has the Baire property,
   and every uncountable set has a perfect subset. His footnote 1 defines inaccessible
   as **regular, uncountable, and $2^\alpha<\kappa$ for $\alpha<\kappa$** — strongly
   inaccessible. His **Remark 1** conjectures the inaccessible is dispensable for the
   measurability conclusion. Shelah, _Israel J. Math._ 48 (1984) 1–47, free at
   `https://shelah.logic.at/files/95333/176.pdf`, **§5.1**: *"If every $\Sigma^1_3$ set
   of reals is measurable, then $\aleph_1$ is an inaccessible cardinal in $L$"*, with
   **§5.1A** listing five equiconsistent theories including
   $\mathrm{ZF}+\mathrm{DC}+$"every set of reals is measurable"; and **§7.17**: the
   Baire-property statement is equiconsistent with **ZFC alone**. MT-5's choice ledger
   must say exactly this and no more.
3. **The maximal ergodic theorem and Birkhoff without Hilbert space.** The
   $\alpha=0$ inequality is **Yosida–Kakutani (1939)**; **Hopf** generalised it to
   positive $L^1$ contractions; **Garsia (1965)** simplified the proof of Hopf's
   version — so "Hopf's maximal ergodic theorem, in Garsia's proof" is right and
   "the maximal ergodic theorem is Hopf's" is imprecise. Exact statement, E–W
   **Thm 2.24**: for $g\in L^1_\mu$ and $E_\alpha=\{\sup_{n\ge1}\frac1n\sum_{i<n}
   g\circ T^i>\alpha\}$, $\alpha\mu(E_\alpha)\le\int_{E_\alpha}g\,d\mu\le\lVert
   g\rVert_1$, and the same with $E_\alpha\cap A$ for $T^{-1}A=A$. **Birkhoff's a.e.
   conclusion is provable with no inner product** — three independent confirmations:
   E–W's first proof of Thm 2.30 uses only Thm 2.24; **Petersen, arXiv:math/0004070**,
   proves both theorems with truncation and dominated convergence alone; and
   **Katznelson–Weiss, _Israel J. Math._ 42 (1982) 291–296** prove Birkhoff with
   neither Hilbert space **nor** a maximal inequality. **But E–W obtain the $L^1$
   convergence half from their $L^2$ mean ergodic theorem** — which this track cannot
   do — so MT-23's route to $L^1$ convergence through uniform integrability and MT-10's
   Vitali convergence theorem is not a stylistic preference but the load-bearing
   choice, and the item says so.
4. **Kac's formula**, E–W **Thm 2.44**: for an **ergodic** system on a probability
   space and $\mu(A)>0$, $\int_A r_A\,d\mu=1$. **Three precision points MT-22 must
   carry**: the "expected return time is $1/\mu(A)$" phrasing is with respect to the
   **normalised** measure $\mu\!\restriction\! A/\mu(A)$, so the unnormalised
   $\int_Ar_A\,d\mu=1$ is the safe statement; **ergodicity is a hypothesis**, and
   without it the identity becomes one about the measure of the tower
   $\bigcup_{n\ge0}T^{-n}A$; and **E–W's §2.9 assumes the system is invertible**
   throughout, with Wright's extension removing that. **Steinhaus's theorem**, BBT
   Exercise 13:12.7 p. 938 — *"Let $E\subset\mathbb{R}$ be a measurable set of
   positive measure. Then the set $E-E$ contains an interval $(-\delta,\delta)$"* —
   note BBT states it as an **exercise**, so MT-4 should cite Stromberg's one-page
   proof (_Proc. AMS_ 36 (1972) 308) or Tao Ex. 1.6.8 for a citable form.

### 11.7 Backing per pair — the row a reviewer should check first

`CLAUDE.md` requires **two independent treatments per A/B pair, at least one a
textbook, monograph or full lecture-note set with a harvestable table of contents.**
Every source below was obtained as recorded in §11.0 and §11.6.

| pair | primary | second | third / notes |
|---|---|---|---|
| MT-1 | Folland 1.2 | Bass ch. 2 | Tao §1.4, Cohn 1.1/1.6, Hunter 1.5. **Bass has no π–λ; Folland supplies it.** |
| MT-2 | Bass ch. 3 | Folland 1.3 | Tao §1.4, Cohn 1.2, Royden–Fitzpatrick 17.1 |
| MT-3 | Tao §1.7 | Bass §§4.1/4.5 | Folland 1.4, Stein–Shakarchi 6.1, W–Z 11.1/11.5. **RF 17.5 extends from a semiring and is the dissenting vote.** |
| MT-4 | Tao §1.2 | Bass §§4.2–4.3 | Stein–Shakarchi ch. 1, Cohn 1.4, Hunter ch. 2, RF ch. 2 |
| MT-5 | Bass §4.4 | Cohn Thm 1.4.9 | Tao Prop 1.2.18, W–Z 3.6, RF 2.6; **Solovay and Shelah read in the original** (§11.6) |
| MT-6 | Bass Ex. 4.4 | Tao Thm 1.7.9 | Folland 1.5, Cohn Prop 1.3.10, W–Z 11.3, RF 20.3. **Convention divergence recorded at §11.1 row 4.** |
| MT-7 | Bass ch. 5 | Folland 2.1 | Tao §1.3, Hunter ch. 3, RF 3.1–3.2 |
| MT-8 | Bass ch. 7 | Folland 2.2–2.3 | Tao §1.4, Rudin ch. 1, Cohn 2.3–2.4, Hunter ch. 4 |
| MT-9 | Bass ch. 9 | Cohn §2.5 | W–Z 5.5 and **Thm 11.11 for the Riemann–Stieltjes agreement**, RF 5.3, Tao Ex. 1.3.17 |
| MT-10 | Folland 2.4 | Bass ch. 10 | Tao §1.5, **RF 4.6/5.1 for the Vitali convergence theorem**, W–Z 4.3–4.4 |
| MT-11 | Folland 2.5–2.7 | Bass ch. 11 | Tao §1.7, Rudin ch. 8, Cohn ch. 5, Hunter ch. 5. **Polar coordinates: Folland 2.7 and S–S 6.3.2.** |
| MT-12 | Folland 3.1/3.3 | Bass ch. 12 | Rudin ch. 6, Cohn 4.1, Hunter 6.6–6.7, W–Z 10.1/10.36. **Tao does not cover this.** |
| MT-13 | Folland 3.2 | Bass ch. 13 | Cohn 4.2, BBT 5.8, RF 18.4, W–Z 10.39. **Four sources use the exhaustion route; Rudin and S–S use von Neumann.** |
| MT-14 | Folland 6.1 | Bass §§15.1–15.2 | Rudin ch. 3, RF ch. 7, Cohn 3.3–3.4, W–Z ch. 8, Hunter ch. 7 |
| MT-15 | Bass §15.3 | Folland 6.3 | W–Z ch. 9, Rudin ch. 3/8, Driver ch. 31, RF 7.4 |
| MT-16 | Folland 6.2 | Bass §15.4 | Cohn 4.5, RF 8.1/19.2, W–Z 10.4, Hunter 7.5. **Cohn 4.5.1 is the source for the sharp σ-finiteness hypothesis.** |
| MT-17 | Folland 3.4 | Bass §14.1 | W–Z 7.1–7.2 and 9.3, Stein–Shakarchi 3.1, Rudin ch. 7, Driver ch. 25, BBT 3.11/7.7. **Marcinkiewicz: Bass 24.1 and Folland 6.5 only — W–Z has it as an exercise.** |
| MT-18 | **BBT ch. 7** | Bass ch. 14 | RF ch. 6, Tao §1.6, Cohn 6.3, W–Z 7.3–7.5, Stein–Shakarchi 3.3. **The rising sun route is backed by Tao alone plus a Riesz–Nagy pointer — §11.6 finding 1, and the one open gap in this table.** |
| MT-19 | **BBT §7.3** | **Heil (2021) §3.4** | Bass §14.5, RF 6.4–6.5, Cohn 6.3, Tao Thm 1.6.40, W–Z 7.5. **Hunter and Driver carry neither (N) nor Banach–Zarecki.** |
| MT-20 | Folland ch. 7 | Cohn ch. 7 | Bass ch. 17 (compact metric only), Rudin ch. 2, RF 21.3–21.5. **Four incompatible conventions, §11.1 row 5.** |
| MT-21 | **Stein–Shakarchi ch. 7** | **BBT §3.8** | W–Z 11.4, RF 20.4, Folland ch. 11, Bogachev §3.10 |
| MT-22 | **Einsiedler–Ward §§2.1–2.3, 2.7–2.9** | **Walters ch. 1** | Stein–Shakarchi 6.5, RF 22.4 (Krylov–Bogolyubov), Tao 254A. **Bass and Tao's book carry no ergodic theory.** |
| MT-23 | **Einsiedler–Ward §§2.5–2.6, 4.3** | **Walters §§1.6, 6.5** | Stein–Shakarchi 6.5, Varadhan 6.1, Petersen (2000), Katznelson–Weiss (1982), Tao 254A lect. 8–9 |

**Every pair is backed by at least two independent treatments, with the single
recorded exception of MT-18's rising-sun route** (§11.6 finding 1), which a step-1
Beta must either source from Riesz–Sz.-Nagy ch. I or demote to a remark.

---

# The pages

Format per page: relative label, title, `requires` (direct page ids; the closure
is computed at step 1), DEFS / THMS / FS, then the B companion's examples and
counterexamples, the proof strategies for anything hard, traps, generated items,
and an explicit forward-reference statement.

Item ids below are **suggestions for step 1, not commitments**, except where a
well-definedness row of §5 fixes one. Every A page has its `-examples` companion
immediately after it. **B pages are leaves: nothing outside a B page may cite an
item homed there** — which is why several witnesses that a textbook would leave as
examples are placed on the A page instead, and each such placement is flagged.

A-page inventories are written to land at **18–40 items**, B pages at **8–18**.

---

## MT-1. $\sigma$-Algebras, $\pi$-Systems and Borel Sets

`requires`: `relations-functions-and-quotients`, `countability-and-uncountability`,
`topological-spaces-and-continuity`, `ordinals-and-transfinite-recursion`,
`cardinal-arithmetic-and-cofinality`, `cantor-set-baire-and-measure-zero`
(for `def-f-sigma-g-delta`), `the-topology-of-euclidean-space`

**DEFS.** An **algebra of subsets** of $X$ (nonempty, closed under complement and
finite union); a **$\sigma$-algebra** (closed under complement and countable
union); a **measurable space** $(X,\mathcal{A})$; the **$\sigma$-algebra generated
by** a family $\mathcal{E}$, written $\sigma(\mathcal{E})$ (well-definedness #1);
a **$\pi$-system** (nonempty, closed under finite intersection); a **$\lambda$-system**
/ **Dynkin system** ($X\in\mathcal{D}$; $A\subseteq B$ in $\mathcal{D}$ implies
$B\setminus A\in\mathcal{D}$; closed under increasing countable unions); a
**monotone class** (closed under increasing unions and decreasing intersections);
the **Borel $\sigma$-algebra** $\mathcal{B}(X)$ of a topological space
(well-definedness #2); the **trace** $\sigma$-algebra $\mathcal{A}\!\restriction\! E$;
$\limsup_k E_k := \bigcap_n\bigcup_{k\ge n}E_k$ and $\liminf_k E_k$ for a sequence
of sets.

**THMS.** An arbitrary nonempty intersection of $\sigma$-algebras on $X$ is a
$\sigma$-algebra; hence $\sigma(\mathcal{E})$ exists, contains $\mathcal{E}$, and
is contained in every $\sigma$-algebra containing $\mathcal{E}$ (**landmark**,
well-definedness #1) — and the family intersected is nonempty because
$\mathcal{P}(X)$ belongs to it. A $\sigma$-algebra is closed under countable
intersection, difference, symmetric difference, $\limsup$ and $\liminf$ of
sequences of sets, and $\liminf_k E_k \subseteq \limsup_k E_k$. Monotonicity of
$\sigma(\cdot)$, idempotence $\sigma(\sigma(\mathcal{E}))=\sigma(\mathcal{E})$, and
the **comparison criterion**: if $\mathcal{E}\subseteq\sigma(\mathcal{F})$ and
$\mathcal{F}\subseteq\sigma(\mathcal{E})$ then $\sigma(\mathcal{E})=\sigma(\mathcal{F})$
— the workhorse of every "it suffices to check on a generating family" argument
and used a dozen times downstream. An algebra closed under countable **disjoint**
unions is a $\sigma$-algebra; an algebra closed under increasing unions is a
$\sigma$-algebra. A $\lambda$-system closed under finite intersection is a
$\sigma$-algebra. **Dynkin's $\pi$–$\lambda$ theorem** (**landmark**): if
$\mathcal{P}$ is a $\pi$-system and $\mathcal{D}\supseteq\mathcal{P}$ is a
$\lambda$-system then $\sigma(\mathcal{P})\subseteq\mathcal{D}$. The **monotone
class theorem** (**landmark**): the monotone class generated by an algebra
$\mathcal{A}_0$ equals $\sigma(\mathcal{A}_0)$. Every $\sigma$-algebra is both a
$\lambda$-system and a monotone class, and neither converse holds. The trace
$\mathcal{A}\!\restriction\! E$ is a $\sigma$-algebra on $E$, and
$\sigma_E(\mathcal{E}\!\restriction\! E)=\sigma_X(\mathcal{E})\!\restriction\! E$.
$\mathcal{B}(\mathbb{R})$ is generated by each of: the open sets, the closed sets,
the open intervals, the open intervals with rational endpoints, the half-open
intervals $(a,b]$, the rays $(a,\infty)$, the rays $(q,\infty)$ with $q$ rational
(**landmark**, well-definedness #2 — seven families, one $\sigma$-algebra, proved
by the comparison criterion plus the lemma that every open subset of $\mathbb{R}$
is a countable union of rational open intervals). $\mathcal{B}(\mathbb{R}^n)$ is
generated by the open boxes with rational vertices, and equally by the half-open
boxes. For a subspace $Y\subseteq X$, $\mathcal{B}(Y)=\mathcal{B}(X)\!\restriction\! Y$.
For continuous $f:X\to Y$, $f^{-1}(\mathcal{B}(Y))\subseteq\mathcal{B}(X)$ (stated
with preimages, since measurable functions are MT-7). **The transfinite
description**: define $\mathcal{E}_0 := \mathcal{E}\cup\{\emptyset\}$ closed under
complement, and $\mathcal{E}_\alpha$ by transfinite recursion, taking countable
unions at successors and unions at limits; then
$\sigma(\mathcal{E})=\bigcup_{\alpha<\omega_1}\mathcal{E}_\alpha$ (**landmark**,
by `thm-transfinite-recursion` and the regularity of $\omega_1$ from
`thm-regularity-of-the-alephs`). Consequently
$\lvert\sigma(\mathcal{E})\rvert\le\lvert\mathcal{E}\rvert^{\aleph_0}$ when
$\mathcal{E}$ is infinite, and $\lvert\mathcal{B}(\mathbb{R}^n)\rvert=\mathfrak{c}$
(**landmark**; the choice cost is AC$_\omega$ and the Statement says so). An
infinite $\sigma$-algebra has at least $\mathfrak{c}$ elements, so **no
$\sigma$-algebra is countably infinite**. A countable partition of $X$ generates
the $\sigma$-algebra of unions of its blocks, and that $\sigma$-algebra is
countable iff the partition is finite.

**FS.** The union of an increasing sequence of $\sigma$-algebras is a
$\sigma$-algebra. The union of two $\sigma$-algebras on $X$ is a $\sigma$-algebra.
Every subset of $\mathbb{R}$ is Borel. Some $\sigma$-algebra is countably
infinite. $\mathcal{B}(\mathbb{R})$ is the collection of countable unions of
countable intersections of open and closed sets (i.e. the process closes after two
steps). A $\lambda$-system is closed under finite intersection.

**B page.** *Examples*: $\{\emptyset,X\}$ and $\mathcal{P}(X)$ as the extreme
$\sigma$-algebras; the countable–cocountable $\sigma$-algebra on an uncountable
$X$; the $\sigma$-algebra generated by a finite partition, with its $2^k$ elements
counted; $F_\sigma$ and $G_\delta$ subsets of $\mathbb{R}$ exhibited as Borel
(citing the published `def-f-sigma-g-delta` and `cor-q-is-meager-and-not-g-delta`);
$\mathbb{Q}$ as a Borel set of a strictly higher level than any open or closed set;
the $\pi$-system of rays $\{(-\infty,a]\}$ that generates $\mathcal{B}(\mathbb{R})$
and is used in every uniqueness argument later; the trace of
$\mathcal{B}(\mathbb{R})$ on the Cantor set (`def-cantor-set`, published).
*Counterexamples*: the $\lambda$-system
$\{\emptyset,\{1,2\},\{3,4\},\{1,3\},\{2,4\},\{1,4\},\{2,3\},X\}$ on
$X=\{1,2,3,4\}$, which is not a $\pi$-system, so the $\pi$-hypothesis in Dynkin's
theorem is not decoration; the increasing sequence
$\mathcal{A}_n := \sigma(\{\{0\},\dots,\{n-1\},\{n,n+1,\dots\}\})$ on $\mathbb{N}$
whose union is the algebra of finite-or-cofinite sets, not a $\sigma$-algebra; the
union of $\sigma(\{A\})$ and $\sigma(\{B\})$ for two crossing sets; a monotone
class that is not an algebra; a non-Borel subset of $\mathbb{R}$ **by cardinality
alone**, with the explicit observation that this exhibits no witness.

**Proof strategies.** The $\pi$–$\lambda$ theorem is the one genuinely fiddly
proof and is decomposed into three lemmas: (a) a $\lambda$-system closed under
finite intersection is a $\sigma$-algebra; (b) for a $\lambda$-system
$\mathcal{D}$ and $A\in\mathcal{D}$, the family
$\mathcal{D}_A := \{B : A\cap B\in\mathcal{D}\}$ is a $\lambda$-system whenever
$\mathcal{D}$ is; (c) the two-step "good sets" argument applying (b) first with
$A$ ranging over $\mathcal{P}$ and then with $A$ ranging over
$\lambda(\mathcal{P})$. **Skipping the second application is the classic error**
and it is why (b) is a separate item. The monotone class theorem is decomposed the
same way. The transfinite description needs `thm-transfinite-recursion` and the
fact that $\omega_1$ is **regular**, i.e. that a countable subset of $\omega_1$ is
bounded — that is `thm-regularity-of-the-alephs` at order 247, and it is a
**choice-dependent** fact (`DEFERRED.md` §3a records the Feferman–Levy model where
$\mathrm{cf}(\omega_1)=\omega$); the Statement must therefore carry AC$_\omega$.

**Traps.** (i) `def-f-sigma-g-delta` is published for $\mathbb{R}$; do not re-mint
it, and check at step 1 whether it is stated for a general metric or topological
space before citing it in generality. (ii) The generating-family theorem is
**one item with seven conditions**, not seven items; splitting it invites a
citation for a claim the cited item does not make. (iii) "$\sigma(\mathcal{E})$ is
the smallest $\sigma$-algebra containing $\mathcal{E}$" is only a phrase after
well-definedness #1; the definite article is earned, not assumed. (iv) The
transfinite description is stated with $\omega_1$ **stages**, not $\omega_1$
**elements**; the two are easy to confuse in prose. (v) Countable additivity does
not appear on this page at all — there is no measure yet, and every statement here
is pure set algebra. An author reaching for "measure" here is a step ahead of the
page.

**Generated items**: none. Every example above is standard.

**Forward references**: none.

---

## MT-2. Measures and Their Basic Properties

`requires`: MT-1, `limsup-and-subsequential-limits` (for $\overline{\mathbb{R}}$
and $\liminf$), `series-and-nonnegative-tests`, `filters-and-ultrafilters`,
`countability-and-uncountability`

**DEFS.** A **measure** on $(X,\mathcal{A})$: $\mu:\mathcal{A}\to[0,\infty]$ with
$\mu(\emptyset)=0$ and countable additivity on pairwise disjoint sequences; a
**measure space**; a **finitely additive** set function (for contrast, and it is
used); **finite**, **$\sigma$-finite**, **semifinite** measures; a **probability
measure**; a **null set** and **almost everywhere** *relative to $\mu$*; a
**complete** measure space; **counting measure**; a **Dirac measure**
$\delta_{x_0}$; the **restriction** $\mu\!\restriction\! E$; the sum
$\sum_k c_k\mu_k$ of measures.

**THMS.** Monotonicity; finite and countable **subadditivity**; **continuity from
below** ($E_k\uparrow E \Rightarrow \mu(E_k)\to\mu(E)$, with no finiteness
hypothesis); **continuity from above** ($E_k\downarrow E$ **and $\mu(E_1)<\infty$**
$\Rightarrow \mu(E_k)\to\mu(E)$, and the hypothesis is necessary — the witness is
on the B page **and also stated on the A page as an `fs-`**, because a B item may
not be cited); inclusion–exclusion for finitely many sets of finite measure;
$\mu(A\cup B)+\mu(A\cap B)=\mu(A)+\mu(B)$; $\mu(A\triangle B)=0$ implies
$\mu(A)=\mu(B)$. A finitely additive $\mu$ on a $\sigma$-algebra is countably
additive **iff** it is continuous from below **iff** it is continuous from above
at $\emptyset$ (three-way equivalence, **landmark**; this is the theorem that
explains what countable additivity buys). The **first Borel–Cantelli lemma**:
$\sum_k\mu(E_k)<\infty \Rightarrow \mu(\limsup_k E_k)=0$. $\liminf$/$\limsup$
inequalities: $\mu(\liminf E_k)\le\liminf\mu(E_k)$, and
$\limsup\mu(E_k)\le\mu(\limsup E_k)$ **when $\mu(\bigcup E_k)<\infty$** — the
Fatou lemma for sets, and MT-8 will note it is the special case of Fatou's lemma
for indicators. The set of null sets is closed under countable union and under
subsets *only when the space is complete*. **The completion theorem** (four items,
well-definedness #4). A measure is semifinite iff every set of infinite measure
contains subsets of arbitrarily large finite measure; every measure decomposes as
a semifinite part plus a purely infinite part. **The uniqueness theorem**
(**landmark**): if $\mu,\nu$ agree on a $\pi$-system $\mathcal{P}$ generating
$\mathcal{A}$, and $X=\bigcup_k P_k$ for an increasing sequence in $\mathcal{P}$
with $\mu(P_k)<\infty$, then $\mu=\nu$ — by $\pi$–$\lambda$, and the
$\sigma$-finiteness-along-$\mathcal{P}$ hypothesis is necessary (witness on the A
page as an `fs-`).

**FS.** Every finitely additive set function on a $\sigma$-algebra is a measure.
Continuity from above holds for every measure without a finiteness hypothesis.
Two measures agreeing on a generating family agree (i.e. the $\pi$-system
hypothesis is superfluous). A subset of a $\mu$-null set is $\mu$-measurable.
$\mu(\bigcup_k E_k)=\sum_k\mu(E_k)$ for every sequence (i.e. disjointness is
superfluous). A measure on an infinite set with $\mu(\{x\})=0$ for every $x$ is
identically zero.

**B page.** *Examples*: counting measure on an arbitrary set, and the observation
that it is $\sigma$-finite exactly when the set is countable; $\delta_{x_0}$; the
measure $\mu(E)=\sum_{k\in E}2^{-k}$ on $\mathcal{P}(\mathbb{N})$, a probability
measure; the "$0$ on countable, $\infty$ on uncountable" measure on an uncountable
$X$ with the countable–cocountable $\sigma$-algebra — **not semifinite**, and the
standing witness for every semifiniteness hypothesis in the track (MT-16 uses it
again); the completion of the Borel measure that is $\delta_0$ (computed);
Borel–Cantelli applied to $E_k = (0,2^{-k})$. *Counterexamples*: counting measure
on $\mathbb{N}$ with $E_k=\{k,k+1,\dots\}$ — $E_k\downarrow\emptyset$ but
$\mu(E_k)=\infty$, so continuity from above fails; the **finitely additive,
not countably additive** $0$–$1$ measure induced by a free ultrafilter on
$\mathbb{N}$ (existence from `thm-ultrafilter-lemma`, order 12 — this is why
`filters-and-ultrafilters` is in `requires`); two measures on
$\{1,2,3,4\}$ agreeing on the generating family $\{\{1,2\},\{1,3\}\}$ but not
equal, showing the $\pi$-hypothesis is needed; a non-complete Borel measure space
(Lebesgue-null subsets of the Cantor set that are not Borel — **forward pointer
only**, since the witness needs MT-5; the B item states the finished fact and
cites MT-5, which is legal because it is a later A page, not an earlier one — see
traps).

**Traps.** (i) **A B page is a leaf.** The continuity-from-above and
$\pi$-system-necessity witnesses are needed by later *pages*, so the A page
carries them as `fs-` items with their refutations, and the B page carries the
concrete computations. Getting this backwards is the level-7 defect the library
already paid for. (ii) The free-ultrafilter measure is finitely additive and
$\{0,1\}$-valued and **is not** a measure; the item title must not call it one.
(iii) "Null set" now has two meanings in the library — the elementary covering
sense at order 133 and the $\mu$-relative sense here. MT-4 reconciles them for
$\lambda$; **this page must not pretend the reconciliation has happened**, and its
scope sentences are order-relative. (iv) The three-way equivalence is one item.

**Generated items**: the computed value of the completion of $\delta_0$
(`ex-`, `generation.role: example`); the four-point $\pi$-system counterexample
(`cex-`, `generation.role: counterexample`) if no source states it in that exact
form — check first, it is in several.

**Forward references**: one, orientation-only, from the B page's non-complete
example to MT-5. It is on an example item, is not load-bearing, and points
strictly later.

---

## MT-3. Outer Measure and the Carathéodory Extension Theorem

`requires`: MT-1, MT-2, `series-and-nonnegative-tests`,
`suprema-and-infima`, `metric-spaces`

**DEFS.** An **outer measure** $\mu^*$ on $X$ ($\mu^*(\emptyset)=0$, monotone,
countably subadditive, defined on **all** subsets); a **Carathéodory measurable**
set ($\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$); a
**premeasure** $\mu_0$ on an algebra $\mathcal{A}_0$ (finitely additive, and
countably additive whenever the disjoint union happens to lie in $\mathcal{A}_0$);
the **outer measure induced by a premeasure**,
$\mu^*(E)=\inf\{\sum_k\mu_0(A_k) : E\subseteq\bigcup_k A_k,\ A_k\in\mathcal{A}_0\}$;
a **regular** outer measure; a **measurable hull**; a **metric outer measure** on a
metric space (additive on positively separated pairs).

**THMS.** **Carathéodory's theorem** (**landmark**, well-definedness #5),
decomposed: the measurable sets form an algebra (with the subadditivity half of
the defining identity always automatic, so only "$\ge$" is ever checked — a lemma
in itself, and the one that shortens every later verification); $\mu^*$ is finitely
additive on it; it is closed under countable disjoint unions with additivity, hence
a $\sigma$-algebra; $\mu^*$ restricted to it is a **complete** measure. Every set
of outer measure zero is measurable. **The extension theorem** (**landmark**,
well-definedness #6): for a premeasure $\mu_0$ on an algebra $\mathcal{A}_0$, the
induced $\mu^*$ is an outer measure, every $A\in\mathcal{A}_0$ is measurable, and
$\mu^*\!\restriction\!\mathcal{A}_0=\mu_0$ — the last clause is where countable
additivity of $\mu_0$ is consumed and it is a separate item. **Uniqueness**: if
$\mu_0$ is $\sigma$-finite then the extension to $\sigma(\mathcal{A}_0)$ is unique
(via MT-2's uniqueness theorem), and $\mu^*$ restricted to the Carathéodory
$\sigma$-algebra is the completion of that extension. Without $\sigma$-finiteness
uniqueness fails (`fs-` on the A page with an explicit witness). A regular outer
measure has measurable hulls, and for a regular $\mu^*$ continuity from below holds
on **all** subsets, not merely measurable ones (a genuinely useful and often-omitted
theorem, used by MT-17). **Carathéodory's criterion**: for a metric outer measure
on a metric space, every Borel set is measurable (**landmark**; the proof is the
increasing-sequence-of-separated-pieces argument and is decomposed into two lemmas).

**FS.** Every subset of $X$ is Carathéodory measurable for every outer measure.
An outer measure is countably additive on all of $\mathcal{P}(X)$. A finitely
additive set function on an algebra always extends to a measure on the generated
$\sigma$-algebra. The extension of a premeasure is always unique. $\mu^*$ agrees
with $\mu_0$ on $\mathcal{A}_0$ for every finitely additive $\mu_0$.

**B page.** *Examples*: the outer measure $\mu^*(E)=0,1$ according as
$E=\emptyset$ or not — its measurable sets are exactly $\emptyset$ and $X$;
$\mu^*(E)=\lvert E\rvert$ for finite $E$ and $\infty$ otherwise (counting outer
measure), where every set is measurable; the outer measure induced by
$\mu_0 = $ counting measure on the algebra of finite/cofinite subsets of
$\mathbb{N}$; a metric outer measure exhibited on $\mathbb{R}$ so
Carathéodory's criterion has a concrete instance before MT-4 and MT-21 need it.
*Counterexamples*: an outer measure with a non-measurable set (the two-point
example above, or $\mu^*$ on a three-point set); a finitely additive premeasure
candidate that is **not** a premeasure — $\mu_0(A)=0$ for finite $A$ and $\infty$
for cofinite $A$ on the finite/cofinite algebra of $\mathbb{N}$ — showing where the
extension theorem's hypothesis bites; two distinct extensions of a
non-$\sigma$-finite premeasure.

**Proof strategies.** The Carathéodory proof is standard but its *decomposition*
is the point: the "$\le$ is automatic" lemma is stated once and cited five times,
and the countable-additivity step is separated from the $\sigma$-algebra step so
neither proof carries the other's bookkeeping. For the extension theorem, the
clause $\mu^*\!\restriction\!\mathcal{A}_0=\mu_0$ is proved by covering
$A\in\mathcal{A}_0$ by $(A_k)$, disjointifying inside $\mathcal{A}_0$, and using
countable additivity of $\mu_0$ **on the disjointified family** — that is exactly
the hypothesis, and an author who reaches for finite additivity here has a false
proof that looks right.

**Traps.** (i) An outer measure is defined on **every** subset; a measure is not.
Two words, and the whole chapter turns on them. (ii) Carathéodory measurability is
a *test against all $A$*, not a property of $E$ alone; the quantifier is the
definition. (iii) `thm-caratheodory-characterisation` at order 145 is about
**differentiability**; the naming collision is real and MT-3 must carry a
disambiguating `rem-`, or the judge will report a duplication (the CA track hit
exactly this with the two open mapping theorems). (iv) $\sigma$-finiteness is a
hypothesis of **uniqueness**, never of existence.

**Generated items**: the three-point outer-measure counterexample and the computed
two-point example, both `cex-`/`ex-` with `generation.role` set.

**Forward references**: none.

---

## MT-4. Lebesgue Measure on Euclidean Space

`requires`: MT-3, `the-topology-of-euclidean-space`, `compactness-in-metric-spaces`
(Heine–Borel), `cantor-set-baire-and-measure-zero`,
`the-riemann-integral-in-rn-and-jordan-content`, `determinants-of-matrices-over-a-commutative-ring`,
`gaussian-elimination-and-row-reduction`

**DEFS.** A **half-open box** $\prod_{i<n}[a_i,b_i)$ and its **volume**;
the algebra $\mathcal{E}_n$ of finite disjoint unions of half-open boxes;
**Lebesgue outer measure** $\lambda_n^*$; **Lebesgue measure** $\lambda_n$ and the
**Lebesgue $\sigma$-algebra** $\mathcal{L}(\mathbb{R}^n)$; **$\lambda$-almost
everywhere** (well-definedness #10); a **Lebesgue null set**.

**THMS.** *The construction*, well-definedness #7, in four items: volume is
finitely additive under subdivision of a box into a grid of subboxes (a
combinatorial lemma, and the one most often waved through — it is proved by
induction on the coordinate directions); $\mathcal{E}_n$ is an algebra and every
element has a canonical disjoint representation; volume is finitely additive on
$\mathcal{E}_n$; **volume is a premeasure on $\mathcal{E}_n$** (**landmark** — the
compactness step: enlarge to open boxes by $\varepsilon2^{-k}$, shrink to a compact
box, apply Heine–Borel, and let $\varepsilon\to0$). Then $\lambda_n$ is the
Carathéodory extension and $\mathcal{L}(\mathbb{R}^n)\supseteq\mathcal{B}(\mathbb{R}^n)$;
$\lambda_n(\text{box})=\prod(b_i-a_i)$ for boxes of every kind (open, closed,
half-open, degenerate) — a **theorem**, not a definition; $\lambda_n$ is
$\sigma$-finite and every compact set has finite measure; singletons, hyperplanes
and countable sets are null; $\lambda_1(\mathbb{Q})=0$.

*Agreement with the published elementary theory*, well-definedness #9–#10, and the
most important items on the page: $\lambda_n^*(A)=0$ **iff** $A$ is null in the
sense of the published `def-measure-zero-and-content-zero` (for $n=1$; and the
$\mathbb{R}^n$ statement against the null sets of `thm-lebesgue-criterion-in-rn`),
with the closed-versus-open covering interval conversion done explicitly; hence
"almost everywhere" as used at orders 133, 159, 163 and 239 is
"$\lambda$-almost everywhere"; hence `thm-lebesgue-criterion` reads "Riemann
integrable iff the discontinuity set has $\lambda$-measure zero"; hence
`thm-fat-cantor-set-has-positive-measure` acquires an exact value, computed here;
hence `thm-cantor-set-properties` gives $\lambda_1(C)=0$ and MT-4 records that
$C$ is an uncountable null set. **Also**: $\lambda_n^*$ agrees with the **Jordan
outer content** of `def-jordan-inner-and-outer-content` on Jordan-measurable sets,
and is strictly smaller in general — the second dictionary the page owes, with
$\mathbb{Q}\cap[0,1]$ as the witness (published as
`cex-rational-points-in-unit-square-have-no-jordan-content`).

*Regularity and structure*: **outer regularity** ($\lambda_n(E)=\inf\{\lambda_n(U):
E\subseteq U \text{ open}\}$ for every $E\in\mathcal{L}$, and indeed
$\lambda_n^*(A)=\inf\{\lambda_n(U):A\subseteq U\}$ for **every** $A$);
**inner regularity by closed sets** for every measurable $E$, and **by compact
sets** (using $\sigma$-compactness of $\mathbb{R}^n$,
`cor-rn-is-locally-compact-and-sigma-compact`); the **Littlewood
characterisations** (**landmark**, four equivalent conditions on $E\subseteq\mathbb{R}^n$:
$E\in\mathcal{L}$; for every $\varepsilon$ an open $U\supseteq E$ with
$\lambda^*(U\setminus E)<\varepsilon$; $E=G\setminus N$ with $G$ a $G_\delta$ and
$N$ null; $E=F\cup N'$ with $F$ an $F_\sigma$ and $N'$ null); consequently
$\mathcal{L}(\mathbb{R}^n)$ is exactly the **completion** of
$\lambda_n\!\restriction\!\mathcal{B}(\mathbb{R}^n)$ (well-definedness #8);
$\lambda_n$ is the unique translation-invariant Borel measure on $\mathbb{R}^n$
assigning $1$ to the unit cube (**landmark**; the proof is the dyadic-cube
argument and it is what makes "the" Lebesgue measure a phrase).

*Invariance*: translation invariance of both $\lambda_n^*$ and
$\mathcal{L}(\mathbb{R}^n)$; dilation $\lambda_n(cE)=\lvert c\rvert^n\lambda_n(E)$;
reflection invariance; **the linear change of variables**
$\lambda_n(T(E))=\lvert\det T\rvert\,\lambda_n(E)$ for linear $T$ (**landmark**,
proved by factoring $T$ into elementary matrices — `gaussian-elimination-and-row-reduction`
is published — plus the shear computation, and the singular case
$\det T = 0$ handled separately because $T(\mathbb{R}^n)$ is then a proper
subspace, hence null); rotation invariance as the corollary.
**Steinhaus's theorem**: if $\lambda_n(E)>0$ then $E-E$ contains a ball about the
origin (**landmark**; proved from outer regularity plus a density/box argument, and
it is what MT-5 uses twice).

**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. A Lebesgue measurable
set is Borel. A set of Lebesgue measure zero is nowhere dense. A nowhere dense set
has measure zero. (The last two are **published** as
`fs-measure-zero-implies-nowhere-dense` and `fs-nowhere-dense-implies-measure-zero`
at order 133, so MT-4 **cites them and does not re-mint**; what MT-4 adds is the
same statements against the σ-additive definition, as a single agreement remark.)
$\lambda_n$ is inner regular by compact sets on every subset of $\mathbb{R}^n$
(false without measurability). A translation-invariant Borel measure on
$\mathbb{R}$ is a multiple of $\lambda_1$ (false without local finiteness —
counting measure).

**B page.** *Examples*: $\lambda_1$ of an interval, of $\mathbb{Q}$, of the Cantor
set (zero), of the standard fat Cantor set (computed exactly, upgrading the
published `thm-fat-cantor-set-has-positive-measure` and
`ex-fat-cantor-measure-computed`); a $G_\delta$ of measure zero containing
$\mathbb{Q}$ — hence a dense null $G_\delta$, and beside it the published
`cex-dense-set-of-measure-zero` and `cex-meager-set-of-full-measure` (which are
already on disk and were stated in the elementary sense — the B page relates them);
an open dense subset of $[0,1]$ of measure $<\varepsilon$; the measure of the graph
of a function $\mathbb{R}\to\mathbb{R}$ in $\mathbb{R}^2$ is zero when the function
is continuous, and in general for measurable functions (via MT-11 — so this one is
**deferred to MT-11's B page** rather than forward-referenced); Steinhaus applied to
show a measurable subgroup of $\mathbb{R}$ of positive measure is $\mathbb{R}$.
*Counterexamples*: a compact set of positive measure with empty interior (the fat
Cantor set again, this time as a measure statement); a set whose outer and inner
measures differ — **deferred to MT-5**, which owns the non-measurable material.

**Traps.** (i) The half-open box is chosen so that $\mathcal{E}_n$ is an algebra;
with closed boxes it is not, and the whole construction limps. (ii) The premeasure
step is the only compactness in the whole construction; an author who "proves"
countable additivity of volume by finite additivity plus a limit has proved
nothing. (iii) The agreement item #9 must be stated against the **published closed
interval, sum $\le\varepsilon$, index from $0$** definition, quoted exactly; a
paraphrase into open intervals is a citation-fidelity defect of exactly the kind
`CLAUDE.md` names. (iv) `thm-fat-cantor-set-has-positive-measure` currently means
"not null in the elementary sense"; the upgrade to an exact value is new
mathematics on this page, not a restatement, and its Statement must not claim the
published item already said it. (v) The uniqueness-of-$\lambda_n$ theorem needs
**local finiteness**, and the `fs-` above is there to make that visible.
(vi) Do not state the $C^1$ change of variables here — §8 seam 4 puts it on MT-11
if at all.

**Generated items**: the exact measure of the standard fat Cantor set (`ex-`,
computation, checkable); the dense open set of small measure (`ex-`); the
measurable-subgroup corollary (`cor-`, `generation.role: direct-corollary`) unless
a source states it, and Steinhaus's own sources usually do.

**Forward references**: none. The two deferred witnesses go to MT-5 and MT-11 by
*placement*, not by forward reference.

---

## MT-5. Non-Measurable Sets and the Cost of Choice

`requires`: MT-4, `order-zorn-and-the-axiom-of-choice`,
`ordinals-and-transfinite-recursion`, `cardinal-arithmetic-and-cofinality`,
`countability-and-uncountability`, `filters-and-ultrafilters`,
`cantor-set-baire-and-measure-zero`

This page exists because the dispatch names "the non-measurable set and its choice
cost, Vitali" explicitly, because the library already carries four published ‡
remarks about it, and because the choice accounting is the part textbooks get
loosest. It is short on machinery and heavy on precision.

**DEFS.** A **Vitali set** (a transversal of the cosets of $\mathbb{Q}$ in
$\mathbb{R}$, restricted to $[0,1]$); a **Bernstein set**; **inner measure**
$\lambda_*(E) := \sup\{\lambda(K) : K\subseteq E \text{ compact}\}$, with the
theorem that for bounded $E$, measurability is $\lambda_*(E)=\lambda^*(E)$.

**THMS.** A Vitali set exists (**AC** on a family of size $\mathfrak{c}$; **not**
AC$_\omega$, and the Statement says which); **a Vitali set is not Lebesgue
measurable** (**landmark**; the countable-translates-tile-a-bounded-interval
argument, with both the "measure zero" and "positive measure" branches written
out). Every set of positive outer measure contains a non-measurable subset
(**landmark**; via Steinhaus or via translating a Vitali set). $\mathcal{L}$ is not
closed under continuous images: the Cantor function carries a Lebesgue null set
onto a set of positive measure, so there is a Lebesgue measurable set whose image
under a continuous strictly increasing map is non-measurable, and there is a
Lebesgue measurable $E$ and a continuous $g$ with $g^{-1}(E)$ non-measurable
(**landmark**, and the standard warning for MT-7's composition rules). Consequently
**there is a Lebesgue measurable set that is not Borel** — proved twice: once by
this explicit route and once by cardinality,
$\lvert\mathcal{L}(\mathbb{R})\rvert=2^{\mathfrak{c}}>\mathfrak{c}=\lvert\mathcal{B}(\mathbb{R})\rvert$,
using MT-1's cardinality theorem and the fact that every subset of the Cantor set
is null hence measurable. A **Bernstein set** exists (transfinite recursion of
length $\mathfrak{c}$ over the perfect subsets of $\mathbb{R}$, using
`thm-well-ordering-theorem`), and it is non-measurable with
$\lambda_*(B)=0$ and $\lambda^*(B\cap I)=\lvert I\rvert$ for every interval — so
"non-measurable" can fail as badly as possible. **A free ultrafilter on
$\mathbb{N}$, viewed as a subset of $\{0,1\}^{\mathbb{N}}\cong[0,1]$ up to a null
set, is not Lebesgue measurable** (Sierpiński; it discharges half of the published
`rem-sierpinski-ultrafilter-not-measurable`). **The proof route is a $0$–$1$ law and
an involution, and is NOT Steinhaus** — see the traps. It needs one supporting item,
proved here: **a measurable $A\subseteq[0,1]$ invariant under changing finitely many
binary digits has $\lambda(A)\in\{0,1\}$**, proved from MT-4's translation invariance
(each "change the first $n$ digits" map is a piecewise translation of $[0,1]$, hence
measure preserving) plus dyadic approximation to an open superset, so the relative
measure $\lambda(A\cap I)/\lambda(I)$ is the same for every dyadic interval $I$. There is **no** translation-invariant
measure on all of $\mathcal{P}(\mathbb{R})$ that is finite and nonzero on $[0,1]$
(**landmark**, the honest general statement the Vitali construction really proves).

**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. A non-measurable set
can be constructed without the axiom of choice. Every Lebesgue measurable set is
Borel. The continuous image of a Lebesgue measurable set is Lebesgue measurable.
The composition $g\circ f$ of a Lebesgue measurable $g$ with a continuous $f$ is
Lebesgue measurable. A set of outer measure zero and a set of full inner measure
cannot both be dense in every interval.

**B page.** *Examples*: the explicit coset structure of $\mathbb{R}/\mathbb{Q}$;
the Cantor–Lebesgue function $\psi(x) = x + c(x)$ (with $c$ the published
`def-cantor-function`) as a homeomorphism $[0,1]\to[0,2]$ carrying the Cantor set
onto a set of measure $1$ — the engine of the "measurable not Borel" route;
counting the Vitali translates. *Counterexamples*: the Vitali set itself; a
Bernstein set; two disjoint non-measurable sets whose union is measurable, showing
that measurability of a union says nothing about the pieces; a non-measurable
subgroup of $(\mathbb{R},+)$ (a Hamel-basis construction — `AC`, and the library's
`cex-discontinuous-midpoint-convex-hamel-function` is already published and can be
cited rather than rebuilt).

**Choice ledger for this page** — its own `rem-`, and the most careful one in the
track: what the Vitali construction uses (AC on $\mathfrak{c}$ many cosets); what
it does **not** need (no well-ordering of $\mathbb{R}$, no CH); what Bernstein
needs (a well-ordering of the perfect sets, i.e. AC); that ZF + DC proves no
non-measurable set exists **relative to an inaccessible** (Solovay 1970), that
Shelah 1984 showed the inaccessible is **necessary for the measurability half and
removable for the Baire-property half**, and that all of this is recorded, not
proved here — citing the published `rem-vitali-non-measurable-set` and
`deferred-set-theory-beyond-choice`. **Every one of those attributions must be
checked against a source at step 1**; §11 records what was found.

**Traps.** (i) "The Vitali set" is not a set — the construction depends on the
choice function, and the item must say "a Vitali set". (ii) The
$\lvert\mathcal{L}\rvert = 2^{\mathfrak{c}}$ argument needs "every subset of a null
set is measurable", i.e. completeness of $\lambda$, plus $\lvert C\rvert=\mathfrak{c}$
from `thm-cantor-set-properties`. (iii) The Cantor–Lebesgue route and the
cardinality route prove **different** things: the first exhibits a witness, the
second does not, and the page says which is which. (iv) Do not assert "Solovay's
model shows Vitali needs more than DC" without the inaccessible; the published
remark already gets this right and a looser restatement here would be a
regression. **Verified from the original papers** (§11.6): Solovay's hypothesis is a
transitive $\in$-model of ZFC + "there is a (strongly) inaccessible cardinal", and
Shelah 1984 §5.1 proves $\mathrm{ZF}+\mathrm{DC}+$"every set of reals is measurable"
implies $\aleph_1$ is inaccessible in $L$, while §7.17 shows the Baire-property
statement is equiconsistent with ZFC alone. Solovay had **conjectured** the
inaccessible was dispensable for measurability (his Remark 1); Shelah refuted exactly
that, so "Solovay speculated, Shelah answered" is the correct framing.
(v) **The ultrafilter theorem's proof is a tail $0$–$1$ law plus the
complement-swapping involution, not Steinhaus.** A free ultrafilter is invariant
under finite modification, so the $0$–$1$ law forces measure $0$ or $1$; but
$U\mapsto U^c$ is measure preserving on $\{0,1\}^{\mathbb{N}}$ and exchanges the
ultrafilter with its complement, forcing measure $1/2$. Contradiction. **Steinhaus
belongs to a *different* Sierpiński theorem** — that two null sets can have
non-measurable algebraic sum — and citing it here would be a real conflation, of
exactly the kind the citation-fidelity rule forbids. (vi) `rem-banach-tarski` belongs
to `deferred-set-theory-beyond-choice`; mention it in `external_refs`, never in
`deps`.

**Generated items**: the "two disjoint non-measurable sets with measurable union"
counterexample (`cex-`, checkable, `generation.role: counterexample`) if no source
states it — several do, so check first.

**Forward references**: none.

---

## MT-6. Lebesgue–Stieltjes Measures and Distribution Functions

`requires`: MT-3, MT-4, `monotone-functions-and-discontinuities`,
`bounded-variation-and-riemann-stieltjes`, `limits-of-real-functions`

The page that makes Carathéodory pay for itself a second time, that gives
`probability-theory` its distribution functions, and that gives MT-18 the measures
it differentiates.

**DEFS.** A **Borel measure on $\mathbb{R}$ finite on compact sets** (a
**Radon measure on $\mathbb{R}$**, in the MT-20 sense, but defined concretely
here); the **distribution function** $F_\mu$ of such a measure, normalised at $0$;
the **Lebesgue–Stieltjes measure** $\mu_F$ of an increasing right-continuous $F$;
the **Lebesgue–Stieltjes outer measure**; the **Lebesgue–Stieltjes $\sigma$-algebra**
$\mathcal{L}_F$; **atoms** of a measure on $\mathbb{R}$.

**THMS.** Well-definedness #11 in four items: for increasing right-continuous $F$,
$\mu_0((a,b]) := F(b)-F(a)$ is finitely additive on the algebra of finite disjoint
half-open intervals; it is a **premeasure** (the compactness argument again, and
**right-continuity is exactly what makes the $\varepsilon$-enlargement possible**);
hence $\mu_F$ exists with $\mu_F((a,b])=F(b)-F(a)$; and $\mu_F$ is the unique Borel
measure with that property (MT-2's uniqueness theorem on the $\pi$-system of
half-open intervals). Conversely, for a Borel measure $\mu$ finite on compacta,
$F_\mu(x) := \mu((0,x])$ for $x\ge0$ and $-\mu((x,0])$ for $x<0$ is increasing and
right-continuous with $\mu_{F_\mu}=\mu$; and $\mu_F = \mu_G$ iff $F-G$ is constant.
**So $F\mapsto\mu_F$ is a bijection from increasing right-continuous functions
modulo constants onto Borel measures finite on compacta** (**landmark**). Point
masses: $\mu_F(\{a\}) = F(a)-F(a^-)$, so the atoms of $\mu_F$ are exactly the
jump discontinuities of $F$, and there are at most countably many
(`cor-bv-discontinuities-are-countable-and-of-first-kind` is published at 163 —
cite it). $\mu_F((a,b)) = F(b^-)-F(a)$, $\mu_F([a,b]) = F(b)-F(a^-)$: the four
interval formulas, stated once and correctly. $\mu_F$ is outer regular and inner
regular by compact sets. **$\lambda_1 = \mu_{\mathrm{id}}$** — the dictionary item
tying this page back to MT-4. **The Lebesgue–Stieltjes integral agrees with the
Riemann–Stieltjes integral** for a continuous integrand and an increasing
right-continuous integrator on a compact interval (**landmark**, and the seam this
page owes to the published Riemann–Stieltjes block at 163 — deferred in item order
to MT-9, which is where the integral exists; recorded here so it is not lost).
The **Cantor measure** $\mu_c$ from the published `def-cantor-function`: it is a
Borel probability measure on $[0,1]$, atomless, and concentrated on the Cantor set,
hence singular with respect to $\lambda$ — the standing example of MT-13.
Every finite Borel measure on $\mathbb{R}$ decomposes as
atomic $+$ atomless (a `thm-`, cheap, and used by MT-13's decomposition).

**FS.** Every increasing $F$ defines a Borel measure with $\mu((a,b])=F(b)-F(a)$
(right-continuity is not decoration). $\mu_F(\{a\})=0$ for every $F$ and $a$.
$\mu_F$ determines $F$. Every Borel measure on $\mathbb{R}$ is finite on compact
sets. An atomless measure on $\mathbb{R}$ is absolutely continuous with respect to
$\lambda$ (the Cantor measure refutes it — and this `fs-` is the single most
valuable item on the page, since it is the mistake everyone makes).

**B page.** *Examples*: $F(x)=x$ giving $\lambda_1$; $F = \mathbf{1}_{[0,\infty)}$
giving $\delta_0$; a step function giving a purely atomic measure; the Cantor
function giving the Cantor measure, with $\mu_c([0,1])=1$ and $\mu_c(C)=1$
computed; $F(x) = \arctan(x)/\pi + 1/2$ giving a probability measure with a
density (density only after MT-13 — so the B item states the measure and its
distribution function, and the density statement waits); the four interval formulas
computed for a specific $F$ with one jump. *Counterexamples*: an increasing $F$
that is **not** right-continuous and the resulting failure of countable additivity,
exhibited concretely; two distinct $F$ with the same $\mu_F$; the Cantor measure as
an atomless measure that is not given by a density.

**Traps.** (i) The convention is $(a,b]$ and **right**-continuity; the left-continuous
convention with $[a,b)$ is equally standard in the literature and gives a
*different* measure for the same $F$. §11's convention ledger records which sources
do what; this page adopts right-continuity, says so in a `rem-`, and never mixes.
(ii) The normalisation $F_\mu(0)=0$ is a choice; without it "the" distribution
function is not a phrase. (iii) The published `def-riemann-stieltjes-sum-and-integral`
at 163 uses a general BV integrator, not an increasing right-continuous one; the
agreement theorem must match hypotheses exactly or it is a citation-fidelity
defect. (iv) "Radon measure on $\mathbb{R}$" is defined concretely here and
abstractly on MT-20; MT-20 owes the agreement remark, not this page.

**Generated items**: the computed four interval formulas for a specific $F$
(`ex-`); the non-right-continuous failure (`cex-`) if unsourced — it is in Folland
and Cohn as an exercise, so check.

**Forward references**: none. The density and singularity statements are *placed*
on MT-13, not forward-referenced.

---

## MT-7. Measurable Functions and Simple Approximation

`requires`: MT-1, MT-2, `limsup-and-subsequential-limits`,
`topological-spaces-and-continuity`, `monotone-functions-and-discontinuities`,
`the-topology-of-euclidean-space`, `countability-axioms-and-cardinal-functions`

**DEFS.** A **measurable function** $f:(X,\mathcal{A})\to(Y,\mathcal{B})$
($f^{-1}(B)\in\mathcal{A}$ for every $B\in\mathcal{B}$); the **order topology and
Borel $\sigma$-algebra on $\overline{\mathbb{R}}$**, with $\mathcal{B}(\overline{\mathbb{R}})$
generated by the rays $(a,\infty]$; a **Borel function** and a **Lebesgue
measurable function** on $\mathbb{R}^n$, and the warning that the two are
different (MT-5); the **positive and negative parts** $f^+ := \max(f,0)$,
$f^- := \max(-f,0)$; a **simple function** (measurable, finitely many values, all
real) and its **canonical representation** $\sum_{j<m} c_j\mathbf{1}_{E_j}$ with
the $c_j$ distinct and the $E_j$ its level sets; the **$\sigma$-algebra generated
by a function**, $\sigma(f) := \{f^{-1}(B) : B\in\mathcal{B}\}$; **the convention
$0\cdot\infty := 0$** (well-definedness #13, §D4).

**THMS.** *The generating-family criterion* (**landmark**): $f$ is measurable as
soon as $f^{-1}(E)\in\mathcal{A}$ for every $E$ in a family generating
$\mathcal{B}$ — because $\{B : f^{-1}(B)\in\mathcal{A}\}$ is a $\sigma$-algebra,
which is MT-1's comparison criterion doing its work. Hence for
$f:X\to\overline{\mathbb{R}}$ it suffices that $\{f>a\}\in\mathcal{A}$ for every
real $a$, and equivalently for every **rational** $a$ (well-definedness #12), and
equivalently with $\ge$, $<$, $\le$ — one item, four conditions. Continuous
$\Rightarrow$ Borel. A monotone $f:\mathbb{R}\to\mathbb{R}$ is Borel
(`monotone-functions-and-discontinuities` supplies the countability of its jumps).
$f:X\to\mathbb{R}^n$ is measurable iff each coordinate is. **Composition**: for
Borel $g$ and measurable $f$, $g\circ f$ is measurable; the same statement with
$g$ merely *Lebesgue* measurable is **false**, and MT-5 has the witness. *The
lattice and algebra operations*: $\lvert f\rvert$, $cf$, $f^{\pm}$, $\max(f,g)$,
$\min(f,g)$ are measurable; $f+g$ is measurable wherever it is defined, and $fg$
is measurable under the $0\cdot\infty$ convention. **$\sup_k f_k$, $\inf_k f_k$,
$\limsup_k f_k$, $\liminf_k f_k$ are measurable** for a *sequence* of
$\overline{\mathbb{R}}$-valued measurable functions (**landmark**, and the exact
reason the extended reals are the default codomain: $\{\sup_k f_k > a\} =
\bigcup_k\{f_k>a\}$ needs no finiteness and no choice); consequently
$\{x : \lim_k f_k(x) \text{ exists in } \overline{\mathbb{R}}\}$ is measurable and
a pointwise limit of measurable functions is measurable. **The simple
approximation theorem** (**landmark**): for measurable $f\ge0$ the explicit dyadic
truncations $s_k := \sum_{j<k2^k} j2^{-k}\mathbf{1}_{\{j2^{-k}\le f<(j+1)2^{-k}\}}
+ k\mathbf{1}_{\{f\ge k\}}$ are simple, satisfy $0\le s_k\le s_{k+1}\le f$, converge
to $f$ pointwise, and converge **uniformly on every set where $f$ is bounded**; for
general measurable $f$ there are simple $s_k$ with $\lvert s_k\rvert\le\lvert
f\rvert$ and $s_k\to f$ pointwise. The formula is explicit, so the theorem is ZF.
*Almost-everywhere modification*: if $f$ is measurable, $g = f$ $\mu$-a.e. and the
space is **complete**, then $g$ is measurable; completeness is necessary and the
witness is on the A page as an `fs-`. Every measurable $f$ on a complete space is
a.e. equal to a $\sigma(\mathcal{A}_0)$-measurable function when $\mathcal{A}$ is
the completion of $\mathcal{A}_0$ — the item that lets every later argument replace
a Lebesgue measurable function by a Borel representative, and MT-15's convolution
lemma consumes it. **The Doob–Dynkin lemma**: for $f:X\to\mathbb{R}$ and
$g:X\to\overline{\mathbb{R}}$, $g$ is $\sigma(f)$-measurable iff $g = h\circ f$ for
some Borel $h:\mathbb{R}\to\overline{\mathbb{R}}$ — cheap, standard, and what
`probability-theory` needs for conditional expectation. $\mathbf{1}_E$ is measurable
iff $E\in\mathcal{A}$.

**FS.** A function whose level sets $\{f=a\}$ are all measurable is measurable.
If $\lvert f\rvert$ is measurable then $f$ is measurable. The supremum of an
arbitrary family of measurable functions is measurable. A function a.e. equal to a
measurable function is measurable (false on an incomplete space). The composition
$g\circ f$ of a Lebesgue measurable $g$ with a continuous $f$ is Lebesgue
measurable. A pointwise limit of continuous functions is continuous a.e.

**B page.** *Examples*: $\mathbf{1}_E$; simple functions and their canonical
representations computed; the Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ as a
Borel function that is nowhere continuous; the published `def-cantor-function` as
a monotone continuous Borel function; the dyadic approximation $s_k$ tabulated for
$f(x)=x^2$ on $[0,2]$ at $k=1,2$; a Lebesgue measurable function that is not Borel
(the indicator of a measurable non-Borel set from MT-5); $\sigma(f)$ computed for
$f = \mathbf{1}_A$ and for a two-step simple function. *Counterexamples*: the
supremum of the uncountable family $\{\mathbf{1}_{\{t\}}\}_{t\in V}$ over a Vitali
set $V$, which is $\mathbf{1}_V$ and not measurable — so "sequence" in the
$\sup_k$ theorem is a hypothesis; $g\circ f$ non-measurable with $g$ Lebesgue
measurable and $f$ the Cantor–Lebesgue homeomorphism of MT-5; on
$(\mathbb{R},\mathcal{B},\lambda\!\restriction\!\mathcal{B})$, an indicator of a
non-Borel subset of the Cantor set, which is a.e. equal to $0$ and not
$\mathcal{B}$-measurable — completeness is not decoration; a function with all
level sets measurable that is not measurable (level sets of a Vitali-set-based
injection).

**Proof strategies.** **Measurability of $f+g$ is proved by the rational
decomposition** $\{f+g>a\} = \bigcup_{q\in\mathbb{Q}}(\{f>q\}\cap\{g>a-q\})$,
**not** by composing $(f,g):X\to\mathbb{R}^2$ with addition. The second route needs
$\mathcal{B}(\mathbb{R}^2) = \mathcal{B}(\mathbb{R})\otimes\mathcal{B}(\mathbb{R})$,
i.e. the product $\sigma$-algebra of MT-11, and using it here would invert the
track's order for no gain. Folland takes the product route because his product
$\sigma$-algebras precede his measurable functions; Bass takes the rational route.
**This track takes the rational route and the item says so**, because MT-11 cites
MT-7 and a cycle would be fatal. The extended-real sum needs the $\infty-\infty$
exclusion stated in the hypothesis, not repaired in the proof.

**Traps.** (i) $\mathcal{B}(\overline{\mathbb{R}})$ must be pinned down before
"measurable $\overline{\mathbb{R}}$-valued function" is a phrase: the order topology
on $\overline{\mathbb{R}}$ makes it homeomorphic to $[-1,1]$, its Borel sets are
generated by the rays, and $\{\pm\infty\}$ are Borel. One item, at the top.
(ii) "Measurable" is relative to a $\sigma$-algebra on **both** sides; the phrase
"Lebesgue measurable function" means $\mathcal{L}$-to-$\mathcal{B}$, never
$\mathcal{L}$-to-$\mathcal{L}$, and the difference is exactly the composition
counterexample. State the convention in a `rem-` and hold it. (iii) The
$0\cdot\infty$ item is where a judge will look for a contradiction with the
published `cex-zero-times-infinity-indeterminate`; §D4 gives the exact wording
obligation. (iv) The uncountable-supremum counterexample is a B item, but the
*hypothesis* it defends sits in an A-page theorem, so the A page also carries the
`fs-` — B pages are leaves.

**Generated items**: the tabulated dyadic approximation to $x^2$ (`ex-`,
computation); the computed $\sigma(f)$ examples (`ex-`). No generated statement.

**Forward references**: none. The two references to MT-5 and MT-11 point at
*earlier* and *later* A pages respectively; the MT-11 mention is in a proof-strategy
remark about a route **not** taken, so it is `external_refs`, not `forward_refs`.

---

## MT-8. The Lebesgue Integral and the Convergence Theorems

`requires`: MT-7, MT-2, `series-and-nonnegative-tests`, `convexity`,
`limsup-and-subsequential-limits`

The centre of the track. Built in the three stages of §D3, with the unsigned theory
complete before a sign appears.

**DEFS.** $\int s\,d\mu := \sum_j c_j\mu(E_j)$ for a nonnegative simple $s$ in
canonical form, under $0\cdot\infty=0$ (well-definedness #14); $\int f\,d\mu :=
\sup\{\int s\,d\mu : s \text{ simple}, 0\le s\le f\}\in[0,\infty]$ for measurable
$f\ge0$ (well-definedness #15); **integrable** ($\int\lvert f\rvert\,d\mu<\infty$)
and $\int f := \int f^+ - \int f^-$ for real $f$, and by real and imaginary parts
for complex $f$ (well-definedness #16, §D11); $\int_E f\,d\mu := \int
f\mathbf{1}_E\,d\mu$ (well-definedness #17); $\mathcal{L}^1(\mu)$ as the set of
integrable functions (the *space* $L^1$ is MT-14); the **measure with density**
$f\,d\mu$.

**THMS.** *Stage 1.* Representation-independence of $\int s$ (well-definedness #14,
by common refinement); monotonicity and additivity on nonnegative simple functions;
$E\mapsto\int_E s\,d\mu$ is a **measure** (the lemma that makes MCT's proof work).
*Stage 2.* Agreement of the two definitions on simple functions (well-definedness
#15); monotonicity $f\le g\Rightarrow\int f\le\int g$; $\int cf = c\int f$ for
$c\in[0,\infty)$. **The monotone convergence theorem** (**landmark**,
`thm-monotone-convergence-for-the-integral` — the bare name is taken, §9): for
measurable $0\le f_1\le f_2\le\cdots$ with $f_k\uparrow f$ pointwise,
$\int f_k\to\int f$, **with no integrability and no finiteness hypothesis**.
Corollaries, in this order because each is the next one's input: **additivity**
$\int(f+g)=\int f+\int g$ for $f,g\ge0$ (via simple approximation and MCT — this is
where the design decision pays); **Beppo Levi**, $\int\sum_k f_k = \sum_k\int f_k$
for measurable $f_k\ge0$; $E\mapsto\int_E f\,d\mu$ is a measure for every measurable
$f\ge0$, and $\int g\,d(f\,d\mu) = \int gf\,d\mu$ for measurable $g\ge0$ (**the
density theorem**, MT-13's input); the a.e. form of MCT. **Fatou's lemma**
(**landmark**): $\int\liminf_k f_k\le\liminf_k\int f_k$ for measurable $f_k\ge0$;
and the reverse Fatou under a dominating integrable majorant. $\int f\,d\mu = 0$
**iff** $f=0$ a.e., for $f\ge0$ (**landmark**; both directions, and the $\Leftarrow$
direction is where "a.e." first earns its keep); $\int f<\infty\Rightarrow f<\infty$
a.e.; $\mu(E)=0\Rightarrow\int_E f = 0$ even when $f\equiv\infty$ on $E$ — the
$0\cdot\infty$ convention cashed out. **Chebyshev–Markov**:
$\mu(\{f\ge t\})\le t^{-1}\int f\,d\mu$ for $f\ge0$, $t>0$
(`thm-chebyshev-markov-inequality-for-the-integral`; the finite-probability
`thm-markov-inequality` and `thm-chebyshev-inequality` are published and the item
owes them an agreement remark, §8 amendment 3e).
*Stage 3.* Linearity of $\int$ on $\mathcal{L}^1$ over $\mathbb{R}$ and over
$\mathbb{C}$; $\lvert\int f\rvert\le\int\lvert f\rvert$ (**for complex $f$ by the
rotation trick $\lvert\int f\rvert = \alpha\int f = \int\operatorname{Re}(\alpha f)
\le\int\lvert f\rvert$ with $\lvert\alpha\rvert=1$**, and the agreement remark with
the published `thm-norm-inequality-for-the-vector-valued-integral` at order 167,
§D11); $f = g$ a.e. $\Rightarrow\int f=\int g$; **the dominated convergence
theorem** (**landmark**): $f_k\to f$ a.e., $\lvert f_k\rvert\le g$ a.e. with $g$
integrable $\Rightarrow$ $f$ integrable, $\int f_k\to\int f$, **and**
$\int\lvert f_k-f\rvert\to0$ — the third conclusion is the one later pages actually
use and it is free from the proof, so it is in the Statement. Corollary: the
**bounded convergence theorem** on a finite measure space. **Absolute continuity of
the integral**: for integrable $f$ and every $\varepsilon>0$ there is $\delta>0$
with $\mu(E)<\delta\Rightarrow\int_E\lvert f\rvert<\varepsilon$ (**landmark** for
its consumers: MT-10's uniform integrability, MT-13, MT-19). Countable additivity
of $E\mapsto\int_E f$ for integrable $f$. **Continuity and differentiation under
the integral sign** (two items, hypotheses stated exactly: a dominating $g$ for
continuity; a dominating $g$ for $\partial_t f$ plus a.e. differentiability in $t$
for the derivative) — every later track wants these and nobody wants to re-prove
them. **Jensen's inequality** for a probability measure and a convex
$\varphi$ on an interval containing the range: $\varphi(\int f\,d\mu)\le
\int\varphi\circ f\,d\mu$ (**landmark**; proved from the published
`thm-supporting-lines-for-convex-functions`, with the measurability of
$\varphi\circ f$ from convexity $\Rightarrow$ continuity on the interior and the
endpoint case handled; the published `thm-finite-jensen-inequality` is the counting-measure
case and the item owes it an agreement remark).

**FS.** MCT holds without monotonicity. Fatou's lemma holds with equality. DCT
holds without a dominating function. $\int f\,d\mu=0$ implies $f=0$ everywhere.
$f_k\to f$ pointwise and each $f_k$ integrable implies $f$ integrable.
$\int(f+g)=\int f+\int g$ whenever both sides are defined (the $\infty-\infty$
case). Jensen's inequality holds on an infinite measure space.

**B page.** *Examples*: $\int$ against counting measure on $\mathbb{N}$ is
$\sum_k f(k)$, with Beppo Levi becoming the published
`thm-nonnegative-series-rearrangement`-adjacent statement about interchanging
nonnegative double series — the agreement item; $\int\mathbf{1}_{\mathbb{Q}}
\,d\lambda = 0$, so the Dirichlet function is Lebesgue integrable and not Riemann
integrable (the sentence MT-9 makes a theorem); $\int_0^\infty e^{-x}\,dx$ by MCT
from truncations; $\int x^{-1/2}$ on $(0,1]$ as an unbounded integrable function;
$\int$ against $\delta_{x_0}$ is evaluation; differentiation under the integral sign
applied to $\int_0^\infty e^{-tx}\sin x\,dx$; Jensen giving AM–GM for a finite
probability measure. *Counterexamples*: **the four canonical failures, each
labelled with which hypothesis it kills** — $f_k = k\mathbf{1}_{(0,1/k)}$ on
$(0,1)$ (a.e. $\to0$, $\int f_k=1$: no domination, and Fatou is strict);
$f_k = k^2\mathbf{1}_{(0,1/k)}$ ($\int f_k\to\infty$); $f_k = \mathbf{1}_{[k,k+1]}$
on $\mathbb{R}$ (mass escapes to infinity; also kills "a.e. $\Rightarrow$ in
measure" on MT-10); $f_k = k^{-1}\mathbf{1}_{[0,k]}$ (uniform convergence to $0$
with $\int f_k = 1$, so even uniform convergence does not give
$\int f_k\to\int f$ on an infinite measure space — the example that shows the
Riemann-era reflex fails); a decreasing sequence with $\int f_k\not\to\int f$
(the same $\mathbf{1}_{[k,\infty)}$), showing MCT has no decreasing form without
integrability.

**Proof strategies.** MCT: $\int f_k$ increases to some $L\le\int f$; for the
converse fix simple $0\le s\le f$ and $c\in(0,1)$ and apply continuity from below
of the measure $E\mapsto\int_E s$ to $E_k := \{f_k\ge cs\}$, then let $c\to1^-$.
**The $c<1$ factor is not decoration** — without it $E_k$ need not exhaust $X$ where
$f_k(x)\uparrow s(x)$ from below, and the proof is false. Fatou from MCT applied to
$g_k := \inf_{j\ge k}f_j$. DCT from Fatou applied to $g+f_k$ and $g-f_k$, which is
where $\lvert f_k\rvert\le g$ is consumed twice and why the hypothesis cannot be
weakened to $f_k\ge0$.

**Traps.** (i) Stage 2 has **no integrability hypothesis anywhere**; an author who
writes "let $f$ be integrable" in MCT has weakened the theorem the whole track
relies on. (ii) $\int f$ for signed $f$ is defined when *at most one* of
$\int f^{\pm}$ is infinite, and "integrable" is the stronger condition that both are
finite; the two are different words and the library must not blur them. (iii) The
density theorem's $g$ ranges over nonnegative measurable functions, not integrable
ones — MT-13 needs the general form. (iv) Jensen needs a **probability** measure;
on a general finite measure it is false as stated and the normalisation is part of
the statement.

**Generated items**: the computed examples above are all standard; the
$k^{-1}\mathbf{1}_{[0,k]}$ counterexample is in Bass and Folland as an exercise —
check at step 1, and if unsourced mint it as `cex-` with
`generation.role: counterexample`, since its verification is a two-line
computation.

**Forward references**: none.

---

## MT-9. The Lebesgue and Riemann Integrals Compared

`requires`: MT-8, MT-4, MT-6, `the-riemann-integral`,
`the-riemann-integral-in-rn-and-jordan-content`, `improper-integrals`,
`bounded-variation-and-riemann-stieltjes`, `cantor-set-baire-and-measure-zero`,
`the-fundamental-theorems-of-calculus`

The seam page. A library holding two integrals and no theorem relating them has the
defect `LEVELS.md` §"Seams" exists to prevent, and five of the ‡ rows in §7 are
discharged here.

**THMS.** **A bounded Riemann integrable $f$ on $[a,b]$ is Lebesgue measurable and
$\int_a^b f = \int_{[a,b]}f\,d\lambda$** (**landmark**): the lower and upper Darboux
sums of a refining sequence of partitions give simple functions
$\varphi_k\le f\le\psi_k$ with $\int\varphi_k\uparrow$ and $\int\psi_k\downarrow$ to
the Darboux integrals; the envelopes $\varphi := \sup_k\varphi_k$ and
$\psi := \inf_k\psi_k$ are measurable with $\int(\psi-\varphi)=0$, so
$\varphi=f=\psi$ a.e. and $f$ is Lebesgue measurable **because $\lambda$ is
complete** — the one place the completion of MT-4 is used essentially, and the item
says so. The published `def-darboux-sums` and `thm-darboux-equals-riemann` are the
inputs. Consequently every Riemann integrable $f$ is a.e. equal to a Borel function.
**The Lebesgue criterion, restated**: `thm-lebesgue-criterion` says a bounded $f$ on
$[a,b]$ is Riemann integrable iff its discontinuity set has measure zero in the
published elementary sense; by MT-4's agreement item that is exactly
$\lambda$-measure zero, and this page states the σ-additive form and **cites the
published proof rather than repeating it**. The same for
`thm-lebesgue-criterion-in-rn`. A **Jordan measurable** set is Lebesgue measurable
with $\lambda_n$ equal to its Jordan content, and the inclusion is strict
(`cex-rational-points-in-unit-square-have-no-jordan-content`, published, is the
witness); hence `thm-jordan-content-and-indicator-integrability` and MT-4 agree.
**Arzelà's bounded convergence theorem**, given its natural home per `DEFERRED.md`
§1: if $f_k$ are Riemann integrable on $[a,b]$, uniformly bounded, and converge
pointwise to a Riemann integrable $f$, then $\int_a^b f_k\to\int_a^b f$ — a
**corollary of DCT** here, and the item records that Arzelà's own 1885 proof is
elementary and hard, which is the point of the comparison. *Improper integrals*: for
$f\ge0$ on $[a,\infty)$, Riemann integrable on each $[a,R]$, the improper integral
and the Lebesgue integral agree in $[0,\infty]$ (MCT on $f\mathbf{1}_{[a,R]}$); for
sign-changing $f$ the improper integral may exist while $f\notin\mathcal{L}^1$, and
the improper integral is then **not** the Lebesgue integral of anything. The
**Riemann–Stieltjes agreement** owed by MT-6: for continuous $g$ on $[a,b]$ and
increasing right-continuous $F$, $\int_a^b g\,dF$ in the published
`def-riemann-stieltjes-sum-and-integral` sense equals $\int_{(a,b]}g\,d\mu_F$
(**landmark**; the hypotheses must match the published definition exactly — trap
(iii) of MT-6). **The discontinuity set of any $f:\mathbb{R}\to\mathbb{R}$ is
$F_\sigma$** — check at step 1 whether the library already has this; if not it is
two lines from the oscillation function and MT-9 proves it, because the ‡ discharge
of `rem-null-set-not-discontinuity-set` needs it.

**FS.** Every Lebesgue integrable function on $[a,b]$ is Riemann integrable. A
pointwise limit of Riemann integrable functions is Riemann integrable. The improper
Riemann integral of $f$ equals the Lebesgue integral of $f$ whenever the former
exists. A bounded function that is Lebesgue measurable is Riemann integrable. If
$f$ is Riemann integrable then $f$ is Borel. Uniform convergence on $[0,\infty)$
implies convergence of the integrals.

**B page.** *Examples*: $\mathbf{1}_{\mathbb{Q}\cap[0,1]}$ — Lebesgue integrable
with integral $0$, not Riemann integrable, and its discontinuity set is $[0,1]$;
Thomae's function (published as an example on `the-riemann-integral`) — Riemann
integrable with integral $0$, and the two integrals agree; an increasing sequence of
finite unions of intervals whose indicators are Riemann integrable and whose limit
$\mathbf{1}_U$, for $U$ open dense of measure $<1$, is not — so the Riemann
integrable functions are not closed under monotone $L^1$-convergent limits;
$\int_0^\infty \frac{\sin x}{x}\,dx = \pi/2$ improperly, with
$\int_0^\infty\lvert\sin x/x\rvert\,dx=\infty$. *Counterexamples*, three of them
discharging ‡ rows: `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable`;
`cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function`
— the indicator of a fat Cantor set is upper semicontinuous (published
`def-semicontinuity`), and no function a.e. equal to it is Riemann integrable,
because a.e. equality does not move the discontinuity set enough;
`cex-a-null-set-that-is-no-functions-discontinuity-set` — a non-Borel subset of the
Cantor set is null, hence Lebesgue measurable, and is not $F_\sigma$, so it is no
function's discontinuity set (the input is MT-5's cardinality argument, and the
item states that dependency).

**Traps.** (i) The comparison theorem needs **completeness of $\lambda$**, not just
measurability: $f$ is squeezed between two Borel functions agreeing a.e., and the
conclusion "$f$ is measurable" is a completeness statement. An author who omits it
has a gap that no gate will catch. (ii) "Improper Riemann integrable" is
**not** a special case of Lebesgue integrable, and the ‡ row exists precisely
because it is the standard error. (iii) `cor-ftc-integral-function-differentiable-almost-everywhere`
is published at order 239 and is the shadow of MT-17's Lebesgue differentiation
theorem; MT-9 records the relationship and MT-17 proves the general statement. Do
not let MT-9 claim to prove the general one. (iv) The Riemann–Stieltjes agreement
theorem is stated for a **continuous integrand**; for a general bounded integrand it
is false, and the published Riemann–Stieltjes block has its own hypotheses that must
be quoted, not paraphrased.

**Generated items**: the open-dense-set monotone-limit example (`ex-`) if
unsourced — it is in Bruckner–Bruckner–Thomson, check first.

**Forward references**: none.

---

## MT-10. Modes of Convergence: Egorov, Lusin and Vitali

`requires`: MT-8, MT-4, MT-7, `urysohn-lemma-and-tietze`,
`the-topology-of-euclidean-space`, `metric-spaces`

**DEFS.** **Convergence $\mu$-almost everywhere**; **convergence in measure**
($\mu(\{\lvert f_k-f\rvert>\varepsilon\})\to0$ for every $\varepsilon>0$) and
**Cauchy in measure**; **almost uniform convergence** (for every $\varepsilon>0$ a
measurable $E$ with $\mu(E)<\varepsilon$ and uniform convergence off $E$);
**convergence in $L^1$** ($\int\lvert f_k-f\rvert\to0$ — stated for functions here;
the *space* is MT-14); a **uniformly integrable** family
($\sup_k\int_{\{\lvert f_k\rvert>M\}}\lvert f_k\rvert\to0$ as $M\to\infty$) and a
**tight** family.

**THMS.** Limits in measure are unique a.e. On a **finite** measure space, a.e.
convergence $\Rightarrow$ convergence in measure — and the finiteness is necessary
($\mathbf{1}_{[k,k+1]}$, the A page carries the `fs-`). **Riesz's subsequence
theorem** (**landmark**): convergence in measure $\Rightarrow$ some subsequence
converges a.e., and in fact almost uniformly; **and this track's proof uses least
indices so the item is ZF** (§4). Cauchy in measure $\Rightarrow$ convergent in
measure (completeness of the topology of convergence in measure, proved through the
same subsequence). Almost uniform $\Rightarrow$ a.e. and in measure. **Egorov's
theorem** (**landmark**): on a finite measure space, a.e. convergence of measurable
$f_k\to f$ with $f$ finite a.e. implies almost uniform convergence; finiteness of
$\mu$ is necessary with an explicit witness. **Lusin's theorem** (**landmark**): for
$f$ measurable and finite a.e. on $E\subseteq\mathbb{R}^n$ with
$\lambda(E)<\infty$, and every $\varepsilon>0$, there is a **closed** $F\subseteq E$
with $\lambda(E\setminus F)<\varepsilon$ and $f\!\restriction\! F$ continuous;
strengthened by `thm-tietze-extension-theorem` to a $g\in C(\mathbb{R}^n)$ with
$\lambda(\{f\ne g\})<\varepsilon$, and by MT-4's inner regularity to $F$ compact when
$E$ is bounded. **The trap is worth an item of its own**: $f\!\restriction\! F$
continuous is *not* "f is continuous at each point of $F$", and
$\mathbf{1}_{\mathbb{Q}}$ is the witness — it satisfies Lusin's conclusion and is
nowhere continuous. *Comparison*: $L^1\Rightarrow$ in measure (Chebyshev, MT-8); in
measure $\not\Rightarrow L^1$; a.e. $\not\Rightarrow L^1$; **the Vitali convergence
theorem** (**landmark**): on a finite measure space, $f_k\to f$ in $L^1$ **iff**
$f_k\to f$ in measure and $\{f_k\}$ is uniformly integrable; the $\sigma$-finite
version adds tightness, and the item states both. A single integrable $f$ is a
uniformly integrable family (absolute continuity of the integral, MT-8); a dominated
family is uniformly integrable; the converse of each fails. **DCT is a corollary of
Vitali**, and the page says so, because that is the honest hierarchy and it is what
MT-23 uses to get $L^1$ mean convergence from Birkhoff. A complete implication
diagram for the five modes on a finite measure space, with a counterexample for
every arrow that fails — as a `rem-` holding the table, with each entry pointing at
the item that proves or refutes it.

**FS.** Convergence in measure implies a.e. convergence. Almost-everywhere
convergence implies convergence in measure on every measure space. Egorov's theorem
holds without a finiteness hypothesis. Lusin's theorem says a measurable function is
continuous off a null set. Uniform integrability implies domination by an integrable
function. $L^1$ convergence implies a.e. convergence.

**B page.** *Examples*: the **typewriter sequence** — the indicators of
$[j2^{-k},(j+1)2^{-k}]$ enumerated, converging to $0$ in measure and in $L^1$ and at
**no** point of $[0,1]$, with the a.e.-convergent subsequence Riesz promises
exhibited explicitly; Egorov applied to $f_k(x)=x^k$ on $[0,1]$ with the exceptional
set computed; Lusin applied to $\mathbf{1}_{\mathbb{Q}\cap[0,1]}$ with the open set
exhibited; a uniformly integrable family that is not dominated ($k\mathbf{1}_{(0,1/k)}$
is *not* UI — use instead $f_k = k^{1/2}\mathbf{1}_{(0,1/k)}$, which is UI, tends to
$0$ in $L^1$, and has no integrable majorant); the equivalence of UI with
"$\sup_k\int\lvert f_k\rvert<\infty$ plus uniform absolute continuity" on a finite
measure space, computed on a family. *Counterexamples*: $\mathbf{1}_{[k,k+1]}$ for
a.e.-not-in-measure; $k\mathbf{1}_{(0,1/k)}$ for in-measure-not-$L^1$ and for the
failure of UI; Egorov on $(\mathbb{R},\lambda)$ with $f_k=\mathbf{1}_{[k,k+1]}$.

**Proof strategies.** Egorov: for each $k,m$ set
$E_{k,m} := \bigcup_{j\ge k}\{\lvert f_j-f\rvert>1/m\}$; then $E_{k,m}\downarrow$ a
null set as $k\to\infty$ **for each fixed $m$**, and continuity from above needs
$\mu(X)<\infty$ — that is the exact point where finiteness enters, and the item
says so rather than carrying the hypothesis silently. Choose $k(m)$ by **least
index** with $\mu(E_{k(m),m})<\varepsilon2^{-m}$ and take the union: ZF. Lusin:
simple functions first (each level set is inner-regular by MT-4, and a finite union
of disjoint closed sets carries a continuous function), then simple approximation
plus Egorov to pass to the general case; the two-step structure is two lemmas.

**Traps.** (i) Convergence in measure is **not** convergence in a metric on an
infinite measure space unless one localises; the page states the finite-measure
metric $\int\min(\lvert f-g\rvert,1)$ and restricts the metrisation claim to
$\mu(X)<\infty$. (ii) Lusin is about the **restriction** being continuous
(trap item above). (iii) Uniform integrability has three inequivalent definitions in
circulation (the $\sup_k\int_{\{|f_k|>M\}}$ form, the $\varepsilon$–$\delta$ form
plus $L^1$-boundedness, and the de la Vallée-Poussin form); §11's convention ledger
records which sources use which, MT-10 adopts the first, and it **proves** the
equivalence with the second on a finite measure space rather than asserting it.
(iv) Egorov's conclusion is almost uniform convergence, which is **not** "uniform
convergence a.e." — the latter is meaningless as stated, and the distinction is the
item.

**Generated items**: the computed exceptional set for $x^k$ (`ex-`); the UI-but-not-dominated
family (`ex-`) if unsourced — it is standard, check.

**Forward references**: none.

---

## MT-11. Product Measures and the Fubini–Tonelli Theorems

`requires`: MT-8, MT-4, MT-1, MT-7, `the-riemann-integral-in-rn-and-jordan-content`,
`fubini-and-change-of-variables`, `countability-axioms-and-cardinal-functions`

**DEFS.** A **measurable rectangle** $A\times B$; the **product $\sigma$-algebra**
$\mathcal{A}\otimes\mathcal{B} := \sigma(\{A\times B\})$, and the finite product
$\bigotimes_{i<n}\mathcal{A}_i$; the **sections** $E_x := \{y : (x,y)\in E\}$,
$E^y := \{x : (x,y)\in E\}$, and $f_x := f(x,\cdot)$, $f^y := f(\cdot,y)$; the
**product measure** $\mu\times\nu$ (well-definedness #18); the **completion**
$\overline{\mu\times\nu}$; the **distribution function** $t\mapsto\mu(\{\lvert
f\rvert>t\})$ of a measurable $f$.

**THMS.** The finite disjoint unions of measurable rectangles form an **algebra**
generating $\mathcal{A}\otimes\mathcal{B}$ (so MT-3 could build the product measure
by Carathéodory as well; the page takes the sections route and records the
alternative). **Every section of an $\mathcal{A}\otimes\mathcal{B}$-measurable set
is measurable**, and every section of an $\mathcal{A}\otimes\mathcal{B}$-measurable
function is measurable — pure $\sigma$-algebra, no measure, and it holds with **no
$\sigma$-finiteness**; the converse fails badly and the witness is on the B page.
For **$\sigma$-finite** $\mu,\nu$: $x\mapsto\nu(E_x)$ is $\mathcal{A}$-measurable,
$y\mapsto\mu(E^y)$ is $\mathcal{B}$-measurable, and
$\int\nu(E_x)\,d\mu = \int\mu(E^y)\,d\nu$ (**landmark**, well-definedness #18, by
the monotone class theorem of MT-1 — $\sigma$-finiteness is what lets the monotone
class argument start from sets of finite measure); that common value is
$(\mu\times\nu)(E)$, it is a measure, and it is the **unique** measure on
$\mathcal{A}\otimes\mathcal{B}$ with $(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$.
Without $\sigma$-finiteness both the measurability and the uniqueness fail, and the
A page carries both as `fs-` items with witnesses. **Tonelli's theorem**
(**landmark**): for $\sigma$-finite $\mu,\nu$ and
$\mathcal{A}\otimes\mathcal{B}$-measurable $f\ge0$, the functions
$x\mapsto\int f_x\,d\nu$ and $y\mapsto\int f^y\,d\mu$ are measurable and
$\int f\,d(\mu\times\nu) = \int\!\!\int f\,d\nu\,d\mu = \int\!\!\int f\,d\mu\,d\nu$
in $[0,\infty]$ — **no integrability hypothesis**. **Fubini's theorem**
(**landmark**): for $f\in\mathcal{L}^1(\mu\times\nu)$, $f_x\in\mathcal{L}^1(\nu)$
for $\mu$-**almost every** $x$, the a.e.-defined function $x\mapsto\int f_x\,d\nu$
is in $\mathcal{L}^1(\mu)$, and the three integrals agree. **The completed
version**: for $\overline{\mu\times\nu}$-measurable $f\ge0$ or
$f\in\mathcal{L}^1$, $f_x$ is $\overline{\nu}$-measurable only for $\mu$-a.e. $x$,
and that weakening is not removable — the item states it exactly and the B page has
the witness. **The standard corollary that gets used**: to apply Fubini one first
applies Tonelli to $\lvert f\rvert$; the page states this as a `rem-` because it is
the single most common misuse in the literature and every later citation of Fubini
in this library will be checked against it.

*Euclidean space*: $\mathcal{B}(\mathbb{R}^m)\otimes\mathcal{B}(\mathbb{R}^n) =
\mathcal{B}(\mathbb{R}^{m+n})$ (**second countability is the hypothesis and the
item says so**), $\lambda_m\times\lambda_n = \lambda_{m+n}$ on the Borel sets, and
$\mathcal{L}(\mathbb{R}^m)\otimes\mathcal{L}(\mathbb{R}^n)\subsetneq
\mathcal{L}(\mathbb{R}^{m+n})$ **strictly**, with $\lambda_{m+n}$ the completion of
the product (well-definedness #19, **landmark**).

*Consequences the rest of the library wants*: **the region under the graph**,
$\{(x,t) : 0\le t< f(x)\}$, is measurable with $(\mu\times\lambda_1)$-measure
$\int f\,d\mu$ — the theorem that makes the integral an area, and the cleanest
statement of what the Lebesgue integral *is*; **the graph of a measurable
$f:\mathbb{R}^n\to\mathbb{R}$ is $\lambda_{n+1}$-null**; **the layer-cake formula**
$\int\lvert f\rvert^p\,d\mu = p\int_0^\infty t^{p-1}\mu(\{\lvert f\rvert>t\})\,dt$
for $0<p<\infty$ (**landmark**, MT-17's workhorse); **the polar-coordinates
theorem** (**landmark**): there is a unique Borel measure $\sigma$ on $S^{n-1}$
with $\int_{\mathbb{R}^n}f\,d\lambda_n = \int_0^\infty\!\!\int_{S^{n-1}}
f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ for measurable $f\ge0$, defined by
$\sigma(E) := n\lambda_n(\{r\omega : \omega\in E,\ 0<r\le1\})$ — **constructed
without the $C^1$ change of variables**, which is why it is here and not deferred;
consequently $\lambda_n(B(0,r)) = r^n\lambda_n(B(0,1))$ with
$\lambda_n(B(0,1)) = \pi^{n/2}/\Gamma(n/2+1)$, and
$\int_{\mathbb{R}^n}e^{-\lvert x\rvert^2}d\lambda_n = \pi^{n/2}$.

*Conditional on §8 seam 4* — four items, liftable as a block if the orchestrator
homes them elsewhere: **the $C^1$ change of variables for the Lebesgue integral**,
$\int_{T(U)}f\,d\lambda_n = \int_U (f\circ T)\lvert\det DT\rvert\,d\lambda_n$ for a
$C^1$ diffeomorphism $T$ of open sets, proved from the published Riemann statement
on `fubini-and-change-of-variables` for continuous compactly supported integrands
(where the two integrals agree by MT-9), extended to open sets by MCT, to $G_\delta$
sets and null sets by MT-4's regularity, and to all measurable $f\ge0$ by simple
approximation; plus the three supporting lemmas (a $C^1$ diffeomorphism maps null
sets to null sets and Lebesgue measurable sets to Lebesgue measurable sets — the
published `cor-jordan-content-under-a-c-one-diffeomorphism` is the Jordan-content
shadow and is cited, not reused).

**FS.** A set all of whose sections are measurable is product-measurable. Tonelli
holds without $\sigma$-finiteness. Fubini holds without integrability. If both
iterated integrals exist and are equal then $f$ is integrable. The product of two
complete measure spaces is complete.
$\mathcal{L}(\mathbb{R})\otimes\mathcal{L}(\mathbb{R})=\mathcal{L}(\mathbb{R}^2)$.
The section $f_x$ of an $\overline{\mu\times\nu}$-measurable $f$ is measurable for
every $x$.

**B page.** *Examples*: the Gaussian integral $\int_{\mathbb{R}}e^{-x^2}dx =
\sqrt{\pi}$ by Tonelli in the plane — the classical payoff; the volume of the unit
ball in low dimensions computed from the polar formula; $\int_0^1\!\!\int_0^1
\frac{1}{1-xy}\,dx\,dy = \pi^2/6$ by Tonelli on the nonnegative double series;
Cavalieri's principle for $\lambda_n$, beside the published
`cor-cavalieri-principle-for-jordan-content`; the region under $x\mapsto x^2$
measured two ways. *Counterexamples*, each discharging or sharpening a ‡ row:
**the counting-measure diagonal** — $\mu = \lambda$ on $[0,1]$, $\nu$ = counting
measure on $[0,1]$, $E$ the diagonal, iterated integrals $0$ and $1$
(`cex-tonelli-fails-without-sigma-finiteness`, discharging
`rem-fubini-counting-measure-diagonal`); $f(x,y) = \frac{x^2-y^2}{(x^2+y^2)^2}$ on
$(0,1)^2$ with iterated integrals $\pi/4$ and $-\pi/4$, so **Fubini's integrability
hypothesis is not decoration**; the double array $a_{m,n} = 1$ if $m=n$, $-1$ if
$m = n+1$, $0$ otherwise, with sums $1$ and $0$ — and its agreement with the
published `thm-double-series-fubini`, whose absolute-summability hypothesis is
exactly $\mathcal{L}^1$ of the counting measure on
$\mathbb{N}\times\mathbb{N}$ (the dictionary item §1.2 owes); $A\times\{0\}$ for a
non-measurable $A\subseteq\mathbb{R}$, which is $\lambda_2$-null hence in
$\mathcal{L}(\mathbb{R}^2)$ and **not** in
$\mathcal{L}(\mathbb{R})\otimes\mathcal{L}(\mathbb{R})$, since its section is $A$ —
the witness for the strict inclusion and for the completed-Fubini caveat at once;
Sierpiński's CH example cited as ‡ (`rem-sierpinski-iterated-integrals`, §2 row 12)
as the sharpening these two cannot reach.

**Traps.** (i) $\sigma$-finiteness is a hypothesis of **Tonelli and of the product
measure's uniqueness**, never of the sections lemma. (ii) Fubini's conclusion is
"for $\mu$-a.e. $x$", and the a.e.-defined iterated integral needs the completion or
an arbitrary-value convention to be a function at all — say which, once. (iii)
$\mathcal{B}(X)\otimes\mathcal{B}(Y) = \mathcal{B}(X\times Y)$ **fails** for general
topological spaces; second countability is doing the work, and the standard failure
(the diagonal of a discrete space of cardinality $>\mathfrak{c}$) is worth a `rem-`
so no later track over-cites it. (iv) The polar-coordinates theorem **defines**
$\sigma$; it is not a corollary of a change of variables the track does not have.
(v) The conditional block is marked in the item notes; if it is lifted, MT-17 and
MT-21 are unaffected because they use only the polar formula.

**Generated items**: the two computed integrals ($\pi^2/6$, the low-dimensional ball
volumes) as `ex-` items if the exact computation is unsourced; every counterexample
above is classical and sourced.

**Forward references**: none.

---

## MT-12. Signed and Complex Measures, Hahn and Jordan

`requires`: MT-8, MT-2, `series-and-nonnegative-tests`,
`absolute-convergence-and-rearrangement`, `rn-as-a-normed-space`

**DEFS.** A **signed measure** $\nu:\mathcal{A}\to(-\infty,\infty]$ or
$[-\infty,\infty)$ — **at most one infinite value** — with $\nu(\emptyset)=0$ and
countable additivity (well-definedness #20); a **positive set**, a **negative set**
and a **null set** for $\nu$; **mutual singularity** $\nu\perp\mu$; the **total
variation** $\lvert\nu\rvert$ (well-definedness #21); a **complex measure** (values
in $\mathbb{C}$, hence **finite by definition**, and the item says why the finiteness
is forced rather than assumed); the **positive and negative parts** $\nu^{\pm}$;
$\mathcal{M}(X,\mathcal{A})$, the real signed measures of finite total variation,
with $\lVert\nu\rVert := \lvert\nu\rvert(X)$; integration against a signed or
complex measure, $\int f\,d\nu := \int f\,d\nu^+ - \int f\,d\nu^-$ and
$\mathcal{L}^1(\nu) := \mathcal{L}^1(\lvert\nu\rvert)$.

**THMS.** Countable additivity of a signed measure converges **absolutely** when
$\nu(\bigcup E_k)$ is finite, because the union is independent of the order — a
proved clause of well-definedness #20, using the published rearrangement theorem.
Continuity from below and from above (the latter with $\lvert\nu(E_1)\rvert<\infty$).
*The positive-set lemma*: if $0<\nu(E)<\infty$ then $E$ contains a positive set $P$
with $\nu(P)\ge\nu(E)$ (the induction that strips off maximally negative pieces; this
is the whole difficulty of Hahn and it is its own item). **The Hahn decomposition
theorem** (**landmark**): $X = P\sqcup N$ with $P$ positive and $N$ negative for
$\nu$, unique up to $\lvert\nu\rvert$-null sets. **The Jordan decomposition**
(**landmark**, well-definedness #21): $\nu = \nu^+-\nu^-$ with $\nu^\pm$ positive
measures, $\nu^+\perp\nu^-$, and this is the **unique** such decomposition — which
is what licenses the definite article in "the positive part". $\lvert\nu\rvert =
\nu^++\nu^-$; $\lvert\nu\rvert(E) = \sup\sum_k\lvert\nu(E_k)\rvert$ over **countable**
measurable partitions, and for a *signed* measure the countable and finite suprema
agree while for a *complex* measure they do not — one item, both cases, because the
literature is careless here. $\nu^+(E) = \sup\{\nu(F) : F\subseteq E\}$ and
$\nu^-(E) = -\inf\{\nu(F):F\subseteq E\}$. **The total variation of a complex measure
is finite** (**landmark** — this is a genuine theorem, not a definition: the proof is
the $\pi^{-1}$-type estimate splitting $\mathbb{C}$ into four quadrants or a rotation
argument, and an author who assumes it has assumed the conclusion). $\lvert\nu\rvert$
is a measure. $\lvert\nu\rvert(E) = \sup\{\lvert\int f\,d\nu\rvert :
f \text{ simple}, \lvert f\rvert\le1\}$. **$\mathcal{M}(X,\mathcal{A})$ is a real
vector space and $\lVert\cdot\rVert$ is a norm on it** in the sense of the published
`def-norm-and-normed-space` (three axioms, checked; the complex case is stated
concretely per §D11 and is **not** called a complex normed space); the norm is
complete — proved here because MT-20's bounded version wants it, and because it costs
one page-local argument. $\lvert\int f\,d\nu\rvert\le\int\lvert f\rvert\,
d\lvert\nu\rvert$. **The density case**: for $f\in\mathcal{L}^1(\mu)$ real,
$\nu(E) := \int_E f\,d\mu$ is a finite signed measure with Hahn sets $\{f>0\}$,
$\{f\le0\}$, with $\nu^\pm = \int f^\pm d\mu$ and $\lvert\nu\rvert = \int\lvert
f\rvert\,d\mu$ — on the **A page**, because MT-13 and MT-16 both cite it.

**FS.** A signed measure may take both $+\infty$ and $-\infty$. The Hahn
decomposition is unique. $\lvert\nu\rvert(E) = \lvert\nu(E)\rvert$. The supremum
defining $\lvert\nu\rvert$ is attained over **finite** partitions for a complex
measure. Every complex measure has finite total variation because its values are
finite (the conclusion is true; **the reasoning is not**, and this `fs-` refutes the
reasoning, which is the honest form: an `fs-` whose statement is a true conclusion
with a false proof is not permitted, so the `fs-` is stated as *"a set function with
finite values on a $\sigma$-algebra has finite total variation"*, which is false for
finitely additive set functions and is the right refutation). A signed measure
agreeing with another on a generating $\pi$-system is equal to it.

**B page.** *Examples*: $\delta_1-\delta_{-1}$ with its Hahn and Jordan
decompositions written out; $\nu(E)=\int_E\sin x\,d\lambda$ on $[0,2\pi]$ with
$P=[0,\pi]$; a purely atomic signed measure on $\mathbb{Z}$ with weights
$(-1)^k2^{-k}$ and $\lVert\nu\rVert$ computed; $\mu_c-\lambda$ on $[0,1]$ (the
Cantor measure of MT-6 against Lebesgue measure), mutually singular, so the Jordan
decomposition is the pair itself; the total variation of a complex measure
$e^{i\theta}\,d\lambda$ computed. *Counterexamples*: a Hahn decomposition altered on
a $\lvert\nu\rvert$-null set, exhibiting the exact extent of non-uniqueness; a set
with $\lvert\nu\rvert(E)>\lvert\nu(E)\rvert$; a finitely additive real set function
on an algebra with unbounded variation.

**Traps.** (i) The at-most-one-infinity clause is what makes $\nu(A)+\nu(B)$
defined; it is not stylistic (well-definedness #20). (ii) "Null set for $\nu$" means
$\nu(F)=0$ for **every** measurable $F\subseteq E$, not $\nu(E)=0$; the two differ
and every later proof uses the strong one. (iii) A complex measure is finite by
definition and a signed measure is not; theorems must not be stated "for measures"
in a way that silently mixes the two. (iv) $\lvert\nu\rvert$ is defined by a
supremum over partitions, and proving it is a *measure* is the work; it is not the
composite $\lvert\nu(\cdot)\rvert$.

**Generated items**: the computed Jordan decomposition examples (`ex-`).

**Forward references**: none.

---

## MT-13. The Radon–Nikodym Theorem and the Lebesgue Decomposition

`requires`: MT-12, MT-8, MT-6, MT-2

**DEFS.** **Absolute continuity** $\nu\ll\mu$ ($\mu(E)=0\Rightarrow\nu(E)=0$); the
**Radon–Nikodym derivative** $d\nu/d\mu$ (well-definedness #22); the **Lebesgue
decomposition** $\nu=\nu_a+\nu_s$ (well-definedness #23); a measure **concentrated
on** a set.

**THMS.** $\nu\ll\mu$ iff $\lvert\nu\rvert\ll\mu$ iff $\nu^\pm\ll\mu$. **The
$\varepsilon$–$\delta$ characterisation**: for a **finite** signed or complex $\nu$,
$\nu\ll\mu$ iff for every $\varepsilon>0$ there is $\delta>0$ with
$\mu(E)<\delta\Rightarrow\lvert\nu(E)\rvert<\varepsilon$ — and the finiteness is
necessary, with a $\sigma$-finite witness on the B page. This is the theorem that
connects the measure-theoretic $\ll$ to the published
`def-absolutely-continuous-function` at order 163, and MT-19 closes that circle.
$\nu\ll\mu$ and $\nu\perp\mu$ together force $\nu=0$. **The Lebesgue–Radon–Nikodym
theorem** (**landmark**): for $\sigma$-finite positive $\mu$ and $\sigma$-finite
signed $\nu$ there are unique $\nu_a\ll\mu$ and $\nu_s\perp\mu$ with
$\nu=\nu_a+\nu_s$, and a $\mu$-a.e.-unique extended-real measurable $f$ with
$\nu_a = f\,d\mu$; $f\in\mathcal{L}^1(\mu)$ exactly when $\nu_a$ is finite. Stated as
**three theorems** — existence of the decomposition, uniqueness of the decomposition,
existence and a.e.-uniqueness of the density — because they are cited separately.
Both $\sigma$-finiteness hypotheses are necessary and each has its own witness.
*Calculus of derivatives*: $\int g\,d\nu = \int g\,\frac{d\nu}{d\mu}\,d\mu$ for
measurable $g\ge0$ and for $g\in\mathcal{L}^1(\nu)$ (from MT-8's density theorem);
additivity $\frac{d(\nu_1+\nu_2)}{d\mu}=\frac{d\nu_1}{d\mu}+\frac{d\nu_2}{d\mu}$
a.e.; **the chain rule** $\frac{d\nu}{d\lambda} = \frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}$
$\lambda$-a.e. when $\nu\ll\mu\ll\lambda$ (**landmark**); the inversion
$\frac{d\nu}{d\mu}\frac{d\mu}{d\nu}=1$ a.e. when $\mu\ll\nu\ll\mu$;
$\lvert\frac{d\nu}{d\mu}\rvert = \frac{d\lvert\nu\rvert}{d\mu}$ a.e. **The polar
decomposition of a complex measure** (**landmark**): $d\nu = h\,d\lvert\nu\rvert$
with $\lvert h\rvert=1$ $\lvert\nu\rvert$-a.e., and for a signed measure
$h=\mathbf{1}_P-\mathbf{1}_N$ — so Jordan and polar are the same theorem in two
dresses, and the item says so. **The decomposition of a Borel measure on
$\mathbb{R}$** into absolutely continuous, discrete and singular-continuous parts,
using MT-6's atomic/atomless splitting: three parts, uniquely, with the Cantor
measure as the singular-continuous witness — the concrete payoff, and the statement
`probability-theory` will want.

**FS.** Every measure is absolutely continuous or singular with respect to $\lambda$.
An atomless Borel measure on $\mathbb{R}$ is absolutely continuous with respect to
$\lambda$ (the Cantor measure refutes it; MT-6 states the same `fs-` from the
distribution-function side and this page cites rather than re-mints — check at step 1
and keep exactly one). The Radon–Nikodym derivative is a uniquely determined
function. The $\varepsilon$–$\delta$ condition characterises $\nu\ll\mu$ for every
$\nu$. The Radon–Nikodym theorem holds for arbitrary $\mu$. If $\nu\ll\mu$ then
$d\nu/d\mu$ is bounded.

**B page.** *Examples*: $d\nu = f\,d\lambda$ with $f(x)=2x$ on $[0,1]$ and the
derivative recovered; the Lebesgue decomposition of $\tfrac12\lambda+\tfrac12\mu_c$
computed; the decomposition of $\delta_0 + \lambda\!\restriction\![0,1]$; the chain
rule applied to a change of density; a probability density on $\mathbb{R}$ recovered
from its distribution function (with MT-19 supplying the derivative statement).
*Counterexamples*: **counting measure $c$ on $[0,1]$ against $\lambda$** —
$\lambda\ll c$, yet no $f$ has $\lambda(E)=\int_E f\,dc$, so $\sigma$-finiteness of
the dominating measure is essential; $d\nu = x^{-1}dx$ on $(0,1)$ — $\sigma$-finite,
$\nu\ll\lambda$, and the $\varepsilon$–$\delta$ condition fails; two densities
differing on a null set; a non-$\sigma$-finite $\nu$ with no Lebesgue decomposition.

**Proof strategy** (§D7 — the route matters and is a design decision). Reduce to
$\mu,\nu$ finite and positive by $\sigma$-finite exhaustion and by Jordan. Let
$\mathcal{F} := \{f\ge0 \text{ measurable} : \int_E f\,d\mu\le\nu(E)
\text{ for all } E\}$ and $M := \sup_{\mathcal{F}}\int f\,d\mu\le\nu(X)<\infty$.
Three lemmas: (a) $\mathcal{F}$ is closed under finite maxima (split $E$ along
$\{f>g\}$); (b) the supremum is **attained** — take $f_k\in\mathcal{F}$ with
$\int f_k\to M$, replace by $g_k := \max_{j\le k}f_j\in\mathcal{F}$, and apply MCT;
(c) with $f$ attaining $M$, the residual $\rho := \nu - f\,d\mu$ is a finite positive
measure and is **singular** with respect to $\mu$ — if not, some
$\rho-\varepsilon\mu$ has a positive set $P$ of positive $\mu$-measure by the Hahn
decomposition of MT-12, and $f+\varepsilon\mathbf{1}_P\in\mathcal{F}$ contradicts
maximality. **No Hilbert space, no Riesz representation, no functional analysis**;
a `rem-` names von Neumann's shorter $L^2$ route and records that it costs a
dependency this track does not have, in the "why this proof" form the library's
Remarks rule endorses (§6 lists it as an orientation-only forward reference).

**Traps.** (i) $d\nu/d\mu$ is an a.e.-equivalence class; **every** identity in which
it appears is an a.e. identity, and the page says this once, loudly, rather than
sprinkling "a.e." (well-definedness #22). (ii) The two $\sigma$-finiteness
hypotheses do different jobs and have different witnesses; do not let one item carry
both. (iii) "Absolutely continuous" now names a property of measures **and** a
published property of functions; MT-19 proves they correspond, and until then the
pages must not use one word for both. (iv) The theorem is usually stated for
positive $\mu$; a signed dominating measure is not in scope and the hypothesis says
so.

**Generated items**: the computed decompositions (`ex-`). The
$x^{-1}$ counterexample is in Folland and Bass as an exercise — check, and mint as
`cex-` with `generation.role: counterexample` only if unsourced.

**Forward references**: one, orientation-only, on `rem-radon-nikodym-via-hilbert-space`
(§6).

---

## MT-14. The $L^p$ Spaces: Hölder, Minkowski and Riesz–Fischer

`requires`: MT-8, MT-10, MT-2, `rn-as-a-normed-space`,
`the-logarithm-and-general-powers`, `convexity`, `metric-spaces`

The first of three $L^p$ pages (§D12: one page would carry about 75 items and the
ceiling is 60).

**DEFS.** **Conjugate exponents** $p,q\in[1,\infty]$ with $1/p+1/q=1$, the pairs
$(1,\infty)$ and $(\infty,1)$ included by convention and the convention stated;
the **essential supremum** $\lVert f\rVert_\infty := \inf\{M : \lvert f\rvert\le M
\text{ a.e.}\}$; $\lVert f\rVert_p := (\int\lvert f\rvert^p d\mu)^{1/p}$ for
$0<p<\infty$; $\mathcal{L}^p(\mu)$; the null subspace
$\mathcal{N} := \{f : f=0 \text{ a.e.}\}$; **$L^p(\mu) := \mathcal{L}^p(\mu)/\mathcal{N}$**
(§D5, well-definedness #24); $\ell^p$ as $L^p$ of counting measure.

**THMS.** *The inequalities.* Young's inequality is **published**
(`thm-young-inequality-real-exponents`: for conjugate $p,q>1$ and $u,v\ge0$,
$uv\le u^p/p+v^q/q$) and is cited verbatim, not re-proved. **Hölder's inequality**
(**landmark**) $\int\lvert fg\rvert\le\lVert f\rVert_p\lVert g\rVert_q$ for
conjugate $p,q\in[1,\infty]$, with the $p=1$, $p=\infty$ cases proved separately and
the **equality case** ($\lvert f\rvert^p$ and $\lvert g\rvert^q$ proportional a.e.,
for $1<p<\infty$) as its own item; the **generalised Hölder inequality**
$\lVert fg\rVert_r\le\lVert f\rVert_p\lVert g\rVert_q$ for $1/r=1/p+1/q$; **Cauchy–Schwarz**
as $p=q=2$, with the agreement remark against the published
`thm-cauchy-schwarz-finite` and `thm-cauchy-schwarz-and-the-euclidean-norm`.
**Minkowski's inequality** (**landmark**) $\lVert f+g\rVert_p\le\lVert f\rVert_p+
\lVert g\rVert_p$ for $1\le p\le\infty$, with its equality case. The agreement items
§1.2 owes: for counting measure on a finite set these are exactly the published
`thm-holder-finite-real-exponents` and `thm-minkowski-finite-real-exponents`, and
$L^p$ of counting measure on $\{0,\dots,n-1\}$ is $\mathbb{R}^n$ with the published
`def-p-norms-on-rn` — three dictionary items, all `statement: ai-altered`.
*The space.* $\mathcal{L}^p$ is a vector space (Minkowski is what proves it);
$\mathcal{N}$ is a subspace and is exactly $\{f : \lVert f\rVert_p=0\}$;
$\lVert\cdot\rVert_p$ is constant on cosets, so it descends, and the descended
function **separates points** — hence $L^p(\mu)$ with $\lVert\cdot\rVert_p$ is a
normed space in the sense of the published `def-norm-and-normed-space` (§D5, three
items; without them the library would carry a "norm" failing axiom (N1)).
$\lVert f\rVert_\infty$ is **attained as an essential bound**: $\lvert f\rvert\le
\lVert f\rVert_\infty$ a.e., by a countable-union argument, and it is the least such
bound (well-definedness #24). **Riesz–Fischer** (**landmark**): $L^p(\mu)$ is
complete for every $1\le p\le\infty$ — the $p<\infty$ proof passes to a rapidly
Cauchy subsequence chosen by **least index** (so ZF, §4), applies Beppo Levi to
$\sum_k\lvert f_{k+1}-f_k\rvert$, and the $p=\infty$ proof is the union of countably
many null sets; **by-product, stated in the theorem because everything downstream
uses it**: an $L^p$-convergent sequence has an a.e.-convergent subsequence.
$L^p$ convergence $\Rightarrow$ convergence in measure (Chebyshev, MT-8), and the
converse fails.
*Comparisons.* On a **finite** measure space, $L^r\subseteq L^p$ for $p<r$ with
$\lVert f\rVert_p\le\mu(X)^{1/p-1/r}\lVert f\rVert_r$; for **counting** measure the
inclusion reverses, $\ell^p\subseteq\ell^r$ for $p<r$ with $\lVert f\rVert_r\le
\lVert f\rVert_p$; on $\mathbb{R}$ neither inclusion holds, with witnesses both
ways. $L^{p_0}\cap L^{p_1}\subseteq L^p$ for $p_0<p<p_1$, with the **Lyapunov
interpolation inequality** $\lVert f\rVert_p\le\lVert f\rVert_{p_0}^{\theta}
\lVert f\rVert_{p_1}^{1-\theta}$, $1/p=\theta/p_0+(1-\theta)/p_1$ — proved by
Hölder, and equivalent to the log-convexity of $p\mapsto\log\lVert f\rVert_p$.
$\lVert f\rVert_p\to\lVert f\rVert_\infty$ as $p\to\infty$ whenever $f\in L^r$ for
some $r<\infty$ (and the hypothesis is necessary). **The parallelogram law in
$L^2$**: $\lVert f+g\rVert_2^2+\lVert f-g\rVert_2^2 = 2\lVert f\rVert_2^2+
2\lVert g\rVert_2^2$ — proved here, cheap, and it is the single fact MT-23 builds
its $L^2$ decomposition on (§D6).
*The range $0<p<1$*, three items and no more: $\lVert\cdot\rVert_p$ is **not**
subadditive; $d(f,g):=\int\lvert f-g\rvert^p d\mu$ **is** a complete translation-invariant
metric; and the reverse inequality $\lVert f+g\rVert_p\ge\lVert f\rVert_p+
\lVert g\rVert_p$ holds for nonnegative $f,g$.

**FS.** $L^p\subseteq L^r$ for $p<r$ on every measure space. $\lVert\cdot\rVert_p$
is a norm on $\mathcal{L}^p(\mu)$. $\lVert f\rVert_\infty = \sup\lvert f\rvert$.
Every Cauchy sequence in $L^p$ converges pointwise a.e. $L^{1/2}$ with
$\lVert\cdot\rVert_{1/2}$ is a normed space. Hölder's inequality is an equality only
when $f$ and $g$ are proportional.

**B page.** *Examples*: $x^{-a}$ on $(0,1)$ and on $(1,\infty)$, tabulated against
$p$, giving the two failure directions on $\mathbb{R}$ in one family;
$\ell^p$ membership of $(k^{-a})_k$; $L^p$ of counting measure on a finite set as
$(\mathbb{R}^n,\lVert\cdot\rVert_p)$ computed; the essential supremum of
$\mathbf{1}_{\mathbb{Q}}$ (zero) against its supremum (one); the equality case of
Hölder exhibited; $\lVert f\rVert_p\to\lVert f\rVert_\infty$ computed on a two-step
simple function; the parallelogram law verified on two explicit $L^2$ functions.
*Counterexamples*: $f\in L^1(\mathbb{R})\setminus L^2(\mathbb{R})$ and
$g\in L^2\setminus L^1$; the typewriter sequence again, now as an $L^1$-convergent
sequence converging at no point, so Riesz–Fischer's subsequence clause is not
removable; $\lVert\cdot\rVert_{1/2}$ failing the triangle inequality on two
indicators; a Cauchy sequence in $(\mathcal{L}^p,\lVert\cdot\rVert_p)$ with two
distinct limits — the concrete reason the quotient is taken.

**Traps.** (i) $\mathcal{L}^p$ and $L^p$ are different objects and the difference is
the point of §D5; the library must not write $f\in L^p$ and then evaluate $f$ at a
point without the standing "choose a representative" convention, which is stated
once as a `rem-`. (ii) Hölder at $p=1,q=\infty$ is a **separate proof**; folding it
into the general case with $1/\infty=0$ is a notational fiction. (iii) The
finite-measure inclusion needs $\mu(X)<\infty$, the counting inclusion needs
atoms of mass $\ge1$; neither generalises and both are frequently misquoted.
(iv) $\lVert f\rVert_\infty$ is an **essential** supremum; every statement about it
is an a.e. statement.

**Generated items**: the tabulated $x^{-a}$ family (`ex-`, computation); the
parallelogram-law verification (`ex-`). No generated statement.

**Forward references**: one, orientation-only, on
`rem-lp-completeness-and-the-banach-property` (§6, §8 seam 1).

---

## MT-15. Density, Separability and Convolution in $L^p$

`requires`: MT-14, MT-4, MT-11, MT-10, `urysohn-lemma-and-tietze`,
`the-topology-of-euclidean-space`, `countability-axioms-and-cardinal-functions`,
`higher-derivatives-and-smoothness`

**DEFS.** The **translation** $\tau_h f := f(\cdot-h)$; $C_c(\mathbb{R}^n)$ and
$C_c^\infty(\mathbb{R}^n)$; the **convolution** $f*g(x) := \int f(x-y)g(y)\,dy$
(well-definedness #25); an **approximate identity** / **mollifier**
$\varphi_\varepsilon(x) := \varepsilon^{-n}\varphi(x/\varepsilon)$ for
$\varphi\in C_c^\infty$ with $\int\varphi=1$.

**THMS.** *Density.* Simple functions whose support has finite measure are dense in
$L^p(\mu)$ for $1\le p<\infty$ (**landmark**, from simple approximation plus DCT),
and the $p=\infty$ statement is **different** — the simple functions are dense in
$L^\infty$ under the essential-sup norm by uniform approximation, and the item
distinguishes the two. Finite disjoint unions of boxes give step functions dense in
$L^p(\mathbb{R}^n)$, $1\le p<\infty$ (via MT-4's outer regularity).
**$C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1\le p<\infty$**
(**landmark**), by regularity plus an explicit distance-function Urysohn bump
$x\mapsto d(x,K^c)/(d(x,K^c)+d(x,F))$ — elementary and ZF; the published
`thm-urysohn-lemma` is cited for the general LCH statement MT-20 needs, and this
page notes it does **not** need it in $\mathbb{R}^n$. The closure of
$C_c(\mathbb{R}^n)$ in $L^\infty$ is $C_0(\mathbb{R}^n)$, **not** $L^\infty$, and
the item states it exactly.
*Separability.* $L^p(\mathbb{R}^n)$ is **separable** for $1\le p<\infty$
(**landmark**; the countable dense family is the rational-coefficient step functions
over boxes with rational vertices, from the published
`thm-rational-points-and-boxes-in-rn`, and separability is asserted in the sense of
the published `def-separable-space` for the metric space $L^p$ — an agreement
obligation, §9). The general theorem: $L^p(\mu)$ is separable for $1\le p<\infty$
when $\mathcal{A}$ is **countably generated** and $\mu$ is $\sigma$-finite — this is
the exact hypothesis the ‡ row `rem-lp-separability` names and the item proves that
form, not the false unrestricted one. **$L^\infty[0,1]$ is not separable**
(**landmark**, ZF: $\{\mathbf{1}_{[0,t]}\}_{t\in[0,1]}$ is uncountable and
$1$-separated).
*Translation.* $\lVert\tau_h f-f\rVert_p\to0$ as $h\to0$, for $1\le p<\infty$
(**landmark**, from $C_c$ density plus uniform continuity — and this is the theorem
MT-17's approximate-identity arguments consume); it **fails** at $p=\infty$, with
$\mathbf{1}_{[0,1]}$ as the witness.
*Convolution.* Well-definedness #25 in three items: $(x,y)\mapsto f(x-y)g(y)$ is
$\mathcal{B}(\mathbb{R}^{2n})$-measurable for **Borel representatives** (because
$(x,y)\mapsto x-y$ is continuous and MT-11 gives
$\mathcal{B}(\mathbb{R}^n)\otimes\mathcal{B}(\mathbb{R}^n)=\mathcal{B}(\mathbb{R}^{2n})$),
the choice of Borel representative changes $f*g$ nowhere (MT-7's Borel-representative
theorem), and the composition with a merely Lebesgue measurable representative can
fail to be measurable — the classical trap, its own lemma, and MT-5's Cantor-function
example is the reason. Then for $f,g\in L^1$: the integral converges for a.e. $x$,
$f*g\in L^1$ with $\lVert f*g\rVert_1\le\lVert f\rVert_1\lVert g\rVert_1$ (Tonelli),
$f*g=g*f$, convolution is associative and bilinear, and
$\operatorname{supp}(f*g)\subseteq\overline{\operatorname{supp}f+\operatorname{supp}g}$.
**Minkowski's integral inequality** (**landmark**)
$\lVert\int F(\cdot,y)\,d\nu(y)\rVert_p\le\int\lVert F(\cdot,y)\rVert_p\,d\nu(y)$ —
proved from Tonelli plus the *elementary half* of the duality
$\lVert F\rVert_p=\sup\{\int Fg : g\ge0,\ \lVert g\rVert_q\le1\}$, whose attaining
witness $g=F^{p-1}/\lVert F\rVert_p^{p/q}$ is explicit, **so no Hahn–Banach and no
MT-16**. **Young's convolution inequality** (**landmark**)
$\lVert f*g\rVert_r\le\lVert f\rVert_p\lVert g\rVert_q$ for
$1/r=1/p+1/q-1$; the conjugate case $r=\infty$ gives $f*g\in C_0(\mathbb{R}^n)$.
*Mollification.* The published `ex-smooth-compactly-supported-bump` supplies
$\varphi$, so no bump lemma is minted. $f*\varphi_\varepsilon\in C^\infty$ with
$\partial^\alpha(f*\varphi_\varepsilon)=f*\partial^\alpha\varphi_\varepsilon$
(differentiation under the integral sign, MT-8); $f*\varphi_\varepsilon\to f$ in
$L^p$ for $1\le p<\infty$ and uniformly on compacta for continuous $f$; hence
**$C_c^\infty(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1\le p<\infty$**
(**landmark** — the statement `pde` is built on).

**FS.** $C_c(\mathbb{R}^n)$ is dense in $L^\infty(\mathbb{R}^n)$. $L^p(\mu)$ is
separable for every measure $\mu$ and every $p<\infty$. Translation is continuous
in $L^\infty$. $f*g$ is defined at every point when $f,g\in L^1$. The convolution of
two $L^2$ functions is in $L^2$. The convolution of Lebesgue measurable functions is
measurable for every choice of representatives.

**B page.** *Examples*: $\mathbf{1}_{[0,1]}*\mathbf{1}_{[0,1]}$ computed as the tent
function, with its support checked against the support theorem; mollification of
$\mathbf{1}_{[0,1]}$ at two values of $\varepsilon$, sketched and computed;
the countable dense family in $L^2[0,1]$ written out; the $1$-separated family in
$L^\infty[0,1]$; Young's inequality applied to $L^1*L^2$; the Gaussian as an
approximate identity that is not compactly supported, with the theorem restated for
$L^1$ approximate identities. *Counterexamples*: $\lVert\tau_h\mathbf{1}_{[0,1]}
-\mathbf{1}_{[0,1]}\rVert_\infty=1$ for all $h\ne0$; a measure space with
non-separable $L^2$ (counting measure on an uncountable set); $f,g\in L^2$ with
$f*g\notin L^2$ — take $f=g=\lvert x\rvert^{-1/2}\mathbf{1}_{[-1,1]}$ in dimension
one and check the divergence at $0$.

**Traps.** (i) The Borel-representative lemma is the whole content of
well-definedness #25 and is skipped in most textbooks; skipping it here is a real
defect because MT-5 has the counterexample on disk. (ii) "Dense in $L^\infty$"
statements are almost always false; every density theorem on this page carries
$p<\infty$ in its hypothesis. (iii) The separability theorem's hypothesis is
**countably generated $\sigma$-algebra plus $\sigma$-finite**, matching
`rem-lp-separability`; a bare "$L^p$ is separable" would be false and would
falsely discharge the ‡ row. (iv) Minkowski's integral inequality must **not** be
proved by citing MT-16, which comes later and whose own proof would then be
circular through MT-15's density theorem.

**Generated items**: the tent-function and mollification computations (`ex-`); the
$L^2*L^2\not\subseteq L^2$ witness (`cex-`) if unsourced — it is standard, check.

**Forward references**: none.

---

## MT-16. The Duality of $L^p$ and $L^q$

`requires`: MT-14, MT-15, MT-13, MT-12, MT-2

SEAMS §4 assigns "$L^p$ spaces **entire** … **and the duality
$(L^p)^*\cong L^q$**" to this track while assigning "dual spaces" to
`functional-analysis`, which lands above. §8 seam 2 resolves the tension: **the
mathematics is proved here in full, concretely; only the two words "dual space"
wait.**

**DEFS.** A **bounded linear functional** on $L^p(\mu)$: a linear
$\Lambda:L^p(\mu)\to\mathbb{R}$ (or $\mathbb{C}$) with
$\lvert\Lambda f\rvert\le C\lVert f\rVert_p$ for some $C$; its **norm**
$\lVert\Lambda\rVert := \sup\{\lvert\Lambda f\rvert : \lVert f\rVert_p\le1\}$
(well-definedness #26 — the concrete definition, deliberately not the abstract one).

**THMS.** *The easy direction, in full.* For $g\in L^q(\mu)$ with $q$ conjugate to
$p$, $\Lambda_g f := \int fg\,d\mu$ is well defined on $L^p$ (Hölder gives absolute
convergence and independence of representatives), is linear and bounded, and
$\lVert\Lambda_g\rVert = \lVert g\rVert_q$ **exactly** (**landmark**): "$\le$" is
Hölder, and "$\ge$" is the explicit extremal $f := \lvert g\rvert^{q-1}
\operatorname{sgn}\bar g$ for $1<q<\infty$, with the $q=1$ and $q=\infty$ cases
argued separately — **and the $q=\infty$ case needs semifiniteness of $\mu$**, which
is where the hypothesis first appears rather than being imported later.
Consequently $g\mapsto\Lambda_g$ is injective on $L^q$ for semifinite $\mu$.
*The representation theorem* (**landmark**): let $1\le p<\infty$ and let $\mu$ be
$\sigma$-finite. For every bounded linear $\Lambda$ on $L^p(\mu)$ there is a
**unique** $g\in L^q(\mu)$ with $\Lambda f=\int fg\,d\mu$ for all $f\in L^p(\mu)$,
and $\lVert\Lambda\rVert=\lVert g\rVert_q$. Proved in four lemmas: (a) for finite
$\mu$, $\nu(E):=\Lambda(\mathbf{1}_E)$ is a finite signed (or complex) measure —
countable additivity is continuity of $\Lambda$ plus DCT, and it is the step an
author is most likely to wave through; (b) $\nu\ll\mu$, so MT-13 supplies
$g := d\nu/d\mu\in\mathcal{L}^1$; (c) $\Lambda f=\int fg$ first for simple $f$, then
for bounded $f$, then for all of $L^p$ by MT-15's density; (d) $g\in L^q$ with
$\lVert g\rVert_q\le\lVert\Lambda\rVert$, by applying (c) to the truncated extremal
functions $f_k := \lvert g_k\rvert^{q-1}\operatorname{sgn}\bar g\,
\mathbf{1}_{\{\lvert g\rvert\le k\}}$ and letting $k\to\infty$ by MCT. Then
$\sigma$-finite by exhaustion, with the pieces glued by uniqueness.
*The hypothesis ledger, as its own items.* For $1<p<\infty$ the theorem holds for an
**arbitrary** measure $\mu$; for $p=1$ it needs $\mu$ semifinite (and holds there),
and it **fails** on a non-semifinite space — the witness is the "$0$ on countable,
$\infty$ on uncountable" measure of MT-2's B page, which is why that example is on
the A page there. **At $p=\infty$ the statement is false**: $L^1\to$ (bounded
functionals on $L^\infty$) is isometric and **not** surjective, and this track
**does not prove it**, because every construction of a witness extends a functional
off a subspace, i.e. uses Hahn–Banach (§2 row 15b). The page states the
order-relative fact and cites the published `rem-dual-of-l-infinity`; an author must
not "prove" it with a Banach limit, which is Hahn–Banach in disguise.
*Consequences used elsewhere.* The norm-recovery formula
$\lVert f\rVert_p=\sup\{\lvert\int fg\rvert : \lVert g\rVert_q\le1\}$ for
$1\le p<\infty$ on a semifinite $\mu$ — note MT-15 proved the elementary
nonnegative case it needed by hand, and this page records the agreement rather than
letting MT-15 depend on it. For counting measure: $(\ell^p)^*\cong\ell^q$ for
$1\le p<\infty$ including $(\ell^1)^*\cong\ell^\infty$, stated concretely.

**FS.** Every bounded linear functional on $L^\infty$ is integration against an
$L^1$ function. The representation theorem holds for $p=1$ on every measure space.
The representation theorem holds for $p=\infty$. $\lVert\Lambda_g\rVert<\lVert
g\rVert_q$ for some $g\in L^q$. The map $g\mapsto\Lambda_g$ is injective on $L^q$
for every measure. Boundedness of $\Lambda$ follows from linearity.

**B page.** *Examples*: the extremal function computed for an explicit $g$ on
$[0,1]$, verifying $\lVert\Lambda_g\rVert=\lVert g\rVert_q$; the functional
$f\mapsto\int_0^{1/2}f$ on $L^p[0,1]$ with its norm computed for several $p$;
$(\ell^2)^*$ exhibited concretely; evaluation $f\mapsto f(0)$ shown **not** to be
well defined on $L^p$ at all, since it does not respect a.e. equality — the cleanest
illustration of why $L^p$ is a quotient. *Counterexamples*: the non-semifinite space
at $p=1$; a bounded functional on $L^\infty[0,1]$ vanishing on $C[0,1]$ — **stated
as a ‡ citation only**, never constructed here.

**Traps.** (i) Do not write $(L^p)^*$; §8 seam 2. (ii) The $\sigma$-finiteness in
the headline statement is a *sufficient* hypothesis; the sharp hypotheses are the
ledger items, and the page must not state the sharp version without proving it.
(iii) Lemma (a)'s countable additivity uses $\lVert\mathbf{1}_{\bigcup_{k>N}E_k}
\rVert_p\to0$, which is **false for $p=\infty$** — another reason the theorem stops
at $p<\infty$, and the item says so where it is used. (iv) The uniqueness of $g$ is
a.e. uniqueness, i.e. uniqueness in $L^q$, not of a function.

**Generated items**: the computed functional norms (`ex-`).

**Forward references**: one, orientation-only, on
`rem-duality-as-a-dual-space-statement` (§6, §8 seam 2).

---

## MT-17. The Maximal Function and Lebesgue Differentiation

`requires`: MT-14, MT-11, MT-4, MT-13, MT-15, `the-topology-of-euclidean-space`,
`compactness-in-metric-spaces`

**DEFS.** $L^1_{loc}(\mathbb{R}^n)$; the **averages**
$A_rf(x) := \frac{1}{\lambda(B(x,r))}\int_{B(x,r)}f\,d\lambda$; the **centred
Hardy–Littlewood maximal function** $Mf(x) := \sup_{r>0}A_r\lvert f\rvert(x)$ and
the **uncentred** $M^*f$ (well-definedness #27); **weak type $(p,p)$**; a **Lebesgue
point** and the **Lebesgue set** (well-definedness #28); the **density** of a
measurable set at a point; a family **shrinking nicely** to $x$.

**THMS.** **The Vitali covering lemma** (**landmark**): from any finite family of
open balls one may select a disjoint subfamily whose $5$-fold dilates cover the
union, so $\lambda(\bigcup_i B_i)\le5^n\sum_k\lambda(B_{i_k})$; and the countable
form by a greedy selection on radii (**AC$_\omega$**; the finite form is ZF, §4).
$Mf$ **is measurable** because $\{Mf>t\}$ is open (well-definedness #27 — the
supremum is over an uncountable family, so this is a theorem, and the openness
argument is the one MT-7's $\sup_k$ theorem cannot supply). $M^*f\le 2^nMf$ and
$Mf\le M^*f$, so the two are comparable and every theorem holds for both.
**The Hardy–Littlewood maximal inequality** (**landmark**):
$\lambda(\{Mf>t\})\le\frac{5^n}{t}\lVert f\rVert_1$ for $f\in L^1$ — weak type
$(1,1)$, and it is **not** improvable to strong type $(1,1)$: $Mf\notin L^1$ for
every $f\ne0$, because $Mf(x)\gtrsim\lvert x\rvert^{-n}$ at infinity (a `cex-` on the
A page, since MT-23 and any later track citing $M$ needs it). $\lVert Mf\rVert_\infty
\le\lVert f\rVert_\infty$. **The Marcinkiewicz interpolation theorem** (**landmark**,
in the form actually needed: a sublinear operator of weak type $(1,1)$ and of type
$(\infty,\infty)$ is of strong type $(p,p)$ for $1<p<\infty$) — proved by splitting
$f = f\mathbf{1}_{\{\lvert f\rvert>t/2\}}+f\mathbf{1}_{\{\lvert f\rvert\le t/2\}}$
and integrating the distribution function with MT-11's layer-cake formula; hence
$\lVert Mf\rVert_p\le C_{n,p}\lVert f\rVert_p$ for $1<p\le\infty$. **The Lebesgue
differentiation theorem** (**landmark**): for $f\in L^1_{loc}(\mathbb{R}^n)$,
$A_rf(x)\to f(x)$ as $r\to0^+$ for a.e. $x$ — proved by the standard three-step
argument (continuous functions, MT-15's $C_c$ density, and the maximal inequality to
control the error set), and the item names the three steps because that structure is
reused for every later differentiation statement. **The Lebesgue-point form**
(**landmark**, well-definedness #28): $\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}
\lvert f(y)-f(x)\rvert\,dy\to0$ for a.e. $x$, using a countable dense set of rational
constants and one null set per constant. **The Lebesgue density theorem**
(**landmark**): a measurable $E$ has density $1$ at a.e. point of $E$ and $0$ at a.e.
point of $E^c$. Differentiation along families shrinking nicely (not merely balls),
with the eccentricity constant explicit. **Differentiation of measures** (**landmark**):
for a $\sigma$-finite Borel $\nu$ on $\mathbb{R}^n$ finite on compacta, with
Lebesgue decomposition $\nu = f\,d\lambda+\nu_s$, one has
$\nu(B(x,r))/\lambda(B(x,r))\to f(x)$ for a.e. $x$, and $\to0$ a.e. when
$\nu\perp\lambda$ — the theorem that ties MT-13 to differentiation and that MT-18
uses for the monotone case. **The first half of the FTC in $L^1$**: for
$f\in L^1[a,b]$, $\frac{d}{dx}\int_a^x f = f(x)$ a.e. (**landmark**; MT-19's input),
with the agreement remark against the published
`cor-ftc-integral-function-differentiable-almost-everywhere`, which is the
continuous-integrand shadow of exactly this statement.

**FS.** $Mf\in L^1$ whenever $f\in L^1$. $A_rf(x)\to f(x)$ at every point.
The Lebesgue differentiation theorem requires $f$ continuous. Every point of a
measurable set of positive measure is a density point. The maximal inequality holds
with the constant $1$. A measurable set has density $0$ or $1$ at **every** point.

**B page.** *Examples*: $Mf$ computed in closed form for
$f=\mathbf{1}_{[0,1]}$ on $\mathbb{R}$, exhibiting the $\lvert x\rvert^{-1}$ tail;
$Mf$ for $f=\delta$-like spikes; the Lebesgue set of $\mathbf{1}_{\mathbb{Q}}$ (all
of $\mathbb{R}$, since $\mathbf{1}_{\mathbb{Q}}=0$ a.e. — the example that shows
Lebesgue points depend only on the class); a point of a measurable set that is not a
density point; the fat Cantor set's density computed at a boundary point; Steinhaus's
theorem re-proved in two lines from the density theorem, beside MT-4's covering
proof. *Counterexamples*: $Mf\notin L^1$ for $f = \mathbf{1}_{[0,1]}$; **no
measurable $E\subseteq\mathbb{R}$ has $\lambda(E\cap I)/\lambda(I)=1/2$ for every
interval $I$** — the classical corollary of the density theorem, and a striking one;
a nonnegative $f\in L^1_{loc}$ whose averages diverge on a null set exhibited
concretely.

**Traps.** (i) Measurability of $Mf$ is a theorem (well-definedness #27) and an
author who treats it as obvious has skipped the only genuinely topological step on
the page. (ii) The $5^n$ constant comes from the covering lemma and is not optimal;
the item must not claim optimality (Tao's Remark on Melas's sharp constant is the
source note). (iii) Marcinkiewicz here is the **real-variable** theorem between
weak $(1,1)$ and $L^\infty$; Riesz–Thorin is complex-analytic and is out of scope
(§2 row 6). Do not let a proof reach for analytic interpolation. (iv) "For a.e. $x$"
in the Lebesgue-point theorem is one null set for the whole statement, obtained by
countable union over rational constants — the order of quantifiers is the proof.

**Generated items**: the closed-form $Mf$ for $\mathbf{1}_{[0,1]}$ (`ex-`,
computation); the density-$1/2$ corollary is classical, check the source before
labelling.

**Forward references**: none.

---

## MT-18. Differentiation of Monotone Functions and the Vitali Covering Theorem

`requires`: MT-17, MT-13, MT-6, `monotone-functions-and-discontinuities`,
`bounded-variation-and-riemann-stieltjes`, `the-derivative-and-mean-value-theorems`,
`cantor-set-baire-and-measure-zero`

**DEFS.** The **four Dini derivates** $D^+f$, $D_+f$, $D^-f$, $D_-f$
(well-definedness #29); a **Vitali cover** / **fine cover** of a set by closed
intervals or balls; the **jump function** of a monotone $F$; a **singular
function** ($F' = 0$ a.e., $F$ non-constant).

**THMS.** The four derivates exist in $\overline{\mathbb{R}}$ for **every** function
at **every** point, $D_+f\le D^+f$ and $D_-f\le D^-f$ always, and $f'(x)$ exists
finite iff all four agree and are finite — the relation to the published
`def-derivative` is its own item (well-definedness #29). **The rising sun lemma**
(**landmark**, F. Riesz): for continuous $F$ on $[a,b]$ the set
$E := \{x : F(y)>F(x) \text{ for some } y>x\}$ is open, and on each component
$(c,d)$ of $E$ one has $F(c)\le F(d)$ — with the endpoint case stated exactly,
because the sloppy version is false. Its consequence, the **one-sided maximal
inequality** for monotone functions. **Monotone $\Rightarrow$ differentiable a.e.**
(**landmark**), and this track proves it **twice, deliberately**, because the two
routes cost different choice principles (§4) and the library gains a real comparison:
(a) the **rising sun route** (Riesz; Tao §1.6), which needs only AC$_\omega$ and no
covering theorem; (b) the **measure route** (Bass ch. 14), deducing it from MT-6's
Lebesgue–Stieltjes measure, MT-13's Lebesgue decomposition and MT-17's
differentiation of measures. A `rem-` records that Royden's classical route through
the Vitali covering theorem on Dini derivates is a third, and why this track does not
also run it. **The Vitali covering theorem** (**landmark**, **DC** — the strongest
principle the track uses outside MT-5, and the Statement says so): if $V$ is a fine
cover of $E$ by closed balls with $\lambda^*(E)<\infty$, there is a countable
**disjoint** subfamily $\{B_k\}$ with $\lambda^*(E\setminus\bigcup_k B_k)=0$; **and
the characterisation the ‡ row `rem-mini-vitali-covering-theorem` actually asserts**
— $E$ is null iff for every $\varepsilon>0$ some countable subfamily of any fine
cover covers $E$ with total measure $<\varepsilon$ — proved as its own item, since
discharging that row on the $5r$ lemma alone would be an incomplete discharge (§7).
*Integration of the derivative*: for increasing $F$ on $[a,b]$, $F'$ is measurable
and integrable with $\int_a^b F'\,d\lambda\le F(b)-F(a)$ (**landmark**, by Fatou on
the difference quotients — and the extension of $F$ past $b$ is part of the proof,
not an aside); **the inequality is strict for the Cantor function**, so no hypothesis
was omitted. *Decompositions*: an increasing $F$ splits uniquely as **jump plus
continuous**, and the jump part has derivative $0$ a.e.; an increasing
right-continuous $F$ splits uniquely as **absolutely continuous plus jump plus
singular continuous**, matching MT-13's decomposition of $\mu_F$ term by term
(**landmark** — the concrete statement `probability-theory` will cite). **BV
$\Rightarrow$ differentiable a.e.** (**landmark**), from the published
`thm-jordan-decomposition-for-bv-functions` (a BV function is a difference of two
increasing functions — cited, not re-proved) plus the monotone theorem.
**Fubini's theorem on term-by-term differentiation**: if $F=\sum_k F_k$ converges
pointwise on $[a,b]$ with each $F_k$ increasing, then $F'=\sum_k F_k'$ a.e. — cheap,
standard, and the tool that builds the strictly increasing singular function on the
B page.

**FS.** A continuous function is differentiable a.e. (refuted by the published
`thm-takagi-function-is-continuous-and-nowhere-differentiable`, cited not
re-proved). $\int_a^b F' = F(b)-F(a)$ for every increasing $F$. The Vitali covering
theorem holds for an arbitrary cover rather than a fine cover. A function with
$F'=0$ a.e. is constant. Every function of bounded variation is absolutely
continuous. A monotone function has at most countably many points of
non-differentiability.

**B page.** *Examples*: the Cantor function with $F'=0$ a.e., $\int_0^1F'=0$ and
$F(1)-F(0)=1$ — the standing witness, citing the published
`thm-cantor-function-properties`; a pure jump function
$F(x)=\sum_{q_k\le x}2^{-k}$ over an enumeration of $\mathbb{Q}$, increasing, with
$F'=0$ a.e. and dense discontinuities; **a strictly increasing singular function**,
built as $\sum_k2^{-k}c_k$ from scaled Cantor functions on a dense family of
intervals, with Fubini's differentiation theorem supplying $F'=0$ a.e.; the Dini
derivates of $x\sin(1/x)$ at $0$ computed, all four distinct; the jump/continuous
decomposition computed for a specific $F$. *Counterexamples*: the Vitali covering
theorem applied to a cover that is not fine, failing; a BV function that is not
continuous, differentiable a.e. all the same.

**Traps.** (i) The rising sun lemma's conclusion at the **right** endpoint of a
component is $F(c)\le F(d)$, with equality possible; several textbook statements
mis-handle $b$ itself, and the item must state the endpoint case explicitly.
(ii) "Differentiable a.e." says nothing about where; the Cantor function's
non-differentiability set is exactly the Cantor set, which is null, so both
statements are true at once and the page should say so once. (iii) The DC cost of the
Vitali covering theorem is real and the ledger records it; do not "simplify" the
greedy exhaustion into a claim of ZF. (iv) The published BV block at order 163 owns
`thm-jordan-decomposition-for-bv-functions` and
`def-bounded-variation-and-total-variation`; this page cites and never re-mints (§9).

**Generated items**: the computed Dini derivates of $x\sin(1/x)$ (`ex-`); the
strictly increasing singular function is classical (Royden, Bruckner) — check the
locator rather than minting.

**Forward references**: none.

---

## MT-19. Absolute Continuity and the Sharp Fundamental Theorem of Calculus

`requires`: MT-18, MT-17, MT-13, MT-8, `bounded-variation-and-riemann-stieltjes`,
`the-fundamental-theorems-of-calculus`, `the-derivative-and-mean-value-theorems`

The page `DEFERRED.md` §1 has been waiting for. `def-absolutely-continuous-function`
and `thm-c1-lipschitz-ac-bv-hierarchy` are **published at order 163** and are cited,
not re-minted (§9); what this page adds is Luzin's property (N), the sharp FTC in
both directions, and Banach–Zarecki.

**DEFS.** **Luzin's property (N)** ($\lambda(E)=0\Rightarrow\lambda(F(E))=0$),
well-definedness #30; the **indefinite integral** of an $L^1$ function; the
**total variation function** $V_F(x) := V_F[a,x]$.

**THMS.** AC $\Rightarrow$ uniformly continuous, and AC $\Rightarrow$ BV, both cited
from the published hierarchy with the agreement remark. **AC and $F'=0$ a.e.
$\Rightarrow$ $F$ constant** (**landmark**; the Vitali covering theorem of MT-18 is
the engine, and this is the lemma that makes the FTC's uniqueness half work).
**The sharp fundamental theorem of calculus** in two halves, both **landmark**:
(1) for $f\in L^1[a,b]$ the indefinite integral $F(x):=\int_a^x f\,d\lambda$ is
**absolutely continuous** (from MT-8's absolute continuity of the integral) and
$F'=f$ a.e. (from MT-17); (2) **$F$ is absolutely continuous on $[a,b]$ if and only
if $F'$ exists a.e., is Lebesgue integrable, and $F(x)-F(a)=\int_a^x F'\,d\lambda$
for every $x$** — this is
`thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, and it
discharges `rem-ftc-absolutely-continuous`. The agreement item against the published
`thm-ftc-first-part` and `thm-ftc-second-part`: those are the continuous-integrand
and $C^1$ statements, this is the sharp one, and the hypotheses of each must be
quoted exactly rather than described. **AC $\Rightarrow$ (N)**; **the Cantor function
is continuous, BV, and fails (N)** — the exact gap between "continuous BV" and "AC".
**Banach–Zarecki** (**landmark**): $F$ is absolutely continuous on $[a,b]$ **iff**
$F$ is continuous, of bounded variation, and satisfies Luzin's property (N); the
hard direction is $\Leftarrow$, and the proof runs through the Vitali covering
theorem and the FTC. This discharges `rem-banach-zarecki`. **A sharper sufficient condition, worth an
item because it is the form most often wanted in practice** (Cohn Thm 6.3.11,
verified): if $F$ is continuous on $[a,b]$, differentiable **except at countably
many points**, and $F'$ is integrable, then $F$ is absolutely continuous and the FTC
holds — the countable exceptional set is what the Cantor function's uncountable one
violates, so the two items explain each other. *Calculus for AC functions*: **integration by parts** $\int_a^b FG' + \int_a^b F'G = F(b)G(b)-F(a)G(a)$
for $F,G$ absolutely continuous (**landmark**; via Fubini on the product, and the
hypotheses are exactly AC on both factors); **the change of variables**
$\int_{g(a)}^{g(b)}f(y)\,dy=\int_a^b f(g(x))g'(x)\,dx$ for $g$ absolutely continuous
and increasing and $f\in L^1$ (**landmark**, with the non-monotone case stated
separately and its extra hypothesis given, since the naive statement is false);
$V_F(x)=\int_a^x\lvert F'\rvert$ and $V_F'=\lvert F'\rvert$ a.e. for AC $F$;
Lipschitz $\Rightarrow$ AC with $\lvert F'\rvert\le L$ a.e., and conversely
$\lvert F'\rvert\le L$ a.e. plus AC gives Lipschitz. **The composition of two AC
functions need not be AC**, with the classical witness; but $\mathrm{Lip}\circ AC$
is AC, and $AC\circ\mathrm{Lip}$ (monotone) is AC — three items, because the
literature states these carelessly and `pde` will cite them.

**FS.** A continuous function of bounded variation is absolutely continuous. If $F$
is continuous, differentiable a.e., and $F'\in L^1$, then
$F(b)-F(a)=\int_a^bF'$. Absolute continuity is preserved under composition. Every
absolutely continuous function is Lipschitz. A function satisfying Luzin's property
(N) is absolutely continuous. A differentiable function with bounded derivative on
$[a,b]$ need not be absolutely continuous.

**B page.** *Examples*: $\sqrt{x}$ on $[0,1]$ — AC and not Lipschitz;
$x^2\sin(1/x^2)$ (with $F(0)=0$) — differentiable **everywhere** and not BV, hence
not AC, and its derivative is not integrable, which is the cleanest possible
refutation of the naive FTC; integration by parts applied to compute a specific
integral; the change of variables applied through an AC increasing $g$ with $g'=0$
on a positive-measure set. *Counterexamples*: the Cantor function against every
direction of the FTC and against (N), citing the published
`ex-cantor-function-bv-not-absolutely-continuous`; the composition
$\sqrt{\cdot}\circ(x^2\sin^2(1/x))$ as a non-AC composition of AC functions; a
continuous BV function failing (N).

**Traps.** (i) The published `def-absolutely-continuous-function` is exactly the
definition needed; check its quantifier order at step 1 and quote it, since the
Banach–Zarecki statement is only as precise as the definition it cites. (ii) The
change-of-variables theorem is **false** as usually stated for non-monotone AC $g$
without an extra hypothesis; state the monotone case and the general case separately.
(iii) $F' \in L^1$ plus $F$ continuous plus $F$ differentiable a.e. does **not** give
the FTC — the Cantor function has all three. This is the single most common false
statement in the subject and it is an `fs-` here for that reason. (iv) Property (N)
is about images, not preimages.

**Generated items**: none expected — every item here is classical and
source-locatable. The specific integration-by-parts computation is an `ex-`.

**Forward references**: none.

---

## MT-20. Radon Measures and the Riesz–Markov–Kakutani Theorem

`requires`: MT-12, MT-8, MT-4, MT-3, MT-15, `compactness`, `urysohn-lemma-and-tietze`,
`partitions-of-unity-and-paracompactness`, `the-topology-of-euclidean-space`,
`countability-axioms-and-cardinal-functions`

The page that repays the anchor. Everything it needs from topology is published below
it (§1.3), and it is where measure theory and the LCH block meet.

**DEFS.** $C_c(X)$ and $C_0(X)$ for a locally compact Hausdorff $X$; the **support**
of a continuous function; $f\prec U$ ($f\in C_c(X)$, $0\le f\le1$,
$\operatorname{supp}f\subseteq U$ compact); a **positive linear functional** on
$C_c(X)$; **outer regular** and **inner regular** for a Borel measure; a **Radon
measure** — finite on compacta, outer regular on all Borel sets, **inner regular on
open sets** (well-definedness #31); a **regular Borel measure** — the strictly
stronger notion, inner regular on **all** Borel sets; a **regular complex Borel
measure** ($\lvert\mu\rvert$ regular).

**THMS.** *The topological lemmas the library does not yet have* (well-definedness
#32, two items): a positive linear functional is **monotone**
($f\le g\Rightarrow\Lambda f\le\Lambda g$); and **the LCH Urysohn lemma** — for $K$
compact inside $U$ open in an LCH $X$ there is $f\in C_c(X)$ with $\mathbf{1}_K\le
f\le\mathbf{1}_U$ and $\operatorname{supp}f\subseteq U$ compact — built from the
published `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`
(to find $V$ with $K\subseteq V\subseteq\overline V\subseteq U$ and $\overline V$
compact) plus `thm-urysohn-lemma` on the compact Hausdorff, hence normal, space
$\overline V$. Then **finite partitions of unity subordinate to an open cover of a
compact set in an LCH space**, from the published
`cor-compact-hausdorff-partitions-of-unity` — check at step 1 whether the published
statement covers the LCH case or only the compact one, and build the LCH form here
if not.
**The Riesz–Markov–Kakutani representation theorem** (**landmark**): for LCH $X$ and
a positive linear $\Lambda$ on $C_c(X)$ there is a **unique Radon measure** $\mu$ on
$\mathcal{B}(X)$ with $\Lambda f=\int_X f\,d\mu$ for every $f\in C_c(X)$. Decomposed
into seven items, because a monolithic proof here is unauditable: (i) define
$\mu^*(U):=\sup\{\Lambda f : f\prec U\}$ on open $U$ and
$\mu^*(E):=\inf\{\mu^*(U):E\subseteq U\}$ in general, and show $\mu^*$ is well
defined (the two definitions agree on open sets — a genuine obligation);
(ii) $\mu^*$ is an outer measure; (iii) every open set is Carathéodory measurable, so
MT-3 gives a complete measure on a $\sigma$-algebra containing $\mathcal{B}(X)$;
(iv) $\mu(K)<\infty$ for compact $K$ and $\mu(K)=\inf\{\Lambda f:\mathbf{1}_K\le f\}$;
(v) inner regularity on open sets; (vi) $\Lambda f=\int f\,d\mu$, by the two
inequalities, the partition-of-unity estimate carrying the hard one;
(vii) uniqueness **among Radon measures**, and a counterexample showing uniqueness
**fails** among Borel measures generally — the regularity clause is not decoration
and this is exactly where a careless statement becomes false.
*Regularity theory.* On an LCH space in which **every open set is $\sigma$-compact**
— in particular on $\mathbb{R}^n$, and on every second-countable LCH space — every
Borel measure finite on compacta is automatically Radon **and** inner regular on all
Borel sets, so the two conventions coincide there (**landmark**; the convention
agreement item well-definedness #31 demands). $\lambda_n$ is a Radon measure, and
the agreement with MT-4's regularity theorems is an item. **The concrete "Radon
measure on $\mathbb{R}$" of MT-6 is a Radon measure in this sense**, and conversely —
the agreement MT-6 trap (iv) assigns here. On a compact metric space every finite
Borel measure is regular. **Lusin's theorem for a Radon measure** (**landmark**),
generalising MT-10 and completing the discharge of `rem-lusin-theorem`; and
**$C_c(X)$ is dense in $L^p(\mu)$ for $1\le p<\infty$ and Radon $\mu$**,
generalising MT-15.
**The bounded version** (**landmark**, §2 row 15 and §8 seam 2 — stated concretely,
without the words "dual space"): for LCH $X$ and linear $\Lambda:C_0(X)\to\mathbb{C}$
with $\lvert\Lambda f\rvert\le C\lVert f\rVert_\infty$, there is a **unique** regular
complex Borel measure $\mu$ with $\Lambda f=\int f\,d\mu$ for all $f\in C_0(X)$, and
the least such $C$ equals $\lvert\mu\rvert(X)$. The bridge lemma is the decomposition
of a bounded real functional as a difference of two positive functionals, which is
its own item.

**FS.** Every Borel measure on a locally compact Hausdorff space is Radon. The
representing measure in the Riesz–Markov–Kakutani theorem is unique among all Borel
measures. A positive linear functional on $C_c(X)$ is bounded for the uniform norm.
Inner regularity on open sets implies inner regularity on all Borel sets. Every
finite Borel measure on a compact Hausdorff space is regular. $C_c(X)$ is dense in
$L^\infty(\mu)$.

**B page.** *Examples*: the Riemann integral $f\mapsto\int_a^bf$ as a positive linear
functional on $C[a,b]$, with the theorem returning $\lambda\!\restriction\![a,b]$ —
the cleanest statement of what the theorem is *for*, and the second construction of
Lebesgue measure the track promised in §D1; evaluation $f\mapsto f(x_0)$ returning
$\delta_{x_0}$; $f\mapsto\int fg\,d\lambda$ for $g\ge0$ locally integrable, returning
$g\,d\lambda$; a positive functional on $C_c(\mathbb{R})$ built from a
Lebesgue–Stieltjes integrator (MT-6), showing the two constructions agree; a counting
functional on a discrete LCH space. *Counterexamples*: a Borel measure on a compact
Hausdorff space that is **not** regular — the Dieudonné measure on the ordinal space
$[0,\omega_1]$, which is $1$ on sets containing a closed unbounded set and $0$
otherwise (**check at step 1 that the ordinal space is available**; the ordinal
machinery is published at order 243 and the deleted Tychonoff plank at 273 shows the
library builds such spaces, so this should be reachable — if it is not, substitute
the standard non-$\sigma$-compact LCH failure and record the substitution); two
distinct Borel measures representing the same functional on a non-$\sigma$-compact
space.

**Traps.** (i) **The convention split is real and must be stated, not chosen
silently.** Verified from the sources: Folland defines a Radon measure as inner
regular on **open** sets only; Tao's exercise definition demands inner regularity on
**all Borel** sets; Rudin never uses the word "Radon" and his "regular" is the
stronger both-ways notion, which he proves is *not* obtainable from the
representation theorem without $\sigma$-compactness; Bass never defines it either.
This page adopts Folland's, names Tao's and Rudin's, and **proves** the coincidence
theorem. (ii) The uniqueness clause is false without a regularity restriction; an
author who states "there is a unique Borel measure" has written a false theorem.
(iii) $\Lambda$ is only assumed **positive**, not bounded — boundedness on $C_c$ is
not even meaningful without a norm, and the functional is genuinely unbounded in the
uniform norm when $\mu(X)=\infty$. (iv) The published Urysohn and Tietze items carry
their own choice ledger (`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`,
`rem-urysohn-lemma-not-a-zf-theorem`); **Urysohn's lemma is not a ZF theorem**, so
this page's ledger inherits that cost and does not claim ZF (§4).

**Generated items**: none expected. The Riemann-functional example is in Bass 17.4;
the Dieudonné measure is classical.

**Forward references**: none.

---

## MT-21. Hausdorff Measure and Hausdorff Dimension

`requires`: MT-3, MT-4, MT-11, `metric-spaces`, `cantor-set-baire-and-measure-zero`,
`the-logarithm-and-general-powers`

**Beyond the literal remit — §D9.** No other track in SEAMS §4 owns Hausdorff
measure; it costs exactly one idea MT-3 already builds (metric outer measures and
Carathéodory's criterion); and `rem-weierstrass-graph-hausdorff-dimension` is
published with no notion of dimension to refer to. **If the orchestrator declines
this page, nothing else in the track changes** — no other page cites it.

**DEFS.** The **diameter** of a subset of a metric space (with
$\operatorname{diam}\emptyset := 0$, stated); the **$\delta$-approximating Hausdorff
content** $\mathcal{H}^s_\delta(A) := \inf\{\sum_k(\operatorname{diam}U_k)^s :
A\subseteq\bigcup_kU_k,\ \operatorname{diam}U_k\le\delta\}$ for $s\ge0$ and
$\delta\in(0,\infty]$, with the convention $0^0:=1$ so that $\mathcal{H}^0$ counts;
**$s$-dimensional Hausdorff measure** $\mathcal{H}^s := \lim_{\delta\to0^+}
\mathcal{H}^s_\delta$ (well-definedness #33); **Hausdorff dimension** $\dim_H$
(well-definedness #34).

**THMS.** $\mathcal{H}^s_\delta$ is non-decreasing as $\delta$ decreases, so the limit
exists in $[0,\infty]$ (well-definedness #33); $\mathcal{H}^s$ is an outer measure;
it is a **metric** outer measure, hence **every Borel set is $\mathcal{H}^s$-measurable**
by MT-3's Carathéodory criterion (**landmark** — the single reason MT-3 proves that
criterion); $\mathcal{H}^s$ is Borel regular. $\mathcal{H}^0$ is counting measure.
**Scaling and Lipschitz behaviour** (**landmark**, and the workhorse):
$\mathcal{H}^s(cA)=c^s\mathcal{H}^s(A)$ for $c>0$, and
$\mathcal{H}^s(f(A))\le L^s\mathcal{H}^s(A)$ for $L$-Lipschitz $f$ — hence
$\dim_H$ does not increase under a Lipschitz map and is invariant under a
bi-Lipschitz one. **The dimension is well defined** (well-definedness #34): if
$\mathcal{H}^s(A)<\infty$ and $t>s$ then $\mathcal{H}^t(A)=0$; so
$\{s:\mathcal{H}^s(A)=0\}$ and $\{s:\mathcal{H}^s(A)=\infty\}$ are complementary
rays with a single crossover, and $\dim_HA:=\inf\{s:\mathcal{H}^s(A)=0\}$; at the
crossover value $\mathcal{H}^{\dim_HA}(A)$ may be $0$, finite positive, or $\infty$,
with a witness for each. Countable stability: $\dim_H\bigcup_k A_k=\sup_k\dim_HA_k$;
a countable set has dimension $0$. **$\mathcal{H}^1=\lambda_1$ on $\mathbb{R}$**
exactly. **$\mathcal{H}^n=c_n\lambda_n$ on $\mathbb{R}^n$** (**landmark**), proved
**not** by the isodiametric inequality but by MT-4's uniqueness theorem: $\mathcal{H}^n$
is a translation-invariant Borel measure, finite and nonzero on the unit cube (both
bounds are elementary covering estimates), hence a constant multiple of $\lambda_n$.
The exact value $c_n=2^n/\lambda_n(B(0,1))$ **is a scope denial**: it needs the
isodiametric inequality (a set of diameter $d$ has $\lambda_n\le\lambda_n$ of the ball
of diameter $d$), whose proof is Steiner symmetrisation and a page of its own; the
item states the proportionality, names the constant's identification as unproved
here, and cites the source. $\dim_H\mathbb{R}^n=n$. **The mass distribution
principle** (the easy half of Frostman): if $\mu$ is a nonzero finite Borel measure
with $\mu(U)\le C(\operatorname{diam}U)^s$ for all small $U$, then
$\mathcal{H}^s(A)\ge\mu(A)/C$, so $\dim_HA\ge s$ — the only lower-bound tool the
page needs, and cheap. **$\dim_H C=\log2/\log3$ for the Cantor set** (**landmark**),
with $\mathcal{H}^{\log2/\log3}(C)=1$: the upper bound by the natural covers, the
lower bound by the mass distribution principle applied to the Cantor measure of MT-6.

**FS.** $\mathcal{H}^s$ is countably additive on all subsets of $\mathbb{R}^n$.
$\dim_H(A\cup B)=\dim_HA+\dim_HB$. A set of Hausdorff dimension $s$ satisfies
$0<\mathcal{H}^s(A)<\infty$. Hausdorff dimension is preserved by every continuous
injection. A set of Hausdorff dimension $0$ is countable. $\mathcal{H}^s(A)=0$ for
every $s>0$ implies $A$ is countable.

**B page.** *Examples*: the Cantor set's dimension and its exact
$\mathcal{H}^{\log2/\log3}$ measure; the fat Cantor set — dimension $1$ **and**
positive $\lambda_1$, beside the ordinary Cantor set at the same dimension question,
citing the published `def-fat-cantor-set`; a line segment in $\mathbb{R}^2$ with
$\mathcal{H}^1$ equal to its length; the graph of a Lipschitz function on $[0,1]$
having $\mathcal{H}^1$ finite; a countable dense set of dimension $0$; the
Sierpiński-type self-similar computation done by hand for one explicit set.
*Counterexamples*: a set of dimension $1$ with $\lambda_1=0$ (the "restricted digit"
sets interpolate, and one of them has dimension $1$ and measure zero — check the
standard construction at step 1); a continuous image raising dimension (a
space-filling curve, if the library has one — the published Hahn–Mazurkiewicz
material in `DEFERRED.md` §0 suggests it may; check, and drop the item rather than
build a Peano curve here).

**Traps.** (i) $\mathcal{H}^s_\delta$ for finite $\delta$ is **not** a measure worth
studying on its own (it is the Hausdorff *content* when $\delta=\infty$); the item
must not conflate the content with the measure, even though they have the same null
sets. (ii) The covering sets are arbitrary, not balls; restricting to balls gives
**spherical** Hausdorff measure, which is comparable but not equal, and the item says
so. (iii) $\mathcal{H}^n=c_n\lambda_n$ with the constant unidentified is the honest
statement; claiming $\mathcal{H}^n=\lambda_n$ for the standard normalisation without
the isodiametric inequality is a real defect. (iv) Dimension is a property of the
*metric*, not the topology — homeomorphism does not preserve it, and the `fs-` above
makes that visible.

**Generated items**: the explicit self-similar computation (`ex-`) if unsourced.

**Forward references**: none. `rem-weierstrass-graph-hausdorff-dimension` is
published at a lower order and this page **records** that it now has a defined
notion to refer to, without claiming to prove its value.

---

## MT-22. Measure-Preserving Transformations and Poincaré Recurrence

`requires`: MT-8, MT-2, MT-4, MT-17, MT-3, `compactness`,
`the-topology-of-euclidean-space`, `sequences-and-limits`

**DEFS.** A **measure-preserving transformation** $T$ of $(X,\mathcal{A},\mu)$
($T^{-1}\mathcal{A}\subseteq\mathcal{A}$ and $\mu(T^{-1}E)=\mu(E)$); a
**measure-preserving system**; **invertible** and **non-invertible** systems; the
**invariant $\sigma$-algebra** $\mathcal{I}:=\{E:T^{-1}E=E\}$ and its mod-null
variant $\mathcal{I}':=\{E:\mu(T^{-1}E\triangle E)=0\}$ (well-definedness #35);
**ergodic**; **(strongly) mixing** and **weakly mixing**; the **Koopman operator**
$U_Tf:=f\circ T$; the **first-return time** $n_E$ and the **induced transformation**
$T_E$.

**THMS.** $T$ is measure preserving as soon as $\mu(T^{-1}P)=\mu(P)$ for every $P$ in
a **$\pi$-system generating $\mathcal{A}$** with the $\sigma$-finiteness condition of
MT-2's uniqueness theorem (**landmark** — this is what makes every example on the
page checkable, and without it each verification is an uncountable computation).
$U_T$ is a linear isometry of $L^p(\mu)$ for every $1\le p\le\infty$, and
$\int f\circ T\,d\mu=\int f\,d\mu$ for $f\ge0$ measurable and for $f\in\mathcal{L}^1$
(proved through simple functions). $\mathcal{I}$ and $\mathcal{I}'$ are
$\sigma$-algebras, they are **different**, and **they define the same notion of
ergodicity** (well-definedness #35, **landmark**; the literature uses both and a
proof that cites the wrong one is a real defect — the bridge is that every
$\mathcal{I}'$ set differs from an $\mathcal{I}$ set by a null set). $T$ is ergodic
iff every $T$-invariant measurable $f$ is constant a.e. iff every $f$ with
$f\circ T=f$ a.e. is constant a.e. **Poincaré recurrence** (**landmark**): if
$\mu(X)<\infty$ and $\mu(E)>0$ then $\mu$-a.e. point of $E$ satisfies $T^kx\in E$ for
**infinitely many** $k\ge1$; the finiteness is necessary (translation on
$\mathbb{R}$). The topological corollary on a second-countable space: a.e. point is
recurrent. The induced transformation $T_E$ is measure preserving on $E$ for an
ergodic $T$ (via recurrence, so $n_E<\infty$ a.e.). **Kac's formula** (**landmark**):
for an ergodic $T$ on a probability space and $\mu(E)>0$,
$\int_E n_E\,d\mu = 1$, so the mean return time to $E$ is $1/\mu(E)$. Mixing
$\Rightarrow$ weakly mixing $\Rightarrow$ ergodic, with both converses false; and
mixing is checkable on a generating $\pi$-system, which is again what makes the shift
verifiable.
**The Krylov–Bogolyubov existence theorem** (**landmark**; Royden–Fitzpatrick §22.4,
added on the strength of the source harvest): a continuous map on a compact metric
space has at least one invariant Borel probability measure — proved by taking a
weak-\* limit point of the Cesàro averages $\frac1n\sum_{k<n}\delta_{T^kx}$ **through
a concrete diagonal-subsequence argument on a countable dense subset of $C(X)$
supplied by the published `thm-real-stone-weierstrass-for-compact-metric-spaces`,
not through Banach–Alaoglu** (§2 row 1). Without this theorem MT-23's unique-ergodicity
statement is a claim about a possibly empty set, and the gap is easy to miss.
*The three systems the track needs*, each with invariance and ergodicity proved:
**the circle rotation** $R_\alpha x = x+\alpha \bmod 1$ preserves $\lambda$, and is
**ergodic iff $\alpha$ is irrational** (**landmark**; proved from **MT-17's Lebesgue
density theorem** plus the density of $\{n\alpha\}$ — deliberately **not** by the
Fourier-coefficient argument, which belongs to `functional-analysis` and lands above);
**the doubling map** $x\mapsto2x\bmod1$ preserves $\lambda$ and is ergodic (dyadic
intervals plus a density-point argument, again Fourier-free); **the Bernoulli shift**
— the $(1/2,1/2)$ product measure on $\{0,1\}^{\mathbb{N}}$ is constructed **by hand**
(§D8): the cylinder sets form an algebra, the obvious set function on them is a
premeasure, and MT-3 extends it; the shift $\sigma$ preserves it and is **mixing**,
hence ergodic. The premeasure step uses compactness of $\{0,1\}^{\mathbb{N}}$, and the
item takes the **compact-metric** route rather than `thm-tychonoff`, so the cost is
ZF rather than BPI (§4) — the ledger says why.

**FS.** Every measure-preserving transformation is invertible. An ergodic
transformation is mixing. Poincaré recurrence holds on every measure space. The
invariant $\sigma$-algebra of an ergodic system contains only $\emptyset$ and $X$.
An ergodic transformation has a dense orbit through every point. A measure-preserving
transformation of a probability space is ergodic iff it has no nonconstant continuous
invariant function.

**B page.** *Examples*: the rational rotation as the standard **non-ergodic**
measure-preserving map, with an explicit invariant set; the doubling map's dyadic
computation; the Bernoulli shift's cylinder measures tabulated; the **Gauss map**
$x\mapsto\{1/x\}$ preserving the Gauss measure
$\frac{1}{\log2}\frac{dx}{1+x}$ — invariance is a direct computation and is included;
its ergodicity is **deferred** with a reason (Rényi's argument is a distortion
estimate beyond this page); Poincaré recurrence applied to the doubling map on a
dyadic interval; Kac's formula computed for $E=[0,1/2]$ under an irrational rotation.
*Counterexamples*: translation on $(\mathbb{R},\lambda)$ — measure preserving, no
recurrence, so Poincaré needs finiteness; a measure-preserving map that is ergodic
but not mixing (the irrational rotation, once mixing is available); an invariant set
mod null that is not strictly invariant, exhibiting the $\mathcal{I}$ vs
$\mathcal{I}'$ gap concretely.

**Traps.** (i) $\mu(T^{-1}E)=\mu(E)$, **not** $\mu(TE)=\mu(E)$; for non-invertible
$T$ the forward image need not even be measurable, and the doubling map is the
witness. (ii) Ergodicity is a property of the **pair** $(T,\mu)$; the doubling map is
ergodic for $\lambda$ and not for $\delta_0$, and the item titles must name the
measure. (iii) The $\pi$-system criterion for measure preservation carries MT-2's
$\sigma$-finiteness hypothesis; dropping it makes every example's verification
invalid. (iv) The Bernoulli construction is **page-local and is not a general product
measure theorem** — §D8 and §8 amendment 3b; the item title must say
$\{0,1\}^{\mathbb{N}}$.

**Generated items**: the Kac computation (`ex-`); the tabulated cylinder measures
(`ex-`). The Gauss-measure invariance computation is classical.

**Forward references**: none.

---

## MT-23. The Ergodic Theorems of von Neumann and Birkhoff

`requires`: MT-22, MT-14, MT-10, MT-13, MT-8, `sequences-and-limits`,
`approximation-and-compactness-in-ck`

**DEFS.** The **time averages** $A_nf:=\frac1n\sum_{k<n}f\circ T^k$
(well-definedness #36); the partial sums $S_nf:=\sum_{k<n}f\circ T^k$; the
**invariant subspace** $M:=\{f\in L^2(\mu) : f\circ T=f\ \text{a.e.}\}$; **unique
ergodicity**; **equidistribution mod 1**; a **normal number** to base $b$.

**THMS.** $f\circ T$ and $A_nf$ are measurable and $\lVert A_nf\rVert_p\le
\lVert f\rVert_p$ for every $p$ (well-definedness #36; trivial, and it is what the
page manipulates). **The maximal ergodic theorem** (**landmark**, Hopf, in Garsia's
proof): for $f\in\mathcal{L}^1(\mu)$ and
$E:=\{x:\sup_{n\ge1}S_nf(x)>0\}$, one has $\int_Ef\,d\mu\ge0$ — Garsia's argument is
a half page of finite manipulation with $F_N:=\max_{n\le N}S_nf$ and monotone
convergence, **and it uses no inner product at all**, which is exactly why the track
can prove Birkhoff before it has any Hilbert-space theory (§D6). **Birkhoff's
pointwise ergodic theorem** (**landmark**): for a measure-preserving $T$ on a
$\sigma$-finite $(X,\mathcal{A},\mu)$ and $f\in\mathcal{L}^1(\mu)$, $A_nf$ converges
$\mu$-a.e. to a $T$-invariant $f^*\in\mathcal{L}^1$; when $\mu(X)<\infty$,
$\int_Ef^*=\int_Ef$ for every $E\in\mathcal{I}$ and $A_nf\to f^*$ **in $L^1$** as
well (the $L^1$ convergence from uniform integrability and MT-10's Vitali convergence
theorem, which is the honest route and needs no extra machinery). **The identification
of the limit**, stated without the vocabulary this track does not own: $f^*$ is the
$\mu$-a.e. unique $\mathcal{I}$-measurable function with $\int_Ef^*=\int_Ef$ for all
$E\in\mathcal{I}$, and it exists by MT-13's Radon–Nikodym theorem applied to
$E\mapsto\int_Ef\,d\mu$ on $\mathcal{I}$ — `probability-theory` will recognise it and
name it (§8 amendment 3f, a new seam). **The ergodic case** (**landmark**): if $T$ is
ergodic and $\mu(X)<\infty$ then $A_nf\to\frac{1}{\mu(X)}\int f\,d\mu$ a.e. and in
$L^1$ — the statement everything else cites. The $L^p$ mean ergodic theorem for
$1\le p<\infty$, from Birkhoff plus Vitali.
**Von Neumann's mean ergodic theorem in $L^2$** (**landmark**): $A_nf\to Pf$ in
$L^2$, where $P$ is the orthogonal projection of $L^2(\mu)$ onto $M$ — with the three
$L^2$ facts built **by hand and scoped to $L^2(\mu)$** (§D6, three items): the
parallelogram law (MT-14), a nonempty closed convex $C\subseteq L^2$ has a unique
element of least norm (a minimising sequence is Cauchy by the parallelogram law and
converges by Riesz–Fischer), and hence $L^2=M\oplus M^\perp$ for a closed subspace
$M$. Then the classical two-line argument: $M^\perp$ is the closure of
$\{g-g\circ T\}$ and $A_n$ kills it. `functional-analysis` re-proves the general
projection theorem and adds the agreement remark (§8 amendment 1b).
**Unique ergodicity** (**landmark**): for a continuous $T$ on a compact metric $X$,
$T$ has exactly one invariant Borel probability measure iff $A_nf\to\int f\,d\mu$
**uniformly** for every $f\in C(X)$; and **the irrational rotation is uniquely
ergodic**, proved directly. **Weyl's equidistribution theorem** (**landmark**): for
irrational $\alpha$ the sequence $(n\alpha \bmod 1)$ is equidistributed — obtained
from unique ergodicity applied to $\mathbf{1}_{[a,b)}$ through a continuous
sandwich, **deliberately not through the Fourier-analytic Weyl criterion**, which
belongs to `functional-analysis` and lands above (the item records the alternative
route and why it is not taken). **Borel's normal number theorem** (**landmark**):
$\lambda$-a.e. $x\in[0,1]$ is normal to base $2$, and to every base $b\ge2$
simultaneously — from Birkhoff applied to the doubling map (or the Bernoulli shift)
and $f=\mathbf{1}_{[0,1/2)}$, then a countable intersection over digit blocks and
bases. **The strong law for the Bernoulli shift**, stated concretely as the
frequency statement, which `probability-theory` cites for the i.i.d. case (§8
amendment 3d).

**FS.** Birkhoff's theorem gives convergence at every point. $A_nf\to\int f\,d\mu$
for every measure-preserving $T$ on a probability space. The limit in Birkhoff's
theorem is always constant. Von Neumann's theorem implies Birkhoff's theorem. Weyl
equidistribution holds for every $\alpha$. Every real number is normal. Birkhoff's
theorem holds for $f$ merely measurable.

**B page.** *Examples*: Borel's theorem read as "almost every real number has
asymptotic digit frequency $1/2$ in base $2$", with the exceptional set exhibited as
uncountable and null (the rationals are not the only failures, and this is the item
that keeps the statement honest); Weyl equidistribution for $\alpha=\sqrt2$ with
initial terms computed; $A_nf$ computed for the rational rotation, converging to a
**non-constant** limit — the visible face of non-ergodicity; Kac's formula recovered
from Birkhoff; the strong law for fair coin flips stated from the shift.
*Counterexamples*: a specific non-normal number (Champernowne's constant is normal —
use $0.101010\ldots$ in base $2$, or a number with digit frequency $1/3$), showing
the a.e. cannot be improved to everywhere; $A_nf$ failing to converge for a
non-integrable $f$; a non-ergodic system where the $L^2$ projection is computed
explicitly.

**Traps.** (i) Birkhoff's limit is **not** a constant unless $T$ is ergodic; the
non-ergodic statement is the one to prove, with the ergodic case as a corollary.
(ii) The maximal ergodic theorem's set is defined by $\sup_{n\ge1}S_nf>0$, strictly,
and with $S_n$ **not** normalised by $n$; the normalised version is a different (and
false) statement. (iii) Garsia's proof needs $f\in\mathcal{L}^1$ real-valued; the
complex case is by parts. (iv) Do not identify the limit as a "conditional
expectation" — that vocabulary belongs to `probability-theory` (§8 amendment 3f); the
characterising property is stated instead and is complete. (v) Unique ergodicity is a
statement about **all** invariant Borel probability measures; on a non-compact space
there may be none at all, and the hypothesis is compactness plus continuity.

**Generated items**: the computed $A_nf$ examples (`ex-`); the explicit non-normal
number (`ex-`, checkable).

**Forward references**: none.

---
