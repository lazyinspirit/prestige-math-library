---
id: def-qa-finite-abelian-hidden-shift-problem
kind: definition
title: Finite abelian hidden-shift promise
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
  - def-qc-coherent-function-oracle
  - def-qc-ordered-bitstring-encoding
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
---

## Definition

The input group is a finite abelian group $A$ supplied in explicit invariant-factor coordinates $A=\mathbb Z/n_1\mathbb Z\times\cdots\times\mathbb Z/n_d\mathbb Z$, with componentwise addition and the empty product allowed. The finite set $S$ is supplied with an injective fixed-length bit encoding. The input functions $f,g:A\to S$ are injective and have coherent XOR oracles with explicitly declared access and costs.

The promise is that there is a unique $s\in A$ such that
$$
f(a)=g(a+s)\qquad\text{for every }a\in A.
$$
The output is the coordinate encoding of $s$. The definition makes no claim that a group presented only by black-box operations comes with invariant-factor coordinates, efficient uniform preparations, efficient group operations, or an efficient implementation of either oracle.
