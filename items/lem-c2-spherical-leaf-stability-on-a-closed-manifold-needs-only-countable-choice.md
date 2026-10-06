---
id: lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice
kind: lemma
title: Spherical leaf stability on a closed manifold needs only countable choice
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- thm-mayer-vietoris-sequence-in-singular-homology
- lem-c2-inverses-and-scalar-return-roots
- lem-c1-euclidean-maximal-flow-with-c2-upgrade
- lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal
- thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
- thm-existence-of-geodesically-convex-neighborhoods
- lem-oriented-intersection-detects-nonvanishing-rational-homology
- thm-morse-sard-for-euclidean-maps
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 11
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §§7-8, printed pp. 19-28; finite local repairs and exact adapters supplied in this strategy
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; finite product-graph and good-cover arguments supplied explicitly
---

## Statement

Assume $\mathrm{AC}_\omega$. For a closed connected oriented smooth three-manifold with C² cooriented foliation, one compact leaf homeomorphic to $S^2$ forces every leaf to be a compact sphere in this topological sense, and all leaves are $C^2$ diffeomorphic to the given compact leaf. Consequently a nonzero Π leaf excludes every spherical leaf and every sphere universal-cover alternative.

## Facts & Assumptions

**Given:** A closed connected oriented smooth three-manifold $M$ with a $C^2$ cooriented codimension-one foliation $F$, and one compact leaf $B_0$ homeomorphic to the sphere $S^2$. Let $S$ denote the union of compact leaves $C^2$ diffeomorphic to this actual reference leaf.

[F1] [[lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal]] supplies a positive closed transversal through a noncompact leaf avoiding a specified finite family of compact leaves. [[lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph]] supplies open transversal saturation and the graph description of compact leaves near a fixed compact reference leaf.

[F2] The sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies finite cellulations and normal forms of compact $C^2$ surfaces, including the sphere; the in-pair vanishing-cycle and fence items use it for finite generator systems. Its use here is only through the finite overlap relations of a compact sphere leaf.

[F3] The Mayer-Vietoris sequence computes the singular homology of a union from the homology of two open subsets and their intersection ([[thm-mayer-vietoris-sequence-in-singular-homology]]).

[F4] A $C^2$ Euclidean field has $C^2$ flow boxes and local flows with uniform derivative bounds on compact domains ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]), and $C^2$ equations with nonzero normal derivative have unique local $C^2$ roots ([[lem-c2-inverses-and-scalar-return-roots]]).

[F6] Smooth metrics exist by [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]. Strongly convex neighborhoods exist and nonempty finite intersections are contractible by [[thm-existence-of-geodesically-convex-neighborhoods]]. The finite-chain proof of [[lem-oriented-intersection-detects-nonvanishing-rational-homology]], steps 1.2–2.1, gives the span obstruction. For C² curves and compact leaves the same proof works: the diagonal pullbacks have largest source-minus-target dimension one, so C² Sard ([[thm-morse-sard-for-euclidean-maps]]) suffices. Smooth finite simplex approximations are unchanged; C² plaque-chart perturbations prepare the leaf cycles. Signed endpoints of the compact C¹ one-manifold pullbacks cancel in finite interval charts.

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Local spherical stability is finite: cover the compact sphere leaf $B_0$ by finitely many foliation boxes, choose finitely many connecting paths and the finite overlap relations among them, and use that every based loop of the sphere is contractible; finite compact homotopy transport makes all overlap transports the identity on one common short transversal, so the local plaque data patch to a compact plaque graph for every sufficiently small transverse parameter, producing a saturated product neighbourhood of $B_0$. Every leaf in these product charts is $C^2$ diffeomorphic to the actual reference leaf. Thus the union $S$ of compact leaves $C^2$ diffeomorphic to $B_0$ is nonempty, open and saturated; the argument uses only the trivial fundamental group of the sphere homeomorphism type, not a differentiable classification theorem. [F2, F4, given, construct]

1.2 Choose a smooth metric by F6 and a finite subcover from its family of strongly convex neighborhoods. Every nonempty finite intersection contracts along unique minimizing connectors. Induct on the cover size: the intersection of its last member with the preceding union is a union of fewer such sets with contractible finite intersections, so it has finite-dimensional rational homology by the same induction. Mayer–Vietoris F3 then gives finite-dimensional homology for the full union. In particular $H_2(M;\mathbb Q)$ is finite-dimensional, using the countable-choice metric and convexity suppliers. [F3, F6, construct]

2.1 Let $x\in\overline S$ and let $A$ be the leaf through $x$. If $A$ were intrinsically noncompact, then for every finite collection of spherical leaves $B_1,\dots,B_n$ the in-pair item [F1](i) would construct a positive closed transversal through $A$ avoiding all $B_i$. Its saturation [F1](ii) is open and contains $A$, so it contains $x$ and hence some spherical leaf $B$ arbitrarily near $x$; this $B$ meets the transversal while every chosen $B_i$ misses it. [F1, step 1.1]

3.1 The transversal in step 2.1 misses the chosen $B_i$ and meets $B$, so F6 gives $[B]$ outside their rational span. By step 1.2 finitely many spherical-leaf classes form a basis of the subspace spanned by all such classes. Apply step 2.1 to that finite family; a further sphere class outside their span is impossible. Hence $A$ is compact. [F1, F6, step 1.2, step 2.1]

4.1 Keep the compact limiting leaf $A$ fixed as reference in F1. Because $x\in\overline S$, spherical leaves meet its base transversal at parameters arbitrarily near zero: a foliation box projects nearby plaque points onto that transversal. A sufficiently near compact sphere is a one-sheeted collar graph over $A$, hence C² diffeomorphic to $A$. Thus $A$ is C² diffeomorphic to $B_0$, and $x\in S$. This uses one collar radius for fixed $A$, rather than uncontrolled radii for varying spheres. Therefore $S$ is closed as well as nonempty and open, and connectedness gives $S=M$. [F1, step 1.1, step 3.1]

5.1 If the foliation admitted a spherical leaf, step 4.1 would make every leaf a compact sphere, and a compact sphere leaf is simply connected, so every loop in it is null-homotopic in its own leaf and no leaf can carry a nonzero limitwise-nullhomotopy ($\Pi$) class; thus a nonzero $\Pi$ leaf excludes every spherical leaf. The sphere universal-cover alternative is excluded finitely as well: a compact simply connected oriented covering surface has a finite cover of its leaf, $\chi$ multiplies by the degree, and orientable finite normal forms give $2=d(2-2g)$, forcing genus $g=0$ and degree $d=1$, so a sphere universal cover means an actual sphere leaf; alternatively a circle of sphere leaves would make $M$ a sphere bundle over a circle whose monodromy patched by a finite $C^2$ path yields a positive closed transversal, contradicting the no-transversal hypothesis. All covers, paths and relations used are finite, hence only the standing countable choice from [F5] is consumed. [F1, F2, F5, step 4.1] ∎
