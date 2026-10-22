---
id: lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form
kind: lemma
title: The canonical positive three-crossing braid has the negative trefoil form
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, def-elementary-geometric-half-twist, def-oriented-crossing-sign-writhe-and-blackboard-framing, def-knot-seifert-pairing-and-matrix, lem-seifert-pairing-well-defined, lem-seifert-matrix-skew-part-is-surface-intersection, thm-linking-number-equals-signed-intersection]
proof_strategy: direct
sources:
  references:
    - title: Dale Rolfsen, Knots and Links, printed146 Example6B1 and printed201 Example8A2
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
---

## Statement

Assume full AC. Use the canonical geometric Artin half twist in the oriented chart $(x,y,t)$, the canonical crossing sign $\det_P(v_{\rm over},v_{\rm under})$, and the Seifert convention $\theta(u,v)=\operatorname{lk}(u^+,v)$. Let $F$ be the oriented braid Seifert surface consisting of two Seifert disks and the three crossing bands of the closure of $\sigma_1^3$. Label the bands in braid order $e_1,e_2,e_3$, oriented as edges from the first disk to the second. The cycle classes $a=e_1-e_2$ and $b=e_2-e_3$ form an integral basis. Order these two classes as $(u,v)$ so that $u\cdot_Fv=1$. Then
$$V_{(u,v)}=\begin{pmatrix}-1&1\\0&-1\end{pmatrix},\qquad V+V^T=\begin{pmatrix}-2&1\\1&-2\end{pmatrix}.$$
In particular the signature is $-2$. The three pair-of-band annuli have core self-pairing $-1$, so they are positive Hopf bands when positive refers to the positively linked oriented boundary, rather than to core self-pairing $+1$.

## Facts & Assumptions

**Given:** Full AC, the stated oriented braid and its oriented Seifert disk-and-band surface.

[A1] Full AC is assumed. [[def-axiom-of-choice]]

[F1] The positive half twist moves the left point below the midpoint to the right and the right point above it to the left. With viewing normal $+y$, positive projection coordinates are $(t,x)$, and the over/under tangents have determinant positive. [[def-elementary-geometric-half-twist]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]

[F2] The positive-push pairing is bilinear on homology classes, and linking is symmetric and unchanged by disjoint isotopies. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-pairing-well-defined]]

[F3] In an integral basis of a genus-one surface with one boundary component, the intersection matrix is skew and unimodular, and $V-V^T$ equals that matrix. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F4] For a regular oriented two-component diagram its linking number is half the mixed signed crossing sum, with exactly the canonical determinant signs. [[thm-linking-number-equals-signed-intersection]]

## Proof

**Proof technique:** direct.

1.1 The positive half twist may be smoothed and reparametrized to the antipodal semicircular motions $(-h\cos\pi t,-h\sin\pi t)$ and their negatives. Indeed the diamond path and the semicircle have the same argument, strictly increasing from $\pi$ to $2\pi$, after a monotone change of parameter; interpolation of their positive radial lengths never reaches zero, so their antipodal pair stays distinct. In the $(t,x)$ projection at the crossing, the right initial strand is over and travels left; the left initial strand is under and travels right. Their tangents are $(1,-c)$ and $(1,c)$ for $c>0$, of determinant $2c>0$. The threefold braid therefore has exactly three positive crossing balls. Oriented smoothing joins each strand straight through its height coordinate and gives two Seifert circles. Cap these by disjoint disks on the usual separated levels and restore each crossing by its oriented half-twisted rectangle. The rectangles occupy disjoint crossing balls and their attaching strips run in disjoint narrow neighborhoods of the smoothed strands. Their boundary restores precisely the original over/under arcs, so this construction has the required braid closure as oriented boundary. [A1, F1, given, construct]

