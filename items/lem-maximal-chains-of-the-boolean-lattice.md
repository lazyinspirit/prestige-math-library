---
id: lem-maximal-chains-of-the-boolean-lattice
kind: lemma
title: "The Boolean lattice on an $n$-element set has $n!$ maximal chains, and exactly $k!(n-k)!$ contain a fixed $k$-set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-chain, def-boolean-lattice-and-levels, def-factorial-and-falling-factorial, thm-number-of-bijections-of-a-finite-set, thm-product-rule, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Statement

Let $A$ be an $n$-element set. The Boolean lattice $B(A)$ has exactly $n!$
maximal chains. If $S\subseteq A$ has cardinality $k$, then exactly
$k!(n-k)!$ maximal chains contain $S$.

## Facts & Assumptions

**Given:** A finite set $A$ with $|A|=n$ and a subset $S\subseteq A$ with $|S|=k$.

[F1] The Boolean lattice is $\mathcal P(A)$ ordered by inclusion, with rank $|T|$; a chain is a pairwise comparable subset, and a maximal chain is a chain contained in no larger chain ([[def-boolean-lattice-and-levels]], [[def-chain]]).

[L1] A finite $m$-element set has exactly $m!$ bijections from any other $m$-element set ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]).

[L2] Independent finite choices multiply their cardinalities ([[thm-product-rule]]).

[L3] For $k\le n$, $\binom nk\,k!(n-k)!=n!$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 Every ordering $(a_1,\ldots,a_n)$ of $A$ determines the maximal chain $\varnothing\subset\{a_1\}\subset\{a_1,a_2\}\subset\cdots\subset A$. [given, F1, construct]

2.1 Conversely, a maximal chain contains exactly one set of each rank from $0$ to $n$, and the unique element added between consecutive ranks recovers an ordering of $A$. Thus the correspondence in step 1.1 is bijective. [step 1.1, F1]

2.2 A chain from an ordering contains $S$ exactly when its first $k$ entries are the elements of $S$. There are $k!$ orders for those entries and $(n-k)!$ orders for the remaining entries, independently. [step 1.1, L1]

3.1 By [L1], there are $n!$ orderings of $A$, so steps 1.1 and 2.1 give exactly $n!$ maximal chains. [step 1.1, step 2.1, L1]

4.1 The product rule therefore gives exactly $k!(n-k)!$ maximal chains through $S$. Summing this count over the $\binom nk$ possible $S$ agrees with the total $n!$ by [L3]. [step 3.1, step 2.2, L2, L3] ∎
