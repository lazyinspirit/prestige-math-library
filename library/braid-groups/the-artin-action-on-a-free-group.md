---
page: the-artin-action-on-a-free-group
title: "The Artin Action on a Free Group"
status: published
requires: [punctured-disks-mapping-classes-and-point-pushing,
           free-groups-and-presentations,
           artin-presentation-completeness-and-braid-combing]
items: [def-standard-meridians-of-a-punctured-disk,
        lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis,
        thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians,
        lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk,
        lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians,
        lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity,
        lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies,
        lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints,
        lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints,
        lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy,
        lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy,
        lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity,
        def-artin-automorphisms-of-the-free-group,
        lem-artin-automorphisms-satisfy-the-braid-relations,
        def-the-artin-representation-on-a-free-group,
        prop-the-geometric-action-on-meridians-is-the-artin-representation,
        thm-the-artin-representation-is-faithful,
        lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word,
        def-peripheral-boundary-preserving-automorphism-of-f-n,
        lem-artins-product-cancellation-dichotomy,
        lem-an-extremal-cancellation-shortens-an-artin-substitution,
        thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism,
        thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n,
        cor-the-artin-action-solves-the-braid-word-problem]
examples: []
---

This page constructs the Artin representation
$\rho:B_n\to\operatorname{Aut}(F_n)$, proves faithfulness under AC, and
characterizes its image. The closed unit disk has the canonical real-axis
punctures $Q_n$, boundary basepoint $d=(0,1)$, straight stems, and positive
counterclockwise meridians $x_1,\dots,x_n$. Products of automorphisms use
ordinary function composition: the leftmost factor is outermost and the
rightmost factor acts first.

The standard flower is a based deformation retract, with free meridian basis
and vanishing higher homotopy groups. Its compact cut-disk construction also
shows that the positively oriented boundary represents $x_1\cdots x_n$.
A based self-map inducing the identity on the fundamental group is
based-homotopic to the identity. These results are choice-free. Separate arc
lemmas prove plane-arc neighborhoods, relative homotopy-to-isotopy, and
simultaneous stem straightening under AC; smooth relative isotopy extension
uses countable choice. Cutting the full stem system includes completion at
each puncture tip and carries the declared AC hypothesis.

The homeomorphism lemma used for faithfulness follows a different route:
trivial action first fixes the punctures and provides compact stem homotopies.
Induction fills the last puncture, uses the point-pushing kernel theorem,
and detects the remaining point-motion loop by a compact tether square.
It concludes that the homeomorphism is isotopic to the identity relative to
the boundary and all punctures. Its proof uses AC through point pushing and
finite point-motion extension; the general arc-isotopy and simultaneous
straightening lemmas are not prerequisites of this argument.

The frozen algebraic substitutions are
$x_i\mapsto x_ix_{i+1}x_i^{-1}$ and $x_{i+1}\mapsto x_i$, fixing the other
letters. They satisfy the braid relations, so von Dyck's theorem gives $\rho$.
The supported positive anticlockwise half rotation realizes these substitutions
on the meridian basis; they are inverse to Artin's original letter convention.
The geometric identification, the homeomorphism lemma, and completeness of
the Artin presentation give faithfulness under AC.

Every braid automorphism permutes the conjugacy classes of the positive basis
generators and fixes the ordered boundary product. Conversely, Artin's
choice-free cancellation induction produces a braid word for every
automorphism with these two properties. At a qualifying adjacent junction,
one middle letter is cancelled; postcomposition by the appropriate Artin
generator or its inverse strictly decreases the total conjugator length.
Together with faithfulness this identifies the image and gives uniqueness
of the representing braid. Comparing reduced basis images then solves the
braid word problem. The companion page computes the $B_3$ action and the
full twist $x_i\mapsto\delta x_i\delta^{-1}$, where $\delta=x_1\cdots x_n$,
and shows that endpoint permutation is incomplete and peripheral preservation
alone does not suffice.
