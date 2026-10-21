---
id: ex-ridge-hyperparameter-hypergradient
kind: example
title: "A scalar ridge penalty and its validation hypergradient"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-smooth-bilevel-learning-problem
  - thm-smooth-bilevel-hypergradient-formula
justified_by: []
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Stephen Gould et al., On Differentiating Parameterized Argmin and Argmax Problems with Application to Bi-level Optimization, §3"
      url: "https://arxiv.org/pdf/1607.05447"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §6.3.1"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
---

## Example

Let the hyperparameter be $\lambda\in(0,\infty)$ and the inner state be $w\in\mathbb R$. For one unit-feature, unit-response training datum, define the scalar ridge objective $f(\lambda,w)=\frac12(w-1)^2+\frac{\lambda}{2}w^2$, and define the validation objective $g(w,\lambda)=\frac12w^2$. The unique inner minimizer is $w^*(\lambda)=1/(1+\lambda)$, so $J(\lambda)=g(w^*(\lambda),\lambda)=1/(2(1+\lambda)^2)$ and $J'(\lambda)=-1/(1+\lambda)^3$. The local hypergradient formula gives the same derivative.

## Example references

[[def-smooth-bilevel-learning-problem|Bilevel stationary-problem notation]]

[[thm-smooth-bilevel-hypergradient-formula|Local hypergradient formula]]

## Facts & Assumptions

**Given:** $\lambda>0$, $f(\lambda,w)=\frac12(w-1)^2+\frac{\lambda}{2}w^2$, and $g(w,\lambda)=\frac12w^2$. Verify the stationary branch, direct outer derivative, and hypergradient.

[F1] [[def-smooth-bilevel-learning-problem]]: $H=\partial_w\nabla_w f$, $B=\partial_\lambda\nabla_w f$, $J(\lambda)=g(w^*(\lambda),\lambda)$, and gradients are column vectors.

[F2] [[thm-smooth-bilevel-hypergradient-formula]]: for an invertible stationary Hessian, $J'=\partial_\lambda g-B^TH^{-T}\nabla_wg$.

## Verification

1.1 Differentiate the inner loss: $\partial_wf=(1+\lambda)w-1$ and $H=1+\lambda>0$. Thus its stationary point is $w^*=1/(1+\lambda)$. Completing the square gives $f(\lambda,w)=\frac12(1+\lambda)(w-\frac1{1+\lambda})^2+\frac{\lambda}{2(1+\lambda)}$, so this stationary point is the unique global minimizer. [given, F1, algebra]

2.1 Substitution into the outer loss gives $J(\lambda)=1/(2(1+\lambda)^2)$, whose direct derivative is $J'(\lambda)=-1/(1+\lambda)^3$. [given, step 1.1, algebra]

3.1 At $w^*$, the mixed derivative is $B=\partial_\lambda((1+\lambda)w-1)=w^*=1/(1+\lambda)$, the state derivative is $\nabla_wg=w^*=1/(1+\lambda)$, and $\partial_\lambda g=0$. Formula [F2] therefore gives $-B H^{-1}\nabla_wg=-1/(1+\lambda)^3$, agreeing with step 2.1. [F1, F2, step 1.1, step 2.1, algebra] ∎
