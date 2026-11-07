---
id: def-lattice-systole
kind: definition
title: "Systole of a unimodular lattice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-unimodular-lattice-space
  - def-full-euclidean-lattice-and-covolume
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

For a full lattice $\Lambda\subset\mathbb R^d$, its sup-norm systole is
$$\delta_\infty(\Lambda):=\min\{\|v\|_\infty:v\in\Lambda\setminus\{0\}\}.$$
The minimum exists and is positive because a lattice is discrete and has only finitely many points in a bounded set.

## Definition references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.


## Facts & Assumptions

**Given:** A full Euclidean lattice.

[F1] A full lattice is a discrete full-rank subgroup of Euclidean space. [[def-full-euclidean-lattice-and-covolume]]
