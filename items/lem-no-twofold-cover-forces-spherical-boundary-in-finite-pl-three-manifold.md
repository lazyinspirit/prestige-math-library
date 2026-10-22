---
id: lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold
kind: lemma
title: "The finite covering-tower endpoint has spherical boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ thm-cellular-homology-computes-singular-homology, thm-relative-cellular-homology-computes-relative-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema, lem-polygonal-schema-reduction-moves, lem-finite-polygonal-disk-and-collar-surgery ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, proof of Theorem 3.1, printed p.46: the last twofold-cover tower stage has spherical boundary"
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Chapter 2, final exercises, printed p.27, dual cells; the finite dual-chain calculation is supplied explicitly here"
dependency_level: 0
---

## Statement

Let $V$ be a compact connected orientable piecewise linear three-manifold with a finite compatible triangulation $K$, with boundary a subcomplex, and with every simplex link a standard piecewise linear sphere or ball of the appropriate dimension. If $V$ has no connected twofold covering space, every connected component of $\partial V$ is piecewise linearly homeomorphic to the standard two-sphere. This conclusion uses only finite simplicial and cellular calculations and has no choice hypothesis.

## Facts & Assumptions

**Given:** $V,K$ and the stated covering condition. All chains, cochains and matrices in this proof have coefficients in $\mathbb F_2$ and have finite dimension.

