---
id: cor-infinite-ramsey-for-dedekind-infinite-sets
kind: corollary
title: "Infinite Ramsey holds for every set equipped with an injection from $\\mathbb N$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-infinite-ramsey-on-the-naturals, def-ramsey-colouring-and-arrow-notation, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement

Let $X$ be a set equipped with an injection $j:\mathbb N\to X$. For every positive $k$, every finite colouring of $[X]^k$ has an infinite monochromatic subset contained in $j[\mathbb N]$. The terms injection, equinumerous and monochromatic are those of [[def-injection-surjection-bijection]], [[def-equinumerous]] and [[def-ramsey-colouring-and-arrow-notation]].

## Facts & Assumptions

**Given:** An injection $j:\mathbb N\to X$ and a finite colouring $c:[X]^k\to C$.

[L1] Every finite colouring of $[\mathbb N]^k$ has an infinite monochromatic set, in ZF ([[thm-infinite-ramsey-on-the-naturals]]).

[F1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$ ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Define a colouring of $[\mathbb N]^k$ by $A\mapsto c(j[A])$. Injectivity in [F1] makes $j[A]$ a $k$-element set, so [L1] gives an infinite homogeneous $H\subseteq\mathbb N$. [L1, F1]

2.1 By [F1], the restriction $j|_H$ is a bijection from $H$ to $j[H]$, so $j[H]$ is infinite. The pullback definition shows every $k$-subset of $j[H]$ has the same $c$-colour. [step 1.1, F1] ∎
