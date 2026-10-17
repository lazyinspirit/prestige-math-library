---
id: alg-forward-over-reverse-hessian-vector-product
kind: algorithm
title: "Forward-over-reverse Hessian-vector products"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, alg-forward-mode-automatic-differentiation, alg-reverse-mode-automatic-differentiation]
justified_by: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 2
---

## Definition

Input a $C^2$ graph, admissible $x$, and direction $v$. First run the forward tangent recurrence to compute every $\dot z_j=Dz_j(x)v$. Set $\bar z_o=1$, $\dot{\bar z}_o=0$, and all other reverse accumulators to zero. In reverse topological order, for each node $j$ and parent slot $k$, let $A_{j,k}=D_k\phi_j(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})$ and update
$$\bar z_{p_{j,k}}\mathrel{+}=A_{j,k}^{T}\bar z_j,\qquad \dot{\bar z}_{p_{j,k}}\mathrel{+}=A_{j,k}^{T}\dot{\bar z}_j+\bigl(DA_{j,k}(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})[\dot z_{p_{j,1}},\ldots,\dot z_{p_{j,r_j}}]\bigr)^{T}\bar z_j.$$
Return the input tangent of the gradient, $(\dot{\bar x}_1,\ldots,\dot{\bar x}_n)$. Repeated parent slots receive separate additions. Outside the admissible domain return DOMAIN_ERROR; at a branch boundary return NONDIFFERENTIABLE. The transpose is the real Euclidean transpose, not a complex adjoint.
