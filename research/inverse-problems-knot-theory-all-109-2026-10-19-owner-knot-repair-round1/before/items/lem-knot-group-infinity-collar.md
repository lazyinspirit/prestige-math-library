---
id: lem-knot-group-infinity-collar
kind: lemma
title: "Removing the point at infinity preserves the knot group"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       lem-wirtinger-crossing-ball-cover,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       thm-higher-dimensional-spheres-are-simply-connected,
       def-simply-connected,
       thm-seifert-van-kampen,
       cor-seifert-van-kampen-simply-connected-overlap]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
verification: {precheck: pass}
---

## Statement

Let $K\subset\mathbb R^3$ be a compact smooth knot and let $b\in\mathbb R^3\setminus K$. The inclusion $\mathbb R^3\setminus K\hookrightarrow S^3\setminus K$ induces an isomorphism
$$\pi_1(\mathbb R^3\setminus K,b)\xrightarrow{\ \cong\ }\pi_1(S^3\setminus K,b).$$

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Compact smooth knots in the standard three-sphere]]

## Facts & Assumptions

**Given:** A compact knot $K\subset\mathbb R^3$ and a basepoint $b$ in its complement.

[F1] The crossing-ball construction gives a path-connected knot complement for every valid diagram of $K$. [[lem-wirtinger-crossing-ball-cover]]

[F2] The fundamental group of the two-sphere is trivial. [[thm-higher-dimensional-spheres-are-simply-connected]]

[F3] A path-connected space is simply connected when its fundamental group is trivial. [[def-simply-connected]]

[F4] Van Kampen computes a path-connected open cover by a group pushout. [[thm-seifert-van-kampen]]

[F5] If one open set and the overlap are simply connected, inclusion from the other set induces an isomorphism. [[cor-seifert-van-kampen-simply-connected-overlap]]

[F6] A pointed inclusion induces a homomorphism on fundamental groups. [[def-induced-homomorphism-on-fundamental-groups]]

[F7] Induced fundamental-group maps are functorial under composition. [[thm-induced-fundamental-group-map-functoriality]]

[F8] A path between basepoints induces the usual basepoint-change isomorphism. [[thm-fundamental-group-laws]]

## Proof

1.1 Since $K$ is compact, choose an open Euclidean ball $D$ containing $K$ and $b$ in its interior. Let $V$ be the complementary open ball about infinity in $S^3$ and put $U=S^3\setminus(K\cup\{\infty\})=\mathbb R^3\setminus K$. Then $V$ is disjoint from $K$, and $U\cap V=V\setminus\{\infty\}$ is a punctured open three-ball, homeomorphic to $S^2\times(0,1)$. It is path-connected and simply connected by [F2] and [F3]. The sets $U,V$ are path-connected by [F1] and the ball description. [given, F1, F2, F3, choose]

2.1 Choose $b_0\in U\cap V$. The open sets $U,V$ cover $S^3\setminus K$; [F4] applies by the path-connectedness in step 1.1. Since $V$ and $U\cap V$ are simply connected by [F2] and [F3], the special case [F5] shows that inclusion induces an isomorphism $\pi_1(U,b_0)\to\pi_1(S^3\setminus K,b_0)$. [F2, F3, F4, F5, step 1.1]

3.1 The inclusion induces the based map by [F6]. A path in $U$ from $b$ to $b_0$ gives basepoint-change isomorphisms by [F8], and functoriality [F7] makes the inclusion square commute. Thus the map at $b$ is also an isomorphism. [F1, F6, F7, F8, step 2.1, construct] ∎
