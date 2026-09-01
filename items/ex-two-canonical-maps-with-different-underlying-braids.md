---
id: ex-two-canonical-maps-with-different-underlying-braids
kind: example
title: "Two canonical maps with different underlying braids do not agree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree, def-the-braid-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.2.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

In the braid category, the two canonical endomorphisms of $1\otimes1\otimes1$
represented by $\sigma_1\sigma_2$ and $\sigma_2\sigma_1$ are different.

## Facts & Assumptions

**Given:** Braided coherence and the braid category.

[L1] Two canonical braided composites agree in every braided monoidal category exactly when their underlying braids agree ([[cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree]]).

[L2] The braid category realizes the braid group on three strands as the endomorphisms of the object $3=1\otimes1\otimes1$ ([[def-the-braid-category]]).

## Verification

**Proof technique:** direct.

1.1 The two displayed composites have underlying braids $\sigma_1\sigma_2$ and $\sigma_2\sigma_1$ in $B_3$. [given, L2, algebra]

2.1 These braids are not equal: their images in $S_3$ are $(1\,2\,3)$ and $(1\,3\,2)$, which are distinct permutations. [step 1.1, algebra]

3.1 Therefore [L1] implies that the two canonical composites do not agree. In particular, they are distinct endomorphisms of the object $3$ in the braid category from [L2]. [L1, L2, step 2.1] ∎
