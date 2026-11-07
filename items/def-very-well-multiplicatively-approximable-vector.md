---
id: def-very-well-multiplicatively-approximable-vector
kind: definition
title: "Very well multiplicatively approximable vector"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-distance-to-nearest-integer
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

For $y=(y_1,\ldots,y_n)\in\mathbb R^n$, put $\Pi_+(q)=\prod_{i=1}^n\max(1,|q_i|)$ for $q\in\mathbb Z^n$. The vector $y$ is very well multiplicatively approximable (VWMA) if there is $\eta>0$ such that for infinitely many distinct $q\in\mathbb Z^n$ there is $p\in\mathbb Z$ with
$$|q\cdot y+p|\,\Pi_+(q)\le\Pi_+(q)^{-\eta}.$$
This is the dual multiplicative convention; the infinitely many vectors necessarily have $\Pi_+(q)\to\infty$.

## Definition references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.
