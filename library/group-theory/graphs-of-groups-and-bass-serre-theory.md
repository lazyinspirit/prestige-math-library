---
page: graphs-of-groups-and-bass-serre-theory
title: "Graphs of Groups and Bass Serre Theory"
status: draft
items: [def-graph-of-groups,
        def-maximal-subtree-of-a-connected-graph,
        def-path-group-of-a-graph-of-groups,
        def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree,
        thm-fundamental-groups-from-different-maximal-trees-are-isomorphic,
        def-reduced-graph-of-groups-word,
        thm-normal-form-for-fundamental-groups-of-graphs-of-groups,
        cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group,
        def-bass-serre-tree-of-a-graph-of-groups,
        lem-the-bass-serre-coset-graph-is-a-tree,
        thm-fundamental-group-acts-on-its-bass-serre-tree,
        def-quotient-graph-of-groups-from-a-tree-action,
        lem-boundary-monomorphisms-from-stabilizers-are-well-defined,
        thm-bass-serre-structure-theorem,
        thm-one-segment-graph-of-groups-is-an-amalgamated-free-product,
        thm-one-loop-graph-of-groups-is-an-hnn-extension,
        cor-a-group-acting-freely-without-inversions-on-a-tree-is-free,
        cor-fundamental-group-of-a-graph-with-trivial-groups-is-free,
        thm-kurosh-subgroup-theorem,
        thm-grushko-decomposition-and-rank-additivity,
        rem-stallings-theorem-on-ends-and-splittings]
examples: [fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition,
           fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy,
           fs-every-tree-action-is-a-free-action,
           fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data,
           fs-kurosh-says-every-subgroup-of-a-free-product-is-free]
---

This page presents Bass-Serre theory in both directions. Starting from a graph
of groups, it defines the path group and the relative fundamental group,
establishes a reduced-word normal form, and builds the Bass-Serre tree with its
canonical action.

It then reverses the construction: a group action without inversions on a tree
produces a quotient graph of stabilizers, and the resulting graph of groups
recovers the acting group. The one-segment and one-loop cases match the earlier
amalgam and HNN constructions, and the final items record the Kurosh and
Grushko consequences.
