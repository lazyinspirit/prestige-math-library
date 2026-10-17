---
id: thm-reference-simplex-sobolev-extension
kind: theorem
title: A reference simplex is an integer-order Sobolev extension domain
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-matching-affine-simplicial-meshes, lem-affine-pullback-weak-derivatives-and-scaling, def-sobolev-extension-domain-and-extension-operator, thm-wkp-extension-from-a-half-space, lem-test-function-cutoffs-and-euclidean-localization, lem-weak-leibniz-rule-with-a-smooth-factor, lem-compact-support-zero-extension-in-wkp, thm-heine-borel-rn, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 12
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap12.pdf
      locator: "§12.1, printed pp. 131–134: Sobolev extension and localization on the reference simplex."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: reference-cell Sobolev bounds and affine pullback."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $d\ge2$. For every integer $k\ge0$ and
$1\le p\le\infty$, there is a bounded linear operator
$$E_{k,p}:W^{k,p}(\widehat S_d)\longrightarrow W^{k,p}(\mathbb R^d)$$
whose restriction to $\widehat S_d$ is the input class. Consequently
$\widehat S_d$ is a $W^{k,p}$-extension domain in the sense of
[[def-sobolev-extension-domain-and-extension-operator]]. The operator may
be chosen with support in one fixed bounded set.

## Facts & Assumptions

**Given:** $d\ge2$, the reference simplex, $k\in\mathbb N_0$, $1\le p\le\infty$, and the Axiom of Choice.

[F1] Affine pullback and pushforward preserve $W^{k,p}$, with weak derivatives and norm bounds controlled by the fixed affine matrix. ([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F2] On a half-space, for every integer $k$ and $p$ there is an explicit bounded extension built from finitely many reflected values; its coefficients satisfy $\sum_j a_j(-j)^r=1$ for $0\le r<k$, so normal derivatives through order $k-1$ match at the reflecting hyperplane. Its proof verifies the weak derivative identity by ACL sections, integration by parts and Fubini, and gives a bound depending only on $k,p,d$. ([[thm-wkp-extension-from-a-half-space]])

[F3] Smooth cutoffs with compact support in a prescribed chart exist; the weak Leibniz rule bounds localized Sobolev norms; and a function supported away from the artificial edge of an open chart can be extended by zero across that edge by the weak test identity. ([[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-compact-support-zero-extension-in-wkp]])

[F4] The closed reference simplex is compact, and a finite subcover can be selected from any open cover of it. ([[thm-heine-borel-rn]])

[F5] The Axiom of Choice implies each finite sequence of affine charts, cutoffs and local extension maps needed below can be selected; the local half-space extension theorem itself assumes this axiom. ([[def-axiom-of-choice]])

[F6] A $W^{k,p}$-extension domain admits a bounded linear operator to $W^{k,p}(\mathbb R^d)$ whose restriction is the input almost-everywhere class. ([[def-sobolev-extension-domain-and-extension-operator]])

## Proof

1.1 Let $z\in\overline{\widehat S_d}$. Define the barycentric affine coordinates by $\lambda_0(x)=1-\sum_{i=1}^dx_i$ and $\lambda_i(x)=x_i$ for $1\le i\le d$; they sum to one and are nonnegative exactly on the closed simplex. The active set $I(z)=\{i:\lambda_i(z)=0\}$ has at most $d$ elements, and the gradients of the corresponding coordinates are linearly independent. Complete these affine coordinates to an invertible affine coordinate system $y=(\lambda_i)_{i\in I(z)},y_{m+1},\ldots,y_d$, where $m=|I(z)|$. Because every inactive barycentric coordinate is strictly positive at $z$, a sufficiently small neighbourhood $U_z$ meets the simplex exactly in the orthant chart $y_1>0,\ldots,y_m>0$; for $m=0$ it is an interior chart. [given, algebra]

2.1 The charts $U_z$ cover the compact closure, so [F4] gives a finite subcover. Shrink them to open sets $V_j$ still covering the closure, with $\overline V_j\subset U_j$. Use [F3] to choose smooth cutoffs $\theta_j$ supported compactly in $U_j$ and equal to one on $V_j$. Their sum $S$ is positive on a neighbourhood $N$ of the closed simplex. Choose a smooth cutoff $\chi$ supported compactly in $N$ and equal to one near the closed simplex, and set $\eta_j=\chi\theta_j/S$ on $N$, zero outside $N$. Then each $\eta_j$ is smooth and supported in its chart, and their sum is one near the simplex. Each localized input $\eta_j u$ has norm bounded by a fixed multiple of $\|u\|_{W^{k,p}(\widehat S_d)}$ by the product rule in [F3]. [F3, F4, step 1.1]

3.1 In an interior chart, the localized function is zero near the chart edge. Its zero extension to $\mathbb R^d$ has the same weak derivatives: for any test function, multiply that test by a cutoff equal to one on the localized support, apply the weak identity on the chart, and note that all derivatives of the cutoff product agree on that support. This is the zero-extension part of [F3]. In a boundary chart with $m$ active faces, the localized function is a $W^{k,p}$ function on the orthant $O_m=(0,\infty)^m\times\mathbb R^{d-m}$ and vanishes near the artificial edge of the chart; extend by zero across only that artificial edge using the same test-function argument. [F3, step 2.1]

4.1 Extend from $O_m$ to $\mathbb R^d$ one coordinate at a time. At each stage, apply the reflected half-space formula in [F2] to the coordinate being extended, with the other $m-1$ positive coordinates as tangential variables. For clarity, the coordinate formula on $t<0$ is $\sum_{j=1}^k a_jw(x',-jt)$, with $\sum_ja_j(-j)^r=1$ for $0\le r<k$; for $k=0$ use even reflection. For a test compactly supported in $O_{m-1}\times\mathbb R$, apply the half-space proof's normal ACL trace and integration-by-parts identity on each compact tangential subdomain and then exhaust the test support by finitely many such subdomains. Tangential weak derivatives pass through the finite reflection sum by the weak test identity, and the displayed moment equations cancel every normal interface term. The change of variable $s=-jt$ bounds each reflected derivative in $L^p$ by the same finite coefficient sum as in [F2] (and by the corresponding essential supremum sum at $p=\infty$). Thus this explicit operator is bounded on $W^{k,p}(O_m)$ and extends one orthant coordinate. Repeating at most $m\le d$ times gives the required extension. Pulling back through the affine chart changes the bound by a finite factor from [F1]. [F1, F2, step 3.1]

5.1 Apply these local bounded linear extensions to the finitely many localized pieces and add them. Their sum is bounded and linear, and on $\widehat S_d$ its restriction is $\sum_j\eta_j u=u$. There are finitely many charts, all have bounded coordinate images and the reflection operators add support only by fixed finite factors, so the sum is supported in a fixed bounded set. The definition of extension domain in [F6] gives the conclusion. [F5, F6, step 2.1, step 4.1] ∎
