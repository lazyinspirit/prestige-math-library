---
id: rem-generalized-bayes-temperature-calibration
kind: remark
title: "Calibrating generalized Bayes temperature"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-generalized-bayes-loss-update-and-temperature
  - thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
    - title: "L. Perrotta, Practical Calibration of the Temperature Parameter in Gibbs Posteriors, arXiv:2004.10522, 2020"
      url: "https://arxiv.org/pdf/2004.10522"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Remarks

In the objective of
[[thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer]], $w$ scales
the data-loss term relative to the KL penalty. Replacing $\ell_x$ by
$c\ell_x$ for $c>0$ has the same algebraic effect as replacing $w$ by $cw$;
the numerical temperature therefore depends on the loss units.

Bissiri, Holmes, and Walker (2016, §§3.1–3.4) describe several
model- or elicitation-specific ways to choose $w$: cross-validation and
subjective selection; matching expected loss-to-data and loss-to-prior using
a specified joint reference law (with an empirical alternative); putting a
hierarchical loss prior on $w$; and matching posterior probability of a
loss-based confidence interval to its nominal level or eliciting a
posterior-to-prior odds change at reference points. These are calibration
proposals with additional inputs, not consequences of the update formula.

An M-loss can be chosen because its risk minimizer is the target of interest.
That target choice alone proves neither contamination robustness nor
frequentist coverage. The finite counterexample on the companion page shows
why a positive temperature cannot supply a general coverage
guarantee.
