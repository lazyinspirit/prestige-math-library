---
id: thm-online-gradient-descent-regret
kind: theorem
title: Projected online gradient descent has static regret at most three-halves of DG square-root T
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-online-gradient-descent
  - def-static-dynamic-and-strongly-adaptive-regret
  - def-countable-choice
  - def-euclidean-inner-product
  - def-metric-topology
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-jacobian-matrix-and-gradient
  - def-subgradient-and-subdifferential
  - def-hilbert-space
  - thm-euclidean-space-complete
  - thm-projection-onto-a-nonempty-closed-convex-set
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive
  - thm-differentiable-convex-functions-and-gradient-inequality
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only in the nondegenerate D>0, G>0 branch to ensure that every metric projection exists; the degenerate branches and regret algebra are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§3.1, Theorem 3.1 and complete proof, PDF pp. 65–66."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§§11.7.2 and 11.8.1, FTRL regret calculation and projected OGD update, PDF pp. 156–162."
---

## Statement

Let $d,T\ge1$ be integers, let $K\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $D,G\ge0$ be finite bounds such that $\|u-v\|_2\le D$ for all $u,v\in K$ and $\|g_t\|_2\le G$ for every round. Supply $x_1\in K$. On each round, either $f_t$ is differentiable and convex on an open convex neighborhood of $K$ and $g_t=\nabla f_t(x_t)$, or $f_t:C_t\to\mathbb R$ is convex on a convex set $C_t\supseteq K$ and a vector $g_t\in\partial f_t(x_t)$ is supplied with $f_t(u)\ge f_t(x_t)+\langle g_t,u-x_t\rangle$ explicitly required for every $u\in K$; here $\partial f_t(x_t)$ is the set of vectors satisfying that supporting inequality for every point of $C_t$. Run projected online gradient descent with $\eta_t=D/(G\sqrt t)$ when $D,G>0$, and with the no-op branch $x_{t+1}=x_t$ if $D=0$ or $G=0$. Assume the Axiom of Countable Choice only when $D,G>0$. For every realization satisfying these hypotheses and every $u\in K$,
$$\sum_{t=1}^T\bigl(f_t(x_t)-f_t(u)\bigr)\le\frac32DG\sqrt T.$$
If $D=0$ or $G=0$, this sum is nonpositive. Whenever the finite-horizon loss sum attains a finite minimum on $K$, the static regret, defined as $\sum_{t=1}^T f_t(x_t)-\min_{u\in K}\sum_{t=1}^T f_t(u)$, is therefore at most $\frac32DG\sqrt T$.

## Statement references

[[alg-online-gradient-descent]]: the projected update and its degenerate branches.

[[def-static-dynamic-and-strongly-adaptive-regret]]: static regret uses a finite attained minimum.

[[def-metric-topology]]: open neighborhoods and closed subsets are understood in the Euclidean metric topology.

[[def-convex-subset-of-euclidean-space]]: convex sets contain the segment between any two points.

