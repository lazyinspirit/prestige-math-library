---
id: def-independent-sigma-algebras-and-events
kind: definition
title: "Independent sigma-algebras and independent events"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-independent-families-of-event-classes, def-sigma-algebra]
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 3.1"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space.

A family $(\mathcal F_i)_{i\in I}$ of sub-sigma-algebras of $\mathcal F$ is
**independent** when it is independent as a family of event classes in the
sense of [[def-independent-families-of-event-classes]].

A family $(A_i)_{i\in I}$ of events is **independent** when the singleton event
classes $\bigl(\{A_i\}\bigr)_{i\in I}$ are independent. Equivalently, for every
finite choice of distinct indices $i_0,\dots,i_{n-1}$,

$$\mathbb P\left(\bigcap_{k<n}A_{i_k}\right)=\prod_{k<n}\mathbb P(A_{i_k}).$$

For two events this reduces to the familiar identity
$\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$.
