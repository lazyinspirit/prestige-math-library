---
id: ex-the-four-element-field-from-an-irreducible-quadratic
kind: example
title: 'The four-element field $(\mathbb Z/2)[x]/(x^2+x+1)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-irreducible-quotient-adjoins-a-root, thm-quadratic-and-cubic-irreducibility-test, thm-z-mod-p-is-a-field, prop-integers-modulo-n-as-a-quotient-ring]
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

## Example

Let $F=\mathbb Z/2$, with its quotient arithmetic
([[prop-integers-modulo-n-as-a-quotient-ring]]). This is a field
([[thm-z-mod-p-is-a-field]]). Then
$$K=F[x]/(x^2+x+1)=\{0,1,a,1+a\},\qquad a=x+(x^2+x+1),$$
is a field of four elements.

## Facts & Assumptions

**Given:** The field $F=\mathbb Z/2$ and the polynomial $x^2+x+1$.

[F1] A quadratic over a field is irreducible exactly when it has no root in that field ([[thm-quadratic-and-cubic-irreducibility-test]]).

[F2] The quotient by a monic irreducible degree-$n$ polynomial is a field and has unique representatives of degree below $n$ ([[thm-irreducible-quotient-adjoins-a-root]]).

## Verification

**Proof technique:** direct.

1.1 The values of $x^2+x+1$ at $0$ and $1$ are both $1$ in $F$, so [F1] makes it irreducible. [F1, algebra]

2.1 By [F2], $K$ is a field and its unique linear representatives are exactly $0,1,x,1+x$, giving the displayed four classes. [F2, step 1.1]

3.1 The defining relation is $a^2+a+1=0$, hence $a^2=a+1$ in characteristic two. Consequently $a(a+1)=1$ and $(a+1)^2=a$, which determines the products of the nonzero elements. [step 2.1, algebra] ∎
