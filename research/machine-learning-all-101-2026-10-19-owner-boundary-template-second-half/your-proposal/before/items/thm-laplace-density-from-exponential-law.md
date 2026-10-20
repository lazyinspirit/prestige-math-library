---
id: thm-laplace-density-from-exponential-law
kind: theorem
title: Laplace noise has its stated Lebesgue density
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-laplace-distribution
  - def-countable-choice
  - thm-exponential-and-weibull-survival-laws
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is used through the exponential-law and Lebesgue change-of-variables suppliers; no full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

For every $b>0$, the probability measure $\operatorname{Lap}(b)$ is absolutely continuous with respect to Lebesgue measure on $\mathbb R$ and has density

$$
z\longmapsto \frac{1}{2b}e^{-|z|/b}.
$$

## Statement references

[[def-laplace-distribution|The mixture definition of Laplace distribution with scale b]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.2, printed p. 31.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, PDF pp. 7–8.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** $b>0$ and a Borel set $A\subseteq\mathbb R$.

[A1] [[def-countable-choice|Countable Choice]] is the axiom assumed by the cited exponential-law and Lebesgue change-of-variables suppliers; no full Axiom of Choice is invoked.

[F1] [[def-laplace-distribution|Laplace distribution]]: $\operatorname{Lap}(b)(A)=\frac12\mu_b(A\cap(0,+\infty))+\frac12\mu_b(\{x>0:-x\in A\})$, where $\mu_b$ is the exponential probability law of rate $1/b$.

[F2] [[thm-exponential-and-weibull-survival-laws|Exponential-law density]]: for $\lambda>0$, the density is $f_\lambda(t)=\lambda e^{-\lambda t}$ when $t>0$ and $0$ otherwise, and it defines a probability law.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions|Lebesgue change of variables]]: a $C^1$ diffeomorphism $T$ transforms nonnegative Lebesgue integrals by the absolute Jacobian; for $T(x)=-x$ the absolute Jacobian is $1$.

[F4] [[thm-lebesgue-measure-of-a-box-of-every-kind|Measure of a degenerate interval]]: a one-dimensional box with equal endpoints has Lebesgue measure $0$.

## Proof

1.1 Put $A_+=A\cap(0,+\infty)$ and $A_-=A\cap(-\infty,0)$. By [F1] and [F2], the positive mixture half contributes $\frac12\int_{A_+}b^{-1}e^{-x/b}\,d\lambda(x)$. Applying [F3] to reflection $T(x)=-x$ and $y\mapsto\mathbf1_{A_-}(y)b^{-1}e^{y/b}$ shows that the reflected half contributes $\frac12\int_{A_-}b^{-1}e^{y/b}\,d\lambda(y)$. On $A_+$, $e^{-x/b}=e^{-|x|/b}$; on $A_-$, $e^{y/b}=e^{-|y|/b}$. The singleton at zero has Lebesgue measure zero by [F4]. Hence $\operatorname{Lap}(b)(A)=\int_A(2b)^{-1}e^{-|z|/b}\,d\lambda(z)$. [A1, F1, F2, F3, F4, given, construct, algebra]

2.1 The identity in step 1.1 holds for every Borel set $A$. Its integrand is nonnegative and measurable; thus every Lebesgue-null Borel set has zero $\operatorname{Lap}(b)$ measure, and the displayed function is the claimed Radon–Nikodym density. [step 1.1, given, algebra] ∎
