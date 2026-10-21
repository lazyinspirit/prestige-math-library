---
id: lem-ip-linear-finite-element-solve-residual-controls-state-error
kind: lemma
title: Certified inverse bounds turn finite-element solve residuals into state and adjoint error bounds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-pde-solver-admissibility-contract
  - def-euclidean-inner-product
  - def-operator-norm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, A Posteriori Error Analysis for Optimization with PDE Constraints, §3.1"
      url: "https://arxiv.org/pdf/2503.13170"
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case, §§2–3"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
verification:
  precheck: pass
---

## Statement

Let $A\in\mathbb R^{n\times n}$ and $B\in\mathbb R^{r\times r}$ be invertible finite-element state and adjoint system matrices. Let $u=A^{-1}b$ and $p=B^{-1}c$ be the exact solutions, and let $\widetilde u,\widetilde p$ be computed vectors. Suppose certified residual upper bounds $\rho_u,\rho_p\ge0$ and certified operator bounds $K_u,K_p\ge0$ satisfy
$$
\|A\widetilde u-b\|_2\le\rho_u,\quad \|B\widetilde p-c\|_2\le\rho_p,\quad \|A^{-1}\|\le K_u,\quad \|B^{-1}\|\le K_p.
$$
Then the exact state and adjoint errors satisfy
$$
\|u-\widetilde u\|_2\le K_u\rho_u,\qquad \|p-\widetilde p\|_2\le K_p\rho_p.
$$
The inverse-norm bounds are separate inputs; a residual bound alone gives no state or adjoint error estimate.

## Statement references

[[def-ip-pde-solver-admissibility-contract|Certified state and adjoint residual interface]]

[[def-operator-norm|Induced operator norm and its least-bound property]]

[[def-euclidean-inner-product|Euclidean coefficient norms]]

[Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, *A Posteriori Error Analysis for Optimization with PDE Constraints*, §3.1](https://arxiv.org/pdf/2503.13170)

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*, §§2–3](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

## Facts & Assumptions

**Given:** Invertible state and adjoint matrices, exact and computed vectors, certified residual upper bounds, and certified upper bounds for both inverse norms.

[F1] The state and adjoint residual upper bounds are the certified norms of the finite-dimensional equations defined by the model contract ([[def-ip-pde-solver-admissibility-contract]]).

[F2] The operator norm satisfies $\|Tx\|_2\le\|T\|\|x\|_2$ for each bounded linear map $T$ ([[def-operator-norm]]).

## Proof

1.1 Since $Au=b$, we have $A(u-\widetilde u)=b-A\widetilde u$. Apply $A^{-1}$ and then [F2] to obtain $\|u-\widetilde u\|_2=\|A^{-1}(b-A\widetilde u)\|_2\le\|A^{-1}\|\,\|b-A\widetilde u\|_2\le K_u\rho_u$. [given, F1, F2, algebra]

2.1 Likewise, $B(p-\widetilde p)=c-B\widetilde p$. Applying $B^{-1}$ and [F2] gives $\|p-\widetilde p\|_2=\|B^{-1}(c-B\widetilde p)\|_2\le\|B^{-1}\|\,\|c-B\widetilde p\|_2\le K_p\rho_p$. Together with step 1.1, this proves both bounds. [given, F1, F2, step 1.1, algebra] ∎

## Remarks

This finite-dimensional estimate is choice-free. It does not provide $K_u$ or $K_p$; the model must certify them separately. For a nonlinear state equation or a continuous-to-discrete comparison, another stability argument is required.
