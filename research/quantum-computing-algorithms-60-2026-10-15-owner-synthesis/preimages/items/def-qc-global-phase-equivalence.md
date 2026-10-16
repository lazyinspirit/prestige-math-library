---
id: def-qc-global-phase-equivalence
kind: definition
title: Global Phase Equivalence
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Definition

For square matrices $U,V$ of the same size, write $U\sim_{\mathrm{phase}}V$ when $U=\lambda V$ for some $\lambda\in\mathbb C$ with $|\lambda|=1$. This relation is kept distinct from exact matrix equality.

## Facts & Assumptions

**Given:** Square complex matrices $U,V,W$ of the same size.

## Proof


1.1 Taking $\lambda=1$ gives $U=1\cdot U$, so $U\sim_{\mathrm{phase}}U$. [given, algebra]

1.2 If $U=\lambda V$ and $|\lambda|=1$, then $V=\overline\lambda U$ because $\lambda\overline\lambda=1$; also $|\overline\lambda|=1$. Hence $U\sim_{\mathrm{phase}}V$ implies $V\sim_{\mathrm{phase}}U$. [given, algebra]

2.1 If $U=\lambda V$ and $V=\mu W$, then $U=(\lambda\mu)W$ and $|\lambda\mu|=1$. Thus $U\sim_{\mathrm{phase}}V$ and $V\sim_{\mathrm{phase}}W$ imply $U\sim_{\mathrm{phase}}W$. This proves transitivity; together the three properties establish an equivalence relation. [step 1.1, step 1.2, algebra]

3.1 The $1\times1$ matrices $[1]$ and $[-1]$ are phase-equivalent by the scalar $-1$, but they are not equal because their entries differ. Thus phase equivalence is distinct from exact equality. [given, step 2.1, algebra] ∎
