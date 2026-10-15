---
id: prop-observed-law-does-not-identify-latent-error-variance-split
kind: proposition
title: "The observed law need not identify the latent-error variance split"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-measurement-error-models
  - def-moments-variance-and-covariance
  - def-independent-random-elements
  - thm-expectation-of-products-of-independent-random-variables
  - thm-covariance-bilinearity-and-symmetry
  - def-parametric-statistical-model
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 9"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "§§9.1–9.2 and Fine Point 9.1, printed pp. 125–128"
    - title: "Keogh et al., STRATOS guidance on measurement error and misclassification, Part 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/"
      locator: "§§2.1, 3.1.1 and 4.1–4.2"
---

## Statement

Within the class of centered, square-integrable classical additive error
models with $U$ independent of $X$, the observed law of $W=X+U$ need not
identify the target
$$\psi(\theta)=(\operatorname{Var}_{\theta}(X_{\theta}),\operatorname{Var}_{\theta}(U_{\theta}))\in[0,+\infty)^2.$$
In particular, there is a two-point parametric model whose two parameter
values give the same law of $W$ but different latent-error variance pairs.

## Facts & Assumptions

**Given:** A classical additive error model has $W=X+U$, and variances and independence have their probability-space meanings.

[F1] Classical additive error is the equation $W=X+U$ with centered $U$ independent of $X$ ([[def-measurement-error-models]]).

[F2] Independence of random variables means independence of their generated sigma-algebras ([[def-independent-random-elements]]).

[F3] For independent integrable random variables, products are integrable and their expectations factor ([[thm-expectation-of-products-of-independent-random-variables]]).

[F4] Variance and covariance are centered expectations, and covariance is bilinear on finite sums ([[def-moments-variance-and-covariance]], [[thm-covariance-bilinearity-and-symmetry]]).

[F5] A parametric statistical model is a parameter-indexed family of sampling laws on a fixed measurable sample space ([[def-parametric-statistical-model]]).

[F6] An estimand is a function from the parameter set to a target space ([[def-estimand-on-a-statistical-model]]).

[F7] An estimand is identifiable only if equal sampling laws always give equal target values ([[def-identifiability-of-an-estimand]]).

## Proof

1.1 Let $\Omega=\{-1,1\}^4$ with its full power set and uniform probability, and label its coordinate variables $A,B,C,D$. For any subsets $S_i\subseteq\{-1,1\}$ on $k$ distinct coordinates, counting gives $$\mathbb P(A_i\in S_i\text{ for all selected }i)=\prod_i\frac{|S_i|}{2},$$ where $(A_1,A_2,A_3,A_4)=(A,B,C,D)$. Thus the coordinate sigma-algebras are mutually independent in the sense of [F2]. Each coordinate has mean $0$ and variance $1$; [F3] gives zero expectation for products of distinct coordinates, so [F4] gives their zero covariances. [given, F2, F3, F4, algebra]

2.1 Define $(X_0,U_0,W_0)=(A+B,C+D,A+B+C+D)$ and $(X_1,U_1,W_1)=(A+B+C,D,A+B+C+D)$. Thus $W_0=W_1$ pointwise. For any Borel $B_0,B_1\subseteq\mathbb R$, the event $X_0\in B_0$ is determined by $(A,B)$ and $U_0\in B_1$ by $(C,D)$; their preimage sets $E,F\subseteq\{-1,1\}^2$ satisfy $\mathbb P((A,B)\in E,(C,D)\in F)=|E||F|/16=(|E|/4)(|F|/4)$. The same count for the three-coordinate block and the last coordinate proves $X_i$ independent of $U_i$ for $i=0,1$. Both errors are centered. [given, F1, F2, step 1.1]

2.2 Bilinearity and the zero covariances from step 1.1 give $\operatorname{Var}(X_0)=\operatorname{Var}(A+B)=1+1+2(0)=2$, $\operatorname{Var}(U_0)=\operatorname{Var}(C+D)=1+1+2(0)=2$, $\operatorname{Var}(X_1)=\operatorname{Var}(A+B+C)=1+1+1+2(0+0+0)=3$, and $\operatorname{Var}(U_1)=\operatorname{Var}(D)=1$. The variance pairs $(2,2)$ and $(3,1)$ are different. [F3, F4, step 1.1, algebra]

3.1 Let $\Theta=\{0,1\}$, take sample space $(\mathbb R,\mathcal B(\mathbb R))$, and define $P_i$ to be the law of $W_i$. Then $\mathsf P:i\mapsto P_i$ is a parametric model [F5], and $\psi(i)=(\operatorname{Var}(X_i),\operatorname{Var}(U_i))$ is an estimand [F6]. Since $W_0=W_1$, $P_0=P_1$, but step 2.2 gives $\psi(0)\ne\psi(1)$. This violates the defining implication for identifiability [F7], so the split is not identifiable from the observed law of $W$ alone. [F5, F6, F7, step 2.1, step 2.2, algebra] ∎
