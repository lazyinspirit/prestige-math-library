---
id: lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image
kind: lemma
title: "The velocity field of an isotopy is well defined along its image"
status: published
origin: session
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ck-and-multi-index-notation-in-several-variables,
       lem-compactness-of-a-subspace-is-ambient,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       def-smooth-embedding,
       prop-a-proper-injective-immersion-is-a-smooth-embedding,
       def-differential-of-a-smooth-map,
       def-tangent-bundle-as-a-disjoint-union,
       def-smooth-map-between-manifolds-with-boundary,
       def-embedded-submanifold-and-slice-chart,
       def-compact-space,
       thm-smooth-inverse-function-theorem-on-manifolds,
       lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed,
       prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
       prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth,
       thm-chain-rule-for-differentials-of-smooth-maps,
       prop-smooth-maps-are-continuous,
       def-smooth-manifold,
       thm-finite-products-of-compact-spaces,
       thm-heine-borel-r,
       thm-closed-subspace-of-a-compact-space-is-compact,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Proposition 2.38 (Picard–Lindelöf for time-dependent fields) and Theorem 2.39 (isotopy extension), printed pp. 35–36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
---

## Statement

Let $M$ be a compact smooth manifold, let $N$ be a smooth manifold and let $F:M\times I\to N$ be a smooth isotopy of embeddings with track $\overline F$ and $S:=\overline F(M\times I)\subseteq N\times I$ ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]]). Then:

1. $\overline F$ is a smooth embedding and its image $S$ is closed and diffeomorphic to $M\times I$. Here embedding and diffeomorphism use the local coordinate-extension convention of the isotopy definition. The domain $M\times I$ has product corners at $\partial M\times\{0,1\}$ when $M$ has boundary, and $S$ carries the corresponding embedded track charts. If $\partial M=\varnothing$, only the time-endpoint boundary faces occur. No neatness relative to the boundary faces of $N\times I$ is asserted.
2. The horizontal velocity $Y$, well defined by
$$Y(F(x,t),t):=dF_{(x,t)}(0,\partial_t)\in T_{F(x,t)}N\subseteq T_{(F(x,t),t)}(N\times I),$$
is a smooth horizontal field along $S$: its pullback by $\overline F$ is smooth up to the time endpoints, it takes values in the subbundle $TN\oplus 0$, and it satisfies $d\overline F_{(x,t)}(\partial_t)=(Y(\overline F(x,t)),\partial_t)$.
3. If $F$ takes values in $\partial N$, then $Y$ takes values in the subbundle $T(\partial N)$; if $F$ takes values in the interior of $N$, then so does the base point of $Y$.

No orientation, properness or injectivity beyond that of the isotopy is used, and no choice principle is needed.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$, a smooth manifold $N$, a smooth isotopy of embeddings $F:M\times I\to N$, its track $\overline F$ and the set $S=\overline F(M\times I)$.

[F1] $F$ is smooth, each slice $F_t$ is a smooth embedding, and $\overline F(x,t)=(F(x,t),t)$; the horizontal velocity is defined by the displayed formula, $\partial_t$ denoting the standard unit tangent vector on the $I$ factor ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]], [[def-differential-of-a-smooth-map]]).

[F2] A smooth embedding is an injective immersion and a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]]); a tangent vector in $T_{(x,t)}(M\times I)$ is a pair of components in $T_xM$ and $T_tI$ ([[def-tangent-bundle-as-a-disjoint-union]]).

[L2] The boundaryless embedding-image and product results do not themselves apply at $t=0,1$. Smoothness at source boundary faces and time endpoints means local smooth extension of coordinate functions across these faces ([[def-smooth-map-between-manifolds-with-boundary]]). The local inverse needed here is established in step 2.2 using [[thm-smooth-inverse-function-theorem-on-manifolds]].

[L4] Use product coordinates $(u,t)$ on $M\times I$, with smooth local extensions across source boundary faces and time endpoints. Smoothness and product differentials are computed componentwise in these coordinates, exactly as for the boundaryless product results ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]]).

[L5] For smooth $G,H$ one has $d(H\circ G)_p=dH_{G(p)}\circ dG_p$ ([[thm-chain-rule-for-differentials-of-smooth-maps]]), and the diagonal entry of a product differential is computed componentwise. Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

