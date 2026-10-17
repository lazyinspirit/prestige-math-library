---
id: lem-qsm-integer-lattice-countable
kind: lemma
title: Countability of every finite-dimensional integer lattice
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-countable, lem-countable-iff-surjection-from-n, lem-finite-powers-of-countable-sets-are-countable]
dependency_roles:
  def-countable: mathematical-premise
  lem-countable-iff-surjection-from-n: mathematical-premise
  lem-finite-powers-of-countable-sets-are-countable: mathematical-premise
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.2.2–3.2.3, pp. 55–57
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Statement

For every positive integer $d$, the integer lattice $\Gamma=\mathbb{Z}^d$ is at most countable. Countability here means finite or in bijection with $\mathbb{N}$, as in [[def-countable]].

## Facts & Assumptions

**Given:** The usual set $\mathbb{Z}$ of signed integers, the von Neumann natural numbers $\mathbb{N}$, and a fixed finite $d\ge1$.

[F1] A set is at most countable when it is finite or equinumerous with $\mathbb{N}$ ([[def-countable]]).

[F2] A nonempty set is at most countable if a surjection from $\mathbb{N}$ onto it exists ([[lem-countable-iff-surjection-from-n]]). This criterion and the displayed enumeration below use no choice principle.

[F3] Every finite Cartesian power of an at most countable set is at most countable ([[lem-finite-powers-of-countable-sets-are-countable]]).

## Proof

**Proof technique:** direct.

**Given:** $d\ge1$ and $\Gamma=\mathbb{Z}^d$.

1.1 Define $e:\mathbb{N}\to\mathbb{Z}$ by $e(2n)=n$ and $e(2n+1)=-(n+1)$. Every natural number is uniquely even or odd, and every integer is either a natural number or the negative of a positive natural number; these two descriptions show that every integer is a value of $e$. Thus $e$ is a surjection. [given, construct, algebra]

2.1 Since $\mathbb{Z}$ is nonempty, [F2] applied to $e$ shows that $\mathbb{Z}$ is at most countable in the sense of [F1]. [step 1.1, F1, F2]

3.1 Since $d$ is finite and positive, [F3] with $C=\mathbb{Z}$ and $m=d$ gives that $\Gamma=\mathbb{Z}^d$ is at most countable. [given, step 2.1, F3] ∎

