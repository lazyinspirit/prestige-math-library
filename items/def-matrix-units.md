---
id: def-matrix-units
kind: definition
title: 'Matrix units $E_{ij}$ and the Kronecker delta'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'P. E. Leonard, Linear Algebra Notes, §3.4'
      url: 'https://www.ms.uky.edu/~leep/linalg_notes_f12.pdf'
pipeline_run: null
---

## Definition

For indices $a,b$ in the same finite index set, the **Kronecker delta** is

$$\delta_{ab}:=\begin{cases}1,&a=b,\\0,&a\ne b.\end{cases}$$

Let $i<m$ and $j<n$. The **matrix unit** $E_{ij}\in M_{m\times n}(F)$ is the
matrix whose $(r,s)$-entry is

$$(E_{ij})_{rs}:=\delta_{ri}\delta_{sj}.$$

Thus $E_{ij}$ has entry $1$ in position $(i,j)$ and entry $0$ everywhere else.
When a dimension is zero, no index of that dimension exists and there are no
matrix units of the corresponding shape.
