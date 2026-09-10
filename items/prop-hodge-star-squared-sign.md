---
id: "prop-hodge-star-squared-sign"
kind: "proposition"
title: "Hodge star squared sign"
deps: ["thm-hodge-star-is-a-smooth-bundle-isomorphism"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

On real $k$-forms, $*^2=(-1)^{k(n-k)}\operatorname{id}$.

## Facts & Assumptions

**Given:** An oriented Riemannian $n$-manifold and $0\le k\le n$.

[F1] [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]: The Hodge star exists uniquely and is a smooth bundle isomorphism in every degree $0\le k\le n$.

## Proof

**Proof technique:** direct.

1.1 On the orthonormal wedge basis of the star construction, $*^2e^I=\epsilon(I,I^c)\epsilon(I^c,I)e^I$. Switching the ordered blocks of lengths $k$ and $n-k$ takes $k(n-k)$ adjacent transpositions, so the product of these two signs is $(-1)^{k(n-k)}$. [F1, given]

2.1 Linearity gives the identity for every form. For $k=0$ or $k=n$ the exponent is zero and the square is the identity. In dimension zero the star multiplies by $\varepsilon$, whose square is one, giving the same formula. [F1, step 1.1] ∎

## Source locator

Lee, Problem 16-18(c–e), pp.437–438; block-transposition calculation above fixes the sign.
