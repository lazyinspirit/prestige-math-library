---
id: def-limsup-tubes-about-affine-subspaces
kind: definition
title: "Limsup sets of shrinking neighborhoods of affine subspaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, §1"
      url: "https://arxiv.org/pdf/1703.10015v2"
---

## Definition

Fix integers $k\ge1$ and $0\le\ell<k$. Let $R_j\subset\mathbb R^k$ be affine $\ell$-dimensional planes and let $\Upsilon_j>0$ with $\Upsilon_j\to0$. For $r>0$, set $\Delta(R_j,r):=\{x\in\mathbb R^k:\operatorname{dist}_2(x,R_j)<r\}$. Their shrinking-tube limsup set is

$$\Lambda(\Upsilon):=\limsup_{j\to\infty}\Delta(R_j,\Upsilon_j)=\{x:x\in\Delta(R_j,\Upsilon_j)\text{ for infinitely many }j\}.$$

For any positive sequence $a_j$, $\Lambda(a)$ denotes the same construction with $a_j$ in place of $\Upsilon_j$; it is defined whether or not $a_j\to0$.

## Definition references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, §1](https://arxiv.org/pdf/1703.10015v2)
