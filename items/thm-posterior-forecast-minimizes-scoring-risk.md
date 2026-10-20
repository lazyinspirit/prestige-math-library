---
id: thm-posterior-forecast-minimizes-scoring-risk
kind: theorem
title: "The posterior forecast minimizes strictly proper scoring risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-proper-scoring-rule
  - def-loss-function-and-risk
  - thm-bayes-rule-minimizes-prior-risk
  - def-standard-borel-space
  - def-regular-conditional-distribution
  - def-axiom-of-choice
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-measurability-of-integration-against-a-kernel
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-integral-over-a-null-set-vanishes
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume AC. Let $X$ and a finite label $Y\in\{1,\ldots,K\}$ with the full power-set sigma-algebra, $K\ge2$, have a joint probability law on standard-Borel spaces. For a proper finite-label score loss $S$, a measurable posterior forecast $G(x)=P(Y\in\cdot\mid X=x)$ minimizes the expected score loss among all measurable forecasts. If $S$ is strictly proper and the posterior forecast has finite expected score loss, equality of risk for another forecast $q(X)$ implies $q(X)=G(X)$ almost surely.

## Statement references

[[def-proper-scoring-rule]]: defines a proper or strictly proper nonnegative score loss on the finite label simplex.

[[def-standard-borel-space]]: standard-Borel spaces are measurably isomorphic to Polish spaces.

[[thm-bayes-rule-minimizes-prior-risk]]: a measurable posterior-risk minimizer minimizes prior-integrated risk.

[[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]: supplies a measurable posterior kernel for the standard-Borel joint law.

## Facts & Assumptions

**Given:** AC, a standard-Borel feature and finite label with joint law, and a proper score loss $S$.

[A1] Assume AC, as required by standard-Borel disintegration and the Bayes-risk interface. [[def-axiom-of-choice]]

[F1] A standard-Borel joint law disintegrates into a measurable posterior probability kernel given the feature. [[def-standard-borel-space]] [[def-regular-conditional-distribution]] [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]] [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F2] Properness says that for every class distribution $p$, reporting $p$ minimizes $\bar S(p,q)$ over forecast actions $q$. Strict propriety makes this minimizer unique. [[def-proper-scoring-rule]]

[F3] A finite-label score loss is jointly measurable on the finite label space and forecast simplex; its expected score is the nonnegative risk of the associated decision problem. [[def-proper-scoring-rule]] [[def-loss-function-and-risk]]

[F4] Conditional risk integrals against the posterior kernel are measurable functions of the feature. [[thm-measurability-of-integration-against-a-kernel]]

[F5] A nonnegative measurable function with integral zero is zero almost surely. [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]

[F6] A measurable posterior-risk minimizing rule minimizes prior-integrated risk among deterministic and randomized decision rules under the stated standard-Borel model hypotheses. [[thm-bayes-rule-minimizes-prior-risk]]

[F7] A nonnegative measurable function with finite integral is finite almost everywhere. [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]

[F8] The nonnegative integral is additive for nonnegative measurable functions, and its integral over a measurable null set is zero. [[cor-additivity-of-the-nonnegative-lebesgue-integral]] [[cor-integral-over-a-null-set-vanishes]]

[F9] The Lebesgue integral is linear on integrable real functions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F10] Defined arithmetic operations on measurable extended-real functions preserve measurability. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

## Proof

1.1 By [F1], choose a measurable posterior probability kernel $\Pi_x$ on the finite label set; identify it with the measurable vector $G(x)=(\Pi_x(1),\ldots,\Pi_x(K))\in\Delta_K$. For each $x$, the posterior expected score of reporting $q$ is $\bar S(G(x),q)$, which is minimized at $q=G(x)$ by [F2]. The posterior risk of this rule is measurable by [F4], so the rule meets the measurable-minimizer hypothesis in [F6]. [A1, F1, F2, F4, F6]

1.2 To apply the Bayes-risk interface to the original joint law, let $\pi_j=P(Y=j)$. For $\pi_j>0$, define $K_j(A)=P(X\in A,Y=j)/\pi_j$ on feature events $A$; for $\pi_j=0$, set $K_j=P_X$. Each $K_j$ is a probability measure, and the finite map $j\mapsto K_j$ is a probability kernel. The joint prior-data law built from prior $(\pi_j)$ and kernel $K_j$ agrees with the original joint law because for every $A$ and $j$ its $(A,j)$ mass is $P(X\in A,Y=j)$, including zero-prior labels. Consequently the Bayes-risk theorem [F6] states that the posterior rule $G$ minimizes the original expected score risk over all measurable randomized forecasts, hence over deterministic forecasts. [F1, F3, F6, given, construct]

2.1 Now suppose $S$ is strictly proper and another measurable forecast $q$ has the same risk as $G$, whose risk is finite by hypothesis. Write $R_q(x)=\bar S(G(x),q(x))$ and $R_G(x)=\bar S(G(x),G(x))$. They are nonnegative measurable functions by [F3,F4], and posterior disintegration gives their integrals as the two risks, so both integrals are finite. By [F7], the measurable set $N=\{R_q=+\infty\}\cup\{R_G=+\infty\}$ is null. Set $\widetilde R_q=R_q$ and $\widetilde R_G=R_G$ off $N$, and set both to zero on $N$; these modified functions are measurable by [F10]. By [F8], the changes preserve their integrals: each original function is the sum of its restriction to $N^c$ and its restriction to the null set $N$. The functions $\widetilde R_q,\widetilde R_G$ are finite and integrable. By propriety, $D=\widetilde R_q-\widetilde R_G$ is nonnegative, and it is measurable by [F10]; [F9] gives $\mathbb E D=\mathbb E\widetilde R_q-\mathbb E\widetilde R_G=0$. Thus [F5] makes $D=0$ almost surely. Off $N$ this is equality of the finite posterior risks, so strict propriety in [F2] gives $q(X)=G(X)$ almost surely. [F1, F2, F3, F4, F5, F7, F8, F9, F10, given, algebra] ∎

## Source notes

The local definition supplies pointwise propriety; this proof integrates that defining inequality against the posterior law and does not import any scoring-rule representation theorem. The standard-Borel and Bayes-risk suppliers provide the measurable posterior and its prior-risk interpretation. Finite posterior risk is stated explicitly because equality of two infinite extended risks alone cannot yield uniqueness.
