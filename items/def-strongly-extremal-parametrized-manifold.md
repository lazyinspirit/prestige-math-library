---
id: def-strongly-extremal-parametrized-manifold
kind: definition
title: "Strongly extremal parametrized manifold"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-very-well-multiplicatively-approximable-vector
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality"
---

## Definition

Let $U\subset\mathbb R^d$ be open and $f:U\to\mathbb R^n$ a $C^m$ embedding. The parametrized manifold $f(U)$ is strongly extremal if for Lebesgue-almost every $x\in U$, the vector $f(x)$ is not VWMA.

## Definition references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.


## Facts & Assumptions

**Given:** The dual multiplicative definition of VWMA.

[F1] A vector is VWMA when infinitely many integer vectors satisfy a fixed positive multiplicative improvement. [[def-very-well-multiplicatively-approximable-vector]]
