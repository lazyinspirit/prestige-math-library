---
id: ex-cubic-x-cubed-minus-two-has-galois-group-s-three
kind: example
title: "$x^3-2$ has discriminant $-108$ and Galois group $S_3$ over $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eisenstein-irreducibility-criterion, thm-galois-group-of-an-irreducible-cubic-by-discriminant, ex-s-three-galois-correspondence-for-x-cubed-minus-two]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, Example 4.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Example

$x^3-2$ has Galois group $S_3$ over $\mathbb Q$. Its discriminant is $-108$.

## Facts & Assumptions

**Given:** Eisenstein's irreducibility criterion at $2$ ([[thm-eisenstein-irreducibility-criterion]]) and the explicit splitting-field generators in [[ex-s-three-galois-correspondence-for-x-cubed-minus-two]].

[L1] A monic irreducible separable cubic over a field of characteristic not two has group $S_3$ when its discriminant is not a square ([[thm-galois-group-of-an-irreducible-cubic-by-discriminant]]).

## Verification

**Proof technique:** direct.

1.1 Eisenstein at $2$ proves that $x^3-2$ is irreducible over $\mathbb Q$. [given]

1.2 Its depressed-cubic discriminant is $-27(-2)^2=-108$, which is nonzero and negative, hence is not a square in $\mathbb Q$. [algebra]

2.1 By [L1], steps 1.1 and 1.2 give Galois group $S_3$, agreeing with the explicit six automorphisms of the splitting-field lattice example. [step 1.1, step 1.2, L1, given] ∎
