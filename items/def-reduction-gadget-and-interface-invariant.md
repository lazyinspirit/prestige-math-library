---
id: def-reduction-gadget-and-interface-invariant
kind: definition
title: "Reduction gadgets and interface invariants"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-polynomial-time-many-one-reduction]
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Luca Trevisan and Fabrizio Iozzi, 30540 Computer Science 2 course page"
      url: "https://lucatrevisan.github.io/30540/index.html"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let source and target languages $A,B$ be equipped with explicit witness
relations $R_A(x,w)$ and $R_B(y,z)$, so that membership means existence of a
corresponding witness. Fix a proposed polynomial-time map $f$ between their
ambient string spaces in the sense of
[[def-polynomial-time-many-one-reduction]].

A **reduction gadget** is a bounded local piece of $f(x)$ together
with a specified way that candidate witnesses may enter, exit, or label its
boundary. An **interface invariant** is the condition imposed on those
boundary data so that local choices from neighbouring gadgets are compatible
with one global target witness $z$ satisfying $R_B(f(x),z)$.

On this page, a gadget proof is regarded as complete only after all of the
following have been established.

1. A total algorithm constructs the target instance from the source instance in
   polynomial time.
2. The target size is polynomially bounded in the source size.
3. Every source witness $w$ with $R_A(x,w)$ induces target choices satisfying each gadget's local
   constraints and the interface invariants.
4. Every global target witness $z$ with $R_B(f(x),z)$ projects back to a source witness because the
   interface invariants rule out inconsistent local choices.

The gadget language is therefore bookkeeping for the two directions of the iff
condition in a many-one reduction, not a substitute for that condition.
