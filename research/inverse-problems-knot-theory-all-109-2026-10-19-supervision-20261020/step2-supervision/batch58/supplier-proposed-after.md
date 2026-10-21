---
id: thm-linking-number-equals-signed-intersection
kind: theorem
title: "Linking number equals signed intersection with a spanning surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps: [def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       def-one-variable-alexander-module-of-an-oriented-link,
       lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold,
       def-oriented-intersection-number,
       def-local-oriented-intersection-sign,
       thm-oriented-intersection-number-is-homotopy-invariant,
       def-countable-choice,
       thm-relative-whitney-approximation-for-manifold-valued-maps,
       def-the-standard-smooth-step-function,
       prop-relative-transversality-preserves-a-map-on-a-closed-good-region,
       thm-transverse-preimage-for-manifolds-with-boundary,
       lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count,
       prop-the-first-hurewicz-map-in-degree-one-is-abelianization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Theorem 3.13 and the proof by additive invariants, pp. 27–29; the source leaves the Reidemeister move checks and rewiring details informal"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3.1, pp. 5–8"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3.1, Theorem 3.5 and its Alexander-duality, meridian, and intersection argument, pp. 5–7"
---

## Statement

Assume the Axiom of Choice. Let $K$ and $J$ be disjoint oriented smooth
embedded circles in the oriented three-sphere, and let $\Sigma$ be a compact
oriented smooth surface embedded in the three-sphere with boundary $K$, whose
outward-normal-first boundary orientation is the specified orientation of $K$.
Here outward-normal-first means that an outward-pointing normal followed by a
positive boundary tangent gives the orientation of $\Sigma$. Assume
$J$ is transverse to $\Sigma$, and fix a regular oriented diagram $D$ of
$J\cup K$. Let $\eta$ be a positively oriented meridian of $K$ and let
$m\in\mathbb Z$ be the unique integer such that
$[J]=m[\eta]$ in $H_1(S^3\setminus K;\mathbb Z)$. Define the topological
linking number by $\operatorname{lk}(J,K):=m$. Let
$\operatorname{lk}_D(J,K)$ be the half-sum of the signs of the mixed crossings
of $D$. Orient the normal line of $\Sigma$ by the ambient orientation. A point
of $J\cap\Sigma$ has sign $+1$ if the oriented curve $J$ crosses from the
negative side of $\Sigma$ to its positive side, and sign $-1$ for the reverse
passage. Then
$$\operatorname{lk}_D(J,K)=\operatorname{lk}(J,K)=\sum_{p\in J\cap\Sigma}\operatorname{sign}_\Sigma(p).$$
The statement is conditional on a supplied spanning surface and regular
diagram; it asserts no surface- or diagram-existence theorem.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented links and ambient isotopy]]

[[def-regular-oriented-link-diagram|Regular oriented diagrams]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing sign convention]]

[[alg-oriented-linking-number-from-diagram|Diagram definition of linking number]]

[[thm-oriented-linking-number-scan-terminates-and-is-correct|Termination and correctness of the diagram scan]]

[[def-one-variable-alexander-module-of-an-oriented-link|Alexander-duality meridian generator]]

[[def-axiom-of-choice|Axiom of Choice]]

[[thm-choice-implies-dependent-implies-countable-choice|Choice implies countable choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, disjoint oriented smooth embedded circles $J,K$
in $S^3$, a compact oriented smooth surface $\Sigma$ with $\partial\Sigma=K$,
transversality of $J$ to $\Sigma$, and a regular oriented diagram $D$ of
$J\cup K$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]); it implies $\mathrm{AC}_\omega$ through [[thm-choice-implies-dependent-implies-countable-choice]].

[F1] For one oriented component $K$, Alexander duality identifies $H_1(S^3\setminus K;\mathbb Z)$ with $\mathbb Z$ by the total-linking homomorphism, and a positively oriented meridian $\eta$ maps to $1$; hence $[\eta]$ generates this homology group ([[def-one-variable-alexander-module-of-an-oriented-link]], Facts & Assumptions [F2], [F7]).

[F2] The complement $X$ is path-connected, and the first Hurewicz map identifies $H_1(X;\mathbb Z)$ with the abelianization of $\pi_1(X)$ ([[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]], [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]).

[F3] The oriented intersection number of complementary-dimensional maps is the signed sum of the local determinant-orientation signs and is invariant under homotopy of transverse maps; the proof counts the oriented boundary of a compact oriented one-manifold ([[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]], [[thm-oriented-intersection-number-is-homotopy-invariant]]).

