---
id: def-np-by-verifiers
kind: definition
title: "The class NP via polynomial-time verifiers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-polynomially-balanced-verifier
  - def-p
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
---

## Definition

The class **NP** is the set of languages
$$ L\subseteq\{0,1\}^* $$
that admit a polynomial-time verifier with polynomially bounded certificates in
the sense of [[def-polynomially-balanced-verifier]].

## Remarks

- This is the verifier definition of NP. The equivalent nondeterministic
  machine definition is proved next.

- Every statement on this page about complements of NP-languages is taken
  inside the same ambient space $\{0,1\}^*$.
