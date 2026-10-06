# Step 3a scope review — `analytic-semigroups-and-linear-evolution-equations`

- Run: `frontier-39-analysis-30`
- A page: `analytic-semigroups-and-linear-evolution-equations` (order 458.045, `pde`, batch 18)
- B page: `analytic-semigroups-and-linear-evolution-equations-examples` (order 458.046)
- Owned pair only; no scaffold, manifest, coverage or shared file was edited.
- Decision: **sufficient**. Receipt: `research/frontier-39-analysis-30-step3a-review-analytic-semigroups-and-linear-evolution-equations.json`
  (`sha256 ffe2e6dd9cb9f0b47d308affeb444740d3f16fe8a7475ecb99c8f1ff84fe77c1`, recorded
  2026-10-04T19:14:36Z). The receipt is computed against the current Step-3a scope hash.

## Inputs read

- Manifest `research/frontier-39-analysis-30-batch-18.pages.json` (A: 27 items, B: 9 items);
  `research/plan-spec.json` orders 458.045/458.046 (A requires only
  `strongly-continuous-semigroups-and-hille-yosida`; B requires the A companion).
- Coverage `research/frontier-39-analysis-30-batch-18.coverage.json` (7 source rows: EN, SN, T
  for the A page; EN, SN, T for the B page); construction note
  `research/frontier-39-analysis-30-batch-18.notes.md`; cross-batch input
  `research/frontier-39-analysis-30-batch-18.cross-batch-dependencies.json` (94 rows: 1 page +
  93 item); run-level ledger `research/frontier-39-analysis-30-cross-batch-dependencies.json`
  (batch-18 consumer edges: 78 `open`, 12 `verified`, 4 `removed`).
- Prose design `research/plan-pde-track.md` PDE-24 (L2106–2142), `#### PDE-24 additions`
  (L3776–3790), and the seam/harvest rows L2407, L2436, L2624, L2669, L3093–3097, L3105–3113,
  L3258, L3401, L3780–3789.
- Alpha drift verdict for this page: no-drift
  (`research/frontier-39-analysis-30-alpha-step1-drift.md` §`analytic-semigroups-...`), whose
  constraints are: sectorial contour construction and associated-form resolvent theorem are
  local obligations; positive-time operator-domain smoothing must be separated from spatial
  regularity and from the forcing compatibility at time zero. Owner resolution
  `research/frontier-39-analysis-30-step1-owner-resolution.md` has no pair-specific finding;
  `research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist.
- Published suppliers opened for their load-bearing uses (`def-banach-algebra-valued-contour-integral`,
  `lem-contour-integral-commutes-with-bounded-linear-maps`, `def-numerical-range-and-numerical-radius`,
  `ex-spectrum-of-a-multiplication-operator`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`,
  `lem-canonical-banach-complexification-of-a-real-banach-space`), and the in-run supplier
  statements of batches 4, 10, 11, 12, 17 quoted below.
- Read-only checks rerun: `manifest-deps` 36/0; `coverage-checklist --require-destination`
  2 pages / 56 harvested results / 0 errors / 0 warnings; `source-fetch-check` 7/7 fetch-verified;
  `splice-plan --verify` (batch-18 findings quoted below).

## Design crosswalk (scope vs prose plan)

- A page: **14/14** design claims present with matching IDs and kinds — `def-complex-sector-and-
  bounded-analytic-semigroup`, `def-sectorial-operator-with-the-semigroup-sign-convention`,
  `thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups`,
  `lem-contour-definition-of-an-analytic-semigroup`, `thm-analytic-semigroup-smoothing-estimates`,
  `cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero`,
  `thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups`,
  `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup`,
  `def-closed-sectorial-form-and-its-associated-operator`,
  `lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator`,
  `thm-form-generated-sectorial-elliptic-semigroups`,
  `thm-classical-regularity-for-holder-continuous-forcing-under-compatibility`,
  `cor-abstract-parabolic-smoothing`, `rem-real-banach-spaces-require-complexification-for-analyticity`.
- Plus **7/7** A additions (`lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds`,
  `lem-dunford-contour-construction-satisfies-the-semigroup-law`,
  `lem-analytic-duhamel-cancellation-removes-the-generator-singularity`,
  `lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero`,
  `cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup`,
  `lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator`,
  `rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification`)
  and **6** disclosed local prerequisites that close design gaps the construction note records:
  `lem-resolvent-identity-and-holomorphy-for-closed-operators`,
  `lem-banach-valued-cauchy-theorem-on-star-shaped-domains`,
  `thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions`,
  `lem-power-series-coefficients-are-determined-by-real-values`,
  `lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves`,
  `lem-generator-of-the-contour-semigroup-is-the-sectorial-operator`. Total 27 = manifest count.
