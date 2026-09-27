---
id: prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
kind: proposition
title: "The image of a lower-dimensional $C^1$ manifold is null"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
       prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets,
       prop-a-countable-chart-cover-detects-manifold-null-sets,
       prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains,
       prop-countable-unions-and-subsets-of-manifold-null-sets-are-null,
       def-null-and-content-zero-in-rn, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (prop-the-image-of-a-lower-dimensional-c1-manifold-is-null). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $P^m$ and $N^n$ be smooth manifolds with $m<n$, and let $F:P\to N$ be a
$C^1$ map. Then $F(P)\subseteq N$ is a null subset of $N$.

## Facts & Assumptions

**Given:** Countable Choice and a $C^1$ map $F:P^m\to N^n$ with $m<n$.

[L1] An equidimensional $C^1$ map sends null sets to null sets ([[prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets]]).

[L2] A countable chart cover detects manifold nullity ([[prop-a-countable-chart-cover-detects-manifold-null-sets]]).

[L3] Every smooth manifold admits a countable smooth atlas with relatively compact domains ([[prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]]).

[L4] Countable unions and subsets of manifold null sets are null under Countable Choice ([[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]).

[F1] A Euclidean null set has arbitrarily small countable closed-cube covers ([[def-null-and-content-zero-in-rn]]).

## Proof
**Proof technique:** direct.

1.1 Under the stated Countable Choice, choose countable smooth atlases $\{(U_i,\varphi_i)\}$ on $P$ and $\{(V_j,\psi_j)\}$ on $N$ as in [L3]. The countable family of open sets $U_i\cap F^{-1}(V_j)$ covers $P$. It is enough to show that the image of each is null in $N$, then use [L4] for their union. [L3, L4, given]

2.1 Fix one open overlap $U=U_i\cap F^{-1}(V_j)$, write $\Omega=\varphi_i(U)\subseteq\mathbb R^m$, and let $(V_j,\psi_j)$ be its target chart. Define $$ \widetilde F:\Omega\times\mathbb R^{n-m}\to\mathbb R^n,\qquad \widetilde F(u,z):=(\psi_j\circ F\circ\varphi_i^{-1})(u). $$ The slice $\Omega\times\{0\}$ is Euclidean null: cover it by countably many bounded $m$-cubes times $\{0\}$; for each cube, finite $(n)$-cube covers of arbitrarily small total volume are obtained by choosing a sufficiently thin grid in the remaining $n-m\ge1$ coordinates, and [F1] combines these with geometric error budgets under Countable Choice. The map $\widetilde F$ is $C^1$. Thus [L1] makes $\widetilde F(\Omega\times\{0\})=\psi_j(F(U))$ Euclidean null. [F1, L1, step 1.1]

3.1 To check every target chart $V_k$, apply the same argument to the further open overlap $U\cap F^{-1}(V_k)$; its coordinate map has target $V_k$, so step 2.1 makes $\psi_k(F(U)\cap V_k)$ Euclidean null. The countable chart cover on $N$ detects $F(U)$ as null by [L2]. Finally [L4] makes the countable union $F(P)$ null. [L2, L4, step 1.1, step 2.1] ∎
