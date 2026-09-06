---
id: ex-selecting-an-admissible-contour-height
kind: example
title: "Selecting an admissible contour height"
status: published
origin: pipeline
deps: [cor-zeta-zero-count-unit-interval]
proof_strategy: constructive
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.3"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Example

For $T\ge3$, one can choose $T'\in[T,T+1]$ with distance at least
$c/\log T$ from every zero ordinate in $[T-1,T+2]$, for an absolute $c>0$.

## Verification

**Given:** the $O(\log(T+2))$ unit-interval zero count.

1.1 The three adjacent unit-interval bounds show that the number of relevant ordinates is at most $C\log T$ after enlarging an absolute constant $C$ to cover $3\le T\le5$.  Around each such ordinate remove an interval of radius $c/\log T$, where $c<1/(2C)$. [given, construct]

2.1 The total removed length inside $[T,T+1]$ is at most $2Cc<1$. Consequently some $T'$ remains in that interval, and by construction its distance from every relevant ordinate is at least $c/\log T$. [step 1.1, discharge-construct] ∎
