---
id: lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements
kind: lemma
title: "Invariant orthogonal complements in unitary representations"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-strongly-continuous-unitary-representation, def-hilbert-space, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, lem-inner-product-is-jointly-continuous, def-metric-topology, thm-metric-open-set-algebra, def-topological-space]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
---

## Statement

Let $G$ be a topological group, let $\pi:G\to U(H)$ be a strongly continuous
unitary representation of $G$ on a complex Hilbert space $H$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]), and
let $M\subseteq H$ be a closed invariant subspace. Then the orthogonal
complement $M^\perp$ ([[def-orthogonality-and-orthogonal-complement]]) is a
closed invariant subspace of $H$. This assertion is choice free.

## Facts & Assumptions

**Given:** a topological group $G$, a strongly continuous unitary
representation $\pi$ on a complex Hilbert space $H$, and a closed invariant
subspace $M\subseteq H$.

[F1] Each $\pi(g)$ is a bijective isometry with $\pi(g)^{-1}=\pi(g)^{*}$, so
$\langle\pi(g)x,y\rangle=\langle x,\pi(g)^{-1}y\rangle$ for all $x,y\in H$; and
$M$ is invariant, meaning $\pi(g)M=M$ for every $g\in G$.
([[def-strongly-continuous-unitary-representation]])

[F2] For a subset $S$ of an inner-product space, $S^\perp=\{v:\langle v,s\rangle=0$
for every $s\in S\}$ is a linear subspace, and orthogonality is symmetric.
([[def-orthogonality-and-orthogonal-complement]],
[[def-real-and-complex-inner-product-space]])

[F3] The inner product is jointly continuous, so for each fixed $y$ the map
$x\mapsto\langle x,y\rangle$ is continuous. ([[lem-inner-product-is-jointly-continuous]])

[F4] In a metric space open balls are open, arbitrary unions of open sets are
open, and a set is closed exactly when its complement is open; consequently
$\{0\}$ is closed in $\mathbb C$, since its complement is the union of the open
balls $B(z,|z|)$ over $z\ne0$. ([[thm-metric-open-set-algebra]],
[[def-metric-topology]])

[F5] A closed set is the complement of an open set, and arbitrary intersections
of closed sets are closed because arbitrary unions of open sets are open.
([[def-topological-space]])

## Proof

**Proof technique:** direct.

1.1 Let $x\in M^\perp$, $y\in M$ and $g\in G$. Then $\langle\pi(g)x,y\rangle=\langle x,\pi(g)^{-1}y\rangle$, and $\pi(g)^{-1}y\in M$ because $\pi(g)^{-1}M=M$; hence $\langle\pi(g)x,y\rangle=0$ and $\pi(g)x\in M^\perp$, so $\pi(g)M^\perp\subseteq M^\perp$. Replacing $g$ by $g^{-1}$ gives $M^\perp\subseteq\pi(g)M^\perp$ as well, so $\pi(g)M^\perp=M^\perp$: the complement is invariant. [F1, F2]

1.2 The complement of $M^\perp$ in $H$ is the union over $y\in M$ of the sets $\{x:\langle x,y\rangle\ne0\}$, each of which is the preimage under the continuous map $x\mapsto\langle x,y\rangle$ of the open set $\mathbb C\setminus\{0\}$; a union of open sets is open, so the complement of $M^\perp$ is open and $M^\perp$ is closed. [F3, F4, F5]

2.1 Together with the fact that $M^\perp$ is a linear subspace, steps 1.1 and 1.2 show that $M^\perp$ is a closed invariant subspace of $H$, with no use of any choice principle. [F2, step 1.1, step 1.2] ∎
