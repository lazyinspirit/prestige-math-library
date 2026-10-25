---
id: lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover
kind: lemma
title: "A smooth local diffeomorphism lifts canonically to the orientation double cover"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-the-orientable-double-cover-of-a-smooth-manifold, def-c-r-and-smooth-maps-between-smooth-manifolds, def-differential-of-a-smooth-map, def-oriented-smooth-manifold-and-oriented-chart, def-covering-map-and-evenly-covered-neighbourhoods, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, thm-smooth-inverse-function-theorem-on-manifolds, thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology (complete book PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.3, printed pp. 234-235 (naturality of the orientable double cover); the derivative pushforward of local orientations is the smooth refinement used here"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 1 §5 / Ch. 3 §4 (smooth maps push forward tangent orientations; used implicitly throughout)"
dependency_level: 1
---

## Statement

Let $M$ be a connected smooth $n$-manifold, $\pi:\widetilde M\to M$ its
orientation double cover with deck transformation $\tau$
([[lem-the-orientable-double-cover-of-a-smooth-manifold]]) and let
$f:M\to M$ be a **local diffeomorphism**
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]), so that
$Df_x:T_xM\to T_{f(x)}M$ is an isomorphism for every $x$
([[def-differential-of-a-smooth-map]],
[[thm-smooth-inverse-function-theorem-on-manifolds]]). Then
$$\widetilde f(x,o_x):=(f(x),\ Df_x(o_x)),\qquad \widetilde f':=\tau\circ\widetilde f,$$
define smooth maps $\widetilde M\to\widetilde M$ with
$\pi\circ\widetilde f=\pi\circ\widetilde f'=f\circ\pi$,
$\tau\circ\widetilde f=\widetilde f\circ\tau$ and
$\tau\circ\widetilde f'=\widetilde f'\circ\tau$; when $M$ is nonorientable these
are exactly the two lifts of $f\circ\pi$ through $\pi$ (the total space
$\widetilde M$ is then connected). If $f$ is a diffeomorphism, so are
$\widetilde f$ and $\widetilde f'$. The construction is canonical, i.e. it
involves no choices.

## Facts & Assumptions

**Given:** A connected smooth $n$-manifold $M$, its orientation double cover
$(\widetilde M,\pi,\tau)$ and a local diffeomorphism $f:M\to M$.

[F1] $\widetilde M=\{(x,o_x)\}$ is the set of rays $o_x$ in $\det T_xM$, with
$\pi(x,o_x)=x$, $\tau(x,o_x)=(x,-o_x)$; over a chart $(U,\varphi)$ of $M$ the
two sheets $S^\pm_{U,\varphi}=\{(x,\pm\,s^+_{U,\varphi}(x)):x\in U\}$ are charts
with $\varphi\circ\pi$ as coordinate map, and $\pi$ is a two-sheeted covering
map ([[lem-the-orientable-double-cover-of-a-smooth-manifold]]).

[F2] A local diffeomorphism is a smooth map that is a diffeomorphism from a
neighbourhood of each point onto an open set, equivalently a smooth immersion
of the same dimension; its differential is everywhere invertible, and an
invertible linear map carries rays in the determinant line to rays
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]],
[[thm-smooth-inverse-function-theorem-on-manifolds]],
[[def-differential-of-a-smooth-map]],
[[def-oriented-smooth-manifold-and-oriented-chart]]).

## Proof

1.1 The formula defines maps and the covering and commutation identities. For $(x,o_x)\in\widetilde M$ the differential $Df_x$ is an isomorphism by [F2], so $Df_x(o_x)$ is a ray in $\det T_{f(x)}M$ and $\widetilde f(x,o_x):=(f(x),Df_x(o_x))$ is a point of $\widetilde M$; the inverse linear map sends the opposite ray to the opposite ray, so $Df_x(-o_x)=-Df_x(o_x)$ and hence $\tau\widetilde f=\widetilde f\tau$ and $\tau\widetilde f'=\widetilde f'\tau$ from $\tau^2=\mathrm{id}$. The identities $\pi\circ\widetilde f=\pi\circ\widetilde f'=f\circ\pi$ are the definitions, using [F1]. [given, F1, F2]

