---
page: matrix-factorizations-and-khovanov-rozansky-link-homology
title: "Matrix Factorizations and Khovanov–Rozansky Link Homology"
status: published
requires: [oriented-links-braid-closures-and-markov-equivalence,
            graded-bimodules-and-tensor-functors,
            hecke-markov-traces-and-polynomial-link-invariants,
            type-a-soergel-bimodules-and-hecke-categorification,
            rouquier-complexes-and-categorical-braid-relations]
items: [def-bigraded-matrix-factorization-with-potential,
        def-arc-and-wide-edge-khovanov-rozansky-factorizations,
        def-factorization-of-a-marked-moy-graph,
        lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type,
        def-chi-zero-and-chi-one-wide-edge-morphisms,
        def-positive-and-negative-khovanov-rozansky-crossing-complexes,
        def-khovanov-rozansky-complex-and-trigraded-braid-homology,
        thm-markings-do-not-change-the-khovanov-rozansky-complex,
        lem-khovanov-rozansky-braid-oriented-kink-shifts,
        thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a,
        thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three,
        lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation,
        thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift,
        def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series,
        thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial]
examples: []
---

This page develops the matrix-factorization construction of Khovanov–Rozansky
link homology. It fixes bigraded matrix factorizations with a potential $w$ of
the form $a\sum\epsilon_ix_i$, assembles the arc and wide-edge local
factorizations into the factorization $C(\Gamma)$ of a marked planar graph, and
proves the Koszul row-operation and variable-exclusion lemmas that make those
factorizations computable. The two wide-edge morphisms $\chi_0,\chi_1$ define
the positive and negative crossing complexes, with the corrected $\chi_1$-cone
recorded against the arXiv prose misprint, and their tensor product over the
crossings and arcs gives the complex $C(D)$ of a braid diagram and its
trigraded cohomology $H(D)$. The page then proves that markings are auxiliary,
computes the oriented kink shifts $\{1,1\}[1]$ and none on trigraded
cohomology (retaining an additional inner parity reversal for IA at the
factorization level), and establishes
invariance under the braid-like Reidemeister IIa and III moves and under
conjugation, concluding that $H(D)$ is an invariant of the oriented link up to
an overall trigrading shift, with the Axiom of Choice used only through
Markov's theorem. The final items normalize the Euler characteristic to the
HOMFLYPT polynomial and compare the construction with the Hecke–Markov
normalization of the companion page.
