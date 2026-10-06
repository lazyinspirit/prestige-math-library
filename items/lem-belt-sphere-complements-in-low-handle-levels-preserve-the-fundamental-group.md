---
id: lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
kind: lemma
title: Belt-sphere complements in low handle levels preserve the fundamental group
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
- def-countable-choice
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors
- thm-handle-duality-from-negating-a-morse-function
- thm-seifert-van-kampen
- thm-parametric-transversality
- thm-transverse-preimage-theorem
- def-h-cobordism
- thm-relative-whitney-approximation-for-manifold-valued-maps
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- thm-whitney-trick-in-the-two-dimensional-borderline-case
- thm-whitney-move-removes-a-cancelling-pair-of-intersections
- lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem, proof of Theorem 6.4
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: 'Printed pp.71–76: trajectories identify the belt-sphere complement with the attaching-sphere complement;
      the fundamental-group condition in Theorem 6.6.'
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory, Lemmas 1.21–1.24
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: 'Printed pp.13–18: h-cobordism incoming fundamental groups, homology lemma and low-index elimination;
      finite-complement proof supplied here.'
dependency_level: 6
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ have a finite handle decomposition relative to a closed connected incoming $n$-manifold $M$, $n\ge5$, with all handles of index at least $q$, $2\le q\le n-2$. Let $T=W_q$ be the trace through its $q$-handles, $N=\partial_1T$, and let $B_1,\ldots,B_c\subset N$ be their belt spheres. If $q=2$, assume $\pi_1(M)\to\pi_1(T)$ is injective. Then $N\setminus\bigcup_jB_j\to N$ induces an isomorphism of fundamental groups, as does the complement of any subfamily. The $q=2$ assumption holds for an h-cobordism and for a presentation whose $2$-handle attaching circles are nullhomotopic in $M$.

For $q=2$, let an embedded $2$-sphere $A\subset N$ and one belt sphere have an opposite-sign pair with a nullhomotopic Whitney circle avoiding every other belt. Then that pair admits a clean framed Whitney disk whose interior avoids $A$ and all belt spheres, and the associated isotopy of $A$ removes the pair without changing its intersections with any other belt. A finite collection of additional embedded $2$-spheres disjoint from the two boundary arcs may also be avoided by the disk and its tube. The assertion is about complements of the actual handle belt spheres; it does not assert complement injection for an arbitrary codimension-two embedded sphere.

## Facts & Assumptions

[F1] A $q$-handle has outgoing piece $D^q\times S^{n-q}$ with belt $\{0\}\times S^{n-q}$, replacing its incoming $S^{q-1}\times D^{n-q+1}$. [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]], [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]

[F2] Reading a handle in an $(n+1)$-manifold backwards replaces its index $q$ by $n+1-q$. [[thm-handle-duality-from-negating-a-morse-function]]

[F3] Van Kampen computes the fundamental group of glued connected pieces. A handle of index at least three has simply connected attaching region and handle body, so it changes no fundamental group. [[thm-seifert-van-kampen]]

