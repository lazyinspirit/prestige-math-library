---
page: the-smooth-h-cobordism-theorem
title: The Smooth H Cobordism Theorem
status: draft
requires:
  - handle-decompositions-duality-and-rearrangement
  - handle-cancellation-slides-and-elementary-moves
  - morse-inequalities-and-the-handle-chain-complex
  - oriented-and-mod-two-intersection-numbers
  - smooth-surgery-traces-and-handle-trading
  - the-whitney-trick-and-surgery-below-the-middle-dimension
  - relative-homology-excision-and-mayer-vietoris
  - cw-complexes-and-cellular-homology
  - orientations-poincare-lefschetz-and-alexander-duality
  - higher-homotopy-groups-and-cofiber-sequences
  - hurewicz-whitehead-freudenthal-and-cw-approximation
  - the-fundamental-group
items:
  - def-h-cobordism
  - lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
  - prop-h-cobordisms-admit-adapted-ordered-handle-decompositions
  - prop-relative-handle-chain-complex-of-a-cobordism
  - lem-handle-elimination-by-trading-a-pair
  - lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism
  - lem-duality-eliminates-top-and-cotop-handles
  - lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
  - lem-homology-lemma-realizes-handle-bases-by-isotopy
  - lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation
  - lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices
  - def-middle-handle-intersection-matrix-of-an-h-cobordism
  - lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular
  - lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity
  - lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically
  - lem-middle-handle-pairs-with-one-geometric-intersection-cancel
  - thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary
  - thm-smooth-simply-connected-h-cobordism-theorem
  - cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic
  - cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold
  - rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four
examples: []
---

This page develops the smooth h-cobordism theorem for boundary dimension at
least five, from the symmetric definition of an h-cobordism through the
handle-theoretic normal form to the triviality conclusion and its
classification and Poincaré consequences. The proof normalises an adapted Morse
function, eliminates the low and dual high indices, concentrates the remaining
presentation in two adjacent middle indices, reads the middle-handle
intersection matrix off the relative handle chain complex, diagonalises it by
handle slides, renumberings and reorientations, and realises the diagonal form
geometrically with the Whitney trick, after which the cancelling pairs are deleted and the empty presentation
is integrated to the product. The dimension hypothesis enters at the
elimination of one-handles and in the Whitney step, and simple connectivity is
used throughout the cancellation, diagonalisation and realisation; all
manifolds are compact and collared, and the choice principle used is countable
choice $\mathrm{AC}_\omega$ through the adapted-field, transversality,
isotopy-extension and collar suppliers. The punctured-contractible-manifold
corollary explicitly assumes full AC for the currently available duality,
universal-coefficient and Hurewicz suppliers.
