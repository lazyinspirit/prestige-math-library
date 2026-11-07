---
id: lem-expanding-torus-map-invariant-set-has-zero-or-full-measure
kind: lemma
title: "Forward invariance under an expanding torus map forces zero or full measure"
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
  - thm-lebesgue-density-theorem
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, A note on zero-one laws in metrical Diophantine approximation, Lemma 2"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $k\ge1$, let $\ell\ge2$ be an integer, and let $s\in\mathbb Z^k$. Equip $\mathbb T^k=\mathbb R^k/\mathbb Z^k$ with the probability measure obtained from Lebesgue measure on $[0,1)^k$, and define

$$T(x):=\ell x+s/\ell\pmod{\mathbb Z^k}.$$

If $A\subseteq\mathbb T^k$ is measurable and $T(A)\subseteq A$, then $|A|=0$ or $|A|=1$.

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, Lemma 2](https://arxiv.org/pdf/0803.2355v1)

## Facts & Assumptions

**Given:** Countable Choice, an integer expansion factor, an integer translation numerator, and a measurable forward-invariant subset of the normalized torus.

[A1] Countable Choice supplies the countably additive Lebesgue measure on the fundamental cube. ([[def-countable-choice]])

[F1] Every positive-measure measurable set has density points outside a null set. ([[thm-lebesgue-density-theorem]])

[F2] Invertible linear changes of variables scale Lebesgue measure by the absolute determinant; translations preserve it. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F3] A half-open box has measure equal to the product of its side lengths. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] Euclidean balls have positive finite measure, and dilation by $a>0$ multiplies their measure by $a^k$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-measure-under-dilations-and-reflections]])

## Proof




1.1 The map $T$ is well defined on $\mathbb T^k$ because changing a representative $x$ by an integer vector changes $\ell x$ by an integer vector. By induction, its $\nu$th iterate is $\displaystyle T^\nu(x)=\ell^\nu x+s/\ell\pmod{\mathbb Z^k},$ since the additional term $s(1+\ell+\cdots+\ell^{\nu-2})$ is integral. Thus $T^\nu(A)\subseteq A$ and $\mathbf1_A(x)\le\mathbf1_A(T^\nu x)$. [given, construct, induction]

2.1 Suppose $|A|>0$. Lift $A$ periodically to a measurable set $\widetilde A\subseteq\mathbb R^k$ and choose a density point $x_0$ of this lift by [F1]. Let $Q_\nu$ be the half-open axis-parallel cube centered at $x_0$ with side length $\ell^{-\nu}$. The inequality in step 1.1 and change of variables [F2] give $\displaystyle |\widetilde A\cap Q_\nu|\le\int_{Q_\nu}\mathbf1_{\widetilde A}(\ell^\nu x+s/\ell)\,dx =\ell^{-\nu k}|A|.$ Indeed, the affine image of $Q_\nu$ is a translate of a half-open unit cube. Its integral of the periodic indicator equals $|A|$: partition each coordinate interval at the finitely many integer points it meets, translate the resulting pieces by integer vectors into $[0,1)^k$, and use periodicity and translation invariance. The Jacobian contributes $\ell^{-\nu k}$. [step 1.1, A1, F1, F2, F3]

3.1 By [F3], $|Q_\nu|=\ell^{-\nu k}$. The cube lies in the centered ball $B(x_0,\sqrt{k}\,\ell^{-\nu}/2)$. Since $x_0$ is a density point, the complement of $\widetilde A$ in that ball has measure $o(\ell^{-\nu k})$; [F4] makes the ratio of this complement to $|Q_\nu|$ tend to $0$. Thus $|\widetilde A\cap Q_\nu|/|Q_\nu|\to1$. Step 2.1 bounds this ratio by $|A|$, so $1\le|A|$. The normalized torus has measure $1$, hence $|A|=1$. If $|A|$ was not positive, it is $0$, proving the dichotomy. [given, step 2.1, F1, F3, F4, algebra] ∎
