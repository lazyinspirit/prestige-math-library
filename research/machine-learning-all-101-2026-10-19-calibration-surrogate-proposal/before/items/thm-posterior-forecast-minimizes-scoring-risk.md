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
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Tilmann Gneiting and Adrian E. Raftery, Strictly Proper Scoring Rules, Prediction, and Estimation, JASA 102(477) (2007), Sections 2.1–2.2 and 3.1–3.2"
      url: "https://web.archive.org/web/20170811030502id_/http://www.eecs.harvard.edu/cs286r/courses/fall12/papers/Gneiting07.pdf"
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

## Proof

1.1 By [F1], choose a measurable posterior probability kernel $\Pi_x$ on the finite label set; identify it with the measurable vector $G(x)=(\Pi_x(1),\ldots,\Pi_x(K))\in\Delta_K$. For each $x$, the posterior expected score of reporting $q$ is $\bar S(G(x),q)$, which is minimized at $q=G(x)$ by [F2]. The posterior risk of this rule is measurable by [F4], so the rule meets the measurable-minimizer hypothesis in [F6]. [A1, F1, F2, F4, F6]

1.2 To apply the Bayes-risk interface to the original joint law, let $\pi_j=P(Y=j)$. For $\pi_j>0$, define $K_j(A)=P(X\in A,Y=j)/\pi_j$ on feature events $A$; for $\pi_j=0$, set $K_j=P_X$. Each $K_j$ is a probability measure, and the finite map $j\mapsto K_j$ is a probability kernel. The joint prior-data law built from prior $(\pi_j)$ and kernel $K_j$ agrees with the original joint law because for every $A$ and $j$ its $(A,j)$ mass is $P(X\in A,Y=j)$, including zero-prior labels. Consequently the Bayes-risk theorem [F6] states that the posterior rule $G$ minimizes the original expected score risk over all measurable randomized forecasts, hence over deterministic forecasts. [F1, F3, F6, given, construct]

2.1 Now suppose $S$ is strictly proper and another measurable forecast $q$ has the same risk as $G$, whose risk is finite by hypothesis. The posterior disintegration identity writes their risk difference as $\mathbb E\big[\bar S(G(X),q(X))-\bar S(G(X),G(X))\big]=0.$ Each nonnegative posterior-risk term is finite almost surely because its expectation is finite. Thus the integrand is a well-defined measurable nonnegative difference by [F3,F4], and [F5] makes it zero almost surely. Strict propriety in [F2] then gives $q(X)=G(X)$ almost surely. [F1, F2, F3, F4, F5, given, algebra] ∎

## Source notes

The Gneiting–Raftery treatment proves pointwise strict propriety; the local proof integrates that pointwise property against the posterior law. The standard-Borel and Bayes-risk suppliers provide the measurable posterior and its prior-risk interpretation. Finite posterior risk is stated explicitly because equality of two infinite extended risks alone cannot yield uniqueness.
