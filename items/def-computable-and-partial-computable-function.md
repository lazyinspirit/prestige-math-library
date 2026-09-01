---
id: def-computable-and-partial-computable-function
kind: definition
title: "Computable and partial computable functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-function-computed-by-a-machine]
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Definition

Fix effective encodings of sets $X$ and $Y$.

A function
$$ f:D\to Y,\qquad D\subseteq X, $$
is **partial computable** when some deterministic Turing machine computes it in
the sense of [[def-partial-function-computed-by-a-machine]].

If $D=X$, so the machine halts with the correct output on every input in $X$,
then $f$ is **computable** or **total computable**.

## Remarks

- "Computable" is the total case of "partial computable"; the distinction is
  whether divergence is allowed outside a proper domain.

- The encoded machine works on binary words, but the represented function lives
  on the underlying sets $X$ and $Y$ through the chosen encodings.
