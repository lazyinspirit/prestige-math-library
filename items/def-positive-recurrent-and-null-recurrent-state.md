---
id: def-positive-recurrent-and-null-recurrent-state
kind: definition
title: "Positive and null recurrence of a state"
status: draft
origin: pipeline
landmark: false
deps:
  - def-recurrent-and-transient-state
  - def-hitting-return-and-visit-times
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Definition

Let a Markov chain with transition matrix $p$ and a fixed deterministic initial
state $x$ be specified, and use $\mathbb P_x$ for its law. Let

$$T_x^+=\inf\{n\ge1:X_n=x\}$$

be the first strictly positive return time of
[[def-hitting-return-and-visit-times]]; it never counts the initial visit at
time zero and may equal $+\infty$. A state $x$ that is recurrent, that is
$\mathbb P_x(T_x^+<\infty)=1$ ([[def-recurrent-and-transient-state]]), is

- **positive recurrent** when $\mathbb E_xT_x^+<+\infty$, and
- **null recurrent** when $\mathbb E_xT_x^+=+\infty$.

The expectation is the extended nonnegative integral of the $\mathbb N_0\cup\{+\infty\}$-valued
random variable $T_x^+$, so it always exists in $[0,+\infty]$ and the two cases
are exhaustive and mutually exclusive for a recurrent state. A state that is
transient is in neither subclass, since its return probability is strictly less
than one. A finite mean forces almost-sure
finiteness: if a nonnegative integer-valued random variable is infinite with
positive probability, its extended expectation is $+\infty$. The classification is stated for a fixed
specified law $\mathbb P_x$; no simultaneous selection of laws for all states
is asserted here.
