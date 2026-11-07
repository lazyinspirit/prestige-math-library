---
id: def-badly-approximable-matrix
kind: definition
title: "Badly approximable system of linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-khintchine-groshev-matrix-approximation-set
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Kleinbock, Flows on homogeneous spaces and Diophantine properties of matrices, §2"
      url: "https://arxiv.org/pdf/math/9808057"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §4.3"
      url: "https://arxiv.org/pdf/1601.01948v1"
---

## Definition

For integers $n,m\ge1$ and a real matrix $X\in[0,1]^{n\times m}$, call $X$ badly approximable if

$$\inf_{q\in\mathbb Z^n\setminus\{0\},\ p\in\mathbb Z^m}\|q\|_\infty^n\,\|qX+p\|_\infty^m>0.$$

The positive lower bound is uniform over all nonzero integer rows $q$ and all integer offsets $p$; the exponents are respectively the number $n$ of integer variables and the number $m$ of forms.

## Definition references

[Kleinbock, *Flows on homogeneous spaces and Diophantine properties of matrices*, §2](https://arxiv.org/pdf/math/9808057)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §4.3](https://arxiv.org/pdf/1601.01948v1)
