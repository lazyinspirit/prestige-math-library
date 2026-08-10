---
id: cor-free-product-factor-maps-are-injective
kind: corollary
title: "Every canonical factor map into a free product is injective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-normal-form-for-free-products, thm-group-homomorphism-injective-iff-trivial-kernel]
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

Every canonical factor homomorphism $\iota_i:G_i\to\ast_jG_j$ is injective.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity. ([[thm-normal-form-for-free-products]]).

[L2] A group homomorphism is injective if and only if its kernel is trivial. For a group homomorphism $f:G\to H$, $f$ is injective exactly when $\ker f=\{e_G\}$. ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

## Proof

**Proof technique:** direct.

1.1 A nonidentity $g\in G_i$ maps to the nonempty one-syllable reduced word $(i,g)$, which is nonidentity by normal form. [given, L1, L2]

2.1 Thus the kernel of $\iota_i$ is trivial, and the trivial-kernel criterion gives injectivity. This also covers a trivial factor. [step 1.1] ∎
