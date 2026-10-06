---
id: ex-reordering-independent-one-handles
kind: example
title: "Reordering independent one-handles"
status: draft
origin: pipeline
dependency_level: 5
deps: [lem-handles-of-equal-index-can-be-attached-on-one-level, def-handle-decomposition-relative-to-the-incoming-boundary, lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy, cor-index-zero-handles-create-components, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "explicit comparison of the two attachment orders"
---

## Example

Assume $\mathrm{AC}_\omega$. On a surface, attach two disjoint $1$-handles to a disk along disjoint pairs of
disks in two different orders. The resulting handlebodies are diffeomorphic:
the attaching regions are disjoint, both handles have index one, and the
equal-index lemma permits simultaneous attachment or attachment in either
order. The example tests the equal-index boundary case of rearrangement, where
the dimension count $0+0<1$ makes the two attaching spheres disjoint and
no trajectory obstruction can occur.

## Facts & Assumptions

**Given:** The disk $D^2$ as a $0$-handle and two embedded $1$-handles $h_1,h_2$ attached to it along disjoint pairs of disjoint disks $D_1,D_2\subseteq\partial D^2$; write $M_{12}$ for the result of attaching $h_1$ then $h_2$ and $M_{21}$ for the result of attaching $h_2$ then $h_1$.

[F1] [[lem-handles-of-equal-index-can-be-attached-on-one-level]]: Assume $\mathrm{AC}_\omega$. Handles of equal index attached at one level may be regarded as attached simultaneously or successively in any order, with the same result up to diffeomorphism relative to the lower stage; their attaching embeddings may be changed by isotopy of the attaching region.

[F2] [[def-handle-decomposition-relative-to-the-incoming-boundary]]: a handle decomposition relative to the incoming boundary is an ordered list of handles attached successively to the collar of the incoming face.

[F3] [[cor-index-zero-handles-create-components]]: a $0$-handle attaches along the empty set and adds a disjoint $n$-disk; in the surface case it is the disk $D^2$.

[F4] [[lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy]]: each handle attachment is, up to homotopy of pairs relative to the lower stage, the attachment of a cell along the core sphere.

[F5] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: two compatible roundings of the same attachment are diffeomorphic by an isotopy supported in the collar.

[A1] **Dimension count.** For a surface, $n=2$. The attaching sphere of a $1$-handle is $S^0$, a pair of points, and the belt sphere of a $1$-handle is also $S^0$; in the level set, which is a $1$-manifold, the attaching sphere of the second handle and the belt sphere of the first have dimensions $0$ and $0$, with $0+0<n-1=1$, so they can be isotoped apart and the pair cannot obstruct the reordering.

## Verification

**Proof technique:** direct.

1.1 The disk $D^2$ is the $0$-handle of [F3], with boundary the circle $\partial D^2$. The two $1$-handles are attached along the pairs of disks $D_1$ and $D_2$, which are disjoint, so the attaching regions of the two handles are disjoint subsets of the level $\partial D^2$; the index of both is $1$. [F2, F3, given]

1.2 In either order the same two attachments are performed along the same disjoint attaching regions, and each attachment adds a handle body homeomorphic to $D^1\times D^1$; the surface produced is the disk with two bands attached, a compact surface with two bands, in both cases. [F2, given, construct]

2.1 By [F1] the two equal-index handles may be attached simultaneously or in either order with the same result up to diffeomorphism relative to the lower stage $D^2$; hence $M_{12}$ and $M_{21}$ are diffeomorphic by a diffeomorphism fixing the disk and identifying each labelled handle with the same labelled handle. The dimension count of [A1] records the reason: the two attaching spheres of the $1$-handles are $0$-dimensional in a $1$-dimensional level and can be made disjoint, so no trajectory or intersection obstruction to the reordering exists. [F1, A1, step 1.1, step 1.2, algebra]

3.1 The comparison also holds at the level of homotopy types: by [F4] each of the two attachments is, up to homotopy of pairs, the attachment of a $1$-cell along a pair of points, so both orders produce the homotopy type of a wedge of two circles, in accordance with the disk with two bands. Corner rounding does not affect the conclusion, by [F5]. [F4, F5, step 2.1, algebra] ∎
