---
id: "ex-regular-conditional-law-of-one-coordinate-given-another"
kind: "example"
title: "Regular conditional law of one coordinate given another"
deps: ["thm-conditional-density-formula", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume AC for the compact Riemann–Lebesgue integration bridge. On $\mathbb R^2$ take joint density $p(x,y)=2\mathbf1_{\{0<x<y<1\}}$. For the coordinate random variables X,Y, a conditional law of X given Y=y is uniform on $(0,y)$ when $0<y<1$, with the fixed $\delta_0$ filler otherwise:
$$K(y,A)=\begin{cases}\lambda_1(A\cap(0,y))/y,&0<y<1,\\ \mathbf1_A(0),&y\notin(0,1).\end{cases}$$

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] The density ratio on finite positive marginal fibres, with fixed probability filling, gives a conditional kernel. [[thm-conditional-density-formula]].

[F2] Continuous polynomial primitives compute the compact integrals. [[thm-ftc-second-part]].

[F3] Bounded Riemann integrals equal Lebesgue integrals under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F4] AC supplies countable choice for the compact integral bridge. [[def-axiom-of-choice]].

[F5] Tonelli gives measurable marginal section integrals and the joint total mass. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F6] The nonnegative density defines the joint measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

## Verification

**Proof technique:** direct.

1.1 The triangle is product-measurable, since its defining strict inequalities between coordinates are open conditions (or countable rational rectangle unions). For $0<y<1$ the section integral is $m(y)=\int_0^y2\,dx=2y$, and it is zero for all other y. The constant primitive 2x computes this integral by [F2] and [F3]; finite endpoints are Lebesgue-null, as follows from containment in intervals of arbitrarily small length. Likewise $\int_0^12y\,dy=[y^2]_0^1=1$. Thus [F5] shows the nonnegative joint density has total mass one, and [F6] constructs the probability. The bridge uses the countable choice supplied by [F4]. [F2, F3, F4, F5, F6]

2.1 On $0<y<1$, $0<m(y)=2y<\infty$ and $\int_Ap(x,y)dx=2\lambda_1(A\cap(0,y))$. Dividing gives the displayed uniform kernel. Off this interval the marginal is zero, so [F1] allows the supplied point-mass probability $\delta_0$. Its event value is $\mathbf1_A(0)$ and it is countably additive because at most one member of a disjoint event sequence contains 0. For any Borel A,B, the conditional rectangle calculation is $$\int_BK(y,A)P_Y(dy)=\int_{B\cap(0,1)}\frac{\lambda_1(A\cap(0,y))}{y}2y\,dy=\int_{B\cap(0,1)}2\lambda_1(A\cap(0,y))\,dy,$$ the joint probability by [F5]. In particular $K(1/2,(0,1/4))=(1/4)/(1/2)=1/2$, while $K(0,(0,1/4))=0$ under the specified filler. The latter is not a value of a density ratio. [step 1.1, F1, F5] ∎
