---
id: ex-height-zero-not-preperiodic-over-infinite-constants
kind: example
title: "A height-zero non-preperiodic point over infinite constants"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-one-variable-function-field-dynamical-setting
  - def-polarized-endomorphism-of-projective-variety
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§4.3 and §5.2"
verification: {}
proof_strategy: direct
---

## Example

Let $k=\overline{\mathbb Q}$, let $K=k(t)$, and give $\mathbb P^1(K)$ the function-field height $h([p:q])=\max(\deg p,\deg q)$ for coprime $p,q\in k[t]$, with $\deg0=-\infty$. Consider $f(z)=z^2$, polarized by $\mathcal O(1)$ with weight $2$, and the point $P=2\in\mathbb P^1(K)$. Its canonical height $\widehat h_f(P)=\lim_{m\to\infty}2^{-m}h(f^m(P))$ is zero, but $P$ is not preperiodic: its forward orbit consists of the distinct constants $2,2^2,2^4,2^8,\ldots$. A point is preperiodic when its forward orbit is finite.

## Example references

[[def-one-variable-function-field-dynamical-setting]]

[[def-polarized-endomorphism-of-projective-variety]]

## Facts & Assumptions

**Given:** The field $k=\overline{\mathbb Q}$; $K=k(t)$; the degree height on $\mathbb P^1(K)$ specified in the Example; $f(z)=z^2$; and $P=2$.

[F1] The function-field height of a constant point $[c:1]$, $c\in k$, is $0$ directly from the degree-height formula in the Example.

[F2] The polynomial map $z\mapsto z^2$ is polarized by $\mathcal O(1)$ with weight $2$. ([[def-polarized-endomorphism-of-projective-variety]])

## Verification

1.1 For every $m\ge0$, $f^m(P)=2^{2^m}$ is a constant in $k$, so [F1] gives $h(f^m(P))=0$. Therefore every term $2^{-m}h(f^m(P))$ is zero and the canonical-height limit equals zero. [given, F1, F2, algebra]

2.1 Since $k$ has characteristic zero and $2^{2^m}$ strictly increases as a positive integer with $m$, the iterates are pairwise distinct. The forward orbit is infinite, so $P$ is not preperiodic under the stated definition. [given, step 1.1, algebra] ∎
