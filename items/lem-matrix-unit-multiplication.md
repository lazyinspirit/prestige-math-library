---
id: lem-matrix-unit-multiplication
kind: lemma
title: '$E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matrix-units, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'P. E. Leonard, Linear Algebra Notes, §3.4'
      url: 'https://www.ms.uky.edu/~leep/linalg_notes_f12.pdf'
pipeline_run: null
---

## Statement

For $E_{ij}\in M_{m\times n}(F)$ and
$E_{k\ell}\in M_{n\times p}(F)$,

$$E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}.$$

## Facts & Assumptions

**Given:** A field $F$ and indices $i<m$, $j,k<n$, and $\ell<p$.

[L1] The matrix unit $E_{ij}$ has entry $\delta_{ri}\delta_{sj}$ in position $(r,s)$ ([[def-matrix-units]]).

## Proof

**Proof technique:** direct.

1.1 For $r<m$ and $s<p$, the product entry is $(E_{ij}E_{k\ell})_{rs}=\sum_{t<n}\delta_{ri}\delta_{tj}\delta_{tk}\delta_{s\ell}$. [given, L1]

2.1 If $j\ne k$, every summand is zero. If $j=k$, only $t=j$ can contribute and the value is $\delta_{ri}\delta_{s\ell}$. [step 1.1, L1]

3.1 The two cases combine as $(E_{ij}E_{k\ell})_{rs}=\delta_{jk}(E_{i\ell})_{rs}$ for every entry, proving the matrix identity. [step 2.1, L1] ∎
