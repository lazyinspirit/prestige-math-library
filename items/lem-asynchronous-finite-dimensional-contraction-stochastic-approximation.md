---
id: lem-asynchronous-finite-dimensional-contraction-stochastic-approximation
kind: lemma
title: Coordinate-wise stochastic approximation converges to a contraction fixed point
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - lem-bounded-square-summable-martingale-difference-series-converges
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-martingale-difference-sequence
  - def-max-min
  - lem-finite-set-has-max
  - def-limsup-and-liminf-of-nonnegative-extended-sequences
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John N. Tsitsiklis, Asynchronous Stochastic Approximation and Q-Learning"
      url: "https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf"
      locator: "§§2–6, especially Assumptions 2–5 and Theorem 3; the no-delay bounded-noise case is proved locally."
---

## Statement

Assume the Axiom of Choice. Let $I$ be a nonempty finite set and put $\|x\|_\infty=\max_{i\in I}|x(i)|$ for $x\in\mathbb R^I$. Let $T:\mathbb R^I\to\mathbb R^I$ satisfy

$$\|T(x)-T(y)\|_\infty\le q\|x-y\|_\infty\qquad(x,y\in\mathbb R^I)$$

for a fixed $0\le q<1$, and let $x^*\in\mathbb R^I$ satisfy $T(x^*)=x^*$. On a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_n)_{n\ge0},P)$, let $x_0\in\mathbb R^I$ be deterministic, let $I_n\in I$ be $\mathcal F_n$-measurable, and define $N_n(i)=\#\{k<n:I_k=i\}$. For each $i\in I$, let $\alpha_k(i)$ be deterministic with $0\le\alpha_k(i)\le1$, $\sum_{k\ge0}\alpha_k(i)=\infty$, and $\sum_{k\ge0}\alpha_k(i)^2<\infty$. Let $(\xi_{n+1})_{n\ge0}$ be a bounded martingale-difference sequence relative to the filtration. Update

$$x_{n+1}(i)=x_n(i)+\mathbf1_{\{I_n=i\}}\alpha_{N_n(i)}(i)\big((T(x_n))(i)-x_n(i)+\xi_{n+1}\big)\qquad(i\in I).$$

If every $i\in I$ is selected infinitely often almost surely and the iterates $x_n$ are bounded almost surely, then $x_n\to x^*$ almost surely in $\|\cdot\|_\infty$.

## Statement references

[Tsitsiklis, *Asynchronous Stochastic Approximation and Q-Learning*](https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf).

## Facts & Assumptions

**Given:** The Axiom of Choice, the finite index set, the contraction and fixed point, filtration, bounded martingale-difference noise, deterministic per-coordinate step sizes, infinite visitation, and bounded iterates in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is assumed for the conditional-expectation classes used in the martingale-difference definition.

[F1] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_n\subseteq\mathcal F_{n+1}$.

[F2] [[def-martingale-difference-sequence]]: $\xi_{n+1}$ is $\mathcal F_{n+1}$-measurable and integrable, and $E[\xi_{n+1}\mid\mathcal F_n]=0$ almost surely.

[F3] [[lem-finite-set-has-max]]: every nonempty finite set of real numbers has an attained maximum, so the displayed sup norm is finite and well defined.

[F4] [[lem-bounded-square-summable-martingale-difference-series-converges]]: if $D_{n+1}$ is bounded martingale-difference noise and $B_{n+1}$ is $\mathcal F_n$-measurable with an almost-sure deterministic square-sum bound, then $\sum_{n\ge0}B_{n+1}D_{n+1}$ converges almost surely.

[F5] [[def-limsup-and-liminf-of-nonnegative-extended-sequences]]: for a bounded nonnegative sequence $(a_n)$, $\limsup a_n=\inf_N\sup_{k\ge N}a_k$ and is nonnegative.

## Proof

**Given:** All hypotheses and conventions in the Statement.

