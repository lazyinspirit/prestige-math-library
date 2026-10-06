---
id: lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary
kind: lemma
title: "Relative generic position for characteristic disk maps"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-transversely-oriented-codimension-one-foliation, def-smooth-manifold, thm-morse-sard-for-euclidean-maps, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-euclidean-inverse-function-theorem, def-null-and-content-zero-in-rn, thm-heine-borel-rn, lem-finite-cube-covers-admit-grid-control, def-countable-choice-principle-for-foliation-pair, def-c1-regular-codimension-one-foliation-and-transverse-orientation, cor-mean-value-theorem, cor-primitives-of-a-continuous-function, def-regular-foliation-atlas, lem-c1-euclidean-maximal-flow-with-c2-upgrade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19 (the characteristic disk and its generic perturbations); the relative collar and planar classification arguments are supplied locally"
    - title: "John M. Lee, Introduction to Smooth Manifolds (2nd ed.), Chapter 6 (Morse-Sard used through the library's Euclidean form) and Chapter 11 (vector fields near a singular point)"
      url: "https://link.springer.com/book/10.1007/978-1-4419-9982-5"
      locator: "the Euclidean Sard theorem is cited in the library's own form; the collaring and bump constructions are used as supplied by the library items below"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $M$ be a smooth
$3$-manifold, let $F$ be a cooriented codimension-one foliation of $M$ given by
a $C^2$ foliated atlas ([[def-c1-regular-codimension-one-foliation-and-transverse-orientation]],
read with two continuous derivatives), and let $\omega$ be a nowhere-vanishing
$C^2$ defining $1$-form with $\ker\omega=TF$. Let $h:D^2\to M$ be a $C^2$ map
and put $\beta:=h^*\omega$, the **characteristic covector** of $h$; its zero set
$\operatorname{Sing}(\beta):=\{x\in D^2:\beta_x=0\}$ is the set of
**characteristic singularities** of $h$. Write $C_+$ for any fixed closed
collar of $\partial D^2$ in $D^2$ on which $\beta$ is already nowhere vanishing.

(a) If $h|_{\partial D^2}$ is a closed transversal to $F$, that is,
$\beta(\tau)\neq0$ at every point of $\partial D^2$ for the unit tangent
$\tau$, then $\beta$ is nowhere vanishing on a collar of $\partial D^2$.

(b) If $h(\partial D^2)$ lies in a single leaf, that is, $\beta(\tau)=0$ at
every point of $\partial D^2$, then $h$ is homotopic relative to $\partial D^2$
to a $C^2$ map $h_1$ whose characteristic covector $h_1^*\omega$ is nowhere
vanishing on a collar of $\partial D^2$; the homotopy may be chosen with tracks
supported in an arbitrarily small collar of $\partial D^2$, and $h_1$ may be
chosen arbitrarily $C^0$-close to $h$. Arbitrary $C^1$ or $C^2$ closeness is not asserted in (b).

(c) In either case, let $h$ now be a map whose characteristic covector is
nowhere vanishing on the fixed collar $C_+$. Then for every $C^2$ neighbourhood
$\mathcal U$ of $h$ there is a $C^2$ map $g\in\mathcal U$, equal to $h$ on an
open neighbourhood of $C_+$ and homotopic to $h$ by a homotopy fixed there,
such that $\operatorname{Sing}(g^*\omega)$ is finite, contained in the interior
of $D^2$, and consists of **nondegenerate** points: at each singular point $p$
there is a foliation chart in which the local transverse function $u$ of $g$
has $\nabla u(p)=0$ and $D^2u(p)$ invertible. Each singular point is a
**center** (if $D^2u(p)$ is definite, the characteristic line field near $p$
has a family of small closed orbits around $p$) or a **saddle** (if
$D^2u(p)$ is indefinite, the characteristic line field near $p$ has the usual
four-sector hyperbolic picture).

The statement does not assert that distinct singular points map into distinct
ambient leaves.

## Facts & Assumptions

**Given:** A cooriented codimension-one $C^2$ foliation $F$ of a smooth $3$-manifold $M$ with nowhere-vanishing $C^2$ defining form $\omega$, and a $C^2$ map $h:D^2\to M$.

