---
id: lem-middle-handle-pairs-with-one-geometric-intersection-cancel
kind: lemma
title: Middle-handle pairs with one geometric intersection cancel
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 17
deps:
- lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically
- thm-handle-cancellation
- def-geometric-cancelling-handle-pair
- def-handle-decomposition-relative-to-the-incoming-boundary
- def-countable-choice
- prop-relative-handle-chain-complex-of-a-cobordism
- lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
- lem-handles-of-equal-index-can-be-attached-on-one-level
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
    locator: Introduction and §§1--9, printed pp. 1--113; §6, printed pp. 67--78
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Cancellation Lemma 1.12
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a
connected simply connected h-cobordism with $\dim W=n+1\ge6$ presented relative
to $M_0$ with handles only in indices $k,k+1$, $2\le k\le n-2$, and suppose the
attaching sphere of each $(k+1)$-handle meets the belt sphere of exactly one
$k$-handle in a single transverse point and is disjoint from the other belt
spheres (the configuration produced by the geometric realisation lemma
([[lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically]])).
Then $W$ admits a handle decomposition relative to $M_0$ with no handles at all:
each pair consisting of a $k$-handle and the $(k+1)$-handle meeting its belt
sphere once is geometrically cancelling
([[def-geometric-cancelling-handle-pair]]), and the pairs may be deleted one
after another, the attaching data of the remaining handles being transported by
the relative diffeomorphism.

## Facts & Assumptions

**Given:** A connected simply connected h-cobordism with $\dim W=n+1\ge6$, presented with handles only in indices $k,k+1$, $2\le k\le n-2$, with the single-point/disjoint configuration of the realisation lemma; $\mathrm{AC}_\omega$.

[F1] A consecutive pair is geometrically cancelling when the attaching sphere of the upper handle meets the belt sphere of the lower one transversely in exactly one point ([[def-geometric-cancelling-handle-pair]]).

[F2] A geometrically cancelling consecutive pair may be deleted by a diffeomorphism relative to the incoming boundary that acts only in a collar of the affected boundary disc and in the two handles, so that the attaching data of all later handles are carried along ([[thm-handle-cancellation]]).

[F3] A handle decomposition relative to $M_0$ with empty handle list presents the collar $M_0\times[0,\varepsilon]$, and a presentation with no handles left is the empty presentation ([[def-handle-decomposition-relative-to-the-incoming-boundary]]).

## Proof

**Proof technique:** direct.

1.1 The two-index relative chain complex is acyclic by [[prop-relative-handle-chain-complex-of-a-cobordism]] and [[lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends]], so its differential is an isomorphism. Each upper core maps to $\pm$ one lower basis generator by the single-point hypothesis. Surjectivity ensures every lower generator occurs and injectivity ensures none occurs twice. Hence the intersection configuration gives a bijective pairing of the two finite handle families. [F1, given, algebra]

2.1 Select a matched pair. Reorder the lower handles to put its lower member last and the upper handles to put its upper member first, using [[lem-handles-of-equal-index-can-be-attached-on-one-level]]. They are now consecutive, so [F2] cancels them. Its cancellation model can be supported off the other belt spheres: the selected attaching sphere misses those belts, and a small neighborhood of its attaching data and the chosen lower handle avoids them. Transport the other upper attaching embeddings by the cancellation diffeomorphism; their intersections with the untouched belts stay as prescribed. [F1, F2, step 1.1, construct]

3.1 Repeat with the remaining finite matched list. Each cancellation removes two handles and preserves the manifold relative to $M_0$. The empty case requires no operation. When no pair remains, [F3] gives the empty presentation, diffeomorphic to $M_0\times[0,1]$ by rescaling its collar coordinate. [F2, F3, step 2.1] ∎
