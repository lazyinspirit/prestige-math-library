---
id: ex-the-two-routes-around-the-pentagon-are-equal
kind: example
title: "The two routes around the pentagon are equal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-mac-lane-coherence-in-the-canonical-map-form]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Natural Associativity and Commutativity, equation (3.5)"
      url: "https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf"
pipeline_run: null
---

## Example

For objects $A,B,C,D$ in a monoidal category, the pentagon compares two
canonical composites from $((A\otimes B)\otimes C)\otimes D$ to
$A\otimes(B\otimes(C\otimes D))$.

## Facts & Assumptions

**Given:** Four objects $A,B,C,D$ in a monoidal category.

[L1] Between any two parenthesisations of the same ordered tensor word, there is a unique canonical natural isomorphism ([[thm-mac-lane-coherence-in-the-canonical-map-form]]).

## Verification

**Proof technique:** direct.

1.1 One route around the pentagon is the composite $((A\otimes B)\otimes C)\otimes D \xrightarrow{\alpha_{A\otimes B,C,D}} (A\otimes B)\otimes(C\otimes D) \xrightarrow{\alpha_{A,B,C\otimes D}} A\otimes(B\otimes(C\otimes D))$. [given]

1.2 The other route is the composite $((A\otimes B)\otimes C)\otimes D \xrightarrow{\alpha_{A,B,C}\otimes1_D} (A\otimes(B\otimes C))\otimes D \xrightarrow{\alpha_{A,B\otimes C,D}} A\otimes((B\otimes C)\otimes D) \xrightarrow{1_A\otimes\alpha_{B,C,D}} A\otimes(B\otimes(C\otimes D))$. [given]

2.1 Both composites are canonical morphisms with the same source and target, so [L1] makes them equal. [L1, step 1.1, step 1.2] ∎
