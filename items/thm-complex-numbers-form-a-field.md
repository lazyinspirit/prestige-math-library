---
id: thm-complex-numbers-form-a-field
kind: theorem
title: "The complex numbers form a field, and every nonzero $x+iy$ has inverse $(x-iy)/(x^2+y^2)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-numbers-and-arithmetic, thm-reals-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

$\mathbb C$ with the preceding operations is a field. For $z=x+iy\ne0$,
$$z^{-1}=\frac{x-iy}{x^2+y^2}.$$ The conventions and prerequisite facts used below are recorded in [[def-complex-numbers-and-arithmetic]], [[thm-reals-ordered-field]], [[def-field]].

## Facts & Assumptions

**Given:** Complex numbers $z=x+iy$ and $w=u+iv$.

## Proof

**Proof technique:** direct.

1.1 Coordinate expansion verifies associativity, commutativity, distributivity, and the identities $0$ and $1$. [algebra]

1.2 If $z\ne0$, then $x^2+y^2>0$ and direct multiplication gives $z(x-iy)=x^2+y^2$. [algebra]

2.1 Dividing by this nonzero real proves the inverse formula and the field axioms. [algebra] ∎
