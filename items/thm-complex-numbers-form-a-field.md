---
id: thm-complex-numbers-form-a-field
kind: theorem
title: '$\mathbb C=\mathbb R[x]/(x^2+1)$ is a field, every element is uniquely $a+bi$, and every nonzero element has inverse $(a-bi)/(a^2+b^2)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-numbers-and-arithmetic, lem-x-squared-plus-one-is-irreducible-over-the-reals, thm-irreducible-quotient-adjoins-a-root, thm-reals-ordered-field, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Statement

$\mathbb C=\mathbb R[x]/(x^2+1)$ is a field containing the embedded copy of
$\mathbb R$. Every complex number has a unique form $a+bi$ with $a,b\in\mathbb R$,
and
$$
(a+bi)+(u+vi)=(a+u)+(b+v)i,
$$
$$
(a+bi)(u+vi)=(au-bv)+(av+bu)i.
$$
If $a+bi\ne0$, then
$$
(a+bi)^{-1}=\frac{a-bi}{a^2+b^2}.
$$

## Facts & Assumptions

**Given:** The quotient construction $\mathbb C=\mathbb R[x]/(x^2+1)$.

[F1] The polynomial $x^2+1$ is irreducible over $\mathbb R$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

[F2] For a monic irreducible polynomial $p$ of degree $n$, $F[x]/(p)$ is a field extension of $F$ and every class has a unique representative of degree below $n$ ([[thm-irreducible-quotient-adjoins-a-root]]).

[F3] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

[F4] In an ordered field every nonzero square is positive ([[lem-of-square-positive]]).

[F5] $\mathbb C$ is the quotient $\mathbb R[x]/(x^2+1)$ and $i=x+(x^2+1)$ ([[def-complex-numbers-and-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F2] to [F1]. With the construction in [F5], this proves that $\mathbb C$ is a field, that the constant-class map embeds $\mathbb R$, and that every class has a unique representative $a+bx$, hence a unique form $a+bi$. [F1, F2, F5]

2.1 Quotient addition and multiplication, followed by $i^2=-1$, give the two displayed coordinate formulas. All field axioms are inherited from the field in step 1.1. [F5, step 1.1, algebra]

2.2 If $a+bi\ne0$, uniqueness in step 1.1 gives $a\ne0$ or $b\ne0$. The corresponding square is positive by [F4], the other square is nonnegative, and therefore $a^2+b^2>0$ in the ordered field [F3]. [F3, F4, step 1.1]

3.1 Direct multiplication using step 2.1 gives $(a+bi)(a-bi)=a^2+b^2$. Since the real denominator is nonzero by step 2.2, division proves the inverse formula. [step 2.1, step 2.2, algebra] ∎
