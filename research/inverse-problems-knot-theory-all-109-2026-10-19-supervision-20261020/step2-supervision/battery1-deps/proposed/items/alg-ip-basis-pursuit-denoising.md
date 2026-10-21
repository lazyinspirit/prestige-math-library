---
id: alg-ip-basis-pursuit-denoising
kind: algorithm
title: "Certified basis-pursuit denoising by primal-dual hybrid gradient"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
axiom_base: "No additional axiom; finite-dimensional real algebra and the explicitly supplied finite proximal solver/checker programs."
deps:
  - def-p-norms-on-rn
  - def-euclidean-inner-product
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-proper-closed-convex-function-on-rn
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - lem-fenchel-conjugate-is-proper-closed-convex
  - def-induced-matrix-p-norm
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - alg-pdhg-primal-dual-hybrid-gradient
  - lem-ip-bpdn-minimizer-exists
  - lem-ip-bpdn-dual-certificates
  - lem-ip-bpdn-objectives-proper-closed-convex
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §§2–3.1"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
---

## Definition

Inputs are integers $m,n\ge1$, a matrix $A\in\mathbb R^{m\times n}$ in the standard finite coordinate bases, a vector $y\in\mathbb R^m$, a radius $\epsilon\ge0$, positive real step sizes $\alpha,\beta$, an initial primal-dual state $x^0\in\mathbb R^n$, $p^0\in\mathbb R^m$, a nonnegative integer sweep cap $N$, positive integer proximal-call caps $C_f,C_{g^*}$, and deterministic finite solver programs with Boolean certificate checkers for the two proximal calls. Each solver/checker record must be complete and well-formed. Admissible solver/checker pairs satisfy the soundness condition that an accepted output is an exact minimizer of its stated proximal subproblem; this is an input assumption, not a finite proof search performed by the procedure.

Set $f(x)=\|x\|_1$ and $g(u)=0$ when $\|u-y\|_2\le\epsilon$, with $g(u)=+\infty$ otherwise. Define the Fenchel conjugate by $g^*(p)=\sup_{u\in\mathbb R^m}(\langle p,u\rangle-g(u))$. For a proper closed convex function $q$ and $t>0$, $\operatorname{prox}_{tq}(v)$ denotes the unique minimizer of $q(w)+\|w-v\|_2^2/(2t)$. Let $A^*$ be the Euclidean adjoint and let $\|A\|_2=\sup_{\|v\|_2\le1}\|Av\|_2$. The target is
$$\min_{z\in\mathbb R^n}\|z\|_1\quad\text{subject to}\quad\|Az-y\|_2\le\epsilon.$$

Return **invalid-input** if dimensions or vectors do not match, if $\epsilon<0$, if $N$ is not a nonnegative integer, if either proximal cap is not a positive integer, if either step size is nonpositive, if either solver/checker record is missing or malformed, or if the exact strict check $\alpha\beta\|A\|_2^2<1$ fails. For admissible inputs initialize $\bar x^0=x^0$ and perform the exact primal-dual hybrid-gradient recurrence for at most $N$ sweeps:
$$p^{k+1}=\operatorname{prox}_{\beta g^*}(p^k+\beta A\bar x^k),\qquad x^{k+1}=\operatorname{prox}_{\alpha f}(x^k-\alpha A^*p^{k+1}),\qquad \bar x^{k+1}=2x^{k+1}-x^k.$$
Use the supplied solver/checker pairs and caps for the corresponding proximal calls. Propagate any **invalid-input**, **prox-call-failed**, or **prox-cap-exhausted** status and the state returned by the primal-dual procedure. If all $N$ sweeps complete, let $(x,p)$ be the final primal-dual state and perform these exact tests in order:

- If $p\ne0$, $A^*p=0$, and $|\langle p,y\rangle|>\epsilon\|p\|_2$, return **infeasible**.
- Otherwise, if $\|Ax-y\|_2\le\epsilon$, $\|A^*p\|_\infty\le1$, and $\|x\|_1=-\langle p,y\rangle-\epsilon\|p\|_2$, return **success** with $x$.
- If neither certificate passes, return **budget-exhausted** with the final state.

For $N=0$, test the initial state. The certificate tests use exact real comparisons. The procedure makes no guarantee that a finite run finds a certificate and makes no convergence or finite-termination claim.

## Definition references

[[alg-pdhg-primal-dual-hybrid-gradient|Primal-dual hybrid-gradient recurrence, proximal-call interface, caps, and statuses]]

[[lem-ip-bpdn-dual-certificates|Exact primal optimality and infeasibility certificates]]

[[lem-ip-bpdn-objectives-proper-closed-convex|Proper, closed, and convex BPDN objectives]]

[[lem-ip-bpdn-minimizer-exists|Existence of a minimizer when the residual ball is nonempty]]

[[def-induced-matrix-p-norm|Induced Euclidean operator norm]]

[[def-proximal-mapping|Proximal mapping as a global minimizer]]

[[thm-proximal-operator-existence-resolvent-firm-nonexpansive|Existence and uniqueness of proximal minimizers]]

[[def-adjoint-of-a-linear-map-between-inner-product-spaces|Euclidean adjoint]]

[[def-p-norms-on-rn|Finite-dimensional norms]]

[Chambolle and Pock, *A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging*, §§2–3.1](https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf)

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

