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

Input a $C^2$ graph, admissible $x$, and direction $v$. First run the forward tangent recurrence to compute every $\dot z_j=Dz_j(x)v$. Initialize every operation and input cotangent and tangent-cotangent accumulator to zero. Seed the output by setting its cotangent/tangent-cotangent pair to $(1,0)$: if $o$ is an operation, set $(\bar z_o,\dot{\bar z}_o)=(1,0)$; if $o$ is input coordinate $i$, set $(\bar x_i,\dot{\bar x}_i)=(1,0)$. In reverse topological order, for each node $j$ and parent slot $k$, let $A_{j,k}=D_k\phi_j(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})$, compute
$$c_{j,k}=A_{j,k}^{T}\bar z_j,\qquad \dot c_{j,k}=A_{j,k}^{T}\dot{\bar z}_j+\bigl(DA_{j,k}(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})[\dot z_{p_{j,1}},\ldots,\dot z_{p_{j,r_j}}]\bigr)^{T}\bar z_j,$$
and add $c_{j,k}$ and $\dot c_{j,k}$ to the parent's cotangent and tangent-cotangent accumulators. Use $(\bar x_i,\dot{\bar x}_i)$ for input coordinate $i$ and $(\bar z_\ell,\dot{\bar z}_\ell)$ for operation node $\ell$. If the same parent occurs in multiple slots, add every slot contribution.
Return the input tangent of the gradient, $(\dot{\bar x}_1,\ldots,\dot{\bar x}_n)$. Repeated parent slots receive separate additions. Outside the admissible domain return DOMAIN_ERROR; at a branch boundary return NONDIFFERENTIABLE. The transpose is the real Euclidean transpose, not a complex adjoint.
