---
id: prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism
kind: proposition
title: "A smooth map with everywhere smooth local inverses is a local diffeomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       prop-identity-maps-and-composites-of-smooth-maps-are-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $F:M\to N$ be a smooth map of smooth manifolds. Assume that for every
$p\in M$ there are open neighbourhoods $U_p\subseteq M$ of $p$ and
$V_p\subseteq N$ of $F(p)$ together with a smooth map $G_p:V_p\to U_p$ such
that

$$G_p\circ F|_{U_p}=\operatorname{id}_{U_p}, \qquad F|_{U_p}\circ G_p=\operatorname{id}_{V_p}.$$

Then $F$ is a local diffeomorphism.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ satisfying the local inverse hypothesis of the Statement.

[F1] A diffeomorphism is a bijective smooth map with smooth inverse, and a local diffeomorphism is a map that restricts near every point to a diffeomorphism onto an open subset of the target ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F2] Identity maps and composites of smooth maps are smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in M$ and choose the neighbourhoods $U_p$, $V_p$, and the smooth map [given, choose] $G_p$ from the hypothesis. The identities $G_p\circ F|_{U_p}=\operatorname{id}_{U_p}$ and $F|_{U_p}\circ G_p=\operatorname{id}_{V_p}$ show that the restriction $F|_{U_p}:U_p\to V_p$ is bijective with inverse $G_p:V_p\to U_p$. [given, choose]

2.1 The restriction $F|_{U_p}$ is smooth because it is the same map as $F$ with [F1, F2, step 1.1] a smaller domain, and $G_p$ is smooth by hypothesis. Therefore step 1.1 makes $F|_{U_p}:U_p\to V_p$ a diffeomorphism by [F1]. [F1, F2, step 1.1]

3.1 Since $V_p$ is open in $N$ by hypothesis, step 2.1 exhibits $p$ in an open [F1, step 2.1] neighbourhood on which $F$ is a diffeomorphism onto an open subset of $N$. By [F1] this is exactly the local-diffeomorphism condition. [F1, step 2.1] ∎
