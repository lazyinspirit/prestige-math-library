---
id: lem-the-orientable-double-cover-of-a-smooth-manifold
kind: lemma
title: "The orientation double cover is canonically oriented and preserves closedness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-orientation-local-system-and-orientation-cover, def-orientable-manifold, def-smooth-manifold, def-oriented-smooth-manifold-and-oriented-chart, def-covering-map-and-evenly-covered-neighbourhoods, def-deck-transformation-and-deck-group, def-regular-covering, def-smooth-atlas, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, thm-path-lifting-for-covering-maps, lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure, thm-compactness-is-invariant-under-finite-sheeted-coverings, prop-local-path-connectedness-lifts-and-descends-along-coverings, thm-connected-and-locally-path-connected-implies-path-connected, prop-topological-manifolds-are-locally-compact-and-locally-path-connected, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology (complete book PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.3, printed pp. 234-235 (the orientable two-sheeted cover, constructed from local orientations, and the orientable double cover of a nonorientable manifold)"
dependency_level: 0
---

## Statement

Let $M$ be a connected smooth $n$-manifold. The deck-group and component
assertions below assume $M\ne\varnothing$; for the empty base, use the
empty cover and its trivial deck group. Then there is a smooth
$n$-manifold $\widetilde M$, the **orientation double cover**, together with a
smooth two-sheeted covering map $\pi:\widetilde M\to M$
([[def-covering-map-and-evenly-covered-neighbourhoods]]) and a smooth involution
$\tau:\widetilde M\to\widetilde M$ with $\tau^2=\mathrm{id}_{\widetilde M}$ and
$\pi\circ\tau=\pi$ ([[def-deck-transformation-and-deck-group]]), such that
$\widetilde M$ is orientable ([[def-orientable-manifold]]) and indeed canonically
oriented ([[def-oriented-smooth-manifold-and-oriented-chart]]). Its deck group
is $\mathbb Z/2=\{\mathrm{id},\tau\}$, acting freely and transitively on every
fibre; when $M$ is nonorientable, $\widetilde M$ is connected and the covering is
regular ([[def-regular-covering]]), while when $M$ is orientable,
$\widetilde M\cong M\times\mathbb Z/2$ with $\tau$ exchanging the two
components. If $M$ is closed then $\widetilde M$ is closed. The underlying set is
$$\widetilde M=\{(x,o_x):x\in M,\ o_x \text{ a ray in } \det T_xM\},\qquad \pi(x,o_x)=x,\qquad \tau(x,o_x)=(x,-o_x),$$
the tangent-space model of the orientation double cover.

## Facts & Assumptions

**Given:** A connected smooth $n$-manifold $M$; assume it nonempty until the empty case at the end.

[F1] A covering map is a continuous surjection whose base points have evenly covered neighbourhoods, over which the total space splits into sheets mapped homeomorphically onto the neighbourhood; a deck transformation is a homeomorphism over the base, and a covering with path-connected total space is regular when its deck group acts transitively on every fibre ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-deck-transformation-and-deck-group]], [[def-regular-covering]]).

[F2] A smooth manifold is a Hausdorff, second-countable, locally Euclidean space with a maximal smooth atlas; a cover of a smooth manifold whose total space is connected carries a unique smooth structure of the same dimension for which the covering map is a smooth local diffeomorphism ([[def-smooth-manifold]], [[def-smooth-atlas]], [[lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure]]).

