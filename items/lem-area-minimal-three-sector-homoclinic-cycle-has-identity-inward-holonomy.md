---
id: lem-area-minimal-three-sector-homoclinic-cycle-has-identity-inward-holonomy
kind: lemma
title: "An area-minimal three-sector homoclinic cycle has identity inward holonomy"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle, lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit, lem-finite-saddle-omega-graph-is-strongly-connected, lem-c2-saddle-function-has-c1-morse-coordinates, lem-finitely-cornered-regular-plane-curve-separates-without-choice, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, def-countable-choice-principle-for-foliation-pair, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-measure-monotonicity, thm-lebesgue-measure-of-a-box-of-every-kind, thm-borel-sets-are-lebesgue-measurable, lem-c1-euclidean-maximal-flow-with-c2-upgrade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds; local refinements of class 11"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3, finite center/saddle extraction; complete local construction in the strategy"
---

## Statement

Assume AC_ω. In a separated generic characteristic disk, let P be a simple homoclinic cycle with nonidentity full ambient holonomy whose bounded source domain minimizes area among all such simple regular or homoclinic cycles. If its bounded side occupies three saddle quadrants, the unused branches form an inner one-quadrant homoclinic loop Q with identity full holonomy. The actual inward source return along the pinched P-and-Q itinerary therefore equals the inward P-holonomy. This inward germ is identity, while the opposite-side germ is nonidentity.

## Facts & Assumptions

**Given:** A separated generic characteristic disk with a simple homoclinic cycle $P$ through a saddle $q$ whose full ambient holonomy is nonidentity and whose bounded Jordan domain minimizes area among all simple regular or homoclinic characteristic cycles with nonidentity full ambient holonomy; the bounded side of $P$ occupies three saddle quadrants of $q$.

[F1] The sibling-pair items `lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle`, `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit`, `lem-finite-saddle-omega-graph-is-strongly-connected` and `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity` supply the inclusion-minimal nonidentity simple cycle, the generalized Poincaré–Bendixson alternative for a precompact planar orbit (including its regular-edge endpoint clause), the strong connectivity of a finite saddle graph, and the $C^2$ transport of plaque and fence data; their uses are flagged in steps 2.1, 3.1 and 4.1 below.

[F2] In $C^1$ Morse coordinates the nondegenerate saddle is $u=xy$ ([[lem-c2-saddle-function-has-c1-morse-coordinates]]), so the four quadrants and the two coordinate axes describe the local branches.

