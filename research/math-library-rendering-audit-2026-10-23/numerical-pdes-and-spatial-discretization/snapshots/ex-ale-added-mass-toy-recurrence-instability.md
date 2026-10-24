---
id: ex-ale-added-mass-toy-recurrence-instability
kind: example
title: "A toy sequential coupling can amplify velocity error"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ale-toy-added-mass-recurrence]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, §§5.2–5.7, one-degree-of-freedom staggered models and mass-ratio-dependent convergence; the exact recurrence here is checked directly."
---

## Statement

In the scalar recurrence of [[def-ale-toy-added-mass-recurrence]], set $m_s=1$, $m_f=2$, and choose $\delta v_0\ne0$. Then $\delta v_n=(-2)^n\delta v_0$, so the increments grow geometrically in magnitude.

## Facts & Assumptions

**Given:** The recurrence $m_s\delta v_{n+1}=-m_f\delta v_n$ from [[def-ale-toy-added-mass-recurrence]], with $m_s=1$, $m_f=2$, and $\delta v_0\ne0$.

[F1] [[def-ale-toy-added-mass-recurrence]]: for $m_s,m_f>0$, $m_s\delta v_{n+1}=-m_f\delta v_n$.

## Verification

1.1 Dividing [F1] by $m_s=1$ gives $\delta v_{n+1}=-2\delta v_n$. [given, F1, algebra]

2.1 Induction yields $\delta v_n=(-2)^n\delta v_0$: it holds at $n=0$, and multiplying the formula at $n$ by $-2$ gives it at $n+1$. [step 1.1, algebra, induction]

3.1 Since $|\delta v_0|>0$, $|\delta v_n|=2^n|\delta v_0|$ and $|\delta v_{n+1}|=2|\delta v_n|>|\delta v_n|$. If instead $\delta v_0=0$, step 2.1 gives zero increments throughout, so the nonzero hypothesis is needed for growth. Thus this specified recurrence is unstable in the stated scalar sense; no broader FSI claim follows. [given, F1, step 2.1, algebra] ∎