[L6] Compact subsets admit finite subcovers from ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]). The interval $I=[0,1]$ is compact and a finite product of compact spaces is compact ([[thm-heine-borel-r]], [[thm-finite-products-of-compact-spaces]]); a smooth manifold is Hausdorff, a compact subset of a Hausdorff space is closed, and a closed subset of a compact space is compact ([[def-smooth-manifold]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L7] In a boundary chart of $N$ the boundary stratum is the coordinate hyperplane of last coordinate $0$ and the interior is the open half-space of last coordinate $>0$ ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]], [[def-smooth-map-between-manifolds-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 The track $\overline F$ is smooth by [L4], its two components being $F$ and the projection $M\times I\to I$, which are smooth. It is injective: if $\overline F(x,t)=\overline F(x',t')$ then reading the second coordinate gives $t=t'$ and the first gives $F_t(x)=F_t(x')$, so $x=x'$ because $F_t$ is injective by [F2]. [F1, F2, L4]

1.2 The track is an immersion. Let $(v,a)\in T_xM\oplus T_tI$ satisfy $d\overline F_{(x,t)}(v,a)=0$. Applying $d\pi_I$ and [L5] to $\pi_I\circ\overline F=\mathrm{pr}_I$ gives $a=0$; then applying $d\pi_N$ to $\pi_N\circ\overline F=F$ gives $d(F_t)_x(v)=0$, so $v=0$ because $F_t$ is an immersion. Hence $d\overline F_{(x,t)}$ is injective for every $(x,t)$. [F1, F2, L5]

2.1 The track is proper: $M\times I$ is compact by [L6] and $\overline F$ is continuous by [F1] and [L5]. For a compact $K\subseteq N\times I$, the target being Hausdorff by [L6], $K$ is closed, so $\overline F^{-1}(K)$ is closed in the compact space $M\times I$ and hence compact by [L6]. [L5, L6, step 1.1]

2.2 A continuous injective map from the compact space $M\times I$ into the Hausdorff space $N\times I$ is a homeomorphism onto its image: it sends closed sets to compact, hence closed, sets by [L6]. With step 1.2 this makes the track an embedding. For its smooth inverse, choose source coordinates $u$ in a Euclidean open set or half-space of dimension $\dim M$ and target coordinates $y$ near one track point. Select $\dim M$ target components $p(y)$ for which $D_u(p\circ F)$ is invertible. The map $(u,t)\mapsto(p(F(u,t)),t)$ has invertible block differential. Locally extend its coordinate functions across any source boundary face and time endpoint and apply [L2]'s inverse function theorem in Euclidean open sets. Its smooth inverse recovers $(u,t)$ from $(p(y),t)$ along the track. The other target components are smooth functions of these coordinates, giving the local graph model and the smooth inverse on $S$, including its source boundary and endpoint faces and their intersections. If $N$ has boundary, extend its coordinate functions in Euclidean space for this calculation and then restrict back; no neatness or boundaryless slice theorem is invoked. Finally $S$ is compact and therefore closed by [L6]. [L2, L6, step 1.1, step 1.2, construct]

3.1 The velocity $Y$ is well defined: a point of $S$ has the form $\overline F(x,t)$ for a unique $(x,t)$, because $\overline F$ is injective by step 1.1, so the prescription $Y(\overline F(x,t)):=dF_{(x,t)}(0,\partial_t)$ is independent of choices; this value lies in $T_{F(x,t)}N$ seen inside $T_{(F(x,t),t)}(N\times I)$ by [F2]. [F2, step 1.1, step 2.2]

4.1 On $S$ one has $Y=V\circ\overline F^{-1}$, where $V(x,t):=dF_{(x,t)}(0,\partial_t)$. The inverse is smooth in the local graph coordinates of step 2.2. The target components of $V$ are time partial derivatives of the coordinate functions of $F$, hence are smooth, including at product corners by differentiating their local extensions. Thus $Y$ is smooth along $S$ in the stated local-extension sense. [L2, L4, step 2.2, step 3.1]

4.2 The tangent identity $d\overline F_{(x,t)}(\partial_t)=(Y(\overline F(x,t)),\partial_t)$ holds: by [L5] applied to the two components $\pi_N\circ\overline F=F$ and $\pi_I\circ\overline F=\mathrm{pr}_I$, the first component of $d\overline F_{(x,t)}(\partial_t)$ is $dF_{(x,t)}(0,\partial_t)=Y(\overline F(x,t))$ and the second is $d\mathrm{pr}_I(\partial_t)=\partial_t$. [L5, F1, step 3.1]

5.1 Consequently $Y$ is a smooth field along the closed track, takes values in $TN\oplus0$ by construction, and satisfies the tangent identity of step 4.2; this is clause 2. [step 3.1, step 4.1, step 4.2]

6.1 Assume $F$ takes values in $\partial N$. Fix $(x,t)\in M\times I$ and a boundary chart of $N$ at $F(x,t)$ with last coordinate $u_n$; by [L7] the last coordinate of the curve $s\mapsto F(x,s)$ is identically $0$ near $s=t$, so its derivative, which is the $TN$-component $Y(\overline F(x,t))$ of the velocity, has last coordinate $0$ and therefore lies in $T(\partial N)$. If instead $F$ takes values in the interior of $N$, then the base point $F(x,t)$ of $Y(\overline F(x,t))$ lies in the interior by hypothesis. This is clause 3. [F1, L7, step 3.1] ∎
