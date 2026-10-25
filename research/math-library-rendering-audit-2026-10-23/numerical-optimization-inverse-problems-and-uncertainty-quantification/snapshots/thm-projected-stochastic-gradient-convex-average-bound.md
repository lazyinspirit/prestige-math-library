---
id: thm-projected-stochastic-gradient-convex-average-bound
kind: theorem
title: "Finite-time projected SGD bound for a convex objective"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-projected-stochastic-gradient-update
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-prox-indicator-is-euclidean-projection
  - thm-differentiable-convex-functions-and-gradient-inequality
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - thm-induction-principle
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-dedekind-complete
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §§3.1 and 6.1, Theorem 6.1"
      url: "https://arxiv.org/pdf/1405.4980"
      locator: "§6.1, Theorem 6.1 and the projected stochastic mirror-descent telescoping argument"
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.1"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.1, Algorithm 4.1 and stochastic-gradient first/second-moment assumptions"
---

## Statement

Assume AC. Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, with diameter $D=\sup_{x,y\in C}\|x-y\|_2<\infty$. Let $f:\mathbb R^d\to\mathbb R$ be differentiable and convex, and assume a minimizer $x^\ast\in C$ exists. Start projected SGD at deterministic $x_0\in C$, with conditionally unbiased gradients, meaning $\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)$ as in [[def-stochastic-gradient-oracle-and-unconstrained-update]], and
$$\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le G^2$$
almost surely for every $k$. For $N\ge1$, put $\bar x_N=N^{-1}\sum_{k=0}^{N-1}x_k$. If $D,G>0$ and $\alpha_k=\alpha=D/(G\sqrt N)$ for $0\le k<N$, then
$$\mathbb E[f(\bar x_N)-f(x^\ast)]\le\frac{DG}{\sqrt N}.$$
If $D=0$ or $G=0$, the initial point is already optimal and the displayed bound holds with right side zero.

## Facts & Assumptions

**Given:** AC, $C,f,x^\ast,x_0,N$, the projected update, conditional unbiasedness, and the moment bound in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation classes.

[F1] [[def-projected-stochastic-gradient-update]]: $x_{k+1}=P_C(x_k-\alpha G_k)$.

[F2] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: the proximal map is nonexpansive.

[F3] [[lem-prox-indicator-is-euclidean-projection]]: the proximal map of $\iota_C$ is $P_C$, and it fixes every point of $C$.

[F4] [[thm-differentiable-convex-functions-and-gradient-inequality]]: for differentiable convex $f$, $f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle$.

[F5] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity means $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for $t\in[0,1]$.

[F6] [[thm-induction-principle]]: a property true at the first natural and preserved by successors holds for every natural.

[F7] [[thm-taking-out-what-is-known]] and [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: integrable measurable factors may be taken outside conditional expectation, which is linear and expectation-preserving.

[F8] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative integrable random variable with zero expectation vanishes almost surely.

[F9] [[def-euclidean-inner-product]]: $\|u\|_2^2=\langle u,u\rangle$.

[F10] [[def-conditional-variance]] and [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: vector conditional variance is nonnegative and conditional second moment equals squared conditional mean plus variance.

[F11] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F12] [[thm-dedekind-complete]]: every nonempty set of reals bounded above has a supremum.

[F13] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: conditional unbiasedness is the almost-sure identity $\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)$.

## Proof

1.1 First establish adaptedness of the projected iterates. The deterministic $x_0$ is $\mathcal F_0$-measurable. If $x_k$ is $\mathcal F_k$-measurable, then $x_k$ and $G_k$ are $\mathcal F_{k+1}$-measurable because $\mathcal F_k\subseteq\mathcal F_{k+1}$ and [F13] makes $G_k$ $\mathcal F_{k+1}$-measurable. Thus $x_k-\alpha G_k$ is $\mathcal F_{k+1}$-measurable. By [F2]–[F3], $P_C$ is nonexpansive and hence continuous, so $x_{k+1}=P_C(x_k-\alpha G_k)$ is $\mathcal F_{k+1}$-measurable and lies in $C$. Induction [F6] proves this for every $k$. The set of pairwise distances in the nonempty set $C$ is nonempty and bounded above by the finite $D$, so [F12] supplies its supremum. By [F10] and [F13], $\|\nabla f(x_k)\|_2^2\le\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le G^2$. Since $x_k,x^\ast\in C$, their distance is at most $D$. The convex gradient inequality [F4] and [F11] give $0\le f(x_k)-f(x^\ast)\le\langle\nabla f(x_k),x_k-x^\ast\rangle\le DG$, so each objective value in the telescope is integrable. [A1, F2, F3, F4, F6, F10, F11, F12, F13, given, algebra, induction]

2.1 By [F3], $P_C(x^\ast)=x^\ast$, and [F2] makes $P_C$ nonexpansive. Therefore $\|x_{k+1}-x^\ast\|_2^2\le\|x_k-\alpha G_k-x^\ast\|_2^2$. Expand the square, take conditional expectation, and use [F1], [F7], [F13], and the conditional moment bound. The gradient inequality in [F4] with $x=x_k$, $y=x^\ast$ gives $\mathbb E[\|x_{k+1}-x^\ast\|_2^2\mid\mathcal F_k]\le\|x_k-x^\ast\|_2^2-2\alpha(f(x_k)-f(x^\ast))+\alpha^2G^2$. [A1, F1, F2, F3, F4, F7, F9, F13, step 1.1, given, algebra]

3.1 Take ordinary expectations in step 2.1 and sum for $k=0,\ldots,N-1$. The distance terms telescope, $\mathbb E\|x_N-x^\ast\|_2^2\ge0$, and $\|x_0-x^\ast\|_2\le D$, so $2\alpha\sum_{k=0}^{N-1}\mathbb E[f(x_k)-f(x^\ast)]\le D^2+N\alpha^2G^2$. [F7, step 2.1, given, algebra]

4.1 Convexity keeps $\bar x_N$ in $C$ and gives $f(\bar x_N)\le N^{-1}\sum_{k<N}f(x_k)$. To verify this finite Jensen inequality, induction starts with equality for one point; the step writes the $m$-point mean as $\frac{m-1}{m}$ times the $(m-1)$-point mean plus $\frac1m x_{m-1}$, then applies [F5]. Take expectations and use step 3.1 to get $\mathbb E[f(\bar x_N)-f(x^\ast)]\le\frac{D^2}{2\alpha N}+\frac{\alpha G^2}{2}$. [F5, F6, step 3.1, given, algebra, induction]

5.1 With $\alpha=D/(G\sqrt N)$, the two terms in step 4.1 are each $DG/(2\sqrt N)$, proving the stated bound. If $D=0$, $C$ is a singleton and $x_0=x^\ast$. If $G=0$, [F8] applied to each conditional moment and expectation-preservation in [F7] give $G_k=0$ almost surely for every fixed $k$. For each finite horizon, induction using [F6] shows all its iterates equal $x_0$ almost surely. Unbiasedness at $k=0$ gives $\nabla f(x_0)=0$, and [F4] makes $x_0$ a global minimizer. Thus the zero-case bound holds for every $N$. [A1, F3, F4, F6, F7, F8, step 4.1, given, algebra, induction] ∎
