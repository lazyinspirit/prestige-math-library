---
id: lem-qsm-dt-finite-trace-pairing-cyclicity
kind: lemma
title: Finite matrix trace cyclicity and nondegeneracy
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §2.2.2, Kraus representation adjoint calculation
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §3.2, trace-preserving Kraus calculation
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement

Let $d,e\geq1$. For $A\in M_{e\times d}(\mathbb C)$ and $B\in M_{d\times e}(\mathbb C)$,
$$ \operatorname{Tr}_e(AB)=\operatorname{Tr}_d(BA), $$
where $\operatorname{Tr}_r$ is the diagonal-sum trace on $M_r(\mathbb C)$. This includes cyclicity for square matrices. For $C\in M_d(\mathbb C)$, the bilinear trace pairing is nondegenerate: if $\operatorname{Tr}_d(XC)=0$ for every $X\in M_d(\mathbb C)$, then $C=0$. No adjoint is inserted in this pairing.

## Facts & Assumptions

**Given:** Integers $d,e\geq1$, rectangular matrices $A\in M_{e\times d}(\mathbb C)$, $B\in M_{d\times e}(\mathbb C)$, a matrix $C\in M_d(\mathbb C)$, and standard matrix units $E_{ij}$ on $\mathbb C^d$.

## Proof


1.1 By matrix multiplication and the diagonal-sum trace, $\operatorname{Tr}_e(AB)=\sum_{i=1}^e\sum_{j=1}^dA_{ij}B_{ji}$. These are finite scalar sums, so reordering them gives $\sum_{j=1}^d\sum_{i=1}^eB_{ji}A_{ij}=\operatorname{Tr}_d(BA)$. Taking $e=d$ gives square trace cyclicity. [given, algebra]

2.1 If $\operatorname{Tr}_d(XC)=0$ for all $X$, choose $X=E_{ij}$. Direct multiplication gives $\operatorname{Tr}_d(E_{ij}C)=C_{ji}$, so $C_{ji}=0$ for every $i,j$. Thus every matrix entry of $C$ vanishes and $C=0$. [given, algebra] ∎