[F4] Under the Axiom of Choice, relative transversality applies to a smooth map on a boundaryless smooth source and fixes a neighbourhood of any closed region where it is already transverse. After restricting such a map to a compact homotopy cylinder whose endpoint restrictions are transverse, the boundary-preimage theorem gives the intersection trace as a compact oriented one-manifold with boundary at the endpoint intersections and total signed boundary count zero ([[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]], [[thm-transverse-preimage-for-manifolds-with-boundary]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F5] Under $\mathrm{AC}_\omega$, a continuous map between smooth manifolds that is smooth near a closed subset has a smooth approximation homotopic to it relative to a neighborhood of that subset ([[thm-relative-whitney-approximation-for-manifold-valued-maps]]).

[F6] The diagram algorithm returns half the sum of mixed crossing signs, and the sign is the determinant of the oriented over and under tangents in the oriented projection plane ([[alg-oriented-linking-number-from-diagram]], [[thm-oriented-linking-number-scan-terminates-and-is-correct]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F7] The standard smooth step function $\sigma$ is smooth with values in $[0,1]$, satisfies $\sigma(t)=0$ for $t\le0$ and $\sigma(t)=1$ for $t\ge1$ ([[def-the-standard-smooth-step-function]]). For any $0<a<1/2$, the rescaling $\chi_a(t):=\sigma((t-a)/(1-2a))$ is a smooth map $[0,1]\to[0,1]$, equals $0$ for $t\le a$, and equals $1$ for $t\ge1-a$, so it is constant on endpoint collars of $[0,1]$.

## Proof

1.1 Put $X=S^3\setminus K$ and $\Sigma^\circ=\Sigma\setminus K$. Since $\Sigma$ is compact in $S^3$, it is closed; hence $\Sigma^\circ$ is a closed embedded oriented surface in $X$. Since $J$ is transverse to $\Sigma$, its inverse image of $\Sigma$ is a compact $0$-manifold and hence finite; choose a basepoint $x_0\in J\setminus\Sigma$. Then $x_0\in X\setminus\Sigma$. Every based loop class has a smooth representative: on a lift $t\in[0,1]$ with basepoint $0=1$, fix $0<a<1/2$ and reparametrize by $r(t)=0$ on $[0,a]$, $r(t)=(t-a)/(1-2a)$ on $[a,1-a]$, and $r(t)=1$ on $[1-a,1]$. The interpolation $(1-u)t+ur(t)$ is a based homotopy, and the reparametrized loop is constant on a closed arc about $x_0$. Apply [F5] relative to that arc, then [F4] to make the smooth representative transverse to $\Sigma^\circ$ while keeping it fixed near the arc, which maps into $X\setminus\Sigma^\circ$. For such a loop $C$, let $I_\Sigma(C)$ be its oriented intersection number with $\Sigma^\circ$, using the local sign that is $+1$ when $C$ crosses from the negative to the positive side under the ambient-induced coorientation. This is the local sign of [F3]: the positive normal followed by a positive basis of $\Sigma$ gives the ambient orientation. For any based homotopy between transverse loops, reparametrize its interval variable by $\chi_a$ from [F7]; it then agrees with the smooth endpoint loops on endpoint collars. Extend it constantly at both ends to a continuous map $\widehat H:\mathbb R\times S^1\to X$. Put $A=((-\infty,a/2]\cup[1-a/2,\infty))\times S^1$, a closed subset of the boundaryless smooth source $\mathbb R\times S^1$. The extension is smooth on an open neighbourhood of $A$, since there it is independent of the first variable and equals a smooth endpoint loop. Apply [F5] on this boundaryless source relative to $A$, then [F4] there relative to $A$ to make the resulting smooth map transverse to the closed submanifold $\Sigma^\circ$. The second application is valid because the map is unchanged near the tails and its endpoint loops are transverse. Both operations leave a neighbourhood of $A$ fixed. Restrict the final map to $[0,1]\times S^1$; it and its boundary restrictions are transverse, so the boundary-preimage assertion in [F4] applies to this compact cylinder. In particular its intersection trace is a compact oriented one-manifold whose boundary consists exactly of the endpoint intersections. Equivalently [F3] gives equality of their signed counts, so $I_\Sigma$ is homotopy invariant. Concatenation can be smoothed in a ball about $x_0$ disjoint from $\Sigma$, so intersection counts add. Thus $I_\Sigma$ is a group homomorphism $\pi_1(X,x_0)\to\mathbb Z$ and factors through $H_1(X;\mathbb Z)$ by [F2]. [A1, F2, F3, F4, F5, F7, given, construct]

1.2 Let $\lambda=\operatorname{lk}_D(J,K)$ be the algorithmic linking number of the given regular diagram. At each mixed crossing where $K$ is over $J$, let $\epsilon$ be its sign and switch it so that $J$ passes over $K$. The crossing sign changes from $\epsilon$ to $-\epsilon$, so [F6] changes $\lambda$ by $-\epsilon$. In local coordinates $(x,y,z)$ with ambient orientation $(x,y,z)$, straighten the overpassing $K$-arc to the $x$-axis in a small ball. For $\epsilon=+1$, the underpassing $J$-arc runs in the positive $y$ direction; switching it above the $K$-arc makes the local loop new-arc minus old-arc run clockwise in the oriented normal $(y,z)$ disk. Its class in the punctured ball is therefore $-[\eta]$, where $\eta$ is the positive meridian. For $\epsilon=-1$ one tangent is reversed, so the local loop is the positive meridian. Thus in both cases $[J_{\rm new}]-[J_{\rm old}]=-\epsilon[\eta]$. The same local picture applies to any mixed crossing after an orientation-preserving change of coordinates. [A1, F1, F6, given, construct]

2.1 Take a sufficiently small normal disk to $K$ at a boundary point and orient its normal plane so that a positive tangent to $K$ followed by the disk orientation gives the ambient orientation; its oriented boundary is the positive meridian $\eta$. In orientation-preserving coordinates $(u,v,w)$, the surface is locally $\{w=0,v\ge0\}$ with orientation $(\partial_u,\partial_v)$ and $K$ tangent to $+\partial_u$. The disk is oriented $(\partial_v,\partial_w)$, so its positively oriented boundary at $+\partial_v$ travels in the $+\partial_w$ direction, from the negative to the positive side of $\Sigma$. It meets $\Sigma$ once, hence $I_\Sigma(\eta)=1$. By [F1], if $[J]=m[\eta]$ in $H_1(X;\mathbb Z)$, then $I_\Sigma(J)=m$. [A1, F1, F2, step 1.1, construct]

2.2 After finitely many switches, every mixed crossing has $J$ over $K$. The loop $J$ can then be translated in the viewing-normal direction until it lies in a half-space above the compact image of $K$: at each projected coincidence it starts above $K$ and remains above, and away from those finitely many coincidences the projections are disjoint. This isotopy stays in $X$, so the final class is zero because the half-space is contractible. Write $\gamma_J,\gamma_K$ for the final projected loops. Each remaining crossing sign is $\operatorname{sgn}\det(\dot\gamma_J,\dot\gamma_K)$. Orient $S^1_J\times S^1_K$ by the $J$ factor first, orient $\mathbb R^2\times\mathbb R^2$ by its coordinate blocks, and orient the diagonal $\Delta=\{(x,x):x\in\mathbb R^2\}$ by $x\mapsto(x,x)$. By the local-sign definition [F3], the intersection sign of $F=(\gamma_J,\gamma_K)$ with $\Delta$ is $-\operatorname{sgn}\det(\dot\gamma_J,\dot\gamma_K)$: the determinant of the columns $(\dot\gamma_J,0),(0,\dot\gamma_K),(e_1,e_1),(e_2,e_2)$ is $-\det(\dot\gamma_J,\dot\gamma_K)$ for a positive basis $(e_1,e_2)$ of the plane. Fix $a\in(0,1/2)$ and replace the linear homotopy of $\gamma_J$ to a point $p$ outside the second projected loop by $\gamma_t=(1-\chi_a(t))\gamma_J+\chi_a(t)p$, using [F7]. The map $((t,s,r)\mapsto(\gamma_t(s),\gamma_K(r)))$ is constant in $t$ on endpoint collars, transverse to $\Delta$ there at the initial end, and misses $\Delta$ near the terminal end. Extend it constantly in $t$ to the boundaryless source $\mathbb R\times S^1_J\times S^1_K$. It is smooth across the former endpoints because of those constant collars. The set $A=((-\infty,a/2]\cup[1-a/2,\infty))\times S^1_J\times S^1_K$ is closed, and the extended map is already transverse to the closed diagonal on a neighbourhood of $A$: at the initial tail transversality follows from the regular diagram, while on the terminal tail the image misses the diagonal. Apply [F4] on this boundaryless source fixing a neighbourhood of $A$. Restrict the resulting transverse map to $[0,1]\times S^1_J\times S^1_K$; its unchanged endpoint restrictions are transverse, and [F4] supplies a compact oriented one-dimensional preimage whose boundary is precisely the endpoint preimages. Thus [F3] applies to the restricted family. The endpoint map at $t=1$ misses $\Delta$, so its intersection number is zero, the same is true at $t=0$, and hence the final mixed signed sum is zero. Thus both the final linking number and the final meridian coefficient are zero. Since step 1.2 shows their changes agree at every switch, the original $\lambda$ equals the original coefficient $m$. [A1, F1, F3, F4, F6, F7, step 1.2, construct]

3.1 Step 2.2 proves $\operatorname{lk}_D(J,K)=m$, and step 2.1 proves $I_\Sigma(J)=m$. Since $\operatorname{lk}(J,K)$ was defined to be $m$, all three integers agree. The Axiom of Choice is used through Alexander duality in [F1] and relative transversality in [F4]; no surface-existence result is used. [A1, F1, F4, F6, step 2.1, step 2.2] ∎


