---
id: def-language-recognized-and-decided
kind: definition
title: "Languages recognized and decided by a Turing machine"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-halting-computation-and-divergence
  - def-language-over-an-alphabet
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Definition

Let $M$ be a deterministic one-tape Turing machine with input alphabet
$\Sigma$, and let $L\subseteq\Sigma^*$ be a language
([[def-language-over-an-alphabet]]).

We say that **$M$ recognizes $L$** if for every input word $w\in\Sigma^*$,
$$ w\in L \quad\Longleftrightarrow\quad M \text{ has an accepting computation on } w. $$

We say that **$M$ decides $L$** if $M$ recognizes $L$ and halts on every input
$w\in\Sigma^*$.

Equivalently, $M$ decides $L$ exactly when every input has either an accepting
or rejecting computation history and
$$ w\in L \iff M \text{ accepts } w,\qquad w\notin L \iff M \text{ rejects } w. $$

## Remarks

- A recognizer may diverge on words not in the language. Total halting is the
  extra condition that upgrades recognition to decision.

- The ambient alphabet $\Sigma$ matters: recognition and decidability are always
  statements about a subset of one fixed $\Sigma^*$.
