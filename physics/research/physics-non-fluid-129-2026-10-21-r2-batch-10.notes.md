# Batch 10 authoring notes — Angular-spectrum optics and controlled paraxial limits

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `10`  
Page pair: `emx-paraxial-optics` / `emx-paraxial-optics-examples`

## Plan, scope and inventory

- Read the complete assigned design entry in
  `research/plan-classical-electromagnetism-frontier-expansion-track.md`, the
  matching `plan-spec.json` entry, the full angular-spectrum prose-scaffold
  section, the assigned task, the batch dependency-level JSON, and batch 9's
  manifest and evidence.
- The planned A/B IDs, title, category `classical-electromagnetism`, library
  `physics`, order 717/718 and page prerequisites agree. The declared A-page
  prerequisites remain `em-scattering-and-scalar-diffraction`,
  `emx-classical-helicity-angular-momentum`, and
  `schwartz-space-and-the-plancherel-theorem`. The plan's preauthoring item
  inventory was empty; the design names three A items and two B items.
- The run-local owner direction file
  `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`
  was absent. No override was applied. The shared plan and imported/root math
  were left unchanged by this batch.
- The required uniform phase-multiplier estimate had no local carrier among
  the declared items. Following the instruction to create missing local
  intermediate results on A before use, this batch adds
  `lem-emx-paraxial-phase-multiplier-bound`; it is marked
  `inventory_expansion_required: true` in the batch manifest. The A page now
  has four items and B has two, both below the 100-item cap. This is the sole
  inventory conflict with the design's stated 3/2 counts; the lemma is a
  dependency of the planned paraxial-error theorem and does not broaden its
  physical scope.

## Dependency levels and interfaces

The dependency JSON assigns batch 10 level 1, requiring batch 9 at level 0.
Levels recomputed from the actual item graph are:

| Item | Level | In-run supplier(s) |
|---|---:|---|
| `lem-emx-paraxial-phase-multiplier-bound` | 0 | none |
| `def-emx-angular-spectrum` | 1 | `lem-emx-paraxial-phase-multiplier-bound` (batch 10), `def-emx-transverse-fourier-field` (batch 9) |
| `pthm-emx-paraxial-error` | 2 | `lem-emx-paraxial-phase-multiplier-bound`, `def-emx-angular-spectrum` |
| `pthm-emx-scalar-vortex-eigenvalue` | 2 | `def-emx-angular-spectrum` |
| `cex-emx-paraxial-distance-failure` | 3 | `def-emx-angular-spectrum`, both A theorems, the phase lemma |
| `ex-emx-longitudinal-focused-field` | 3 | `def-emx-angular-spectrum`, `pthm-emx-paraxial-error` |

All planned prerequisite inputs are present. The batch-9 definition
`def-emx-transverse-fourier-field` has a current Step-1 `ready` record with
hash `e9cdd0519ce0e09de40bc9d7dd571fb86dbf845f88087fb16cadb3565225fab9`; its
complete statement and Verification were inspected. It uses smooth compactly
supported three-dimensional wavevector amplitudes away from zero and a
bilinear transverse constraint. The assigned definition instead specifies
two-dimensional fixed-frequency L2 plane data. It cites the earlier item only
for its distinct Fourier/Maxwell vocabulary and states explicitly that the two
classes are not identified.

The declared compact-aperture postulate adopts a scalar outgoing Helmholtz
model but does not imply that every aperture output is L2 on a plane or
band-limited. The new definition therefore makes the band-limited L2 input an
explicit conditional model domain, not a derived property of a finite
aperture. The adopted vacuum Maxwell postulate is separately identified as a
physical assumption. The paraxial scalar multipliers are never described as
exact Maxwell fields.

The vector estimate does not use the earlier complex-phasor item that warns
against assuming phasors solve Maxwell. It uses the exact real-field
plane-wave encoding and derives `K·e=0` from the adopted real divergence
equation by evaluating the sinusoid at two time phases. The scalar L2 error is
proved independently by the local square-root remainder and Plancherel.

## Design-interface corrections

1. The prose route for the square-root remainder invokes Taylor's theorem.
   The local phase lemma instead proves the exact rationalized remainder and
   the required denominator bound, then proves the multiplier Lipschitz bound
   from the sine derivative and the mean value theorem. This keeps the
   mathematical prerequisite list within already inspected local interfaces.
2. The scalar-vortex design's `O(r^{|ell|})` axis condition alone does not
   imply smooth Cartesian extension (for example, `ell=0` and `f(r)=r`). The
   item states a smooth extension explicitly as
   `f(r)=r^{|ell|}g(r^2)` with smooth complex `g`. The design mentions radial
   boundary terms, but the proof is a pointwise eigenfunction identity plus an
   L2 pairing; it performs no radial integration by parts and needs no radial
   boundary hypothesis.
