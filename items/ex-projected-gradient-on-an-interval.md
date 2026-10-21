---
id: ex-projected-gradient-on-an-interval
kind: example
title: A projected gradient step on an interval
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-online-gradient-descent
  - def-euclidean-inner-product
  - def-metric-topology
  - def-interval
  - def-convex-subset-of-euclidean-space
  - def-subgradient-and-subdifferential
  - thm-projection-onto-a-nonempty-closed-convex-set
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§3.1, Algorithm 8 and Theorem 3.1 proof, PDF pp. 63–66."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§11.8.1, projected online-gradient update, PDF pp. 161–162."
---

## Example

Assume Countable Choice for the nondegenerate projection step. For $K=[0,1]\subset\mathbb R$, let $P_K(z)$ be the point in $K$ minimizing $|z-v|$. Then $P_K(z)=0$ for $z<0$, $P_K(z)=z$ for $0\le z\le1$, and $P_K(z)=1$ for $z>1$. In one OGD round take $D=1$, $G=2$, $x_1=1/4$, and $f_1(x)=2x$ with supplied subgradient $g_1=2$. Then $\eta_1=1/2$, the unprojected point is $y_2=-3/4$, and the projected point is $x_2=0$. The number line places the trial point to the left of the thick segment $K$ and marks its nearest point at the left endpoint.

```tikz
\begin{tikzpicture}[x=2cm,y=1cm]
\draw[->] (-1.05,0) -- (1.35,0);
\draw[ultra thick] (0,0) -- (1,0);
\fill (-0.75,0) circle (1.5pt) node[above] {$y_2=-3/4$};
\fill (0,0) circle (1.5pt) node[below] {$x_2=P_K(y_2)=0$};
\fill (1,0) circle (1.5pt) node[below] {$1$};
\node[above] at (0.5,0.2) {$K=[0,1]$};
\end{tikzpicture}
```

## Example references

[[alg-online-gradient-descent]]: the step-size and projected update.

[[def-countable-choice]]: Countable Choice for the nondegenerate projection branch.

[[def-interval]]: the closed interval $[0,1]$ is nonempty when its endpoints are ordered.

[[def-metric-topology]]: closedness in the real Euclidean metric.

[[def-convex-subset-of-euclidean-space]]: convexity of the decision set.

[[def-subgradient-and-subdifferential]]: the supporting-inequality meaning of the supplied vector $g_1$.

[[def-euclidean-inner-product]]: the norm used for the diameter and gradient bounds.

[[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: the criterion used to verify the interval projection.

## Facts & Assumptions

**Given:** $K=[0,1]$, $f_1(x)=2x$, $x_1=1/4$, $D=1$, and $G=2$.

[A1] [[def-countable-choice]]: the nondegenerate OGD update uses Countable Choice through the metric-projection existence theorem.

[F1] [[def-interval]]: $[0,1]=\{x\in\mathbb R:0\le x\le1\}$.

[F2] [[def-metric-topology]]: a set is closed when its complement is open, and an open set contains a ball around each of its points.

[F3] [[def-convex-subset-of-euclidean-space]]: a set is convex when it contains every convex combination of two of its points.

[F4] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: $p=P_K(z)$ if and only if $\langle z-p,v-p\rangle\le0$ for every $v\in K$.

[F5] [[def-subgradient-and-subdifferential]]: $g$ is a subgradient at $x$ if $f(v)\ge f(x)+\langle g,v-x\rangle$ for every point $v$ of the convex domain.

[F6] [[alg-online-gradient-descent]]: when $D,G>0$, $\eta_t=D/(G\sqrt t)$ and $x_{t+1}=P_K(x_t-\eta_tg_t)$.

[F7] [[def-euclidean-inner-product]]: on $\mathbb R$, $\|g\|_2=|g|$.

[F8] [[thm-projection-onto-a-nonempty-closed-convex-set]]: under Countable Choice, the metric projection onto $K$ exists and is unique.

## Verification

1.1 The interval $[0,1]$ is nonempty because $0\in K$. For $u,v\in K$ and $\lambda\in[0,1]$, $0\le(1-\lambda)u+\lambda v\le(1-\lambda)+\lambda=1$, so [F3] makes $K$ convex. Its complement is $(-\infty,0)\cup(1,\infty)$. If $z<0$, the ball of radius $-z/2$ about $z$ lies in $(-\infty,0)$; if $z>1$, the ball of radius $(z-1)/2$ about $z$ lies in $(1,\infty)$. Thus the complement is open by [F2], so $K$ is closed. Also $|u-v|\le1$ for $u,v\in K$, with equality at the endpoints, so its diameter is $1$. [F1, F2, F3, given, algebra]

1.2 By [A1] and [F8], the projection exists uniquely. If $z<0$, then for every $v\in[0,1]$, $(z-0)(v-0)\le0$, so [F4] and uniqueness give $P_K(z)=0$. If $0\le z\le1$, then $z\in K$ and its distance to itself is zero, so $P_K(z)=z$. If $z>1$, then $(z-1)(v-1)\le0$ for every $v\in[0,1]$, and [F4] and uniqueness give $P_K(z)=1$. These cases prove the stated projection formula. [A1, F1, F4, F8, cases]

2.1 For every $v\in\mathbb R$, $f_1(v)=2v=f_1(x_1)+2(v-x_1)$, so [F5] makes $g_1=2$ a valid subgradient and [F7] gives $\|g_1\|_2=2=G$. Hence [F6] gives $\eta_1=1/2$ and $y_2=x_1-\eta_1g_1=1/4-1=-3/4$. By step 1.2, $x_2=P_K(y_2)=0$. [F5, F6, F7, given, step 1.2, algebra] ∎
