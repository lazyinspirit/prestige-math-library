---
id: def-local-leapfrog-domain-on-an-open-configuration-set
kind: definition
title: Local domain restriction for kick, drift, and leapfrog maps
status: draft
origin: pipeline
dependency_level: 0
deps: [def-leapfrog-step-map]
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
      locator: "PDF pp. 1–2 and 12–13"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Definition

Let $Q\subseteq\mathbb R^d$ be open, let $V\in C^1(Q,\mathbb R)$, and let $M$ be a real symmetric positive-definite matrix. Use the force-kick $K_a$ and drift $D_b$ already defined in [[def-leapfrog-step-map]], with $U$ there replaced by $V$. The local kick is the restriction of $K_a$ to $Q\times\mathbb R^d$. The local drift is the restriction of $D_b$ to
$$\{(q,p):q\in Q,\ q+bM^{-1}p\in Q\}.$$

For a signed step $h$, the local leapfrog map is the restriction of $K_{h/2}\circ D_h\circ K_{h/2}$ to the states for which all three intermediate configurations lie in $Q$. Its output is defined only on that admitted set. This definition changes the configuration domain of the published map; it does not redefine the global leapfrog map or assert that the local map is complete.

