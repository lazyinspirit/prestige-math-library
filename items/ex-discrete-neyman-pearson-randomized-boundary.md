---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: ex-discrete-neyman-pearson-randomized-boundary
kind: example
title: "Randomize at a discrete likelihood-ratio boundary"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-statistical-experiment
  - def-likelihood-ratio-test-with-boundary-randomization
  - lem-likelihood-ratio-test-is-measurable-and-exact-size
  - def-test-size-and-power
  - thm-neyman-pearson-lemma
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measurable-function-between-measurable-spaces
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
justified_by: []
strategy: "Compute the likelihood ratio at each point, solve the threshold equation at its atom, and calculate size and power from the two point masses."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

On $\mathcal X=\{0,1\}$ with its full sigma-algebra and counting measure
$\mu$, let the simple null and alternative laws be
$P_0(\{0\})=P_0(\{1\})=1/2$ and
$P_1(\{0\})=1/4$, $P_1(\{1\})=3/4$. At level $\alpha=1/4$, the
Neyman–Pearson test randomizes with probability $1/2$ at $x=1$ and rejects
with probability $0$ at $x=0$. Its size is $1/4$ and its power is $3/8$.

## Verification

**Given:** The two probability laws above, counting measure $\mu$, and
$\alpha=1/4$. Assume AC for the general Neyman–Pearson comparison.

[A1] [[def-axiom-of-choice]]: the Neyman–Pearson theorem is used in its
AC density-selection branch; the finite example's densities are explicit.

[F1] [[def-counting-measure]]: each singleton has $\mu$-measure $1$.

[F6] [[prop-counting-measure-is-a-measure]] and [[def-finite-sigma-finite-and-semifinite-measures]]: the counting set function is a measure; a finite measure is sigma-finite.

[F2] [[def-likelihood-ratio-test-with-boundary-randomization]] and [[lem-likelihood-ratio-test-is-measurable-and-exact-size]]: the candidate is a measurable randomized test of exact size; on $\{p_0>0\}$ it rejects above its cutoff and randomizes by $\gamma$ at equality.

[F3] [[def-test-size-and-power]]: size is null rejection probability and power is alternative rejection probability.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: expectation of this finite-valued rejection function is the sum of its values weighted by the point masses.

[F5] [[thm-neyman-pearson-lemma]]: no test of size at most $1/4$ has larger power than the constructed likelihood-ratio test.

[F7] [[def-probability-measure]]: a measure with total mass $1$ is a probability measure.

[F8] [[def-measurable-function-between-measurable-spaces]]: every real-valued function on the two-point space with its full sigma-algebra is measurable.

1.1 By [F1] and [F6], $\mu$ is a measure with $\mu(\mathcal X)=2$, so it is finite and hence sigma-finite. Each displayed law has nonnegative masses summing to $1$, and any disjoint family of subsets of $\{0,1\}$ has at most two nonempty members, so each law is countably additive. Thus $P_0,P_1$ are probability measures by [F7]. [given, F1, F6, F7, algebra]

2.1 Define $p_0(0)=p_0(1)=1/2$, $p_1(0)=1/4$, and $p_1(1)=3/4$. They are finite, nonnegative, and measurable by [F8]. For every $A\subseteq\mathcal X$, the simple-integral formula in [F4] gives $\int_Ap_i\,d\mu=\sum_{x\in A}p_i(x)=P_i(A)$, so these are density representatives and $P_i\ll\mu$. Hence $R(0)=1/2$ and $R(1)=3/2$. With $c=3/2$, $P_0(R>c)=0$ and $P_0(R=c)=1/2$, so the boundary equation gives $\gamma=(1/4)/(1/2)=1/2$. The test has $\varphi^*(1)=1/2$ and $\varphi^*(0)=0$. [F2, F4, F8, step 1.1, algebra]

3.1 Using [F4], its size is $E_{P_0}\varphi^*=(1/2)(1/2)+(1/2)(0)=1/4$, and its power is $E_{P_1}\varphi^*=(3/4)(1/2)+(1/4)(0)=3/8$. Thus it uses the boundary atom to attain the requested size. [F3, F4, step 2.1, algebra]

4.1 The Neyman–Pearson lemma [F5] makes this test most powerful among all tests whose size is at most $1/4$. [A1, F5, step 3.1] ∎
