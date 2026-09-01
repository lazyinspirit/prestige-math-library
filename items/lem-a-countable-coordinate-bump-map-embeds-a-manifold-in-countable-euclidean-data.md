---
id: lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data
kind: lemma
title: "A countable coordinate-bump map embeds a manifold in countable Euclidean data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-chart-bump-at-a-point-with-prescribed-support,
       lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]
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

Let $M^n$ be a smooth manifold. Then there are countably many coordinate balls
$(U_j,x_j)$, open sets $V_j\Subset U_j$ covering $M$, and smooth bump
functions $\phi_j$ supported in $U_j$ and equal to $1$ on $V_j$ such that the
countable family of blocks
$$
B_j(p):=\bigl(\phi_j(p),\phi_j(p)x_j^1(p),\dots,\phi_j(p)x_j^n(p)\bigr)\in\mathbb R^{n+1}
$$
separates points and tangent vectors: if $p\ne q$, then $B_j(p)\ne B_j(q)$ for
some $j$, and for each $p\in M$ there is an index $j$ with $p\in V_j$ such
that the last $n$ coordinates of $B_j$ give the chart coordinates on a
neighbourhood of $p$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$.

[L1] Every open cover of $M$ has a countable cover by relatively compact coordinate balls subordinate to it ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[L2] A chart bump can be chosen with prescribed support inside a chart ([[lem-chart-bump-at-a-point-with-prescribed-support]]).

## Proof
**Proof technique:** direct.

1.1 Apply [L1] to the trivial cover $\{M\}$ to obtain countably many relatively compact coordinate balls $U_j$ covering $M$. Shrinking each one slightly inside itself, choose open sets $V_j\Subset U_j$ that still cover $M$. By [L2] there is a smooth bump $\phi_j$ supported in $U_j$ and equal to $1$ on $V_j$. [L1, L2, given, choose]

2.1 Define the coordinate blocks $B_j$ as in the statement. Each $B_j$ is smooth because it equals the smooth chart-coordinate formula on $U_j$ and vanishes off $U_j$. [step 1.1, construct]

3.1 If $p\ne q$, choose $j$ with $p\in V_j$. If $B_j(p)=B_j(q)$, then $\phi_j(p)=1$, hence $\phi_j(q)=1$, so both points lie in $U_j$. Equality of the last $n$ coordinates of $B_j$ then gives $x_j(p)=x_j(q)$, contradicting the injectivity of the chart map. Therefore some block separates $p$ and $q$. [step 1.1, step 2.1, algebra]

4.1 Fix $p\in M$ and choose $j$ with $p\in V_j$. On $V_j$ one has $\phi_j\equiv1$, so the last $n$ coordinates of $B_j$ are exactly the chart coordinates $x_j^1,\dots,x_j^n$. Their differential is an isomorphism at $p$, so this single block already detects every nonzero tangent vector at $p$. Thus the family $(B_j)$ separates tangent vectors as claimed. [step 1.1, algebra] ∎
