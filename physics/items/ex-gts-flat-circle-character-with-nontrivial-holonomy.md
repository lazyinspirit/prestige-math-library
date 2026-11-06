---
id: ex-gts-flat-circle-character-with-nontrivial-holonomy
kind: example
title: Flat circle character with nontrivial holonomy
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
generation:
  role: example
proof_strategy: direct
deps:
  - def-gts-cheegersimons-differential-character
  - cor-homology-of-spheres
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  cor-homology-of-spheres: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references: []
---

## Statement

Assume full AC. Let $S^1$ have its positive orientation and let $[\gamma]$ be the corresponding generator of $H_1(S^1;\mathbb Z)\cong\mathbb Z$. For each $\theta\in\mathbb R/\mathbb Z$, the formula $h_\theta(z)=\theta\,[z]$ defines a degree-two differential character on smooth integral $1$-cycles. It has zero curvature and zero integral characteristic class, while $h_\theta(\gamma)=\theta$. In particular, the holonomy is nontrivial when $\theta\ne0$; distinct values of $\theta$ give distinct flat characters with the same $(I,R)$.

## Statement references

[[def-gts-cheegersimons-differential-character]]

## Facts & Assumptions

**Given:** The positive orientation on $S^1$, the additive group $\mathbb R/\mathbb Z$, and the character convention of [[def-gts-cheegersimons-differential-character]].

[F1] [[cor-homology-of-spheres]] gives $H_1(S^1;\mathbb Z)\cong\mathbb Z$ and $H_2(S^1;\mathbb Z)=0$.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] identifies $H^2(S^1;\mathbb Z)$ with the extension of $\operatorname{Hom}(H_2(S^1),\mathbb Z)$ by $\operatorname{Ext}(H_1(S^1),\mathbb Z)$; both groups vanish since $H_2=0$ and $H_1\cong\mathbb Z$ is free.

[F3] [[lem-gts-smooth-integral-chains-compute-singular-homology]] identifies smooth singular cycle classes with these ordinary homology classes.

[A1] Full AC is [[def-axiom-of-choice]] and is the assumption in the topological universal-coefficient theorem used for $H^2(S^1;\mathbb Z)$.

## Proof

1.1 For a smooth integral $1$-cycle $z$, define $[z]\in\mathbb Z$ by its homology class under [F1] and [F3]. Homology is additive, so $z\mapsto[z]$ is a homomorphism and $h_\theta$ is a homomorphism. If $c$ is any smooth integral $2$-chain, then $[\partial c]=0$ in homology; consequently $h_\theta(\partial c)=0=\int_c0\pmod{\mathbb Z}$. The defining boundary identity holds with curvature $0$. [F1, F3, given, algebra]

2.1 By [F2] under [A1], $H^2(S^1;\mathbb Z)=0$, so the characteristic class of every degree-two character on $S^1$, including $h_\theta$, is zero. Its curvature was shown to be zero in step 1.1. On the positive fundamental cycle $\gamma$, $[\gamma]=1$, hence $h_\theta(\gamma)=\theta$. If $\theta\ne\theta'$ in $\mathbb R/\mathbb Z$, these values differ, so the characters are distinct despite equal $I$ and $R$. This is an abstract mathematical example; it asserts no physical measurement. [A1, F1, F2, step 1.1, algebra] ∎
