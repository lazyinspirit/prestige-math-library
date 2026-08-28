---
id: lem-smooth-maps-paste-over-an-open-cover
kind: lemma
title: "Smooth maps paste over an open cover"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-smoothness-is-local-on-the-source,
       prop-smooth-maps-are-continuous,
       lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Let $M$ and $N$ be smooth manifolds, let $(U_i)_{i\in I}$ be an open cover of
$M$, and let $F_i:U_i\to N$ be smooth maps such that
$F_i|_{U_i\cap U_j}=F_j|_{U_i\cap U_j}$ for all $i,j\in I$. Then there is a
unique map $F:M\to N$ with $F|_{U_i}=F_i$ for every $i\in I$, and $F$ is
smooth.

## Facts & Assumptions

**Given:** An open cover $(U_i)_{i\in I}$ of $M$ and smooth maps $F_i:U_i\to N$
agreeing on all overlaps.

[L1] A family of continuous maps on an open cover that agree on overlaps
determines a unique continuous map on the whole space
([[lem-continuity-is-local-and-pastes]]).

[L2] A continuous map into $N$ is smooth exactly when its restriction to every
member of an open cover is smooth
([[prop-smoothness-is-local-on-the-source]]).

## Proof

**Proof technique:** direct.

1.1 Define $F:M\to N$ by $F(x):=F_i(x)$ whenever $x\in U_i$. The overlap
hypothesis makes this single-valued, and each $F_i$ is continuous because
smooth maps are continuous, so [L1] pastes the pieces into a unique continuous
map $F$ with $F|_{U_i}=F_i$ for every $i$. [given, L1]

1.2 Every restriction $F|_{U_i}=F_i$ is smooth by the hypothesis, and $F$ is
continuous by step 1.1, so [L2] makes $F$ smooth. [given, L2, step 1.1]

2.1 The uniqueness and the defining restriction property come from step 1.1,
and smoothness from step 1.2, which proves the claim. [step 1.1, step 1.2] ∎
