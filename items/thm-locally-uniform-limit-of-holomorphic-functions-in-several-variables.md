---
id: thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
kind: theorem
title: "Locally uniform limits of holomorphic functions are holomorphic, with locally uniform convergence of all derivatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-osgood-lemma-in-several-complex-variables, thm-cauchy-estimates-on-a-polydisc, thm-weierstrass-convergence-holomorphic-functions, thm-uniform-limit-continuous-complex-functions, rem-locally-uniform-convergence-dictionary, def-separately-holomorphic-function, def-uniform-convergence-of-complex-valued-functions, cor-holomorphic-functions-in-several-variables-are-smooth, def-balls-and-polydiscs-in-complex-euclidean-space, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, prop-algebra-of-holomorphic-functions-in-several-variables, def-metric-topology, def-metric-ball, rem-complex-euclidean-space-dictionary, lem-complex-conjugation-and-modulus-laws, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open, let each
$f_n:U\to\mathbb C$ be holomorphic, and suppose $f_n\to f$ locally uniformly on
$U$: every point of $U$ has a neighbourhood on which the convergence is uniform.
Then $f$ is holomorphic on $U$, and for every multi-index $\alpha$

$$\partial^\alpha_zf_n\longrightarrow\partial^\alpha_zf$$

locally uniformly on $U$.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$, holomorphic $f_n:U\to\mathbb C$ and $f:U\to\mathbb C$ with $f_n\to f$ locally uniformly in the sense of [[rem-locally-uniform-convergence-dictionary]] and [[def-uniform-convergence-of-complex-valued-functions]]; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] A continuous separately holomorphic function on an open subset of $\mathbb C^m$ is holomorphic ([[thm-osgood-lemma-in-several-complex-variables]]).

[L2] For $g$ holomorphic on $\Delta_\rho(a)$ and a polyradius $r$ with $r_k<\rho_k$, $|\partial^\alpha_zg(a)|\le\alpha!\,\sup_{\Gamma_r(a)}|g|\prod_{k<m}r_k^{-\alpha_k}$ ([[thm-cauchy-estimates-on-a-polydisc]]).

[L3] If holomorphic functions of one variable converge locally uniformly on an open subset of $\mathbb C$, the limit is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L4] A uniform limit of continuous complex-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[L5] Separate holomorphy is holomorphy of each slice on its open slice domain ([[def-separately-holomorphic-function]]).

[L6] A holomorphic function of several variables is continuous and separately holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]); every iterated complex partial derivative of a holomorphic function is holomorphic ([[cor-holomorphic-functions-in-several-variables-are-smooth]]); differences of holomorphic functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L7] $\Delta_r(a)$, $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are defined coordinatewise ([[def-balls-and-polydiscs-in-complex-euclidean-space]]); multi-index notation is that of [[def-ck-and-multi-index-notation-in-several-variables]].

[L8] A set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]).

[L9] $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Each $f_n$ is continuous by [L6], and locally uniform convergence makes $f$ continuous at every point by [L4] applied on a neighbourhood where the convergence is uniform. [given, L4, L6]

1.2 Fix $a\in U$ and $k<m$, and let $V$ be the $k$th slice domain of $U$ through $a$, an open subset of $\mathbb C$ by [L5]. The slices of the $f_n$ are holomorphic on $V$ by [L6], and they converge to the slice of $f$ locally uniformly on $V$, since a neighbourhood in $U$ of a point of the slice meets the slice in a neighbourhood there. So [L3] makes the slice of $f$ holomorphic on $V$, and $f$ is separately holomorphic by [L5]. [given, L3, L5, L6, L8]

2.1 By steps 1.1 and 1.2 the limit $f$ is continuous and separately holomorphic on $U$, so [L1] makes it holomorphic. [step 1.1, step 1.2, L1]

3.1 Fix $a\in U$ and a multi-index $\alpha$. By [L8] choose $\varepsilon>0$ with the ball $B(a,\varepsilon)\subseteq U$ and put $\rho_k=\varepsilon/(2\sqrt m)$, so $\Delta_\rho(a)\subseteq U$ by [L7] and [L9], and put $r_k=\rho_k/2$. Shrinking $\varepsilon$ if necessary, the convergence $f_n\to f$ is uniform on $\overline\Delta_\rho(a)$. [step 2.1, L7, L8, L9]

4.1 Fix $b\in\Delta_{r}(a)$ and put $\sigma_k:=\rho_k-|b_k-a_k|$ for each $k<m$. Then $\sigma_k>r_k$ because $|b_k-a_k|<r_k=\rho_k/2$, and if $|\zeta_k-b_k|<\sigma_k$ then $|\zeta_k-a_k|\le|\zeta_k-b_k|+|b_k-a_k|<\rho_k$, so $\Delta_\sigma(b)\subseteq\Delta_\rho(a)\subseteq U$ by [L7] and [L9]. Also $\Gamma_r(b)\subseteq\overline\Delta_\rho(a)$ because $|b_k-a_k|<r_k$ and $r_k+r_k=\rho_k$. The difference $f_n-f$ is holomorphic on $U$ by [L6] and step 2.1, so [L2] applied on $\Delta_\sigma(b)$ with inner polyradius $r$ gives $|\partial^\alpha_z f_n(b)-\partial^\alpha_zf(b)|\le\alpha!\,\bigl(\sup_{\overline\Delta_\rho(a)}|f_n-f|\bigr)\prod_{k<m}r_k^{-\alpha_k}$. [step 3.1, L2, L6, L7, L9]

5.1 The right-hand side of step 4.1 does not depend on $b$ and tends to $0$ by the uniform convergence of step 3.1, so $\partial^\alpha_zf_n\to\partial^\alpha_zf$ uniformly on the neighbourhood $\Delta_r(a)$ of $a$. Since $a\in U$ and $\alpha$ were arbitrary, the convergence is locally uniform for every multi-index. [step 3.1, step 4.1, L6, L7] ∎
