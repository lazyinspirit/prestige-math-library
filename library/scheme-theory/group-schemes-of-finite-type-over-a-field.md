---
page: group-schemes-of-finite-type-over-a-field
title: "Group Schemes of Finite Type over a Field"
status: published
requires: [affine-schemes-and-the-structure-sheaf,
           schemes-subschemes-and-morphisms-locally-of-finite-type,
           fibre-products-base-change-and-scheme-theoretic-fibres]
items: [def-group-scheme-over-a-field,
        def-morphism-and-closed-subgroup-scheme,
        lem-closed-subgroup-scheme-valued-point-criterion]
examples: []
---

A group scheme of finite type over a field $k$ is a finite-type $k$-scheme
equipped with multiplication, identity and inverse morphisms satisfying the
group-object identities. Equivalently, the represented functor sends every
$k$-scheme $T$ to a group $G(T)$, so each commutative unital $k$-algebra $R$
has a group of points $G(R)$. Neither reducedness nor smoothness is assumed,
which is what allows finite nonreduced group schemes.

The page then defines morphisms of $k$-group schemes and closed subgroup
schemes, and proves that a closed subscheme is a closed subgroup scheme exactly
when its points over every commutative unital $k$-algebra form a subgroup.
Testing all algebras, including those with nilpotents, is essential: the
companion shows that rational points alone do not determine a group law.
