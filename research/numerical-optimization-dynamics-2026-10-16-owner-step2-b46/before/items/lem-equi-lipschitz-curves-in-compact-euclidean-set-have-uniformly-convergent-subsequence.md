---
id: lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence
kind: lemma
title: Compactness of equi-Lipschitz curves with values in a compact Euclidean set
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
axiom_use: No choice axiom is used; finite lattice patterns and least subsequence indices are selected by fixed orders on finite sets and on the natural numbers.
deps:
  - thm-heine-borel-rn
  - thm-of-archimedean
  - thm-reals-cauchy-complete
  - thm-well-ordering-principle
  - thm-recursion
  - def-metric-topology
  - def-metric-ball
  - def-metric-convergence
  - lem-integer-part
  - def-integer-power
  - lem-geometric-sequence-null
  - thm-induction-principle
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; projected-dynamics existence via compactness; the finite-lattice subsequence proof here is local.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slides 301–303; projected iterations and their use of a projection variational inequality.
---

## Statement

Let $d\ge1$, $T>0$, and let $C\subseteq\mathbb R^d$ be nonempty, compact, and closed. Let $M\ge0$. If $u_j:[0,T]\to C$ satisfies
$$\|u_j(t)-u_j(s)\|_2\le M|t-s|\qquad(j\ge1,\ s,t\in[0,T]),$$
then some subsequence converges uniformly to a map $u:[0,T]\to C$ with the same Lipschitz bound.

## Facts & Assumptions

**Given:** The set $C$, interval $[0,T]$, constant $M$, and sequence of maps in the Statement. Compactness has its open-cover meaning; the Lipschitz inequality is displayed in the Statement.

[F1] [[thm-heine-borel-rn]]: every compact subset of $\mathbb R^d$ is bounded; [[thm-of-archimedean]]: the natural numbers are cofinal in $\mathbb R$, so a bounded set is contained in a box $[-R,R]^d$ for some integer $R\ge1$.

[F2] [[def-metric-topology]]: a closed set has open complement; [[def-metric-ball]]: every open neighborhood of a point contains an open ball about it.

[F3] [[def-metric-convergence]]: if a sequence converges to $x$, then it is eventually in every open ball centered at $x$.

[F4] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers converges in $\mathbb R$.

[F5] [[thm-well-ordering-principle]] and [[thm-recursion]]: every nonempty subset of $\mathbb N$ has a least element, and a uniquely specified recursive sequence on $\mathbb N$ exists.

[F6] [[lem-integer-part]]: for each real $a$ there is an integer $m$ with $m\le a<m+1$.

[F7] [[def-integer-power]] and [[lem-geometric-sequence-null]]: $2^{-r}=(1/2)^r\to0$ as $r\to\infty$.

[F8] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $\|x\|_2^2=\sum_{k<d}x_k^2$, each coordinate satisfies $|x_k|\le\|x\|_2$, and the Euclidean norm satisfies the triangle inequality.

[F9] [[thm-induction-principle]]: every finite initial segment $\{0,\ldots,N\}$ of $\mathbb N$ is finite.

## Proof

1.1 By [F1], choose an integer $R\ge1$ with $C\subseteq[-R,R]^d$. For each natural $r\ge1$, let $\Gamma_r=\{kT/2^r:0\le k\le2^r\}$ and put $K_r=(R+1)2^r$. Let $G_r$ consist of the lattice points whose coordinates are $m_k2^{-r}$ with integers $-K_r\le m_k\le K_r$. Each coordinate index set is finite: its nonnegative and negative parts are copies of finite natural initial segments, which are finite by [F9]; induction on the finite number $d$ of coordinates shows their Cartesian product $G_r$ is finite. To verify its covering radius, fix $x\in[-R,R]^d$. For each $k<d$, [F6] applied to $2^rx_k$ gives an integer $m_k$ with $m_k\le2^rx_k<m_k+1$. Thus $m_k\le R2^r\le K_r$ and $m_k>-R2^r-1\ge-(R+1)2^r=-K_r$, using $1\le2^r$ for $r\ge1$ (from the power recursion and induction). The corresponding lattice point $g$ has $|x_k-g_k|<2^{-r}$ in every coordinate, so [F8] gives $\|x-g\|_2^2=\sum_{k<d}|x_k-g_k|^2<d2^{-2r}$ and hence $\|x-g\|_2<\delta_r:=\sqrt d\,2^{-r}$. Assign each value $u_j(t)$ at each $t\in\Gamma_r$ to the first lattice point within $\delta_r$ in a fixed ordering of $G_r$. This gives one of finitely many patterns. [F1, F6, F8, F9, given, choose]

