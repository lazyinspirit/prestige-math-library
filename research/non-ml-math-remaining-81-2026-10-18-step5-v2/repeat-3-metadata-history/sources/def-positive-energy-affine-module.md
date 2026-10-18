---
id: def-positive-energy-affine-module
kind: definition
title: Restricted affine-current module
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-untwisted-affine-central-extension, def-representation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §2
      url: https://arxiv.org/pdf/1004.1287
    - title: The Segal–Sugawara construction, MIT Topology Seminar notes, §§2–3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/12-11-19.pdf
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra with the invariant form used in [[def-untwisted-affine-central-extension]]. A representation $\rho$ of the loop central extension $\overline{L\mathfrak g}$ is a **restricted affine-current module of level $k\in\mathbb C$** if the central generator acts as $k\operatorname{id}$ and, for every vector $v$ and current $x\in\mathfrak g$, there is an integer $N(v,x)$ such that $\rho(x\otimes t^n)v=0$ for all $n\ge N(v,x)$.

The algebra in this definition is the central extension only; it does not contain the degree derivation. Restrictedness is a mode-truncation condition and does not itself supply an energy grading. A compatible positive-energy grading is extra structure on this current algebra.
