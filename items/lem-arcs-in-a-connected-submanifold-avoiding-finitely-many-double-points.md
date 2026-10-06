---
id: lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
kind: lemma
title: Arcs joining two points of a connected submanifold avoiding finitely many points
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-connected-space
- def-path-connected
- def-smooth-manifold
- def-embedded-submanifold-and-slice-chart
- def-smooth-embedding
- def-compact-space
- def-countable-choice
- thm-connected-and-locally-path-connected-implies-path-connected
- prop-topological-manifolds-are-locally-compact-and-locally-path-connected
- thm-path-connected-implies-connected
- lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
- lem-slice-chart-restrictions-form-a-smooth-atlas
- thm-weak-whitney-proper-embedding-theorem
- prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold
- thm-euclidean-space-complete
- def-complete-metric-space
- cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric
- def-pullback-riemannian-metric
- prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
- def-riemannian-isometry-and-local-isometry
- cor-riemannian-isometries-preserve-length-and-distance
- def-riemannian-distance-on-a-connected-manifold
- thm-riemannian-distance-is-a-metric
- def-piecewise-c-one-curve-on-a-manifold
- def-riemannian-speed-and-length
- prop-length-is-additive-under-concatenation-and-invariant-under-reversal
- prop-length-dominates-endpoint-distance
- prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
- prop-exponential-map-scales-geodesic-time
- thm-hopf-rinow
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Remark after Theorem 6.6, printed p. 72 (connected M,M' with r>=2 give arcs from p to q avoiding M
      cap M' minus {p,q}; the arcs are minimizing geodesics of complete Riemannian metrics on the punctured manifolds,
      by Hopf-Rinow)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed p. 139 (choice of curves gamma_i:I->N avoiding the double points except
      at the endpoints)
verification:
  precheck: pass
dependency_level: 0
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $A$ be a connected smooth $a$-manifold with $a\ge2$, let $F\subseteq A$ be finite, and let $p,q\in A\setminus F$. Then $A\setminus F$ is path-connected, and there is a smooth embedded arc $\alpha:I\to A$ with $\alpha(0)=p$, $\alpha(1)=q$ and $\alpha((0,1))\cap F=\varnothing$. More generally, if $p,q\in A$ are arbitrary (possibly in $F$), there is a smooth embedded arc from $p$ to $q$ whose image meets $F$ only in the endpoints when the endpoints lie in $F$. The statement applies verbatim to a connected embedded submanifold of a smooth manifold with its induced smooth structure.

For $p=q$ the path-connectedness clause is trivial and the arc clause is read as the constant degenerate arc; the construction below produces a genuine embedded arc whenever $p\ne q$ (a nonconstant arc with equal endpoints is impossible in a Hausdorff space). The complement $A\setminus F$ is an open submanifold of $A$, hence a smooth $a$-manifold without boundary, and it is connected by the path-connectedness clause.

## Facts & Assumptions

**Given:** Countable choice and a connected smooth $a$-manifold $A$ with $a\ge2$, a finite set $F\subseteq A$, and points $p,q\in A\setminus F$.

[F1] Every topological manifold is locally compact and locally path connected; more precisely, every point has a neighbourhood basis of path-connected open sets ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]).

[F2] A locally path-connected space that is connected is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]), and a path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F3] If $n\ge2$ and $\Omega\subseteq\mathbb R^n$ is nonempty, open and connected, then for every $y\in\Omega$ the set $\Omega\setminus\{y\}$ is nonempty, open, connected and path-connected ([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]).

[F4] Under countable choice ([[def-countable-choice]]), every smooth $n$-manifold admits a proper smooth embedding into $\mathbb R^{2n+1}$ ([[thm-weak-whitney-proper-embedding-theorem]]), and the image of a smooth embedding is an embedded submanifold ([[prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold]]).

