---
id: def-badly-approximable-affine-form-system
kind: definition
title: "Badly approximable system of affine forms"
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

An affine system $(A,b)$ is badly approximable if
$$\liminf_{\substack{q\in\mathbb Z^n\\\|q\|_\infty\to\infty}}\left(\min_{p\in\mathbb Z^m}\|Aq+b+p\|_\infty\right)^m\|q\|_\infty^n>0.$$

## Definition references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal lattice-flow conventions.


## Facts & Assumptions

**Given:** The affine form system $(A,b)$.

[F1] An affine system evaluates at $q$ as $Aq+b$, with integer approximants $p$. [[def-affine-linear-form-system]]
