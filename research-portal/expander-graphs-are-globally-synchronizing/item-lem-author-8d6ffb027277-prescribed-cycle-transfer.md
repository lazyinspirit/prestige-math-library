---
title: From Hamiltonicity and an invariant event to a prescribed cycle
status: published
research_item: lem-author-8d6ffb027277-prescribed-cycle-transfer
dependency_level: 3
---

## Prerequisites

- [lem-author-8d6ffb027277-uniform-vertex-relabeling](item-lem-author-8d6ffb027277-uniform-vertex-relabeling)
- [lem-author-8d6ffb027277-simultaneous-high-probability-events](item-lem-author-8d6ffb027277-simultaneous-high-probability-events)
- [lem-author-8d6ffb027277-feasible-regular-orders](item-lem-author-8d6ffb027277-feasible-regular-orders)
- [lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings)


## Statement

Fix $d\ge3$. Along feasible orders $n$, let $G_n$ be uniform on $\Omega_{n,d}$ and let $Q_n$ be a property of graphs on $[n]$ invariant under every vertex relabeling. Assume $\mathbb P(G_n\in Q_n)\to1$ and $\mathbb P(G_n\text{ is Hamiltonian})\to1$. Then for every sufficiently large feasible $n$ and every prescribed candidate Hamiltonian cycle $C_n$ on $[n]$, there exists a simple $d$-regular graph in $Q_n$ containing $C_n$. This is an existence conclusion; it asserts no high probability for containing one fixed cycle.

## Facts & Assumptions

[F1] [lem-author-8d6ffb027277-feasible-regular-orders](item-lem-author-8d6ffb027277-feasible-regular-orders) supplies the unbounded feasible-order set.

[F2] [lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings) supplies the finite Hamiltonicity event and its cycle witnesses.

[F3] [lem-author-8d6ffb027277-uniform-vertex-relabeling](item-lem-author-8d6ffb027277-uniform-vertex-relabeling) maps any Hamiltonian cycle to any prescribed one and preserves regularity and invariant properties.

[F4] [lem-author-8d6ffb027277-simultaneous-high-probability-events](item-lem-author-8d6ffb027277-simultaneous-high-probability-events) gives positive probability and nonemptiness of the intersection of two events of probability tending to one.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 On the common finite graph space, intersect the event $Q_n$ with the Hamiltonicity event. Both have probability tending to one by hypothesis, so F4 gives an outcome $G$ in their intersection for every sufficiently large feasible $n$. Choose a Hamiltonian cycle $D$ contained in $G$. The cutoff depends on the two probabilities and is independent of the prescribed cycle. [given, F1, F2, F4]

2.1 For any prescribed $C_n$, F3 supplies $\sigma$ with $\sigma D=C_n$. The graph $\sigma G$ is simple and $d$-regular, belongs to $Q_n$ by its relabeling invariance, and contains $C_n$. This proves the existence assertion for every prescribed cycle using the same eventual cutoff. It uses no claim about the frequency of a fixed cycle in the uniform model. [F3, step 1.1] ∎
