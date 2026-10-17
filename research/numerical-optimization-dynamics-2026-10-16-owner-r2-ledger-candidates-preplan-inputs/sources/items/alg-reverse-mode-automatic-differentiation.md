---
id: alg-reverse-mode-automatic-differentiation
kind: algorithm
title: "Reverse-mode automatic differentiation for a scalar graph output"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program]
justified_by: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 1
---

## Definition

Input a graph from [[def-finite-straight-line-computational-program]] and an admissible point $x$. Evaluate and store all primal values in topological order. Initialize every operation cotangent to zero and set the scalar output cotangent $\bar z_o=1$. For $j=T,T-1,\ldots,1$, and for every parent slot $k=1,\ldots,r_j$, accumulate
$$\bar z_{p_{j,k}}\mathrel{+}=D_k\phi_j(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})^T\bar z_j.$$
If the same parent node occurs in multiple slots, add every slot contribution. Return $z_o$ and the cotangents of the input coordinates as the gradient. A point outside the admissible domain returns DOMAIN_ERROR; a branch boundary or ambiguous active branch returns NONDIFFERENTIABLE and no gradient. The procedure differentiates the real-arithmetic graph; it makes no floating-point error claim.
