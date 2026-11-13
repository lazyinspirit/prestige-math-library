---
id: def-recursive-induced-separator-graphs
kind: definition
title: Recursive graphs Ar and their attachments
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-graph-isomorphism-and-complement
  - math:def-graph-walk-trail-path-and-cycle
  - math:def-connected-graph-and-connected-component
  - def-independent-remainder-for-induction
  - prop-base-graph-for-induced-separation
  - def-finite-labelled-neighbourhood-attachments
  - lem-finite-graph-update-recursion
  - math:def-induced-embedding-and-induced-copy
  - math:def-injection-surjection-bijection
  - math:def-natural-numbers
  - math:def-finite-cardinality
  - math:def-nat-order
  - math:thm-nat-linear-order
  - math:thm-well-ordering-principle
  - math:thm-induction-principle
  - math:thm-subset-of-a-finite-set
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  def-independent-remainder-for-induction: mathematical-premise
  prop-base-graph-for-induced-separation: mathematical-premise
  def-finite-labelled-neighbourhood-attachments: mathematical-premise
  lem-finite-graph-update-recursion: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-natural-numbers: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:def-nat-order: mathematical-premise
  math:thm-nat-linear-order: mathematical-premise
  math:thm-well-ordering-principle: mathematical-premise
  math:thm-induction-principle: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning Next; Figure 1
      statement: Starting with A1 = H2, construct Ar from a core A and, for every
        induced copy of F in A and every u in I, a disjoint copy of Ar-1 joined
        to the vertices corresponding to the neighbours of u in H2.
      hypotheses: H1 and H2 are non-isomorphic connected graphs with edges, ordered as
        in the preceding paragraph; I is independent, F = H2 - I, A is the
        stated base graph, and 2 <= r <= k.
      reading_limits: The frozen extracted article text at the cited construction was
        read. This citation attributes the construction and is not a proof
        premise; the rendered figure was not independently inspected.
dependency_level: 13
---

## Definition

Let $k\geq2$ be an integer. Let $H_1,H_2$ be non-isomorphic finite connected simple graphs with edges, ordered so that $\beta(H_1)\geq\beta(H_2)$ and, in case of equality, $|V(H_1)|\geq|V(H_2)|$. A graph is connected if its vertex set is nonempty and every two vertices are joined by a path. A block is a maximal 2-connected subgraph, or a bridge with its endpoints; 2-connected means connected, with at least three vertices, and remaining connected after deletion of any vertex. A bridge is an edge whose deletion increases the number of connected components. For a graph with an edge, $\beta$ is the largest number of vertices in a block; for a nonempty edgeless graph it is $1$.

Fix an independent set $I$ of $H_2$ such that $F=H_2-I$ has $\beta(F)<\beta(H_2)$, and fix a finite simple graph $A$ containing no induced copy of $H_1$ and having the property that every vertex colouring with $k$ available colours contains a monochromatic induced copy of $F$. Independent means that no edge has both endpoints in $I$; $H_2-I$ is the graph induced on $V(H_2)\setminus I$. An induced copy of $F$ in $A$ is a subgraph $A[S]$ induced by a vertex set $S\subseteq V(A)$ for which there is an induced embedding $F\to A$ with image $S$: this is an injective vertex map preserving both adjacency and nonadjacency.

Fix bijections $V(H_2)\to h$ and $V(A)\to a$, where $h=|V(H_2)|$ and $a=|V(A)|$ are natural numbers regarded as finite ordinals. Transport the edges and $I$ along these bijections, and use $H_2,A,I,F$ for the resulting labelled objects. Thus $V(H_2)=h$ and $V(A)=a$. Use the natural-number order on these labels and its restrictions to $V(F)$ and $I$. Lists of equal length are compared lexicographically at their first unequal coordinate. For each vertex set $S$ inducing a copy of $F$ in $A$, choose the lexicographically least induced embedding $\varphi_S:F\to A$ with image $S$, comparing its lists of images in the order of $V(F)$. Set $A_1=H_2$. For $2\leq r\leq k$, form a core that is a copy of $A$ and, for every such $S$ and every $u\in I$, a part $H_{\varphi_S,u,r-1}$ that is a copy of $A_{r-1}$. The core and all parts are pairwise vertex-disjoint. Retain their internal edges. Join every vertex of $H_{\varphi_S,u,r-1}$ to precisely those core vertices corresponding to $\varphi_S(v)$ for which $v\in V(F)$ and $\{u,v\}\in E(H_2)$. Add no other edges.

To make the recursion deterministic, use the tagged core and parts of the labelled attachment construction, retaining only the parts indexed by the chosen $\varphi_S$. Order the tagged vertices lexicographically: core vertices first in their $A$-label order, then parts by the image lists of $\varphi_S$ and the label of $u$, and vertices within each part by their $A_{r-1}$ labels. Relabel this finite ordered vertex set by the unique order-preserving bijection onto its finite ordinal of the same size, transporting all edges and the names of the core and parts. The resulting labelled graph is $A_r$. Thus $A_r$ has exactly one part for each induced vertex-set copy of $F$ and each $u\in I$; its named core and parts retain the specified adjacencies after relabelling.

## Definition references

[[math:def-finite-simple-graph]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-graph-isomorphism-and-complement]]

[[math:def-graph-walk-trail-path-and-cycle]]

[[math:def-connected-graph-and-connected-component]]

[[def-independent-remainder-for-induction]]

[[prop-base-graph-for-induced-separation]]

[[def-finite-labelled-neighbourhood-attachments]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-injection-surjection-bijection]]

