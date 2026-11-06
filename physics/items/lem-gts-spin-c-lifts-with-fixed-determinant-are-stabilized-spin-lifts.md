---
id: lem-gts-spin-c-lifts-with-fixed-determinant-are-stabilized-spin-lifts
kind: lemma
title: Spin-c lifts with fixed determinant are stabilized Spin lifts
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-clifford-pbw-basis-and-associated-graded
  - thm-universal-property-of-clifford-algebra
  - thm-real-pin-spin-image-kernel-and-compactness
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-real-pin-spin-topological-double-covers
  - def-principal-g-bundle-and-associated-fiber-bundle
  - prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback
dependency_roles:
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  thm-clifford-pbw-basis-and-associated-graded: mathematical-premise
  thm-universal-property-of-clifford-algebra: mathematical-premise
  thm-real-pin-spin-image-kernel-and-compactness: mathematical-premise
  lem-normalized-pin-spin-product-and-norm-laws: mathematical-premise
  thm-real-pin-spin-topological-double-covers: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013
      url: https://academicweb.nd.edu/~lnicolae/ind-thm.pdf
      locator: §2.2.2 printed p.83, the double cover [s,z] maps to (rho(s),z squared); §3.2.5 printed pp.130–133, determinant lines and Spin-c lifts. The stabilized Clifford construction is proved below.
---

## Statement

For $n\ge1$, the positive-square full-even Euclidean Spin cover and the negative-square norm-one even Spin cover are isomorphic over $SO(n)$ by the real even-algebra map sending an ordered monomial of length $2r$ to $(-1)^r$ times the corresponding negative-square monomial. It fixes the central signs. Using the negative-square convention, there is a topological group isomorphism
$$\operatorname{Spin}^c(n)\cong\rho_{n+2}^{-1}(SO(n)\times SO(2))\subset\operatorname{Spin}(n+2),$$
where the subgroup on the right preserves the ordered orthogonal splitting $\mathbb R^{n+2}=\mathbb R^n\oplus\mathbb R^2$. Under it, the projection to $SO(n)\times SO(2)$ is $[s,z]\mapsto(\rho_n(s),z^2)$, identifying the oriented last plane with a complex line.

Let $V\to M$ be an oriented Euclidean rank-$n$ bundle and $L\to M$ a Hermitian complex line bundle over a paracompact Hausdorff base. Isomorphism classes of pairs consisting of a Spin-c lift $P_c$ of $V$ and a specified unitary isomorphism $\det(P_c)\cong L$ correspond to isomorphism classes of Spin lifts of $V\oplus L_{\mathbb R}$. Here $\det(P_c)$ is the associated complex line for the character $\chi([s,z])=z^2$. The correspondence is obtained by extension and restriction of structure groups, respects pullback and the specified frame maps, and holds also for $n=1$. It asserts no preferred determinant or preferred lift.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[thm-real-pin-spin-topological-double-covers]]

## Facts & Assumptions

**Given:** The negative-square Clifford convention, the two orthogonal summands, and the stated bundles with fixed metrics.

[F1] Ordered Clifford monomials form a basis, so the inclusions of the summand Clifford algebras are injective and their monomials may be compared in the larger algebra. The Clifford universal property constructs algebra maps from maps of generators satisfying the quadratic relation. [[thm-clifford-pbw-basis-and-associated-graded]], [[thm-universal-property-of-clifford-algebra]]

[F2] The Euclidean Spin maps are central double covers with kernel $\{\pm1\}$; their groups are compact. In definite signature, these even groups consist of even products of unit vectors and the central signs. [[thm-real-pin-spin-image-kernel-and-compactness]], [[thm-real-pin-spin-topological-double-covers]], [[lem-normalized-pin-spin-product-and-norm-laws]]

[F3] Spin-c is $(\operatorname{Spin}(n)\times U(1))/\langle(-1,-1)\rangle$ and its projection forgets the circle coordinate. Principal extensions and associated bundles have the stated locally trivial quotient constructions. [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]], [[def-principal-g-bundle-and-associated-fiber-bundle]], [[prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback]]

## Proof

