---
id: def-companion-matrix-of-a-monic-polynomial
kind: definition
title: "The companion matrix of a monic polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 7"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Definition

For a monic polynomial

$$f(x)=x^d+a_{d-1}x^{d-1}+\cdots+a_1x+a_0$$

of positive degree over a commutative ring, its **companion matrix** is

$$C(f)=\begin{pmatrix}0&0&\cdots&0&-a_0\\1&0&\cdots&0&-a_1\\0&1&\ddots&0&-a_2\\\vdots&\ddots&\ddots&\vdots&\vdots\\0&\cdots&0&1&-a_{d-1}\end{pmatrix}.$$

Thus the ones are on the subdiagonal. This is the matrix of multiplication by
$x$ on the power basis $1,x,\ldots,x^{d-1}$ of the cyclic module $R[x]/(f)$.
