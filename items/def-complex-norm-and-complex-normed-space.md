---
id: def-complex-norm-and-complex-normed-space
kind: definition
title: "Complex norm and complex normed space"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1 (complete five-page lecture notes)"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. Winklmeier, Functional Analysis lecture notes (complete 140-page lecture notes)"
      url: "https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf"
---

## Definition

Let $V$ be a vector space over $\mathbb C$ ([[def-vector-space]], with the complex field of [[def-complex-numbers-and-arithmetic]]). A **complex norm** on $V$ is a function $N:V\to\mathbb R$ such that, for all $u,v\in V$ and every $\lambda\in\mathbb C$:

- $N(v)=0$ if and only if $v=0$;
- $N(\lambda v)=|\lambda|_{\mathbb C}N(v)$, where $|\lambda|_{\mathbb C}$ is the complex modulus of [[def-complex-conjugate-real-imaginary-part-and-modulus]];
- $N(u+v)\le N(u)+N(v)$.

A **complex normed space** is a pair $(V,N)$ with $V$ a complex vector space and $N$ a complex norm on $V$. Since the codomain is $\mathbb R$, every norm value is a finite real number; extended-real values are not allowed. The homogeneity clause is for every complex scalar, not merely real scalars.
