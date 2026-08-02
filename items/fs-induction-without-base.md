---
id: fs-induction-without-base
kind: false-statement
title: "FALSE: successor-closure alone forces a set to be all of $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, thm-induction-principle, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "base case is essential (false)"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

**False statement.** If a set $S \subseteq \mathbb{N}$ is nonempty and closed
under the successor ($n \in S \Rightarrow \sigma(n) \in S$), then
$S = \mathbb{N}$. (That is, the induction principle would hold without its base
case $0 \in S$.)

## Facts & Assumptions

**Given:** the claim above.

[L1] The induction principle requires $0 \in S$ ([[thm-induction-principle]]).

[L2] $\sigma(n) \neq 0$ for all $n$ (P1) ([[thm-omega-is-peano-system]]).


## Refutation

**Proof technique:** direct.

1.1 Take $S = \mathbb{N} \setminus \{0\} = \{n \in \mathbb{N} : n \neq 0\}$, the set of nonzero naturals; it is nonempty (for instance $1 = \sigma(0) \in S$). [given]

1.2 $S$ is closed under $\sigma$: for any $n$, $\sigma(n) \neq 0$ by P1 [L2], so $\sigma(n) \in S$. [L2]

2.1 But $0 \notin S$, so $S \neq \mathbb{N}$; the nonempty successor-closed set $S$ is not all of $\mathbb{N}$, refuting the claim. [step 1.1, step 1.2]

3.1 The base case $0 \in S$ is therefore indispensable in the induction principle [L1]; successor-closure and nonemptiness do not suffice. [step 2.1, L1] ∎
