---
id: lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion
kind: lemma
title: The absolute LKB inclusion obtained by deleting the last puncture is saturated
status: published
origin: session
deps: [lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model, lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]
dependency_level: 2
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: completed-cumulative-mathematical-review
    date: 2026-10-03
    scope: "Cumulative verification supported by existing completed mathematical readings. Original complete Step 5a reader evidence research/frontier-38-owner-30-reader-16.md, followed by completed Step 7 repair/adjudication reasoning research/frontier-38-owner-30-step7-v2/step7-v2-repeat-r1-u16.json, exact post_sha256 14d6ef3cc97b32baa30094dc4e576d8c5b31625f3f18579019963f08eea6a625 with publication status normalized back to draft. The later reasoning covers the substantive changes; its local repair/self-review qualifications remain applicable. This reconciliation adds no new mathematical review, independent post-repair audit, source reading or judge acceptance."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 step7-v2-repeat-r1-u16 dispatch"
sources:
  references:
    - title: Paoluzzi and Paris, A note on the Lawrence–Krammer–Bigelow representation, sections 2–3
      url: https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf
    - title: Bigelow, The Lawrence-Krammer representation, proof of Lemma 4.4
      url: https://arxiv.org/pdf/math/0204057
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $n\ge2$, $p_1<\cdots<p_n$, $C_n$ be the unordered two-point configuration in the $n$-punctured plane, and $C_{n-1}^{<}$ the configurations whose two points lie in $\{z:\operatorname{Re}z<p_n\}\setminus\{p_1,\ldots,p_{n-1}\}$. Use the winding character and compatible lifts in both spaces, and put $H_m=H_2(\widetilde C_m;\mathbb Z)$, $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$, $K=\mathbb Q(q,t)$.

The inclusion induces an injective map $H_{n-1}\to H_n$. In the field extension of $H_n$, its image satisfies
$$H_n\cap\bigl(K\otimes_\Lambda H_{n-1}\bigr)=H_{n-1}.$$
Here the smaller configuration is identified with the ordinary $(n-1)$-puncture model by a homeomorphism of its half-plane with the plane. Equivalently, an integral absolute class lying in the fraction-field span of classes supported in this smaller configuration already comes from its integral absolute homology. This is the support implication used in the integral LKB basis induction.

## Facts & Assumptions

**Given:** $n\ge2$, the real punctures, the inclusion $C_{n-1}^{<}\subset C_n$, and compatible lifts for the winding covers.

[F1] [[lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model]] supplies the collapsed two-dimensional absolute model and its attaching words. Compatibility with the half-plane inclusion is established below.

[F2] [[lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]] identifies absolute second homology with the integral cellular kernel, and identifies its injective field extension with the field kernel.



## Proof

1.1 Construct compatible models directly. For ordered configurations write $z=x+iy$, with $x,y\in\mathbb R^2$, and use the real arrangement $x_1=p_i$, $x_2=p_i$, $x_1=x_2$. A complexified line excludes $x+iy$ exactly when its affine equation vanishes at $x$ and its linear part vanishes at $y$. Choose $L$ with all punctures in $(-L,L)$ and an increasing map $h:\mathbb R\to(-L,L)$ fixing an interval containing them. Applying $(1-s)u+sh(u)$ to both real coordinates preserves their order and all equalities with punctures, and leaves imaginary coordinates unchanged. It gives a homotopy equivalence to the subspace with real part in $R=(-L,L)^2$, and restricts to the smaller configuration, whose compressed real domain is $R^{<}=(-L,p_n)^2$. Cellulate the closed square by the arrangement and its boundary, choose the barycentres $v_F$ of its faces, and barycentrically subdivide. For every face not contained in the square boundary let $S_F$ be its open vertex star intersected with $R$. These stars cover $R$; intersections occur exactly for face chains and contract by barycentric interpolation to the centroid of the specified vertices. A point in $S_F$ lies in a cofacet of $F$, so every arrangement line through that point contains $F$. Call $F$ retained when its relative interior lies in $R^{<}$. Its star lies entirely in $R^{<}$: every coface stays on the left side of each last-puncture line, and the positive weight at $v_F$ makes both inequalities strict. The retained stars cover $R^{<}$, and their intersection contractions stay there. [given, construct]

