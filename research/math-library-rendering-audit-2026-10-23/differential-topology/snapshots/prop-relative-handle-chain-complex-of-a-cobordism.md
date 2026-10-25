---
id: prop-relative-handle-chain-complex-of-a-cobordism
kind: proposition
title: The relative handle chain complex computes $H_*(W,M_0)$ and has the intersection matrix as its differential
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
- def-handle-decomposition-relative-to-the-incoming-boundary
- lem-a-handle-decomposition-gives-a-relative-cw-complex
- thm-relative-cellular-homology-computes-relative-singular-homology
- thm-relative-homology-of-consecutive-cw-skeleta
- def-cellular-boundary-from-three-consecutive-skeleta
- lem-relative-homology-of-the-standard-handle-pair
- lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers
- lem-long-exact-sequence-of-a-triple-in-singular-homology
- def-attaching-belt-intersection-matrix-of-adjacent-index-handles
- def-relative-singular-homology
- def-countable-choice
- thm-excision-for-singular-homology
- prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
- thm-naturality-of-the-long-exact-sequence-of-a-pair
- thm-long-exact-sequence-of-a-pair-in-singular-homology
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- def-attaching-a-smooth-handle-with-corner-rounding
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §§3 and 7, printed pp. 23--36 and 79--92 (Theorems 3.14 and 7.4, Corollary 7.3)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170)
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a compact collared triad with a finite index-ordered handle decomposition relative to $M_0$. Let $W_k$ be the collar together with the handles of index at most $k$, and set $W_{-1}=M_0$. Put $C_k=H_k(W_k,W_{k-1};\mathbb Z)$ for $k\ge0$, $C_{-1}=0$, and $\partial_0=0$. For $k\ge1$, define $\partial_k:C_k\to C_{k-1}$ by the connecting map of the triple $(W_k,W_{k-1},W_{k-2})$. Then each $C_k$ is free on the oriented relative core classes of the $k$-handles, $\partial^2=0$, and $H_k(C_\bullet)\cong H_k(W,M_0;\mathbb Z)$ for every $k\ge0$.

For an oriented $W$, make the attaching spheres transverse to the belt spheres. Choose the belt orientations so that their oriented normal $k$-frames agree with the chosen $k$-core orientations, and use the boundary orientations on the upper attaching spheres. If $g_i$ is a $(k+1)$-handle and $e_j$ a $k$-handle, then
$$\partial_{k+1}[g_i]=\sum_j I(A_i,B_j)[e_j].$$
Thus the matrix with upper handles in rows and lower handles in columns acts on **row** coordinate vectors by $x\mapsto xM$; the usual column-coordinate matrix is $M^T$. In the middle range, when the outgoing boundary preceding the $k$-handles is connected, this is the matrix of [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]. For disconnected stages the displayed coefficient formula still defines the incidence matrix, without invoking that definition outside its domain. Endpoint coefficients use the signed incidences of the attaching $0$-sphere, or the dual incidences of belt $0$-spheres. A presentation with only indices $k,k+1$ has the complex $0\to C_{k+1}\xrightarrow{\partial_{k+1}}C_k\to0$.

## Facts & Assumptions

**Given:** The finite index-ordered presentation and countable choice; orient the individual core disks to select generators.

[F1] The standard $k$-handle pair has integral homology $\mathbb Z$ in degree $k$ and zero otherwise. [[lem-relative-homology-of-the-standard-handle-pair]]

[F2] Excision and the direct-sum decomposition for disjoint unions apply to relative singular chains. [[thm-excision-for-singular-homology]], [[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]

[F3] A triple connecting map factors as the pair connecting map followed by the relative quotient map. Pair sequences are exact and natural. [[lem-long-exact-sequence-of-a-triple-in-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-naturality-of-the-long-exact-sequence-of-a-pair]]

[F4] Core, attaching and belt regions have the standard disk-product models; the local attaching/belt coefficient computation is also described in [[lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers]]. [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]], [[def-attaching-a-smooth-handle-with-corner-rounding]]

## Proof

**Proof technique:** direct.

1.1 Product collars let us enlarge the lower stage slightly across each attaching seam and retract that enlargement onto the lower stage. Excision then identifies the relative homology of the next index stage with that of the disjoint union of its handle pairs; the retraction and excision preserve the relative core classes. By [F1]–[F2], $H_i(W_k,W_{k-1};\mathbb Z)$ is zero unless $i=k$, and in that degree is free on these cores. At $k=0$, compressing the initial collar onto $M_0$ gives the same calculation, including disjoint $0$-handles. [F1, F2, F4, given]

2.1 Write $\delta_k:C_k\to H_{k-1}(W_{k-1})$ for the pair connector and $p_{k-1}:H_{k-1}(W_{k-1})\to C_{k-1}$ for the quotient map. By [F3], $\partial_k=p_{k-1}\delta_k$. Exactness of the pair $(W_{k-1},W_{k-2})$ gives $\delta_{k-1}p_{k-1}=0$, so $\partial_{k-1}\partial_k=p_{k-2}\delta_{k-1}p_{k-1}\delta_k=0$ for $k\ge2$. For $k=1$ this follows from $\partial_0=0$. [F3, step 1.1, algebra]

3.1 The triple sequences and step 1.1 show inductively that $H_i(W_j,M_0)=0$ for $i>j$. Fix $k\ge0$. The triple $(W_k,W_{k-1},M_0)$ therefore injects $H_k(W_k,M_0)$ into $C_k$. Its image is the kernel of the connector into $H_{k-1}(W_{k-1},M_0)$, which itself injects into $C_{k-1}$ by the triple $(W_{k-1},W_{k-2},M_0)$ when $k\ge1$. Naturality and the connector factorization identify that composite with $\partial_k$. For $k=0$ the target is zero. Hence $H_k(W_k,M_0)$ identifies with $\ker\partial_k$. [F3, step 1.1, step 2.1, algebra]

4.1 The triple $(W_{k+1},W_k,M_0)$ identifies $H_k(W_{k+1},M_0)$ with the cokernel of $C_{k+1}\to H_k(W_k,M_0)$, because $H_k(W_{k+1},W_k)=0$. Under step 3.1 this map is $\partial_{k+1}$. Adding stages of index $j\ge k+2$ changes neither $H_k$ nor its map, since both $H_{k+1}(W_j,W_{j-1})$ and $H_k(W_j,W_{j-1})$ vanish. The finite filtration therefore gives $H_k(W,M_0)\cong\ker\partial_k/\operatorname{im}\partial_{k+1}$. [F3, step 1.1, step 3.1, algebra]

5.1 The pair connector sends an upper core class to its oriented attaching sphere. To read its coefficient at $e_j$, collapse the preceding stage and all other $k$-handle summands. In the outgoing piece $D^k\times S^{d-k-1}$ of $e_j$, $d=\dim W$, the resulting map to $D^k/S^{k-1}$ is projection onto the $D^k$ factor. A regular value at its center has preimages exactly $A_i\cap B_j$; the local degrees are $I(A_i,B_j)$'s local signs by the normal-orientation convention. Summing gives the displayed formula. For $k=0$ the connector records the two signed endpoints, and for $k=d-1$ the same calculation is dual. This local argument applies to a relative triad as well as a closed manifold. The coordinate convention and the two-index assertion now follow from steps 1.1–4.1. [F3, F4, step 1.1, step 4.1, algebra] ∎
