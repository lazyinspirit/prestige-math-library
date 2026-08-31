---
id: def-real-frechet-derivative-on-real-and-complex-matrix-spaces
kind: definition
title: "The real Frechet derivative on real and complex matrix spaces with the Frobenius norm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-frobenius-matrix-norm]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Definition

Let $U$ be an open subset of a real matrix space $\mathbb R^{m\times n}$ or of
a complex matrix space $\mathbb C^{m\times n}$ viewed as a real vector space,
and let $F:U\to W$ take values in a finite-dimensional real normed vector
space $(W,\|\,\cdot\,\|_W)$.
We say that $F$ is **real Fr\'echet differentiable** at $A\in U$ if there is a
real-linear map $L$ such that

$$\frac{\|F(A+H)-F(A)-L[H]\|_W}{\|H\|_F}\longrightarrow0\qquad(H\to0,\ H\ne0).$$

That map $L$ is the **real Fr\'echet derivative** of $F$ at $A$ and is denoted
$DF(A)$.
