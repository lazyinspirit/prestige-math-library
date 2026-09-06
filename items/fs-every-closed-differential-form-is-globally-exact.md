---
id: fs-every-closed-differential-form-is-globally-exact
kind: false-statement
title: "Every closed differential form is globally exact"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-coordinate-formula-for-the-exterior-derivative]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

The assertion that every closed differential form has a global primitive is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] On a chart, if $\eta=\sum_I\eta_I\,dx^I$, then $d\eta=\sum_I d\eta_I\wedge dx^I$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Refutation

**Proof technique:** direct.

1.1 For $\omega=(-y\,dx+x\,dy)/(x^2+y^2)$, writing $r^2=x^2+y^2$ gives $\partial_x(x/r^2)-\partial_y(-y/r^2)=0$; therefore [F1] gives $d\omega=0$ on $\mathbb R^2\setminus\{0\}$. [F1, given]

2.1 If $dF=\omega$ globally, then for $\gamma(t)=(\cos t,\sin t)$ one has $(F\circ\gamma)'=\omega(\gamma')=1$. The fundamental theorem of calculus would give $0=F(\gamma(2\pi))-F(\gamma(0))=2\pi$, a contradiction. [step 1.1] ∎
