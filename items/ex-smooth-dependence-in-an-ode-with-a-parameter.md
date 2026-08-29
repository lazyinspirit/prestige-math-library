---
id: ex-smooth-dependence-in-an-ode-with-a-parameter
kind: example
title: "Smooth dependence in an ODE with a parameter"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-dependence-of-ode-solutions-on-parameters,
       thm-smooth-dependence-of-solutions-on-initial-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Example

For the parameter-dependent ODE

$$x'(t)=\lambda x(t),\qquad x(0)=x_0,$$

the solution is

$$x(t;\lambda,x_0)=e^{\lambda t}x_0.$$

It depends smoothly on both the initial value $x_0$ and the parameter
$\lambda$.

## Facts & Assumptions

**Given:** The parameter-dependent scalar ODE $x'=\lambda x$, $x(0)=x_0$.

[L1] Smooth parameter-dependent ODEs depend smoothly on the parameter ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[L2] Smooth autonomous ODEs depend smoothly on initial data ([[thm-smooth-dependence-of-solutions-on-initial-data]]).

## Verification

**Proof technique:** direct.

1.1 The curve $x(t)=e^{\lambda t}x_0$ satisfies $x(0)=x_0$ and [given] $x'(t)=\lambda e^{\lambda t}x_0=\lambda x(t)$, so it solves the ODE. [given]

2.1 Differentiating the explicit formula gives [L1, L2, step 1.1] $\partial_{x_0}x(t;\lambda,x_0)=e^{\lambda t}$ and $\partial_\lambda x(t;\lambda,x_0)=t e^{\lambda t}x_0$, and higher derivatives are again polynomial multiples of $e^{\lambda t}$. Thus the solution depends smoothly on both data variables, exactly as [L1] and [L2] predict. [L1, L2, step 1.1]

3.1 So this ODE is a concrete instance of smooth dependence on initial data and [step 2.1] parameters. [step 2.1] ∎
