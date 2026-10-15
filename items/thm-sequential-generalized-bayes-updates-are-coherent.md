---
id: thm-sequential-generalized-bayes-updates-are-coherent
kind: theorem
title: "Fixed-temperature generalized Bayes updates are sequentially coherent"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-generalized-bayes-loss-update-and-temperature
  - lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
  - def-probability-measure
  - def-measure-with-density
  - thm-integration-against-a-density
  - thm-induction-principle
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-exponential-addition-formula
  - def-real-exponential-function-and-e
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
    - title: "J. Knoblauch, J. Jewson, and T. Damoulas, An Optimization-centric View on Bayes’ Rule: Reviewing and Generalizing Variational Inference, JMLR 23(132), 2022"
      url: "https://www.jmlr.org/papers/volume23/19-1047/19-1047.pdf"
---
## Statement

Let $\pi_0$ be a probability prior on the parameter space of
[[def-generalized-bayes-loss-update-and-temperature]], let $w>0$ be fixed,
and let $x_1,\ldots,x_n$ be any finite sequence of observations with
measurable real loss sections $\ell_i(\theta):=\ell(\theta,x_i)$. Set
$\pi_i:=G_{w,\pi_{i-1},x_i}$ recursively, and assume each sequential
normalizer
$$z_i:=\int e^{-w\ell_i(\theta)}\,\pi_{i-1}(d\theta)$$
is finite and positive. Then, for every measurable $A$,
$$\pi_n(A)=\frac{\int_A e^{-w\sum_{i=1}^n\ell_i(\theta)}\,\pi_0(d\theta)}{\int e^{-w\sum_{i=1}^n\ell_i(\theta)}\,\pi_0(d\theta)},\qquad \int e^{-w\sum_{i=1}^n\ell_i(\theta)}\,\pi_0(d\theta)=\prod_{i=1}^n z_i.$$
For $n=0$, the empty sum is zero, the empty product is one, and $\pi_n=\pi_0$.
Thus sequential updating at a fixed temperature agrees with one update using
the sum of the observed losses. No independence or sampling-model assumption
is asserted.

## Facts & Assumptions

**Given:** A probability prior $\pi_0$, a fixed temperature $w>0$, measurable
real loss sections $\ell_1,\ldots,\ell_n$, and finite-positive sequential
normalizers $z_i$.

[F1] [[def-generalized-bayes-loss-update-and-temperature]]: when a prior,
observation, temperature, and finite-positive normalizer are supplied,
$$G_{w,\pi,x}(A)=Z_w(\pi,x)^{-1}\int_Ae^{-w\ell_x}\,d\pi.$$

[F2] [[lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure]]:
each such update is a probability measure.

[F3] [[thm-integration-against-a-density]]: for nonnegative measurable $f,g$,
$$\int g\,d(f\,d\pi)=\int gf\,d\pi.$$

[F4] [[def-probability-measure]]: a probability measure is a measure of
total mass one.

[F5] [[def-measure-with-density]]: $f\,d\pi$ is the measure
$A\mapsto\int_Af\,d\pi$ for a nonnegative measurable $f$.

[F6] [[thm-induction-principle]]: if a property holds at a natural number
and each case implies the next, it holds for every later natural number.

[F7] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: sums
and real scalar multiples of measurable real functions are measurable.

[F8] [[thm-exponential-addition-formula]]: for all real $u,v$,
$e^{u+v}=e^u e^v$.

[F9] [[def-real-exponential-function-and-e]]: the power series definition
gives $e^0=1$.

## Proof

1.1 For $n=0$, the cumulative loss is the empty sum zero. In the power series definition [F9] at zero, the zeroth term is $1$ and every positive-degree term vanishes, so its exponential weight is $1$. By [F4], $\int 1\,d\pi_0=\pi_0(\Theta)=1$. Thus the empty normalizer is the empty product one and the displayed formula is $\pi_0(A)=\pi_0(A)$. [F9, F4, given, algebra]

1.2 For $n=1$, the claim is exactly the update definition [F1], with $z_1=\int e^{-w\ell_1}\,d\pi_0$. This normalizer is finite positive by hypothesis, so the update is a probability by [F2]. [F1, F2, given, base]

1.3 For $n\ge2$, suppose the formula holds at $n-1$, with cumulative normalizer $c_{n-1}=\prod_{i=1}^{n-1}z_i$ and density $f_{n-1}(\theta)=e^{-w\sum_{i=1}^{n-1}\ell_i(\theta)}$ relative to $\pi_0$. The finite cumulative loss is measurable by repeated use of [F7], so [F1] gives measurability of $f_{n-1}$ and of $e^{-w\ell_n}$. Algebra and [F8] factor the cumulative exponential into $f_{n-1}e^{-w\ell_n}$. Then [F3] gives $$z_n=\int e^{-w\ell_n}\,d\pi_{n-1} =c_{n-1}^{-1}\int e^{-w\sum_{i=1}^{n}\ell_i}\,d\pi_0.$$ Thus the cumulative normalizer is $c_n=c_{n-1}z_n=\prod_{i=1}^n z_i$, which is finite and positive. [F7, F1, F8, F3, F5, given, ih]

2.1 By [F1], [F3], and the same factorization [F8], for every measurable $A$, $$\pi_n(A)=z_n^{-1}\int_Ae^{-w\ell_n}\,d\pi_{n-1} =c_n^{-1}\int_Ae^{-w\sum_{i=1}^{n}\ell_i}\,d\pi_0.$$ This proves the induction step. [F1, F3, F8, F7, step 1.3, algebra]

3.1 Define $Q(m)$ to be the claimed formula at $n=m+1$. Step 1.2 proves $Q(0)$. For any $m\in\mathbb N$, set $n=m+2\ge2$; steps 1.3–2.1 prove that the formula at $n-1=m+1$ implies it at $n=m+2$, hence $Q(m)$ implies $Q(m+1)$. Therefore [F6] gives the formula for every $n\ge1$; step 1.1 covers $n=0$. The initial $\pi_0$ is a probability by [F4], and every later $\pi_i$ is a probability by [F2]. The proof uses only fixed-temperature updates and the stated normalizers. [step 1.2, step 1.3, step 2.1, F6, step 1.1, F4, F2, discharge-induction: step 2.1] ∎
