---
id: def-pairwise-independence
kind: definition
title: "Pairwise independence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-independent-sigma-algebras-and-events]
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 3.1"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $(A_i)_{i\in I}$ be a family of events in a probability space.

The family is **pairwise independent** when every two distinct members are
independent, that is, when

$$\mathbb P(A_i\cap A_j)=\mathbb P(A_i)\mathbb P(A_j)\qquad(i\ne j).$$

Pairwise independence is weaker than independence of the whole family: it asks
for the product rule only for two-member subfamilies.
