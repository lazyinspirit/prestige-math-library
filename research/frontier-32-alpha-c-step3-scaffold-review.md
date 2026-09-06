# frontier-32 — Alpha group `c` — Step 3 scaffold review

Group `c` covers batches `4`, `14`, and `15`, comprising three A/B pairs. I
reviewed each pair's manifest, coverage, notes, controlling design section, and
current `research/plan-spec.json` entry. I traced the external item dependencies
to earlier pages or published items and read the complete source ranges named by
the coverage records.

| A page | batch | A/B items | verdict |
|---|---:|---:|---|
| `the-baire-principles-of-functional-analysis` | 4 | 16 / 5 | **sufficient** |
| `harmonic-functions-and-mean-values-in-rn` | 14 | 16 / 6 | **sufficient** |
| `manifolds-with-boundary-collars-and-orientations` | 15 | 55 / 12 | **sufficient** |

The review found six small in-scope scaffold defects. They have been repaired
without adding a page, forward edge, reading-order change, or renamed item.

## Authority, prerequisites, and pair scope

The manifests agree with the current plan on the three A identifiers, kinds,
categories, orders, companions, and page prerequisites:

- `the-baire-principles-of-functional-analysis` is at `288.057`, followed by
  its B page at `288.058`, and directly requires
  `geometric-hahn-banach-and-convex-separation-examples`.
- `harmonic-functions-and-mean-values-in-rn` is at `458.003`, followed by its
  B page at `458.004`, and directly requires
  `quasilinear-characteristics-and-cauchy-kovalevskaya-examples`.
- `manifolds-with-boundary-collars-and-orientations` is at `467`, followed by
  `manifolds-with-boundary-collars-and-orientations-examples` at `468`, and
  retains the plan's eleven direct prerequisites.