[F4] Relative smoothing and transversality can move loops and disks away from a finite collection of closed submanifolds when their expected intersection dimensions are negative. [[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[thm-parametric-transversality]], [[thm-transverse-preimage-theorem]]

[F5] An h-cobordism has boundary inclusions that are homotopy equivalences. [[def-h-cobordism]]

[F6] In dimension at least five a disk can be embedded relative to a prescribed embedded collar. The two-dimensional Whitney construction uses complement injection to fill its shifted boundary loop, then extends a partial frame and chooses its orthogonal complement. [[lem-metastable-embedding-for-maps-from-a-compact-manifold]], [[thm-whitney-trick-in-the-two-dimensional-borderline-case]], [[lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected]]

[F7] A clean admissibly framed disk gives a compactly supported auxiliary ambient isotopy applied to one selected sheet while its comparison sheet stays fixed. [[thm-whitney-move-removes-a-cancelling-pair-of-intersections]]

## Proof

**Given:** The finite handle data and incoming connected manifold, countable choice, and for $q=2$ the stated incoming fundamental-group injection.

1.1 Put $Q=M\setminus\bigcup_j\operatorname{int}(S^{q-1}\times D^{n-q+1})$, using the actual framed attaching tubes. By [F1], $N\setminus\bigcup_jB_j$ is $Q$ with the pieces $(D^q\setminus\{0\})\times S^{n-q}$ glued along $S^{q-1}\times S^{n-q}$. Radially retract each punctured $D^q$ to its boundary, keeping that boundary fixed. Thus this complement deformation retracts to $Q$, with the corner collars included. Also $Q$ is homotopy equivalent to $M$ minus the attaching cores $S^{q-1}$. Their codimension is $n-q+1\ge3$. By [F4] loops and disk nullhomotopies in $M$ can avoid these finitely many cores, relative to prescribed endpoints or boundary collars: their expected intersection dimensions are $q-n<0$ and $q+1-n\le-1$. Therefore $\pi_1(Q)\to\pi_1(M)$ is an isomorphism. These identifications commute with the inclusions into the trace $T$. [F1, F4, construct, algebra]

2.1 For $q\ge3$, [F3] makes $\pi_1(M)\to\pi_1(T)$ an isomorphism. For $q=2$ it is a surjection, since attaching a $2$-handle only kills the attaching loop; the assumed injection makes it an isomorphism too. Reading the trace backwards attaches only handles of index $n+1-q\ge3$, so [F2] and [F3] make $\pi_1(N)\to\pi_1(T)$ an isomorphism. Step 1.1 now identifies the complement-to-$N$ map as the comparison between two isomorphisms to $\pi_1(T)$, proving the first assertion. For a subfamily, every loop in its complement can be perturbed away from the remaining belts because they have codimension $q\ge2$ and $1-q<0$. Hence the full-complement map onto the subfamily-complement fundamental group is surjective. Since its composite to $\pi_1(N)$ is an isomorphism, the subfamily map to $\pi_1(N)$ is also injective and surjective. [F2, F3, F4, step 1.1, construct]

3.1 If $W$ is an h-cobordism, its remaining handles beyond $T=W_q$ have index at least $q+1\ge3$, so [F3] gives $\pi_1(T)\cong\pi_1(W)$. The incoming inclusion $M\to W$ is an isomorphism by [F5], and therefore $M\to T$ is an isomorphism. If instead all $2$-handle attaching loops are nullhomotopic, their normal closures are zero and the incoming map is again an isomorphism. This proves the two advertised sufficient conditions, without assuming that a simply connected outgoing level alone controls an arbitrary codimension-two complement. [F3, F5, step 2.1]

3.2 For the $q=2$ pair form the usual clean boundary annulus in its sheet and fixed corner collars. Its inner circle $\lambda$ misses all belts and the $2$-sphere $A$, and is homotopic in $N$ to the original Whitney circle. Step 2.1 makes the full belt-complement map injective, so $\lambda$ bounds a disk in that full complement. Smooth and embed the disk relative to its annulus collar using [F4] and [F6]. Perturb its interior in the belt complement to avoid $A$ and any additional prescribed $2$-spheres: each incidence dimension is $2+2-n<0$. Small relative perturbations preserve its compact embedded collar and embeddedness. Thus the resulting disk misses every belt in its interior and every additional $2$-sphere as requested. [F4, F6, step 2.1, construct, algebra]

4.1 The framing part is the exact $r=2$ construction of [F6]: opposite corner signs match the oriented endpoint values of its rank-one partial $E$ frame, tangent to $A$ on its arc and normal to the selected belt on the other. Trivialize the rank-$(n-2)$ disk-normal bundle by radial projection transport; the partial-frame loop lies in $V_1(\mathbb R^{n-2})$, simply connected since $n\ge5$. Extend and smooth $E$ relative to its collars, then frame its orthogonal complement $H$ over the disk. This gives an admissible frame with no arbitrary preassigned full boundary class. By [F7] a thin tube gives the desired isotopy of $A$. It avoids the other belts and additional spheres by step 3.2 and compact separation outside the designated collars, so no new intersection with them is created. The choices are finite or are the declared countable-choice approximation inputs. [F6, F7, step 3.2, construct] ∎
