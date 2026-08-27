---
id: ex-x-cubed-minus-two-over-r-and-c
kind: example
title: "$x^3-2$ over $\\mathbb R$ and over $\\mathbb C$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-odd-degree-real-polynomial-has-a-real-root, thm-of-square-roots, thm-reals-ordered-field]
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, extension fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-20
---

## Example

Let $r$ be the real cube root of $2$. Then
$$
x^3-2=(x-r)(x^2+rx+r^2)
$$
over $\mathbb R$, and
$$
x^3-2=\left(x-r\right)\left(x-\frac{-1+i\sqrt 3}{2}\,r\right)\left(x-\frac{-1-i\sqrt 3}{2}\,r\right)
$$
over $\mathbb C$.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^3-2$.

[L1] Every odd-degree real polynomial has a real root ([[thm-odd-degree-real-polynomial-has-a-real-root]]).

[L2] Every positive real has a unique nonnegative square root ([[thm-of-square-roots]]).

[L3] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the polynomial $f$ has a real root $r$. Since $r^3=2>0$, [L3] gives $r>0$. The identity $x^3-r^3=(x-r)(x^2+rx+r^2)$ therefore yields $$ x^3-2=(x-r)(x^2+rx+r^2) $$ over $\mathbb R$. [L1, L3, algebra]

2.1 If $x^2+rx+r^2=0$, then $$ (2x+r)^2 = 4x^2+4rx+r^2 = -3r^2, $$ which is impossible in $\mathbb R$ because the left-hand side is nonnegative while the right-hand side is negative. So the quadratic factor is irreducible over $\mathbb R$. [step 1.1, L3, algebra]

2.2 By [L2], let $\sqrt 3 > 0$ be the real square root of $3$. Solving the quadratic factor from step 1.1 gives the two nonreal roots $$ \frac{-r \pm i\sqrt 3\,r}{2}. $$ Substituting them back into the factorization from step 1.1 gives the displayed complete factorization over $\mathbb C$. [L2, step 1.1, algebra]

3.1 Thus $x^3-2$ has one real linear factor and one irreducible quadratic factor over $\mathbb R$, but it splits completely into three linear factors over $\mathbb C$. [step 2.1, step 2.2] ∎
