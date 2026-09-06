---
id: thm-morse-sard-for-maps-from-manifolds-with-boundary
kind: theorem
title: "Morse-Sard for maps from manifolds with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-interior-is-an-open-smooth-n-manifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-morse-sard-for-smooth-manifolds, thm-morse-sard-for-euclidean-maps, prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 If $n=0$, every differential to the zero tangent space is surjective, so both critical-value sets are empty. Otherwise choose countable coordinate covers of the boundaryless interior and, when $m\ge1$, of the $(m-1)$-manifold boundary, refining each so that its image lies in a target chart. Each coordinate representative has a $C^r$ Euclidean extension, so Euclidean Morse--Sard makes its critical values null. [given, cases]

2.1 Countable union closure for null sets, using the assumed $\mathrm{AC}_\omega$, makes the two restriction-critical-value sets and then their union null. Its complement is dense because a null subset of a manifold has empty interior, and that complement is precisely the values regular for both restrictions. [step 1.1] ∎
