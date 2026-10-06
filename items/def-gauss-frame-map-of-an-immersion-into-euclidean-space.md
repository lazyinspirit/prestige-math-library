---
id: def-gauss-frame-map-of-an-immersion-into-euclidean-space
kind: definition
title: "Gauss frame map of an immersion into Euclidean space"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-immersion-submersion-and-constant-rank-map, def-tangent-bundle-as-a-disjoint-union, def-differential-of-a-smooth-map, def-stiefel-space-grassmannian-and-tautological-bundle, def-frame-bundle-and-associated-vector-bundle, def-local-frame-and-global-frame-of-a-vector-bundle, def-vector-bundle-map-over-a-smooth-base-map, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-the-global-differential-of-a-smooth-map-is-smooth, def-countable-choice]
justified_by: [prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §1 “Vector bundle obstructions to embeddings and immersions” and §2.1–2.2 “Foundational work of Whitney, Smale, and Hirsch”"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; the bundle of monomorphisms $\\operatorname{Mono}(TM,\\mathbb R^n)$ and the section-space model of formal immersions"
    - title: "John Francis, The h-Principle, Lecture 9: Immersions into Euclidean space, from Smale to Cohen (notes by M. Hoyois)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/9euclidean.pdf
      locator: "PDF pp. 1–3; existence criterion via Stiefel-bundle sections and the derivative map"
dependency_level: 0
---

## Definition

Supply the canonical smooth tangent-bundle structures and smooth global
differential, established under $\mathrm{AC}_\omega$ by
[[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]] and
[[thm-the-global-differential-of-a-smooth-map-is-smooth]]. Once these are
supplied, the following constructions use no further choice.

Let $f:M^m\to\mathbb R^n$ be a smooth immersion with $n\ge m$. Canonically trivializing the target tangent bundle makes its differential a smooth section
$$x\longmapsto df_x\quad\text{of}\quad\mathcal M=\operatorname{Mono}(TM,\varepsilon^n)\longrightarrow M,$$
whose fibre consists of injective linear maps $T_xM\to\mathbb R^n$, with the subspace smooth structure in the space of linear maps. This is the **unnormalized Gauss data** of $f$.

For a smooth local tangent frame $(s_1,\ldots,s_m)$, the **local Gauss frame map** is the full-rank matrix
$$g_U(x)=(df_xs_1(x)\mid\cdots\mid df_xs_m(x)).$$
A change of frame by $A(x)\in\mathrm{GL}_m(\mathbb R)$ changes this matrix to $g_U(x)A(x)$. These frame changes define the monomorphism bundle, and the smoothness of $df$ gives a smooth section in every such trivialization.

If a smooth tangent metric is supplied, write $E=V(TM,\varepsilon^n)$ for the separate bundle of **isometric** linear injections into the Euclidean target. Its fibre in an orthonormal tangent frame is the Stiefel manifold $V_m(\mathbb R^n)$. The **normalized Gauss section** is the fibrewise polar part
$$Q_f=df\,(df^*df)^{-1/2}\in\Gamma(E).$$
Positivity of $df^*df$, smoothness of its positive square root, and independence of orthonormal tangent frames are proved in [[prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle]]. For an orthogonal change $U$ of tangent frame the normalized matrix changes to $Q_fU$. Ordinary Gram–Schmidt in an arbitrary frame does not supply this equivariant formula; polar normalization is the convention here.

A global tangent frame identifies $\mathcal M$ with the product bundle with fibre $\operatorname{Mono}(\mathbb R^m,\mathbb R^n)$. Orthonormalizing that frame in the supplied metric identifies $E$ with the product bundle with fibre $V_m(\mathbb R^n)$, so the normalized section becomes a global map into that Stiefel manifold. Without a global frame it remains a section of $E$. Polar decomposition retains a positive-definite factor in the monomorphism fibre, and the cited proposition proves the resulting deformation retraction onto the Stiefel fibre. For $m=0$ both fibres are points; for $n=m$ they are respectively $\mathrm{GL}_m(\mathbb R)$ and $O(m)$.

No tangent metric is part of the unnormalized datum; normalization uses the supplied metric. No orientation, properness or normal framing is required. The normal bundle is the quotient $\varepsilon^n/df(TM)$ and is not part of these Gauss data. The model assertions in this definition are justified by the cited proposition, whose proof uses the raw full-rank matrix and frame-change definitions without assuming those assertions.
