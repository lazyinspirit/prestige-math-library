---
id: lem-tgr-exponential-momentum-integrability
kind: lemma
title: "Finite polynomial moments under an exponential momentum tail"
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

Assume Countable Choice. For every integer $k\ge0$ and compact interval $[\alpha_0,\alpha_1]\subset(0,\infty)$,
$$
\sup_{\alpha\in[\alpha_0,\alpha_1]}\int_{\mathbb R^3}(1+\|p\|^k)e^{-\alpha\|p\|}\,d\lambda_3(p)<\infty.
$$

## Facts & Assumptions

**Given:** $k\ge0$, $0<\alpha_0\le\alpha\le\alpha_1$, and three-dimensional Lebesgue measure.

[A1] Countable Choice, [[def-countable-choice]], is assumed only for the Lebesgue-measure and product-integration suppliers; no full Axiom of Choice is used.

[F1] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and [[def-tdmath-measure-integral]]: $\lambda_d$ is Lebesgue measure and the integral is the nonnegative measure integral.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable products on sigma-finite product spaces have iterated integral equal to their product-space integral.

## Proof

**Given:** $k\ge0$ and $0<\alpha_0\le\alpha$.

1.1 On a one-dimensional interval $[n,n+1]$, $n\ge0$, one has $(1+x^k)e^{-\alpha x}\le(1+(n+1)^k)e^{-\alpha_0n}$. The series of these bounds converges: the ratio of consecutive polynomial-exponential terms tends to $e^{-\alpha_0}<1$. Reflection gives the same finite bound on the negative half-line, uniformly for $\alpha\ge\alpha_0$. [given, A1, F1, algebra]

1.2 Cauchy–Schwarz gives $\|p\|\ge(|p_1|+|p_2|+|p_3|)/\sqrt3$, while $\|p\|^k\le C_k\sum_j|p_j|^k$ for $k\ge1$; for $k=0$ the factor is constant. Thus each term in $(1+\|p\|^k)e^{-\alpha\|p\|}$ is bounded by a finite sum of products of one-dimensional polynomial-exponential functions with rate $\alpha_0/\sqrt3$. Apply [F2] and step 1.1 to each factor. The resulting finite bound is uniform over the stated interval. [step 1.1, A1, F2, algebra] ∎