[F1] Finite cellular chain complexes compute singular homology, including relative CW pairs, and the pair homology sequence is exact ([[thm-cellular-homology-computes-singular-homology]], [[thm-relative-cellular-homology-computes-relative-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F2] A finite triangulated surface has a one-polygon schema; its finite polygonal reduction moves preserve the realization, and prescribed PL maps of polygonal disk boundaries extend over those disks ([[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]], [[lem-polygonal-schema-reduction-moves]], [[lem-finite-polygonal-disk-and-collar-surgery]]).

## Proof

**Given:** The data above. Fix an ordering of the finite vertex and simplex sets, used for all pivot selections.

1.1 Let $C_*(K)$ be the simplicial chain complex and $C^*(K)$ its vector-space dual, with coboundary $\delta$. Every simplicial one-cocycle $a$ is a coboundary. To prove this, construct a twofold simplicial cover from $a$: its vertices are $(v,\epsilon)$ for $\epsilon\in\mathbb F_2$, its lifted edge over $vw$ goes from $(v,\epsilon)$ to $(w,\epsilon+a(vw))$, and its lifted simplex over a simplex with vertices $v_0,\ldots,v_k$ has labels $\epsilon+a(v_0v_j)$ at $v_j$, with $a(v_0v_0)=0$. The cocycle identity on every triangle makes these prescriptions agree on faces and makes the two lifts of each vertex star disjoint copies of that star. Their realization is a genuine twofold covering space of $V$. If it were connected, it would contradict the hypothesis. Otherwise it has exactly two connected components, each projecting homeomorphically to $V$: path lifting connects a chosen fiber point to one point in every other fiber; if the same component contained both points of one fiber, it would contain both points of every fiber and the whole cover would be connected. Choose one component. The label $b(v)$ of its unique vertex over $v$ satisfies $a(vw)=b(v)+b(w)$, so $a=\delta b$. Thus $H^1(C^*(K))=0$. [given, construct]

2.1 Write $d_j:C_j(K)\to C_{j-1}(K)$ for the finite boundary matrices. Gaussian elimination, always taking the first available pivot in the fixed ordering, proves that a matrix and its transpose have the same rank. Consequently $$\dim H_1(C_*(K))=\dim C_1-\operatorname{rank}d_1-\operatorname{rank}d_2=\dim H^1(C^*(K))=0.$$ Thus $H_1(V;\mathbb F_2)=0$ by [F1]. No infinite basis or extension of a functional is selected. [F1, step 1.1, algebra]

2.2 For the finite triangulation fixed in step 1.1, there is also a relative dual-cell decomposition of $(V,\partial V)$. For a $k$-simplex $\sigma$ of $K$, let $B_\sigma$ be the closed union of barycentric simplices whose defining face chain begins with $\sigma$, together with all their faces. Its coface poset identifies it piecewise linearly with the cone on the barycentric subdivision of $\operatorname{lk}(\sigma,K)$. Hence it is a $(3-k)$-ball by the simplex-link hypothesis. For an interior simplex its boundary is the union of the blocks $B_\tau$ for proper cofaces $\tau\supsetneq\sigma$. For a boundary simplex its boundary additionally contains its side in $\partial V$: in the cone-on-ball model that side is the cone on the boundary of the link ball. The boundary side and the coface blocks are the two parts of its ball boundary. The interiors of the blocks off $\partial V$ are pairwise disjoint and cover $V\setminus\partial V$. Indeed, the least face with positive barycentric-chain coordinate determines the unique block interior, while a point whose chain lies wholly in $\partial V$ belongs to the boundary subcomplex. Starting with a finite triangulation of $\partial V$ and attaching these blocks in increasing dimension therefore gives a finite relative CW decomposition of $(V,\partial V)$. [given, step 1.1, construct]

3.1 Its relative cellular boundary is $$\partial B_\sigma=\sum_{\substack{\tau\supset\sigma\\\dim\tau=k+1}}B_\tau\quad\pmod{\partial V}.$$ Each listed block is an embedded codimension-one facet of $B_\sigma$ and occurs once. All other boundary faces have smaller dimension or lie in $\partial V$. Equivalently, in its barycentric triangulation the faces obtained by omitting an intermediate chain member cancel in pairs, and the uncanceled faces are precisely those with the least member replaced by an immediate coface; boundary-side faces are zero in the relative complex. Thus the basis correspondence from the cochain dual to $\sigma$ to $B_\sigma$ identifies $C^k(K)$, with coboundary, with the degree-reversed relative dual-cell complex in degree $3-k$. By [F1], this gives $$H_2(V,\partial V;\mathbb F_2)\cong H^1(C^*(K))=0.$$ This is a finite chain-matrix duality calculation, not an invocation of a general Poincaré duality theorem. [F1, step 1.1, step 2.2, construct]

4.1 The portion $H_2(V,\partial V;\mathbb F_2)\to H_1(\partial V;\mathbb F_2)\to H_1(V;\mathbb F_2)$ of the exact sequence in [F1] now has zero outer groups. Therefore $H_1(\partial V;\mathbb F_2)=0$. In particular this holds for each boundary component, since the finite boundary chain complex is the direct sum of its component complexes. Each component is a closed orientable finite PL surface. [F1, step 2.1, step 3.1, algebra]

5.1 For completeness, apply the finite surface procedure [F2] to such a component $S$. Coherent triangle orientations give opposite directions on the two occurrences of every paired polygon side. Cancel adjacent inverse pairs, retaining the terminal sphere bigon. If an uncanceled residue is nonempty and is not that bigon, it has interlaced pairs: otherwise all pairing chords on its boundary circle would be noncrossing, and an innermost chord would give an adjacent inverse pair. Extract an interlaced pair as a commutator block using [F2]'s explicit cut-and-merge identity, reserve that block, and repeat on the residue. Each cancellation deletes a pair, and each extraction removes two pairs from the unprocessed residue, so this terminates with either the sphere bigon or a product of $g\ge1$ commutator blocks. All cuts and disk identifications are polygonal, and their parametrizations are PL by the disk-extension clause of [F2], so the resulting model is PL homeomorphic to $S$. [F2, step 4.1, construct]

6.1 A nonempty commutator model has one vertex, $2g$ one-cells, and one two-cell. Its first boundary is zero and its second boundary is zero modulo two, since every side occurs twice. Hence its first homology has dimension $2g>0$ by [F1], contrary to step 4.1. The only remaining model is the sphere bigon, whose quotient is the standard PL two-sphere; one may subdivide its two boundary arcs and realize it as two polygonal disks glued along their common boundary. Thus every component is a PL sphere. All covers, blocks, reductions and pivots used finite data; no arbitrary-index or countable choice was required. [F1, F2, step 4.1, step 5.1] ∎ 