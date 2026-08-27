---
page: subgroups-of-free-groups-and-schreier-rewriting
title: "Subgroups of Free Groups and Schreier Rewriting"
status: draft
items: [def-labeled-schreier-coset-graph,
        lem-schreier-coset-graph-is-connected-and-deterministic,
        def-schreier-transversal-and-schreier-system,
        lem-spanning-trees-and-schreier-systems-correspond,
        def-schreier-generator,
        lem-schreier-generators-lie-in-the-subgroup,
        def-schreier-rewriting-map,
        lem-schreier-rewriting-is-invariant-under-free-reduction,
        thm-schreier-generating-lemma,
        lem-tree-schreier-generators-are-freely-independent,
        thm-nielsen-schreier-with-an-explicit-basis,
        thm-schreier-index-rank-formula,
        cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank,
        thm-reidemeister-schreier-presentation,
        lem-reidemeister-schreier-relators-are-independent-of-word-representatives,
        cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented,
        thm-marshall-hall-free-factor-theorem]
examples: [fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated,
           fs-schreier-generators-are-always-a-free-basis,
           fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn,
           fs-reidemeister-schreier-needs-no-choice-of-transversal]
---

The published free-group page supplies reduced words, free bases, and
presentations; this page uses those inputs to analyze subgroups through their
right-coset Schreier graphs. The graph, transversal, and rewriting conventions
are fixed once, so the inverse in $s(t,x)=tx\overline{tx}^{-1}$ never moves.

The first half of the page proves the Schreier generating lemma and the
tree-based free-independence argument, then packages them into Nielsen-Schreier
with the choice boundary stated honestly. The second half counts non-tree edges
to obtain the index-rank formula, rewrites subgroup presentations, and ends
with the Marshall Hall free-factor theorem.
