---
id: alg-local-symplectic-euler-step
kind: algorithm
title: Local kick-then-drift symplectic Euler step
status: draft
origin: pipeline
dependency_level: 1
deps: [def-local-leapfrog-domain-on-an-open-configuration-set]
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF p. 1, Theorem 1; PDF pp. 12–13"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Definition

Input an admitted state $(q,p)\in Q\times\mathbb R^d$, step $h>0$, $V\in C^1(Q)$, and symmetric positive-definite $M$. First set $p^+=p-h\nabla V(q)$. Then set $q^+=q+hM^{-1}p^+$. If $q^+\notin Q$, return `domain-failure`; otherwise return $(q^+,p^+)$. This fixes the kick-then-drift ordering. The returned map is the partial composition $D_h\circ K_h$ in the notation of [[def-local-leapfrog-domain-on-an-open-configuration-set]].

For exact mathematical statements the displayed operations are evaluated exactly. A finite implementation that cannot certify the state and force evaluation returns `inconclusive`; it does not report a step outside $Q$ as successful.

