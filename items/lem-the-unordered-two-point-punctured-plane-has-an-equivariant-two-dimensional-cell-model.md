---
id: lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model
kind: lemma
title: An equivariant two-dimensional model for the LKB configuration space
status: published
origin: session
deps: [def-unordered-configuration-space]
dependency_level: 0
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Salvetti, Topology of the complement of real hyperplanes, Part One and Theorem 1, pp.604–611
      url: https://eudml.org/doc/143468
    - title: Paoluzzi and Paris, A note on the Lawrence–Krammer–Bigelow representation, section 2, pp.503–506
      url: https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $p_1<\cdots<p_n$ be real numbers, $n\ge1$, and put
$$M=\{(z_1,z_2)\in\mathbb C^2:z_1,z_2\notin\{p_1,\ldots,p_n\},\ z_1\ne z_2\}.$$
Coordinate interchange $\tau(z_1,z_2)=(z_2,z_1)$ admits an equivariant homotopy equivalence from $M$ to a finite two-dimensional CW complex. Its quotient is a model of the unordered configuration space $M/\langle\tau\rangle$.

After collapsing contractible cellular subcomplexes, the quotient has one vertex, edges $a_i,b_i$ ($1\le i\le n$), $c_i$ ($1\le i\le n+1$), and faces $A_{ij}$ ($i<j$), $B_{ir}$ ($1\le i\le n$, $1\le r\le3$), with attaching words
$$\partial A_{ij}=(b_i a_j)(a_j b_i)^{-1},\qquad \partial B_{i1}=(a_i c_{i+1})(c_i a_i)^{-1},$$
$$\partial B_{i2}=(c_{i+1}b_i)(c_i a_i)^{-1},\qquad \partial B_{i3}=(c_{i+1}b_i)(b_i c_i)^{-1}.$$
The homotopy equivalence lifts to any corresponding regular cover, commutes with its deck group, and preserves ordinary absolute homology. The same model applies to a closed punctured disk containing the punctures in its interior, up to homotopy equivalence preserving the winding character. No identification with end-relative homology is asserted.

## Facts & Assumptions

**Given:** $n\ge1$, real punctures $p_1<\cdots<p_n$, the space $M$, and coordinate interchange $\tau$.

[F1] [[def-unordered-configuration-space]] identifies the quotient of ordered distinct pairs with the unordered two-point configuration space.



## Proof

1.1 Regard $z=x+iy$ with $x,y\in\mathbb R^2$. Let $\mathcal A$ be the real lines $x_1=p_i$, $x_2=p_i$, and $x_1=x_2$. For a line with affine equation $\ell(x)=0$ and linear part $\ell_0$, its complexification contains $x+iy$ exactly when $\ell(x)=\ell_0(y)=0$. Thus membership in $M$ is a condition on the lines containing the real part and the directions of the imaginary part. Choose a square $R=(-L,L)^2$ containing all real arrangement vertices, and a strictly increasing continuous function $h:\mathbb R\to(-L,L)$ fixing an interval containing every $p_i$. For example, keep $h(u)=u$ on $[-L/2,L/2]$ after taking $L$ large enough, and on each tail use the increasing exponential interpolation to the endpoint $\pm L$. Applying $(1-s)u+sh(u)$ to both real coordinates and leaving imaginary coordinates unchanged preserves every equality $x_k=p_i$ and the equality/order of $x_1,x_2$. It therefore gives an equivariant homotopy equivalence between $M$ and its subspace with real part in $R$; the same homotopy restricts to that subspace. [given, construct]

