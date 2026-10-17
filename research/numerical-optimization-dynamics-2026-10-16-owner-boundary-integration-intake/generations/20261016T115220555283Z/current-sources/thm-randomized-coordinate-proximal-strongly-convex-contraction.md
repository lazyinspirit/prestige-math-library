---
id: thm-randomized-coordinate-proximal-strongly-convex-contraction
kind: theorem
title: "Strongly convex smooth-part proximal coordinate contraction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-randomized-coordinate-proximal-descent
  - lem-randomized-coordinate-prox-subproblem-well-defined
  - lem-coordinate-block-smoothness-descent-model
  - lem-coordinate-separable-penalty-is-proper-closed-convex
  - lem-proper-closed-convex-function-affine-minorant
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
  - thm-heine-borel-rn
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - def-c-one-map-and-local-inverse
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-induction-principle
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.7, Theorem 3.4 and complete proof"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §5"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
---

## Statement

For a finite horizon $k$, choose an algorithm budget $K\ge k$ and do not request a proximal-gradient stopping tolerance, so all $k$ updates are executed.

Let $F(x)=f(x)+g(x)$ on a finite-dimensional block product $\mathbb R^d$, where $f$ is convex, continuously differentiable, and globally $\mu$-strongly convex for some $\mu>0$, and $g(x)=\sum_{i=1}^n g_i(x_{B_i})$ with each $g_i$ proper, closed and convex. Let $B_1,\ldots,B_n$ partition the coordinates into nonempty blocks. Suppose each block gradient is $L_i$-Lipschitz and set $L_{\max}=\max_iL_i$. Start from a finite point $x^0$ with $F(x^0)<+\infty$. Run [[alg-randomized-coordinate-proximal-descent]] with uniform independent block sampling and common majorizer $M_i=L_{\max}$. For any finite horizon $k$, assume each of its first $k$ subproblem calls returns an accepted certificate with model error at most $\epsilon_j\ge0$ at update $j$; exact updates have $\epsilon_j=0$. Then $F$ has a unique minimizer $x^*$, $\mu\le L_{\max}$, and for $q=1-\mu/(nL_{\max})$,
$$\mathbb E[F(x^k)-F(x^*)]\le q^k(F(x^0)-F(x^*))+\sum_{j=0}^{k-1}q^{k-1-j}\epsilon_j.$$
The expectation is the finite weighted sum over the $k$-step block histories, with the power convention $q^0=1$. In particular, exact updates contract the expected gap by the factor $q$. Curvature of $F$ supplied only by the nonsmooth penalties is not covered.

## Facts & Assumptions

**Given:** The finite block product, $f,g_i,L_i,\mu$, a finite-valued initial point, uniform independent sampling, and certified model errors from the Statement.

[F1] [[alg-randomized-coordinate-proximal-descent]]: the selected block minimizes its quadratic model, or is accepted with certified model gap at most $\epsilon_k$; other blocks stay fixed.

[F2] [[lem-randomized-coordinate-prox-subproblem-well-defined]]: every exact block model has a unique minimizer and an accepted error-$\epsilon_k$ update raises $F$ by at most $\epsilon_k$.

[F3] [[lem-coordinate-block-smoothness-descent-model]]: the smooth term obeys the block quadratic upper model with constant $L_i\le L_{\max}$.

[F4] [[lem-coordinate-separable-penalty-is-proper-closed-convex]]: the finite separable sum $g$ is proper, closed and convex; its proof uses only closed sublevels of the block epigraphs and finite products of neighborhoods.

[F5] [[lem-proper-closed-convex-function-affine-minorant]]: a proper closed convex function on a finite-dimensional Euclidean space has an affine minorant.

[F6] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: adding finite continuous convex $f$ to $g$ preserves properness, closedness and convexity.

[F7] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F8] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: a real-valued lower-semicontinuous function on a nonempty compact Euclidean set attains its minimum.

