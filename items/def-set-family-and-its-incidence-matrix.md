---
id: def-set-family-and-its-incidence-matrix
kind: definition
title: "A finite family of subsets of $[n]$ and its incidence matrix over $F$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-incidence-vector-of-a-subset, def-standard-bilinear-form-on-a-coordinate-space, def-matrix-space, def-matrix-product-and-identity-matrix, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 3"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Definition

Fix a field $F$ and a natural number $n$.

A **set family on $[n]$** is a finite list

$$\mathcal{F}=(A_i)_{i<m}$$

of pairwise distinct subsets of $[n]$. Its **incidence matrix over $F$** is the
matrix

$$N(\mathcal{F})\in F^{m\times n}$$

whose row indexed by $i<m$ is the incidence vector $v_{A_i}$ of $A_i$.

If $N=N(\mathcal{F})$, define its **Gram matrix** to be the $m\times m$ matrix
$\Gamma(\mathcal F)$ whose $(i,j)$ entry is

$$\sum_{k<n}N_{ik}N_{jk}=\langle v_{A_i},v_{A_j}\rangle,$$

so the Gram matrix records all pairings of the incidence vectors at once.

## Remarks

- Distinctness of the sets is part of the definition because all the bounds on
  this page count sets, not repeated rows of a matrix.
