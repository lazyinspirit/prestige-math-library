---
id: thm-uniqueness-of-finite-fields
kind: theorem
title: "Finite fields of the same order are isomorphic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-fields-have-prime-power-order, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, cor-splitting-fields-are-unique-up-to-base-isomorphism, thm-prime-subfield-classification, thm-canonical-prime-factorisation]
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
    - title: "K. Conrad, Finite Fields, Theorem 2.5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Any two finite fields with the same order $q$ are isomorphic. More precisely, after identifying their prime subfields with $\mathbb F_p$, there is an isomorphism fixing $\mathbb F_p$ pointwise. The isomorphism need not be unique.

## Facts & Assumptions

**Given:** Finite fields $E$ and $E'$ with $|E|=|E'|=q$.

[L1] Every finite field has prime-power order with base equal to its characteristic prime ([[thm-finite-fields-have-prime-power-order]]).

[L2] A field of order $q$ is a splitting field of $t^q-t$ over its prime subfield ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

[L3] Two splitting fields of the same nonzero polynomial over a base field are isomorphic by an isomorphism fixing the base ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

[L4] The prime subfield of a characteristic-$p$ field is isomorphic to $\mathbb F_p$ ([[thm-prime-subfield-classification]]).

[L5] Canonical prime factorisation makes the prime in a positive prime-power representation unique ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each field has prime-power order with base equal to its characteristic prime. Since the orders are the same, [L5] makes these primes equal, say to $p$. Use [L4] to identify both prime subfields with one copy of $\mathbb F_p$. [given, L1, L4, L5]

2.1 By [L2], $E$ and $E'$ are splitting fields of the same polynomial $t^q-t$ over this base. [step 1.1, L2]

3.1 Apply [L3] to obtain a base-fixing field isomorphism $E\to E'$. Splitting-field uniqueness asserts existence, not uniqueness, so no stronger claim follows. [step 2.1, L3] ∎
