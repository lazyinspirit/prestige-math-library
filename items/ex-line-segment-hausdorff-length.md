---
id: "ex-line-segment-hausdorff-length"
kind: "example"
title: "A planar segment has Hausdorff measure equal to length"
deps: ["cor-hausdorff-measure-under-similarities", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "thm-hausdorff-dimension-critical-exponent", "thm-hausdorff-dimension-is-countably-stable"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264G; Falconer §1.4 p.12
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Example

Assume the Axiom of Countable Choice. For $p,q\in\mathbb R^2$, the segment $[p,q]=\{(1-t)p+tq:0\le t\le1\}$ satisfies

$$\mathcal H^1([p,q])=|p-q|.$$

Its dimension is one when $p\ne q$ and zero when $p=q$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, isometries preserve Hausdorff measure, and ambient and subspace outer values agree. [[cor-hausdorff-measure-under-similarities]]

[F2] Under the standing Countable Choice hypothesis, hausdorff one-measure on the line equals Lebesgue outer measure. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F3] Finite positive measure at exponent one gives dimension one. [[thm-hausdorff-dimension-critical-exponent]]

[F4] Under the standing Countable Choice hypothesis, every at most countable set has dimension zero. [[thm-hausdorff-dimension-is-countably-stable]]

## Verification

1.1 If $\ell=|q-p|>0$, the map $u\mapsto p+u(q-p)/\ell$ is an isometry from $[0,\ell]$ onto $[p,q]$, since the distance between its images is $|u-v|$. Hence the segment has $\mathcal H^1$ equal to the interval length $\ell$. [F1, F2]

2.1 For $\ell>0$ this value is finite and positive, so the dimension is one. If $\ell=0$, the segment is the singleton $\{p\}$: its own singleton cover costs zero at exponent one and it is countable, giving dimension zero. Both closed endpoints are present in the parametrisation. [F3, F4, step 1.1] ∎
