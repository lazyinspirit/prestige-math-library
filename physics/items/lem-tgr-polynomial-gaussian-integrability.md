---
id: lem-tgr-polynomial-gaussian-integrability
kind: lemma
title: "Finite polynomial Gaussian moments"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-tdmath-measure-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, §§1.3 and 1.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Assume Countable Choice. For every integer $d\ge1$, every integer $k\ge0$, and every compact interval $[\alpha_0,\alpha_1]\subset(0,\infty)$,
$$
\sup_{\alpha\in[\alpha_0,\alpha_1]}\int_{\mathbb R^d}(1+\|x\|^k)e^{-\alpha\|x\|^2}\,d\lambda_d(x)<\infty.
$$

## Facts & Assumptions

**Given:** The stated $d,k,\alpha_0,\alpha_1$ and Lebesgue measure on each Euclidean space.

[A1] Countable Choice, [[def-countable-choice]], is assumed only for the stated Lebesgue-measure and product-integration suppliers; no full Axiom of Choice is used.

[F1] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and [[def-tdmath-measure-integral]]: $\lambda_d$ is Lebesgue measure and the integral is the nonnegative measure integral.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable products on sigma-finite product spaces have iterated integral equal to their product-space integral.

## Proof

**Given:** $d\ge1$, $k\ge0$, and $0<\alpha_0\le\alpha\le\alpha_1$.

1.1 In one dimension, the integrand is bounded on $[-1,1]$. For $x\ge1$ and $k\ge1$, the nonnegative power series for the exponential gives $e^{\alpha_0x^2/2}\ge(\alpha_0x^2/2)^k/k!$, hence $x^ke^{-\alpha x^2}\le k!(2/\alpha_0)^k e^{-\alpha_0x^2/2}\le k!(2/\alpha_0)^k e^{-\alpha_0x/2}$. For $k=0$ the same bound holds with constant $1$. The right side has finite integral on $[1,\infty)$ by summing its geometric bounds on intervals $[n,n+1]$; reflection gives the negative half-line. Replacing $\alpha$ by the lower bound $\alpha_0$ proves a uniform one-dimensional moment bound. [given, A1, F1, algebra]

1.2 We have $e^{-\alpha\|x\|^2}=\prod_{j=1}^d e^{-\alpha x_j^2}$ and $1+\|x\|^k\le C_{d,k}(1+\sum_{j=1}^d|x_j|^k)$ for a finite constant $C_{d,k}$. Apply [F2] to each nonnegative product term; every resulting factor is a one-dimensional integral bounded by step 1.1. The finite sum is bounded uniformly in $\alpha\in[\alpha_0,\alpha_1]$, proving the claim. [step 1.1, A1, F2, algebra] ∎
