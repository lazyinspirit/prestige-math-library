---
id: ex-abel-theorem-on-the-alternating-harmonic-series
kind: example
title: "The alternating harmonic series illustrates Abel's boundary-limit theorem without evaluating its sum"
status: published
origin: session
deps: [thm-alternating-series-test, thm-abel-limit-theorem, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Abel theorem, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Abel_theorem"}]}
pipeline_run: null
---

## Statement

Let $s$ denote the ordinary sum of the alternating harmonic series

$$s:=\sum_{n=0}^{\infty}\frac{(-1)^n}{\iota(n+1)}.$$

Then, without evaluating $s$,

$$\lim_{x\uparrow1}\sum_{n=0}^{\infty}\frac{(-1)^nx^n}{\iota(n+1)}=s.$$

## Facts & Assumptions

**Given:** The zero-indexed alternating harmonic series.

[L1] It converges by the alternating-series test ([[thm-alternating-series-test]], [[def-canonical-natural]]).

[L2] Abel's limit theorem identifies the boundary limit with the ordinary sum of any convergent series ([[thm-abel-limit-theorem]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the ordinary sum $s$ exists. [L1]

2.1 Apply [L2] to its coefficients $a_n=(-1)^n/\iota(n+1)$ to obtain the displayed limit. No closed-form evaluation of $s$ is needed. [step 1.1, L2] ∎
