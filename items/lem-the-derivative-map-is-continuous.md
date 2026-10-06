---
id: lem-the-derivative-map-is-continuous
kind: lemma
title: "The derivative map is continuous"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-derivative-map-from-immersions-to-formal-immersions, def-weak-compact-open-smooth-topology-on-mapping-spaces, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices, thm-chain-rule-for-differentials-of-smooth-maps, def-space-of-immersions-and-space-of-formal-immersions, thm-the-global-differential-of-a-smooth-map-is-smooth, def-countable-choice, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, lem-compactness-of-a-subspace-is-ambient, lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
dependency_level: 3
---

## Statement

Assume $\mathrm{AC}_\omega$ for the smooth tangent-bundle structures. The derivative map $D:\operatorname{Imm}(M,N)\to\operatorname{FImm}(M,N)$, $f\mapsto(f,df)$, is continuous for the weak compact-open $C^\infty$ topologies.

## Facts & Assumptions

**Given:** Smooth manifolds $M,N$, their canonical tangent-bundle structures, $\mathrm{AC}_\omega$, and an immersion $f$.

[F1] Weak neighbourhoods impose finitely many finite-order derivative conditions on compact chart pieces ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]], [[def-space-of-immersions-and-space-of-formal-immersions]]).

[L1] In induced bundle coordinates, $df$ has the formula $(x,v)\mapsto(f(x),J_f(x)v)$; the global differential is smooth ([[thm-the-global-differential-of-a-smooth-map-is-smooth]]). Compatible chart changes are smooth, and the chain rule applies ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof

**Proof technique:** direct.

1.1 Fix a compact test set $C\subseteq TM$ in a weak neighbourhood of $df$. Cover $C$ by finitely many smaller compact pieces inside induced source bundle charts and target bundle charts containing their $df$-images; such pieces exist by small coordinate balls and compactness ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]], [[lem-compactness-of-a-subspace-is-ambient]]). Their projections to $M$ are compact and their fibre coordinates $v$ are bounded. [F1, given, construct]

2.1 In the coordinates of [L1], every derivative through order $r$ of $(f(x),J_f(x)v)$ is a derivative of $f$ through order $r+1$, multiplied at most by a bounded fibre coordinate, or an entry of a lower derivative after differentiating in $v$. Therefore sufficiently small weak errors in $f$ through order $r+1$ on the projected compact pieces imply all the order-$r$ conditions on $df$. Arbitrary total-space charts are handled by the atlas comparison [[lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas]], whose chain-rule estimates apply on these compact pieces. [L1, step 1.1, algebra]

3.1 Intersect these finitely many neighbourhoods with the prescribed first-component neighbourhood of $f$. Its image under $f'\mapsto(f',df')$ lies in the given product neighbourhood. Restricting to immersions proves continuity of $D$, without compactness of $M$. [F1, step 2.1] ∎
