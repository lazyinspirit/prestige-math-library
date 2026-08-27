---
id: cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index
kind: counterexample
title: "C_4 and V_4 can share the same cycle index through nonfaithful actions"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-distinct-groups-have-distinct-cycle-indices,
       fs-cycle-index-determines-the-abstract-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Nonisomorphic groups cannot act on the same finite set with the same cycle
index.

## Facts & Assumptions

**Given:** the four-point set $X=\{1,2,3,4\}$ and the transposition product $\tau=(1\,2)(3\,4)$.

[F1] Both $C_4$ and $V_4$ admit surjective homomorphisms onto the two-element permutation group $\{1,\tau\}$.

## Counterexample

**Proof technique:** direct.

1.1 Use [F1] to let both $C_4$ and $V_4$ act on $X$ through the same quotient image $\{1,\tau\}$. In each action, exactly two group elements act as the identity and exactly two act as $\tau$. [F1]

2.1 Therefore both actions have the same averaged cycle monomials, namely $\frac14(2s_1^4+2s_2^2)=\frac12(s_1^4+s_2^2)$. But $C_4$ and $V_4$ are not isomorphic. Hence the displayed claim is false. [step 1.1, algebra] ∎
