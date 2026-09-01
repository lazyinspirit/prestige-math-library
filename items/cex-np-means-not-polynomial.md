---
id: cex-np-means-not-polynomial
kind: counterexample
title: "A regular parity language refutes 'NP means not polynomial'"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-np-means-not-polynomial, prop-p-is-contained-in-np-intersection-conp]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
---

## Statement refuted

The claim "NP means not polynomial-time solvable" is false. The even-length
language already gives a counterexample.

## Facts & Assumptions

**Given:** The language $E=\{x\in\{0,1\}^*: |x| \text{ is even}\}$.

[L1] Every language in $P$ also belongs to $NP$, by [[prop-p-is-contained-in-np-intersection-conp]].

[L2] The false slogan being refuted is the one recorded in [[fs-np-means-not-polynomial]].

## Counterexample

**Proof technique:** direct.

1.1 A one-pass parity scan decides $E$ in linear time, so $E\in P$. [given, construct]

2.1 By [L1], step 1.1 implies $E\in NP$ as well. Therefore [L2] is false: this NP-language is already polynomial-time solvable. [L1, L2, step 1.1] ∎
