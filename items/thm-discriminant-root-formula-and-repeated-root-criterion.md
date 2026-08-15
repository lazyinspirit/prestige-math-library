---
id: thm-discriminant-root-formula-and-repeated-root-criterion
kind: theorem
title: "The discriminant is $\\prod_{i<j}(\\alpha_i-\\alpha_j)^2$ and vanishes exactly when a monic polynomial has a repeated root"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-discriminant-of-a-monic-polynomial, def-polynomials-that-split-and-splitting-fields, thm-repeated-root-derivative-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35 through Example 4.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field and let $f\in F[t]$ be monic of degree $n$. In a splitting field write

$$f(t)=\prod_{i=1}^n(t-\alpha_i).$$

Then

$$\operatorname{Disc}(f)=\prod_{1\le i<j\le n}(\alpha_i-\alpha_j)^2.$$

Moreover, $\operatorname{Disc}(f)=0$ if and only if $f$ has a repeated root. This criterion holds in every characteristic.

## Facts & Assumptions

**Given:** A field $F$, a monic polynomial $f$, and a splitting field with roots $\alpha_1,\ldots,\alpha_n$.

[L1] The discriminant is the coefficient expression obtained from $\Delta_n^2$, and in a split algebra it evaluates to $\Delta_n(\alpha_1,\ldots,\alpha_n)^2$ ([[def-discriminant-of-a-monic-polynomial]]).

[L2] A splitting field presents $f$ as a product of linear factors with roots counted according to multiplicity ([[def-polynomials-that-split-and-splitting-fields]]).

[L3] A root $a$ of a nonzero polynomial is repeated if and only if $f'(a)=0$ ([[thm-repeated-root-derivative-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate the coefficient expression in [L1] at the roots supplied by [L2]. The definition of $\Delta_n$ gives $\operatorname{Disc}(f)=\prod_{i<j}(\alpha_i-\alpha_j)^2$. [given, L1, L2]

2.1 Because the splitting field is a field, this finite product is zero exactly when one factor $\alpha_i-\alpha_j$ is zero, equivalently when two entries in the root list coincide. [step 1.1, algebra]

3.1 Two entries coincide exactly when the linear factor at that root occurs at least twice, so $f$ has a repeated root. By [L3] this agrees with the derivative criterion. No step divides by $2$, so the equivalence remains valid in characteristic two. [step 2.1, L2, L3] ∎