2.1 For each $F$ and each open chamber $Q$ of the linear arrangement parallel to the lines containing $F$, put $U_{F,Q}=S_F+iQ$. The membership criterion of step 1.1 shows these are open sets of the ordered configuration space. They cover it: at a real point in facet $F$, its imaginary part avoids precisely that local arrangement. Each nonempty intersection has a contractible star-intersection factor and a convex imaginary factor. Its labels form a face chain of length at most three. For retained $F$, neither last-puncture line contains $F$, so the local imaginary arrangement is exactly the smaller one. The retained $U_{F,Q}$ therefore give a good cover of the smaller space by the same sets as in the larger cover. Their nerve is the subcomplex on the retained labels. [step 1.1, construct]

3.1 Here the good-cover comparison can be made compatible without choosing compatible inverse homotopies. For a finite open cover of a metric space $X$, form the thick nerve from $U_\sigma\times\Delta^\sigma$ over its nonempty intersections, with the face identifications. Projection to $X$ is a homotopy equivalence: normalize $\max(0,d(x,X\setminus U_\alpha)-D(x)/2)$, where $D(x)$ is the maximum of these distances, to obtain a partition with supports locally contained in the covering sets; its graph is a section, and straight interpolation of simplex coordinates gives the inverse homotopy. Projection to the ordinary nerve is also a homotopy equivalence: filter by simplex dimension and compare the attachments $U_\sigma\times\partial\Delta^\sigma\subset U_\sigma\times\Delta^\sigma$ with the simplex attachments. The projections on these products are homotopy equivalences since $U_\sigma$ is contractible; collars of simplex boundaries give cofibrations, so the pushout comparison, equivalently its double-mapping-cylinder comparison, preserves homotopy equivalences at each finite stage. Both projection squares commute with inclusion for step 2.1's covers. Coordinate interchange preserves these covers. No nerve simplex is setwise fixed: it has at most one label of each face dimension, a fixed diagonal facet has its local chambers exchanged, and a two-dimensional facet lies on one side of the diagonal. Thus choose the finite contraction and extension data orbit by orbit; the comparisons are equivariant and descend to the unordered quotients. This identifies the actual half-plane inclusion with the nerve-subcomplex inclusion on absolute homology. [step 1.1, step 2.1, construct]

4.1 Group the face-chain triangles of the nerves into cells as follows: there is one vertex for each real chamber, two directed edges across each real edge, and one disk for each arrangement vertex and incident chamber. Around such a vertex the face-chain triangles with a fixed imaginary sector form a disk; its boundary follows the two directed paths from that chamber to its opposite chamber around the vertex. This describes the grouping directly and respects retained labels. In the unordered quotient label chamber vertices $P_{ij}$ by the two puncture intervals, $1\le i\le j\le n+1$. The edges are loops $c_i$ at $P_{ii}$, edges $a_{ij}:P_{ij}\to P_{i,j+1}$ and $b_{ij}:P_{i+1,j+1}\to P_{i,j+1}$, and reversed barred edges. The retained vertices have $j\le n$, the retained double-intersection disks have $i<j\le n-1$, and the retained triple-intersection disks have $i\le n-1$. [step 2.1, step 3.1, construct]

