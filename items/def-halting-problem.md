---
id: def-halting-problem
kind: definition
title: "The halting problem $HALT_{TM}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-turing-machine-acceptance-problem
  - def-effective-encoding-of-turing-machines
  - lem-finite-tuples-admit-effective-prefix-free-encodings
  - def-halting-computation-and-divergence
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "Stan Nelson, Computability: Undecidable Problems"
      url: "https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html"
---

## Definition

Use the same pairing convention $\langle x,y\rangle$ and input-word code
$\widehat w$ as in [[def-turing-machine-acceptance-problem]]. The
**halting problem** is the language
$$ HALT_{TM}:=\bigl\{\langle\ulcorner M\urcorner,\widehat w\rangle : M \text{ is a coded deterministic one-tape Turing machine and } M \text{ halts on } w\bigr\}. $$

Equivalently, $\langle\ulcorner M\urcorner,\widehat w\rangle\in HALT_{TM}$ when
the computation of $M$ on $w$ has either an accepting or a rejecting halting
history in the sense of [[def-halting-computation-and-divergence]].

## Remarks

- The distinction between $HALT_{TM}$ and $A_{TM}$ is exactly the distinction
  between halting and accepting.

- Because rejection counts as halting, one always has $A_{TM}\subseteq HALT_{TM}$.
