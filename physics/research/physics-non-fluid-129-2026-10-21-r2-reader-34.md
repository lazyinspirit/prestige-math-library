# Step 3a reader report — batch 34

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `34` only

## Opened inventory

The assigned manifest is `research/physics-non-fluid-129-2026-10-21-r2-batch-34.pages.json`. It assigns the following two pages and seven items. Both pages are draft, frontmatter-only pages in this run.

| Page ID | Path | Verdict |
|---|---|---|
| `gr-fx06-trapped-surfaces-and-incompleteness` (A) | `library/general-relativity/gr-fx06-trapped-surfaces-and-incompleteness.md` | Pass. The five item placements and listed page prerequisites match the assigned frontier; no page prose is present to review. |
| `gr-fx06-trapped-surfaces-and-incompleteness-examples` (B) | `library/general-relativity/gr-fx06-trapped-surfaces-and-incompleteness-examples.md` | Pass. Both examples and the A-page, flat-model, and spherical-model page prerequisites match the assigned frontier; no page prose is present to review. |

Assigned items were read in manifest dependency order:

| Level | Item ID | Review |
|---:|---|---|
| 0 | `def-gr-fx-future-null-geodesic-completeness` | Pass. The maximal future affine endpoint and positive affine reparameterization convention are defined explicitly; incompleteness is not identified with curvature blow-up. |
| 0 | `lem-gr-fx-cauchy-slices-are-diffeomorphic` | Pass. The product flow and Cauchy hypotheses support the bijective projection; the spacelike/timelike tangent-space argument gives a local diffeomorphism, and the inverse is smooth. |
| 2 | `def-gr-fx-trapped-surface-and-black-region` | Pass. The trapped-surface expansions, local null-normal choices, conformal completion, causal relation to the designated boundary, black region, event horizon, and outward-ray qualification are defined with their scope limits. |
| 4 | `lem-gr-fx-trapped-boundary-compactness` | Pass. The proof identifies the future horismos with the boundary of the open future, obtains a uniform negative expansion after observer normalization, bounds its normal generators by focal points, and covers it by a compact image. The local normality and compactness arguments are supported by the cited suppliers. |
| 5 | `thm-gr-fx-penrose-incompleteness` | Pass. Under the stated AC, global-hyperbolicity, connected noncompact Cauchy, trapped-surface, and null-Ricci hypotheses, the contradiction through a compact achronal boundary and an open-and-closed projection is complete. The conclusion is affine incompleteness only. |
| 6 | `ex-gr-fx06-1` | Pass. The two future null normals on the Minkowski round sphere have expansions `2/R` and `-2/R`; the example rules out trapping for this sphere only. |
| 6 | `ex-gr-fx06-2` | Pass. The global de Sitter calculations give compact Cauchy slices, null completeness, null Ricci equality, and the stated negative expansions for the equatorial sphere at `tau_0 < 0`. This supplies the promised counterexample to dropping the noncompact-Cauchy hypothesis. |

I opened the current batch-34 proof contracts and checked their citation/derivation entries against the authored proof steps. The proof-bearing contracts cover `lem-gr-fx-cauchy-slices-are-diffeomorphic`, `lem-gr-fx-trapped-boundary-compactness`, `thm-gr-fx-penrose-incompleteness`, `ex-gr-fx06-1`, and `ex-gr-fx06-2`; the two definitions do not have proof-step contracts.

## Dependency and source review

I read the current draft suppliers from batch 29 that are used in the assigned arguments: `lem-gr-fx-null-normal-plane-and-screen`, `def-gr-fx-null-screen-geometry`, `prop-gr-fx-null-raychaudhuri`, `lem-gr-fx-null-screen-index-form`, and `lem-gr-fx-null-focal-boundary-exclusion`. Their stated local normal-pair, screen, Raychaudhuri, index-form, and focal-exclusion claims support the uses made by the compactness lemma. No defect requiring a cross-batch finding was confirmed.

