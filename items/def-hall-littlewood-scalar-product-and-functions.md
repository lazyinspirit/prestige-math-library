---
id: def-hall-littlewood-scalar-product-and-functions
kind: definition
title: "Hall–Littlewood scalar product and monic functions"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - def-dominance-order-on-partitions
justified_by:
  - thm-jordan-hall-pairing-and-hall-littlewood-basis
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, second edition, III §4 (4.11), VI §1 introductory characterization"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $s$ be an indeterminate and work in $\Lambda_{\mathbb Q(s)}$,
the scalar extension of [[def-stable-graded-ring-of-symmetric-functions]].
For a partition $\lambda$, let $m_r(\lambda)$ be the multiplicity of its
part $r$, and put
$$ z_\lambda=\prod_{r\ge1}r^{m_r(\lambda)}m_r(\lambda)!,\qquad b_\lambda(s)=\prod_{r\ge1}\prod_{j=1}^{m_r(\lambda)}(1-s^j),\qquad n(\lambda)=\sum_{i\ge1}(i-1)\lambda_i. $$
The **Hall–Littlewood scalar product** is the symmetric bilinear form with
$$ \langle p_\lambda,p_\mu\rangle_s=\delta_{\lambda\mu}z_\lambda\prod_i(1-s^{\lambda_i})^{-1}. $$
This defines a nondegenerate form, because the power sums are a rational
basis ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]) and
all displayed diagonal entries are nonzero. Different degrees are orthogonal;
empty products are $1$, so $\langle1,1\rangle_s=1$.

The **monic Hall–Littlewood functions** $P_\lambda(x;s)$ are characterized by
$$ P_\lambda=m_\lambda+\sum_{\mu\lhd\lambda}c_{\lambda\mu}(s)m_\mu,\qquad \langle P_\lambda,P_\mu\rangle_s=0\quad(\lambda\ne\mu), $$
where $\lhd$ is strict dominance ([[def-dominance-order-on-partitions]])
and the monomials use [[thm-monomial-symmetric-functions-form-the-integral-stable-basis]].
Existence, uniqueness, and the norm formula
$\langle P_\lambda,P_\lambda\rangle_s=b_\lambda(s)^{-1}$ are proved in
[[thm-jordan-hall-pairing-and-hall-littlewood-basis]], rather than assumed
in this definition. Set $Q_\lambda=b_\lambda(s)P_\lambda$.
For a real parameter $0<s<1$ the same formulas specialize wherever used
below; the theorem proves their regularity there. This form differs from
the ordinary symmetric-function Hall inner product, whose power-sum norms
are $z_\lambda$.
