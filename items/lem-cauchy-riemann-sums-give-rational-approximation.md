---
id: lem-cauchy-riemann-sums-give-rational-approximation
kind: lemma
title: "Riemann sums of the Cauchy integral give rational approximation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-grid-cycle-for-runge-approximation,
       thm-global-cauchy-integral-formula-homology,
       def-null-homologous-and-homologous-complex-cycles,
       thm-heine-cantor-metric,
       thm-continuous-image-of-a-compact-space-is-compact]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Lemma 9.2.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Proposition 4.4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $K\subseteq U\subseteq\mathbb C$, where $K$ is compact and $U$ is open, and
let $f:U\to\mathbb C$ be holomorphic. Then for every $\varepsilon>0$ there is a
rational function $r$ whose poles lie on a finite set contained in
$U\setminus K$ and such that

$$\sup_{z\in K}|f(z)-r(z)|<\varepsilon.$$

## Facts & Assumptions

**Given:** A compact set $K$, an open neighbourhood $U$ of $K$, a holomorphic
function $f:U\to\mathbb C$, and a tolerance $\varepsilon>0$.

[L1] There is a polygonal cycle $\Gamma$ with $\Gamma^\ast\subseteq U\setminus K$
and $n(\Gamma,z)=1$ for every $z\in K$
([[lem-grid-cycle-for-runge-approximation]]).

[L2] A cycle null-homologous in an open set satisfies the global Cauchy formula
there ([[thm-global-cauchy-integral-formula-homology]],
[[def-null-homologous-and-homologous-complex-cycles]]).

[L3] A continuous map on a compact metric space is uniformly continuous, and the
continuous image of a compact space is compact
([[thm-heine-cantor-metric]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\Gamma$ as in [L1]. Because $n(\Gamma,z)=1$ on $K$ and $\Gamma^\ast\subseteq U$, the cycle is null-homologous in $U$ and [L2] gives $$f(z)=\frac{1}{2\pi i}\int_\Gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta \qquad(z\in K).$$ [L1, L2, given]

2.1 Decompose $\Gamma$ into finitely many oriented line segments $\gamma_j:[a_j,b_j]\to\mathbb C$. For each $j$, the function $\phi_j(t,z)=f(\gamma_j(t))\gamma_j'(t)/(\gamma_j(t)-z)$ is continuous on the compact set $[a_j,b_j]\times K$, because $\Gamma^\ast\cap K=\varnothing$. By [L3], each $\phi_j$ is uniformly continuous there, so a fine enough Riemann sum approximates $\int_{a_j}^{b_j}\phi_j(t,z)\,dt$ uniformly in $z\in K$. [step 1.1, L3, algebra]

3.1 Summing those edgewise Riemann sums gives a rational function of the form $r(z)=\sum_\nu c_\nu/(\xi_\nu-z)$ with sample points $\xi_\nu\in\Gamma^\ast$. Choosing the mesh so that the total edgewise error is below $\varepsilon$ and using step 1.1 yields $\sup_{z\in K}|f(z)-r(z)|<\varepsilon$. [step 1.1, step 2.1, construct, algebra] ∎