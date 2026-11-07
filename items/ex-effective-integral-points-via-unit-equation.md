---
id: ex-effective-integral-points-via-unit-equation
kind: example
title: A three-point integral set found through an S-unit equation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-s-integral-points-on-an-affine-curve
  - def-projective-line-two-affine-cover-and-twisting-sheaf
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jan-Hendrik Evertse, Diophantine Equations, Chapter 5 §5.3, Theorem 5.12 and proof
      url: https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf
      locator: Unit equation over a number field
    - title: Faltings–Wüstholz et al., Rational Points, Chapter V §5
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: The three-punctured projective line in Siegel's theorem
---

## Example

Let $K=\mathbb Q$, let $S=\{(2)\}$, and let $R=\mathcal O_{\mathbb Q,S}=\mathbb Z[1/2]$. Let $U=\mathbb P^1_{\mathbb Q}\setminus\{0,1,\infty\}$ with affine coordinate $t$, and use the model $\mathcal U=\operatorname{Spec}R[t,1/(t(t-1))]$. Then the $S$-integral points of this model are exactly $t=-1,\frac12,2$. Under $x=t$ and $y=1-t$, the corresponding $S$-unit solutions of $x+y=1$ are exactly $(-1,2),(\frac12,\frac12),(2,-1)$.

## Example references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-projective-line-two-affine-cover-and-twisting-sheaf]]

[[def-s-integral-points-on-an-affine-curve]]

[Evertse, *Diophantine Equations*, Chapter 5 §5.3, Theorem 5.12 and proof](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

[Faltings–Wüstholz et al., *Rational Points*, Chapter V §5](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** $K=\mathbb Q$, $S=\{(2)\}$, $R=\mathbb Z[1/2]$, the curve $U=\mathbb P^1_{\mathbb Q}\setminus\{0,1,\infty\}$, and the fixed model $\mathcal U=\operatorname{Spec}R[t,1/(t(t-1))]$.

[F1] A section $\operatorname{Spec}R\to\mathcal U$ is determined by an element $a\in R$ for the image of $t$; it exists exactly when both $a$ and $a-1$ are units of $R$. [[def-s-integral-points-on-an-affine-curve]]

[F2] The units of $\mathbb Z[1/2]$ are precisely $\{\pm2^n:n\in\mathbb Z\}$: a rational number and its inverse lie in $\mathbb Z[1/2]$ exactly when its numerator and denominator have no prime factors other than $2$. [[def-s-integers-and-s-units-of-a-number-field]]

[F3] $\mathbb Q$ is a number field, and the finite-prime localization at $(2)$ is $\mathbb Z[1/2]$. The two-affine projective line has affine coordinate $t$ on one chart; deleting $0,1,\infty$ gives the model $\operatorname{Spec}R[t,1/(t(t-1))]$ used here. [[def-number-field]] [[def-s-integers-and-s-units-of-a-number-field]] [[def-projective-line-two-affine-cover-and-twisting-sheaf]]

## Proof

1.1 By [F1] and [F3], an $S$-integral point is an $a\in R$ such that $a\in R^\times$ and $1-a\in R^\times$. Put $x=a$ and $y=1-a$. Then $x,y\in R^\times$ and $x+y=1$. Conversely, every such unit pair determines the section $t\mapsto x$. [F1, F3, given, algebra]

1.2 By [F2], write $x=\epsilon 2^p$ and $y=\eta2^q$, where $\epsilon,\eta\in\{1,-1\}$ and $p,q\in\mathbb Z$. If $\epsilon=\eta=-1$, their sum is negative and cannot equal $1$. If $\epsilon=\eta=1$, assume $p\le q$. For $p=q$, the equation $2^{p+1}=1$ gives $p=q=-1$. For $p<q$, the equation $2^p(1+2^{q-p})=1$ has an odd factor in parentheses, so its $2$-adic valuation forces $p=0$; then $1+2^q>1$, a contradiction. This leaves the ordered pair $(x,y)=(\frac12,\frac12)$. [F2, given, cases]

2.1 If the signs are opposite, let $p$ be the exponent of the positive term and $q$ the exponent of the negative term. The equation is $2^p-2^q=1$, which forces $p>q$. Factoring gives $2^q(2^{p-q}-1)=1$; the second factor is odd, so $q=0$, and then $2^p=2$, hence $p=1$. The two assignments of signs give $(x,y)=(2,-1)$ and $(-1,2)$. Together with step 1.2 these are all solutions. [F2, step 1.2, cases, algebra]

3.1 The three pairs give $t=x\in\{\frac12,2,-1\}$, and each has $x,1-x\in R^\times$, so each defines a section by [F1]. Steps 1.1–2.1 show that no other section exists. [F1, step 1.1, step 1.2, step 2.1, given] ∎
