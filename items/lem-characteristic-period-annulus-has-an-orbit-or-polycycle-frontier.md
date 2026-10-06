---
id: lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier
kind: lemma
title: "A center period annulus has an orbit or polycycle frontier"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, def-transversely-oriented-codimension-one-foliation, lem-finitely-cornered-regular-plane-curve-separates-without-choice, lem-c2-first-integral-period-annuli-have-c2-products, lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit, lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit, lem-finite-saddle-omega-graph-is-strongly-connected, def-countable-choice-principle-for-foliation-pair, lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood, thm-heine-borel-rn, def-interior-closure-boundary-top, thm-components-partition-and-are-closed]
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
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§6, printed pp. 16-19 (center and separatrix frontier loops), with the classification of the frontier proved locally"
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11, author-hosted lecture notes"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3 (inside-out figure-eight and finite descent pictures for the center frontier)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
cooriented codimension-one foliation of a $3$-manifold, and let
$h:D^2\to M$ be a disk map in the relative generic position of
[[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]].
Assume the boundary is either leafwise or a closed transversal, as in cases (b) and (a) of that supplier. The connected family of regular closed characteristic trajectories
surrounding any center has a maximal period annulus. Its outer frontier is a
regular closed orbit; or a finite connected strongly connected directed
saddle-separatrix graph whose edges are nonconstant saddle-to-saddle
trajectories and whose edges are covered by finitely many directed saddle
polycycles; or, when the disk boundary is a leafwise characteristic orbit,
that boundary orbit. Loops, repeated saddle vertices, shared edges, and
parallel edges are allowed in the saddle graph and polycycles. When the disk
boundary is transverse to $F$, the period annulus cannot meet it. The annulus
parameter gives a $C^2$ transverse trace of the prescribed closed
characteristic loops. The outer return holonomy is not assumed nontrivial.

## Facts & Assumptions

**Given:** A cooriented codimension-one $C^2$ foliation $F$ of a $3$-manifold with nowhere-vanishing $C^2$ defining form, and a $C^2$ disk map $h:D^2\to M$ whose characteristic covector is in relative generic position: its singularities are finitely many nondegenerate interior centers and saddles, its characteristic covector is nowhere vanishing on a boundary collar, and along $\partial D^2$ either the boundary is a closed transversal or it is mapped into a single leaf.

[F1] In relative generic position the characteristic singularities of the disk map are finitely many nondegenerate points in the interior, each a center or a saddle; at a center the characteristic line field has a family of small closed orbits around it, and at a saddle it has the four-sector hyperbolic picture ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]).

[F2] A connected open set carrying a $C^2$ first-integral atlas whose leaves are simple compact circles with strictly nested bounded Jordan domains and consistent orientation is an open annulus with a $C^2$ product $\Psi:S^1\times(0,1)\to A$ onto its leaves, increasing in the nested order, and a nowhere-zero $C^1$ tangent generator is written $a(s,\theta)\partial_\theta$ with positive $C^1$ coefficient after orienting $\theta$ ([[lem-c2-first-integral-period-annuli-have-c2-products]]).

[F3] Under the hypotheses of [F2] with a compact frontier $\Gamma=\partial\bigcup_s\operatorname{int}D_s$, there is a $C^1$ field $Y$ on a neighborhood of the disk, equal to the generator on $\Gamma$ and off an outer subannulus, with a positive orbit whose $\omega$-limit set is $\Gamma$, and no choice principle is used ([[lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit]]).

[F4] If $\Gamma=\omega_Y^+(y)$ contains at least one equilibrium, all its equilibria are nondegenerate saddles, and it separates two points, then $\Gamma$ is a finite embedded strongly connected directed saddle multigraph covered by finitely many closed directed edge walks ([[lem-finite-saddle-omega-graph-is-strongly-connected]]).

[F5] If a positive orbit of a $C^1$ planar field has compact closure in the domain and its $\omega$-limit set contains only finitely many equilibria, then it is either a singleton equilibrium, or one regular periodic orbit, or a finite equilibrium set together with nonconstant trajectories whose alpha- and omega-limits are equilibria ([[lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit]]).

