---
id: ex-degenerate-hard-margin-support-vector
kind: example
title: "A redundant active margin with zero KKT multiplier"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-linear-separable-margin-and-hard-margin-svm
  - lem-hard-margin-svm-has-unique-minimizer
  - def-margin-kkt-and-mfcq
  - def-clarke-subdifferential-and-gradient-flow
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Soudry et al., The Implicit Bias of Gradient Descent on Separable Data, Appendix B discussion of support vectors"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §10.1"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Example

Consider the two positive examples $x_1=(1,0)$ and $x_2=(1,1)$ in $\mathbb R^2$ with bias-free score $w\mapsto\langle w,x\rangle$. Their hard-margin constraints are $w_1\ge1$ and $w_1+w_2\ge1$. The unique minimum-norm feasible vector is $w_*=(1,0)$; both constraints are active, but the second active constraint has a KKT multiplier equal to zero.

## Example references

[[def-linear-separable-margin-and-hard-margin-svm|Bias-free margins and hard-margin problem]]

[[def-margin-kkt-and-mfcq|Margin-form Clarke KKT conditions]]

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, Appendix B discussion of support vectors](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §10.1](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The two-point positive sample, its bias-free linear score, and the hard-margin and Clarke-KKT definitions.

[F1] [[def-linear-separable-margin-and-hard-margin-svm]]: the signed margin is $m_i(w)=\langle w,x_i\rangle$ for a positive label, and the hard-margin problem minimizes $\frac12\|w\|_2^2$ subject to every margin being at least one.

[F2] [[lem-hard-margin-svm-has-unique-minimizer]]: a finite strictly separable sample has a unique feasible minimum-norm hard-margin vector.

[F3] [[def-margin-kkt-and-mfcq]]: KKT stationarity represents $w_*$ as a nonnegative combination of active margin subgradients, with zero multipliers allowed for active constraints.

[F4] [[def-clarke-subdifferential-and-gradient-flow]]: for a differentiable linear margin, its Clarke subdifferential is the singleton containing its ordinary gradient.

## Proof

**Proof technique:** verify strict separability, solve the two scalar inequalities, and exhibit a valid multiplier vector with a zero coordinate.

1.1 The vector $(1,0)$ gives both margins equal to one, so the sample is strictly separable. Feasibility forces $w_1\ge1$, hence $\|w\|_2^2=w_1^2+w_2^2\ge1$, with equality only for $w=(1,0)$. Thus $w_*=(1,0)$ is the unique hard-margin minimizer, consistent with [F2]. [F1, F2, given, algebra]

2.1 Both margins at $w_*$ equal one. Their ordinary gradients, and hence their Clarke subgradients by [F4], are $(1,0)$ and $(1,1)$. The multipliers $\lambda_1=1$ and $\lambda_2=0$ are nonnegative and satisfy $\lambda_1(1-1)=\lambda_2(1-1)=0$ and $\lambda_1(1,0)+\lambda_2(1,1)=w_*$. These are the KKT conditions in [F3], while the second constraint is active with zero multiplier. [F1, F3, F4, step 1.1, algebra] ∎
