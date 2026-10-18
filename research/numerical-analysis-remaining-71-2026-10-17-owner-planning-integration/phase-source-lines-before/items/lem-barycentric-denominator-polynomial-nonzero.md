---
id: lem-barycentric-denominator-polynomial-nonzero
kind: lemma
title: A barycentric denominator polynomial with nonzero weights is nonzero
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm for rational approximation, Section 2
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation, Section 9.2
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
---

## Statement

Let $k\ge1$, let $z_1,\ldots,z_k\in\mathbb C$ be distinct, and let
$w_1,\ldots,w_k\in\mathbb C$ be nonzero. Then the polynomial
$$
Q(z)=\sum_{j=1}^kw_j\prod_{\ell\ne j}(z-z_\ell)
$$
is not identically zero.

## Facts & Assumptions

**Given:** A positive integer $k$, distinct complex nodes $z_1,\ldots,z_k$, and nonzero complex weights $w_1,\ldots,w_k$.

## Proof

1.1 Fix an index $j\in\{1,\ldots,k\}$. At $z=z_j$, each summand with
index different from $j$ contains the factor $z_j-z_j=0$, so
$$
Q(z_j)=w_j\prod_{\ell\ne j}(z_j-z_\ell).
$$
This is the support-node evaluation of $Q$. [given, choose, algebra]

1.2 Every factor in the product in step 1.1 is nonzero because the nodes are
distinct, and $w_j\ne0$. Thus $Q(z_j)\ne0$; an identically zero polynomial
would vanish at $z_j$, so $Q$ is not identically zero. [given, step 1.1,
algebra] ∎
