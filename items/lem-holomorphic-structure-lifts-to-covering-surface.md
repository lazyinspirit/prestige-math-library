---
id: lem-holomorphic-structure-lifts-to-covering-surface
kind: lemma
title: "A universal covering of a Riemann surface inherits a unique complex structure"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-countable-choice, def-riemann-surface-and-holomorphic-atlas, thm-universal-cover-existence, def-covering-map-and-evenly-covered-neighbourhoods, def-holomorphic-and-meromorphic-map-of-riemann-surfaces, def-universal-covering-space, def-simply-connected, def-semilocally-simply-connected-space, def-based-loops-and-fundamental-group, thm-connected-and-locally-path-connected-implies-path-connected, thm-path-connected-implies-connected, thm-locally-connected-iff-components-of-open-sets-are-open, thm-second-countable-implies-lindelof, prop-second-countability-is-hereditary, thm-convex-subsets-have-trivial-fundamental-group, thm-induced-fundamental-group-map-functoriality, prop-local-path-connectedness-lifts-and-descends-along-coverings, prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback, cor-connected-cover-of-a-simply-connected-space-is-trivial, thm-path-lifting-for-covering-maps, cor-lifted-path-endpoints-depend-only-on-path-homotopy, thm-holomorphic-inverse-function-theorem, def-deck-transformation-and-deck-group]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
---

## Statement

Assume Countable Choice. The topological universal cover of a connected Riemann
surface is a second-countable Riemann surface with the unique complex structure
making the projection a holomorphic unbranched covering; every deck
transformation is biholomorphic.

## Facts & Assumptions
**Given:** A connected Riemann surface $W$, a basepoint $x_0\in W$, and a topological universal covering $p:\widetilde W\to W$ of $W$. Countable Choice is assumed throughout. By a *coordinate disc* of $W$ we mean the domain $B$ of a chart $\varphi$ of $W$ with $\varphi(B)$ a Euclidean disc in $\mathbb C$.

[F1] A Riemann surface is a nonempty connected Hausdorff second-countable space $X$ carrying a holomorphic atlas: charts are homeomorphisms onto open subsets of $\mathbb C$, and two atlases determine the same complex structure exactly when their union is again an atlas ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] A covering map $p:E\to B$ is a continuous surjection such that every $b\in B$ has an open evenly covered neighbourhood $U$ with $p^{-1}(U)$ a disjoint union of open sheets $V_j$, each mapped homeomorphically onto $U$ by $p$ ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] Every nonempty path-connected, locally path-connected, semilocally simply connected space has a universal covering space ([[thm-universal-cover-existence]]).

[F4] A universal covering space of $B$ is a covering $p:\widetilde B\to B$ whose total space is simply connected ([[def-universal-covering-space]]).

[F5] A space is simply connected when it is nonempty, path-connected, and $\pi_1(X,x)$ has exactly one element for every basepoint $x$ ([[def-simply-connected]]).

[F6] $X$ is semilocally simply connected when every $x\in X$ has a neighbourhood $U$ for which the inclusion-induced map $\pi_1(U,x)\to\pi_1(X,x)$ is trivial ([[def-semilocally-simply-connected-space]]).

[F7] A locally path-connected space has open path components, its components coincide with its path components, and a connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F8] A path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F9] In a locally connected space every component of every open subset is open; in a locally path-connected space every path component of every open subset is open ([[thm-locally-connected-iff-components-of-open-sets-are-open]]).

[F10] Assuming Countable Choice, every second-countable space is Lindelöf ([[thm-second-countable-implies-lindelof]]).

[F11] Every subspace of a second-countable space is second countable ([[prop-second-countability-is-hereditary]]).

[F12] Every nonempty convex subset of $\mathbb R^n$ with the Euclidean subspace topology is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F13] For pointed continuous maps $\operatorname{id}_*=\operatorname{id}$ and $(g\circ f)_*=g_*\circ f_*$; hence a homeomorphism induces an isomorphism of fundamental groups ([[thm-induced-fundamental-group-map-functoriality]]).

[F14] For a covering $p:E\to B$, the total space $E$ is locally path-connected if and only if the base $B$ is ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F15] Restrictions of coverings to open subspaces are covering maps ([[prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback]]).

[F16] Every connected covering of a locally path-connected simply connected space is one-sheeted and isomorphic to the identity covering ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]).

[F17] A covering map has unique path lifting: for a path $\alpha:I\to B$ and $e_0\in E$ with $p(e_0)=\alpha(0)$ there is exactly one path $\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$ ([[thm-path-lifting-for-covering-maps]]).

[F18] Endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever their lifts begin at the same point ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).


