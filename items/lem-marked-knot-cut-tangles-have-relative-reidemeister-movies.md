---
id: lem-marked-knot-cut-tangles-have-relative-reidemeister-movies
kind: lemma
title: "Cut tangles of marked knots have relative Reidemeister movies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-isotopy-extension
  - lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
  - thm-parametric-transversality
  - thm-transverse-preimage-theorem
  - def-oriented-reidemeister-moves
  - def-planar-isotopy-of-link-diagrams
proof_strategy: direct
axiom_use: "ACω is used in isotopy extension and the relative finite-jet transversality argument; the Alexander scaling on the compact arc uses no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Khovanov, A categorification of the Jones polynomial, §8.3, printed p. 49, and §8.4, printed pp. 50–51"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Queffelec, Reidemeister's theorem using transversality, §§2–3"
      url: "https://arxiv.org/pdf/2406.18203v1"
dependency_level: 0
---

## Statement

Assume countable choice. Let $(D,p)$ and $(D',p')$ be finite regular diagrams of the same oriented smooth knot, with marks away from crossings. Remove a small open arc about each mark and regard each complementary diagram as a one-interval tangle diagram in a disk, using the complementary disk in the projection sphere. Identify their two boundary endpoints and short oriented product collars. The resulting proper arcs can be realized in one standard smooth three-ball so that they are smoothly isotopic with those endpoints and collars fixed. Their diagrams are connected by a finite sequence of planar isotopies and oriented Reidemeister moves supported away from those collars. This holds when the two diagrams coincide and only the mark has moved along the knot.

## Statement references

[[def-countable-choice]]

[[thm-isotopy-extension]]

[[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]]

[[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]]

## Facts & Assumptions

**Given:** AC$_\omega$ and the two finite based diagrams of the same oriented knot.

[F1] A smooth isotopy of embeddings of a compact manifold, including a compact three-ball, extends under AC$_\omega$ to an ambient isotopy; end stationarity can be retained ([[thm-isotopy-extension]], clauses 1 and 4).

[F2] Parametric transversality and transverse preimages have the meanings and countable-choice hypotheses of [[thm-parametric-transversality]] and [[thm-transverse-preimage-theorem]]. The finite-jet proof, codimension counts, exclusion of accumulation on source diagonals, and construction of planar isotopies on regular intervals are given in [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]], proof steps 1.1–5.1.

[F3] An ordinary cusp, quadratic double tangency and transverse triple event give respectively R1, R2 and R3, with all actual orientations and height orders retained ([[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]], proof steps 1.1–2.1; [[def-oriented-reidemeister-moves]]).

## Proof

1.1 **The endpoint realizations and the common cap.** Regard a planar diagram as a diagram on the projection sphere, and choose a small closed disk $U$ about its mark meeting the diagram in one crossing-free arc only. The complementary disk contains a proper interval diagram; its two endpoints can be put at any prescribed two boundary points by an orientation-preserving disk coordinate change, preserving the interval orientation. Realize its crossings at small distinct positive or negative heights in a thickening of that disk, and straighten short end collars. Round the thickening to a standard three-ball $B$. Closing the interval by a fixed unknotted arc in the complementary ball $B_*$ gives exactly the original diagram on the sphere: the two projected disks glue along their boundary and the cap is the single deleted arc. This operation changes no crossing, sign, or resolution; it replaces the marked circle in every resolution by one interval. Make these choices for both diagrams with the same $B,B_*$, endpoints and cap $J$. The cap and slightly longer knot collars may be chosen identical as parametrized embeddings at both ends. Indeed an orientation-preserving change of circle parametrization can prescribe its parametrization on an interval; it extends over the remaining interval by a strictly increasing smooth map. Such circle reparametrizations are isotopic to the identity, as seen by interpolating their increasing lifts $f:\mathbb R\to\mathbb R$, $f(x+1)=f(x)+1$, with the identity lift. Thus there is a smooth isotopy $F_t$ of the closed parametrized knots with these endpoint embeddings and this common source interval $J$. Reparametrize time to make it stationary near $0,1$. Here the existence of $F_t$ is exactly the hypothesis that the two closed diagrams represent the same oriented knot. [given, construct]

2.1 **Trivialize a moving ball, including its endpoint charts.** Along the track of the slightly enlarged source interval $J$, choose a smooth pair of normal vectors to the nonzero knot tangent, equal to the same standard pair near $t=0,1$. Such a pair exists on the rectangle $J\times I$: start with local transverse frames, extend them along the interval and then in time, and correct their terminal angle by a smooth rotation, equal to zero initially and to that angle terminally. The terminal angle has a smooth real lift on an interval. Regarding $S^3$ as the unit sphere in $\mathbb R^4$, use the explicit tube $(F_t(s)+u n_1(s,t)+v n_2(s,t))/\sqrt{1+u^2+v^2}$, with the two normals tangent to $S^3$. Its derivative is injective along the zero section. For uniformly small transverse coordinates it is an embedded tube; compactness gives a common width and excludes intersections with the rest of the knot outside the enlarged interval. Rounded end caps give a smooth family of embedded three-balls $b_t:B_*\to S^3$ about the cap, intersecting the knot in the chosen cap and its standard end collars. At the two stationary ends this family is the same specified ball chart: $b_0=b_1$. Apply [F1] to $b_t$ and, if necessary, a slightly larger ball chart, to get $H_t$ with $H_t b_0=b_t$. Then $G_t=H_t^{-1}F_t$ fixes the cap and its collar throughout. Its restriction to the complementary source interval is a proper-arc isotopy in the fixed $B=S^3\setminus\operatorname{Int}B_*$. At $t=0$ it is the first tangle; at $t=1$ it is $h$ applied to the second, where $h=H_1^{-1}|_B$ is a diffeomorphism equal to the identity on a boundary collar, because $b_1=b_0$ on the slightly larger ball. No identification of the terminal ball chart with an arbitrary initial chart has been assumed. [F1, step 1.1, construct]

