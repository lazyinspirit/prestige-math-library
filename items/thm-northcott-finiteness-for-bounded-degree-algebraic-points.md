---
id: thm-northcott-finiteness-for-bounded-degree-algebraic-points
kind: theorem
title: "Northcott finiteness for bounded-degree algebraic projective points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - thm-absolute-height-is-invariant-under-field-extension
  - thm-northcott-finiteness-for-projective-points
  - thm-product-formula-for-number-fields
  - lem-minimal-polynomial-height-coefficient-bound
  - thm-tower-law-for-finite-field-extensions
  - thm-root-bound-for-polynomials-over-a-domain
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms"
      url: "https://www.numdam.org/article/CM_1993__89_2_163_0.pdf"
      locator: "§1, Northcott finiteness discussion"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $N\ge0$ and $D\ge1$ be integers, and let $B\ge0$ be real. For the absolute logarithmic Weil height $h$ on projective space, the set
$$
\{P\in\mathbb P^N(\overline K):[K(P):K]\le D,\ h(P)\le B\}
$$
is finite.

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[thm-northcott-finiteness-for-projective-points]]

## Facts & Assumptions

**Given:** AC; a number field $K$; integers $N\ge0$ and $D\ge1$; and a real height bound $B\ge0$.

[A1] The absolute height construction and the number-field product formula use AC. ([[def-axiom-of-choice]], [[thm-product-formula-for-number-fields]])

[F1] The logarithmic absolute height on projective space is the weighted sum of local logarithmic maxima, is invariant under finite field extension, and satisfies $h([x_0:x_i])\le h([x_0:\cdots:x_N])$ whenever $(x_0,x_i)\ne(0,0)$. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]], [[thm-absolute-height-is-invariant-under-field-extension]])

[F2] Under AC, an algebraic number $\alpha$ of degree $m$ over $\mathbb Q$ and height at most $B$ has primitive integer minimal polynomial coefficients bounded by $\binom mi e^{mB}$. The bound includes its positive leading coefficient. ([[lem-minimal-polynomial-height-coefficient-bound]])

[F3] Degrees multiply in finite towers; a nonzero polynomial over a field has at most its degree many roots. ([[thm-tower-law-for-finite-field-extensions]], [[thm-root-bound-for-polynomials-over-a-domain]])

## Proof

1.1 Put $D'=[K:\mathbb Q]D$. If $[K(\alpha):K]\le D$, then $\mathbb Q(\alpha)\subseteq K(\alpha)$ and the tower law in [F3] gives $m=[\mathbb Q(\alpha):\mathbb Q]\le D'$. If also $h(\alpha)\le B$, [F2] bounds every coefficient of its primitive integer minimal polynomial by $2^{D'}e^{D'B}$. This bound uses the existing primitive-polynomial result, whose finite-place Gauss-norm argument and archimedean binomial estimate are separate; no binomial loss is summed over infinitely many finite places. [given, A1, F2, F3, algebra]

2.1 There are finitely many integer coefficient lists of lengths at most $D'+1$ within this fixed bound, and each nonzero polynomial on that list has finitely many roots by [F3]. Hence only finitely many algebraic numbers have degree at most $D$ over $K$ and absolute height at most $B$. [given, F3, step 1.1, algebra]

3.1 For any $P=[x_0:\cdots:x_N]$ in the set, choose an index $j$ with $x_j\ne0$. Each ratio $\alpha_i=x_i/x_j$ has degree over $K$ at most $[K(P):K]\le D$, and [F1] gives $h([1:\alpha_i])=h([x_j:x_i])\le h(P)\le B$. Step 2.1 therefore leaves finitely many choices for every ratio. [given, F1, step 2.1, choose]

4.1 There are finitely many pivot indices and finitely many tuples of the remaining $N$ ratios, each determining at most one projective point. This proves finiteness, including $N=0$, where the tuple is empty. [given, step 3.1, algebra] ∎
