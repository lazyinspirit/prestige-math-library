---
id: rem-em-ascent-does-not-imply-global-optimality-or-convergence
kind: remark
title: "Likelihood ascent alone gives no global optimality or convergence conclusion"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-em-observed-log-likelihood-is-nondecreasing
  - thm-generalized-em-is-nondecreasing-under-q-ascent
forward_refs:
  - ex-em-likelihood-has-two-local-maxima
  - ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum likelihood from incomplete data via the EM algorithm"
      url: "https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf"
      locator: "§3, Theorem 1 and subsequent convergence conditions, printed pp. 7–9"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§§2–3, monotonicity and separate stationary-point conditions, PDF pp. 2–6"
---

## Remark

Under the hypotheses of [[thm-em-observed-log-likelihood-is-nondecreasing]] and [[thm-generalized-em-is-nondecreasing-under-q-ascent]], including AC, these are one-step inequalities for a fixed data fiber. They do not prove that the likelihood sequence is bounded, that parameter iterates converge, that a limit point is stationary, or that a stationary point is globally optimal. The exact M-step also requires an attained Q maximum; ascent itself does not supply one. The examples [[ex-em-likelihood-has-two-local-maxima]] and [[ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse]] exhibit tied maxima and an unbounded observed likelihood. These are limits of the stated ascent result, not additional convergence theorems.
