---
id: thm-bayes-rule-minimizes-prior-risk
kind: theorem
title: A posterior-risk minimizer minimizes prior risk
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-loss-function-and-risk
  - def-bayes-and-minimax-risk
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-randomized-procedure-as-a-markov-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - def-regular-conditional-distribution
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-measurability-of-integration-against-a-kernel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-integral-over-a-null-set-vanishes
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-measurable-function-between-measurable-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-standard-borel-space
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-bayes-rule-minimizes-prior-risk.json
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–107"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4–5, PDF pp. 7–13"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a probability
kernel from a standard-Borel parameter space $(\Theta,\mathcal T)$ to a
standard-Borel data space $(\mathcal X,\mathcal A)$, where standard Borel means
measurably isomorphic to a Polish space
(Standard Borel spaces). Let $\pi$ be a prior,
and let $L:\Theta\times\mathsf D\to[0,+\infty]$ be jointly measurable for a
measurable action space $(\mathsf D,\mathcal G)$. Let $J$ be the joint prior-data
law of A prior and model kernel define a joint law, let $M$ be its data
marginal, and let $\Pi_x(d\theta)$ be a regular posterior distribution of
$\theta$ given $x$ (the disintegration is supplied by
Disintegration of a joint law on standard borel spaces).
Define posterior risk
$$q(x,a)=\int_\Theta L(\theta,a)\,\Pi_x(d\theta).$$
Suppose a measurable deterministic rule $d^*:\mathcal X\to\mathsf D$
attains the posterior minimum for $M$-almost every $x$; that is,
$q(x,d^*(x))\leq q(x,a)$ for every $a\in\mathsf D$ on one measurable
$M$-full-measure set. Then $d^*$ minimizes prior-integrated risk among all randomized decision
rules $\delta$:
$$r_\pi(d^*)\leq r_\pi(\delta).$$
No conclusion is asserted when a measurable posterior minimizer does not
exist. All risks may be $+\infty$.

## Statement references

[[def-standard-borel-space]]

[[lem-prior-and-model-kernel-define-joint-law]]

[[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

## Facts & Assumptions

**Given:** The kernels, prior, joint loss, posterior, and measurable minimizing rule in the statement.

[A1] Assume AC, as required by standard-Borel disintegration ([[def-axiom-of-choice]]).

[F1] The model is a probability kernel from parameters to data ([[def-parameter-measurable-statistical-model-as-markov-kernel]]).

[F2] A randomized decision rule is a probability kernel and its risk is the iterated nonnegative loss integral ([[def-randomized-procedure-as-a-markov-kernel]], [[def-loss-function-and-risk]]).

[F3] A prior and model kernel define a joint probability whose integral of each nonnegative product-measurable function is the iterated kernel integral ([[lem-prior-and-model-kernel-define-joint-law]]).

[F4] On standard-Borel spaces, the joint law disintegrates through its data marginal into a regular posterior, and the integral identity holds for every nonnegative product-measurable function ([[def-regular-conditional-distribution]], [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]).

[F5] Integrals of nonnegative product-measurable functions against kernels are measurable ([[thm-measurability-of-integration-against-a-kernel]]).

[F6] Tonelli's theorem equates iterated integrals of nonnegative measurable functions on product probability spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] The nonnegative integral over a measurable null set is zero ([[cor-integral-over-a-null-set-vanishes]]).

[F8] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] The nonnegative integral is additive on finite sums ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F10] A function between measurable spaces is measurable when preimages of measurable sets are measurable ([[def-measurable-function-between-measurable-spaces]]).

[F11] Prior-integrated risk is $r_\pi(\delta)=\int_\Theta R(\theta,\delta)\,\pi(d\theta)$ ([[def-bayes-and-minimax-risk]]).

[F12] Product sigma-algebras are generated by measurable rectangles, so coordinate projections and measurable pairing maps into finite products are measurable ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]).

## Proof

**Proof technique:** direct.

1.1 Fix a randomized rule $\delta$ and put $h_\delta(\theta,x)=\int_{\mathsf D}L(\theta,a)\,\delta(x,da)$. The lifted kernel $((\theta,x),B)\mapsto\delta(x,B)$ is a probability kernel because the coordinate projection $(\theta,x)\mapsto x$ is measurable by [F12]. The lifted integrand $(\theta,x,a)\mapsto L(\theta,a)$ is product-measurable because the pairing map $((\theta,x),a)\mapsto(\theta,a)$ is measurable by [F12]. By [F5], $h_\delta$ is product-measurable. The risk definition [F2], prior-risk definition [F11], and joint-law identity [F3] therefore give $r_\pi(\delta)=\int h_\delta\,dJ$. [F1, F2, F3, F5, F11, F12]

2.1 Apply the posterior disintegration identity [F4] to $h_\delta\geq0$. If $M$ is the second marginal of $J$, then $r_\pi(\delta)=\int_{\mathcal X}\left(\int_\Theta h_\delta(\theta,x)\,\Pi_x(d\theta)\right)M(dx)$. Every integral is an extended nonnegative integral, so no integrability beyond the stated measurability is needed. [A1, F3, F4, step 1.1]

3.1 Lift $\Pi$ to the kernel $((x,a),B)\mapsto\Pi_x(B)$ from $\mathcal X\times\mathsf D$ to $\Theta$. The pairing map $((x,a),\theta)\mapsto(\theta,a)$ is measurable by [F12], so [F5] makes $q(x,a)$ product-measurable. For each fixed $x$, [F6] applied to the product probability $\Pi_x\times\delta(x,\cdot)$ and $L(\theta,a)$ gives $\int_\Theta h_\delta(\theta,x)\,\Pi_x(d\theta)=\int_{\mathsf D}q(x,a)\,\delta(x,da)$. The right side is measurable in $x$ by [F5]. Thus step 2.1 yields $r_\pi(\delta)=\int_{\mathcal X}\int_{\mathsf D}q(x,a)\,\delta(x,da)\,M(dx)$. [F2, F5, F6, F12, step 2.1]

4.1 The point-mass kernel $\delta^*(x,B)=1_B(d^*(x))$ is measurable because $d^*$ is measurable by [F10]; applying step 3.1 gives $r_\pi(d^*)=\int g\,dM$ for $g(x)=q(x,d^*(x))$. The pairing map $x\mapsto(x,d^*(x))$ is measurable by [F10, F12], so $g$ is measurable. Put $h(x)=\int q(x,a)\,\delta(x,da)$, which is measurable by [F5]. On the measurable full-measure set $E$ from the statement, $g1_E\leq h1_E$, so [F8] gives $\int g1_E\,dM\leq\int h1_E\,dM$. The complementary integrals vanish by [F7]; additivity [F9] gives $\int g\,dM\leq\int h\,dM=r_\pi(\delta)$ by step 3.1. The rule $\delta$ was arbitrary. [given, F2, F5, F7, F8, F9, F10, F12, step 3.1, algebra] ∎
