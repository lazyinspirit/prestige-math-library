---
page: split-reductive-root-systems-bruhat-cells-and-parabolics
title: "Split Reductive Root Systems, Bruhat Cells, and Parabolics"
status: draft
requires: [group-schemes-of-finite-type-over-a-field, affine-group-schemes-hopf-algebras-and-rational-representations, lie-algebras-and-infinitesimal-group-schemes, groups-of-multiplicative-type-and-arithmetic-tori, unipotent-solvable-groups-and-borel-fixed-points, algebraic-group-actions-orbits-stabilizers-and-controlled-quotients]
items:
  - def-radical-and-unipotent-radical-of-an-algebraic-group
  - lem-character-and-cocharacter-lattices-of-a-split-torus
  - def-split-reductive-algebraic-group
  - lem-reductive-center-radical-and-semisimple-quotient
  - lem-lie-functor-exactness-fixed-points-and-generation
  - def-limit-of-a-gm-orbit-and-concentrator-subscheme
  - thm-concentrator-subscheme-representability-and-smoothness
  - lem-graded-nakayama
  - thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions
  - lem-fixed-loci-and-centralizers-of-torus-actions-are-connected
  - lem-nilpotent-group-structure-and-maximal-torus-criterion
  - thm-cocharacter-limit-subgroups
  - thm-luna-map-and-bialynicki-birula-decomposition
  - lem-connected-groups-of-rank-zero-are-unipotent
  - thm-weight-subgroups-of-a-torus-action
  - lem-homogeneous-curves-and-automorphisms-of-p1
  - lem-sl2-structure-and-root-coordinates
  - thm-rank-one-connected-groups
  - thm-split-rank-one-reductive-classification
  - thm-solvable-subgroups-and-the-radical-as-borel-intersection
  - lem-cartan-subgroups-conjugacy-and-density
  - thm-chevalley-centralizer-radical-and-reductive-centralizers
  - lem-maximal-tori-extension-conjugacy-and-derived-group
  - def-abstract-root-datum-and-its-weyl-group
  - lem-root-datum-combinatorics
  - def-roots-and-root-groups-of-a-split-reductive-group
  - thm-root-subgroups-of-a-split-reductive-group
  - lem-borel-root-group-opposition
  - thm-weyl-group-borel-chambers
  - def-root-datum-of-a-split-reductive-group
  - lem-simple-reflection-double-coset-rule
  - lem-root-coordinate-cells-and-generation
  - thm-bruhat-decomposition-for-split-reductive-group
  - def-parabolic-subgroup-of-an-affine-algebraic-group
  - lem-standard-levi-subgroup
  - thm-parabolics-and-levi-decomposition
examples: []
---

This page develops the structure theory of split reductive groups over a field
$k$: maximal tori, root data, root groups, the Weyl group, the Bruhat
decomposition and the theory of parabolic subgroups with their Levi
decompositions. The base field is arbitrary, and where an argument passes to
the algebraic closure that passage is explicit; the split hypothesis is kept
throughout, so that the root datum is defined over $k$ rather than only over a
finite extension.

The algebraic-group foundations are the theory of diagonalizable and
multiplicative-type groups, the representability of homogeneous spaces, and the
machinery of linearly reductive actions. The page records the structure of
connected nilpotent and solvable groups in
[[lem-nilpotent-group-structure-and-maximal-torus-criterion]] and
[[thm-solvable-subgroups-and-the-radical-as-borel-intersection]]: the radical
and unipotent radical of [[def-radical-and-unipotent-radical-of-an-algebraic-group]],
the largest torus in a connected nilpotent group, the Borel intersection
formula $R(G)=(\bigcap_BB)^\circ_{\mathrm{red}}$, and Chevalley's theorem
$R_u(G)=(\bigcap_{B\supseteq T}B_u)^\circ_{\mathrm{red}}$ in
[[thm-chevalley-centralizer-radical-and-reductive-centralizers]], which also
shows that centralizers of tori in reductive groups are reductive. Fixed subgroups of torus automorphism actions on smooth connected affine
groups, including torus centralizers, are smooth and connected
([[lem-fixed-loci-and-centralizers-of-torus-actions-are-connected]]), building
on the smoothness of fixed-point schemes of linearly reductive actions
([[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]]).

