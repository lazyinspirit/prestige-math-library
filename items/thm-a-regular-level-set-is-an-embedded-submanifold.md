---
id: thm-a-regular-level-set-is-an-embedded-submanifold
kind: theorem
title: "A regular level set is an embedded submanifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-and-critical-points-and-values, def-codimension-and-hypersurface, def-embedded-submanifold-and-slice-chart, cor-local-normal-form-for-submersions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Level Sets"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Theorem 6.10"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, Theorem 3.3"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

Let $F:M^m\to N^n$ be smooth, let $q\in N$ be a regular value, and assume
$F^{-1}(q)$ is nonempty. Then $F^{-1}(q)$ is an embedded submanifold of
codimension $n$. Equivalently, it has dimension $m-n$.

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$ and a regular value $q\in N$ with nonempty fibre.

[F1] A regular value is one whose fibre points are all submersion points; the fibre may be empty ([[def-regular-and-critical-points-and-values]]).

[F2] Codimension means ambient dimension minus submanifold dimension, and embedded submanifolds are defined by slice charts ([[def-codimension-and-hypersurface]], [[def-embedded-submanifold-and-slice-chart]]).

[L1] Near any submersion point, suitable coordinates put $F$ into the form $(u,v)\mapsto u$ ([[cor-local-normal-form-for-submersions]]).

## Proof
**Proof technique:** direct.

1.1 Let $p\in F^{-1}(q)$ be arbitrary. By [F1], $F$ is a submersion at $p$. [F1, given]

2.1 Apply [L1] at $p$. In suitable charts around $p$ and $q$, the map becomes $(u,v)\mapsto u$ on $\mathbb R^n\times\mathbb R^{m-n}$. After centering $q$, the fibre is $\{0\}\times\mathbb R^{m-n}$. Permuting the two source-coordinate blocks sends it to the standard slice $\mathbb R^{m-n}\times\{0\}$. Thus $F^{-1}(q)$ is locally an embedded submanifold. [step 1.1, L1, algebra]

3.1 Since every point of the fibre has such a slice neighbourhood, $F^{-1}(q)$ is an embedded submanifold. Its local model has dimension $m-n$, so by [F2] the codimension is $n$. [F2, step 2.1] ∎
