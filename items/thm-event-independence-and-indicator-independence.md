---
id: thm-event-independence-and-indicator-independence
kind: theorem
title: "A finite family of events is mutually independent exactly when its indicators are mutually independent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-mutual-independence-under-subfamilies-and-complements, def-indicator-random-variable, def-independence-of-finite-random-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Sections 1.4.1 and 3.1.5"
      url: "https://www.probabilitycourse.com/"
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Sections 1.1 and 3.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

A finite family of events is mutually independent if and only if its indicator random variables are mutually independent. The same equivalence holds with pairwise independence in place of mutual independence.

## Facts & Assumptions

**Given:** A finite family of events $(A_i)_{i\in I}$.

[L1] Mutual independence is preserved when events are replaced by complements ([[lem-mutual-independence-under-subfamilies-and-complements]]).

[L2] The event $\{\mathbf1_A=1\}$ is $A$, and $\{\mathbf1_A=0\}$ is $A^c$ ([[def-indicator-random-variable]]).

[L3] Random variables are mutually independent exactly when all finite joint attained-value probabilities factor ([[def-independence-of-finite-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the events are mutually independent. Every joint assignment $\mathbf1_{A_j}=b_j$, with $b_j\in\{0,1\}$, is an intersection of events $A_j$ and complements $A_j^c$, whose probability factors by [L1]. [L1, L2]

1.2 Conversely, if the indicators are mutually independent, specialize their joint-value identity to $b_j=1$ for every chosen index; [L2] gives the event-intersection product identity. [L2, L3]

2.1 Hence the indicators are mutually independent by [L3]. [step 1.1, L3]

3.1 Step 1.1 together with step 2.1 proves the forward direction, and step 1.2 proves the reverse direction. Restricting the same arguments to two indices proves the pairwise equivalence. [step 1.1, step 1.2, step 2.1] ∎
