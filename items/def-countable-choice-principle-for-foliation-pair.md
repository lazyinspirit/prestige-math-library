---
id: def-countable-choice-principle-for-foliation-pair
kind: definition
title: "The countable-choice principle used in the foliation pair"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-function, def-countable-choice]
justified_by: [lem-countable-choice-sequence-and-product-formulations-are-equivalent]
aliases: []
landmark: false
short: "$\\mathrm{AC}_\\omega$ (foliation pair)"
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
dependency_level: 0
---

## Definition

The **countable choice principle** used throughout this pair, written
$\mathrm{AC}_\omega$, is the assertion:

> For every sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets there is a
> function $c$ with domain $\mathbb N$ such that $c(n)\in A_n$ for every
> $n\in\mathbb N$.

Here "sequence" means a function on $\mathbb N$ ([[def-function]]). We call
the displayed selector $c$ an **indexed choice function** for the sequence.
Its domain is the index set $\mathbb N$, whereas a choice function in
[[def-choice-function]] has as domain the family of sets themselves. These
notions must be distinguished when factors repeat. A family choice function
$g$ on $\{A_n:n\in\mathbb N\}$ gives an indexed selector by $c(n)=g(A_n)$;
the equivalence of the two existence assertions is explained in
[[def-countable-choice]].

This is the sequence formulation of countable choice. The equivalent
nonempty-product formulation, that $\prod_{n\in\mathbb N}A_n$ is nonempty for
every sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets, is verified in
[[lem-countable-choice-sequence-and-product-formulations-are-equivalent]]; that
lemma is recorded as the well-definedness certificate of the present
definition.

In this pair $\mathrm{AC}_\omega$ is a stated hypothesis of the foliation
theorems and of the items whose proof selects countably many plaque data. It is
not assumed where a proof does not use it, and the items that consume it state
the hypothesis explicitly.

This pair-local carrier is retained deliberately: it restates the published
[[def-countable-choice]] in exactly the sequence form consumed by the
foliation items, and the published definition supplies the same principle. The
retention and its cross-batch consequences are recorded in the Step-3 report
of this pair (finding F4).
