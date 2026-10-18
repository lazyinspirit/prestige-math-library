---
id: lem-qc-tqc-su2-determinant-lifts-dense
kind: lemma
title: Dense projective SU(2) image has dense determinant-one lifts
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-qc-tqc-pu2-is-so3
  - def-countable-choice
dependency_level: 10
axiom_use: ACω is inherited through the SU(2) to SO(3) covering supplier; the density hypothesis adds no choice.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.17, PDF pp. 61–62; projective/global-phase distinction
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $q:SU(2)\to PU(2)$ be the quotient by
$\{\pm I\}$, and let $\Gamma\le PU(2)$ be dense. Then the full inverse image
$q^{-1}(\Gamma)$ is dense in $SU(2)$. Thus projective density gives
determinant-one lifts arbitrarily close to any $SU(2)$ target, while the
choice of a lift can differ by the central sign.

## Facts & Assumptions

**Given:** The two-sheeted covering homomorphism $q:SU(2)\to PU(2)$ and a
dense subgroup $\Gamma\le PU(2)$.

[F1] $q:SU(2)\to PU(2)$ is a two-sheeted covering with kernel
$\{\pm I\}$. [[lem-qc-tqc-pu2-is-so3]]

[F2] By the given density hypothesis, $\Gamma$ meets every nonempty open
subset of $PU(2)$.

[A1] $\mathrm{AC}_\omega$ is the axiom assumed by the covering supplier.
[[def-countable-choice]]

## Proof

1.1 Let $O$ be any nonempty open subset of $SU(2)$ and choose $u\in O$. By [F1], there is an evenly covered neighborhood $N_0$ of $q(u)$ and a sheet $S_0$ containing $u$ such that $q|_{S_0}:S_0\to N_0$ is a homeomorphism. Set $S=S_0\cap O$ and $N=q(S)$. Since $S$ is open in $S_0$, $N$ is open in $N_0$; the restriction $q|_S:S\to N$ remains a homeomorphism. [given, F1, choose]

2.1 The open set $N$ meets $\Gamma$ by [F2]; choose $g\in N\cap\Gamma$. Its unique lift $v\in S$ lies in $O$ and satisfies $q(v)=g$, hence $v\in q^{-1}(\Gamma)$. Thus every nonempty open $O$ meets $q^{-1}(\Gamma)$, which is exactly density in $SU(2)$. The only stated axiom is [A1]. [A1, F1, F2, step 1.1, choose] ∎