[F20] A map of Riemann surfaces is holomorphic when it is holomorphic in one, hence every, pair of charts; the notion depends only on the two complex structures ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F21] For a nonconstant holomorphic map $f$ on a complex domain and $a$ in its domain, local injectivity of $f$ at $a$ is equivalent to $f$ being biholomorphic between neighbourhoods of $a$ and $f(a)$ ([[thm-holomorphic-inverse-function-theorem]]).

[F22] A deck transformation of a covering $p:E\to B$ is an isomorphism $h:E\to E$ over $B$, that is, a homeomorphism with $p\circ h=p$ ([[def-deck-transformation-and-deck-group]]).

[F23] Countable Choice: every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function ([[def-countable-choice]]).

[F24] A based loop at $x_0$ is a path $\alpha:I\to X$ with $\alpha(0)=x_0=\alpha(1)$, and $\pi_1(X,x_0)$ is the set of path-homotopy classes relative to endpoints of such loops ([[def-based-loops-and-fundamental-group]]).


## Proof

**Proof technique:** direct.

1.1 Every point of $W$ has arbitrarily small coordinate-disc neighbourhoods, and each coordinate disc $B$ is path-connected and simply connected: $B$ is homeomorphic to a Euclidean disc, a nonempty convex set, hence simply connected by [F12], and the homeomorphism transfers simple connectivity and path connectedness by [F13]. Consequently $W$ is locally path-connected and locally connected, and $W$ is semilocally simply connected in the sense of [F6]: a coordinate disc $U$ through $x$ satisfies $\pi_1(U,x)=1$, so the induced map to $\pi_1(W,x)$ is trivial. [F1, F6, F12, F13]

1.2 The coordinate discs of the atlas of $W$ form an open cover of $W$; by [F10], applied to the second-countable space $W$ of [F1] under Countable Choice [F23], this cover has a countable subcover $\{B_n\}_{n\in\mathbb N}$. Each $B_n$ is a coordinate disc, and each $B_n$ is second countable as a subspace of $W$ [F1, F11]. [F1, F10, F11, F23]

1.3 Set $\mathcal X$ to be the set consisting of $x_0$, one chosen point of each $B_n$, and one chosen point of each path component of each intersection $B_m\cap B_n$ with $m,n\in\mathbb N$. This is a countable set: each intersection is an open subspace of the locally path-connected space $W$, so its components are open [F9] and are path-connected; distinct components are disjoint nonempty open sets and each contains a member of a countable base of $W$ [F1], so there are at most countably many of them. All choices are made from countably many nonempty sets of points, which is licensed by Countable Choice [F23]. [F1, F7, F9, F23]

2.1 $W$ is path-connected: it is connected by [F1] and locally path-connected by step 1.1, so [F7] applies. Hence [F3] provides the universal covering $p:\widetilde W\to W$; by [F4] and [F5] the space $\widetilde W$ is nonempty, path-connected and simply connected, so by [F8] it is connected and nonempty without further hypotheses. [F1, F3, F4, F5, F7, F8, step 1.1]

2.2 $\widetilde W$ is locally path-connected by [F14] and step 1.1. It is also Hausdorff: let $u\neq v$ in $\widetilde W$. If $p(u)\neq p(v)$, choose disjoint open neighbourhoods $U\ni p(u)$, $V\ni p(v)$; the sheets of $p^{-1}(U)$ and $p^{-1}(V)$ containing $u$ and $v$ are disjoint open neighbourhoods. If $p(u)=p(v)=x$, choose an evenly covered neighbourhood $U$ of $x$; the distinct points $u,v$ of $p^{-1}(x)$ lie in distinct sheets of $p^{-1}(U)$, whose union is a disjoint union of open sets. [F2, F14, step 1.1]

2.3 For every $n$ and every ordered pair $(y,y')$ of points of $\mathcal X\cap B_n$ choose a path $H_n(y,y')$ in $B_n$ from $y$ to $y'$, the constant path when $y=y'$; such paths exist because $B_n$ is path-connected (step 1.1). This is again a choice from countably many nonempty sets of paths, licensed by Countable Choice [F23]. [F23, step 1.1, step 1.3]

3.1 Let $B$ be a coordinate disc of $W$. The restriction $p^{-1}(B)\to B$ of $p$ over the open set $B$ is a covering [F15], and $p^{-1}(B)$ is locally path-connected as a subspace of the locally path-connected space $\widetilde W$ [F9, step 2.2]. Its components are therefore open and equal to its path components, and $p^{-1}(B)$ is their disjoint union [F9]. For such a component $S$ the restriction $p|_S:S\to B$ is again a covering (it inherits evenly covered neighbourhoods inside $B$ from [F2]), and $B$ is path-connected and simply connected by step 1.1; [F16] therefore makes $p|_S$ a homeomorphism onto $B$. We call these components the *sheets* over $B$; each sheet contains exactly one point of each fibre $p^{-1}(b)$, $b\in B$. [F2, F9, F15, F16, step 1.1, step 2.2]