[F3] A topological manifold is locally path-connected, and local path connectedness lifts and descends along covering maps; a connected locally path-connected space is path-connected ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[prop-local-path-connectedness-lifts-and-descends-along-coverings]], [[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F4] For a finite-sheeted covering, the total space is compact exactly when the base is compact ([[thm-compactness-is-invariant-under-finite-sheeted-coverings]]).

[F5] An orientation of $M$ is a smooth choice of a ray in $\det T_xM$ for every $x$; $M$ is orientable when such a choice exists ([[def-oriented-smooth-manifold-and-oriented-chart]], [[def-orientable-manifold]]).

## Proof

1.1 The model. Let $\widetilde M$ be the set of pairs $(x,o_x)$ with $x\in M$ and $o_x$ a ray in $\det T_xM$, with $\pi(x,o_x)=x$ and $\tau(x,o_x)=(x,-o_x)$. For a chart $(U,\varphi)$ of $M$ write $s^+_{U,\varphi}(x):=d\varphi_x^{-1}(\text{the positive ray of }\mathbb R^n)$ for the ray in $\det T_xM$ pulled back from the standard ray, and $s^-_{U,\varphi}:=-s^+_{U,\varphi}$; for open $W\subseteq U$ put $S^\pm_{W,\varphi}:=\{(x,s^\pm_{U,\varphi}(x)):x\in W\}$. These sets cover $\widetilde M$ and are closed under finite intersections: for a second chart $(V,\psi)$ and open $W'\subseteq V$, the intersection $S^\epsilon_{W,\varphi}\cap S^\delta_{W',\psi}$ equals $S^\epsilon_{\Omega,\varphi}$ where $\Omega=\{\,x\in W\cap W':\epsilon s^+_{U,\varphi}(x)=\delta s^+_{V,\psi}(x)\,\}$, and $\Omega$ is open in $W\cap W'$ because the comparison of the two chart rays is governed by the sign of the nowhere-zero continuous function $x\mapsto\det d(\psi\varphi^{-1})_x$, which is locally constant; if no point of $W\cap W'$ satisfies the comparison the intersection is empty. So these sets form a basis of a topology on $\widetilde M$, and by construction $x\mapsto(x,s^\pm_{U,\varphi}(x))$ is a homeomorphism of $W$ onto $S^\pm_{W,\varphi}$. [given, F5]

2.1 The basis description gives the covering and the involution. Every point of $\widetilde M$ lies in some basis element $S^\pm_{W,\varphi}$, which is homeomorphic to the open set $W\subseteq\mathbb R^n$, so $\widetilde M$ is locally Euclidean of dimension $n$. Every chart domain $U$ of $M$ satisfies $\pi^{-1}(U)=S^+_{U,\varphi}\sqcup S^-_{U,\varphi}$, a disjoint union of two open sets on each of which $\pi$ restricts to a homeomorphism onto $U$; since the chart domains cover $M$, $\pi$ is continuous, open, surjective and a two-sheeted covering map. The map $\tau$ is continuous with $\tau^2=\mathrm{id}$ and $\pi\circ\tau=\pi$, because in the basis it exchanges $S^+_{W,\varphi}$ with $S^-_{W,\varphi}$. The space $\widetilde M$ is Hausdorff: points with distinct images are separated by the inverse images of disjoint open neighbourhoods in the Hausdorff space $M$, and the two points of a fibre lie in the two disjoint sheets over any chart domain containing the image. [step 1.1, F1, F2]

3.1 Components are covering spaces. Suppose $M$ is nonempty and connected. By [F3] both $M$ and its cover are locally path-connected, their components are open path components, and $M$ is path-connected. Fix $a$ in a component $C$ and let $y\in M$. A path from $\pi(a)$ to $y$ lifts from $a$ by [[thm-path-lifting-for-covering-maps]]; its image stays in $C$, so $C$ meets the fibre over every $y$. Hence there are at most two components. If there are two, each meets every two-point fibre exactly once; if there is one, it contains both fibre points. Over a connected evenly covered neighbourhood, each sheet is connected and therefore lies in one component. Thus $\pi|_C:C\to M$ is a covering. [step 2.1, F1, F3]


4.1 Smooth structure. By [F2] each component $C$ of $\widetilde M$ carries a unique smooth $n$-manifold structure for which $\pi|_C$ is a smooth local diffeomorphism; on a nonempty connected base the components are at most two disjoint open sets, so these structures combine into a smooth $n$-manifold structure on $\widetilde M$ for which $\pi$ is a smooth local diffeomorphism and a two-sheeted covering map. In particular $\widetilde M$ is a topological $n$-manifold and $\pi$ is a local diffeomorphism, so a chart of $M$ pulls back along $\pi$ on each sheet to a chart of $\widetilde M$. [step 3.1, F2]

5.1 The canonical orientation. At a point $p=(x,o_x)$ the differential $d\pi_p:T_p\widetilde M\to T_xM$ is an isomorphism, so $d\pi_p^{-1}(o_x)$ is a ray in $\det T_p\widetilde M$. On the sheet $S^+_{W,\varphi}$ the pulled-back chart $\Phi:=\varphi\circ(\pi|_{S^+_{W,\varphi}})$ has differential $d\Phi_p=d\varphi_x\circ d\pi_p$, so it carries this ray to the ray $d\varphi_x(o_x)$, which is the standard ray of $\mathbb R^n$ because $o_x=s^+_{U,\varphi}(x)$; on the sheet $S^-_{W,\varphi}$ the same computation gives the opposite standard ray. The ray assignment is therefore constant in these charts, hence a smooth choice of rays, so it is an orientation of $\widetilde M$ by [F5]. It is canonical: it is defined from $\pi$ and the points $(x,o_x)$ themselves, with no chart or orientation of $M$ chosen. [step 4.1, F5]

5.2 The deck group. Let $h:\widetilde M\to\widetilde M$ be a deck transformation. Since $\pi\circ h=\pi$, $h$ maps each fibre into itself, so $h(x,o_x)$ is $(x,o_x)$ or $(x,-o_x)$, and because $h$ is injective on the two-point fibre it acts by a well-defined sign $h(x,o_x)=(x,\epsilon(x)o_x)$ with $\epsilon:M\to\{\pm1\}$. Continuity of $h$ makes $\epsilon$ locally constant: over a chart domain $U$ the two sheets $S^\pm_{U,\varphi}$ are disjoint open sets, and a connected neighbourhood of $x$ maps into one of them, so $\epsilon$ is constant near $x$. Hence $\epsilon$ is continuous into the discrete group $\{\pm1\}$ and therefore constant because $M$ is connected; so $h=\mathrm{id}$ if $\epsilon=+1$ and $h=\tau$ if $\epsilon=-1$. Moreover $\tau$ is smooth, being locally the sheet exchange between the charts of $\widetilde M$, and $\pi\circ\tau=\pi$, so $\tau$ is a deck transformation; thus $\operatorname{Deck}(\pi)=\{\mathrm{id},\tau\}\cong\mathbb Z/2$, and it acts freely (only $\mathrm{id}$ has a fixed point) and transitively on every two-point fibre. [step 4.1, step 2.1, F1, F5]

6.1 Orientable case. Suppose $M$ is orientable and let $x\mapsto o_x$ be an orientation of $M$ by [F5]. Then $\Phi:\widetilde M\to M\times\mathbb Z/2$, $\Phi(x,o'_x)=(x,\epsilon)$ where $o'_x=\epsilon\, o_x$, is a bijection over $M$, and in the charts of step 5.1 the map $\Phi$ and its inverse change only the locally constant sign of the second coordinate, so $\Phi$ is a diffeomorphism for the product smooth structure on $M\times\mathbb Z/2$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]); it carries $\tau$ to the map exchanging the two components $M\times\{+1\}$ and $M\times\{-1\}$. [step 4.1, step 5.2, F5]

