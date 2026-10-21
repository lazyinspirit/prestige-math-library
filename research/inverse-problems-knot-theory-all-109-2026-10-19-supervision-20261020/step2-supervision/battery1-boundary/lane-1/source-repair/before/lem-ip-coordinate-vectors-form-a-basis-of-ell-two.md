---
id: lem-ip-coordinate-vectors-form-a-basis-of-ell-two
kind: lemma
title: Coordinate vectors form the Hilbert basis of real ell-two
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - lem-square-summable-sequences-form-a-hilbert-space
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; coordinate truncations converge by the finite-tail property in the definition of square summability."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§2.3, the periodic wavelet coefficient model and its finite-coordinate truncations."
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models (Cambridge University Press, 2016)"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§4.2, orthonormal wavelet bases and finite coefficient truncations."
---

## Statement

Let $H=\ell^2(\mathbb N,\mathbb R)$ with its canonical real inner product, and for each $j\in\mathbb N$ let $e_j$ be the sequence whose $j$th coordinate is $1$ and whose other coordinates are $0$. Then $(e_j)_{j\in\mathbb N}$ is a complete orthonormal basis of $H$. For every $x=(x_j)\in H$, the truncations $\sum_{j=1}^N x_je_j$ converge in $H$ to $x$, and $\|x\|_2^2=\sum_{j\in\mathbb N}|x_j|^2$.

## Statement references

[[def-square-summable-family-on-an-arbitrary-index-set|the canonical square-sum norm and finite-tail property on real sequence space]]

[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis|an orthonormal basis is an orthonormal family with dense linear span]]

[[lem-square-summable-sequences-form-a-hilbert-space|real ell-two is complete for its canonical norm]]

[Teschl, §2.1, full notes](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf)

[Bühler and Salamon, Definition 2.62 and Exercise 2.64](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf)

## Facts & Assumptions

**Given:** The real sequence Hilbert space $H=\ell^2(\mathbb N,\mathbb R)$ and the coordinate vectors $(e_j)$.

[F1] Square summability means $\sum_j|x_j|^2<\infty$, the norm squared is that sum, and finite tails of the sum can be made arbitrarily small. [[def-square-summable-family-on-an-arbitrary-index-set]]

[F2] The canonical inner product makes real $\ell^2(\mathbb N)$ a complete real Hilbert space. [[lem-square-summable-sequences-form-a-hilbert-space]]

[F3] An orthonormal family is a Hilbert basis when its closed linear span is the whole Hilbert space. [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]

## Proof

**Given:** $H=\ell^2(\mathbb N,\mathbb R)$ and $e_j$ with coordinate $1$ at $j$ and $0$ elsewhere.

1.1 For all $i,j$, the canonical inner product gives $\langle e_i,e_j\rangle=\delta_{ij}$, so the coordinate family is orthonormal. [F1, F2, given, algebra]

2.1 Let $x=(x_j)\in H$ and $\varepsilon>0$. By [F1], choose $N$ so that $\sum_{j>N}|x_j|^2<\varepsilon^2$. The coordinate formula gives $\|x-\sum_{j=1}^N x_je_j\|_2^2=\sum_{j>N}|x_j|^2<\varepsilon^2$. Thus finite linear combinations of the $e_j$ are dense in $H$; by [F3], the orthonormal family is a complete orthonormal basis. The same tail estimate proves the stated truncation convergence, and the norm identity is [F1]. [F1, F3, step 1.1, given, algebra] ∎