3.2 Let $\gamma$ be any loop at $x_0$. The sets $\gamma^{-1}(B_n)$ form an open cover of the compact interval $I$, so there are finitely many indices $n_1,\dots,n_k$ and a partition $0=a_0<a_1<\dots<a_k=1$ with $\gamma([a_{i-1},a_i])\subseteq B_{n_i}$ for all $i$. Write $\gamma_i$ for the $i$-th restriction, a path from $\gamma(a_{i-1})$ to $\gamma(a_i)$ inside $B_{n_i}$. For $1\le i\le k-1$ the point $\gamma(a_i)$ lies in $B_{n_i}\cap B_{n_{i+1}}$, so by step 1.3 there is a point $x_i\in\mathcal X$ in the same component of this intersection, and a path $J_i$ in that component from $x_i$ to $\gamma(a_i)$; put $x_0$ for the initial and terminal basepoint and let $J_0$ and $J_k$ be the constant paths at $x_0$. Then $J_{i-1}$ joins $x_{i-1}$ to $\gamma(a_{i-1})$ and $J_i^{-1}$ joins $\gamma(a_i)$ to $x_i$, both inside $B_{n_i}$, so $F_i:=J_{i-1}*\gamma_i*J_i^{-1}$ is a path in $B_{n_i}$ from $x_{i-1}$ to $x_i$. Since $B_{n_i}$ is simply connected, every loop in it is null-homotopic, so $F_i$ is homotopic relative to endpoints to the chosen path $H_{n_i}(x_{i-1},x_i)$; and the telescoping homotopies $J_i*J_i^{-1}\simeq c_{x_i}$ show that $\gamma$ is homotopic relative to endpoints to $F_1*\dots*F_k$, hence to $H_{n_1}(x_0,x_1)*H_{n_2}(x_1,x_2)*\dots*H_{n_k}(x_{k-1},x_k)$. [F12, F13, step 1.3, step 2.3]

4.1 Let $T$ be the set of all concatenations $H_{n_1}(y_0,y_1)*H_{n_2}(y_1,y_2)*\dots*H_{n_k}(y_{k-1},y_k)$ with $k\ge1$, $y_0=y_k=x_0$, and $y_i\in\mathcal X$ for all $i$. Such a concatenation is determined by the finite tuple $(n_1,\dots,n_k;y_1,\dots,y_{k-1})$ drawn from $\mathbb N$ and the countable set $\mathcal X$, so $T$ is countable and nonempty. By step 3.2 every loop at $x_0$ is homotopic relative to endpoints to a member of $T$, so the map $T\to\pi_1(W,x_0)$ sending a loop to its class is surjective; a set that is the image of a countable set is countable, hence $\pi_1(W,x_0)$ is countable. [F24, step 3.2]

5.1 Every fibre of $p$ is countable. Fix $x\in W$ and a path $\rho$ in $W$ from $x_0$ to $x$, which exists because $W$ is path-connected (step 2.1). Define $\Psi:T\to p^{-1}(x)$ by letting $\Psi(\sigma)$ be the endpoint of the unique lift of the path $\sigma*\rho$ that starts at $\tilde x_0$, where $\tilde x_0\in p^{-1}(x_0)$ is fixed; this is well defined by [F17]. To see that $\Psi$ is onto, let $w\in p^{-1}(x)$ and choose a path $\tilde\tau$ in the path-connected space $\widetilde W$ from $\tilde x_0$ to $w$ (step 2.1); then $\tau:=p\circ\tilde\tau$ is a path in $W$ from $x_0$ to $x$, and $\gamma:=\tau*\rho^{-1}$ is a loop at $x_0$ whose class is realised by some $\sigma\in T$ by step 3.2. Thus $\tau$ is homotopic relative to endpoints to $\sigma*\rho$, so by [F18] the lift of $\sigma*\rho$ from $\tilde x_0$ ends at the same point as $\tilde\tau$, namely $w$; hence $\Psi(\sigma)=w$. Therefore $|p^{-1}(x)|\le|T|$ is countable. [F17, F18, step 2.1, step 3.2, step 4.1]

