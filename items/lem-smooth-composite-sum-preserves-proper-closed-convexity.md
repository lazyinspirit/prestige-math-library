---
id: lem-smooth-composite-sum-preserves-proper-closed-convexity
kind: lemma
title: "A finite continuous convex summand preserves proper closed convexity"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
  - def-metric-space
  - def-metric-topology
  - def-metric-ball
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.1"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Statement

Let $f:\mathbb R^n\to\mathbb R$ be continuous and convex, and let $g:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed and convex under the epigraph convention of [[def-proper-closed-convex-function-on-rn]]. Then $F=f+g$ is proper, closed and convex in the same convention.

## Facts & Assumptions

**Given:** The functions and hypotheses in the Statement.

[F1] [[def-proper-closed-convex-function-on-rn]]: $g$ has a nonempty effective domain, is convex, and has a closed epigraph.

[F2] [[def-convex-and-strictly-convex-functionals-on-a-banach-space]]: convexity means the Jensen inequality for every pair of finite-domain points and $0\le\theta\le1$.

[F3] The usual Euclidean topology has open balls about each point, and a set is closed exactly when its complement is open ([[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]]).

## Proof

1.1 Since $\operatorname{dom}g\ne\varnothing$, choose $x_0$ with $g(x_0)<+\infty$. The value $f(x_0)$ is real, so $F(x_0)<+\infty$ and $F$ is proper. [F1, given, choose]

1.2 For $x,y$ with finite $F$ and $0\le\theta\le1$, both $g(x),g(y)$ are finite. Applying convexity separately to $f$ and $g$ and adding gives $F((1-\theta)x+\theta y)\le(1-\theta)F(x)+\theta F(y)$; if either value of $F$ is $+\infty$, the extended-real convexity inequality is automatic. Thus $F$ is convex. [F1, F2, given, algebra]

2.1 For $r\in\mathbb R$, let $\Phi(x,s)=(x,s-f(x))$. It is continuous: the first coordinates are unchanged, while continuity of $f$ makes the last coordinate $s-f(x)$ continuous. The identity $\operatorname{epi}F=\Phi^{-1}(\operatorname{epi}g)$ follows by rearranging $f(x)+g(x)\le s$, including points where $g(x)=+\infty$. If a point lies outside $\operatorname{epi}F$, its image lies outside the closed set $\operatorname{epi}g$, so an open ball about that image misses $\operatorname{epi}g$; continuity of $\Phi$ supplies a neighborhood of the original point mapped into that ball. Hence the complement of $\operatorname{epi}F$ is open and $F$ is closed. [F1, F3, given, algebra] ∎