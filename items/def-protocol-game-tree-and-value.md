---
id: def-protocol-game-tree-and-value
kind: definition
title: "Protocol game trees and their values"
status: draft
origin: session
deps: [def-interactive-proof-transcript-round-and-strategy]
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
    - title: "Arora and Barak, §8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

For a fixed input and finite protocol
([[def-interactive-proof-transcript-round-and-strategy]]), its
**public-information game tree** has one information state for each public
transcript, together with the conditional distribution of verifier private
histories compatible with that transcript. At a prover state its value is the
maximum, over one legal response based only on that public transcript, of the
resulting child value. At a verifier state its value is the expectation over
the verifier's next random transition; equally likely private random strings
are counted with multiplicity even when they produce the same public message.
At termination its value is the conditional probability that the verifier
accepts. Backward evaluation is well-defined because the protocol is finite.
The root value is the maximum acceptance probability over actual prover
strategies. In particular, maximization never occurs separately on two hidden
histories having the same public transcript.
