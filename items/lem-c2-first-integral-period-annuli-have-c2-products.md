---
id: lem-c2-first-integral-period-annuli-have-c2-products
kind: lemma
title: "A C² first-integral period annulus has a C² leaf product"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, thm-second-countable-implies-lindelof, def-quotient-topology, lem-c2-inverses-and-scalar-return-roots, def-countable-choice-principle-for-foliation-pair, cor-primitives-of-a-continuous-function, lem-finitely-cornered-regular-plane-curve-separates-without-choice, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11, author-hosted lecture notes"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3 (the finite descent/picture argument for a center surrounded by closed leaves); the C² product construction is supplied locally here"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $A\subseteq\mathbb R^2$ be a nonempty connected open set
carrying a $C^2$ first-integral atlas: each chart has a $C^2$ submersion $u$
whose connected levels are the leaves, and overlap transverse coordinates
differ by $C^2$ local diffeomorphisms. Suppose all leaves are simple compact
$C^2$ circles whose bounded Jordan domains are strictly nested, with consistent
orientation. Then $A$ is an open annulus, and there is a $C^2$ diffeomorphism
$\Psi:S^1\times(0,1)\to A$ taking each circle onto one leaf and increasing in
the nested leaf order. For any nowhere-zero $C^1$ tangent generator $X$, orient
$\theta$ so $\Psi^{-1}_*X=a(s,\theta)\partial_\theta$ with a positive $C^1$
function $a$. No $\theta$-independent speed, $C^2$ flow of $X$, or $C^2$
coefficient $a$ is asserted. The atlas applies to $u=z\circ h$ for $C^2$
characteristic maps on their regular annulus.

## Facts & Assumptions

**Given:** A connected open planar set $A$ with a $C^2$ first-integral atlas whose leaves are simple compact $C^2$ circles with strictly nested bounded Jordan domains and consistent orientation, together with the induced codimension-one $C^2$ foliation of the surface $A$.

[F1] Every finite plaque transport between $C^2$ local transversals is a $C^2$ local diffeomorphism germ, and a finite family of $C^2$ trace maps agreeing on open overlap collars glues to a $C^2$ trace map ([[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]]).

[F2] A topological embedding $c:S^1\to\mathbb R^2$ that is piecewise $C^2$ with finitely many corners, each with two distinct one-sided tangent rays and regular edges, has a complement with exactly two connected components, one bounded and one unbounded ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

[F3] A $C^2$ map with invertible derivative at a point has a $C^2$ local inverse; a $C^2$ equation with nonzero normal derivative has a unique local $C^2$ root ([[lem-c2-inverses-and-scalar-return-roots]]).

[F4] Assuming $\mathrm{AC}_\omega$, every second countable space is Lindelöf ([[thm-second-countable-implies-lindelof]]).

[F5] A continuous real function on an order-convex interval has a primitive there, unique up to an additive constant ([[cor-primitives-of-a-continuous-function]]).

[F6] For a surjection $q:X\to Y$ the quotient topology on $Y$ is the finest topology making $q$ continuous, so a subset of $Y$ is open exactly when its preimage is open and $q$ is continuous ([[def-quotient-topology]]).

[F7] Closed and bounded subsets of $\mathbb R^2$ are compact; a nested decreasing family of nonempty compact subsets has nonempty intersection; a continuous real function on a nonempty compact set attains its maximum and minimum ([[thm-heine-borel-rn]]).

[F8] The standing assumption of the pair is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 A compact C² section drawn inside one first-integral box and shrunk so that it is transverse to the line field everywhere meets each leaf at most once: orient every circle as the boundary of its bounded Jordan domain; the determinant of a positively oriented leaf tangent and the tangent of the section is continuous and nowhere zero along the section and the transverse coordinate is locally determined, so its sign is locally constant along the connected section, and on the compact section a leaf meeting would have finitely many intersection points, since they are isolated by transversality and a compact set covered by isolating neighbourhoods is finite by [F7]; between consecutive intersections the section subarc is a connected arc avoiding the leaf, hence lies in one component of the complement of that Jordan curve by [F2], whereas the crossing direction at the two ends would have to pass from the bounded to the unbounded component and back, contradicting the constant sign. [given, F2, F7]

2.1 The compact leaf $C$ admits a finite cyclic chain of C² foliated rectangles covering it, and finite plaque transport around the chain defines a C² return map $H$ on a smaller interval of a transverse section; the returned point lies on the same global leaf as the starting point and on the section, so step 1.1 gives $H(t)=t$, and hence the transported transverse parameter is a well-defined C² first integral on a saturated neighbourhood of $C$, with the finitely many pieces agreeing exactly on the open overlap collars by [F1]. [step 1.1, F1, F7]

