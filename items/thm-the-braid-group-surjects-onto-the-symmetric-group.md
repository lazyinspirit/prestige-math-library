---
id: thm-the-braid-group-surjects-onto-the-symmetric-group
kind: theorem
title: "The braid group surjects onto the symmetric group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braid-group-by-the-artin-presentation, thm-the-symmetric-group-has-the-coxeter-presentation, thm-adjacent-transpositions-generate-the-symmetric-group, thm-von-dyck]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

For every $n\ge2$, the assignment $\sigma_i\mapsto(i\ i+1)$ extends to a
surjective homomorphism

$$\pi_n:B_n\longrightarrow S_n.$$

## Facts & Assumptions

**Given:** The Artin presentation of $B_n$ and the adjacent transpositions in $S_n$.

[L1] The braid group $B_n$ has generators $\sigma_1,\dots,\sigma_{n-1}$ with the Artin braid and distant-commutativity relations ([[def-braid-group-by-the-artin-presentation]]).

[L2] The adjacent transpositions generate $S_n$ ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[L3] The symmetric group satisfies the Coxeter relations for adjacent transpositions ([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

[L4] A map of generators satisfying the relators extends uniquely from a presented group ([[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the adjacent transpositions in $S_n$ satisfy the braid relations and the distant-commutativity relations from [L1]. Therefore [L4] extends the assignment $\sigma_i\mapsto(i\ i+1)$ to a homomorphism $\pi_n:B_n\to S_n$. [L1, L3, L4, given, construct]

2.1 The image of $\pi_n$ contains every adjacent transposition, so [L2] makes $\pi_n$ surjective. [L2, step 1.1] ∎
