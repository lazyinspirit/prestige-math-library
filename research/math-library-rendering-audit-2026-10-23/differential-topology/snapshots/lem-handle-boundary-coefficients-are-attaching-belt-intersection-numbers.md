---
id: lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers
kind: lemma
title: "Handle boundary coefficients are attaching-belt intersection numbers"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-morse-handle-chain-complex-computes-singular-homology, def-attaching-belt-intersection-matrix-of-adjacent-index-handles, def-geometric-cancelling-handle-pair, lem-transverse-complementary-spheres-have-product-charts, lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region, thm-cellular-boundary-is-the-incidence-degree-matrix, def-incidence-number-of-two-cw-cells, def-oriented-intersection-number, def-mod-two-intersection-number, def-local-oriented-intersection-sign, cor-oriented-intersection-reduces-to-mod-two-intersection, def-induced-boundary-orientation, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-countable-choice, thm-global-sphere-degree-is-the-sum-of-local-degrees, lem-local-sphere-orientations-and-finite-puncture-excision, cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient, thm-naturality-of-the-long-exact-sequence-of-a-pair, lem-long-exact-sequence-of-a-triple-in-singular-homology, lem-one-handle-changes-relative-homology-in-one-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: collapse-degree-identification
sources:
  scraped: []
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Section 7 (Lemma 7.2, Corollary 7.3 and complete proofs), printed pp. 85-89 (PDF pp. 90-94)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 6
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $F$ be a field. Let $M$ be a closed smooth oriented $n$-manifold
with an index-ordered handle presentation in which every attaching sphere $A_i$
of a $(k+1)$-handle meets every belt sphere $B_j$ of a $k$-handle transversely
in the middle level $N_k=\partial_+W_k$, for $0\le k\le n-1$; the endpoint
conventions for $k=0$ and $k=n-1$ are those of the geometric cancelling-pair
definition ([[def-geometric-cancelling-handle-pair]]): for $k=0$ the belt sphere
of a $0$-handle is its whole boundary sphere and the attaching sphere of a
$1$-handle is a $0$-sphere; dually for $k=n-1$. Orient each core disk, orient its attaching sphere by the boundary rule, and
orient its belt sphere so that the core-coordinate normal orientation followed
by the belt orientation is the boundary orientation of $N_k$. Then, with these
compatible orientations ([[def-induced-boundary-orientation]]), the matrix of the
handle-chain boundary $\partial_{k+1}:C_{k+1}\to C_k$ in the bases of the core
classes of the $(k+1)$-handles and of the $k$-handles is given by the attaching-belt
intersection entries $(I(A_i,B_j))$ (with entries mapped from $\mathbb Z$ to the coefficient field) as in the named matrix definition when the outgoing boundary before the $k$-handles is connected and $1\le k\le n-2$
([[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]), and the same
entry formula at the endpoints: the
coefficient of $\partial_{k+1}e_i$ at $f_j$ is the oriented intersection number
of $A_i$ with $B_j$ in $N_k$. Without orientations the same identity holds over
$\mathbb Z/2$ with mod-two intersection numbers, and over a field of
characteristic different from two the oriented identity holds.

## Facts & Assumptions

**Given:** A closed oriented smooth $n$-manifold $M$ with an index-ordered handle presentation with stages $W_0\subseteq\cdots\subseteq W_n=M$, transversality of all attaching and belt spheres in the middle levels, and the handles $e_j$ of index $k$, $g_i$ of index $k+1$ with attaching spheres $A_i$, belt spheres $B_j$ and core disks $D_j\cong D^k$, $D_i\cong D^{k+1}$.

[F1] The handle chain complex has $C_k=H_k(W_k,W_{k-1};F)$ with the relative core classes as a basis and $\partial_{k+1}$ equal to the boundary homomorphism of the triple $W_{k+1}\supseteq W_k\supseteq W_{k-1}$ ([[prop-morse-handle-chain-complex-computes-singular-homology]], [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).

[F2] The triple boundary factors as the pair connecting map followed by the relative quotient map ([[lem-long-exact-sequence-of-a-triple-in-singular-homology]]), and the pair connector carries the relative core class of a handle to the class of its attaching sphere ([[lem-one-handle-changes-relative-homology-in-one-degree]], part (a)).

[F3] When the outgoing boundary before the $k$-handles is connected and $1\le k\le n-2$, the named attaching-belt intersection matrix is $(I(A_i,B_j))$, with oriented entries when $M$ is oriented and the spheres carry the induced orientations, and mod-two entries otherwise; for $1\le k\le n-2$ the two families have complementary dimensions $k$ and $n-k-1$ in $N_k$ ([[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]), the endpoint cases being fixed by the cancelling-pair conventions ([[def-geometric-cancelling-handle-pair]]).

[F4] For a good pair with nonempty subspace, relative homology is naturally the reduced homology of its quotient ([[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]]); maps of pairs commute with the connector ([[thm-naturality-of-the-long-exact-sequence-of-a-pair]]).

[F5] For a continuous map of oriented $k$-spheres with $k\ge1$ and finite fibre, its degree is the sum of the local degrees ([[thm-global-sphere-degree-is-the-sum-of-local-degrees]]). Local orientation generators are restrictions of the global orientation and finite-puncture excision splits them into one summand per point ([[lem-local-sphere-orientations-and-finite-puncture-excision]]).

[F7] Transverse complementary-dimensional submanifolds have simultaneous product charts at each intersection point ([[lem-transverse-complementary-spheres-have-product-charts]]); the local oriented intersection sign compares the orientation of the attaching tangent followed by the belt tangent with that of the middle level ([[def-local-oriented-intersection-sign]], [[def-oriented-intersection-number]]), and the oriented intersection number reduces to the mod-two intersection number modulo two ([[cor-oriented-intersection-reduces-to-mod-two-intersection]], [[def-mod-two-intersection-number]]).

## Proof

**Proof technique:** collapse-degree-identification.

1.1 In the middle level $N_k=\partial_+W_k$ the attaching sphere $A_i$ of the $(k+1)$-handle has dimension $k$ and the belt sphere $B_j$ of the $k$-handle has dimension $n-k-1$ ([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]); the two dimensions sum to $\dim N_k=n-1$, and by hypothesis the spheres are transverse, so $A_i\cap B_j$ is finite (compactness of $N_k$). The ambient orientation of $N_k$ is the boundary orientation induced by that of $W_k$ [F3, F7]. [F3, F7, given]

1.2 By [F1] the handle boundary is $\partial_{k+1}=q_k\circ\delta_{k+1}$, where $\delta_{k+1}:C_{k+1}\to H_k(W_k;F)$ is the connecting map of the pair $(W_{k+1},W_k)$ and $q_k:H_k(W_k;F)\to C_k$ is the relative quotient map; by [F2] this composite is the triple boundary. [F1, F2, given]

1.3 For $k\ge1$, define $p_j:W_k\to D^k/S^{k-1}\cong S^k$ by $p_j(x,y)=[x]$ on the $j$th $k$-handle, and send $W_{k-1}$ and every other handle to the basepoint. On the attaching seam $|x|=1$ the formula is the basepoint, so it glues continuously. Choose the sphere orientation so that the core quotient has degree $+1$. Then $(p_j)_*:H_k(W_k,W_{k-1};F)\to H_k(S^k,*;F)$ sends the $j$th core generator to $1$ and the other core generators to zero, by [F1] and the quotient identification [F4]. It therefore extracts the $j$th coefficient. [F1, F4, given, construct]

2.1 By [F2] the relative image of the attaching sphere $A_i$ is $\partial_{k+1}$ of the upper core class. Consequently its $j$th coefficient is the degree of $p_j|_{A_i}:S^k\to S^k$, interpreted in $F$. Indeed on positive-degree homology the natural map $H_k(S^k;F)\to H_k(S^k,*;F)$ is an isomorphism, also for $k=1$ by the pair sequence and the isomorphism on $H_0$. [F2, F4, step 1.2, step 1.3]

3.1 The fibre of the interior value $[0]$ of this map is exactly $A_i\cap B_j$. On the outgoing region of the $j$th handle, $p_j(x,y)=[x]$ and $B_j=\{0\}\times S^{n-k-1}$; all other regions map to the basepoint. Near a fibre point the map is the core-coordinate projection. Transversality makes its restriction to $A_i$ a local diffeomorphism. The specified belt orientation makes its local degree equal to the sign comparing $T A_i\oplus T B_j$ with $T N_k$, which is the local intersection sign of [F7]. Thus the projection is onto the core coordinates, rather than the cocore. [F7, step 1.3, step 2.1]

4.1 The finite-fibre formula [F5] now gives $\deg(p_j|_{A_i})=\sum_{p\in A_i\cap B_j}\operatorname{sign}_p(A_i,B_j)=I(A_i,B_j)$. This also includes an empty fibre. Therefore the integer coefficient, and its image in any field, is the claimed intersection number. [F3, F5, F7, step 3.1, algebra]

5.1 Without orientations the same local-excision computation uses coefficient-one generators over $\mathbb Z/2$: every local diffeomorphism contributes $1$, and the global class restricts to the diagonal of these generators as in [F5]. Thus the coefficient is the parity of $A_i\cap B_j$. For oriented handles reducing the integer calculation modulo two agrees with [F7]. The positive-index proof includes $k=n-1$; the belt then has dimension zero, and the same local projection and orientation comparison apply. [F5, F7, step 4.1, algebra]

6.1 For $k=0$ use the chain connector directly: the boundary of the oriented upper interval is its terminal point minus its initial point. The $j$th coefficient in $H_0(W_0;F)$ is therefore $+1$ if its terminal point is on the $j$th disk boundary and $-1$ if its initial point is there, adding both if necessary. Orient that boundary circle or sphere as the belt of the positive zero-dimensional core; these are precisely the local intersection signs. Modulo two count the endpoints. This proves the endpoint formula independently of a sphere-degree assertion in dimension zero. [F1, F2, F3, step 5.1, algebra] ∎

## Remarks

- **Dual retraction.** The dual handle retraction contracts the handle onto its cocore along the core disk factor and carries the outgoing region onto the belt sphere, while the complement of the belt sphere in the outgoing region deformation retracts onto the attaching boundary $S^{k-1}\times S^{n-k-1}$ ([[lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region]], statements (b) and (c)).

- **Sign conventions.** The belt orientation is fixed by the core-normal-first rule above; attaching spheres have the oriented core-boundary orientation. These explicit conventions make the projection degree agree with $I(A_i,B_j)$, with the attaching sphere first. Other conventions can change rows or columns by signs. The mod-two statement is independent of all orientation choices.
- **Use.** Together with the handle chain complex this identifies the degree-$k$ excess $m_k-b_k$ with the sum of ranks of the adjacent intersection matrices, which is the algebraic input to the vanishing-correction criterion for perfectness.
