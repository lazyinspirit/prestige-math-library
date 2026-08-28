---
id: ex-the-direct-product-a-times-z-as-an-hnn-extension
kind: example
title: "The direct product A x Z as an HNN extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hnn-extension-and-stable-letter, prop-universal-property-of-an-hnn-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Example

If both associated subgroups equal the whole base group $A$ and the associated
isomorphism is the identity, then the HNN extension is naturally isomorphic to
$A\times\mathbb Z$.

## Facts & Assumptions

**Given:** A group $A$.

[L1] An HNN extension is obtained by adjoining a stable letter that conjugates one chosen subgroup onto another. ([[def-hnn-extension-and-stable-letter]])

[L2] A homomorphism out of an HNN extension is determined by a homomorphism on the base group and the image of the stable letter, provided the conjugacy relation is respected. ([[prop-universal-property-of-an-hnn-extension]])

## Verification

**Proof technique:** direct.

1.1 Take both associated subgroups to be $A$ and the associated isomorphism to be the identity. Then the defining relation in [L1] becomes $tat^{-1}=a$ for every $a\in A$, so the stable letter commutes with the image of $A$. [L1, given]

2.1 The map from the HNN extension to $A\times\mathbb Z$ sending $A$ to $A\times\{0\}$ and $t$ to $(e,1)$ satisfies the relation from step 1.1, so [L2] gives a homomorphism. The reverse map sends $(a,n)$ to $at^n$, and the commuting relation makes it a homomorphism inverse to the first one. Hence the HNN extension is $A\times\mathbb Z$. [L2, step 1.1, algebra] ∎
