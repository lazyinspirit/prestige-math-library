---
id: def-interactive-proof-transcript-round-and-strategy
kind: definition
title: "Interactive-proof transcripts, rounds, and prover strategies"
status: draft
origin: session
deps: [def-probabilistic-polynomial-time-machine]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §8.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

An **interactive protocol** on input $x$ is an alternating finite exchange
between a probabilistic polynomial-time verifier $V$
([[def-probabilistic-polynomial-time-machine]]) and a prover $P$. A round
consists of one verifier message and one prover message; the verifier uses at
most polynomially many rounds, communicated bits, and random bits in $|x|$.

A **public transcript** is exactly the sequence of messages exchanged so far,
together with any random bits that the verifier has revealed. The verifier's
unrevealed random bits and private work-tape state belong to its **private
history**, not to the public transcript. A prover strategy is an arbitrary
function assigning a legal next message to every public transcript at a prover
turn; it need not be computable or efficient. Consequently two verifier
histories that give the prover the same public view must receive the same
prover response.
