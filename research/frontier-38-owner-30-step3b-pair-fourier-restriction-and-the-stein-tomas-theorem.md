# Step 3b auditor/author report — pair `fourier-restriction-and-the-stein-tomas-theorem`

- Run: `frontier-38-owner-30`, stage `3b-author`, dispatch label
  `step3b-pair-fourier-restriction-and-the-stein-tomas-theorem-06524d58e20bc173`.
- Role: alpha-high scaffold auditor and item author (not owner). No owner ruling
  was invented; the only scope evidence used is the Step-3a review receipt named
  in §1. No `.autopilot` state, published item, sibling batch row, plan-spec
  entry or engine artifact was edited.
- A page: `fourier-restriction-and-the-stein-tomas-theorem` — batch 6, order
  458.02617, category `fourier-analysis`, 21 items.
- B page: `fourier-restriction-and-the-stein-tomas-theorem-examples` — order
  458.02618, 5 items.
- Batch 6 contains this pair only; its shared files carry no sibling rows.
- Status at handoff: **26/26 items fully authored and on disk; 22 item decisions
  `accept` (confidence 1); 4 item decisions `escalate`** for one genuine
  owner-held reading-order defect (§6, §10). The two library pages, the batch
  proof-contract file, the manifest, the coverage file and this report are
  complete. The Step-3 item gate is closed for 22 items and owner-held for 4;
  the repo-wide `fwdcheck` gate still reports the 16 forward wikilinks of §6a,
  which cannot be repaired inside the authoring scope.

## 1. Owned IDs, inputs read, entry obligations

Owned IDs (26; all are original scaffold IDs — each appears in the immutable
pre-author inventory `research/frontier-38-owner-30-step3-auditor-baseline.json`
— so every one needs an ordinary current item decision; there are no
baseline-absent additions):

- A (21): `def-fourier-restriction-and-adjoint-extension-operators`,
  `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data`,
  `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph`,
  `lem-sphere-finite-graph-charts-and-surface-density`,
  `lem-unit-sphere-is-lebesgue-null`,
  `lem-van-der-corput-oscillatory-integral-estimate`,
  `lem-compact-curved-hypersurface-finite-graph-cover`,
  `lem-restriction-and-extension-estimates-are-dual`,
  `lem-spherical-cap-and-dual-slab-scales`,
  `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`,
  `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform`,
  `lem-cap-wave-packet-has-dual-tube-concentration`,
  `lem-localized-curved-patch-measure-transform-decay`,
  `lem-stationary-phase-decay-for-spherical-surface-measure`,
  `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds`,
  `thm-knapp-necessary-condition-for-spherical-ltwo-restriction`,
  `lem-stein-tomas-tt-star-bound-from-fractional-integration`,
  `rem-the-general-fourier-restriction-problem`,
  `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature`,
  `thm-stein-tomas-spherical-restriction-theorem`,
  `rem-restriction-estimates-and-the-missing-strichartz-interface`.
- B (5): `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise`,
  `cex-knapp-rules-out-extension-below-the-tomas-exponent`,
  `ex-knapp-cap-and-tube-volume-calculation`,
  `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay`,
  `ex-circle-stein-tomas-exponents`.