3. The long-distance counterexample proves its own positive-measure spectral
   rectangles and uniform phase limit. It does not infer that all small-cone
   inputs fail to converge; it refutes the stated universal convergence claim
   with one explicit admissible sequence.
4. The longitudinal-field example now constructs a real oblique plane wave,
   gives its magnetic amplitude in the declared real-part plane-wave
   convention, and checks all four smooth source-free Maxwell equations
   pointwise. This resolves existence rather than relying only on the
   necessary transversality relation.
5. The real square roots in the lemma and definition are applied to the
   canonical reals, so the items cite `thm-reals-cauchy-complete` before
   `thm-of-square-roots`. The definition also declares
   `lem-of-square-monotone` for the positive axial wave-number bounds and the
   real-part modulus estimate. Multiplier measurability and L2 real-field
   reconstruction are proved in its Verification.

## Source reading and retrieval

Three independent full treatments were read for the A page, including a
textbook and full lecture notes:

| Source | Locator read | Main support |
|---|---|---|
| Konijnenberg, Adam and Urbach, *Optics (BSc Optics)* | Complete §6.3, “Angular Spectrum Method” | Fourier plane-wave decomposition, forward positive square-root branch, propagating/evanescent distinction, and vector-transversality qualification; supports the definition, paraxial estimate and longitudinal example. Fetch stamp: HTML, 132323 bytes, SHA-256 prefix `f9b9c302fc38120b`, 17703 extracted text characters, 2026-10-21 11:59:05 UTC. |
| Beisert, *Elektrodynamik*, ETH Zürich 2024 FS script | Full 176-page PDF; §11.1 “Fourier-Raum”, equations (11.5)–(11.10), PDF pp. 121–122 | Source-free Fourier modes, dispersion, transverse mode amplitudes and Fourier superposition; supports the fixed-frequency Maxwell comparison and the distinction from the earlier 3D packet class. Fetch stamp: PDF, 1354282 bytes, SHA-256 prefix `a85f21ce710b509d`, 176 pages, 2026-10-21 11:59:09 UTC. |
| Cerjan and Cerjan, JOSA A 28 (2011) | Complete paper; §2 equation (8), §4 equations (22), (29), (37), and §5, PDF pp. 2253–2258 | Exact angular-spectrum phase, longitudinal vector components, and limits on carrying paraxial scalar angular-momentum identifications into the full vector model. Fetch stamp: PDF, 175288 bytes, SHA-256 prefix `16ed0a792a9e8611`, 8 pages, 2026-10-21 11:59:10 UTC. |

The exact URLs, per-source read extents, supported items, limitations, and
dispositions for every harvested result are in
`research/physics-non-fluid-129-2026-10-21-r2-batch-10.coverage.json`.
Searches recorded there include:

- `site:phys.libretexts.org/Bookshelves/Optics BSc Optics Angular Spectrum Method Konijnenberg Adam Urbach`
- `angular spectrum method section 6.3 BSc Optics Konijnenberg Adam Urbach LibreTexts`
- `Niklas Beisert Elektrodynamik ETH 2024 FS Skript Fourier Raum equations 11.5 11.10 PDF`
- `Cerjan Cerjan Orbital angular momentum Laguerre Gaussian beams beyond paraxial approximation 2011 PDF`
- `University of Bern Principles of Nano-Optics chapter 3 angular spectrum PDF`

The Bern-hosted `Principles of Nano-Optics` candidate returned only an
eight-page contents/front-matter document, not the relevant chapter. It was
not selected as a cited source; the three full independent sources above cover
the planned claims. This rejected candidate is preserved in retrieval history,
not marked as a dropped selected source. The three selected-source fetch stamps
are recorded above and in the coverage file; no selected source required a
recovery retry.

## Item argument and dependency record

- `lem-emx-paraxial-phase-multiplier-bound` (level 0, mathematics): rationalize
  `1-s/2-sqrt(1-s)`; lower-bound its positive denominator using
  `t=sqrt(1-delta^2)`; control `|e^{ia}-e^{ib}|` with the mean value theorem
  applied to sine, with continuity justified from differentiability at each
  real limit point. Direct mathematical dependencies include real completeness,
  square-root existence/order, complex exponential, trigonometric
  derivative/continuity, and mean-value statements; no physical premise is used.
