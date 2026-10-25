---
page: simplicial-trees-and-group-actions
title: "Simplicial Trees and Group Actions"
status: published
items: [def-oriented-graph-with-edge-reversal,
        def-simplicial-path-reduced-path-cycle-and-connectedness,
        def-simplicial-tree,
        thm-unique-reduced-path-characterisation-of-simplicial-trees,
        def-simplicial-path-metric,
        lem-path-metric-on-a-tree-is-geodesic-and-integer-valued,
        thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion,
        def-graph-automorphism-and-group-action-on-a-simplicial-graph,
        def-edge-inversion-and-action-without-inversions,
        lem-barycentric-subdivision-removes-edge-inversions,
        def-quotient-graph-of-an-action-without-inversions,
        lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions,
        def-fixed-subtree-and-minimal-invariant-subtree,
        lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree,
        def-translation-length-of-a-tree-automorphism-without-inversions,
        thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms,
        cor-translation-length-is-conjugacy-invariant-and-homogeneous,
        lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision,
        cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free,
        thm-ping-pong-for-hyperbolic-tree-automorphisms]
examples: [fs-the-published-finite-tree-definition-already-covers-bass-serre-trees,
           fs-every-tree-action-is-without-edge-inversions,
           fs-every-tree-automorphism-fixes-a-vertex,
           fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint,
           fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree]
---

This page passes from the library’s finite simple-tree language to the oriented
simplicial graphs used in Bass-Serre theory. The bridge is explicit: paths stay
finite, reduced paths replace simple-graph paths, and the finite notion is
recovered exactly for finite oriented graphs with no loops or parallel
geometric edges.

With that combinatorial vocabulary fixed, the page develops automorphisms and
actions, removes inversions by barycentric subdivision, defines quotient graphs
and fixed subtrees, and then proves the elliptic/hyperbolic dichotomy together
with the tree-specific ping-pong argument.
