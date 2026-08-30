---
id: ex-the-pentagon-checked-for-cartesian-products
kind: example
title: "The pentagon checked for cartesian products"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-a-category-with-finite-products-is-monoidal]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For sets $W,X,Y,Z$, the pentagon for the cartesian monoidal structure compares
the two canonical maps from $(((W\times X)\times Y)\times Z)$ to
$W\times(X\times(Y\times Z))$.

## Facts & Assumptions

**Given:** The cartesian monoidal structure on a category with finite products.

[L1] Finite products make a category monoidal, with associator given by the canonical rebracketing isomorphism ([[thm-a-category-with-finite-products-is-monoidal]]).

## Verification

**Proof technique:** direct.

1.1 Start with an element $(((w,x),y),z)$. Along the left side of the pentagon, the first associator gives $((w,x),(y,z))$ and the second gives $(w,(x,(y,z)))$. [L1]

1.2 Along the right side, the first associator gives $((w,(x,y)),z)$, the second gives $(w,((x,y),z))$, and the third gives $(w,(x,(y,z)))$. [L1]

2.1 Both composites send $(((w,x),y),z)$ to the same element $(w,(x,(y,z)))$, so the pentagon commutes in this concrete cartesian example. [step 1.1, step 1.2] ∎
