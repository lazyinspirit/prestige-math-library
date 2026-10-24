---
page: regular-pairs-and-induced-counting
title: "Regular Pairs and Induced Counting"
status: published
items: [def-edge-density-between-vertex-sets,
        def-epsilon-regular-pair,
        lem-complementation-preserves-disjoint-regular-pairs,
        lem-typical-degrees-in-a-regular-pair,
        lem-slicing-lemma-for-regular-pairs,
        lem-regularity-is-robust-under-small-edits,
        def-regular-and-equitable-vertex-partition,
        def-energy-of-a-vertex-partition,
        lem-energy-is-monotone-under-refinement,
        lem-energy-boost-for-an-irregular-pair,
        lem-energy-increment-for-an-irregular-partition,
        thm-szemeredi-regularity-lemma-with-tower-bound,
        cor-regularity-refining-a-given-partition,
        thm-large-self-regular-subset,
        cor-partition-into-self-regular-sets,
        thm-triangle-counting-lemma-for-regular-triples,
        thm-counting-lemma-for-a-fixed-graph,
        thm-induced-counting-lemma-for-regular-pairs,
        def-graph-edit-distance-and-epsilon-far,
        thm-graph-removal-lemma,
        thm-strong-regularity-lemma-by-energy-stabilisation,
        lem-energy-controls-density-approximation,
        thm-self-regular-representative-subsets,
        rem-tower-and-wowzer-bounds-in-regularity,
        thm-induced-graph-removal-lemma]
examples: []
---

A finite simple graph and its complement, the edges between two vertex sets and the pure and mixed pairs among them, an induced embedding, an induced copy of a fixed graph, the number of such copies, and what it means for a class of graphs to be hereditary are all published notions. From finite probability the development takes the Cauchy–Schwarz inequality for finite random variables, Markov's inequality, and the first-moment method; these are the inequalities behind the energy increment and behind every statement that all but a small fraction of vertices or pairs behave typically.

The page defines the edge density between two vertex sets and the $\epsilon$-regular pair, then makes that definition usable through typical degrees, slicing, complementation, and robustness under small edits. Regular and equitable partitions and the mean-square density, or energy, of a partition follow: energy is monotone under refinement, an irregularity witness forces a quantified energy boost, and iterating the increment proves the Szemerédi regularity lemma with an equitable partition, an explicit tower-type upper bound, and a refinement of any prescribed partition. Regular pairs then support triangle counting, counting copies of a fixed graph, and induced counting, which with edit distance give the graph removal lemma. Strong regularity by energy stabilisation, large self-regular subsets, the density-approximation lemma, and representative subsets carry the argument to the induced removal lemma, with a remark separating the tower and wowzer bounds.
