---
page: hochschild-homology-and-triply-graded-link-homology
title: "Hochschild Homology and Triply-Graded Link Homology"
status: published
requires: [matrix-factorizations-and-khovanov-rozansky-link-homology,
            rouquier-complexes-and-categorical-braid-relations,
            hochschild-homology-and-diagonal-koszul-resolutions,
            hochschild-hyperhomology-and-cyclic-tensor-invariance,
            bounded-bimodule-complexes-and-derived-tensor]
items: [def-reduced-type-a-polynomial-ring-for-hhh,
        def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor,
        def-khovanovs-hhh-rouquier-generator-complexes,
        def-termwise-hochschild-homology-complex-of-a-rouquier-complex,
        def-reduced-khovanov-rozansky-homology,
        lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex,
        lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence,
        lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex,
        lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule,
        lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings,
        thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology,
        cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift,
        cor-the-graded-euler-characteristic-of-hhh-is-homflypt]
examples: []
---

This page develops Khovanov's realization of triply-graded link homology as
Hochschild homology of Soergel bimodules. It fixes the reduced type-A
polynomial ring $R=\mathbb Q[x_1-x_2,\dots,x_{m-1}-x_m]$ with its
$S_m$-action, the invariant coordinates $t_i=x_i+x_{i+1}$ and the unshifted
bimodules $B_i=R\otimes_{R^{s_i}}R$, together with the unreduced cousins
$B'_i=R'\otimes_{(R')^{s_i}}R'$ and the trivial polynomial factor
$B'_i\cong B_i\otimes_{\mathbb Q}\mathbb Q[t_i]$ that records the source's
$R'=R\otimes_{\mathbb Q}\mathbb Q[x_1]$ convention in the $s_i$-equivariant
form. Khovanov's generator complexes $[R\{2\}\to B_i]$ and
$[B_i\{-2\}\to R\{-2\}]$ are defined and compared with the library's shifted
Rouquier generators, and the termwise Hochschild complex of the resulting
braid complex is defined, with the groups $HHH^{c,h,p}$.

The main theorem identifies $HHH$ with the reduced Khovanov-Rozansky homology
of the closure. The proof runs through the $a=0$ specialization of the
matrix-factorization construction: setting $a=0$ turns the local
factorizations into folded Koszul complexes, the first $rm$ relations of a
closed marked resolution form a regular sequence with quotient the unreduced
Soergel bimodule $B'(D)$, and the remaining closure relations reproduce the
diagonal Hochschild complex of $B'(D)$, so that Hochschild homology is
computed by the Koszul complex of the resolution and splits off two copies of
the reduced theory, one of which matches the reduced Khovanov-Rozansky
complex. The comparison also tracks the differentials through the wide-edge
morphisms $\chi_0,\chi_1$ (with the corrected $\chi_1$-cone for negative
crossings) and fixes the trigrading dictionary $a=-h$, $q=p-h$, $t=c$ after
the global correction $(1,-1,0)$, anchored by the unknot and $(2,n)$
normalizations. Two consequences close the page: $HHH$ is an oriented-link
invariant up to an overall trigrading shift, and its explicitly normalized graded Euler
series recovers the v2 HOMFLYPT invariant of the closure. The Axiom of Choice
enters only through the comparison of the bar and diagonal Koszul resolutions,
the Markov invariance of the Khovanov-Rozansky theory, and the rationality
and oriented-link descent of the Euler series, together with homogeneous
basis choices when transferring unreduced invariance to the reduced graded
vector spaces.
