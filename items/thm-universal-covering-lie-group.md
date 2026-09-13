---
id: thm-universal-covering-lie-group
kind: theorem
title: Universal covering Lie group
status: draft
origin: pipeline
deps: [thm-universal-cover-existence, thm-universal-cover-uniqueness-and-dominating-property, thm-uniqueness-of-lifts-from-a-connected-space, thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure, def-semilocally-simply-connected-space, prop-topological-manifolds-are-locally-compact-and-locally-path-connected, thm-connected-and-locally-path-connected-implies-path-connected, thm-product-of-connected-spaces]
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 21.32, printed page 558
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 3.5 and Corollary 3.6, printed page 26
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Every connected Lie group $G$ admits a simply connected Lie group
$\widetilde G$ and a covering homomorphism $p:\widetilde G\to G$. After
identity points are fixed, this covering Lie group is unique up to a unique
basepoint-preserving Lie-group isomorphism **over $G$**.

## Facts & Assumptions

**Given:** A connected Lie group $G$ with identity $e$.

[F1] Every nonempty path-connected, locally path-connected, semilocally
simply connected space has a universal cover. [[thm-universal-cover-existence]].

[F2] Based universal covers of a path-connected locally path-connected base
are uniquely isomorphic over that base.
[[thm-universal-cover-uniqueness-and-dominating-property]].

[F3] A connected covering of a connected Lie group has a unique lifted Lie
group structure after an identity point over $e$ is fixed.
[[thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure]].

[F4] Manifolds are locally path connected, and connected locally
path-connected spaces are path connected.
[[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]],
[[thm-connected-and-locally-path-connected-implies-path-connected]].

[F5] Semilocal simple connectivity asks for a neighborhood whose inclusion
induces the trivial map on fundamental groups.
[[def-semilocally-simply-connected-space]].

[F6] Finite products of connected spaces are connected.
[[thm-product-of-connected-spaces]].

[F7] Two lifts through the same covering from a connected domain are equal
when they agree at one point.
[[thm-uniqueness-of-lifts-from-a-connected-space]].

## Proof

**Proof technique:** take the topological universal cover and lift the group
operations.

1.1 The space underlying $G$ is nonempty. It is locally path connected by [F4] and path connected because it is connected. It is semilocally simply connected: for each $g\in G$, choose a coordinate ball $U$ about $g$; after shrinking within a chart, $U$ is contractible, so every loop in $U$ is nullhomotopic in $G$ and the inclusion-induced homomorphism is trivial as in [F5]. [given, F4, F5]

2.1 By [F1] there is a universal covering map $p:(\widetilde G,\widetilde e)\to(G,e)$. Its total space is simply connected, hence connected, so [F3] gives it the unique Lie-group structure with identity $\widetilde e$ for which $p$ is a covering homomorphism. This proves existence. [F1, F3, step 1.1]

3.1 Let $p_i:(\widetilde G_i,\widetilde e_i)\to(G,e)$ for $i=1,2$ be two such universal covering Lie groups. By [F2] there is a unique based homeomorphism $F:\widetilde G_1\to\widetilde G_2$ over $G$. In covering charts $F$ is the local expression $(p_2|_V)^{-1}\circ p_1|_U$, so it and its inverse are smooth; hence $F$ is a diffeomorphism. [F2, F3, step 2.1]

4.1 The maps $F\circ\widetilde m_1$ and $\widetilde m_2\circ(F\times F):\widetilde G_1^2\to\widetilde G_2$ are lifts of the same map $(a,b)\mapsto p_1(a)p_1(b)$ and agree at $(\widetilde e_1,\widetilde e_1)$. The domain is connected by [F6], so lift uniqueness [F7] makes the maps equal. Thus $F$ is a Lie-group homomorphism and, being a diffeomorphism, a Lie-group isomorphism. [F6, F7, step 3.1]

5.1 Any basepoint-preserving Lie-group isomorphism over $G$ is in particular a based continuous map over $G$, so [F2] makes it equal to $F$. This proves the asserted uniqueness. The phrase “over $G$” is essential: without it a simply connected Lie group can have nontrivial identity-preserving automorphisms. [F2, step 3.1, step 4.1] ∎
