---
id: def-discriminant-of-a-monic-polynomial
kind: definition
title: "The discriminant of a monic polynomial as the coefficient expression of $\\Delta_n^2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-vandermonde-square-is-symmetric, thm-fundamental-theorem-of-symmetric-polynomials, cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35 through Example 4.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Definition

By [[prop-vandermonde-square-is-symmetric]] and [[thm-fundamental-theorem-of-symmetric-polynomials]], there is a unique polynomial $D_n\in\mathbb Z[T_1,\ldots,T_n]$ such that

$$\Delta_n(x_1,\ldots,x_n)^2=D_n(e_1,\ldots,e_n).$$

For a monic polynomial

$$f(t)=t^n+a_1t^{n-1}+\cdots+a_n$$

over a commutative ring, its **discriminant** is

$$\operatorname{Disc}(f):=D_n(-a_1,a_2,\ldots,(-1)^na_n).$$

Equivalently, in any algebra in which $f$ splits with roots $\alpha_1,\ldots,\alpha_n$, this coefficient expression evaluates to $\Delta_n(\alpha_1,\ldots,\alpha_n)^2$. The definition therefore depends only on the coefficients and not on a choice or ordering of roots. For a monic constant polynomial, $\operatorname{Disc}(1)=1$.
