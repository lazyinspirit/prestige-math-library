---
id: ex-ip-analytic-minimax-rates
kind: example
title: Analytic ellipsoid rates in polynomial and exponential spectra
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - cor-ip-mild-and-severe-estimation-rates
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-statistical-ellipsoid-class
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the Gaussian sequence model; both parameter substitutions are choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass

sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §3 and Table 1, PDF pp. 5–6"
      url: https://arxiv.org/pdf/1707.01706v2
---

## Example

Assume Countable Choice, take $Q>0$ and analytic-type weights $a_j\asymp e^j$ in the Gaussian sequence inverse model. If the singular values satisfy $s_j\asymp j^{-1}$, the minimax RMS error is of order $\epsilon[\log(1/\epsilon)]^{3/2}$ as $\epsilon\downarrow0$; if instead $s_j\asymp e^{-j}$, it is of order $\epsilon^{1/2}$. The comparison constants may depend on the fixed ellipsoid and axis constants.

## Example references

[[cor-ip-mild-and-severe-estimation-rates|Polynomial and exponential minimax estimation rates]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §3 and Table 1](https://arxiv.org/pdf/1707.01706v2)

## Facts & Assumptions

[F1] [[cor-ip-mild-and-severe-estimation-rates]]: For polynomial singular values and exponential ellipsoid weights, $R_*\asymp\epsilon[\log(1/\epsilon)]^{p+1/2}$; for exponential singular values and exponential weights, $R_*\asymp\epsilon^{\kappa/(p+\kappa)}$.

[F2] [[def-ip-gaussian-sequence-inverse-model]] and [[def-ip-statistical-ellipsoid-class]]: The model uses the positive singular sequence and the parameter class $\sum_j a_j^2\theta_j^2\le Q^2$.

[A1] [[def-countable-choice]]: Countable Choice is inherited from the sequence model.

**Given:** Countable Choice, $Q>0$, $p=\kappa=1$, and either the polynomial or exponential singular-value regime in the Example.

## Verification

1.1 In the polynomial regime, $p=\kappa=1$, so the first formula of [F1] is $\epsilon[\log(1/\epsilon)]^{1+1/2}=\epsilon[\log(1/\epsilon)]^{3/2}$. [given, F1, algebra]

1.2 In the exponential regime, the second formula of [F1] has exponent $\kappa/(p+\kappa)=1/2$, giving $\epsilon^{1/2}$. [given, F1, algebra]

2.1 By [A1], the Gaussian sequence model is interpreted with its stated Countable Choice prerequisite. The two substitutions give exactly the two stated RMS orders; $Q$ and the asymptotic comparison constants affect only the multiplicative bounds. [A1, step 1.1, step 1.2, F2, algebra] ∎
