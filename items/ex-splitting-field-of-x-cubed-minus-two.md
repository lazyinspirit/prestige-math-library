---
id: ex-splitting-field-of-x-cubed-minus-two
kind: example
title: 'The splitting field of $x^3-2$ over $\mathbb Q$ is $\mathbb Q(\sqrt[3]{2},\omega)$ with $\omega=(-1+i\sqrt3)/2$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-splitting-field-of-x-n-minus-a, thm-factorial-coordinate-bound-for-a-splitting-field, cor-splitting-fields-are-unique-up-to-base-isomorphism, thm-eisenstein-irreducibility-criterion, thm-nth-roots-exist, thm-of-square-roots, thm-complex-numbers-form-a-field, thm-rat-field]
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
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Example 21.15'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Example

Let $\alpha=\sqrt[3]{2}>0$ and $\omega=(-1+i\sqrt3)/2\in\mathbb C$. The roots of $x^3-2$ are $\alpha,\alpha\omega,\alpha\omega^2$, and its splitting field over $\mathbb Q$ is $\mathbb Q(\alpha,\omega)$. It is spanned over $\mathbb Q$ by at most $3!=6$ root monomials.

## Facts & Assumptions

**Given:** The polynomial $x^3-2\in\mathbb Q[x]$, the positive real root $\alpha=\sqrt[3]{2}$, and $\omega=(-1+i\sqrt3)/2$.

[F1] Positive real cube roots and square roots exist with the defining power equations ([[thm-nth-roots-exist]], [[thm-of-square-roots]]).

[F2] The complex numbers form a field with $i^2=-1$ and the usual coordinate arithmetic ([[thm-complex-numbers-form-a-field]]).

[F3] Once one nonzero root $\alpha$ of $x^n-a$ is fixed, all roots are $\zeta\alpha$ for the $n$th roots of unity $\zeta$ ([[prop-splitting-field-of-x-n-minus-a]]).

[F4] A degree-$n$ polynomial has a splitting field spanned by at most $n!$ root monomials ([[thm-factorial-coordinate-bound-for-a-splitting-field]]).

[F5] Eisenstein's criterion applies over $\mathbb Q$ to the stated integer divisibility hypotheses ([[thm-eisenstein-irreducibility-criterion]]).

[F6] Any two splitting fields of a nonzero polynomial are isomorphic by an isomorphism fixing the base field ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

## Verification

**Proof technique:** direct calculation.

1.1 By [F1], $\alpha^3=2$ and $\sqrt3^2=3$. Using [F2], direct calculation gives $\omega^2+\omega+1=0$, $\omega\ne1$, and $x^3-1=(x-1)(x-\omega)(x-\omega^2)$. Hence the cube roots of unity are exactly $1,\omega,\omega^2$. [F1, F2, algebra]

2.1 By [F3], the roots of $x^3-2$ are exactly $\alpha,\alpha\omega,\alpha\omega^2$. They generate $\mathbb Q(\alpha,\omega)$ because $\alpha$ is a root and $\omega=(\alpha\omega)/\alpha$, with $\alpha\ne0$. Hence this field is the splitting field. [F3, step 1.1]

3.1 Eisenstein at $2$ makes $x^3-2$ irreducible over $\mathbb Q$. Independently, [F4] gives a splitting field spanned by at most $3!=6$ root monomials; an isomorphism from it to $\mathbb Q(\alpha,\omega)$ supplied by [F6] fixes $\mathbb Q$ and carries roots to roots by direct evaluation, so it transports that spanning family to one of the stated kind here. [F4, F5, F6, step 2.1, algebra] ∎