5.1 The uncollapsed words can be checked locally, using the four sectors at a double intersection and six at a triple intersection. At the intersection indexed by $i<j$, the four pairs of paths give $(b_{i,j-1}a_{ij})(a_{i+1,j}b_{ij})^{-1}$, $(\bar a_{i+1,j}b_{i,j-1})(b_{ij}\bar a_{ij})^{-1}$, $(a_{ij}\bar b_{ij})(\bar b_{i,j-1}a_{i+1,j})^{-1}$, and $(\bar b_{ij}\bar a_{i+1,j})(\bar a_{ij}\bar b_{i,j-1})^{-1}$. At the triple intersection indexed by $i$, they give $(a_{ii}\bar b_{ii}c_{i+1})(c_i a_{ii}\bar b_{ii})^{-1}$, $(\bar b_{ii}c_{i+1}b_{ii})(\bar a_{ii}c_i a_{ii})^{-1}$, and $(c_{i+1}b_{ii}\bar a_{ii})(b_{ii}\bar a_{ii}c_i)^{-1}$. In each word the two paths run along opposite sides of the intersection, as prescribed in step 4.1. These formulas in particular show that every retained disk has only retained boundary edges. [step 4.1, construct]

6.1 The barred edges and fourth double-intersection disks form a contractible staircase grid on the $P_{ij}$: its planar realization has interval horizontal sections ending at the same left boundary, so move horizontally to that boundary and then vertically to its bottom vertex. For one puncture it is a tree and the same contraction applies. The retained grid is the smaller grid. Collapsing each grid is a homotopy equivalence, since a CW-subcomplex contraction extends to the whole complex and descends to the quotient homotopies. The inclusion sends the smaller grid into the larger, so the quotient square commutes. The second and third double-intersection disks now have boundaries $b_{i,j-1}b_{ij}^{-1}$ and $a_{ij}a_{i+1,j}^{-1}$. Collapse every strip of such bigons to one edge, identifying each row with $b_i=b_{ii}$ and each column with $a_j=a_{jj}$. Each strip is a finite sequence of disks identifying neighbouring edges; eliminating one disk and one neighbouring edge at a time, while transferring other attaching maps along that edge identification, gives a homotopy equivalence. The quotient maps send corresponding retained strips to the same labelled edges and hence commute with inclusion. The remaining attaching words are exactly those of [F1]. The resulting cellular inclusion sends $A_{ij}$ and $B_{ir}$ with indices at most $n-1$ to the same labelled cells, and similarly sends $a_i,b_i$ for $i\le n-1$ and $c_i$ for $i\le n$. [F1, step 4.1, step 5.1, construct]

7.1 Winding about $p_n$ is zero on the left half-plane. The meridian loops $a_i,b_i$ have deck displacement $q$, the exchange loops $c_i$ have displacement $t$, and the contracted grid has trivial displacement. Thus the commuting comparisons lift with the given compatible basepoint lifts and the same deck character. Step 3.1 and the commuting quotient squares show that the cellular inclusion represents the geometric inclusion in absolute covering homology; separate homotopy equivalences alone would not suffice. An orientation-preserving homeomorphism from the half-plane to the plane identifies the smaller cover with its ordinary $(n-1)$-puncture model, preserving puncture and mutual winding. By [F2], the smaller cellular differential is the restriction of the larger one. [F2, step 3.1, step 6.1, given, construct]

8.1 Write the larger degree-two free module as $C_2^{\mathrm{old}}\oplus C_2^{\mathrm{new}}$, using exactly the retained cells of step 6.1 for the first summand. Its integral kernel restricts on $C_2^{\mathrm{old}}$ to the smaller integral kernel, since the differential formulas agree and the smaller degree-one module is a submodule of the larger. There are no degree-three boundaries in either model. Hence the map on absolute $H_2$ is the inclusion of these kernels and is injective. [F2, step 7.1, algebra]

9.1 Let $v\in H_n$ lie in the field span of $H_{n-1}$. In cellular coordinates its $C_2^{\mathrm{new}}$ coordinates are zero over $K$, since every smaller class has zero such coordinates. They were integral coordinates in the domain $\Lambda$, so they are already zero over $\Lambda$. The remaining coordinates form an integral vector in $C_2^{\mathrm{old}}$ with zero boundary. Step 8.1 says it is an element of $H_{n-1}$. The opposite inclusion in the displayed equality is immediate. This proves saturation without assuming integral freeness or equating a relative basis with an absolute basis; for $n=2$ the smaller kernel is zero by [F2]. [F2, step 8.1, algebra] ∎
