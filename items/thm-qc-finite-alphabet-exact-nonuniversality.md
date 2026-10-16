---
id: thm-qc-finite-alphabet-exact-nonuniversality
kind: theorem
title: QC24 Finite Alphabet Exact Nonuniversality
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-state-preparation-cost-model
  - def-qc-elementary-circuit-resources
  - thm-qc-finite-width-topology-count
  - def-qc-pure-state-and-ray
  - thm-r-uncountable
  - thm-n-cross-n-countable
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Statement

Fix integers $n\ge1$, $A\ge0$, $k\ge1$, and $W\ge n$, with $D=2^n$, a gate alphabet of size $A$ and maximum arity $k$. Each circuit starts on $|0^n\rangle|0^{W-n}\rangle$ and is counted as an exact state-preparation circuit only when its unconditional output is $\lambda|\psi\rangle|0^{W-n}\rangle$ for a unit scalar $\lambda$ and a unit data vector $\psi\in\mathbb C^D$. The set of data rays exactly reachable by finite circuits is countable, so it is not the full ray space.

## Facts & Assumptions

**Given:** A finite gate alphabet of size $A\ge0$ and maximum arity $k\ge1$, fixed finite width $W\ge n$, $n\ge1$, and the stated clean-workspace output convention.

[F1] If $A\ge1$, at fixed width and finite alphabet there are finitely many circuit descriptions of each length ([[thm-qc-finite-width-topology-count]]).

[F2] The real numbers are uncountable, so an injective copy of $\mathbb R$ in the ray space witnesses its uncountability ([[thm-r-uncountable]]).

[F3] Pure-state rays identify nonzero vectors exactly up to nonzero scalar multiplication ([[def-qc-pure-state-and-ray]]).

[F4] A fixed bijection $\pi:\mathbb N^2\to\mathbb N$ codes a pair of natural numbers as one natural ([[thm-n-cross-n-countable]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 If $A=0$, the empty alphabet allows only the empty circuit, so at most one ray is reachable. If $A\ge1$, put $B=(k+1)AW^k\ge2$. Fix a finite listing of the alphabet and order wire tuples lexicographically; then [F1] gives at most $B^g$ descriptions of length $g\in\mathbb N$. Code each description by its length and its base-$B$ index, then apply the fixed pairing bijection of [F4] to these two natural numbers; this gives an injection of all finite descriptions into $\mathbb N$. In either case the reachable rays form a countable set without a choice principle. [given, F1, F4, construct, cases]

2.1 The map $t\mapsto[e_0+t e_1]$ from $\mathbb R$ into the rays of $\mathbb C^D$ is injective: if $e_0+t e_1=\lambda(e_0+s e_1)$, comparison of the $e_0$ coordinate gives $\lambda=1$, then comparison of the $e_1$ coordinate gives $t=s$. These nonzero vectors define rays by [F3]. By [F2], the ray space is uncountable and cannot equal the countable reachable set. [given, F2, F3, step 1.1, algebra] ∎
