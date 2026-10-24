---
id: lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold
kind: lemma
title: "The diagonal of a smooth manifold is a closed embedded submanifold"
status: published
origin: session
dependency_level: 0
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-smooth-manifold,
       def-embedded-submanifold-and-slice-chart,
       def-smooth-embedding,
       def-product-topology,
       prop-smooth-maps-are-continuous,
       prop-the-diagonal-is-an-embedded-submanifold,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
       prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth,
       prop-identity-maps-and-composites-of-smooth-maps-are-smooth,
       thm-chain-rule-for-differentials-of-smooth-maps,
       def-differential-of-a-smooth-map,
       lem-slice-chart-restrictions-form-a-smooth-atlas,
       prop-smoothness-into-an-embedded-submanifold-is-an-initial-property,
       prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space,
       def-homeomorphism-and-open-maps,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds]
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
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2, 6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)"
      url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1, article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems 2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only for the recorded knotting boundary"
      url: "https://arxiv.org/pdf/math/0604045"
---

## Statement

Let $X$ be a smooth manifold and let $\Delta_X:=\{(x,x):x\in X\}\subseteq X\times X$ be the diagonal. Then $\Delta_X$ is a closed embedded submanifold of $X\times X$, the diagonal map $\delta:X\to X\times X$, $\delta(x)=(x,x)$, is a smooth embedding onto $\Delta_X$, and $\Delta_X$ has a canonical smooth structure making $\delta$ a diffeomorphism onto it. No orientation, metric, properness or choice principle is involved.

## Facts & Assumptions

**Given:** A smooth manifold $X$ and the diagonal $\Delta_X\subseteq X\times X$.

[F1] A smooth $n$-manifold is a topological $n$-manifold, hence Hausdorff and locally Euclidean, equipped with a maximal smooth atlas ([[def-smooth-manifold]]).

[F2] $X\times X$ carries the canonical product smooth structure, whose charts are the products of charts of $X$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F3] A map into a product of smooth manifolds is smooth if and only if both of its components are smooth ([[prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]]).

[F4] The identity map of a smooth manifold is smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F5] For every smooth manifold $M$ the diagonal $\Delta_M\subseteq M\times M$ is an embedded submanifold of dimension $\dim M$ ([[prop-the-diagonal-is-an-embedded-submanifold]]).

[L1] A subset $S\subseteq M$ is an embedded submanifold when slice charts exist at every point of $S$, and it then carries the subspace topology ([[def-embedded-submanifold-and-slice-chart]]).

[L2] The restricted slice charts of an embedded submanifold are smoothly compatible and generate exactly the subspace topology ([[lem-slice-chart-restrictions-form-a-smooth-atlas]]).

[L3] A smooth embedding is an injective immersion that is a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]]).

[L4] A homeomorphism is a continuous bijection with continuous inverse, and an embedding is an injective map whose corestriction to its image with the subspace topology is a homeomorphism ([[def-homeomorphism-and-open-maps]]).

[L5] The product topology on $X\times X$ is the initial topology of the two projections; the projections are continuous and the boxes $U\times V$ with $U,V$ open in $X$ form a basis for it ([[def-product-topology]]).

[L6] A smooth map of smooth manifolds is continuous ([[prop-smooth-maps-are-continuous]]).

[L7] For smooth maps $F:M\to N$ and $G:N\to P$ one has $d(G\circ F)_p=dG_{F(p)}\circ dF_p$ for every $p\in M$ ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

[L8] The differential of $F$ at $p$ is defined by $dF_p(v)([g])=v([g\circ F])$ ([[def-differential-of-a-smooth-map]]).

[L9] A map $G:N\to S$ into an embedded submanifold $S\subseteq M$ is smooth if and only if the ambient composite $i\circ G$ is smooth ([[prop-smoothness-into-an-embedded-submanifold-is-an-initial-property]]).

[L10] A map $f:S\to N$ out of an embedded submanifold is smooth if and only if near every point of $S$ it agrees with the restriction of a smooth ambient map ([[prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space]]).

