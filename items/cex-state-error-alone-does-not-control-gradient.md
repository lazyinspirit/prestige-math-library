---
id: cex-state-error-alone-does-not-control-gradient
kind: counterexample
title: Uniform state accuracy alone does not bound parameter-gradient error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [thm-discrete-continuous-gradient-error-order-p]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§3–4"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
---

## Statement refuted

Uniform convergence of approximate states to an exact state, by itself, implies convergence or a uniform bound for their parameter derivatives.

## Facts & Assumptions

**Given:** The displayed $C^1$ scalar maps and the uniform state norm on $(-1,1)$.

[F1] The discrete-continuous gradient estimate requires independent state, adjoint, derivative-data, endpoint, and quadrature bounds ([[thm-discrete-continuous-gradient-error-order-p]]).

## Counterexample

For $0<h\le1$ and $\theta\in(-1,1)$, let the exact state be $u(\theta)=0$ and the approximate state be $u_h(\theta)=h^2\sin(\theta/h^3)$. The exact and approximate reduced objectives are these states themselves.

1.1 For every $\theta$ and $h$, $|u_h(\theta)-u(\theta)|=h^2|\sin(\theta/h^3)|\le h^2$. Thus the state error tends uniformly to zero as $h\downarrow0$. [given, algebra]

2.1 Differentiating gives $u_h'(\theta)=h^{-1}\cos(\theta/h^3)$ and $u'(\theta)=0$. At $\theta=0$, the gradient error is $|u_h'(0)-u'(0)|=h^{-1}$, which is unbounded as $h\downarrow0$. This refutes the stated implication; the example lacks a uniform derivative-data bound of the type required by [F1]. [F1, step 1.1, algebra] ∎ 