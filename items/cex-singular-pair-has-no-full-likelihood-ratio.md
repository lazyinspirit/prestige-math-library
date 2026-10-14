---
id: cex-singular-pair-has-no-full-likelihood-ratio
kind: counterexample
title: "A singular pair has no full likelihood ratio"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-sigma-algebra
  - def-measurable-space
  - def-measure
  - def-probability-measure
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-mutually-singular-measures
  - def-likelihood-ratio-as-rn-derivative
  - thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
  - thm-likelihood-ratio-change-of-measure
  - cor-integral-over-a-null-set-vanishes
  - def-axiom-of-choice
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Statement refuted

On a finite sample space with counting measure, for any probability laws
$P_0,P_1$, the pointwise quotient $r(x)=p_1(x)/p_0(x)$ is finite at every
point and represents $P_1$ as a density with respect to $P_0$.

## Facts & Assumptions

**Given:** AC (for the linked likelihood-ratio definition and theorem), and
probability measures on $\mathcal X=\{0,1\}$ with
$\mathcal A=2^{\mathcal X}$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function.

[F1] [[def-sigma-algebra]] and [[def-measurable-space]]: the full power set of a finite set is a sigma-algebra and gives a measurable space.

[F2] [[def-probability-measure]]: a probability measure is a measure of total mass $1$.

[F3] [[def-counting-measure]], [[prop-counting-measure-is-a-measure]], and [[def-measure]]: counting measure assigns unit mass to each singleton and is a measure on the finite power-set space.

[F4] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]: a measure is absolutely continuous when it vanishes on every null set of the reference measure.

[F5] [[def-mutually-singular-measures]]: singularity is witnessed by disjoint measurable carriers on which each measure vanishes off its own carrier.

[F6] [[def-likelihood-ratio-as-rn-derivative]]: the likelihood-ratio class for a general pair is the derivative of the absolutely continuous component; the singular component remains separate.

[F9] [[thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]]: a decomposition into an absolutely continuous and singular part is unique.

[F7] [[thm-likelihood-ratio-change-of-measure]]: the change-of-measure identity assumes $P_1\ll P_0$.

[F8] [[cor-integral-over-a-null-set-vanishes]]: the integral of a nonnegative measurable function over a null set is zero.

## Counterexample

Take $P_0=\delta_0$ and $P_1=\delta_1$, where
$\delta_i(A)=1$ if $i\in A$ and $0$ otherwise. With respect to counting
measure their densities are
$p_0(0)=1,p_0(1)=0$ and $p_1(0)=0,p_1(1)=1$.

**Given:** $P_0=\delta_0$ and $P_1=\delta_1$ on the finite measurable space above.

1.1 The full power set is a sigma-algebra by [F1]. Each $\delta_i$ has total mass $1$ and is countably additive: in a disjoint sequence, at most one set contains $i$, so the sum of its values equals its value on the union. Thus $P_0,P_1$ are probability measures by [F2]. The set $\{1\}$ is $P_0$-null and has $P_1$-mass $1$, so $P_1\not\ll P_0$ by [F4]. The singleton carriers show $P_0\perp P_1$ by [F5]. [F1, F2, F4, F5, given, algebra]

2.1 The decomposition relative to $P_0$ is $P_1=0+P_1$: the zero measure is absolutely continuous with respect to $P_0$, and $P_1$ is singular to $P_0$ by step 1.1. By uniqueness [F9], this is the decomposition in [F6], so the likelihood-ratio class is zero $P_0$-almost everywhere. At $x=1$, the point-mass quotient has denominator $p_0(1)=0$ and is undefined. [A1, F3, F5, F6, F9, step 1.1, given]

3.1 If a nonnegative density $q$ represented all of $P_1$ with respect to $P_0$, then $P_1(\{1\})=\int_{\{1\}}q\,dP_0=0$ by [F8], contradicting $P_1(\{1\})=1$. Thus no full density exists. The hypothesis of [F7] fails, so this does not contradict the dominated change-of-measure theorem. [A1, F7, F8, step 1.1, given, contradiction: algebra] ∎
