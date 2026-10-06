---
page: noncrossing-partition-lattices-and-kreweras-complements
title: "Noncrossing Partition Lattices and Kreweras Complements"
status: draft
items: []
examples: []
---

Noncrossing partitions are first the absolute interval [1,c]. Its lattice property is a theorem about convex root complexes, not a formal consequence of being an interval or of intersecting moved subspaces.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-coxeter-noncrossing-poset-and-kreweras-map.** Define NC(W,c)=[1,c] in absolute order and K(w)=w^-1c. For reducible W use component products. State dependence on chosen c before proving transport by conjugation.

Definition justification: `thm-cg-noncrossing-finite-lattice-and-conjugacy-independence`.

**lem-cg-convex-root-subcomplex-intersection-and-purity.** For two geometric subcomplexes of X(c), prove realization intersection equals their subcomplex intersection by unique simplex carriers. If intersection realization is convex, show every maximal simplex has full dimension in its linear span: otherwise approach a point of a larger carrier from a lower-dimensional maximal face and use convex segments to contradict finite carrier maximality. Treat empty intersection as identity and zero-dimensional intersections separately.

**thm-cg-noncrossing-finite-lattice-and-conjugacy-independence.** Intersect X(a),X(b). From convexity/purity choose a full-span simplex and reverse its ordered root reflections to obtain σ≤_Tc; its moved space is the span of the intersection complex. Since σ,a,b share upper bound c, Wall restriction proves σ≤a,b and Pσ=Pa∩Pb. All common lower bounds have contained reflection sets and hence lie below σ. Finite NC therefore has meets and joins (meet of common uppers). Prove all Coxeter elements in a finite tree diagram conjugate via source-sink moves, transporting the lattice; do not silently restrict the theorem to one bipartite c.

**thm-cg-kreweras-complement-and-type-a-partition-model.** Prove K order-reversing by length equalities, K²(w)=c^-1wc and hence bijective. In type A, reflection length n-number of cycles and cyclic ordering imply w≤c iff its cycles form noncrossing blocks with oriented cycles; prove crossing obstruction and converse factorization. This gives the set-partition model, not an unproved Catalan-cardinality product for all types.

## Prerequisites and reading

Required earlier pages: [[bipartite-coxeter-elements-and-ordered-root-complexes]]. The companion [[noncrossing-partition-lattices-and-kreweras-complements-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