1.1 Let $e_j^+$ and $e_j^-$ denote positive- and negative-square generators. In the complexification of the negative Clifford algebra the elements $ie_j^-$ square to $+1$ and have the positive Clifford anticommutation relations. By [F1], $e_j^+\mapsto ie_j^-$ extends to an algebra map; on ordered even monomials of length $2r$ it is multiplication by $i^{2r}=(-1)^r$ followed by the corresponding negative monomial. Therefore its restriction is a real algebra isomorphism on the even parts, with inverse given by the same basis signs. A positive even product of $2r$ unit vectors maps to $(-1)^r$ times the corresponding negative even product, which belongs to the negative norm-one Spin group. The inverse has the same property, so the map identifies the groups. Conjugation on the generators intertwines the orthogonal actions: the identity for $ie_j^-$ cancels the common scalar $i$. Scalars, in particular $\pm1$, are fixed. Finite-dimensional linearity makes the group isomorphism a homeomorphism. Thus principal lifts and their central twisting actions transport between these two conventions over the identity on $SO(n)$. [F1, F2, given, construct, algebra]

2.1 In the last negative-square plane put $B=e_{n+1}e_{n+2}$; then $B^2=-1$ and $z=a+ib\mapsto a+bB$ identifies its Spin group with $U(1)$: every such element factors as $(a e_{n+1}+b e_{n+2})(-e_{n+1})$, and its Clifford norm is $a^2+b^2=1$. Conjugation by $\cos\theta+B\sin\theta$ rotates the last plane through $2\theta$, so its map to $SO(2)=U(1)$ is $z\mapsto z^2$. Even monomials from the first summand commute with $B$, since moving them through the two last generators gives an even number of sign changes. Thus $(s,z)\mapsto s(a+bB)$ is a continuous group homomorphism into $\operatorname{Spin}(n+2)$. By [F1], the first even algebra and the last even algebra meet exactly in real scalars. By [F2], their Spin groups therefore intersect in $\{\pm1\}$; the homomorphism kernel is precisely $\{(1,1),(-1,-1)\}$. Its projection is the block pair $(\rho_n(s),z^2)$. Every block pair has such a lift by [F2] and the circle square map. Any other lift of that pair differs by $\pm1$, already in the image, so the image is the whole preimage subgroup. The induced continuous bijection from the compact quotient Spin-c to a Hausdorff subgroup is a homeomorphism. For $n=1$ the same calculation uses $\operatorname{Spin}(1)=\{\pm1\}$ and $SO(1)=1$, with no universal-cover assertion in that rank. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 The character $\chi([s,z])=z^2$ is well-defined because replacing $(s,z)$ by $(-s,-z)$ leaves $z^2$ unchanged. Given $P_c$ and a unitary identification of its determinant with $L$, its frame maps give an equivariant map to $P_{SO}(V)\times_M P_{U(1)}(L)$ with the homomorphism of step 2.1. Extend its structure group along the resulting inclusion into Spin$(n+2)$. The product frame bundle is the block-adapted reduction of $P_{SO}(V\oplus L_{\mathbb R})$, and its extension to $SO(n+2)$ is the full frame bundle. Consequently the extended principal Spin bundle carries the required double-cover frame map and is a Spin lift of $V\oplus L_{\mathbb R}$. These assertions are literal in every bundle chart: a local point $(x,h)$ maps to its local block frame times $\rho(h)$, and extension sends $(x,h)$ to the same point in the larger group chart. [F2, F3, step 2.1, construct]

4.1 Conversely take a Spin lift $P$ of $V\oplus L_{\mathbb R}$ and restrict it to the inverse image of the block-adapted frame reduction. Local lifts of block frame sections exist by the double-cover charts in [F2]; these exhibit the inverse image as a principal bundle for the subgroup in step 2.1. Its projection to the first block gives a Spin-c lift of $V$. Projection to the second block identifies the associated $\chi$ line with the specified line $L$, including its unitary frame map. Restriction after extension and extension after restriction are inverse: the local group-chart maps are respectively $h\mapsto h$ and $[p,g]\mapsto pg$, and these glue on overlaps. They commute with maps of lifts and pullback. Thus the two constructions induce inverse bijections on the stated isomorphism classes, with the determinant identification part of the data. The empty base has one empty object in each class. [F2, F3, step 2.1, step 3.1, construct, algebra] ∎

## Source-reading limit

Nicolaescu's printed p.83 double-cover homomorphism and printed pp.130–133 determinant and torsor discussion were read from the existing complete text extraction. The source passage there is stated for tangent bundles of compact connected manifolds; the present general bundle/base statement is proved directly from the displayed group and local principal-bundle constructions, rather than attributed verbatim to that narrower passage.
