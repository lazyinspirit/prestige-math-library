---
id: ex-ica-sign-permutation-ambiguity
kind: example
title: "A standardized Laplace ICA model has signed-permutation alternatives"
status: draft
dependency_level: 1
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-square-ica-model]
justified_by: []
generation:
  role: example
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let $S_1,S_2$ be independent with common density $f(s)=2^{-1/2}e^{-\sqrt2|s|}$, which has mean zero, variance one, and is non-Gaussian. Put $S=(S_1,S_2)^T$, $A=I_2$, and $Q=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Then $X=AS$ and $X=(AQ)(Q^TS)$ are two square independent-component representations of the same law, with standardized non-Gaussian sources.

## Facts & Assumptions

**Given:** The independent Laplace sources and signed-permutation matrix in the example statement.

[F1] [[def-square-ica-model]]: a square ICA representation has an invertible mixing matrix and mutually independent centered unit-variance sources.

## Verification

1.1 Put $a=\sqrt2$. Direct integration gives $\int_0^\infty e^{-as}\,ds=1/a$ and $\int_0^\infty s^2e^{-as}\,ds=[-e^{-as}(s^2/a+2s/a^2+2/a^3)]_0^\infty=2/a^3$. Hence $\int_{\mathbb R}f(s)\,ds=1$, symmetry gives mean zero, and $\mathbb E S_j^2=2(1/\sqrt2)(2/a^3)=1$. The one-sided derivatives of $f$ at zero are $1$ and $-1$, unlike the smooth standard Gaussian density; since both densities are continuous, this law is non-Gaussian. [given, algebra]

2.1 The matrix $Q$ is a signed permutation, so $Q^TS=(S_2,-S_1)^T$. The two coordinates remain independent, centered, and unit variance by step 1.1; the even Laplace density is unchanged by sign reversal, so both remain non-Gaussian. [F1, given, step 1.1, algebra]

3.1 Since $Q^TQ=I_2$, $(AQ)(Q^TS)=AS$ exactly. Thus the observed law is unchanged while the source order/sign representation changes. [F1, step 2.1, algebra] ∎
