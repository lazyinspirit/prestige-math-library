---
id: lem-a-compressible-leaf-yields-a-vanishing-cycle
kind: lemma
title: A compressible leaf yields a vanishing cycle
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-vanishing-cycle-of-a-codimension-one-foliation
- lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary
- lem-characteristic-disk-center-saddle-index-count
- lem-characteristic-disk-with-essential-boundary-data-produces-a-vanishing-cycle
- def-countable-choice-principle-for-foliation-pair
- thm-relative-whitney-approximation-for-manifold-valued-maps
- thm-whitney-approximation-for-euclidean-valued-maps
- lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 15
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §6, printed pp. 16-19
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §3.2.3, printed pp. 51-53
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, class 11, author-hosted lecture notes
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Class 11, PDF pp. 1–5; full author-hosted notes read. The center/saddle smoothing on PDF p. 3 remains
      pictorial and is treated as an outline, not a complete local proof.
  - title: Alberto Candel and Lawrence Conlon, Foliations II, Graduate Studies in Mathematics 60, American Mathematical
      Society (2003)
    url: https://pubs.ams.org/ebooks/gsm/060/
    locator: §9.2, especially Lemma 9.2.4 and Proposition 9.2.5; only limited-preview locators are available, not
      a full proof text
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented codimension-
one foliation of a closed oriented $3$-manifold $M$ and let $L$ be a leaf such that the
inclusion-induced homomorphism $\pi_1(L)\to\pi_1(M)$ is not injective. Then $F$ admits a
vanishing cycle.

## Facts & Assumptions
**Given:** Assume $\mathrm{AC}_\omega$. A $C^2$ cooriented codimension-one foliation $F$ of a closed oriented $3$-manifold $M$ and a leaf $L$ whose inclusion-induced homomorphism $\pi_1(L)\to\pi_1(M)$ is not injective.

[F1] A vanishing cycle supported on a leaf $L_1$ is a jointly $C^2$ family of loops $\sigma_t$ lying in leaves $L_t$, with $[\sigma_1]$ nonzero in $\pi_1(L_1)$, each $\sigma_t$ null-homotopic in $L_t$ for $t<1$, and transverse trace, and it determines a nonzero class in the appropriate $\Pi^j_1$. ([[def-vanishing-cycle-of-a-codimension-one-foliation]]).



[F2] Under $\mathrm{AC}_\omega$, the embedding and neighborhood retraction constructed in [[thm-relative-whitney-approximation-for-manifold-valued-maps]], Facts L1 and Proof 1.1, can be fixed for the smooth ambient target. [[thm-whitney-approximation-for-euclidean-valued-maps]] approximates a continuous Euclidean map uniformly on a compact disk. [[lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative]] supplies regular C² representatives of intrinsic leaf-loop classes.

[F3] The generic-position supplier assumes a C² defining form, but a C² atlas supplies only C¹ forms $dz$. Its proof still applies: singularities are critical points of $u=z\circ h$; collar adjustment uses a smooth positive transverse flow and continuity; interior perturbations are $u\mapsto u+\rho\,a\cdot x$. The gradient is C¹, so Sard applies in equal source and target dimension two. Compactness preserves earlier nondegenerate cores. No operation differentiates the defining form twice. The cited proof therefore supplies the required genericity from a C² atlas and C¹ defining form.

## Proof

**Proof technique:** direct.

1.1 Noninjectivity gives an essential kernel class. F2 represents it by a regular C² leaf loop $\gamma$, with a continuous ambient filling. Compress that filling into a smaller concentric disk and set it equal to $\gamma(\theta)$ on an outer radial collar, extended slightly beyond the disk. Fix the target embedding and smooth neighborhood retraction of F2. Approximate the continuous embedded filling by a smooth Euclidean map; blend it with the original C² collar map using a cutoff supported in that collar and equal to one near the boundary. Sufficiently small uniform error keeps the blend in the retraction neighborhood. Retraction gives a C² ambient disk with boundary exactly $\gamma$, establishing the differentiable filling from the continuous nullhomotopy. [F2, given, construct]

2.1 Use the leafwise boundary adjustment and finite gradient perturbations of F3, the proof of [[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]. They keep the boundary loop fixed, make its collar characteristic-regular and give finitely many nondegenerate interior centers and saddles. This verifies the C²-atlas hypotheses without assuming a C² defining form. [F3, step 1.1]

3.1 The essential-leafwise-boundary alternative of the finite characteristic-disk supplier ([[lem-characteristic-disk-with-essential-boundary-data-produces-a-vanishing-cycle]]) then produces a vanishing cycle in the sense of [F1]; the spanning disk is used only as a characteristic map and is not claimed to be a leafwise cap. [F1, step 2.1]

4.1 Hence a foliation satisfying the stated hypotheses admits a vanishing cycle, and only the standing countable choice and the two cited disk suppliers were used. [step 3.1] ∎
