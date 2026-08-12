---
id: lem-x-squared-plus-one-is-irreducible-over-the-reals
kind: lemma
title: '$x^2+1$ is irreducible over $\mathbb R$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-reals-ordered-field, lem-of-square-positive, thm-quadratic-and-cubic-irreducibility-test]
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

The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$.

## Facts & Assumptions

**Given:** The polynomial $x^2+1\in\mathbb R[x]$.

[F1] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

[F2] In an ordered field, the square of every nonzero element is positive ([[lem-of-square-positive]]).

[F3] A polynomial of degree two or three over a field is irreducible if and only if it has no root in that field ([[thm-quadratic-and-cubic-irreducibility-test]]).

## Proof

**Proof technique:** direct.

1.1 For $r\in\mathbb R$, either $r=0$, so $r^2=0$, or [F2] gives $r^2>0$. Thus $r^2+1>0$ by the ordered-field laws in [F1]. [F1, F2]

2.1 Hence $x^2+1$ has no real root. [step 1.1]

3.1 Since it has degree two, [F3] now gives its irreducibility over $\mathbb R$. [F3, step 2.1] ∎