Inputs read: `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `briefs/group-author.md`;
`research/frontier-38-owner-30-batch-6.pages.json` (26 scaffold items with
statements, deps, levels, provenance, sources, strategies);
`…-batch-6.coverage.json`; `…-batch-6.notes.md` (Step-1 construction and the
attempt-2 repairs); `…-batch-6.cross-batch-dependencies.json` (`[]`);
`research/frontier-38-owner-30-step3a-pair-fourier-restriction-and-the-stein-tomas-theorem.md`
and its review JSON (scope `sufficient`); the owner direction
`research/frontier-38-owner-30-owner-authoring-direction.md`; design FR-14 in
`research/plan-fourier-analysis-track.md`; the published supplier items named in
each scaffold `deps` list, including the later-ordered Riemannian-geometry
suppliers flagged in §6.

Entry obligations and disposition:

1. Author all 26 items with complete proofs, exact supplier facts and honest
   Choice accounting. **Done**; decisions in §3.
2. Resolve the Step-3a residual uncertainty: the corollary's global-normal
   wiring and the uniform-in-ν compactness in
   `lem-localized-curved-patch-measure-transform-decay`. **Done** (§4).
3. Register pages, manifests, coverage and the batch proof-contract file; run
   the explicit-path battery; record item receipts. **Done**; §7–§8.
4. Report pre-splice plan mismatches for Step 4 without hiding unresolved
   dependencies. **Done**; §6 — the count grew from the five recorded at Step 3a
   to **seven** pages after the manifest was synced to the authored deps (two
   further page edges: `trigonometric-and-oscillatory-examples-in-one-variable`,
   `connections-levi-civita-and-parallel-transport`). Four of the seven are
   *forward* edges and are owner-held under the Step-4 task text.

## 2. Authoring order actually used, and dependency-level corrections

Items were audited, authored, checked and checkpointed one at a time in the
dispatch's ascending `dependency_level` order (ties by page order then item ID);
each proof uses only its declared dependencies, and no earlier item is justified
by a later one in the authoring order. The frozen scaffold's level labels were
recomputed after the authored `deps` were synced into the manifest
(`node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`):
exactly four labels changed because the authored files declare in-run suppliers
the scaffold rows omitted. No further cascade occurred; the run-wide check is
clean (816 items, 60 pages, maximum level 16).

| item | scaffold label | corrected label | cause |
| --- | ---: | ---: | --- |
| `def-fourier-restriction-and-adjoint-extension-operators` | 0 | 1 | consumes `lem-unit-sphere-is-lebesgue-null` (in-run, level 0) |
| `lem-restriction-and-extension-estimates-are-dual` | 1 | 2 | consumes the corrected definition |
| `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` | 1 | 2 | consumes the corrected definition |
| `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` | 1 | 2 | consumes the corrected definition |

## 3. Item checkpoint: statements, decisions, added suppliers

All 26 files exist under `items/`, carry `status: draft`,
`pipeline_run: frontier-38-owner-30`, a `verification.precheck` record (`pass`
for the 23 proof-bearing items, `n/a` for the definition and the two
`proved_here: false` remarks), complete `sources.references`, and `deps` synced
into the manifest (26/26 rows match). "d" is the final in-frontmatter `deps`
count; "added deps" are the suppliers the authored file adds over the frozen
scaffold row (all published items unless marked in-run).

| # | final level | item (kind) | decision | d | notes and added deps |
| ---: | ---: | --- | --- | ---: | --- |
| 1 | 1 | `def-fourier-restriction-and-adjoint-extension-operators` (definition) | accept | 13 | +`thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `lem-unit-sphere-is-lebesgue-null` (in-run L0). R₀ on Schwartz data, E g=(gσ)ˇ with uniform continuity and L² bound; σ fixed as polar/chart measure. |
| 2 | 0 | `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data` (lemma) | accept | 18 | +`thm-total-variation-of-a-complex-measure-is-finite`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `def-convolution-of-two-functions-on-rn`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-composition-with-borel-functions-preserves-measurability`, `cor-sine-and-cosine-are-one-lipschitz`, `thm-arithmetic-and-lattice-operations-preserve-measurability`. Pairing and convolution identities for finite measures against Schwartz data. |
| 3 | 0 | `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` (lemma) | **escalate** | 12 | +`lem-surface-integral-is-independent-of-c-one-boundary-charts`, `ex-the-euclidean-levi-civita-connection`, `thm-determinant-multiplicative`. Complete determinant computation det S_ν = det D²h/(1+|∇h|²)^((n+1)/2); rests on four #483, one #479 and one #477 supplier — §6a, §10. |
| 4 | 0 | `lem-sphere-finite-graph-charts-and-surface-density` (lemma) | accept | 16 | +`cor-determinant-is-alternating-multilinear-in-the-rows`, `cor-determinant-vanishes-with-a-zero-or-repeated-column`, `thm-determinant-of-transpose`. 2n hemisphere charts, density (1−|y|²)^(−1/2), Hessian determinant, finite subordinate partition. |
| 5 | 0 | `lem-unit-sphere-is-lebesgue-null` (lemma) | accept | 9 | +`prop-countable-subsets-of-rn-are-lebesgue-null`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-continuous-preimages-of-borel-sets-are-borel`, `def-nonnegative-lebesgue-integral`, `def-integral-over-a-measurable-set`. Polar formula plus a null singleton. |
| 6 | 0 | `lem-van-der-corput-oscillatory-integral-estimate` (lemma) | accept | 15 | +`thm-riemann-stieltjes-c1-integrator-reduction`, `cor-riemann-stieltjes-agrees-with-riemann`, `def-bounded-variation-and-total-variation`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `thm-riemann-stieltjes-linearity-and-additivity`. Monotone-derivative form (attempt-2 repair); choice-free proof. |
| 7 | 1 | `lem-compact-curved-hypersurface-finite-graph-cover` (lemma) | **escalate** | 14 | +`thm-euclidean-implicit-function-theorem`, `thm-embedded-submanifolds-admit-local-defining-submersions`, `thm-weingarten-equation-and-adjointness-of-the-shape-operator`. Local defining submersions + compactness + partition of unity; uses one #481 and three #483 suppliers — §6a, §10. |
| 8 | 2 | `lem-restriction-and-extension-estimates-are-dual` (lemma) | accept | 12 | +`thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, `def-complex-l-two-inner-product`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`. Dense-core duality through the complex inner product. |
| 9 | 1 | `lem-spherical-cap-and-dual-slab-scales` (lemma) | accept | 9 | +`thm-lebesgue-measure-of-a-box-of-every-kind`, `cor-volume-of-a-radius-r-n-ball`, `thm-polar-coordinates-formula-for-lebesgue-measure`. Corrected cap identity |y|²≤2δ²−δ⁴ and diameter ≤2√2 δ; σ(C_δ)≍δ^(n−1), dual slab ≍δ^(−(n+1)). |
| 10 | 1 | `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase` (lemma) | accept | 20 | +`thm-differentiation-under-the-integral-sign`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-newton-leibniz-with-interior-derivative`, `cor-volume-of-a-radius-r-n-ball`. λ-decay, λ-derivative clause and Fresnel small-ball bound. |
| 11 | 2 | `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` (lemma) | accept | 8 | +`thm-complex-holder-minkowski-and-the-quotient-norm`, `def-complex-l-two-inner-product`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`. EE\*F=F∗(dσ)ˇ on dense classes, then closure. |
| 12 | 2 | `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` (B counterexample) | accept | 6 | +`def-schwartz-space-and-its-seminorms`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`. Two representatives differing only on the Lebesgue-null sphere. |
| 13 | 2 | `lem-cap-wave-packet-has-dual-tube-concentration` (lemma) | accept | 8 | +`cor-sine-and-cosine-are-one-lipschitz`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `def-complex-lp-and-euclidean-test-function-conventions`, `thm-linearity-of-the-lebesgue-integral-on-l-one`. Cap coherence on the δ^(−1)×⋯×δ^(−1)×δ^(−2) tube. |
| 14 | 2 | `lem-localized-curved-patch-measure-transform-decay` (lemma) | **escalate** | 17 | +`lem-compact-curved-hypersurface-finite-graph-cover` (in-run L1), `thm-euclidean-implicit-function-theorem`, `def-local-defining-map-for-an-embedded-submanifold`, `def-shape-operator`, `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`, `thm-weingarten-equation-and-adjointness-of-the-shape-operator`. Uniform-in-ν decay written out; uses one #481 and three #483 suppliers — §6a, §10. |
| 15 | 2 | `lem-stationary-phase-decay-for-spherical-surface-measure` (lemma) | accept | 8 | +`def-partition-of-unity-subordinate-to-a-cover`. Sphere decay from the finite hemisphere partition. |
| 16 | 3 | `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` (lemma) | accept | 13 | +`def-complex-lp-and-euclidean-test-function-conventions`, `def-countable-choice`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `thm-extension-of-a-bounded-map-from-a-dense-subspace`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-holder-inequality-for-integrals`. Dispersive ⟨t⟩^(−(n−1)/2) and uniform L² slice bounds. |
| 17 | 3 | `thm-knapp-necessary-condition-for-spherical-ltwo-restriction` (theorem) | accept | 8 | +`def-nonnegative-lebesgue-integral`, `lem-cauchy-reals-archimedean`, `lem-power-laws`. p≤2(n+1)/(n+3) ⇔ q≥2(n+1)/(n−1) by the δ↓0 cap comparison. |
| 18 | 4 | `lem-stein-tomas-tt-star-bound-from-fractional-integration` (lemma) | accept | 9 | +`def-complex-lp-and-euclidean-test-function-conventions`, `thm-complex-holder-minkowski-and-the-quotient-norm`. Interpolation to |t−s|^(−β), β=(n−1)/(n+1), then FR-13 HLS at order a=1−β=2/(n+1). |
| 19 | 4 | `rem-the-general-fourier-restriction-problem` (remark, `proved_here: false`) | accept | 2 | Recorded orientation only; precheck `n/a`, `external_dependency` complete; no proof. |
| 20 | 4 | `cex-knapp-rules-out-extension-below-the-tomas-exponent` (B counterexample) | accept | 7 | +`def-conjugate-exponents`, `def-nonnegative-lebesgue-integral`, `lem-restriction-and-extension-estimates-are-dual`. Cap data violate every q<q₀ bound. |
| 21 | 4 | `ex-knapp-cap-and-tube-volume-calculation` (B example) | accept | 3 | Arithmetic leaf; repeats the corrected cap identity. No added deps. |
| 22 | 5 | `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` (corollary) | **escalate** | 19 | +`cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-local-defining-map-for-an-embedded-submanifold`, `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`, `def-shape-operator`, `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` (in-run L0), `thm-euclidean-implicit-function-theorem`. Uses local orientations (no global normal); uses two #483 suppliers — §6a, §10. |
| 23 | 5 | `thm-stein-tomas-spherical-restriction-theorem` (theorem) | accept | 14 | +`cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime`, `def-complex-lp-and-euclidean-test-function-conventions`, `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` (in-run L3). Full p≤p₀ / q≥q₀ range and adjoint form. |
| 24 | 6 | `rem-restriction-estimates-and-the-missing-strichartz-interface` (remark, `proved_here: false`) | accept | 2 | Recorded orientation only; precheck `n/a`, `external_dependency` complete; no proof. |
| 25 | 6 | `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` (B counterexample) | accept | 9 | +`cor-trigonometric-parity-and-pythagorean-identity`, `def-nonnegative-lebesgue-integral`, `thm-eulers-formula`, `thm-newton-leibniz-with-interior-derivative`. Flat measure concentrates on the normal subspace. |
| 26 | 6 | `ex-circle-stein-tomas-exponents` (B example, `ai-generated`) | accept | 2 | Arithmetic leaf n=2: p₀=6/5, q₀=6. No added deps and no source claimed, per design. |

