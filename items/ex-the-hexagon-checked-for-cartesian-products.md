---
id: ex-the-hexagon-checked-for-cartesian-products
kind: example
title: "The hexagon checked for cartesian products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-cartesian-swap-braiding-is-a-symmetry]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 8.2.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

For cartesian products, both routes around the first braiding hexagon send
$(x,y,z)$ to $(y,z,x)$.

## Facts & Assumptions

**Given:** A category with finite products and its cartesian swap braiding.

[L1] The cartesian swap maps form a braiding ([[thm-the-cartesian-swap-braiding-is-a-symmetry]]).

## Verification

**Proof technique:** direct.

1.1 Write the source of the first hexagon as $X\times(Y\times Z)$ and evaluate the left-hand route on $(x,y,z)$. The inner swap sends $(x,(y,z))$ to $((y,z),x)$ after the evident rebracketing. [given, L1, algebra]

2.1 Evaluate the right-hand route: first swap $x$ past $y$, then swap $x$ past $z$. The result is again $(y,z,x)$ after the same rebracketing identifications. [step 1.1, algebra]

3.1 Since the two routes agree on every triple $(x,y,z)$, the first hexagon commutes in this cartesian case. The second hexagon is checked by the same coordinate calculation with the factors regrouped as $((x,y),z)$. [L1, step 1.1, step 2.1] ∎
