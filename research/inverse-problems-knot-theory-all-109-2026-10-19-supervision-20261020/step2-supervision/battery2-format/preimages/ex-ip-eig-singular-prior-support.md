---
id: ex-ip-eig-singular-prior-support
kind: example
title: Information gain on a singular prior support
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-design-indexed-inverse-experiment
  - def-ip-expected-information-gain
  - thm-ip-linear-gaussian-information-gain-logdet
  - lem-ip-singular-gaussian-support-and-pseudoinverse
  - def-axiom-of-choice
  - thm-natural-logarithm-laws
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: AC is inherited from the finite Gaussian and EIG/KL interfaces.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, finite-dimensional Gaussian inverse setting; singular support is verified locally using the current IP-18 supplier."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems, full lecture notes, arXiv:1302.6989"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§3.1, Gaussian prior and posterior context; the example's finite singular-support calculations are local."
---

## Example

Assume AC. Let $\theta\sim N_2(0,C)$ with $C=\operatorname{diag}(1,0)$, so its support is the first coordinate axis. With unit-variance Gaussian noise, compare the one-coordinate measurements $A_\perp=(0,1)$ and $A_\parallel=(1,0)$. Their expected information gains are $0$ and $\frac12\log 2$, respectively. The log-determinant formula remains defined although $C$ is singular.

## Example references

[Clason, Chapter 13](https://arxiv.org/pdf/2001.00617)

[Dashti and Stuart, §3.1](https://arxiv.org/pdf/1302.6989)

## Facts & Assumptions

**Given:** AC, $C=\operatorname{diag}(1,0)$, unit observation noise, and the two row operators in the Example.

[A1] AC is inherited from the finite Gaussian and EIG/KL interfaces. [[def-axiom-of-choice]]

[F1] The support of $N_n(m,C)$ is $m+\operatorname{Ran}(C)$, including singular $C$. [[lem-ip-singular-gaussian-support-and-pseudoinverse]]

[F2] The linear-Gaussian EIG formula applies to every positive-semidefinite $C$ and positive-definite noise covariance. [[thm-ip-linear-gaussian-information-gain-logdet]]

[F3] The natural logarithm is strictly increasing and $\log1=0$. [[thm-natural-logarithm-laws]]

## Verification

**Given:** The hypotheses in the Example.

1.1 The range of $C$ is $\operatorname{span}\{(1,0)^T\}$, so [F1] gives the stated support. Also $A_\perp C A_\perp^T=0$ and $A_\parallel C A_\parallel^T=1$. [A1, F1, given, algebra]

1.2 Applying [F2] with noise covariance $1$ gives $\operatorname{EIG}(A_\perp)=\frac12\log(1+0)=0$ and $\operatorname{EIG}(A_\parallel)=\frac12\log(1+1)=\frac12\log2$. [A1, F2, step 1.1, algebra]

1.3 Since $2>1$, [F3] gives $\log2>\log1=0$. The second coordinate therefore contributes no information under the prior, while the first-coordinate measurement has strictly positive EIG. No inverse or determinant of $C$ is taken. [F3, step 1.2, algebra] ∎