Totals: 26 items, 272 declared dep edges, maximum level 6, one A page of 21
items and one B page of 5 (well under the 100-item ceiling).

## 4. Mathematical decisions taken during authoring (recorded for Steps 5–8)

- `lem-van-der-corput-oscillatory-integral-estimate`: the first-pass k=1
  clause was false without a monotone-derivative hypothesis (Tao notes 8,
  Example 2.2). The authored statement carries Tao's Lemma 2.4 hypotheses with
  explicit constants, the higher-derivative clause in Lemma 2.5 form, and the
  Fresnel bound actually consumed downstream; the proof is choice-free through
  the Riemann–Stieltjes items.
- `lem-spherical-cap-and-dual-slab-scales`: the correct graph-chart cap
  identity is |y|²≤2δ²−δ⁴ and the chord diameter is at most 2√2 δ (not δ and
  2δ); both are stated and used. The δ^(n−1), δ^(−(n+1)) scales — the only ones
  Knapp consumes — are unchanged.
- `lem-unit-sphere-is-lebesgue-null`: proved from the polar-coordinates formula
  plus a null singleton (not assumed).
- `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`: the
  λ-derivative clause and the uniform-in-ν constants are proved, not cited; the
  Taylor/diagonalization route carries its exact suppliers.
- `lem-localized-curved-patch-measure-transform-decay`: the uniform-in-ν
  compactness (at most one critical point per ball, implicit-function
  parametrization of the critical family, uniform |∇ψ_ν| lower bound off fixed
  small balls) is written out in steps 5.1–6.1, closing the Step-3a residual
  uncertainty.
