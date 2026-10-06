---
id: thm-vanishing-torsion-implies-product-cobordism
kind: theorem
title: "Vanishing presentation-indexed torsion implies the product cobordism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 15
deps: ["def-whitehead-torsion-of-an-h-cobordism", "lem-h-cobordisms-admit-two-index-normal-form-presentations", "lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion", "lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves", "lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex", "thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary", "def-h-cobordism", "def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.4, Lemma 1.27(1) and its proof, printed pp. 19--20"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Theorem 8.33 (sufficiency), printed pp. 184--185; PDF pages 192, 193"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a nonempty connected oriented smooth
h-cobordism of dimension $n+1\ge6$ with $M_0$ closed connected oriented and let
$\pi=\pi_1(M_0)$. If a finite handle presentation $H$ of $(W,M_0)$ has
$\tau_H(W,M_0)=0$, then $W$ is diffeomorphic to $M_0\times[0,1]$ relative to
$M_0$. This applies to any finite presentation, not only one already in
two-index normal form. The orientation hypothesis is exactly the one under
which the locally proved oriented intersection-matrix route applies; no
orientation-free strengthening is claimed.

## Facts & Assumptions

**Given:** A nonempty connected oriented smooth h-cobordism $(W;M_0,M_1)$ of dimension $n+1\ge6$ with $M_0$ closed connected oriented, and a finite handle presentation $H$ of $(W,M_0)$ with $\tau_H(W,M_0)=0$.

[F1] Every finite handle presentation can be put into two-index normal form at any index $2\le q\le n-2$ for the oriented data of the statement (the hypotheses of the normal-form lemma), with handles only in degrees $q,q+1$ and invertible intersection matrix, by the elementary handle modifications of the previous lemma, which preserve the presentation-indexed torsion ([[lem-h-cobordisms-admit-two-index-normal-form-presentations]], [[lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion]], [[def-whitehead-torsion-of-an-h-cobordism]]).

[F2] In a two-index presentation at index $q$ the based relative complex is the two-term complex with differential the intersection matrix $A$, and the presentation-indexed torsion is $(-1)^q[A]$; hence a vanishing torsion class gives $[A]=0$ in $\operatorname{Wh}(\pi)$ ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-whitehead-torsion-of-an-h-cobordism]]).

[F3] A matrix with vanishing Whitehead class can be diagonalized by elementary basis changes, cancelling-pair stabilizations and unit changes, each realized geometrically by simple handle moves, and a diagonal presentation can be isotoped into cancelling position and cancelled to the empty presentation, which exhibits the product ([[lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves]], [[lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex]], [[thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary]], [[def-h-cobordism]]).

## Proof

1.1 Put the given presentation $H$ into two-index normal form at the index $q=2$, which is allowed because $2\le q\le n-2$ holds for $n\ge5$: by [F1] the resulting presentation $H'$ has handles only in degrees $2$ and $3$, with invertible intersection matrix $A$, and the elementary modifications preserve the torsion class, so $\tau_{H'}(W,M_0)=\tau_H(W,M_0)=0$. [F1, given]

2.1 By [F2] applied with $q=2$ the class of the intersection matrix satisfies $[A]=(-1)^2\tau_{H'}(W,M_0)=0$ in $\operatorname{Wh}(\pi)$. [F2, step 1.1]

3.1 By [F3] the vanishing class of $A$ allows the matrix to be diagonalized with unit diagonal entries by elementary operations and cancelling-pair stabilizations, all realized by simple handle moves, and the resulting diagonal presentation can be isotoped so that each $(q+1)$-handle attaches in cancelling position to its $q$-handle, after which the pairs are cancelled; the final presentation has no handles. [F3, step 2.1]

4.1 A presentation of $(W,M_0)$ with no handles shows by [F3] that $W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$. The argument applies to the given arbitrary finite presentation, since the passage to normal form used only the allowed modifications. [F3, step 3.1] ∎
