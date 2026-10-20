---
id: alg-forward-mode-automatic-differentiation
kind: algorithm
title: "Forward-mode automatic differentiation on a finite computational graph"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program]
justified_by: []
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/alg-forward-mode-automatic-differentiation.json
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

Input a graph from Finite straight-line computational programs and real-arithmetic tapes, an admissible point $x$, and a direction $v\in\mathbb R^n$. Require every primitive to be $C^1$ on its declared open domain or supplied as a piecewise-$C^1$ primitive with the branch rules of the graph definition. Evaluate all primal node values in topological order and store the tape. Set each input tangent to $\dot z_{\mathrm{in}_i}=\dot x_i=v_i$, using the distinct input labels of the graph. For each operation $j=1,\ldots,T$, compute
$$\dot z_j=D\phi_j(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})(\dot z_{p_{j,1}},\ldots,\dot z_{p_{j,r_j}}).$$
Return the primal scalar output $f(x)$ and its tangent: return $(z_o,\dot z_o)$ if $o$ is an operation node, and $(x_i,v_i)$ if $o$ is input coordinate $i$. If the input is outside the admissible domain, return DOMAIN_ERROR; if a piecewise primitive is at a branch boundary or has no unique strict active branch, return NONDIFFERENTIABLE and no tangent. All derivative evaluations in this definition are exact real-arithmetic operations on the specified primitive maps.

## Definition references

[[def-finite-straight-line-computational-program]]
