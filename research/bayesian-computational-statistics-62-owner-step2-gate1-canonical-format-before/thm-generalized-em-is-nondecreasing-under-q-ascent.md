---
id: thm-generalized-em-is-nondecreasing-under-q-ascent
kind: theorem
title: "Generalized EM does not decrease the observed log likelihood under Q-ascent"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-expectation-maximization
  - def-axiom-of-choice
  - thm-em-observed-log-likelihood-is-nondecreasing
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum likelihood from incomplete data via the EM algorithm"
      url: "https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf"
      locator: "§3, generalized EM definition and Theorem 1, printed pp. 7–8"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§2, generalized EM discussion, PDF pp. 4–5"
---

## Statement

Assume the Axiom of Choice and the model, fiber, support, integrability, and finite-KL hypotheses of [[thm-em-observed-log-likelihood-is-nondecreasing]]. If an admissible candidate $\theta_{t+1}$ satisfies
$$
Q(\theta_{t+1}\mid\theta_t)\ge Q(\theta_t\mid\theta_t),
$$
then $\ell_x(\theta_{t+1})\ge\ell_x(\theta_t)$. The Q maximizer need not be attained for this generalized-EM conclusion.

## Facts & Assumptions

**Given:** AC and the hypotheses of [[thm-em-observed-log-likelihood-is-nondecreasing]], together with the displayed Q-ascent condition.

[A1] [[def-axiom-of-choice]]: the inherited KL identity assumes AC.

[F1] [[alg-expectation-maximization]]: a generalized update is any admissible candidate whose Q value is at least the current Q value.

[F2] [[thm-em-observed-log-likelihood-is-nondecreasing]]: on the stated finite, support-compatible fibers, the observed log-likelihood difference equals the Q difference plus a nonnegative directional KL divergence.

## Proof

1.1 Apply [F2] to the current and proposed parameters. Its hypotheses hold by the given assumptions, so $\ell_x(\theta_{t+1})-\ell_x(\theta_t)=Q(\theta_{t+1}\mid\theta_t)-Q(\theta_t\mid\theta_t)+D(q_t\mu\|q_{\theta_{t+1}}^x\mu)$. [given, A1, F2]

2.1 The first term is nonnegative by the Q-ascent condition, and the second is nonnegative by the theorem's KL identity. Hence the observed log likelihood does not decrease. No attained maximum was used. [given, F1, F2, step 1.1, algebra] ∎
