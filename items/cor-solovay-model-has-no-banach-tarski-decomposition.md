---
id: cor-solovay-model-has-no-banach-tarski-decomposition
kind: corollary
title: The Solovay model has no Banach–Tarski decomposition
status: published
origin: pipeline
deps: [lem-solovay-universal-measurability-transfers-to-euclidean-spaces, thm-solovay-inner-model-satisfies-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, thm-lebesgue-measure-of-a-box-of-every-kind]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: volume-contradiction
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
      locator: "Introduction and Parts I-III"
---

## Statement

In $M$, there do not exist a closed ball $K\subseteq\mathbb R^3$, a finite
partition $K=\bigsqcup_{i<m}A_i$, one rigid motion $g_i$ for each $i<m$, and
two disjoint congruent copies $K_0,K_1$ of $K$ such that

$$K_0\sqcup K_1=\bigsqcup_{i<m}g_i[A_i].$$

Thus every original piece is used exactly once in the alleged reassembly of the
disjoint union; this is the usual equidecomposition formulation, not two
separate reassemblies each reusing all the pieces.

## Facts & Assumptions

**Given:** The finite partition, one-motion-per-piece reassembly, and two copies displayed in the statement.

[F1] [[lem-solovay-universal-measurability-transfers-to-euclidean-spaces]]: every alleged piece is Lebesgue measurable.

[F2] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] and [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]: assuming Countable Choice, rigid motions preserve measure.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: assuming Countable Choice, positive-radius balls have positive finite measure by box containment.

[F4] [[thm-solovay-inner-model-satisfies-dependent-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: $M$ satisfies Dependent Choice, hence Countable Choice.

## Proof

1.1 By F4, Countable Choice holds in $M$. If the radius is $r>0$, the ball contains a cube of side $2r/\sqrt3$ and lies in a cube of side $2r$; hence F3 gives $0<V=\lambda_3(K)<\infty$. Finite additivity gives $V=\sum_{i<m}\lambda(A_i)$, and F2 gives $\sum_{i<m}\lambda(g_i[A_i])=V$. But the displayed one-use reassembly and the disjoint congruent copies give $\sum_{i<m}\lambda(g_i[A_i])=\lambda(K_0\sqcup K_1)=2V$. Thus $V=2V$, contradicting $0<V<\infty$. [F1, F2, F3, F4, Given]

1.2 If $r=0$, $K$ is a singleton. Its finite partition has exactly one nonempty piece. Because the statement permits exactly one image of each original piece, the displayed union of the $g_i[A_i]$ has one point, whereas $K_0\sqcup K_1$ has two. Thus the zero-volume endpoint is excluded without the volume calculation. [Given]

2.1 The positive- and zero-radius cases exhaust closed balls, proving the claim. [step 1.1, step 1.2] ∎
