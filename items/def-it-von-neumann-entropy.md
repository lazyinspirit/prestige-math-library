---
id: def-it-von-neumann-entropy
kind: definition
title: Finite-dimensional von Neumann entropy
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qc-density-operator, thm-non-negative-operator-characterisations, def-natural-logarithm, def-trace-of-an-endomorphism]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space, with the root convention that its inner product is linear in the first argument, and let $\rho$ be a density operator on $H$ ([[def-qc-density-operator]]). If $\lambda_1,\ldots,\lambda_d$ are its eigenvalues counted with multiplicity, define its **von Neumann entropy** by

$$S(\rho):=-\operatorname{tr}(\rho\ln\rho):=-\sum_{j:\lambda_j>0}\lambda_j\ln\lambda_j.$$

The trace is the finite-dimensional endomorphism trace ([[def-trace-of-an-endomorphism]]), and the spectral definition makes the expression independent of the eigenbasis. The term for a zero eigenvalue is defined to be $0\ln0:=0$. The default unit is nats, using the natural logarithm ([[def-natural-logarithm]]); the entropy in bits is $S_2(\rho):=S(\rho)/\ln2$.
