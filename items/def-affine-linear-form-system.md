---
id: def-affine-linear-form-system
kind: definition
title: "System of affine linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-khintchine-groshev-matrix-approximation-set
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

For $m,n\ge1$, an affine system of $m$ real linear forms in $n$ integer variables is a pair $(A,b)$ with $A\in M_{m,n}(\mathbb R)$ and $b\in\mathbb R^m$, evaluated at $q\in\mathbb Z^n$ by $Aq+b$. Integer approximation is measured by $\min_{p\in\mathbb Z^m}\|Aq+b+p\|_\infty$.

## Definition references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal lattice-flow conventions.


## Facts & Assumptions

**Given:** The matrix convention for linear forms and its integer offset.

[F1] The K–G matrix convention uses row vectors; transposition identifies it with $Aq+p$ for column $q$. [[def-khintchine-groshev-matrix-approximation-set]]
