---
id: lem-strong-convexity-implies-strong-monotonicity-of-gradient
kind: lemma
title: "Strong convexity makes a differentiable gradient strongly monotone"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-strong-convex-composite-objective
  - thm-chain-rule-for-total-derivatives
  - def-euclidean-inner-product
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §3.4.2"
      url: "https://arxiv.org/pdf/1405.4980"
      locator: "§3.4.2, strongly convex objective and gradient inequalities"
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.2"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.2, Assumption 4.5 and the strongly convex gradient-gap inequality"
---

## Statement

Let $U\subseteq\mathbb R^d$ be open and convex, let $C\subseteq U$ be convex, and let $f:U\to\mathbb R$ be differentiable. Suppose $f|_C$ is $\mu$-strongly convex in the strong-Jensen sense of [[def-strong-convex-composite-objective]], for $\mu>0$; explicitly, for $x,y\in C$ and $0<t<1$,
$$f((1-t)x+ty)\le(1-t)f(x)+tf(y)-\frac\mu2t(1-t)\|x-y\|_2^2.$$
Then for all $x,y\in C$,
$$f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle+\frac{\mu}{2}\|y-x\|_2^2,$$
and consequently
$$\langle\nabla f(x)-\nabla f(y),x-y\rangle\ge\mu\|x-y\|_2^2.$$

## Facts & Assumptions

**Given:** $U,C,f,\mu$ and the strong-convexity hypothesis in the Statement.

[F1] [[def-strong-convex-composite-objective]]: for $x,y\in\operatorname{dom}F$ and $0<t<1$, $F((1-t)x+ty)\le(1-t)F(x)+tF(y)-(\mu/2)t(1-t)\|x-y\|_2^2$.

[F2] [[thm-chain-rule-for-total-derivatives]]: along the segment $s\mapsto x+s(y-x)$, the derivative of $f$ is $\langle\nabla f(x+s(y-x)),y-x\rangle$.

[F3] [[def-euclidean-inner-product]]: the real Euclidean inner product is symmetric and $\|v\|_2^2=\langle v,v\rangle$.

## Proof

1.1 Fix $x,y\in C$, put $d=y-x$, and take $0<t<1$. Since $F=f$ on $C$, [F1] gives $\frac{f(x+td)-f(x)}{t}\le f(y)-f(x)-\frac{\mu}{2}(1-t)\|d\|_2^2.$ [F1, given, algebra]

2.1 As $t\downarrow0$, [F2] makes the left side tend to $\langle\nabla f(x),d\rangle$; the right side tends to $f(y)-f(x)-(\mu/2)\|d\|_2^2$. The inequality persists in the limit: if the left limit exceeded the right limit, their difference would stay positive for sufficiently small $t$, contradicting step 1.1. Thus the first displayed conclusion follows. [F2, step 1.1, algebra]

3.1 Apply step 2.1 once to $(x,y)$ and once to $(y,x)$, then add. The function-value terms cancel and symmetry in [F3] gives $\langle\nabla f(x)-\nabla f(y),x-y\rangle\ge\mu\|x-y\|_2^2$, proving the second conclusion. [F3, step 2.1, algebra] ∎