6.2 Nonorientable case. Suppose $M$ admits no orientation. Then $\widetilde M$ is connected: if $\widetilde M=C_1\sqcup C_2$ with two components, step 3.1 makes each $C_i$ a covering of $M$ meeting each fibre exactly once, so $\pi|_{C_1}$ is a bijective local homeomorphism, i.e. a homeomorphism, and its inverse $s:M\to\widetilde M$ is a continuous section; writing $s(x)=(x,o_x)$, the assignment $x\mapsto o_x$ is in the pulled-back charts of step 4.1 locally constant, hence a smooth choice of rays and an orientation of $M$ by [F5], a contradiction. So $\widetilde M$ is connected when $M$ is nonorientable, hence path-connected by [F3] since $M$ is locally path-connected as a manifold and local path connectedness ascends to the cover; the deck group acts transitively on every fibre by step 5.2, so the covering is regular by [F1]. [step 5.2, step 3.1, F1, F3, F5]

7.1 Closedness. If $M$ is closed, i.e. compact and boundaryless, then $\widetilde M$ is compact by [F4], and it is boundaryless because $\pi$ is a local diffeomorphism onto a boundaryless manifold; hence $\widetilde M$ is closed. For the empty base $M=\varnothing$, $\widetilde M=\varnothing$, the projection is a covering map vacuously, the deck group is trivial, and the empty ray choice gives its canonical orientation; the two-element deck-group assertion was restricted to a nonempty connected base. [step 4.1, F4] ∎

## Remarks

- **The canonical orientation is reversed by the deck transformation.** In the charts of step 5.1 the ray at $(x,o_x)$ is the pullback of $o_x$, and $\tau(x,o_x)=(x,-o_x)$ has the opposite ray, so $\tau$ is orientation- reversing for the canonical orientation. The local fixed-point index is nevertheless unchanged by this deck transformation as a conjugation, since both chart orientations reverse.
- **Relation to the homological orientation cover.** The library's [[def-orientation-local-system-and-orientation-cover]] builds a two-sheeted covering from the local homology fibres $H_n(M,M\setminus\{x\};\mathbb Z)$; the construction above is the tangent-space model of the same cover, obtained by reading a chart-induced ray in $\det T_xM$ as the corresponding local homology generator. This item proves all covering, smoothness, orientability and connectedness properties for the model it defines, by [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]]: chart changes act on both models by the same determinant sign, including the signed-point convention in dimension zero. Sending each chart ray to its chart-induced local generator therefore defines a fibrewise bijection that respects local sheet charts and path transport. This identifies the tangent model with the orientation local system used in the twisted diagonal argument.
