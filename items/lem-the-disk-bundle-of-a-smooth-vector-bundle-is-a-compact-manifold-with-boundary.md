---
id: lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary
kind: lemma
title: "Disk bundles over compact bases are compact manifolds with boundary"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-smooth-fibre-bundle-and-local-trivialization, def-cholesky-factorisation-with-positive-diagonal, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, lem-regular-sublevels-are-compact-manifolds-with-boundary, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-embedded-smooth-submanifold-with-boundary, def-compact-space, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, lem-compactness-of-a-subspace-is-ambient, thm-extreme-value-metric, thm-heine-borel-rn, cor-local-normal-form-for-submersions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
dependency_level: 1
---

## Statement

Let $E\to M$ be a smooth rank-$q$ vector bundle over a boundaryless smooth manifold, with a supplied smooth bundle metric $h$. The closed disk bundle $D_h(E)=\{\|v\|_h\le1\}$ is a smooth manifold with boundary of dimension $\dim M+q$, with boundary $S_h(E)=\{\|v\|_h=1\}$ and interior $\{\|v\|_h<1\}$. The projection and zero section are smooth. If $M$ is compact, the disk bundle and its boundary are compact. For $q=0$ the disk bundle is $M$ and the boundary is empty; when $\dim M+q\ge1$ the boundary is a closed embedded smooth manifold of dimension $\dim M+q-1$.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$ over a boundaryless smooth manifold, with smooth metric $h$ and rank $q\ge0$.

[F1] In a bundle chart the metric squared is $H(u,v)=v^{\mathsf T}A(u)v$, with $A$ smooth positive definite ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]); disk and sphere bundles have their indicated inequalities ([[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]]).

[L1] At a regular level a smooth real-valued function has coordinate normal form, giving half-space charts for its sublevel ([[cor-local-normal-form-for-submersions]], [[lem-regular-sublevels-are-compact-manifolds-with-boundary]]). Manifold boundaries are closed embedded submanifolds ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[L2] Small coordinate balls have compact closures; compact subsets admit finite ambient subcovers ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]], [[lem-compactness-of-a-subspace-is-ambient]]). Continuous positive functions on nonempty compact Euclidean sets have a positive minimum, and closed bounded Euclidean sets are compact ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 The smooth function $H:E\to\mathbb R$, $H(v)=\|v\|_h^2$, has vertical derivative $w\mapsto2h(v,w)$. At $H(v)=1$, evaluating on $w=v$ gives $2$, so $1$ is regular. The local normal-form argument of [L1] supplies the subspace smooth half-space charts on $H\le1$, without needing compactness. Its boundary is $H=1$ and its interior is $H<1$. For $q=0$, $H=0$ and the disk bundle is simply $M$. [F1, L1, given, algebra]

2.1 These charts are restrictions of smooth ambient charts, so projection and zero section remain smooth. The boundary is closed and embedded by [L1], with the asserted dimension when the total dimension is positive. [L1, step 1.1]

3.1 If $M$ is compact, cover it by finitely many compact coordinate pieces $K_i$ lying inside bundle-trivialization domains. For $q>0$, on the compact set $K_i\times S^{q-1}$ the function $(u,z)\mapsto z^{\mathsf T}A(u)z$ has a positive minimum $c_i$ by [L2]. Thus $v^{\mathsf T}A(u)v\le1$ implies $|v|\le c_i^{-1/2}$. The disk bundle over $K_i$ is a closed bounded subset of a Euclidean coordinate product, hence compact by [L2]. Their finite union is $D_h(E)$, which is therefore compact; its closed boundary is compact too. Empty pieces are omitted. For $q=0$ compactness is just compactness of $M$. [F1, L2, step 1.1, algebra] ∎
