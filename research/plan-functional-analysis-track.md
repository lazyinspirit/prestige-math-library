# Functional analysis track — Banach and Hilbert spaces, operators, spectra, Fourier analysis, and distributions

Prose scaffold, owner-commissioned 2026-08-13 (run `subjects-01`, track
`functional-analysis`, wave 2).  Seam authority:
`research/subjects-01-SEAMS.md`.  This scaffold is designed to follow the last
measure-theory page, `the-ergodic-theorems-of-von-neumann-and-birkhoff-examples`.

> **STATUS: PROPOSED, NOT SPLICED.**  This commission writes prose only.  No
> entry of `research/plan-spec.json`, `items/`, or `library/` is changed here;
> no item is authored, proved, gated, or published.  Relative labels, not
> absolute orders, are authoritative for the proposed block.

This file is subordinate to `CLAUDE.md`, `SCHEMA.md`, and the seam contract.
It is authoritative only for FA-1 through FA-25 and their examples companions.

---

## 0. Summary for the orchestrator

**Placement.**  Append the block after measure theory's final companion,
`the-ergodic-theorems-of-von-neumann-and-birkhoff-examples`, in the order
FA-1, FA-1 examples, ..., FA-25, FA-25 examples.  Recompute absolute orders at
splice time.

**Pairs scaffolded.**  Twenty-five A/B pairs (fifty pages):

| label | A page id | mathematical spine |
|---|---|---|
| FA-1 | `normed-and-banach-spaces` | scalar conventions, completeness, series, completion |
| FA-2 | `bounded-linear-operators-and-quotient-spaces` | operator norm, extension from dense subspaces, products, quotients |
| FA-3 | `finite-dimensional-normed-spaces-and-riesz-lemma` | norm equivalence, local compactness, Riesz lemma, noncompact unit ball |
| FA-4 | `the-analytic-hahn-banach-theorem` | one-step extension, real and complex Hahn–Banach, dual norming |
| FA-5 | `geometric-hahn-banach-and-convex-separation` | gauges, separation, annihilators, closed-range/complement consequences |
| FA-6 | `the-baire-principles-of-functional-analysis` | uniform boundedness, open mapping, bounded inverse, closed graph |
| FA-7 | `dual-spaces-adjoint-operators-and-annihilators` | duality, transpose, closed range, bidual, quotient/subspace duality, concrete sequence duals |
| FA-8 | `weak-and-weak-star-topologies` | initial topologies, nets, boundedness, convex closure, operator topologies |
| FA-9 | `banach-alaoglu-goldstine-and-krein-milman` | weak-star compactness, metrizability, Goldstine, extreme points |
| FA-10 | `reflexivity-and-eberlein-smulian` | weak compactness criteria, Eberlein–Šmulian, Schur, James's theorem |
| FA-11 | `schauder-bases-approximation-and-banach-space-pathologies` | bases, AP, Enflo boundary, James space, Banach limits, $ba$ |
| FA-12 | `banach-valued-integration-and-the-radon-nikodym-property` | Bochner integration, vector measures, RNP, $c_0$ not a dual |
| FA-13 | `hilbert-space-geometry-and-riesz-representation` | parallelogram law, projection, orthogonal complements, Hilbert Riesz |
| FA-14 | `orthonormal-bases-parseval-and-fourier-series` | Bessel, Parseval, classification, trigonometric basis and convergence |
| FA-15 | `compact-operators-and-riesz-schauder-theory` | compactness, adjoints, Riesz–Schauder, Fredholm alternative and index |
| FA-16 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | compact spectral theorem, singular values, Schatten ideals, trace |
| FA-17 | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | resolvent, spectrum, spectral radius, Gelfand–Mazur, holomorphic calculus |
| FA-18 | `gelfand-theory-and-commutative-c-star-algebras` | characters, Gelfand transform, commutative Gelfand–Naimark, topology dictionaries |
| FA-19 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | positivity, square roots, continuous calculus, bounded normal spectral theorem |
| FA-20 | `spectral-measures-and-borel-functional-calculus` | PVM integration, Borel calculus, cyclic representations, multiplicity |
| FA-21 | `unbounded-self-adjoint-operators-and-stones-theorem` | domains, adjoints, Cayley transform, unbounded spectral theorem, unitary groups |
| FA-22 | `fourier-transform-convolution-and-approximate-identities` | $L^1$ transform, convolution, Riemann–Lebesgue, inversion, approximate identities |
| FA-23 | `schwartz-space-and-the-plancherel-theorem` | Schwartz topology, Fourier automorphism, Plancherel on $L^2$ |
| FA-24 | `distributions-test-functions-and-differentiation` | $\mathcal D$, $\mathcal D'$, order/support, differentiation, multiplication, convolution |
| FA-25 | `tempered-distributions-and-the-fourier-transform` | $\mathcal S'$, Fourier duality, polynomial operators, fundamental examples |

**Full texts obtained.**  The source harvest in §11 records three complete,
searchable graduate texts: Theo Bühler and Dietmar Salamon, *Functional
Analysis* (452 pp., author-hosted); Gerald Teschl, *Topics in Real and
Functional Analysis* (563 pp., complete 2017 manuscript); and Anthony W.
Knapp, *Advanced Real Analysis*, digital second edition (650 pp., legally
released by the author).  Complete MIT note sets by Andrew Lin/Casey Rodriguez
(18.102, 125 pp.) and Semyon Dyatlov (18.155, 266 pp.), Dana P. Williams's
spectral-theorem notes (39 pp.), and Ali Shirbisheh's *Lectures on
$C^*$-algebras*, together with Masoud Khalkhali's *Lectures on
Noncommutative Geometry*, are independent open treatments.  Exact ranges,
headings, and dispositions are in §11; primary papers are listed there for
choice strength and non-elementary boundary results.

**Seams consumed.**  The published seams are real normed spaces from
`rn-as-a-normed-space`, complete-metric Baire from
`approximation-and-compactness-in-ck`, compact-Hausdorff Tychonoff and the
ultrafilter lemma from `compactness` and `nets-and-filters`, and the other
published topological and real-variable infrastructure named in §2.  The
binding predecessor seam is the **proposed, not yet spliced or authored**
measure-theory scaffold: this block reserves rather than re-mints scalar
$L^p$, density, convolution, and concrete duality at MT-14–MT-16; scalar
Radon–Nikodym and RMK at MT-13/MT-20; and the $L^2$ projection agreement at
MT-23.  Those page ids are not misreported as present library dependencies.

**Seams owed.**  PDE receives distributions, tempered distributions,
Plancherel, Hilbert Riesz, and the weak compactness machinery; by the binding
seam contract PDE, not this track, owns Lax–Milgram and Sobolev spaces.
Measure theory receives the abstract Banach-space and dual-space dictionaries
for its already-planned concrete $L^p$ results.  Topology receives the
recommendation that `deferred-functional-analysis` cease to be a permanent
catalogue once the splice is built, and receives the still-deferred $C_p$
selection-principle and Dugundji rows described in §10.

**Deferred catalogue discharge.**  Every one of the 33 ids currently listed on
`library/not-proved-here/deferred-functional-analysis.md` has a disposition in
§9.  Twenty-nine become proved items or non-load-bearing historical boundary
remarks in this block.  Nagata's $C_p$ theorem, Gerlits–Nagy, and linear
Dugundji extension remain deferred to topology for specific prerequisite
reasons; Enflo's construction remains a source-cited, `proved_here: false`
boundary item after the standard implication “basis $\Rightarrow$ AP” is
proved here.  No deferred remark is a dependency target.

**Choice headline.**  §8 is the item-level ledger.  In brief: elementary
normed/operator/Hilbert arguments are ZF when their input data are given;
the published Cauchy-sequence metric-completion implementation and several
standard sequential selection arguments are labelled $\mathsf{AC}_\omega$;
Hahn–Banach is labelled **HB**, with BPI as a sufficient but strictly stronger
principle; Banach–Alaoglu is labelled **BPI**; proofs through complete-metric
Baire are labelled **DC**; arbitrary maximal orthonormal bases and selected
maximal-ideal arguments are labelled **AC**; and the separable deterministic
versions are split off wherever their choice cost is lower.  The scaffold does
not infer converses from the cost of a standard proof.

**Unresolved non-authored dependencies.**  The measure-theory predecessor is a
finished prose scaffold but is absent from `research/plan-spec.json`.  Before
this block can be built, MT-2, MT-4, MT-7, MT-8, MT-10–MT-17, and MT-20 must be
authored at the exact page ids in §2; MT-23 is an orientation-only agreement
dependency.  The measure scaffold does not yet mint item ids, so the future
builder must replace each page/result citation with the ids actually authored
there.  The complex-analysis pages `complex-power-series-and-analytic-functions`,
`contour-integration`, `goursat-and-cauchys-theorem-in-a-convex-domain`,
`analyticity-liouville-and-morera`, and
`the-winding-number-and-the-global-cauchy-theorem` likewise all have
`items: []`; FA-17 must wait for the scalar power-series, contour, Cauchy,
Liouville, and winding-number inputs it names.  In topology,
`stone-weierstrass-general` also has `items: []`; FA-18's commutative
Gelfand–Naimark surjectivity must wait for its general complex self-adjoint
theorem.  PDE's future Lax–Milgram and Sobolev page ids remain unnamed
orientation-only references; no FA A item depends on them.

**Scope denials.**  Nonlinear functional analysis, general locally convex
space theory beyond the test-function spaces actually needed, operator
semigroups beyond Stone's one-parameter unitary-group theorem, index theory
beyond Fredholm operators, noncommutative representation theory of
$C^*$-algebras, harmonic analysis beyond the Fourier transform's foundational
theory, Sobolev/PDE theory, and specialist $C_p$ selection principles are not
minted.  §3 gives a result-specific reason for each denial.

**Blockers.**  None.  The requested Opus 5 subagent runtime was not available
to this lane, so no model was silently substituted; all research and all prose
were produced in the assigned lane.

---

## 1. Why this track exists

The published library has thousands of items but no definition of a Banach or
Hilbert space.  Its nearest analytic page, `rn-as-a-normed-space`, defines a
norm only on a **real** vector space (`def-norm-and-normed-space`), proves the
Euclidean Cauchy–Schwarz inequality, introduces the $p$-norms on
$\mathbb R^n$, and proves finite-dimensional norm equivalence and completeness.
Those are genuine prerequisites, not a general functional-analysis theory.

`approximation-and-compactness-in-ck` already proves three concrete results
that this track must not disguise as abstract novelties:

- `thm-arzela-ascoli-for-real-ck`;
- `thm-real-stone-weierstrass-for-compact-metric-spaces`;
- `thm-baire-category-for-complete-metric-spaces`.

The last is the Baire theorem cited by FA-6.  The separately published
`thm-baire-category-r` remains the choice-free special case on the real line.
The planned pages `complete-metrizability-and-baire`, `ascoli-arzela`, and
`stone-weierstrass-general` have empty `items` arrays and therefore supply
nothing yet.

The finished **prose scaffold** for measure theory assigns the concrete spaces
rather than the abstract language.  MT-14 is to define scalar $L^p$ as an
a.e.-quotient and prove Riesz–Fischer; MT-15 is to prove density and
convolution; MT-16 is to prove the concrete duality theorem; MT-20 is to prove
Riesz–Markov–Kakutani; and MT-23 is to prove the $L^2$ projection step in the
ergodic theorem.  None of those pages is yet present in the live plan.  Once
they are authored, FA-1 says that the resulting spaces are Banach spaces, FA-7
expresses MT-16 in dual-space language, FA-13 proves the general projection
theorem and agrees with MT-23, and FA-22 reuses—not redefines—MT-15's
convolution.

The topology track supplies initial topologies, products, nets and filters,
compact Hausdorff spaces, and choice-sensitive compactness.  In particular
FA-9 routes Alaoglu through the already-published compact-Hausdorff Tychonoff
theorem from the ultrafilter lemma, rather than through the stronger
full-choice Tychonoff theorem.  That is what preserves the exact BPI cost.

The purpose of this block is therefore not to rename familiar examples.  It is
to build the common abstract machinery, prove why every construction is
well-defined, and then return that machinery to $L^p$, $C(K)$, Fourier
analysis, spectral theory, and distributions.

---

## 2. Exact inherited boundary

The future builder must resolve every `requires` below to the actual item ids
in the named pages.  A page with an empty `items` array is never counted as an
available dependency.  The first six rows below are verified published pages.
Every MT row is a reservation in the finished measure-theory prose scaffold,
not present library content: those pages are absent from the live plan and
must be authored before the load-bearing FA consumer.  Their prose scaffold
does not yet assign final item ids, so this lane cites the exact reserved page
and named result without inventing another track's ids.