2.1 Smoothness in the sheet charts. Let $(U,\varphi)$ be a chart of $M$ and $(V,\psi)$ a chart of $M$ with $f(U)\subseteq V$; write $\widehat F:=\psi\circ f\circ\varphi^{-1}$ on $\varphi(U)$, so $\det D\widehat F_u\neq0$ for all $u$ by [F2] and $u\mapsto\det D\widehat F_u$ is continuous with locally constant sign. In the sheet charts of [F1] the point $(x,s^+_{U,\varphi}(x))$ is carried by $\widetilde f$ to the point whose ray is $Df_x(s^+_{U,\varphi}(x))=d\psi_{f(x)}^{-1}\bigl(D\widehat F_{\varphi(x)}(\text{standard ray})\bigr)$, which equals $\operatorname{sign}\det D\widehat F_{\varphi(x)}\cdot s^+_{V,\psi}(f(x))$; hence the coordinate expression of $\widetilde f$ is $(u,\epsilon)\mapsto(\widehat F(u),\operatorname{sign}\det D\widehat F_u\cdot\epsilon)$, smooth because $\widehat F$ is smooth and the sign is locally constant on $\varphi(U)$. The expression for $\tau\widetilde f$ differs only by the locally constant factor $-1$ on the second coordinate, so $\widetilde f'$ is smooth too. [step 1.1, F1, F2]

2.2 Uniqueness of the two lifts. Suppose $M$ is nonorientable, so that $\widetilde M$ is connected by [F1]; then $\pi$ is a two-sheeted covering with connected total space and deck group $\{\mathrm{id},\tau\}$. Let $g:\widetilde M\to\widetilde M$ satisfy $\pi\circ g=f\circ\pi$. Then $g$ and $\widetilde f$ both lift the map $f\circ\pi$ through $\pi$, so their difference is measured by a deck transformation: at each point, $g(p)=\widetilde f(p)$ or $g(p)=\tau\widetilde f(p)$, and continuity on the connected $\widetilde M$ makes the choice constant; hence $g=\widetilde f$ or $g=\tau\widetilde f=\widetilde f'$. The two are distinct because $\tau$ has no fixed point on $\widetilde M$, while $\widetilde f'=\widetilde f$ would force $\tau$ to fix every point of the nonempty set $\widetilde f(\widetilde M)$. [step 1.1, F1]

3.1 Diffeomorphisms lift to diffeomorphisms. If $f$ is a diffeomorphism with inverse $f^{-1}$, form $\widetilde{f^{-1}}$ by the same construction, using the invertible differentials $D(f^{-1})_{f(x)}=(Df_x)^{-1}$ that follow from the chain rule for $f^{-1}\circ f=\mathrm{id}_M$ ([[thm-chain-rule-for-differentials-of-smooth-maps]]); then $\widetilde{f^{-1}}\circ\widetilde f(x,o_x)=(x,(Df_x)^{-1}(Df_x(o_x)))=(x,o_x)$ and likewise in the other order, so $\widetilde f$ is a bijection with smooth inverse $\widetilde{f^{-1}}$ by step 2.1, hence a diffeomorphism; so is $\widetilde f'=\tau\circ\widetilde f$. The construction uses only the given map, its differential and the cover, so it is canonical. [step 2.1, step 1.1, given] ∎

## Remarks

- **Local diffeomorphism is exactly the hypothesis under which the formula is
  defined.** If $Df_x$ is singular then $Df_x(o_x)$ is the zero element of
  $\det T_{f(x)}M$, not a ray, so $(f(x),Df_x(o_x))$ is not a point of
  $\widetilde M$. Moreover a general smooth self-map of a nonorientable closed
  manifold need not lift to the orientation double cover at all: for
  $M=RP^2\times S^1$ and $f$ collapsing the first factor to a point while
  wrapping the second factor once around the projective line, the induced map
  on $\pi_1$ sends the kernel of the orientation character outside that kernel,
  so the lifting criterion
  ([[thm-covering-space-lifting-criterion]]) gives no lift. The transfer items
  on this page therefore carry the existence of a lift as an explicit
  hypothesis.
- **The orientable case.** If $M$ is nonempty and orientable, $\widetilde M=M\times\mathbb Z/2$
  is disconnected and the formula produces only two of the four continuous
  lifts of $f\circ\pi$; the mixed lifts that act by $\widetilde f$ on one
  component and $\tau\widetilde f$ on the other are never used, and the
  nonorientable case of the Lefschetz–Hopf formula is the only place where
  uniqueness of the two lifts is invoked. For $M=\varnothing$, the orientation
  cover is empty and $f\circ\pi$ has exactly one lift; the two displayed
  formulas coincide with the unique empty map.
