---
id: def-independent-families-of-event-classes
kind: definition
title: "Independent families of event classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-probability-measure]
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

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $I$ be an index
set, and let $(\mathcal C_i)_{i\in I}$ be a family of classes of events
$\mathcal C_i\subseteq\mathcal F$.

The family $(\mathcal C_i)_{i\in I}$ is **independent** when for every natural
number $n\ge1$, every choice of distinct indices $i_0,\dots,i_{n-1}\in I$, and
every choice of events $A_k\in\mathcal C_{i_k}$, one has

$$\mathbb P\left(\bigcap_{k<n}A_k\right)=\prod_{k<n}\mathbb P(A_k).$$

Thus independence is a finite-subfamily condition. In particular, the empty
family and every one-member family are independent.