[F5] Euclidean space $\mathbb R^N$ with its Euclidean metric is a complete metric space ([[thm-euclidean-space-complete]], [[def-complete-metric-space]]), and every connected component of a closed embedded submanifold of a Riemannian manifold whose components are complete is complete for the induced Riemannian distance ([[cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric]]).

[F6] For an immersion $e$, the pullback $e^*h$ of a Riemannian metric $h$ is a Riemannian metric. If $e$ is a smooth embedding, its corestriction is a diffeomorphism onto its embedded image by [F4], hence a Riemannian isometry for the induced metric ([[def-pullback-riemannian-metric]], [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]], [[def-riemannian-isometry-and-local-isometry]]), and Riemannian isometries preserve lengths and distances ([[cor-riemannian-isometries-preserve-length-and-distance]]).

[F7] Let $(M,g)$ be a nonempty connected boundaryless Riemannian manifold. If $(M,d_g)$ is complete, then every $x,y\in M$ are joined by a minimizing geodesic: there is $v\in T_xM$ with $\exp_x(v)=y$, $|v|_{g_x}=d_g(x,y)$, and $t\mapsto\exp_x(tv)$ on $[0,1]$ has length $d_g(x,y)$ ([[thm-hopf-rinow]], [[prop-exponential-map-scales-geodesic-time]]). Geodesics of the metric-compatible connection have constant speed $g(\gamma',\gamma')$ ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F8] The Riemannian distance on a connected Riemannian manifold is the infimum of the lengths of piecewise $C^1$ curves joining the two points ([[def-riemannian-distance-on-a-connected-manifold]], [[def-piecewise-c-one-curve-on-a-manifold]]), it is a metric ([[thm-riemannian-distance-is-a-metric]]), length is the sum of integrals of the speed ([[def-riemannian-speed-and-length]]), length is additive under finite concatenation and invariant under reversal ([[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]]), and every piecewise $C^1$ curve has length at least the distance between its endpoints ([[prop-length-dominates-endpoint-distance]]).

[F9] A smooth embedding is a smooth map that is injective, is an immersion, and is a homeomorphism onto its image ([[def-smooth-embedding]]).

[F10] The restrictions of slice charts form a smooth atlas on an embedded submanifold with the subspace topology ([[lem-slice-chart-restrictions-form-a-smooth-atlas]]).

## Proof

**Proof technique:** direct; build a path in the punctured manifold chartwise, put a complete Riemannian metric on it, and take a minimizing geodesic.

1.1 By [F1] every point of $A$ has a neighbourhood basis of path-connected open sets, so $A$ is locally path-connected; since $A$ is connected, [F2] makes $A$ path-connected, so there is a continuous path $\eta:I\to A$ with $\eta(0)=p$ and $\eta(1)=q$. [F1, F2, given]

2.1 The compact image $\eta(I)$ has a finite coordinate-ball cover. A sufficiently fine partition $0=t_0<\cdots<t_m=1$ has $\eta([t_{i-1},t_i])\subset U_i$ for some coordinate ball $U_i$. Each overlap $U_i\cap U_{i+1}$ contains $\eta(t_i)$ and is nonempty and open; in positive dimension it cannot be contained in the finite set $F$. Choose $z_i\in(U_i\cap U_{i+1})\setminus F$, with $z_0=p$ and $z_m=q$. Applying [F3] successively to the finitely many forbidden points in each ball shows $U_i\setminus F$ is path-connected. Join $z_{i-1}$ to $z_i$ there and concatenate these finitely many paths. This gives a path in $A\setminus F$ from $p$ to $q$, without any assumption that $\eta^{-1}(F)$ is finite. [step 1.1, F3, given, construct]

3.1 Since $p,q\in A\setminus F$ were arbitrary, step 2.1 shows that $A\setminus F$ is path-connected; it is nonempty and, by [F2], connected. [F2, step 2.1, given]

