---
id: thm-osgood-lemma-in-several-complex-variables
kind: theorem
title: "Osgood's lemma: continuous and separately holomorphic implies holomorphic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-power-series-expansion-in-several-complex-variables, thm-power-series-define-holomorphic-functions-in-several-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, def-holomorphic-function-in-several-complex-variables, def-separately-holomorphic-function, def-balls-and-polydiscs-in-complex-euclidean-space, def-multivariable-power-series, def-metric-topology, def-metric-ball, lem-complex-conjugation-and-modulus-laws, rem-complex-euclidean-space-dictionary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$ be
continuous and separately holomorphic
([[def-separately-holomorphic-function]]). Then $f$ is holomorphic on $U$
([[def-holomorphic-function-in-several-complex-variables]]).

Consequently, for a **continuous** $f$ on an open $U$ the following three
conditions are equivalent: $f$ is holomorphic; $f$ is separately holomorphic;
every point of $U$ has a polydisc neighbourhood on which $f$ is the sum of an
absolutely convergent multi-indexed power series.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$ and a continuous separately holomorphic $f:U\to\mathbb C$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] For $f$ continuous and separately holomorphic on $\Delta_\rho(a)$ and a polyradius $r$ with $r_k<\rho_k$, the iterated-integral coefficients satisfy $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ with $M=\sup_{\Gamma_r(a)}|f|$, and $f(z)=\sum_\alpha c_\alpha(z-a)^\alpha$ on $\Delta_r(a)$, absolutely and uniformly on every $\overline\Delta_{\theta r}(a)$ with $\theta<1$ ([[thm-power-series-expansion-in-several-complex-variables]]).

[L2] If $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ for every $\alpha$, then $\sum_\alpha c_\alpha(z-a)^\alpha$ converges absolutely on $\Delta_r(a)$ and its sum is holomorphic there ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[L3] A holomorphic function of several variables is continuous and separately holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L4] Holomorphic on $U$ means complex differentiable at every point of $U$ ([[def-holomorphic-function-in-several-complex-variables]]), and separate holomorphy is a condition on the slices through each point ([[def-separately-holomorphic-function]]).

[L5] $\Delta_r(a)$ is defined coordinatewise by $|z_k-a_k|<r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]), and a multi-indexed power series and its absolute convergence are those of [[def-multivariable-power-series]].

[L6] A set is open exactly when each of its points admits a ball inside it, and $B(x,\varepsilon)=\{y:d(x,y)<\varepsilon\}$ ([[def-metric-topology]], [[def-metric-ball]]).

[L7] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in U$. By [L6] there is $\varepsilon>0$ with $B(a,\varepsilon)\subseteq U$; put $\rho_k=\varepsilon/(2\sqrt m)$ for every $k<m$. If $z\in\Delta_\rho(a)$ then $\lVert z-a\rVert^2=\sum_{k<m}|z_k-a_k|^2<m\rho_0^2=\varepsilon^2/4$ by [L5] and the dictionary, so $\Delta_\rho(a)\subseteq B(a,\varepsilon)\subseteq U$. [given, L5, L6, L7]

1.2 The restriction of $f$ to $\Delta_\rho(a)$ is continuous, and it is separately holomorphic there: for $b\in\Delta_\rho(a)$ and $k<m$ the slice domain inside $\Delta_\rho(a)$ is an open subset of the slice domain inside $U$, on which the slice is holomorphic by hypothesis, and a restriction of a holomorphic function of one variable to an open subset is holomorphic. [given, L4, L5]

2.1 Put $r_k=\rho_k/2$, so $r_k<\rho_k$. By [L1] applied on $\Delta_\rho(a)$ there are coefficients $c_\alpha$ with $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ and $f(z)=\sum_\alpha c_\alpha(z-a)^\alpha$ for every $z\in\Delta_r(a)$. [step 1.1, step 1.2, L1, L5]

3.1 By [L2] the sum of that series is holomorphic on $\Delta_r(a)$; by step 2.1 it is $f$ there, so $f$ is complex differentiable at every point of $\Delta_r(a)$, in particular at $a$. Since $a\in U$ was arbitrary, [L4] makes $f$ holomorphic on $U$. [step 2.1, L2, L4]

4.1 For the equivalence, let $f$ be continuous on the open $U$. If $f$ is holomorphic then it is separately holomorphic by [L3]; if it is separately holomorphic then step 2.1 gives the local power-series representation and step 3.1 gives holomorphy; and if it is locally such a sum then [L2] makes it holomorphic on a polydisc about each point, hence on $U$ by [L4]. So the three conditions are equivalent. [step 2.1, step 3.1, L2, L3, L4] ∎
