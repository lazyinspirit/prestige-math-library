---
id: lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves
kind: lemma
title: "Coxeter elements of tree type are conjugate by source and sink firings"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - def-cg-coxeter-diagram-components-and-finite-type
  - thm-cg-finite-type-positive-definite-criterion
  - lem-cg-positive-definite-diagram-exclusions
  - def-hh-coxeter-matrix-word-group-and-length
  - def-generated-subgroup
  - def-tree-forest-and-leaf
  - def-partial-order
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "H. Eriksson and K. Eriksson, Conjugacy of Coxeter Elements, Electronic Journal of Combinatorics 16(2) (2009), #R4"
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v16i2r4/pdf/"
      locator: "Introduction, p. 1 (Coxeter words and Theorem 1.1); §2, Proposition 2.3 and its proof (all orientations of a tree are connected by source/sink firings, by induction on a leaf); §4 (orientations and conjugacy). The complete 7-page article was read."
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, $|S|=n$, Coxeter diagram $\Gamma$, and Coxeter elements $c,c'$ defined as once-each products ([[def-cg-coxeter-diagram-components-and-finite-type]], [[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (1)). Suppose $W$ is of finite type. Then every connected component of $\Gamma$ is a tree: finiteness of $W$ makes the Coxeter form $B$ positive definite, and its restriction to each component is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)); the positive-definite diagram exclusions show each component has no cycle ([[lem-cg-positive-definite-diagram-exclusions]] (2)); hence each nonempty connected component is a tree ([[def-tree-forest-and-leaf]]).

**(1) Orientation moves on a tree.** Let $T$ be a finite tree. A **source** in an orientation is a vertex whose incident arrows all point away from it; a **sink** is one whose incident arrows all point towards it. **Firing** a source or sink reverses all its incident arrows. Every orientation of $T$ is acyclic, and any two orientations are connected by a finite sequence of firings.

**(2) Orderings and orientations.** An ordering of $S$ orients each edge $\{s,t\}$ of $\Gamma$ from its earlier vertex to its later vertex. This orientation is acyclic, and every acyclic orientation is obtained from some ordering. Its product is independent of the chosen ordering that realizes the orientation, so an acyclic orientation determines a Coxeter element. If a source or sink $s$ is fired, the new Coxeter element is $s c s=s c s^{-1}$.

**(3) Conjugacy.** If every connected component of $\Gamma$ is a tree, then any two Coxeter elements are conjugate by a product of simple reflections. In particular this holds in finite type, since then every connected component is a tree. If $S=\emptyset$, then $W=\{1\}$ and the unique Coxeter element is conjugate to itself.

**(4) Limits.** Finite type is sufficient, not necessary, for the conjugacy assertion: its proof only needs each component to be a tree. No conjugacy claim is made for diagrams with cycles. No finite classification or geometric realization is used, and no Choice is needed.

## Facts & Assumptions

**Given:** A Coxeter system $(W,S)$ with finite $S$, its labelled diagram $\Gamma$, Coxeter form $B$, and Coxeter elements defined by once-each orderings. In clauses (1)–(3), finite type means $W$ is finite.

[F1] The diagram has a finite vertex set $S$, an edge exactly when $m(s,t)\ge3$, and connected components that partition $S$; a connected component is nonempty. Finite type means that $W$ is finite ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] If $W$ is finite, then $B$ is positive definite. Its restriction to the span of a component's simple roots is positive definite; a connected positive-definite Coxeter diagram has no cycle. A nonempty connected acyclic finite graph is a tree ([[thm-cg-finite-type-positive-definite-criterion]] (1), [[lem-cg-positive-definite-diagram-exclusions]] (2), [[def-tree-forest-and-leaf]]).

[F3] Every Coxeter element is a product of the simple generators in some ordering, with each used once. Under the component decomposition, it has the corresponding component Coxeter elements as coordinates ([[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (1),(3)).

[F4] In the Coxeter presentation, $s^2=1$ for every $s\in S$; if $m(s,t)=2$ then $(st)^2=1$ and therefore $st=ts$. The edge set of $\Gamma$ is exactly the pairs with $m(s,t)\ge3$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-diagram-components-and-finite-type]]).

[F5] A partial order is reflexive, antisymmetric, and transitive ([[def-partial-order]]).