[F1] In a foliation chart $\chi=(x,z)$ of the given $C^2$ atlas the leaves are the level sets of the transverse coordinate $z$, one has $dz\neq0$ and $TF=\ker dz$ on the chart, and on an overlap the transverse coordinates satisfy $z'=\varphi(z)$ with $\varphi$ a $C^2$ diffeomorphism of intervals ([[def-c1-regular-codimension-one-foliation-and-transverse-orientation]], [[def-regular-foliation-atlas]]). Pulling back $\omega=f\,dz$ with $f\neq0$ gives $h^*\omega=(f\circ h)\,d(z\circ h)$ on the chart, so the singularities of $h^*\omega$ are exactly the critical points of the local transverse function $u:=z\circ h$; and $D^2(\varphi\circ u)=\varphi'(u)\,D^2u$ at a critical point, so nondegeneracy and the type (definite or indefinite) do not depend on the chart. [F1]

[F2] A $C^1$ map that is nonzero at a point is bounded away from zero on a neighbourhood of it; a continuous function on a compact set attains a positive minimum when it is everywhere positive. (Direct compactness argument, using [[thm-heine-borel-rn]].)

[F3] Compactly supported smooth bumps: for $K\subseteq W\subseteq D^2$ with $K$ compact and $W$ open there is a smooth $\rho:D^2\to[0,1]$ equal to $1$ near $K$ and supported in $W$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F4] Morse-Sard in Euclidean space: for open $U\subseteq\mathbb R^2$ and a $C^1$ map $G:U\to\mathbb R^2$, the set of critical values of $G$ is a null subset of $\mathbb R^2$ ([[thm-morse-sard-for-euclidean-maps]] with $m=n=2$, $r=1$); nullity is the cover notion of [[def-null-and-content-zero-in-rn]].

[F5] A closed square $Q\subseteq\mathbb R^2$ of side $L$ is compact ([[thm-heine-borel-rn]]), and a finite cover of $Q$ by axis-parallel rectangles of total area $V$ admits, for every $\eta>0$, a grid of $Q$ whose cells meeting the covered set have total area below $V+\eta$ ([[lem-finite-cube-covers-admit-grid-control]]).

[F6] A $C^1$ map between open subsets of $\mathbb R^2$ with invertible derivative at a point has a local $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[F7] A $C^2$ function whose gradient vanishes and whose Hessian $H$ is invertible satisfies $u(p+w)=u(p)+\tfrac12\langle Hw,w\rangle+o(|w|^2)$; along each ray $w=t\xi$, $|\xi|=1$, the radial function $t\mapsto u(p+t\xi)$ is $C^1$ with derivative $\langle H\xi,\xi\rangle t+o(t)$. (Taylor expansion of a $C^2$ function; [[cor-mean-value-theorem]] applied componentwise to $\nabla u(p+t\xi)-H(t\xi)$.)

[F8] Every continuous real function on an interval has a primitive there ([[cor-primitives-of-a-continuous-function]]).

[F9] A smooth field has a jointly $C^2$ local flow; the Euclidean flow formulas glue in finitely many manifold charts by uniqueness ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

## Proof

**Proof technique:** direct.

1.1 Fix a unit tangent $\tau$ along $\partial D^2$ and let $\beta=h^*\omega$; by [F1] the singularities of $\beta$ are exactly the critical points of the transverse functions, so it suffices to manipulate $\beta$. In a foliation chart with transverse coordinate $z$ one has $\omega=f\,dz$ with $f\neq0$, and a modification of $\beta$ that does not change $\omega$ is the same as a modification of $d(z\circ h)$; the condition "$\beta\neq0$" is chart-independent because $\beta$ is a globally defined $C^1$ $1$-form on $D^2$. [given, F1]

1.2 **Leafwise boundary: a transverse field.** Write $(\theta,r)$ for a collar with inward coordinate $r\ge0$. The compact image $h(\partial D^2)$ has a neighborhood carrying a smooth field $V$ with $\omega(V)>0$: at each image point choose a constant field in a smooth ambient chart with positive evaluation; shrink its domain to retain positivity, take finitely many smaller compact cores covering the image, and patch those finitely many fields with nonnegative smooth bumps from [F3]. Their sum is smooth and has positive evaluation near the image. Its flow $\Phi$ is jointly $C^2$ on a uniform short time interval there, by [F9] and compactness. [F3, F9, given]

2.1 **The transversal boundary case (a).** If $h|_{\partial D^2}$ is a closed transversal, then by definition $\beta(\tau)\neq0$ at every boundary point; since $\beta$ is continuous, [F2] gives $\min_{\partial D^2}|\beta(\tau)|=m>0$, and by continuity of $\beta$ and compactness of $\partial D^2$ there is a collar $C$ of $\partial D^2$ with $\beta\neq0$ on $C$, which is (a). [step 1.1, F2]

