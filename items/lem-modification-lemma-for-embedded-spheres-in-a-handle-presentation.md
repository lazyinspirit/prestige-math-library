---
id: lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation
kind: lemma
title: 'Modification lemma: prescribed class changes by isotopy of an embedded boundary sphere'
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
- prop-relative-handle-chain-complex-of-a-cobordism
- lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers
- lem-embedded-bands-joining-two-framed-spheres-exist
- def-handle-slide-of-one-k-handle-over-another
- lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
- def-smooth-embedding
- def-countable-choice
- lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors
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
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Modification Lemma 1.23, printed p. 16
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170)
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $W$ be a compact
smooth $(n+1)$-manifold with a finite handle decomposition relative to
$\partial_0W$ in which all handles have index $\ge q$, where $2\le q\le n-2$,
and suppose the middle boundary $N_q=\partial_1W_q$ is connected. Let
$f:S^q\hookrightarrow\partial_1^\circ W_q$ be an embedded sphere and let
$x_1,\dots,x_r\in\mathbb Z$, where $r$ is the number of $(q+1)$-handles. Then
there is an embedded sphere $g:S^q\hookrightarrow\partial_1^\circ W_q$
([[def-smooth-embedding]]), isotopic to $f$ in $\partial_1W_{q+1}$, whose class
in $C_q$ satisfies
$[g]=[f]+\sum_j x_j\,\partial_{q+1}[\varphi_j]$, where the $[\varphi_j]$ are the
core classes of the $(q+1)$-handles and $\partial_{q+1}$ is the handle-chain
differential of the relative complex
([[prop-relative-handle-chain-complex-of-a-cobordism]]). Thus an arbitrary
integer combination of boundary classes of higher handles can be added to the
class of an embedded sphere by an isotopy that becomes trivial one level higher.

## Facts & Assumptions

**Given:** A compact smooth $(n+1)$-manifold with all handles of index $\ge q$, $2\le q\le n-2$, connected middle boundary $N_q$, an embedded sphere $f:S^q\hookrightarrow\partial_1^\circ W_q$, and integers $x_1,\dots,x_r$ indexed by the $(q+1)$-handles; $\mathrm{AC}_\omega$.

[F1] The class in $C_q$ attached to an embedded sphere is computed by the attaching-belt coefficients, and the boundary class $\partial_{q+1}[\varphi]$ of a $(q+1)$-handle is represented in the middle level by the attaching sphere of that handle up to sign ([[lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers]], [[prop-relative-handle-chain-complex-of-a-cobordism]]).

[F2] Disjoint $q$-spheres in a connected $n$-manifold admit an embedded band when $q\le n-2$; only codimension at least two is required. Its construction can take place in a chosen connected open complement and can match local framing germs. [[lem-embedded-bands-joining-two-framed-spheres-exist]]

[F3] A $(q+1)$-handle replaces its attaching tube by $D^{q+1}\times S^{n-q-1}$. [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]

## Proof

**Proof technique:** direct.

1.1 Fix a $(q+1)$-handle $\varphi_j$. Choose a parallel copy $P_j$ of its attaching sphere just outside its closed attaching tube, using the extension over a neighborhood of the normal disk factor. It lies in $N_q^\circ$, the open complement of all closed upper attaching tubes. In $N_{q+1}$ it bounds the outgoing disk $D^{q+1}\times\{z\}$, $z\in S^{n-q-1}$, together with the short annular collar from its boundary to $P_j$. This is an embedded disk with interior in that handle's outgoing piece, disjoint from any sphere in the common part. Its normal disk coordinates give the standard bounding-disk framing. In $C_q$, $[P_j]=\partial_{q+1}[\varphi_j]$ with compatible orientations, by [F1]. [F1, F3, given, construct]

2.1 $N_q^\circ$ is connected: the upper attaching cores have codimension $n-q\ge2$, so paths can be rerouted in finitely many product charts off the cores, and radial retraction in each punctured tube pushes them outside the closed smaller tubes. Apply [F2] within this common part to band-sum $f$ with $P_j$. The band interior can avoid both spheres and all other attaching tubes. The resulting $q$-sphere $g$ is embedded and remains in $N_q^\circ$. An oriented pair-of-pants bordism in a thin neighborhood of the band has boundary $g-f-P_j$, so in $C_q$ its fundamental chain gives $[g]=[f]+[P_j]$. Choose the orientation of the added parallel copy, rather than reverse $f$, to obtain either sign. [F1, F2, step 1.1, construct, algebra]

3.1 In $N_{q+1}$, slide the added lobe back along the band and across the embedded disk of step 1.1. The disk interior is in the new handle's outgoing region, whereas $f$ and the band are in the common part. A thin product neighborhood of their union therefore gives the usual embedded isotopy from the band-sum to $f$, fixed outside that neighborhood. If $f$ has a normal frame, use the bounding-disk frame for $P_j$ and the matching band frame; this isotopy transports the full frame and gives a framed isotopy as well. Thus no implication from a vanishing homology class to embedding triviality is used. [F2, F3, step 1.1, step 2.1, construct]

4.1 Repeat with fresh disjoint parallel copies $|x_j|$ times, using the sign of $x_j$, and then over the finite upper-handle list. At every iteration the new sphere is in the common part and is isotopic one level higher to the preceding sphere. The additive computation gives $[g]=[f]+\sum_jx_j\partial_{q+1}[\varphi_j]$. In particular, a standard trivial framed starting sphere yields a sphere framed-isotopic to it in $N_{q+1}$. This proves the assertion, including zero coefficients and an empty upper-handle list. [step 2.1, step 3.1, algebra] ∎
