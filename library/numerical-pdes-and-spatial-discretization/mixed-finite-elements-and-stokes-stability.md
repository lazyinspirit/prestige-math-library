---
page: mixed-finite-elements-and-stokes-stability
title: "Mixed finite elements and Stokes stability"
status: draft
items:
  - lem-na-zero-mean-of-zero-boundary-divergence
  - lem-na-homogeneous-dirichlet-poincare
  - lem-na-homogeneous-dirichlet-korn-identity
  - lem-na-lipschitz-domain-finite-star-shaped-cover
  - def-na-star-shaped-bogovskii-integral
  - thm-na-infsup-bounded-right-inverse-hilbert
  - lem-na-scott-zhang-boundary-preserving-p1-interpolant
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - lem-na-finite-cover-zero-mean-data-decomposition
  - lem-na-bogovskii-kernel-support-and-divergence
  - thm-na-babuska-brezzi-kernel-coercivity
  - lem-na-bogovskii-truncated-derivative-fourier-formula
  - def-na-fortin-operator
  - thm-na-mixed-galerkin-quasioptimality
  - def-na-mini-element-p1-bubble-p1-spaces
  - lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound
  - lem-na-fortin-transfers-discrete-infsup
  - lem-na-mini-element-local-and-global-dimensions
  - def-na-discrete-weak-and-exact-divergence-free-spaces
  - thm-na-star-shaped-bogovskii-bounded-right-inverse
  - thm-na-bounded-lipschitz-domain-divergence-right-inverse
  - thm-na-continuous-stokes-divergence-infsup
  - thm-na-mini-element-fortin-stability
  - thm-na-weak-stokes-solvability-lipschitz-domain
  - thm-na-mini-element-h1-pressure-error
  - thm-na-discrete-helmholtz-projection-and-pressure-schur
examples: []
---

# Mixed finite elements and Stokes stability

This draft develops the real Stokes mixed formulation, a bounded divergence right inverse on bounded connected Lipschitz domains, the Babuška–Brezzi kernel-coercivity theorem, Fortin transfer, and the continuous P1+bubble/P1 mini element in dimensions two and three. Every theorem claim has a local proof carrier in the item list below. The source treatments motivate the proof routes; they do not replace the local arguments or imply independent review.

## Scope and geometry

The continuous domain is a nonempty bounded connected Lipschitz open set $D\subset\mathbb R^d$, $d\in\{2,3\}$, and the pressure gauge is $Q=L^2_0(D)$. The velocity space is $V=H^1_0(D;\mathbb R^d)$ with gradient norm. We prove the finite star-shaped cover and tree-based zero-mean decomposition locally before applying the Bogovskii integral estimate to each patch. The chosen cover, overlap bumps, and their finite constants determine $C_{\rm div}(D)$; no uniform domain constant is claimed.

For the exact mini-element result, $D$ is additionally polygonal/polyhedral and exactly tiled by a conforming shape-regular affine simplicial mesh. The velocity uses continuous P1 functions with zero trace plus one scalar interior bubble per cell and vector component. Pressure is continuous P1 with zero mean. No curved mesh is asserted to tile a curved domain.

## Controlling plan and conflict record

The binding current plan is the NA-34 section of `research/plan-numerical-spatial-track.md`, read together with the explicit owner direction and its referenced mixed-foundation completion. The canonical page metadata in `research/plan-spec.json` and the batch task control page IDs, order, and `requires`.

- The older numerical-analysis design permits “mini or Taylor–Hood.” The current plan-spec description and repaired spatial design require the exact P1+bubble/P1 mini pair in dimensions two and three, so this batch proves MINI. Taylor–Hood appears only as the requested local B-page polynomial mode calculation.
- The current plan points to the mixed-foundation completion for the continuous divergence-lift contract on every bounded connected Lipschitz domain. This controls over an earlier star-shaped-only proposal. The finite star-shaped cover and zero-mean tree decomposition are local proved items, not assumptions imported from Durán.
- The older spatial prerequisite prose lists separate trace/Poincare pages. The canonical task and plan-spec require `finite-element-meshes-and-interpolation` and `lax-milgram-and-weak-elliptic-solutions`; this manifest preserves those exact page edges. The simplex face trace and reference Poincare facts come from the actual FE page; the bounded-domain H0 Poincare and Korn results are proved locally.

## Mathematical and axiom interfaces

