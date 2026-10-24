---
id: "cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values"
kind: "counterexample"
title: "Regular conditional laws are not unique on null conditioning values"
deps: ["def-regular-conditional-distribution", "def-measure-kernel-and-probability-kernel", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

False assertion: regular conditional laws of X given Y must agree at every conditioning value y.

Assume AC for the compact integration bridge. Let Y be uniform on (0,1) and X=0 identically, with both targets real. The kernels $K(y,\cdot)=\delta_0$ for all y and
$$L(y,\cdot)=\begin{cases}\delta_1,&y=1/2,\\ \delta_0,&y\ne1/2\end{cases}$$

are two distinct versions of the same conditional law.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] RCDs require probability sections, measurable evaluations and conditioning-event identities. [[def-regular-conditional-distribution]].

[F2] The kernel conditions apply at every conditioning value. [[def-measure-kernel-and-probability-kernel]].

[F3] The uniform normalization follows by integrating one on [0,1]. [[thm-ftc-second-part]].

[F4] The compact integral agrees with Lebesgue integration under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F5] AC supplies countable choice for the compact integral bridge. [[def-axiom-of-choice]].

[F6] The interval density defines the sample probability. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

## Counterexample

**Proof technique:** direct.

1.1 Take $\Omega=(0,1)$ with Borel sigma-algebra and Lebesgue probability, Y(omega)=omega and X(omega)=0. The mass is one by [F3]–[F6], integrating the constant derivative of x on [0,1] and ignoring its null endpoints. The singleton $N=\{1/2\}$ is Borel and has measure zero: for every positive integer n it is contained in an interval of length $2/n$, so its measure is at most $2/n$ and hence zero. Each Dirac section is a probability because for disjoint sets at most one contains its point. For Borel A, $$L(y,A)=\mathbf1_A(0)+\mathbf1_{\{1/2\}}(y)\bigl(\mathbf1_A(1)-\mathbf1_A(0)\bigr),$$ a measurable function; K has constant measurable evaluations. Thus both satisfy [F2]. [F2, F3, F4, F5, F6]

2.1 For every $H\in\sigma(Y)$ and Borel A, $\int_HK(Y,A)\,dP=\mathbf1_A(0)P(H)=P(H\cap\{X\in A\})$. The difference $L(Y,A)-K(Y,A)$ is bounded in absolute value by $\mathbf1_N(Y)$, whose integral over H is zero. Therefore L satisfies the same identity, proving [F1] for both kernels. They nevertheless disagree at y=1/2: for the event A={1}, $K(1/2,A)=0$ whereas $L(1/2,A)=1$. This is a difference of probability measures at an actual conditioning value in (0,1), not merely outside the range of Y. Their equality outside N is consistent with almost-everywhere uniqueness. [step 1.1, F1] ∎
