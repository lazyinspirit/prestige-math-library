---
id: cex-reducible-polynomial-quotient-is-not-a-field
kind: counterexample
title: '$\mathbb Q[x]/(x^2-1)$ is not a field: reducibility creates nonzero zero divisors'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-polynomial-quotient-is-a-field-iff-irreducible, thm-polynomial-division-algorithm-over-a-field, thm-rat-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
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

## Statement refuted

The quotient by any nonconstant polynomial over a field is a field.

## Counterexample

In the rational field $\mathbb Q$ ([[thm-rat-field]]), take
$$R=\mathbb Q[x]/(x^2-1).$$
The two classes $x-1+(x^2-1)$ and $x+1+(x^2-1)$ are nonzero, but their product
is zero.

## Facts & Assumptions

**Given:** The quotient $R=\mathbb Q[x]/(x^2-1)$.

[F1] Division by a nonzero polynomial gives a unique remainder of smaller degree ([[thm-polynomial-division-algorithm-over-a-field]]).

[F2] $F[x]/(p)$ is a field if and only if the nonconstant polynomial $p$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

## Verification

**Proof technique:** counterexample.

1.1 Neither $x-1$ nor $x+1$ lies in $(x^2-1)$: each already has degree below $2$, so uniqueness of the remainder in [F1] would otherwise make it zero. [F1]

2.1 Yet $(x-1)(x+1)=x^2-1$, so the product of their nonzero classes is zero. [step 1.1, algebra]

3.1 Thus $R$ has nonzero zero divisors and is not a field, agreeing with [F2] because $x^2-1$ is reducible. [F2, step 2.1] ∎
