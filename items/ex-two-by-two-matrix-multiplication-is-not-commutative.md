---
id: ex-two-by-two-matrix-multiplication-is-not-commutative
kind: example
title: 'Two explicit $2$ by $2$ matrices do not commute'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-matrix-unit-multiplication,
       cor-matrix-rings-are-noncommutative-in-dimension-at-least-two]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In $M_2(F)$, let

$$A=E_{01}=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad B=E_{10}=\begin{pmatrix}0&0\\1&0\end{pmatrix}.$$

Then $AB\ne BA$.

## Facts & Assumptions

**Given:** A field $F$ and the displayed matrix units in $M_2(F)$.

[L1] Matrix units satisfy $E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$ ([[lem-matrix-unit-multiplication]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $AB=E_{00}=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ while $BA=E_{11}=\begin{pmatrix}0&0\\0&1\end{pmatrix}$. [given, L1]

2.1 The products differ at entry $(0,0)$, since $1\ne0$ in a field, so $A$ and $B$ do not commute. [step 1.1, L1] ∎
