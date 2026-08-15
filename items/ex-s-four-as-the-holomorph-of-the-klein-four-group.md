---
id: ex-s-four-as-the-holomorph-of-the-klein-four-group
kind: example
title: ' $\operatorname{Hol}(C_2\times C_2)\cong S_4$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorph-of-a-group, prop-holomorph-as-a-permutation-group, def-symmetric-group, thm-number-of-bijections-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter J. Cameron, The Holomorph of a Group"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf"
pipeline_run: null
---

## Example

For the Klein four group $V=C_2\times C_2$,

$$\operatorname{Hol}(V)\cong S_4.$$

## Facts & Assumptions

**Given:** The four-element group $V=C_2\times C_2$.

[L1] $\operatorname{Hol}(V)=V\rtimes\operatorname{Aut}(V)$ ([[def-holomorph-of-a-group]]).

[L2] The holomorph acts faithfully on the underlying set of $V$ ([[prop-holomorph-as-a-permutation-group]]).

[L3] $S_4$ is the group of all permutations of a four-element set ([[def-symmetric-group]]).

[L4] A four-element set has $4!=24$ bijections ([[thm-number-of-bijections-of-a-finite-set]]).

## Verification

**Proof technique:** direct.

1.1 Every automorphism of $V$ fixes the identity and permutes the three nonidentity elements. Conversely, any permutation of those three elements preserves the group law: the product of two distinct nonidentity elements is the third. Thus $\operatorname{Aut}(V)\cong S_3$ and has order six. [algebra]

2.1 By [L1], $|\operatorname{Hol}(V)|=4\cdot6=24$. By [L2] and [L3], its faithful action embeds it into $S_4$, which also has $4!=24$ elements by [L4]. [step 1.1, L1, L2, L3, L4, algebra]

3.1 An injective map between these two finite sets of equal size is surjective. Hence the embedding is an isomorphism. [step 2.1] ∎