6.1 $\widetilde W$ is second countable. Fix $n$ and a point $b_n\in B_n$. By step 3.1 the sheets over $B_n$ are the components of $p^{-1}(B_n)$, and each contains exactly one point of $p^{-1}(b_n)$; conversely every point of $p^{-1}(b_n)$ lies in a sheet by [F2]. Hence there are at most $|p^{-1}(b_n)|$ sheets over $B_n$, a countable number by step 5.1, and each sheet is homeomorphic to $B_n$ (step 3.1), which is second countable by step 1.2; a countable disjoint union of second-countable spaces is second countable. Therefore each $p^{-1}(B_n)$ is second countable, and $\widetilde W=\bigcup_n p^{-1}(B_n)$ is covered by countably many open second-countable subspaces, so a countable union of countable bases is a countable base for $\widetilde W$: the space $\widetilde W$ is second countable. [F2, F11, step 3.1, step 1.2, step 5.1]

7.1 The pullback atlas. For every chart $\varphi:B\to\mathbb C$ of $W$ whose domain is a coordinate disc and every sheet $S$ over $B$ (step 3.1), put $\psi_{B,S}:=\varphi\circ(p|_S):S\to\varphi(B)$, a homeomorphism onto the open set $\varphi(B)\subseteq\mathbb C$. These domains cover $\widetilde W$, because every point lies in some sheet over some coordinate disc. For two such charts $\psi=\varphi\circ(p|_S)$ and $\psi'=\varphi'\circ(p|_{S'})$ with $S\cap S'\neq \emptyset$, the transition computed in $\varphi(p(S\cap S'))$ is $\psi'\circ\psi^{-1}=\varphi'\circ\varphi^{-1}$, the transition of two charts of $W$, hence holomorphic. Thus the family is a holomorphic atlas on the nonempty connected Hausdorff second-countable space $\widetilde W$ (steps 2.1, 2.2, 6.1), so $\widetilde W$ is a Riemann surface, and the projection is a covering map [F2], i.e. an unbranched covering. [F1, F2, step 2.1, step 2.2, step 3.1, step 6.1]

8.1 The projection $p$ is holomorphic for this structure: near a point of a sheet $S$ over a coordinate disc $B$, take the chart $\psi_{B,S}$ upstairs and the chart $\varphi$ downstairs; the chart expression is $\varphi\circ p\circ\psi_{B,S}^{-1}=\operatorname{id}_{\varphi(B)}$, which is holomorphic. [F20, step 7.1]

9.1 Uniqueness. Let $\mathcal A$ be any complex structure on $\widetilde W$ for which $p:\widetilde W\to W$ is holomorphic, and let $\theta:V\to\mathbb C$ be a chart of $\mathcal A$ and $\psi=\varphi\circ(p|_S)$ a chart from step 7.1 with $V\cap S\neq\emptyset$. On $\theta(V\cap S)$ the map $g:=\varphi\circ p\circ\theta^{-1}$ is holomorphic, being a chart expression of the holomorphic map $p$ [F20], and it is locally injective because it is the composite of the homeomorphism $\theta^{-1}$, the homeomorphism $p|_S$ and the homeomorphism $\varphi$. By [F21], $g$ is biholomorphic between neighbourhoods, so its inverse $\theta\circ(p|_S)^{-1}\circ\varphi^{-1}$ is holomorphic; hence $\theta\circ\psi^{-1}$ is holomorphic, while $\psi\circ\theta^{-1}$ is holomorphic because it equals $\varphi\circ(p\circ\theta^{-1})$. Every chart of $\mathcal A$ is therefore compatible with every chart of the structure of step 7.1, so the union of the two atlases is an atlas and by [F1] the two complex structures on $\widetilde W$ coincide. [F1, F20, F21, step 7.1, step 8.1]

10.1 Deck transformations. Let $h:\widetilde W\to\widetilde W$ be a deck transformation, so $h$ is a homeomorphism with $p\circ h=p$ [F22]. Given $y\in \widetilde W$, choose a chart $\psi=\varphi\circ(p|_S)$ from step 7.1 near $y$ and a chart $\psi'=\varphi'\circ(p|_{S'})$ near $h(y)$; shrinking $S$ we may assume $h(S)\subseteq S'$. On $\psi(S)$ the chart expression is $\psi'\circ h\circ\psi^{-1}=\varphi'\circ(p|_{S'})\circ h\circ(p|_S)^{-1}\circ \varphi^{-1}=\varphi'\circ\varphi^{-1}$, which is holomorphic by [F1]. Hence $h$ is holomorphic [F20], and the same argument applied to the deck transformation $h^{-1}$ shows that $h^{-1}$ is holomorphic. Therefore every deck transformation is biholomorphic. [F1, F20, F22, step 7.1] ∎
