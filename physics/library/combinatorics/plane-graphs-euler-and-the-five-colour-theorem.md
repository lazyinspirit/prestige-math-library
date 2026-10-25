---
page: plane-graphs-euler-and-the-five-colour-theorem
title: "Plane Graphs, Euler's Formula and the Five Colour Theorem"
status: published
items: [def-polygonal-arc-and-polygon,
        def-plane-region-and-frontier,
        lem-polygonal-ray-general-position,
        lem-polygonal-crossing-parity-is-locally-constant,
        thm-polygonal-jordan-curve,
        lem-polygonal-arc-does-not-separate-the-plane,
        def-plane-graph-face-and-boundary,
        lem-plane-graph-faces-are-finite-with-one-unbounded-face,
        lem-face-containment-under-plane-subgraphs,
        lem-plane-edge-face-incidence,
        prop-plane-forest-has-one-face,
        lem-equal-plane-face-boundaries-force-a-cycle,
        prop-face-boundaries-in-two-connected-plane-graphs,
        prop-face-boundaries-in-three-connected-plane-graphs,
        def-maximal-plane-and-maximally-planar-graph,
        prop-maximal-plane-triangulation-characterisation,
        thm-euler-formula-for-connected-plane-graphs,
        cor-euler-formula-for-disconnected-plane-graphs,
        lem-plane-face-handshake-by-girth,
        lem-plane-triangulation-is-connected,
        cor-planar-simple-graph-edge-bound,
        cor-triangle-free-planar-edge-bound,
        cor-planar-graph-has-low-degree-vertex,
        cor-k-five-and-k-three-three-are-nonplanar,
        cor-planar-graphs-have-no-kuratowski-subdivision,
        prop-maximally-planar-edge-characterisation,
        lem-kuratowski-minors-are-topological-minors,
        lem-three-connected-kuratowski-free-is-planar,
        lem-separation-augmentation-for-kuratowski-free-graphs,
        lem-edge-maximal-kuratowski-free-is-three-connected,
        thm-kuratowski-wagner-planarity-characterisation,
        def-plane-dual-multigraph,
        thm-plane-dual-exists-and-double-dual-recovers-primal,
        thm-six-colour-theorem-for-planar-graphs,
        lem-alternating-kempe-paths-cannot-both-occur,
        thm-five-colour-theorem]
examples: []
---

Euclidean polygonal topology provides the separation setting for embedded edges. Connectivity supplies [[def-bridge-in-a-graph]] and [[lem-edge-is-a-bridge-iff-it-lies-on-no-cycle]], which the face theory uses; Menger theory supplies [[lem-three-connected-graph-has-a-contractible-edge]] and the connectivity reductions behind Kuratowski's theorem; graph colouring supplies proper colourings together with [[def-kempe-chain]] and [[lem-kempe-component-colour-swap]]. Tree and forest results provide the spanning-tree and edge-count machinery used in the Euler formula.

Polygonal arcs first establish Jordan separation, faces, boundaries, and facial cycles. Maximal plane graphs and Euler's formula then yield girth bounds, low-degree vertices, and the standard nonplanarity tests. Separation and edge-maximality lemmas build the Kuratowski-Wagner characterisation, after which plane duality is constructed. Low-degree induction proves six colours; separating two alternating Kempe paths sharpens the result to five.
