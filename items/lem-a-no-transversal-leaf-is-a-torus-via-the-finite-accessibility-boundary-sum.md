---
id: lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum
kind: lemma
title: "A no-transversal leaf is a torus via the finite accessibility boundary sum"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary, lem-finite-tangent-zero-count-and-inward-boundary-sum-without-general-thom-existence, lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, def-limitwise-nullhomotopy-subgroup-of-a-leaf]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 12
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a77, Theorem 7.1 and its proof, printed pp. 19-25; finite Euler boundary-sum adapter supplied locally"
    - title: "Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Classes 12-13; torus boundary-leaf conclusion supplied explicitly"
---

## Statement

With the finite plane-bundle Euler boundary-sum carrier and oriented compact-surface normal forms, every no-closed-transversal leaf of the present closed oriented cooriented three-manifold foliation is a torus.

## Facts & Assumptions

**Given:** A closed oriented three-manifold $M$ with a $C^2$ cooriented codimension-one foliation $F$, and a leaf $L$ meeting no closed transversal (in the application $L$ also carries a nonzero limitwise-nullhomotopy class). Work in the ambient connected component $M_0$ containing $L$. It is closed and connected, and every positive path starting at $L$, hence $W$, lies in $M_0$.

[F1] The in-pair item [[lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary]] constructs the compact $C^2$ manifold $W=\overline N$ with finitely many compact boundary leaves $C_i$, including $L$, and positive normals pointing inward everywhere on $\partial W$.

[F2] The in-pair item [[lem-finite-tangent-zero-count-and-inward-boundary-sum-without-general-thom-existence]] states that for a compact oriented region $W$ with an oriented plane bundle $E$ tangent to every boundary component and one common inward transverse direction, the finite sum of boundary Euler characteristics is zero, using a generic section whose oriented zero curve has vanishing signed boundary count.

[F3] The in-pair item [[lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice]] states that, on a closed connected oriented three-manifold, one compact sphere leaf forces every leaf in that component to be a compact sphere; the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies oriented compact-surface normal forms, and a nonzero $\Pi$ class excludes spherical leaves.

[F4] The limitwise-nullhomotopy subgroup of a leaf is defined by the one-sided nullhomotopy predicate ([[def-limitwise-nullhomotopy-subgroup-of-a-leaf]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Construct $W$ and its finitely many compact boundary leaves $C_i$ by [F1]. The oriented plane bundle $TF$ extends over $W$ and restricts on each $C_i$ to $TC_i$; the ambient orientation and the positive coorientation give $TF$ its orientation. Since the positive normals point inward on every $C_i$, the boundary orientation of $W$ is the same negative of this leaf orientation on every component. [F1, given]

2.1 Applying the finite tangent boundary-sum carrier [F2] to this data gives a generic rank-two section over $W$ with oriented one-dimensional zero set and directly $0=-\sum_i\chi(C_i)$, its finite surface index count being $V-E+F$; no general Thom existence, three-dimensional finite CW construction or unproved comparison is used. [F1, F2, step 1.1]

3.1 No $C_i$ is a sphere. Otherwise apply [F3] on the closed connected component $M_0$: every leaf there is a compact sphere. The finite trivial-holonomy plaque construction in that supplier gives saturated product neighbourhoods of these spheres. Their quotient is a compact connected one-manifold without boundary: each product supplies its interval chart, and distinct compact leaves have disjoint smaller saturated neighbourhoods, so the quotient is Hausdorff. It is therefore a circle. Lift one positive circuit through finitely many product charts to a positive transverse path from $L$ to itself; [F1]'s return equivalence then gives a closed transversal through $L$, contradicting the hypothesis. In the application, simple connectedness of a sphere also contradicts $\Pi(L)\ne0$. By the finite oriented compact-surface normal forms of [F3], the remaining boundary leaves have $\chi\le0$. [F1, F3, given, step 1.1, step 2.1, construct]

4.1 The finite sum in step 2.1 is zero and every term is nonpositive, so every $\chi(C_i)=0$; by the same normal forms each $C_i$ is homeomorphic to the torus $T^2$. Since $L$ is one of the finitely many boundary leaves, the original leaf $L$ is a torus. This obtains the torus identification without first assuming that the $\Pi$-side accessibility class has $L$ as its sole boundary leaf, and it does not assert that $W$ itself is a solid torus; all constructions are finite or the single application of [F1], hence only the standing countable choice from [F5]. [F1, F3, F4, F5, step 3.1] ∎
