---
id: thm-temperley-lieb-type-a-path-space-tower-branching
kind: theorem
title: "The A_(ell-1) path-space tower branches by adjacent vertices"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§4.2, PDF pp. 31–32: the A_n Bratteli diagram and path-indexed Jones tower representations. The local proof below spells out the path-basis maps."
---

## Statement

Let $\ell\ge3$ and use the path sets, endpoint modules, matrix units, and maps $\iota_n$ of [[def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower]]. Then each $\iota_n:K_n\to K_{n+1}$ is a unital injective $*$-algebra homomorphism. For every endpoint $b$, the restriction of the natural $K_{n+1}$-module $V_{n+1,b}$ to $K_n$ is
$$
V_{n+1,b}\!\downarrow_{K_n}\cong\bigoplus_{\substack{0\le a\le\ell-2\\|a-b|=1}}V_{n,a},
$$
with each summand occurring once; vertices outside $\{0,\ldots,\ell-2\}$ contribute no summand.

## Facts & Assumptions

**Given:** $\ell\ge3$, the finite graph $A_{\ell-1}$, its length-$n$ path sets, and the matrix units and tower maps of [[def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower]].

[F1] $\mathsf P_{n,a}$ consists of the vertex sequences $(a_0,\ldots,a_n)$ starting at $0$, ending at $a$, and changing by one along every edge; $K_n$ is the direct sum of the endpoint matrix algebras, with units $E^{(n,a)}_{p,q}$. ([[def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower]])

[F2] The tower map is $\iota_n(E^{(n,a)}_{p,q})=\sum_{b\sim a}E^{(n+1,b)}_{pb,qb}$. ([[def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower]])

## Proof

**Given:** The data of [F1]–[F2].

1.1 For any path $(a_0,\ldots,a_n,b)$ ending at $b$, its penultimate vertex $a$ is uniquely determined and satisfies $a\sim b$; deleting $b$ gives a unique prefix in $\mathsf P_{n,a}$. Conversely appending $b$ to any path in $\mathsf P_{n,a}$ with $a\sim b$ gives a path ending at $b$. Hence the set of paths ending at $b$ is the disjoint union of the appended path sets $\{pb:p\in\mathsf P_{n,a}\}$ over all such $a$. The basis vectors therefore split as the asserted direct sum, and $E^{(n,a)}_{p,q}$ acts on each appended block as the same matrix unit while acting by zero on the other predecessor blocks. [F1, construct]

1.2 Take matrix units $X=E^{(n,a)}_{p,q}$ and $Y=E^{(n,c)}_{r,s}$. If $a\ne c$, then $XY=0$; in the product $\iota_n(X)\iota_n(Y)$ a nonzero matrix-unit product would require the middle path $qb$ to equal $rd$ for some $b\sim a$ and $d\sim c$, forcing both $q=r$ as length-$n$ paths and $a=c$, a contradiction. Thus the images multiply to zero. [F1, F2, algebra]

2.1 If $a=c$, then $XY=\mathbf1_{q=r}E^{(n,a)}_{p,s}$. On multiplying the two sums in [F2], the only nonzero terms have the same appended vertex $b$ and equal middle path $qb=rb$, which is equivalent to $q=r$. The product is consequently $\mathbf1_{q=r}\sum_{b\sim a}E^{(n+1,b)}_{pb,sb}=\iota_n(XY)$. Adjoints are preserved because $\iota_n((E_{p,q}^{(n,a)})^*)=\sum_{b\sim a}E_{qb,pb}^{(n+1,b)}=\iota_n(E_{p,q}^{(n,a)})^*$. Bilinearity proves multiplicativity and $*$-preservation on all of $K_n$. [F1, F2, step 1.2, algebra]

3.1 The identity of $K_n$ is $\sum_{a,p}E^{(n,a)}_{p,p}$. Its image is the sum of the diagonal units indexed by every one-step extension $pb$ of every length-$n$ path $p$; by step 1.1 each length-$(n+1)$ path occurs exactly once. This is the identity of $K_{n+1}$. For injectivity, every vertex $a$ has at least one neighbor in $A_{\ell-1}$, since $\ell\ge3$. For each source unit $E^{(n,a)}_{p,q}$ choose one neighbor $b$; the coordinate $E^{(n+1,b)}_{pb,qb}$ in its image determines the source unit uniquely by deleting the last vertex. Distinct source units therefore have disjoint image coordinates, so no nonzero linear combination maps to zero. Hence $\iota_n$ is a unital injective $*$-homomorphism and step 1.1 gives the multiplicity-one branching rule. [F1, F2, step 1.1, step 2.1, construct] ∎

## Remarks

This proves the branching of the abstract path-space tower. Identifying a particular positive-root Temperley–Lieb quotient and its Jones–Wenzl matrix units with this tower is a separate supplier check recorded in the batch evidence.