1.2 Here is the finite good-cover argument needed for this particular cover. For a finite open cover $U_\alpha$ of a metric space $X$, let $d_\alpha(x)=d(x,X\setminus U_\alpha)$, using the constant function $1$ if the complement is empty, and put $D(x)=\max_\alpha d_\alpha(x)>0$. Normalize the nonnegative functions $\max(0,d_\alpha-D/2)$ to get a partition $\lambda_\alpha$. Its support is locally contained in $U_\alpha$, since a point in the closure of its nonzero set satisfies $d_\alpha\ge D/2>0$. Form its thick nerve by gluing $U_\sigma\times\Delta^\sigma$ for all nonempty intersections $U_\sigma=\bigcap_{\alpha\in\sigma}U_\alpha$, using the face inclusions. Projection to $X$ has the continuous section $x\mapsto(x,(\lambda_\alpha(x)))$; local containment of supports justifies continuity in this gluing topology. Straight interpolation in the simplex coordinates contracts its fibres onto this section, because the union of the two supports still consists of sets containing $x$. Projection to the ordinary nerve is also a homotopy equivalence when all $U_\sigma$ are contractible. To see this, filter by simplex dimension: each step attaches the products $U_\sigma\times\Delta^\sigma$ along $U_\sigma\times\partial\Delta^\sigma$, and projection on both products is a homotopy equivalence. The boundary product is a cofibration: a collar of the boundary of the finite simplex supplies its homotopy extension explicitly, after taking a product with $U_\sigma$. Consequently the pushout comparison preserves a homotopy equivalence. Indeed replace an attachment by its double mapping cylinder, extend the collar across it, and use the contractions of the factors on the two ends; the resulting homotopies descend to the pushout. Induction over the finitely many simplices proves the assertion. This proof uses finite choices only. [construct]

2.1 Cellulate the closed square by the arrangement lines and its boundary, and barycentrically subdivide this finite convex polyhedral cellulation. Choose a point $v_F$ in the relative interior of each face $F$, respecting coordinate interchange; actual barycentres do this. An interior face means one not contained in the artificial square boundary, and corresponds to exactly one real arrangement facet. For each interior $F$, let $S_F$ be its open vertex star in this subdivision, intersected with $R$. These stars cover $R$: a point in the relative interior of a face has a positive weight at an interior face vertex in its barycentric simplex. A nonempty intersection $S_{F_0}\cap\cdots\cap S_{F_k}$ occurs exactly when the $F_j$ form a strict inclusion chain. It contracts to the centroid of their vertices by interpolating barycentric weights to those of that centroid; all their weights stay positive, and the centroid lies in $R$. In particular $k\le2$. A real point in $S_F$ belongs to a cofacet of $F$, so every arrangement line containing that point contains $F$. [step 1.1, construct]

3.1 For every $F$, partition imaginary space by the linear hyperplanes parallel to the arrangement lines containing $F$. Let $K_{F,C}$ be an open chamber of this local arrangement; for a two-dimensional $F$ there are no such lines and the chamber is all of $\mathbb R^2$. Put $U_{F,C}=S_F+iK_{F,C}$. Step 2.1 and the membership criterion of step 1.1 show that this is an open subset of $M$ with real part in $R$. These finitely many sets cover that space: at a real point in facet $G$, use a star whose positive top face is $G$ and the local chamber containing its imaginary part. Intersections have contractible real factor by step 2.1 and convex imaginary factor, the intersection of finitely many strict linear half-spaces. A nonempty intersection is therefore contractible, and its indices form a face chain of length at most three. Coordinate interchange permutes the cover and its intersections. [step 1.1, step 2.1, construct]

4.1 Apply step 1.2 to step 3.1. The nerve has dimension at most two. Its barycentric simplices are exactly chains of facets with compatible local chamber labels. Every local chamber at a vertex is a sector between two or three incident lines; at an edge it is one of the two sides; at a real chamber there is a single label. Thus the nerve is the barycentric subdivision of the following regular complex: one vertex for each real chamber, two directed edges across each real edge, and one disk for every pair consisting of an arrangement vertex and an incident real chamber. The disk boundary follows the two shortest directed paths around that vertex from this chamber to the opposite chamber, one on each side. This follows directly by grouping the face-chain triangles with the same vertex-sector label; each group is the cone on the cyclic sequence of incident edges between those opposite chambers. This is the two-dimensional Salvetti cell description, here obtained from the explicit cover. [step 3.1, step 1.2, construct]

5.1 All constructions are equivariant. In step 1.2 use the Euclidean metric, so the partition is equivariant. No nerve simplex is setwise fixed by $\tau$: a simplex has at most one facet of each dimension, so a fixed simplex would have fixed labels at each dimension; a real chamber cannot be fixed since it lies wholly on one side of the diagonal, and a fixed facet on the diagonal has its two sides or its incident sectors interchanged. Choose the finite contractions and extension data once for each orbit of simplices, and use their translates on the other members. The inductive pushout comparison of step 1.2 then provides equivariant inverse maps and equivariant homotopies. In particular these descend to homotopy equivalences of the quotients; an ordinary nonequivariant homotopy equivalence is not being used to justify this descent. [step 1.2, step 4.1, construct]

