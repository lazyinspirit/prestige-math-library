---
id: ex-the-angular-one-form-has-no-global-potential
kind: example
title: "The angular one-form has no global potential"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-the-angular-one-form-on-the-punctured-plane-is-closed]
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

The angular form has local primitives $\operatorname{atan2}(y,x)$ on angular charts and no global potential on $\mathbb R^2\setminus\{0\}$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The form under consideration is $\omega=(-y\,dx+x\,dy)/(x^2+y^2)$ on $\mathbb R^2\setminus\{0\}$ ([[ex-the-angular-one-form-on-the-punctured-plane-is-closed]]).

## Verification

**Proof technique:** direct.

1.1 On any angular chart avoiding a ray, a smooth branch $\theta$ of the angle satisfies $d\theta=(-y\,dx+x\,dy)/(x^2+y^2)$. [F1, given]

2.1 If $dF=\omega$ globally, then along $\gamma(t)=(\cos t,\sin t)$ one has $(F\circ\gamma)'=\omega(\gamma')=1$. Thus $0=F(\gamma(2\pi))-F(\gamma(0))=2\pi$, a contradiction; so the local primitives cannot patch globally. [step 1.1] ∎
