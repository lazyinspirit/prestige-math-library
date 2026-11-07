---
id: def-rational-affine-form-system
kind: definition
title: "Rational system of affine forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-affine-linear-form-system
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§2: diagonal lattice-flow conventions"
---

## Definition

An affine system $(A,b)$ is rational if there exist $q_0\in\mathbb Z^n$ and $p_0\in\mathbb Z^m$ such that $Aq_0+b+p_0=0$. It is irrational if no such pair exists. This distinction concerns an exact integer solution, not the rationality of every entry of $A$ or $b$.

## Definition references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal lattice-flow conventions.


## Facts & Assumptions

**Given:** The affine system and its integer offsets.

[F1] The affine form system is the pair $(A,b)$ evaluated as $Aq+b+p$. [[def-affine-linear-form-system]]
