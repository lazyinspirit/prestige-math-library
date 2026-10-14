---
id: thm-nonidentifiability-precludes-simultaneous-consistency
kind: theorem
title: "Nonidentifiability precludes simultaneous consistency"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-borel-sigma-algebra, def-consistency-in-probability, def-estimand-on-a-statistical-model, def-estimator-sequence-in-iid-experiments, def-identifiability-of-an-estimand, def-measurable-function-between-measurable-spaces, def-metric-space, def-observational-equivalence, def-parametric-statistical-model, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-statistical-experiment, thm-measure-uniqueness-on-a-sigma-finite-pi-system, thm-metric-open-set-algebra, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]
justified_by: []
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 3, Winter 2018, PDF p. 4"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-03.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, PDF pp. 6–8"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
---

## Statement

Let $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$ be a parametric statistical model, let $\psi:\Theta\to(\mathcal T,d)$ be a metric-valued estimand, and let $(T_n)$ be a nonrandomized estimator sequence for IID samples from this model. If $\psi$ is not identifiable, then there is a pair of observationally equivalent parameters with distinct target values, and no estimator sequence is consistent in probability at both parameters.

## Facts & Assumptions

**Given:** The model, estimand, estimator sequence, and hypotheses in the statement.

[F1] [[def-parametric-statistical-model]]: A parametric statistical model is the parameter map $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$ with $\mathsf P(\theta)=P_\theta$.

[F2] [[def-observational-equivalence]]: $\theta\sim\eta$ exactly when $P_\theta=P_\eta$ as measures on the observation space.

[F3] [[def-estimand-on-a-statistical-model]]: An estimand is a specified function $\psi:\Theta\to\mathcal T$.

[F4] [[def-identifiability-of-an-estimand]]: An estimand is identifiable exactly when $\theta\sim\eta$ implies $\psi(\theta)=\psi(\eta)$.

[F5] [[def-estimator-sequence-in-iid-experiments]]: The size-$n$ experiment has law $P_\theta^{\otimes n}$ on $(\mathcal X^n,\mathcal A^{\otimes n})$, and an estimator is a measurable map $T_n$ on that space.

[F6] [[def-consistency-in-probability]]: Consistency at $\theta$ means $P_\theta^{\otimes n}\{d(T_n,\psi(\theta))>\varepsilon\}\to0$ for every $\varepsilon>0$.

[F7] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: The finite product sigma-algebra is generated recursively by measurable rectangles.

[F8] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: The product measure exists and gives each measurable rectangle the product of the factor measures.

[F9] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: Measures agreeing on a generating $\pi$-system and on an increasing finite-measure exhaustion from it agree on the generated sigma-algebra.

[F10] [[def-metric-space]]: A metric is nonnegative, symmetric, separates distinct points, and satisfies the triangle inequality.

[F11] [[def-measurable-function-between-measurable-spaces]]: A map is measurable when the preimage of every target-measurable set is measurable.

[F12] [[def-borel-sigma-algebra]]: The Borel sigma-algebra of a metric space contains every closed subset.

[F13] [[thm-metric-open-set-algebra]]: Every closed ball in a metric space is closed.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 By [F4], nonidentifiability supplies $\theta_0,\theta_1\in\Theta$ with $\theta_0\sim\theta_1$ and $\psi(\theta_0)\ne\psi(\theta_1)$. Fix this pair. [F4, given, choose]

2.1 Fix $n\ge1$. By [F1], the observation laws in the model are $P_\theta$. Measurable rectangles in $\mathcal X^n$ form a $\pi$-system generating $\mathcal A^{\otimes n}$ by [F7]. For every rectangle $A_1\times\cdots\times A_n$, [F8] and [F2] give $P_{\theta_0}^{\otimes n}(A_1\times\cdots\times A_n)=\prod_{j=1}^nP_{\theta_0}(A_j)=\prod_{j=1}^nP_{\theta_1}(A_j)=P_{\theta_1}^{\otimes n}(A_1\times\cdots\times A_n)$. The full space is itself a rectangle and is an increasing exhaustion of finite mass one. Applying [F9] shows $P_{\theta_0}^{\otimes n}=P_{\theta_1}^{\otimes n}$ on all of $\mathcal A^{\otimes n}$. [F1, F2, F7, F8, F9, given, step 1.1]

2.2 Put $\Delta=d(\psi(\theta_0),\psi(\theta_1))>0$ and $r=\Delta/3$. The two closed target balls $C_i=\{t\in\mathcal T:d(t,\psi(\theta_i))\le r\}$ are disjoint: a point in both would give $\Delta\le2r<\Delta$ by [F10]. [F3, F10, given, step 1.1, algebra]

3.1 Suppose, for contradiction, that the estimator sequence is consistent at both parameters. For $i\in\{0,1\}$ let $E_{i,n}=T_n^{-1}(C_i)$. These events are measurable because each $C_i$ is closed by [F13] and Borel by [F12], while $T_n$ is measurable by [F5] and preimages of Borel sets are measurable by [F11]. By [F6], $P_{\theta_i}^{\otimes n}(E_{i,n})\to1$ for each $i$. [F5, F6, F11, F12, F13, given, step 1.1, step 2.2, assume-contra]

4.1 For each $n$, step 2.1 gives one common sample law for both probabilities, and step 2.2 gives disjoint events, so their probabilities sum to at most one. Step 3.1 says both probabilities tend to one, so their sum tends to two, a contradiction. Therefore the estimator sequence cannot be consistent at both parameters. [step 2.1, step 2.2, step 3.1, algebra, discharge-contradiction: step 3.1] ∎