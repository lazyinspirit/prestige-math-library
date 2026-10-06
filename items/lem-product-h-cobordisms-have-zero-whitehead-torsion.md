---
id: lem-product-h-cobordisms-have-zero-whitehead-torsion
kind: lemma
title: "Product h-cobordisms have zero Whitehead torsion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 11
deps: ["def-whitehead-torsion-of-an-h-cobordism", "def-h-cobordism", "lem-product-cobordisms-have-critical-point-free-presentations", "thm-morse-functions-and-handle-decompositions-correspond", "def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-finite-based-free-chain-complex-and-its-contraction-torsion", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group", "thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary", "def-countable-choice"]
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
      locator: "Chapter 1 §1.1, printed pp. 3--5, and Chapter 2 §2.2, printed p. 30"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Proposition 8.21, printed p. 179 (PDF 187)"
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M_0$ be a nonempty closed connected smooth manifold and let $W=M_0\times[0,1]$ be
the trivial h-cobordism. Then with the handle presentation relative to
$M_0\times\{0\}$ given by the height function, which has no handles, the based
handle complex is the zero complex, its unique contraction is zero, and
therefore $\tau_{H_0}(M_0\times[0,1],M_0\times\{0\})=0$ in
$\operatorname{Wh}(\pi_1(M_0))$. This is the zero-torsion model presentation
used in the criterion.

## Facts & Assumptions

**Given:** A nonempty closed connected smooth manifold $M_0$ and the product cobordism $W=M_0\times[0,1]$ with its height-function presentation $H_0$ relative to $M_0\times\{0\}$.

[F1] The height function of the product is a Morse function with no critical points, and it presents the product relative to $M_0\times\{0\}$ with no handles; the correspondence between Morse functions and handle decompositions turns the absence of critical points into the empty presentation ([[lem-product-cobordisms-have-critical-point-free-presentations]], [[thm-morse-functions-and-handle-decompositions-correspond]]).

[F2] The based handle complex of a presentation with no handles is the zero complex, since it has no basis vectors in any degree, and its unique contraction is the zero map with contraction torsion the class of the empty matrix, which is the zero element of the Whitehead group ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-finite-based-free-chain-complex-and-its-contraction-torsion]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F3] The presentation-indexed Whitehead torsion of an h-cobordism is the contraction torsion of its based handle complex for the chosen presentation, an element of $\operatorname{Wh}(\pi_1(M_0))$ ([[def-whitehead-torsion-of-an-h-cobordism]], [[def-h-cobordism]]).

## Proof

1.1 By [F1] the height function of the product is a critical-point-free Morse function and presents $M_0\times[0,1]$ relative to $M_0\times\{0\}$ with the empty handle list; the relative CW pair induced by this presentation is $(M_0,M_0)$ with no relative cells. [F1, given]

2.1 By [F2] the based handle complex of the empty presentation is the zero complex in every degree, because there are no handles to contribute basis vectors; its unique chain contraction is the zero map, and the parity map of the zero complex is the empty matrix, whose class is $0$ in $\tilde K_1(\mathbb Z[\pi_1(M_0)])$ and hence $0$ in the Whitehead group. [F2, step 1.1]

3.1 By [F3] the presentation-indexed torsion $\tau_{H_0}(M_0\times[0,1],M_0\times\{0\})$ is this contraction torsion, so it equals $0$ in $\operatorname{Wh}(\pi_1(M_0))$. [F2, F3, step 2.1] ∎
