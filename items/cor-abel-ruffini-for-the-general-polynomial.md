---
id: cor-abel-ruffini-for-the-general-polynomial
kind: corollary
title: "For $n\\ge5$ over a characteristic-zero base, the general polynomial of degree $n$ is not solvable by radicals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-general-polynomial-of-degree-n-has-galois-group-s-n, thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable, thm-solvable-by-radicals-implies-a-solvable-galois-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.40"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

Let $F$ be a field of characteristic $0$. For every $n\ge5$, the general polynomial of degree $n$ over the rational function field $F(e_1,\dots,e_n)$ is not solvable by radicals.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $0$, an integer $n\ge5$, and the general polynomial of degree $n$ of the previous theorem.

[L1] The general polynomial of degree $n$ has Galois group $S_n$ ([[thm-general-polynomial-of-degree-n-has-galois-group-s-n]]).

[L2] The group $S_n$ is not solvable for $n\ge5$ ([[thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable]]).

[L3] In characteristic $0$, a polynomial solvable by radicals has solvable Galois group ([[thm-solvable-by-radicals-implies-a-solvable-galois-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the Galois group of the general polynomial is $S_n$, and [L2] says that group is not solvable for $n\ge5$. [L1, L2]

2.1 If the polynomial were solvable by radicals, [L3] would force its Galois group to be solvable, contradicting step 1.1. Therefore it is not solvable by radicals. [step 1.1, L3] ∎
