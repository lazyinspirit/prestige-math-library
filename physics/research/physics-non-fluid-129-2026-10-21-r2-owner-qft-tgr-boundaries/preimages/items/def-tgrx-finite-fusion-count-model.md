---
id: def-tgrx-finite-fusion-count-model
kind: definition
title: Finite fusion transfer count model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgrx-sector-code
dependency_roles:
  def-tgrx-sector-code: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, complete paper, Appendix A.7.2-A.7.3
      url: https://arxiv.org/pdf/1607.03901
      locator: Complete 62-page paper; Appendix A.7.2-A.7.3, PDF pp. 52-54, finite-dimensional sectors and entropy conventions.
    - title: John Watrous, The Theory of Quantum Information, complete author-hosted book manuscript
      url: https://jhwatrous.github.io/TQI.pdf
      locator: Complete 598-page book manuscript; Section 5.2, finite-dimensional entropy and density matrices.
---

## Definition

A **finite fusion transfer count model** consists of a finite nonempty label set $I$, a distinguished label $0\in I$, and an explicitly supplied matrix $N=(N_{ab})_{a,b\in I}$ whose entries lie in $\{0,1,2,\ldots\}$. The entry $N_{ab}$ is the multiplicity of elementary transitions from label $b$ to label $a$; formally, the transition copies from $b$ to $a$ are the triples $(b,a,j)$ with integer $1\leq j\leq N_{ab}$. A length-$n$ path is a sequence of $n+1$ labels together with a chosen transition copy between each consecutive pair. For each integer $n\geq0$, define the vacuum-return count $D_n:=(N^n)_{00}$. If $D_n>0$, set $H_n:=\mathbb C^{D_n}$ with its standard inner product and define $\rho_n:=D_n^{-1}I_{H_n}$. If $D_n=0$, no normalized operator $\rho_n$ is assigned. The matrix $N$ is model data; no fusion category, quantum group, or representation is presumed to realize it.

## Definition references

[[def-tgrx-sector-code]]

[Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction](https://arxiv.org/pdf/1607.03901)

[John Watrous, The Theory of Quantum Information](https://jhwatrous.github.io/TQI.pdf)

## Remarks

The definition records a finite matrix count only. It does not assert the existence of a fusion category or identify $D_n$ with a gravitational state count.
