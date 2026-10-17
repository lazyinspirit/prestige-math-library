---
id: thm-vector-slutsky
kind: theorem
title: "Vector Slutsky theorem"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-convergence-in-distribution-of-random-elements, def-euclidean-spheres-and-closed-balls, def-metric-space, def-op-and-little-op-stochastic-bounds, def-weak-convergence-of-borel-probability-measures, lem-metrics-on-rn, thm-continuous-mapping-theorem, thm-heine-borel-rn, thm-heine-cantor-metric, thm-metric-open-set-algebra, thm-vector-stochastic-order-calculus]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, PDF pp. 9–11"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 2, Winter 2018, PDF p. 1"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf"
---

## Statement

Let $d,k,m\ge1$ be fixed. For each $n$, let $X_n\in\mathbb R^d$ and $Y_n\in\mathbb R^k$ be random vectors on one probability space; the probability space may vary with $n$. Let $X\in\mathbb R^d$ be a random vector on any probability space, and let $c\in\mathbb R^k$ be constant. If $X_n\Rightarrow X$ and $Y_n-c=o_P(1)$, then
$$ (X_n,Y_n)\Rightarrow(X,c). $$
Consequently, for every continuous $h:\mathbb R^{d+k}\to\mathbb R^m$, $h(X_n,Y_n)\Rightarrow h(X,c)$. No independence between $X_n$ and $Y_n$ is required.

## Facts & Assumptions

**Given:** The random vectors and convergence hypotheses in the statement.

[F1] [[thm-vector-stochastic-order-calculus]]: If $X_n\Rightarrow X$ in a finite-dimensional Euclidean space, then $X_n=O_P(1)$.

[F2] [[def-op-and-little-op-stochastic-bounds]]: $Y_n-c=o_P(1)$ means $P_n(\|Y_n-c\|_2>\varepsilon)\to0$ for each $\varepsilon>0$.

[F3] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space $S$, weak convergence means convergence of integrals for every bounded continuous real-valued function.

[F4] [[thm-heine-borel-rn]]: A subset of finite-dimensional Euclidean space is compact if and only if it is closed and bounded.

[F5] [[thm-heine-cantor-metric]]: A continuous map from a compact metric space to a metric space is uniformly continuous.

[F6] [[thm-continuous-mapping-theorem]]: If $Z_n\Rightarrow Z$ and $g$ is measurable with a $Z$-null discontinuity set, then $g(Z_n)\Rightarrow g(Z)$.

[F7] [[def-convergence-in-distribution-of-random-elements]]: Random elements converge in distribution when their laws converge weakly; they need not share a probability space.

[F8] [[def-euclidean-spheres-and-closed-balls]]: The Euclidean closed ball is the set of vectors whose Euclidean distance from its centre is at most its radius.

[F9] [[lem-metrics-on-rn]]: On $\mathbb R^N$, the Euclidean metric is $d_2(x,y)=\sqrt{\sum_{i<N}(x_i-y_i)^2}$.

[F10] [[def-metric-space]]: A metric satisfies symmetry and the triangle inequality.

[F11] [[thm-metric-open-set-algebra]]: Closed balls are closed subsets of a metric space.

## Proof

**Given:** The objects and hypotheses in the statement. Write $P_n$ for the probability measure carrying $(X_n,Y_n)$.

1.1 By [F1], $X_n=O_P(1)$. Fix a bounded continuous $f:\mathbb R^{d+k}\to\mathbb R$, and let $\eta>0$. The definition of $O_P(1)$ gives $R>0$ with $\limsup_nP_n(\|X_n\|_2>R)\le\eta$. [given, F1]

1.2 Let $K=\overline B_2(0,R)\times\overline B_2(c,1)\subseteq\mathbb R^{d+k}$. The factor balls are closed by [F11]. The coordinate projections are continuous because [F9] gives $d_2(x,x')\le d_2((x,y),(x',y'))$ and the analogous inequality for $y$, so $K$ is closed. For $(x,y)\in K$, [F9] and [F10] give $d_2((x,y),(0,0))^2=\|x\|_2^2+\|y\|_2^2\le R^2+(\|c\|_2+1)^2$, so $K$ is bounded. By [F4], $K$ is compact. By [F5], $f|_K$ is uniformly continuous. For any $\gamma>0$, choose $0<\delta\le1$ such that points of $K$ at distance less than $\delta$ have $f$-values differing by less than $\gamma$. By [F8], on $\{\|X_n\|_2\le R,\ \|Y_n-c\|_2\le\delta/2\}$ both pair values lie in $K$, and their Euclidean distance is at most $\delta/2$. Therefore
$$|E_nf(X_n,Y_n)-E_nf(X_n,c)|\le\gamma+2\|f\|_\infty\bigl(P_n(\|X_n\|_2>R)+P_n(\|Y_n-c\|_2>\delta/2)\bigr).$$
By [F2], the second tail tends to zero. Taking the limiting upper bound, then letting $\gamma$ and $\eta$ decrease to zero, proves that the expectation difference tends to zero. [F2, F4, F5, F8, F9, F10, F11, given, choose, algebra]

2.1 By [F7], $X_n\Rightarrow X$ means weak convergence of its laws. The function $x\mapsto f(x,c)$ is bounded and continuous, so [F3] gives $E_nf(X_n,c)\to E f(X,c)$. Together with step 1.2, bounded-continuous-test convergence gives $(X_n,Y_n)\Rightarrow(X,c)$. [F3, F7, given, step 1.2]

3.1 The map $h$ is continuous everywhere, hence measurable with empty discontinuity set. Apply [F6] to step 2.1 to obtain $h(X_n,Y_n)\Rightarrow h(X,c)$. [F6, step 2.1] ∎