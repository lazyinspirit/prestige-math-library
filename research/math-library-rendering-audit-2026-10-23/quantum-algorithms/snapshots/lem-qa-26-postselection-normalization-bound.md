---
id: lem-qa-26-postselection-normalization-bound
kind: lemma
title: "Normalization is stable under a small flagged-vector error"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - lem-qa-26-hhl-success-amplitude
  - def-qa-26-qlsp-task
  - cor-triangle-inequality-for-inner-product-norm
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses only the norm axioms."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

Let $v$ be an ideal flagged vector with $\|v\|\ge1/(2\kappa)$. If $0<\epsilon\le1$ and either $\|u-v\|\le\epsilon/(8\kappa)$ or $\|u-v\|\le(9\epsilon/100)\|v\|$, then $u\ne0$ and $\|u/\|u\|-v/\|v\|\|\le\epsilon$.

## Facts & Assumptions

**Given:** The two vectors and the stated lower and error bounds.

[F1] [[lem-qa-26-hhl-success-amplitude]]: the ideal well vector has norm at least $1/(2\kappa)$.

[F2] [[cor-triangle-inequality-for-inner-product-norm]]: $\|x+y\|\le\|x\|+\|y\|$; applying it to $u=(u-v)+v$ and $v=(v-u)+u$ gives $|\|u\|-\|v\||\le\|u-v\|$.

## Proof


1.1 Under the absolute-error alternative, the reverse triangle inequality from [F2] gives $\|u\|\ge\|v\|-\|u-v\|\ge(1/2-1/8)/\kappa=3/(8\kappa)>0$. Under the relative alternative, $\|u\|\ge(1-9\epsilon/100)\|v\|>0$ because $9\epsilon/100<1$. Thus both normalizations exist. [given, F1, F2, algebra]

2.1 Add and subtract $u/\|v\|$ and use [F2]: $$\left\|\frac{u}{\|u\|}-\frac{v}{\|v\|}\right\|\le\frac{|\|v\|-\|u\||}{\|v\|}+\frac{\|u-v\|}{\|v\|}\le\frac{2\|u-v\|}{\|v\|}.$$ The absolute alternative makes this at most $2(\epsilon/(8\kappa))/(1/(2\kappa))=\epsilon/2$. The relative alternative makes it at most $18\epsilon/100<\epsilon$. [given, F1, F2, step 1.1, algebra] ∎