- `def-emx-angular-spectrum` (level 1): define the cycles-per-metre Fourier
  convention and `q=2 pi xi`, a strict forward disk, positive `k_z`, exact and
  paraxial L2 multipliers, real scalar reconstruction, and the separate exact
  vector-mode vocabulary. Verification establishes positive dispersion by the
  complete-real square-root and order interfaces, proves multiplier
  measurability through the local phase lemma, checks unit modulus and L2 real
  reconstruction, and records the aperture/3D-packet scope distinctions.
  Direct dependencies and roles are in the item and manifest.
- `pthm-emx-paraxial-error` (level 2): set `s=|q|^2/k_0^2`; apply the local
  multiplier estimate pointwise and Plancherel for the uniform L2 bound. For a
  vector mode, differentiate the real electric field, use source-free
  `div E=0` at phases 0 and `-pi/2` to derive the full complex relation, then
  apply the complex two-coordinate Cauchy–Schwarz identity and `k_z>0`.
  The final step checks dimensionless prefactors.
- `pthm-emx-scalar-vortex-eigenvalue` (level 2): identify the rotation vector
  field with `partial_phi`; differentiate the integer winding factor; use the
  smooth axis form to identify its Cartesian extension; then integrate the
  pointwise eigenvalue identity in the stated first-variable-linear L2
  pairing. No integration by parts or physical torque identification occurs.
- `cex-emx-paraxial-distance-failure` (level 3): make a nondegenerate box
  `Xi_n` near the cone rim, normalize its constant Fourier amplitude, and
  choose `z_n k_0 delta_n^4=8 pi`. The exact remainder formula gives a uniform
  phase difference tending to `pi`; the multiplier modulus tends to 2 and
  Plancherel gives relative error tending to 2.
- `ex-emx-longitudinal-focused-field` (level 3): explicitly set
  `K=(kappa,0,k_z)`, `e=(E_0,0,-kappa E_0/k_z)` and
  `b=(0,k_0^2 E_0/(omega k_z),0)`. The complex plane-wave convention and
  chain rule give the derivatives; componentwise dot/cross identities check
  both divergence and both curl equations. The A-page theorem then gives the
  stated cone bound and nonzero longitudinal amplitude.

No unresolved mathematical gap, missing supplier, dependency cycle or
cross-batch placement conflict was found. Out-of-run mathematical inputs were
read at their exact current statements/proofs; draft status or pending
independent review alone was not treated as a prerequisite gap.

## Cross-batch edges

The accompanying JSON has the two direct in-run edges: the A page to the
batch-9 page and `def-emx-angular-spectrum` to the batch-9
`def-emx-transverse-fourier-field`. Both are scoped `verified` interface
checks. Other required pages are existing out-of-run context, not batch-9
edges. The evidence file does not make independent proof-approval claims.

## Scoped checks and readiness

All checks were run after the final item and manifest edits:

- Scoped `dependencyLevels` over run batches 9 and 10: 12 items checked, zero
  errors; batch-10 levels are 0, 1, 2, 2, 3, and 3 as tabulated above.
- `node tools/physics-support/proof-layout.mjs` on the six changed items: 6
  items, 25 numbered steps, zero defects.
- `node tools/physics-support/proof-contract.mjs … --strict --items <six ids>`:
  6/6 items checked, zero errors and warnings. Every proof step is mapped;
  citations have exact current supplier excerpts; boundary worksheets,
  supplier interfaces and applicable finite checks are included.
- `node tools/physics-support/coverage-checklist.mjs … --require-destination`:
  one A page, 13 harvested results, zero errors and warnings.
- `node tools/physics-support/source-fetch-check.mjs --coverage …`:
  3/3 selected sources fetch-verified; no source drops or recovery retries.
- `node tools/physics-support/content-policy.mjs` on the batch manifest: six
  scoped items, zero errors and warnings.
- `node tools/physics-support/rendercheck.mjs` on the six items and two pages:
  all eight files pass KaTeX, delimiter, wikilink and YAML checks.
- `node tools/physics-support/depcheck.mjs --items-file /tmp/physics-batch10-items.json --pending-audit-ok`:
  selected item checks and prerequisite cycle checks pass; page context covers
  1774 items and 357 pages. The maximum observed page dependency depth is 56.
- The cross-batch edge audit regenerated the declared in-run set from current
  manifests and item dependencies and matched exactly the two verified rows in
  the batch-10 cross-batch JSON.
- `loadStep1Record` and `step1Decision` from the current Step-1 tools report all
  six batch-10 records `ready` and current. They were recorded in dependency
  order with the exact direct dependencies and completed proof/placement/
  contract evidence; no `--owner` override was used.

No unresolved prerequisite, proof gap, dependency cycle, placement issue,
page-capacity issue, or scoped-check blocker remains. These are Step-1
authoring-readiness records; independent acceptance remains a later review
gate.
