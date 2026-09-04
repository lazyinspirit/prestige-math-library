---
id: lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section
kind: lemma
title: "Normal addition is a local diffeomorphism along the zero section"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-addition-map-for-a-euclidean-submanifold,
       thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11, Theorem 3.54"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold, and let
$E:N^\perp S\to\mathbb R^m$ be its normal addition map. For every $p\in S$ the
differential
$$ dE_{(p,0)}:T_{(p,0)}(N^\perp S)\to T_p\mathbb R^m\cong\mathbb R^m $$
is an isomorphism. Consequently, $E$ is a local diffeomorphism at every point
of the zero section.

## Facts & Assumptions

**Given:** An embedded smooth submanifold $S\subseteq\mathbb R^m$ and its normal
addition map $E$.

[F1] The map is $E(p,v)=p+v$
([[def-normal-addition-map-for-a-euclidean-submanifold]]).

[L1] A smooth map with invertible differential at a point is a local
diffeomorphism there
([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 At a zero vector $(p,0)$, the tangent space of the normal bundle splits as $$T_{(p,0)}(N^\perp S)\cong T_pS\oplus N_p^\perp S.$$ With the formula in [F1], the differential sends $(u,w)$ to $u+w\in\mathbb R^m$. [F1, given, algebra]

2.1 Because $T_pS$ and $N_p^\perp S$ are orthogonal complementary subspaces of $\mathbb R^m$, the map $(u,w)\mapsto u+w$ is a linear isomorphism. Hence $dE_{(p,0)}$ is invertible. [step 1.1, algebra]

3.1 Apply [L1] at each $(p,0)$. The map $E$ is a local diffeomorphism along the zero section. [L1, step 2.1] ∎
