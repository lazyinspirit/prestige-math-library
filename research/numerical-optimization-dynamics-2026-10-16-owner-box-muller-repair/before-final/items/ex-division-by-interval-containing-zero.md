---
id: ex-division-by-interval-containing-zero
kind: example
title: Division by an interval containing zero has no finite hull
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
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5.1 and 5.4"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Example

Take numerator interval $X=[1,2]$ and divisor interval $Y=[-1,1]$. The exact
quotient set over $y\ne0$ is unbounded above and below. Therefore no finite
interval is a sound hull; the permitted results are a sign split or an
`entire`/`inconclusive` status.

## Facts & Assumptions

**Given:** $X=[1,2]$, $Y=[-1,1]$, and the quotient set
$\{x/y:x\in X,\ y\in Y\setminus\{0\}\}$.

[L1] [[def-outward-rounded-interval-and-ball-operations]]: division with a
denominator interval containing zero returns `split-domain` or a non-finite
status, never a finite quotient interval.

[L2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: a finite
interval result must contain every exact quotient in its domain.

## Verification

1.1 For any $M>0$, choose a real $t>M+1$, set $x=1$ and $y=1/t$. Then
$x\in[1,2]$, $y\in(0,1]\subset Y$, and $x/y=t>M$. Replacing $y$ by $-1/t$
gives a quotient $-t<-M$. Thus the quotient set is unbounded in both
directions. [given, choose, construct, algebra]

1.2 A finite interval has finite lower and upper endpoints, so choose $M$ larger
than their absolute values in step 1.1; the resulting exact quotient lies
outside that interval, contradicting the required inclusion [L2]. The branch
in [L1] avoids that contradiction by declining a finite hull. [step 1.1, L1, L2, algebra] ∎

