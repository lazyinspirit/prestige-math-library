---
id: ex-counting-measure-integral-is-a-series
kind: example
title: "Integrating against counting measure recovers a series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-counting-measure, prop-counting-measure-is-a-measure, def-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

On $(\mathbb N,\mathcal P(\mathbb N),\#)$, the nonnegative Lebesgue integral is
the nonnegative series:
$$\int f\,d\#=\sum_{k\in\mathbb N}f(k)\qquad(f:\mathbb N\to[0,+\infty]).$$

## Facts & Assumptions

**Given:** A function $f:\mathbb N\to[0,+\infty]$.

[L1] Counting measure is a measure on $\mathbb N$ ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]).

[L2] The nonnegative integral is defined by simple minorants ([[def-nonnegative-lebesgue-integral]]).

[L3] The nonnegative integral agrees with the simple integral on simple
functions, and monotone convergence passes increasing pointwise limits through
the integral.
([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[thm-monotone-convergence-for-the-integral]])

## Verification

**Proof technique:** direct.

1.1 For each $n$, put [L1, L2, construct]
$$s_n:=\sum_{k<n}\min\{f(k),n\}\chi_{\{k\}}.$$
Then $s_n$ is finite-valued and simple, $s_n\uparrow f$, and [L3] gives
$$\int s_n\,d\#=\sum_{k<n}\min\{f(k),n\}\#(\{k\})=\sum_{k<n}\min\{f(k),n\}$$
because each singleton has counting measure $1$ by [L1].

2.1 Applying [L3] to $s_n\uparrow f$ gives [step 1.1, L3] ∎
$$\int f\,d\#=\lim_n\sum_{k<n}\min\{f(k),n\}.$$
The diagonal truncated sums increase to the nonnegative extended series
$\sum_{k\in\mathbb N}f(k)$: each is at most that series, while every fixed
finite partial sum is approached from below as $n\to\infty$. This proves the
displayed identity.
