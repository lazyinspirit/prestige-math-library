---
id: def-read-only-input-logspace-machine
kind: definition
title: "A read-only-input logarithmic-space machine"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dtime-ntime-dspace-and-nspace]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.1 and §3.4.1"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

A **read-only-input machine** has one input tape containing $x$, whose head may
move in either direction but whose cells are never changed, and finitely many
read/write work tapes. Its work space on inputs of length $n$ is the number of
visited work-tape cells, not the input cells. A deterministic machine decides
when it halts on every input; a nondeterministic machine decides when every
branch halts and some branch accepts exactly the inputs in the language.

It is a **logspace machine** when its work space is
$O(\log_2(n+2))$. The $n+2$ convention also covers the empty input. This is a
work-space convention, distinct from the all-tapes convention in
[[def-dtime-ntime-dspace-and-nspace]].
