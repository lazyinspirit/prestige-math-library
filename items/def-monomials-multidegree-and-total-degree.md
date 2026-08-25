---
id: def-monomials-multidegree-and-total-degree
kind: definition
title: "Monomials, coefficients, degree in each variable and total degree in $F[x_1,\\dots,x_n]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multivariate-polynomial-ring-by-iteration, def-polynomial-ring-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, thm-polynomial-ring-is-a-commutative-ring, thm-universal-property-of-a-polynomial-ring, def-polynomial-evaluation-and-root, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, def-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Lemma 2.1"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field. Every polynomial in the iterated ring
$F[x_1,\dots,x_n]$ has a unique finite expansion

$$f=\sum_{\mathbf{t}}c_{\mathbf{t}}x^{\mathbf{t}},\qquad x^{\mathbf{t}}:=x_1^{t_1}\cdots x_n^{t_n},$$

over finitely many multi-indices $\mathbf{t}=(t_1,\dots,t_n)\in\mathbb{N}^n$.

For such an index, the scalar $c_{\mathbf{t}}$ is the **coefficient**
$[x^{\mathbf{t}}]f$ of the monomial $x^{\mathbf{t}}$.

The **degree in $x_i$** is the largest $t_i$ with $c_{\mathbf{t}}\ne0$, and the
**total degree** is the largest value of $t_1+\cdots+t_n$ with
$c_{\mathbf{t}}\ne0$. For the zero polynomial, every degree is left undefined.

Evaluation at a point $(a_1,\dots,a_n)\in F^n$ is the iterated substitution
supplied by the universal property of the polynomial ring.

## Remarks

- The page uses this expansion constantly. The Nullstellensatz and the grid
  reduction need both the separate variable degrees and the total degree, and
  neither is visible in the bare iterated-ring construction unless it is named
  here.