[F6] Closed and bounded subsets of $\mathbb R^2$ are compact; a decreasing nested family of nonempty compact subsets has nonempty intersection; a continuous real function on a nonempty compact set attains its maximum and minimum ([[thm-heine-borel-rn]]).

[F7] A piecewise-$C^2$ topological embedding $S^1\to\mathbb R^2$ with finitely many corners, two distinct one-sided tangent rays at each corner and regular edges has a complement with exactly two connected components, one bounded and one unbounded ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

[F8] A planar field $C^1$ up to the boundary of the closed disk has a $C^1$ extension to a neighborhood of the disk, with value and derivative agreeing on the disk ([[lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood]]).

[F9] A cooriented codimension-one foliation is given by a foliated atlas whose transverse coordinate changes are diffeomorphisms, and the transverse orientation selects the positive side of each leaf ([[def-transversely-oriented-codimension-one-foliation]]).

[F10] The interior, closure and boundary of a set in a topological space, with $\partial A=\overline A\setminus\operatorname{int}A$ ([[def-interior-closure-boundary-top]]).

[F11] The connected components of a space partition it and are closed; a component is the union of all connected subsets through any of its points ([[thm-components-partition-and-are-closed]]).

[F12] The standing assumption of the pair is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Writing $\omega$ for the defining form, the characteristic covector $\beta=h^*\omega$ is $C^1$ with kernel exactly the characteristic line field and with the characteristic singularities as zeros, and equivalently it is obtained by summing finitely many pulled-back local transverse covectors, which differ on overlaps by positive nowhere-vanishing factors; choosing an oriented area form $\mu$ and defining $X$ by $\iota_X\mu=\beta$ makes $X$ a $C^1$ planar field whose regular line foliation has a $C^2$ first-integral atlas with local first integrals $u=z\circ h$, and by [F1] the singularities of $X$ in the disk are finitely many nondegenerate interior centers and saddles with nonvanishing $\beta$ on a boundary collar; in the transversal boundary case $\beta$ does not vanish on the boundary tangent and in the leafwise case $\beta$ does, so then $X$ is tangent to and nonvanishing along $\partial D^2$ and the boundary circle is one regular closed $X$-orbit; finally [F8] extends $X$ to a $C^1$ field on an open neighborhood $U$ of the disk. [given, F1, F8, F9]

2.1 Fix a center $c$ of $X$ and let $P_c$ be the set of points of regular periodic $X$-orbits contained in $\operatorname{int}D^2$ whose bounded Jordan interior contains $c$; a nonconstant periodic orbit is an embedded circle whose period set is a closed additive subgroup of $\mathbb R$ and therefore has a least positive period, so the orbit is a $C^2$ embedded circle because an individual trajectory of a $C^1$ field is $C^2$ in time ($x\prime\prime=DX(x)X(x)$), the center picture of [F1] makes $\operatorname{int}P_c$ nonempty, and the local flow carries $P_c$ and $\operatorname{int}P_c$ to themselves; the component $A$ of $\operatorname{int}P_c$ containing the small center collar is open and saturated, because components are unions of connected subsets and each orbit is connected. [step 1.1, F1, F11]

3.1 The circles of $A$ are strictly nested and consistently oriented: two distinct orbits are disjoint by uniqueness of trajectories and their bounded interiors both contain $c$; a connected circle disjoint from a Jordan curve lies in one complementary component by [F7], so if $C_2$ lay in the exterior of $C_1$ then the bounded domain of $C_1$, being connected, disjoint from $C_2$ and containing $c\in\operatorname{int}D_{C_2}$, would lie in the bounded domain of $C_2$, giving strict nesting; and the sign in which the $X$-orientation of an orbit agrees with the boundary orientation of its bounded domain is locally constant on the connected $A$, hence one global sign. [step 2.1, F7, F10]

