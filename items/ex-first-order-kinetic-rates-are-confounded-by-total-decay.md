---
id: ex-first-order-kinetic-rates-are-confounded-by-total-decay
kind: example
title: "Parallel first-order decay observations depend only on the sum of two rates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - thm-local-information-positive-definite-iff-full-column-rank
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Henrik Madsen, Optimal Experimental Design for Grey-box Models, Ch. 3"
      url: "https://henrikmadsen.org/wp-content/uploads/2014/10/Ph.D._thesis_-_2008_-_Optimal_experimental_design_for_grey-box_models.pdf"
      locator: "Complete thesis retrieved; Ch. 3 §§3.2.2–3.2.3 read for reaction-rate identifiability and nonlinear kinetic parameter aliases."
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "Full article §2.1 read for local/global identifiability and stacked-sensitivity rank."
---

## Example

A species $A$ disappears by two parallel first-order routes with positive rates $k_1,k_2$: its concentration obeys $A'(t)=-(k_1+k_2)A(t)$ and $A(0)=A_0>0$. Only $A$ is observed. No collection of these observations separates $k_1$ from $k_2$; the stacked sensitivity Jacobian has rank at most one.

## Facts & Assumptions

**Given:** A finite nonempty set $\mathcal T$ of observation times in $[0,\infty)$, $A_0>0$, parameters $k_1,k_2>0$, the scalar rate equation $A'=-(k_1+k_2)A$, $A(0)=A_0$, and the observation map that records $A(t)$ for $t\in\mathcal T$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: local identifiability requires the joint observation map to be injective on a neighborhood; its stacked sensitivity Jacobian is formed by placing the observation Jacobian rows together.

[F2] [[thm-local-information-positive-definite-iff-full-column-rank]]: for positive design weights and positive observation precisions, the local information matrix is positive definite exactly when the stacked sensitivity Jacobian has trivial kernel.

[F3] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable inside, its endpoint increment is its derivative at an interior point times the interval length.

## Verification

1.1 Put $\lambda=k_1+k_2$. The function $A(t)=A_0e^{-\lambda t}$ satisfies the rate equation and initial value. If $\widetilde A$ is any other differentiable solution, then $(e^{\lambda t}\widetilde A(t))'=0$; applying [F3] on every compact time interval shows this product is constant, and its value at $0$ is $A_0$. Thus the observation map is $F(k_1,k_2)=(A_0e^{-(k_1+k_2)t})_{t\in\mathcal T}$. Now fix any neighborhood $U$ of $(k_1,k_2)$ inside $(0,\infty)^2$. Since $U$ is open, it contains a ball of some radius $r>0$. Choose $0<\varepsilon<\min\{k_2,r/2\}$. Then $(k_1+\varepsilon,k_2-\varepsilon)$ is positive, distinct from $(k_1,k_2)$, and lies in that ball. The sums of the rates agree, so these two parameters have identical observations. Every neighborhood therefore contains a distinct parameter with identical observations; the model is not locally identifiable by [F1], and hence is not globally identifiable. [given, F1, F3, choose, algebra]

2.1 For each $t\in\mathcal T$, differentiating the observation gives the row $-A_0t e^{-(k_1+k_2)t}(1,1)$. Every row is a scalar multiple of $(1,1)$, so the stacked Jacobian has rank at most one and has the nonzero kernel vector $(1,-1)$. By [F2], every supported design's information matrix is singular. This rank failure agrees with, but is weaker than, the exact aliases proved in step 1.1. [given, step 1.1, F2, algebra] ∎