4.1 Thus $A\setminus F$ is a nonempty connected smooth $a$-manifold without boundary with $a\ge2$; by [F4] there is a proper smooth embedding $e:A\setminus F\to\mathbb R^{2a+1}$ (this is where $\mathrm{AC}_\omega$ is used), whose image is an embedded submanifold by [F4] and is closed: if $e(x_j)\to x$ in $\mathbb R^{2a+1}$, then $\{x\}\cup\{e(x_j):j\ge1\}$ is compact, its preimage under the proper map $e$ is compact and contains all $x_j$, and a convergent subsequence $x_{j_k}\to x_*$ has $e(x_*)=x$ by continuity. [F4, step 3.1, given, construct]

5.1 Equip $A\setminus F$ with the pullback $g:=e^*\delta$ of the Euclidean metric $\delta$ of $\mathbb R^{2a+1}$; since $e$ is the smooth embedding of step 4.1, [F6] makes $g$ a Riemannian metric and $e$ a Riemannian isometry onto the embedded submanifold $e(A\setminus F)$ with its induced metric, so $e$ preserves distances by [F6]. That submanifold is closed in the complete manifold $(\mathbb R^{2a+1},\delta)$ by step 4.1, hence complete in the induced metric by [F5], and therefore $(A\setminus F,d_g)$ is complete: a $g$-Cauchy sequence maps under the distance-preserving bijection $e$ to a Cauchy sequence in a complete space, which converges, and its preimage converges in $A\setminus F$. [F5, F6, step 4.1, given]

6.1 Assume $p\ne q$. Then $(A\setminus F,g)$ is a nonempty connected boundaryless complete Riemannian manifold, so [F7] supplies $v\in T_p(A\setminus F)$ with $\exp_p(v)=q$, $|v|_{g_p}=d_g(p,q)$ and $\gamma(t):=\exp_p(tv)$ of length $d_g(p,q)$ on $[0,1]$; by [F8] the distance between the distinct points $p$ and $q$ is positive, so $|v|=d_g(p,q)>0$, and [F7] makes the speed $|\gamma'|$ constant, hence equal to $|v|>0$, so $\gamma$ is an immersion. [F7, F8, step 5.1, given]

7.1 The curve $\gamma$ is injective: if $\gamma(s)=\gamma(t)$ with $0\le s<t\le1$, then the concatenation of $\gamma|_{[0,s]}$ with $\gamma|_{[t,1]}$ is a piecewise $C^1$ curve from $p$ to $q$ whose length is $s|v|+(1-t)|v|=(1-(t-s))\,d_g(p,q)<d_g(p,q)$ by the constant speed and the additivity of length [F8], while [F8] also says that every piecewise $C^1$ curve from $p$ to $q$ has length at least $d_g(p,q)$, a contradiction. [F8, step 6.1, algebra]

8.1 Consequently $\gamma:I\to A\setminus F\subseteq A$ is smooth, injective, an immersion and a homeomorphism onto its image ($I$ is compact, $A$ is Hausdorff, and a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism), so by [F9] it is a smooth embedded arc from $p$ to $q$, and $\gamma((0,1))\cap F=\varnothing$ because its image lies in $A\setminus F$. [F9, step 7.1, given]

9.1 The remaining clauses follow: for $p=q$ the path-connectedness assertion is step 3.1 and the constant degenerate arc satisfies the arc assertion; for arbitrary $p,q\in A$, applying the established case to the finite set $F\setminus\{p,q\}$, which no longer contains $p$ or $q$, produces a smooth embedded arc from $p$ to $q$ whose interior avoids $F\setminus\{p,q\}$, hence whose image meets $F$ only in the endpoints; and if $A$ is a connected embedded submanifold of a smooth manifold, [F10] equips it with the induced smooth structure, so the same argument applies verbatim to that manifold. Countable choice is used exactly through the proper embedding [F4], the completeness statements [F5] and Hopf-Rinow with the geodesic speed [F7]; steps 1.1-3.1 and 7.1 add no choice. [F4, F5, F7, F10, step 3.1, step 8.1, given] ∎
