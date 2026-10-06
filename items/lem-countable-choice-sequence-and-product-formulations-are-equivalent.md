---
id: lem-countable-choice-sequence-and-product-formulations-are-equivalent
kind: lemma
title: "Countable choice is equivalent to nonempty countable products"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice-principle-for-foliation-pair, def-product-of-an-indexed-family, def-choice-function, def-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
      locator: "§56.2 (products and choice functions)"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
dependency_level: 1
---

## Statement

For every sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets, there exists a
indexed choice function $c$ with domain $\mathbb N$ and $c(n)\in A_n$ for every
$n\in\mathbb N$ if and only if the product $\prod_{n\in\mathbb N}A_n$ is
nonempty. Thus the sequence formulation of
[[def-countable-choice-principle-for-foliation-pair]] and the nonempty-product
formulation of the same principle are equivalent.

## Facts & Assumptions

**Given:** A sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets.

[F1] The countable choice principle $\mathrm{AC}_\omega$ for this pair states that every sequence of nonempty sets admits a function $c$ with domain $\mathbb N$ and $c(n)\in A_n$ for all $n$ ([[def-countable-choice-principle-for-foliation-pair]]).

[F2] The product of an indexed family $(A_i)_{i\in I}$ is the set of functions $f$ with domain $I$ such that $f(i)\in A_i$ for every $i$; in particular an element of $\prod_{n\in\mathbb N}A_n$ is a function with domain $\mathbb N$ taking its value at $n$ inside $A_n$ ([[def-product-of-an-indexed-family]]).

[F3] A sequence indexed by $\mathbb N$ is a function on $\mathbb N$, and an indexed choice function for $(A_n)$ has domain $\mathbb N$ and selects an element of $A_n$ at $n$; this differs from a family choice function, whose domain is the set of factors ([[def-function]], [[def-choice-function]]).

## Proof

**Proof technique:** direct.

1.1 (Forward direction.) Assume there is an indexed choice function $c$ with $c(n)\in A_n$ for every $n$ [F1]. Then $c$ is a function with domain $\mathbb N$ whose value at each $n$ lies in $A_n$ [F3], so by the defining description of the product $c\in\prod_{n\in\mathbb N}A_n$ [F2]. In particular the product is nonempty. [F1, F2, F3]

1.2 (Reverse direction.) Assume the product $\prod_{n\in\mathbb N}A_n$ is nonempty and choose an element $x$ of it; this is one existential instantiation. By [F2], $x$ is a function with domain $\mathbb N$ and $x(n)\in A_n$ for every $n$, that is, a choice function for the sequence $(A_n)_{n\in\mathbb N}$ in the sense of [F1]. Hence a choice function with $c(n)\in A_n$ for all $n$ exists. [F1, F2]

2.1 The two directions identify the same objects: a function with domain $\mathbb N$ whose value at $n$ belongs to $A_n$ is at once the indexed choice function of the sequence formulation and the element of the product of the product formulation. Hence the sequence formulation and the nonempty-product formulation are equivalent for every sequence of nonempty sets. [step 1.1, step 1.2] ∎
