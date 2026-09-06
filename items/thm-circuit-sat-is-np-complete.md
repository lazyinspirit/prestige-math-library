---
id: thm-circuit-sat-is-np-complete
kind: theorem
title: "CircuitSAT is NP-complete"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circuit-sat, thm-cook-levin-sat-is-np-complete, def-polynomial-time-many-one-reduction, def-np-hard-and-np-complete]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\mathrm{CircuitSAT}$ is NP-complete under polynomial-time many-one
reductions.

## Facts & Assumptions

**Given:** the gate-list encoding of $\mathrm{CircuitSAT}$.

[L1] Well-formed gate lists have a designated output, and malformed lists are rejected, by [[def-circuit-sat]].

[L2] $\mathrm{SAT}$ is NP-complete, by [[thm-cook-levin-sat-is-np-complete]].

[L3] A polynomial-time many-one reduction must preserve membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[L4] NP-completeness means membership in NP together with NP-hardness, by [[def-np-hard-and-np-complete]].

## Proof

**Proof technique:** direct.

1.1 A verifier first rejects a malformed list. Otherwise it guesses one bit for every input gate, evaluates the gates in topological order, and accepts iff the designated output is $1$. Its time is polynomial in the list length, so $\mathrm{CircuitSAT}\in\mathrm{NP}$. [L1, given]

1.2 Given a Boolean formula $\varphi$, create one circuit input for each variable and one circuit gate for each connective, ordered from leaves toward the root; designate the root gate as output. This map is polynomial time and produces a circuit $C_\varphi$ satisfying $C_\varphi(a)=\varphi(a)$ for every assignment $a$. Therefore $\varphi\in\mathrm{SAT}$ iff $C_\varphi\in\mathrm{CircuitSAT}$, so [L2] and [L3] give NP-hardness. [L2, L3, given, construct]

2.1 Combining membership from step 1.1 with hardness from step 1.2 proves NP-completeness by [L4]. [L4, step 1.1, step 1.2] ∎
