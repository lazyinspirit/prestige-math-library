---
id: lem-periodic-full-cube-set-is-full-on-every-ball
kind: lemma
title: "A periodic full-cube set has full measure in every Euclidean ball"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A note on zero-one laws in metrical Diophantine approximation, §2"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Assume Countable Choice. Let $k\ge1$, and let $E\subseteq\mathbb R^k$ be Lebesgue measurable and invariant under every translation by $z\in\mathbb Z^k$. If $[0,1)^k\setminus E$ has Lebesgue measure zero, then $\mathbb R^k\setminus E$ has Lebesgue measure zero. Consequently, if $\mathcal H^k$ is the library's $k$-dimensional Hausdorff measure, then for every bounded Euclidean ball $B$,

$$\mathcal H^k(B\cap E)=\mathcal H^k(B).$$

## Facts & Assumptions

**Given:** Countably additive Lebesgue measure, translation invariance, and the integer translates of the half-open unit cube partition $\mathbb R^k$.

[A1] Countable Choice provides the countably additive Lebesgue measure and the measure comparison used below. ([[def-countable-choice]])

[F1] Lebesgue outer measure and measurability are translation invariant. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F2] The $k$-dimensional Hausdorff measure is a positive constant multiple of $k$-dimensional Lebesgue outer measure on all subsets of $\mathbb R^k$. ([[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]])

## Proof

1.1 Put $N=[0,1)^k\setminus E$. For each $z\in\mathbb Z^k$, periodicity gives $(z+[0,1)^k)\setminus E=z+N$. By [A1] and [F1], each such translate is measurable and null. [given, A1, F1, algebra]

2.1 The half-open cubes $z+[0,1)^k$ partition $\mathbb R^k$, so $\mathbb R^k\setminus E=\bigcup_{z\in\mathbb Z^k}(z+N)$. This is a countable union of null sets, hence null by countable subadditivity. [A1, step 1.1, algebra]

3.1 For a bounded ball $B$, step 2.1 gives $\lambda_k(B\cap E)=\lambda_k(B)$. Both sets are Lebesgue measurable, and [F2] identifies their Hausdorff measures with the same positive constant times their Lebesgue measures. Thus $\mathcal H^k(B\cap E)=\mathcal H^k(B)$. [step 2.1, F2, algebra] ∎

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, §2](https://arxiv.org/pdf/0803.2355v1)
