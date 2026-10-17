---
id: lem-qsm-integer-lattice-countable
kind: lemma
title: Countability of every finite-dimensional integer lattice
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-countable, def-integers, lem-countable-iff-surjection-from-n, lem-finite-powers-of-countable-sets-are-countable]
dependency_roles:
  def-countable: mathematical-premise
  def-integers: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every positive integer $d$, the integer lattice $\Gamma=\mathbb{Z}^d$ is at most countable. Countability here means finite or in bijection with $\mathbb{N}$, as in [[def-countable]].

## Facts & Assumptions

**Given:** The usual set $\mathbb{Z}$ of signed integers, the von Neumann natural numbers $\mathbb{N}$, and a fixed finite $d\ge1$.

[F1] A set is at most countable when it is finite or equinumerous with $\mathbb{N}$ ([[def-countable]]).

[F2] A nonempty set is at most countable if a surjection from $\mathbb{N}$ onto it exists ([[lem-countable-iff-surjection-from-n]]). This criterion uses no choice principle.

[F3] Every finite Cartesian power of an at most countable set is at most countable ([[lem-finite-powers-of-countable-sets-are-countable]]).

[F4] The integers are the quotient of $\mathbb N\times\mathbb N$ by $(a,b)\sim(c,d)$ iff $a+d=b+c$, and the quotient map $\pi(a,b)=[(a,b)]$ is surjective ([[def-integers]]).

## Proof

**Proof technique:** direct.

**Given:** $d\ge1$ and $\Gamma=\mathbb{Z}^d$.

1.1 The identity map shows that $\mathbb N$ is at most countable by [F1], so [F3] gives that $\mathbb N\times\mathbb N$ is at most countable. This product is nonempty, so [F2] supplies a surjection $s:\mathbb N\to\mathbb N\times\mathbb N$. By [F4], the quotient map $\pi:\mathbb N\times\mathbb N\to\mathbb Z$ is surjective; hence $\pi\circ s:\mathbb N\to\mathbb Z$ is a surjection. [F1, F2, F3, F4, construct]

2.1 The surjection in step 1.1 makes $\mathbb Z$ nonempty, and [F2] then shows that $\mathbb Z$ is at most countable in the sense of [F1]. [step 1.1, F1, F2]

3.1 Since $d$ is finite and positive, [F3] with $C=\mathbb{Z}$ and $m=d$ gives that $\Gamma=\mathbb{Z}^d$ is at most countable. [given, step 2.1, F3] ∎

