---
id: def-kolyvagin-system-for-a-selmer-triple
kind: definition
title: "Kolyvagin System for a Selmer Triple"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-core-rank-and-stark-system
  - def-selmer-structure-for-a-galois-representation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§10 Definitions 10.1, 10.3, and 10.4; §11 Definitions 11.3 and 11.4, printed pp. 20–23."
verification: {}
---

## Definition

Let $(K,R,T,\mathcal F,P,r)$ be a core-rank Selmer datum over a principal local ring $R$ that is either artinian or a DVR. Include as part of the datum, for each $q\in P$, an ideal $I_q\subset R$, a cyclic $R$-module $G_q$ annihilated by $I_q$, a transverse local condition, and compatible finite-to-singular localization maps. For a squarefree product $n$ of primes in $P$, set $I_n=\prod_{q\mid n}I_q$, $G_n=\bigotimes_{q\mid n}G_q$ with $I_1=0$ and $G_1=R$, and let $\mathcal F(n)$ agree with $\mathcal F$ away from primes dividing $n$ and use the transverse condition at each prime dividing $n$. Define the stalk
$$S(n)=\left(\bigwedge_R^r H^1_{\mathcal F(n)}(K,T/I_nT)\right)\otimes_R G_n.$$

For each edge joining $n$ to $nq$, the Selmer datum includes the common edge module and its two localization/contraction maps $\psi_n^e:S(n)\to S(e)$ and $\psi_{nq}^e:S(nq)\to S(e)$; these maps are the ones induced by the finite-to-singular isomorphism and transverse localization. A **rank-$r$ Kolyvagin system** is a family $\kappa=(\kappa_n)$ with $\kappa_n\in S(n)$ such that $\psi_n^e(\kappa_n)=\psi_{nq}^e(\kappa_{nq})$ on every edge. Assume the dual Selmer module with the local conditions dual to $\mathcal F(n)$ has finite length $\lambda(n)$ for every $n$. The **stub stalk** is $S'(n)=\mathfrak m^{\lambda(n)}S(n)$; a stub Kolyvagin system is a compatible family whose $n$th coordinate lies in $S'(n)$ for every $n$.

## Definition references

[[def-selmer-structure-for-a-galois-representation]]

[[def-core-rank-and-stark-system]]

[Mazur–Rubin, *Kolyvagin Systems*, §§10–11](https://arxiv.org/pdf/1312.4052)

## Facts & Assumptions

**Given:** A core-rank Selmer datum, ideals and local groups for the auxiliary primes, finite-to-singular maps, and the associated edge modules and maps.

[F1] [[def-selmer-structure-for-a-galois-representation]]: the global Selmer module is the kernel of localization to the quotients by the chosen local conditions.

[F2] [[def-core-rank-and-stark-system]]: a core-rank Selmer datum supplies the rank parameter, dual local conditions, transverse modules, and coherent Selmer transition maps.

[A1] The ideals, finite cyclic local groups, and finite-to-singular maps are part of the admissible Selmer datum; this definition does not assert their arithmetic existence.

## Verification

1.1 Each stalk $S(n)$ is an $R/I_n$-module by the module, exterior-power, tensor-product, and quotient constructions in the Definition. The edge maps are linear by the data hypothesis, so their equalizers are submodules. [given, F1, F2, algebra]

2.1 The compatible families form a submodule of $\prod_n S(n)$, and the stub conditions restrict each coordinate to a submodule $S'(n)$. Therefore the Kolyvagin systems and stub Kolyvagin systems are well-defined modules of compatible families. [A1, step 1.1, algebra] ∎