[F6] The multiplication map from the product of the standard subgroups of the connected components to $W$ is an isomorphism, and the component coordinates of a Coxeter element are the products in the restricted orderings ([[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (3), [[def-generated-subgroup]]).

## Proof

**Proof technique:** finite induction on the tree's vertices, followed by translating firings into conjugations.

**Given:** The data above; for a finite tree $T$, two orientations $\omega,\omega'$; and, for the conjugacy clauses, two once-each orderings defining $c,c'$.

1.1 (Firings connect tree orientations.) Every orientation of a tree is acyclic because a directed cycle would be an undirected cycle. Prove firing connectivity by induction on the number of vertices. For one vertex there is only one orientation; for two vertices a single firing of either endpoint reverses the only edge. For a tree with at least three vertices, an endpoint $v$ of a longest simple path is a leaf: a neighbour outside the path would extend it, and a second neighbour on the path would create a cycle. Let $u$ be its neighbour and put $T'=T\setminus\{v\}$. This is a smaller tree, since a path between remaining vertices cannot use a leaf internally and deleting a vertex creates no cycle. By induction, a finite firing sequence changes $\omega|_{T'}$ to $\omega'|_{T'}$. Lift each firing at $x\ne u$ directly, since its incident edges are unchanged. Immediately before a firing at $u$, its incident arrows in $T'$ all point in one direction; if the edge $uv$ points the other way, fire the leaf $v$ first, which is always legal and flips only $uv$. Now fire $u$. The restriction to $T'$ follows the inductive sequence. At the end, if $uv$ has the wrong direction, fire $v$ once more. This reaches $\omega'$ and proves (1). [F1, F2, construct]

1.2 (Orderings encode acyclic orientations.) An ordering gives no directed cycle because the position strictly increases along each oriented edge. Conversely, in a finite acyclic orientation there is a source: otherwise repeatedly following an incoming edge would revisit a vertex and give a directed cycle. Remove a source and repeat to obtain an ordering realizing every edge direction. If two such orderings realize the same orientation, they are linear extensions of the partial order generated by its directed paths. To connect the extensions, move the first vertex of one extension left through the preceding vertices of the other; each crossed vertex is incomparable with it, and induction repeats this on the remaining vertices. Incomparable vertices cannot be joined by an edge, so their generators commute by [F4]. Thus all these orderings give the same product, proving the orientation-to-element assertion. [F1, F4, F5, choose, algebra]

2.1 (One firing is conjugation.) If $s$ is a source, choose a realizing ordering that starts with $s$ and write $c=sz$. After firing $s$, the ordering with $s$ moved to the end realizes the new orientation, so its product is $zs=s(sz)s^{-1}$ by $s^2=1$. If $s$ is a sink, choose a realizing ordering ending in $s$, write $c=zs$, and move $s$ to the beginning after firing; the new product is $sz=s(zs)s^{-1}$. This also covers an isolated vertex: it is both source and sink, firing changes no edge, and it commutes with all other generators. Hence each firing conjugates by its simple reflection. [F4, step 1.2, algebra]

3.1 (Componentwise conjugacy.) If $S=\emptyset$, both products are $1$. Otherwise suppose every connected component of $\Gamma$ is a tree; finite type guarantees this by [F2]. Restrict the orderings defining $c,c'$ to each component. By step 1.1 a finite firing sequence connects the resulting orientations, and by step 2.1 each firing conjugates the corresponding component product by a simple reflection. Thus each component pair is conjugate by some $w_i\in W_{S_i}$. The component decomposition in [F6] combines these into $w=(w_i)\in W$ with $c'=wcw^{-1}$. If $\Gamma$ is connected, this conjugator is a product of simple reflections, as each firing uses one. This proves (3). [F2, F3, F6, step 1.1, step 2.1, construct, algebra] ∎

## Remarks

- **Open supplier obligations.** The assigned predecessor def-cg-coxeter-noncrossing-poset-and-kreweras-map is authored but remains escalated on its own in-run suppliers. A4 consumes its once-each Coxeter-element convention in the opening Statement and [F3], and its component decomposition in [F6] and proof step 3.1; keep A4 escalated until that supplier's current statement and these exact uses are reconciled. The batch-2 supplier def-hh-coxeter-matrix-word-group-and-length supplies the presentation and commuting relation in [F4] and proof steps 1.2 and 2.1. The batch-13 suppliers def-cg-coxeter-diagram-components-and-finite-type, thm-cg-finite-type-positive-definite-criterion, and lem-cg-positive-definite-diagram-exclusions supply the diagram and finite-type conventions in the opening Statement and [F1]–[F2], the finite-type-to-positive-definite implication in the opening Statement and proof step 3.1, and the no-cycle conclusion in the opening Statement and [F2], respectively. Their current authoring and item dispositions are not closed; reconcile the completed supplier statements with these uses before accepting A4.
