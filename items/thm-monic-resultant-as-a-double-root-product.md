---
id: thm-monic-resultant-as-a-double-root-product
kind: theorem
title: "For monic $f,g$ of degrees $n,m$ splitting in a common extension, $\\operatorname{Res}(f,g)=\\prod_{i=1}^n\\prod_{j=1}^m(\\alpha_i-\\beta_j)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monic-resultant-root-product-and-common-root-criterion, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, definition preceding Proposition 4.35"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field and let $f,g\in F[t]$ be monic of degrees $n,m$. If in a common extension

$$f(t)=\prod_{i=1}^n(t-\alpha_i),\qquad g(t)=\prod_{j=1}^m(t-\beta_j),$$

then

$$\operatorname{Res}(f,g)=\prod_{i=1}^n\prod_{j=1}^m(\alpha_i-\beta_j).$$

If either degree is zero, both sides are the same empty product.

## Facts & Assumptions

**Given:** Monic polynomials $f,g$ splitting in a common field extension as in the Statement.

[L1] For monic $f$ with roots $\alpha_i$, the resultant satisfies $\operatorname{Res}(f,g)=\prod_i g(\alpha_i)$ ([[thm-monic-resultant-root-product-and-common-root-criterion]]).

[L2] A split monic polynomial $g$ has the factorization $g(t)=\prod_j(t-\beta_j)$ with roots counted with multiplicity ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate the factorization in [L2] at each $\alpha_i$ to get $g(\alpha_i)=\prod_{j=1}^m(\alpha_i-\beta_j)$. [given, L2]

2.1 Substitute step 1.1 into [L1] and reassociate the finite product to obtain the double product. [step 1.1, L1, algebra]

3.1 If $n=0$, [L1] is an empty outer product; if $m=0$, every $g(\alpha_i)=1$ and the inner products are empty. In either case both sides equal $1$. [step 2.1, L1, L2] ∎
