---
id: ex-it-qudit-erasure-channel-capacity-regimes
kind: example
title: Capacity regimes of the qubit erasure channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 13
deps:
  - thm-it-qudit-erasure-channel-exact-capacities
  - def-it-qudit-erasure-channel
  - lem-it-qudit-erasure-channel-complement-and-degradability
  - def-it-information-units-and-logarithm-base
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §8.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §24.7.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
## Example

For $d=2$, the erasure formulas give the following capacities. Entries are shown in bits per channel use; multiply by $\ln2$ to obtain nats.

| $\epsilon$ | $Q=P$ | $C_E$ | Regime |
|---:|---:|---:|---|
| $0$ | $1$ | $2$ | degradable |
| $1/4$ | $1/2$ | $3/2$ | degradable |
| $1/2$ | $0$ | $1$ | degradable and antidegradable; self-complementary |
| $3/4$ | $0$ | $1/2$ | antidegradable |
| $1$ | $0$ | $0$ | antidegradable |

## Facts & Assumptions

**Given:** A qubit erasure channel, so $d=2$, at the five probabilities in the table.

[F1] [[thm-it-qudit-erasure-channel-exact-capacities]]: $Q=P=\max\{1-2\epsilon,0\}\ln d$ and $C_E=2(1-\epsilon)\ln d$.

[F2] [[lem-it-qudit-erasure-channel-complement-and-degradability]]: the receiver and complement outputs exchange the data and erasure probabilities; the channel is degradable for $\epsilon\le1/2$ and antidegradable for $\epsilon\ge1/2$.

[F3] [[def-it-qudit-erasure-channel]]: the two outputs use the same data space with a one-dimensional orthogonal erasure flag.

[F4] [[def-it-information-units-and-logarithm-base]]: capacities in bits are obtained by dividing nats by $\ln2$.

## Verification

1.1 Substituting $d=2$ into [F1] and dividing by $\ln2$ gives $Q=P=\max\{1-2\epsilon,0\}$ bits and $C_E=2(1-\epsilon)$ bits. At $\epsilon=0,1/4,1/2,3/4,1$, these pairs are respectively $(1,2),(1/2,3/2),(0,1),(0,1/2),(0,0)$, which are the table entries. [F1, F4, given, algebra]

2.1 By [F2], the first two probabilities lie in the degradable region, the last two lie in the antidegradable region, and the half-erasure point lies in both. At $\epsilon=1/2$, [F2] gives $\mathcal E^c(X)=\tfrac12J_EXJ_E^*+\tfrac12\operatorname{tr}(X)|e_E\rangle\langle e_E|$, while [F3] gives $\mathcal E(X)=\tfrac12J_BXJ_B^*+\tfrac12\operatorname{tr}(X)|e_B\rangle\langle e_B|$. The unitary identification $J_Bx\mapsto J_Ex$ and $e_B\mapsto e_E$ carries one map to the other, proving self-complementarity up to flag relabeling. [F2, F3, step 1.1, construct, algebra] ∎

