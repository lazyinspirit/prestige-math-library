---
id: lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family
kind: lemma
title: "A tubular target produces a submersive finite-dimensional perturbation family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-family-of-maps-and-evaluation-map,
       cor-a-submersion-is-transverse-to-every-embedded-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10, Corollary 3.27"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement

Let $f:M\to N$ be smooth. Then there exist an open ball
$$
B\subseteq\mathbb R^m
$$
containing $0$ and a smooth family of maps
$$
\mathcal F:M\times B\to N
$$
such that $\mathcal F_0=f$ and, for every $p\in M$, the parameter map
$$
\mathcal F_p:B\to N,\qquad a\longmapsto \mathcal F(p,a),
$$
is a submersion. In particular, the evaluation map $\mathcal F$ is a
submersion, so it is transverse to every closed embedded submanifold
$Z\subseteq N$.

## Facts & Assumptions

**Given:** A smooth map $f:M\to N$.

[F1] The standard transversality-family construction provides an open ball $B\subseteq\mathbb R^m$ and a smooth map $$ \mathcal F:M\times B\to N $$ with $\mathcal F(p,0)=f(p)$ and such that, for each fixed $p\in M$, the map $a\mapsto \mathcal F(p,a)$ is a submersion.

[F2] A smooth family of maps is its evaluation map on a product manifold ([[def-smooth-family-of-maps-and-evaluation-map]]).

[L2] Every submersion is transverse to every embedded submanifold ([[cor-a-submersion-is-transverse-to-every-embedded-submanifold]]).

## Proof
**Proof technique:** direct.

1.1 By [F2], the data of [F1] is exactly a smooth family of maps with $\mathcal F_0=f$. [F1, F2, given]

2.1 Because each parameter map $\mathcal F_p:B\to N$ is a submersion, the full evaluation map $\mathcal F$ is a submersion as well. Therefore [L2] shows that it is transverse to every closed embedded submanifold of $N$. [L2, step 1.1] ∎
