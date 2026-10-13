---
id: lem-cm-separate-roundoff-energy-accumulation
kind: lemma
title: Bounded per-step state perturbations add a separate linear energy term
status: published
origin: pipeline
domain: mathematics
dependency_level: 17
deps:
- thm-cm-analytic-verlet-energy-on-exponential-times
- lem-cm-optimal-truncation-gives-exponential-local-defect
- lem-cm-modified-energy-differs-by-order-two
dependency_roles:
  thm-cm-analytic-verlet-energy-on-exponential-times: mathematical-premise
  lem-cm-optimal-truncation-gives-exponential-local-defect: mathematical-premise
  lem-cm-modified-energy-differs-by-order-two: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error analysis, Sections 1–3 and 5; local analytic estimates supplied here'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Statement

Use the analytic data and small step of [[thm-cm-analytic-verlet-energy-on-exponential-times]]. Suppose computed points $x_j\in K$ satisfy $\|x_{j+1}-\Psi_h(x_j)\|\le\eta$, for $0\le j<n$, with $\eta\ge0$ small enough that all comparison segments lie in $D(\rho/8)$. Then

$$|H(x_n)-H(x_0)|\le 2C_Eh^2+Cnh e^{-c/h}+C_Gn\eta.$$

In particular the state-error contribution is $C_G(t/h)\eta$ for $t=nh$. This is a deterministic additive-error hypothesis, not an analysis of floating-point arithmetic or a claim of rounded symplecticity.

## Facts & Assumptions

**Given:** The stated computed points, perturbation bound, domain segments and analytic constants.

[F1] The exponential local state defect and bounded gradient follow from [[lem-cm-optimal-truncation-gives-exponential-local-defect]] and [[lem-cm-modified-energy-differs-by-order-two]]; the modified flow conserves $H_h$ as proved in [[thm-cm-analytic-verlet-energy-on-exponential-times]].

## Proof

1.1 Per-step estimate. Compare $x_{j+1}$ first with $\Psi_h(x_j)$ and then with the modified-flow endpoint. Integrating the gradient along the two stated segments gives $|H_h(x_{j+1})-H_h(x_j)|\le C_G\eta+Ch e^{-c/h}$, using conservation at the modified endpoint. [given, F1, algebra]

2.1 Sum and compare. Summation gives $|H_h(x_n)-H_h(x_0)|\le C_Gn\eta+Cnh e^{-c/h}$. Adding the two endpoint bounds $|H_h-H|\le C_Eh^2$ proves the displayed result, including $n=0$ and $\eta=0$. [step 1.1, F1, algebra] ∎
