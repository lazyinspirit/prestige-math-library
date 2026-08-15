---
id: fs-an-abelian-group-has-an-abelian-automorphism-group
kind: false-statement
title: "False: an abelian group must have an abelian automorphism group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, def-symmetric-group]
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

**False claim:** if a group $A$ is abelian, then $\operatorname{Aut}(A)$ is abelian.

## Facts & Assumptions

**Given:** The abelian group $V=C_2\times C_2$.

[A1] The false claim says that $\operatorname{Aut}(V)$ is abelian.

[L1] An automorphism is a bijective homomorphism from a group to itself ([[def-group-isomorphism-and-automorphism]]).

[L2] The symmetric group on a set consists of all its permutations under composition ([[def-symmetric-group]]).

## Refutation

**Proof technique:** direct.

1.1 Every automorphism of $V$ fixes the identity and permutes the three nonidentity elements. Conversely, every permutation of those elements preserves the group law because the sum of two distinct nonidentity elements is the third. Thus restriction gives $\operatorname{Aut}(V)\cong S_3$ by [L1] and [L2]. [L1, L2, algebra]

2.1 In $S_3$, the transpositions $(12)$ and $(23)$ do not commute. Hence $\operatorname{Aut}(V)$ is nonabelian, contradicting [A1] and refuting the claim. [step 1.1, A1, L2, algebra] ∎
