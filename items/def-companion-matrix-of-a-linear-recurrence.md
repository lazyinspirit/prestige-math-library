---
id: def-companion-matrix-of-a-linear-recurrence
kind: definition
title: "The row-shift companion matrix of a linear recurrence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-recurrence-and-recurrence-characteristic-polynomial, def-matrices-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slides 16-18"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $d\ge1$, and let

$$\chi(t)=t^d+c_1t^{d-1}+\cdots+c_d.$$

The **row-shift companion matrix** of this recurrence polynomial is the matrix $C\in M_d(R)$ ([[def-matrices-over-a-commutative-ring]]) whose entries are

$$C_{i,i+1}=1\quad(0\le i<d-1),\qquad C_{d-1,j}=-c_{d-j}\quad(0\le j<d),$$

with all other entries zero. Thus

$$C=\begin{pmatrix}0&1&0&\cdots&0\\0&0&1&\cdots&0\\\vdots&&&\ddots&\vdots\\0&0&0&\cdots&1\\-c_d&-c_{d-1}&-c_{d-2}&\cdots&-c_1\end{pmatrix}.$$

For a recurrence sequence $a$, its state at time $n$ is the column vector $v_n=(a_n,a_{n+1},\ldots,a_{n+d-1})^{\mathsf T}$. This convention matches the signs and order in [[def-linear-recurrence-and-recurrence-characteristic-polynomial]].

