---
id: cor-meromorphic-great-picard-theorem
kind: corollary
title: "A meromorphic essential singularity omits at most two sphere values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-great-picard-theorem, thm-three-point-transitivity-mobius-transformations, thm-mobius-transformations-biholomorphic-sphere]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Let $f$ be meromorphic on a punctured disc $0<|z-a|<R$ with an essential
singularity at $a$. Then at most two sphere values can be omitted on a
punctured neighborhood of $a$; equivalently, with at most two sphere-value
exceptions, every value occurs infinitely often in every punctured
neighborhood of $a$.

## Facts & Assumptions

**Given:** A meromorphic function with an essential singularity on $0<|z-a|<R$.

[L1] Great Picard holds for holomorphic functions and finite values ([[thm-great-picard-theorem]]).

[L2] Möbius transformations act biholomorphically on the sphere and can move any ordered triple of sphere points to any other ([[thm-mobius-transformations-biholomorphic-sphere]], [[thm-three-point-transitivity-mobius-transformations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose three distinct sphere values each failed to occur infinitely often in some punctured neighborhood of $a$. After passing to a common smaller neighborhood and then shrinking past their finitely many preimages, all three values are omitted. By [L2], choose a Möbius transformation $M$ sending them to $0$, $1$, and $\infty$. Then $g:=M\circ f$ is holomorphic on that smaller punctured disc and still has an essential singularity at $a$, because a biholomorphic target change cannot turn an essential singularity into a removable singularity or pole. [L2, given, assume-contra, choose]

2.1 The function $g$ omits the finite values $0$ and $1$, so [L1] gives a contradiction. Thus at most two sphere values can fail the infinitely-often property, and every other sphere value occurs infinitely often in every punctured neighborhood. [L1, step 1.1, discharge-contradiction]

3.1 This is the meromorphic Great Picard conclusion. [step 2.1] ∎
