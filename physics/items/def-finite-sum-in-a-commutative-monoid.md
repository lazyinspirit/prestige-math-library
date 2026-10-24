---
id: def-finite-sum-in-a-commutative-monoid
kind: definition
title: "A finite sum in a commutative monoid indexed by an arbitrary finite set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-monoid-finite-product, thm-generalised-associativity, def-semigroup-and-monoid, def-finite-cardinality, def-injection-surjection-bijection, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Andrade–da Cruz, Finite products in commutative monoids"
      url: "https://arxiv.org/abs/2605.08089"
pipeline_run: null
---

## Definition

Let $(M,+,0)$ be a commutative monoid ([[def-semigroup-and-monoid]]), let $S$ be a finite set with $n:=|S|$ ([[def-finite-cardinality]]), and let $a:S\to M$. Choose a bijection $\phi:n\to S$ and define

$$\sum_{s\in S}a_s:=a_{\phi(0)}+a_{\phi(1)}+\cdots+a_{\phi(n-1)},$$

where the right side is the finite monoid product of [[def-monoid-finite-product]] written additively. In particular, the sum over the empty set is $0$.

This value is independent of the enumeration. If $\psi:n\to S$ is another bijection, then $\phi^{-1}\circ\psi$ is a permutation of $n$ ([[def-injection-surjection-bijection]]), and generalised commutativity gives

$$\sum_{k<n}a_{\psi(k)}=\sum_{k<n}a_{\phi(k)}$$

([[thm-generalised-associativity]]). Thus the displayed notation names one element of $M$ and does not select a preferred enumeration.

When $M$ is the additive monoid of $\mathbb R$ or of $\mathbb N$, this definition agrees with [[def-sum-over-a-finite-index-set]]: both enumerate $S$, apply the same finite recursion with identity $0$, and are independent of the enumeration.

## Remarks

The coefficient object is an arbitrary commutative monoid. This is stronger than the published real- and natural-valued definition and is the form needed for sums in a commutative ring.
