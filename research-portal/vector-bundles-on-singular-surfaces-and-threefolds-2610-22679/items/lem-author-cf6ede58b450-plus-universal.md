---
id: lem-author-cf6ede58b450-plus-universal
kind: lemma
title: Universal mapping property of the plus construction
status: draft
domain: mathematics
deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-plus-presheaf
  - lem-author-cf6ede58b450-plus-separated
dependency_roles:
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-cf6ede58b450-plus-presheaf: mathematical-premise
  lem-author-cf6ede58b450-plus-separated: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
For a presheaf F and a sheaf G of sets on a small site, composition with $\eta_F$ gives a bijection from natural maps F+ → G to natural maps F → G. The bijection is natural in F and G.

## Facts & Assumptions
[F1] The sheaf condition and plus construction are defined in [[def-author-cf6ede58b450-site-plus-data]].

[F2] The plus construction and its unit are natural by [[lem-author-cf6ede58b450-plus-presheaf]]; local equality of F-sections implies equality of their unit images by [[lem-author-cf6ede58b450-plus-separated]].

## Proof
**Given:** A natural map u: F → G with G a sheaf.

**Goal:** Construct its unique extension over $\eta_F$ and prove naturality.

1.1 For a representative (R,s) of an element of F+(X), the values $u(s_f)$ form a matching family in G on R. The sheaf condition gives a unique section of G(X) restricting to them. Equivalent representatives give the same section because their glued sections agree on a common covering sieve. Pullback and uniqueness show that this assignment is natural and extends u. [F1, F2, given]

2.1 If v: F+ → G also extends u, then on each f in R its value on the class of (R,s) restricts to $u(s_f)$: the restricted class equals $\eta_F(s_f)$, because these representatives agree on $f^*R$. The sheaf condition therefore forces v to equal the extension from step 1.1. Uniqueness also makes the bijection natural in F and G. [F1, F2, step 1.1] ∎
