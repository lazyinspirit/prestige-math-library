# Why the terminal chain map really has zero outer-slab coordinate

This is the actual realization needed before the projection algebra in Quinn,
*Ends of maps I*, §7.4, printed p.319. That page was visually read in full.
Simply extending a three-skeleton contraction by HEP into a larger slab does
not justify the displayed terminal map (h,0): the extension could hit the
larger slab's four-handles. The construction below supplies an actual selfmap
of the first slab and thus justifies that zero coordinate.

Let U be an already smooth six-dimensional end neighborhood, with its actual
smooth frontier A. Suppose the following controlled topological maps are given:

1. An actual map r:U→K, where K is a compact smooth slab in U starting at A,
   together with a homotopy r_s:id_U≃r relative A, small over the control base.
   The map r need not be the identity on K: a homotopy domination suffices.
2. A finite relative handle presentation of (K,A) with handles only in degrees
   three and four, small over that base.
3. Actual controlled relative nullhomotopies of the three-skeleton of K into A,
   supplied by the improved frontier's relative controlled three-connectivity.
4. A larger finite slab L containing the actual homotopy tracks constructed
   below, with a compatible handle presentation extending that of K and having
   only three- and four-handles. Equivalently one may supply cofinal such
   slabs before choosing a containing member. An arbitrary containing slab
   with five-handles would not suffice for the chain identity below.

The actual simultaneous product-end choice of these four inputs is specified
in `compatible-three-four-slab-diagram.md`: consecutive normalized slabs K,J
retain the same shared frontier collar, L=K∪J, and a vertical clamp r has
r(U)⊂K and r_s(K)⊂L. These range conditions, and the same-frontier
three-connectivity proved there, are substantive inputs, not consequences
of K's homology or compactness.

Write g_s for the supplied homotopy on K^(3), beginning at inclusion and ending
in A. Extend it to K by the homotopy extension property of its finite relative
handle CW structure. This can be done with the needed control: on each
four-handle use the usual mapping-cylinder retraction
D⁴×I→D⁴×{0}∪S³×I. A point is either left at its original cell image or sent
to the prescribed boundary homotopy. Its projected displacement is bounded
by the original cell diameter plus the boundary-homotopy bound. Thus ordinary
HEP is not silently promoted to controlled HEP.

Define h=r g_1:K→K. This is an actual selfmap of K, and h(K^(3))⊂A because
r fixes A. Use the homotopy r_s|K followed by r g_s. The first part ends at
r|K and lies in L by the actual reserved-height-band construction. The
second part starts there and lies in K, because r(U)⊂K. It ends at h.
Thus the homotopy is relative A and has tracks in the already chosen
compatible L. Its projected bound is the supplied contraction allowance
plus the finite cell-diameter allowance; the vertical clamp preserves the
base coordinate. In particular, the uncomposed g_s is not a segment of
this homotopy. It could run arbitrarily deeply, so using g_s followed by
r_s g_1 would not justify the fixed-band containing-slab assertion.
The compatible presentation is supplied by the consecutive actual slabs,
not obtained by selecting an arbitrary compact neighborhood of the tracks.

Make the selfmap h cellular **inside K**, relative A and its already collapsed
three-skeleton. It still sends the three-skeleton into A. The cellular chain
map on the degree-four relative group is consequently an endomorphism h₄ of
C₄(K,A), while its degree-three part is zero. In the chain complex of L,
the degree-four terminal map is exactly (h₄,0), using the decomposition into
the original and additional handles. This zero is now justified by the actual
range of h, not by a notation convention.

Let d:C₄(K,A)→C₃(K,A) be the boundary matrix. The chain-map identity gives
d h₄=0. The cellular chain homotopy from inclusion to (h₄,0), projected to
the original degree-four summand, gives an actual homomorphism
T:C₃(K,A)→C₄(K,A) satisfying

T d = 1−h₄.

Here the absence of degree-five handles in L is essential: otherwise a
degree-five boundary term from the chain homotopy could contribute to the
original degree-four summand. It has not been discarded.

These are finite matrices, defined from the actual cellular homotopy. Hence

h₄−h₄² = (1−h₄)h₄ = T d h₄ = 0.

Thus h₄ is an actual idempotent, with im(h₄)=ker(d): d h₄=0 proves one
inclusion, and d x=0 gives h₄x=x−Tdx=x for the other. Equivalently,
ker(1−h₄)=ker(d). This produces the actual projection to which the finite
controlled projection operations can be applied. No implication from a
vanishing K-theory class to a geometric handle basis has been substituted.

Control of its matrix entries follows from the chosen cell sizes and the
actual small cellular homotopy: a coefficient is supported only between cells
whose images meet that homotopy track. Homotoping to cellular maps must be
done by pushing through these same small handles, with its finite diameter
allowance included before choosing the input tolerances. If the domination r
or skeleton contraction g_s is not small, this argument yields an algebraic
projection but does not yield a controlled one.

All additional selections in this operation concern finitely many cells,
homotopies and a compact containing slab. It introduces no arbitrary family
choice. The later global Countable Choice bookkeeping remains as described
in the separate product-end assembly note.