- B page: **6/6** design leaves plus **3/3** B additions = the 9 manifest items; the three
  counterexamples were made self-contained to avoid B-leaf dependencies (recorded in the note).
- No design claim is dropped, weakened or moved without a recorded reason. The drift constraints
  are implemented: the sectorial contour (`lem-contour-definition-...`), generator identification
  and form-resolvent theorem are local items; positive-time `D(A^m)` smoothing
  (`thm-analytic-semigroup-smoothing-estimates`, `cor-abstract-parabolic-smoothing`) is separated
  from spatial identification (`rem-abstract-generator-domain-smoothing-...`) and from the
  endpoint compatibility `Ax+f(0)` (`lem-classical-parabolic-solution-at-time-zero-...`).

## Design deviations assessed as scope-neutral (already recorded by construction)

1. The design names FA-17/FA-21 and the scalar contour pages as suppliers; the scaffold instead
   proves a choice-free Banach-valued Cauchy theory locally (six items above). The claims are
   unchanged and the source reading (EN II.4.a) is unchanged; this is a supplier-route
   strengthening, not an omission of any planned definition, result or example.
2. The design's `[EN] II.4.b` citation for the Duhamel/classical-regularity additions is
   corrected in the manifest to `[SN]` §2.3 and `[T]` Ch. 11 §§11.3/11.5 (EN II.4.b treats
   differentiable semigroups, not Hölder forcing); statements are unchanged.
3. The design names PDE-16–PDE-19 as page prerequisites, but `plan-spec.json` declares only the
   PDE-23 page; PDE-16/17/18 are consumed at item level through batches 10/11/12 and declared in
   the cross-batch input. This is the plan-controlled resolution already recorded in the note;
   the splice step still owes the page-level `requires` edges (see below).

## Source coverage

- Four sources back the pair: [EN] II.4.a–b (printed pp. 95–112, read in full for the used
  sections), [SN] Ch. 2 §2.3 (printed pp. 55–72) with the resolvent intermezzo (1.5)–(1.8)
  (p. 10), [T] Ch. 11 §§11.3–11.5 (printed pp. 258–278), [J] Ch. 6 §2.1–2.3 as the nonanalytic
  baseline; all 7 coverage rows are fetch-stamped (7/7 rechecked).
- 56 harvested rows: 30 `included`, 16 `inline`, 10 `out-of-scope`, each decline with a written
  reason (non-dense-domain and Lp-with-p≠2 realisations, the C0(U) and general uniformly elliptic
  generation routes, group/eventual-differentiability refinements, the hyperbolic application,
  numerical/Galerkin material, exercises). These are genuinely outside this pair's intended
  subject, and the plan itself explicitly defers EN II.4.c–d (eventual regularity classes),
  EN II.5 (interpolation/extrapolation, i.e. fractional powers) and SN §2.2 extrapolation, plus
  the perturbation/spectral-asymptotic chapters; only integer generator-domain smoothing is
  claimed. No harvested result needed by a pair item is declined.

## Intended role in the library

- PDE-24 is the PDE track's analytic-semigroup and parabolic-smoothing spine, with the B page
  supplying the named examples and counterexamples; it owns the `e^{tA}` sign/convention
  dictionary (`def-sectorial-operator-with-the-semigroup-sign-convention`).
- Downstream in-run: batch 19 (`hamilton-jacobi-equations-and-viscosity-solutions`) requires this
  pair at page level; no item of any other run batch depends on a pair item (checked against all
  30 batch manifests). The B page requires the A page. This matches the plan ordering
  (`FA unbounded operators + PDE-16/17 -> PDE-23 -> PDE-24`, plan L340).

## Prerequisite check (unmet prerequisites)

**Method.** Transitive closure of all 36 pair items over the run manifests and the published
`items/` front matter (deps/justified_by/forward_refs).

**Result.** 2011 closure nodes: 1888 published items + 123 in-run scaffold items (by defining
batch: 4:2, 9:4, 10:16, 11:15, 12:22, 17:28). **0 missing IDs; 0 nodes that are planned but
unscaffolded and unpublished.** Load-bearing in-run suppliers were opened and match the uses:

- batch 17: `def-strongly-continuous-semigroup`, `def-infinitesimal-generator-of-a-c-zero-semigroup`,
  `def-resolvent-of-a-closed-operator`, `thm-generators-are-closed-and-densely-defined`,
  `thm-exponential-bound-for-a-c-zero-semigroup`, `thm-laplace-transform-formula-for-the-semigroup-resolvent`,
  `lem-semigroup-generator-commutes-with-orbits-on-its-domain`,
  `lem-integrated-semigroup-orbits-belong-to-the-generator-domain`,
  `thm-variation-of-constants-formula`, `def-classical-strong-and-mild-abstract-cauchy-solutions`,
  `lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing`,
  `def-dissipative-operator`, `thm-lumer-phillips-generation-theorem`, `lem-exponential-series-of-a-bounded-operator`,
  `lem-average-convergence-of-a-continuous-banach-valued-function`;
