---
id: ex-a-four-petal-sunflower-with-nonempty-core
kind: example
title: "Four explicit petals with a common two-element core form a sunflower"
status: published
origin: session
deps: [def-sunflower]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics"
      url: "https://people.cs.uchicago.edu/~laci/babai-frankl-book2022.pdf"
pipeline_run: null
---

## Example

The four sets

$$\{1,2,3,4\},\quad\{1,2,5,6\},\quad\{1,2,7,8\},\quad\{1,2,9,10\}$$

form a $4$-petal sunflower. Their common core is $\{1,2\}$ and their petals
are the pairwise disjoint sets $\{3,4\}$, $\{5,6\}$, $\{7,8\}$, and
$\{9,10\}$.

## Facts & Assumptions

**Given:** The four sets displayed in the Example.

[F1] Distinct sets form a sunflower when all pairwise intersections equal one common core ([[def-sunflower]]).

## Verification

**Proof technique:** direct.

1.1 Every displayed set contains $\{1,2\}$, and outside this pair their elements lie in disjoint two-element blocks. [given]

2.1 Therefore the intersection of any two distinct displayed sets is exactly $\{1,2\}$. [step 1.1]

3.1 By [F1], the four sets form a sunflower with the stated core and petals. [step 2.1, F1] ∎
