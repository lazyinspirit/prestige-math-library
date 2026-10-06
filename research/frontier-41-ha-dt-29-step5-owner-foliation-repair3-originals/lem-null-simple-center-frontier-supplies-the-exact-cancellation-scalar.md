---
id: lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar
kind: lemma
title: "A null simple center frontier supplies the exact cancellation scalar"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots, lem-c2-first-integral-period-annuli-have-c2-products, lem-c2-saddle-function-has-c1-morse-coordinates, def-holonomy-representation-and-holonomy-group-of-a-leaf, lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3, finite induction in the center/saddle extraction; complete new local construction supplied in the strategy"
---

## Statement

Assume AC_ω. Let a maximal nested-circle basin in a generic characteristic disk have one simple homoclinic frontier through one saddle and precisely its center in the interior. If its leafwise rounded image is null, a fixed cap supplies a C² first integral on a full neighborhood of the closed lobe and saddle, equal to the transported cap section on a regular exterior collar. After choosing the transverse sign so the center is a minimum, its Euclidean negative gradient has precisely one saddle unstable half-trajectory entering the lobe and tending to the center; the other exits a regular local section. Thus all scalar, branch, collar and fixed-cap hypotheses of the conditional simple-lobe cancellation carrier hold.

## Facts & Assumptions

**Given:** A maximal nested-circle basin $\Omega$ about a center $p$ in a generic characteristic disk, whose frontier is one simple homoclinic loop $\Gamma$ through one nondegenerate saddle $q$ with no other zero of the characteristic field in the closed disk; the leafwise rounded image of $\Gamma$ is null in its leaf, and one leafwise cap is fixed.

[F1] The holonomy representation and holonomy group of a leaf are defined on leafwise homotopy classes of loops, so leafwise homotopic loops have the same holonomy germ and a leafwise-null loop has identity holonomy germ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F2] The saddle normal form: a $C^2$ function with nondegenerate indefinite Hessian at $q$ has $C^1$ coordinates in which $f=c+xy$ ([[lem-c2-saddle-function-has-c1-morse-coordinates]]), so the local level sets through $q$ are the two coordinate axes and there is a nondegenerate saddle Hessian at $q$ up to a nonzero factor.

[F3] The sibling-pair items `lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots` and `lem-c2-first-integral-period-annuli-have-c2-products` supply the C² transverse product gluing by unique roots of the transverse flow and the C² product structure on period-annuli of a nested-circle basin; the sibling-pair item `lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves` supplies the local stable and unstable curves of a planar hyperbolic zero; their exact uses are flagged in steps 3.1, 4.1 and 4.1 below.

[F4] Along a gradient trajectory of a $C^1$ function, $du/d\tau=-|\nabla u|^2$ for the negative gradient flow, and on a compact level band where $\nabla u$ is nowhere zero one has $|\nabla u|\ge m>0$; a trajectory whose value decreases strictly cannot cross a level set where the function takes a larger value.

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 The source interior of the frontier occupies exactly one saddle quadrant of $q$: the two coordinate axes of the saddle normal form of [F2] give four quadrants, and if the source interior occupied three of them, the two unused characteristic separatrix half-rays would lie inside $\Omega$, whereas every point of $\Omega$ other than the center $p$ lies on a periodic orbit, and a separatrix half-ray is not a periodic orbit. Hence exactly one quadrant is occupied, and the maximality of the nested-circle basin and the absence of other zeros make $p$ the only interior center. [F2, given]

1.2 The rounded image of $\Gamma$ being null in its leaf makes the holonomy germ of $\Gamma$ the identity on both sides: the leafwise class of $\Gamma$ is trivial, so by [F1] the holonomy of $\Gamma$ is the holonomy of a null loop, namely the identity germ, and the same holds for the opposite side. [F1, given]

