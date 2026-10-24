---
id: prop-finite-fields-are-splitting-fields-of-x-q-minus-x
kind: proposition
title: "A field with $q$ elements is the splitting field of $x^q-x$ over its prime subfield"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiplicative-group-of-a-finite-field-is-cyclic, def-polynomials-that-split-and-splitting-fields, thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

If $F$ is a field with $q$ elements, then every $a\in F$ satisfies $a^q=a$, and $F$ is the splitting field of $t^q-t$ over its prime subfield.

## Facts & Assumptions

**Given:** A finite field $F$ of order $q$.

[L1] The group $F^\times$ is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[L3] A splitting field is generated over the base by all roots of the polynomial ([[def-polynomials-that-split-and-splitting-fields]]).

[L4] A nonzero degree-$q$ polynomial over a domain has at most $q$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 The cyclic group $F^\times$ has order $q-1$, so every nonzero $a\in F$ satisfies $a^{q-1}=1$ and hence $a^q=a$. The equality also holds for $a=0$. [given, L1, algebra]

2.1 Thus all $q$ elements of $F$ are roots of $t^q-t$. By [L4] there are no other distinct roots in any extension, so the polynomial splits into its linear factors over $F$. [step 1.1, L4]

3.1 The set of roots is all of $F$, so it generates $F$ over its prime subfield. By [L3], $F$ is the splitting field. [step 2.1, L3] ∎
