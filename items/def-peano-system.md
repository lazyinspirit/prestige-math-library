---
id: def-peano-system
kind: definition
title: "Peano system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-subset-and-proper-subset]
aliases: [peano-axioms, def-peano-axioms]
landmark: true
short: "$(N,0,\\sigma)$"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "T. Tao, Analysis I, 3rd ed., §2.1 (Peano axioms)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

A **Peano system** is a triple $(N, 0, \sigma)$ consisting of a set $N$, a
distinguished element $0 \in N$, and a **successor function**
$\sigma : N \to N$ ([[def-function]]), satisfying the three **Peano axioms**:

- **(P1) Zero is not a successor.** For every $n \in N$, $\sigma(n) \neq 0$.
- **(P2) Successor is injective.** For all $m, n \in N$, if $\sigma(m) = \sigma(n)$
  then $m = n$.
- **(P3) Induction.** For every subset $S \subseteq N$
  ([[def-subset-and-proper-subset]]), if $0 \in S$ and
  $\sigma(n) \in S$ whenever $n \in S$, then $S = N$.

The elements of $N$ are the **natural numbers** of the system. We abbreviate
$1 := \sigma(0)$, $2 := \sigma(1)$, $3 := \sigma(2)$, and so on.

## Remarks

Axiom (P3), the induction axiom, is the load-bearing one: it says $N$ has **no
proper subset** that contains $0$ and is closed under $\sigma$, so every element
is reached from $0$ by finitely many successors. It is what makes definition by
recursion and proof by induction legitimate ([[thm-induction-principle]],
[[thm-recursion]]).

This is a **structural** definition: it does not say what the natural numbers
*are*, only which laws they obey. Two questions are therefore separate and both
require proof: that a Peano system **exists** (a model built inside set theory,
[[thm-omega-is-peano-system]], from the von Neumann naturals
[[def-natural-numbers]]), and that it is **unique** up to a unique isomorphism
([[thm-peano-categoricity]]). Together these justify speaking of *the* natural
numbers $\mathbb{N}$.

We use the modern $0$-based convention ($0 \in N$). Peano's original postulates
started from $1$; the choice is immaterial, and starting at $0$ matches the
set-theoretic construction, where $0 = \varnothing$.
