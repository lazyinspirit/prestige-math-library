---
id: def-interactive-proof-transcript-round-and-strategy
kind: definition
title: "Interactive-proof transcripts, rounds, and prover strategies"
status: published
origin: session
deps: [def-multitape-and-nondeterministic-machines]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local verifier/transcript definition and prerequisite repair; not independent review"
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §8.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

An **interactive protocol** on input $x$ is an alternating finite exchange
between a probabilistic polynomial-time verifier $V$ and a prover $P$. Here $V$ is a deterministic multitape machine in the sense of [[def-multitape-and-nondeterministic-machines]], with communication tapes and an additional private read-only tape of random bits. There is one polynomial bound $p$ such that, on every input $x$, every random tape, and every sequence of prover replies, the verifier performs at most $p(|x|)$ computation steps and reads at most $p(|x|)$ random bits. Waiting for a reply does not charge the prover's computation time to $V$; replies violating the specified message-length or syntax bounds are rejected. The random tape can be taken to be uniformly distributed over $\{0,1\}^{p(|x|)}$, with unused bits ignored. A round
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
