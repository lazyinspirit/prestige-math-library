---
id: thm-hilbert-90-for-finite-galois-extension
kind: theorem
title: "Hilbert theorem 90 for a finite Galois extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-finite-galois-extension-and-galois-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Fields and Galois Theory, version 5.10, Chapter IV, §5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "Serge Lang, Algebra, Chapter VI, §2"
      url: "https://link.springer.com/book/10.1007/978-1-4612-0853-8"
verification: {}
---

## Statement

Let $L/K$ be a finite Galois extension with group $G$. If a function
$c:G\to L^\times$ satisfies
$$c(\sigma\tau)=c(\sigma)\,\sigma(c(\tau))\qquad(\sigma,\tau\in G),$$
then there is $b\in L^\times$ such that
$$c(\sigma)=\frac{\sigma(b)}{b}\qquad(\sigma\in G).$$

## Statement references

[[def-finite-galois-extension-and-galois-group]]

[J. S. Milne, *Fields and Galois Theory*, Chapter IV, Proposition 5.1](https://www.jmilne.org/math/Books/FT0.pdf)

## Facts & Assumptions

**Given:** A finite Galois extension $L/K$, its finite group $G$, and a
function $c$ satisfying the cocycle identity in the Statement.

[F1] The maps in $G$ are distinct $K$-automorphisms of $L$ and $G$ is finite.
([[def-finite-galois-extension-and-galois-group]])

## Proof

**Proof technique:** direct construction of a nonzero trace-like element.

**Given:** The data above.

1.1 Distinct field automorphisms are linearly independent as functions $L\to L$. Indeed, suppose a nonzero relation $\sum_{\sigma\in S}a_\sigma\sigma(x)=0$ for every $x\in L$ has support of minimal size. If $S$ has one element, evaluating at $x=1$ contradicts its nonzero coefficient. Otherwise choose distinct $\rho,\tau\in S$ and $y\in L$ with $\rho(y)\ne\tau(y)$. Subtract $\rho(y)$ times the relation at $x$ from the relation at $yx$. The $\rho$-term disappears, while the $\tau$-coefficient remains nonzero, contradicting minimality. [F1, given, algebra, choose]

2.1 The operator $T(x)=\sum_{\tau\in G}c(\tau)^{-1}\tau(x)$ is nonzero by step 1.1, so choose $x\in L$ with $b:=T(x)\ne0$. [F1, step 1.1, choose]

3.1 For $\sigma\in G$, reindexing $\tau$ as $u=\sigma\tau$ and using $c(u)=c(\sigma)\sigma(c(\tau))$ gives $\sigma(b)=\sum_{\tau\in G}\sigma(c(\tau))^{-1}\,\sigma\tau(x) =c(\sigma)\sum_{u\in G}c(u)^{-1}u(x)=c(\sigma)b.$ Since $b\ne0$, division by $b$ proves the Statement for every $\sigma$. [given, step 2.1, algebra] ∎