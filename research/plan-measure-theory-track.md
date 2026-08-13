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

**Sources obtained in full.** See §9 for the canonical-coverage harvest with
exact locators, and §9.0 for the honesty statement on what was obtained in full
versus in part.

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
| 31 | MT-20 | **a Radon measure** | outer regular on Borel sets, inner regular on **open** sets (Rudin/Folland) versus inner regular on all Borel sets of finite measure (Cohn): the two conventions differ, and they coincide on σ-compact spaces. MT-20 adopts one, names the other, and proves the coincidence theorem. Silent convention choice here is a real defect: the uniqueness clause of RMK is *false* without a regularity restriction, with a standard counterexample. |
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
set, is not Lebesgue measurable** (Sierpiński; proved from the tail $0$–$1$
behaviour plus Steinhaus, and it discharges half of the published
`rem-sierpinski-ultrafilter-not-measurable`). There is **no** translation-invariant
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
regression. (v) `rem-banach-tarski` belongs to `deferred-set-theory-beyond-choice`;
mention it in `external_refs`, never in `deps`.

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