4.1 By [F2] applied to the $C^2$ first-integral atlas of step 1.1 on the connected set $A$ with its strictly nested consistently oriented compact circle leaves, $A$ is an open annulus with a $C^2$ product $\Psi:S^1\times(0,1)\to A$ taking circles onto leaves and increasing in the nested order; $A$ is maximal among connected open regular circle families continuing the chosen center collar, because any such family lies in $P_c$, hence in $\operatorname{int}P_c$, hence in this component. [step 3.1, F2, F12]

5.1 Write $C_s=\Psi(S^1\times\{s\})$, let $\Omega_s$ be the bounded Jordan domain of $C_s$ and $\Omega=\bigcup_{0<s<1}\Omega_s$; the closed bounded domains lie in $D^2$ because their exteriors contain the connected complement of the disk, for $s<t$ one has $\operatorname{cl}\Omega_s\subseteq\Omega_t$ and $C_s\subseteq\Omega_t$ by strict nesting, $\Gamma=\partial\Omega$ by [F10] is a nonempty compact subset of $D^2$ by [F6], and $\Gamma$ separates $c$ from any fixed point $q$ outside the closed disk, since $c$ lies in some $\Omega_s$, $q$ lies outside $\operatorname{cl}\Omega$, and every path between them has a first exit from $\Omega$, on $\Gamma$. [step 4.1, F6, F10]

6.1 The exhaustion $T_r=\operatorname{cl}\bigcup_{s\ge r}C_s$ shows $C_s\to\Gamma$ in Hausdorff distance and $\Gamma\subseteq\operatorname{cl}A$: the tail intersection lies in $\operatorname{cl}\Omega$ and misses $\Omega$ because a ball about a point of $\Omega_t$ is avoided by all $C_s$ with $s>t$, hence lies in $\partial\Omega=\Gamma$; if arbitrarily late $C_s$ had points at distance at least $\epsilon$ from $\Gamma$ the nested compacta $T_r\cap\{\operatorname{dist}(\cdot,\Gamma)\ge\epsilon\}$ would meet, contradiction; and conversely each $p\in\Gamma$ and $\epsilon>0$ admit $x\in\Omega\cap B_{\epsilon/2}(p)$ and $t$ with $x\in\Omega_t$, so every $C_s$ with $s>t$ meets the segment from $x$ to $p$ within $\epsilon$ of $p$, and a finite cover of the compact $\Gamma$ gives $\Gamma$ everywhere within $\epsilon$ of $C_s$. [step 5.1, F6]

7.1 No center lies on $\Gamma$: the fixed center $c$ lies in the open $\Omega_t$, and for any other center $d$ the center picture of [F1] supplies a small saturated disk $V$ disjoint from $c$; every regular orbit meeting $V$ is a complete small level circle inside $V$ by uniqueness, so it does not enclose $c$ and is not in $A$, whence $V$ is disjoint from $\operatorname{cl}A$ and from $\Gamma$; consequently every equilibrium on $\Gamma$ is among the finitely many nondegenerate saddles of the disk. [step 6.1, F1, F6]

8.1 In the transversal boundary case the period annulus does not meet the boundary: in an inward collar coordinate $r\ge0$ the radial component of $X$ is nonzero on $\partial D^2$ because $\beta$ is nonzero on the boundary tangent, its sign is constant along the connected boundary circle, and continuity gives $\delta>0$ and $k>0$ with $|Xr|\ge k$ and one fixed sign throughout $0\le r\le\delta$; if a periodic orbit met $\{r<\delta\}$ then its radial coordinate has a minimum below $\delta$, attained on the compact periodic curve, where its derivative along $X$ must be zero, contradicting $|Xr|\ge k$, so no orbit of $A$ meets that collar and, in particular, the period annulus cannot meet the boundary. [step 7.1, F1, F8]

