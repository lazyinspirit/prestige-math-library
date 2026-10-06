---
page: coxeter-polyhedral-gluings-and-intrinsic-metrics
title: "Coxeter Polyhedral Gluings and Intrinsic Metrics"
status: draft
items: []
examples: []
---

The repository already supplies metric axioms, simplicial realization, stars, faces and compatible finite convex triangulations. Only the missing bridge from abstract Coxeter cell gluings to a genuine intrinsic complete geodesic metric is developed here.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric.** Specify compact convex Euclidean model cells with common-face isometric attaching maps satisfying the cocycle/intersection condition. Import their published face and triangulation definitions. Define chain length as sum of within-cell Euclidean segments and d as the infimum over finite chains; declare connected, locally finite and finite-shape assumptions before metric claims.

Definition justification: `thm-cg-polyhedral-chain-metric-topology-and-properness`.

**lem-cg-polyhedral-face-coherence-and-uniform-star-radius.** Choose compatible barycentric triangulations of the finite Euclidean model list. Dimension is uniformly bounded by D. Each vertex hat coordinate λ_v, extended by zero outside its closed star, is piecewise affine with a uniform Lipschitz constant L from finitely many model simplices; integrate its slope bound along every finite cell chain to obtain |λ_v(x)-λ_v(y)|≤L d(x,y). Carrier uniqueness follows the intersection/gluing rules and unique barycentric coordinates. At each x some λ_v(x)≥1/(D+1), so every ball of radius δ=1/(2L(D+1)) lies in v’s open star; handle zero-dimensional connected components separately. This uniform star-cover radius is derived from coordinates, not from a false positive lower bound for arbitrary point-to-face distances. Local finite incidence makes each such closed star a finite compact cell union.

**thm-cg-polyhedral-chain-metric-topology-and-properness.** The chain infimum is a pseudometric; the coordinate Lipschitz estimates force d(x,y)=0 to imply equality of all barycentric coordinates, hence x=y. Finite-star compactness gives agreement between d topology and locally finite weak realization topology. Any chain of length≤R+1 can be partitioned into at most ceil((R+1)/δ)+1 pieces of length<δ, each lying in a selected vertex star. Consecutive selected stars intersect, and locally finite incidence gives finite branching of their adjacency graph. Thus a bounded ball is contained in finitely many finite closed stars; its closure is closed in that compact union, hence compact and complete. No bound on valence is required. Local finiteness alone fails without finite shapes, as the shrinking-edge ray shows.

**lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity.** Define length by supremum over finite partitions with existing metric d. Prove lower semicontinuity under uniform convergence by fixing a partition and then taking its supremum. A rectifiable path factors through cumulative-length fibers (constant when length increment zero); extend to an arc-length Lipschitz parametrization on the completed image interval, treating constant paths separately. Existing Euclidean-target versions are not cited as arbitrary-metric theorems.

**thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics.** Use 1-Lipschitz arc-length near-minimizers in a compact closed ball and the published proper-target metric Ascoli theorem to obtain a uniformly convergent subsequence. Length lower semicontinuity gives a minimizer, and arc-length reparametrization gives an isometric real-interval geodesic. Carry AC exactly from the Ascoli subsequence supplier; no hidden arbitrary-basis or metric selection is added.

## Prerequisites and reading

Required earlier pages: [[metric-spaces]], [[compactness-in-metric-spaces]], [[simplicial-complexes-and-simplicial-homology]], [[simplicial-subdivision-and-simplicial-approximation]], [[ascoli-arzela]], [[cayley-graphs-word-metrics-and-quasi-isometry]], [[relations-functions-and-quotients]]. The companion [[coxeter-polyhedral-gluings-and-intrinsic-metrics-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