2.2 **Leafwise boundary: normal derivative.** Set $a(\theta)=\omega(dh(\partial_r))$ and $b(\theta)=\omega(V)>0$ at $h(\theta,0)$. Choose one constant $c>0$ with $a+cb>0$ on the compact boundary. With a smooth cutoff $\chi(r)$ equal to one near zero and supported in $[0,\varepsilon)$, define $h_1(\theta,r)=\Phi_{cr\chi(r)}(h(\theta,r))$, and keep $h$ outside this collar. This is $C^2$, fixed on the boundary, and there its characteristic covector has zero tangential component and normal component $a+cb>0$. Continuity and compactness therefore give a zero-free collar. Scaling the flow time gives a homotopy fixed on the boundary and supported in the chosen collar. Taking $\varepsilon$ small makes the value displacement arbitrarily small, while the normal derivative change $cV$ need not be small. This proves (b) with $C^0$ closeness. [F2, F9, step 1.2]

3.1 **Preparation for (c).** Enlarge the fixed collar $C_+$ slightly to an open collar $C\supset\overline{C_+}$ with compact closure on which $\beta\neq0$, and let $D_1:=D^2\setminus C$, a compact disk contained in the interior of $D^2$; all singularities lie in $D_1$. Choose finitely many open disks $V_1,\dots,V_N\subseteq\operatorname{int}D^2$, each with closure disjoint from $C_+$ and a compact core $K_i\subset V_i$ and with $h(\overline{V_i})$ contained in a single foliation chart $Q_i$ of $F$ with positive margin from its boundary, such that the interiors of the $K_i$ cover $D_1$; this is possible because $D_1$ is compact and $h$ is continuous. Since the conditions $h(\overline{V_i})\subseteq Q_i$ are open in the $C^2$ topology, there is a $C^2$ neighbourhood $\mathcal V\subseteq\mathcal U$ of $h$ such that every map in $\mathcal V$ still sends each $\overline{V_i}$ into $Q_i$ and is still regular on $\overline C$. [step 2.1, step 2.2, F2]

4.1 **The local perturbation of (c).** Fix $i$ and write the current map on $V_i$ as $x\mapsto\chi_i^{-1}(Y_i(x),u_i(x))$, where $u_i$ is the local transverse function. Choose a bump $\rho_i$ equal to $1$ near $K_i$ and supported in $V_i$ [F3], and for a parameter $a\in\mathbb R^2$ define the modified map on $V_i$ by replacing $u_i(x)$ with $u_i(x)+\rho_i(x)(a\cdot x)$, leaving the foliation coordinates $Y_i$ and the map outside $V_i$ unchanged; since $\rho_i$ is compactly supported in the interior of $V_i$, the result is a $C^2$ map on $D^2$ agreeing with the previous map near $\partial V_i$ with all derivatives. On the open set where $\rho_i=1$ the new transverse function is $u_i+a\cdot x$, whose critical points are the solutions of $\nabla u_i(x)=-a$; for small $a$ the map stays in $\mathcal V$. [step 3.1, F3]

5.1 **Sard makes the core nondegenerate.** The gradient map $\nabla u_i:V_i\to\mathbb R^2$ is a $C^1$ map, so by [F4] its set of critical values is null in $\mathbb R^2$. A null set has empty interior: if a null set contained a closed square $Q$ of side $L\le1$, nullity would give a sequence of closed cubes covering $Q$ with total area at most $L^2/4$; thickening the $n$-th cube by $\delta_n=\min(1,L^2/(1024\cdot2^n(\ell_n+1)))$ on each side makes a cover by open cubes whose total area exceeds $L^2/4$ by at most $\sum_n(4\ell_n\delta_n+4\delta_n^2)<L^2/64$, hence has total area below $17L^2/64$; by compactness of $Q$ [F5] finitely many of them cover $Q$ with total area $V_f<L^2/2$, and [F5] turns this finite cover into a grid of $Q$ whose cells meeting $Q$ (that is, all cells) have total area below $V_f+L^2/2<L^2$, contradicting that the cells of a grid of $Q$ have total area $L^2$. Hence the critical values of $\nabla u_i$ have empty interior and arbitrarily small vectors $-a$ are regular values, so all solutions of $\nabla u_i(x)=-a$ in $V_i$ have invertible Hessian $D^2u_i(x)$. [step 4.1, F4, F5]

