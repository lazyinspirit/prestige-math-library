---
id: lem-finite-sector-cover-euler-measure-and-boundary-ramification
kind: lemma
title: "Finite sector covers give Euler measure and half boundary ramification"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-euler-characteristic-of-a-finite-cw-complex
proof_strategy: direct
axiom_use: "No choice principle. Cellulations, local sectors and finite covers are given finite data; all refinements and selections in the proof are finite. No classification of surfaces or arbitrary triangulation theorem is invoked."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §4.1–4.2"
      url: "https://arxiv.org/pdf/math/0502404"
    - title: "Rasmussen, Floer homology and knot complements, §9.1–9.3"
      url: "https://arxiv.org/pdf/math/0306378"
---

## Statement

The following assertions concern explicit finite surface and covering data and require no choice principle. Euler characteristic means the alternating finite cell count in the given cellulations.

First, let $p:T\to F$ be a degree-$d$ proper topological branched covering between compact surfaces with boundary, with finitely many interior branch points. At an interior point it has the oriented local model $z\mapsto z^{r_x}$, and on the boundary it is a local homeomorphism of half-disk neighborhoods. Assume a finite triangulation of $F$ is given, with branch values as vertices, no triangle containing two branch-value vertices, and with each closed triangle containing a branch value restricted near that vertex to a single sector in its local coordinate. Then its lifted finite cell count satisfies
$$\chi(T)=d\chi(F)-\sum_{x\in\operatorname{int}T}(r_x-1).$$
In particular a degree-$m$ such covering of a disk satisfies $\chi(T)=m-\sum_x(r_x-1)$. Disconnected source surfaces are allowed.

Now let $S$ be a compact oriented surface with a finite embedded graph $H$ containing its boundary. Cutting along $H$ gives finitely many compact cornered surfaces $P_a$ with circular boundary components, each with a given finite cellulation extending the graph subdivision on its boundary. Let finitely many compact cornered target regions $F_b$ also have given finite cellulations and corner angles $0<\alpha<2\pi$, and put
$$e(F_b)=\chi(F_b)-\sum_{c\text{ a corner of }F_b}\frac{\pi-\alpha_c}{2\pi}.$$
Suppose every $P_a$ is equipped with a degree-$d_a$ proper topological branched cover of one $F_{b(a)}$, unramified on its boundary in the topological half-disk sense. Its interior branch points have local models and adapted target triangulations as in the preceding paragraph. Every target corner has exactly $d_a$ boundary preimages counted over all components of that cover; their assigned image-sector angles are the corresponding target angle. The cellulation used on each $P_a$ is the lifted one from that target triangulation, with finite edge and face subdivisions allowed; its boundary subdivision agrees with $H$. These covers agree to give the stated finite cut-cover data on $S$. All corners of the cut pieces and all graph vertices are included in the subdivisions, with extra smooth boundary vertices permitted and assigned angle $\pi$.

Define the image domain multiplicity $n_b=\sum_{a:b(a)=b}d_a$ and $e(D)=\sum_b n_be(F_b)$. At a graph vertex $v$, let $A_v$ be the sum of the image-sector angles of the incident cut-piece corners, counting occurrences even if two belong to the same piece. Let $R_{\mathrm{face}}$ be the sum of the interior ramification defects of all the piece covers. Then
$$e(D)=\chi(S)+R_{\mathrm{face}}+\sum_{v\in H\setminus\partial S}\left(\frac{A_v}{2\pi}-1\right)+\sum_{v\in\partial S}\left(\frac{A_v}{2\pi}-\frac12\right).$$
Here interior graph vertices have circular links and boundary graph vertices have interval links; no isolated graph vertices are allowed, and every boundary circle has a vertex. Only the finite data just specified are needed for this identity.

Consequently, suppose that interior graph vertices have total angles $A_v=2\pi r_v$, ordinary boundary graph vertices have $A_v=\pi r_v$, with positive integers $r_v$, and the remaining marked boundary corners have angles $A_c=\pi/2$ or $3\pi/2$. Write $c_{90},c_{270}$ for their numbers,
$$e(S)=\chi(S)-\frac{c_{90}}4+\frac{c_{270}}4,\quad R_{\mathrm{int}}=R_{\mathrm{face}}+\sum_{v\in H\setminus\partial S}(r_v-1),\quad R_{\mathrm{bdry}}=\sum_{v\in\partial S\text{ ordinary}}(r_v-1).$$
Then
$$e(S)=e(D)-R_{\mathrm{int}}-\frac12R_{\mathrm{bdry}}.$$
Thus a simple interior branch contributes one and a simple boundary branch contributes one half; an unramified $90$-degree corner contributes $-1/4$ and a $270$-degree corner contributes $+1/4$ to Euler measure. For a target region with only right and reflex right corners, $e(F_b)=\chi(F_b)-c_{90}(F_b)/4+c_{270}(F_b)/4$.

The hypotheses include the actual finite covering and angle data. This result does not assert that an arbitrary Whitney class has such a cut-cover representative, or identify its determinant winding or its source end-corner corrections. It makes no genus-classification or multipointed sphere-normalization assertion.

## Statement references

[[def-euler-characteristic-of-a-finite-cw-complex]]

## Facts & Assumptions

**Given:** Exactly the finite surfaces, cellulations, local branched-cover and sector data in the Statement. No choice principle is assumed.

