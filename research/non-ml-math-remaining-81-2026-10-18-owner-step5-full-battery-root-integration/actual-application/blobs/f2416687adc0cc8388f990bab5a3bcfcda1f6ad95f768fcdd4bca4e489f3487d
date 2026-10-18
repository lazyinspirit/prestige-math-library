---
id: lem-quaternion-conjugation-is-an-anti-involution
kind: lemma
title: Quaternion conjugation is an anti-involution
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 0
deps: [def-quaternions]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, §2.3"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

For the quaternion algebra $\mathbb H$ of [[def-quaternions]],
$\bar{\bar a}=a$, $a+\bar a=\widehat{2a_0}$ for
$a=(a_0,a_1,a_2,a_3)$, and $\overline{ab}=\bar b\,\bar a$ for all
$a,b\in\mathbb H$.

## Facts & Assumptions

**Given:** $a=(a_0,a_1,a_2,a_3)$ and $b=(b_0,b_1,b_2,b_3)$ in the real
four-tuple algebra, with multiplication and conjugation as defined in
[[def-quaternions]].

[F1] Quaternion conjugation sends $(x_0,x_1,x_2,x_3)$ to
$(x_0,-x_1,-x_2,-x_3)$, and the four coordinates of multiplication are the
displayed bilinear formula in [[def-quaternions]].

## Proof
1.1 Applying the defining conjugation formula twice returns $(a_0,a_1,a_2,a_3)$, so $\bar{\bar a}=a$. Adding the tuple to its conjugate gives $(2a_0,0,0,0)=\widehat{2a_0}$. [given, F1, algebra]

2.1 Write $ab=(r_0,r_1,r_2,r_3)$, where $r_0=a_0b_0-a_1b_1-a_2b_2-a_3b_3$, $r_1=a_0b_1+a_1b_0+a_2b_3-a_3b_2$, $r_2=a_0b_2+a_2b_0+a_3b_1-a_1b_3$, and $r_3=a_0b_3+a_3b_0+a_1b_2-a_2b_1$. Substituting $(b_0,-b_1,-b_2,-b_3)$ and $(a_0,-a_1,-a_2,-a_3)$ into the same product formula gives $\bar b\,\bar a=(r_0,-r_1,-r_2,-r_3)$ coordinate by coordinate. This is $\overline{ab}$ by [F1]. [given, F1, step 1.1, algebra] ∎
