---
id: def-deterministic-one-tape-turing-machine
kind: definition
title: "Deterministic one-tape Turing machines with designated accept and reject states"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-function
  - def-finite-cardinality
justified_by: []
verification:
  precheck: n/a
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://studylib.net/doc/28158899/turing-paper-1936"
---

## Definition

A **deterministic one-tape Turing machine with designated accept and reject
states** is a tuple
$$ M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta) $$
such that:

- $Q$ is a finite set of states.
- $\Sigma$ is a finite input alphabet.
- $\Gamma$ is a finite tape alphabet with $\Sigma\subseteq\Gamma\setminus\{\sqcup\}$.
- $\sqcup\in\Gamma$ is the blank symbol.
- $q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}\in Q$ are pairwise distinct.
- $\delta$ is a function
  $$ \delta:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\to Q\times\Gamma\times\{L,R\}. $$

Thus whenever the machine is in a nonhalting state $q$ and scans a symbol
$a\in\Gamma$, the value
$$ \delta(q,a)=(q',b,D) $$
specifies exactly one next state $q'$, exactly one symbol $b$ to write in the
currently scanned cell, and exactly one head move $D\in\{L,R\}$.

The intended tape is right-infinite and indexed by the natural numbers
([[def-computation-alphabet-and-word-convention]], [[def-function]]); the tape
contents, configurations, and one-step dynamics are fixed in the next items.

## Remarks

- The transition function is total on the nonhalting state-symbol pairs. The
  machine halts by entering one of the distinguished states
  $q_{\mathrm{acc}}$ or $q_{\mathrm{rej}}$, not by leaving $\delta$ undefined.

- This item fixes only the base deterministic one-tape model. Multitape and
  nondeterministic variants are introduced later on the same page.
