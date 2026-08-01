---
page: eulerian-and-hamiltonian-graphs
title: "Eulerian and Hamiltonian Graphs"
status: draft
items: [def-multigraph-and-digraph-degrees-and-connectivity,
        def-directed-walk-trail-path-cycle-and-strong-connectivity,
        def-euler-trail-and-circuit,
        lem-hierholzer-maximal-unused-edge-trail-closes,
        lem-splicing-edge-disjoint-closed-trails,
        thm-eulers-euler-circuit-characterisation,
        cor-euler-trail-characterisation,
        thm-directed-euler-circuit-characterisation,
        def-hamilton-path-cycle-and-hamilton-connected,
        thm-hamilton-cycle-vertex-deletion-bound,
        cor-hamiltonian-graph-is-two-connected,
        lem-bondy-chvatal-edge-addition,
        def-bondy-chvatal-closure,
        lem-bondy-chvatal-closure-well-defined,
        thm-bondy-chvatal-closure-theorem,
        thm-ores-hamiltonicity-theorem,
        lem-dirac-condition-implies-ore-condition,
        cor-diracs-hamiltonicity-theorem,
        def-tournament,
        thm-redei-tournament-hamilton-path,
        lem-tournament-cycle-insertion,
        thm-camion-strong-tournament-hamiltonian]
examples: []
---

The page first fixes degree and connectivity conventions for finite multigraphs and digraphs, including how loops contribute. Two focused Hierholzer lemmas support complete constructive proofs of the undirected Euler-circuit and Euler-trail criteria and the balanced directed Euler-circuit criterion. The exceptional edgeless one-vertex multigraph and the distinction between weak and strong connectivity are handled explicitly.

Hamilton paths and cycles lead to the vertex-deletion obstruction and two-connectivity. The Bondy-Chvatal edge lemma, order-independent closure, and closure theorem yield Ore's theorem and then Dirac's theorem through the precise degree-condition implication. The final section treats tournaments: Redei's inductive Hamilton-path theorem, a cycle-insertion construction, and Camion's Hamilton-cycle theorem for strong tournaments under the library's at-least-three-vertex directed-cycle convention.