- `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature`: the proof
  supplies local orientations from the defining submersions, so no global unit
  normal field is needed (closing the Step-3a flagged prerequisite without a
  statement or inventory change); `lem-compact-curved-hypersurface-finite-graph-cover`
  keeps its stated normal-field hypothesis as a hypothesis.
- `lem-stein-tomas-tt-star-bound-from-fractional-integration`: β=(n−1)/(n+1)
  and the HLS order a=1−β=2/(n+1) at p₀=2(n+1)/(n+3) are recorded exactly as
  the owner direction requires; the one-dimensional HLS hypotheses
  (1<p<(n+1)/2 for n≥2 at p₀) are checked in the item.

## 5. Choice accounting

Every statement that consumes the published chart surface measure, the polar
sphere measure, Plancherel/Hausdorff–Young, the Riesz–Thorin core lemma, the
dense-extension theorem or the FR-13 HLS theorem declares Countable Choice
(`def-countable-choice` in `deps`); the definition and the items using the
chart/partition constructions state AC_ω where they consume it. Exact uses are
chart and partition selection, the measurable-selection steps of the published
measure constructions, and the dense-core extension.
`lem-van-der-corput-oscillatory-integral-estimate` is choice-free. No item uses
full AC and no foundations item is reached. Each proof's final step or Facts
records the Choice use; the contract file records it per step.

