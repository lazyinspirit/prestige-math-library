---
id: ex-valid-computation-histories-are-decidable
kind: example
title: "Checking a short accepting history for a unary increment machine"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-valid-computation-histories-are-decidable, def-halting-computation-and-divergence]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 10: The Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf"
---

## Example

Consider the deterministic machine with states
$q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}$, input alphabet $\{I\}$, tape alphabet
$\{I,\sqcup\}$, and transition rules
$$ \delta(q_0,I)=(q_0,I,R),\qquad \delta(q_0,\sqcup)=(q_{\mathrm{acc}},I,R). $$
On input $III$ it scans right across the unary block, writes one extra `I` in
the first blank cell, and halts.

Using the configuration-word convention with `B` for the blank symbol, a
candidate accepting history is
$$ q_0III,\ Iq_0II,\ IIq_0I,\ IIIq_0B,\ IIIIq_{\mathrm{acc}}B. $$

## Facts & Assumptions

**Given:** The machine and input above, together with the displayed candidate history.

[L1] For a fixed machine and input, encoded accepting computation histories form a decidable language by local checks on the start configuration, successive one-step moves, and the final accepting state, by [[prop-valid-computation-histories-are-decidable]].

[L2] A halting computation history is a finite list beginning at the initial configuration and following the one-step relation at each stage, by [[def-halting-computation-and-divergence]].

## Verification

**Proof technique:** direct.

1.1 The first configuration word $q_0III$ is the canonical initial configuration on input $III$: the head is at the leftmost `I`, the state is $q_0$, and the last displayed cell is the last nonblank input cell. [given]

1.2 Each of the first three transitions just moves the head one cell to the right while leaving the scanned `I` unchanged, so $$ q_0III\to Iq_0II\to IIq_0I\to IIIq_0B $$ is legal. The last transition uses $\delta(q_0,\sqcup)=(q_{\mathrm{acc}},I,R)$, so the machine writes `I` in the scanned blank cell and then moves right onto the next blank cell. Therefore $IIIq_0B\to IIIIq_{\mathrm{acc}}B$ is legal as well. [given]

2.1 The final configuration word has state $q_{\mathrm{acc}}$, so it is accepting. Therefore the displayed list is an accepting computation history in the sense of [L2], exactly the sort of object whose validity [L1] decides. [L1, L2, step 1.1, step 1.2] ∎
