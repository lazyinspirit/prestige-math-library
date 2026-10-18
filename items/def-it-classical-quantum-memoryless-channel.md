---
id: def-it-classical-quantum-memoryless-channel
kind: definition
title: Finite-input memoryless cq channel
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-classical-quantum-state-and-holevo-information
  - def-qc-density-operator
  - def-qc-tensor-register-and-permutation
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapters 16 and 20"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Definition

Let $\mathcal X$ be a finite nonempty input alphabet and let $H_B$ be a nonzero finite-dimensional complex inner-product space. A **finite-input cq channel** is a map $x\mapsto\rho_x$ assigning a density operator ([[def-qc-density-operator]]) $\rho_x$ on $H_B$ to each $x\in\mathcal X$. Its $n$-use memoryless extension sends a word $x^n=(x_1,\ldots,x_n)$ to the product state
$$\rho_{x^n}:=\rho_{x_1}\otimes\cdots\otimes\rho_{x_n}\quad\text{on }H_B^{\otimes n}.$$
For an input probability vector $p$, write $\bar\rho_p=\sum_xp_x\rho_x$ and $\chi_p=S(\bar\rho_p)-\sum_{x:p_x>0}p_xS(\rho_x)$; this is the Holevo information of the ensemble in [[def-it-classical-quantum-state-and-holevo-information]], in nats.
