---
id: cex-no-roots-does-not-imply-irreducible-in-degree-four
kind: counterexample
title: 'A degree-four polynomial can be reducible over Q without having a rational root'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-factor-theorem-over-a-commutative-ring, thm-rat-field, thm-rat-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, example after Theorem 23.8'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement refuted

A polynomial over a field is irreducible whenever it has no root in that field.

## Facts & Assumptions

**Given:** The polynomial $f=(x^2+1)(x^2+2)=x^4+3x^2+2\in\mathbb Q[x]$.

[L1] A root is equivalent to divisibility by the corresponding linear polynomial ([[cor-factor-theorem-over-a-commutative-ring]]).

[L2] The rational numbers form a field ([[thm-rat-field]]).

[L3] The rational numbers form an ordered field, so squares are nonnegative and positive constants remain positive when added ([[thm-rat-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The displayed equality is a factorization in the field polynomial ring [L2] into two positive-degree nonunits, so $f$ is reducible. [given, L2, algebra]

2.1 For every rational $a$, [L3] gives $a^2+1>0$ and $a^2+2>0$, so $f(a)>0$ and $f$ has no rational root; by [L1] it has no rational linear factor, yet step 1.1 shows it reducible. [step 1.1, L1, L3, algebra] ∎
