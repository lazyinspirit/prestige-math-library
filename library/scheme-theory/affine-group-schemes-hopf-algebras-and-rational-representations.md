---
page: "affine-group-schemes-hopf-algebras-and-rational-representations"
title: "Affine Group Schemes, Hopf Algebras, and Rational Representations"
status: draft
category: scheme-theory
companion: affine-group-schemes-hopf-algebras-and-rational-representations-examples
requires: ["group-schemes-of-finite-type-over-a-field",
           "affine-schemes-and-the-structure-sheaf",
           "classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface"]
items: ["def-commutative-hopf-algebra-over-a-field",
        "lem-affine-finite-type-scheme-coordinate-ring-finitely-generated",
        "lem-quotient-spectrum-map-is-a-closed-immersion",
        "lem-general-linear-group-scheme-and-its-coordinate-ring",
        "def-coordinate-hopf-algebra-of-affine-group-scheme",
        "lem-hopf-ideal-kernels-and-quotients",
        "lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra",
        "def-rational-representation-and-comodule-of-an-affine-group-scheme",
        "thm-affine-group-schemes-hopf-algebra-antiequivalence",
        "lem-representations-of-affine-group-schemes-are-comodules",
        "lem-finite-dimensional-subcomodules-contain-elements",
        "thm-closed-subgroup-schemes-correspond-to-hopf-ideals",
        "thm-affine-group-scheme-faithful-finite-dimensional-representation"]
examples: []
---

An affine group scheme of finite type over a field $k$ is the same data as a
finitely generated commutative Hopf algebra with its comultiplication, counit
and antipode: the group operations transpose under the anti-equivalence between
affine schemes and commutative algebras. This page records the definition of a
commutative Hopf algebra, verifies the small scheme-theoretic bridges the
Spec formulation needs, and constructs the general linear group scheme
$\operatorname{GL}_n$ and the multiplicative group scheme $\mathbf G_m$ with
their explicit comorphisms. It then proves that the coordinate ring of an
affine group scheme is a Hopf algebra and that the construction is an
antiequivalence of categories under the Axiom of Choice, used for the
affine quasi-compactness and finite-generation bridges. The Hopf algebra
identities and the comodule constructions use no choice principle.

Rational representations are treated by the comodule dictionary: a natural
family of $R$-linear actions of the groups $G(R)$ on $V\otimes_kR$ corresponds
to a coaction $V\to V\otimes_kA$, subcomodules correspond to
subrepresentations, and every element of a comodule lies in a
finite-dimensional subcomodule. The page closes with the correspondence
between closed subgroup schemes and Hopf ideals, including the reversal of
inclusions, and with the theorem that a finitely generated affine group scheme
embeds as a closed subgroup scheme of some $\operatorname{GL}_n$, by a faithful
finite-dimensional subrepresentation of the regular representation.

The companion page computes the Hopf algebra of a split torus together with its
root-of-unity subgroups, and works out the dictionary between graded comodules
and representations of $\mathbf G_m$.