[F3] A finitely cornered simple regular plane curve separates the plane without choice ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]), and the bounded open Jordan domain of a piecewise regular simple cycle is Borel of finite planar measure ([[thm-borel-sets-are-lebesgue-measurable]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Planar Lebesgue measure is monotone and additive on disjoint Borel sets, so a strict domain inclusion whose difference contains an open box has strict area inequality ([[prop-measure-monotonicity]]).

[F5] Trajectories of the characteristic field are locally unique, and a trajectory cannot cross an invariant circle or leave a positively invariant compact disk ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F6] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Let $b$ be the unused unstable half-trajectory from $q$ on the bounded side of $P$. Source uniqueness keeps $b$ inside the bounded domain, so its closure is compact. Its $\omega$-limit set can be a center, a periodic orbit, a singleton saddle different from $q$, or a nonsingleton saddle graph; the alternatives are eliminated as follows. [F2, F5, given]

2.1 A center cannot be in $\omega(b)$ or be its limit: a small periodic circle about a center is invariant and $b$ cannot cross it. A periodic $\omega$-orbit lying strictly inside $P$ would have attracting return germ nonidentity, since an identity return on a neighbourhood would close $b$ into a periodic orbit and contradict its $\alpha$-limit $q$; such a smaller nonidentity cycle contradicts global minimality of the area of $P$. A singleton saddle $r\neq q$ is impossible because it would make $b$ a $q$-to-$r$ connection, forcing the singular ambient leaves of $q$ and $r$ to coincide. [F1, F2, F5, step 1.1]

3.1 For the remaining nonsingleton alternative, [F1] gives a finite connected saddle graph over the finite branch data. Distinct singular ambient leaves allow only one saddle $r$, and if $r\neq q$ the graph cannot touch $P$: a regular touch would include the trajectory $P$ and hence $q$, while a singular touch would be $q$ itself. The graph is therefore strictly inside $P$, and the approaching orbit follows a finite saddle-port itinerary whose actual characteristic return is given by the ambient edge word and the single-box saddle passages. If that word were identity on a neighbourhood, the approaching orbit would be periodic; hence the word is nonidentity, and when there are two homoclinic edges at $r$ at least one lobe word is nonidentity. The resulting simple cycle lies strictly inside $P$ and has smaller area by [F3] and [F4], contradicting the minimality of $P$. [F1, F3, F4, step 2.1]

4.1 It remains to exclude a nonsingleton graph at $q$. There are only four half-branches; a graph containing the unused unstable branch contains a regular point of $b$, and the regular-edge clause of [F1] would force $b$ to tend that saddle, making $\omega(b)$ a singleton rather than a graph. Hence a nonsingleton graph at $q$ can contain only the used branches and is $P$ itself. But $\omega(b)=P$ is incompatible with the three-sector incidence: in fixed small incoming and outgoing saddle port sections in the Morse coordinates of [F2], $P$ uses one adjacent incoming/outgoing pair with bounded side in the three-quadrant side, and a sequence of $b$-points approaching a regular point of the incoming $P$ branch flows to the incoming port by regular compact-edge transport; on the bounded side its small nonzero $u$-level enters the adjacent interior quadrant, and the hyperbola passage exits at the unused unstable port, with the exit point tending the regular $b$-port point as $u\to0$ (on $x=\delta$ the second coordinate is $u/\delta$). Since $\omega$-sets are closed and invariant under passage through these compact ports, that $b$-port point would belong to $\omega(b)$ while not lying on $P$, a contradiction; the divergent passage time at $q$ is harmless, as the exit times tend to infinity while the exit points converge. [F1, F2, step 3.1]

5.1 Therefore $b$ tends $q$ along a stable half-branch. It cannot tend along the used stable branch, because that regular branch already belongs to the trajectory $P$ and uniqueness would identify $b$ with $P$ although their unstable half-branches differ; it must return along the unused stable branch. Hence the two unused branches form a homoclinic loop $Q$ wholly inside the bounded $P$-domain, and by [F3] the bounded $Q$-domain lies in the bounded $P$-domain: the connected unbounded complement of the latter is disjoint from $Q$ and lies on its unbounded side. The bounded side of $Q$ is its one-quadrant side, since the other side would contain the exterior quadrant of $P$, impossible for a contained domain; and $Q$ has strictly smaller area than $P$ because the domains are distinct and their difference contains a nonempty open region, by [F4]. Global minimality therefore forces the full two-sided ambient holonomy germ of $Q$ to be the identity, with no leafwise nullity of $Q$ used. [F3, F4, step 4.1]

6.1 Trim the two loops at the four fixed saddle ports. In the pinched region between $P$ and $Q$ the source hyperbola pairing connects a $P$-port to a $Q$-port and then the other $Q$-port back to the remaining $P$-port, the regular edge maps are the fixed $C^2$ holonomy continuations, and each local saddle passage stays in one ambient plaque with identity transverse map in the $q$-box coordinate. Hence the actual characteristic return on a regular $P$-edge section on its bounded side has word $H_P$ composed with $H_Q^{\pm1}$ up to the fixed transversal conjugacy; since $H_Q$ is the identity on a full interval, this realized source return equals $H_P$ on its inward interval. [F1, step 5.1]

7.1 If $H_P$ were nonidentity inward, choose a sufficiently small nonfixed parameter in an open nonfixed interval and orient time so its return displacement is toward the pinched interior. The corresponding one-circuit characteristic segment through the $P$-and-$Q$ edge strips is simple, since a self-intersection would make it periodic before its nonfixed return; closing its two distinct section endpoints by the short transverse section interval, with the finite graph strips and the section shrunk so that no other intersection occurs, gives a piecewise-regular Jordan curve lying strictly inside the bounded $P$-domain, tangent to the field on its characteristic part and pointing into its bounded disk along the closing section. Rounding the two joins inside arbitrarily small regular flow boxes with nonnegative inward field component and applying uniqueness and first-exit produces a compact positively invariant source disk strictly inside $P$; it does not contain $q$. Choose an entering trajectory in this trapping disk that is not a saddle stable separatrix for the chosen time orientation: there are finitely many separatrices, each has discrete crossing times, and the nonfixed section interval is uncountable, so such a point exists. Center limits are excluded by the invariant-circle argument, so [F1] yields a periodic orbit or a finite one-saddle graph strictly inside $P$ whose approaching return word is nonidentity — a smaller-area nonidentity simple cycle, contradicting global minimality. Hence $H_P$ is identity on the inward half-transversal, and since its full germ was nonidentity it is nonidentity on the opposite side. [F1, F5, step 6.1]

8.1 Combining steps 5.1-7.1, a three-sector bounded side of the area-minimal simple homoclinic cycle produces the inner one-quadrant homoclinic loop $Q$ with identity full holonomy, the realized inward return along the pinched itinerary equals the inward $P$-holonomy, that inward germ is the identity and the opposite-side germ is nonidentity. Interior centers and saddles may remain; the false assertion that all interior trajectories are closed is neither stated nor used, and all selections are finite or countable under the standing countable choice from [F6]. [F1, F6, step 7.1] ∎
