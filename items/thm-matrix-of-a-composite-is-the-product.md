---
id: thm-matrix-of-a-composite-is-the-product
kind: theorem
title: '$[S\circ T]_{\mathcal B}^{\mathcal D}=[S]_{\mathcal C}^{\mathcal D}[T]_{\mathcal B}^{\mathcal C}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-composition-and-identity-linear-maps, thm-coordinate-action-of-a-linear-map,
       thm-matrix-representation-is-a-vector-space-isomorphism,
       thm-matrix-multiplication-laws]
justified_by: []
aliases: []
landmark: true
short: 'Composition becomes matrix multiplication'
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C, Definition 3.43 and Theorem 3.81'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, Theorem 35'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

Let $T:U\to V$ and $S:V\to W$ be linear, with ordered bases $\mathcal B$ of
$U$, $\mathcal C$ of $V$, and $\mathcal D$ of $W$. Then

$$[S\circ T]_{\mathcal B}^{\mathcal D}=[S]_{\mathcal C}^{\mathcal D}[T]_{\mathcal B}^{\mathcal C}.$$

## Facts & Assumptions

**Given:** The composable linear maps and ordered bases in the Statement, and a vector $u\in U$.

[L1] A composite of linear maps is linear ([[lem-composition-and-identity-linear-maps]]).

[L2] Coordinate action gives $[R(x)]_{\mathcal Y}=[R]_{\mathcal X}^{\mathcal Y}[x]_{\mathcal X}$ ([[thm-coordinate-action-of-a-linear-map]]).

[L3] Matrix multiplication is associative whenever the shapes are compatible ([[thm-matrix-multiplication-laws]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to $T$ and then to $S$: $[S(T(u))]_{\mathcal D}=[S]_{\mathcal C}^{\mathcal D}[T(u)]_{\mathcal C}=[S]_{\mathcal C}^{\mathcal D}[T]_{\mathcal B}^{\mathcal C}[u]_{\mathcal B}$. [given, L1, L2]

2.1 Associativity from [L3] rewrites step 1.1 as $[S(T(u))]_{\mathcal D}=([S]_{\mathcal C}^{\mathcal D}[T]_{\mathcal B}^{\mathcal C})[u]_{\mathcal B}$ for every $u$. [step 1.1, L2, L3]

3.1 Evaluating at each vector of $\mathcal B$ makes $[u]_{\mathcal B}$ a standard coordinate column, so the columns of $[S\circ T]_{\mathcal B}^{\mathcal D}$ equal those of the displayed product. Therefore the matrices are equal. [step 2.1, L1, L2, L3] ∎
