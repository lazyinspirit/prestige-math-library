---
id: thm-smooth-s-cobordism-theorem
kind: theorem
title: "The smooth s-cobordism theorem: a vanishing presentation implies a product"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 16
deps: [def-whitehead-torsion-of-an-h-cobordism, def-h-cobordism, lem-product-h-cobordisms-have-zero-whitehead-torsion, thm-vanishing-torsion-implies-product-cobordism, lem-h-cobordisms-admit-two-index-normal-form-presentations, def-based-handle-chain-complex-over-the-fundamental-group-ring, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, def-countable-choice]
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
      locator: "Chapter 1, Theorem 1.1(1), printed p. 1; Chapter 2 §2.2, equation (2.14), printed p. 32"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Theorem 8.33, printed pp. 184--185; PDF pages 192, 193"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a nonempty connected oriented smooth
h-cobordism of dimension $n+1\ge6$, with $M_0$ a closed connected oriented
smooth $n$-manifold and $\pi=\pi_1(M_0)$. Then $W$ is diffeomorphic to
$M_0\times[0,1]$ relative to
$M_0$ if and only if there exists a finite handle presentation $H$ of
$(W,M_0)$ with $\tau_H(W,M_0)=0$. The forward direction uses the empty
height-function presentation of the product; the reverse direction is the
vanishing-torsion sufficiency theorem. The class is indexed by its
presentation, and this equivalence makes no claim that different presentations
have equal torsion. The dimension hypothesis is $n\ge5$ (equivalently
$\dim W\ge6$); nothing is asserted in boundary dimension four, and no
orientation-free strengthening is claimed.

## Facts & Assumptions

**Given:** A nonempty connected oriented smooth h-cobordism $(W;M_0,M_1)$ of dimension $n+1\ge6$ with $M_0$ closed connected oriented and $\pi=\pi_1(M_0)$.

[F1] If $W$ is a product $M_0\times[0,1]$, the height function presents it relative to $M_0\times\{0\}$ with no handles, and the based handle complex is the zero complex, so its presentation-indexed torsion vanishes ([[lem-product-h-cobordisms-have-zero-whitehead-torsion]], [[def-whitehead-torsion-of-an-h-cobordism]]).

[F2] Conversely, if some finite handle presentation $H$ of $(W,M_0)$ has $\tau_H(W,M_0)=0$, then $W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$ by the vanishing-torsion sufficiency theorem ([[thm-vanishing-torsion-implies-product-cobordism]], [[lem-h-cobordisms-admit-two-index-normal-form-presentations]], [[def-countable-choice]]).

[F3] The presentation-indexed torsion is an element of the Whitehead group $\operatorname{Wh}(\pi)$ attached to the chosen presentation, and no equality of classes from different presentations is asserted anywhere ([[def-whitehead-torsion-of-an-h-cobordism]], [[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[def-h-cobordism]]).

## Proof

1.1 Assume first that $W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$. Then the product's height-function presentation $H_0$ has no handles, and by [F1] its based handle complex is the zero complex with vanishing contraction torsion, so $\tau_{H_0}(W,M_0)=0$; this exhibits the required presentation and proves the forward implication. [F1, given]

1.2 Assume conversely that some finite presentation $H$ has $\tau_H(W,M_0)=0$. Then by [F2] the h-cobordism is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$, which proves the reverse implication. [F2, given]

2.1 Steps 1.1 and 1.2 prove the two implications of the stated equivalence; by [F3] each side refers to a presentation-indexed class, so the theorem neither asserts nor uses equality of classes attached to different presentations, and the dimension hypothesis $n+1\ge6$, i.e. $n\ge5$, is the one under which both directions were established. [F3, step 1.1, step 1.2] ∎