2.1 Starting from $I_0=\mathbb N$, partition each infinite index set $I_{r-1}$ by the finitely many patterns at resolution $r$. At least one class is infinite; choose the first such pattern in the fixed finite ordering and let $I_r$ be its infinite class. Then $I_r\subseteq I_{r-1}$. [step 1.1, F5, given, choose]

3.1 Recursively choose $n_r$ to be the least member of $I_r$ greater than $n_{r-1}$, taking $n_0=0$. The infinite set $I_r$ is unbounded: if it were contained in some finite initial segment $\{0,\ldots,N\}$, that segment would be finite by [F9], contradicting that $I_r$ is infinite. Hence $\{n\in I_r:n>n_{r-1}\}$ is nonempty, and [F5] supplies its least member. For every fixed $r$, all $n_k$ with $k\ge r$ belong to $I_r$, so the maps with those indices have the same resolution-$r$ pattern. [step 2.1, F5, F9, choose]

4.1 For $k,l\ge r$ and $t\in[0,T]$, choose $s\in\Gamma_r$ with $|t-s|\le T/2^r$. At each lattice time, the common pattern assigns both values to the same lattice point, so the triangle inequality [F8] gives $\|u_{n_k}(s)-u_{n_l}(s)\|_2\le2\delta_r$. Using the Lipschitz bounds and the triangle inequality again,
$$\|u_{n_k}(t)-u_{n_l}(t)\|_2\le\|u_{n_k}(t)-u_{n_k}(s)\|_2+\|u_{n_k}(s)-u_{n_l}(s)\|_2+\|u_{n_l}(s)-u_{n_l}(t)\|_2\le2M T/2^r+2\delta_r.$$
By [F7], the right side tends to zero as $r\to\infty$, uniformly in $t$, so $(u_{n_k})$ is uniformly Cauchy. [step 3.1, F7, F8, given, choose, algebra]

5.1 At each $t$, step 4.1 and [F8] make every coordinate sequence $u_{n_k}(t)_j$ Cauchy; [F4] therefore gives a pointwise limit $u(t)\in\mathbb R^d$. Given $\varepsilon>0$, choose $r$ so $\rho_r:=2MT/2^r+2\delta_r<\varepsilon$, using [F7]. For every $k\ge r$, step 4.1 gives $\sum_{j<d}|u_{n_k}(t)_j-u_{n_l}(t)_j|^2\le\rho_r^2$ for all $l\ge r$ and all $t$. Passing to the coordinatewise limit in this finite sum yields $\sum_{j<d}|u_{n_k}(t)_j-u(t)_j|^2\le\rho_r^2$, hence $\|u_{n_k}(t)-u(t)\|_2\le\rho_r<\varepsilon$, uniformly in $t$. Thus the subsequence converges uniformly. If $u(t)\notin C$, openness of the complement [F2] gives a ball about $u(t)$ disjoint from $C$, while convergence [F3] puts $u_{n_k}(t)$ in that ball eventually, a contradiction. Thus $u(t)\in C$. For fixed $s,t$, coordinatewise convergence at those two points gives $\sum_{j<d}|u(t)_j-u(s)_j|^2=\lim_k\sum_{j<d}|u_{n_k}(t)_j-u_{n_k}(s)_j|^2\le M^2|t-s|^2$; taking nonnegative square roots yields $\|u(t)-u(s)\|_2\le M|t-s|$. [F2, F3, F4, F7, F8, step 4.1, given] ∎
