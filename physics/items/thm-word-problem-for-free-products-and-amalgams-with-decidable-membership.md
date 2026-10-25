---
id: thm-word-problem-for-free-products-and-amalgams-with-decidable-membership
kind: theorem
title: "Free products and suitable amalgamated free products have solvable word problem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-factors-embed-in-a-free-product-with-amalgamation, def-word-problem-for-a-fixed-finite-presentation, thm-normal-form-for-free-products-with-amalgamation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
    - title: "Dexter Chua after H. Wilton, Topics in Geometric Group Theory"
      url: "https://dec41.user.srcf.net/h/IV_M/topics_in_geometric_group_theory/full"
pipeline_run: null
---

## Statement

Let $G$ and $H$ be finitely generated groups with solvable word problem.

1. The free product $G\ast H$ has solvable word problem.
2. More generally, let a finitely generated group $K$ embed in $G$ and $H$.
   Assume membership in the two embedded copies of $K$ is decidable, and that
   from a word in the generators of either factor representing an element of
   that copy one can compute a word in a fixed generating set of $K$
   representing the same element. Then the amalgamated free product
   $G\ast_K H$ has solvable word problem.

## Facts & Assumptions

**Given:** Finitely generated groups $G,H$, and in the second clause a finitely generated amalgamating group $K$ with decidable membership in both images and effective translation of a discovered factor word in $K$ back to a word in fixed generators of $K$.

[L1] Every element of an amalgamated free product has a unique normal form relative to chosen transversals, and a normal word of positive length is nonidentity. ([[thm-normal-form-for-free-products-with-amalgamation]])

[L2] The canonical maps of the factors into an amalgamated free product are injective. ([[cor-factors-embed-in-a-free-product-with-amalgamation]])

## Proof

**Proof technique:** direct.

1.1 In each factor, solvability of the word problem lets us compare any two words. Enumerating the words in shortlex order therefore computes a canonical representative for every group element, and in the amalgam case it also computes the least representative of every left coset of $K$: two words represent the same left coset exactly when their quotient lies in the embedded copy of $K$, which is decidable by hypothesis. The extra hypothesis also makes every factor word that represents an element of $K$ effectively translatable into a canonical word in the fixed generators of $K$. [given, L2]

2.1 For an input alternating word in the generators of the factors, first replace each factor block by its canonical representative. Whenever two consecutive blocks lie in the same factor, multiply them there and recanonize. In the amalgam case, if a block lies in the amalgamating subgroup, step 1.1 translates it to the canonical $K$-word and then into the generators of the opposite factor, so the amalgam relation pushes it across the next syllable effectively. The computable coset representatives from step 1.1 ensure that each such rewrite strictly shortens the syllable length. [L1, step 1.1]

3.1 The reduction process of step 2.1 halts with the normal form from [L1]. By uniqueness in [L1], the input represents the identity exactly when the final normal form has length zero and terminal $K$-part equal to the identity. Hence the procedure decides the word problem in $G\ast_K H$. [L1, step 2.1]

4.1 Taking $K=\{e\}$ gives the free-product case, so both clauses follow. [step 3.1, L2] ∎
