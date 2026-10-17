---
id: thm-symbolic-sum-and-product-rules
kind: theorem
title: "Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-disjoint-union-and-cartesian-product-of-combinatorial-classes, thm-sum-rule, thm-product-rule, def-formal-power-series-and-coefficient-extraction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ and $\mathcal{B}$ be combinatorial classes with ordinary
generating functions

$$A(x) = \sum_{n \ge 0} a_n x^n, \qquad B(x) = \sum_{n \ge 0} b_n x^n.$$

Then the disjoint union and Cartesian product of
[[def-disjoint-union-and-cartesian-product-of-combinatorial-classes]] satisfy

$$\operatorname{OGF}(\mathcal{A} + \mathcal{B}) = A(x) + B(x),$$

and

$$\operatorname{OGF}(\mathcal{A} \times \mathcal{B}) = A(x)B(x).$$

## Facts & Assumptions

**Given:** Combinatorial classes $\mathcal{A}$ and $\mathcal{B}$ with counting sequences $(a_n)$ and $(b_n)$ and ordinary generating functions $A(x)$ and $B(x)$.

[L1] If $I$ is a finite set and $(A_i)_{i \in I}$ is a family of finite sets that are pairwise disjoint, then $\bigcup_{i \in I} A_i$ is finite and $\big|\bigcup_{i \in I} A_i\big| = \sum_{i \in I}|A_i|$ ([[thm-sum-rule]]).

[L2] If $A$ and $B$ are finite then $A \times B$ is finite and $|A \times B| = |A||B|$ ([[thm-product-rule]]).

[L3] For formal power series, $[x^n](FG) = \sum_{i=0}^{n}[x^i]F[x^{n-i}]G$ ([[def-formal-power-series-and-coefficient-extraction]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$, the size-$n$ layer of $\mathcal{A} + \mathcal{B}$ is the disjoint union of the tagged finite sets $\mathcal{A}_n$ and $\mathcal{B}_n$, so it has cardinality $a_n + b_n$. [L1]

1.2 For each $n \in \mathbb{N}$, the size-$n$ layer of $\mathcal{A} \times \mathcal{B}$ is the disjoint union of the finite sets $\mathcal{A}_i \times \mathcal{B}_{n-i}$ for $0 \le i \le n$, so its cardinality is $\sum_{i=0}^{n} a_i b_{n-i}$. [L1, L2]

2.1 Step 1.1 says $[x^n]\operatorname{OGF}(\mathcal{A} + \mathcal{B}) = a_n+b_n = [x^n](A(x)+B(x))$, and step 1.2 together with [L3] says $[x^n]\operatorname{OGF}(\mathcal{A} \times \mathcal{B}) = \sum_{i=0}^{n} a_i b_{n-i} = [x^n](A(x)B(x))$. Equality of coefficients in every degree proves both displayed identities. [step 1.1, step 1.2, L3] ∎
