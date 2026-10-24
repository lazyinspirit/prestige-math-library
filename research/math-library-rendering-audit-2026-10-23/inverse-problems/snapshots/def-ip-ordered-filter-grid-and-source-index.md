---
id: def-ip-ordered-filter-grid-and-source-index
kind: definition
title: Ordered spectral filters, source indices, and variance grids
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-index-source-ball
  - def-compact-spectral-filter-and-qualification
  - thm-singular-value-decomposition-for-compact-operators
  - def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, §§3.1.1–3.2.1"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Christian Clason, Regularization of Inverse Problems, complete lecture notes, Chapter 5 §§5.1–5.2"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
---

## Definition

Assume Countable Choice. Let $T:X\to Y$ be an injective compact linear operator of infinite rank between separable real Hilbert spaces (each with a countable dense subset), and assume $T$ is Hilbert–Schmidt, meaning that for its positive singular values $s_j$ the sum $\sum_{j\ge1}s_j^2$ is finite. Put $S=T^*T$, $\lambda_j=s_j^2$, and $\lambda_1=\|S\|$, with the positive eigenvalues listed with multiplicity in nonincreasing order. Let $\varphi:[0,\infty)\to[0,\infty)$ be continuous and strictly increasing with $\varphi(0)=0$, and take its inverse on its range. Assume the paper's convexity condition on the spectral range: $x\mapsto x\varphi^{-1}(\sqrt{x})$ is convex for $0\le x\le\varphi(\lambda_1)^2$. Define the source class $\mathcal W_\varphi(\rho):=\{\varphi(S)w:w\in X,\ \|w\|_X\le\rho\}$ for $\rho>0$; equivalently, it is the source ball with singular-value index $\psi(t)=\varphi(t^2)$.

An ordered spectral filter is a family of functions $q_\alpha:[0,\lambda_1]\to[0,\infty)$ indexed by a set $\mathcal A\subset(0,\infty)$ with $0$ as an accumulation point, such that for constants $C_q'<\infty$ and $C_q''=1$,
$$
0\le\alpha q_\alpha(x)\le C_q',\qquad 0\le xq_\alpha(x)\le1,
$$
and $q_\alpha(x)\le q_{\widetilde\alpha}(x)$ whenever $\widetilde\alpha<\alpha$, for every $x\in[0,\lambda_1]$. The index function $\varphi$ is a qualification of this filter if for some $C_\varphi<\infty$,
$$
\sup_{0\le x\le\lambda_1}\varphi(x)(1-xq_\alpha(x))\le C_\varphi\varphi(\alpha)\qquad(\alpha\in\mathcal A).
$$

For $\alpha\in\mathcal A$, define the variance function
$$
V_{T,q}(\alpha):=\sum_{j\ge1}\lambda_jq_\alpha(\lambda_j)^2.
$$
For $\sigma>0$, a decreasing candidate sequence $(\alpha_m)_{m\in\mathbb N_0}$ in $\mathcal A$ has **geometric variance growth** if $V_{T,q}(\alpha_0)>0$ and there are constants $1<\theta_1\le\theta_2<\infty$ such that
$$
\theta_1\le\frac{V_{T,q}(\alpha_m)}{V_{T,q}(\alpha_{m-1})}\le\theta_2\qquad(m\ge1).
$$
Set $v_m:=\sigma^2V_{T,q}(\alpha_m)$ and
$$
u_m:=\sigma^2\sup_{j\ge1}\lambda_jq_{\alpha_m}(\lambda_j)^2,
$$
the operator norm of the estimator-noise covariance in the singular basis. The bound $q_{\alpha_m}(\lambda_j)\le C_q'/\alpha_m$ and $\sum_j\lambda_j<\infty$ make each $u_m$ and $v_m$ finite. The finite candidate set ends at
$$
m_{\max}:=\min\{m\in\mathbb N_0:v_m\ge1\}.
$$
The geometric lower bound $v_m\ge v_0\theta_1^m$ makes this index finite.


## Definition references

[[def-ip-index-source-ball|The singular-value source ball convention and spectral multiplier for an index function]]

[[def-compact-spectral-filter-and-qualification|Compact spectral multipliers, source powers, and regularizing filters]]

[[thm-singular-value-decomposition-for-compact-operators|Positive singular systems and the compact SVD]]

[[def-countable-choice|Countable Choice for the upstream countable singular-system construction]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, §§3.1.1–3.2.1](https://arxiv.org/pdf/2304.10356)

[Clason, *Regularization of Inverse Problems*, complete lecture notes, Chapter 5 §§5.1–5.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Remarks

The source class agrees with the earlier singular-value convention because its multiplier at a singular value $s_j$ is $\psi(s_j)=\varphi(s_j^2)=\varphi(\lambda_j)$. The variance function is finite for every fixed $\alpha\in\mathcal A$: the filter bound gives $q_\alpha(\lambda_j)\le C_q'/\alpha$ and $\sum_j\lambda_j<\infty$.
