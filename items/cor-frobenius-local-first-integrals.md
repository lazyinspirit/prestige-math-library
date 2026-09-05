---
id: cor-frobenius-local-first-integrals
kind: corollary
title: "Frobenius gives local first integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-frobenius-local-coordinate-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\mathcal D$ be an involutive rank-$k$ distribution on an $n$-manifold $M$.
Then near every point there is a submersion
$F = (f^{k+1},\dots,f^n)$ onto an open set of $\mathbb R^{n-k}$ such that

$$ \mathcal D = \ker dF. $$

Equivalently, the functions $f^{k+1},\dots,f^n$ are local first integrals for
$\mathcal D$.

## Facts & Assumptions

**Given:** An involutive rank-$k$ distribution $\mathcal D$ and a point
$p \in M$.

[A1] Choose Frobenius coordinates around $p$.

## Proof

**Proof technique:** direct.

1.1 In Frobenius coordinates $(x^1,\dots,x^n)$, the distribution is spanned by [given]
$\partial_{x^1},\dots,\partial_{x^k}$. Define
$$F(x^1,\dots,x^n) := (x^{k+1},\dots,x^n).$$
Its differential has rank $n-k$, so $F$ is a submersion. [given, construct]

1.2 A tangent vector lies in $\ker dF$ exactly when its last $n-k$ coordinate [given]
components vanish, so precisely when it is a linear combination of
$\partial_{x^1},\dots,\partial_{x^k}$. Hence $\ker dF = \mathcal D$.
[given, algebra]

1.3 Therefore every involutive distribution is locally the common kernel of [given]
$n-k$ smooth first integrals. [given] ∎
