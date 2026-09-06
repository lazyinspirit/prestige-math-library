---
id: cor-generic-verma-modules-are-simple
kind: corollary
title: "Generic Verma modules are simple"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-verma-irreducibility-criterion-from-shapovalov-determinants]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

If $\langle\lambda+\rho,\alpha^\vee\rangle\notin\mathbb Z_{>0}$ for every $\alpha\in\Phi^+$, then $M(\lambda)$ is simple. In particular this holds on the complement of the countable union of positive-integral reflection hyperplanes.

## Facts & Assumptions

**Given:** The determinant irreducibility criterion [[cor-verma-irreducibility-criterion-from-shapovalov-determinants]].

## Proof

**Proof technique:** direct.

1.1 The hypothesis is precisely the absence of the positive-integral pairings in the criterion. [given]

2.1 The criterion therefore says that $M(\lambda)$ is simple. [step 1.1] ∎
