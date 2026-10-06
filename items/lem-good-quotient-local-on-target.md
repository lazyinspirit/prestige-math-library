---
id: lem-good-quotient-local-on-target
kind: lemma
title: Good quotients are local on the target and are categorical quotients
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
deps: [cor-closed-points-dense-in-affine-spectra, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, thm-morphisms-agree-closed-equalizer-separated-target, thm-affine-fibre-product-tensor-ring, thm-proper-ideal-contained-in-maximal-ideal, def-good-and-geometric-quotients-for-group-actions, def-categorical-and-geometric-quotients-of-classical-varieties, def-rational-action-on-affine-variety, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-locally-ringed-space, def-axiom-of-choice, lem-affine-morphism-local-on-target, thm-morphisms-into-affine-scheme-global-sections]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 1, Section 1.4 (Proposition 1.11 and its corollaries) and Lecture 3, Section 3.3"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Remark 3.34 and Proposition 3.14"
---

## Statement

Assume AC inherited from the quotient suppliers. Let $G$ act on a classical complex variety $X$, viewed through its associated reduced finite-type complex scheme for scheme clauses, and let $\pi:X\to Y$ be a $G$-invariant morphism to a $\mathbb C$-scheme ([[def-good-and-geometric-quotients-for-group-actions]]).

(i) If $Y=\bigcup_iU_i$ is an open cover such that each restriction $\pi^{-1}(U_i)\to U_i$ is a good quotient of the action of $G$ on $\pi^{-1}(U_i)$, then $\pi$ is a good quotient; the analogous statement holds for the geometric-quotient property.

(ii) A good quotient has the categorical universal factorization property for invariant morphisms to classical varieties viewed as their associated schemes. It is a geometric quotient if and only if its fibres on complex closed points are exactly the $G(\mathbb C)$-orbits.

## Facts & Assumptions

**Given:** A complex affine algebraic group $G$ acting algebraically on a classical complex variety $X$, a $G$-invariant morphism $\pi:X\to Y$ of locally ringed spaces to a $\mathbb C$-scheme $Y$, and an open cover $Y=\bigcup_iU_i$ whose restrictions are good quotients.

[F1] *Good and geometric quotients.* A good quotient is a $G$-invariant surjective affine morphism $\pi$ such that $\mathcal O_Y(U)\to\mathcal O_X(\pi^{-1}U)^G$ is an isomorphism for all open $U\subseteq Y$, images of closed $G$-stable subsets are closed, and images of disjoint closed $G$-stable subsets are disjoint (clauses (i)-(v)); it is geometric if in addition its complex-point fibres are exactly the orbits. A categorical quotient is a $G$-invariant morphism through which every $G$-invariant morphism to a classical variety factors uniquely. ([[def-good-and-geometric-quotients-for-group-actions]], [[def-categorical-and-geometric-quotients-of-classical-varieties]])

[F2] *Classical conventions.* Regular functions on a classical variety form a sheaf; a morphism is determined by its local coordinate expressions on affine charts, and two morphisms agreeing on an open cover agree. Invariants of a sheaf of algebras form a sheaf, and surjectivity and invariance are local on the target. Affineness is local on the target by [[lem-affine-morphism-local-on-target]], under AC. ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]], [[def-rational-action-on-affine-variety]], [[def-locally-ringed-space]])

[F3] *AC.* The Axiom of Choice is inherited from the quotient, closed-point-density and maximal-ideal suppliers; in the common-field argument below it supplies a prime of a nonzero tensor product. ([[def-axiom-of-choice]])

[F4] *Scheme points and equalizers.* In finite-type complex affine schemes closed points are complex points and are dense in every closed subset, including nonreduced schemes; the equalizer of two morphisms into a separated scheme is closed. Affine fibre products have tensor-product coordinate rings. Every nonzero ring has a prime ideal under AC. ([[cor-closed-points-dense-in-affine-spectra]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]], [[thm-morphisms-agree-closed-equalizer-separated-target]], [[thm-affine-fibre-product-tensor-ring]], [[thm-proper-ideal-contained-in-maximal-ideal]])

## Proof

**Proof technique:** direct.

1.1 *Clauses (i)-(v) are local on the target.* Assume every restriction $\pi_i:\pi^{-1}(U_i)\to U_i$ is a good quotient. Then $\pi$ is $G$-invariant because the $U_i$ cover $Y$ and invariance is a local condition on the target, and $\pi$ is surjective because each $\pi_i$ is. Affineness follows from [[lem-affine-morphism-local-on-target]]: refine the $U_i$ by affine opens; their preimages are affine since each $\pi_i$ is affine. For clause (iii), each restriction $\mathcal O_Y(U_i)\to\mathcal O_X(\pi^{-1}U_i)^G$ is an isomorphism, and for arbitrary open $U\subseteq Y$ the maps over $U\cap U_i$ agree on overlaps because they are determined by restriction of regular functions; since both $\mathcal O_Y$ and the invariant-function presheaf are sheaves, the map $\mathcal O_Y(U)\to\mathcal O_X(\pi^{-1}U)^G$ is an isomorphism. For clause (iv), if $Z\subseteq X$ is closed and $G$-stable, then $\pi(Z)\cap U_i=\pi_i(Z\cap\pi^{-1}(U_i))$ is closed in $U_i$ because $Z\cap\pi^{-1}(U_i)$ is closed and $G$-stable there; a subset of $Y$ whose traces on all $U_i$ are closed is closed. Clause (v) is checked the same way: $\pi(Z_1)\cap\pi(Z_2)\cap U_i=\pi_i(Z_1\cap\pi^{-1}U_i)\cap\pi_i(Z_2\cap\pi^{-1}U_i)=\varnothing$. Hence $\pi$ is a good quotient. [F1, F2, given]

