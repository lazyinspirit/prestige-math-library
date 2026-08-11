---
id: cor-finite-ramsey-by-konig-compactness
kind: corollary
title: "The finite uniform Ramsey theorem follows a second time from the infinite theorem by a finitely branching tree of bad finite colourings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-konig-infinity-lemma-for-ordered-trees, thm-infinite-ramsey-on-the-naturals, thm-finite-ramsey-for-uniform-subsets, def-ramsey-colouring-and-arrow-notation, thm-cardinality-of-a-set-of-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Corollary 3"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

The existence conclusion of [[thm-finite-ramsey-for-uniform-subsets]] also follows from [[thm-infinite-ramsey-on-the-naturals]] by applying König's lemma to the tree of bad finite colourings. The meanings of colouring and homogeneity are those of [[def-ramsey-colouring-and-arrow-notation]], and finiteness of each level follows from [[thm-cardinality-of-a-set-of-functions]].

## Facts & Assumptions

**Given:** Positive naturals $k,c,r$ and, for contradiction, a bad $c$-colouring of $[N]^k$ with no monochromatic $r$-set for every natural $N$.

[L1] An ordered finitely branching tree with a node at every level has an infinite branch, in ZF ([[thm-konig-infinity-lemma-for-ordered-trees]]).

[L2] Every finite colouring of $[\mathbb N]^k$ has an infinite monochromatic set, in ZF ([[thm-infinite-ramsey-on-the-naturals]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose no finite witness exists. Form a tree whose level-$N$ nodes are the bad colourings of $[\{0,\ldots,N-1\}]^k$, ordered by extension. Restricting a bad colouring remains bad, every level is nonempty by the supposition, and every node has only finitely many one-level extensions. Order those extensions lexicographically by their finite colour tables. [assume-contra]

2.1 By [L1] the tree has a coherent branch. The union of its compatible finite functions is a well-defined $c$-colouring of $[\mathbb N]^k$, and every finite restriction on the branch has no monochromatic $r$-set. [step 1.1, L1]

3.1 Apply [L2] to the union colouring and take the first $r$ elements of its infinite monochromatic set. They lie below some $N$, so they form a monochromatic $r$-set in the level-$N$ branch node, contradicting its badness. Therefore a finite witness exists. [step 2.1, L2, discharge-contradiction] ∎

