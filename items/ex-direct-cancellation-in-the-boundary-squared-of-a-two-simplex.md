---
id: ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex
kind: example
title: "Direct cancellation in the boundary squared of a two-simplex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-the-singular-boundary-squares-to-zero, ex-boundaries-of-the-standard-one-and-two-simplices]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Example

For the identity singular $2$-simplex $\iota_2:\Delta^2\to\Delta^2$,
$$\partial^2\iota_2=(v_2-v_1)-(v_2-v_0)+(v_1-v_0)=0.$$
Each vertex appears exactly twice with opposite signs.

## Facts & Assumptions

**Given:** The identity singular $2$-simplex $\iota_2:\Delta^2\to\Delta^2$.

[L1] The boundary of $\iota_2$ is the alternating sum of its three oriented
edges ([[ex-boundaries-of-the-standard-one-and-two-simplices]]).

[L2] Singular boundaries square to zero
([[thm-the-singular-boundary-squares-to-zero]]).

## Verification

**Proof technique:** direct.

1.1 Expanding [L1] once more gives $$\partial^2\iota_2=\partial(v_1v_2)-\partial(v_0v_2)+\partial(v_0v_1) =(v_2-v_1)-(v_2-v_0)+(v_1-v_0),$$ where each edge boundary is the degree-one formula from the previous example. [L1, given, algebra]

2.1 The three positive and three negative vertex terms cancel pairwise, so the sum is $0$, exactly as predicted by [L2]. [L2, step 1.1] ∎