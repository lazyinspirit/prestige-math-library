---
id: ex-transfinite-subway-pressing-down
kind: example
title: "The transfinite subway argument"
status: draft
origin: pipeline
deps: ["thm-fodor-pressing-down", "prop-basic-stationary-set-calculus"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
sources:
  references:
    - title: "Vasey, Example 15.2, pp.82–83"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Example

In ZFC a train stops at every $\alpha<\omega_1$. At most countably many passengers board at each stop; a passenger boards once and stays until disembarking. At every stop with a nonempty arrival, at least one passenger disembarks before boarding occurs. Then the empty-arrival stops contain a club, and no passenger remains aboard through all stops after boarding below $\omega_1$.

## Facts & Assumptions

[F1] [[thm-fodor-pressing-down]]: A regressive map on a stationary domain has a stationary constant fibre.

[F2] [[prop-basic-stationary-set-calculus]]: Stationary sets on a regular uncountable cardinal are unbounded and have full cardinality.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Let S be the nonempty-arrival stops. Zero is not in S. If S were stationary, choose one departing passenger at each of its stops, and send that stop to the chosen passenger's boarding index. This is strictly below the arrival stop because departures precede new boarding. Pressing down gives a stationary set of such stops with one common boarding index beta. [F1]

2.1 The selected passengers at distinct stops are distinct: each leaves only once and cannot reboard. The stationary fibre has cardinality aleph-one, although at most countably many passengers boarded at beta, a contradiction. Hence S is nonstationary, and its complement contains a club by definition of nonstationarity. [F2, step 1.1]

3.1 A passenger remaining after boarding at beta would make every arrival after beta nonempty. That would exclude empty arrivals on an entire tail, contradicting the unbounded club of empty arrivals. [step 2.1] ∎
