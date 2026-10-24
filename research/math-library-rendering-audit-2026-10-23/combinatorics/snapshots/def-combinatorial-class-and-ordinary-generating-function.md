---
id: def-combinatorial-class-and-ordinary-generating-function
kind: definition
title: "Combinatorial classes, counting sequences and ordinary generating functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, def-formal-power-series-and-coefficient-extraction, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
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

## Definition

A **combinatorial class** is a pair $(\mathcal{A}, |\cdot|)$ consisting of a set
$\mathcal{A}$ and a size map $|\cdot| : \mathcal{A} \to \mathbb{N}$ such that,
for every $n \in \mathbb{N}$, the level

$$\mathcal{A}_n := \{a \in \mathcal{A} : |a| = n\}$$

is finite ([[def-finite-cardinality]]).

The **counting sequence** of $\mathcal{A}$ is

$$a_n := |\mathcal{A}_n| \qquad (n \in \mathbb{N}),$$

Viewing each natural coefficient $a_n$ as its canonical integer by
[[lem-nat-embeds-int]], its **ordinary generating function** is the formal power
series

$$A(x) := \sum_{n \ge 0} a_n x^n\in\mathbb Z\llbracket x\rrbracket$$

in the sense of [[def-formal-power-series-and-coefficient-extraction]].

An **isomorphism of combinatorial classes** $\mathcal{A} \to \mathcal{B}$ is a
bijection $f : \mathcal{A} \to \mathcal{B}$ such that $|f(a)| = |a|$ for every
$a \in \mathcal{A}$. Such a bijection identifies each level $\mathcal{A}_n$ with
the corresponding level $\mathcal{B}_n$, so isomorphic classes have the same
counting sequence and the same ordinary generating function.
