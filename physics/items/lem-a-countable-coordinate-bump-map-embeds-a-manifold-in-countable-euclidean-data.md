---
id: lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data
kind: lemma
title: "A countable coordinate-bump map embeds a manifold in countable Euclidean data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, def-smooth-manifold,
       lem-coordinate-balls-form-a-basis-of-a-topological-manifold,
       thm-second-countable-implies-lindelof,
       lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 6"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume $\mathrm{AC}_\omega$, and let $M^n$ be a smooth manifold. Then there
are countably many smooth coordinate balls $(U_j,x_j)$, open coordinate balls
$V_j\Subset U_j$ covering $M$, and smooth bump functions $\phi_j$ supported
in $U_j$ and equal to $1$ on $V_j$ such that the globally defined smooth
blocks
$$ B_j(p):=\begin{cases}\bigl(\phi_j(p),\phi_j(p)x_j^1(p),\dots,\phi_j(p)x_j^n(p)\bigr),&p\in U_j,\\0,&p\notin U_j\end{cases}\in\mathbb R^{n+1}. $$
separates points and tangent vectors: if $p\ne q$, then $B_j(p)\ne B_j(q)$ for
some $j$, and for each $p\in M$ there is an index $j$ with $p\in V_j$ such
that the last $n$ coordinates of $B_j$ give the chart coordinates on a
neighbourhood of $p$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ and $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The underlying topological manifold is second countable ([[def-smooth-manifold]]).

[L1] At every point of a smooth manifold there is a smooth chart onto an open Euclidean set ([[def-smooth-manifold]]). Euclidean balls can be nested inside that set, and the inner coordinate ball then has compact closure inside the outer one by the compact-closure argument of [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]].

[L2] Under $\mathrm{AC}_\omega$, an open cover of a second countable space has a countable subcover ([[thm-second-countable-implies-lindelof]]).

[L3] For compact $K\subseteq W$ with $W$ open in a smooth manifold, a smooth function supported in $W$ equals $1$ on a neighbourhood of $K$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof
**Proof technique:** direct.

1.1 Let $\mathcal V$ consist of all smooth coordinate balls $V$ for which there exists a smooth coordinate ball $(U,x)$ with $\overline V$ compact and contained in $U$. This is an open cover of $M$: at a point $p$, take a smooth chart $(W,x)$ and concentric Euclidean balls $B(x(p),r)\subset B(x(p),R)$ whose outer closed ball lies in $x(W)$. Their inverse images give the required $V$ and $U$ by [L1]. By [L2], choose a countable subcover $(V_j)$. For each $j$, use countable choice to select a witnessing smooth coordinate ball $(U_j,x_j)$, and then apply [L3] and countable choice to select a smooth $\phi_j:M\to[0,1]$ supported in $U_j$ and equal to $1$ on an open neighbourhood of $\overline{V_j}$. Thus $V_j\Subset U_j$ and $\phi_j=1$ on $V_j$. If $M$ is empty, take the family to be empty. [given, L1, L2, L3, choose]

2.1 Define the coordinate blocks $B_j$ by the piecewise formula in the statement. The chart-coordinate formula is smooth on $U_j$. Its coordinate products vanish on a neighbourhood of each point outside $U_j$, because $\operatorname{supp}\phi_j\subseteq U_j$ is closed. Hence extension by zero is smooth on all of $M$. [step 1.1, construct]

3.1 If $p\ne q$, choose $j$ with $p\in V_j$. If $B_j(p)=B_j(q)$, then $\phi_j(p)=1$, hence $\phi_j(q)=1$, so both points lie in $U_j$. Equality of the last $n$ coordinates of $B_j$ then gives $x_j(p)=x_j(q)$, contradicting the injectivity of the chart map. Therefore some block separates $p$ and $q$. [step 1.1, step 2.1, algebra]

4.1 Fix $p\in M$ and choose $j$ with $p\in V_j$. On $V_j$ one has $\phi_j\equiv1$, so the last $n$ coordinates of $B_j$ are exactly the chart coordinates $x_j^1,\dots,x_j^n$. Their differential is an isomorphism at $p$, so this single block already detects every nonzero tangent vector at $p$. Thus the family $(B_j)$ separates tangent vectors as claimed. [step 1.1, algebra] ∎
