---
id: thm-vector-bundle-construction-from-a-smooth-cocycle
kind: theorem
title: "Construction of a vector bundle from a smooth cocycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-fibre-bundle-and-local-trivialization, def-vector-bundle-chart-and-transition-function, lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities, prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds, def-quotient-topology]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $M$ be a smooth manifold, let $(U_\alpha)_{\alpha\in A}$ be a supplied
countable open cover of $M$, let $r\in\mathbb N$, and let
$g_{\beta\alpha}:U_\alpha\cap U_\beta\to GL(r,\mathbb R)$ be smooth maps
satisfying the identities of [[lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities]].
Then the quotient of $\coprod_{\alpha\in A}(U_\alpha\times\mathbb R^r)$ by the
relation

$$ (p,v)_\alpha\sim (p,g_{\beta\alpha}(p)v)_\beta $$

is a smooth rank-$r$ vector bundle over $M$.

## Facts & Assumptions

**Given:** A smooth manifold $M$, a supplied countable open cover $(U_\alpha)$,
and a smooth $GL(r,\mathbb R)$-cocycle $g_{\beta\alpha}$ on the overlaps.

[L1] The transition functions satisfy the identity and cocycle laws on all
overlaps ([[lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities]]).

[L2] A countable disjoint union of fixed-dimensional smooth manifolds carries the
obvious smooth-manifold structure
([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]).

[F1] The quotient topology is the topology for which a set is open exactly when
its full preimage under the quotient map is open ([[def-quotient-topology]]).

## Proof

**Proof technique:** direct.

1.1 Let $X=\coprod_{\alpha\in A}(U_\alpha\times\mathbb R^r)$ and declare $(p,v)_\alpha\sim(q,w)_\beta$ when $p=q\in U_\alpha\cap U_\beta$ and $w=g_{\beta\alpha}(p)v$. By [L1], this relation is reflexive, symmetric, and transitive, so it is an equivalence relation on $X$. [L1, given, construct]

2.1 Let $E=X/{\sim}$ and write $q:X\to E$ for the quotient map. For each $\alpha$, define $\psi_\alpha:q(U_\alpha\times\mathbb R^r)\to U_\alpha\times\mathbb R^r$ by $\psi_\alpha([p,v]_\alpha)=(p,v)$. The cocycle relation shows that every class meeting $U_\alpha\times\mathbb R^r$ has a unique representative there, so $\psi_\alpha$ is bijective. Its domain is open because $q^{-1}(q(U_\alpha\times\mathbb R^r))$ is the union over $\beta$ of the open sets $\{(p,g_{\alpha\beta}(p)w)_\beta:p\in U_\alpha\cap U_\beta,\ w\in\mathbb R^r\}$, whence [F1] makes $\psi_\alpha$ a homeomorphism onto an open subset. [F1, L1, step 1.1]

3.1 On overlaps, $\psi_\beta\circ\psi_\alpha^{-1}(p,v)=(p,g_{\beta\alpha}(p)v)$, so the chart changes are smooth with smooth inverses. The projection $\pi([p,v]_\alpha)=p$ is well defined and in chart $\alpha$ is the product projection $U_\alpha\times\mathbb R^r\to U_\alpha$, while the fibre maps are linear by construction. Therefore the $\psi_\alpha$ form a smooth rank-$r$ vector-bundle atlas on $E\to M$. [L1, step 2.1, algebra]

4.1 Because the cover is countable and each chart image has a countable base, these bundle charts give $E$ a countable base. Hausdorffness is local in the charts when two classes are distinct over one base point, and over different base points it comes from Hausdorffness of $M$. Hence $E$ is a smooth manifold, and $\pi:E\to M$ is the required smooth vector bundle. [L2, step 2.1, step 3.1] ∎