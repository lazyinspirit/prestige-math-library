---
id: alg-reverse-mode-automatic-differentiation
kind: algorithm
title: "Reverse-mode automatic differentiation for a scalar graph output"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program]
justified_by: []
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/alg-reverse-mode-automatic-differentiation.json
  precheck: n/a
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

Input a graph from Finite straight-line computational programs and real-arithmetic tapes and an admissible point $x$. Require every primitive to be $C^1$ on its declared open domain or supplied as a piecewise-$C^1$ primitive with the branch rules of the graph definition. Evaluate and store all primal values in topological order. Initialize every operation cotangent and every input cotangent to zero. Seed the scalar output by setting its cotangent to $1$: if $o$ is an operation, set $\bar z_o=1$; if $o$ is input coordinate $i$, set $\bar x_i=1$. For $j=T,T-1,\ldots,1$, and for every parent slot $k=1,\ldots,r_j$, compute the contribution
$$c_{j,k}=D_k\phi_j(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})^T\bar z_j$$
and add it to the cotangent accumulator of that parent: use $\bar x_i$ if the parent is input coordinate $i$, and $\bar z_\ell$ if it is operation node $\ell$. If the same parent node occurs in multiple slots, add every slot contribution. Return the scalar output $f(x)$ and the input cotangents $(\bar x_1,\ldots,\bar x_n)$ as the Euclidean gradient. A point outside the admissible domain returns DOMAIN_ERROR; a branch boundary or ambiguous active branch returns NONDIFFERENTIABLE and no gradient. The procedure differentiates the real-arithmetic graph; it makes no floating-point error claim.

## Definition references

[[def-finite-straight-line-computational-program]]

