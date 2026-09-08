# Phase-2 wave-1 — Step-6a independent reader report, batch 7

## Scope opened

- Current dispatch, manifest, contracts, coverage, notes and pre-hash artifacts:
  `research/phase-2-wave-1-batch-7.pages.json`,
  `research/phase-2-wave-1-batch-7.proof-contracts.json`,
  `research/phase-2-wave-1-batch-7.coverage.json`,
  `research/phase-2-wave-1-batch-7.notes.md`, and
  `research/phase-2-wave-1-step6-hash-7-pre.json`.
- A page: `library/algebraic-topology/simplicial-subdivision-and-simplicial-approximation.md`.
  B page: `library/algebraic-topology/simplicial-subdivision-and-simplicial-approximation-examples.md`.
- All 31 assigned items: `def-face-poset-and-order-complex`,
  `def-barycentric-subdivision-of-an-abstract-simplicial-complex`,
  `def-canonical-barycentric-realization-map`,
  `lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology`,
  `lem-barycentric-face-chains-triangulate-a-geometric-simplex`,
  `thm-barycentric-subdivision-realizes-homeomorphically`,
  `def-open-and-closed-stars-in-a-subdivision`,
  `lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices`,
  `lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction`,
  `lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic`,
  `def-oriented-simplicial-subdivision-chain-map`,
  `lem-oriented-simplicial-subdivision-commutes-with-boundary`,
  `lem-last-vertex-map-is-carried-by-original-simplices`,
  `thm-simplicial-subdivision-is-a-chain-map-and-homology-isomorphism`,
  `lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero`,
  `lem-the-open-star-criterion-produces-a-simplicial-map`,
  `thm-finite-simplicial-approximation-for-maps-of-pairs`,
  `def-relative-derived-subdivision-of-a-finite-simplicial-pair`,
  `lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full`,
  `lem-relative-subdivision-neighbourhood-adjustment`,
  `thm-relative-simplicial-approximation-after-subdivision`,
  `def-finite-convex-cell-complex-and-linear-subdivision`,
  `lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex`,
  `lem-finite-convex-cell-complexes-admit-compatible-triangulations`,
  `lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement`,
  `ex-barycentric-subdivision-of-an-edge-and-triangle`,
  `ex-the-subdivision-chain-of-an-oriented-two-simplex`,
  `ex-a-relative-simplicial-approximation-fixed-on-the-endpoints`,
  `ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells`,
  `cex-a-continuous-map-need-not-be-simplicial-before-subdivision`, and
  `cex-ordinary-barycentric-subdivision-cannot-fix-a-nonconstant-simplicial-edge`.
- Direct mathematical suppliers opened at their current definitions/statements:
  abstract complexes, augmentation, chain homotopy, contractible complexes,
  Countable Choice, realization with weak topology, relative homotopy,
  diameter, partial orders, simplicial chains and maps, barycentric-coordinate
  uniqueness, induced simplicial chain maps, finite realization compactness,
  homotopy invariance of homology, closed subspaces of compact spaces,
  Heine--Borel, Lebesgue numbers, and boundary-squared-zero.
- Source passages independently reopened: Hatcher §2.C and Appendix
  Proposition A.1 (including the star criterion and finite-subcomplex result),
  and Maunder §2.5 and its relative-approximation continuation. The batch
  source receipts also confirm current fetches for those sources and for the
  Zeeman and Rourke--Sanderson sources; their relevant current local arguments
  were read rather than treated as consequences of the receipts.

## Mathematical audit and verdicts

- The barycentric definitions distinguish labels from geometric points, omit the
  empty face as a vertex, and handle the vertex-free case. The coordinate-level
  proof gives both covering and exact chain-simplex intersections; its local
  weak-topology argument does not make a finite-union inference for an infinite
  complex.
- The compact-support lemma explicitly spends Countable Choice only for its
  countable independent selections. The finite-source star argument instead
  uses canonical rational grids and least indices; its common-carrier homotopy
  is type-correct and preserves the asserted pairs.
- The cone calculation includes degree -1; the subdivision recursion,
  last-vertex map, carrier contractions, orientation signs, and order-as-data
  condition yield the claimed augmented and ordinary homology equivalence.
- The relative construction keeps the fixed subcomplex unchanged, makes it
  full, separates the near-star and far-mesh cases, and only asserts strict
  pointwise fixing on a triangulation on which the restriction is already
  simplicial. The prescribed-subdivision extension is conditional on that same
  compatibility, as required.
- The finite-cell arguments use the finite-inequality face calculus, compatible
  boundary coning, and intersection cells in the correct embedded-polyhedron
  setting. The examples and counterexamples have the displayed face counts,
  chain signs, endpoint homotopy, weak-topology fan behavior, and midpoint
  obstruction.

Page verdicts: the assigned A page is mathematically sufficient on this read;
its title and summary match the 25 item interfaces and state the Countable
Choice and supplied-order qualifications. The B page is mathematically
sufficient; its summary matches all six examples/counterexamples. No B-page
body was edited.

## Edits, checks, and blockers

No defect was confirmed, so no item, A-page prose, proof contract, or
verification record was changed.

- Strict proof contracts: 31/31 checked, 0 errors and 0 warnings.
- Scoped content policy: 31 items, 0 errors and 0 warnings.
- Focused precheck: all 24 proof-bearing assigned items, including the six B
  examples/counterexamples, passed.
- Rendercheck: both pages and all 31 items, 33 files passed.
- Source backing: all 31 authored results backed by an openable source or
  documented alternative argument; current source fetch check reports 4/4
  verified and resolved.

There is no current batch-7 mathematical blocker in the actual assigned proof
routes. The current group-f recheck records that the earlier Noetherian
published-consumer debt is not reached by batch 7; no published dependency
finding is therefore reported here. The shared worktree contains substantial
unrelated in-flight changes, none of which this reader edited or assessed.
