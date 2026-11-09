---
title: Dimension of the maximal spectrum
status: published
research_item: lem-author-3af31ead36fb-max-spectrum-dimension
dependency_level: 0
---

PDF p. 1: Serre splitting theorem

## Prerequisites

None.

## Statement
Let $A$ be a nonzero noetherian commutative ring of finite Krull dimension $d$. Its maximal spectrum $\Omega$, the set of maximal ideals with the topology induced from $\operatorname{Spec}A$, is noetherian and has topological dimension at most $d$. Krull dimension is the supremum of the lengths of strict chains of prime ideals; topological dimension is the supremum of the lengths of strict chains of irreducible closed subsets.

## Facts & Assumptions

**Given:** A nonzero noetherian commutative ring $A$ of finite Krull dimension $d$.

**Goal:** Establish the noetherian and dimension assertions for $\Omega$.

## Proof

1.1 The closed sets of $\operatorname{Spec}A$ are the sets $V(I)$ of primes containing an ideal $I$. An ascending chain of ideals stabilizes because $A$ is noetherian, so descending chains of closed sets stabilize. Every subspace of a noetherian topological space is noetherian: the closures in the ambient space of a descending chain of subspace-closed sets stabilize, and intersection with the subspace recovers each set. [given, construct]

2.1 The ambient closures of a strict chain of irreducible closed subsets of $\Omega$ form a strict chain of irreducible closed subsets of $\operatorname{Spec}A$: closure preserves irreducibility, and intersection with $\Omega$ recovers each member. Each irreducible closed subset of $\operatorname{Spec}A$ is $V(\mathfrak p)$ for a prime $\mathfrak p$: if $V(I)$ is irreducible, its radical is prime, since $ab$ in the radical implies $V(I)\subseteq V(a)\cup V(b)$. Inclusion of such closed sets reverses inclusion of primes. Hence every chain has length at most $d$. [given, step 1.1, construct] ∎
