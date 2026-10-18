---
page: isogeometric-galerkin-methods
title: "Isogeometric Galerkin discretization"
status: draft
items:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-compactly-supported-h1-belongs-to-h-zero
  - lem-tensor-q1-interpolation-h1-estimate
  - lem-isogeometric-pullback-energy-norm-equivalence
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - lem-positive-nurbs-basis-and-quotient-derivative
  - lem-nurbs-laplace-tensor-gap-under-map-error
  - thm-nurbs-quotient-best-approximation-transfer
  - lem-nurbs-knot-cell-simplicial-geometry-adapter
  - lem-boundary-preserving-tensor-schoenberg-h1-approximation
  - thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry
  - lem-nurbs-homogeneous-data-perturbation-geometry-bounds
  - def-isogeometric-galerkin-patch-space-and-refinement
  - thm-isogeometric-elasticity-galerkin-quasioptimality
  - thm-isogeometric-perturbed-geometry-quadrature-strang-bound
  - thm-isogeometric-poisson-galerkin-quasioptimality
  - thm-nurbs-tensor-product-l2-approximation
  - thm-nurbs-p1-tensor-spline-h1-error-rate
  - thm-boundary-preserving-nurbs-projector-and-h1-rate
---

This page defines tensor-product NURBS geometry with positive bounded weights, globally injective and bi-Lipschitz patch maps, positive cell Jacobians, and finite conforming single- and multipatch Galerkin spaces with h/p/k conventions. It proves the rational basis identities, mapped H1 and energy norm bounds, homogeneous h-knot preservation, trace conformity, exact-form Céa estimates, and a perturbed-geometry/quadrature Strang estimate. Exact NURBS representation, approximate geometry, and quadrature are separate data.

For the geometry interface, a common union of knot partitions is subdivided by ordering the normalized coordinates in each rectangle. The resulting matching simplices let the NURBS restrictions meet the PE17 curved-cell and geometry-error definitions without reclassifying the rational analysis functions as affine P1 functions. A separate homogeneous-data result derives explicit value and derivative geometry errors from same-basis coefficient perturbations. Its global injectivity bound uses the original global lower Lipschitz constant, separately from the local inverse-derivative bound; admissibility also retains the stated boundary certificate or the C1 knot-multiplicity branch. The dyadic rounding procedure states an explicit precision threshold and preserves separate geometry, quadrature, load, and boundary-lift errors.

There is a full-H1 orthogonal projector from every H1_0 input into every finite conforming rational trial space, including the zero space. This projector preserves the boundary condition by its range and requires no point evaluations. A separate Greville/Schoenberg comparison gives an explicit H1 estimate for C1,1 numerator data over arbitrary finite clamped tensor grids and degrees p_r≥1, including fully repeated knots. It preserves zero faces and compatible multipatch traces under the stated aligned tangential-grid and proportional-denominator conditions. The mapped rate theorem applies when each numerator W_a(u∘F_a) is C1,1 and satisfies its displayed boundary and face hypotheses; for fixed bounded degrees and geometry constants it is first order in the maximum span, while variable-degree convergence uses the actual displayed constants. It asserts neither an optimal h^p rate nor a degree-independent constant. The earlier sharper compact-support Q1 energy estimate and the higher-degree conditional L2 theorem remain separate claims with their original hypotheses.

Positive weights do not imply an injective map or a positive Jacobian. Matching physical patch geometry does not make arbitrary field traces conforming. Nonmatching interfaces are excluded; a mortar or Nitsche method needs its own stability and consistency proof. The elasticity estimate applies for each finite Lamé parameter and grows with λ; it gives no locking-free or λ-uniform NURBS estimate. The perturbed-form result retains the load defect and assumes discrete coercivity.

The controlling pair requires [[spline-evaluation-and-interpolation-algorithms]], [[curved-mesh-geometry-and-conservative-mesh-transfer]], and [[elasticity-near-incompressibility-and-locking-free-discretization]]. The sources and harvested-result dispositions are recorded in the batch coverage file. Takacs and Buffa et al. support the NURBS geometry, basis, refinement, and Galerkin conventions; Lyche, Manni and Speleers support the B-spline and Greville identities; Guermond's mesh and error-analysis notes provide independent finite-mesh and Galerkin context. The quantitative geometry, tensor H1, boundary, and multipatch arguments are proved locally with their exact assumptions; no approximation rate is inferred from a source exercise or a general IGA remark.
