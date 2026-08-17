---
id: def-polynomial-ring-on-a-family-of-indeterminates
kind: definition
title: "The polynomial ring $R[x_i:i\\in I]$ as finitely supported coefficient families on monomials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monomials-on-an-index-set, def-commutative-ring, def-finite-sum-in-a-commutative-monoid]
justified_by: [thm-polynomial-ring-on-a-family-is-a-commutative-ring]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring ([[def-commutative-ring]]) and let $I$ be a set.
The set $R[x_i:i\in I]$ consists of the functions

$$c:\mathcal M(I)\longrightarrow R$$

with finite support, where $\mathcal M(I)$ is the monoid of
[[def-monomials-on-an-index-set]]. We write such a function as the formal sum
$\sum_a c_a x^a$. Addition is pointwise. Multiplication is the convolution

$$(cd)_u:=\sum_{a+b=u}c_a d_b,$$

where only pairs in $\operatorname{supp}(c)\times\operatorname{supp}(d)$
contribute and the sum is the finite sum of
[[def-finite-sum-in-a-commutative-monoid]]. The constant $r\in R$ is the
coefficient family supported at the zero monomial with value $r$, and the
indeterminate $x_i$ is supported at the exponent family that is $1$ at $i$ and
$0$ elsewhere.

The convolution is well defined and these operations make the displayed set a
commutative ring by [[thm-polynomial-ring-on-a-family-is-a-commutative-ring]].
