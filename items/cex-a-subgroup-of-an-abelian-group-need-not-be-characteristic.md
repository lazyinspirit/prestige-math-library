---
id: cex-a-subgroup-of-an-abelian-group-need-not-be-characteristic
kind: counterexample
title: "A subgroup of an abelian group need not be characteristic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-characteristic-subgroup, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement refuted

Every subgroup of an abelian group is characteristic.

## Facts & Assumptions

**Given:** The additive group $V=C_2\times C_2$ and its subgroup $K=\langle(1,0)\rangle$.

[L1] A subgroup is characteristic when every automorphism of the ambient group maps it to itself ([[def-characteristic-subgroup]]).

[L2] An automorphism is a bijective homomorphism from a group to itself ([[def-group-isomorphism-and-automorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 The coordinate swap $u(x,y)=(y,x)$ preserves addition and is its own inverse, so it is an automorphism by [L2]. [L2, algebra]

2.1 But $u(K)=\langle(0,1)\rangle\ne K$. Hence $K$ is not characteristic by [L1], even though $V$ is abelian and therefore every subgroup of $V$ is normal. [step 1.1, L1] ∎