| inherited or reserved page | content and current status |
|---|---|
| `rn-as-a-normed-space` | `def-norm-and-normed-space`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-p-norms-on-rn`, `def-equivalent-norms`, `thm-all-norms-on-rn-are-equivalent`, `thm-componentwise-convergence-and-completeness` |
| `approximation-and-compactness-in-ck` | the three theorems listed in §1, completeness of the concrete $C^k$ setting, and the concrete compactness/approximation examples |
| `cantor-set-baire-and-measure-zero` | `thm-baire-category-r` and its explicit choice-free boundary remark |
| `compactness` | compact Hausdorff machinery, `thm-tychonoff`, and the published choice ledgers for full AC and DC |
| `nets-and-filters` | `def-filter`, `def-ultrafilter`, net/filter convergence, and compact-Hausdorff Tychonoff from the ultrafilter lemma |
| `function-space-topologies` | product/pointwise and compact-open topologies; used only for agreement remarks, not as a surrogate locally convex theory |
| `measures-and-their-basic-properties` (MT-2) | **planned predecessor**: measures, null sets, countable additivity, and continuity; used by FA-12's vector-measure comparison |
| `lebesgue-measure-on-euclidean-space` (MT-4) | **planned predecessor**: Lebesgue measure and linear change of variables; used by Euclidean Fourier scaling |
| `measurable-functions-and-simple-approximation` (MT-7) | **planned predecessor**: scalar measurability and simple approximation; used before strong measurability in FA-12 |
| `the-lebesgue-integral-and-the-convergence-theorems` (MT-8) | **planned predecessor**: scalar integration, MCT, Fatou, and DCT; used throughout Bochner, Fourier, and distribution theory |
| `modes-of-convergence-egorov-and-lusin` (MT-10) | **planned predecessor**: uniform integrability and Vitali convergence; used by FA-12's Dunford–Pettis theorem |
| `product-measures-and-the-fubini-tonelli-theorems` (MT-11) | **planned predecessor**: product measures, Tonelli, and Fubini; used for convolution, kernels, PVM scalarization, and Fourier identities |
| `signed-and-complex-measures-hahn-and-jordan` (MT-12) | **planned predecessor**: signed/complex measures and variation; used for vector measures, Fourier–Stieltjes transforms, and spectral measures |
| `the-radon-nikodym-theorem-and-lebesgue-decomposition` (MT-13) | **planned predecessor**: scalar RN and measure decomposition; FA-12 builds only the genuinely vector-valued layer |
| `the-lp-spaces-holder-minkowski-and-riesz-fischer` (MT-14) | **planned predecessor**: all scalar $L^p$ definitions, Hölder, Minkowski, quotient well-definedness, and completeness |
| `density-separability-and-convolution-in-lp` (MT-15) | **planned predecessor**: scalar convolution, translations, approximate identities/mollifiers, density and separability |
| `the-duality-of-lp-and-lq` (MT-16) | **planned predecessor**: concrete representation of bounded functionals on $L^p$ for the stated ranges and its $p=\infty$ boundary |
| `the-maximal-function-and-lebesgue-differentiation` (MT-17) | **planned predecessor**: Lebesgue points and differentiation; used by FA-22's pointwise summability inversion statement |
| `radon-measures-and-the-riesz-markov-kakutani-theorem` (MT-20) | **planned predecessor**: positive/complex RMK, used in spectral measures and Banach–Stone |
| `the-ergodic-theorems-of-von-neumann-and-birkhoff` (MT-23) | **planned, orientation only**: the concrete $L^2$ projection/decomposition argument; FA-13 later records agreement |

Complex scalar algebra, completeness of $\mathbb C$, and the complex
exponential come from published algebra/analysis pages.  The scalar complex
power-series, contour-integration, Cauchy, Liouville, and winding-number pages
named in §0 are planned with empty item arrays; they must be authored before
FA-17.  The builder must name the actual ids after verifying their nonempty
`items` arrays.

---

## 3. Deliberate scope denials

| material not minted | reason and disposition |
|---|---|
| scalar $L^p$, its completeness, density, convolution, and duality | Exclusively measure theory's MT-14–MT-16.  This block adds abstract dictionary items only. |
| scalar Radon–Nikodym, Radon measures, RMK | Exclusively MT-13 and MT-20.  FA-12's RNP is a Banach-space property of vector measures and explicitly cites the scalar theorem. |
| Baire category theorem | Already published for complete metric spaces; FA-6 is a consumer. |
| Ascoli–Arzelà and Stone–Weierstrass | Concrete versions are published and general versions belong to topology.  They are cited where operator compactness or Gelfand theory needs them. |
| Lax–Milgram and Sobolev spaces | The seam contract assigns weak solutions, Sobolev spaces, bounded/coercive sesquilinear-form vocabulary, and Lax–Milgram to PDE.  FA-13 supplies the Hilbert Riesz theorem that PDE may cite, but does not state Lax–Milgram or pre-empt PDE's form definitions. |
| nonlinear functional analysis | Mapping degree, fixed-point theory, monotone operators, and inverse-function theory in Banach spaces form another track; they are not prerequisites of the commissioned linear theory. |
| general locally convex spaces | Only the initial locally convex topologies needed for weak/weak-star theory and the concrete LF/Fréchet test-function spaces are built.  Barrelled, bornological, nuclear, Montel, and general dual-pair theory are a separate subject. |
| Hille–Yosida, analytic semigroups, and general $C_0$-semigroup theory | FA-21 includes Stone because the remit names it.  General semigroup generation belongs with evolution equations and is not needed for Stone's unitary theorem. |
| unbounded normal operators beyond self-adjoint spectral theory | The remit asks for unbounded self-adjoint operators; the normal case adds domain-commutation subtleties without supporting a downstream seam. |
| noncommutative Gelfand–Naimark representation | The remit specifies commutative $C^*$-algebras.  Faithful representations of arbitrary $C^*$-algebras require positive functionals, GNS, and representation theory and are not used later here. |
| general harmonic analysis | Hausdorff–Young, interpolation, multipliers, singular integrals, wavelets, and locally compact groups lie beyond the foundational Fourier/distribution remit. |
| $C_p(X)$ selection-principle theory | Nagata and Gerlits–Nagy require a sustained theory of Tychonoff spaces, $\gamma$-covers, Fréchet–Urysohn spaces, and pointwise function spaces.  They remain catalogue items owed to topology; neither is a theorem of normed-space functional analysis. |
| linear Dugundji extension | Its proof is a paracompactness/partition-of-unity construction in locally convex targets and has a distinct choice cost.  It remains owed to topology rather than being mislabeled Hahn–Banach. |
| Enflo's construction | FA-11 proves AP vocabulary and `Schauder basis => AP`; the construction of the counterexample is retained as a primary-source boundary remark, never a dependency.  Reproducing its finite-dimensional combinatorial construction would be a separate specialist monograph-sized branch. |

---

## 4. Page and provenance conventions

Every A page is proof-first and capped below sixty mathematical items.  Its B
companion contains examples, counterexamples, computations, and boundary
remarks and is a dependency leaf.  No A item has a B-page dependency.

At build time each A page receives exactly two nonempty summary paragraphs,
each under 150 words: the first names only the declared, already-authored
dependencies and the mathematical background they supply; the second names
the page's definitions and principal theorems in their logical order.  The
item spine and `Requires` paragraph in each pair below are the controlled input
for those summaries.  B pages receive no authored summary body.  The builder
must not insert counts, self-ranking, unsupported reading-order claims, or a
survey of unrelated pages.

The compact provenance code used in every pair is:

- **L/NA** — literature-derived statement; proof not applicable (definitions
  and convention remarks);
- **L/L** — literature-derived statement and literature-derived proof plan;
- **L/NS** — literature-derived statement; proof deliberately not supplied,
  allowed only for a non-load-bearing historical/boundary remark.

Unless an item row says otherwise, every `def-` row is L/NA, every
`lem-`/`prop-`/`thm-`/`cor-` row is L/L, and every worked `ex-`/`cex-` row is
L/L.  Thus provenance is planned for every item without repeating the same
three words hundreds of times.  There are **no AI-generated mathematical
statements** in this scaffold.  A future build may alter exposition, but any
statement change must be marked `ai-altered`, re-sourced, and checked for
counterexamples.  No item marked L/NS may enter `deps` or `justified_by`.

All complex Hilbert spaces use an inner product linear in the **first**
variable and conjugate-linear in the second, matching the existing deferred
Hilbert Riesz statement.  Sources using the opposite convention are translated
formula by formula; §11.1 records the disagreement.  Fourier analysis uses
`\widehat f(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi i x\cdot\xi}\,dx`; this makes
Plancherel unitary without a normalization constant and is held fixed through
$\mathcal S'$.  `B_X` means the closed unit ball unless “open” is written.

---

## 5. The A/B pairs

### FA-1 — Normed and Banach spaces

**A page:** `normed-and-banach-spaces`

**Requires:** `rn-as-a-normed-space`; `def-metric-completion`,
`thm-metric-completion-exists`, and `thm-metric-completion-unique`, together
with the published metric-space definitions of Cauchy sequence, completeness,
and dense subset; planned MT-14 only for the agreement item about scalar
$L^p$.

**Source backing read:** Bühler–Salamon §§1.1.1 and 1.2.1, pp. 6–24
(*Banach Spaces*; *Bounded Linear Operators*); Teschl §§1.2, 1.4, pp. 7–24
(*The Banach Space of Continuous Functions*; *Completeness*); MIT 18.102
notes, lectures of 16–23 February, pp. 1–17 (normed spaces, Banach spaces,
examples, completion).  These are independent treatments; exact heading
dispositions are in §11.

Items, in dependency order:

1. `rem-real-and-complex-normed-space-convention` (remark, L/NA) — reuse `def-norm-and-normed-space` verbatim over $\mathbb R$ and state that the complex version changes only absolute homogeneity.
2. `def-banach-space` (definition) — a normed space complete for its norm-induced metric.
3. `lem-reverse-triangle-inequality-in-a-normed-space` (lemma) — $|\|x\|-\|y\||\leq\|x-y\|$, hence the norm is $1$-Lipschitz.
4. `lem-vector-operations-are-continuous-in-a-normed-space` (lemma) — addition and scalar multiplication are jointly continuous.
5. `def-linear-isometry-and-isometric-isomorphism` (definition) — distinguish an isometric embedding from a surjective isometry.
6. `def-normed-subspace` (definition) — a linear subspace with the restricted norm.
7. `lem-complete-subspace-is-closed` (lemma) — a complete subspace of a normed space is closed; under sequential completeness and topological closure, the standard approximating-sequence proof is labelled $\mathsf{AC}_\omega$.
8. `lem-closed-subspace-of-a-banach-space-is-banach` (lemma) — close the converse under completeness of the ambient space.
9. `def-product-norms-on-finitely-many-normed-spaces` (definition) — max, sum, and Euclidean product norms.
10. `lem-finite-product-norms-are-equivalent` (lemma) — prove the explicit inequalities, not by finite-dimensional norm equivalence.
11. `thm-finite-products-of-banach-spaces-are-banach` (theorem) — coordinatewise Cauchy convergence.
12. `def-series-and-absolute-convergence-in-a-normed-space` (definition) — convergence is convergence of partial sums; absolute convergence is convergence of $\sum\|x_n\|$.
13. `lem-absolutely-convergent-series-is-cauchy` (lemma) — tail estimate for partial sums.
14. `thm-banach-series-criterion` (theorem) — a normed space is complete iff every absolutely convergent series converges.
15. `def-completion-of-a-normed-space` (definition) — a Banach space together with a dense linear isometry from the original space.
16. `thm-metric-completion-carries-a-unique-banach-space-structure` (theorem) — the published metric completion of a normed space carries unique continuous vector operations extending those of the dense original copy, and its metric is induced by the extended norm.
17. `lem-completion-operations-are-well-defined` (lemma) — in the published Cauchy-class model, equivalent representatives yield the same sum, scalar multiple, and limiting norm.
18. `thm-completion-universal-property-for-bounded-linear-maps` (theorem) — every bounded map into a Banach space extends uniquely across the completion with unchanged norm.
19. `cor-normed-space-completions-are-uniquely-linearly-isometric` (corollary) — the published metric-completion isometry fixes the dense original copy and is automatically linear.
20. `rem-lp-spaces-are-banach-spaces` (remark, L/NA) — name MT-14's Riesz–Fischer theorem as the concrete instance; do not repeat its quotient or proof.

**Hard proof and well-definedness plan.**  Do not rebuild the underlying metric
completion.  Item 16 equips `thm-metric-completion-exists`'s published
Cauchy-class model with vector operations.  Equivalence of representatives is
checked before addition and scalar multiplication descend, and
$\|[x_n]\|=\lim\|x_n\|$ is proved to exist and be representative-independent.
The published construction spends $\mathsf{AC}_\omega$ exactly when it chooses
one approximating point for each member of a Cauchy sequence in the completion;
the algebraic descent adds no choice.  Thus the inherited implementation is an
$\mathsf{AC}_\omega$ construction, not a ZF theorem as currently formalized.
The ZF uniform/minimal-Cauchy-filter completion is a legitimate alternative
only if a future build explicitly changes construction and reconciles its
notion of completeness with the library's sequential definition.

**B page:** `normed-and-banach-spaces-examples`

1. `ex-finite-sequences-c00-with-standard-norms` — $c_{00}$ is normed and incomplete; exhibit its different completions.
2. `ex-c0-is-a-banach-space` — direct coordinate proof for the supremum norm.
3. `ex-ell-infinity-is-a-banach-space` — uniform limits of bounded sequences.
4. `ex-cb-of-a-space-is-banach` — bounded continuous functions with $\|\cdot\|_\infty$.
5. `ex-c-of-a-compact-space-is-banach` — compactness converts boundedness to an automatic property.
6. `ex-polynomials-are-not-complete-in-the-supremum-norm` — identify the completion using the published real Stone–Weierstrass theorem only in its available compact-metric setting.
7. `ex-lp-banach-space-dictionary` — cite MT-14 for $L^p$ and MT-15 for separability rather than reproducing either.
8. `cex-an-incomplete-subspace-need-not-be-closed` — $c_{00}\subset c_0$.
9. `cex-equivalent-metrics-need-not-come-from-equivalent-norms` — guard the linear-homogeneity hypothesis.

### FA-2 — Bounded operators and quotient spaces

**A page:** `bounded-linear-operators-and-quotient-spaces`

**Requires:** FA-1; the published quotient-set universal property; finite
products from FA-1.

**Source backing read:** Bühler–Salamon §§1.2.1, 1.2.3, 1.3.1, pp. 22–32
(*Bounded Linear Operators*; *Quotient and Product Spaces*; *The Banach Space
of Bounded Linear Operators*); Teschl §§1.6–1.7, pp. 27–36 (*Bounded
operators*; *Sums and quotients of Banach spaces*); MIT 18.102, pp. 18–31
(bounded maps, operator norm, quotients).

Items:

1. `def-bounded-linear-operator` (definition) — a linear $T:X\to Y$ satisfying $\|Tx\|\le C\|x\|$.
2. `thm-bounded-linear-operator-equivalences` (theorem) — boundedness, continuity at $0$, continuity everywhere, and Lipschitz continuity are equivalent.
3. `def-operator-norm` (definition) — the least bound and its equal unit-sphere/unit-ball suprema, with the zero-space convention stated.
4. `lem-operator-norm-is-a-norm` (lemma) — definiteness, homogeneity, and triangle inequality on bounded operators.
5. `lem-composition-operator-norm-inequality` (lemma) — $\|ST\|\le\|S\|\|T\|$.
6. `def-space-of-bounded-linear-operators` (definition) — $\mathcal B(X,Y)$ and $\mathcal B(X)$.
7. `thm-bounded-operator-space-is-banach` (theorem) — if $Y$ is Banach, then $\mathcal B(X,Y)$ is Banach; no completeness or nontriviality of $X$ is assumed, and no converse is bundled into the statement.
8. `thm-extension-of-a-bounded-map-from-a-dense-subspace` (theorem) — a bounded map from dense $D\subset X$ to Banach $Y$ extends uniquely with the same norm; the selected proof chooses one approximating sequence for each fixed point and is labelled $\mathsf{AC}_\omega$.
9. `def-topological-isomorphism-of-normed-spaces` (definition) — a bounded linear bijection with bounded inverse; no later theorem is smuggled into the definition.
10. `def-bounded-bilinear-map` (definition) — $\|B(x,y)\|\le C\|x\|\|y\|$.
11. `thm-bounded-bilinear-map-equivalences` (theorem) — boundedness is equivalent to joint continuity, with separate continuity deferred to the Baire page.
12. `def-quotient-vector-space-coset-notation` (definition) — cite the published algebraic quotient and fix $q:X\to X/M$.
13. `def-quotient-seminorm` (definition) — $\|x+M\|_{X/M}=\inf_{m\in M}\|x+m\|=\operatorname{dist}(x,M)$.
14. `lem-quotient-seminorm-is-representative-independent` (lemma) — translating $M$ leaves the infimum unchanged.
15. `lem-quotient-seminorm-triangle-inequality` (lemma) — use approximate minimisers; do not assume best approximations exist.
16. `thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed` (theorem) — its null space is $\overline M/M$.
17. `thm-quotient-map-is-open` (theorem) — the image of an open norm ball contains the corresponding quotient ball.
18. `thm-quotient-of-banach-by-closed-subspace-is-banach` (theorem) — lift a rapidly Cauchy subsequence with summable errors.
19. `thm-universal-property-of-the-normed-quotient` (theorem) — bounded $T$ vanishing on $M$ factors uniquely through $X/M$, and the factor norm equals $\|T\|$ when $q$ is the quotient map.
20. `def-complemented-subspace` (definition) — a closed $M$ for which $X=M\oplus N$ with bounded coordinate projections.
21. `thm-complemented-subspace-iff-range-of-a-bounded-projection` (theorem) — $M=\operatorname{ran}P$, $P^2=P$.

**Proof obligations.**  The quotient norm is not defined by “choose a nearest
point”; a closed subspace need not be proximinal.  Every inequality uses an
$\varepsilon$-minimiser.  In the completeness proof, take a subsequence
$z_{n_k}$ with quotient increments $<2^{-k}$, choose lifts of each increment
with norm $<2^{-k}+2^{-2k}$, sum them in $X$, and recover the original Cauchy
sequence.  The factorization theorem proves representative independence before
boundedness.  The finite-dimensional-complement theorem is deliberately not
placed on this page: FA-5 proves it only after the required Hahn–Banach
coordinate extensions exist.

**B page:** `bounded-linear-operators-and-quotient-spaces-examples`

1. `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`.
2. `ex-shift-operators-on-classical-sequence-spaces` — compute both norms exactly.
3. `ex-evaluation-functional-on-c-of-k` — norm one and later weak-star meaning.
4. `ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm`.
5. `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm` — distinguish the quotient norm from an arbitrary ambient norm on the range.
6. `ex-c-mod-constants-and-oscillation-norm` — compute the quotient norm as half the oscillation in the real case.
7. `cex-a-closed-subspace-need-not-have-a-best-approximation` — source-backed nonproximinal example, included only after its construction is checked.
8. `cex-an-algebraic-complement-need-not-be-topological` — an unbounded projection built from a Hamel basis, explicitly tagged AC and non-load-bearing.

### FA-3 — Finite-dimensional spaces, Riesz's lemma, and metric embeddings

**A page:** `finite-dimensional-normed-spaces-and-riesz-lemma`

**Requires:** FA-1, FA-2; `rn-as-a-normed-space`; published compactness in
Euclidean space and the finite-product results.  Hahn–Banach is not required.

**Source backing read:** Bühler–Salamon §§1.1.2, 1.2.2, pp. 9–29
(*Compact Sets*; *Finite-Dimensional Normed Vector Spaces*); Teschl §§1.5 and
4.2's Riesz-lemma consequences, pp. 24–27 and 111–119; MIT 18.102, pp. 7–18
(finite dimension and failure of Heine–Borel).

Items:

1. `thm-coordinate-map-for-a-finite-dimensional-normed-space` (theorem) — every algebraic basis induces a topological isomorphism with $\mathbb K^n$.
2. `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent` (theorem) — complex extension and agreement with the published real theorem.
3. `cor-finite-dimensional-normed-spaces-are-banach` (corollary).
4. `cor-finite-dimensional-subspaces-are-closed` (corollary).
5. `cor-linear-maps-with-finite-dimensional-domain-are-bounded` (corollary).
6. `thm-locally-compact-normed-space-iff-finite-dimensional` (theorem) — the reverse direction will use Riesz's lemma.
7. `lem-riesz-lemma` (lemma) — for proper closed $M\subset X$ and $0<\alpha<1$, find $x$ with $\|x\|=1$ and $\operatorname{dist}(x,M)>\alpha$.
8. `lem-dependent-choice-riesz-separated-unit-sequence` (lemma) — under DC, recursively obtain $\|x_j-x_k\|>\alpha$; this useful sequential witness is not used to raise the cost of item 9.
9. `thm-closed-unit-ball-compact-iff-finite-dimensional` (theorem) — the infinite-dimensional direction is ZF: a finite $\alpha$-net supplied by assumed compactness has finite-dimensional span, contradicted by one application of Riesz's lemma.
10. `cor-infinite-dimensional-closed-unit-ball-is-not-compact` (corollary) — discharge the already-listed DEFERRED §0 result without reusing a deferred id.
11. `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact` (corollary) — later cited by FA-15.
12. `thm-banach-space-no-countably-infinite-hamel-basis` (theorem) — a countable Hamel basis gives an explicit countable dense rational span, so use the ZF separable-complete Baire theorem and audit the exact formulation against Howard–Tachtsis.
13. `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` (remark, L/NA) — record why invoking the unrestricted DC-equivalent Baire theorem would be foundationally non-sharp here.
14. `def-kuratowski-distance-map` (definition) — for a nonempty metric space $(M,d)$ and basepoint $o$, set $K_o(x)=[d(x,\cdot)-d(o,\cdot)]\in C_b(M)$; boundedness follows from $|d(x,z)-d(o,z)|\le d(x,o)$ and does not require $M$ itself to be bounded.
15. `thm-kuratowski-distance-map-is-an-isometry` (theorem) — prove both triangle-inequality bounds and explain why subtracting the basepoint distance is essential on an unbounded space.
16. `thm-kuratowski-wojdyslawski-embedding` (theorem) — every bounded metric space embeds isometrically as a subset closed in its algebraic convex hull in a Banach space; consequently every metrizable space embeds homeomorphically as a closed subset of a convex subset after replacing its metric by the canonical bounded equivalent metric $d/(1+d)$.

**Hard proof plan.**  Riesz's lemma chooses $y\notin M$, sets
$d=\operatorname{dist}(y,M)>0$ using closedness, and normalizes $y-m_0$ for an
approximate—not necessarily attaining—minimiser.  The separated sequence uses
dependent recursion only on the already constructed finite span; it is an
optional DC witness.  Noncompactness instead argues from a finite net furnished
by assumed compactness and is ZF.  For Kuratowski–Wojdysławski, item 15 first
proves the based isometry for an arbitrary metric.  Item 16 then switches
explicitly to a bounded metric: Wojdysławski's argument proves that the
Kuratowski image is closed **relative to its algebraic convex hull**, not in
the Banach space or in the closed convex hull.  The all-metrizable conclusion
is therefore a topological embedding for $d/(1+d)$, not an isometry for the
original unbounded metric.

**B page:** `finite-dimensional-normed-spaces-and-riesz-lemma-examples`

1. `ex-explicit-equivalence-constants-for-standard-norms-on-kn`.
2. `ex-an-infinite-separated-subset-of-the-unit-sphere`.
3. `cex-heine-borel-fails-in-ell-two` — the standard unit vectors.
4. `cex-polynomial-space-admits-no-complete-norm` — countable Hamel basis.
5. `ex-kuratowski-embedding-of-a-finite-metric-space` — compute the coordinates and sup distances.
6. `rem-discontinuous-functionals-on-banach-spaces-and-choice` (remark, L/NS) — exact Wright/Garnir/Howard–Tachtsis consistency boundary; never a dependency.
7. `ex-choice-free-discontinuous-functional-on-c00` — $f(x)=\sum n x_n$ in the supremum norm, with finite support making the formula ZF.

### FA-4 — The analytic Hahn–Banach theorem

**A page:** `the-analytic-hahn-banach-theorem`

**Requires:** FA-1–FA-3; the published order/Zorn/ultrafilter-choice pages for
the logical ledger, not as a silent proof assumption.

**Source backing read:** Bühler–Salamon §2.3.1, pp. 73–76 (*The Hahn–Banach
Theorem*, including the one-step extension and complex normed form); Teschl
§4.2, pp. 111–119 (*The Hahn–Banach theorem and its consequences*); Rudin's
real-to-complex argument as reproduced in the two treatments.  Choice strength
is checked against Luxemburg (1962), Pincus (1974), Foreman–Wehrung (1991),
and Pawlikowski (1991), not against an encyclopedia summary.

Items:

1. `def-sublinear-functional` (definition) — subadditive and positively homogeneous over a real vector space.
2. `lem-hahn-banach-one-step-extension` (lemma) — the admissible values on $M+\mathbb Rx_0$ form a nonempty interval.
3. `lem-union-of-a-chain-of-dominated-extensions` (lemma) — the union is a well-defined dominated linear functional.
4. `thm-hahn-banach-dominated-extension` (theorem) — real algebraic form, labelled HB rather than “ZF”.
5. `thm-hahn-banach-norm-preserving-extension` (theorem) — bounded real functional on a subspace extends with the same norm.
6. `lem-real-part-determines-a-complex-linear-functional` (lemma) — $f(x)=u(x)-i\,u(ix)$ under the fixed first-variable convention.
7. `thm-complex-hahn-banach-norm-preserving-extension` (theorem) — extend the real part and reconstruct the complex functional.
8. `thm-dual-norms-every-vector` (theorem) — for $x\ne0$ find $f$ with $\|f\|=1$ and $f(x)=\|x\|$.
9. `cor-dual-separates-points` (corollary).
10. `cor-norm-recovered-from-the-dual-unit-ball` (corollary) — $\|x\|=\sup_{\|f\|\le1}|f(x)|$.
11. `thm-norm-preserving-extension-from-any-subspace` (theorem) — boundedness on a nonclosed subspace is sufficient; closure is not added.
12. `rem-choice-strength-of-hahn-banach` (remark, L/NS) — BPI implies HB, HB does not imply BPI (relative consistency), HB is strictly weaker than AC if ZF is consistent, and HB already implies a nonmeasurable set and Banach–Tarski.

**Proof and fidelity obligations.**  The one-step inequalities are written with
their quantifiers: for $y,z\in M$, admissible $c$ satisfies
$f(y)-p(y-x_0)\le c\le p(z+x_0)-f(z)$ after the chosen parametrization, and
sublinearity proves every left endpoint is below every right endpoint.  The
maximal-extension proof is one implementation and costs AC through Zorn; the
theorem's ledger separately records the sharper BPI upper bound through
Luxemburg and the strict weakness established by Pincus.  The file never says
HB is equivalent to BPI.

**B page:** `the-analytic-hahn-banach-theorem-examples`

1. `ex-norming-functionals-in-lp-from-the-measure-duality-page` — cite MT-16 and compare the abstract existence to the concrete formula.
2. `ex-many-extensions-from-a-codimension-one-subspace` — compute the admissible interval.
3. `ex-banach-limit-from-hahn-banach` — construct a positive shift-invariant extension of limit using the Cesàro limsup sublinear functional.
4. `lem-banach-limit-properties` — positivity, norm one, shift invariance, and liminf/limsup bounds.
5. `cex-hahn-banach-extension-need-not-be-unique`.
6. `rem-hahn-banach-open-choice-questions` (remark, L/NS) — whether HB yields a Hamel basis of $\mathbb R/\mathbb Q$ or a discontinuous additive function remains unasserted.

### FA-5 — Geometric Hahn–Banach and convex separation

**A page:** `geometric-hahn-banach-and-convex-separation`

**Requires:** FA-2 and FA-4; published elementary convexity.

**Source backing read:** Bühler–Salamon §§2.3.2–2.3.5, pp. 76–87 (*Positive
Linear Functionals*; *Separation of Convex Sets*; *The Closure of a Linear
Subspace*; *Complemented Subspaces*); Teschl §5.1, pp. 137–141 (*The geometric
Hahn–Banach theorem*); Knapp ch. IV §5, pp. 125–128 (*Linear Functionals and
Convex Sets*).

Items:

1. `def-absorbing-balanced-and-absolutely-convex-set` (definition).
2. `def-minkowski-functional` (definition) — $p_C(x)=\inf\{t>0:x\in tC\}$ for an absorbing set.
3. `lem-minkowski-functional-is-sublinear` (lemma) — for absorbing convex $C$.
4. `lem-balanced-gauge-is-a-seminorm` (lemma) — absolute convexity gives scalar homogeneity.
5. `lem-open-convex-set-recovered-from-its-gauge` (lemma) — after translating to contain $0$, $C=\{p_C<1\}$; prove both inclusions.
6. `def-weak-and-strict-separation` (definition) — state the real-part convention over $\mathbb C$.
7. `thm-separation-of-an-open-convex-set-and-a-point` (theorem) — nonzero continuous functional strictly separates the point from the open set.
8. `thm-separation-of-disjoint-convex-sets-one-open` (theorem).
9. `thm-strong-separation-of-closed-and-compact-convex-sets` (theorem) — positive gap when one set is compact and the other closed.
10. `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces` (corollary).
11. `thm-geometric-hahn-banach-for-subspaces` (theorem) — $x\notin\overline M$ admits $f$ vanishing on $M$ with $f(x)=1$.
12. `cor-annihilator-detects-closure` (corollary) — $\overline M=\bigcap_{f\in M^\perp}\ker f$.
13. `cor-finite-dimensional-subspaces-are-complemented` (corollary) — extend coordinate functionals and build a bounded projection; this is the resolved placement of the theorem deliberately withheld from FA-2.
14. `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals` (theorem).
15. `thm-mazur-weak-and-norm-closure-of-convex-sets` (theorem) — later restated after weak topology is defined, with this separation proof as its justification.

**Well-definedness plan.**  A gauge is finite only because its set is
absorbing; it is not a norm without balancedness and definiteness.  Translation
of a convex set is performed before the gauge is formed.  Complex separation
uses the real part of a complex functional obtained from the real theorem;
the statement does not accidentally order complex numbers.  The projection
onto a finite-dimensional subspace is independent of coordinate expression
because the chosen algebraic basis is fixed and its coordinate functionals are
unique.

**B page:** `geometric-hahn-banach-and-convex-separation-examples`

1. `ex-gauges-of-norm-balls-and-ellipsoids`.
2. `cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm`.
3. `cex-two-closed-convex-sets-need-not-be-strongly-separated` — zero distance without intersection.
4. `ex-distance-to-a-subspace-via-annihilating-functionals` — derive $\operatorname{dist}(x,M)=\sup\{|f(x)|:f|_M=0,\|f\|\le1\}$.
5. `ex-a-closed-uncomplemented-subspace` — source-backed classical example, placed only after the proof does not rely on unbuilt Banach-space geometry.
6. `rem-two-results-called-mazurs-lemma` (remark, L/NA) — distinguish convex weak closure from the basic-sequence lemma.

### FA-6 — The Baire principles of functional analysis

**A page:** `the-baire-principles-of-functional-analysis`

**Requires:** FA-1 and FA-2;
`thm-baire-category-for-complete-metric-spaces` from
`approximation-and-compactness-in-ck`.  FA-6 cites that theorem and never
re-proves it.

**Source backing read:** Bühler–Salamon §§2.1–2.2, pp. 58–70 (*Uniform
Boundedness*; *The Open Mapping Theorem*; *The Closed Graph Theorem*;
*Closeable Operators*); Teschl §4.1, pp. 101–111 (*The Baire theorem and its
consequences*); Sokal, “A really simple elementary proof of the uniform
boundedness theorem,” pp. 1–3, for the Baire-free UBP route.

Items:

1. `thm-uniform-boundedness-principle` (theorem) — a pointwise bounded family in $\mathcal B(X,Y)$ is norm bounded when $X$ is Banach and $Y$ is normed.
2. `cor-pointwise-limit-of-bounded-operators-is-bounded` (corollary) — if $T_n\in\mathcal B(X,Y)$, $X$ is Banach, $Y$ is normed, and $T_nx\to Tx$ in $Y$ for every $x$, then $T\in\mathcal B(X,Y)$ and $\|T\|\le\liminf_n\|T_n\|$; completeness of $Y$ is not added when the pointwise limits are already given in $Y$.
3. `thm-sokal-gliding-hump-uniform-boundedness` (theorem) — an independent constructive proof of UBP with its exact countable-choice bookkeeping.
4. `lem-open-mapping-ball-closure-step` (lemma) — a surjection sends some ball to a set whose closure contains a ball about zero.
5. `lem-open-mapping-successive-approximation` (lemma) — remove the closure using a geometrically convergent correction series in $X$.
6. `thm-open-mapping-theorem` (theorem) — a surjective bounded map between Banach spaces is open.
7. `cor-open-mapping-quantitative-form` (corollary) — some $c>0$ satisfies $cB_Y^\circ\subset T(B_X^\circ)$.
8. `thm-bounded-inverse-theorem` (theorem) — a bounded bijection between Banach spaces has bounded inverse.
9. `def-graph-of-a-linear-operator` (definition).
10. `thm-closed-graph-theorem` (theorem) — a linear map between Banach spaces is bounded iff its graph is closed.
11. `def-closable-linear-operator` (definition) — for a possibly unbounded densely defined map, closure of graph is a graph.
12. `thm-closability-sequential-criterion` (theorem) — $x_n\to0$ and $Tx_n\to y$ imply $y=0$.
13. `cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous` (corollary) — apply UBP to the associated family.
14. `cor-equivalent-complete-norms-from-one-sided-comparison` (corollary) — identity plus bounded inverse.

**Hard proof plan.**  The open-mapping proof keeps three distinct claims
separate: a Baire interior statement for $\overline{T(nB_X)}$, a translation
and scaling lemma locating a ball around zero, and the iterative lifting that
uses completeness of $X$.  The closed-graph theorem equips the graph with the
product Banach norm and applies bounded inverse to its first projection.  No
restatement claims these theorems are equivalent to DC: their **standard
proofs here** consume the complete-metric Baire theorem, which has DC cost;
the reverse implications are either false or unresolved as recorded in §8.

**B page:** `the-baire-principles-of-functional-analysis-examples`

1. `ex-fourier-partial-sum-operators-and-uniform-boundedness` — reserved for reuse after FA-14, never a dependency of FA-14.
2. `ex-condensation-of-singularities` — if $\sup_n\|T_n\|=\infty$, some $x$ has $\sup_n\|T_nx\|=\infty$.
3. `cex-uniform-boundedness-fails-on-an-incomplete-domain` — coordinate functionals on $c_{00}$.
4. `cex-open-mapping-fails-without-completeness` — identity between one vector space with inequivalent incomplete norms.
5. `cex-closed-graph-fails-without-completeness`.
6. `ex-a-closed-unbounded-differential-operator` — anticipates FA-21 and distinguishes closed from bounded when the domain is proper.

### FA-7 — Dual spaces, transpose operators, and annihilators

**A page:** `dual-spaces-adjoint-operators-and-annihilators`

**Requires:** FA-2, FA-4–FA-6; planned predecessor MT-16 for the concrete
$L^p$ representation theorem.

**Source backing read:** Bühler–Salamon §§1.3.1–1.3.2, 2.4.1, and
4.1.1–4.1.3, pp. 31–38, 88–89, 172–182 (*The Banach Space of Bounded Linear
Operators*; *Examples of Dual Spaces*; *The Bidual Space*; *The Dual
Operator*; *Duality*; *The Closed Image Theorem*); Teschl §§4.3 and 4.6,
pp. 119–125 and 161–169 (*The adjoint operator* and the Banach-algebra/operator
material); MIT 18.102, pp. 53–68 (dual spaces, adjoints, biduality).

Items:

1. `def-continuous-dual-space` (definition) — $X^*=\mathcal B(X,\mathbb K)$ with its operator norm.
2. `thm-dual-space-is-banach` (theorem) — completeness follows because the scalar field is complete, whether or not $X$ is.
3. `def-duality-pairing` (definition) — $\langle f,x\rangle=f(x)$; keep it distinct from an inner product.
4. `def-annihilator-and-preannihilator` (definition) — $M^\perp\subset X^*$ and ${}^\perp N\subset X$ with scalar-field conventions.
5. `lem-annihilators-are-closed-subspaces` (lemma) — norm closed now; weak/weak-star closedness is added at FA-8.
6. `thm-dual-of-a-quotient-is-the-annihilator` (theorem) — $q^*:(X/M)^*\to M^\perp$ is an onto linear isometry for closed $M$.
7. `thm-dual-of-a-closed-subspace-is-a-dual-quotient` (theorem) — restriction $X^*\to M^*$ is a norm-one quotient with kernel $M^\perp$, using Hahn–Banach for surjectivity.
8. `def-transpose-of-a-bounded-operator` (definition) — $T^*g=g\circ T$ for $T:X\to Y$; call this the Banach-space adjoint/transpose and later distinguish the Hilbert adjoint.
9. `lem-transpose-is-bounded-and-has-the-same-norm` (lemma) — $\|T^*\|=\|T\|$, with the reverse inequality using a norming functional.
10. `lem-transpose-reverses-composition` (lemma) — $(ST)^*=T^*S^*$ and $I^*=I$.
11. `thm-kernel-range-annihilator-identities` (theorem) — $(\operatorname{ran}T)^\perp=\ker T^*$ and $(\ker T)^\perp=\overline{\operatorname{ran}T^*}^{,w^*}$, with norm-closure variants stated only under their extra hypotheses.
12. `thm-banach-closed-range-theorem` (theorem) — for $T\in\mathcal B(X,Y)$ between Banach spaces, $\operatorname{ran}T$ is closed iff $\operatorname{ran}T^*$ is closed; give the equivalent quotient estimate $\operatorname{dist}(x,\ker T)\le C\|Tx\|$ and, in the closed-range case, the norm-closed identities $\operatorname{ran}T={}^\perp\ker T^*$ and $\operatorname{ran}T^*=(\ker T)^\perp$.
13. `def-canonical-map-into-the-bidual` (definition) — $J_Xx(f)=f(x)$.
14. `thm-canonical-bidual-map-is-an-isometry` (theorem) — boundedness is elementary and equality consumes FA-4's norming-functional theorem.
15. `lem-canonical-map-is-natural` (lemma) — $T^{**}J_X=J_YT$.
16. `def-reflexive-banach-space` (definition) — $J_X$ is onto; merely having some isomorphism $X\cong X^{**}$ is not the definition.
17. `thm-dual-of-c0-is-ell-one` (theorem) — construct coefficients $a_n=f(e_n)$, prove $a\in\ell^1$, and recover $f$ by density.
18. `thm-dual-of-ell-one-is-ell-infinity` (theorem) — bounded sequences act by the absolutely convergent pairing and exhaust the dual.
19. `rem-lp-duality-in-abstract-language` (remark, L/NA) — translate MT-16's exact hypotheses into $(L^p)^*\cong L^q$ without restating or widening them.

**Well-definedness and hard-proof plan.**  For `q^*`, if $f(x+M)$ is
recovered from an annihilating functional, representative independence is
proved before norm equality.  For restriction onto $M^*$, extensions are not
unique, so the target is the quotient $X^*/M^\perp$; the quotient class, not a
chosen extension, is canonical.  The second identity in item 11 uses the
bipolar/weak-star closure result from FA-8 and must not be rewritten as norm
closure.  Item 12 obtains the quotient estimate from the induced bijection
$X/\ker T\to\operatorname{ran}T$ and the open-mapping theorem, then applies
Hahn–Banach annihilator duality to prove the adjoint equivalence; it does not
assume either range closed while proving the other.  The proof of
$(c_0)^*=\ell^1$ obtains
$\sum_{k\le n}|a_k|\le\|f\|$ by choosing finitely many phases, so it invokes no
infinite sign choice.

**B page:** `dual-spaces-adjoint-operators-and-annihilators-examples`

1. `ex-coordinate-functionals-on-classical-sequence-spaces`.
2. `ex-adjoint-of-the-right-and-left-shifts`.
3. `ex-evaluation-functionals-and-point-masses` — cite MT-20 for the RMK identification.
4. `ex-annihilator-of-a-coordinate-subspace`.
5. `ex-dual-of-a-finite-dimensional-space` — matrix transpose and conjugate conventions.
6. `cex-dual-functor-is-not-covariant` — make the reversed arrow explicit.
7. `cex-canonical-bidual-map-need-not-be-surjective` — the image of $c_0$ inside $(\ell^1)^*=\ell^\infty$.
8. `rem-riesz-representation-name-split` (remark, L/NA) — Hilbert Riesz is FA-13; Riesz–Markov–Kakutani is MT-20.

### FA-8 — Weak and weak-star topologies

**A page:** `weak-and-weak-star-topologies`

**Requires:** FA-5–FA-7; published initial-topology, product-topology, nets,
and filters machinery.

**Source backing read:** Bühler–Salamon §§3.1.1–3.1.4, pp. 118–132
(*Definition and Examples*; *Convex Sets*; *Elementary Properties of the Weak
Topology*; *Elementary Properties of the Weak* Topology*); Teschl §§4.4 and
5.3, pp. 125–133 and 146–149 (*Weak convergence*; *Weak topologies*); Knapp
ch. IV §§1 and 3, pp. 106–121 (*Topological Vector Spaces*; *Weak and Weak-Star
Topologies, Alaoglu's Theorem*).

Items:

1. `def-weak-topology-on-a-normed-space` (definition) — $\sigma(X,X^*)$, the coarsest topology making every $f\in X^*$ continuous.
2. `lem-basic-weak-neighborhoods` (lemma) — finite families of functionals give a neighborhood base.
3. `thm-weak-topology-is-hausdorff` (theorem) — exactly because FA-4 proves that $X^*$ separates points.
4. `def-weak-convergence-of-nets-and-sequences` (definition) — $x_i\rightharpoonup x$ iff $f(x_i)\to f(x)$ for every $f\in X^*$.
5. `def-weak-star-topology` (definition) — $\sigma(X^*,X)$, pointwise convergence on $X$.
6. `lem-basic-weak-star-neighborhoods` (lemma).
7. `def-weak-star-convergence` (definition) — nets first; sequences are a special case, never the definition of closure.
8. `thm-continuous-dual-of-a-weak-topology` (theorem) — every weakly continuous linear functional belongs to the original separating family $X^*$.
9. `thm-continuous-dual-of-a-weak-star-topology` (theorem) — every weak-star continuous linear functional on $X^*$ is evaluation at a finite linear combination of points, hence at one point of $X$.
10. `thm-norm-closed-convex-iff-weakly-closed` (theorem) — the topology version of FA-5's Mazur separation result.
11. `cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball` (corollary) — in infinite dimension, using finite-codimensional weak neighborhoods.
12. `thm-weakly-convergent-sequences-are-norm-bounded` (theorem) — apply FA-6's Sokal sequential uniform-boundedness form to the canonical images in $X^{**}$; the implemented cost is $\mathsf{AC}_\omega$, not the DC cost of general-family Baire.
13. `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm` (corollary) — dual norm formula.
14. `thm-weak-and-norm-topologies-agree-iff-finite-dimensional` (theorem).
15. `thm-infinite-dimensional-weak-topology-is-not-first-countable` (theorem) — no countable local base at zero.
16. `lem-annihilators-are-weak-and-weak-star-closed` (lemma).
17. `thm-bipolar-closure-for-linear-subspaces` (theorem) — ${}^\perp(M^\perp)=\overline M$ and $( {}^\perp N)^\perp=\overline N^{,w^*}$.
18. `thm-transpose-is-weak-to-weak-continuous` (theorem).
19. `thm-transpose-is-weak-star-to-weak-star-continuous` (theorem) — and conversely every bounded weak-star continuous linear map between duals is a transpose of a unique bounded preadjoint.
20. `def-strong-and-weak-operator-topologies` (definition) — SOT is pointwise norm convergence and WOT is pointwise weak convergence on $\mathcal B(X,Y)$.
21. `lem-norm-implies-strong-implies-weak-operator-convergence` (lemma).

**Proof obligations.**  The proof of item 9 uses continuity at zero to reduce a
linear functional to finitely many evaluations, then factors it through a
finite-dimensional coordinate map; it does not invoke algebraic duality.
For item 15, a countable local base supplies an explicit countable family of
functionals generating the weak topology after one basic finite-coordinate
neighborhood is selected inside each member of the supplied base.  The
finite-coordinate factorization used in item 8 then puts every member of
$X^*$ in their algebraic span, whereas FA-3 excludes a countably infinite
Hamel basis for the Banach space $X^*$; hence $X^*$ is finite-dimensional, and
FA-4's dual separation forces $X$ to be finite-dimensional.  The selected
proof records $\mathsf{AC}_\omega$ for that countable refinement.  It does not
pretend sequences determine weak closure or treat a norm ball as a weak
neighborhood.

**B page:** `weak-and-weak-star-topologies-examples`

1. `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p` — for $1<p<\infty$, with MT-16 supplying the dual.
2. `cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one` — the constant functional in $\ell^\infty$.
3. `ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star`.
4. `cex-weak-star-and-weak-topologies-on-a-dual-can-differ` — $\ell^1=(c_0)^*$.
5. `cex-weak-closure-can-exceed-sequential-weak-closure` — use a fully sourced standard example; do not offer the unit sphere, whose sequence behavior depends on the space.
6. `ex-right-shift-powers-converge-in-wot-not-sot`.
7. `ex-left-shift-powers-converge-in-sot-not-operator-norm`.
8. `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain` — reconnect to FA-6.
9. `cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded` — direct weak neighborhoods together with an increasing norm threshold; every weak neighborhood in infinite dimension is norm unbounded.  Index by triples carrying the chosen point as part of the index, so the construction hides no global selection.  This is why item 12 is a sequence theorem.

### FA-9 — Banach–Alaoglu, Goldstine, and Krein–Milman

**A page:** `banach-alaoglu-goldstine-and-krein-milman`

**Requires:** FA-4, FA-5, FA-7, FA-8; compact-Hausdorff Tychonoff from the
published ultrafilter-lemma route; planned predecessor MT-20 for RMK
applications.

**Source backing read:** Bühler–Salamon §§3.2.1, 3.2.3, and 3.5, pp. 132–138
and 148–152 (*The Separable Case*; *The General Case*; *The Kreĭn–Milman
Theorem*); Teschl §§5.2–5.3, pp. 141–149 (*Convex sets and the Krein–Milman
theorem*; *Weak topologies*); Knapp ch. IV §§3 and 8, pp. 116–121 and 140–143.
Goldstine is cross-checked in Conway, ch. V §3, and the choice ledger against
Bell, *The Axiom of Choice*, pp. 59–64, and Rossi, arXiv:0911.0332.

Items:

1. `lem-dual-ball-as-a-closed-subset-of-a-product` (lemma) — embed $B_{X^*}$ by evaluations into $\prod_{x\in X}\{z:|z|\le\|x\|\}$ and characterize linearity by closed equations.
2. `thm-banach-alaoglu` (theorem) — $B_{X^*}$ is weak-star compact, with BPI—not full AC—as the exact recorded principle.
3. `thm-weak-star-compactness-of-polar-sets` (theorem) — the polar of any neighborhood of zero is weak-star compact after scaling.
4. `thm-dual-ball-weak-star-metrizable-for-separable-predual` (theorem) — give the explicit bounded metric from a fixed dense sequence.
5. `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact` (corollary) — once item 4 supplies the metric, compactness implies sequential compactness in ZF by intersecting the nested closures of the tails of a given sequence and then taking least admissible indices; the corollary inherits BPI from Alaoglu, not an additional countable-choice cost.
6. `thm-goldstine` (theorem) — $J_X(B_X)$ is weak-star dense in $B_{X^{**}}$.
7. `cor-goldstine-finite-data-approximation` (corollary) — approximate finitely many values of $x^{**}$ by one point of $B_X$.
8. `thm-banach-dieudonne-linear-subspace-criterion` (theorem) — for a linear subspace $E\subset X^*$, weak-star closedness of $E$ is equivalent to weak-star closedness of $E\cap B_{X^*}$; state the Banach hypothesis and use the sourced polar proof.
9. `def-extreme-point-and-face` (definition).
10. `lem-minimizer-face-of-a-continuous-affine-functional` (lemma) — a nonempty compact face is obtained by minimizing.
11. `thm-krein-milman-existence-of-extreme-points` (theorem) — a nonempty compact convex subset of a locally convex Hausdorff space has an extreme point.
12. `thm-krein-milman-closed-convex-hull-form` (theorem) — the compact convex set is the closed convex hull of its extreme points.
13. `cor-bauer-maximum-principle` (corollary) — an upper-semicontinuous convex function on a compact convex set attains its maximum at an extreme point, under the precise compactness hypotheses.
14. `thm-milman-converse-for-compact-generating-sets` (theorem) — extreme points of a compact closed convex hull lie in the closed generating set.
15. `cor-dual-unit-ball-has-extreme-points` (corollary) — explicitly labelled with the combined Alaoglu + Krein–Milman choice cost.

**Hard proof and choice plan.**  Alaoglu checks the image is closed under each
linearity equation and norm inequality before invoking compactness.  Goldstine
argues by finite-dimensional separation: a missing basic weak-star
neighborhood would give a finite linear combination of evaluations separating
$x^{**}$ from $J_X(B_X)$, contradicting the dual norm inequality; it consumes
HB and no compactness theorem.  The Banach–Dieudonné item follows BS §3.3
literally: its weak-star compact finite-intersection step costs BPI, its
recursive finite sets cost DC, and its final separation costs HB.
Krein–Milman orders nonempty compact faces by
reverse inclusion; the proof implemented with the dual Zorn lemma is labelled
AC.  Bell's result that KM plus BPI yields AC is recorded, so the combined
corollary in item 15 is never mislabeled merely BPI.

**B page:** `banach-alaoglu-goldstine-and-krein-milman-examples`

1. `ex-weak-star-compactness-of-probability-measures` — use MT-20 to identify the relevant positive slice of $C(K)^*$.
2. `ex-extreme-points-of-the-probability-measures-are-dirac-masses`.
3. `ex-extreme-points-of-the-ell-infinity-unit-ball`.
4. `cex-the-c0-unit-ball-has-no-extreme-points` — perturb a sufficiently small coordinate.
5. `cor-c0-is-not-isometrically-a-dual-space` — Alaoglu plus Krein–Milman and item 4; the stronger isomorphic statement waits for FA-12.
6. `cex-weak-star-compact-does-not-imply-weak-star-sequentially-compact` — the dual ball of a suitable nonseparable predual.
7. `rem-banach-alaoglu-versus-sequential-alaoglu` (remark, L/NA) — keep BPI and countable-choice costs distinct.

### FA-10 — Reflexivity and Eberlein–Šmulian

**A page:** `reflexivity-and-eberlein-smulian`

**Requires:** FA-6–FA-9; planned predecessors MT-14 and MT-16 for concrete
$L^p$ consequences.

**Source backing read:** Bühler–Salamon §§2.4.1–2.4.3 and 3.4, pp. 88–94 and
142–148 (*The Bidual Space*; *Reflexive Banach Spaces*; *Separable Banach
Spaces*; *The Eberlein–Smulyan Theorem*); Teschl §§4.4 and 5.5, pp. 125–133
and 156–160 (*Weak convergence*; *Uniformly convex spaces*); Whitley, “An
elementary proof of the Eberlein–Smulian theorem,” Math. Ann. 172 (1967),
pp. 116–118; Megginson §§2.8 and 2.9 for James and Bishop–Phelps.

Items:

1. `thm-reflexive-iff-unit-ball-weakly-compact` (theorem) — both directions, with Goldstine closing the converse.
2. `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive` (theorem).
3. `thm-closed-subspaces-of-reflexive-spaces-are-reflexive` (theorem).
4. `thm-quotients-of-reflexive-spaces-are-reflexive` (theorem).
5. `thm-reflexivity-of-lp-for-one-less-p-less-infinity` (theorem) — a short abstract corollary of MT-16, not a second proof of $L^p$ duality.
6. `def-relative-weak-compactness-and-three-sequential-notions` (definition) — compact, sequentially compact, and countably compact are not conflated.
7. `lem-eberlein-smulian-separable-reduction` (lemma) — replace a sequence by the closed separable span it generates and track dual restrictions.
8. `lem-eberlein-smulian-metrization-on-the-relevant-dual-ball` (lemma) — construct the countable family used in Whitley's argument.
9. `thm-eberlein-smulian` (theorem) — relative weak compactness, relative weak sequential compactness, and relative weak countable compactness are equivalent.
10. `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence` (corollary).
11. `def-schur-property` (definition).
12. `thm-ell-one-has-the-schur-property` (theorem) — gliding-hump proof with one bounded sign functional contradicting weak nullity.
13. `cor-ell-one-is-not-reflexive` (corollary) — its unit ball is not norm sequentially compact, hence not weakly sequentially compact.
14. `def-uniformly-convex-banach-space` (definition).
15. `lem-uniform-convexity-gives-unique-asymptotic-centers` (lemma) — quantitative midpoint drop.
16. `thm-milman-pettis` (theorem) — uniformly convex Banach spaces are reflexive.
17. `cor-lp-is-uniformly-convex-for-one-less-p-less-infinity` (corollary) — cite the Clarkson inequalities in the exact scalar $L^p$ setting.
18. `lem-james-noncompactness-sequence` (lemma) — from failure of weak compactness construct the separated convex-tail data used by James.
19. `lem-james-norm-attainment-compactness-criterion` (lemma) — the combinatorial core with all nested choices and completeness hypotheses explicit.
20. `thm-james-reflexivity-theorem` (theorem) — a Banach space is reflexive iff every continuous functional attains its norm on its closed unit ball.
21. `lem-bishop-phelps-support-cone-construction` (lemma) — the complete-metric variational step for a real closed bounded convex set.
22. `thm-bishop-phelps` (theorem) — support functionals are norm dense in $X^*$; specialize to norm-attaining functionals on $B_X$.

**Hard proof plan.**  Eberlein–Šmulian follows Whitley's separable reduction,
not the false general claim that weak compact sets are metrizable.  James's
hard direction is explicitly split into the noncompactness sequence and the
norm-attainment criterion; a future builder must follow Megginson's complete
proof, including the use of completeness, rather than cite the theorem inside
its own proof.  Bishop–Phelps uses the real theorem; the complex general-convex
extension is not asserted because Lomonosov's counterexample forbids it.

**B page:** `reflexivity-and-eberlein-smulian-examples`

1. `ex-hilbert-spaces-are-uniformly-convex` — parallelogram-law proof, finalized after FA-13.
2. `ex-reflexivity-of-ell-p-and-lp` — cite MT-14/MT-16 and separate endpoints.
3. `cex-c0-is-not-reflexive` — canonical image in $\ell^\infty$.
4. `cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences` — Schur's warning.
5. `cex-complex-bishop-phelps-for-general-convex-sets` — source-cited Lomonosov boundary, L/NS and non-load-bearing.
6. `ex-norm-attaining-functionals-on-a-hilbert-space` — all functionals attain, by FA-13's Riesz theorem.

### FA-11 — Schauder bases, approximation, and Banach-space pathologies

**A page:** `schauder-bases-approximation-and-banach-space-pathologies`

**Requires:** FA-4, FA-6–FA-10.

**Source backing read:** Bühler–Salamon §2.4.4, pp. 94–109 (*The James
Space*), including its norm, dual, bidual, and codimension-one conclusion;
Megginson ch. 4 §§1–2 (Schauder bases and approximation property); Albiac–Kalton
ch. 1 §§1.1–1.4 and ch. 2's classical sequence-space examples.  Enflo's exact
boundary is checked against his primary paper, Acta Math. 130 (1973),
pp. 309–317.

Items:

1. `def-schauder-basis-and-coordinate-functionals` (definition) — unique norm-convergent expansions in a fixed order.
2. `def-partial-sum-projections-and-basis-constant` (definition).
3. `thm-coordinate-functionals-of-a-schauder-basis-are-bounded` (theorem) — use uniform boundedness on partial sums after proving their pointwise convergence.
4. `cor-banach-space-with-a-schauder-basis-is-separable` (corollary) — rational finite combinations after fixing the scalar-field countable dense subfield.
5. `def-unconditional-and-conditional-basis` (definition).
6. `def-approximation-property-and-bounded-approximation-property` (definition) — uniform approximation of the identity on compact sets by finite-rank maps; BAP includes a uniform norm bound.
7. `lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets` (lemma).
8. `thm-schauder-basis-implies-bounded-approximation-property` (theorem) — partial sum projections supply the approximants.
9. `def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n` (definition).
10. `def-finitely-additive-integral-on-ell-infinity` (definition) — define first on finite-range sequences and extend uniformly.
11. `lem-finitely-additive-integral-is-well-defined-and-isometric` (lemma) — independence of a finite-range decomposition and equality with total variation.
12. `thm-dual-of-ell-infinity-is-ba` (theorem) — $\varphi\mapsto[A\mapsto\varphi(1_A)]$ is an isometric isomorphism onto $ba(2^{\mathbb N})$.
13. `cor-countably-additive-part-of-ba-is-ell-one` (corollary) — identify the $\ell^1$ subspace and show it is proper using a Banach limit.
14. `def-james-space` (definition) — sequences tending to zero with the sourced quadratic-variation norm; keep the exact endpoint convention fixed.
15. `lem-james-formula-defines-a-norm` (lemma).
16. `thm-james-space-is-complete-and-separable` (theorem).
17. `lem-james-space-dual-and-bidual-identification` (lemma) — compute the coordinate/bounded-variation description following Bühler–Salamon.
18. `thm-canonical-image-of-james-space-has-codimension-one` (theorem) — hence $J$ is not reflexive.
19. `thm-james-space-is-isometrically-isomorphic-to-its-bidual` (theorem) — by a noncanonical isometry; this is why FA-7's definition names $J_X$.
20. `rem-enflo-space-without-the-approximation-property` (remark, L/NS) — exact primary theorem and the proved implication basis $\Rightarrow$ AP; never a dependency.

**Hard proof and boundary plan.**  The finitely additive integral uses uniform
approximation by finite-range sequences; “simple functions are dense” is
proved for the full supremum norm rather than borrowed from countably additive
integration.  The James-space proof keeps three claims separate: completion,
the concrete dual/bidual calculation, and the existence of a noncanonical
isometry.  Enflo is the sole `proved_here: false` structural counterexample:
the in-library route was audited and would require reproducing the paper's
special finite-dimensional tensors and trace estimates, which are not used by
any later item; retaining the exact theorem as a leaf is the minimum-risk
discharge.

**B page:** `schauder-bases-approximation-and-banach-space-pathologies-examples`

1. `ex-standard-schauder-bases-of-c0-and-ell-p` — exact basis constants.
2. `cex-standard-unit-vectors-are-not-a-schauder-basis-of-ell-infinity`.
3. `ex-the-summing-basis-of-c0-is-conditional`.
4. `cex-reordering-a-conditional-basis-can-destroy-convergence`.
5. `ex-banach-limit-revisited-as-a-charge` — identify the associated purely finitely additive behavior.
6. `cex-ell-one-and-ell-infinity-are-not-reflexive` — reconcile FA-7 and item 13.
7. `rem-subspaces-of-classical-spaces-can-fail-ap` (remark, L/NS) — the source-cited Szankowski/Enflo boundary; no dependency.

### FA-12 — Banach-valued integration and the Radon–Nikodým property

**A page:** `banach-valued-integration-and-the-radon-nikodym-property`

**Requires:** FA-1, FA-7, FA-9, FA-10; planned predecessors MT-2, MT-7, MT-8,
MT-10, and MT-12–MT-16 for scalar measure/integration, uniform integrability,
scalar RN, $L^1$, and its concrete duality theorem.  It does not redefine
scalar $L^p$.

**Source backing read:** Teschl §11.6, pp. 331–337 (*The Bochner integral*);
Bühler–Salamon §§3.6.1–3.6.2 and 7.3.1, pp. 152–160 and 387–392 (*Weak
Convergence in $L^1$*; *The Dunford–Pettis Theorem*; *Banach Space Valued
Measurable Functions*); Diestel–Uhl, *Vector Measures*, ch. II §§1–2 and ch. III §§1–3
(Bochner integration and RNP); Albiac–Kalton §5.3 for dentability and the
classical examples.

Items:

1. `def-banach-valued-simple-function-and-integral` (definition) — require a disjoint measurable representation or prove refinement independence.
2. `lem-banach-valued-simple-integral-is-well-defined` (lemma) — common refinements give the same vector.
3. `def-strongly-measurable-banach-valued-function` (definition) — a.e. pointwise limit of simple functions.
4. `thm-pettis-measurability-criterion-for-strong-measurability` (theorem) — weak measurability plus essentially separably valued, with the exact completeness hypotheses.
5. `def-bochner-integrable-function` (definition) — simple approximants Cauchy in integral norm; no vector $L^1$ space is minted.
6. `thm-bochner-integrability-criterion` (theorem) — strong measurability and $\int\|f\|<\infty$.
7. `lem-bochner-integral-norm-inequality` (lemma) — $\|\int f\|\le\int\|f\|$.
8. `thm-bochner-dominated-convergence` (theorem) — cite scalar DCT for the norm errors.
9. `thm-bounded-linear-maps-commute-with-bochner-integration` (theorem).
10. `def-banach-valued-vector-measure-and-variation` (definition) — countable additivity in norm and scalar total variation.
11. `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` (lemma).
12. `def-radon-nikodym-property` (definition) — every bounded-variation $X$-valued measure absolutely continuous with respect to a finite scalar measure has a Bochner density.
13. `def-dentable-bounded-set-and-slice` (definition).
14. `thm-rnp-dentability-characterization` (theorem) — a Banach space has RNP iff every nonempty bounded closed convex subset is dentable.
15. `thm-rnp-lipschitz-differentiability-characterization` (theorem) — $X$ has RNP iff every Lipschitz $[0,1]\to X$ is a.e. differentiable, with the exact a.e. derivative notion.
16. `thm-reflexive-spaces-have-rnp` (theorem).
17. `thm-separable-dual-spaces-have-rnp` (theorem).
18. `thm-c0-fails-the-radon-nikodym-property` (theorem) — use the sourced nondentability/vector-measure witness, not the false inference “separable implies RNP”.
19. `thm-l-one-of-zero-one-fails-rnp` (theorem) — cite the non-atomic hypothesis and distinguish sequence $\ell^1$, which has RNP.
20. `cor-c0-is-not-isomorphic-to-a-dual-space` (corollary) — if $c_0\cong Y^*$, then the separable dual $Y^*$ has RNP, contradicting item 18.
21. `thm-dunford-pettis-for-l-one-on-a-finite-measure-space` (theorem) — for finite $\mu$, a bounded subset of $L^1(\mu)$ is relatively weakly compact iff it is uniformly integrable in MT-10's exact sense; prove both directions through MT-16's concrete duality and FA-10 weak compactness without redefining uniform integrability.

**Hard proof and well-definedness plan.**  Simple-function integration is
defined before any limiting construction, and null-set changes are shown not
to change the integral.  Strong measurability is not replaced by weak
measurability; Pettis's theorem records the missing essentially-separable
range condition.  Vector-measure absolute continuity is with respect to null
sets, while bounded variation is a separate hypothesis.  The RNP equivalences
are long results and are decomposed through slices/dentability in the source;
the future build may split FA-12 before the sixty-item ceiling but may not turn
them into uncited summaries.

**B page:** `banach-valued-integration-and-the-radon-nikodym-property-examples`

1. `ex-bochner-integral-of-a-countably-valued-function`.
2. `cex-weakly-measurable-need-not-be-strongly-measurable` — nonseparable-range example with all set-theoretic assumptions stated.
3. `ex-vector-measure-induced-by-an-l-one-function`.
4. `ex-hilbert-spaces-have-rnp` — later cite FA-13 reflexivity.
5. `cex-c0-unit-ball-is-not-dentable` — compute the diameter of every slice in the chosen proof.
6. `rem-l-one-sequence-versus-l-one-nonatomic-rnp` (remark, L/NA) — prevent the common false transfer between $\ell^1$ and $L^1[0,1]$.
7. `rem-rnp-is-not-the-scalar-radon-nikodym-theorem` (remark, L/NA) — explicit seam dictionary to MT-13.
8. `ex-dunford-pettis-uniformly-integrable-and-concentrating-families` — contrast an $L^1$-dominated family with a bounded spike family that is not uniformly integrable and hence not relatively weakly compact.

### FA-13 — Hilbert-space geometry and Riesz representation

**A page:** `hilbert-space-geometry-and-riesz-representation`

**Requires:** FA-1, FA-2, FA-7, FA-10; the published finite-dimensional
Euclidean inner-product items.  Planned MT-23 is cited only by a later
agreement remark and is not load-bearing.

**Source backing read:** Bühler–Salamon §§1.3.3 and 2.3.6, pp. 38–42 and
87–88 (*Hilbert Spaces*; *Orthonormal Bases*); Teschl §§1.3 and 2.2–2.4,
pp. 16–23 and 54–63 (*The geometry of Hilbert spaces*; *The projection theorem
and the Riesz lemma*; *Operators defined via forms*; *Orthogonal sums and
tensor products*); MIT 18.102, pp. 32–53 (Hilbert geometry, projection, Riesz).
The foundational refinement is checked against Blackadar–Farah–Karagila,
*Hilbert spaces without the Countable Axiom of Choice*, §§1–2, especially
Theorem 2.0.4 and Corollary 2.0.5.

Items:

1. `def-real-and-complex-inner-product-space` (definition) — positive definite, linear in the first variable, conjugate symmetric and conjugate-linear in the second.
2. `thm-cauchy-schwarz-in-an-inner-product-space` (theorem) — prove the zero-vector case before minimizing the scalar quadratic.
3. `cor-inner-product-induces-a-norm` (corollary).
4. `thm-parallelogram-law` (theorem).
5. `thm-jordan-von-neumann-polarization` (theorem) — a norm comes from an inner product iff it satisfies the parallelogram law; give separate real and complex formulas.
6. `def-hilbert-space` (definition) — an inner-product space complete in its induced norm in the library's existing Cauchy-sequence sense.
7. `thm-completion-of-an-inner-product-space-is-hilbert` (theorem) — FA-1's completion carries the unique inner product extending the original one; define it by limits of pairings, prove independence of both Cauchy representatives, and verify that its norm is the completed norm.
8. `def-orthogonality-and-orthogonal-complement` (definition).
9. `lem-pythagorean-theorem-and-finite-orthogonal-sums` (lemma).
10. `lem-orthogonal-complement-is-closed` (lemma).
11. `lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy` (lemma) — parallelogram identity controls two approximate minimizers.
12. `thm-projection-onto-a-nonempty-closed-convex-set` (theorem) — existence and uniqueness of the nearest point; standard Cauchy-complete form labelled countable choice.
13. `thm-hilbert-projection-variational-characterization` (theorem) — $p=P_Cx$ iff $\operatorname{Re}\langle x-p,y-p\rangle\le0$ for all $y\in C$.
14. `thm-orthogonal-decomposition-by-a-closed-subspace` (theorem) — $H=M\oplus M^\perp$.
15. `def-orthogonal-projection` (definition) — $P_Mx$ is the unique $M$ component.
16. `lem-orthogonal-projection-is-linear-self-adjoint-contractive` (lemma) — linearity is special to subspaces, not convex sets.
17. `thm-double-orthogonal-complement-is-closure` (theorem) — $M^{\perp\perp}=\overline M$.
18. `thm-riesz-representation-for-hilbert-space` (theorem) — every bounded functional is uniquely $x\mapsto\langle x,y\rangle$, isometrically and conjugate-linearly in $y$.
19. `cor-hilbert-spaces-are-reflexive` (corollary) — verify the canonical bidual map, not merely an abstract isomorphism.
20. `def-hilbert-space-adjoint` (definition) — $\langle Tx,y\rangle=\langle x,T^*y\rangle$ via Riesz; distinguish it from FA-7's transpose while proving the dictionary.
21. `thm-hilbert-adjoint-properties` (theorem) — uniqueness, conjugate linearity in the operator, $(ST)^*=T^*S^*$, $T^{**}=T$, and $\|T^*T\|=\|T\|^2$.
22. `def-self-adjoint-positive-unitary-and-normal-operator` (definition).
23. `lem-kernel-range-orthogonality-for-hilbert-adjoints` (lemma) — $(\operatorname{ran}T)^\perp=\ker T^*$ and its closure consequences.
24. `rem-l2-projection-agreement` (remark, L/NA) — MT-23's concrete $L^2$ projection is exactly item 14 in that Hilbert space.
25. `rem-lax-milgram-owned-by-pde` (remark, L/NA) — PDE may cite item 18 and FA-2's bounded-operator vocabulary, then define bounded and coercive sesquilinear forms itself; no Lax–Milgram theorem is stated here.

**Choice and proof boundary.**  Under the library's ordinary sequential
definition of Banach/Hilbert completeness, item 12's usual proof selects one
approximate minimizer for each $n$ and therefore consumes countable choice.
Blackadar–Farah–Karagila show that if “Hilbert” is instead defined using
$\sigma$-completeness (nested nonempty closed sets of diameters tending to
zero), the nested sets
$C\cap\overline B(x,d+1/n)$ give a ZF proof and Riesz then follows in ZF.  The
future build must display this distinction; it must not simultaneously keep
the weaker Cauchy-completeness definition and label the closest-point proof
ZF.  Riesz itself is proved from the one-dimensional complement of $\ker f$,
without Hahn–Banach.

**B page:** `hilbert-space-geometry-and-riesz-representation-examples`

1. `ex-standard-inner-products-on-kn-ell-two-and-l-two` — $L^2$ is cited from MT-14.
2. `ex-projection-onto-a-finite-dimensional-subspace-by-a-gram-matrix` — prove invertibility and coordinate independence.
3. `ex-projection-onto-constants-is-the-mean`.
4. `ex-distance-to-a-closed-subspace` — $\|x-P_Mx\|$ and the Pythagorean identity.
5. `cex-an-inner-product-space-need-not-be-complete` — $c_{00}$ in the $\ell^2$ norm.
6. `cex-a-norm-need-not-satisfy-the-parallelogram-law` — $\ell^p$ for $p\ne2$.
7. `cex-nearest-point-map-to-a-convex-set-need-not-be-linear`.
8. `ex-adjoints-of-shifts-multiplication-and-integral-operators`.

### FA-14 — Orthonormal bases, Parseval, and Fourier series

**A page:** `orthonormal-bases-parseval-and-fourier-series`

**Requires:** FA-13; planned predecessors MT-8, MT-11, MT-14, and MT-15 for
integration, Fubini, $L^2$, density, and convolution; published complex
exponential and compact-circle/topology results.

**Source backing read:** Teschl §§2.1 and 2.5, pp. 47–54 and 63–68
(*Orthonormal bases*; *Applications to Fourier series*); Bühler–Salamon
§2.3.6, pp. 87–88; Knapp, *Basic Real Analysis*, ch. VI §§7 and 9
(*Fourier Series and the Riesz–Fischer Theorem*; *Fourier Series and the
Dirichlet–Jordan Theorem*) and *Advanced Real Analysis* ch. II §§2–3,
pp. 36–45; MIT
18.102, pp. 38–53.  Completeness of the trigonometric system is cross-checked
by the Fejér route, not assumed as folklore.

Items:

1. `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` (definition) — “basis” means dense closed span, not finite Hamel span and not automatically Schauder order.
2. `lem-finite-bessel-inequality` (lemma) — apply Pythagoras to a finite orthogonal projection.
3. `thm-bessel-inequality-for-an-arbitrary-orthonormal-family` (theorem) — define the nonnegative sum as a supremum over finite subsets.
4. `lem-only-countably-many-fourier-coefficients-are-nonzero` (lemma) — for each threshold the support is finite.
5. `thm-parseval-equivalences-for-a-complete-orthonormal-family` (theorem) — completeness, Parseval equality, and norm convergence of the finite-subset net are equivalent.
6. `thm-hilbert-space-fourier-expansion` (theorem) — $x$ is the unconditional net sum of $\langle x,e\rangle e$.
7. `thm-existence-of-a-maximal-orthonormal-family` (theorem) — Zorn/AC proof, with maximality equivalent to completeness.
8. `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set` (theorem) — construct the isometry and prove onto by Parseval.
9. `thm-separable-hilbert-space-has-a-countable-orthonormal-basis` (theorem) — deterministic Gram–Schmidt from a fixed dense sequence.
10. `cor-separable-infinite-dimensional-hilbert-space-is-ell-two` (corollary) — isometric classification over the fixed scalar field.
11. `def-the-one-dimensional-torus-and-normalized-haar-integral` (definition) — use the existing quotient/circle page and MT integration; do not re-prove Haar theory.
12. `def-fourier-coefficients-and-trigonometric-polynomials` (definition) — $\widehat f(k)=\int_{\mathbb T}f(x)e^{-2\pi ikx}\,dx$.
13. `lem-trigonometric-characters-are-orthonormal` (lemma).
14. `def-dirichlet-and-fejer-kernels` (definition) — give exact convolution identities and normalization.
15. `lem-fejer-kernel-is-a-positive-approximate-identity` (lemma) — positivity, integral one, and concentration away from zero.
16. `thm-fejer-uniform-convergence-for-continuous-periodic-functions` (theorem).
17. `cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions` (corollary) — source route independent of the planned general Stone–Weierstrass page.
18. `thm-trigonometric-system-is-complete-in-l-two-of-the-torus` (theorem) — continuous density plus MT-15's $L^2$ density.
19. `thm-l-two-fourier-series-converges-in-mean-square` (theorem) — Hilbert expansion.
20. `thm-parseval-identity-for-fourier-series` (theorem).
21. `thm-riesz-fischer-for-fourier-coefficients` (theorem) — every $\ell^2(\mathbb Z)$ sequence is the coefficient sequence of a unique $L^2$ class; this is the unitary-surjectivity statement, not MT-14's completeness theorem despite the shared name.
22. `thm-fourier-basis-and-parseval-on-the-n-torus` (theorem) — for $k\in\mathbb Z^n$, the characters $x\mapsto e^{2\pi i k\cdot x}$ form an orthonormal basis of $L^2(\mathbb T^n)$; obtain completeness from product Fejér kernels and MT-11 rather than an unstated tensor-product theorem.

**Proof and seam plan.**  Infinite sums over an uncountable orthonormal family
are nets of finite partial sums; only after item 4 may they be represented by
a countable series for each fixed vector.  The separable construction uses the
least earlier nonzero residual in a given enumeration, so it does not invoke a
maximal-family choice.  Fourier-series completeness is proved via Fejér
approximation and the existing density theorem, not circularly from Parseval.
All assertions are statements about the $L^2$ equivalence classes that planned
MT-14 must define before this page is built.

**B page:** `orthonormal-bases-parseval-and-fourier-series-examples`

1. `ex-standard-basis-of-ell-two`.
2. `ex-legendre-polynomials-from-gram-schmidt` — finite computations and the density prerequisite stated.
3. `ex-haar-orthonormal-basis-of-l-two-zero-one` — prove orthogonality, normalization, and completeness by dyadic step-function density.
4. `ex-fourier-series-of-a-sawtooth` — $L^2$ identity and the resulting Basel sum, with endpoint conventions.
5. `ex-fourier-series-of-a-square-wave` — distinguish $L^2$ convergence from pointwise convergence.
6. `thm-dirichlet-jordan-pointwise-convergence` — at a point with one-sided limits for a periodic BV function, convergence to their average; cite the published BV machinery.
7. `cex-continuous-function-with-divergent-fourier-series-at-a-point` — source-cited du Bois-Reymond boundary, L/NS and not load-bearing.
8. `rem-gibbs-phenomenon` (remark, L/NA) — exact limiting overshoot formula only if sourced; otherwise qualitative and non-mathematical.

### FA-15 — Compact operators, Riesz–Schauder theory, and Fredholm operators

**A page:** `compact-operators-and-riesz-schauder-theory`

**Requires:** FA-2, FA-3, FA-5–FA-10, FA-13; published compactness and the
published **real compact-metric** theorem `thm-arzela-ascoli-for-real-ck` for
the $C([a,b])$ kernel example only.  The planned general `ascoli-arzela` page
has no items and supplies no dependency.  Banach algebras from FA-17 are used
only for the later Calkin-algebra reformulation, so the core Fredholm
alternative is ordered before that cross-reference.

**Source backing read:** Bühler–Salamon §§4.1–4.4 and 5.2.3, pp. 172–200 and
224–227 (*The Dual Operator*; *Duality*; *The Closed Image Theorem*; *Compact
Operators*; *Fredholm Operators*; *Composition and Stability*; *The Spectrum
of a Compact Operator*); Teschl §§3.1 and 6.5, pp. 69–72 and 184–189
(*Compact operators*; *Fredholm operators*); Knapp ch. II §1, pp. 34–36.

Items:

1. `def-compact-linear-operator` (definition) — bounded sets have relatively compact images; record the unit-ball equivalence.
2. `thm-sequential-characterization-of-compact-operators` (theorem) — every bounded sequence has a subsequence whose image converges; prove the relative-compactness-to-subsequence direction in ZF from nested tail closures, and label the selected converse proof DC because it recursively constructs an excluded separated sequence.
3. `lem-finite-rank-operators-are-compact` (lemma) — finite-dimensional Heine–Borel.
4. `lem-compositions-with-a-compact-operator-are-compact` (lemma) — the ideal property.
5. `thm-norm-limit-of-compact-operators-is-compact` (theorem) — require a Banach target and prove total boundedness plus completeness.
6. `def-approximable-operator` (definition) — norm closure of finite-rank operators; do not identify it with every compact operator in a general Banach space.
7. `thm-schauder-compact-adjoint-theorem` (theorem) — $T$ is compact iff $T^*$ is compact.
8. `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences` (theorem).
9. `lem-kernel-of-identity-minus-compact-is-finite-dimensional` (lemma).
10. `lem-range-of-identity-minus-compact-is-closed` (lemma) — quotient/Riesz-lemma proof.
11. `lem-riesz-schauder-ascent-and-descent-stabilize` (lemma) — chains of kernels/ranges cannot be strictly nested forever.
12. `thm-fredholm-alternative-for-identity-minus-compact` (theorem) — injective iff surjective, with the inhomogeneous solvability condition through the adjoint.
13. `thm-riesz-schauder-spectrum-of-a-compact-operator` (theorem) — nonzero spectral values are finite-multiplicity eigenvalues and have no nonzero accumulation point.
14. `cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation` (corollary).
15. `def-fredholm-operator-cokernel-and-index` (definition) — finite kernel, **closed** range, finite-dimensional cokernel, and integer index.
16. `lem-fredholm-splitting-and-parametrix` (lemma) — choose finite-dimensional complements, construct a bounded inverse on the infinite-dimensional summands.
17. `thm-atkinson` (theorem) — $T$ is Fredholm iff there is a bounded $S$ for which $ST-I$ and $TS-I$ are compact; state this parametrix form here, with no dependence on quotient Banach algebras, and record its later equivalence to invertibility in the Calkin algebra after FA-17.
18. `thm-fredholm-index-is-additive` (theorem).
19. `thm-fredholm-index-is-locally-constant` (theorem).
20. `thm-fredholm-index-is-stable-under-compact-perturbations` (theorem).
21. `cor-lambda-identity-minus-compact-has-index-zero` (corollary) — for $\lambda\ne0$.

**Hard proof plan.**  The compact-adjoint theorem is not hand-waved as
“duality preserves compactness”: one direction uses finite $\varepsilon$-nets
and the dual norm, the other passes through $T^{**}$ and the canonical
embedding.  Riesz–Schauder is split into kernel, closed range, chain
stabilization, and spectral consequences.  Atkinson's converse constructs a
parametrix after bounded finite-dimensional splittings and checks both defect
operators are finite rank.  No use is made of the false general statement
“every compact Banach-space operator is a norm limit of finite-rank maps.”

**B page:** `compact-operators-and-riesz-schauder-theory-examples`

1. `ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero`.
2. `ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval` — cite the published concrete Ascoli theorem.
3. `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two` — finalized after FA-16.
4. `cex-identity-is-compact-iff-the-space-is-finite-dimensional` — cite FA-3.
5. `cex-a-compact-operator-can-have-nondense-range`.
6. `ex-fredholm-alternative-for-an-integral-equation` — formulate only in the abstract $C(K)$ setting, not as a PDE theorem.
7. `cex-compactness-is-not-preserved-by-strong-operator-limits` — finite-rank projections increasing strongly to the identity.
8. `rem-approximation-property-controls-finite-rank-density-in-compact-operators` (remark, L/NA) — connect precisely to FA-11.

### FA-16 — Compact self-adjoint, Hilbert–Schmidt, and trace-class operators

**A page:** `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`

**Requires:** FA-13–FA-15; planned predecessors MT-11 and MT-14 for product
integration and $L^2$.

**Source backing read:** Teschl §§3.2, 3.5, and 3.6, pp. 72–78 and 89–100
(*The spectral theorem for compact symmetric operators*; *Singular value
decomposition of compact operators*; *Hilbert–Schmidt and trace class
operators*); Knapp ch. II §§2–5, pp. 36–52 (*Spectral Theorem for Compact
Self-Adjoint Operators*; *Hilbert–Schmidt Theorem*; *Unitary Operators*;
*Classes of Compact Operators*); Bühler–Salamon §5.2.3, pp. 224–227.

Items:

1. `lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form` (lemma) — $\|T\|=\sup_{\|x\|=1}|\langle Tx,x\rangle|$.
2. `lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign` (lemma) — compactness turns a maximizing sequence into a norm-convergent image subsequence.
3. `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal` (lemma).
4. `lem-orthogonal-complement-of-an-eigenspace-is-invariant` (lemma).
5. `thm-spectral-theorem-for-compact-self-adjoint-operators` (theorem) — nonzero real eigenvalues of finite multiplicity tend only to zero, and their eigenspaces span $\overline{\operatorname{ran}T}$.
6. `cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator` (corollary) — add an orthonormal basis of $\ker T$, with its separate AC label.
7. `lem-positive-square-root-of-a-compact-positive-operator` (lemma) — the compact self-adjoint expansion gives a unique compact positive $S$ with $S^2=T$, including the kernel and the possible accumulation at zero.
8. `def-absolute-value-and-singular-values-of-a-compact-operator` (definition) — $|T|=(T^*T)^{1/2}$ using item 7, with singular values the nonzero eigenvalues of $|T|$ repeated by multiplicity; later reconcile this construction with FA-19's continuous functional calculus.
9. `thm-singular-value-decomposition-for-compact-operators` (theorem) — $Tx=\sum s_n\langle x,e_n\rangle f_n$ on the support, including kernels/cokernels.
10. `cor-compact-operator-iff-singular-values-tend-to-zero` (corollary) — on Hilbert space, with finite-rank truncations.
11. `cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators` (corollary) — truncate the singular expansion by finite-rank orthogonal projections of norm at most one; no separately undefined approximation-property variant is invoked.
12. `def-hilbert-schmidt-operator` (definition) — $\sum_e\|Te\|^2<\infty$ for an orthonormal basis, with arbitrary-index sums understood as finite-subset suprema.
13. `thm-hilbert-schmidt-norm-is-basis-independent` (theorem) — Parseval/Tonelli proof.
14. `thm-hilbert-schmidt-operators-form-a-two-sided-ideal` (theorem).
15. `thm-hilbert-schmidt-operators-are-compact` (theorem) — finite-rank basis truncations.
16. `thm-l-two-kernels-give-hilbert-schmidt-operators` (theorem) — norm identity via Fubini/Parseval.
17. `def-trace-class-operator` (definition) — $\sum s_n(T)<\infty$.
18. `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators` (theorem).
19. `thm-trace-class-is-a-two-sided-banach-operator-ideal` (theorem).
20. `def-trace-of-a-trace-class-operator` (definition) — $\operatorname{tr}T=\sum_e\langle Te,e\rangle$.
21. `thm-trace-is-absolutely-convergent-and-basis-independent` (theorem).
22. `thm-cyclicity-of-the-trace` (theorem) — $\operatorname{tr}(ST)=\operatorname{tr}(TS)$ whenever one factor is trace class and the other bounded.
23. `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` (theorem).
24. `thm-lidskii-for-trace-class-operators` (theorem) — trace equals the algebraic-multiplicity sum of eigenvalues; mark as the deep endpoint and decompose via finite-dimensional approximation/source proof.

**Choice and proof plan.**  A sequence of approximate maximizers uses
countable choice under the library's ordinary completeness convention.  The
spectral theorem itself constructs a countable list only for the nonzero
spectral subspaces; a basis for a possibly nonseparable kernel is a separate
AC consequence and is not smuggled into item 5.  Basis independence of the
Hilbert–Schmidt norm and trace is proved first for finite sums, then by
monotone/absolute convergence.  Lidskii is retained because trace class without
the eigenvalue trace formula is incomplete, but its proof must follow a
standard source and may be split into a dedicated A/B pair if the sixty-item
proof-obligation count requires it.

**B page:** `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples`

1. `ex-diagonal-schatten-class-criteria-on-ell-two`.
2. `ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent` — distinguish compact from diagonalizable/self-adjoint.
3. `ex-rank-one-operator-adjoint-norm-and-trace`.
4. `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis` — state continuity/positivity hypotheses that make the diagonal formula legitimate.
5. `cex-compact-does-not-imply-hilbert-schmidt`.
6. `cex-hilbert-schmidt-does-not-imply-trace-class`.
7. `cex-trace-of-products-is-not-cyclic-without-summability`.
8. `rem-schatten-p-classes` (remark, L/NA) — define the scale only as a sourced orientation beyond $p=1,2,\infty$; no later dependency.

### FA-17 — Banach algebras, spectra, and holomorphic functional calculus

**A page:** `banach-algebras-spectrum-and-holomorphic-functional-calculus`

**Requires:** FA-1, FA-2, FA-12 for Banach-valued integration, and the planned
complex-analysis pages `complex-power-series-and-analytic-functions`,
`contour-integration`, `goursat-and-cauchys-theorem-in-a-convex-domain`,
`analyticity-liouville-and-morera`, and
`the-winding-number-and-the-global-cauchy-theorem`.  Each currently has
`items: []`; this pair must wait until they supply the scalar power-series,
Cauchy theorem/formula, Liouville, winding-number, and contour-integration
items actually used.

**Source backing read:** Bühler–Salamon §§1.4, 5.1.1–5.2.4, pp. 42–47 and
210–233 (*Banach Algebras*; *Complex Banach Spaces*; *Integration*;
*Holomorphic Functions*; *The Spectrum of a Bounded Linear Operator*; *The
Spectral Radius*; *The Spectrum of a Compact Operator*; *Holomorphic
Functional Calculus*); Teschl §§6.1 and 6.6, pp. 162–169 and 189–192 (*Banach
algebras*; *Spectral theory for bounded operators*); Shirbisheh ch. 2
§§2.1–2.5 (Banach algebras, spectra, holomorphic functional calculus).

Items:

1. `def-unital-banach-algebra` (definition) — a complete normed algebra with $\|ab\|\le\|a\|\|b\|$ and normalized unit $\|1\|=1$.
2. `def-invertible-element-and-general-linear-group-of-a-banach-algebra` (definition).
3. `lem-neumann-series` (lemma) — $\|a\|<1$ implies $(1-a)^{-1}=\sum_{n\ge0}a^n$ with a quantitative remainder.
4. `thm-invertible-group-is-open-and-inversion-is-continuous` (theorem) — include the resolvent estimate around an invertible element.
5. `def-spectrum-and-resolvent-set-in-a-banach-algebra` (definition) — $\sigma_A(a)=\{\lambda:\lambda1-a\notin A^\times\}$ for complex unital $A$.
6. `lem-resolvent-identity` (lemma) — both one- and two-parameter forms, with factor order correct in the noncommutative case.
7. `thm-resolvent-is-banach-valued-holomorphic` (theorem) — local Neumann expansion and derivative formula.
8. `thm-spectrum-is-nonempty-compact-and-norm-bounded` (theorem) — Liouville proof of nonemptiness, closedness plus Neumann bound for compactness.
9. `def-spectral-radius` (definition).
10. `thm-spectral-radius-formula` (theorem) — $r(a)=\lim_n\|a^n\|^{1/n}=\inf_n\|a^n\|^{1/n}$.
11. `thm-polynomial-spectral-mapping` (theorem) — $\sigma(p(a))=p(\sigma(a))$.
12. `def-complexification-and-spectrum-of-a-real-operator` (definition) — define the real operator's spectrum through a specified complexification and prove independence up to the canonical isomorphism.
13. `thm-gelfand-mazur` (theorem) — every complex unital Banach division algebra is isometrically/algebraically $\mathbb C$ after normalizing the unit; state exactly which conclusion is isometric.
14. `def-banach-algebra-valued-contour-integral` (definition) — continuous contour integral via the Banach completion, agreeing with FA-12's Bochner integral.
15. `lem-contour-integral-commutes-with-bounded-linear-maps` (lemma).
16. `lem-banach-valued-cauchy-integral-vanishes` (lemma) — if a Banach-valued continuous integrand is weakly holomorphic on the relevant region, apply every bounded functional, use the scalar Cauchy theorem, and invoke FA-4 dual separation; this supplies the needed vector-valued contour deformation rather than assuming it from complex analysis.
17. `def-holomorphic-functional-calculus` (definition) — $f(a)=\frac1{2\pi i}\int_\Gamma f(z)(z1-a)^{-1}\,dz$ for a contour system around $\sigma(a)$.
18. `lem-holomorphic-functional-calculus-is-contour-independent` (lemma) — deformations inside the holomorphy domain and resolvent identity.
19. `thm-holomorphic-functional-calculus-homomorphism` (theorem) — unital algebra homomorphism, agrees with polynomials and inverses.
20. `thm-holomorphic-spectral-mapping` (theorem) — $\sigma(f(a))=f(\sigma(a))$, including locally constant components.
21. `def-riesz-spectral-projection` (definition) — contour integral around a clopen spectral subset.
22. `thm-riesz-spectral-projection-properties` (theorem) — idempotence, commutation with $a$, invariant splitting, and separated spectra of the restrictions.
23. `def-calkin-algebra` (definition) — $\mathcal B(X)/\mathcal K(X)$ when compact operators form the closed ideal supplied by FA-15.
24. `cor-atkinson-in-calkin-algebra-language` (corollary) — reconcile FA-15's Atkinson theorem with quotient invertibility.

**Well-definedness and hard-proof plan.**  The spectrum is defined only for a
unital complex algebra; nonunital algebras require unitization and are treated
on the B page.  The real spectrum is not improvised as “real $\lambda$ where
$\lambda I-T$ fails”: it is the spectrum of the complexification.  The
holomorphic calculus proves contour-system independence before using the
notation $f(a)$, and the multiplication proof uses the resolvent identity plus
Cauchy/Fubini with the two contours separated.  A Riesz projection does not
depend on the chosen contour once its spectral subset is fixed.

**B page:** `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples`

1. `ex-continuous-functions-form-a-commutative-banach-algebra`.
2. `ex-bounded-operators-form-a-noncommutative-banach-algebra`.
3. `ex-spectrum-in-a-finite-dimensional-matrix-algebra` — eigenvalues and determinant.
4. `ex-spectrum-of-a-multiplication-operator` — essential range, citing MT measure notions.
5. `ex-spectrum-of-the-unilateral-shift` — closed unit disk, with point/approximate/residual behavior separated.
6. `cex-norm-need-not-equal-spectral-radius` — a nonzero nilpotent.
7. `cex-spectrum-can-shrink-in-a-larger-banach-algebra` — state the unital-subalgebra hypotheses.
8. `ex-unitization-of-a-nonunital-banach-algebra` — multiplication, norm choice, and spectrum convention.
9. `ex-riesz-projection-for-a-matrix-with-separated-spectrum`.

### FA-18 — Gelfand theory and commutative $C^*$-algebras

**A page:** `gelfand-theory-and-commutative-c-star-algebras`

**Requires:** FA-5, FA-9, FA-13, FA-17; planned predecessor MT-20 (RMK); the authored
`tychonoff-embedding-and-stone-cech`; the topology track's future general
complex Stone–Weierstrass page must be built before the surjectivity step.

**Source backing read:** Bühler–Salamon §§5.4.1–5.5.2, pp. 246–269
(*C* Algebras*; *The Stone–Weierstraß Theorem*; *The Gelfand
Representation*; *C* Algebras of Normal Operators*); Teschl §6.4,
pp. 177–184 (*The Gelfand representation theorem*); Shirbisheh ch. 3
§§3.1–3.4 (*Characters and maximal ideal spaces*; *Gelfand transform*;
*Continuous functional calculus*; *Gelfand duality*, including Definition
3.1.38's proper morphisms, Example 3.1.39's approximate unit, and the
functorial duality proof); Knapp ch. IV §10,
pp. 146–160; Khalkhali §2.1, PDF pp. 3–6 (*Gelfand–Naimark theorems*,
$C_0(X)$, the character space, the general commutative representation, and
the locally compact duality statement).

Items:

1. `def-character-and-maximal-ideal-space` (definition) — nonzero multiplicative linear functionals and $\Delta(A)$ with weak-star topology.
2. `thm-characters-on-a-unital-banach-algebra-are-continuous` (theorem) — $\chi(1)=1$, $|\chi(a)|\le r(a)\le\|a\|$, hence $\|\chi\|=1$.
3. `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` (theorem) — for a commutative **unital** complex Banach algebra, maximal ideals are precisely character kernels by Gelfand–Mazur; record the maximal-ideal choice implementation.
4. `thm-spectrum-as-character-values` (theorem) — $\sigma(a)=\{\chi(a):\chi\in\Delta(A)\}$ for commutative unital complex $A$.
5. `thm-maximal-ideal-space-is-compact-hausdorff` (theorem) — a weak-star closed subset of the dual unit ball, with the combined existence/compactness choice ledger.
6. `def-gelfand-transform` (definition) — $a\mapsto\widehat a$ in $C(\Delta(A))$.
7. `thm-gelfand-transform-is-a-contractive-unital-homomorphism` (theorem) — $\|\widehat a\|_\infty=r(a)$.
8. `def-jacobson-radical-and-semisimple-commutative-banach-algebra` (definition).
9. `thm-kernel-of-the-gelfand-transform-is-the-radical` (theorem).
10. `def-c-star-algebra` (definition) — a complex Banach $*$-algebra with $\|a^*a\|=\|a\|^2$ and an isometric involution.
11. `def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra` (definition) — $a=a^*$, $a=b^*b$, $u^*u=uu^*=1$ when a unit is present, and $a^*a=aa^*$ respectively; this supplies the positivity used later in approximate units.
12. `lem-c-star-spectral-radius-equals-norm-for-normal-elements` (lemma) — initially for a unital $C^*$-algebra, so the spectrum is FA-17's named spectrum rather than an implicit unitization spectrum.
13. `lem-characters-on-a-commutative-c-star-algebra-preserve-star` (lemma) — initially in the commutative unital case.
14. `thm-commutative-gelfand-naimark` (theorem) — for a commutative unital complex $C^*$-algebra, the Gelfand transform is an isometric $*$-isomorphism $A\cong C(\Delta(A))$.
15. `thm-commutative-gelfand-duality` (theorem) — contravariant equivalence between commutative unital $C^*$-algebras and compact Hausdorff spaces, with arrows checked.
16. `thm-gleason-kahane-zelazko` (theorem) — a linear $\varphi$ with $\varphi(1)=1$ and $\varphi(a)\ne0$ for every invertible $a$ is multiplicative.
17. `thm-banach-stone` (theorem) — for compact Hausdorff $K,L$ over the same scalar field, every surjective linear isometry $C(K)\to C(L)$ has weighted-composition form with a continuous unimodular weight (a sign-valued weight in the real case) and determines a homeomorphism $L\to K$.
18. `thm-gelfand-kolmogorov-for-rings-of-continuous-functions` (theorem) — maximal ideals of $C(X,\mathbb R)$ correspond to $\beta X$ for Tychonoff $X$, citing the published Stone–Čech construction.
19. `def-stone-space-and-clopen-algebra` (definition).
20. `thm-stone-representation-for-boolean-algebras` (theorem) — $b\mapsto\widehat b$ identifies a Boolean algebra with clopens of its ultrafilter space.
21. `thm-stone-duality` (theorem) — the functors on Boolean homomorphisms/continuous maps form a dual equivalence.
22. `def-algebraic-unitization-of-a-star-algebra` (definition) — for a nonunital $*$-algebra $A$, set $\widetilde A=A\oplus\mathbb C1$ with $(a,\lambda)(b,\mu)=(ab+\lambda b+\mu a,\lambda\mu)$ and $(a,\lambda)^*=(a^*,\overline\lambda)$, and name the quotient character $\chi_\infty(a,\lambda)=\lambda$.
23. `thm-minimal-c-star-unitization` (theorem) — if $A$ is a nonunital $C^*$-algebra, the left-multiplier norm $\|a+\lambda1\|=\sup_{b\in A,\,\|b\|\le1}\|ab+\lambda b\|$ is faithful, complete, and satisfies the $C^*$ identity; $A$ is a closed two-sided ideal, and for every unital $C^*$-algebra $B$ containing $A$ as a closed ideal, $a+\lambda1\mapsto a+\lambda1_B$ is the unique injective unital $*$-homomorphism extending the inclusion.
24. `thm-character-space-of-the-unitization-is-one-point-compactification` (theorem) — restriction identifies $\Delta(\widetilde A)\setminus\{\chi_\infty\}$ with $\Delta(A)$ and its compact topology is the one-point compactification, so $\Delta(A)$ is locally compact Hausdorff.
25. `thm-nonunital-commutative-gelfand-naimark` (theorem) — for every commutative complex $C^*$-algebra, the Gelfand transform is an isometric $*$-isomorphism $A\cong C_0(\Delta(A))$; item 14 is its compact/unital specialization.
26. `def-approximate-unit-and-proper-c-star-morphism` (definition) — define an approximate unit as a net of positive contractions $(e_\lambda)$ with $e_\lambda a\to a$ and $ae_\lambda\to a$ for every $a$, and, following Shirbisheh, call $\varphi:A\to B$ proper when the image of every approximate unit of $A$ is an approximate unit of $B$.
27. `thm-every-commutative-c-star-algebra-has-an-approximate-unit` (theorem) — through item 25, the directed family of compactly supported positive contractions in $C_0(\Delta(A))$ is an approximate unit; index by all admissible functions rather than making one choice for every compact set.
28. `thm-locally-compact-gelfand-duality` (theorem) — $X\mapsto C_0(X)$ and $A\mapsto\Delta(A)$ give a contravariant equivalence between locally compact Hausdorff spaces with proper continuous maps and commutative $C^*$-algebras with proper morphisms; the compact/unital subcategories recover item 15.

**Hard proof and seam plan.**  Character existence is not inferred from
Alaoglu: one first places a proper ideal in a maximal ideal, then applies
Gelfand–Mazur; the implemented maximal-ideal proof is tagged AC and no sharper
equivalence is asserted.  Compactness of the already-existing character set
uses Alaoglu/BPI.  Gelfand–Naimark proves self-adjoint separation of points,
uses the $C^*$ identity for isometry, and cites the topology track's **general
complex** Stone–Weierstrass theorem for surjectivity; the published real
compact-metric special case is insufficient.  Banach–Stone uses MT-20 to
identify extreme points of the dual ball as unimodular point masses and checks
weak-star continuity.  Gelfand–Kolmogorov is not used by the Banach-algebra
spine because $C(X)$ for noncompact $X$ need not be normed by a finite supremum.
Stone duality is a parallel, topological dictionary; its BPI-equivalent
ultrafilter existence is explicit.  The nonunital extension is not waved
through as “the same proof”: the minimal unitization's norm and involution are
checked, the distinguished quotient character is removed, and vanishing at
infinity is proved from the one-point compactification.  Approximate units are
then constructed without choosing one bump function for each compact set, and
arrows are restricted to the source's proper-morphism convention so pullback
really lands in $C_0$.

**B page:** `gelfand-theory-and-commutative-c-star-algebras-examples`

1. `ex-maximal-ideal-space-of-c-of-k` — evaluations give a homeomorphism with $K$.
2. `ex-maximal-ideal-space-of-the-disc-algebra` — distinguish the algebra from all of $C(\mathbb T)$.
3. `ex-gelfand-transform-of-ell-one-of-z` — characters and Fourier series, with no Wiener theorem silently added.
4. `cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric` — radical/non-normal example.
5. `ex-banach-stone-weighted-composition-isometries`.
6. `ex-gelfand-kolmogorov-recovers-beta-x-not-x`.
7. `ex-stone-duality-for-a-power-set-algebra`.
8. `ex-stone-duality-for-a-finite-boolean-algebra`.
9. `rem-nagata-cp-theorem-remains-topological` (remark, L/NS) — exact deferred statement and §3 disposition, never a dependency.
10. `rem-gerlits-nagy-remains-selection-principle-theory` (remark, L/NS) — exact four-way equivalence and §3 disposition.
11. `rem-linear-dugundji-extension-remains-topological` (remark, L/NS) — exact theorem and its paracompactness/choice seam.
12. `ex-c-zero-of-a-locally-compact-space` — evaluations identify $X$ with $\Delta(C_0(X))$, including a noncompact example where the algebra has no unit.
13. `ex-unitization-corresponds-to-one-point-compactification` — $\widetilde{C_0(X)}\cong C(X^+)$ and the added character is evaluation at infinity.

### FA-19 — Continuous functional calculus for self-adjoint and normal operators

**A page:** `continuous-functional-calculus-for-self-adjoint-and-normal-operators`

**Requires:** FA-13, FA-17, FA-18; the general Stone–Weierstrass dependency
used and proved available at FA-18.

**Source backing read:** Bühler–Salamon §§5.3.1–5.5.3, pp. 233–273
(*Complex Hilbert Spaces*; *The Adjoint Operator*; *The Spectrum of a Normal
Operator*; *The Spectrum of a Self-Adjoint Operator*; *Functional Calculus for
Self-Adjoint Operators*; *Gelfand Representation*; *C* Algebras of Normal
Operators*; *Functional Calculus for Normal Operators*); Teschl §6.2,
pp. 169–173 (*The C* algebra of operators and the spectral theorem*);
Williams §§2–4, pp. 4–15 (*The spectrum*; *The Gelfand transform*; *The
Abstract Spectral Theorem*).

Items:

1. `lem-spectrum-of-a-self-adjoint-operator-is-real` (lemma) — resolvent lower bound off $\mathbb R$.
2. `lem-spectrum-of-a-positive-operator-is-nonnegative` (lemma).
3. `thm-self-adjoint-norm-and-spectrum-extrema` (theorem) — $\|T\|=r(T)=\max_{\lambda\in\sigma(T)}|\lambda|$ and spectral bounds match quadratic-form bounds.
4. `def-order-on-bounded-self-adjoint-operators` (definition) — $S\le T$ iff $T-S$ is positive.
5. `thm-positive-square-root` (theorem) — a positive bounded operator has a unique positive square root commuting with every operator that commutes with it.
6. `def-absolute-value-of-a-bounded-operator` (definition) — $|T|=(T^*T)^{1/2}$; reconcile FA-16's compact special case.
7. `thm-polar-decomposition-for-bounded-operators` (theorem) — $T=U|T|$ with a unique partial isometry on the support and precise kernels.
8. `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators` (theorem) — unique isometric unital $*$-homomorphism $C(\sigma(T))\to\mathcal B(H)$ sending the coordinate function to $T$.
9. `thm-continuous-functional-calculus-properties` (theorem) — norm, positivity, composition, spectral mapping, and uniform approximation.
10. `def-c-star-algebra-generated-by-a-normal-operator` (definition) — $C^*(I,T)$, commutative exactly when $T$ is normal.
11. `thm-continuous-functional-calculus-for-bounded-normal-operators` (theorem) — $C(\sigma(T))\cong C^*(I,T)$.
12. `cor-normal-operator-norm-equals-spectral-radius` (corollary).
13. `cor-normal-operator-with-zero-spectrum-is-zero` (corollary) — explicitly false without normality.
14. `thm-spectral-mapping-for-continuous-normal-functional-calculus` (theorem).
15. `thm-bounded-normal-operator-abstract-spectral-theorem` (theorem) — the generated algebra is a concrete copy of continuous functions on the spectrum; PVM and multiplication forms wait for FA-20.

**Proof plan.**  The positive square root is built by continuous polynomial
approximation on $[0,\|T\|]$ and uniqueness uses commutation plus positivity;
no circular appeal to Borel calculus is permitted.  The self-adjoint calculus
is first defined on polynomials in the identity function, shown isometric via
the $C^*$ identity and spectral radius, and extended by completeness.  The
normal calculus then uses FA-18 on the commutative algebra $C^*(I,T)$; the
character-space-to-spectrum homeomorphism is proved rather than assumed.

**B page:** `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples`

1. `ex-functional-calculus-for-a-diagonal-operator`.
2. `ex-functional-calculus-for-a-multiplication-operator`.
3. `ex-square-root-and-absolute-value-of-a-matrix`.
4. `ex-polar-decomposition-of-the-unilateral-shift`.
5. `cex-a-quasinilpotent-operator-need-not-be-zero` — Volterra/operator Jordan block.
6. `cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections` — motivates FA-20.
7. `cex-self-adjointness-cannot-be-dropped-from-the-order-calculus`.

### FA-20 — Spectral measures and Borel functional calculus

**A page:** `spectral-measures-and-borel-functional-calculus`

**Requires:** FA-9, FA-12–FA-14, FA-18–FA-19; planned predecessors MT-8,
MT-11, MT-12, and MT-20 for scalar/complex integration and RMK.

**Source backing read:** Bühler–Salamon §§5.6–5.7, pp. 273–298
(*Projection Valued Measures*; *Measurable Functional Calculus*; *Cyclic
Vectors*); Teschl §6.3, pp. 173–177 (*Spectral measures*) and *Mathematical
Methods in Quantum Mechanics* §§3.1–3.3, pp. 99–130; Williams §§4–5,
pp. 9–20 (*The Abstract Spectral Theorem*; *Spectral Integrals*).

Items:

1. `def-projection-valued-measure` (definition) — orthogonal projections, $E(\varnothing)=0$, $E(\Omega)=I$, multiplicativity on intersections, and countable additivity in SOT.
2. `lem-scalar-and-complex-measures-from-a-pvm` (lemma) — $E_{x,y}(B)=\langle E(B)x,y\rangle$ and polarization.
3. `def-integral-of-a-simple-function-against-a-pvm` (definition).
4. `lem-simple-pvm-integral-is-representation-independent` (lemma) — common measurable partition and orthogonal sums.
5. `thm-bounded-borel-pvm-integral` (theorem) — extend uniformly, prove $\|\int f\,dE\|\le\|f\|_\infty$ and the scalar pairing identity.
6. `thm-pvm-integral-is-a-star-homomorphism` (theorem) — products, conjugation, bounded convergence in SOT.
7. `def-borel-functional-calculus-for-a-bounded-normal-operator` (definition).
8. `thm-spectral-theorem-for-bounded-normal-operators-pvm-form` (theorem) — unique regular PVM on $\sigma(T)$ with $T=\int z\,dE(z)$.
9. `thm-borel-functional-calculus-for-bounded-normal-operators` (theorem) — bounded Borel $f\mapsto f(T)$ extending FA-19's continuous calculus.
10. `cor-spectral-projections-and-resolution-of-the-identity` (corollary) — characteristic functions produce reducing projections and recover half-line resolutions for self-adjoint $T$.
11. `thm-support-and-uniqueness-of-the-spectral-measure` (theorem).
12. `def-cyclic-vector-and-cyclic-normal-operator` (definition).
13. `thm-cyclic-spectral-representation` (theorem) — a cyclic normal operator is unitarily equivalent to multiplication by the coordinate on $L^2(\sigma(T),\mu)$.
14. `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces` (lemma) — AC/Zorn step, isolated from the analytic argument.
15. `thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem` (theorem) — orthogonal direct sum of cyclic $L^2$ representations; separable multiplicity form stated separately.
16. `def-spectral-multiplicity-function-in-the-separable-case` (definition).
17. `thm-unitary-equivalence-classified-by-measure-class-and-multiplicity` (theorem) — exact separable normal-operator statement from the source.

**Well-definedness and proof plan.**  SOT additivity is stated before any
operator-valued integral; WOT additivity alone is shown equivalent for
orthogonal projections rather than silently substituted.  Complex measures
$E_{x,y}$ are recovered from positive $E_x$ by polarization with the fixed
inner-product convention.  The PVM is obtained from the positive functionals
$f\mapsto\langle f(T)x,x\rangle$ using MT-20 and then polarized; uniqueness is
checked on every scalar pairing.  Multiplication representation is first
proved for one given cyclic vector; choosing a maximal cyclic decomposition is
the only AC step in the general form.

**B page:** `spectral-measures-and-borel-functional-calculus-examples`

1. `ex-pvm-of-a-diagonal-normal-operator`.
2. `ex-pvm-of-a-multiplication-operator`.
3. `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` — reconcile FA-17.
4. `ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator`.
5. `ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function`.
6. `cex-continuous-functional-calculus-cannot-produce-every-spectral-projection`.
7. `cex-a-normal-operator-need-not-have-any-eigenvectors` — nonatomic multiplication operator.
8. `rem-direct-integrals-and-general-multiplicity-theory` (remark, L/NS) — orientation only, beyond the separable theorem proved here.

### FA-21 — Unbounded self-adjoint operators and Stone's theorem

**A page:** `unbounded-self-adjoint-operators-and-stones-theorem`

**Requires:** FA-6, FA-12–FA-13, FA-17, FA-19–FA-20; no Sobolev-space
dependency.

**Source backing read:** Bühler–Salamon §§6.1–6.5, pp. 305–353
(*Unbounded Operators on Banach Spaces*; *The Spectrum of an Unbounded
Operator*; *Spectral Projections*; *The Dual of an Unbounded Operator*; *The
Adjoint of an Unbounded Operator*; *Unbounded Self-Adjoint Operators*;
*Unbounded Normal Operators*; *Functional Calculus*; *Spectral Measures*);
Teschl, *Mathematical Methods in Quantum Mechanics*, §§2.2, 2.4, 3.1, and
5.1, pp. 66–75, 83–89, 99–111, 145–150; Williams §7, pp. 28–39 (*A Spectral
Theorem for Unbounded Operators*, including *Stone's Theorem: Part I/II*).

Items:

1. `def-unbounded-linear-operator-domain-and-graph` (definition) — $T:D(T)\subset H\to H$ includes its domain as part of the data.
2. `def-densely-defined-closed-and-closable-operator` (definition).
3. `thm-closure-of-a-closable-operator` (theorem) — the graph closure defines the least closed extension; prove single-valuedness.
4. `def-adjoint-of-a-densely-defined-unbounded-operator` (definition) — $y\in D(T^*)$ iff $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$ in the ambient norm.
5. `lem-unbounded-adjoint-is-well-defined-and-closed` (lemma) — density gives uniqueness of the representing vector.
6. `thm-closable-iff-adjoint-domain-is-dense` (theorem) — and $\overline T=T^{**}$ when closable.
7. `def-symmetric-self-adjoint-and-essentially-self-adjoint` (definition) — $T\subset T^*$ versus equality including domains; essential self-adjointness means $\overline T$ is self-adjoint.
8. `cex-symmetric-need-not-be-self-adjoint` (counterexample) — the minimal derivative with boundary conditions, with domains computed.
9. `def-resolvent-and-spectrum-of-a-closed-unbounded-operator` (definition) — $T-z:D(T)\to H$ bijective with bounded everywhere-defined inverse.
10. `thm-self-adjoint-resolvent-estimate` (theorem) — $\|(T-z)^{-1}\|\le|\operatorname{Im}z|^{-1}$ off the real line.
11. `thm-self-adjointness-range-criterion` (theorem) — a closed symmetric $T$ is self-adjoint iff $\operatorname{ran}(T\pm i)=H$.
12. `def-cayley-transform-of-a-self-adjoint-operator` (definition) — $U=(T-i)(T+i)^{-1}$.
13. `thm-cayley-correspondence` (theorem) — self-adjoint operators correspond to unitaries for which $1$ is not an eigenvalue, with $D(T)=\operatorname{ran}(I-U)$ and all signs checked.
14. `def-unbounded-integral-against-a-pvm` (definition) — domain $\{x:\int|f|^2\,dE_x<\infty\}$ and action by truncation.
15. `lem-unbounded-pvm-integral-is-well-defined-and-closed` (lemma) — truncation limit independent of the approximating bounded functions.
16. `thm-spectral-theorem-for-unbounded-self-adjoint-operators` (theorem) — unique PVM $E$ on $\mathbb R$ with $T=\int\lambda\,dE(\lambda)$ on its natural domain.
17. `thm-unbounded-borel-functional-calculus` (theorem) — domains, adjoints, products on their correct common domains, and spectral mapping in the sourced form.
18. `def-strongly-continuous-one-parameter-unitary-group` (definition) — $U(t+s)=U(t)U(s)$ and strong continuity.
19. `def-infinitesimal-generator-of-a-unitary-group` (definition) — domain of the strong derivative at zero.
20. `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group` (lemma) — $U(t)=e^{itT}$ by Borel calculus and dominated convergence.
21. `lem-generator-of-a-unitary-group-is-skew-adjoint` (lemma) — resolvent/Laplace-transform construction, not formal differentiation alone.
22. `thm-stone-one-parameter-unitary-groups` (theorem) — bijection between self-adjoint $T$ and strongly continuous unitary groups $U(t)=e^{itT}$, with uniqueness of the generator.

**Hard proof and domain plan.**  Equality of unbounded operators always means
equality of domains and values.  The adjoint is defined only for dense domains;
density is used for uniqueness, not hidden.  Products in the Borel calculus
carry the natural domain and no blanket bounded-operator algebra law is
asserted.  The spectral theorem may be proved by Cayley transform plus FA-20,
with the point $1$ treated by the domain formula, or by Williams's resolvent
representation; one route is chosen and the other becomes a remark.  Stone's
converse constructs resolvents from the group and proves the range criterion,
rather than assuming differentiability for every vector.

**B page:** `unbounded-self-adjoint-operators-and-stones-theorem-examples`

1. `ex-unbounded-multiplication-operator-and-its-domain` — spectrum, PVM, and functional calculus.
2. `ex-position-operator-on-l-two-of-r`.
3. `ex-momentum-operator-under-the-fourier-transform` — finalized after FA-23, with no Sobolev terminology.
4. `ex-periodic-derivative-and-its-unitary-translation-group` — boundary conditions make the self-adjoint domain.
5. `cex-the-minimal-derivative-is-symmetric-not-self-adjoint`.
6. `cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded` — cite FA-6 closed graph.
7. `cex-strongly-continuous-unitary-group-need-not-be-norm-continuous` — unbounded generator.
8. `rem-self-adjoint-extensions-and-deficiency-indices` (remark, L/NS) — exact von Neumann theorem as orientation only unless a later build expands the page; not a dependency.

### FA-22 — Fourier transform, convolution, and approximate identities

**A page:** `fourier-transform-convolution-and-approximate-identities`

**Requires:** planned predecessors MT-4, MT-8, MT-11, MT-14, MT-15, and MT-17,
especially MT-15's scalar translation, convolution, approximate-identity, and
density results and MT-17's Lebesgue-point theorem; published complex
exponential and Euclidean calculus.  None of those is redefined.

**Source backing read:** Teschl §14.1, pp. 379–388 (*The Fourier transform on
$L^1$ and $L^2$*), restricted here to the $L^1$ half; Knapp, *Basic Real
Analysis*, ch. VIII §§1–2 (*Elementary Properties*; *Fourier Transform on
$L^1$, Inversion Formula*); Knapp,
*Advanced Real Analysis* ch. III §1, pp. 54–60 (*Tempered Distributions*, whose
opening reviews the transform); MIT/Dyatlov 18.155 §11.1, pp. 119–126
(*Fourier transform on Schwartz functions*) for an independent normalization
check.

Items:

1. `def-fourier-transform-on-l-one-of-rn` (definition) — $\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$ on MT-14's a.e. classes.
2. `lem-l-one-fourier-transform-is-well-defined` (lemma) — changing $f$ on a null set changes no value; absolute integrability holds for every $\xi$.
3. `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` (theorem) — $\|\widehat f\|_\infty\le\|f\|_1$ and dominated-convergence uniform continuity.
4. `thm-fourier-translation-modulation-dilation-and-reflection-laws` (theorem) — all constants and determinant factors under the fixed $2\pi$ convention.
5. `thm-fourier-transform-converts-convolution-to-products` (theorem) — $\widehat{f*g}=\widehat f\,\widehat g$, using MT-15 and Fubini.
6. `lem-fourier-transform-of-a-gaussian` (lemma) — compute by the sourced ODE/tensor-product route and pin down normalization.
7. `thm-riemann-lebesgue` (theorem) — $\widehat f\in C_0(\mathbb R^n)$ for $f\in L^1$.
8. `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity` (lemma) — both physical and frequency-side formulas.
9. `thm-fourier-inversion-at-lebesgue-points-under-summability` (theorem) — Gaussian/Abel means converge to $f(x)$ at every Lebesgue point.
10. `thm-l-one-fourier-inversion` (theorem) — if $f,\widehat f\in L^1$, then $f$ agrees a.e. with the continuous function $x\mapsto\int\widehat f(\xi)e^{2\pi ix\cdot\xi}\,d\xi$.
11. `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis` (theorem) — if $f,g\in L^1$ and $\widehat f\in L^1$, then the continuous representative of $f$ supplied by item 10 satisfies $fg\in L^1$ and $\widehat{fg}=\widehat f*\widehat g$; the symmetric variant follows by exchanging the factors.
12. `cor-uniqueness-of-the-l-one-fourier-transform` (corollary) — $\widehat f=0$ implies $f=0$ a.e.
13. `cor-convolution-approximate-identities-from-fourier-multipliers` (corollary) — cite MT-15 for convergence and identify the multiplier limit; no second approximate-identity theorem.
14. `thm-fourier-transform-of-a-finite-complex-measure` (theorem) — bounded uniformly continuous Fourier–Stieltjes transform, using MT-12/MT-20.
15. `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` (corollary) — Gaussian smoothing plus MT regularity.

**Proof and well-definedness plan.**  The definition is on equivalence classes,
so null-set invariance is explicit.  Every interchange of integrals names
Tonelli or Fubini and verifies absolute integrability.  Inversion first proves
a summability statement at Lebesgue points; the $f,\widehat f\in L^1$ theorem
then produces a continuous representative and identifies it a.e.  It does not
claim pointwise recovery for an arbitrary representative.  MT-15 owns
convolution and approximate identities; this page proves only how Fourier
transform interacts with them.

**B page:** `fourier-transform-convolution-and-approximate-identities-examples`

1. `ex-fourier-transform-of-an-interval-indicator` — sinc with the value at zero defined by continuity.
2. `ex-fourier-transform-of-a-gaussian` — parameter scaling and tensor products.
3. `ex-fourier-transform-of-the-poisson-kernel`.
4. `ex-fourier-transform-of-a-compactly-supported-triangle-function` — convolution computation.
5. `cex-fourier-transform-of-an-l-one-function-need-not-be-integrable`.
6. `cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative` — null-set change alone supplies the clean warning.
7. `cex-riemann-lebesgue-has-no-universal-rate` — source-backed construction or Baire argument, never load-bearing.
8. `rem-wiener-tauberian-theorem` (remark, L/NS) — orientation beyond the commissioned foundation.

### FA-23 — Schwartz space and Plancherel

**A page:** `schwartz-space-and-the-plancherel-theorem`

**Requires:** FA-13–FA-14, FA-22; planned predecessors MT-8, MT-11, MT-14,
MT-15; published multivariable differential notation and smooth cutoff
functions.

**Source backing read:** Teschl §§14.1 and 14.5, pp. 379–388 and 404–411
(*The Fourier transform on $L^1$ and $L^2$*; *Tempered distributions*);
Knapp, *Advanced Real Analysis* ch. III §1, pp. 54–60, and ch. V §4,
pp. 202–206 (*Role of Fourier Transform*); Dyatlov §§11.1–11.2, pp. 119–135
(*Fourier transform on Schwartz functions*; *Fourier transform on tempered
distributions*), using only §11.1 for this A page.

Items:

1. `def-multi-index-notation-for-euclidean-fourier-analysis` (definition) — reuse any authored calculus notation verbatim and add no duplicate id if already present.
2. `def-schwartz-space-and-its-seminorms` (definition) — $\mathcal S(\mathbb R^n)$ with $p_{\alpha,\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$.
3. `def-schwartz-topology-and-convergence` (definition) — locally convex topology generated by the countable seminorm family.
4. `thm-schwartz-space-is-frechet` (theorem) — construct a complete translation-invariant metric and prove its topology agrees with all seminorms.
5. `lem-schwartz-functions-and-all-derivatives-are-integrable` (lemma).
6. `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space` (lemma) — cutoff estimates in every seminorm.
7. `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` (theorem).
8. `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` (theorem) — integration by parts gives the derivative/multiplication identities.
9. `thm-fourier-inversion-on-schwartz-space` (theorem) — absolute Fubini plus Gaussian regularization.
10. `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space` (corollary).
11. `thm-parseval-pairing-on-schwartz-space` (theorem) — $\langle\widehat f,\widehat g\rangle_{L^2}=\langle f,g\rangle_{L^2}$ under the fixed convention.
12. `lem-schwartz-space-is-dense-in-l-two` (lemma) — cite MT-15's density and show the smoothing/cutoff approximants may be chosen Schwartz.
13. `thm-plancherel` (theorem) — unique unitary extension $\mathcal F:L^2(\mathbb R^n)\to L^2(\mathbb R^n)$.
14. `thm-l-one-l-two-agreement-of-fourier-transform` (theorem) — for $f\in L^1\cap L^2$, the Plancherel transform is represented a.e. by FA-22's integral transform.
15. `thm-l-two-fourier-inversion` (theorem) — inverse is reflection/conjugate convention as fixed, with equality in $L^2$.
16. `thm-poisson-summation-for-schwartz-functions` (theorem) — periodize, identify Fourier coefficients, and justify absolute/uniform summation.

**Proof and topology plan.**  A statement that a sequence converges in
$\mathcal S$ always means every seminorm tends to zero; the metric is proved
equivalent and never replaces this definition silently.  Integration by parts
is justified by Schwartz decay on expanding boxes.  Plancherel is defined by
completion of the dense Schwartz subspace; representative agreement on
$L^1\cap L^2$ is a theorem, not part of the definition.  Surjectivity follows
from inversion/dense range, not merely from isometry.

**B page:** `schwartz-space-and-the-plancherel-theorem-examples`

1. `ex-gaussians-and-polynomials-times-gaussians-are-schwartz`.
2. `cex-a-smooth-integrable-function-need-not-be-schwartz`.
3. `cex-a-schwartz-function-need-not-have-compact-support`.
4. `ex-hermite-functions-as-fourier-eigenfunctions` — normalization and completeness source-backed.
5. `ex-plancherel-for-an-interval-indicator` — derive a sinc-square integral without pointwise inversion abuse.
6. `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation`.
7. `thm-heisenberg-uncertainty-inequality` — for Schwartz functions, with equality characterization by Gaussians; useful corollary, not a later dependency.
8. `rem-hausdorff-young-and-interpolation` (remark, L/NS) — deferred to harmonic analysis, orientation only.

### FA-24 — Test functions, distributions, and differentiation

**A page:** `distributions-test-functions-and-differentiation`

**Requires:** FA-6 for Banach–Steinhaus context, FA-23 for smooth cutoffs and
Schwartz comparison; planned predecessors MT-7, MT-8, and MT-15; and the
published multivariable-calculus pages.  Sobolev spaces are not required.

**Source backing read:** Dyatlov chs. 2–4 and 6, pp. 27–75 (*Definition of
distributions*; *Distributions and convergence*; *Localization*;
*Differentiation*; *Multiplication by smooth functions*; *Support of a
distribution*; *Distributions with compact support*; *Fréchet metric and
Banach–Steinhaus for distributions*; *Distributions supported at one point*;
*Convolution of a distribution and a smooth function*; *Approximation of
distributions by smooth functions*); Knapp ch. IV §§2 and 7, pp. 112–116 and
131–140, and ch. V §§1–3, pp. 179–202; Teschl §14.5, pp. 404–411.

Items:

1. `def-test-function-space-d-of-an-open-set` (definition) — $\mathcal D(\Omega)=C_c^\infty(\Omega)$.
2. `def-fixed-support-test-function-frechet-space` (definition) — $\mathcal D_K$ with derivative sup seminorms for compact $K\Subset\Omega$.
3. `def-test-function-topology` (definition) — the locally convex inductive-limit topology over a compact exhaustion, equivalently the finest locally convex topology making every inclusion $\mathcal D_K\hookrightarrow\mathcal D(\Omega)$ continuous; no global sup norm is assigned.
4. `thm-sequential-convergence-in-test-function-space` (theorem) — $\varphi_n\to\varphi$ iff all supports eventually lie in one compact $K\Subset\Omega$ and every derivative converges uniformly there; this theorem is not used as a definition of the nonmetrizable topology.
5. `thm-test-function-operations-are-continuous` (theorem) — differentiation, multiplication by a smooth function, translation within the domain, and pullback by a diffeomorphism with the Jacobian convention separated.
6. `def-distribution` (definition) — continuous linear functional on $\mathcal D(\Omega)$.
7. `thm-local-finite-order-characterization-of-distributions` (theorem) — for each compact $K$ there are $C,m$ bounding $|u(\varphi)|$ by finitely many derivative seminorms.
8. `def-order-of-a-distribution-on-a-compact-set` (definition).
9. `def-weak-and-strong-topologies-on-distributions` (definition) — weak topology is pointwise convergence on test functions; strong dual topology is uniform convergence on bounded subsets of $\mathcal D$.
10. `lem-strong-distribution-convergence-implies-weak-convergence` (lemma) — do not assert the converse without boundedness hypotheses.
11. `def-regular-distribution-from-a-locally-integrable-function` (definition) — $u_f(\varphi)=\int f\varphi$.
12. `thm-locally-integrable-functions-embed-in-distributions` (theorem) — continuity and injectivity modulo a.e. equality, using mollifier/localization proof.
13. `def-distributional-derivative` (definition) — $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$.
14. `thm-distributional-differentiation-is-continuous-and-commutes` (theorem).
15. `def-multiplication-of-a-distribution-by-a-smooth-function` (definition) — $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$.
16. `thm-leibniz-rule-for-distributions` (theorem).
17. `def-support-of-a-distribution` (definition) — complement of the largest open set on which it vanishes; prove the union is legitimate by locality.
18. `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant` (theorem) — state the connected/component form precisely.
19. `def-dirac-delta-and-its-derivatives` (definition).
20. `thm-distributions-supported-at-one-point` (theorem) — finite linear combinations of delta derivatives.
21. `def-convolution-of-a-distribution-with-a-test-function` (definition).
22. `thm-convolution-with-a-test-function-is-smooth` (theorem) — derivatives pass to either factor with the correct signs.
23. `def-convolution-of-distributions-when-one-has-compact-support` (definition) — tensor pairing/pushforward construction.
24. `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis` (lemma) — the test function presented to the tensor product has compact support where required.
25. `thm-mollifier-approximation-in-distributions` (theorem) — $u*\rho_\varepsilon\to u$ locally in $\mathcal D'$.
26. `cor-smooth-functions-are-weakly-dense-in-distributions` (corollary).

**Well-definedness and topology plan.**  $\mathcal D(\Omega)$ is not assigned
a single global sup norm, and its topology is not defined by sequences.  The
sequential convergence theorem includes one common compact support; omitting
that clause gives a false criterion.  Continuity of a
distribution is converted to a finite-order estimate separately on each
$\mathcal D_K$, so “order” may vary with $K$.  Pullback and convolution are
defined only when their geometric/support hypotheses make the test function
compactly supported.  Equality of regular distributions yields equality a.e.,
not pointwise equality of representatives.

**B page:** `distributions-test-functions-and-differentiation-examples`

1. `ex-derivative-of-the-heaviside-function-is-dirac-delta`.
2. `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas`.
3. `ex-distributional-laplacian-of-the-newtonian-kernel` — state dimension and normalization; PDE orientation only.
4. `ex-principal-value-distribution-one-over-x` — prove the defining limit and continuity.
5. `cex-not-every-distribution-is-a-locally-integrable-function` — delta.
6. `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control`.
7. `ex-compactly-supported-distributions-have-global-finite-order`.
8. `rem-sobolev-weak-derivatives-belong-to-pde` (remark, L/NA) — PDE cites item 13; no $W^{k,p}$ is defined here.

### FA-25 — Tempered distributions and the Fourier transform

**A page:** `tempered-distributions-and-the-fourier-transform`

**Requires:** FA-23–FA-24; planned predecessor MT-14 for locally
integrable/weighted function examples; no Sobolev dependency.

**Source backing read:** Dyatlov §§11.1–11.2, pp. 119–135 (*Fourier transform
on Schwartz functions*; *Fourier transform on tempered distributions*);
Knapp ch. III §1, pp. 54–60 and ch. V §4, pp. 202–206 (*Tempered
Distributions*; *Role of Fourier Transform*); Teschl §14.5, pp. 404–411
(*Tempered distributions*); Heil, Math 7337 notes §3.7 (*The Fourier Transform
of Tempered Distributions*) as a fourth independent check.

Items:

1. `def-tempered-distribution` (definition) — continuous linear functional on $\mathcal S(\mathbb R^n)$.
2. `thm-finite-seminorm-bound-characterizes-tempered-distributions` (theorem) — one finite family of Schwartz seminorms suffices for each functional.
3. `def-weak-and-strong-topologies-on-tempered-distributions` (definition) — pointwise and bounded-set convergence, parallel to but not identified with $\mathcal D'$.
4. `thm-tempered-distributions-embed-continuously-in-distributions` (theorem) — restriction along the continuous dense inclusion $\mathcal D\hookrightarrow\mathcal S$ is injective.
5. `thm-polynomial-growth-functions-define-tempered-distributions` (theorem) — give the exact locally integrable growth bound.
6. `thm-compactly-supported-distributions-are-tempered` (theorem).
7. `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions` (theorem).
8. `def-fourier-transform-of-a-tempered-distribution` (definition) — $\langle\widehat u,\varphi\rangle=\langle u,\widehat\varphi\rangle$ under the symmetric pairing convention fixed in §4.
9. `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous` (lemma) — continuity follows from the topological automorphism of $\mathcal S$.
10. `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions` (theorem) — inverse and reflection conventions.
11. `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions` (theorem) — $\widehat{\partial^\alpha u}=(2\pi i\xi)^\alpha\widehat u$ and the dual identity with all signs.
12. `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms` (theorem) — commute the embeddings for $L^1$ and $L^2$ classes.
13. `def-convolution-of-a-tempered-distribution-with-a-schwartz-function` (definition).
14. `thm-tempered-convolution-is-smooth-with-polynomial-growth` (theorem).
15. `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products` (theorem) — state separately the $\mathcal S' * \mathcal S$ and compact-support cases; no undefined product of two distributions.
16. `def-dirac-comb` (definition) — $\sum_{k\in\mathbb Z^n}\delta_k$ via locally finite/test-function or Schwartz pairing.
17. `thm-dirac-comb-is-fourier-invariant` (theorem) — equivalent to Poisson summation under the fixed normalization.
18. `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials` (theorem) — each equality in $\mathcal S'$ with normalization checked.
19. `thm-constant-coefficient-differential-operators-become-polynomial-multipliers` (theorem) — the precise bridge supplied to PDE.

**Proof and boundary plan.**  The restriction $\mathcal S'\to\mathcal D'$ is
injective because $\mathcal D$ is dense in $\mathcal S$, a fact proved at
FA-23; continuity alone is not enough.  The Fourier transform is defined by
transpose and its sign convention is tested on delta and plane waves before
any downstream use.  Products of arbitrary distributions and convolutions of
two arbitrary tempered distributions are **not** defined.  The multiplier
identity supplies PDE with algebraic reduction only; existence/regularity of
solutions and Sobolev estimates remain PDE's responsibility.

**B page:** `tempered-distributions-and-the-fourier-transform-examples`

1. `ex-fourier-transform-of-dirac-and-one`.
2. `ex-fourier-transform-of-a-plane-wave`.
3. `ex-fourier-transform-of-delta-derivatives-and-monomials`.
4. `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform` — constants checked under the $2\pi$ convention.
5. `ex-dirac-comb-and-poisson-summation`.
6. `ex-fundamental-solution-by-division-of-a-fourier-symbol` — one elementary constant-coefficient example only; marked as an example, never a prerequisite of PDE.
7. `cex-product-of-two-distributions-is-not-canonically-defined` — Heaviside/delta-style obstruction stated without claiming an impossible universal product theorem.
8. `cex-convolution-of-two-tempered-distributions-need-not-exist`.
9. `rem-paley-wiener-and-microlocal-analysis` (remark, L/NS) — orientation beyond this track.

---

## 6. Well-definedness and boundary-obligation ledger

This is a build checklist, not a substitute for the item proofs.  Each row
names the first item at which the obligation must be discharged; later items
may cite that discharge but may not repeat an informal quotient argument.

| construction | obligation that must be visible in the proof | discharge |
|---|---|---|
| normed-space completion | Addition, scalar multiplication, and $\|[x_n]\|=\lim_n\|x_n\|$ must be independent of the Cauchy representatives; the linear structure must agree with the dense original copy. | FA-1 `lem-completion-operations-are-well-defined`, over the already-published metric completion. |
| extension from a dense subspace | If $x_n\to x$ in the dense domain, $(Tx_n)$ must be Cauchy in the complete target and have a limit independent of the approximating sequence. | FA-2 `thm-extension-of-a-bounded-map-from-a-dense-subspace`. |
| quotient norm | $\inf_{m\in M}\|x+m\|$ is invariant under changing $x$ within its coset; its kernel is $\overline M/M$, and no best approximant is assumed. | FA-2 items 13–18. |
| quotient completeness | A quotient Cauchy sequence needs a rapidly Cauchy subsequence and one lift of each increment; the proof must record the resulting $\mathsf{AC}_\omega$ use. | FA-2 item 18 and §8. |
| quotient factorization | $\widetilde T(x+M)=Tx$ must be representative-independent before its norm is computed; equality of norms uses the quotient ball, not an attained infimum. | FA-2 item 19. |
| Kuratowski–Wojdysławski embedding | The based distance-coordinate map is first formed in a concrete Banach function space and is isometric even for an unbounded metric.  Wojdysławski closedness is invoked only for the bounded-metric embedding and only relative to its algebraic convex hull; $d/(1+d)$ gives the all-metrizable topological corollary. | FA-3 items 14–16. |
| complex Hahn–Banach | The real extension of $\operatorname{Re}f$ must reconstruct a unique complex-linear $F$ by the fixed formula and verify both $F|_M=f$ and $|F|\le p$. | FA-4 items 6–8. |
| Minkowski functional | Absorption makes the gauge finite; balancedness/sublinearity give a seminorm; openness/closedness determine whether strict or non-strict gauge inequalities recover the set. | FA-5 items 1–4. |
| separation of convex sets | The quotient by an open convex difference set, the gauge, and the affine constant are fixed before the separating functional is lifted; real and complex formulations are not conflated. | FA-5 items 5–10. |
| finite-dimensional complement | Coordinate functionals are first defined on the finite-dimensional subspace, extended by Hahn–Banach, and assembled into a bounded projection independent of coordinate notation. | FA-5 `cor-finite-dimensional-subspaces-are-complemented`. |
| closed graph | The graph norm is proved to be a norm and complete, and the coordinate projection is shown bounded before open mapping is invoked. | FA-6 items 9–12. |
| adjoint/transpose and closed range | $T^*f=f\circ T$ must have the correct domain and codomain, be bounded, and respect the convention distinguishing Banach transpose from Hilbert adjoint.  Weak-star closure identities are not upgraded to norm-closed range identities until the closed-range hypotheses are proved. | FA-7 items 8–12 and FA-13 items 20–23. |
| canonical bidual embedding | $J_Xx$ is evaluation on $X^*$; norm equality requires the dual norming corollary of Hahn–Banach.  Reflexivity always means surjectivity of this named map. | FA-7 items 13–16. |
| annihilator quotient identifications | Maps on cosets must be independent of representatives; surjectivity and isometry are separate claims and use the correct Hahn–Banach extension. | FA-7 items 4–7. |
| sequence-space duals | A functional is first sent to its coordinate sequence, convergence of the representing series is proved, and surjectivity is checked against MT-16 rather than assumed from notation. | FA-7 items 17–19. |
| weak and weak-star topologies | They are initial topologies for specified dual pairs.  Basic neighborhoods contain only finitely many coordinates, and nets—not sequences—test arbitrary closure. | FA-8 items 1–9. |
| weak-star preadjoint | A weak-star continuous linear map must factor each evaluation through finitely many evaluations; boundedness is retained so the resulting preadjoint is a bounded operator. | FA-8 item 19. |
| Alaoglu product model | Evaluation coordinates satisfy closed linearity equations and norm inequalities; the image is identified before product compactness is applied. | FA-9 items 1–3. |
| weak-star metric for a separable predual | The metric is defined only on a norm-bounded set from a fixed dense sequence; independence of the dense sequence is a topology-agreement theorem, not part of the definition. | FA-9 items 4–5. |
| canonical embedding in Goldstine | The topology on $X^{**}$ is $\sigma(X^{**},X^*)$ and the approximant remains in $B_X$; no reflexivity is presumed. | FA-9 items 6–7. |
| reflexive-space criteria | Weak compactness, weak sequential compactness, and weak countable compactness are defined separately before Eberlein–Šmulian proves their equivalence for Banach spaces. | FA-10 items 1–11. |
| Schauder basis | Expansion is a norm-convergent ordered series with unique coefficients; it is not an unordered Hilbert expansion and not a Hamel basis.  Coordinate maps are proved bounded. | FA-11 items 1–6. |
| $ba(2^{\mathbb N})$ representation | The charge determined by a functional on $\ell^\infty$ is finitely additive and bounded; integration of finite-range sequences is representation-independent and extends by uniform density. | FA-11 items 10–13. |
| James space | The exact endpoint convention in the variation norm is frozen before triangle inequality, completion, dual, and bidual calculations; the noncanonical isometry is never identified with $J_X$. | FA-11 items 14–19. |
| Banach-valued simple integral | Two disjoint measurable representations admit a common refinement; null-set changes do not alter the integral. | FA-12 items 1–2. |
| Bochner integral | Strong measurability is not weakened to scalar measurability; the limit of simple integrals is independent of the approximating sequence, using Banach completeness. | FA-12 items 3–9. |
| vector-measure/RNP vocabulary | Norm countable additivity, variation, and null-set absolute continuity are separate conditions; the density is a Bochner class, hence defined only a.e. | FA-12 items 10–15. |
| Dunford–Pettis on finite-measure $L^1$ | Uniform integrability is cited in MT-10's exact tail form, relative weak compactness is FA-10's topological notion, and both implications keep boundedness and the finite-measure hypothesis visible. | FA-12 item 21. |
| completion of an inner-product space | The extended inner product is independent of both Cauchy representatives and induces the completed norm. | FA-13 item 7. |
| nearest point and projection | Distance is an infimum.  An approximate minimizing sequence is shown Cauchy before a limit is named; uniqueness follows from strict convexity.  The choice convention is stated in §8. | FA-13 items 11–16. |
| Hilbert Riesz representative | The kernel/complement decomposition produces a unique vector, and the conjugation is placed according to the first-variable-linear convention. | FA-13 item 18. |
| arbitrary orthonormal sum | $\sum_{e\in E}|\langle x,e\rangle|^2$ is the supremum over finite subsets and reconstruction is a finite-subset net until countable support is proved. | FA-14 items 3–8. |
| Fourier series on $\mathbb T^n$ | Characters and Haar normalization are fixed before coefficients; product Fejér kernels establish completeness without assuming tensor-product Hilbert theory. | FA-14 items 11–22. |
| compact operator | Relative compactness of $T(B_X)$ is reconciled with sequential compactness only in the metric target; finite-rank approximations require the stated approximation hypothesis. | FA-15 items 1–8. |
| Fredholm index | Kernels and cokernels are proved finite-dimensional before dimensions are subtracted; the cokernel is the quotient by a closed range. | FA-15 items 15–21. |
| singular-value and trace expansions | The positive square root is constructed before $|T|$ is named; eigenspaces are orthogonal, nonzero eigenvalues have finite multiplicity, only countably many terms contribute, and trace independence from the chosen orthonormal basis is proved. | FA-16 items 4–22. |
| unitization and spectrum | Multiplication and norm on the chosen unitization are specified; real spectra are routed through complexification, and invertibility is always in the named unital algebra. | FA-17 items 1–12. |
| holomorphic functional calculus | The contour lies in the resolvent and the Banach-valued integral is defined.  Scalar Cauchy theory is applied after every bounded functional, and FA-4 separation lifts the vanishing back to the Banach algebra. | FA-17 items 13–19. |
| character space and Gelfand transform | Characters are nonzero multiplicative linear functionals with the weak-star topology; automatic continuity is proved before the topology is used. | FA-18 items 1–8. |
| commutative Gelfand–Naimark | The Gelfand transform is an isometric $*$-homomorphism before surjectivity; the latter cites the planned general complex Stone–Weierstrass theorem and may not be built until that page exists.  In the nonunital case the unitization norm, distinguished character, one-point compactification, vanishing-at-infinity condition, approximate units, and the proper-arrow convention are each established before locally compact duality is stated. | FA-18 items 10–16 and 22–28. |
| continuous functional calculus | Polynomial approximation independence, spectral mapping, norm preservation, positivity, and uniqueness are proved rather than packed into notation $f(T)$. | FA-19 items 8–15. |
| PVM integration | PVM axioms specify strong countable additivity.  Simple integrals are independent of the measurable partition and bounded Borel limits are controlled in the strong operator topology. | FA-20 items 1–10. |
| cyclic/multiplicity representation | Scalar spectral measures and $L^2$ classes come from MT-20/MT-14; the unitary map is first defined on bounded Borel functions, proved isometric, and extended by density. | FA-20 items 11–17. |
| unbounded operator | Domain is part of the data.  The adjoint domain is defined by representability of a bounded functional, sums/products state their domains, and closure means closure of the graph. | FA-21 items 1–9. |
| Cayley transform | Resolvent hypotheses ensure the formula is everywhere defined and unitary; the inverse transform is defined only on its natural dense range. | FA-21 items 10–13. |
| unbounded Borel calculus | $f(T)$ has domain $\{x:\int |f|^2\,d\mu_x<\infty\}$; truncations prove closedness and consistency with bounded calculus. | FA-21 items 14–20. |
| $L^1$ convolution and Fourier transform | Representatives determine the same a.e. convolution class by Tonelli; the transform is pointwise well-defined on $L^1$ classes because null changes do not alter the integral. | FA-22 items 1–14. |
| Fourier inversion | The first statement is made under explicit $f,\widehat f\in L^1$ hypotheses; a.e., Lebesgue-point, and uniform conclusions are not interchanged. | FA-22 items 8–15. |
| Schwartz topology | The countable seminorm family, multi-index convention, completeness, and independence from equivalent seminorm systems are established before continuity of Fourier transform. | FA-23 items 1–10. |
| Plancherel extension | The $L^1\cap L^2$ transform is independent of representatives, dense in $L^2$, isometric, and has a uniquely determined unitary extension agreeing with the $L^1$ transform on the overlap. | FA-23 items 11–15. |
| test-function topology | $\mathcal D_K$ and its Fréchet seminorms precede the LF topology; the common-compact-support criterion is then proved for **sequences**, not used as a definition of this nonmetrizable topology. | FA-24 items 1–6. |
| regular distribution | Equality of locally integrable representatives means equality a.e.; local integrability and compact test support make the pairing finite. | FA-24 items 11–12. |
| distribution operations | Derivatives, multiplication, pullback, tensor product, and convolution are defined by their action on tests, with signs, Jacobians, and support hypotheses checked before continuity. | FA-24 items 13–26. |
| tempered distribution/Fourier transpose | Restriction to $\mathcal D$ is injective only after density $\mathcal D\subset\mathcal S$; the Fourier transpose uses the fixed bilinear pairing and its inverse is checked on delta and plane waves. | FA-25 items 1–12. |
| tempered convolution | Only $\mathcal S'*\mathcal S$ and the compact-support cases are defined; no product or convolution of two arbitrary distributions is implied. | FA-25 items 13–19. |

---

## 7. Dependency seams and forward-reference discipline

The pair order is a pedagogical order, not permission to create a cyclic item
DAG.  These are the only deliberate cross-pair scheduling constraints:

- FA-5's complementation theorem consumes FA-4's coordinate extension; FA-2
  introduces complemented subspaces but contains no forward dependency.
- FA-6 consumes the published complete-metric Baire theorem.  It neither proves
  nor restates Baire.  FA-8, FA-10, and parts of FA-15 consume the particular
  FA-6 consequence they name and inherit that result's choice label.
- FA-9 consumes published compact-Hausdorff Tychonoff through BPI.  Its
  Krein–Milman proof has a separate AC cost; those costs are not merged into a
  vague “uses choice” label.
- FA-10's Eberlein–Šmulian proof may cite FA-9 Alaoglu and FA-8 topology, but
  James's theorem is not used to prove Eberlein–Šmulian or reflexivity's basic
  dual characterizations.
- FA-12 may cite FA-13 reflexivity only from its examples page; its A-page proof
  that reflexive spaces have RNP must instead cite FA-10 and the sourced
  dentability route, or the future builder must move the claim after FA-13.
- FA-14 consumes measure theory's $L^2$ classes only after planned MT-14 is
  authored.  Its Fejér proof is deliberately independent of the still-empty
  general Stone–Weierstrass page.
- FA-15's core Fredholm theory is proved before the optional Calkin-algebra
  restatement from FA-17.  The restatement belongs on FA-17's B page if a cycle
  would otherwise result.
- FA-17's Banach-valued contour calculus requires the planned scalar
  complex-analysis chain named in its `Requires` paragraph.  Every one of
  those pages currently has `items: []`; no scalar Cauchy, Liouville, winding,
  or contour theorem may be inferred from the page title alone.
- Every load-bearing MT reference in a `Requires` paragraph is a predecessor
  reservation, not an available item dependency.  The measure block must be
  spliced and authored first, and the future FA build must replace each
  result-level reservation by the actual authored MT item id.
- FA-18's commutative Gelfand–Naimark surjectivity requires the future topology
  page `stone-weierstrass-general`.  At splice/build time it must be nonempty
  and supply the complex self-adjoint Stone–Weierstrass theorem, or FA-18 must
  wait.  The concrete published real compact-metric theorem is not strong
  enough.
- FA-19 precedes FA-20 logically: continuous calculus constructs the bounded
  normal spectral model; PVM integration then refines it to bounded Borel
  functions.  FA-21 extends the same PVM calculus to unbounded real functions.
- FA-22 uses MT-15's convolution and approximate-identity foundations but owns
  the Fourier-transform consequences.  FA-23 extends those results to $L^2$;
  FA-25 extends them by transpose to $\mathcal S'$.
- PDE receives FA-13's Hilbert Riesz theorem, FA-23 Plancherel, FA-24
  distributional derivatives, and FA-25 polynomial-multiplier identities.
  The only unresolved names are PDE's future page ids.  No A-page dependency
  points to them.

At build time every prose-level `Requires` must be expanded to actual existing
item ids.  A page id with `items: []` contributes no dependency.  B-page
examples and every L/NS remark remain leaves.

---

## 8. Choice-strength ledger

Labels describe the proof actually scaffolded and never assert a reverse
implication unless the cited set-theoretic literature proves it.  Write
`ZF`, `AC_omega`, `DC`, `DMC`, `BPI`, `HB`, or `AC` in the future item's
choice note; do not collapse them to “choice”.  Here `HB` denotes the
Hahn–Banach principle itself.  BPI implies HB, while Pincus's models show HB
does not imply BPI; BPI is strictly weaker than AC.  Rossi gives the BPI
equivalence for Banach–Alaoglu.  Blair, Fossy–Morillon, and Bacsich give the
four Baire distinctions already recorded in `DEFERRED.md` §0.

| result or construction | label for this scaffold | exact accounting |
|---|---|---|
| elementary norm, operator norm, finite products, series criterion | ZF | All witnesses are part of a single existential proof or are least natural indices. |
| a sequentially complete metric subspace is topologically closed | $\mathsf{AC}_\omega$ | For each point in the closure, choose one subspace point in every $1/n$ ball and use sequential completeness.  Keremedis–Wajch prove that the unrestricted metric statement is equivalent to countable choice, so it is not folded into the preceding ZF row. |
| extension of a bounded map from an arbitrary dense subspace to a Banach target | $\mathsf{AC}_\omega$ in the selected proof | For each fixed domain point, choose a countable approximating sequence in the dense subspace and prove independence of that sequence.  The cited general uniformly-continuous extension principle is equivalent to countable choice; no converse is claimed for this linear specialization. |
| published Cauchy-sequence metric completion and the FA-1/FA-13 Banach or Hilbert structure on it | $\mathsf{AC}_\omega$ | `thm-metric-completion-exists` explicitly chooses one approximant for each natural index.  The vector operations and representative-independent extended inner product add no choice. |
| quotient seminorm and quotient universal property | ZF | Approximate minimizers are used one epsilon at a time. |
| quotient of a Banach space by a closed subspace is Banach, by the scaffolded lift proof | $\mathsf{AC}_\omega$ | One lift is selected for each increment of a rapidly Cauchy subsequence. |
| finite-dimensional norm equivalence, local compactness, and Riesz's lemma for one named proper closed subspace | ZF | No family of choices is made. |
| construction of an infinite Riesz-separated sequence | DC | Each next vector is chosen outside the closed span generated by the preceding finite sequence.  This item is an optional sequential witness. |
| closed unit ball compact iff finite-dimensional | ZF | Under assumed compactness, one finite $\alpha$-net is available; its finite-dimensional span contradicts a single Riesz-lemma witness.  No infinite sequence is selected. |
| a Banach space has no countably infinite Hamel basis | ZF | A supplied countable basis gives an explicit countable dense rational span, so the separable-complete Baire theorem (the ZF version in `DEFERRED.md` §0) applies to its increasing finite spans. |
| Kuratowski embedding and Wojdysławski closure | ZF | The arbitrary-metric isometry is relative to a supplied base point.  The Wojdysławski theorem uses the canonical bounded equivalent metric and needs no selected base point; its image is closed only relative to the algebraic convex hull. |
| analytic real and complex Hahn–Banach, dual norming, norm-preserving extension | HB | Complex HB is reduced to real HB and spends no extra choice.  BPI is sufficient but is not advertised as exact. |
| existence of discontinuous linear functionals on arbitrary infinite-dimensional Banach spaces | AC in the cited theorem | The scaffold includes only the exact Howard–Rubin/Wright/Garnir boundary remark; it does not derive this from HB.  The explicit discontinuous functional on $c_{00}$ is ZF. |
| geometric separation, Mazur separation, finite-dimensional complementation, Banach limits | HB | Each is proved from the named analytic HB item.  No converse is claimed. |
| complete-metric Baire as used by open mapping and closed graph | DC | Blair's equivalence is the label inherited from the published theorem. |
| separable complete-metric Baire specialization | ZF | Use only when the Banach space itself is supplied with a countable dense set. |
| totally bounded complete or second-countable complete Baire specialization | $\mathsf{AC}_\omega$ | Exact equivalence recorded in `DEFERRED.md` §0. |
| compact-Hausdorff or locally compact regular Baire variants | DMC | These are not the versions used for the general Banach theorems; BPI does not imply DMC. |
| Sokal's Baire-free uniform boundedness implementation for a sequence of operators | $\mathsf{AC}_\omega$ | The explicit constructive estimates still select $T_n$ and $x_n$ countably; it is not labelled ZF.  The general-family Baire proof is DC. |
| weakly convergent sequence is norm bounded | $\mathsf{AC}_\omega$ in the selected proof | The countable family in $X^{**}$ is pointwise bounded and uses Sokal's sequential UBP.  No net version is asserted: in every infinite-dimensional normed space a weakly null net can be unbounded in every tail. |
| weak topology is Hausdorff, and its non-first-countability in infinite dimension | HB for Hausdorffness; HB + $\mathsf{AC}_\omega$ for the selected non-first-countability proof | Dual separation gives Hausdorffness.  For non-first-countability, select one finite-coordinate neighborhood inside each member of a hypothetical countable local base; those countably many functionals span the Banach dual.  FA-3's ZF countable-Hamel-basis obstruction makes the dual finite-dimensional, and dual separation then makes the original space finite-dimensional. |
| coordinate functionals of a Schauder basis are bounded | $\mathsf{AC}_\omega$ in the selected proof | Apply the same sequential UBP to the partial-sum projections; later basis results cite this item. |
| duals separate points, isometric bidual embedding, Goldstine | HB | Goldstine uses finite-dimensional separation/dual norming, not Alaoglu. |
| Banach–Alaoglu and weak-star compact polars | BPI | Rossi proves equivalence with the Boolean prime ideal theorem for the general theorem. |
| Banach–Dieudonné linear-subspace criterion | HB + BPI + DC in the BS implementation | BS §3.3 explicitly uses Alaoglu compactness, a dependent construction of finite sets, and Hahn–Banach separation.  No claim of logical optimality or converse is made. |
| weak-star metrizability on a dual ball once a dense sequence is supplied | ZF | The metric is written from the supplied sequence.  Producing such a sequence from bare separability may require a countable selection convention. |
| compact metrizable implies sequentially compact | ZF | For a supplied sequence, the closures of its tails are a nested family of nonempty closed subsets of a compact space.  Choose one point from their intersection once, then take least natural indices in successively smaller metric balls.  No countable family of arbitrary choices is made. |
| sequential characterization of compact operators | ZF from relative compactness to the subsequence property; DC for the selected converse proof | Relative compactness remains the definition.  The forward direction uses nested tail closures.  The converse proof recursively constructs an $\varepsilon$-separated image sequence if total boundedness fails and therefore records DC; no logical optimality is claimed. |
| Krein–Milman through maximal compact faces | AC | The source proof uses the dual Zorn lemma.  Bell shows KM together with BPI yields AC, so the combined dual-ball extreme-point corollary is never labelled merely BPI. |
| reflexivity equivalences that use Alaoglu/Goldstine | HB + BPI | State which direction uses which principle.  Do not attach the combined label to elementary directions. |
| Schauder compact-adjoint theorem and closed-range duality | HB in the selected dual-norming proof | Directions that only use compact metric estimates stay ZF; every norming/separation step cites its FA-4 dependency. |
| Eberlein–Šmulian standard diagonal/subsequence proof | DC, plus inherited compactness hypotheses | The builder must audit each direction separately; weak compactness imported through Alaoglu carries BPI only when Alaoglu is actually used. |
| Schur property of $\ell^1$ by gliding humps | $\mathsf{AC}_\omega$ for the standard recursive selection | Once the witnessing subsequences and finite sets are supplied, estimates are ZF. |
| James's reflexivity theorem and Bishop–Phelps | AC for the standard proofs | These are not used to lower the cost of earlier reflexivity items; exact proof-local uses of Zorn/separation must be exposed. |
| Hamel-basis constructions, arbitrary algebraic complements, arbitrary discontinuous functional examples | AC | B-page only and never dependencies. |
| arbitrary maximal orthonormal family and classification by an unspecified Hilbert basis | AC | Zorn supplies the maximal family. |
| separable Hilbert basis from a fixed dense sequence | ZF relative to that sequence | Gram–Schmidt takes the least nonzero residual.  “Separable” without supplied enumeration may hide a countable selection. |
| Hilbert nearest point under the library's Cauchy-sequence completeness | $\mathsf{AC}_\omega$ for the standard proof | Choose one approximate minimizer for each $1/n$.  Blackadar–Farah–Karagila show a ZF proof under the stronger sigma/Cantor-completeness definition; the two completeness notions need not agree in ZF. |
| Riesz representation in a Hilbert space once the nearest-point theorem is available | ZF | The kernel decomposition is canonical from a supplied nonzero functional; the inherited projection cost remains visible in dependencies. |
| Bochner approximation from strong measurability | $\mathsf{AC}_\omega$ where a sequence of simple approximants must be selected | A given approximating sequence incurs no further choice.  Scalar measure theorems retain their own MT ledger labels. |
| Dunford–Pettis theorem for $L^1$ on a finite measure space | inherits the proof-local HB + BPI + DC costs of FA-9/FA-10 in the selected weak-compactness proof, plus MT-10/MT-16's own labels | The scaffold makes no claim that this combined accounting is the theorem's exact reverse-mathematical strength; directions that can be proved with less must retain their lower item-level labels. |
| maximal ideals/characters in a general unital Banach algebra | AC for the scaffolded Zorn implementation | Special concrete character computations may be ZF.  No claim of exact equivalence is made. |
| commutative Gelfand–Naimark, including the nonunital $C_0$ form | inherits maximal-ideal AC and the chosen Stone–Weierstrass route | Unitization, restriction of supplied characters, and the proper-map arrow checks add no new choice principle.  The future build records proof-local costs rather than a single global slogan. |
| approximate unit for a commutative $C^*$-algebra | ZF relative to the locally compact Urysohn input | Index by the set of all compactly supported positive contractions, ordered by domination, instead of choosing a bump function for every compact subset. |
| Banach–Stone in the selected RMK/extreme-point proof | inherits the choice label of planned MT-20; otherwise ZF | A surjective isometry carries already-characterized extreme points to extreme points; it does not invoke Krein–Milman to produce them. |
| Stone representation/duality and the $z$-ultrafilter step in Gelfand–Kolmogorov | BPI in the existence-of-enough-ultrafilters step | The Boolean and topological functoriality checks are ZF once the ultrafilters are supplied; the published ultrafilter-lemma page carries the BPI equivalence. |
| continuous functional calculus for a supplied self-adjoint operator | ZF relative to the published approximation/integration inputs | Uniform polynomial approximation may inherit the source theorem's countable construction; no maximal choice is intrinsic. |
| cyclic decomposition for an arbitrary normal operator | AC | Choose a maximal orthogonal family of cyclic reducing subspaces.  The single cyclic representation is ZF relative to a supplied cyclic vector. |
| spectral theorem via arbitrary direct sums/multiplicity decomposition | AC in this implementation | The continuous and PVM calculi before the decomposition are kept separate and may have lower cost. |
| Fourier analysis on $\mathbb T^n$, $L^1$, and $\mathcal S$ | inherits only named measure/completion inputs | Algebraic identities and canonical kernels are ZF; density/completion items retain MT's or FA-1's labels. |
| distribution and tempered-distribution operations | ZF relative to the given test functions and published scalar analysis | No Hamel basis or maximal family is used.  Existence of partitions of unity, where invoked, retains the topology track's stated choice cost. |

The two “choice-free looking” traps receive item-level warnings: a sequence of
approximate minimizers is still a countable family of choices, and compactness
of a product is not free merely because every factor is a disk.  Conversely, a
single invocation of an existential theorem inside one proof does not by itself
constitute a family-choice principle.

---

## 9. Discharge of `DEFERRED.md` §2 and the 33-item catalogue

The immutable existing `rem-` ids remain available as cited historical
records.  “Included” below means that a future build proves the result under a
new theorem id and may rehome the old remark to the named B page as a short
agreement pointer; it does **not** authorize renaming or deleting an existing
id.  “Boundary” means the exact sourced statement remains L/NS and cannot be a
dependency.  “Deferred” is reserved for material outside this track's
prerequisite closure.

| existing catalogue id | disposition | supplying location and reason |
|---|---|---|
| `rem-hahn-banach-theorem` | included | FA-4 items 1–11 prove the real dominated, norm-preserving, and complex forms from the one-step and chain lemmas. |
| `rem-hahn-banach-choice-strength` | inline | FA-4 item 12 and §8 preserve HB as its own principle, with BPI sufficient and strictly stronger; no false equivalence is asserted. |
| `rem-discontinuous-functional-choice-strength` | boundary | FA-4 B records the Howard–Rubin/Wright/Garnir statement and open HB questions; FA-2 B gives the explicit ZF discontinuous map on incomplete $c_{00}$. |
| `rem-open-mapping-theorem` | included | FA-6 items 4–7 prove the ball-closure step, successive approximation, and open mapping theorem. |
| `rem-closed-graph-theorem` | included | FA-6 items 9–12 prove closed graph and closability criteria. |
| `rem-uniform-boundedness` | included | FA-6 items 1–3 give the Baire and Sokal routes with separate choice ledgers. |
| `rem-weak-and-weak-star-topologies` | included | FA-8 defines both topologies by their dual pairs, develops nets and closures, and distinguishes WOT/SOT. |
| `rem-banach-alaoglu` | included | FA-9 items 1–5 prove Alaoglu, polars, and the separable weak-star metric, labelled BPI. |
| `rem-mazur-lemma` | included | FA-5 item 15 proves equality of weak and norm closures for convex sets; FA-5 B explicitly distinguishes this from Mazur's basic-sequence lemma. |
| `rem-eberlein-smulian` | included | FA-10 items 6–10 scaffold Whitley's separable-reduction proof of the three compactness formulations. |
| `rem-schur-property-l1` | included | FA-10 items 11–13 prove the gliding-hump theorem and its nonreflexivity consequence. |
| `rem-riesz-representation-hilbert` | included | FA-13 items 17–18 prove the double-orthogonal-complement step and Hilbert representation theorem after projection, with the inner-product convention explicit. |
| `rem-separable-hilbert-isometric-l2` | included | FA-14 items 7–10 separate arbitrary-basis AC from deterministic Gram–Schmidt on a fixed dense sequence. |
| `rem-banach-limits` | included | FA-4 B constructs a Banach limit and proves its properties; FA-11 reinterprets it as a finitely additive charge. |
| `rem-dual-of-l-infinity` | included | FA-11 items 10–13 construct the isometric identification with $ba(2^{\mathbb N})$ and locate the proper $\ell^1$ subspace. |
| `rem-radon-nikodym-property` | included | FA-12 defines vector measures, Bochner densities, RNP, dentability, and the principal characterizations and examples; scalar RN stays MT-13. |
| `rem-c0-not-a-dual-space` | included | FA-9 B proves the isometric obstruction from extreme points; FA-12 item 20 proves the stronger isomorphic obstruction from RNP. |
| `rem-spectral-theory-bounded-operators` | included | FA-17 develops spectrum/resolvent/radius, FA-19 continuous calculus, and FA-20 PVM/Borel calculus. |
| `rem-compact-operators` | included | FA-15 gives the Banach-space theory; FA-16 gives compact self-adjoint and singular-value theory. |
| `rem-fredholm-theory` | included | FA-15 items 9–21 prove Riesz–Schauder, Fredholm alternative, Atkinson, and index stability. |
| `rem-banach-stone` | included | FA-18 item 17 proves weighted-composition form, with MT-20 and extreme-point input exposed. |
| `rem-gelfand-naimark-commutative` | included, conditional seam | FA-18 items 10–15 prove the compact/unital theorem and items 22–28 its locally compact/nonunital form after topology builds the general complex Stone–Weierstrass dependency. |
| `rem-gelfand-kolmogorov` | included | FA-18 item 18 states the Tychonoff/$\beta X$ form and cites the published Stone–Čech page. |
| `rem-stone-duality` | included | FA-18 items 19–21 build ultrafilter spaces, clopen algebras, and both functors, with BPI visible. |
| `rem-banach-no-countable-hamel-basis` | included | FA-3 proves the Baire consequence after showing finite-dimensional subspaces are closed and nowhere dense. |
| `rem-enflo-space` | boundary | FA-11 proves Schauder basis $\Rightarrow$ AP, then retains Enflo's exact 1973 counterexample L/NS; reproducing its tensor construction would create a specialist branch unused elsewhere. |
| `rem-james-space` | included | FA-11 items 14–19 construct the sourced space and keep nonreflexivity separate from its noncanonical isometry to the bidual. |
| `rem-james-theorem` | included | FA-10 items 18–20 split and prove the hard direction, with Banach completeness explicit. |
| `rem-bishop-phelps` | included | FA-10 items 21–22 prove density of norm-attaining functionals and avoid the false complex convex-set generalization. |
| `rem-nagata-theorem-cp` | deferred to topology | Its $C_p(X)$ statement needs Tychonoff-space and Fréchet–Urysohn machinery, not the normed $C(K)$ theory built here; FA-18 B preserves the exact statement as L/NS. |
| `rem-gerlits-nagy` | deferred to topology | The theorem is about $\gamma$-covers, selection principles, and $C_p(X)$; none is a dependency of this linear-analysis spine.  FA-18 B preserves its exact four-way statement L/NS. |
| `rem-dugundji-extension-linear` | deferred to topology | The locally convex-valued linear extension operator uses paracompactness and partitions of unity; it is neither Hahn–Banach nor needed downstream here.  FA-18 B preserves it L/NS. |
| `rem-kuratowski-wojdyslawski` | included | FA-3 separates the based isometry for every metric from Wojdysławski's bounded-metric closed-in-the-convex-hull theorem and its all-metrizable topological corollary. |

The broader prose backlog in `DEFERRED.md` §2 is exhausted by the same rows:
weak closure versus sequential closure is FA-8/FA-10; Riesz–Markov–Kakutani is
reserved to planned MT-20 and is only cited here; the spectral, compact,
Fredholm, Hilbert, Banach-algebra, and pathology clusters are all assigned
above.  Nothing else in §2 is silently left behind.

---

## 10. Amendments owed to other scaffolds and plan reconciliation

No amendment is made by this commission; these are instructions for the
orchestrator or the future owner of the named track.

### 10.1 Topology and the deferred catalogue

1. Build `stone-weierstrass-general` through the complex self-adjoint form
   before FA-18.  Its current `items` array is empty, so it is not yet a legal
   dependency.  Keep FA-14's Fejér proof independent of it.
2. Reconcile `deferred-functional-analysis`.  After the FA block is authored,
   it must no longer present discharged results as unproved.  Preserve every
   immutable `rem-` id: rehome superseded remarks on the corresponding FA B
   page as concise “now proved at” pointers, or retain a catalogue that lists
   only genuinely unresolved boundaries.  Do not delete or rename ids.
3. Keep the Nagata, Gerlits–Nagy, and linear Dugundji entries owned by topology
   until their stated prerequisite systems are built.  FA-18 B merely records
   the seam and may not become their proof home.
4. Ensure the topology plan does not separately mint weak/weak-star topology,
   Stone duality, Banach–Stone, or Gelfand–Kolmogorov.  It may cite FA-8 and
   FA-18 after those pages exist.

### 10.2 Measure theory

1. Add agreement links from MT-14's Riesz–Fischer result to FA-1
   `def-banach-space`, from MT-16's concrete representation theorem to FA-7's
   dual-space vocabulary, and from MT-23's $L^2$ projection argument to FA-13's
   general Hilbert projection theorem.  Existing measure proofs and ids remain
   unchanged.
2. Link MT-20 RMK to FA-9's probability-measure extreme-point examples,
   FA-18 Banach–Stone, and FA-20 scalar spectral measures.  FA does not create
   a competing RMK item.
3. Keep scalar convolution/approximate identities in MT-15.  FA-22 adds the
   Fourier consequences and explicit agreement items instead of copying the
   measure-theory construction.

### 10.3 PDE

1. PDE owns Lax–Milgram and every Sobolev space.  Its future scaffold should
   require FA-13's Hilbert Riesz theorem, define bounded/coercive sesquilinear
   forms there, and prove Lax–Milgram there.  This resolves the dispatch's
   placement option in favor of PDE.
2. PDE may require FA-23 Plancherel, FA-24 distributional derivatives and
   mollification, and FA-25's constant-coefficient Fourier-multiplier identity.
   It must not ask FA to pre-mint weak solutions, $W^{k,p}$, elliptic estimates,
   or boundary traces.
3. Once PDE page ids exist, replace the orientation-only unnamed references in
   FA-13, FA-24, and FA-25 with those exact ids; no current FA A item depends on
   such a forward reference.

### 10.4 Complex analysis and algebra

1. Build or wait for `complex-power-series-and-analytic-functions`,
   `contour-integration`, `goursat-and-cauchys-theorem-in-a-convex-domain`,
   `analyticity-liouville-and-morera`, and
   `the-winding-number-and-the-global-cauchy-theorem`; each currently has an
   empty item array.  FA-17 itself supplies the weak-scalarization lemma needed
   to pass scalar Cauchy vanishing to Banach-valued contour integrals.
2. Reuse the existing complexification, polynomial, quotient algebra, and
   Boolean-algebra/ultrafilter ids wherever they exist.  Any mismatch is an id
   reconciliation task, not authority to rename a published item.

---

## 11. Canonical-coverage harvest

### 11.0 Acquisition record and scope of reading

“Full text” means the complete work, including its table of contents, was
available for search and inspection; it does not mean every page was read
linearly.  The exact mathematical ranges read are listed below.  Commercial
books used only as corroboration are identified as such rather than falsely
claimed as open full-text acquisitions.

| key | source and access URL | access obtained | exact range read |
|---|---|---|---|
| BS | Theo Bühler and Dietmar Salamon, *Functional Analysis* | [author-hosted complete PDF](https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf), 452 pp. | chs. 1–6, pp. 1–353; ch. 7 §7.3.1, pp. 387–392 |
| Te | Gerald Teschl, *Topics in Real and Functional Analysis* | [complete 2017 manuscript](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf), 563 pp.; the manuscript identifies the author's original distribution | §§1.2–1.7, 2.1–2.5, 3.1–3.2, 3.5–3.6, 4.1–4.4, 4.6, 5.1–5.5, 6.1–6.6, 11.6, 14.1, 14.5; pp. 7–192, 331–337, 379–388, 404–411, with gaps exactly as enumerated in §11.3 |
| K-ARA | Anthony W. Knapp, *Advanced Real Analysis*, digital second edition | [author-released complete PDF](https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf), 650 pp.; [author download page](https://www.math.stonybrook.edu/~aknapp/download.html) | ch. II §§1–5, pp. 34–52; ch. III §1, pp. 54–60; ch. IV §§1, 3, 5, 8, 10–11, pp. 106–173; ch. V §§1–4, pp. 179–206 |
| K-BRA | Anthony W. Knapp, *Basic Real Analysis*, digital second edition | [complete author-released PDF](https://www.math.stonybrook.edu/~aknapp/download/b2-realanal-clickable.pdf) | ch. VI §§7 and 9, pp. 372–390; ch. VIII §§1–5, pp. 411–430 in the current digital pagination |
| MIT | Andrew Lin/Casey Rodriguez, MIT 18.102, *Introduction to Functional Analysis* | [complete MIT OpenCourseWare notes](https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf), 125 pp. | lectures 1–15, 16 February–8 April, pp. 1–68; compact/spectral lectures, pp. 89–125 |
| Dy | Semyon Dyatlov, MIT 18.155, *Distributions* | [complete author-hosted notes](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf), 266 pp. | chs. 2–4 and 6, pp. 27–75; §§11.1–11.2, pp. 119–135 |
| Wi | Dana P. Williams, *Lecture Notes on the Spectral Theorem* | [complete author-hosted notes](https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf), 39 pp. | §§1–7, entire text |
| Sh | Ali Shirbisheh, *Lectures on $C^*$-algebras* | [complete arXiv text](https://arxiv.org/pdf/1211.3404), 179 pp. | ch. 2 §§2.1–2.5 and ch. 3 §§3.1–3.4 |
| Kh | Masoud Khalkhali, *Lectures on Noncommutative Geometry* | [complete author-hosted/arXiv text](https://www.math.uwo.ca/faculty/khalkhali/files/LecturesNCG.pdf), 112 PDF pp. | §2.1, PDF pp. 3–6 |
| TQ | Gerald Teschl, *Mathematical Methods in Quantum Mechanics* | [complete author/AMS-authorized PDF](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf), 370 pp. | §§2.2, 2.4, 3.1–3.3, 5.1, pp. 66–75, 83–89, 99–130, 145–150 |
| So | Alan D. Sokal, “A really simple elementary proof of the uniform boundedness theorem” | [complete arXiv paper](https://arxiv.org/pdf/1005.1585), 5 pp. | entire paper, especially theorem and proof pp. 1–3 |
| Ro | John Rossi, “The Axiom of Choice and the Banach–Alaoglu theorem” | [complete arXiv paper](https://arxiv.org/pdf/0911.0332), 4 pp. | entire paper |
| BFK | Bruce Blackadar, Ilijas Farah, and Asaf Karagila, “Hilbert spaces without the Countable Axiom of Choice” | [complete repository PDF](https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf), 49 pp. | §§1–4, especially Theorem 2.0.4 and Corollary 2.0.5 |
| He | Christopher Heil, Math 7337, *The Fourier Transform of Tempered Distributions* | [author course-note landing page](https://heil.math.gatech.edu/7337/fall09/) | §3.7 in full |

Additional exact-result checks used Conway, [*A Course in Functional Analysis*](https://link.springer.com/book/10.1007/978-1-4757-4383-8),
ch. V §3 (Goldstine); Megginson, [*An Introduction to Banach Space Theory*](https://link.springer.com/book/10.1007/978-1-4612-0603-3),
§§2.8–2.9 (James and Bishop–Phelps); Albiac–Kalton, [*Topics in Banach Space
Theory*](https://link.springer.com/book/10.1007/978-3-319-31557-7), ch. 1
§§1.1–1.4 and ch. 5 §5.3 (bases, James space, RNP); and Diestel–Uhl,
[*Vector Measures*](https://bookstore.ams.org/surv-15), ch. II §§1–2 and ch.
III §§1–3.  These were
corroborating library copies, not counted among the open full texts.  Their
named headings dispose respectively to FA-9, FA-10, FA-11/FA-12, and FA-12;
no unlisted chapter from those books is claimed as harvested.

### 11.1 Convention conflicts resolved

| conflict in the sources | library decision |
|---|---|
| BS and some operator texts take complex inner products linear in the second variable; Teschl and the existing deferred Hilbert item use the other convention. | Linear in the **first** variable.  Every adjoint, Riesz representative, polarization identity, and distribution Fourier pairing is translated explicitly. |
| Knapp often uses an exponential/measure normalization different from the $2\pi$ convention in harmonic-analysis notes. | $\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$ throughout FA-14 and FA-22–FA-25. |
| Some sources define compact operators only by sequential images; others by relative compactness of the unit-ball image. | Relative compactness is the definition; sequential equivalence is the first theorem because normed targets are metric. |
| “Adjoint” denotes the Banach transpose in some texts and the Hilbert adjoint in others. | FA-7 says **transpose/Banach adjoint** $T^*:Y^*\to X^*$; FA-13 separately defines the Hilbert adjoint by the inner product and proves the dictionary. |
| Weak-star is written weak*, weak-$*$, or $w^*$. | Prose uses “weak-star”; formulas may use $w^*$ after the topology $\sigma(X^*,X)$ is named. |
| Some sources build $C^*$-algebras nonunital from the outset. | FA-18 first proves the compact/unital form, then explicitly constructs the minimal unitization and proves the locally compact form $A\cong C_0(\Delta(A))$.  Spectra are never taken in an unnamed unitization, and locally compact duality uses proper maps/proper $*$-homomorphisms in Shirbisheh's exact approximate-unit convention. |
| Texts alternate between weak and strong dual topologies on $\mathcal D'$ and $\mathcal S'$. | Both are defined.  Unqualified distributional convergence means weak convergence on each test function; strong convergence is written explicitly. |
| “Hilbert space” is harmlessly equivalent under several completeness notions with choice, but not in ZF. | The core definition uses the library's sequential Cauchy completeness.  BFK's sigma-complete alternative and the resulting projection-choice difference are recorded, not silently identified. |

### 11.2 Bühler–Salamon harvest, chs. 1–6 and §7.3.1

Every heading in the read range has a disposition below.  Parenthetical names
after a semicolon are the source's named-result headings grouped under that
section; mapping a family to an FA pair means the individual theorem is either
an item there or an explicitly named lemma inside its hard-proof plan.

| source heading in order | named-result headings harvested | disposition |
|---|---|---|
| 1.1 *Metric Spaces and Compact Sets*: 1.1.1 *Metric Spaces* | completion, completeness, contraction/fixed-point preliminaries | already-published metric-space material; Banach specialization inline in FA-1 |
| 1.1.2 *Compact Sets* | compactness criteria and finite-dimensional compactness | already-published topology; normed consequence included FA-3 |
| 1.1.3 *The Contraction Mapping Principle* | contraction theorem and parameter dependence | already-published; out-of-scope here because nonlinear fixed points are not used by the linear spine |
| 1.2 *Banach Spaces*: 1.2.1 *Bounded Linear Operators* | continuity/boundedness equivalence, operator norm | included FA-1/FA-2 |
| 1.2.2 *Finite-Dimensional Normed Vector Spaces* | norm equivalence, completeness, local compactness | included FA-3; real finite-dimensional base already published |
| 1.2.3 *Quotient and Product Spaces* | quotient norm, quotient completeness, product completeness | included FA-1/FA-2 |
| 1.3 *Examples of Banach Spaces*: 1.3.1 *The Banach Space of Bounded Linear Operators* | completeness of $\mathcal B(X,Y)$ | included FA-2 |
| 1.3.2 *Examples of Dual Spaces* | $c_0^*=\ell^1$, $(\ell^1)^*=\ell^\infty$ | included FA-7; scalar $L^p$ duality reserved to planned MT-16 |
| 1.3.3 *Hilbert Spaces* | projection, Riesz representation, adjoint preliminaries | included FA-13 |
| 1.4 *Banach Algebras* | Neumann series, open invertibles, spectrum preliminaries | included FA-17 |
| 1.5 *The Baire Category Theorem* | Baire theorem | already-published `thm-baire-category-for-complete-metric-spaces`; consequences included FA-6 |
| 2.1 *Uniform Boundedness* | Banach–Steinhaus, condensation of singularities | included FA-6 and FA-6 B |
| 2.2 *The Open Mapping Theorem* | open mapping, closed graph, closed/closable operators | included FA-6; unbounded-domain continuation FA-21 |
| 2.3.1 *The Hahn–Banach Theorem* | dominated and norm-preserving extension, complex form | included FA-4 |
| 2.3.2 *Positive Linear Functionals* | positivity and norm of positive functionals | inline FA-5 separation; included where needed in FA-18/FA-20 |
| 2.3.3 *Separation of Convex Sets* | open/point and compact/closed separation | included FA-5 |
| 2.3.4 *The Closure of a Linear Subspace* | annihilator characterization and Mazur closure | included FA-5/FA-8 |
| 2.3.5 *Complemented Subspaces* | projections and finite-dimensional complements | included FA-2 definition and FA-5 theorem |
| 2.3.6 *Orthonormal Bases* | Bessel, Parseval, Fourier expansion | included FA-14 |
| 2.4.1 *The Bidual Space* | canonical embedding and reflexivity | included FA-7/FA-10 |
| 2.4.2 *Reflexive Banach Spaces* | subspace/quotient criteria and weak compactness | included FA-10 |
| 2.4.3 *Separable Banach Spaces* | separability consequences | included FA-9/FA-10/FA-14 where hypotheses are used |
| 2.4.4 *The James Space* | concrete James-space dual/bidual computation | included FA-11 |
| 3.1.1 *Definition and Examples* | weak and weak-star topology | included FA-8 |
| 3.1.2 *Convex Sets* | equality of norm and weak closure for convex sets | included FA-5/FA-8 |
| 3.1.3 *Elementary Properties of the Weak Topology* | dual, convergence, boundedness, finite-dimensional criterion | included FA-8 |
| 3.1.4 *Elementary Properties of the Weak* Topology* | predual evaluations and convergence | included FA-8 |
| 3.2.1 *The Separable Case* | weak-star metric and sequential compactness | included FA-9 |
| 3.2.2 *Radon Measures* | RMK representation | reserved to planned MT-20; only applications appear FA-9/FA-18/FA-20 |
| 3.2.3 *The General Case* | Banach–Alaoglu via product compactness | included FA-9 |
| 3.3 *The Banach–Dieudonné Theorem* | weak-star closed linear-subspace criterion | included FA-9 `thm-banach-dieudonne-linear-subspace-criterion` |
| 3.4 *The Eberlein–Šmulian Theorem* | weak compactness versus sequential compactness | included FA-10 |
| 3.5 *The Kreĭn–Milman Theorem* | existence, closed convex hull, Milman converse | included FA-9 |
| 3.6.1 *Weak Convergence in $L^1$* | uniform integrability criteria | MT-10 owns the definition and Vitali theory; the weak-compactness criterion is included FA-12 item 21 |
| 3.6.2 *The Dunford–Pettis Theorem* | weak compactness in $L^1$ | included FA-12 item 21 in the finite-measure form |
| 3.6.3 *The Radon–Nikodým Theorem* | scalar RN and $L^p$ consequences | reserved to planned MT-13/MT-16; abstract RNP included FA-12 |
| 4.1.1 *The Dual Operator* | transpose, norm, double transpose | included FA-7/FA-15 |
| 4.1.2 *Duality* | kernel/range annihilators | included FA-7/FA-15 |
| 4.1.3 *The Closed Image Theorem* | closed-range equivalences | included inline in FA-15's Fredholm lemmas |
| 4.2 *Compact Operators* | compact-adjoint theorem, norm limits | included FA-15 |
| 4.3 *Fredholm Operators* | Fredholm alternative, index, parametrices | included FA-15 |
| 4.4 *Composition and Stability* | additivity/local constancy/compact perturbations of index | included FA-15 |
| 5.1.1 *Complex Banach Spaces* | complexification and complex operator calculus | included FA-17 |
| 5.1.2 *Integration* | Banach-valued contour integration | included FA-12/FA-17 |
| 5.1.3 *Holomorphic Functions* | weak/strong holomorphy and Cauchy formulas | scalar part reserved to the empty planned complex-analysis pages named in FA-17; Banach-valued lifting included FA-17 after that seam is built |
| 5.2.1 *The Spectrum of a Bounded Linear Operator* | resolvent and nonempty compact spectrum | included FA-17 |
| 5.2.2 *The Spectral Radius* | spectral-radius formula and spectral mapping | included FA-17 |
| 5.2.3 *The Spectrum of a Compact Operator* | Riesz–Schauder spectral structure | included FA-15 |
| 5.2.4 *Holomorphic Functional Calculus* | contour calculus and Riesz projections | included FA-17 |
| 5.3.1 *Complex Hilbert Spaces* | complex Hilbert conventions | included FA-13/FA-19 |
| 5.3.2 *The Adjoint Operator* | self-adjoint, positive, normal operators | included FA-13/FA-19 |
| 5.3.3 *The Spectrum of a Normal Operator* | norm/radius and spectral location | included FA-19 |
| 5.3.4 *The Spectrum of a Self-Adjoint Operator* | real spectrum, positivity | included FA-19 |
| 5.4.1 *$C^*$ Algebras* | $C^*$ identity and normal calculus | included FA-18/FA-19 |
| 5.4.2 *The Stone–Weierstraß Theorem* | real/complex density | general result deferred to topology's planned page for seam ownership; FA-14 proves its specific trigonometric density independently |
| 5.4.3 *Functional Calculus for Self-Adjoint Operators* | continuous real calculus | included FA-19 |
| 5.5.1 *The Gelfand Representation* | characters and commutative representation | included FA-18 |
| 5.5.2 *$C^*$ Algebras of Normal Operators* | generated algebra and continuous calculus | included FA-18/FA-19 |
| 5.5.3 *Functional Calculus for Normal Operators* | continuous normal calculus | included FA-19 |
| 5.6.1 *Projection Valued Measures* | PVMs and bounded integration | included FA-20 |
| 5.6.2 *Measurable Functional Calculus* | bounded Borel calculus | included FA-20 |
| 5.7 *Cyclic Vectors* | cyclic spectral representation and decomposition | included FA-20 |
| 6.1 *Unbounded Operators on Banach Spaces* | domains, graphs, closure, resolvent | included FA-21 |
| 6.2 *The Dual of an Unbounded Operator* | transpose domains and closability | included FA-21 |
| 6.3.1 *The Adjoint of an Unbounded Operator* | closed adjoint and double adjoint | included FA-21 |
| 6.3.2 *Unbounded Self-Adjoint Operators* | range criteria and Cayley transform | included FA-21 |
| 6.3.3 *Unbounded Normal Operators* | general normal-domain spectral theory | out-of-scope: the remit asks for unbounded self-adjoint theory, and normal-domain commutation adds a separate unused branch |
| 6.4 *Functional Calculus* | unbounded Borel functions and natural domains | included FA-21 |
| 6.5 *Spectral Measures* | unbounded self-adjoint spectral theorem | included FA-21 |
| 7.3.1 *Banach Space Valued Measurable Functions* | strong measurability and Bochner integration | included FA-12 |

The end-of-section problem headings in BS are exercise banks, not additional
named mathematical results.  They are out-of-scope as banks; examples whose
content supplies a boundary or counterexample were individually harvested into
the B pages above.

### 11.3 Teschl harvest, selected sections of the complete manuscript

| exact source section/heading | named-result content in the read range | disposition |
|---|---|---|
| §1.2 *The Banach Space of Continuous Functions* | completeness of $C(K)$/$C_b$, uniform convergence | included FA-1 and examples |
| §1.3 *The Geometry of Hilbert Spaces* | Cauchy–Schwarz, parallelogram, polarization | included FA-13; finite-dimensional precursor already-published |
| §1.4 *Completeness* | series criterion and completion | included FA-1, reusing published metric completion |
| §1.5 finite-dimensional normed spaces | norm equivalence, closedness, local compactness | included FA-3 |
| §1.6 *Bounded Operators* | continuity criteria and operator norm | included FA-2 |
| §1.7 *Sums and Quotients of Banach Spaces* | product/quotient norms and completeness | included FA-1/FA-2 |
| §2.1 *Orthonormal Bases* | Bessel, Parseval, Hilbert expansion | included FA-14 |
| §2.2 *The Projection Theorem and the Riesz Lemma* | closest point, orthogonal decomposition, Hilbert Riesz | included FA-13 |
| §2.3 *Operators Defined via Forms* | bounded forms and represented operators | inline FA-13; Lax–Milgram deferred to PDE by seam |
| §2.4 *Orthogonal Sums and Tensor Products* | orthogonal direct sums and Hilbert tensor products | orthogonal sums inline FA-14/FA-20; general tensor products out-of-scope because not required by this spine |
| §2.5 *Applications to Fourier Series* | trigonometric completeness, Fejér, Parseval | included FA-14, including $\mathbb T^n$ extension |
| §3.1 *Compact Operators* | sequential criterion, finite rank, norm limits | included FA-15 |
| §3.2 *The Spectral Theorem for Compact Symmetric Operators* | eigenvalue decomposition | included FA-16 |
| §3.5 *Singular Value Decomposition of Compact Operators* | singular systems and approximation numbers | included FA-16 |
| §3.6 *Hilbert–Schmidt and Trace Class Operators* | ideals, trace, determinant/eigenvalue formula | included FA-16; Fredholm determinants not used and are out-of-scope because no later result needs them |
| §4.1 *The Baire Theorem and Its Consequences* | UBP, open mapping, bounded inverse, closed graph | Baire already-published; consequences included FA-6 |
| §4.2 *The Hahn–Banach Theorem and Its Consequences* | real/complex extension, norming, Riesz lemma | included FA-4; Riesz lemma included FA-3 |
| §4.3 *The Adjoint Operator* | Banach transpose and closed-range relations | included FA-7/FA-15 |
| §4.4 *Weak Convergence* | weak boundedness, Mazur, weak compactness examples | included FA-8/FA-10 |
| §4.6 dual/operator consequences | annihilators, quotient/subspace duality, closed range | included FA-7/FA-15 |
| §5.1 *The Geometric Hahn–Banach Theorem* | gauges and separation | included FA-5 |
| §5.2 *Convex Sets and the Krein–Milman Theorem* | extreme points and hull theorem | included FA-9 |
| §5.3 *Weak Topologies* | weak/weak-star initial topologies and Alaoglu | included FA-8/FA-9 |
| §5.5 *Uniformly Convex Spaces* | Milman–Pettis and $L^p$ consequences | included FA-10, citing MT for $L^p$ |
| §6.1 *Banach Algebras* | Neumann series, spectra, radius | included FA-17 |
| §6.2 *The $C^*$ Algebra of Operators and the Spectral Theorem* | continuous calculus and bounded normal theorem | included FA-19 |
| §6.3 *Spectral Measures* | PVM integration | included FA-20 |
| §6.4 *The Gelfand Representation Theorem* | maximal ideal space and commutative $C^*$ representation | included FA-18 |
| §6.5 *Fredholm Operators* | alternative and index | included FA-15 |
| §6.6 *Spectral Theory for Bounded Operators* | resolvent and holomorphic calculus | included FA-17 |
| §11.6 *The Bochner Integral* | measurability, norm estimate, dominated convergence | included FA-12 |
| §14.1 *The Fourier Transform on $L^1$ and $L^2$* | $L^1$ transform/inversion and Plancherel | included FA-22/FA-23 |
| §14.5 *Tempered Distributions* | $\mathcal S'$, derivatives, Fourier transpose | included FA-23/FA-25; compact-test distribution topology expanded from Dy |

Sections skipped between these ranges concern ordinary differential equations,
calculus of variations, probability, and other applications.  They were not
harvested and are not being assigned an artificial disposition.

### 11.4 Knapp harvest

The two Knapp volumes use independent chapter numbering.  The exact headings
below follow the current author-released digital editions.

| source heading | named-result content | disposition |
|---|---|---|
| K-ARA II.1 *Compact Operators* | compactness criteria and finite-rank approximation | included FA-15; the false general finite-rank-density claim is expressly denied |
| K-ARA II.2 *Spectral Theorem for Compact Self-Adjoint Operators* | eigenspaces, orthogonal expansion | included FA-16 |
| K-ARA II.3 *Hilbert–Schmidt Theorem* | integral/HS operators and compact spectral expansion | included FA-16 |
| K-ARA II.4 *Unitary Operators* | unitary equivalence and singular systems | included FA-13/FA-16 |
| K-ARA II.5 *Classes of Compact Operators* | singular values, Hilbert–Schmidt and trace class | included FA-16 |
| K-ARA III.1 *Tempered Distributions* | Schwartz space, tempered dual, Fourier operations | included FA-23/FA-25 |
| K-ARA IV.1 *Topological Vector Spaces* | seminorm topologies and weak examples | included only as needed in FA-8/FA-23/FA-24; general TVS theory is out-of-scope by §3 |
| K-ARA IV.3 *Weak and Weak-Star Topologies, Alaoglu's Theorem* | initial topologies, Alaoglu | included FA-8/FA-9 |
| K-ARA IV.5 *Linear Functionals and Convex Sets* | Hahn–Banach separation | included FA-5 |
| K-ARA IV.8 *Krein–Milman Theorem* | extreme points and convex hull | included FA-9 |
| K-ARA IV.10 *Gelfand Transform for Commutative $C^*$ Algebras* | characters, representation | included FA-18 |
| K-ARA IV.11 *Spectral Theorem for Bounded Self-Adjoint Operators* | continuous calculus and multiplication representation | included FA-19/FA-20 |
| K-ARA V.1 *Continuity on Spaces of Smooth Functions* | test-function topologies and distributions | included FA-24 |
| K-ARA V.2 *Elementary Operations on Distributions* | derivatives and smooth multiplication | included FA-24 |
| K-ARA V.3 *Convolution of Distributions* | support-conditioned convolution | included FA-24/FA-25 |
| K-ARA V.4 *Role of Fourier Transform* | constant-coefficient multipliers | included FA-25; PDE solution theory deferred to PDE |
| K-BRA VI.7 *Fourier Series and the Riesz–Fischer Theorem* | $L^2$ trigonometric expansion and Parseval | included FA-14; measure completeness reserved to planned MT-14 |
| K-BRA VI.9 *Fourier Series and the Dirichlet–Jordan Theorem* | BV pointwise convergence | included FA-14 B; stronger divergence phenomena remain source-cited boundaries |
| K-BRA VIII.1 *Elementary Properties* | transform rules and convolution | included FA-22 |
| K-BRA VIII.2 *Fourier Transform on $L^1$, Inversion Formula* | Riemann–Lebesgue, uniqueness, inversion | included FA-22 |
| K-BRA VIII.3 *Fourier Transform on $L^2$, Plancherel Formula* | unitary extension and agreement | included FA-23 |
| K-BRA VIII.4 *Schwartz Space* | seminorms, invariance, inversion | included FA-23 |
| K-BRA VIII.5 *Poisson Summation Formula* | periodization and lattice identity | included FA-23/FA-25 |

K-ARA IV.9 fixed-point theory, III.2 Sobolev spaces, and V.5 the fundamental
solution of the Laplacian were not part of the read ranges.  Their relevant
orientation is respectively out-of-scope nonlinear analysis, owned by PDE,
and represented only by a non-load-bearing FA-24 example.

### 11.5 Complete lecture-note harvests

#### MIT 18.102

The notes have lecture/date headings rather than a chapter TOC.  Lectures
1–4 (16–25 February: normed spaces, Banach spaces, bounded maps, examples and
completion) are included FA-1/FA-2.  Lectures 5–7 (2–9 March: Hilbert spaces,
orthogonality, projection and Riesz representation) are included FA-13.
Lectures 8–10 (11–18 March: orthonormal sets, Bessel/Parseval, Fourier
expansion) are included FA-14.  Lectures 11–15 (23 March–8 April: dual spaces,
adjoints, weak convergence, Hahn–Banach and the principal Banach-space
theorems) dispose to FA-4 and FA-6–FA-10.  Lectures 20 onward (*Compact
Operators and the Spectrum of a Bounded Linear Operator on a Hilbert Space*;
*Spectral Theorem for Compact Self-Adjoint Operators* and applications) dispose
to FA-15/FA-16.  The quantum/PDE applications are out-of-scope examples, since
the operator theorems themselves are already included.

#### Dyatlov 18.155

The read chapter headings *Definition of Distributions*, *Distributions and
Convergence*, *Localization*, *Differentiation*, *Multiplication by Smooth
Functions*, *Support of a Distribution*, *Distributions with Compact
Support*, *Fréchet Metric and Banach–Steinhaus for Distributions*,
*Distributions Supported at One Point*, *Convolution of a Distribution and a
Smooth Function*, and *Approximation of Distributions by Smooth Functions*
(chs. 2–4 and 6, pp. 27–75) are all included in FA-24 items 1–26.  In §11.1,
*Fourier Transform on Schwartz Functions*, the topology, derivative and
inversion headings dispose to FA-23; in §11.2, *Fourier Transform on Tempered
Distributions*, transpose, examples, convolution, and constant-coefficient
operator headings dispose to FA-25.  Sobolev-space and wavefront-set chapters
outside these exact ranges were not harvested and belong to PDE/microlocal
analysis.

#### Williams, entire notes

§1 *Introduction* is inline orientation for FA-19.  §2 *The Spectrum* and §3
*The Gelfand Transform* are included FA-17/FA-18.  §4 *The Abstract Spectral
Theorem* and §5 *Spectral Integrals* are included FA-19/FA-20.  §6's discussion
of nonnormal operators is out-of-scope beyond the explicit counterexamples on
FA-19 B: the commissioned spectral spine treats normal operators.  §7 *A
Spectral Theorem for Unbounded Operators*, including the named headings
*Stone's Theorem: Part I* and *Stone's Theorem: Part II*, is included FA-21.

#### Shirbisheh, chs. 2–3

Chapter 2 headings *Banach Algebras*, *Spectrum*, *Spectral Theory of Compact
Operators*, *Holomorphic Functional Calculus*, and their named spectral-radius
and spectral-mapping theorems dispose to FA-15/FA-17; §2.1's algebraic
unitization and $C^*$-unitization proposition dispose to FA-18 items 22–23.
Chapter 3 headings
*Characters and Maximal Ideal Spaces*, *Gelfand Transform*, *Continuous
Functional Calculus*, and *Gelfand Duality* dispose to FA-18/FA-19.  Within
the read range, Definition 3.1.38's approximate-unit/proper-morphism convention,
Example 3.1.39's $C_0(X)$ approximate unit, the duality theorem and its
morphism-set corollary dispose specifically to FA-18 items 26–28.  Chapter 4's
general theory of approximate units, and later headings on hereditary
subalgebras, multiplier algebras, group $C^*$-algebras, and the bicommutant
theorem were not in the read range; they instantiate the noncommutative scope
denial in §3.

#### Khalkhali, §2.1

The heading *Gelfand–Naimark theorems* and Definition 2.1 (*$C^*$-algebra*)
dispose to FA-18 item 10.  Example 2.1 ($C_0(X)$ for locally compact
Hausdorff $X$) disposes to FA-18 B item 12; Example 2.2 ($\mathcal B(H)$ as a
$C^*$-algebra) is inline at FA-18 item 10 using FA-13's adjoint and FA-17 B
item 2.  The character/maximal-spectrum discussion, Example 2.3 (evaluation
characters), and the Gelfand-transform paragraphs dispose to FA-18 items 1–9,
24–25 and B items 1 and 12.  Theorem 2.1(a), the general
commutative Gelfand–Naimark theorem $A\cong C_0(\widehat A)$, is included
FA-18 item 25; the following locally compact/proper-map duality statement is
included item 28, with the precise arrow convention supplied by Shirbisheh at
items 26–27.  Theorem 2.1(b), the faithful Hilbert-space
representation of an arbitrary noncommutative $C^*$-algebra, is out-of-scope
for the specific noncommutative-representation reason in §3.  Exercise 2.1's
algebraic reconstruction of the fundamental group is out-of-scope because it
opens homotopy theory and is unused by this track.

#### Teschl, *Mathematical Methods in Quantum Mechanics*

§2.2 headings on closed/unbounded operators and adjoints, §2.4 on
self-adjointness and the Cayley transform, §§3.1–3.3 on bounded/unbounded
spectral measures and functional calculus, and §5.1 on one-parameter unitary
groups dispose to FA-20/FA-21.  Named results harvested are the closedness of
adjoints, range criterion, Cayley correspondence, spectral theorem,
measurable calculus, and Stone's theorem.  Schrödinger operators, quadratic
forms specific to PDE, and scattering chapters are out-of-scope because they
need Sobolev/domain regularity not built here.

#### Sokal, Rossi, Blackadar–Farah–Karagila, and Heil

- Sokal's whole paper has one principal heading/result, an elementary proof of
  uniform boundedness.  It is included as FA-6 item 3; its countable choices
  are exposed in §8 rather than hidden by the word “elementary”.
- Rossi's whole paper proves the equivalence of Banach–Alaoglu with BPI.  It is
  inline provenance for FA-9 item 2 and §8, not a second analytic proof.
- BFK §1's choice/completeness conventions, §2's nearest-point/Riesz results,
  §3's orthonormal-basis analysis, and §4's separability results are inline in
  FA-13/FA-14 and §8.  Results about exotic Hilbert spaces without a basis are
  boundary material, because arbitrary Hilbert-basis existence is stated here
  with AC rather than assumed in ZF.
- Heil §3.7 headings *Definition of the Fourier Transform of Tempered
  Distributions*, *Continuity*, *Derivative and Multiplication Rules*, and
  the standard delta/polynomial examples dispose to FA-25.

### 11.6 Primary-result and foundational checks

These sources were read for one exact theorem or logical boundary, so the
paper title or named theorem is itself the complete harvested heading.

| source | range/result checked | disposition |
|---|---|---|
| Luxemburg, “Two applications of the method of construction by ultrapowers to analysis,” *Bull. AMS* 68 (1962), 416–419, [Caltech repository/DOI record](https://authors.library.caltech.edu/records/24mm1-zbt22/latest) | whole paper: BPI implies Hahn–Banach | inline FA-4 item 12 and §8 |
| David Pincus, “The strength of the Hahn–Banach theorem,” LNM 369 (1974), 203–248, [DOI record](https://doi.org/10.1007/BFB0066014) | separation of HB from stronger choice principles | inline FA-4 item 12; exact model-theoretic conclusions only |
| Foreman–Wehrung, “The Hahn–Banach theorem implies the existence of a non-Lebesgue measurable set,” *Fund. Math.* 138 (1991), 13–19, [EuDML full-text record](https://eudml.org/doc/211870) | title theorem | FA-4 L/NS choice remark |
| Pawlikowski, “The Hahn–Banach theorem implies the Banach–Tarski paradox,” *Fund. Math.* 138 (1991), 21–22, [EuDML full-text record](https://eudml.org/doc/211871) | title theorem | FA-4 L/NS choice remark |
| Blair, “The Baire category theorem implies the principle of dependent choices,” *Bull. Acad. Polon. Sci.* 25 (1977), 933–934, [CiNii bibliographic record](https://cir.nii.ac.jp/crid/1573387449452796928) | complete-metric Baire $\Leftrightarrow$ DC | inherited FA-6 cost and §8 |
| Fossy–Morillon, “The Baire category property and some notions of compactness,” *J. London Math. Soc.* 57 (1998), 1–19, [journal/DOI record](https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/S0024610798005675) | compact-Hausdorff/DMC and related distinctions | §8; not the Banach proof route |
| Bacsich, “The equivalence of two forms of the Baire category theorem without the axiom of choice,” *J. London Math. Soc.* (1972), [journal search](https://academic.oup.com/jlms/search-results?q=Bacsich%20Baire%20category) | locally compact regular/DMC form | §8; not the Banach proof route |
| Bell, *The Axiom of Choice*, pp. 59–64, [author-hosted complete PDF](https://publish.uwo.ca/~jbell/acbook.pdf) | Krein–Milman plus BPI implies AC; maximal-face proof | FA-9 and §8 |
| Whitley, “An elementary proof of the Eberlein–Šmulian theorem,” *Math. Ann.* 172 (1967), 116–118, [EuDML full-text record](https://eudml.org/doc/161575) | whole proof | FA-10 items 7–9 |
| Howard–Tachtsis, “On infinite-dimensional Banach spaces and weak forms of the axiom of choice,” *Math. Logic Quarterly* 63 (2017), 509–535, [repository record](https://commons.emich.edu/fac_sch2017/127/) | finite-ball compactness/Riesz results and Hamel-basis choice distinctions | FA-3 and §8; the countable-basis theorem uses the ZF separable Baire route, not an unrestricted DC slogan |
| Keremedis–Wajch, “On densely complete metric spaces and extensions of uniformly continuous functions in ZF,” [complete arXiv text](https://arxiv.org/abs/1901.08709), §§1–4 | complete subspaces are closed and the general uniformly-continuous dense-extension principle, each equivalent to countable choice | FA-1 item 7, FA-2 item 8, and §8; the scaffold claims exact strength only for the unrestricted metric statements and records the cost of the selected linear proofs |
| Wojdysławski's closed-in-the-convex-hull refinement, as quoted in Dugundji, *An extension of Tietze's theorem*, §7, [open Pacific J. Math. scan](https://msp.org/pjm/1951/1-3/pjm-v1-n3-p04-p.pdf) | for a bounded metric, the Kuratowski image is closed relative to its algebraic convex hull; a bounded equivalent metric yields the all-metrizable topological form | FA-3 items 14–16 |
| Enflo, “A counterexample to the approximation problem in Banach spaces,” *Acta Math.* 130 (1973), 309–317, [Project Euclid](https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.full) | title theorem and reflexive/separable construction | FA-11 L/NS boundary after basis $\Rightarrow$ AP is proved |

The James-space construction, James reflexivity theorem, Bishop–Phelps, the
RNP/dentability equivalences, Lidskii's trace formula, and Banach–Dieudonné are
not reconstructed from abstracts.  They use the exact textbook/monograph
ranges already named in their pair, with long proofs decomposed as specified.
If a future builder cannot obtain those ranges, the affected item must pause;
it may not be replaced by a generated summary.

### 11.7 Two-source backing matrix for every pair

The detailed section locators are in each pair and §§11.2–11.6.  This matrix
makes the independence requirement auditable at a glance.

| pair | textbook/full-note backbone | independent treatment or primary check |
|---|---|---|
| FA-1 | BS §§1.1.1, 1.2.1 | Te §§1.2, 1.4; MIT lectures 1–4 |
| FA-2 | BS §§1.2.1, 1.2.3, 1.3.1 | Te §§1.6–1.7; MIT lectures 3–4 |
| FA-3 | BS §§1.1.2, 1.2.2 | Te §§1.5, 4.2; Howard–Tachtsis and Wojdysławski checks |
| FA-4 | BS §2.3.1 | Te §4.2; Luxemburg/Pincus/Foreman–Wehrung/Pawlikowski |
| FA-5 | BS §§2.3.2–2.3.5 | Te §5.1; K-ARA IV.5 |
| FA-6 | BS §§2.1–2.2 | Te §4.1; Sokal; published Baire proof |
| FA-7 | BS §§1.3.1–1.3.2, 2.4.1, 4.1.1–4.1.3 | Te §§4.3, 4.6; MIT lectures 11–15 |
| FA-8 | BS §§3.1.1–3.1.4 | Te §§4.4, 5.3; K-ARA IV.1, IV.3 |
| FA-9 | BS §§3.2.1, 3.2.3, 3.3, 3.5 | Te §§5.2–5.3; K-ARA IV.3, IV.8; Rossi/Bell |
| FA-10 | BS §§2.4.1–2.4.3, 3.4 | Te §§4.4, 5.5; Whitley and Megginson |
| FA-11 | BS §2.4.4 plus its sequence-space examples | Albiac–Kalton ch. 1; Enflo primary paper |
| FA-12 | BS §§3.6.1–3.6.2, 7.3.1 | Te §11.6; Diestel–Uhl chs. II–III and Albiac–Kalton §5.3 |
| FA-13 | BS §§1.3.3, 2.3.6 | Te §§1.3, 2.2–2.4; MIT lectures 5–7; BFK |
| FA-14 | Te §§2.1, 2.5 | BS §2.3.6; K-BRA VI.7, VI.9; K-ARA II.2–II.3 |
| FA-15 | BS §§4.1–4.4, 5.2.3 | Te §§3.1, 6.5; K-ARA II.1 |
| FA-16 | Te §§3.2, 3.5–3.6 | K-ARA II.2–II.5; BS §5.2.3 |
| FA-17 | BS §§1.4, 5.1.1–5.2.4 | Te §§6.1, 6.6; Sh ch. 2 |
| FA-18 | BS §§5.4.1–5.5.2 | Te §6.4; Sh ch. 3; K-ARA IV.10; Kh §2.1 |
| FA-19 | BS §§5.3.1–5.5.3 | Te §6.2; Wi §§2–5; K-ARA IV.11 |
| FA-20 | BS §§5.6–5.7 | Te §6.3 and TQ §§3.1–3.3; Wi §§4–5 |
| FA-21 | BS §§6.1–6.5 | TQ §§2.2, 2.4, 3.1, 5.1; Wi §7 |
| FA-22 | Te §14.1 | K-BRA VIII.1–VIII.2; Dy §11.1 normalization check |
| FA-23 | Te §§14.1, 14.5 | K-BRA VIII.3–VIII.5; K-ARA III.1; Dy §11.1 |
| FA-24 | Dy chs. 2–4, 6 | K-ARA V.1–V.3; Te §14.5 |
| FA-25 | Dy §§11.1–11.2 | K-ARA III.1, V.4; Te §14.5; Heil §3.7 |

No pair is backed only by an encyclopedia, and no encyclopedia supplied a
mathematical statement.  The breadth sources control coverage; the primary
checks control the places where convention, logical strength, or a celebrated
counterexample makes textbook shorthand unsafe.

---

## 12. Final scaffold audit

The disk audit on 2026-08-14 found 25 pair headings, 25 A-page ids, 25 B-page
ids, and 687 proposed item ids.  All page and item ids are unique within this
scaffold; no proposed item id collides with a file in `items/`, and no proposed
item or page id collides with an id in the live `research/plan-spec.json`.
The largest A page is FA-18 at 28 items, so every A page remains below the
60-item split threshold.  Numbering is consecutive on every A and B page.

All 33 immutable ids on the present `deferred-functional-analysis` catalogue
occur in §9 with an explicit disposition.  The notation scan found no
canonical embedding applied to a natural-number literal.  This lane created
no item, page, plan, coverage, proof-contract, judge, or gate artifact; its
repository writes are confined to this prose scaffold.
