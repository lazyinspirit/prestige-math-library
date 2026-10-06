---
id: lem-embedded-bands-joining-two-framed-spheres-exist
kind: lemma
title: Embedded bands joining two framed spheres exist
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
- def-smooth-embedding
- def-smooth-manifold
- def-tubular-neighbourhood-of-an-embedded-submanifold
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- thm-connected-and-locally-path-connected-implies-path-connected
- prop-topological-manifolds-are-locally-compact-and-locally-path-connected
- def-embedded-submanifold-and-slice-chart
- lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
- thm-weak-whitney-proper-embedding-theorem
- def-pullback-riemannian-metric
- cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric
- def-riemannian-distance-on-a-connected-manifold
- thm-hopf-rinow
- prop-length-dominates-endpoint-distance
- prop-exponential-map-scales-geodesic-time
- def-countable-choice
- thm-gram-schmidt-orthonormalisation
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
- lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
- thm-euclidean-tubular-neighbourhood-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)
    url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
    locator: '§5.4, printed pp. 147-148 (proof of the Handle Addition Theorem 5.4.5: embedded path λ and the band
      ϕ'' built from normal framings, Figure 5.9 case r = 1)'
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $N$ be a connected smooth $m$-manifold with $m\ge2$, let $1\le k\le m-1$, and let $S_1,S_2\subset N$ be disjoint compact embedded $(k-1)$-spheres with chosen trivializations of their normal bundles near chosen points $x_i\in S_i$. Then there are an embedded band $\beta:D^{k-1}\times I\to N$ and a trivialization of the normal bundle of $\beta$ such that $\beta$ meets $S_1\cup S_2$ exactly in the two end discs $\beta(D^{k-1}\times\{0\})\subseteq S_1$ and $\beta(D^{k-1}\times\{1\})\subseteq S_2$, meeting the spheres in the standard normal position along them, the interior of $\beta$ is disjoint from $S_1\cup S_2$, and the rank-$(m-k)$ framing of $\beta$ on each end disc matches the sphere-normal framing modulo the one normal direction tangent to the band. Either sign of that transverse band direction is allowed. For $k=1$ the band is an embedded arc joining $x_1$ to $x_2$ and meeting $S_1\cup S_2$ only at its endpoints.

## Facts & Assumptions

**Given:** A connected smooth $m$-manifold $N$ with $m\ge2$, an integer $1\le k\le m-1$, disjoint compact embedded $(k-1)$-spheres $S_1,S_2\subseteq N$, points $x_i\in S_i$ and trivializations of $\nu(S_i)$ near $x_i$.

[F1] [[def-smooth-embedding]] and [[def-smooth-manifold]]: a smooth embedding is an injective immersion that is a homeomorphism onto its image with the subspace topology; a smooth manifold is a boundaryless second-countable Hausdorff manifold with a smooth structure.

