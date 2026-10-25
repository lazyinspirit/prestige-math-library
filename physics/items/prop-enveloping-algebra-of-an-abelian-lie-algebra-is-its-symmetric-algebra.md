---
id: prop-enveloping-algebra-of-an-abelian-lie-algebra-is-its-symmetric-algebra
kind: proposition
title: The enveloping algebra of an abelian Lie algebra is symmetric
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-enveloping-algebra, def-symmetric-algebra-of-a-vector-space, thm-poincare-birkhoff-witt]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Example 12.2, printed p. 69"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.1, printed pp. 71–72"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

If $\mathfrak g$ is abelian, the canonical algebra map
$S(\mathfrak g)\to U(\mathfrak g)$ is an isomorphism.

## Facts & Assumptions

**Given:** An abelian Lie algebra $\mathfrak g$ over $k$.

[L1] $U(\mathfrak g)$ is the quotient of $T(\mathfrak g)$ by relators $x\otimes y-y\otimes x-[x,y]$ ([[def-universal-enveloping-algebra]]).

[L2] $S(\mathfrak g)$ is the quotient by relators $x\otimes y-y\otimes x$ ([[def-symmetric-algebra-of-a-vector-space]]).

## Proof

**Proof technique:** direct comparison of quotient presentations.

1.1 Since $\mathfrak g$ is abelian, $[x,y]=0$ for all $x,y$, so every defining enveloping relator in [L1] is exactly the corresponding symmetric relator in [L2]. The two generated two-sided ideals are equal. [given, L1, L2, algebra]

2.1 Quotienting the same tensor algebra by the same ideal gives a canonical unital algebra isomorphism $S(\mathfrak g)\cong U(\mathfrak g)$ fixing the image of $\mathfrak g$. This includes $\mathfrak g=0$ and uses no choice of basis; PBW is consistent with, but unnecessary for, this presentation argument. [step 1.1, algebra] ∎
