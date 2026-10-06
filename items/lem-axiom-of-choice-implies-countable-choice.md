---
id: lem-axiom-of-choice-implies-countable-choice
kind: lemma
title: "The Axiom of Choice implies countable choice"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, def-countable-choice-principle-for-foliation-pair, def-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
      locator: "§56.2 (the Axiom of Choice and its countable restriction)"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
dependency_level: 1
---

## Statement

Assume the full Axiom of Choice. For every sequence
$(A_n)_{n\in\mathbb N}$ of nonempty sets there is a sequence
$(a_n)_{n\in\mathbb N}$ with $a_n\in A_n$ for every $n\in\mathbb N$. Thus the
Axiom of Choice implies the pair-local countable choice principle
$\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]).

## Facts & Assumptions

**Given:** The Axiom of Choice and a sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets.

[F1] The Axiom of Choice states that every family of nonempty sets has a choice function: there is a function $g$ with domain $\mathcal F$ such that $g(S)\in S$ for all $S\in\mathcal F$ ([[def-axiom-of-choice]]).

[F2] The pair-local countable choice principle $\mathrm{AC}_\omega$ states that for every sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets there is a function $c$ with domain $\mathbb N$ such that $c(n)\in A_n$ for every $n$ ([[def-countable-choice-principle-for-foliation-pair]]).

[F3] A sequence indexed by $\mathbb N$ is a function on $\mathbb N$, and the composition of functions is a function with the appropriate domains ([[def-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal F:=\{A_n:n\in\mathbb N\}$ be the family of sets occurring in the sequence; every member of $\mathcal F$ is nonempty, so by the Axiom of Choice there is a choice function $g$ with domain $\mathcal F$ and $g(S)\in S$ for all $S\in\mathcal F$ [F1]. Define $c(n):=g(A_n)$ for $n\in\mathbb N$. This is a composite of the function $n\mapsto A_n$ with $g$, hence a function with domain $\mathbb N$ [F3]. [F1, F3]

2.1 For every $n$ one has $c(n)=g(A_n)\in A_n$, since $A_n\in\mathcal F$ and $g$ is a choice function on $\mathcal F$. Thus $(c(n))_{n\in\mathbb N}$ is a sequence with $c(n)\in A_n$ for every $n$, which is exactly the witness required by $\mathrm{AC}_\omega$; the sequence of nonempty sets was arbitrary, so the Axiom of Choice implies the countable choice principle. [F2, step 1.1] ∎