[F2] [[thm-connected-and-locally-path-connected-implies-path-connected]] and [[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]: a connected locally path-connected space is path-connected, and a manifold is locally path-connected; hence $N$ is path-connected.

[F3] [[def-embedded-submanifold-and-slice-chart]]: for an embedded submanifold $S\subseteq N$ and $p\in S$ there is a chart $\varphi:U\to\varphi(U)\subseteq\mathbb R^m$ with $\varphi(S\cap U)=\varphi(U)\cap(\mathbb R^{k-1}\times\{0\})$; so in a chart at a point of $S_i$ the sphere is a coordinate subspace of codimension $m-k+1\ge2$.

[F4] [[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]: for $n\ge2$, a nonempty, open, connected $\Omega\subseteq\mathbb R^n$ has $\Omega\setminus\{y\}$ path-connected for every $y\in\Omega$.

[F5] [[thm-weak-whitney-proper-embedding-theorem]], [[def-pullback-riemannian-metric]], [[cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric]], [[def-riemannian-distance-on-a-connected-manifold]], [[thm-hopf-rinow]], [[prop-length-dominates-endpoint-distance]] and [[prop-exponential-map-scales-geodesic-time]]: assume $\mathrm{AC}_\omega$. A smooth $a$-manifold admits a proper embedding into some $\mathbb R^L$; pulling back the Euclidean metric gives a Riemannian metric; a closed embedded submanifold of a Euclidean space is complete in the induced metric; on a connected complete Riemannian manifold any two points are joined by a minimizing geodesic of length equal to their distance, and every piecewise $C^1$ curve joining them has length at least that distance; a minimizing geodesic has constant speed on $[0,1]$.

[F6] Gram–Schmidt completes and orthonormalizes independent finite lists. A linear matrix ODE has a unique solution on a compact interval, smoothly dependent on its parameters. [[thm-gram-schmidt-orthonormalisation]], [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]].

[F7] [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] and [[def-tubular-neighbourhood-of-an-embedded-submanifold]]: assume $\mathrm{AC}_\omega$; a closed embedded submanifold of a smooth manifold has a tubular neighbourhood, i.e. a diffeomorphism onto an open neighbourhood of it from an open neighbourhood of the zero section of its normal bundle, restricting to the inclusion on the zero section.

[F8] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through the proper-embedding, tubular-neighbourhood and completeness suppliers of [F5] and [F7].

[F9] [[thm-euclidean-tubular-neighbourhood-theorem]]: under Countable Choice, normal addition gives a diffeomorphism from a normal-bundle neighbourhood of an embedded Euclidean submanifold onto an ambient neighbourhood; inverse addition followed by bundle projection is a smooth retraction.

[F10] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: a smooth map with invertible derivative is a diffeomorphism on sufficiently small open neighbourhoods; this is choice-free.

## Proof

**Proof technique:** direct.

1.1 The complement $N\setminus(S_1\cup S_2)$ is path-connected. Indeed, cover a path in $N$ by finitely many slice charts for the embedded submanifold $S_1\cup S_2$; in such a chart the sphere piece is contained in a coordinate subspace of codimension at least $2$ by [F3], and the complement of such a subspace in a coordinate ball is path-connected: projecting to the quotient by the subspace leaves a punctured connected open subset of a Euclidean space of dimension at least two, which is path-connected by [F4], and lifting the quotient path with a linear interpolation of the remaining coordinates gives a path in the ball avoiding the subspace. Concatenating the finitely many chartwise paths and perturbing the finitely many junction points off the spheres gives a path in $N\setminus(S_1\cup S_2)$ between any two prescribed points outside the spheres. [F1, F2, F3, F4]

2.1 Fix a proper Euclidean embedding of $N$ from [F5] and its induced metric. Represent the given sphere-normal germs orthogonally for this metric, and choose $y_i$ along their first normal direction, with either transverse sign available. Take the endpoint arc germs in those directions, so they are orthogonal to $T_{x_i}S_i$. By step 1.1 and [F5] applied to the connected manifold $N\setminus(S_1\cup S_2)$ — a proper embedding followed by a complete pullback metric and a minimizing geodesic — there is a smooth embedded arc from $y_1$ to $y_2$ whose image avoids $S_1\cup S_2$: a length-minimizing geodesic is injective, since a self-intersection would shorten the curve below the minimal distance by [F5]. Take the endpoint germs in disjoint charts. Cut the embedded middle geodesic at its last encounter with the first germ and its first subsequent encounter with the second; these encounters exist on the compact germ segments. The intervening segment misses both germs, so prepending and appending the retained germ segments gives an embedded arc. Smooth its two junctions in small balls away from the spheres, retaining the prescribed germs at $x_i$. This yields a smooth embedded arc $\gamma:I\to N$ with $\gamma(0)=x_1$, $\gamma(1)=x_2$, whose interior avoids $S_1\cup S_2$ and whose tangent direction at $x_i$ is not tangent to $S_i$. [F5, F8, step 1.1, given]

3.1 Trivialize the arc-normal bundle explicitly. In the Euclidean embedding of [F5], let $P(t)$ be the smooth orthogonal projection onto the complement of $T\gamma$ in $TN|_\gamma$. Solve $U'=[P',P]U$, $U(0)=I$ by [F6]. The commutator is skew symmetric, so $U^TU=I$; differentiating $P^2=P$ gives $[ [P',P],P]=P'$, and uniqueness gives $UP(0)U^T=P(t)$. Transporting one initial basis thus gives a smooth trivialization of the rank-$(m-1)$ normal bundle. In this trivialization the endpoint tangent disks determine ordered $(k-1)$-frames. Any two such frames with $k-1<m-1$ can be joined smoothly: complete each to an orthonormal basis by [F6], choose the sign of a remaining vector to give determinant one, and join the two full bases by finitely many plane rotations aligning successive columns. Each rotation fixes the columns already aligned; at the last one-dimensional stage determinant one forces the remaining entry to be one. Restrict to the first $k-1$ columns and reparametrize the rotation paths to be stationary at their ends. This proves the exact path-connectivity instance locally, including complement rank one, and gives a smooth plane field $P_t^{\mathrm{band}}$ with the prescribed endpoint planes. For $k=1$ the list is empty and the plane field is zero. [F5, F6, step 2.1, construct, algebra]

4.1 Construct the arc tube directly, including its endpoints. In the proper embedding of [F5], the closed submanifold $N\subset\mathbb R^L$ has a smooth ambient tubular retraction $r$ by [[thm-euclidean-tubular-neighbourhood-theorem]] (inverse normal addition followed by projection). Extend the smooth embedded arc slightly past its endpoints, and on its normal bundle in $TN$ put $\Phi(t,z)=r(\gamma(t)+z)$. At $z=0$ its derivative is $(s,z)\mapsto s\dot\gamma(t)+z$, an isomorphism onto $T_{\gamma(t)}N$. The inverse-function theorem and compactness give a tube of uniform positive radius on $[0,1]$: otherwise a sequence of collisions with fibre radii tending to zero would converge to two points of the arc; injectivity makes their parameters equal, contradicting the local inverse there. Thus restricting this tube to the plane field $P^{\mathrm{band}}$ gives a smooth embedded band $\beta_0$, and by steps 2.1 and 3.1 its end disks are tangent to $S_1$ and $S_2$ at $x_1$ and $x_2$ along the planes $P_0$ and $P_1$. Choose a slice chart at $x_i$ straightening the transverse central arc germ to $(0,s,0)$; this follows by taking the sphere coordinates and the transverse arc as coordinate axes and applying [F10]. Write the sphere as $\{(a,b,c):b=0,c=0\}$, where $a\in\mathbb R^{k-1}$, $b\in\mathbb R$ is the inward transverse coordinate and $c\in\mathbb R^{m-k}$. With $s\ge0$ the inward band parameter, write the band germ as $(a(u,s),b(u,s),c(u,s))$. At $(u,s)=(0,0)$ the derivative of $(a,b)$ is invertible, $\partial_s b>0$, and all $u$-derivatives of $b,c$ vanish. Rescale $b$ so that $\partial_s b(0,0)=1$, and choose the chart so that $\partial_s c(0,0)=0$. For a smooth cutoff $\chi(s)$ equal to one near $0$ and zero outside a short end collar, replace this germ by $(a(u,s),(1-\chi(s))b(u,s)+\chi(s)s,(1-\chi(s))c(u,s))$. This changes the transverse coordinate as well as the remaining normal coordinates. On the end disk both normal coordinates now vanish, and near it the band has the product form $(a(u,s),s,0)$. Choose the collar short and then the disk radius sufficiently small: the modified $(a,b)$ projection is uniformly $C^1$ close on a convex parameter box to its invertible derivative at the centre. Indeed $b(u,0),c(u,0)=O(|u|^2)$, and the cutoff derivative is bounded once the collar is fixed. The projection is therefore injective with invertible derivative (integrate its derivative along line segments to obtain a positive lower Lipschitz bound). Also $\partial_s b_{\rm new}>0$ throughout the end collar and $b_{\rm new}(u,0)=0$, so its interior misses the sphere. Outside that collar compactness and shrinking the disk radius keep the band away from both spheres. The two adjustments take place in disjoint end charts; shrinking them keeps each disjoint from the compact remainder of the band. Thus the adjusted band is embedded, has its end disks exactly in the spheres in standard normal position, and otherwise misses them. [F3, F5, F9, F10, step 3.1, construct]

5.1 The normal bundle of the band restricts over the end disk in $S_i$ to the normal directions of $S_i$ modulo the single normal direction used by the band; the trivializations of $\nu(S_i)$ given in the statement frame these remaining directions near $x_i$, and a framing of the band's normal bundle defined on each end disk can be extended over the whole band because the band is a disk bundle over an interval and its normal bundle has a global frame obtained by completing the plane field to a frame of $\nu(\gamma)$. The remaining prescribed end frames can be placed in the same frame component by choosing the sign of the transverse endpoint germ, or the orientation of a freely chosen end disk coordinate: reversing the transverse tangent reverses the induced normal-frame component. In the interval trivialization their comparison matrices then lie in the same component of $GL(m-k,\mathbb R)$ and can be joined by a smooth matrix path. On each contractible end disk first interpolate its comparison map to its value at the centre, retain the original map on the end collar, and use that matrix path in between. The resulting smooth block gauge on the whole band agrees exactly with both prescribed end frames. Thus its normal framing matches the given sphere framings modulo the one normal direction used by the band. [F3, F7, step 4.1, given]

6.1 For $k=1$ the plane field of step 3.1 is a field of $0$-planes, the band of step 4.1 is the embedded arc $\gamma$ itself, and its two end discs are the points $x_1,x_2$; the final clause of the statement is therefore exactly the arc assertion established in step 2.1. In both cases the constructed band and its framing satisfy all the clauses of the statement. [step 2.1, step 4.1, step 5.1, given] ∎
