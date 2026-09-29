---
id: def-matrix-coefficient-of-a-unitary-representation
kind: definition
title: Matrix coefficient of a unitary representation
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strongly-continuous-unitary-representation, def-real-and-complex-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, def-complex-metric-convergence-and-continuity]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Definition A.1.1, Appendix A, printed p. 305"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §3.4, printed pp. 106–107"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
---

## Definition

Let $\pi:G\to U(H)$ be a group homomorphism and let $\xi,\eta\in H$.
Its **matrix coefficient** associated with $(\xi,\eta)$ is
$$c_{\xi,\eta}:G\to\mathbb C,\qquad c_{\xi,\eta}(g)=\langle\pi(g)\xi,\eta\rangle.$$
We use the convention that the Hilbert pairing is linear in its first argument
and conjugate-linear in its second. Thus $c_{\xi,\eta}$ is linear in $\xi$
and conjugate-linear in $\eta$.

When $G$ is a topological group and $\pi$ is strongly continuous, every such
coefficient is continuous:

## Facts & Assumptions

[A1] If $G$ is a topological group and $\pi$ is strongly continuous, then for every $v\in H$ the orbit map $g\mapsto\pi(g)v$ is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A2] For vectors $x,y$ in a complex inner-product space,
$|\langle x,y\rangle|\le\|x\|\,\|y\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] Continuity of a map into $\mathbb C$ is measured with the metric
$d_{\mathbb C}(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

## Proof

**Given:** A group homomorphism $\pi:G\to U(H)$ and vectors $\xi,\eta\in H$; for the continuity assertion, assume that $G$ is a topological group and $\pi$ is strongly continuous.

**Proof technique:** direct.

1.1 Fix $g_0\in G$. By strong continuity, the orbit map for $\xi$ is continuous at $g_0$, so $\|\pi(g)\xi-\pi(g_0)\xi\|\to0$ as $g\to g_0$. [A1]

2.1 Linearity in the first argument and Cauchy–Schwarz give $|c_{\xi,\eta}(g)-c_{\xi,\eta}(g_0)|=|\langle\pi(g)\xi-\pi(g_0)\xi,\eta\rangle|\le\|\pi(g)\xi-\pi(g_0)\xi\|\,\|\eta\|\to0$ by step 1.1. By [A3] this is continuity of the coefficient at the arbitrary point $g_0$, hence on $G$. This also holds when $\eta=0$. [A2, A3, step 1.1] ∎
