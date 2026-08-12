---
id: thm-one-sided-ftc-at-points-with-one-sided-limits
kind: theorem
title: "For an integrable $f$, the one-sided derivatives of $F(x)=\\int_a^x f$ equal the corresponding one-sided limits of $f$; at a jump they are unequal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-integral-function, thm-additivity-over-subintervals, def-one-sided-limits, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: epsilon-delta
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Theorem 12.4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $f:[a,b]\to\mathbb R$ be Riemann integrable, and put $F(x)=\int_a^x f$.

1. If $c\in[a,b)$ and $\lim_{x\to c^+}f(x)=L_+$, then the right derivative exists and $F'_+(c)=L_+$.
2. If $c\in(a,b]$ and $\lim_{x\to c^-}f(x)=L_-$, then the left derivative exists and $F'_-(c)=L_-$.

In particular, if both one-sided limits exist at an interior point and are unequal, then $F$ is not differentiable there. The value $f(c)$ itself is irrelevant to both conclusions.

## Facts & Assumptions

**Given:** The integrable $f$, its integral function $F$, and the indicated one-sided limits.

[L1] Integral additivity gives $F(y)-F(c)=\int_c^y f$ for all $c,y\in[a,b]$, with oriented limits ([[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L2] The right-limit condition says that for every $\varepsilon>0$, $|f(x)-L_+|<\varepsilon$ throughout a sufficiently short interval to the right of $c$; the left version is analogous ([[def-one-sided-limits]]).

[L3] If $|g|\le M$ on an interval of length $\ell$, then $|\int g|\le M\ell$ ([[lem-integral-elementary-bounds]]).

## Proof

**Proof technique:** epsilon-delta.

1.1 Assume the right limit exists and fix $\varepsilon>0$. By [L2], choose $\delta>0$ so that $|f(x)-L_+|<\varepsilon$ whenever $c<x<c+\delta$ within $[a,b]$. [given, L2]

1.2 For the left limit, take $h<0$, rewrite the same quotient using the oriented integral over $[c+h,c]$, and apply [L2] and [L3]; its limit is $L_-$. [given, L1, L2, L3]

2.1 For $0<h<\delta$ with $c+h\le b$, [L1] and linearity give $\frac{F(c+h)-F(c)}h-L_+=\frac1h\int_c^{c+h}(f-L_+)$. [step 1.1, L1, algebra]

3.1 By [L3], the absolute value in step 2.1 is at most $\varepsilon$. Hence the right difference quotient tends to $L_+$. [step 1.1, step 2.1, L3]

4.1 At an interior point a two-sided derivative would have to equal both one-sided derivatives, so unequal $L_+$ and $L_-$ preclude it. Neither estimate refers to $f(c)$. [step 3.1, step 1.2] ∎