I also checked the exact statements used from the causal/geometry suppliers, including `def-gr-causal-curves-and-reachability`, `def-gr-causal-conditions-and-global-hyperbolicity`, `def-gr-future-and-past-sets`, `lem-gr-chronology-openness`, `lem-gr-globally-hyperbolic-causal-structure`, `lem-gr-time-separation-maximizers`, `lem-gr-parallel-transport-and-geodesic-speed`, `lem-gr-achronal-boundaries-lipschitz-graphs`, `lem-gr-push-up-rule`, `lem-gr-causal-curve-calculus`, `thm-gr-cauchy-surface-implies-globally-hyperbolic`, `lem-gr-temporal-functions-and-time-functions`, `lem-gr-finite-smooth-volume-density`, `thm-gr-volume-time-function`, and `thm-gr-smooth-cauchy-temporal-splitting`. For the model examples and local constructions I checked `def-gr-smooth-lorentzian-objects`, `def-gr-spacelike-hypersurfaces-and-cauchy-sets`, `def-geodesic-of-an-affine-connection`, `def-gr-metric-selected-connection`, `def-gr-minkowski-model-and-inertial-chart`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-gr-warped-spherical-christoffel-and-ricci`, `thm-gr-local-geodesics-and-exponential-map`, `lem-gr-joint-exponential-diffeomorphism`, `thm-gr-convex-normal-neighborhoods`, `thm-gr-normal-neighborhood-causal-cone`, `lem-gr-position-vector-differential`, and `thm-smooth-dependence-of-ode-solutions-on-parameters`. The relevant compactness, manifold-boundary, inverse-function, causal, choice, and elementary analysis statements were checked at their cited uses.

The authoritative passages I retrieved were:

- Senovilla and Garfinkle, [“The 1965 Penrose singularity theorem,” arXiv:1410.5226v2](https://arxiv.org/pdf/1410.5226), §4, Theorem 2 (PDF lines 495–509), and §4.2 (PDF lines 595–627). The theorem passage states the noncompact-Cauchy, closed trapped-surface, null-convergence, and future-incomplete-null-geodesic relationship; the trapped-surface passage records compactness and both negative null-expansion signs.
- Witten, [“Light Rays, Singularities, and All That,” arXiv:1901.03928v6](https://arxiv.org/pdf/1901.03928v6), §5.6 (PDF lines 2528–2579) and its de Sitter exercise (lines 2582–2591). The text describes Penrose incompleteness and the compact-horismos/focusing proof route, and identifies de Sitter as the compact-Cauchy, null-complete comparison case. The authored local arguments supply the details omitted by this expository source.
- Jaramillo, Valiente Kroon, and Gourgoulhon, [“From Geometry to Numerics,” arXiv:0712.2332v2](https://arxiv.org/pdf/0712.2332), §2.2 (PDF lines 484–490) and §6.2.2 (PDF lines 1748–1802). These passages support the conditional definition of the black region relative to future null infinity and the trapped/MOTS expansion conventions. The batch item supplies the precise completion data it adopts.

The only TikZ diagram in the assigned items is in `ex-gr-fx06-2`. Its text and drawing agree: the rectangle has `chi` horizontal and conformal time `eta` vertical on equal scales, radial null directions have slopes `±1`, the vertical sides are regular poles, and the top/bottom are spacelike conformal boundaries outside the physical manifold. The compact Cauchy slice, trapped-surface line, and two future null directions are placed consistently. No diagram repair or addition was needed.

The batch contains no experiment or empirical premise. Its conclusions are mathematical statements about explicitly supplied Lorentzian models; none is presented as an observation or evidence that nature satisfies the model.

## Edits and remaining defects

No edits were made. I found no confirmed defect in the assigned items or pages and no uneditable supplier defect requiring routing. Therefore there is no item diff, contract update, or validation run to report.

## Blocker and coverage note

No blocker. Coverage is limited to the assigned batch, the supplier statements and proof portions used by its claims, and the cited source sections recorded above; I did not re-audit every transitive prerequisite proof of the published mathematics suppliers or unrelated content on their pages.