2.1 The disks and band widths contract to the graph with two vertices and three oriented edges $e_1,e_2,e_3$ from the first vertex to the second. The contraction is obtained on each disk by contracting a tree joining its three attachment centers and on each band by contracting the width; these contractions agree on the attaching intervals after contracting those intervals to their centers. Thus $H_1(F)$ identifies with $\{(n_1,n_2,n_3)\in\mathbb Z^3:n_1+n_2+n_3=0\}$. Its basis is $a=e_1-e_2$, $b=e_2-e_3$, with $a+b=e_1-e_3$. The surface is connected and has Euler characteristic $2-3=-1$. The braid permutation is the transposition cubed, hence a transposition, so its closure has one component. Therefore $F$ has genus one. [step 1.1, construct, algebra]

3.1 For each pair $i<j$, retain the two disks and only bands $i,j$, rounding the unused attachment intervals inside the disks. This is an embedded orientable subsurface $A_{ij}\subset F$, of Euler characteristic zero, with two boundary components: the two-band braid permutation is the identity. It is an annulus with core class $\pm(e_i-e_j)$. Its boundary diagram is the two-crossing positive braid closure. To justify this also for $i=1,j=3$, deleting the middle rectangle leaves only untwisted attaching strips along the two Seifert disks between the retained crossing balls; compress those strips in the height direction by an increasing reparametrization, supported away from the retained balls. The resulting two positive balls are consecutive, with no new intersections. The same operation applies to either other pair. On the oriented boundary of the subsurface both strands travel in the braid direction, as in the original oriented Seifert construction. Both crossings are mixed, and both signs are $+1$ by step 1.1. Thus the two boundary components $L_i,L_j$ of $A_{ij}$ have $\operatorname{lk}(L_i,L_j)=1$ by [F4]. [F1, F4, step 1.1, step 2.1, construct, algebra]

4.1 In any oriented annulus $A$ with its induced boundary orientations $L_0,L_1$, choose two distinct parallel core circles $c_0,c_1$, both oriented like $L_0$. Moving them through the annulus toward its two boundary components is a disjoint isotopy, giving the oriented pair $(L_0,-L_1)$. Therefore $\operatorname{lk}(c_0,c_1)=-\operatorname{lk}(L_0,L_1)$. A sufficiently small positive surface-normal push of $c_0$ is isotopic back to $c_0$ in the complement of $c_1$. Since both core circles represent the same class in $F$, [F2] gives $\theta([c_0],[c_0])=\operatorname{lk}(c_0^+,c_1)=-1$ for each of the annuli in step 3.1. Reversing the core orientation changes both pairing arguments, so the sign of the core class is immaterial. Applying this to $A_{12},A_{23},A_{13}$ gives $\theta(a,a)=\theta(b,b)=\theta(a+b,a+b)=-1$. Bilinearity now gives $\theta(a,b)+\theta(b,a)=1$. This proves both diagonal signs from geometry, without defining them as positive by fiat. [F2, step 2.1, step 3.1, construct, algebra]

5.1 By [F3] and step 2.1, the intersection matrix in $(a,b)$ is $\begin{pmatrix}0&k\\-k&0\end{pmatrix}$ with determinant $k^2=1$. Thus $k=\pm1$. If $k=1$, put $(u,v)=(a,b)$; if $k=-1$, put $(u,v)=(b,a)$. This orders the actual pair-of-band core classes into a positive handle basis, rather than assuming a sign for their order. Step 4.1 is symmetric in the two classes, so $V_{11}=V_{22}=-1$ and $V_{12}+V_{21}=1$ in either order. The positive intersection and [F3] give $V_{12}-V_{21}=1$. Solving these two integral equations gives $V_{12}=1,V_{21}=0$, proving the matrix. Finally $-2x^2+2xy-2y^2=-(x-y)^2-x^2-y^2<0$ for $(x,y)\ne(0,0)$, so its symmetrization is negative definite and has signature $-2$. [F3, step 2.1, step 4.1, algebra] ∎
