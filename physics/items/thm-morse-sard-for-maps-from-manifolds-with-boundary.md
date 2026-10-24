---
id: thm-morse-sard-for-maps-from-manifolds-with-boundary
kind: theorem
title: "Morse-Sard for maps from manifolds with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-interior-is-an-open-smooth-n-manifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-morse-sard-for-euclidean-maps, prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $F:M^m\to N^n$ be $C^r$ in the local-extension sense, where $N$ is boundaryless and $r>\max\{m-n,0\}$. The union of critical values of $F|_{\operatorname{Int}M}$ and $F|_{\partial M}$ is null; values regular for both restrictions are dense.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a $C^r$ map $F:M^m\to N^n$ in the local-extension sense, a boundaryless target $N$, and $r>\max\{m-n,0\}$.

[L1] The interior is a boundaryless smooth $m$-manifold and, for $m\ge1$, the boundary is a boundaryless smooth $(m-1)$-manifold ([[thm-the-interior-is-an-open-smooth-n-manifold]]; [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[L2] A $C^r$ Euclidean map from dimension $d$ to positive dimension $n$, with $r>\max\{d-n,0\}$, has a null critical-value set ([[thm-morse-sard-for-euclidean-maps]]).

[L3] Under $\mathrm{AC}_\omega$, countable unions and subsets of manifold null sets are null ([[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, every differential to the zero tangent space is surjective, so both critical-value sets are empty. Suppose $n\ge1$. By [L1] and second countability, choose countable coordinate covers of $\operatorname{Int}M$ and, when $m\ge1$, of $\partial M$, refining them so each image lies in a target chart. Each coordinate representative has a $C^r$ Euclidean extension. Since $r>\max\{m-n,0\}$ also implies $r>\max\{(m-1)-n,0\}$, [L2] makes every chartwise critical-value set null. [given, L1, L2, cases, choose]

2.1 By [L3], each restriction-critical-value set and their union are null. A manifold null set has empty interior, so its complement is dense; that complement consists exactly of the values regular for both restrictions. Together with the $n=0$ case of step 1.1, this proves the claim. [L3, step 1.1] ∎
