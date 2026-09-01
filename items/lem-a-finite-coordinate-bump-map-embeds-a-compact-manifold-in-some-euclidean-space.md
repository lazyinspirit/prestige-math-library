---
id: lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space
kind: lemma
title: "A finite coordinate-bump map embeds a compact manifold in some Euclidean space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-chart-bump-at-a-point-with-prescribed-support,
       cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding,
       def-smooth-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 6"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $M^n$ be a compact smooth manifold. Then there are finitely many coordinate
charts $(U_i,x_i)$, open sets $V_i\subseteq U_i$ covering $M$, and smooth bump
functions $\phi_i:M\to[0,1]$ supported in $U_i$ and equal to $1$ on $V_i$ such
that
$$
F:=\bigl(\phi_1,\phi_1x_1^1,\dots,\phi_1x_1^n,\dots,\phi_m,\phi_mx_m^1,\dots,\phi_mx_m^n\bigr):M\to\mathbb R^{m(n+1)}
$$
is a smooth embedding.

## Facts & Assumptions

**Given:** A compact smooth $n$-manifold $M$.

[L1] For every point of a smooth manifold there is a chart bump supported in a
prescribed chart and equal to $1$ on a smaller neighbourhood
([[lem-chart-bump-at-a-point-with-prescribed-support]]).

[L2] An injective immersion from a compact manifold is an embedding
([[cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding]]).

## Proof
**Proof technique:** direct.

1.1 For each $p\in M$, choose a coordinate chart $(U_p,x_p)$ and an open set $V_p\Subset U_p$ containing $p$. By [L1] there is a smooth function $\phi_p$ supported in $U_p$ and equal to $1$ on $V_p$. Compactness gives finitely many such $V_i$ covering $M$, with associated charts $(U_i,x_i)$ and bumps $\phi_i$. [L1, given, choose]

2.1 Define the coordinate-bump blocks $$B_i(q):=\bigl(\phi_i(q),\phi_i(q)x_i^1(q),\dots,\phi_i(q)x_i^n(q)\bigr)\in\mathbb R^{n+1},$$ and let $F:=(B_1,\dots,B_m)$. The map is smooth because each block is smooth on $U_i$ and vanishes off $U_i$. [step 1.1, construct]

2.2 To prove immersion, fix $p\in M$ and choose $i$ with $p\in V_i$. Because $\phi_i$ is identically $1$ on the open set $V_i$, its differential vanishes there. Thus on $V_i$ the last $n$ coordinates of $B_i$ are just the chart coordinates $x_i^1,\dots,x_i^n$, whose differentials form an isomorphism $T_pM\to\mathbb R^n$. Hence $dF_p$ is injective. [step 1.1, algebra]

3.1 To prove injectivity, suppose $F(p)=F(q)$. Choose $i$ with $p\in V_i$. Then $\phi_i(p)=1$, hence $\phi_i(q)=1$ as well because the first coordinates of $B_i(p)$ and $B_i(q)$ agree. Therefore $q\in U_i$, and the equalities $\phi_i(p)x_i^a(p)=\phi_i(q)x_i^a(q)$ give $x_i^a(p)=x_i^a(q)$ for every $a$. Since $x_i$ is injective on $U_i$, one gets $p=q$. [step 1.1, step 2.1, algebra]

4.1 Steps 3.1 and 2.2 show that $F$ is an injective immersion. By [L2], $F$ is a smooth embedding. [L2, step 3.1, step 2.2] ∎
