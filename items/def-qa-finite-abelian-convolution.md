---
id: def-qa-finite-abelian-convolution
kind: definition
title: Unnormalized convolution on a finite abelian group
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-group, def-function-space, def-finite-sum-in-a-commutative-monoid]
dependency_level: 0
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $G$ be a finite abelian group ([[def-group]]), written additively, and let $f,g\in\mathbb C^G$ be functions ([[def-function-space]]). Their (unnormalized) convolution is the function
$$ (f*g)(z):=\sum_{x\in G}f(x)g(z-x),\qquad z\in G. $$
The sum is the finite sum of [[def-finite-sum-in-a-commutative-monoid]] in the additive monoid of $\mathbb C$; it is independent of any enumeration of $G$. No factor of $|G|^{-1}$ is included. The Fourier convolution theorem below proves the resulting normalization factor.
