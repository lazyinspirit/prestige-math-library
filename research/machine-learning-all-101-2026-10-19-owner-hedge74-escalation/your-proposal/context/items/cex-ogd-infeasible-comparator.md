---
id: cex-ogd-infeasible-comparator
kind: counterexample
title: The projected OGD bound does not cover infeasible comparators
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-online-gradient-descent
  - thm-online-gradient-descent-regret
  - def-euclidean-inner-product
  - def-metric-topology
  - def-interval
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-jacobian-matrix-and-gradient
  - thm-projection-onto-a-nonempty-closed-convex-set
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§3.1, Theorem 3.1 comparator condition and proof, PDF pp. 65–66."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§11.8.1, projected OGD update, PDF pp. 161–162."
---

## Statement refuted

**Refuted claim:** For integers $d,T\ge1$, let $K\subseteq\mathbb R^d$ be nonempty, closed, and convex with diameter at most a finite $D>0$. Let each $f_t:\mathbb R^d\to\mathbb R$ be differentiable and convex on an open convex neighborhood of $K$, and suppose the projected online-gradient algorithm starts at $x_1\in K$, uses $\eta_t=D/(G\sqrt t)$ for finite $G>0$, and has $\|\nabla f_t(x_t)\|_2\le G$ on every round. Assume Countable Choice for the metric projections. The refuted claim is that
$$
\sum_{t=1}^T(f_t(x_t)-f_t(u))\le\frac32DG\sqrt T
$$
holds for every comparator $u\in\mathbb R^d$, including points outside $K$.

## Statement references

[[thm-online-gradient-descent-regret]]: its stated comparator belongs to $K$.

## Facts & Assumptions

**Given:** The projected OGD algorithm, $K=[0,1]$, diameter bound $D=1$, horizon $T=2$, losses $f_t:\mathbb R\to\mathbb R$ defined by $f_t(x)=-x$ for $t=1,2$, initial point $x_1=0$, gradient bound $G=1$, and infeasible comparator $u=2$.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the nondegenerate projection updates.

[F1] [[alg-online-gradient-descent]]: $\eta_t=D/(G\sqrt t)$ and $x_{t+1}=P_K(x_t-\eta_tg_t)$ when $D,G>0$.

[F2] [[def-euclidean-inner-product]]: in $\mathbb R$, $\|x\|_2=|x|$.

[F3] [[def-interval]] and [[def-convex-subset-of-euclidean-space]]: $[0,1]$ is a nonempty convex set.

[F4] [[def-metric-topology]]: a set is closed when its complement is open.

[F5] [[def-jacobian-matrix-and-gradient]]: the gradient of a scalar-valued differentiable function on $\mathbb R$ is its ordinary derivative.

[F6] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: $p=P_K(z)$ exactly when $(z-p)(v-p)\le0$ for every $v\in K$.

[F7] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: a function is convex when it lies below the chord between any two points of its convex domain.

[F8] [[thm-projection-onto-a-nonempty-closed-convex-set]]: under Countable Choice, the metric projection onto $K$ exists and is unique.

## Counterexample

**Proof technique:** direct.

1.1 The interval $K=[0,1]$ is nonempty. For $v,w\in K$ and $\lambda\in[0,1]$, $0\le(1-\lambda)v+\lambda w\le(1-\lambda)+\lambda=1$, so [F3] makes it convex. Its complement is $(-\infty,0)\cup(1,\infty)$. If $z<0$, the ball of radius $-z/2$ about $z$ lies in $(-\infty,0)$; if $z>1$, the ball of radius $(z-1)/2$ about $z$ lies in $(1,\infty)$. Thus [F4] makes $K$ closed. Its diameter is $D=1$ because $|v-w|\le1$ for $v,w\in[0,1]$ and the endpoints attain distance $1$. [F2, F3, F4, given, algebra]

1.2 For each $t$ and $h\ne0$, $(f_t(x+h)-f_t(x))/h=(-(x+h)+x)/h=-1$, so the derivative is $g_t=-1$ by [F5]; the affine identity $f_t((1-\lambda)x+\lambda y)=(1-\lambda)f_t(x)+\lambda f_t(y)$ and [F7] show convexity. Also $|g_t|=1=G$. [F2, F5, F7, given, algebra]

2.1 By [A1] and [F8], both metric projections exist uniquely. Since $D=G=1$, $\eta_1=1$ and $\eta_2=1/\sqrt2$. The first unprojected point is $x_1-\eta_1g_1=1$; for every $v\in[0,1]$, $(1-1)(v-1)=0$, so [F6] gives $x_2=P_K(1)=1$. The next unprojected point is $x_2-\eta_2g_2=1+1/\sqrt2>1$; for every $v\in[0,1]$, $(1+1/\sqrt2-1)(v-1)\le0$, so [F6] gives $x_3=P_K(1+1/\sqrt2)=1$. [A1, F1, F6, F8, step 1.1, step 1.2, algebra]

3.1 The learner's two played losses sum to $f_1(x_1)+f_2(x_2)=0-1=-1$, whereas the infeasible comparator has $\sum_{t=1}^2f_t(2)=-4$. Its regret is therefore $3$. [given, step 1.1, step 2.1, algebra]

4.1 The proposed right-hand side is $\frac32\cdot1\cdot1\cdot\sqrt2=\frac32\sqrt2<3$, since $\sqrt2<2$. Thus the regret inequality fails for $u=2\notin K$. [given, step 3.1, algebra] ∎
