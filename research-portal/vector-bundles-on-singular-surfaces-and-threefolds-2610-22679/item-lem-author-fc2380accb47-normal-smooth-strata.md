---
title: Normal affine threefolds have controlled nonsmooth strata
status: draft
research_item: lem-author-fc2380accb47-normal-smooth-strata
dependency_level: 1
---

PDF p. 15: Theorem6.7: rank-three Bertini functional

## Prerequisites

- [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)

## Statement
Let $k$ be algebraically closed and let $X$ be a normal affine finite-type $k$-scheme of dimension at most three. It has finitely many open-and-closed integral normal components. Let $X_3$ be the union of its three-dimensional components, $W=(X_3)_{\mathrm{sm}/k}$, and $D=X\setminus W$ with reduced structure. Then $W$ is smooth of pure dimension three and $D$ is closed with $\dim D\leq2$. On $X_3$ its nonsmooth locus has dimension at most one. If $X$ is pure three-dimensional, $D$ is exactly its singular locus and has dimension at most one. This formulation also handles a definition of threefold meaning merely dimension three.

## Facts & Assumptions
**Given:** The field and scheme above; the empty stratum is allowed.

**Goal:** Isolate a smooth three-dimensional locus and a closed avoidance locus of dimension less than the rank three.

[F1] [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input) supplies finite clopen normal components, normality implying regularity in codimension one, and equality of smooth and regular loci for reduced finite-type schemes over a perfect field.

[F2] [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input) supplies finite-type dimension and codimension formulas.

## Proof
1.1 The scheme is Noetherian. By [F1] its irreducible components are disjoint open-and-closed integral normal schemes, and there are finitely many because $X$ is quasi-compact. Their union $X_3$ is therefore clopen. The other components have dimension at most two. [F1, given]

2.1 An algebraically closed field is perfect. On each three-dimensional component, [F1] identifies smoothness over $k$ with regularity and makes the smooth locus open. The nonsmooth locus has no points of codimension zero or one, since normality gives $(R_1)$. By [F2] every irreducible closed subset of that nonsmooth locus has dimension at most $3-2=1$. Hence it is closed of dimension at most one. Combining it with the other clopen components proves that $D$ is closed of dimension at most two. Removing it leaves the smooth pure-dimensional locus $W$. In the pure-dimensional case there are no other components, giving the sharper bound. [F1, F2, step 1.1] ∎
