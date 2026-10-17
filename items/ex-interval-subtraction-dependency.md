---
id: ex-interval-subtraction-dependency
kind: example
title: Natural interval subtraction loses repeated-input correlation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic-examples
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Example

Let the single real input $x$ range over $X=[1,2]$, and evaluate the expression
DAG $f(x)=x-x$ by its natural interval extension. The exact range is
$f(X)=\{0\}$, while the interval computation returns $X-X=[-1,1]$. Both
endpoints are sound, but the output is wider because the two occurrences of
$x$ are evaluated as independent members of $X$.

## Facts & Assumptions

**Given:** The real interval $X=[1,2]$, the expression $f(x)=x-x$, and the
outward subtraction rule.

[L1] [[def-outward-rounded-interval-and-ball-operations]]: for
$[a,b]-[c,d]$, the interval result before final endpoint rounding is
$[a-d,b-c]$.

[L2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: natural
interval evaluation encloses every exact DAG value.

## Verification

1.1 Substituting $a=c=1$ and $b=d=2$ into [L1] gives $[1,2]-[1,2]=[1-2,2-1]=[-1,1]$. [given, L1, algebra]

2.1 For every real $x\in[1,2]$, the two DAG nodes have the same input value, so $f(x)=x-x=0$, and at $x=1$ this value is attained. Thus the exact range is $\{0\}$, which is contained in the computed interval by [L2]. [given, L2, algebra] ∎

