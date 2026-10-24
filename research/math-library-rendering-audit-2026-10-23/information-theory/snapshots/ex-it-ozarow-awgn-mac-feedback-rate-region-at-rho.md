---
id: ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho
kind: example
title: A finite-power Ozarow feedback-region slice
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [thm-it-ozarow-awgn-mac-feedback-capacity-region, def-it-two-user-real-awgn-mac-feedback-code, thm-it-two-user-real-awgn-mac-capacity-region]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; this is substitution into finite logarithmic constraints.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Amos Lapidoth and Michèle Wigger, On the AWGN MAC with Imperfect Feedback, full-text paper and perfect-feedback discussion
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, Ozarow AWGN MAC feedback region
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

For $P_1=P_2=N=1$ and $\rho=1/2$, the feedback-region individual bounds are $R_j\le\frac12\ln(7/4)$ and the sum bound is $R_1+R_2\le\ln2$. The point $R_1=R_2=\frac12\ln(7/4)$ satisfies all three constraints and has sum rate strictly larger than the no-feedback sum bound $\frac12\ln3$.

## Facts & Assumptions

**Given:** The exact feedback region for independent private messages and the expected average-power model.

[F1] [[thm-it-ozarow-awgn-mac-feedback-capacity-region]]: for a parameter $\rho$, each individual rate is bounded by $\frac12\ln(1+P_j(1-\rho^2)/N)$ and the sum by $\frac12\ln(1+(P_1+P_2+2\rho\sqrt{P_1P_2})/N)$.

[F2] [[def-it-two-user-real-awgn-mac-feedback-code]]: the users have independent private messages, share only causal output feedback, and satisfy separate expected average-power constraints.

[F3] [[thm-it-two-user-real-awgn-mac-capacity-region]]: the no-feedback sum rate is at most $\frac12\ln(1+(P_1+P_2)/N)$.

## Proof

1.1 Substituting $P_1=P_2=N=1$ and $\rho=1/2$ into [F1] gives the individual bound $\frac12\ln(1+3/4)=\frac12\ln(7/4)$ and sum bound $\frac12\ln(1+1+1+1)=\ln2$. [F1, F2, algebra]

2.1 For the selected point, the individual constraints hold with equality and the sum constraint is $\ln(7/4)\le\ln2$, true because $7/4\le2$. By [F3], the no-feedback Gaussian sum bound from the same powers is $\frac12\ln(1+2)=\frac12\ln3$. The feedback point has larger sum because $\ln(7/4)>\frac12\ln3$ is equivalent to $(7/4)^2>3$, i.e. $49>48$. [F1, F3, step 1.1, algebra] ∎