The dynamic method is developed first. Limits of $\mathbf G_m$-orbits and
concentrator subschemes are defined in
[[def-limit-of-a-gm-orbit-and-concentrator-subscheme]]; the representability
and smoothness theorem [[thm-concentrator-subscheme-representability-and-smoothness]]
proves that concentrators exist and are the unique smooth models, using the
graded Nakayama lemma [[lem-graded-nakayama]] in the affine case. From these
come the cocharacter limit subgroups $P_G(\lambda)$, $Z_G(\lambda)$ and
$U_G(\lambda)$ with their Levi decomposition and open-cell properties
([[thm-cocharacter-limit-subgroups]]), the Luna map and the
Bialynicki-Birula decomposition
([[thm-luna-map-and-bialynicki-birula-decomposition]]), and the
weight-subgroup theorem [[thm-weight-subgroups-of-a-torus-action]], which
attaches a connected subgroup to every subsemigroup of weights. The Lie
functor is used throughout through
[[lem-lie-functor-exactness-fixed-points-and-generation]], and the rank-one
theory is built from the explicit structure of $\mathrm{SL}_2$ in
[[lem-sl2-structure-and-root-coordinates]] and the classification of
homogeneous curves in [[lem-homogeneous-curves-and-automorphisms-of-p1]].

For a split reductive pair $(G,T)$, the adjoint action of $T$ on
$\mathfrak g$ decomposes into weight spaces, and the nonzero weights are the
roots: [[def-roots-and-root-groups-of-a-split-reductive-group]] and
[[thm-root-subgroups-of-a-split-reductive-group]] show that each root group is
a $\mathbf G_a$ with one-dimensional Lie algebra, that the root system is
reduced with a unique coroot, and that the abstract root datum axioms hold.
The Weyl group $W(G,T)=N_G(T)/T$, its action on the character lattice and its
simple transitivity on the Borel subgroups containing $T$ are the content of
[[thm-weyl-group-borel-chambers]] and
[[lem-borel-root-group-opposition]]; the resulting root datum is recorded in
[[def-root-datum-of-a-split-reductive-group]], and its combinatorics in
[[def-abstract-root-datum-and-its-weyl-group]] and
[[lem-root-datum-combinatorics]].

The Bruhat decomposition is the main structural theorem
([[thm-bruhat-decomposition-for-split-reductive-group]]): the double cosets
$BwB$ are the locally closed cells of $G$, the multiplication map
$U^w\times B\to BwB$, $(u,b)\mapsto un_wb$, is an isomorphism, the big cell $U^-TB$ is open and dense,
and the cells of the flag variety are affine spaces of dimension the length
$n(w)$. The tool is the Tits system on $G(k)$ established in
[[lem-simple-reflection-double-coset-rule]] and the coordinate description of
the cells in [[lem-root-coordinate-cells-and-generation]]. Finally, smooth parabolic
subgroup varieties containing $B$ are classified by subsets of the base, with unipotent
radical the product of the root groups outside the corresponding subsystem and
Levi factor the standard Levi subgroup: this is
[[thm-parabolics-and-levi-decomposition]], with the Levi subgroups described in
[[lem-standard-levi-subgroup]]. The example companion
[[split-reductive-root-systems-bruhat-cells-and-parabolics-examples]] carries
the explicit computations for $\mathrm{SL}_2$ and $\mathrm{GL}_n$.

The Axiom of Choice is used only where the geometric suppliers named in the
individual items use it, principally for the fixed-point, density and
representability results imported from the earlier pages; the combinatorial
lemmas [[lem-character-and-cocharacter-lattices-of-a-split-torus]],
[[lem-root-datum-combinatorics]] and the elementary Nakayama equivalences in
[[lem-graded-nakayama]] are choice-free; the latter item’s supplemental
regularity assertion inherits AC from its regular-local suppliers.