2.1 Cover the saddle $q$ and the compact regular part of $\Gamma$ by finitely many characteristic boxes, and use the saddle coordinate $u=z\circ f$ of [F2] in the box of $q$, normalized by $u(q)=0$; transport this scalar along the regular edge of $\Gamma$ by the transverse chart transitions of the finitely many boxes. Since the holonomy germ is the identity on both sides by step 1.2, the returned coordinate agrees exactly with $u$ on a two-sided interval, so the finitely many scalar expressions glue to a single $C^2$ first integral $u$ on an open neighbourhood $N$ of $\Gamma$, with $du\neq0$ off $q$ and with the original nondegenerate saddle Hessian at $q$ up to a nonzero factor. [F2, step 1.2, construct]

3.1 Choose the sign of $u$ so that $u<0$ on the basin quadrant. On an inner periodic curve $C$ contained in $N$ the scalar $u$ is a regular coordinate on the ordered period-annulus base; extend it inward to the center by a strictly increasing $C^2$ coordinate on that base: using the C² period product of [F3] choose a scalar base coordinate on the compact interval between two disjoint endpoint base collars, choose a positive $C^1$ derivative matching the prescribed endpoint derivatives, and adjust its integral by a positive bump to match the endpoint values; the affine scale and offset of the local center function are free, so the total value difference can first be made larger than the fixed endpoint-collar integrals. Integration gives a $C^2$ coordinate, all transitions being increasing $C^2$ diffeomorphisms, and it extends $u$ over $\Omega$, has precisely the minimum $p$, and preserves the first integral on $N$; in particular $u(p)<u(q)=0$. With $W$ equal to $\Omega$ together with a thin exterior regular neighbourhood of $\Gamma$, no other critical point lies in $W$. [F3, step 2.1, construct]

4.1 For the standard Euclidean metric, the negative gradient $-\nabla u$ has two saddle unstable half-rays by the local hyperbolic-gradient picture of [F3]. Exactly one of them lies in the basin quadrant, and the other lies in the opposite sign-negative quadrant outside $\Omega$. The inside ray cannot leave $\Omega$: $u$ strictly decreases along it while the whole frontier $\Gamma$ has value zero, so starting from a negative level it remains in a compact inner disk. Were its limiting value greater than $u(p)$, a compact regular level band would satisfy $|\nabla u|\ge m>0$, contradicting $du/d\tau=-|\nabla u|^2\le-m^2$ along the ray; hence its value tends to $u(p)$, any accumulation point has value $u(p)$, and the only such point is $p$, so the ray tends to the center. The other ray is regular immediately after leaving a small saddle chart and crosses a short transverse exit section before reaching any other singularity. [F3, F4, step 3.1]

5.1 The first integral $u$ and the fixed cap-product section $t_C$ may use different coordinates, but their differentials annihilate the same characteristic line field on the connected regular outer collar; the local increasing transition functions between them agree on overlaps by the same two-sided identity-return relation of step 2.1. Reparametrize $u$ on that collar by this transition, extend inward by the positive-derivative construction of step 3.1, and near $q$ use the corresponding increasing reparameterization of the saddle coordinate of [F2]; the resulting scalar equals $t_C$ exactly on the outer collar, and the Euclidean-gradient conclusions of step 4.1 are unchanged because a positive scalar reparameterization multiplies the gradient by a positive function. [F2, step 3.1, step 4.1]

6.1 Therefore a maximal nested-circle basin with a single simple homoclinic frontier and a null leafwise rounded image supplies: a $C^2$ first integral on a full neighbourhood of the closed lobe and saddle that agrees with the transported fixed cap section on a regular exterior collar, and a Euclidean negative gradient with exactly one unstable half-trajectory entering the lobe and tending to the center while the other exits through a regular local section. These are precisely the scalar, branch, collar and fixed-cap hypotheses of the conditional simple-lobe cancellation carrier, and the construction used only finitely many boxes, collars and bump parameters together with the two sibling suppliers, hence only the standing countable choice from [F5]. [F1, F3, F5, step 5.1] ∎
