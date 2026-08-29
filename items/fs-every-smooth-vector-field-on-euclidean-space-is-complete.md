---
id: fs-every-smooth-vector-field-on-euclidean-space-is-complete
kind: false-statement
title: "A smooth Euclidean vector field need not be complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-autonomous-ordinary-differential-equation,
       thm-fundamental-theorem-for-autonomous-smooth-odes]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

**False claim:** every smooth vector field on $\mathbb R^n$ is complete.

## Facts & Assumptions

**Given:** The scalar autonomous ODE $x'=x^2$ on $\mathbb R$ with initial value
$x(0)=1$.

[F1] This is an autonomous ODE in the sense of
[[def-autonomous-ordinary-differential-equation]].

[L1] Smooth autonomous ODEs have unique local smooth solutions
([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

## Refutation

**Proof technique:** direct.

1.1 The vector field $V(x)=x^2$ is smooth on $\mathbb R$. The explicit curve [F1, L1]
$x(t)=1/(1-t)$ satisfies $x(0)=1$ and
$x'(t)=1/(1-t)^2=x(t)^2$ for $t<1$, so [L1] identifies it with the unique local
solution through $1$. [F1, L1]

2.1 This solution cannot be extended past $t=1$ as a real-valued solution, [step 1.1]
because $x(t)\to+\infty$ as $t\uparrow1$. Hence the maximal solution is not
defined for all time. [step 1.1]

3.1 Therefore a smooth Euclidean vector field need not be complete. [step 2.1]
∎
