---
id: def-hall-inner-product-on-symmetric-functions
kind: definition
title: The Hall inner product on symmetric functions
status: draft
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §4, equation (4.5), printed p. 63
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.9, printed pp. 191–195
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Definition

The **Hall inner product** is the graded $\mathbb Z$-bilinear form on the
stable ring $\Lambda$ ([[def-stable-graded-ring-of-symmetric-functions]])
characterized by
$$\langle h_\lambda,m_\mu\rangle_H=\delta_{\lambda\mu}$$
for all partitions $\lambda,\mu$ ([[def-partition-young-diagram-and-conjugate-partition]],
[[thm-elementary-and-complete-families-freely-generate-the-stable-ring]],
[[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]), where
$\delta_{\lambda\mu}=1$ if $\lambda=\mu$ and $0$ otherwise. In particular,
homogeneous components of unequal degrees are orthogonal.
For the empty partition, $h_\varnothing=m_\varnothing=1$, so
$\langle1,1\rangle_H=1$.

For each $d\ge0$, the proven integral bases give unique finite expansions
$$f_d=\sum_{\lambda\vdash d}a_\lambda h_\lambda,\qquad g_d=\sum_{\mu\vdash d}b_\mu m_\mu$$
for $f_d,g_d\in\Lambda^d$. Define their degree-$d$ pairing by
$$\langle f_d,g_d\rangle_H:=\sum_{\lambda,\mu\vdash d}a_\lambda b_\mu\delta_{\lambda\mu}.$$
For $f=\sum_d f_d$ and $g=\sum_d g_d$ in the algebraic direct sum $\Lambda$,
set $$\langle f,g\rangle_H:=\sum_d\langle f_d,g_d\rangle_H.$$
Only finitely many $d$ contribute because $f$ and $g$ have finite degree
support. The unique expansions in the two integral bases make this a
well-defined $\mathbb Z$-bilinear form; the displayed basis rule determines it
uniquely on all of $\Lambda$.
