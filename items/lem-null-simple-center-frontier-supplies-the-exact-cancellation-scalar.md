---
id: lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar
kind: lemma
title: "A null simple center frontier supplies the exact cancellation scalar"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations, lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar, def-countable-choice-principle-for-foliation-pair, lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots, lem-c2-first-integral-period-annuli-have-c2-products, lem-c2-saddle-function-has-c1-morse-coordinates, def-holonomy-representation-and-holonomy-group-of-a-leaf, lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves]
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

[F3] The sibling-pair items `lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots` and `lem-c2-first-integral-period-annuli-have-c2-products` supply the C² transverse product gluing by unique roots of the transverse flow and the C² product structure on period-annuli of a nested-circle basin; the sibling-pair item `lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves` supplies the local stable and unstable curves of a planar hyperbolic zero; their exact uses are flagged in steps 4.1, 5.1 and 5.1 below.

[F4] Along a gradient trajectory of a $C^1$ function, $du/d\tau=-|\nabla u|^2$ for the negative gradient flow, and on a compact level band where $\nabla u$ is nowhere zero one has $|\nabla u|\ge m>0$; a trajectory whose value decreases strictly cannot cross a level set where the function takes a larger value.

[F6] A continuous disk cap into a $C^2$ surface with a prescribed $C^2$ boundary-collar germ has a $C^2$ approximation equal to that germ on a smaller open collar; the construction uses a compact intrinsic surface carrier and finite smooth approximation ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 The source interior of the frontier occupies exactly one saddle quadrant of $q$: the two coordinate axes of the saddle normal form of [F2] give four quadrants, and if the source interior occupied three of them, the two unused characteristic separatrix half-rays would lie inside $\Omega$, whereas every point of $\Omega$ other than the center $p$ lies on a periodic orbit, and a separatrix half-ray is not a periodic orbit. Hence exactly one quadrant is occupied, and the maximality of the nested-circle basin and the absence of other zeros make $p$ the only interior center. [F2, given]

1.2 The rounded image of $\Gamma$ being null in its leaf makes the holonomy germ of $\Gamma$ the identity on both sides: the leafwise class of $\Gamma$ is trivial, so by [F1] the holonomy of $\Gamma$ is the holonomy of a null loop, namely the identity germ, and the same holds for the opposite side. [F1, given]

2.1 Choose one smooth positively transverse ambient field $V$ near the compact image of $\Gamma$, by finitely many positive chart fields and smooth nonnegative weights. In each foliation box let $\zeta_i=0$ be the assigned plaque of the intrinsic leaf $L$ through the corresponding arc of $f(\Gamma)$. The equation $\zeta_i(\Phi_{-\sigma_i(x)}f(x))=0$ has a unique short $C^2$ root because its derivative in $\sigma_i$ is nonzero. On overlaps the same $V$ orbit and assigned intrinsic plaque give the same root and projected point. The two-sided identity holonomy of step 1.2 returns the same plaque branch after one circuit, so these expressions give a $C^2$ projection $B_C$ on a sufficiently thin neighborhood $N$ of $\Gamma$, including its saddle, with $B_C=f$ on $\Gamma$. No embeddedness of the whole leaf or exclusion of distant branches is used. Choose a regular inner circle $C$ of the basin inside $N$ and an enlarged source disk $\widehat W$ with exterior boundary inside $N$. The projection annulus, prescribed leafwise rounding collar and given null filling supply a continuous leafwise filling of $B_C|_C$. Attach the prescribed $B_C$ germ on a collar of $C$, apply [F6] to the remaining filling disk, and extend by $B_C$ on $\widehat W$ outside $C$. This gives one $C^2$ leafwise cap $B$ agreeing with the entire projection germ near $\Gamma$ and the exterior boundary; no flattening of the saddle jets is performed. [F1, F3, F6, step 1.2, construct]

