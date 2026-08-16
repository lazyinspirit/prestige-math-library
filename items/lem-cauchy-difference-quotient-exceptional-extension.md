---
id: lem-cauchy-difference-quotient-exceptional-extension
kind: lemma
title: "The filled difference quotient is continuous at its exceptional point and holomorphic away from it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-differentiability-holomorphic-and-entire, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4, Section 2.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $f:U\to\mathbb C$ be holomorphic, and fix $z\in U$. Define

$$g(\zeta)=\begin{cases}\dfrac{f(\zeta)-f(z)}{\zeta-z},&\zeta\ne z,\\[6pt]f'(z),&\zeta=z.\end{cases}$$

Then $g$ is continuous on $U$ and holomorphic on $U\setminus\{z\}$. No holomorphy at the filled point $z$ is asserted.

## Facts & Assumptions

**Given:** An open set $U$, a holomorphic $f:U\to\mathbb C$, and a fixed point $z\in U$.

[L1] The derivative $f'(z)$ is the limit of $(f(\zeta)-f(z))/(\zeta-z)$ as $\zeta\to z$ through $\zeta\ne z$ ([[def-complex-differentiability-holomorphic-and-entire]]).

[L2] Sums, differences, and quotients with nonzero denominator of holomorphic functions are holomorphic ([[thm-algebra-of-complex-derivatives]]).

[L3] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the off-point quotient tends to $f'(z)=g(z)$ as $\zeta\to z$, which is exactly continuity of $g$ at $z$; this also covers constant $f$. [L1]

1.2 On $U\setminus\{z\}$, the numerator and denominator are holomorphic and the denominator is nonzero, so [L2] makes $g$ holomorphic there. [given, L2]

2.1 By [L3], step 1.2 also makes $g$ continuous away from $z$; together with step 1.1 this proves continuity on all of $U$, without claiming differentiability at the filled point. [step 1.1, step 1.2, L3] ∎
