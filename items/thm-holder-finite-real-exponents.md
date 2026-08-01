---
id: thm-holder-finite-real-exponents
kind: theorem
title: "Holder's inequality for finite sums and conjugate real exponents"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-young-inequality-real-exponents, def-real-power, thm-real-power-laws, cor-exponential-reciprocal-and-positivity, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $p,q>1$ with $1/p+1/q=1$. For real families $(a_i)_{i<n}$ and $(b_i)_{i<n}$,
$$\sum_{i<n}|a_ib_i|\le\left(\sum_{i<n}|a_i|^p\right)^{1/p}\left(\sum_{i<n}|b_i|^q\right)^{1/q}.$$

## Facts & Assumptions

**Given:** A natural $n$, conjugate exponents $p,q>1$, and real families $a_i,b_i$ for $i<n$.

[L1] Young's inequality says $uv\le u^p/p+v^q/q$ for $u,v\ge0$ ([[thm-young-inequality-real-exponents]]).

[L2] Finite sums obey termwise addition and scalar multiplication, including the empty-sum convention, and $|ab|=|a||b|$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-abs-value]]).

[L3] For $r>0$, the zero-base convention gives $0^r=0$, while positive-base real powers are positive and obey the real-power laws ([[def-real-power]], [[thm-real-power-laws]], [[cor-exponential-reciprocal-and-positivity]]).



## Proof

**Proof technique:** direct.

1.1 Put $A=(\sum_{i<n}|a_i|^p)^{1/p}$ and $B=(\sum_{i<n}|b_i|^q)^{1/q}$. If $A=0$ or $B=0$, the real-power laws and zero convention show that the corresponding nonnegative power sum is zero; finite-sum order then makes every corresponding term zero, so the claim follows. [L2, L3]

1.2 Suppose $A,B>0$, and set $u_i=|a_i|/A$, $v_i=|b_i|/B$. Then $\sum u_i^p=\sum v_i^q=1$. [L2, L3]

2.1 Apply [L1] to $u_i,v_i$ and sum over $i<n$ to obtain $\sum u_iv_i\le1/p+1/q=1$. [step 1.2, L1, L2]

3.1 Multiplying by $AB$ and using $|a_ib_i|=|a_i||b_i|$ gives the asserted inequality. [step 1.2, step 2.1, L2] ∎
