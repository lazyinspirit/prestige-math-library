---
id: thm-the-braid-group-surjects-onto-the-symmetric-group
kind: theorem
title: "The braid group surjects onto the symmetric group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-braid-group-by-the-artin-presentation, thm-the-symmetric-group-has-the-coxeter-presentation, thm-adjacent-transpositions-generate-the-symmetric-group, thm-von-dyck, def-finite-symmetric-group-and-permutation-notation]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/frontier-42-coxeter-32-codex-adjacent-transposition-local-repair/braid-surjection/receipt.json
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

For $n\ge2$, use the one-based model $S_n^{(1)}:=\operatorname{Sym}(\{1,\ldots,n\})$, identified with the library's $S_n=\operatorname{Sym}(\{0,\ldots,n-1\})$ by conjugation with $\kappa_n(k)=k+1$ ([[def-finite-symmetric-group-and-permutation-notation]], [[thm-adjacent-transpositions-generate-the-symmetric-group]]). Write $S_n$ in this transported model below. The assignment $\sigma_i\mapsto(i\ i+1)$ extends to a surjective homomorphism

$$\pi_n:B_n\longrightarrow S_n.$$

In the library's zero-based model, the same map is $\sigma_i\mapsto(i-1\ i)$, obtained by conjugating $\pi_n$ with $\kappa_n^{-1}$.

## Facts & Assumptions

**Given:** The Artin presentation of $B_n$ and the adjacent transpositions in the one-based model fixed in the Statement.

[L1] The braid group $B_n$ has generators $\sigma_1,\dots,\sigma_{n-1}$ with the Artin braid and distant-commutativity relations ([[def-braid-group-by-the-artin-presentation]]).

[L2] The adjacent transpositions generate $S_n$ ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[L3] The symmetric group satisfies the Coxeter relations for adjacent transpositions ([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

[L4] A map of generators satisfying the relators extends uniquely from a presented group ([[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the adjacent transpositions in $S_n$ satisfy the braid relations and the distant-commutativity relations from [L1]. Therefore [L4] extends the assignment $\sigma_i\mapsto(i\ i+1)$ to a homomorphism $\pi_n:B_n\to S_n$. [L1, L3, L4, given, construct]

2.1 The image of $\pi_n$ contains every adjacent transposition in the one-based model, so the transported generation clause of [L2] makes $\pi_n$ surjective. Conjugating its values by $\kappa_n^{-1}$ preserves multiplication and surjectivity and sends $(i\ i+1)$ to $(i-1\ i)$, giving the stated zero-based version. [L2, step 1.1] ∎
