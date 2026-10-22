---
id: lem-compact-connected-manifold-fundamental-group-has-finite-generators-in-zf
kind: lemma
title: Compact manifold fundamental groups have finite generators without choice
status: draft
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Hatcher, Algebraic Topology, fundamental groups and finite graph
        generators
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $M$ be a compact connected Hausdorff topological manifold and $o\in M$. There is a finite based graph mapped continuously into $M$ such that its induced fundamental-group map is onto. Consequently $\pi_1(M,o)$ has a finite generating list, without a choice principle. No triangulation or smooth structure on $M$ is assumed.

## Facts & Assumptions

**Given:** The compact connected manifold and specified basepoint.

## Proof

1.1 First construct a compatible metric from finite data. Compactness supplies finitely many coordinate balls $V_i$ whose closures lie in larger coordinate balls with charts $\varphi_i$; take their coordinate images concentric balls of radii $r_i<R_i$. A continuous radial function $\chi_i$ equals one on $\overline V_i$, decreases linearly to zero before the larger chart boundary, and is zero elsewhere on $M$. The finitely many functions $\chi_i$ and $\chi_i\varphi_i$, extended by zero, are continuous because their coordinate supports are compactly contained in the charts. Their combined map $F$ into a finite Euclidean space is injective: for $x$, choose $i$ with $x\in V_i$, so $\chi_i(x)=1$; equality $F(x)=F(y)$ forces $\chi_i(y)=1$ and $\varphi_i(x)=\varphi_i(y)$, hence $x=y$. A continuous injection of a compact space into a Hausdorff space is a homeomorphism onto its image: images of closed subsets are compact and hence closed. Therefore $d(x,y)=|F(x)-F(y)|$ is a compatible metric. All choices so far are finite. [given, construct, algebra]

2.1 Choose a finite cover of $M$ by contractible coordinate balls. It has a positive Lebesgue number $\lambda$: for a finite open cover the functions $x\mapsto d(x,M\setminus U)$, with the empty-complement case assigned a positive constant, are continuous; their finite maximum is everywhere positive and has a positive minimum on compact $M$. A sufficiently small number below that minimum makes every set of diameter less than $\lambda$ lie in some member, by taking a point in the set and using the corresponding distance bound. Choose $0<\epsilon<\lambda/10$. There is a finite cover by smaller coordinate balls $B_j$ of $d$-diameter less than $\epsilon$, because one can shrink a coordinate neighborhood inside a metric ball of radius less than $\epsilon/2$ and then take a finite subcover. Choose $0<\delta<\epsilon$ that is a Lebesgue number for this second finite cover. Any pair of points of distance less than $\delta$ can therefore be joined inside one $B_j$ by its straight coordinate path, of diameter less than $\epsilon$. [step 1.1, given, construct, algebra]

3.1 Compactness gives a finite $\delta/4$-net of anchors $a_0=o,a_1,\ldots,a_s$, with the basepoint added first. For each unordered distinct anchor pair of distance less than $\delta$, put an edge in a finite graph and map it to the straight coordinate path in the least-index $B_j$ containing that pair; the reverse orientation uses the reversed path. Map each vertex to its anchor. For any $x\in M$, let $a(x)$ be the least-index anchor at distance less than $\delta/4$. Join $x$ to $a(x)$ by the straight path in the least-index $B_j$ containing them. These connectors have diameter less than $\epsilon$ and are defined by finite lists and the chart formulas, without choosing a family of paths. At $o$ take the constant connector. [step 2.1, construct, algebra]

4.1 Let $\ell$ be any based loop in $M$. Uniform continuity on its compact interval gives a finite subdivision such that each segment has image diameter less than $\delta/4$. Write its successive endpoints as $x_i$ and anchors as $a_i=a(x_i)$. Then $d(a_i,a_{i+1})<3\delta/4$, so the selected graph has an edge between successive distinct anchors; repeated anchors give the constant path. The loop formed by this edge, the original loop segment and the two endpoint connectors is contained in a set of diameter less than $4\epsilon$: each connector and edge has diameter less than $\epsilon$, and its initial or terminal point lies within $\delta/4$ of an endpoint of the original short segment. This entire small loop therefore lies in one of the contractible coordinate balls of step 2.1. Contract it there. Gluing these finitely many homotopies, with adjacent connectors cancelling, shows that $\ell$ is based homotopic to the resulting graph edge loop at $a_0=o$. Thus the fundamental-group map of the component of this finite graph containing $a_0$ is onto. [step 2.1, step 3.1, given, construct, algebra]

5.1 Choose a spanning tree of that finite graph component by its finite vertex order. For every oriented edge outside the tree, follow the tree path from the base vertex to its initial vertex, traverse the edge, and return along the tree path from its terminal vertex. These finitely many loops generate all graph edge loops: insert the corresponding tree paths at successive vertices of an edge loop; the intervening inverse tree paths cancel, and a tree-edge loop contracts by deleting immediate reversals. Step 4.1 then makes their images generate $\pi_1(M,o)$. All graph data, covers, nets and tree paths were finite; a loop uses its own one finite subdivision and finite homotopy construction. No infinite family of generators, partitions or primitives was selected. This proves the statement without AC. [step 3.1, step 4.1, construct, algebra] ∎
