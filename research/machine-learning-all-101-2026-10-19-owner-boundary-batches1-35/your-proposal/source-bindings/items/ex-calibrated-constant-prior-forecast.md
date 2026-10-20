---
id: ex-calibrated-constant-prior-forecast
kind: example
title: "A calibrated constant prior forecast"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-calibration
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, PMLR 89 (2019), Proposition 1"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf"
---

## Example

Give $X\in\{a,b\}$ and $Y\in\{1,2,3\}$ their full power-set sigma-algebras. Let $X$ be uniform on $\{a,b\}$ and independent of $Y$, whose probabilities are $(0.7,0.2,0.1)$. The forecast $G(X)=(0.7,0.2,0.1)$ is fully reliable and equals the conditional class distribution given either feature value, but it is constant and therefore cannot distinguish $a$ from $b$.

## Example references

[[def-probability-calibration]]: full reliability is defined by event identities on the forecast simplex.

[[cor-any-feature-induces-calibrated-forecast]]: a conditional class-probability forecast given any measurable feature is fully reliable.

## Facts & Assumptions

**Given:** The independent finite-valued feature and label, and the constant forecast stated in the example.

[F1] A forecast is fully reliable when each label-event probability conditional on forecast events equals the forecast coordinate integral. [[def-probability-calibration]]


## Verification

1.1 Independence gives $P(Y=j,X\in A)=P(Y=j)P(X\in A)=p_jP(X\in A)$ for every feature event $A$ and class $j$. Thus the conditional label distribution given either $X=a$ or $X=b$ is $p=(0.7,0.2,0.1)$, and $G$ is exactly that conditional forecast. [given, algebra]

2.1 For any Borel set $B\subseteq\Delta_3$, if $p\in B$ then $P(Y=j,G\in B)=p_j=\mathbb E[\mathbf1_{\{G\in B\}}G_j]$; if $p\notin B$, both sides are zero. By [F1], $G$ is fully reliable; its constancy means it has the same output at both feature values and so does not distinguish them. [F1, step 1.1, given] ∎
