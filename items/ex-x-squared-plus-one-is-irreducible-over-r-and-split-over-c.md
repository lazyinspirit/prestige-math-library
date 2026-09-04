---
id: ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c
kind: example
title: "$x^2+1$ is irreducible over $\\mathbb R$ and split over $\\mathbb C$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-x-squared-plus-one-is-irreducible-over-the-reals, cor-every-complex-polynomial-splits-into-linear-factors]
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, extension fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Example

The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$, while over
$\mathbb C$ it factors as
$$ x^2+1=(x-i)(x+i). $$

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^2+1$.

[L1] The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

[L2] Every nonconstant polynomial in $\mathbb C[x]$ splits into linear factors ([[cor-every-complex-polynomial-splits-into-linear-factors]]).

## Verification

**Proof technique:** direct.

1.1 Fact [L1] gives the real-side claim immediately: $x^2+1$ is irreducible over $\mathbb R$. [L1]

1.2 In $\mathbb C[x]$ one has $$ (x-i)(x+i)=x^2+1, $$ so $f$ has the two complex roots $i$ and $-i$. This agrees with the general splitting statement [L2]. [L2, algebra]

2.1 Thus $x^2+1$ is the standard smallest-degree polynomial that is irreducible over $\mathbb R$ but becomes reducible over $\mathbb C$. [step 1.1, step 1.2] ∎