The H0 definition is the Sobolev closure, not a trace definition. The local Poincare proof uses a slab, zero extension, Fubini, and closure. Korn is proved from the strain identity by integration by parts on compactly supported smooth fields and H1 closure. The Bogovskii proof uses the real Fourier convention $\widehat f(\xi)=\int e^{-2\pi ix\cdot\xi}f(x)\,dx$ and Countable Choice for L2 density and Hilbert/Lax–Milgram completions. The Stokes existence branch uses Countable Choice through the published H1 Hilbert, L2 Hilbert, Riesz, and Lax–Milgram suppliers. The local Poincare and Korn arguments use Countable Choice only through the H0 closure supplier; the finite cover and overlap-tree constructions require no choice. No full Axiom of Choice is used. No proof uses the AC-dependent general Sobolev Banach-space theorem or the nodal point-evaluation interpolation branch.

The face-average interpolant is defined by facet dual moments and never evaluates an arbitrary H1 function at a vertex. Its boundary patches preserve zero trace; its H1-to-L2 and H2-to-H1 rates are proved from cell trace, patch Poincare, Bramble–Hilbert, finite patch overlap, and affine scaling. The mini Fortin map adds cell bubbles to restore each vector cell mean, which makes the pairing exact for continuous P1 pressure. The discrete weak divergence kernel is kept distinct from the pointwise divergence-free kernel.

## Reading and source disposition

The two independent full treatments are Guermond's MATH 661 course notes and Boffi–Brezzi–Fortin's textbook. Durán's complete 17-page paper was also read for the star-shaped Bogovskii formula, truncated derivative/Fourier representation, elementary ray bound, and L2 derivative estimate. Its proof does not supply the finite Lipschitz cover, tree decomposition, or our local support/divergence verification; those are proved here. Exact locators, source fetch stamps, and each harvested-result disposition are in `research/numerical-analysis-remaining-71-2026-10-17-batch-31.coverage.json`.

The course-note chapters on other pairs, macroelements, Taylor–Hood stability, preconditioning, and unrelated mixed families are recorded with item-specific out-of-scope reasons. They do not enter the MINI proof. The existing periodic Navier–Stokes open-problem item remains contextual only and is not a logical supplier.

## Items and dependency levels

In-run levels are computed from the batch manifest and direct same-batch item dependencies; external published suppliers do not increase an item level. Suppliers are authored before consumers in the resulting order.

### Level 0

[[lem-na-zero-mean-of-zero-boundary-divergence]], [[lem-na-homogeneous-dirichlet-poincare]], [[lem-na-homogeneous-dirichlet-korn-identity]], [[lem-na-lipschitz-domain-finite-star-shaped-cover]], [[def-na-star-shaped-bogovskii-integral]], [[thm-na-infsup-bounded-right-inverse-hilbert]], [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]]

### Level 1

[[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-finite-cover-zero-mean-data-decomposition]], [[lem-na-bogovskii-kernel-support-and-divergence]], [[thm-na-babuska-brezzi-kernel-coercivity]]

### Level 2

[[lem-na-bogovskii-truncated-derivative-fourier-formula]], [[def-na-fortin-operator]], [[thm-na-mixed-galerkin-quasioptimality]], [[def-na-mini-element-p1-bubble-p1-spaces]]

### Level 3

[[lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound]], [[lem-na-fortin-transfers-discrete-infsup]], [[lem-na-mini-element-local-and-global-dimensions]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]]

### Level 4

[[thm-na-star-shaped-bogovskii-bounded-right-inverse]]

### Level 5

[[thm-na-bounded-lipschitz-domain-divergence-right-inverse]]

### Level 6

[[thm-na-continuous-stokes-divergence-infsup]]

### Level 7

[[thm-na-mini-element-fortin-stability]], [[thm-na-weak-stokes-solvability-lipschitz-domain]]

### Level 8

[[thm-na-mini-element-h1-pressure-error]], [[thm-na-discrete-helmholtz-projection-and-pressure-schur]]

## Existing page prerequisites checked

The published FE supplier page `finite-element-meshes-and-interpolation` defines matching affine simplicial meshes, shape regularity, continuous/broken polynomial spaces, simplex trace/Gauss–Green, reference Poincare–Wirtinger, Bramble–Hilbert, and affine scaling. Its point-evaluation interpolation branch is not used. The published Lax–Milgram supplier proves the real coercive-form result under Countable Choice; the exact CC hypothesis is retained in the Hilbert Stokes branch. The actual item bodies were read before citation.

## Draft status

These are new draft items and pages for Step 1. They have not been independently audited or accepted. The coverage and proof-contract records document authoring evidence and mechanical consistency only.
