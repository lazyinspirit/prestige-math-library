---
id: lem-bounded-local-displacement-on-a-geodesic-space-implies-coarse-lipschitz
kind: lemma
title: "Bounded local displacement on a geodesic space implies coarse Lipschitz control"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geodesic-and-geodesic-metric-space, def-coarse-lipschitz-map-and-quasi-isometric-embedding, thm-of-archimedean, thm-well-ordering-principle]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a geodesic metric space and $Y$ a metric space. Suppose
$f : X \to Y$ satisfies
$$d_Y(f(x),f(y)) \le C \qquad \text{whenever } d_X(x,y) \le 1,$$
for some real $C \ge 0$. Then $f$ is coarse Lipschitz; more precisely,
$$d_Y(f(x),f(y)) \le C\, d_X(x,y) + C \qquad \text{for all } x,y \in X.$$

## Facts & Assumptions

**Given:** A geodesic metric space $X$, a metric space $Y$, a map $f : X \to Y$, and a real $C \ge 0$ such that $d_Y(f(x),f(y)) \le C$ whenever $d_X(x,y) \le 1$.

[L1] In a geodesic metric space, every two points $x,y$ are joined by a geodesic segment $\gamma : [0,\ell] \to X$ of length $\ell = d_X(x,y)$ ([[def-geodesic-and-geodesic-metric-space]]).

[L2] A map is coarse Lipschitz when there are reals $A,B \ge 0$ with $d_Y(f(x),f(y)) \le A\,d_X(x,y)+B$ for all $x,y$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L3] The Archimedean property says that for every real $t$ there is a natural number $m$ with $t < m$ ([[thm-of-archimedean]]).

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x,y \in X$. If $d_X(x,y) \le 1$, the displayed hypothesis already gives $d_Y(f(x),f(y)) \le C \le C\,d_X(x,y)+C$. [given, algebra]

1.2 Suppose $d_X(x,y) > 1$. By [L1], choose a geodesic $\gamma : [0,\ell] \to X$ from $x$ to $y$ with $\ell = d_X(x,y)$. By [L3] and [L4], let $m$ be the least natural number with $\ell \le m$. Then $m-1 < \ell \le m$, so $m \le \ell + 1$. [L1, L3, L4, choose]

2.1 Put $x_i := \gamma(i\ell/m)$ for $0 \le i \le m$. Consecutive points satisfy $d_X(x_{i-1},x_i)=\ell/m \le 1$, so the hypothesis gives $d_Y(f(x_{i-1}),f(x_i)) \le C$ for every $i$. Summing along the chain yields $d_Y(f(x),f(y)) \le mC \le C\ell + C = C\,d_X(x,y)+C$. [given, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 give the displayed global bound for all $x,y$, so [L2] makes $f$ coarse Lipschitz. [L2, step 1.1, step 2.1] ∎