3.1 Finite phase gluing produces a C² product over a neighbourhood of $C$: choose a C² once-around parametrization $\gamma_0$ of $C$ and a finite cyclic cover by plaque arcs whose enlarged arcs lie in the rectangles of step 2.1, refined so that only adjacent enlarged arcs overlap and each overlap lies in one common rectangle; holding the transported transverse coordinate fixed at $t$ and the reference leaf coordinate of $\gamma_0$ fixed gives C² candidates $\gamma_i$ on the enlarged arcs, and on an overlap the two candidates are blended in the common plaque coordinate by $x(t,\theta)=\chi(\theta)x_i(t,\theta)+(1-\chi(\theta))x_{i+1}(t,\theta)$ with a C² cutoff $\chi$ equal to one on an open collar at one end and zero at the other; at $t=0$ both candidates equal $\gamma_0$, so $\partial_\theta x>0$ on the finitely many closed overlaps after shrinking the transverse interval once, while on the two open collars the formula equals a single candidate exactly, and the cyclic product closes because $H$ is the identity; the gluing rule [F1] and the C² local diffeomorphism and open-mapping properties of [F3] then give a C² regular circle map $\gamma(t,\cdot)$ of degree one, whose images are onto the connected compact leaves, and $(t,\theta)\mapsto\gamma(t,\theta)$ is a C² local diffeomorphism because the $\theta$-block is positive and $t$ is a submersion, hence a C² product over that neighbourhood. [step 2.1, F1, F3]

4.1 Let $B$ be the quotient of $A$ by its circle leaves with the quotient topology; the local products of step 3.1 make the quotient map open and give increasing C² interval charts, so the images of a countable Euclidean basis of $A$ form a countable basis of $B$, and $B$ is connected as a continuous image of the connected $A$ and has no endpoints; disjoint compact leaves have disjoint saturated product neighbourhoods, because disjoint compact subsets of the plane have positive distance and each leaf has arbitrarily small saturated product neighbourhoods by step 3.1, so $B$ is Hausdorff and the nested leaf order agrees with its interval-chart topology; consequently a bounded nonempty subset $S\subseteq B$ has a supremum, since otherwise the set of points below some element of $S$ and the set of points above every element of $S$ would be disjoint nonempty open sets covering the connected $B$. [step 3.1, F6, F7]

5.1 Every closed order segment $[a,b]\subseteq B$ is compact: for an open cover let $T$ be the set of points $x$ with $[a,x]$ finitely covered; a cover member at $a$ makes $T$ nonempty, and if $c=\sup T<b$ then a cover member containing $c$ extends a finite subcover past $c$, a contradiction, while $c=b$ means that same member completes a finite subcover of $[a,b]$. [step 4.1]

6.1 Under the single application of $\mathrm{AC}_\omega$ in [F4], select countably many local product charts with precompact interval cores; their finite order hulls exhaust $B$, and replacing the exhaustion by the strictly expanding one that at each step takes the least later finite hull in the fixed enumeration extending both endpoints of the previous hull gives compact shells; on each shell take the least finite subcover in that same fixed enumeration, attach explicit C² bumps $\eta((t-t_i)/r_i)$ with $\eta(v)=e^{-1/(1-v^2)}$ supported inside the next shell, and normalize the locally finite positive sum to a C² partition of unity; for increasing local coordinates $t_i$ the form $\alpha=\sum_i\rho_i\,dt_i$ is positive of class $C^1$, and by [F5] applied on each interval chart it has C² local primitives whose differences on connected overlaps are constants, so continuing across the compact order segments of step 5.1 defines a strictly increasing C² local diffeomorphism $B\to J$ onto an open interval, which an explicit increasing smooth reparametrization carries to $(0,1)$. [step 5.1, F4, F5, F7]

7.1 Choose a countable locally finite chain of compact base slabs inside the selected product intervals with consecutive open overlap collars, select the local products, seams and orientation-preserving transition diffeomorphisms $g_s$ together with the slabs under the same $\mathrm{AC}_\omega$ application before gluing, and lift each transition to $G(s,\theta+2\pi)=G(s,\theta)+2\pi$ fixing one seam value; extending over the next slab by $G_{\rm ext}(s,\theta)=\chi(s)G(s,\theta)+(1-\chi(s))G(s_*,\theta)$ with a fixed C² cutoff equal to one on the old-side open collar and zero before the overlap ends has $\theta$-derivative a convex combination of positive derivatives, and composing with the already-built lift makes the recursion deterministic; local finiteness and exact collar agreement give a global C² product, and fiberwise bijectivity with the local C² inverses of [F3] makes it a C² diffeomorphism $\Psi:S^1\times(0,1)\to A$. [step 6.1, F3, F4]

8.1 Each circle $S^1\times\{s\}$ is carried onto one leaf and the coordinate increases in the nested leaf order by construction, so $A$ is an open annulus; for a nowhere-zero C¹ tangent generator $X$ the map $X\circ\Psi$ is C¹ and $D\Psi^{-1}$ is C¹, so the coefficient $a(s,\theta)$ extracted from $\Psi^{-1}_*X=a\,\partial_\theta$ is a nowhere-zero C¹ function, and reversing the orientation of $\theta$ if necessary, which is a single global choice because the family of circles is connected, makes it positive. [step 7.1, given]

9.1 Therefore $A$ is an open annulus with a C² diffeomorphism $\Psi$ taking circles onto leaves in increasing nested order and writing $\Psi^{-1}_*X=a(s,\theta)\partial_\theta$ with $a>0$ of class C¹; the construction used the single $\mathrm{AC}_\omega$ selection of countable chart, hull and slab data in steps 6.1 and 7.1 and no other choice, and it asserts neither a $\theta$-independent speed nor a C² coefficient. [step 8.1, F8] ∎
