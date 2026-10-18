# Step 3a reader report — batch 49

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Assignment: batch `49`

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/projection-and-pressure-correction-for-incompressible-flow.md` (A)
- `library/numerical-pdes-and-spatial-discretization/projection-and-pressure-correction-for-incompressible-flow-examples.md` (B)

Required page context:

- `library/numerical-linear-algebra-and-approximation/preconditioner-algorithms-and-residual-metrics.md` (published)
- `library/numerical-pdes-and-spatial-discretization/energy-stable-incompressible-navier-stokes-discretization.md` (draft)

Assigned A-page items, reviewed in dependency order:

- `def-na-periodic-staggered-grid-stokes-operators`
- `def-na-symmetric-saddle-point-system-and-block-preconditioners`
- `lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare`
- `lem-na-periodic-staggered-grid-smooth-sampling-consistency`
- `thm-na-saddle-point-exact-schur-solve`
- `thm-na-pressure-schur-spectral-equivalence-from-infsup`
- `alg-na-periodic-incremental-pressure-correction`
- `alg-na-bdf2-incremental-and-rotational-pressure-correction`
- `thm-na-symmetrically-preconditioned-saddle-point-spectrum`
- `thm-na-periodic-pressure-correction-solves-well-defined`
- `thm-na-periodic-discrete-helmholtz-projection`
- `thm-na-periodic-pressure-correction-modified-energy-identity`
- `thm-na-periodic-pressure-correction-first-order-velocity-error`
- `cor-na-mini-element-pressure-mass-schur-bounds`
- `cor-na-mini-element-pressure-mass-block-spectrum`

Assigned B-page items:

- `ex-na-wall-pressure-correction-tangential-velocity-defect`
- `cex-na-collocated-central-difference-checkerboard-pressure-mode`
- `ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum`
- `ex-na-periodic-single-mode-pressure-correction`

I opened the cited direct item dependencies used in the local arguments, including the published matrix, inner-product, finite-dimensional, Taylor, integral, Sobolev, mesh, trace, affine-scaling, Fourier and mollification suppliers. For the batch-31 MINI branch I reviewed the current dependency chain through the Stokes spaces, MINI spaces and dimensions, Korn and Poincare lemmas, Scott–Zhang interpolation, Fortin transfer, Bogovskii kernel and Fourier estimates, star-shaped cover and zero-mean decomposition, bounded-domain divergence right inverse, continuous inf-sup, and MINI Fortin theorem. The current batch-49 proof-contract, coverage, cross-batch dependency and notes files were read as evidence, not treated as verdicts.

The batch-31 draft items opened were `lem-na-homogeneous-dirichlet-poincare`, `lem-na-homogeneous-dirichlet-korn-identity`, `lem-na-zero-mean-of-zero-boundary-divergence`, `lem-na-lipschitz-domain-finite-star-shaped-cover`, `lem-na-finite-cover-zero-mean-data-decomposition`, `def-na-stokes-zero-mean-pressure-and-velocity-spaces`, `def-na-mini-element-p1-bubble-p1-spaces`, `def-na-fortin-operator`, `lem-na-mini-element-local-and-global-dimensions`, `lem-na-fortin-transfers-discrete-infsup`, `lem-na-scott-zhang-boundary-preserving-p1-interpolant`, `def-na-star-shaped-bogovskii-integral`, `lem-na-bogovskii-kernel-support-and-divergence`, `lem-na-bogovskii-truncated-derivative-fourier-formula`, `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound`, `thm-na-star-shaped-bogovskii-bounded-right-inverse`, `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, `thm-na-continuous-stokes-divergence-infsup`, and `thm-na-mini-element-fortin-stability`. The additional published piecewise-polynomial supplier `thm-matching-continuous-piecewise-polynomials-are-wkp` was also opened.

## Edit and evidence

Edited `lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare`. Step 1.1 had written the mass pairing `(q,D_hv)_{Q_h}` for arbitrary cell arrays, although `Q_h` contains only mean-zero arrays. I replaced that expression with the explicit weighted sum for arbitrary arrays and stated the paired inner-product identity only when `q` is in `Q_h`. Step 2.1 now applies the explicit sum identity, so its kernel argument remains valid for every cell array as required by the statement. The proof contract derivations for steps 1.1 and 2.1 were updated. No `verification.judge` record was present to remove.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare.md` — reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare.md` — 1 item, 6 steps, 0 defects.

## Uneditable finding

`thm-na-mini-element-fortin-stability` is a current draft supplier in batch 31, outside this assignment. Its Statement says the Fortin bound depends only on dimension and mesh shape regularity. Its Step 2.2 obtains the bound from `lem-na-scott-zhang-boundary-preserving-p1-interpolant`, whose Statement permits constants depending on the fixed domain as well. The Fortin proof does not establish that the domain dependence can be removed. A proof of a domain-independent interpolation bound, or a statement allowing dependence on the fixed domain, is needed to justify that stronger constant-dependence claim. The assigned consumer `cor-na-mini-element-pressure-mass-schur-bounds` only needs a finite Fortin bound uniform in mesh size for its fixed domain, so this does not invalidate the displayed fixed-domain Schur estimate.

I checked the Bogovskii formula and its Fourier estimate against Ricardo G. Durán, “An elementary proof of the continuity from L2_0(Omega) to H1_0(Omega)^n of Bogovskii’s right inverse of the divergence,” arXiv:1103.3718, §2, printed pp. 2–6: formula (1.3), Lemmas 2.1–2.4 and Theorem 2.1. The local kernel, truncated derivative formula and L2 estimates agree with that argument; no further issue was found in the dependency chain reviewed.

## Page verdicts

- A page `projection-and-pressure-correction-for-incompressible-flow`: no page-prose defect found. The summary matches the current periodic operator conventions, algorithm assumptions, locally proved accuracy claim, saddle-point hypotheses, and steady MINI qualification.
- B page `projection-and-pressure-correction-for-incompressible-flow-examples`: no page-prose defect found. The four summaries match their examples and do not import wall rates, solver-speed claims, or unproved pressure rates.

## Blocker and coverage note

No blocker. All 19 assigned item files, both assigned pages, and both required page summaries were read. I reviewed the invoked statements and the in-run draft proof chain needed for the assigned claims; I did not re-audit unrelated transitive proof closures behind every published foundational item.
