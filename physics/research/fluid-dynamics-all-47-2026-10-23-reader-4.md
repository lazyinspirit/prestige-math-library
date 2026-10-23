# Reader report — batch 4

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-4`)  
Scope: batch `4`

## Opened inventory

Assigned pages:

- `fd-c02` — `library/fluid-dynamics/fd-c02.md`
- `fd-c02-examples` — `library/fluid-dynamics/fd-c02-examples.md`

Assigned items, read in dependency order:

- `rem-fd-turbulence-and-closure-scope` — `items/rem-fd-turbulence-and-closure-scope.md`; depends on `thm-fdmath-finite-reynolds-identity`.
- `ex-fd-reynolds-stress-sign-and-units` — `items/ex-fd-reynolds-stress-sign-and-units.md`; depends on `thm-fdmath-finite-reynolds-identity` and `def-fd-quantity-and-frame-conventions`.

Claim-relevant dependencies opened:

- `def-fdmath-finite-ensemble-and-covariance` (supplier of the finite Reynolds theorem).
- `def-fd-quantity-and-frame-conventions` and its supplier `def-fd-smooth-motion`.
- Published `thm-euclidean-inverse-function-theorem`, which is a transitive prerequisite of the smooth-motion definition. Its statement and proof were inspected. The example itself uses explicit translation inverses and does not rely on the inverse-function theorem.
- Page prerequisites `fd-c01` (`library/fluid-dynamics-mathematics/fd-c01.md`) and `fd-f01` (`library/fluid-dynamics/fd-f01.md`). The relevant theorem and frame/quantity items in their inventories were checked above.

The batch proof contract, page manifest, batch notes, coverage record, and cross-batch dependency record were also inspected as context, not treated as verdicts.

## Mathematical and source review

The finite Reynolds theorem states the pointwise identity for finite fixed weights and smooth divergence-free fields satisfying the common-viscosity equations. The example's constant velocity fields satisfy those hypotheses: both translations have explicit inverses, Jacobian one, and the member equations reduce to zero on both sides. The computation gives `bar u = 0` and `R = c^2 e ⊗ e`; its quadratic form is `c^2 (z·e)^2`. With the stated plus-divergence convention, multiplying the per-unit-mass equation by a spatially constant density gives the correction `sigma_R = -rho_0 R`. This does not identify the correction with a measured total Cauchy stress.

The remark distinguishes the finite weighted algebraic mean from a finite-window time average and a probability-space expectation. The time integral exists componentwise because the field is continuous on the compact interval. It asserts no equality of these operations, long-time limit, measured turbulence, or closure law.

Source checks:

- Flierl and Ferrari, MIT OpenCourseWare 12.820, Chapter 3, §§3.2–3.8, [official MIT OpenCourseWare chapter PDF](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf). The relevant sections distinguish ensemble, time, and spatial averaging (§3.3), explain the nonlinear closure problem (§3.6), present the Reynolds equations (§3.7), and give a closure model (§3.8). The local finite identity remains conditional algebra and imports none of those statistical assumptions.
- Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B), pp. 17–19, [PDF](https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf). The section distinguishes long-time, finite-window, and ensemble averaging, states stationarity qualifications for long-time averaging, and writes the Reynolds-averaged equation with the covariance term.
- Tennekes and Lumley, *A First Course in Turbulence* (1972), Preface pp. xi–xii and Chapter 2, §2.1, printed pp. 27–33, [accessible full-text rendering](https://djvu.online/file/rx5CLAMFpVjaT). The preface and §2.1 discuss closure; §2.1 uses a long-time mean and identifies the covariance contribution to the mean stress. The item does not import its averaging assumptions.

The full 11-page MIT Chapter 3 PDF and the 5-page Eyink section were inspected. For Tennekes and Lumley, the Preface and relevant Chapter 2 §2.1 material were inspected; the whole book was not read. No empirical report or measurement is claimed by these items.

## Repairs

- `rem-fd-turbulence-and-closure-scope`: added a consistent formal SI interpretation for the per-unit-mass equation (`u`, `p`, `f`, and `nu`), dimensionless fixed weights, and units for `R`. Updated the non-proof contract's finite-check disposition to record the unit interpretation. This repairs the omission of physical types and units while preserving the exact mathematical claim and its explicit non-empirical scope.
- `ex-fd-reynolds-stress-sign-and-units`: made the time and coordinate units, map domains, vector normalization, per-unit-mass meanings and units of `p_j`, `f_j`, and `nu`, and dimensionless weights explicit. Expanded Fact F2 with the supplier's metre-coordinate convention and stated the dimensional consistency of the translations in step 1.1. Updated the batch-4 proof contract's F2 citation, step derivation, and affected boundary excerpts. Neither changed item had a `verification.judge` record to remove.
- The current direct and indirect item-use search found no consumers of either changed item beyond their assigned page placements and the companion page relation.

Validation after the edits:

- Reflow: both items unchanged by reflow.
- Precheck: remark, 0 checked and 0 failing; example passed direct precheck, 1 checked and 0 failing.
- Proof layout: 2 items, 4 steps, 0 defects.
- Strict proof-contract check: 2/2 items checked, 0 errors, 0 warnings.

No diagrams occur in the assigned items or pages; none is needed for these direct algebraic computations.

## Uneditable finding

`def-fd-quantity-and-frame-conventions` is a current-run dependency outside batch 4. When first read, its undated `## Authoring status` text said that the current readiness record for `def-fd-smooth-motion` was missing. The current run record `research/fluid-dynamics-all-47-2026-10-23-step1-def-fd-smooth-motion.json` says `decision: ready` (2026-10-22T19:46:20.450Z). The source hash observed at that time, `8e614dda8eaff14cf4dec53783d8548c9acccc47244f0f71eadb32a2e3a1dd6c`, matches the immutable batch-3 `pre` snapshot entry in `research/fluid-dynamics-all-47-2026-10-23-step3-hash-3-pre.json`. The current carrier has since changed to SHA-256 `b1d3cdef7ef0e5c009281076ea499045f6a7e7da39bbbfd8750b47c1ccb17335` and no longer contains the missing-readiness sentence. The finding therefore applies only to the exact observed pre-reader bytes, not the corrected current carrier. The assigned consumer whose dependency closure reaches this carrier is `ex-fd-reynolds-stress-sign-and-units`. This is reported for owner routing and was not edited by this reader.

## Page verdicts and blocker

- `fd-c02`: pass. The draft physics A page has the assigned remark, requires the inspected `fd-c01` and `fd-f01` pages, preserves `page_layout: compact-v1`, and has no Markdown summary body.
- `fd-c02-examples`: pass. The draft physics B page has the assigned example, requires `fd-c02`, preserves `page_layout: compact-v1`, and has no Markdown summary body.

No blocker remains for the assigned batch review. The nonfatal cross-batch status finding remains for owner disposition.