[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity of a real-valued function on its domain.

[[def-jacobian-matrix-and-gradient]]: the gradient is the vector of scalar partial derivatives in Euclidean coordinates.

[[def-subgradient-and-subdifferential]]: the subdifferential consists of vectors satisfying the supporting inequality on the function's domain.

[[def-countable-choice]]: Countable Choice is used only for projection existence in the nondegenerate branch.

[[thm-projection-onto-a-nonempty-closed-convex-set]]: a nonempty closed convex subset of a real Hilbert space has a unique nearest point under Countable Choice.

[[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: the metric projection satisfies the Euclidean variational inequality.

[[lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive]]: the metric projection is continuous.

[[thm-differentiable-convex-functions-and-gradient-inequality]]: the smooth branch satisfies the comparator inequality.

## Facts & Assumptions

**Given:** The dimensions, horizon, decision set, diameter and gradient bounds in the Statement; the initial point and one of the stated smooth or subgradient branches on each round.

[A1] [[def-countable-choice]]: for $D,G>0$, Countable Choice is assumed for the existence theorem for nearest points.

[F1] [[def-euclidean-inner-product]], [[thm-euclidean-space-complete]], and [[def-hilbert-space]]: with the standard dot product and induced norm, $\mathbb R^d$ is a real Hilbert space for $d\ge1$.

[F2] [[thm-projection-onto-a-nonempty-closed-convex-set]]: under Countable Choice, for each $y\in\mathbb R^d$ there is a unique $P_K(y)\in K$ minimizing $\|y-z\|_2$ over $z\in K$.

[F3] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: if $p=P_K(y)$, then $\langle y-p,v-p\rangle\le0$ for every $v\in K$.

[F4] [[lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive]]: $\|P_K(y)-P_K(z)\|_2\le\|y-z\|_2$, so $P_K$ is continuous.

[F5] [[thm-differentiable-convex-functions-and-gradient-inequality]]: for a differentiable convex function on an open convex domain, $f_t(u)\ge f_t(x_t)+\langle\nabla f_t(x_t),u-x_t\rangle$.

[F6] [[def-subgradient-and-subdifferential]]: $g_t\in\partial f_t(x_t)$ gives the supporting inequality on the convex domain, and the Statement explicitly requires it for every $u\in K$.

[F7] [[def-static-dynamic-and-strongly-adaptive-regret]]: static regret uses the finite-horizon minimum only when it is finite and attained.

[F8] [[def-metric-topology]]: a set is closed when its complement is open; open sets contain a ball around each of their points.

[F9] [[def-convex-subset-of-euclidean-space]] and [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: $K$ and the stated loss domains are convex.

[F10] [[def-jacobian-matrix-and-gradient]]: $\nabla f_t(x_t)$ denotes the standard vector of partial derivatives.

## Proof

1.1 If $D=0$, the diameter condition and nonemptiness make $K$ a singleton, so $x_t=u$ and every loss difference is zero. If $G=0$, then $g_t=0$ by the positive-definite Euclidean norm in [F1], and [F5] or [F6] gives $f_t(x_t)-f_t(u)\le0$ on each round; the sum is nonpositive. These branches use no projection and no choice axiom. Hence assume $D,G>0$. [given, F1, F5, F6, algebra]

1.2 By [A1], [F1], [F2], and the closedness of $K$ in the metric topology [F8], the nondegenerate algorithm has a unique projection at every update. If inputs are random, [F4] makes the projection continuous, so composition with the measurable vector operation $x_t-\eta_tg_t$ keeps $x_{t+1}$ measurable. [A1, F1, F2, F4, F8, given, algebra]

2.1 Fix $u\in K$, put $a_t=\|x_t-u\|_2^2$, $y_{t+1}=x_t-\eta_tg_t$, and $x_{t+1}=P_K(y_{t+1})$. By [F3], $\langle y_{t+1}-x_{t+1},u-x_{t+1}\rangle\le0$, whence $\|y_{t+1}-u\|_2^2-\|x_{t+1}-u\|_2^2=\|y_{t+1}-x_{t+1}\|_2^2+2\langle y_{t+1}-x_{t+1},x_{t+1}-u\rangle\ge0$. Expanding $y_{t+1}$ therefore gives $a_{t+1}\le a_t-2\eta_t\langle g_t,x_t-u\rangle+\eta_t^2\|g_t\|_2^2$. [F1, F3, step 1.2, given, algebra]

3.1 The stated domains are convex by [F9], and [F10] identifies the smooth-branch vector $g_t$ with the gradient in Euclidean coordinates. Thus in the smooth branch [F5] gives $f_t(x_t)-f_t(u)\le\langle g_t,x_t-u\rangle$; in the nonsmooth branch the same inequality is an explicit hypothesis in the Statement and follows from [F6]. Rearranging step 2.1 and using $\|g_t\|_2\le G$ yields $f_t(x_t)-f_t(u)\le(a_t-a_{t+1})/(2\eta_t)+\eta_tG^2/2$. [F5, F6, F9, F10, given, step 2.1, algebra]

4.1 Since $x_t,u\in K$, the diameter hypothesis gives $0\le a_t\le D^2$ for every $t$, while $a_{T+1}\ge0$. Also $1/\eta_t=G\sqrt t/D$ is nondecreasing because $D,G>0$. Summing step 3.1 gives $\sum_{t=1}^T(f_t(x_t)-f_t(u))\le D^2/(2\eta_T)+(G^2/2)\sum_{t=1}^T\eta_t$. The exact telescoping identity is $\sum_{t=1}^T(a_t-a_{t+1})/\eta_t=a_1/\eta_1+\sum_{t=2}^T a_t(1/\eta_t-1/\eta_{t-1})-a_{T+1}/\eta_T$. Every coefficient $1/\eta_t-1/\eta_{t-1}$ is nonnegative, so $a_t\le D^2$ and $a_{T+1}\ge0$ bound this by $D^2(1/\eta_1+\sum_{t=2}^T(1/\eta_t-1/\eta_{t-1}))=D^2/\eta_T$. [given, step 3.1, algebra]

5.1 With $\eta_t=D/(G\sqrt t)$, the first term in step 4.1 is $DG\sqrt T/2$. For every integer $t\ge1$, $1/\sqrt t\le2(\sqrt t-\sqrt{t-1})$ because $\sqrt t+\sqrt{t-1}\le2\sqrt t$; summing telescopically gives $\sum_{t=1}^T1/\sqrt t\le2\sqrt T$. Thus the second term is at most $DG\sqrt T$, proving the pointwise comparator bound. [given, step 4.1, algebra]

6.1 If the finite-horizon loss sum attains a finite minimum at $u^\star\in K$, substitute $u^\star$ into the bound just proved. The left side becomes the static regret of [F7], giving the stated static-regret consequence. [F7, step 5.1, algebra] ∎
