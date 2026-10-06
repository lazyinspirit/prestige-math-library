---
id: lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism
kind: lemma
title: Zero- and one-handles are eliminated in a simply connected h-cobordism
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 10
deps:
- def-h-cobordism
- prop-h-cobordisms-admit-adapted-ordered-handle-decompositions
- lem-handle-elimination-by-trading-a-pair
- prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- lem-a-handle-decomposition-gives-a-relative-cw-complex
- lem-high-relative-cells-do-not-change-lower-homotopy
- cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- def-attaching-a-smooth-handle-with-corner-rounding
- def-simply-connected
- def-countable-choice
- thm-handle-duality-from-negating-a-morse-function
- thm-seifert-van-kampen
- thm-relative-whitney-approximation-for-manifold-valued-maps
- thm-parametric-transversality
- thm-transverse-preimage-theorem
- lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors
- lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
- thm-weak-whitney-proper-embedding-theorem
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
    locator: Introduction and §§1--9, printed pp. 1--113; §8 Theorem 8.1, printed pp. 93--104
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Lemma 1.21, printed p. 13
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be an
h-cobordism with $\dim W=n+1$, $n\ge5$, whose faces $M_0,M_1$ are closed simply
connected $n$-manifolds and whose total space $W$ is connected
([[def-h-cobordism]], [[def-simply-connected]]). Then $W$ admits a handle
decomposition relative to $M_0$ with no handles of index $0$ or $1$;
equivalently, after self-indexing, every handle has index at least $2$. The
elimination proceeds one handle at a time: each $1$-handle can be traded for a
$3$-handle without changing $W$ relative to $M_0$. The dimension hypothesis
$n\ge5$ enters here for the first time, in the construction of the embedded
null-homotopy disk.

## Facts & Assumptions

**Given:** The h-cobordism of dimension $n+1$, $n\ge5$, its connected simply connected faces, and countable choice.

[F1] An adapted index-ordered presentation exists; zero-handles can be removed relative to a nonempty connected incoming face. [[prop-h-cobordisms-admit-adapted-ordered-handle-decompositions]], [[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]]

[F2] A trace has a relative cell model; handles of index at least three change no fundamental group. Reading a $j$-handle backwards gives index $n+1-j$. [[lem-a-handle-decomposition-gives-a-relative-cw-complex]], [[lem-high-relative-cells-do-not-change-lower-homotopy]], [[thm-seifert-van-kampen]], [[thm-handle-duality-from-negating-a-morse-function]]

[F3] Smooth relative approximation and relative embedding of a disk are available when its target has dimension at least five. Transversality moves a curve off finitely many curves in dimension at least five. [[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[lem-metastable-embedding-for-maps-from-a-compact-manifold]], [[thm-parametric-transversality]], [[thm-transverse-preimage-theorem]]

[F4] A finite Euclidean embedding and the radial projection-transport formula trivialize the normal bundle along a disk ([[thm-weak-whitney-proper-embedding-theorem]], [[lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected]], proof step 1.2). Local tube charts extend a disk’s normal data; a handle's outgoing piece and belt have the disk-product form. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]

[F5] The elimination lemma trades one $1$-handle for one $3$-handle from a common-part framed circle which is standard trivial after the $2$-handles. [[lem-handle-elimination-by-trading-a-pair]]

## Proof

**Proof technique:** direct.

1.1 By [F1] choose an ordered presentation without $0$-handles. Write $T_j=W_j$ for the trace through index $j$ and $N_j=\partial_1T_j$. The initial outgoing level is $M_0$. Deleting the finitely many $1$-handle attaching disks leaves it connected: paths may be rerouted around each disk through its connected boundary sphere, since $n\ge5$. [F1, given, construct]

2.1 In the outgoing piece of a selected $1$-handle $e$, take $D^1\times\{x\}$ with $x\in S^{n-1}$. Join its endpoints by an embedded arc in the punctured $M_0$ and smooth the two corners; the arc can be chosen by smoothing a path and applying the relative curve embedding case of [F3]. The resulting circle $\gamma\subset N_1$ meets the belt of $e$ once at the midpoint of that outgoing core arc, and misses the other $1$-handle belts. Perturb the old $2$-handle core circles to miss $\gamma$: $1+1<n$. Shrink their normal tubes, so $\gamma$ and a small neighborhood lie in the common unchanged part of $N_1$ and $N_2$. These attaching isotopies transport the later handles. [F3, F4, step 1.1, construct]

3.1 $\gamma$ is nullhomotopic in $N_2$. Indeed $W$ is simply connected by its incoming homotopy equivalence. The remaining forward handles after $T_2$ have indices at least three, so $\pi_1(T_2)\to\pi_1(W)$ is an isomorphism. The reversed presentation of $T_2$ relative to $N_2$ has indices $n-1,n$, both at least four, so $\pi_1(N_2)\to\pi_1(T_2)$ is an isomorphism as well. These applications concern the correct forward and reverse traces; no claim that index-three cells preserve $\pi_2$ is needed. [F2, step 2.1, given]

4.1 A continuous filling disk can be made smooth relative to $\gamma$: insert the smooth boundary loop on a radial collar, extend that collar slightly past the disk boundary, and apply relative approximation on this extended source. Then use [F3] to embed the disk relative to its boundary, since $5\le n$. Its normal bundle is trivial: in a finite Euclidean embedding, radial transport of its smooth orthogonal projection produces a frame over the contractible disk. Append the disk's outward boundary-normal line to that frame. For the tube near the disk boundary, extend its embedding slightly in the outward boundary-normal direction. The local inverse-function tube construction in [F4], followed by compactness of the disk and separation of distinct zero-section points, gives one sufficiently small embedded tube along the full disk, including its boundary. This does not require the closed boundaryless-submanifold hypothesis of the global tubular theorem. That tube gives the standard framed circle $S^1\times D^{n-1}$ along $\gamma$ in $N_2$. In tubular disk coordinates radial contraction into a small interior disk exhibits its standard triviality by a framed isotopy. Shrink its circle tube to remain in the common part of $N_1,N_2$, and read that same framed circle as an attachment in $N_1$. No disk avoidance of full-dimensional higher attaching regions is asserted or needed. [F3, F4, step 2.1, step 3.1, construct]

5.1 This framed circle satisfies both hypotheses of [F5], so trade $e$ for a $3$-handle. Repeating finitely removes all $1$-handles. The procedure removes only $0$- and $1$-handles and introduces only $3$-handles, carrying all other data. Index ordering can be restored by [F1]. Hence every remaining index is at least two, and an existing upper bound of at least three is preserved. The sole disk-embedding restriction is $n\ge5$. [F1, F5, step 4.1] ∎
