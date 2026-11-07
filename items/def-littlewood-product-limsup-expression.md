---
id: def-littlewood-product-limsup-expression
kind: definition
title: "Littlewood multiplicative liminf expression"
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
    - title: "Chow–Technau 2024"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "Theorem 1.5 and discussion in §§1–4"
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§1.2: badly approximable affine forms and the rational/irrational distinction"
---

## Definition

For $(\alpha,\beta)\in\mathbb R^2$, define the Littlewood product liminf by
$$\mathcal L(\alpha,\beta):=\liminf_{n\to\infty}n\,\|n\alpha\|_{\mathbb R/\mathbb Z}\,\|n\beta\|_{\mathbb R/\mathbb Z}.$$

## Definition references

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 1.5 and discussion in §§1–4.

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §1.2: badly approximable affine forms and the rational/irrational distinction.


## Facts & Assumptions

**Given:** The distance-to-nearest-integer function.

[F1] $\|x\|_{\mathbb R/\mathbb Z}$ is the distance from $x$ to the nearest integer. [[def-distance-to-nearest-integer]]