3.1 Apply the fixed-cap transverse-product construction of [F3] to $B$ with this same field $V$. The actual trace $f$ on $N$ is obtained along its short $V$ orbits from $B_C=B$, so its transported section $T=t_C$ satisfies $f(x)=P(x,T(x))$ exactly there. The product interval is fixed first; since $T=0$ on compact $\Gamma$, shrink $N$ so its section range is compactly inside that interval. Its differential annihilates the characteristic line field. Near $q$ a genuine foliation one-form pulls back as $c(x)dT$ with $c(q)\ne0$, so differentiation at the zero gives a nonzero scalar multiple of the Hessian of $T$. Characteristic nondegeneracy makes this Hessian indefinite and invertible, and $T(q)=0$. This constructs the actual cap section directly. [F2, F3, step 2.1, construct]

4.1 Choose the transverse sign so $T<0$ in the basin quadrant. Near the center choose the pullback $H$ of a genuine foliation transverse coordinate, with sign making its Hessian positive definite; the same nonzero-factor calculation as in step 3.1 makes $H$ a $C^2$ Morse minimum. On the regular nested-circle annulus [F3] gives a $C^2$ quotient coordinate with full connected circle fibers. Both $T$ on an outer annulus and $H$ on an inner annulus factor through it with positive derivative. Scale and translate $H$ by a positive affine change so its value difference to the prescribed outer coordinate exceeds the two fixed endpoint-collar integrals. On the intervening compact quotient interval choose a positive $C^1$ derivative matching the endpoint derivatives; after shortening the endpoint collars, a positive middle bump obtains the exact required integral. Integration gives a $C^2$ scalar equal to $H$ near $p$ and to the actual $T$ on $N$; no differentiability of a quotient coordinate at the critical center value is assumed. Call it $u$. It is a first integral on a full neighborhood of the closed lobe, has only the minimum $p$ and saddle $q$, and agrees with the actual cap section on the whole exterior collar. [F2, F3, step 3.1, construct]

5.1 For the standard Euclidean metric, the negative gradient $-\nabla u$ has two saddle unstable half-rays by the local hyperbolic-gradient picture of [F3]. Exactly one of them lies in the basin quadrant, and the other lies in the opposite sign-negative quadrant outside $\Omega$. The inside ray cannot leave $\Omega$: $u$ strictly decreases along it while the whole frontier $\Gamma$ has value zero, so starting from a negative level it remains in a compact inner disk. Were its limiting value greater than $u(p)$, a compact regular level band would satisfy $|\nabla u|\ge m>0$, contradicting $du/d\tau=-|\nabla u|^2\le-m^2$ along the ray; hence its value tends to $u(p)$, any accumulation point has value $u(p)$, and the only such point is $p$, so the ray tends to the center. The other ray is regular immediately after leaving a small saddle chart and crosses a short transverse exit section before reaching any other singularity. [F3, F4, step 4.1]

6.1 The fixed cap $B$, product $P$ and section on the exterior collar were built with the same field $V$ in steps 2.1 and 3.1. The scalar $u$ was extended inward while retaining that section exactly, rather than reparametrized across possibly disconnected level components. Thus its cap-product collar identity is pointwise and the branch conclusions of step 5.1 apply to this actual $u$. The cap is a map into the intrinsic leaf and may have self-intersections; its finite compact image and prescribed collar germ suffice. [F3, F6, step 3.1, step 4.1, step 5.1]

7.1 Therefore a maximal nested-circle basin with a single simple homoclinic frontier and a null leafwise rounded image supplies: a $C^2$ first integral on a full neighbourhood of the closed lobe and saddle that agrees with the transported fixed cap section on a regular exterior collar, and a Euclidean negative gradient with exactly one unstable half-trajectory entering the lobe and tending to the center while the other exits through a regular local section. These are precisely the scalar, branch, collar and fixed-cap hypotheses of the conditional simple-lobe cancellation carrier, and the construction used only finitely many boxes, collars and bump parameters together with the two sibling suppliers, hence only the standing countable choice from [F5]. [F1, F3, F5, step 6.1] ∎
