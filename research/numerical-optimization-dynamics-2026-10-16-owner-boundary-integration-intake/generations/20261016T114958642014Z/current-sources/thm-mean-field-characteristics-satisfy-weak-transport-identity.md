---
id: thm-mean-field-characteristics-satisfy-weak-transport-identity
kind: theorem
title: Weak transport identity for characteristic mean-field solutions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-characteristic-mean-field-solution
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-chain-rule-for-total-derivatives
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
proof_strategy: direct
axiom_use: No choice principle is used in this conditional weak-identity proof.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Let $\mu_t=(X_t)_\#\mu_0$ be the characteristic solution for a globally Lipschitz kernel on $[0,T]$. For every $\varphi\in C_c^1(\mathbb R^d)$ and $t\in[0,T]$,
$$\int\varphi\,d\mu_t-\int\varphi\,d\mu_0 =\int_0^t\int_{\mathbb R^d}\nabla\varphi(x)\cdot\left(\int_{\mathbb R^d}K(x,y)d\mu_s(y)\right)d\mu_s(x)ds.$$

## Facts & Assumptions

**Given:** A characteristic solution in the weighted path-integrability convention of [[def-characteristic-mean-field-solution]], a globally Lipschitz kernel, and $\varphi\in C_c^1(\mathbb R^d)$. The proof is conditional on that solution.

[F1] The flow equation and pushforward formula hold for the characteristic solution ([[def-characteristic-mean-field-solution]]); coordinatewise Borel maps into Euclidean products are Borel by the product-sigma identification ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F2] Differentiable compositions obey the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F3] Fubini exchanges integrals for absolutely integrable functions on sigma-finite product spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] Tonelli integrates the nonnegative linear-growth bounds and proves absolute integrability ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] Dominated convergence passes pointwise convergence through an integral under an integrable majorant ([[thm-dominated-convergence]]).


## Proof
1.1 For $\mu_0$-almost every label $x$, the path $X_s(x)$ is absolutely continuous. For a fixed label, its velocity is continuous in time: the integrand converges pointwise for almost every second label and is dominated by the integrable path supremum in the definition, so [F5] applies. Thus its path is $C^1$, and the ordinary chain rule [F2] and defining ODE [F1] give $\varphi(X_t(x))-\varphi(x)=\int_0^t\nabla\varphi(X_s(x))\cdot\int K(X_s(x),X_s(y))d\mu_0(y)ds.$ The integrand is absolutely integrable over time and both labels: $\nabla\varphi$ is bounded, and [F1] bounds $|K(X_s(x),X_s(y))|$ by a constant plus $L(|X_s(x)|+|X_s(y)|)$, whose label integrals are finite uniformly in $s$. This last bound and [F4] justify the exchanges; [F5] supplies the stated velocity continuity. [given, F1, F2, F4, F5]

2.1 Integrate step 1.1 in $x$ against $\mu_0$. The left side becomes the two displayed measure integrals by the pushforward formula [F1]. By [F3] and the absolute-integrability check in step 1.1, exchange the time and label integrals. Replacing $X_s(x),X_s(y)$ by their pushforward variables gives the right side of the Statement. [F1, F3, step 1.1] ∎