[F1] The Euler characteristic of a finite cell complex is the alternating sum of its cell counts ([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Proof

1.1 **Trivialize a finite cover over a single cell without a choice axiom.** Away from the branch values the stated proper local models give a finite covering. For completeness, properness and a finite fiber give an evenly covered neighborhood: choose disjoint local inverse neighborhoods about the finitely many preimages, shrink their common image, and exclude any further preimages by compactness. A covering over an interval or an open triangle is trivial. Indeed, lift a path from a fixed point and a specified preimage by subdividing its compact parameter interval into finitely many pieces mapped into evenly covered neighborhoods; on each piece the preceding endpoint selects the unique sheet. Uniqueness on overlapping pieces makes refinement irrelevant. For a homotopy of paths, compactness of the parameter square gives a finite rectangular grid whose image on each small rectangle lies in one evenly covered neighborhood. Starting along the initial edge and using its chosen sheet on each rectangle proves by induction that endpoint-fixed homotopic paths lift to the same endpoint. Every loop in an interval or triangle contracts by straight-line interpolation. Hence, for each of the finitely many points in a single fiber, lifting paths defines a unique section over the cell, independent of the path. It is continuous because in a small evenly covered neighborhood it is the inverse of a single sheet. These finitely many disjoint sections exhaust the cover. This proves that each open edge and face has exactly $d$ homeomorphic lifts; it also proves the same assertion for a closed triangle with its sole possible branch vertex removed, by the straight-line contraction of a triangle with one vertex deleted. All choices here are finite for each particular path or homotopy; path independence defines the section uniquely, with no choice of paths as a family. [given, construct, algebra]

2.1 **Close the lifted cells and count the deficit at vertices.** At a branch vertex use the specified local sector of $z\mapsto z^{r_x}$. Each inverse sheet on the punctured target sector has a continuous extension to its vertex, because $|z|=|w|^{1/r_x}\to0$; an unramified vertex extends by its local inverse. Thus the lifted open cells close to finite topological cells. The sector and at-most-one-branch-vertex hypotheses ensure their attaching maps have precisely the usual cyclic links at interior vertices and interval links at boundary vertices. They give a cellulation of $T$: local inverses cover all nonvertex points, and the local models cover every sector at a vertex. If the target counts are $V,E,F_2$, the lifted edge and face counts are $dE,dF_2$ by step 1.1. At a target vertex $y$, the local degree formula is $\sum_{x\in p^{-1}(y)}r_x=d$, since a nearby regular value has exactly $r_x$ preimages in the local disk about $x$ and no others after shrinking, by properness. Boundary vertices have $d$ unramified preimages. Thus the total vertex count is $dV-\sum_x(r_x-1)$. Substitution in [F1] proves $\chi(T)=d\chi(F)-\sum_x(r_x-1)$. This also applies component by component and to a disk, whose finite cell count is one. [F1, step 1.1, construct, algebra]

3.1 **Cut-piece Euler bookkeeping.** Subdivide the finite graph and the finitely many piece cellulations along the prescribed vertices; the pieces are to be glued along full boundary edges. Inserting a vertex in an edge adds one vertex and one edge and preserves [F1]. Splitting a disk face by an interior edge adds one edge and one face, and inserting a face vertex with $k$ radiating edges adds one vertex, $k$ edges and $k-1$ faces, also preserving the count. The stipulated finite subdivisions therefore retain the lifted counts of step 2.1. The union of all piece interiors with the graph therefore has $\chi(S)=V_H-E_H+\sum_a\chi(P_a)$. To verify this directly from cells, retain all graph vertices and edges only once. For each piece its interior cells contribute $\chi(P_a)-\chi(\partial P_a)$. Every boundary component is a subdivided circle with equal numbers of vertices and edges, so $\chi(\partial P_a)=0$. This proves the formula even when several boundary edges or vertices of one piece are identified in $S$. The boundary preimage and angle hypotheses, and step 2.1 applied to every piece cover, also give $e(D)=\sum_a\chi(P_a)+R_{\mathrm{face}}-\sum_{\text{corner occurrences}}(1/2-\alpha/(2\pi))$. Extra smooth corners have angle $\pi$ and contribute zero, so none is counted twice or lost by subdivision. [F1, step 2.1, algebra]

4.1 **Local link count, including the boundary factor one half.** Let $s_v$ be the number of incident cut-piece corner occurrences at $v$ and $d_v$ its graph valence, counting a loop edge twice. The circular link of an interior vertex has one sector between consecutive edge germs, so $s_v=d_v$. The interval link at a boundary vertex has two endpoint germs along the boundary and all other germs between them, so $s_v=d_v-1$. Also $\sum_v d_v=2E_H$. The corner sum in step 3.1 is $\sum_v(s_v/2-A_v/(2\pi))$. Substitute its expression and the graph Euler formula there to obtain $e(D)=\chi(S)+R_{\mathrm{face}}+\sum_v(d_v/2-1-s_v/2+A_v/(2\pi))$. At an interior vertex this summand is $A_v/(2\pi)-1$; at a boundary vertex it is $A_v/(2\pi)-1/2$. This is the asserted general formula, using only the finite graph link identities. In particular a boundary critical point has not been treated as a full interior branch point. [step 3.1, algebra]

5.1 **Ramification and right-corner specialization.** For an interior vertex with $A_v=2\pi r_v$, the term in step 4.1 is $r_v-1$. At an ordinary boundary vertex with $A_v=\pi r_v$, it is $(r_v-1)/2$. A corner of angle $\pi/2$ has term $-1/4$, and one of angle $3\pi/2$ has term $+1/4$. Separating these four finite sums in step 4.1 gives $e(D)=\chi(S)-c_{90}/4+c_{270}/4+R_{\mathrm{int}}+R_{\mathrm{bdry}}/2$, which rearranges to the claimed formula. The target right-corner expression follows from exactly the same substitution in its defining finite corner sum. This conclusion uses the prescribed angle data, not an unproved assertion that a given analytic or Whitney representative supplies them. [step 4.1, algebra] ∎
