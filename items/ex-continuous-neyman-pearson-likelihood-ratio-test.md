---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: ex-continuous-neyman-pearson-likelihood-ratio-test
kind: example
title: "A continuous likelihood-ratio test"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-statistical-experiment
  - def-likelihood-ratio-test-with-boundary-randomization
  - lem-likelihood-ratio-test-is-measurable-and-exact-size
  - def-test-size-and-power
  - thm-neyman-pearson-lemma
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-measure-with-density
  - thm-integration-against-a-density
  - def-probability-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measurable-function-between-measurable-spaces
  - cor-continuous-functions-are-borel-measurable
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - def-darboux-integral
  - thm-darboux-equals-riemann
  - def-darboux-sums
  - def-partition-and-refinement
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-induction-principle
  - def-canonical-natural
  - cor-archimedean-reciprocal
  - cor-expectation-of-an-indicator-is-probability
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
justified_by: []
strategy: "Use a uniform null density and a triangular alternative density. Derive the linear-density interval probabilities from Darboux sums, then read off the likelihood-ratio cutoff, size, power, and optimality."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

On $[0,1]$ with restricted Lebesgue measure, let $P_0$ have density
$p_0(x)=1$ and let $P_1$ have density $p_1(x)=2x$. At level
$\alpha=1/4$, the likelihood-ratio test rejects for $x>3/4$, has size
$1/4$, and has power $7/16$.

## Verification

**Given:** The interval data space $([0,1],\mathcal A)$, where $\mathcal A$ is the trace of the Lebesgue sigma-algebra, restricted Lebesgue measure $\mu$, the densities $p_0(x)=1$ and $p_1(x)=2x$, and $\alpha=1/4$.

[F0] [[def-statistical-experiment]]: an experiment consists of a data measurable space, a parameter set, and one probability law for each parameter.

[A1] [[def-axiom-of-choice]]: AC is assumed for the general Neyman–Pearson theorem; the example's density representatives $p_0=1$ and $p_1=2x$ are explicit.

[A2] [[def-countable-choice]]: CC is used for the restricted Lebesgue-measure construction and the Riemann-to-Lebesgue equality below.

[F1] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], and [[thm-lebesgue-measure-of-a-box-of-every-kind]]: under CC, restricted Lebesgue measure is a measure; interval mass is length and singleton mass is zero.

[F2] [[cor-continuous-functions-are-borel-measurable]] and [[def-measurable-function-between-measurable-spaces]]: the continuous extension $x\mapsto2x$ on $\mathbb R$ is Borel measurable, so its restriction to $[0,1]$ is measurable for the trace sigma-algebra $\mathcal A$.

[F3] [[def-measure-with-density]] and [[thm-integration-against-a-density]]: $A\mapsto\int_A2x\,d\mu$ is a measure and integrates nonnegative $g$ as $\int g(x)2x\,d\mu(x)$.

[F4] [[thm-continuous-implies-integrable]]: the continuous function $2x$ is Riemann integrable on every compact subinterval.

[F5] [[def-partition-and-refinement]], [[def-darboux-sums]], [[def-darboux-integral]], and [[thm-darboux-equals-riemann]]: the bounded Riemann-integrable function has the same Darboux integral, and each lower sum is at most it while each upper sum is at least it.

[F6] [[def-finite-sum]], [[lem-finite-sum-laws]], [[def-canonical-natural]], and [[thm-induction-principle]]: finite sums obey their recursion, naturals are interpreted in $\mathbb R$, and induction holds.

[F7] [[cor-archimedean-reciprocal]]: for each $\varepsilon>0$ a positive natural $N$ can be chosen with $1/N<\varepsilon$.

[F8] [[def-measure-with-density]], [[thm-integration-against-a-density]], and [[cor-expectation-of-an-indicator-is-probability]]: density integrals give the corresponding law masses and rejection probabilities.

