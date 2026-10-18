---
id: lem-adjoining-one-root-reduces-the-unsplit-degree
kind: lemma
title: "Kronecker's one-root step: adjoining a root removes a linear factor and lowers the remaining degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-every-nonconstant-polynomial-has-a-root-in-an-extension, cor-factor-theorem-over-a-commutative-ring, thm-polynomial-degree-of-a-product-over-a-domain, lem-field-is-a-commutative-ring, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Section 21.2'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

Let $F$ be a field and let $f\in F[x]$ have degree $n\ge1$. There is a root $\alpha$ in a field extension of $F$ such that, for $K=F(\alpha)$, there is a polynomial $g\in K[x]$ satisfying
$$ f(\alpha)=0,\qquad f=(x-\alpha)g,\qquad \deg g=n-1. $$
If a field extension $L/K$ splits $g$, then $f$ splits over $L$.

## Facts & Assumptions

**Given:** A field $F$ and a polynomial $f\in F[x]$ of degree $n\ge1$.

[F1] Every nonconstant polynomial over a field has a root in some field extension ([[cor-every-nonconstant-polynomial-has-a-root-in-an-extension]]).

[F2] For a polynomial over a commutative ring, $f(\alpha)=0$ if and only if $x-\alpha$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[F3] Every field is an integral domain, and over an integral domain degrees of nonzero polynomial products add ([[lem-field-is-a-commutative-ring]], [[thm-polynomial-degree-of-a-product-over-a-domain]]).

[F4] A polynomial splits when it is a nonzero scalar times a product of linear factors ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** constructive.

1.1 Since $n\ge1$, the polynomial is nonconstant. By [F1], choose an extension $H/F$ and a root $\alpha\in H$, and let $K=F(\alpha)\subseteq H$. [F1, construct]

2.1 By [F2], $f=(x-\alpha)g$ for some $g\in K[x]$. Since $f$ is nonzero, so is $g$; also $x-\alpha$ is nonzero. Thus [F3] gives $n=1+\deg g$ and hence $\deg g=n-1$. [F2, F3, step 1.1, algebra]

3.1 If $g$ splits over $L$, adjoining the factor $x-\alpha$ to its linear factorisation gives a linear factorisation of $f$ over $L$. This also covers $n=1$, when $g$ is a nonzero constant and its factor product is empty. [F4, step 2.1, discharge-construct] ∎