9.1 By [F3] applied to the product $\Psi$ and the compact frontier $\Gamma$ take the field $Y=X+V$ constructed by the flat-drift proof, and its positive orbit $y$ with compact closure in $D^2$ and $\omega_Y^+(y)=\Gamma$. The derivative equality needed below follows from that construction, not merely from $Y=X$ on $\Gamma$: its locally finite band terms $V_n$ are supported on compact sets $B_n\subset A$ of distance $d_n>0$ from $\Gamma$, with $|V_n(z)|\le2^{-n-1}\operatorname{dist}(z,\Gamma)$ and $\lVert DV_n(z)\rVert\le2^{-n-1}d_n$. The fixed inner cutoff is identically one near $\Gamma$. Any finite collection of band supports stays away from $\Gamma$, so only $n\ge N$ contribute sufficiently near it; the $d_n$ are bounded by the diameter of the disk. Thus $V(z)=o(\operatorname{dist}(z,\Gamma))$ and $DV(z)\to0$. Extend $V=0$ on $\Gamma$: for $p\in\Gamma$, $\operatorname{dist}(z,\Gamma)\le|z-p|$ proves $DV(p)=0$, giving $Y=X$ and $DY=DX$ on $\Gamma$. Hence $\Gamma$ is compact, invariant under the flow, and connected because it is the intersection of the decreasing family of connected closures of the orbit tails, while its regular $Y$-trajectories are $X$-trajectories by equality of the fields on the invariant set and uniqueness. [step 8.1, F3]

10.1 Apply [F5] to the positive orbit of $y$, whose $\omega$-limit set $\Gamma$ contains only the finitely many equilibria of step 7.1: alternative (i) fails because a singleton does not separate $c$ from $q$, since the complement of one point of the plane is path connected by explicit polygonal detours, so either $\Gamma$ is one regular periodic orbit, or $\Gamma$ contains equilibria and every regular point of it lies on a nonconstant trajectory whose alpha- and omega-limits are among those saddles. [step 9.1, F5]

11.1 In the second alternative of step 10.1, [F4] applies with the field $Y$, its positive orbit and the separating compact $\Gamma$ whose equilibria are nondegenerate saddles, so $\Gamma$ is a finite embedded strongly connected directed saddle multigraph whose edges are the closures of the distinct nonconstant saddle-to-saddle trajectories, and finitely many closed directed edge walks cover it; in the first alternative $\Gamma$ is a single regular closed orbit, and if in the leafwise boundary case $\Gamma$ meets $\partial D^2$, then the boundary circle is itself a regular closed orbit inside $\Gamma$, invariance forces the whole boundary orbit into $\Gamma$, and alternatives (i) and the equilibrium alternative cannot hold because the boundary carries no equilibrium, so $\Gamma$ equals that boundary orbit; thus the outer frontier is a regular closed orbit, the boundary orbit in the leafwise case, or a finite strongly connected saddle graph covered by finitely many polycycles, with loops, repeated vertices, shared and parallel edges allowed. [step 10.1, F1, F4, F5]

12.1 Finally the annulus parameter gives the prescribed trace: for each fixed phase $\theta_0$ the map $s\mapsto h(\Psi(\theta_0,s))$ is $C^2$ because $h$ and $\Psi$ are, and it is transverse to $F$ because the pulled-back characteristic covector applied to $\partial_s\Psi$ is nonzero, as $\partial_\theta\Psi$ spans the characteristic direction and $(\partial_\theta\Psi,\partial_s\Psi)$ is a basis; these closed traces are exactly the prescribed loops $C_s$, and no nontriviality of their return holonomy is assumed or used. [step 11.1, F9]

13.1 Therefore every center of a disk map in relative generic position is surrounded by a maximal period annulus whose outer frontier is one of the listed alternatives, the transversal boundary case cannot be met by the annulus, and the annulus parameter supplies the $C^2$ transverse trace of the prescribed closed characteristic loops; the only countable selections in the proof are those in the product supplier of step 4.1, made under the standing $\mathrm{AC}_\omega$ of [F12], while all other steps use finitely many explicit objects. [step 12.1, F12] ∎
