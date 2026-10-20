---
id: ex-fixed-bin-ece-underestimates-calibration-error
kind: example
title: "A fixed confidence bin hides calibration error"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-probability-calibration
  - thm-binned-calibration-estimator-limits
  - thm-kolmogorov-iid-l1-strong-law
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, PMLR 89 (2019), Theorems 1–2"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Give $X\in\{a,b\}$ and $Y\in\{1,2\}$ their full power-set sigma-algebras. Let $X$ be uniform on $\{a,b\}$, let $P(Y=1\mid X=a)=0.8$ and $P(Y=1\mid X=b)=0.6$, and forecast $G(a)=(0.6,0.4)$, $G(b)=(0.8,0.2)$. For an iid sample from this law and discrepancy $d(p,q)=|p_1-q_1|$, the full calibration error is $0.2$. If the entire forecast simplex is treated as one bin, the empirical binned calibration estimate converges almost surely to zero.

## Example references

[[def-probability-calibration]]: defines the calibration function and expected calibration error.

[[thm-binned-calibration-estimator-limits]]: fixed-bin estimates converge almost surely to their population bin value, which can be strictly below calibration error.

## Facts & Assumptions

**Given:** The two-point feature-label law, forecast, discrepancy, and one-bin partition stated in the example.

[F1] The calibration function on a finite forecast support equals the conditional class-probability vector at each forecast value. [[def-probability-calibration]]

[F2] For a fixed finite data-independent partition, the empirical estimator converges almost surely to the corresponding population binned value. [[thm-binned-calibration-estimator-limits]]

[F3] The sample averages of the bounded label and forecast coordinates converge almost surely to their means. [[thm-kolmogorov-iid-l1-strong-law]]

[F4] $d(p,q)=|p_1-q_1|$ is a continuous, jointly convex, nonnegative discrepancy with $d(p,p)=0$.

## Verification

1.1 The forecast values identify the two feature values, so the calibration function is $r(0.6,0.4)=(0.8,0.2)$ and $r(0.8,0.2)=(0.6,0.4)$. Therefore $\mathbb E[d(r(G),G)]=\tfrac12|0.8-0.6|+\tfrac12|0.6-0.8|=0.2$. [given, F1, algebra]

2.1 In the single bin $B=\Delta_2$, the mean forecast first coordinate is $(0.6+0.8)/2=0.7$, and the mean label-indicator first coordinate is $(0.8+0.6)/2=0.7$. Hence the population binned discrepancy is $|0.7-0.7|=0$. By [F2] the empirical one-bin estimate converges almost surely to zero; equivalently, [F3] gives convergence of both sample averages to $0.7$. [F2, F3, F4, step 1.1, given, algebra] ∎
