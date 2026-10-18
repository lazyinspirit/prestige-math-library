---
id: lem-a-transposition-reverses-inversion-sign
kind: lemma
title: 'Composing with a transposition reverses $(-1)^{\operatorname{inv}(\sigma)}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inversions-inversion-number-and-sign, def-symmetric-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Stanford Math 51H, Permutations'
      url: 'https://math.stanford.edu/~lms/jpg/perms.pdf'
pipeline_run: null
---

## Statement

Let $\sigma\in S_n$ and let $\tau$ be a transposition. Then

$$(-1)^{\operatorname{inv}(\sigma\tau)}=-(-1)^{\operatorname{inv}(\sigma)},\qquad (-1)^{\operatorname{inv}(\tau\sigma)}=-(-1)^{\operatorname{inv}(\sigma)}.$$

Thus composing on either side with a transposition reverses inversion sign.

## Facts & Assumptions

**Given:** A natural $n$, a permutation $\sigma\in S_n$, and a transposition $\tau$; composition acts from right to left.

[L1] The inversion number counts pairs $i<j$ whose values occur in decreasing order, and inversion sign is $(-1)$ raised to that number ([[def-inversions-inversion-number-and-sign]]).

## Proof

**Proof technique:** direct.

1.1 If $s_a=(a\,a+1)$ is an adjacent transposition, right composition by $s_a$ swaps the values of $\sigma$ in positions $a$ and $a+1$. Their mutual pair toggles its inversion status, while for every third position the two affected pairs merely exchange their total contribution. Hence the inversion number changes by an odd number and the inversion sign is negated. [given, L1]

2.1 For $a<b$, the transposition $(a\,b)$ equals $s_a s_{a+1}\cdots s_{b-2}s_{b-1}s_{b-2}\cdots s_{a+1}s_a$, a product of $2(b-a)-1$ adjacent transpositions. [step 1.1, L1]

3.1 Repeatedly applying step 1.1 along the odd-length product in step 2.1 gives the first formula. For the second, $\tau\sigma=\sigma(\sigma^{-1}\tau\sigma)$ and $\sigma^{-1}\tau\sigma$ is the transposition obtained by applying $\sigma^{-1}$ to the two moved points, so the first formula applied on the right gives the second. [step 2.1, L1] ∎
