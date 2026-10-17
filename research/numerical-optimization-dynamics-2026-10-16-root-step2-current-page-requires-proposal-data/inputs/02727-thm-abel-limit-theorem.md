---
id: thm-abel-limit-theorem
kind: theorem
title: "Abel's limit theorem: if a real series converges to $s$, then its power series tends to $s$ as $x\\uparrow1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-abel-and-cesaro-summability-of-a-series, lem-abel-summation-by-parts, thm-geometric-series, lem-convergent-implies-bounded, thm-direct-comparison-test]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_theorem"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

If the real series $\sum_{n\ge0}a_n$ converges ordinarily to $s$, then it is Abel summable to $s$:

$$\lim_{x\uparrow1}\sum_{n=0}^{\infty}a_nx^n=s.$$

## Facts & Assumptions

**Given:** Inclusive partial sums $S_n:=\sum_{k=0}^{n}a_k$ with $S_n\to s$.

[L1] Finite Abel summation gives $\sum_{k=0}^{N}a_kx^k=S_Nx^N+(1-x)\sum_{k=0}^{N-1}S_kx^k$ ([[lem-abel-summation-by-parts]]).

[L2] A convergent sequence is bounded ([[lem-convergent-implies-bounded]]).

[L3] $\sum_{n\ge0}x^n=1/(1-x)$ for $0\le x<1$ ([[thm-geometric-series]]).

[L4] A nonnegative series dominated termwise by a convergent nonnegative series converges ([[thm-direct-comparison-test]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $M$ with $|S_n|\le M$ for every $n$. For fixed $0\le x<1$, one has $|S_nx^n|\le Mx^n$, so [L3] and [L4] give absolute convergence of $\sum_nS_nx^n$; the same bound gives $S_Nx^N\to0$. [L2, L3, L4, choose]

2.1 Apply [L1] and let $N\to\infty$. Step 1.1 gives convergence of the Abel series and $A(x)=(1-x)\sum_{n\ge0}S_nx^n$. Subtracting $s=(1-x)\sum_{n\ge0}sx^n$ gives $A(x)-s=(1-x)\sum_{n\ge0}(S_n-s)x^n$. [step 1.1, L1, L3]

3.1 Given $\varepsilon>0$, choose $N$ so that $|S_n-s|<\varepsilon$ for $n\ge N$. The tail of step 2.1 has absolute value at most $\varepsilon(1-x)\sum_{n\ge N}x^n\le\varepsilon$. [given, step 2.1, L3, choose]

4.1 The finite head $(1-x)\sum_{n<N}(S_n-s)x^n$ tends to $0$ as $x\uparrow1$. Thus $|A(x)-s|<2\varepsilon$ for all sufficiently large $x<1$, proving the asserted one-sided limit and Abel summability. [step 2.1, step 3.1] ∎
