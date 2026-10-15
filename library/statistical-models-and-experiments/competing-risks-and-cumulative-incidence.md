---
page: competing-risks-and-cumulative-incidence
title: "Competing risks and cumulative incidence"
status: published
items:
  - def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence
  - thm-cause-specific-cumulative-incidence-decomposition
  - alg-aalen-johansen-cumulative-incidence-estimator
  - lem-aalen-johansen-fixed-time-output-is-a-statistic
examples: []
---

For finitely many causes, this page distinguishes the latent cause-specific
times from the observed first time and cause. It defines the event subdistribution,
all-cause survival, and cause-specific hazard measure, then proves the
cumulative-incidence identity with its left-limit convention, including atoms.
The Aalen–Johansen procedure is a finite-sample definition with grouped event
times and an explicit event-at-censoring tie rule. Its fixed-time output is
proved to be a statistic. Independent censoring and positive support are model
conditions for population interpretation; the page makes no consistency,
variance, or process-limit claim and assumes no independence among latent
cause-specific times.
