---
id: def-p
kind: definition
title: "The class P"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-dtime-ntime-dspace-and-nspace
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

The class **P** is
$$ P:=\bigcup_{k\ge 1}\operatorname{DTIME}(n^k). $$

Thus a language belongs to $P$ exactly when some deterministic Turing machine
decides it in time bounded by a polynomial in the input length.

## Remarks

- The exponent $k$ may depend on the language, but it is fixed for the chosen
  decider.

- On this page, the underlying machine model is the deterministic multitape
  model from [[def-dtime-ntime-dspace-and-nspace]].
