---
id: ex-bernoulli-likelihood-ratio-and-change-of-measure
kind: example
title: "Bernoulli likelihood ratio and change of measure"
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
  - def-finite-sigma-finite-and-semifinite-measures
  - def-statistical-experiment
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-likelihood-ratio-as-rn-derivative
  - thm-likelihood-ratio-change-of-measure
  - def-axiom-of-choice
proof_strategy: direct
generation:
  role: example
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

## Example

Let $\mathcal X=\{0,1\}$, $\mathcal A=2^{\mathcal X}$, and let $\mu$ be
counting measure. Set $\Theta=\{0,1\}$ and define the experiment's probability
measures by
$$
P_0(\{1\})=\frac13,\quad P_0(\{0\})=\frac23,\qquad P_1(\{1\})=\frac23,\quad P_1(\{0\})=\frac13.
$$
Both are dominated by $\mu$. Their likelihood-ratio density is
$r(0)=1/2$ and $r(1)=2$.

## Facts & Assumptions

**Given:** AC (for the linked general theorem), the two-point measurable space, counting measure, and probability mass assignments in the example.

[F1] [[def-sigma-algebra]]: a sigma-algebra is an algebra of subsets closed under countable unions; the full power set of $\{0,1\}$ is such an algebra.

[F2] [[def-measurable-space]]: a measurable space is a set with a sigma-algebra.

[F3] [[def-counting-measure]], [[prop-counting-measure-is-a-measure]], and [[def-finite-sigma-finite-and-semifinite-measures]]: counting measure assigns mass $1$ to each singleton and is a measure; here its total mass is $2$, so it is finite and sigma-finite.

[F4] [[def-probability-measure]]: a measure of total mass $1$ is a probability measure.

[F5] [[def-statistical-experiment]]: an experiment is a parameter-indexed family of probability measures on one measurable sample space.

[F6] [[def-dominated-statistical-experiment]]: domination means each sampling law is absolutely continuous with respect to the supplied sigma-finite positive measure.

[F7] [[def-likelihood-density]]: for a fixed observation $x$, likelihood is the selected density value $p_\theta(x)$.

[F8] [[def-likelihood-ratio-as-rn-derivative]]: for $P_1\ll P_0$, the full likelihood-ratio class is $dP_1/dP_0$.

[F9] [[thm-likelihood-ratio-change-of-measure]]: when $P_1\ll P_0$, a nonnegative likelihood-ratio representative satisfies $E_{P_0}[g r]=E_{P_1}[g]$ for every nonnegative measurable $g$ and every $P_1$-integrable real $g$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function; the finite example itself uses explicit mass functions.

## Verification

**Given:** $\mathcal X=\{0,1\}$, the four masses above, and counting measure $\mu$.

1.1 The full power set is a sigma-algebra by [F1], so [F2] gives a measurable space. The counting measure is finite with $\mu(\mathcal X)=2$ by [F3], hence sigma-finite. Each displayed mass is nonnegative and the two masses for each $P_i$ sum to $1$. For any disjoint sequence of events, each point belongs to at most one event, so the mass formula is countably additive; each $P_i$ is therefore a probability measure by [F4]. Since counting measure assigns positive mass to every nonempty subset, $P_i\ll\mu$, and the family is a dominated experiment by [F5]–[F6]. [F1, F2, F3, F4, F5, F6, given, algebra]

1.2 Put $p_i(x):=P_i(\{x\})$ for $i\in\{0,1\}$. For every $A\subseteq\mathcal X$, $\int_A p_i\,d\mu=\sum_{x\in A}p_i(x)=P_i(A)$, so these are density representatives as in [F7]. Since $p_0$ is positive at both points, $P_1\ll P_0$; define $r(x)=p_1(x)/p_0(x)$. For every $A\subseteq\mathcal X$, $\int_A r\,dP_0=\sum_{x\in A}r(x)p_0(x)=\sum_{x\in A}p_1(x)=P_1(A)$; thus $r$ represents the likelihood-ratio derivative [F8], with $r(0)=(1/3)/(2/3)=1/2$ and $r(1)=(2/3)/(1/3)=2$. [A1, F7, F8, given, algebra]

2.1 For any real-valued $g$ on $\mathcal X$, $E_{P_0}[gr]=\frac23g(0)\frac12+\frac13g(1)2=\frac13g(0)+\frac23g(1)=E_{P_1}[g]$. Thus the change-of-measure identity holds directly, in agreement with [A1, F9]. [A1, F9, given, algebra] ∎
