---
id: cor-transcendence-degree-tower-additivity
kind: corollary
title: "Transcendence degree is additive in finite towers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-maximal-algebraically-independent-subset-is-a-transcendence-basis, thm-transitivity-of-algebraicity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 9.10 and Theorem 9.13"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $k\subseteq K\subseteq L$ be a tower of field extensions. Assume that
$\operatorname{trdeg}_k K$ and $\operatorname{trdeg}_K L$ are finite. Then
$$
\operatorname{trdeg}_k L=\operatorname{trdeg}_k K+\operatorname{trdeg}_K L.
$$

## Facts & Assumptions

**Given:** A tower $k\subseteq K\subseteq L$ with finite transcendence degrees.

[L1] An algebraically independent subset over which the ambient field is algebraic is a transcendence basis ([[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]).

[L2] Algebraicity is transitive in a tower of fields ([[thm-transitivity-of-algebraicity]]).

## Proof

**Proof technique:** direct.

1.1 Choose a transcendence basis $S=\{s_1,\ldots,s_r\}$ of $K$ over $k$ and a transcendence basis $T=\{t_1,\ldots,t_m\}$ of $L$ over $K$. Then $r$ and $m$ are the two given transcendence degrees. [given, choose]

2.1 The union $S\cup T$ is algebraically independent over $k$. Indeed, a polynomial relation over $k$ among $S\cup T$ would also be a relation over $K$, contradicting algebraic independence of $T$ over $K$. Moreover $L$ is algebraic over $K(T)$, and $K$ is algebraic over $k(S)$, so [L2] shows that $L$ is algebraic over $k(S,T)$. Therefore [L1] makes $S\cup T$ a transcendence basis of $L$ over $k$. [L1, L2, step 1.1]

3.1 Since $S\cup T$ is a transcendence basis of $L$ over $k$ with $r+m$ elements, $\operatorname{trdeg}_k L=r+m=\operatorname{trdeg}_k K+\operatorname{trdeg}_K L$. [step 1.1, step 2.1] ∎
