---
id: lem-adjacent-window-divided-difference-recurrence
kind: lemma
title: Adjacent-window divided-difference recurrence
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-distinct-node-divided-difference
  - lem-divided-difference-lagrange-formula-and-symmetry
  - def-natural-numbers
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, proof of Theorem 2
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Statement

Let $n\in\mathbb N$, $n\ge1$, and $d\in\mathbb N$ with $d<n$; let
$x_0<\cdots<x_n$, and let $x$ be distinct from these nodes. For every
$0\le i<n-d$, put
$$G_i:=f[x_i,\ldots,x_{i+d},x].$$
Then
$$G_i-G_{i+1} =-(x_{i+d+1}-x_i)f[x_i,\ldots,x_{i+d+1},x].$$

## Facts & Assumptions

**Given:** $n\in\mathbb N$, $n\ge1$, $d\in\mathbb N$ with $d<n$, ordered distinct real nodes $x_0,\ldots,x_n$, and an additional distinct point $x$.

[F1] [[def-distinct-node-divided-difference]]: the divided difference satisfies the recursive endpoint rule.

[F2] [[lem-divided-difference-lagrange-formula-and-symmetry]]: divided differences are symmetric in all listed nodes.

[F3] [[def-natural-numbers]]: $\mathbb N$ contains $0$ and is closed under successor, so $d+2\in\mathbb N$.

## Proof

1.1 Apply the recursive endpoint rule [F1] to the order-$(d+2)$ divided difference on the ordered endpoints $x_i,x_{i+d+1}$ and the intermediate list $x_{i+1},\ldots,x_{i+d},x$. Symmetry [F2] identifies its two numerator terms as $G_{i+1}$ and $G_i$, respectively, so $$f[x_i,\ldots,x_{i+d+1},x] =\frac{G_{i+1}-G_i}{x_{i+d+1}-x_i}.$$ [F1, F2, F3, algebra]

2.1 The denominator in step 1.1 is positive because the nodes are strictly ordered. Rearranging that identity gives the stated identity. [given, step 1.1, algebra] ∎

