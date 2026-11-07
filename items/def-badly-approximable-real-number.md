---
id: def-badly-approximable-real-number
kind: definition
title: "Badly approximable real number"
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

A real number $\alpha$ is badly approximable if
$$\inf_{q\in\mathbb Z,\ q\ge1}q\,\|q\alpha\|_{\mathbb R/\mathbb Z}>0.$$

## Definition references

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 1.5 and discussion in §§1–4.

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §1.2: badly approximable affine forms and the rational/irrational distinction.


## Facts & Assumptions

**Given:** Distance to the nearest integer.

[F1] $\|x\|_{\mathbb R/\mathbb Z}=\min_{k\in\mathbb Z}|x-k|$. [[def-distance-to-nearest-integer]]
