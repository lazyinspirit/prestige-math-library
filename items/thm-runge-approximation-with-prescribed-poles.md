---
id: thm-runge-approximation-with-prescribed-poles
kind: theorem
title: "Runge approximation with a prescribed pole set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rational-approximation-with-a-runge-pole-set,
       lem-cauchy-riemann-sums-give-rational-approximation,
       lem-runge-pole-pushing-lemma]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 9.2.3"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Theorem 4.4.3"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $K\subseteq\mathbb C$ be compact, let $U$ be an open neighbourhood of $K$,
let $f:U\to\mathbb C$ be holomorphic, and let
$P\subseteq\widehat{\mathbb C}\setminus K$ be a Runge pole set for $K$. Then for
every $\varepsilon>0$ there is a rational function $r$ with poles only in $P$
such that

$$\sup_{z\in K}|f(z)-r(z)|<\varepsilon.$$

## Facts & Assumptions

**Given:** A compact set $K$, a holomorphic function $f$ on a neighbourhood of
$K$, a Runge pole set $P$, and a tolerance $\varepsilon>0$.

[L1] The Cauchy integral over a suitable enclosing cycle can be approximated
uniformly on $K$ by rational functions with poles on that cycle
([[lem-cauchy-riemann-sums-give-rational-approximation]]).

[L2] A Runge pole set meets every complementary component of
$\widehat{\mathbb C}\setminus K$
([[def-rational-approximation-with-a-runge-pole-set]]).

[L3] A simple pole may be pushed through one complementary component to any
chosen representative in that component, or to $\infty$ in the unbounded case
([[lem-runge-pole-pushing-lemma]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a rational function $r_0(z)=\sum_{\nu=1}^{N}c_\nu/(z-a_\nu)$ whose poles $a_\nu$ lie in $\widehat{\mathbb C}\setminus K$ and such that $\sup_{z\in K}|f(z)-r_0(z)|<\varepsilon/2$. [given, L1, construct]

2.1 If $N=0$, then $r_0$ already has no finite poles, so its poles are contained in $P$ and step 1.1 already proves the theorem. Assume from now on that $N\ge1$. [step 1.1, cases]

3.1 For each pole $a_\nu$, let $C_\nu$ be the connected component of $\widehat{\mathbb C}\setminus K$ containing it. By [L2], choose $p_\nu\in P\cap C_\nu$. Applying [L3] to the function $c_\nu/(z-a_\nu)$ inside $C_\nu$, choose a rational function $s_\nu$ with poles only at $p_\nu$ and $$\sup_{z\in K}\left|s_\nu(z)-\frac{c_\nu}{z-a_\nu}\right| <\frac{\varepsilon}{2N}.$$ [L2, L3, step 1.1, step 2.1, choose]

4.1 Put $r=\sum_{\nu=1}^{N}s_\nu$. Then every pole of $r$ lies in $P$, and the triangle inequality together with steps 1.1 and 3.1 gives $$\sup_{z\in K}|f(z)-r(z)| \le\sup_{z\in K}|f(z)-r_0(z)| +\sum_{\nu=1}^{N}\sup_{z\in K}\left|s_\nu(z)-\frac{c_\nu}{z-a_\nu}\right| <\varepsilon.$$ [step 1.1, step 2.1, step 3.1, algebra] ∎
