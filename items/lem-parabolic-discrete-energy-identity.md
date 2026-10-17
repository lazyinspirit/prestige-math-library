---
id: lem-parabolic-discrete-energy-identity
kind: lemma
title: The Hilbert-space discrete energy identity
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-hilbert-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §§12.1–12.2, PDF pp. 106–108: energy testing of implicit time steps and jump terms."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§3, pp. 9–10: the Crank–Nicolson discrete energy equality."
verification: {}
---

## Statement

For every real Hilbert space $H$ and $x,y\in H$,
$$2(x-y,x)_H=\|x\|_H^2-\|y\|_H^2+\|x-y\|_H^2.$$

## Facts & Assumptions

**Given:** A real Hilbert space $H$ and vectors $x,y\in H$.

[F1] A real Hilbert inner product is symmetric and bilinear, and
$(x,x)_H=\|x\|_H^2$ ([[def-hilbert-space]]).

## Proof

1.1 Expand the last square using [F1]: $\|x-y\|_H^2=\|x\|_H^2-2(x,y)_H+\|y\|_H^2$. [F1, algebra]

2.1 Substituting this expression into the right-hand side gives $2\|x\|_H^2-2(x,y)_H=2(x-y,x)_H$ by bilinearity. This is the stated identity. [F1, step 1.1, algebra] ∎