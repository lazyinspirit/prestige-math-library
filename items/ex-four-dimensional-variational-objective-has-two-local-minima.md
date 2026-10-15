---
id: ex-four-dimensional-variational-objective-has-two-local-minima
kind: example
title: A strong-constraint 4DVAR objective can have two local minima
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-data-assimilation-problem
  - alg-four-dimensional-variational-assimilation
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 3 §3.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapters 3–4"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Example

Take a one-step strong-constraint window with scalar model map $\Psi(u)=u$, scalar observation map $G(u)=u^2$, prior mean $m_b=0$, prior covariance $B=1$, datum $y_1=1$, and observation covariance $\Gamma_1=1$. The objective in [[alg-four-dimensional-variational-assimilation]] has two distinct local minima.

## Facts & Assumptions

**Given:** The scalar strong-constraint 4DVAR data in the Example.

[F1] Strong-constraint 4DVAR minimizes the prior penalty plus observation-misfit penalties along the model trajectory. [[alg-four-dimensional-variational-assimilation]]

## Verification

**Given:** The objects and parameters in the Example.

1.1 Since $u_1=\Psi(u_0)=u_0$, the one-variable objective from [F1] is $J(u)=\tfrac12u^2+\tfrac12(1-u^2)^2=\tfrac12-\tfrac12u^2+\tfrac12u^4.$ [F1, given, algebra]

2.1 Differentiating gives $J'(u)=u(2u^2-1)$. Its only stationary points are $0$ and $\pm1/\sqrt2$. The derivative changes from negative to positive at each of $\pm1/\sqrt2$, so both are strict local minima. The objective is even, $J(\pm1/\sqrt2)=3/8<J(0)=1/2$, and $J(u)\to\infty$ as $|u|\to\infty$. Every global minimum is therefore attained at a stationary point, and these two distinct points are both global minimizers. Thus the minimizer is not unique, so an iterative routine's finite definition gives no guarantee that it returns a designated unique solution. [given, step 1.1, algebra] ∎
