---
id: cor-global-cauchy-theorem-homology
kind: corollary
title: "Cauchy's theorem for a null-homologous cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-global-cauchy-integral-formula-homology, thm-algebra-of-complex-derivatives, def-integration-and-index-of-complex-chain, def-null-homologous-and-homologous-complex-cycles, prop-linearity-of-complex-line-integrals, thm-compact-subset-is-closed-and-bounded, thm-closed-subspace-of-a-compact-space-is-compact, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-rn, thm-connectedness-characterisations, cor-rn-is-polygonally-connected-and-locally-path-connected, rem-complex-plane-euclidean-dictionary, def-complex-chain-and-cycle, def-metric-topology, def-metric-bounded-diameter, cor-complex-differentiability-implies-continuity]
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
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic,
and let $\Gamma$ be a complex chain which is a cycle, with trace in $\Omega$ and
null-homologous in $\Omega$. Then

$$\int_\Gamma f(z)\,dz=0.$$

## Facts & Assumptions

**Given:** An open $\Omega$, a holomorphic $f:\Omega\to\mathbb C$, and a cycle $\Gamma$ with $\Gamma^\ast\subseteq\Omega$ which is null-homologous in $\Omega$; the plane is read as $\mathbb R^2$ through [[rem-complex-plane-euclidean-dictionary]].

[L1] Under the hypotheses above, $n(\Gamma,z)f(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}\,d\zeta$ for every $z\in\Omega\setminus\Gamma^\ast$ ([[thm-global-cauchy-integral-formula-homology]]).

[L2] Products of functions complex differentiable at a point are complex differentiable there, and constants have derivative $0$ ([[thm-algebra-of-complex-derivatives]]); a complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L3] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$, and $n(\Gamma,z)=(2\pi i)^{-1}\int_\Gamma d\zeta/(\zeta-z)$ for $z\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]); a chain is a finite list of integer-weighted complex contours and its trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$ ([[def-complex-chain-and-cycle]]).

[L4] A cycle $\Gamma$ with trace in $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L5] Complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L6] A compact subset is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a closed bounded interval is compact ([[thm-heine-borel-rn]]).

[L7] A topological space is connected exactly when its only clopen subsets are the empty set and the whole space ([[thm-connectedness-characterisations]]).

[L8] For $n\ge1$, $\mathbb R^n$ is polygonally connected and connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[L9] A set is closed exactly when its complement is open ([[def-metric-topology]]), and a subset is bounded when it is empty or lies inside a ball ([[def-metric-bounded-diameter]]).

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\varnothing$ then $\Gamma^\ast=\varnothing$, so by [L3] every $m_k$ is zero or the list is empty and $\int_\Gamma f\,dz=0$; assume from now on that $\Omega\ne\varnothing$. [given, L3]

1.2 The trace $\Gamma^\ast$ is a finite union of continuous images of compact intervals by [L3], hence compact by [L6], and therefore closed and bounded by [L6]. [given, L3, L6]

2.1 There is a point $z\in\Omega\setminus\Gamma^\ast$. Indeed $\Gamma^\ast\subseteq\Omega$, so $\Omega\setminus\Gamma^\ast=\varnothing$ would force $\Omega=\Gamma^\ast$; by step 1.2 that set is closed, and $\Omega$ is open, so $\Omega$ would be a nonempty clopen subset of $\mathbb C$ which is bounded by step 1.2 and [L9], hence different from $\mathbb C$. That contradicts [L7] and [L8], since $\mathbb C$ is connected and its only clopen subsets are $\varnothing$ and $\mathbb C$. The trace is not asserted to have empty interior anywhere in this argument. [step 1.1, step 1.2, L7, L8, L9]

3.1 Fix such a $z$ and put $F(\zeta)=(\zeta-z)f(\zeta)$ for $\zeta\in\Omega$, which is holomorphic on $\Omega$ by [L2] and satisfies $F(z)=0$. Since $\Gamma$ is null-homologous in $\Omega$ by the hypothesis and [L4], [L1] applies to $F$ at the point $z$ and gives $0=n(\Gamma,z)F(z)=(2\pi i)^{-1}\int_\Gamma F(\zeta)(\zeta-z)^{-1}\,d\zeta$. [step 2.1, L1, L2, L4]

4.1 On the trace $\zeta\ne z$, so $F(\zeta)(\zeta-z)^{-1}=f(\zeta)$ there, and the integrand of step 3.1 is $f$ itself; hence $\int_\Gamma f(\zeta)\,d\zeta=0$ by [L3] and [L5]. [step 3.1, L3, L5] ∎
