---
id: ex-volume-contradiction-for-an-alleged-banach-tarski-decomposition
kind: example
title: The volume contradiction for an alleged Banach–Tarski decomposition
status: draft
origin: pipeline
deps: [cor-solovay-model-has-no-banach-tarski-decomposition, lem-solovay-universal-measurability-transfers-to-euclidean-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, thm-lebesgue-measure-of-a-box-of-every-kind, thm-solovay-inner-model-satisfies-dependent-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Write the finite-additivity calculation for a positive-radius ball $K$.

## Facts & Assumptions

**Given:** $K=\bigsqcup_{i<m}A_i$ and two disjoint copies $K_0,K_1$ reassembled as $K_0\sqcup K_1=\bigsqcup_{i<m}g_iA_i$.

[F1] [[cor-solovay-model-has-no-banach-tarski-decomposition]]: states that the alleged reassembly cannot exist.

[F2] [[lem-solovay-universal-measurability-transfers-to-euclidean-spaces]]: every piece $A_i\subseteq\mathbb R^3$ is measurable.

[F3] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] and [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]: rigid motions preserve measure.

[F4] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: inner and outer cubes give $0<\lambda(K)<\infty$ for positive radius.

[F5] [[thm-solovay-inner-model-satisfies-dependent-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: $M$ satisfies DC and hence Countable Choice, the hypothesis required by the orthogonal-invariance and box-measure results.

## Verification

1.1 F5 supplies Countable Choice inside $M$. By F2 and F4 all terms are measurable and $0<V=\lambda(K)<\infty$. Finite additivity gives $V=\sum_{i<m}\lambda(A_i)$. F3 gives $\sum_{i<m}\lambda(g_iA_i)=\sum_{i<m}\lambda(A_i)=V$. [F2, F3, F4, F5]

2.1 But disjoint congruent copies give $\lambda(K_0\sqcup K_1)=\lambda(K_0)+\lambda(K_1)=V+V=2V$. The same target set was the reassembly in step 1.1, so $V=2V$, hence $V=0$, contradicting $0<V<\infty$ and verifying F1's exclusion by the promised calculation. [F1, F3, step 1.1] ∎
