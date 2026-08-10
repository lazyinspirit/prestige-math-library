---
id: cor-taylor-remainder-bound
kind: corollary
title: "A uniform derivative bound gives a uniform Taylor remainder bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-taylor-lagrange-and-cauchy-remainders, lem-of-abs-value, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "Taylor's theorem (Wikipedia): Lagrange remainder and error estimate"
      url: "https://en.wikipedia.org/wiki/Taylor%27s_theorem"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$, and suppose $f$ has derivatives through order $n+1$ on the closed interval between $a$ and $x$, with the usual endpoint continuity. If $|f^{(n+1)}(t)|\le M$ throughout that interval, then
$$|R_{n,a}f(x)|\le \frac{M}{\iota((n+1)!)}|x-a|^{n+1}.$$

## Facts & Assumptions

**Given:** The stated regularity and derivative bound.

[L1] The Lagrange remainder formula is [[cor-taylor-lagrange-and-cauchy-remainders]].

[L2] Absolute value respects products and powers ([[lem-of-abs-value]]), and factorials are positive ([[def-factorial-and-falling-factorial]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

## Proof

**Proof technique:** direct.

1.1 If $x=a$, then $R_{n,a}f(a)=0$, so the estimate is immediate. If $x\ne a$, [L1] gives $$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi)}{\iota((n+1)!)}(x-a)^{n+1}$$ for some point $\xi$ strictly between $a$ and $x$.  [L1]

2.1 In the case $x\ne a$, take absolute values in step 1.1, use $|f^{(n+1)}(\xi)|\le M$, and divide by the positive factorial. Together with the case $x=a$, this proves the estimate.  [step 1.1, L2, algebra] ∎