6.1 **Preservation of the earlier cores and the fixed charts.** At the moment core $i$ has been treated, its singularities are the finite set $\nabla u_i^{-1}(-a)\cap K_i$ (finite because $D^2u_i$ is invertible at each solution, so the solutions are isolated, and $K_i$ is compact): they are nondegenerate, and on the compact complement of small isolating disks the gradient of the new transverse function is bounded away from zero. This property, "all singularities in $K_i$ are nondegenerate and isolated", is open in the $C^2$ topology: near each singularity the Hessian determinant stays nonzero, and on the compact remainder the gradient norm stays positive. Since there are only finitely many earlier cores and finitely many chart conditions, the regular value $-a$ in step 5.1 may be chosen arbitrarily small, and the perturbation in chart $i$ then preserves every earlier core and every fixed chart inclusion; moreover each earlier core property in turn is preserved by all later perturbations for the same reason. [step 3.1, step 4.1, step 5.1]

7.1 **Finiteness, interiority and the homotopy.** After the finitely many steps, every point of $D_1$ lies in the interior of some core $K_i$; at the end all singularities in each $K_i$ remain nondegenerate (their positions may move), because all later perturbations preserve this property, and there are none in the collar $C$. Hence $\operatorname{Sing}(g^*\omega)$ is a finite set of interior nondegenerate points. Scaling the finitely many parameters $a_i$ linearly from $0$ to their chosen values and concatenating the resulting homotopies gives a homotopy from $h$ to $g$ that fixes an open neighbourhood of the original collar $C_+$ and keeps every intermediate map $C^2$. [step 3.1, step 6.1]

8.1 **A nondegenerate singularity is a center or a saddle.** Let $p$ be a nondegenerate singularity with local transverse function $u$ and Hessian $H=D^2u(p)$, and translate so that $p=0$ and $u(0)=0$. If $H$ is definite, then by [F7] each ray $t\mapsto u(t\xi)$ is strictly monotone in $t$ near $0$; for a small positive level $c$ (or negative, according to the sign of $H$) every ray meets $\{u=c\}$ in exactly one point near $0$, by the intermediate value theorem, and the resulting radius is continuous in $\xi$; the levels are therefore small closed curves around $0$, so the singularity is a center. If $H$ is indefinite, diagonalize $H$ linearly to assume $u_{xx}(0)>0>u_{yy}(0)$; the map $(x,y)\mapsto u_x(x,y)$ has invertible $x$-derivative $u_{xx}(0)$ at the origin, so [F6] solves $u_x=0$ locally as a $C^1$ curve $x=\eta(y)$ with $\eta(0)=\eta'(0)=0$. Put $b(y):=u(\eta(y),y)$; then $b$ is $C^2$ with $b'(y)=u_y(\eta(y),y)$ and $b''(0)=u_{yy}(0)<0$, and Taylor's theorem with [F8] applied twice in the $x$ variable gives $u(x,y)-b(y)=(x-\eta(y))^2A(x,y)$ and $b(0)-b(y)=y^2B(y)$ with $A,B$ continuous and $A(0,0)>0$, $B(0,0)>0$. The changes $X=\operatorname{sign}(x-\eta(y))\sqrt{u(x,y)-b(y)}$ and $Y=\operatorname{sign}(y)\sqrt{b(0)-b(y)}$ are continuous and strictly monotone in $x$ and $y$ respectively near the origin, hence define local coordinates there, and in them $u-u(0)=X^2-Y^2$; the level sets of $u$ therefore have the four-sector saddle picture. [step 7.1, F6, F7, F8]

9.1 By steps 2.1, 2.2, 7.1 and 8.1 assertions (a), (b) and (c) hold. The construction selects only finitely many objects at each stage (finitely many charts, finitely many bumps, finitely many arbitrarily small regular values), so the proof's own choices are finite and need no choice principle; the stated hypothesis $\mathrm{AC}_\omega$ is inherited from the cooriented smooth-distribution interface used to speak of the foliation, its defining form and its flat charts, exactly as recorded in [[def-transversely-oriented-codimension-one-foliation]]. Nothing here separates distinct singularities into distinct leaves, since in a nonproper foliation two different transverse coordinates may lie in the same leaf; this is why no such separation is asserted. [step 2.1, step 2.2, step 7.1, step 8.1] ∎
