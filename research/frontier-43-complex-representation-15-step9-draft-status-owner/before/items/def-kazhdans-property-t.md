---
id: def-kazhdans-property-t
kind: definition
title: Kazhdan's property (T)
deps:
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-compact-space
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definition 1.1.3, printed pp. 33–34 (property (T) via a compact Kazhdan set), and Proposition 1.2.1 with complete proof, printed pp. 36–37 (the almost-invariant-vector characterization); Definition 1.1.1, printed p. 32, defines almost invariant vectors"
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, printed pp. 3–4/PDF pp. 10–11: countable discrete-group formulation, as supplementary context."
---

## Statement

Let $G$ be a topological group. Then $G$ has **Kazhdan's property (T)** if
every strongly continuous unitary representation of $G$
([[def-strongly-continuous-unitary-representation]]) on a Hilbert space
$H$ ([[def-hilbert-space]]) that has almost invariant vectors
([[def-almost-invariant-vectors-for-a-unitary-representation]]) has a nonzero
$G$-invariant vector. Equivalently, whenever such a representation $(\pi,H)$
has, for every compact $Q\subseteq G$ ([[def-compact-space]]) and every
$\varepsilon>0$, a unit vector $\xi$ satisfying
$$\|\pi(x)\xi-\xi\|<\varepsilon\quad\text{for every }x\in Q.$$
Then $\pi$ has a nonzero vector fixed by every $\pi(g)$, $g\in G$.

## Remarks

- The two formulations are exactly the definition of “almost invariant vectors” and the definition of “nonzero invariant vector” from
  [[def-almost-invariant-vectors-for-a-unitary-representation]]. The inequality is pointwise for each $x\in Q$; no supremum over $Q$ is introduced, so the empty compact set causes no undefined supremum.
- The zero representation on $H=\{0\}$ has no unit vectors and therefore has no almost invariant vectors. The property-(T) implication is vacuous for that representation.
- No local compactness, Hausdorffness, countability, or choice assumption is part of this definition.
