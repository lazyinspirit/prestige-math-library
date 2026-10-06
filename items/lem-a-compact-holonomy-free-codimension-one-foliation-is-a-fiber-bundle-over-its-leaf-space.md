---
id: lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space
kind: lemma
title: A compact holonomy-free codimension-one foliation is fibered over its leaf space
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle
- cor-trivial-holonomy-gives-a-product-foliated-neighbourhood
- thm-local-reeb-stability
- lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented
- def-saturated-neighbourhood-of-a-leaf
- def-quotient-topology
- def-connected-space
- def-compact-space
- def-hausdorff-space
- def-smooth-manifold
- def-countable-choice-principle-for-foliation-pair
- thm-smooth-partitions-of-unity-exist-on-manifolds
- cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
- thm-smooth-dependence-of-ode-solutions-on-parameters
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.2, printed pp. 140–143 (the leaf space of a foliation with all leaves compact and trivial holonomy)
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003)
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.5, pp. 44–51 (global Reeb stability and the fibration over the circle)'
dependency_level: 14
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a
codimension-one foliation of a nonempty closed connected smooth manifold $M$ and
suppose that every leaf of $F$ is compact with trivial holonomy and that there
is a closed smooth manifold $L$ with every leaf diffeomorphic to $L$. Then the
leaf space $X:=M/F$ with the quotient topology
([[def-quotient-topology]]) is a compact connected Hausdorff topological
one-manifold, hence homeomorphic to $S^1$
([[lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle]]);
and the quotient map $q:M\to X$ is a locally trivial fibre bundle with fibre
$L$: every leaf $L_0=q^{-1}(p)$ has a saturated product neighbourhood
$U\cong L_0\times D$ with $q(U)=:V$ a coordinate interval and $q|_U$ the
projection $L_0\times V\to V$. Equivalently, $M$ is the total space of a
locally trivial fibre bundle over the circle whose fibres are the leaves of
$F$. Choosing a smooth transverse connection identifies the monodromy with the return diffeomorphism of the entire fibre $L_0$ after one circuit of $X$; its isotopy class is independent of that choice. The foliation is the fibre foliation of that bundle.

## Facts & Assumptions

**Given:** A codimension-one foliation $F$ of a nonempty closed connected smooth manifold $M$ all of whose leaves are compact with trivial holonomy and diffeomorphic to a fixed closed smooth manifold $L$.

[F1] A compact leaf with trivial (in particular finite) holonomy has a fundamental system of saturated product neighbourhoods $L_0\times D$, with $D$ an open interval, and every leaf in such a neighbourhood is compact and diffeomorphic to $L_0$ ([[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]], [[def-saturated-neighbourhood-of-a-leaf]]).

[F2] The leaf space $X=M/F$ is by definition the quotient of $M$ by the equivalence relation "same leaf", with the quotient topology; it is compact and connected when $M$ is, and it is Hausdorff when distinct leaves can be separated by saturated open sets ([[def-quotient-topology]], [[def-compact-space]], [[def-connected-space]], [[def-hausdorff-space]], [[def-smooth-manifold]]).

[F3] A nonempty compact connected topological one-manifold without boundary is homeomorphic to $S^1$ ([[lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle]]).

[F4] The product neighborhoods can be taken smooth, with smooth transverse coordinate changes ([[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]]).

[F5] Smooth partitions of unity patch local lifts, compact smooth vector fields are complete, and their local ODE flows depend smoothly on parameters ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

## Proof

**Proof technique:** direct.

1.1 (Leaf-space charts and local trivializations.) Let $L_0=q^{-1}(p)$ be a leaf. By [F1] it has a saturated product neighbourhood $U\cong L_0\times D$ with $D$ an open interval, and $U$ is a union of leaves, so $q(U)$ is an open subset of $X$ homeomorphic to $D$: the map $q|_U$ is the projection $L_0\times D\to D$ followed by the identification $q(U)\cong D$. These charts make $X$ locally Euclidean of dimension one, and the transition maps between two such charts are the transverse coordinate changes of the foliation, hence homeomorphisms. [F1, F2]

1.2 (Hausdorffness.) Let $p_1\neq p_2$ in $X$ correspond to distinct leaves $L_1\neq L_2$. These are disjoint compact subsets of the Hausdorff manifold $M$; choosing saturated product neighbourhoods as in [F1] inside disjoint open neighbourhoods of $L_1$ and $L_2$ gives disjoint open sets $q(U_1)\ni p_1$ and $q(U_2)\ni p_2$ in $X$, because a leaf meeting $U_i$ is contained in $U_i$. Hence $X$ is Hausdorff. [F1, F2]

2.1 (Compactness, connectedness, no boundary.) Since $M$ is nonempty, its quotient $X$ is nonempty. $X$ is compact and connected as a continuous image of $M$ [F2], and by step 1.1 every point of $X$ has a neighbourhood homeomorphic to an open interval, so $X$ has no boundary. Compactness gives finitely many such interval charts covering $X$; the union of their rational-interval bases is a countable base for $X$. Thus $X$ also satisfies the second-countability clause of the manifold definition, and [F3] identifies $X$ with $S^1$. [F2, F3, step 1.1]

3.1 (Whole-fibre return.) The maps in step 1.1 are local trivializations with fibre $L_0\cong L$. By F4 their interval coordinate changes are smooth, so $X$ is a smooth circle. Choose a positive base vector field of period one, lift it in the finitely many product trivializations, and patch the lifts with a finite smooth partition of unity. The patched field still projects to the base field. Compactness of $M$ gives its flow for time one, and that flow restricts to a diffeomorphism of the whole fibre $L_0$ onto itself. Flow over $[0,1]$ trivializes the pullback bundle; the endpoint gluing is exactly this return map. Convex interpolation of two such lifts, followed by smooth flow dependence, proves that their return maps are isotopic. A closed transversal is a single curve and does not itself determine a whole-fibre return map. [F1, F4, F5, step 2.1, construct]

4.1 Therefore the leaf space is a compact connected Hausdorff one-manifold homeomorphic to $S^1$ and $q:M\to X$ is a locally trivial fibre bundle with fibre $L$ whose monodromy is the whole-fibre return map for a chosen transverse connection, with the foliation as its fibre foliation. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
