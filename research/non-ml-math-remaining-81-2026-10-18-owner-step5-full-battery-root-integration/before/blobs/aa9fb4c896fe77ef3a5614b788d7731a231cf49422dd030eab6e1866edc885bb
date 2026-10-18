---
id: cex-temperley-lieb-zero-loop-generator-is-zero
kind: counterexample
title: "At loop value zero, a local generator is nilpotent but nonzero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws, def-temperley-lieb-generator-presentation, lem-temperley-lieb-generators-satisfy-local-relations, thm-temperley-lieb-presentation-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references: []
---

## Statement refuted

The assertion “if the loop value is $0$, then every local generator is $0$” is false for $R=\mathbb Z$, loop value $\delta=0$, and rank $n=2$.

## Facts & Assumptions

**Given:** $R=\mathbb Z$, $\delta=0$, and $n=2$.

[F1] The rank-two diagram module is free on its loop-free noncrossing pairings; its identity and cap-cup diagram are distinct basis elements. ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]])

[F2] At loop value $0$, the local relation is $d_1^2=0$, and $u_1\mapsto d_1$ under the presentation map. ([[lem-temperley-lieb-generators-satisfy-local-relations]])

[F3] The presentation map $P_2(\mathbb Z,0)\to\mathrm{TL}_2(\mathbb Z,0)$ is an isomorphism. ([[thm-temperley-lieb-presentation-isomorphism]])

## Counterexample

**Proof technique:** direct.

1.1 In cyclic boundary order the four points have exactly three pairings: $(1,2)(3,4)$, $(1,3)(2,4)$, and $(1,4)(2,3)$. The middle pairing crosses, while the other two are the identity and $d_1$. They are distinct members of the diagram indexing set, so $d_1$ is a nonzero standard basis vector in the free abelian module [F1]. [F1, algebra]

2.1 By [F2], $d_1^2=\delta d_1=0$. Since the isomorphism [F3] sends $u_1$ to this nonzero $d_1$, injectivity gives $u_1\ne0$ and $u_1^2=0$. This is the claimed counterexample. [F2, F3, step 1.1] ∎

## Remarks

This boundary case does not affect the diagram basis: the loop parameter changes multiplication coefficients, not which pairings index the free module.
