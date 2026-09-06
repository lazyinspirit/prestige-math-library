---
id: def-logspace-many-one-reduction
kind: definition
title: "Logspace many-one reduction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-read-only-input-logspace-machine]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 3.14"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

For languages $A,B\subseteq\Sigma^*$, write $A\leq_{\log}B$ if a deterministic
read-only-input logspace transducer computes a total function $f$ with
$$ x\in A\quad\Longleftrightarrow\quad f(x)\in B. $$
The transducer writes $f(x)$ once on a write-only output stream. Equivalently,
it may recompute a requested output position $f(x)_j$ in logarithmic work
space. Since the internal configuration has only polynomially many states and
the output stream is not readable, every halting such transducer has
polynomial output length: otherwise a repeated internal configuration would
repeat forever.
