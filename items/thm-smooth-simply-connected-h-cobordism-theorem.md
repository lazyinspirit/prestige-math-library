---
id: thm-smooth-simply-connected-h-cobordism-theorem
kind: theorem
title: The smooth simply connected h-cobordism theorem
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 18
deps:
- def-h-cobordism
- prop-h-cobordisms-admit-adapted-ordered-handle-decompositions
- lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
- lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism
- lem-duality-eliminates-top-and-cotop-handles
- lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices
- lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular
- lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity
- lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically
- lem-middle-handle-pairs-with-one-geometric-intersection-cancel
- thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary
- def-simply-connected
- def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Theorem 9.1, printed p. 108
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Theorem 1.2, p. 2
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170); Theorem 8.34
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be an
h-cobordism with $\dim W=n+1\ge6$ (equivalently $n\ge5$), where $M_0,M_1$ are
closed simply connected $n$-manifolds and $W$ is connected
([[def-h-cobordism]], [[def-simply-connected]]). Then $W$ is diffeomorphic to
$M_0\times[0,1]$ relative to $M_0$: there is a diffeomorphism
$W\to M_0\times[0,1]$ that is the identity on $M_0$. In particular every
h-cobordism over a closed simply connected $n$-manifold with $n\ge5$ is trivial.
The dimension hypothesis $n\ge5$ is used in the elimination of one-handles and
in the Whitney-trick step; simple connectivity is used in those steps and in the
diagonalisation.

## Facts & Assumptions

**Given:** An h-cobordism $(W;M_0,M_1)$ with $\dim W=n+1\ge6$, closed simply connected faces and connected $W$; $\mathrm{AC}_\omega$.

[F1] Every compact h-cobordism admits an adapted ordered handle presentation relative to $M_0$, with all $k$-handles attached at one level before all $(k+1)$-handles ([[prop-h-cobordisms-admit-adapted-ordered-handle-decompositions]]).

[F2] The relative homology of an h-cobordism vanishes in every degree $k\ge0$: $H_k(W,M_0;\mathbb Z)=0$ ([[lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends]]).

[F3] Under the dimension and simple connectivity hypotheses, $W$ admits a presentation relative to $M_0$ with no handles of index $0$ or $1$ ([[lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism]]) and, dually, no handles of index $n$ or $n+1$ ([[lem-duality-eliminates-top-and-cotop-handles]]).

[F4] For every admissible $k\in\{2,\dots,n-2\}$ the presentation may be concentrated in the two adjacent indices $k,k+1$, with the same number $r$ of handles of each index and relative handle complex $0\to\mathbb Z^r\to\mathbb Z^r\to0$ ([[lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices]]).

[F5] The middle-handle intersection matrix of such a two-index presentation is invertible over $\mathbb Z$ ([[lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular]]), and handle slides, renumbering and reorientation carry it to the identity matrix $I_r$ while preserving $W$ relative to $M_0$ ([[lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity]]).

[F6] In the resulting presentation the Whitney trick upgrades the identity matrix to the geometric single-point configuration ([[lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically]]), and then the pairs cancel, leaving an empty presentation ([[lem-middle-handle-pairs-with-one-geometric-intersection-cancel]]).

[F7] An empty presentation relative to $M_0$ is exactly a product: $W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$ ([[thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] put the h-cobordism in self-indexed form relative to $M_0$, so that its handles are attached in order of increasing index and $H_k(W,M_0;\mathbb Z)=0$ for all $k$ by [F2]; the relative handle chain complex of this presentation computes $H_*(W,M_0;\mathbb Z)$. [F1, F2, given]

2.1 Use the simultaneous elimination supplied by the duality lemma in [F3]: its low-eliminate/reverse/low-eliminate/reverse procedure yields one presentation relative to $M_0$ with every index between $2$ and $n-1$. [F3, step 1.1]

3.1 Since $n\ge5$ there is an admissible index $k$ with $2\le k\le n-2$ (for instance $k=2$, and in higher dimensions any $k$ with $3\le k\le n-3$), and by [F4] the presentation may be concentrated in the two adjacent indices $k,k+1$: handles only of index $k$ and $k+1$ remain, with the same number $r$ of each, and the relative handle complex is $0\to\mathbb Z^r\to\mathbb Z^r\to0$ with differential an isomorphism because the homology $H_*(W,M_0;\mathbb Z)$ vanishes by [F2]. [F2, F4, step 2.1]

4.1 By [F5] the middle-handle intersection matrix $M$ of this presentation is invertible over $\mathbb Z$, and handle slides, renumbering and reorientation carry it to the identity $I_r$ without changing $W$ relative to $M_0$; by [F6] the Whitney trick then upgrades the algebraic identity to the geometric single-point configuration, in which each $(k+1)$-handle meets the belt sphere of exactly one $k$-handle once and is disjoint from the others, and the resulting pairs are deleted one after another by handle cancellation. [F5, F6, step 3.1]

5.1 When all pairs have been cancelled, the presentation of $W$ relative to $M_0$ is empty, and by [F7] an empty presentation is exactly a product: there is a diffeomorphism $W\to M_0\times[0,1]$ whose restriction to $M_0$ is the identity. Hence every h-cobordism over a closed simply connected $n$-manifold with $n\ge5$ is trivial. This is the classical smooth simply connected h-cobordism theorem of Milnor, Lück and Ranicki. [F7, given, step 4.1] ∎
