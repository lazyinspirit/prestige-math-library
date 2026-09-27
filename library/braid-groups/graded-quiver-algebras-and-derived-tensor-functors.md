---
page: graded-quiver-algebras-and-derived-tensor-functors
title: "Graded Quiver Algebras and Derived Tensor Functors"
status: draft
items: [def-path-ring-of-a-finite-quiver-over-the-integers,
        def-khovanov-seidel-type-a-quiver-algebra,
        lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis,
        def-graded-khovanov-seidel-module-category-and-projectives,
        def-vertex-khovanov-seidel-modules,
        lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions,
        lem-finite-graded-projective-resolutions-are-extension-stable,
        thm-the-khovanov-seidel-algebra-has-finite-homological-dimension,
        lem-bounded-finite-projective-model-for-khovanov-seidel-modules,
        def-bounded-projective-homotopy-category-for-a-m,
        def-two-sided-projective-khovanov-seidel-bimodule-functors,
        thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations,
        def-khovanov-seidel-beta-and-gamma-bimodule-maps,
        def-signed-totalization-of-graded-a-m-bimodule-actions,
        lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m,
        def-khovanov-seidel-positive-and-negative-twist-complexes,
        def-triangulated-k-zero-of-khovanov-seidel-projectives,
        lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero]
examples: []
---

Paths compose left to right, so the projective $P_i=A_me_i$ is spanned by the
paths that end at the vertex $i$ while ${}_iP=e_iA_m$ is spanned by those that
begin there, and the homogeneous quadratic relations of the doubled line quiver
kill every path of length at least three. What survives is the $4m+1$-element
basis of vertices, arrows and degree-one returns that the algebra $A_m$ is free
on, and that finite basis is the calculation which everything else on this page
quotes: both-sided freeness over $\mathbb Z$, the structure of every corner
$e_iA_me_j$, and the explicit grid resolution of each vertex module $S_i$, whose
staircase of shifted projectives is checked directly against the differentials.
Because $A_m$ is finite free and hence Noetherian over $\mathbb Z$, its category
of finitely generated graded modules is abelian, and the graded horseshoe lemma
proved here splices the vertex resolutions into a uniform finite projective
dimension bound, so $A_m$ has finite homological dimension.

On the derived side, bounded complexes of finite graded projectives with
homotopy classes of chain maps form the category $C_m$. Its canonical comparison
to $D^b(A_m\text{-mod})$ is exact and fully faithful, and each bounded complex
has an explicit finite projective replacement, with one lift at each stage. The
two-sided projective bimodule functors built from
the corner bimodules then satisfy the Temperley–Lieb relations up to natural
isomorphism, with the $\beta$ and $\gamma$ maps of Khovanov–Seidel supplying
the degree-one and degree-zero bimodule maps whose mapping cones are the twist
complexes $R_i$ and $R_i^{-1}$. Signed totalization gives those bounded
two-sided projective bimodule complexes an exact action on $C_m$: it commutes
with the homological shift and with cones and takes quasi-isomorphisms of
bimodule complexes to natural isomorphisms, which is exactly what lets the
twist complexes act on the derived category.

The page closes with the Grothendieck group, defined on the isomorphism classes
of $C_m$ themselves without choosing a skeleton, so the generators are the
honest isomorphism classes $[X]$ and the relations come from distinguished
triangles. Its two shifts are kept apart at every step: the internal shift
$\{1\}$ is an exact automorphism acting by an invertible $q$ with
$[X\{r\}]=q^r[X]$, while the homological shift satisfies $[X[1]]=-[X]$ as the
rotation of the triangle $X\to0\to X[1]$. No item of this pair declares the
Axiom of Choice or Dependent Choice: every resolution, lift and totalization
claimed here is produced by an explicit formula.