1.2 *Constancy on complex-point fibres.* Let $h:X\to Z$ be invariant, with $Z$ the associated separated scheme of a classical variety. If complex points $x,x'$ have the same image under $\pi$ but distinct images $z,z'$ under $h$, the disjoint closed invariant subsets $h^{-1}(z),h^{-1}(z')$ have intersecting images under $\pi$, contradicting clause (v). Thus $h$ is constant on complex-point fibres. A complex point maps to a closed point of any complex scheme: in each affine open its map to $\mathbb C$ is surjective with maximal kernel. [F1, F2]

2.1 *The geometric property is local.* Suppose each restriction is a geometric quotient. A good quotient has orbit fibres exactly when every restriction has orbit fibres, since the fibres of $\pi$ over $U_i$ are the fibres of $\pi_i$; by step 1.1 and [F1] this is exactly the geometric-quotient property. Conversely if $\pi$ is a good quotient with orbit fibres then each restriction is one. [F1, step 1.1]

2.2 *Constancy on all topological fibres.* Since $X$ is quasi-compact and $\pi$ is surjective, $Y$ is quasi-compact. Choose a finite affine cover $V_i=\operatorname{Spec}B_i$ of $Y$. Affineness gives $\pi^{-1}(V_i)=\operatorname{Spec}A_i$, an affine open of finite-type $X$, so $A_i$ is a finite-type complex algebra. Therefore $R=X\times_YX$ is finite type over $\mathbb C$: over $V_i$ its ring $A_i\otimes_{B_i}A_i$ is a quotient of $A_i\otimes_{\mathbb C}A_i$. The closed equalizer in $R$ of $h\operatorname{pr}_1,h\operatorname{pr}_2$ contains every complex closed point by step 1.2, hence has underlying set all of $R$ by [F4]. For points $x,x'$ over $y$, the tensor product $\kappa(x)\otimes_{\kappa(y)}\kappa(x')$ is nonzero (tensoring field extensions over a field preserves nonzero injections). A prime of it gives a common field-valued point of $R$ dominating $x,x'$, so the equalizer condition on underlying points forces $h(x)=h(x')$. Thus $h$ is constant on every topological fibre. [F1, F3, F4, step 1.2]

3.1 *Open charts and descent.* For an affine chart $V=\operatorname{Spec}A$ of $Z$, put $U=h^{-1}(V)$. Constancy on fibres makes $U$ saturated. Consequently $W=\pi(U)=Y\setminus\pi(X\setminus U)$ is open by clause (iv), and $U=\pi^{-1}(W)$. Every coordinate in $A$ pulls back to an invariant regular function on $U$, which descends uniquely to $W$ by clause (iii); these descended functions respect sums, products and all relations because pullback is an isomorphism. They define a morphism $W\to\operatorname{Spec}A$ by [[thm-morphisms-into-affine-scheme-global-sections]]. On overlaps the underlying maps agree by surjectivity of $\pi$ and the coordinate pullbacks agree by the same sheaf isomorphism, so they glue to $\varphi:Y\to Z$ with $\varphi\pi=h$. The same arguments give uniqueness of both its underlying map and sheaf map. This is the categorical universal property. [F1, F2, step 2.2]

4.1 *Geometric criterion and classical topology.* The geometric criterion is precisely the complex-point fibre condition in [F1]. For its relation with the classical convention, the induced map $X(\mathbb C)\to Y(\mathbb C)$ is surjective: every fibre over a complex point is nonempty by scheme surjectivity and finite type over $\mathbb C$ by the affine chart description in step 2.2, so [F4] supplies a complex point in it. If $U\subseteq Y(\mathbb C)$ has open preimage in $X(\mathbb C)$ and the fibres are orbits, its complementary preimage is a closed invariant classical subset, hence the complex points of a closed reduced subset $C\subseteq X$. Clause (iv) makes $\pi(C)$ closed in $Y$, and $\pi(C)\cap Y(\mathbb C)=Y(\mathbb C)\setminus U$: a fibre of $C$ over a complex point is nonempty precisely when it has a complex point, again by [F4]. Thus $U$ is open in the induced classical topology. The converse follows by continuity, and the invariant-function condition is inherited from clause (iii). When $Y$ is a classical variety through its associated scheme, these are exactly the classical geometric-quotient conditions. [F1, F4, step 2.2, step 3.1]

5.1 Steps 1.1 and 2.1 prove locality on the target for the good and geometric properties, step 3.1 proves the categorical universal property of a good quotient, and step 4.1 proves that a good quotient has orbit fibres exactly when it is geometric, which is assertion (ii). The Axiom of Choice is used through the closed-point and maximal-ideal suppliers as recorded in [F3]. [F3, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **No separatedness or properness.** Locality on the target and the categorical property use only the clauses of the definition and the sheaf properties of regular functions; no hypothesis of separatedness, properness or finite generation is needed.
- **The affine case.** For affine $X$ and finitely generated invariants, the chart quotients of [[lem-affine-chart-quotients-for-invariant-sections]] are good quotients by the affine categorical-quotient theorem [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]], and this locality lemma is what upgrades the chart-wise conclusions to the global semistable locus.
