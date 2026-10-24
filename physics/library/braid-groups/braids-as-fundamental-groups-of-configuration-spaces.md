---
page: braids-as-fundamental-groups-of-configuration-spaces
title: "Braids as Fundamental Groups of Configuration Spaces"
status: published
requires: [geometric-braids-and-artin-generators,
           ordered-and-unordered-configuration-spaces,
           the-fundamental-group]
items: [def-motion-of-an-unordered-point-configuration,
        lem-a-configuration-loop-traces-a-geometric-braid,
        lem-path-homotopy-traces-braid-isotopy,
        lem-a-geometric-braid-slices-to-a-configuration-loop,
        lem-slicing-and-tracing-are-mutually-inverse-on-classes,
        lem-stacking-corresponds-to-loop-concatenation,
        thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
        cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
        prop-geometric-endpoint-permutation-equals-covering-monodromy,
        thm-geometric-and-configuration-braid-models-are-canonically-isomorphic]
examples: []
---

This page identifies geometric braids, defined as level-preserving motions of
the fixed base tuple $Q=(q_1,\ldots,q_n)$ in the open unit disk, with loops in
the unordered configuration space. A based unordered motion is a continuous
path in $C_n(D^2)$ beginning and ending at $[Q]$; it is interior when every
slice lies in $C_n(\operatorname{int}D^2)$. The established radial homotopy
identifies the open- and closed-disk configuration groups at this same
basepoint, without claiming that each closed-disk path stays in the interior.

Lifting an interior motion uniquely from the specified ordered tuple $Q$
produces its labelled strands and a geometric braid. Conversely, taking the
unordered configuration at each braid height gives a continuous based loop.
These operations descend to mutually inverse correspondences on homotopy and
isotopy classes. The endpoint of the ordered lift is a permutation of $Q$;
only identity-permutation motions lift to ordered loops at $Q$.

The product conventions determine the group map. Stacking $\gamma$ above
$\beta$ runs $\beta$ first, while the page's fundamental-group product is
first loop followed by second loop. Raw slicing therefore reverses products:
it is an anti-isomorphism. The inverse-loop map
$$[\beta]\longmapsto\bigl(\iota^C_*[S(\beta)]\bigr)^{-1},$$
where $S(\beta)$ is the slice loop and $\iota^C$ includes the open-disk
configuration space into the closed-disk one, is the resulting group
isomorphism $G_n\cong B_n^{\mathrm{conf}}$ at $[Q]$. The pure subgroup is the
kernel of endpoint permutation and identifies with the ordered configuration
group by
$$[\beta]\longmapsto\bigl(\iota^F_*[z_\beta]\bigr)^{-1},$$
where $z_\beta$ is the ordered coordinate loop of a pure braid. The covering
monodromy of the raw slice loop is the inverse endpoint permutation; after
applying the inverse-loop isomorphism, its monodromy equals the geometric
endpoint permutation. In that formula, $\pi_{\mathrm{conf}}$ is applied only
after $\iota^C_*$ has carried the loop class to the closed-disk group.

All maps use the displayed common basepoint. An identification based at a
different configuration would require a specified connecting path, and no
Artin-presentation completeness result is asserted here. The arguments use no
Axiom of Choice: the base tuple, lifts from the fixed point, and class maps are
specified, and no arbitrary ordering or basepoint path is selected.
