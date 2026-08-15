---
id: def-monic-resultant
kind: definition
title: "The monic resultant $\\operatorname{Res}(f,g)$ from the symmetric coefficient expression of $\\prod_i g(x_i)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-fundamental-theorem-of-symmetric-polynomials, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35 through Example 4.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Definition

Let $f(t)=t^n+a_1t^{n-1}+\cdots+a_n$ be monic and let $g(t)$ be any polynomial over the same commutative ring. The polynomial

$$\prod_{i=1}^n g(x_i)$$

is symmetric in the formal variables $x_1,\ldots,x_n$. By [[thm-fundamental-theorem-of-symmetric-polynomials]] it has a unique expression $Q_g(e_1,\ldots,e_n)$ with coefficients polynomial in the coefficients of $g$. The **monic resultant of $f$ and $g$** is

$$\operatorname{Res}(f,g):=Q_g(-a_1,a_2,\ldots,(-1)^na_n).$$

For $n=0$, the product is empty and $\operatorname{Res}(1,g)=1$.
