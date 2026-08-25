---
id: cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm
kind: counterexample
title: "A nonvanishing holomorphic function on a domain with no holomorphic logarithm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holomorphic-logarithms-homologically-simply-connected-domains, thm-no-continuous-logarithm-on-the-punctured-complex-plane, cor-holomorphic-logarithm-has-the-logarithmic-derivative, cor-normalized-circle-integral-about-its-centre-is-one, cor-closed-contour-integral-of-a-derivative-is-zero, def-homologically-simply-connected-complex-domain, def-null-homologous-and-homologous-complex-cycles, cex-annulus-is-connected-but-not-homologically-simply-connected, thm-winding-number-circle-traversed-k-times, def-complex-domain, lem-plane-exterior-of-a-closed-disc-is-path-connected, cor-complex-differentiability-implies-continuity, thm-algebra-of-complex-derivatives, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, def-metric-topology, def-metric-ball]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

Every holomorphic nowhere-zero function on a complex domain has a holomorphic
logarithm on that domain.

## Facts & Assumptions

**Given:** The punctured plane $U=\mathbb C\setminus\{0\}$, the identity function $f(z)=z$ on it, and the contour $C(t)=\exp(it)$ on $[0,2\pi]$.

[L1] On a homologically simply connected complex domain, a holomorphic nowhere-zero function admits a holomorphic $L$ with $\exp\circ L$ equal to it ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]]), a domain being homologically simply connected when every cycle in it is null-homologous in it ([[def-homologically-simply-connected-complex-domain]]).

[L2] There is no continuous $L:\mathbb C\setminus\{0\}\to\mathbb C$ with $\exp(L(z))=z$ for every $z\ne0$ ([[thm-no-continuous-logarithm-on-the-punctured-complex-plane]]).

[L3] If $L$ and $h$ are holomorphic on an open set with $\exp\circ L=h$, then $h$ is nowhere zero and $L'=h'/h$ ([[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[L4] For a positively oriented circle $a+r\exp(it)$ with $r>0$, $(2\pi i)^{-1}\int_\gamma dz/(z-a)=1$ ([[cor-normalized-circle-integral-about-its-centre-is-one]]).

[L5] If $F$ is holomorphic on an open set, $F'$ is continuous there, and $\gamma$ is a closed rectifiable contour in that set, then $\int_\gamma F'(z)\,dz=0$ ([[cor-closed-contour-integral-of-a-derivative-is-zero]]).

[L6] A cycle with trace in an open $\Omega$ is null-homologous in $\Omega$ when its index vanishes at every point of $\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L7] The annulus $\{\tfrac12<|z|<2\}$ is a complex domain that is not homologically simply connected, the unit circle in it having index $1$ about the origin ([[cex-annulus-is-connected-but-not-homologically-simply-connected]]).

[L8] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with index $k$ for $|z-a|<r$ and $0$ for $|z-a|>r$, with trace $\{|z-a|=r\}$ when $k\ne0$ ([[thm-winding-number-circle-traversed-k-times]]).

[L9] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]); for $c\in\mathbb C$ and $R\ge0$ the set $\{z:|z-c|>R\}$ is path-connected and connected, and at $R=0$ this is the punctured plane ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]]).

[L10] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]), and linear combinations, products and nonvanishing quotients of complex differentiable functions are complex differentiable, the identity having derivative $1$ ([[thm-algebra-of-complex-derivatives]]).

[L11] A single closed contour with coefficient $1$ is a cycle whose trace is that contour's trace ([[def-complex-chain-and-cycle]]) and whose index is that contour's winding number ([[def-integration-and-index-of-complex-chain]]).

[L12] A set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]).

## Counterexample

**Proof technique:** constructive.

1.1 Take $U=\mathbb C\setminus\{0\}$ and $f(z)=z$ on it. [given, construct]

2.1 $U$ is a complex domain: it is nonempty, open by [L12], and connected by [L9] with $c=0$ and $R=0$. The function $f$ is holomorphic on $U$ by [L10] and nowhere zero there, since $0\notin U$. [step 1.1, L9, L10, L12]

3.1 Suppose $L$ were a holomorphic function on $U$ with $\exp(L(z))=z$ for every $z\in U$. Then $L$ is continuous on $U$ by [L10], contradicting [L2]; so no such $L$ exists and the claim is refuted. [step 2.1, L2, L10]

4.1 A second refutation, independent of [L2]. With $L$ as in step 3.1, [L3] gives $L'(z)=1/z$, which is continuous on $U$ by [L10], so [L5] applied to the closed rectifiable contour $C$ in $U$ gives $\int_C dz/z=\int_C L'(z)\,dz=0$; but [L4] gives $\int_C dz/z=2\pi i\ne0$. [step 2.1, L3, L4, L5, L10]

5.1 The hypothesis of [L1] that fails is homological simple connectivity: by [L8] and [L11] the unit circle $C$ is a cycle with trace in $U$ and $n(C,0)=1$, while $0\in\mathbb C\setminus U$, so $C$ is not null-homologous in $U$ by [L6]. The same failure on the smaller annulus is recorded in [L7]. [step 3.1, step 4.1, L1, L6, L7, L8, L11, discharge-construct] ∎