[L11] A diffeomorphism is a bijective smooth map whose inverse is smooth ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal map $\delta$ is smooth: by [F3] applied to $\delta$ it suffices that its two components $\pi_1\circ\delta$ and $\pi_2\circ\delta$ are smooth, and both components equal $\mathrm{id}_X$, which is smooth by [F4]. [F3, F4]

1.2 The map $\delta$ is injective: if $(x,x)=(y,y)$ then reading the first coordinate gives $x=y$. Its image is $\Delta_X$ by the definition of $\Delta_X$, and $\Delta_X$ carries the subspace topology by [L1] and [F5]. [F5, L1]

1.3 The projection $\pi_1:X\times X\to X$ is smooth: in a product chart $(\varphi\times\varphi)$ of [F2] its coordinate representative is the Euclidean projection $(u,v)\mapsto u$, which is smooth, and smoothness is a local condition on the source. [F2, algebra]

1.4 The restricted slice charts of $\Delta_X$ are smoothly compatible and generate the subspace topology by [L2] and [F5]; this is the canonical smooth structure on $\Delta_X$ announced in the statement, and it is the structure used in the remaining steps. [F5, L2]

2.1 The differential of $\delta$ is injective at every point: by [L7] applied to $\pi_1\circ\delta=\mathrm{id}_X$, the identity $d(\pi_1\circ\delta)_x=d(\pi_1)_{\delta(x)}\circ d\delta_x$ holds, while the defining formula [L8] gives $d(\mathrm{id}_X)_x=\mathrm{id}_{T_xX}$ because $g\circ\mathrm{id}_X=g$ for every germ $g$. Hence $d\pi_1\circ d\delta_x=\mathrm{id}_{T_xX}$, so $d\delta_x$ is injective and $\delta$ is an immersion. [L7, L8, step 1.3]

2.2 For this structure the corestriction $\delta^0:X\to\Delta_X$ is smooth, because its ambient composite with the inclusion $\Delta_X\hookrightarrow X\times X$ is $\delta$, which is smooth by step 1.1; this is the criterion of [L9]. [L9, step 1.1, step 1.4]

2.3 The inverse $\pi_1|_{\Delta_X}$ is smooth by the ambient-extension criterion of [L10], applied with the ambient map $\pi_1$, which is smooth by step 1.3 and restricts to $\pi_1|_{\Delta_X}$ on $\Delta_X$. [L10, step 1.3]

3.1 The map $\delta$ is continuous by [L6] and step 1.1, and the restriction $\pi_1|_{\Delta_X}:\Delta_X\to X$ is continuous as the restriction of the continuous projection $\pi_1$ of [L5] to the subspace $\Delta_X$. The two maps are mutually inverse bijections between $X$ and $\Delta_X$, because $\pi_1(x,x)=x$ and $\delta(\pi_1(x,x))=(x,x)$ for every $x\in X$. Hence the corestriction of $\delta$ to $\Delta_X$ is a homeomorphism, so $\delta$ is a smooth embedding onto $\Delta_X$ by [L3] and [L4], completing the first two claims. [L3, L4, L5, L6, step 1.1, step 1.2, step 2.1]

3.2 By steps 2.2 and 2.3 the corestriction $\delta^0$ is a bijective smooth map with smooth inverse, hence a diffeomorphism onto $\Delta_X$ in the canonical structure of step 1.4; this is the final claim. [L11, step 2.2, step 2.3]

4.1 Finally $\Delta_X$ is closed in $X\times X$: given $(x,y)\notin\Delta_X$ one has $x\neq y$, and since $X$ is Hausdorff by [F1] there are disjoint open sets $U\ni x$ and $V\ni y$; then $U\times V$ is a basis open set of [L5] containing $(x,y)$ and disjoint from $\Delta_X$, because a point of $U\times V$ would have equal coordinates in $U\cap V=\varnothing$. So the complement of $\Delta_X$ is open, and $\Delta_X$ is closed. [F1, L5] ∎
