---
id: def-certified-evaluation-result-contract
kind: definition
title: Certified special-function enclosure result
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures]
justified_by: []
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, Chapter 3, Numerical Methods, §3.1
      url: https://dlmf.nist.gov/3.1
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2–5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Definition

A **certified enclosure** for a real value is a nonempty closed interval
$B=[a,b]$ with finite dyadic endpoints; for a complex value it is a nonempty
closed rectangle $B=[a_1,b_1]+i[a_2,b_2]$ with finite dyadic endpoints. Its
radius is half its length in the real case and half its Euclidean diagonal in
the complex case; $d(B,0)$ is the Euclidean distance from $B$ to $0$.
An evaluator item declares whether its input is an exact dyadic point or a
dyadic interval/rectangle enclosure; a successful range result contains the
exact function image of every admissible point in an input enclosure. Constants
not exactly dyadic must be supplied with certified enclosing intervals or
rectangles.

The interval backend uses the endpoint operations in
[[def-outward-rounded-interval-and-ball-operations]]; the soundness of finite
arithmetic expression DAGs follows from
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]. Real elementary
function ranges use [[thm-real-elementary-range-enclosures]], and complex
exponential and principal-logarithm ranges use
[[thm-complex-elementary-range-enclosures]]. An operation that returns a
non-finite status supplies no finite enclosure claim.

A finite-budget evaluator receives a branch input enclosure wholly within
the stated domain, absolute tolerance $\varepsilon_a>0$, optional relative
tolerance $\varepsilon_r>0$, finite integer work and precision caps, and the
fixed format and truncation parameters required by the backend. Its result has
one of four statuses:

- `success`: the returned enclosure contains the exact requested value and its
  radius is at most $\varepsilon_a$. If $0\notin B$ and relative tolerance was
  requested, the evaluator may also report `relative_certified: true` only when
  $\operatorname{rad}(B)/d(B,0)\le\varepsilon_r$.
- `inconclusive`: the procedure exhausted a finite cap before its requested
  enclosure test passed.
- `domain`: the input is outside the stated branch domain, violates a stated
  parameter condition, or lies on a branch cut excluded by that branch.
- `range`: a certified finite enclosure cannot be represented in the requested
  output format; the procedure returns no unsound finite interval.

If a success enclosure contains $0$, it still supplies the stated absolute
bound, but it carries no relative-accuracy claim. The work and precision caps
do not imply that success occurs for every input.