## 6. Pre-splice plan mismatches and forward references (owner-held; for Step 4)

### 6a. Item-level forward wikilinks (`tools/fwdcheck.mjs`, 16 findings, 4 consumers)

The pair sits at plan order 458.02617/458.02618, but four of its items consume
published suppliers whose pages are ordered *later* (477–483, the Riemannian
geometry track). `fwdcheck` reports each such wikilink as `forward-undeclared`;
`validate-plan`'s item-level forward-ref rule skips deps on published items, so
these are link-level findings. Exact map:

| consumer | supplier (home #order) | consuming fact | consuming step |
| --- | --- | --- | --- |
| `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` | `def-shape-operator` (#483) | [F1] | 2.1 (and statement) |
| | `thm-weingarten-equation-and-adjointness-of-the-shape-operator` (#483) | [F2] | 1.3, 2.1 |
| | `def-induced-connection-and-second-fundamental-form` (#483) | [F3] | 1.3 |
| | `ex-the-euclidean-levi-civita-connection` (#479) | [F4] | 1.3 |
| | `prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions` (#477) | [F5] | 1.1, 2.1 |
| | `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface` (#483) | [F8] | 4.1 (and statement) |
| `lem-compact-curved-hypersurface-finite-graph-cover` | `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` (#481) | [F2] | 1.1 |
| | `def-shape-operator`, `def-principal-curvatures-…`, `thm-weingarten-…` (#483) | [F3] | 2.1, 3.1 (and statement) |
| `lem-localized-curved-patch-measure-transform-decay` | `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` (#481) | [F2] | 3.1, 5.1 |
| | `def-shape-operator`, `def-principal-curvatures-…`, `thm-weingarten-…` (#483) | [F5] | 7.1 (and statement's general clause) |
| `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` | `def-shape-operator`, `def-principal-curvatures-…` (#483) | [F2] | 1.1 (and statement) |

Why this cannot be repaired by declaration inside this batch: `fwdcheck`'s
`forward-on-spine` rule forbids a lemma (or definition/theorem) from resting on
later-ordered material; `forward_refs` is available only to consequences, and
declaring it on the corollary alone would pre-judge the batch-level remedy. The
three lemmas' proofs genuinely use the shape-operator/second-fundamental-form
theory, whose only home in the library is #477–#483; no earlier published
supplier exists (checked: every shape-operator/second-fundamental-form item
lives on `riemann-curvature-and-riemannian-submanifolds`; the R³ surface page
`regular-surfaces-and-surface-integrals` has no curvature apparatus).

### 6b. Page-level `undeclared-prereq` findings (scratch-spliced `validate-plan`)

Splicing the synced manifest into a scratch copy of `plan-spec.json` and running
`validate-plan.mjs` yields **seven** page findings (the Step-3a notes recorded
five; the dep sync added two page edges). Disposition under the Step-4 task
text ("Apply only a genuine backward prerequisite … A forward edge, new page,
or reading-order change is an owner blocker"):

| page (order) | direction | consumed by |
| --- | --- | --- |
| `euclidean-surface-measure-divergence-and-green-identities` (458.0021) | backward — applicable | R/E definition, chart-density lemma, sphere decay, cap scales, corollary |
| `trigonometric-and-oscillatory-examples-in-one-variable` (288.00023) | backward — applicable | pairing lemma and cap wave packet (`cor-sine-and-cosine-are-one-lipschitz`) |
| `rank-theorems-and-embedded-submanifolds` (449) | backward — applicable | chart lemma, shape-operator lemma, cover lemma, corollary |
| `riemannian-metrics-length-distance-and-volume` (477) | **forward — owner blocker** | shape-operator lemma (`prop-pullback-…`) |
| `connections-levi-civita-and-parallel-transport` (479) | **forward — owner blocker** | shape-operator lemma (`ex-the-euclidean-levi-civita-connection`) |
| `geodesics-the-exponential-map-completeness-and-hopf-rinow` (481) | **forward — owner blocker** | cover lemma, decay lemma (`lem-choice-free-smooth-inverse-function-theorem-…`) |
| `riemann-curvature-and-riemannian-submanifolds` (483) | **forward — owner blocker** | shape-operator lemma, cover lemma, decay lemma, corollary |

Remedies for the owner (either is a reading-order/scope decision, so neither is
taken here): (a) move the FR-14 pair after #483 — then every link in §6a is
backward and legal and no forward declaration is needed; or (b) authorize a
restatement of the three lemmas with local graph-level definitions of the
Weingarten map/Gauss–Kronecker curvature, after which the corollary (a
consequence kind) can declare the general definitions as forward references. A
purely mechanical third option — declaring forward refs — is unavailable to
the three lemmas (`forward-on-spine`) and conflicts with the plan's own policy
("No proof-bearing Fourier item has a forward reference", plan lines 200–207).

## 7. Checks actually run (results on the final bytes)

All run from the repo root with the sibling app checkout supplied through
`PRESTIGE_APP_DIR` (resolved by `tools/paths.mjs`).

| check | command (batch scope) | result |
| --- | --- | --- |
| precheck | `tools/tsx-run.mjs tools/precheck.mts <26 item paths>` | **23 checked, 0 failing — all clean** |
| proof-layout (read-only, once, batched) | `node tools/proof-layout.mjs <26 item paths>` | **26 items, 124 steps, 0 defects** |
| rendercheck | `node tools/rendercheck.mjs <26 items + 2 pages>` | **OK — 28 files** |
| content-policy | `node tools/content-policy.mjs <batch-6 pages.json>` | **26 scoped items, 0 errors, 0 warnings** |
| proof-contract strict | `node tools/proof-contract.mjs …batch-6.proof-contracts.json --strict` | **0 errors, 0 warnings, 26/26 items** |
| manifest-deps | `node tools/manifest-deps.mjs <batch-6 pages.json>` | **26 items, 0 errors** |
| coverage-checklist | `… <batch-6 coverage.json> --require-destination` | **2 pages, 60 harvested results, 0 errors, 0 warnings** |
| item-dependency-levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | **816 items, 60 pages; maximum level 16** (labels exact) |
| validate-plan | `node tools/validate-plan.mjs research/plan-spec.json` | **OK — exit 0** (pre-splice; the scratch-spliced run is §6b) |
| source-fetch-check | `node tools/source-fetch-check.mjs --coverage <batch-6 coverage.json>` | **9/9 sources fetch-verified; 9/9 resolved** |
| depcheck | `node tools/depcheck.mjs` (repo-wide) | **0 findings name a batch-6 item** (repo-wide exit 1 is other, still-in-flight batches: 484 findings elsewhere) |
| extcheck | `node tools/extcheck.mjs` | **OK; 0 errors, 0 warnings name a batch-6 item** |
| fwdcheck | `node tools/fwdcheck.mjs --items-file <batch-6 ids>` | **16 `forward-undeclared` findings in the 4 items of §6a** (plus one unrelated repo-wide `stack-cycle`); reported and owner-held |
| author-check | `tools/tsx-run.mjs tools/author-check.mts frontier-38-owner-30 6` | **ok: true** — precheck, rendercheck, content-policy-items, proof-contract all true; receipt `research/frontier-38-owner-30-author-check-6.json` |
| step3 gate | `tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final` | 22 of 26 batch-6 items closed (`accept`); the 4 items of §6a are owner-held `escalate` receipts |

## 8. Registrations and shared-file maintenance

- Pages: `library/fourier-analysis/fourier-restriction-and-the-stein-tomas-theorem.md`
  (21 items) and `…-examples.md` (5 examples under `examples:`, `items: []`),
  both `status: draft`, with the companion pointer and a complete lead essay;
  no sibling page touched.
- Manifest: `research/frontier-38-owner-30-batch-6.pages.json` — each of the 26
  item rows now carries the authored `deps` (22 rows changed) and four
  `dependency_level` labels were corrected (§2). Statements, titles, kinds,
  provenance, sources, page order, `requires` and companion pointers are
  untouched, so the Step-3a scope hash is unchanged (the `sufficient` receipt
  remains current).
- Coverage: `…-batch-6.coverage.json` — five rows added for the three items the
  Step-3a review flagged as unanchored (`lem-fourier-pairing-…` and the cover
  lemma from Williams §11.2/§11.3; the cover lemma and the corollary from Datar
  §14.1–14.2; the corollary from Williams Theorem 11.1). 55 → 60 rows; the
  checklist still reports 0 errors, 0 warnings.
- Contracts: `…-batch-6.proof-contracts.json` — 26 item entries with per-step
  claims and inputs, verbatim supplier quotes and boundary worksheets; strict
  check 0/0.
- No `.autopilot/` state, plan-spec entry, published item or sibling batch file
  was edited; no owner decision was invented.

## 9. Published concerns and source observations

- No confirmed defect in any published supplier was found. The later-ordered
  suppliers of §6a are mathematically sound and are used only for the facts the
  items state; the issue is the pair's reading-order position, not the
  suppliers' content.
- Step-3a observation 2 (source wording): the orientation remark attributes the
  settled n=2 restriction problem to "Fefferman–Stein", matching its recorded
  Wolff §7 locator. Stovall's survey credits "Fefferman–Stein and Zygmund"; the
  two attributions are not contradictory and the remark is `proved_here: false`
  orientation-only. No change made; passed to Step-5 source review.
- Step-3a observation 4: `ex-circle-stein-tomas-exponents` remains
  `ai-generated` (permitted leaf example; not a dependency target).

## 10. Handoff: completed IDs, escalations and open obligations

Completed (decision `accept`, confidence 1, on the current bytes; receipts in
`research/frontier-38-owner-30-step3b-review-<id>.json`): the 22 items
`def-fourier-restriction-and-adjoint-extension-operators`,
`lem-fourier-pairing-for-a-finite-measure-and-schwartz-data`,
`lem-sphere-finite-graph-charts-and-surface-density`,
`lem-unit-sphere-is-lebesgue-null`,
`lem-van-der-corput-oscillatory-integral-estimate`,
`lem-restriction-and-extension-estimates-are-dual`,
`lem-spherical-cap-and-dual-slab-scales`,
`lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`,
`lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform`,
`lem-cap-wave-packet-has-dual-tube-concentration`,
`lem-stationary-phase-decay-for-spherical-surface-measure`,
`lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds`,
`thm-knapp-necessary-condition-for-spherical-ltwo-restriction`,
`lem-stein-tomas-tt-star-bound-from-fractional-integration`,
`rem-the-general-fourier-restriction-problem`,
`cex-knapp-rules-out-extension-below-the-tomas-exponent`,
`ex-knapp-cap-and-tube-volume-calculation`,
`thm-stein-tomas-spherical-restriction-theorem`,
`rem-restriction-estimates-and-the-missing-strichartz-interface`,
`cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay`,
`ex-circle-stein-tomas-exponents`, and
`cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise`.

Escalated (fully authored and format-clean; blocked on one owner reading-order
ruling; receipts `escalate`, confidence 1, each naming the exact suppliers and
consuming steps):

1. `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph`
   (six suppliers on #477/#479/#483).
2. `lem-compact-curved-hypersurface-finite-graph-cover`
   (four suppliers on #481/#483).
3. `lem-localized-curved-patch-measure-transform-decay`
   (four suppliers on #481/#483).
4. `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature`
   (two suppliers on #483).

Required owner remedy (either): move the pair after #483 so its necessary
suppliers precede it in reading order, or authorize the local restatement
sketched in §6b. Until then `fwdcheck` stays red on the 16 links of §6a and the
Step-3 item gate stays owner-held for these four items; no unresolved supplier
is hidden and no decision is claimed beyond the evidence above.

Open obligations carried forward: (i) the owner ruling above; (ii) Step-4
adjudication of the seven page edges of §6b (three backward edges are
applicable; four forward edges are the same owner decision); (iii) Steps 5–8
thorough independent audit of the authored proofs. No missing item, page,
contract or report is outstanding in this batch.

## Supervisor integration of local geometry — 2026-10-03

Four owner reading-order escalations are resolved by the stable same-reviewer repair in research/frontier-38-owner-30-batch-6-geometry-repair-evidence.json and checks files, including the bounded followup. Added two complete earlier Euclidean bridge items; exact curvature and compact-surface claims retained, all later DG prerequisites removed. Corrected unsupported nonclosed-surface ambient-support extension to intrinsic compact support and repaired smooth stationary-phase annuli/centered derivatives plus parameter-neighborhood uniformity. Parent read the complete bridge, stationary-phase and localization proofs. Current owner scope proceed and four owner item-repaired records are closed at current inputs. Original author escalation receipts remain historical. Whole-step stable dependency-ordered recertification and independent Steps5-8 remain required.
