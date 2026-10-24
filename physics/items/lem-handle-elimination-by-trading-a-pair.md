---
id: lem-handle-elimination-by-trading-a-pair
kind: lemma
title: 'Elimination lemma: trading a handle for a handle two indices higher'
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
- def-handle-decomposition-relative-to-the-incoming-boundary
- def-geometric-cancelling-handle-pair
- thm-handle-cancellation
- thm-creation-of-a-cancelling-handle-pair
- lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- def-attaching-a-smooth-handle-with-corner-rounding
- def-countable-choice
- lem-isotopy-extension-for-a-compact-source-with-boundary
- lem-handles-of-equal-index-can-be-attached-on-one-level
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Elimination Lemma 1.16 with its proof on printed pp. 7--9
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §8 index-lowering argument, printed pp. 93--104
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact smooth $(n+1)$-manifold with a finite index-ordered handle decomposition relative to its incoming face, all indices at least $q$, where $1\le q\le n-2$. Put $N_j=\partial_1W_j$, and let $N_q^\circ$ be the common part of $N_q$ and $N_{q+1}$ obtained by deleting the closed attaching tubes of the existing $(q+1)$-handles. Fix a $q$-handle $e$ and a framed attaching embedding $\alpha:S^q\times D^{n-q}\hookrightarrow N_q^\circ$. Suppose:

1. in $N_q$, $\alpha$ is isotopic through framed attaching embeddings to one whose core meets the belt of $e$ transversely once and misses every other $q$-handle belt;
2. in $N_{q+1}$, $\alpha$ is isotopic through framed attaching embeddings to a **standard trivial embedding**, the composite of the standard framed sphere $S^q\times D^{n-q}\hookrightarrow D^n$ with an embedded $n$-disk in $N_{q+1}$.

Then a presentation of the same $W$ relative to its incoming face is obtained by deleting $e$ and adding one $(q+2)$-handle, with every other handle index and number unchanged. The diffeomorphism transports later attaching data. Core-sphere nullhomotopy alone does not specify the second framed hypothesis.

## Facts & Assumptions

**Given:** The finite ordered presentation, $e$, the common-part attaching embedding and its two framed isotopies; countable choice.

[F1] A standard trivial attachment can be completed to a cancelling pair of adjacent indices in an outgoing disk. [[thm-creation-of-a-cancelling-handle-pair]]

[F2] Isotopies of the full attaching regions preserve the attachment and transport later data; stationary reparametrization of the time interval allows the cited endpoint convention. [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]], [[lem-isotopy-extension-for-a-compact-source-with-boundary]]

[F3] Disjoint equal-index attaching regions may be reordered. [[lem-handles-of-equal-index-can-be-attached-on-one-level]]

[F4] A consecutive adjacent-index pair with one transverse attaching/belt intersection cancels, transporting later data. [[def-geometric-cancelling-handle-pair]], [[thm-handle-cancellation]]

## Proof

**Proof technique:** direct.

1.1 Temporarily stop the presentation at $W_{q+1}$. At the standard trivial embedding of hypothesis 2 introduce a $(q+1),(q+2)$ pair by [F1]. Use that framed isotopy and [F2] to move the new lower attachment to $\alpha$ in $N_{q+1}$, carrying the new upper attachment along. Restore all higher handles by transporting their attaching data. If a stage is disconnected, perform the construction on its affected connected component and leave the others fixed. [F1, F2, given, construct]

2.1 Because the entire image of $\alpha$ lies in the common part $N_q^\circ$, the new $(q+1)$-handle can instead be attached at $N_q$, before all old $(q+1)$-handles: their disjoint attaching-region quotient is the same whichever is attached first. Move $e$ to the end of its $q$-index family by [F3]. Apply the framed isotopy of hypothesis 1 to the new upper attachment in the resulting $N_q$, carrying all later attaching data by [F2]. Now $e$ and that new $(q+1)$-handle are consecutive and meet once. [F2, F3, step 1.1, given]

3.1 Cancel this consecutive pair by [F4]. The deleted handles are $e$ and the newly introduced $(q+1)$-handle; the new $(q+2)$-handle survives, and every old higher handle is carried by the cancellation diffeomorphism. Thus the counts change exactly as asserted, relative to the incoming face. This is the two-isotopy and disjoint-reordering proof of the cited Lück Elimination Lemma, without an isotopy-to-slide decomposition premise. [F4, step 2.1] ∎