[[math:def-natural-numbers]]

[[math:def-finite-cardinality]]

[[math:def-nat-order]]

[[math:thm-nat-linear-order]]

[[math:thm-well-ordering-principle]]

[[math:thm-induction-principle]]

[[math:thm-subset-of-a-finite-set]]

## Justification

The independent-remainder definition supplies an eligible fixed $I$ and nonempty $F$ under the stated hypotheses. The base-graph proposition supplies an eligible finite $A$ for this $k$. The induced-embedding definition gives exactly the maps used to identify induced copies, and the injection and bijection definitions specify the vertex maps and relabellings. [[def-independent-remainder-for-induction]] [[prop-base-graph-for-induced-separation]] [[math:def-induced-embedding-and-induced-copy]] [[math:def-injection-surjection-bijection]]

The natural numbers used as labels are the finite ordinals, and finite cardinality supplies the two initial bijections. Edge transport means replacing each edge by the pair of labels of its endpoints, so each labelling is a graph isomorphism and the chosen set and its induced remainder are transported with it. In particular, the labelled $H_2$ has vertex set exactly $h$ and is a finite simple graph in the domain of the graph-update recursion lemma. The natural-number order is a total order; its strict part is irreflexive, transitive and compares every two distinct labels. Its restrictions give the indicated orders on the finite sets $V(F)$ and $I$. [[math:def-natural-numbers]] [[math:def-finite-cardinality]] [[math:def-injection-surjection-bijection]] [[math:def-graph-isomorphism-and-complement]] [[math:def-nat-order]] [[math:thm-nat-linear-order]]

The following elementary finite-order argument supplies both least elements and relabellings. A strict total order means an irreflexive, transitive relation comparing each two distinct elements. In any nonempty finite strictly totally ordered set, take a bijective finite listing and scan it, retaining the smaller of the retained element and the next element. Induction on the number of entries scanned shows that the retained element is the least of all entries scanned, so the final element is the unique least element of the set. Now prove by induction on $n$ that each finite strictly totally ordered set $B$ of cardinality $n$ has a unique increasing bijection from $n$ onto $B$. For $n=0$ the empty map is the only map. For cardinality $n+1$, take the unique least element $b$. Swap its position with the last position in any bijective listing of $B$; deleting that last position gives a bijection from $n$ onto $B\setminus\{b\}$. Induction gives the unique increasing listing of this remainder. Prepending $b$ gives an increasing listing of $B$; any increasing listing must start with $b$, and its tail is the unique remainder listing, proving uniqueness. Taking the inverse gives the unique order-preserving bijection $B\to n$: an earlier element receives a smaller label. The arbitrary listings used in this existence argument do not affect the unique resulting maps. [[math:def-finite-cardinality]] [[math:def-injection-surjection-bijection]] [[math:thm-induction-principle]]

Lexicographic comparison is a strict total order on lists of any fixed finite length. Distinct lists have a least differing coordinate by the well-ordering principle on their natural-number coordinate indices; the total order on labels then compares them uniquely. For transitivity, if $x<_{\mathrm{lex}}y$ first differs at $p$ and $y<_{\mathrm{lex}}z$ first differs at $q$, all three agree before $\min(p,q)$. If $p<q$, then $x_p<y_p=z_p$; if $q<p$, then $x_q=y_q<z_q$; if $p=q$, then $x_p<y_p<z_p$. Thus $x<_{\mathrm{lex}}z$ in every case, and irreflexivity follows from the need for a differing coordinate. The length-zero case has only the empty list. The preceding finite-order argument lists $V(F)$ in increasing order. An embedding is determined by its image list in that order, so distinct embeddings have distinct lists. The attachment supplier gives a finite set of induced embeddings. For each induced image $S$, the embeddings having image $S$ form a nonempty subset, hence are finite. The finite-order argument therefore supplies its unique lexicographically least embedding $\varphi_S$. [[math:def-nat-order]] [[math:thm-nat-linear-order]] [[math:thm-well-ordering-principle]] [[math:thm-induction-principle]] [[math:def-induced-embedding-and-induced-copy]] [[def-finite-labelled-neighbourhood-attachments]] [[math:thm-subset-of-a-finite-set]]

For each finite labelled input $L$, including the graph with no vertices, the labelled neighbourhood-attachment construction has finitely many embedding-indexed parts and is a finite simple graph. The supplier identifies the graph using one chosen embedding per image as the induced subgraph on the core and the chosen parts. For part vertices the ordering keys are the image list of $\varphi_S$, the label of $u$, and the label of the vertex of $L$. Distinct part vertices have distinct keys. The lexicographic argument orders these keys strictly and totally; ordering the core first in its label order extends this to a strict total order on all tagged vertices. The finite-order argument gives its unique order-preserving relabelling by its finite cardinality. Transporting edges along this bijection gives a unique finite simple graph with that finite ordinal as vertex set. Hence these rules give a total deterministic update on finite simple graphs with finite ordinal vertex sets. Applying finite-graph update recursion to the labelled $H_2$ and this update defines a unique finite labelled graph at every positive index, in particular through $k$; transporting the tags preserves the described core and attachments. No Ramsey property of $A_r$ is assumed here. [[def-finite-labelled-neighbourhood-attachments]] [[math:def-finite-simple-graph]] [[math:def-finite-cardinality]] [[math:def-injection-surjection-bijection]] [[math:thm-nat-linear-order]] [[math:thm-induction-principle]] [[lem-finite-graph-update-recursion]]
