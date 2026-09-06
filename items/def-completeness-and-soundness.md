---
id: def-completeness-and-soundness
kind: definition
title: "Completeness and soundness of an interactive protocol"
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
    - title: "Arora and Barak, Definition 8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

For a language $L$, an interactive protocol has **$c$-completeness** when for every $x\in L$ an honest prover $P_h$ makes $V$ accept with probability at least $c$. It has **$s$-soundness** when for every $x\notin L$ and every prover strategy $P$, the acceptance probability is at most $s$. Probabilities are over $V$'s coins. Thus completeness has an existential honest strategy, while soundness has a universal cheating-strategy quantifier.
