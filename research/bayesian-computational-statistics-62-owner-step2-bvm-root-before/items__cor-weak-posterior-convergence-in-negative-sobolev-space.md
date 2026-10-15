---
id: cor-weak-posterior-convergence-in-negative-sobolev-space
kind: corollary
title: The scaled posterior converges weakly on the negative Sobolev space
status: draft
origin: pipeline
dependency_level: 4
deps:
  - thm-weak-nonparametric-bernstein-von-mises-for-product-priors
  - lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
  - def-weak-convergence-of-borel-probability-measures
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Definition 1 and Theorem 9, printed pp. 2003–2004 and 2019–2020"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Theorem 7.3.19, printed pp. 595–596"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume AC and the hypotheses of [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]. Then the random Borel probability measures $\widetilde\Pi_n$ converge weakly in probability to $N$ on $H(\delta)$, where weak convergence is the bounded-continuous-test definition in [[def-weak-convergence-of-borel-probability-measures]].

## Facts & Assumptions

[F1] [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]: $\beta_{BL,H(\delta)}(\widetilde\Pi_n,N)\to0$ in $P_{f_0}^{(n)}$-probability.

[F2] [[lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces]]: Under AC, convergence in $\beta_{BL}$ is equivalent to weak convergence on a Polish space.

[F3] [[def-weak-convergence-of-borel-probability-measures]]: Weak convergence means convergence of integrals for every bounded continuous real test function.

[A1] [[def-axiom-of-choice]]: AC is required only for the weak-topology metrization in [F2]; the bounded-Lipschitz conclusion [F1] itself requires only its stated countable-choice premise.

**Given:** AC and the main theorem's random posterior measures and limit law.

## Proof

1.1 By [F2], the bounded-Lipschitz metric is a metric for the weak topology on the Polish space $H(\delta)$ under [A1]. [A1, F2]

2.1 The convergence in probability of this metric to zero in [F1] is exactly convergence in probability in the weak topology established in step 1.1; by [F3], its deterministic convergence relation is bounded-continuous-test convergence. This is the asserted weak posterior limit. [F1, F2, F3, step 1.1] ∎