The Step-0 drift review already established that the FA-6, PDE-3, and DG-13
design prerequisites occur in the corresponding transitive closures. The older
DG-13 design label `boundary-and-orientation-examples` is not used to rename the
current plan's established B page. Dry-run splicing reports exactly `2 pages / 21
items`, `2 / 22`, and `2 / 67` for batches 4, 14, and 15 respectively.

Every B page remains a leaf. Its items use only the paired A material, earlier
B items in the same pair where explicitly listed, or already-published backward
dependencies. Deferred results are not used as forward premises.

## Pair reviews and repairs

### `the-baire-principles-of-functional-analysis` — sufficient

The FA-6 spine is complete: uniform boundedness; the dense-G-delta
Banach–Steinhaus dichotomy; the pointwise-limit consequence; Sokal's separate
gliding-hump argument; the closure-ball and successive-approximation halves of
open mapping; quantitative open mapping and bounded inverse; graph, closed
graph, and closability; separately continuous bilinear maps; and equivalent
complete norms. The B page tests condensation of singularities, failure of
uniform boundedness/open mapping/closed graph on incomplete spaces, and a
closed unbounded differential operator.

Two missing backward interfaces were corrected:

- `thm-banach-steinhaus-dichotomy` now depends on `def-operator-norm`, because
  its alternative is stated in terms of uniform operator-norm boundedness.
- `def-closable-linear-operator` now depends on
  `def-metric-interior-closure-boundary`, which supplies both graph closure and
  the density convention in “densely defined”.

Authoring must preserve the exact hypotheses and boundaries already recorded
in the notes: the domain, but not the codomain, is Banach in the pointwise-limit
corollary; the open-mapping closure step is not the final ball inclusion; closed
graph applies to an everywhere-defined map between Banach spaces; and Sokal's
route records its countable/dependent choices.

The complete source ranges are Bühler–Salamon, *Functional Analysis*, Chapter 2
contents and §§2.1–2.2.3, printed pp. 57–70,
<https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf>;
Teschl, *Topics in Real and Functional Analysis*, §4.1, printed pp. 101–111 /
PDF pp. 113–123,
<https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf>;
and Sokal, *A Really Simple Elementary Proof of the Uniform Boundedness
Theorem*, PDF pp. 1–3,
<https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf>.

The 28 declined rows stand. The graph-norm, closure/inverse, perturbation, and
Hellinger–Toeplitz rows belong to
`unbounded-self-adjoint-operators-and-stones-theorem`; the closed-range,
quotient-range, approximate-range, and Douglas-factorization rows belong to
`dual-spaces-adjoint-operators-and-annihilators`. The remaining source-specific
applications and alternate examples are not load-bearing for this pair.

### `harmonic-functions-and-mean-values-in-rn` — sufficient

The PDE-3 route is coherent for open subsets of `R^n`, `n>=1`, with
`Delta=sum_i partial_i^2` and Poisson sign `-Delta u=f`. It proceeds through
normalized sphere and ball means, the exact radial derivative identity, both
mean-value implications, radial mollification on shrunken domains, the
`r^2 Delta u/(2(n+2))` expansion, distributional convolution, Weyl's lemma via
nested interiors and double convolution, weak/classical agreement, harmonic
derivatives, and locally uniform limits. The six examples cover elementary and
holomorphic harmonic polynomials, radial fundamental profiles, the puncture
obstruction, a one-centred quartic counterexample, and an apparent corner in
the distributional setting.

The example `ex-real-and-imaginary-parts-of-holomorphic-monomials` claimed a
cross-reference while declaring no dependency. Its contract and notes now name
the published backward results
`thm-complex-polynomials-and-rational-functions-are-holomorphic` and
`thm-c2-holomorphic-components-are-harmonic`. No complex-analysis theorem is
reproved on this page.

The complete sources are Hunter, *Notes on Partial Differential Equations*,
contents PDF pp. 3–4, §§1.6, 1.9, 2.1, 3.3, and the derivative opening of §3.4
(PDF pp. 13, 16–17, 25–26, and 56–58),
<https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf>; and Schikorra,
*Partial Differential Equations*, contents PDF p. 3 and §§I.2, I.2.2, I.2.4
(PDF pp. 11–12, 17–19, and 23–29),
<https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf>.

Both declined rows stand. Sub/superharmonic mean inequalities are owned by
`maximum-principles-harnack-and-liouville-in-rn`; Cauchy estimates are owned by
`poisson-problems-and-interior-harmonic-estimates`. Neither is needed for the
equality and Weyl route here.

### `manifolds-with-boundary-collars-and-orientations` — sufficient

The DG-13 route supplies half-space extension calculus, intrinsic boundary,
partitions and tangent bundles at the boundary, inward/tangent flow distinctions,
the noncompact collar construction, the labelled double, boundary submanifolds
and neatness, and determinant-line orientations through the
outward-normal-first boundary convention. It explicitly uses `H^0=R^0` with
empty coordinate boundary; determinant-line rays give two signed
zero-dimensional orientations, while the earlier empty-basis convention agrees
only in positive dimension.

Three boundary-case/claim repairs were made:

- `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold` now
  states the `(n-1)`-manifold conclusion only for `n>=1` and treats the
  zero-dimensional boundary separately as empty.
- `ex-the-closed-ball-and-its-sphere-boundary` now assumes `n>=1`, constructs
  boundary charts from `thm-euclidean-implicit-function-theorem`, and only then
  uses `1-|x|^2` as a defining function. The ball collar, disk double, and
  sphere-orientation strategies now carry the same dimension boundary.
- `fs-every-manifold-is-orientable` and
  `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary` now use
  determinant-line reversal around the Möbius core. The boundary circle is
  oriented independently by parametrization; the scaffold no longer makes the
  false claim that a nonoriented ambient band induces its boundary orientation.
  Their dependencies now include
  `def-oriented-smooth-manifold-and-oriented-chart` rather than the inapplicable
  induced-boundary-orientation definition.

The collar theorem's noncompact case retains the locally finite positive-time
shrinking step and makes no unjustified uniform-width claim. Inward fields have
only a local forward semiflow in the manifold, while boundary-tangent fields
have local two-sided flows preserving the boundary. The double is well defined
up to the stated seam-fixing, labelled-half-preserving diffeomorphism, not by a
claim that collar choices produce literally identical atlases.

The complete declared sources are Mărcuț, *Manifolds*, §14.5 and §15.1, PDF pp.
131–132 and 136–140,
<https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf>; Merry,
*Differential Geometry*, complete Lecture 24, PDF pp. 194–206,
<https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf>;
and *Vector Bundles* course notes, §8, PDF pp. 86–87,
<https://usherugamath.wordpress.com/wp-content/uploads/2018/09/vbnotes.pdf>.

All five declined rows stand. The two topological boundary-invariance routes
require invariance-of-domain or local-homology machinery excluded by the smooth
proof contract; the source's later boundaryless convention and the relative
fundamental-class orientation route are not premises of this page.

## Scope decisions

I refreshed `research/frontier-32-alpha-c-scope-decisions.json` and resolved
all 35 current rows as `stands` with current evidence: 28 for batch 4, two for
batch 14, and five for batch 15. No row requires `owner-decision`; every named
deferred destination exists and owns the result, and no disposition requires a
new page, a forward dependency, or a reading-order change.

`node tools/scope-decisions.mjs check --run frontier-32 --group c` reports 35
current declines and 0 errors.

## Validation and next action

The focused checks on the repaired bytes report:

- `manifest-deps`: batch 4 `21`, batch 14 `22`, and batch 15 `67` items; zero
  normalization and zero errors in each run.
- `content-policy --manifest-only`: zero errors and zero warnings for each
  assigned manifest.
- `coverage-checklist --require-destination`: batch 4 `1 page / 69 results`,
  batch 14 `1 / 29`, and batch 15 `1 / 61`; zero errors and zero warnings.
- `source-fetch-check`: all `8/8` declared sources are fetch-verified.
- `splice-plan --dry-run`: batch 4 `2 pages / 21 items`, batch 14 `2 / 22`, and
  batch 15 `2 / 67`, all successful.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: successful;
  the current plan is acyclic and consistent, with no item-level cycles,
  forward references, B-page dependency violations, or unresolved ids among
  pages carrying item lists. Its redundant-prerequisite output is advisory and
  repository-wide.

No blocker remains for authoring these three pairs. The engine may proceed from
the three `sufficient` verdicts; no further scope or route decision is requested.