6.1 Label quotient chamber vertices by $P_{ij}$, $1\le i\le j\le n+1$, according to the two puncture intervals containing the coordinates, with the diagonal splitting a same-interval square into two exchanged chambers. There are diagonal loops $c_i$, pairs of directed edges $a_{ij},\bar a_{ij}$ between $P_{ij}$ and $P_{i,j+1}$, and $b_{ij},\bar b_{ij}$ between $P_{i+1,j+1}$ and $P_{i,j+1}$. Read the disk boundaries of step 4.1 at a double intersection and a triple intersection. At a double intersection $i<j$ they are $(b_{i,j-1}a_{ij})(a_{i+1,j}b_{ij})^{-1}$, $(\bar a_{i+1,j}b_{i,j-1})(b_{ij}\bar a_{ij})^{-1}$, $(a_{ij}\bar b_{ij})(\bar b_{i,j-1}a_{i+1,j})^{-1}$, and $(\bar b_{ij}\bar a_{i+1,j})(\bar a_{ij}\bar b_{i,j-1})^{-1}$. At a triple intersection they are $(a_{ii}\bar b_{ii}c_{i+1})(c_i a_{ii}\bar b_{ii})^{-1}$, $(\bar b_{ii}c_{i+1}b_{ii})(\bar a_{ii}c_i a_{ii})^{-1}$, and $(c_{i+1}b_{ii}\bar a_{ii})(b_{ii}\bar a_{ii}c_i)^{-1}$. This exhausts the two types of vertices of this arrangement, and is obtained by following the four or six sectors cyclically. [step 4.1, step 5.1, construct]

7.1 The fourth double-intersection disks and their barred edges form the ordinary staircase grid complex on the $P_{ij}$. It is contractible: in the realization as a square grid below a staircase, move horizontally to its leftmost column and then vertically to its bottom vertex; the horizontal sections are intervals containing that column. The same description includes $n=1$, when it is an interval. Collapsing this subcomplex to a point is a homotopy equivalence, because it is a finite CW subcomplex and its contraction extends across collars of the attached cells. The second and third double-intersection disks now have boundaries $b_{i,j-1}b_{ij}^{-1}$ and $a_{ij}a_{i+1,j}^{-1}$. Collapse these bigons successively to identify each row of $b$-edges with $b_i$ and each column of $a$-edges with $a_j$. Their remaining boundaries are precisely the four words in the statement, with one vertex and no cells above dimension two. [step 6.1, construct]

8.1 For a homotopy equivalence carrying a specified normal subgroup of the fundamental group to the corresponding subgroup, lift it and an inverse after fixing basepoint lifts. Their compositions lift the identity homotopies; uniqueness of a lifted path, checked in successive evenly covered neighbourhoods, gives lifted homotopies between the compositions and the identity. The lifts commute with every deck transformation by the same uniqueness. Thus the corresponding covers are deck-equivariantly homotopy equivalent, and their ordinary absolute singular homology groups are identified. Apply this to the homotopy equivalences above and use [F1] for the unordered interpretation. [F1, step 5.1, step 7.1, construct]

9.1 For the unit closed disk choose $r_0<1$ larger than the modulus of every puncture. A strictly increasing radial map $f:[0,1]\to[0,1)$ fixing $[0,r_0]$ gives an injection of the disk into its interior fixing all punctures. Interpolating its radial function with the identity remains injective, fixes the punctures, and takes interior points to interior points. Applying it to both coordinates therefore proves that the interior inclusion is a homotopy equivalence of punctured configurations, also after coordinate interchange. An increasing radial homeomorphism $[0,\infty)\to[0,1)$ fixing $[0,r_0]$ identifies the punctured plane with the punctured open disk, fixing the punctures. Both operations preserve the puncture and mutual winding characters, since their homotopies keep pairs distinct and avoid punctures. The lifting argument of step 8.1 therefore applies to these identifications too. [step 8.1, construct] ∎
