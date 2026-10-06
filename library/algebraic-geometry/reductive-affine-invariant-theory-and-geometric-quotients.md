---
page: reductive-affine-invariant-theory-and-geometric-quotients
title: "Reductive Affine Invariant Theory and Geometric Quotients"
status: draft
requires: [algebraic-group-actions-orbits-stabilizers-and-controlled-quotients,
           classical-complex-algebraic-actions-and-affine-embeddings,
           quasi-coherent-and-coherent-sheaves-and-vector-bundles,
           proj-projective-schemes-twisting-sheaves-and-ampleness,
           cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes]
items: [def-categorical-and-geometric-quotients-of-classical-varieties,
        def-reductive-and-linearly-reductive-over-c,
        lem-complex-algebraic-groups-are-smooth,
        lem-positively-graded-noetherian-algebra-is-finitely-generated,
        thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group,
        lem-reynolds-operator-and-invariant-subring-properties,
        lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated,
        lem-orbit-dimension-and-closed-orbits-for-complex-group-actions,
        def-stable-points-of-an-affine-action,
        lem-stabilizer-dimension-semicontinuity,
        thm-invariant-ring-finite-generation-and-affine-categorical-quotient,
        lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant,
        thm-stable-locus-geometric-quotient]
examples: []
---

This page develops the affine invariant theory of a complex reductive affine
algebraic group and the geometric quotient of its stable locus. A closed
subgroup $U\subseteq G$ is called unipotent when every non-zero
finite-dimensional rational $U$-module has a non-zero fixed vector; $G$ is
reductive when it has no non-trivial closed normal unipotent subgroup and
linearly reductive when every finite-dimensional rational $G$-module is
completely reducible. Over $\mathbf C$ the two notions coincide, and the
equivalence is proved on this page rather than quoted: characteristically
positive behaviour, where the equivalence fails, is recorded only as a warning
and is never used.

The bridge is the structure of complex reductive groups. A faithful
finite-dimensional representation embeds $G$ as a closed subgroup of a general
linear group, complex algebraic groups are smooth, and the Lie-theoretic route
through the radical, the unipotent closure, the additive Jordan decomposition
and Weyl's theorem for the semisimple part shows that $G$ is linearly reductive.
The same theorem produces the Reynolds operator: every rational $G$-module is a
direct sum of simple submodules, the invariants $V^G$ have a canonical
$G$-stable complement $V_G$, and the projection $R_V:V\to V^G$ along it is
equivariant, natural and $A^G$-linear on a rational $G$-algebra $A$. When a
compact subgroup $K\subseteq G$ with Zariski closure $G$ is supplied, that
operator is the normalized Haar average over $K$ and its value is the unique
invariant element in the convex hull of the $K$-orbit; no existence theorem for
such a $K$ is asserted.

The invariant-theoretic consequences are then assembled from the Reynolds
operator. Ideal extension $I\mapsto IA$ is injective on ideals of the invariant
subring and $\mathbb C[X]^G$ is Noetherian whenever $\mathbb C[X]$ is, which
with the graded Nakayama argument gives finite generation first for
finite-dimensional modules and then, through an equivariant linear embedding,
for every affine $G$-variety $X$. The resulting morphism
$\pi:X\to X/\!/G=\operatorname{Spec}\mathbb C[X]^G$ is a categorical quotient
with closed image, closed immersions for closed invariant subsets, the
intersection formula $\pi(Y\cap Y')=\pi(Y)\cap\pi(Y')$ and exactly one closed
orbit in every fibre; irreducible and normal $X$ give irreducible and normal
$X/\!/G$.

The last layer is the geometry of the quotient map. Orbit dimensions satisfy
$\dim G=\dim G_x+\dim Gx$, orbit closures have equidimensional components and
smaller-dimensional boundary orbits, minimal orbits are closed, and the
stabilizer dimension is upper semicontinuous while the orbit dimension is lower
semicontinuous. A point is stable when its orbit is closed and its stabilizer is
finite. The stable locus is the union of the saturated principal opens on which
invariant functions vanishing on the positive-dimensional-stabilizer locus
are non-zero, it is exactly the preimage of its image, and
the restriction $\pi^s:X^s\to\pi(X^s)$ is a geometric quotient with fibres the
orbits and structure sheaf the invariant functions; the closedness,
irreducibility and normality statements for the quotient all arise from the
same ideal-theoretic machinery.

The Axiom of Choice is declared throughout and is inherited from the named
suppliers: the orbit and fibre-dimension inputs, the Nullstellensatz route of
the classical quotient dictionary, the Lie and Haar-measure inputs of the
bridge theorem, and the normality suppliers. The definition of a categorical or
geometric quotient is choice-free. The smoothness and graded finite-generation
lemmas declare the assumptions inherited from their named suppliers; their
translation and degree-induction arguments introduce no additional choice. The conventions are classical: an
affine algebraic set is a reduced finite-type space over $\mathbf C$, a
$\operatorname{Spec}$ of a finitely generated reduced complex algebra denotes
its affine variety of complex closed points, and the scheme-theoretic quotient
sheaf of the algebraic-space page is a deliberately different object. The
companion page carries the hyperbolic $\mathbf G_m$-example, the counterexample
that a closed orbit need not be stable, and the caveat that Noether's
finite-group theorem does not supply finite generation for positive-dimensional
groups.
