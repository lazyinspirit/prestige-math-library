---
id: fs-translation-is-continuous-in-l-infinity
kind: false-statement
title: "FALSE: translation is continuous in $L^\\infty$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]
landmark: false
proof_strategy: "Refute with $\\mathbf{1}_{[0,1]}$: every nonzero translation changes the value on a positive-measure set by exactly $1$, so the $L^\\infty$ distance never shrinks."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

**False claim.** Translation is continuous in $L^\infty(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The indicator of the unit interval in one dimension.

[L1] The finite-$p$ translation theorem excludes $p=\infty$
([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]]).

## Refutation

**Proof technique:** direct.

1.1 Let $f := \mathbf{1}_{[0,1]}$ on $\mathbb{R}$. For every $h \neq 0$, the [L1, given, algebra]
functions $f$ and $\tau_h f$ differ by $1$ on a set of positive measure:
for $0 < h < 1$, for instance, on $(1,1+h]$ one has $\tau_h f = 1$ and
$f = 0$. [L1, given, algebra]

2.1 Therefore [step 1.1, algebra]
$$
\|\tau_h f-f\|_\infty = 1
$$
for every $h \neq 0$, so the norm does not tend to $0$ as $h \to 0$. [step 1.1, algebra]

3.1 Hence translation is not continuous in $L^\infty$, which is exactly why [L1, step 2.1]
[L1] stops at $p<\infty$. [L1, step 2.1] ∎