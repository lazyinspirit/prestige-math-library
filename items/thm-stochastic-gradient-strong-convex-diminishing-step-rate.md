---
id: thm-stochastic-gradient-strong-convex-diminishing-step-rate
kind: theorem
title: "Last-iterate SGD rate for smooth strongly convex objectives"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-strong-convex-composite-objective
  - lem-strong-convexity-implies-strong-monotonicity-of-gradient
  - lem-l-smoothness-descent-inequality
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-induction-principle
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.2, Theorem 4.7"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.2, Theorem 4.7 and the induction proving the O(1/k) expected objective-gap bound"
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §6.1, Theorem 6.2"
      url: "https://arxiv.org/pdf/1405.4980"
      locator: "§6.1, Theorem 6.2, strongly convex stochastic-gradient averaging"
---

## Statement

Assume AC. Let $f:\mathbb R^d\to\mathbb R$ have $L$-Lipschitz gradient for $L>0$ and be $\mu$-strongly convex in the strong-Jensen sense of [[def-strong-convex-composite-objective]] for $\mu>0$, with minimizer $x^\ast$ satisfying $\nabla f(x^\ast)=0$. Start the unconstrained update of [[def-stochastic-gradient-oracle-and-unconstrained-update]] at deterministic $x_0$, with
$$\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k),\qquad \mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le M^2$$
almost surely for every $k$. Use $\alpha_0=1/\mu$ and $\alpha_k=1/(\mu(k+1))$ for $k\ge1$. Then for every $k\ge1$,
$$\mathbb E\|x_k-x^\ast\|_2^2\le\frac{M^2}{\mu^2 k},\qquad \mathbb E[f(x_k)-f(x^\ast)]\le\frac{LM^2}{2\mu^2 k}.$$

## Facts & Assumptions

**Given:** AC, the hypotheses and update in the Statement.

[A1] [[def-axiom-of-choice]]: AC is assumed for the conditional-expectation classes.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: the update is $x_{k+1}=x_k-\alpha_kG_k$, conditional unbiasedness means $\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)$ coordinatewise almost surely, and the vector conditional second-moment identity implies $\|\nabla f(x_k)\|_2^2\le\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]$.

[F2] [[lem-strong-convexity-implies-strong-monotonicity-of-gradient]]: $\langle\nabla f(x)-\nabla f(y),x-y\rangle\ge\mu\|x-y\|_2^2$.

[F3] [[lem-l-smoothness-descent-inequality]]: $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$.

[F4] [[thm-taking-out-what-is-known]] and [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and an integrable measurable factor may be taken outside when the products are integrable.

[F5] [[def-euclidean-inner-product]]: $\|u\|_2^2=\langle u,u\rangle$.

[F6] [[thm-induction-principle]]: a bound true at the first index and preserved by each successor holds at every natural index.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F8] [[def-strong-convex-composite-objective]]: strong convexity means $f((1-t)x+ty)\le(1-t)f(x)+tf(y)-(\mu/2)t(1-t)\|x-y\|_2^2$ for $0<t<1$ on the effective domain.

## Proof

1.1 Put $V_k=\|x_k-x^\ast\|_2^2$. First, the pointwise bound $V_{k+1}\le(1+\mu\alpha_k)V_k+(\alpha_k/\mu+\alpha_k^2)\|G_k\|_2^2$ follows from [F5], [F7], and $2uv\le\mu u^2+\mu^{-1}v^2$, so induction from deterministic $x_0$ and the unconditional moment bound gives $V_k\in L^1$ for every $k$. The conditional-moment identity in [F1] gives $\mathbb E\|\nabla f(x_k)\|_2^2\le M^2$; hence Cauchy–Schwarz makes the inner-product products integrable. By [F8], the strong-Jensen hypothesis is the one used in [F2]; applying [F2] with $y=x^\ast$ gives $\langle\nabla f(x_k),x_k-x^\ast\rangle\ge\mu V_k$. Expanding the update and conditioning using [F1] and [F4] now gives $\mathbb E[V_{k+1}\mid\mathcal F_k]\le(1-2\mu\alpha_k)V_k+M^2\alpha_k^2$. [A1, F1, F2, F4, F5, F7, F8, given, algebra, induction]

2.1 At $k=0$, the recurrence in step 1.1 and $\alpha_0=1/\mu$ give $\mathbb E V_1\le-\mathbb E V_0+M^2/\mu^2\le M^2/\mu^2$. For $k\ge1$, if $\mathbb E V_k\le M^2/(\mu^2k)$, then $\mathbb E V_{k+1}\le\frac{M^2}{\mu^2}\left(\frac{k-1}{k(k+1)}+\frac1{(k+1)^2}\right) =\frac{M^2}{\mu^2}\frac{k^2+k-1}{k(k+1)^2}\le\frac{M^2}{\mu^2(k+1)},$ because $k^2+k-1\le k(k+1)$. This proves the induction step; [F6] then gives the distance bound for all $k\ge1$. [F6, step 1.1, given, algebra, induction]

3.1 Apply [F3] with $x=x^\ast$ and $y=x_k$. Since $\nabla f(x^\ast)=0$, it gives $f(x_k)-f(x^\ast)\le(L/2)V_k$. Taking expectations and using step 2.1 proves the objective-gap bound. [F3, step 2.1, given, algebra] ∎