[F9] [[def-likelihood-ratio-test-with-boundary-randomization]], [[lem-likelihood-ratio-test-is-measurable-and-exact-size]], and [[def-test-size-and-power]]: the candidate rejects above its likelihood-ratio cutoff and has the displayed null size.

[F10] [[thm-neyman-pearson-lemma]]: no test of size at most $1/4$ has greater power than the candidate.

[F11] [[def-finite-sigma-finite-and-semifinite-measures]]: a finite measure is sigma-finite by the one-set cover consisting of the whole space.

[F12] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: under CC, a bounded Riemann-integrable function is Lebesgue measurable and its Lebesgue and Riemann integrals agree.

[F13] [[def-probability-measure]]: a measure with total mass $1$ is a probability measure.

[F14] [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: for every measurable $A$, $\int_A1\,d\mu=\mu(A)$.

**Proof technique:** direct.

1.1 By [A2] and [F1], Lebesgue measure is a measure and $[0,1]$ is measurable with measure $1$. Each event in the trace sigma-algebra $\mathcal A$ is therefore Lebesgue measurable, and restricting Lebesgue measure to these events preserves countable additivity. Hence $\mu$ is a probability measure by [F13]. Define $Q_1(A)=\int_A2x\,d\mu(x)$. The density is nonnegative and measurable by [F2], so [F3] makes $Q_1$ a measure. [A2, F1, F2, F3, F13, given]

1.2 Let $S_N=\sum_{k<N}k$. Its recursion is $S_0=0$ and $S_{N+1}=S_N+N$, so induction [F6] gives $2S_N=N(N-1)$ for every $N\ge0$. [F6, algebra, induction]

2.1 Fix $0\le a<b\le1$, put $d=b-a$, and divide $[a,b]$ into $N\ge1$ equal intervals of length $d/N$. Since $2x$ is increasing, the lower and upper sums are respectively $L_N=2ad+d^2(1-1/N)$ and $U_N=2ad+d^2(1+1/N)$, by substituting $S_N=N(N-1)/2$ into the finite sums in [F5]. [F4, F5, F6, step 1.2, algebra]

3.1 The value $b^2-a^2=2ad+d^2$ lies between $L_N$ and $U_N$, and their gap is $2d^2/N$. By [F7] this gap can be made arbitrarily small. The Lebesgue integral equals the Riemann integral by [A2] and [F12], while [F5] bounds that integral between $L_N$ and $U_N$ for every $N$. Hence $\int_{[a,b]}2x\,d\mu(x)=b^2-a^2$. [A2, F5, F7, F12, step 2.1, algebra]

4.1 Step 3.1 with $a=0,b=1$ gives $Q_1([0,1])=1$, so $P_1:=Q_1$ is a probability measure by [F13]. Set $P_0:=\mu$ and $p_0(x):=1$; for each $A\in\mathcal A$, [F14] gives $\int_Ap_0\,d\mu=\mu(A)$, so $p_0$ is a density of $P_0$. By definition of $Q_1$, $p_1(x):=2x$ is a density of $P_1$. Thus they define the experiment [F0], and their likelihood ratio is $R(x)=2x$. The common measure $\mu$ is finite and hence sigma-finite by [F11]. With $c=3/2$ and $\gamma=0$, $P_0(R>c)=\mu((3/4,1])=1/4$ and $P_0(R=c)=\mu(\{3/4\})=0$ by [F1]. Thus [F9] gives the rejection region $x>3/4$ and size $1/4$. [A2, F0, F1, F3, F8, F9, F11, F13, F14, step 3.1, algebra]

4.2 The power is $P_1((3/4,1])=\int_{[3/4,1]}2x\,d\mu(x)=1-(3/4)^2=7/16$ by [F1], [F3], and step 3.1; the singleton boundary has zero measure. [A2, F1, F3, F8, step 3.1, algebra]

5.1 Under AC [A1], the Neyman–Pearson lemma [F10] says no test with size at most $1/4$ has larger power. [A1, F10, step 4.1, step 4.2] ∎
