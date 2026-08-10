---
id: cor-factor-images-intersect-in-the-amalgamated-subgroup
kind: corollary
title: "The two factor images intersect exactly in the amalgamated subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-normal-form-for-free-products-with-amalgamation, cor-factors-embed-in-a-free-product-with-amalgamation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Statement

Inside $G\ast_KH$, the images of $G$ and $H$ intersect exactly in their common image of $K$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Every element of $G\ast_KH$ has a unique normal form $s_1\cdots s_nk$ relative to fixed transversals. A normal word of positive length is nonidentity. The represented group and these conclusions are independent of the chosen transversals. ([[thm-normal-form-for-free-products-with-amalgamation]]).

[L2] The canonical maps $G\to G\ast_KH$ and $H\to G\ast_KH$ are injective. ([[cor-factors-embed-in-a-free-product-with-amalgamation]]).

## Proof

**Proof technique:** direct.

1.1 The image of $K$ lies in both factor images by the commuting pushout square. [given, L1, L2]

2.1 If the images of $g\in G$ and $h\in H$ are equal, then the normal form of $gh^{-1}$ is trivial. Normal-form uniqueness forces both factor representatives to reduce to the same length-zero element of $K$. [step 1.1]

3.1 Thus the intersection is precisely the amalgamated subgroup. The argument includes trivial $K$ and a whole-factor inclusion. [step 2.1] ∎
