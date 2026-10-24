---
id: lem-the-differential-sends-derivations-to-derivations-and-is-linear
kind: lemma
title: "The differential sends derivations to derivations and is linear"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-map, def-derivation-at-a-point-and-tangent-space, lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

For a smooth map $F:M\to N$ and a point $p\in M$, the map $dF_p:T_pM\to T_{F(p)}N$ is well defined and linear.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ and a point $p\in M$.

[F1] The differential is defined by $dF_p(v)([g])=v([g\circ F])$ ([[def-differential-of-a-smooth-map]]).

[F2] Pulling back a target germ by $F$ gives a well-defined source germ ([[lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ]]).

[F3] Derivations are linear and satisfy the Leibniz rule ([[def-derivation-at-a-point-and-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], the formula of [F1] is well defined on target germs. [F1, F2, given]

2.1 If $v\in T_pM$, then $dF_p(v)$ is linear because $v$ is, and it satisfies the Leibniz rule because $v([gh]\circ F)=v((g\circ F)(h\circ F))$ and [F3] applies. [F1, F3, step 1.1]

3.1 The assignment $v\mapsto dF_p(v)$ is linear because the defining formula of [F1] is linear in $v$. Therefore $dF_p$ is a well-defined linear map into $T_{F(p)}N$. [F1, step 2.1] ∎