3.1 **Correct the terminal diffeomorphism on the arc.** Identify $B$ with the unit ball and choose the coordinate origin off the second compact arc $T$. The chart can have this property by a small interior change fixing its boundary collar. Since $h$ is the identity near the boundary, for $0<r\le1$ the maps $h_r(x)=\begin{cases}r h(x/r),&|x|\le r,\\ x,&|x|\ge r\end{cases}$ are smooth diffeomorphisms, agreeing smoothly at $|x|=r$, and equal to the identity on a fixed boundary collar. Put $h_0=1$. For $r$ less than the positive distance from the origin to $T$, $h_r|_T$ is exactly the identity. Thus $(s,r)\mapsto h_r(T(s))$ is a smooth isotopy of proper arcs even at $r=0$, although the ambient Alexander formula need not be smooth at $(x,r)=(0,0)$. Each slice is embedded, its endpoints and collars are fixed, and its final slice is $h(T)$. Reverse this arc isotopy and concatenate it with step 2.1, using stationary time changes at the join. The resulting smooth arc isotopy runs from the first tangle to the second relative to the same boundary endpoints and collars. This argument uses no claim that the diffeomorphism group of a three-ball is smoothly contractible. [step 1.1, step 2.1, construct]

4.1 **Projection and relative perturbations.** Choose the standard ball model as a rounded thickening of the projection disk, with the two fixed endpoint collars radial in that disk and with constant height. The rest of the compact arc track is in the interior of the ball. Shorten the protected collars if needed. Compactness then separates their projected endpoint neighbourhoods from every other branch: off a slightly larger source collar the radial coordinate in the disk is uniformly bounded away from its boundary. On the remaining transition collars the projection is still a fixed regular embedded arc. Reparametrize the isotopy in time to be stationary near its two regular end diagrams. In the finite-dimensional family of [F2], replace the time cutoff $\lambda(t)$ by $\lambda(t)\rho(s)$, where $\rho$ vanishes on the protected source collars and is positive on their complement. Embed the compact source rectangle in Euclidean space; multiplying coordinate polynomials of degree at most $43$ by this cutoff independently prescribes jets through order three at any at most six distinct free source points. Explicitly, at points $X_i$, the polynomials $\prod_{j\ne i}|X-X_j|^8$ times suitable cubic Taylor polynomials prescribe the required jets, since multiplication by the nonzero cutoff is invertible on jets. Keep the spatial height coordinate unchanged. Small parameters preserve slice embeddings by compact local immersion and distant-point separation, fix the time-end diagrams, and fix the protected endpoint collars. The collars meet no singular stratum, and the transition region is regular with no other projected branch, so absence of perturbations on the collars loses no needed transversality. [F2, step 3.1, construct]

5.1 **All singularities remain interior and finite.** Apply [F2] to that family on the free source configurations. The equations $g_s=0$ have codimension two in $(s,t)$; the extra degeneracy $\det(g_{ss},g_{sss})=0$ has total codimension three and is avoided. Distinct-point equality has codimension two in $(s_1,s_2,t)$; equality plus tangent dependence has codimension three, giving isolated quadratic double tangencies with nonzero relative normal velocity. Triple equality has codimension four in $(s_1,s_2,s_3,t)$; adding tangent dependence or a vanishing derivative increases codimension and is avoided. Quadruple equality has codimension six in dimension five and is absent. Simultaneous distinct events have combined codimension larger than the shared-time configuration dimension; independent jets at up to six points exclude them. Countably many coordinate charts and AC$_\omega$ allow a parameter outside the resulting countable null union. As in [F2], near a regular source point a projected coordinate is strictly monotone, excluding accumulation along deleted diagonals; near an ordinary cusp its Taylor form $(b s^2,e(t-t_0)s+c s^3)$, $bec\ne0$, has a single local double arc with no accumulation of other event types. Elsewhere the relevant configurations are compact, and isolated transverse events are finite. There are no endpoint accumulations because the protected endpoint neighbourhoods are fixed and isolated, and no end-time accumulations because those diagrams are stationary and regular. These arguments prove the required relative version directly; they do not apply a closed-source statement to an interval without modification. [F2, step 4.1, algebra, construct]

6.1 **The relative movie.** By [F3], each exceptional time of step 5.1 gives one oriented R1, R2 or R3 in an interior disk disjoint from the protected endpoint collars. Between events, continue crossings by the inverse function theorem and extend the motions of the intervening embedded edges by normal-coordinate cutoffs, as in [F2]. The cutoffs can vanish on the protected collars, since those arcs are stationary and isolated. Hence the intervening planar isotopies fix them too. A finite subdivision of time and composition produces the asserted finite relative movie. The construction starts with either pair of marks, including two different marks on one diagram, so it proves that case as well. AC$_\omega$ has been used only in [F1], [F2] and their countable chart unions. [F1, F2, F3, step 3.1, step 4.1, step 5.1, construct] ∎
