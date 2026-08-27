---
id: fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae
kind: false-statement
title: "FALSE: a pointwise limit of continuous functions is continuous almost everywhere"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-fat-cantor-set-has-positive-measure, thm-metric-spaces-are-tychonoff-and-perfectly-normal]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
---

## Statement

**False claim.** A pointwise limit of continuous functions on $\mathbb{R}$ is
continuous almost everywhere.

## Facts & Assumptions

**Given:** The fat Cantor set $S \subseteq [0,1]$.

[L1] The fat Cantor set is closed, nowhere dense, and not Lebesgue null.
([[thm-fat-cantor-set-has-positive-measure]])

[L2] Every closed subset of a metric space is the zero set of a continuous real
function. ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]])

## Refutation

**Proof technique:** direct.

1.1 By [L2], there is a continuous function $u : \mathbb{R} \to \mathbb{R}$ with [L2, choose]
$S = \{x : u(x)=0\}$. Put $f_0:=f_1$, and for $n \ge 1$ define

$$f_n(x) := \frac{1}{1+n\,u(x)^2}.$$

Each $f_n$ is continuous, because it is built from $u$ by continuous algebraic
operations and the denominator is everywhere positive. [L2, choose]

2.1 If $x \in S$, then $u(x)=0$ and $f_n(x)=1$ for every $n$. If $x \notin S$, [step 1.1, L1]
then $u(x)^2>0$, so $1+n\,u(x)^2 \to +\infty$ and $f_n(x)\to0$. Thus the
pointwise limit is $\mathbf{1}_S$. Since $S$ is closed and has empty interior by
[L1], every point of $S$ is a boundary point of $S$, and the indicator
$\mathbf{1}_S$ is discontinuous at every such point. Because $S$ is not
Lebesgue null by [L1], the discontinuity set has positive measure. [step 1.1,
L1] ∎
