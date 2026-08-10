---
id: ex-unbounded-integrand-stieltjes-integrable
kind: example
title: "A Riemann–Stieltjes integrable integrand need not be bounded"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       ex-step-integrator-evaluates-at-the-jump, def-integer-power,
       def-continuity-real, def-bounded-set, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, discussion after Definition 6.1"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

On $[0,1]$, set $f(0)=0$ and $f(x)=1/x$ for $x>0$, and let $\alpha=H_{1/2}$ be the unit step at $1/2$. Then $f$ is unbounded but
$$\int_0^1 f\,d\alpha=2.$$

## Facts & Assumptions

**Given:** The displayed $f$ and step integrator $\alpha$.

[L1] Only the partition interval across the jump of $\alpha$ has a nonzero Stieltjes weight ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] The function $1/x$ is continuous at $1/2$ ([[def-continuity-real]]).

## Verification

**Proof technique:** direct.

1.1 For each positive integer $n$, $f(1/n)=n$, so the range of $f$ is not bounded above. [given]

2.1 Every Stieltjes sum equals $f(\xi)$ for a tag $\xi$ in the interval across $1/2$; as the mesh tends to zero, $\xi\to1/2$. By [L2], these sums tend to $f(1/2)=2$. The unbounded behavior near zero is multiplied only by zero increments of $\alpha$. [L1, L2] ∎
