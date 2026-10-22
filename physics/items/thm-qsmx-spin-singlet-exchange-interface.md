---
id: thm-qsmx-spin-singlet-exchange-interface
kind: theorem
domain: mathematics
library: physics
title: "Spin-half exchange realizes Temperley-Lieb at loop two"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - thm-qsmx-potts-tl-and-hecke
  - thm-nrqmx-spin-half-temperley-lieb
dependency_roles:
  thm-qsmx-potts-tl-and-hecke: mathematical-premise
  thm-nrqmx-spin-half-temperley-lieb: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Yacine Ikhlef, Jesper Lykke Jacobsen, and Hubert Saleur, A Temperley-Lieb quantum chain with two- and three-site interactions, §2"
      url: https://arxiv.org/pdf/0901.4685
      locator: "Introduction and §2, PDF pp. 1–4, especially the loop-weight-two spin-half representation and e_j=2P^(0) at q=1."
---

## Statement

Let $N\geq1$ and let $\mathcal H_N=(\mathbb C^2)^{\otimes N}$ have the standard tensor-product Hermitian inner product, linear in its first argument, with $|0\rangle,|1\rangle$ orthonormal on each factor. For $1\leq i<N$, let $s_i$ be the swap of tensor factors $i,i+1$, let $|\omega\rangle=(|01\rangle-|10\rangle)/\sqrt2$, and let $P_i=I^{\otimes(i-1)}\otimes|\omega\rangle\langle\omega|\otimes I^{\otimes(N-i-1)}$ be the projection onto this singlet on those two factors. Put $e_i:=I-s_i$. Then these are the loop-weight-two Temperley-Lieb generators. In the Hecke normalization $g_i(q):=qI-e_i$, at $q=1$ one has $g_i(1)=s_i$. For arbitrary real coefficients $\mathcal J_i$, the finite exchange sum
$$X_N(\boldsymbol{\mathcal J}):=\sum_{i=1}^{N-1}\mathcal J_i s_i$$
satisfies
$$X_N(\boldsymbol{\mathcal J})=\left(\sum_{i=1}^{N-1}\mathcal J_i\right)I-\sum_{i=1}^{N-1}\mathcal J_i e_i.$$
The equality $g_i(1)=s_i$ is internal to this spin-half representation; it does not identify its state space with the distinct $Q=4$ Potts representation.

## Statement references

[[thm-nrqmx-spin-half-temperley-lieb]]

[[thm-qsmx-potts-tl-and-hecke]]

## Facts & Assumptions

**Given:** $N\geq1$, $\mathcal H_N=(\mathbb C^2)^{\otimes N}$, adjacent swaps $s_i$, and real coefficients $\mathcal J_i$.

[A1] The chain length and real-coupling hypotheses are exactly those in the Statement.

[F1] [[thm-nrqmx-spin-half-temperley-lieb]]: $e_i=I-s_i=2P_i$ and the $e_i$ satisfy the Temperley-Lieb relations with loop parameter $2$.

[F2] [[thm-qsmx-potts-tl-and-hecke]]: the Hecke-normalized generator is $g_i(q)=qI-e_i$; at $q=1$ it is $I-e_i$.


## Proof

1.1 By [F1], $e_i=I-s_i$ and $e_i$ is the loop-weight-two Temperley-Lieb generator on this spin-half chain. Substituting $q=1$ in [F2] gives $g_i(1)=I-e_i=I-(I-s_i)=s_i$ for every bond. This is an equality of operators on $\mathcal H_N$, with no identification of this space with the $Q=4$ Potts space. [F1, F2, algebra]

2.1 For each $i$, [F1] gives $s_i=I-e_i$. Therefore
$$X_N(\boldsymbol{\mathcal J})=\sum_{i=1}^{N-1}\mathcal J_i(I-e_i)=\left(\sum_{i=1}^{N-1}\mathcal J_i\right)I-\sum_{i=1}^{N-1}\mathcal J_i e_i.$$
When $N=1$, all sums are empty and both sides are the zero operator. [A1, F1, algebra] ∎

## Remarks

No nonzero-$q$ deformation is identified with this Hermitian swap representation. For the Potts $Q=2,3$ values, $q$ is non-real and the relation $g_i=qI-e_i$ alone supplies no star-preserving or unitary representation.


