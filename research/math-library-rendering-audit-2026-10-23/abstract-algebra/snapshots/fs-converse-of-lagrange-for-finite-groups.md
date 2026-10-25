---
id: fs-converse-of-lagrange-for-finite-groups
kind: false-statement
title: "False statement: every divisor of the order of a finite group occurs as a subgroup order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-first-theorem, cor-converse-of-lagrange-for-finite-abelian-groups, def-alternating-group, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

**False claim:** every divisor of the order of a finite group occurs as a subgroup order. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] Let $G$ be finite abelian and let $d$ be a positive divisor of $|G|$. Then $G$ has a subgroup of order $d$. ([[cor-converse-of-lagrange-for-finite-abelian-groups]]).

[L3] For $n\in\mathbb N$, the alternating group is the kernel of the sign homomorphism, $$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$ Thus $A_n$ consists exactly of the even permutations. The subgroup and normality assertions implicit in the word “group” follow from thm-image-subgroup-and-kernel-normal. ([[def-alternating-group]]).

[L4] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Refutation

**Proof technique:** direct.

1.1 The divisor $6$ of $|A_4|=12$ is not the order of a subgroup. Indeed, a hypothetical subgroup $H$ of order $6$ would have index $2$ and hence be normal. Sylow I applied inside $H$ gives an element of order $3$. [L1, L2, L3, L4, given, algebra]

2.1 Conjugating that $3$-cycle in $A_4$, and also conjugating its inverse, puts all eight $3$-cycles in the normal subgroup $H$. Together with the identity this gives more than six elements, a contradiction. Thus the general converse fails although the cited abelian and prime-power special cases remain valid. This proves the stated claim. [step 1.1, given, algebra] ∎
