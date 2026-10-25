---
id: lem-ale-periodic-face-motion-satisfies-discrete-gcl
kind: lemma
title: "Moving faces satisfy the one-dimensional discrete GCL"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ale-periodic-moving-grid]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§6, geometric conservation laws, printed pp. 422–425."
---

## Statement

For the face motion of [[def-ale-periodic-moving-grid]], every cell satisfies

$$J_i^{n+1}=J_i^n+\frac{\Delta t}{\Delta\xi}\left(w_{i+1/2}^n-w_{i-1/2}^n\right).$$

## Facts & Assumptions

**Given:** Periodic faces with $\Delta\xi>0$ and the update $x_{i+1/2}^{n+1}=x_{i+1/2}^n+\Delta t\,w_{i+1/2}^n$ from [[def-ale-periodic-moving-grid]].

[F1] [[def-ale-periodic-moving-grid]]: $J_i^n=(x_{i+1/2}^n-x_{i-1/2}^n)/\Delta\xi$ and each face moves by $\Delta t$ times its prescribed velocity.

## Proof

1.1 Subtract the left-face update from the right-face update for cell $i$. This gives $x_{i+1/2}^{n+1}-x_{i-1/2}^{n+1}=x_{i+1/2}^n-x_{i-1/2}^n+\Delta t(w_{i+1/2}^n-w_{i-1/2}^n)$. [given, F1, algebra]

2.1 Divide by the positive reference width $\Delta\xi$ and use the definition of $J_i^{n+1}$ and $J_i^n$ in [F1]. The claimed identity follows. [F1, step 1.1, algebra] ∎