[F9] [[def-c-one-map-and-local-inverse]] and [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: the $C^1$ smooth term is continuous, as required by [F6].

[F10] [[thm-induction-principle]]: a recurrence bound holding at zero and preserved at successors holds for every finite horizon.

[F11] [[lem-finite-sum-laws]]: finite weighted sums obey additivity and scaling for averaging over block choices and histories.

[A1] $f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle+\frac\mu2\|y-x\|_2^2$ for all $x,y$.

[A2] $M_i=L_{\max}$ for every block, $L_i\le L_{\max}$, and each block is drawn independently and uniformly at every accepted update.

[A3] Each finite-horizon expectation is the sum over the finite product distribution on block histories.

[A4] All update calls through the stated horizon return accepted certificates; if an inner call fails, the conclusion is asserted only for the accepted prefix before failure.

## Proof

1.1 By [F4], $g$ is proper closed convex, so choose $\bar x\in\operatorname{dom}g$. By [F5], $g(x)\ge\langle a,x\rangle+b$ for some $a,b$. Strong convexity at $0$ yields $f(x)\ge f(0)+\langle\nabla f(0),x\rangle+\frac\mu2\|x\|_2^2$, so $F$ is coercive. By [F9], $f$ is continuous, so [F6] gives the closed epigraph of $F$; the map $x\mapsto(x,F(\bar x))$ is continuous, so $S=\{x:F(x)\le F(\bar x)\}$ is its closed preimage. Coercivity makes $S$ bounded, and [F7] makes it compact. It is nonempty and finite-valued, so [F8] gives a global minimizer. If two distinct minimizers existed, strong convexity of $f$ at their midpoint and convexity of $g$ would make $F$ there strictly less than the minimum, a contradiction; thus the minimizer is unique. [A1, F4, F5, F6, F7, F8, F9, given, algebra, choose]

1.2 For any block $i$ and nonzero block displacement $h$, the strong-convexity lower model at $x$ and [F3]'s upper model for $x+U_i h$ share the same linear term. Comparing them gives $\mu\|h\|_2^2/2\le L_i\|h\|_2^2/2$, so $\mu\le L_i\le L_{\max}$. Therefore $\alpha=\mu/L_{\max}$ lies in $(0,1]$ and $q=1-\alpha/n$ lies in $[0,1)$. [A1, F3, given, algebra]

1.3 Fix a current finite point $x$ and let $z_i$ minimize $u\mapsto\langle\nabla_i f(x),u-x_i\rangle+(L_{\max}/2)\|u-x_i\|_2^2+g_i(u)$; [F1]--[F2] give existence. Let $z=(z_i)_i$ and $H_x(w)=f(x)+\langle\nabla f(x),w-x\rangle+(L_{\max}/2)\|w-x\|_2^2+g(w)$. This separates over blocks, so $z$ minimizes $H_x$. For any block candidate $v$, [F3] and $L_i\le L_{\max}$ give $F(x+U_i(v-x_i))\le F(x)+q_i^k(v)-q_i^k(x_i)$. The accepted certificate [F1] gives $q_i^k(x^{k+1}_i)\le q_i^k(z_i)+\epsilon_k$ and $q_i^k(x_i)=g_i(x_i)$, so $F(x^{k+1})\le F(x)+\Delta_i+\epsilon_k$, where $\Delta_i=q_i^k(z_i)-q_i^k(x_i)$. Summing $\Delta_i$ over $i$ gives $H_x(z)-F(x)$. By [F11], uniform averaging yields $\mathbb E[F(x^{k+1})\mid x^k=x]\le(1-1/n)F(x)+H_x(z)/n+\epsilon_k$. [A2, F1, F2, F3, F11, given, algebra]

2.1 Let $x^*$ be the minimizer from step 1.1 and $w=(1-\alpha)x+\alpha x^*$. Convexity of $g$ gives $g(w)\le(1-\alpha)g(x)+\alpha g(x^*)$. Strong convexity in [A1] gives $f(x)+\alpha\langle\nabla f(x),x^*-x\rangle\le(1-\alpha)f(x)+\alpha f(x^*)-(\alpha\mu/2)\|x-x^*\|_2^2$. The quadratic term in $H_x(w)$ is $L_{\max}\alpha^2\|x-x^*\|_2^2/2$; since $\alpha=\mu/L_{\max}$, it cancels the negative term. Hence $H_x(z)\le H_x(w)\le(1-\alpha)F(x)+\alpha F(x^*)$. [A1, F4, step 1.1, step 1.2, step 1.3, algebra]

3.1 By [A4], substitution of step 2.1 into step 1.3 gives, conditionally on the history, $\mathbb E[F(x^{k+1})-F(x^*)\mid x^k]\le q(F(x^k)-F(x^*)) +\epsilon_k$. By [F11] and [A3], taking the finite-history expectation yields $\phi_{k+1}\le q\phi_k+\epsilon_k$, where $\phi_k=\mathbb E[F(x^k)-F(x^*)]$. [A3, A4, F11, step 1.3, step 2.1, algebra]

4.1 Iterating the scalar recurrence gives $\phi_1\le q\phi_0+\epsilon_0$; if $\phi_k\le q^k\phi_0+\sum_{j<k}q^{k-1-j}\epsilon_j$, then multiplying by $q\ge0$ and adding $\epsilon_k$ proves the formula at $k+1$. [F10] induction over $k$ establishes the displayed bound. [F10, step 1.2, step 3.1, algebra] ∎
