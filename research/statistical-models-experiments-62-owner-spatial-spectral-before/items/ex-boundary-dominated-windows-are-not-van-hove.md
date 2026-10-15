---
id: ex-boundary-dominated-windows-are-not-van-hove
kind: example
title: "Boundary-dominated windows fail the Van Hove condition"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-van-hove-window-sequence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

The expanding rectangles
$$W_n=[0,n]\times[0,1]\subset\mathbb R^2$$
have volume tending to infinity, but their boundary remains a fixed proportion
of the volume under a fixed-width enlargement.

## Facts & Assumptions

**Given:** The definition of a Van Hove window sequence and the compact set
$K=[-1,1]^2$.

[F1] [[def-van-hove-window-sequence]]: Van Hove requires
$|(W_n+K)\setminus W_n|/|W_n|\to0$ for every compact $K$.

## Verification


1.1 Each rectangle is bounded and Borel, and $|W_n|=n$, so its volume tends to infinity as required in the first Van Hove condition. [given, algebra]

2.1 Minkowski addition gives $W_n+K=[-1,n+1]\times[-1,2]$, so $\frac{|(W_n+K)\setminus W_n|}{|W_n|} =\frac{3(n+2)-n}{n}=2+\frac6n\longrightarrow2.$ This limit is not zero, contradicting [F1] for the compact $K$; hence the sequence is not Van Hove. [F1, given, algebra] ∎