---
id: prop-smoothness-is-local-on-the-source
kind: proposition
title: "Smoothness is local on the source"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       lem-chart-independence-of-c-r-smoothness, def-smooth-manifold,
       prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2, Theorem 2.15"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $M$ and $N$ be smooth manifolds, let $F:M\to N$ be continuous, and let
$(U_i)_{i\in I}$ be an open cover of $M$. Then $F$ is smooth if and only if
every restriction $F|_{U_i}:U_i\to N$ is smooth, where each $U_i$ carries the
restricted smooth structure.

## Facts & Assumptions

**Given:** A continuous map $F:M\to N$ and an open cover $(U_i)_{i\in I}$ of $M$.

[F1] $F$ is smooth when its representative with respect to suitable smooth charts is smooth at every point, and this is independent of the chart pair ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[lem-chart-independence-of-c-r-smoothness]]).

[F2] An open subset $U\subseteq M$ carries the restricted smooth structure, whose charts are the restrictions $(V\cap U,\varphi|_{V\cap U})$ of smooth charts of $M$ ([[def-smooth-manifold]], [[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

## Proof

**Proof technique:** direct.

1.1 Forward direction: suppose $F$ is smooth and fix $i\in I$. For [given, F1, F2] $p\in U_i$ take a smooth chart $(V,\psi)$ of $N$ at $F(p)$ and a smooth chart $(W,\varphi)$ of $M$ at $p$ with $W\subseteq U_i$ and $F(W)\subseteq V$. The representative of $F|_{U_i}$ with respect to $(W\cap U_i,\varphi|_{W\cap U_i})$ and $(V,\psi)$ is $\psi\circ F\circ\varphi^{-1}$ restricted to $\varphi(W\cap U_i)$, which is smooth because [F1] makes $\psi\circ F\circ\varphi^{-1}$ smooth and restricting to the open set $\varphi(W\cap U_i)$ keeps every iterated coordinate derivative existing and continuous. By [F1], $F|_{U_i}$ is smooth at $p$. [given, F1, F2]

1.2 Reverse direction: suppose every $F|_{U_i}$ is smooth and let $p\in M$. [given, F1, F2, choose] Choose $i\in I$ with $p\in U_i$, then charts $(V,\psi)$ of $N$ at $F(p)$ and $(W,\varphi)$ of $M$ at $p$ with $W\subseteq U_i$ and $F(W)\subseteq V$. The representative of $F$ with respect to $(W,\varphi)$ and $(V,\psi)$ equals the representative of $F|_{U_i}$ with respect to $(W\cap U_i,\varphi|_{W\cap U_i})$ and $(V,\psi)$, which [F1] and the hypothesis make smooth, so $F$ is smooth at $p$ by [F1]. [given, F1, F2, choose]

2.1 Steps 1.1 and 1.2 prove the two directions at every point, so the [given, step 1.1, step 1.2] biconditional holds on all of $M$. [given, step 1.1, step 1.2] ∎
