---
id: ex-a-constant-vector-field-and-translation-solutions
kind: example
title: "A constant vector field has translation solutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-for-autonomous-smooth-odes]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.1"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Example

Fix $v\in\mathbb R^n$. The constant vector field $V(x)=v$ has solutions

$$x(t)=x_0+tv.$$

Thus its flow is translation by $tv$.

## Facts & Assumptions

**Given:** A fixed vector $v\in\mathbb R^n$ and the autonomous equation $x'=v$.

[L1] Autonomous smooth ODEs have unique local smooth flows ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

## Verification

**Proof technique:** direct.

1.1 The curve $x(t)=x_0+tv$ satisfies $x(0)=x_0$ and $x'(t)=v$ for every $t$, so [given] it solves the ODE. [given]

2.1 By [L1], the local solution through $x_0$ is unique, so the displayed [L1, step 1.1] affine curve is the solution and the time-$t$ map is translation by $tv$. [L1, step 1.1] ∎
