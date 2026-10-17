---
id: ex-qsm-maximally-mixed-consistent-product-state
kind: example
title: Consistent maximally mixed local densities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- def-qsm-local-spin-algebras
- def-qsm-infinite-algebraic-state
- lem-qsm-consistent-local-states
- def-countable-choice
- lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-consistent-local-states: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §2.4 and §3.2.2–3.2.3, pp. 34–36 and 55–57
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §4 and Chapter 3 §1, pp.
      6–8 and 25–26
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Fix finite spin dimension $q\ge1$ on $\Gamma=\mathbb Z^d$, $d\ge1$. For every finite region $\Lambda$, set

$$\rho_\Lambda:=q^{-|\Lambda|}I_\Lambda.$$

This is a consistent family of maximally mixed local density matrices. By the finite-dimensional density-state correspondence of [[lem-qsm-finite-matrix-cstar-and-state-duality]] and [[lem-qsm-consistent-local-states]], it determines a unique algebraic state $\omega$ on the quasi-local spin algebra. For local $A\in\mathcal A_\Lambda$, its expectation is $\omega(A)=q^{-|\Lambda|}\operatorname{Tr}_\Lambda(A)$.

## Facts & Assumptions

**Given:** $q\ge1$, $d\ge1$, finite regions $\Lambda\subseteq\Lambda'$, and the finite local matrix algebras.

[F1] $\dim\mathcal H_\Lambda=q^{|\Lambda|}$ and $\operatorname{Tr}_\Lambda(I_\Lambda)=q^{|\Lambda|}$ ([[def-qsm-local-spin-algebras]]).

[F2] For $T\in\mathcal A_{\Lambda'}$ and $\Delta=\Lambda'\setminus\Lambda$, the partial trace $\operatorname{Tr}_\Delta(T)\in\mathcal A_\Lambda$ is defined by the configuration-basis matrix sum and satisfies $\operatorname{Tr}_\Lambda(A\operatorname{Tr}_\Delta(T))=\operatorname{Tr}_{\Lambda'}((A\otimes I_\Delta)T)$ for every $A\in\mathcal A_\Lambda$ ([[def-qsm-infinite-algebraic-state]]).

[F3] Every consistent positive trace-one local density family extends uniquely to an algebraic state on $\mathcal A$ ([[lem-qsm-consistent-local-states]]).

## Proof

**Proof technique:** direct.

**Given:** The family $\rho_\Lambda$ and facts [F1]–[F3].

1.1 Each $\rho_\Lambda$ is positive because it is a positive scalar multiple of the identity. Its trace is $q^{-|\Lambda|}\operatorname{Tr}_\Lambda(I_\Lambda)=1$ by [F1], including $\Lambda=\varnothing$ where $q^0=1$. [given, F1, algebra]

1.2 Put $\Delta=\Lambda'\setminus\Lambda$ and $r=|\Delta|$. For every $A\in\mathcal A_\Lambda$, the defining partial-trace pairing gives
$$\operatorname{Tr}_\Lambda\!\left(A\operatorname{Tr}_\Delta(I_\Lambda\otimes I_\Delta)\right)=\operatorname{Tr}_{\Lambda'}((A\otimes I_\Delta)(I_\Lambda\otimes I_\Delta))=q^r\operatorname{Tr}_\Lambda(A),$$
where the last equality follows by summing the diagonal matrix coefficients over a configuration basis of $\mathcal H_\Delta$, which has $q^r$ elements. The trace pairing is nondegenerate: if $\operatorname{Tr}(AT)=0$ for every matrix $A$, taking $A=E_{ji}$ makes each entry $T_{ij}$ zero. Hence $\operatorname{Tr}_\Delta(I_\Lambda\otimes I_\Delta)=q^rI_\Lambda$. Since $|\Lambda'|=|\Lambda|+r$,
$$\operatorname{Tr}_\Delta(\rho_{\Lambda'})=q^{-|\Lambda'|}q^rI_\Lambda=q^{-|\Lambda|}I_\Lambda=\rho_\Lambda.$$
Thus the family is consistent for every inclusion, including equality of regions ($r=0$). [given, F1, F2, algebra]

2.1 By [F3], this family extends to a unique algebraic state $\omega$ on $\mathcal A$, and its local restriction is $\omega(A)=\operatorname{Tr}_\Lambda(\rho_\Lambda A)=q^{-|\Lambda|}\operatorname{Tr}_\Lambda(A)$ for $A\in\mathcal A_\Lambda$. [F3, step 1.1, step 1.2]

3.1 If $A\in\mathcal A_\Lambda$ and $B\in\mathcal A_\Delta$ for disjoint finite regions, choose orthonormal configuration bases $(e_i)$ and $(f_j)$ for their local Hilbert spaces. The tensor basis gives
$$\operatorname{Tr}_{\Lambda\cup\Delta}(A\otimes B)=\sum_{i,j}\langle Ae_i,e_i\rangle\langle Bf_j,f_j\rangle=\operatorname{Tr}_\Lambda(A)\operatorname{Tr}_\Delta(B).$$
Substitution into step 2.1 gives $\omega(AB)=\omega(A)\omega(B)$ on these disjoint local factors; this product formula follows from the displayed density family and is not an assumption about arbitrary states. [F1, step 2.1, algebra] ∎