- batch 10: `thm-lax-milgram`, `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`,
  `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `lem-w-one-two-is-a-hilbert-space`;
- batch 11: `def-ltwo-operator-associated-with-a-symmetric-elliptic-form`,
  `lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded`,
  `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`,
  `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`,
  `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue`,
  `cor-poincare-constant-and-first-dirichlet-eigenvalue`;
- batch 12: `thm-global-h-two-dirichlet-regularity`,
  `thm-higher-order-boundary-regularity-for-dirichlet-problems`,
  `rem-regularity-estimates-do-not-create-boundary-compatibility`;
- batch 4: `thm-poincare-inequality-for-w-one-p-zero`, whose statement is exactly the
  "Ω bounded in one direction, u ∈ W^{1,p}_0(Ω)" inequality the Dirichlet corollary's slab
  clause needs.

**No confirmed unmet prerequisite.**

Two undeclared-but-available prerequisites are Step-4/authoring declaration matters, not gaps:

1. `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` (part 2) invokes the
   one-dimensional/slab Poincaré inequality, but neither the item's deps nor the cross-batch
   input lists `thm-poincare-inequality-for-w-one-p-zero` (batch-4 A page). The claim exists; the
   edge should be declared at authoring/splice.
2. The Banach-valued Cauchy/contour items use a Banach-space-valued contour integral without a
   declared definition. The published, choice-free `def-banach-algebra-valued-contour-integral`
   (plus `lem-contour-integral-commutes-with-bounded-linear-maps`) supplies exactly this notion;
   the scaffold inlines the definition inside the strategy of
   `lem-banach-valued-cauchy-theorem-on-star-shaped-domains`. Recommend declaring the published
   definition on that lemma, `thm-cauchy-integral-formula-and-cauchy-estimates-...` and
   `lem-contour-definition-of-an-analytic-semigroup`.

One uncertainty, not a gap: `cex-the-translation-semigroup-is-not-analytic` clause (3) routes
`σ(d/dx on L^p(R)) = iR` through "the generator is the Fourier multiplier with symbol iξ and has
spectrum the closure of the symbol's range". No published or scaffolded item states the spectrum
of a general L^p Fourier multiplier for p≠2 (the published Fourier-multiplier theory in `items/`
is L²/Schwartz-core; `ex-spectrum-of-a-multiplication-operator` is L²). The claim is true and can
be proved inline by the explicit L^p resolvent of d/dx (or for p=2 by Fourier plus the range
obstruction for the rest), so this is a proof-route clarification for the authoring stage; the
range obstruction (1) already rules out analyticity for every p.

## Non-scope observations for authoring

- `cor-abstract-parabolic-smoothing`'s statement carries meta-commentary ("The compatibility
  tower is retained from the planned statement ... its proof below does not need the tower").
  The claim itself is consistent with its graph-norm source hypothesis; the authoring stage may
  either prove it as stated (ignoring the redundant tower) or request owner re-`proceed` for a
  simplified statement, since statement edits change the Step-3a scope hash.
- `splice-plan --verify` reports undeclared page-level `requires` edges from this pair to
  `lax-milgram-and-weak-elliptic-solutions` (PDE-16), `fredholm-elliptic-problems-and-the-elliptic-spectrum`
  (PDE-17), `interior-and-boundary-sobolev-elliptic-regularity` (PDE-18) and the batch-4
  `sobolev-poincare-and-morrey-inequalities` (PDE-14), plus the already-declared batch-17 edge.
  All supplier claims exist in the scaffold; this is a Step-4 splice matter, not an unmet
  prerequisite.
- The run ledger records the previously declared Hille–Yosida page edges as `removed` after the
  characterisation theorem's route was changed to the contour construction; the remaining
  batch-18 cross-batch edges are `open` (78) or `verified` (12), as expected before Step 3b.
- No published item is reported defective in this review.

## Closure evidence and decision

The planned definitions (analytic semigroups, sectorial operators, closed sectorial forms),
results (contour construction, generator identification, smoothing/differentiability, the
(a)–(e) sectorial characterisation, self-adjoint and form-generated generation, spectral-gap
decay, classical regularity under Hölder forcing, abstract smoothing) and examples (bounded
generator, Dirichlet heat, multiplication, nonselfadjoint, translation, norm-discontinuity, sign
convention, forcing endpoint, abstract-vs-spatial smoothing) adequately cover the intended
subject; source coverage is complete and justified; and no prerequisite required by a planned
item is absent from both the published library and the current scaffold.

**Decision: `sufficient`**, recorded with `tools/step3-decisions.mjs record-scope` against the
current scope hash and this report.
