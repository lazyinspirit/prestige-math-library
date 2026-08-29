---
id: ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time
kind: example
title: "A nonautonomous equation made autonomous by adjoining time"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-for-nonautonomous-smooth-odes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
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
    - title: "Chin-Lung Wang, Banach Calculus, §4.3"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Example

The nonautonomous scalar equation

$$x'(t)=t\,x(t),\qquad x(t_0)=x_0,$$

becomes autonomous after adjoining the time variable:

$$s'(t)=1,\qquad x'(t)=s(t)\,x(t),\qquad (s(0),x(0))=(t_0,x_0).$$

Its explicit solution is

$$s(t)=t+t_0,\qquad x(t)=x_0\,e^{(t+t_0)^2/2-t_0^2/2}=x_0\,e^{(t^2+2t_0t)/2}.$$

Equivalently, in the original time variable $\tau=t+t_0$,
$x(\tau)=x_0 e^{(\tau^2-t_0^2)/2}$.

## Facts & Assumptions

**Given:** The scalar equation $x'=tx$ with initial data $(t_0,x_0)$.

[L1] The nonautonomous smooth-ODE theorem is proved by adjoining the time variable as an autonomous one ([[thm-fundamental-theorem-for-nonautonomous-smooth-odes]]).

## Verification

**Proof technique:** direct.

1.1 The augmented system has $s(t)=t+t_0$ because $s'=1$ and $s(0)=t_0$. Then [given] $x'=s(t)x=(t+t_0)x$, so solving this linear scalar equation gives the displayed exponential formula. [given]

2.1 Writing $\tau=t+t_0$ turns the displayed solution into [L1, step 1.1] $x(\tau)=x_0 e^{(\tau^2-t_0^2)/2}$, which is exactly the solution of the original nonautonomous equation. This is the concrete reduction promised by [L1]. [L1, step 1.1] ∎
