---
id: def-multitape-and-nondeterministic-machines
kind: definition
title: "Multitape and nondeterministic Turing machine variants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-deterministic-one-tape-turing-machine
  - def-finite-cardinality
justified_by: []
verification:
  precheck: n/a
  audited: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
---

## Definition

Fix finite alphabets $\Sigma\subseteq\Gamma\setminus\{\sqcup\}$ with
$\sqcup\in\Gamma$, and a finite state set $Q$ with distinct states
$q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}\in Q$.

For an integer $k\ge 1$, a **deterministic $k$-tape Turing machine** has the same finite control data as
the one-tape model, but carries $k$ right-infinite tapes and $k$ head
positions. Its transition function has the form
$$ \delta_k:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma^k\to Q\times\Gamma^k\times\{L,R\}^k. $$
So one step reads one symbol from each tape, writes one symbol on each tape,
and moves each head left or right.

A **nondeterministic one-tape Turing machine** has the same data
$(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}})$ as the
deterministic model, but replaces the transition function by a finite-valued
transition map
$$ \Delta:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\to \mathcal P_{\mathrm{fin}}(Q\times\Gamma\times\{L,R\}), $$
where each $\Delta(q,a)$ is a finite set of allowed next instructions.

## Remarks

- This page only fixes the variant models themselves. The equivalence and
  simulation theorems relating them to the basic one-tape model come later.

- In the nondeterministic case, more than one next instruction may be available
  from the same state-symbol pair; acceptance is therefore defined by existence
  of an accepting branch.
