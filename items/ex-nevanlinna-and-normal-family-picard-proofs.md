---
id: ex-nevanlinna-and-normal-family-picard-proofs
kind: example
title: "A normal-family proof of Great Picard"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-nevanlinna-exterior-three-value-extension
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Aleksander Simonič, The Ahlfors lemma and Picard's theorems"
      url: "https://arxiv.org/pdf/1506.07019v1"
      locator: "§5.3 Theorem 11 and §5.4 Theorems 13–14, printed pp. 13–15: Schottky normality and the punctured-disc extension argument; the direct exterior lemma is proved in the assigned supplier."
---

## Example

Let $f$ be meromorphic on $0<|z-z_0|<r^*$ with an isolated essential
singularity at $z_0$. The exterior three-value extension lemma rules out
three sphere values omitted on any punctured neighbourhood of $z_0$.
Consequently every sphere value is attained infinitely often in every
punctured neighbourhood, with at most two exceptions. If $f$ is holomorphic
there, at most one finite value is exceptional.

## Facts & Assumptions

**Given:** Such a punctured-disc meromorphic function $f$.

[F1] If a meromorphic function $G$ on $|w|>R$ omits three fixed distinct sphere values on $|w|>R_1$ for some $R_1>R$, then $G$ extends meromorphically across infinity ([[lem-nevanlinna-exterior-three-value-extension]]).

## Verification

**Proof technique:** invert the puncture and apply the three-value extension lemma.

1.1 Suppose three distinct sphere values are omitted on $0<|z-z_0|<\rho$ for some $0<\rho<r^*$. The function $G(w):=f(z_0+\rho/w)$ is meromorphic on $|w|>1$ and omits the same three values there. By [F1] with $R=1$ and $R_1=2$, it extends meromorphically across infinity; inversion then extends $f$ meromorphically across $z_0$, contrary to essentiality. [F1, given, discharge-contradiction]

2.1 If three distinct values each occurred only finitely often in some punctured neighbourhood, take a radius inside all three neighbourhoods and then shrink it below the distance to the finitely many preimages there. If the combined preimage set is empty, any smaller radius works. The three values would all be omitted on the smaller punctured disc, contrary to step 1.1. Hence at most two sphere values are exceptional. [step 1.1, choose, cases]

3.1 If $f$ is holomorphic on the punctured disc, it omits $\infty$, so step 2.1 leaves at most one exceptional finite value. [step 2.1, algebra] ∎
