---
id: def-equivalent-complex-norms
kind: definition
title: "Equivalent complex norms"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-norm-and-complex-normed-space, def-complete-ordered-field]
justified_by: []
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1 (complete five-page lecture notes)"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. Winklmeier, Functional Analysis lecture notes (complete 140-page lecture notes)"
      url: "https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf"
---

## Definition

Let $M$ and $N$ be complex norms ([[def-complex-norm-and-complex-normed-space]]) on the same complex vector space $V$. They are **equivalent complex norms** if there are positive real constants $c,C\in\mathbb R$ such that
$$
cM(v)\le N(v)\le CM(v)\qquad\text{for every }v\in V.
$$
Both inequalities and the positivity of $c,C$ are in the real complete ordered field ([[def-complete-ordered-field]]); the vector scalar field remains $\mathbb C$. No order comparison of complex numbers is intended.
