---
id: lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle
kind: lemma
title: A null-homotopic closed transversal yields a vanishing cycle
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-vanishing-cycle-of-a-codimension-one-foliation
- lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary
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
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.6, printed p. 167
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §6, printed pp. 16-19
  - title: André Haefliger, Variétés feuilletées, Annali della Scuola Normale Superiore di Pisa, 3e série, 16 (1962),
      no. 4, 367–397 (complete Numdam scan)
    url: https://www.numdam.org/item/ASNSP_1962_3_16_4_367_0.pdf
    locator: §4.2, Proposition 4.2, printed pp. 390–392; the scan was read in full
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented codimension-
one foliation of a closed oriented $3$-manifold $M$ and let $\gamma:S^1\to M$ be a
closed transversal that is null-homotopic in $M$. Then $F$ admits a vanishing cycle.

## Facts & Assumptions
**Given:** Assume $\mathrm{AC}_\omega$. A $C^2$ cooriented codimension-one foliation $F$ of a closed oriented $3$-manifold $M$ and a closed transversal $\gamma:S^1\to M$ that is null-homotopic in $M$.

[F1] A vanishing cycle supported on a leaf $L_1$ is a jointly $C^2$ family of leafwise loops $\sigma_t$ with $[\sigma_1]$ nonzero in $\pi_1(L_1)$, each $\sigma_t$ null-homotopic in $L_t$ for $t<1$, and transverse trace. ([[def-vanishing-cycle-of-a-codimension-one-foliation]]).



[F2] Under $\mathrm{AC}_\omega$, the embedding and neighborhood retraction constructed in [[thm-relative-whitney-approximation-for-manifold-valued-maps]], Facts L1 and Proof 1.1, can be fixed for the smooth ambient target. [[thm-whitney-approximation-for-euclidean-valued-maps]] approximates a continuous Euclidean map uniformly on a compact disk. [[lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative]] supplies regular C² representatives of intrinsic leaf-loop classes.

[F3] The generic-position supplier assumes a C² defining form, but a C² atlas supplies only C¹ forms $dz$. Its proof still applies: singularities are critical points of $u=z\circ h$; collar adjustment uses a smooth positive transverse flow and continuity; interior perturbations are $u\mapsto u+\rho\,a\cdot x$. The gradient is C¹, so Sard applies in equal source and target dimension two. Compactness preserves earlier nondegenerate cores. No operation differentiates the defining form twice. The cited proof therefore supplies the required genericity from a C² atlas and C¹ defining form.

## Proof

**Proof technique:** direct.

1.1 The nullhomotopy supplies a continuous filling of the C² transversal $\gamma$. Compress it into a smaller concentric disk and set it equal to $\gamma(\theta)$ on an outer radial collar, extended slightly beyond the boundary. Fix the embedding and neighborhood retraction of F2, approximate the embedded filling smoothly, and blend with the original C² map using a cutoff supported in that collar and equal to one near the boundary. A small uniform error keeps the blend inside the retraction neighborhood. Retraction gives a C² filling with exactly the prescribed boundary and collar. Its characteristic tangential derivative is nonzero there because $\gamma$ is transverse. [F2, given, construct]

2.1 Apply the finite gradient perturbations of F3, the proof of [[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]], fixing the already regular transverse collar. This gives a relative generic C² characteristic disk without assuming a C² defining form. [F3, step 1.1]

3.1 Applying the transverse-boundary alternative of the finite characteristic-disk supplier ([[lem-characteristic-disk-with-essential-boundary-data-produces-a-vanishing-cycle]]) produces a vanishing cycle in the sense of [F1] on the side approached by the family. [F1, step 2.1]

4.1 Thus $F$ admits a vanishing cycle; the richer Haefliger original-disk minimal-cycle claim is retained separately and is not used as a prerequisite, and only the standing countable choice is invoked. [step 3.1] ∎
