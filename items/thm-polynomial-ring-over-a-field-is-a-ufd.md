---
id: thm-polynomial-ring-over-a-field-is-a-ufd
kind: theorem
title: 'For every field F, F[x] is a unique factorisation domain'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-polynomial-factorisation-into-irreducibles, thm-irreducible-polynomials-over-a-field-are-prime, def-unique-factorisation-domain, cor-polynomial-ring-over-a-domain-is-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.11'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.

## Facts & Assumptions

**Given:** A field $F$.

[L1] Every nonzero nonunit polynomial over $F$ factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

[L2] Every irreducible polynomial over $F$ is prime ([[thm-irreducible-polynomials-over-a-field-are-prime]]).

[L3] A UFD is an integral domain with existence and uniqueness, up to order and associates, of irreducible factorizations of every nonzero nonunit ([[def-unique-factorisation-domain]]).

[L4] The polynomial ring over a domain is a domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

## Proof

**Proof technique:** induction.

1.1 Fact [L4] makes $F[x]$ a domain, and [L1] supplies existence of irreducible factorizations. [base, given, L1, L4]

2.1 For uniqueness, compare $p_1\cdots p_m=q_1\cdots q_n$; by [L2], $p_1$ divides some $q_j$, and irreducibility makes $p_1$ associate to $q_j$; after reordering and cancelling these nonzero associates in the domain, induction on $m$ pairs all remaining factors and gives $m=n$. [step 1.1, ih, L2, L4, algebra]

3.1 The existence and uniqueness established in steps 1.1 and 2.1 are exactly the conditions of [L3], so $F[x]$ is a UFD. [step 1.1, step 2.1, L3, discharge-induction] ∎
