---
id: cor-factors-embed-in-a-free-product-with-amalgamation
kind: corollary
title: "The factor maps into a free product with amalgamation are injective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-normal-form-for-free-products-with-amalgamation, thm-group-homomorphism-injective-iff-trivial-kernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
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

The canonical maps $G\to G\ast_KH$ and $H\to G\ast_KH$ are injective.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Every element of $G\ast_KH$ has a unique normal form $s_1\cdots s_nk$ relative to fixed transversals. A normal word of positive length is nonidentity. The represented group and these conclusions are independent of the chosen transversals. ([[thm-normal-form-for-free-products-with-amalgamation]]).

[L2] A group homomorphism is injective if and only if its kernel is trivial. For a group homomorphism $f:G\to H$, $f$ is injective exactly when $\ker f=\{e_G\}$. ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

## Proof

**Proof technique:** direct.

1.1 A nonidentity factor element rewrites either as a nontrivial length-zero element of $K$ or as a normal word with one nonidentity transversal syllable. [given, L1, L2]

2.1 Neither form is the identity by the normal-form theorem, so each canonical map has trivial kernel and is injective. This includes trivial factors and the case where $K$ is a whole factor. [step 1.1] ∎
