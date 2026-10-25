---
id: ex-boundary-dominated-windows-are-not-van-hove
kind: example
title: "Boundary-dominated windows fail the Van Hove condition"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-van-hove-window-sequence
  - def-countable-choice
  - def-measure
  - thm-borel-sets-are-lebesgue-measurable
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

The expanding rectangles
$$W_n=[0,n+1]\times[0,1]\subset\mathbb R^2,\qquad n\ge0,$$
have volume tending to infinity, but their boundary remains a fixed proportion
of the volume under a fixed-width enlargement.

## Facts & Assumptions

**Given:** AC$_\omega$ as required by the Van Hove definition, the definition
of a Van Hove window sequence, and the compact set
$K=[-1,1]^2$.

[F1] [[def-van-hove-window-sequence]],
[[def-countable-choice]], [[thm-borel-sets-are-lebesgue-measurable]], and
[[thm-lebesgue-measure-is-a-complete-measure]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]], and [[def-measure]]: under
AC$_\omega$ the Borel rectangles are Lebesgue measurable, have the stated box
volumes, and their restricted outer measure is a countably additive measure;
Van Hove requires
$|(W_n+K)\setminus W_n|/|W_n|\to0$ for every compact $K$.

## Verification

1.1 Each rectangle is bounded and Borel, and $|W_n|=n+1>0$, so its volume tends to infinity as required in the first Van Hove condition. [F1, given, algebra]

2.1 Minkowski addition gives $W_n+K=[-1,n+2]\times[-1,2]$. The two closed rectangles are nested, have finite volume by [F1], and Lebesgue measure is a measure by [F1], so countable additivity on $W_n\sqcup((W_n+K)\setminus W_n)=W_n+K$ gives $$\frac{|(W_n+K)\setminus W_n|}{|W_n|} =\frac{3(n+3)-(n+1)}{n+1}=2+\frac6{n+1}\longrightarrow2.$$ This limit is not zero, contradicting [F1] for the compact $K$; hence the sequence is not Van Hove. [F1, given, algebra] ∎
