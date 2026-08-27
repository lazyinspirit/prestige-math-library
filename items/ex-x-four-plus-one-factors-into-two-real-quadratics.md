---
id: ex-x-four-plus-one-factors-into-two-real-quadratics
kind: example
title: "$x^4+1$ factors over $\\mathbb R$ into two irreducible quadratics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-square-roots, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, polynomials and roots"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Example

Over $\mathbb R$ one has
$$
x^4+1=(x^2+\sqrt 2\,x+1)(x^2-\sqrt 2\,x+1),
$$
and each quadratic factor is irreducible.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^4+1$.

[L1] The positive real number $2$ has a unique positive square root $\sqrt 2$ ([[thm-of-square-roots]]).

[L2] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Using $(\sqrt 2)^2=2$ from [L1], direct expansion gives $$ (x^2+\sqrt 2\,x+1)(x^2-\sqrt 2\,x+1)=x^4+1. $$ [L1, algebra]

2.1 The quadratic $x^2+\sqrt 2\,x+1$ has discriminant $2-4=-2<0$, so it has no real root; the same is true of $x^2-\sqrt 2\,x+1$. Therefore both quadratic factors are irreducible over $\mathbb R$. [L2, step 1.1, algebra]

2.2 Their roots in $\mathbb C$ are $$ \frac{-\sqrt 2 \pm i\sqrt 2}{2} \quad\text{and}\quad \frac{\sqrt 2 \pm i\sqrt 2}{2}, $$ the four fourth roots of $-1$. Pairing each nonreal root with its conjugate recovers the two real quadratic factors from step 1.1. [L1, step 1.1, algebra]

3.1 Hence $x^4+1$ is a concrete polynomial that is irreducible over neither $\mathbb R$ nor $\mathbb C$, but over $\mathbb R$ it factors exactly into two irreducible quadratics. [step 2.1, step 2.2] ∎
