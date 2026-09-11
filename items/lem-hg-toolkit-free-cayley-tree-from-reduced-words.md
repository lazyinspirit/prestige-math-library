---
id: "lem-hg-toolkit-free-cayley-tree-from-reduced-words"
kind: "lemma"
title: "Free Cayley trees from reduced-word normal form"
deps: ["thm-reduced-words-form-the-free-group", "lem-geodesic-triangles-in-trees-are-tripods", "def-word-metric"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Reduced-word construction: local adaptation of the earlier proved free-group item; Drutu–Kapovich metric tree discussion"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $S$ be a finite alphabet and $F(S)$ its reduced-word free group. Join $g$ to $gs$ by a unit edge for each $s\in S\sqcup S^{-1}$, identifying each edge with its reversal. This geometric Cayley realization is a geodesic tree. Every edge path without an immediate edge reversal, parametrized by arc length, is globally geodesic, including restrictions to arbitrary real subintervals. The empty alphabet gives the one-point tree.

## Facts & Assumptions

**Given:** This graph and its unit-edge path metric.

[F1] Reduced words form the free group, with multiplication by concatenation followed by reduction, by [[thm-reduced-words-form-the-free-group]].

[F2] The unit-edge realization of a connected graph with no cycles has unique geodesics and tripod triangles by [[lem-geodesic-triangles-in-trees-are-tripods]].

[F3] Vertex word distance is $d_S(g,h)=|g^{-1}h|_S$ by [[def-word-metric]].

## Proof

1.1 A reduced word for $g^{-1}h$ gives a finite path from $g$ to $h$ by successively multiplying on the right by its letters, so the graph is connected. On an edge from $g_i$ to $g_{i+1}$ its right label is $s_i=g_i^{-1}g_{i+1}$, a formal basis letter or inverse. Distinct formal letters represent distinct nonidentity elements by F1, so there are no loops or parallel edges after reversal identification. [F1, F3, given]

2.1 A simple cycle would have no immediate reversal, so its successive labels form a nonempty reduced word $s_0\cdots s_{n-1}$. But their ordered product telescopes to $g_0^{-1}g_n=e$, contradicting F1, since the identity is the empty reduced word. This also excludes two-edge reversal-free cycles; loops were already excluded. Thus the graph has no cycles, and F2 makes its realization a geodesic tree with tripod triangles. [step 1.1, F1, F2]

3.1 A finite edge path with no immediate reversal cannot repeat a vertex: the labels along any closed portion would again form a nonempty reduced identity word. Hence it is the unique simple path between its endpoints. F2 makes its length parametrization geodesic. For a real subinterval of an edge path, bracket its endpoints by adjacent vertices, using the endpoints themselves if already vertices. A finite bracketing path is simple by the same argument, so its entire geometric realization and every restriction are isometric. For a path ending inside an edge, the same conclusion follows by subdivision at that endpoint. This treats finite, one-sided infinite and two-sided infinite paths because each compact restriction meets finitely many unit edges. [step 2.1, F1, F2]

4.1 The empty path and one-point real intervals have distance and length zero. If $S$ is empty there is only the empty reduced word, no edges and the one-point realization, so all assertions still hold. No family of paths or representatives has been selected; the proof is choice-free. [step 1.1, step 2.1, step 3.1, F1] ∎
