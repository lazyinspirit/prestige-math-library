---
id: alg-multivariate-trimmed-mean
kind: algorithm
title: "Adaptive multivariate trimmed mean"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-euclidean-inner-product, def-euclidean-spheres-and-closed-balls]
justified_by: [lem-multivariate-trimmed-mean-selector-total-and-measurable]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, §3.1"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 15–16; multivariate trimmed-mean estimator. The adaptive selector below repairs its non-total least-integer rule."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; directional winsorization, slabs, and dyadic adaptation."
---

## Definition

Let $d,N\ge1$ be integers, let $0\le\eta\le1/10$, and let $0<\delta<1$ satisfy $N\ge2560\log(2/\delta)$. Given two observed halves $\widetilde X_1,\ldots,\widetilde X_N$ and $\widetilde Y_1,\ldots,\widetilde Y_N$ in $\mathbb R^d$, set
$$
\varepsilon=\max\left\{10\eta,\frac{2560\log(2/\delta)}{N}\right\}\in(0,1].
$$
For $v\in S^{d-1}$, sort $\langle\widetilde Y_i,v\rangle$ nondecreasingly and let $\alpha_v$ and $\beta_v$ be its order statistics of ranks $\lceil\varepsilon N/2\rceil$ and $\lceil(1-\varepsilon/2)N\rceil$. Write $\phi_{a,b}(t)=\min\{b,\max\{a,t\}\}$. For $Q>0$ define
$$U_Q(v)=\frac1N\sum_{i=1}^N\phi_{\alpha_v-Q,\,\beta_v+Q}(\langle\widetilde X_i,v\rangle),\qquad \Gamma(v,Q)=\{z\in\mathbb R^d:|\langle z,v\rangle-U_Q(v)|\le2\varepsilon Q\}.$$
and $\Gamma(Q)=\bigcap_{v\in S^{d-1}}\Gamma(v,Q)$. For each $j\in\mathbb Z$, put
$$
K_j=\bigcap_{i\ge j}\Gamma(2^i),\qquad S=\{j\in\mathbb Z:K_j\ne\varnothing\}.
$$
Return the unique minimum-norm point of $K_j$ if $S$ has least element $j$; if $S=\mathbb Z$, return the unique minimum-norm point of $\bigcap_{i\in\mathbb Z}\Gamma(2^i)$; if $S=\varnothing$, return the first-half sample mean $N^{-1}\sum_{i=1}^N\widetilde X_i$. This three-branch selector is total on the displayed input domain; its existence and Borel measurability are proved in [[lem-multivariate-trimmed-mean-selector-total-and-measurable]].
