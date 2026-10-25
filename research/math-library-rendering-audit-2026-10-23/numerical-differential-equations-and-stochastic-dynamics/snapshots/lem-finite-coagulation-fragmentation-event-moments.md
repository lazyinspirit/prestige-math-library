---
id: lem-finite-coagulation-fragmentation-event-moments
kind: lemma
title: Stoichiometric number and mass changes for finite coagulation and fragmentation events
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-discrete-coagulation-fragmentation-system
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; each event has a finite explicit stoichiometric increment.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §1
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
    - title: Jacek Banasiak, Analytic fragmentation semigroups and classical solutions to coagulation-fragmentation equations, §1
      url: https://repository.up.ac.za/bitstream/handle/2263/65144/Banasiak_Analytic_2019.pdf?isAllowed=n&sequence=1
---

## Statement

In the finite discrete model of [[def-finite-discrete-coagulation-fragmentation-system]], an in-range coagulation event changes the retained number by $-1$ and retained mass by $0$. An overflow event changes retained number by $-2$, retained mass by $-(m_i+m_j)$, and reservoir mass by $m_i+m_j$. A fragmentation event of species $i$ changes number by $\sum_{k<i}b_i(k)-1$ and mass by $0$.

## Facts & Assumptions

**Given:** The event definitions, stoichiometric increments, and daughter normalization in [[def-finite-discrete-coagulation-fragmentation-system]].

[F1] [[def-finite-discrete-coagulation-fragmentation-system]]: an in-range aggregation event has increment $e_{i+j}-e_i-e_j$; overflow removes both parents and adds their mass to the reservoir; fragmentation has increment $-e_i+\sum_{k<i}b_i(k)e_k$ with $\sum_{k<i}k b_i(k)=i$.

## Proof

1.1 For $i+j\le N$, summing the coordinates of $e_{i+j}-e_i-e_j$ gives $1-1-1=-1$, and pairing it with the mass vector $(m_k)$ gives $(i+j)a-ia-ja=0$. [given, F1, algebra]

1.2 For $i+j>N$, the two parent removals give number change $-2$ and retained-mass change $-(m_i+m_j)$; the reservoir increment is exactly $m_i+m_j$, so augmented mass change is zero. [given, F1, algebra]

2.1 Fragmentation changes number by $-1+\sum_{k<i}b_i(k)$. Its mass change is $-ia+\sum_{k<i}ka b_i(k)=a(-i+i)=0$ by the daughter normalization. [given, F1, algebra] ∎