1.1 Fix $i\in I$ and put $B_{n+1}^{(i)}=\mathbf1_{\{I_n=i\}}\alpha_{N_n(i)}(i)$. The indicator and visit count are $\mathcal F_n$-measurable, so $B_{n+1}^{(i)}$ is $\mathcal F_n$-measurable. Each visit to $i$ contributes one term $\alpha_k(i)^2$ to $\sum_{n\ge0}(B_{n+1}^{(i)})^2$, hence this sum is at most $\sum_{k\ge0}\alpha_k(i)^2<\infty$. By [F2], [F4], and the bound on $\xi$, the series $\sum_{n\ge0}B_{n+1}^{(i)}\xi_{n+1}$ converges almost surely. Since $I$ is finite, these convergence events hold simultaneously for all $i$ outside one null set. [given, A1, F1, F2, F4, F3, construct]

2.1 Fix an outcome in that full-measure event where all coordinates are visited infinitely often and the iterates are bounded. For a fixed $i$, let $\tau_i(k)$ be the time of the $(k+1)$st update of coordinate $i$, put $z_0=x_0(i)-x^*(i)$ and $z_{k+1}=x_{\tau_i(k)+1}(i)-x^*(i)$, and let $u_k=(T(x_{\tau_i(k)}))(i)-x^*(i)$ and $v_k=\alpha_k(i)\xi_{\tau_i(k)+1}$. Before the $(k+1)$st update, coordinate $i$ still has its value after the first $k$ updates, so the update and $T(x^*)=x^*$ give $z_{k+1}=(1-\alpha_k(i))z_k+\alpha_k(i)u_k+v_k$. By step 1.1, $\sum_{k\ge0}v_k$ converges; put $e_k=\sum_{j\ge k}v_j$, so $e_k\to0$. For $y_k=z_k+e_k$, the identity $e_k=v_k+e_{k+1}$ gives $y_{k+1}=(1-\alpha_k(i))y_k+\alpha_k(i)(u_k+e_k).$ [given, F4, step 1.1, algebra]

3.1 Let $U_i=\limsup_{k\to\infty}|u_k|$, which is finite because the iterates are bounded and $T$ is a contraction. For every $\varepsilon>0$, eventually $|u_k+e_k|\le U_i+2\varepsilon$. Iterating the convex-combination recurrence in step 2.1 from such an index $m$ bounds $|y_k|$ by a vanishing multiple of $|y_m|$ plus $U_i+2\varepsilon$: the coefficient of $|y_m|$ is $\prod_{j=m}^{k-1}(1-\alpha_j(i))$, which tends to zero since $\prod_{j=m}^{k-1}(1-\alpha_j(i))\le\frac{1}{1+\sum_{j=m}^{k-1}\alpha_j(i)}\longrightarrow0.$ Thus $\limsup_k|y_k|\le U_i+2\varepsilon$. Letting $\varepsilon\downarrow0$ and using $e_k\to0$ yields $\limsup_k|z_k|\le U_i$. [given, F5, step 2.1, algebra]

4.1 Put $E=\limsup_{n\to\infty}\|x_n-x^*\|_\infty$, finite by boundedness. For every $\varepsilon>0$, eventually $\|x_n-x^*\|_\infty\le E+\varepsilon$. Since $\tau_i(k)\to\infty$, contraction gives $|u_k|=|(T(x_{\tau_i(k)}))(i)-(T(x^*))(i)|\le q\|x_{\tau_i(k)}-x^*\|_\infty$, so $U_i\le qE$. Step 3.1 gives $\limsup_k|z_k|\le qE$. Coordinate $i$ is constant between updates; since the number of its updates tends to infinity, its full-time limsup error equals the limsup of the post-update sequence $|z_k|$. Also, for finite $I$, taking a tail supremum commutes with the finite maximum, and the decreasing tail suprema commute with a finite maximum when taking their infimum; hence $E=\max_{i\in I}\limsup_n|x_n(i)-x^*(i)|$. Therefore $E\le qE$, and $0\le q<1$ forces $E=0$. Thus $\|x_n-x^*\|_\infty\to0$ on the full-measure event, proving almost-sure convergence. [given, F3, F5, step 3.1, algebra] ∎

