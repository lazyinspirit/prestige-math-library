---
id: thm-taylor-series-representation-by-remainder
kind: theorem
title: "Taylor-series representation by vanishing remainders"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-taylor-and-maclaurin-series, def-taylor-polynomial-and-remainder, cor-taylor-remainder-bound, thm-extreme-value-r, def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.5, pp. 265–266"
      url: "https://digitalcommons.trinity.edu/mono/7/"
    - title: "J. K. Hunter, An Introduction to Real Analysis, §10.7.1"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $I$ be an open interval, let $f\in C^\infty(I)$, and let $a\in I$. For
each $x\in I$, $f(x)$ equals the sum of the Taylor series of $f$ at $a$ if
and only if

$$R_{n,a}f(x)\longrightarrow0.$$

Moreover, let $r>0$ and suppose that $[a-r,a+r]\subset I$. For every
$n\ge0$, set

$$M_{n+1}:=\max_{|t-a|\le r}|f^{(n+1)}(t)|.$$

If

$$\frac{M_{n+1}r^{n+1}}{(n+1)!}\longrightarrow0,$$

then the Taylor polynomials $T_{n,a}f$ converge uniformly to $f$ on the
compact interval $[a-r,a+r]$.

## Facts & Assumptions

**Given:** An open interval $I$, a function $f\in C^\infty(I)$, a point
$a\in I$, and the Taylor polynomials and remainders of $f$ at $a$.

[A1] For the uniform assertion, $r>0$, $[a-r,a+r]\subset I$, and
$M_{n+1}r^{n+1}/(n+1)!\to0$, where
$M_{n+1}=\max_{|t-a|\le r}|f^{(n+1)}(t)|$.

[L1] The $n$th partial sum of the Taylor series at $a$ is $T_{n,a}f$, and
$R_{n,a}f(x)=f(x)-T_{n,a}f(x)$
([[def-taylor-and-maclaurin-series]],
[[def-taylor-polynomial-and-remainder]]).

[L2] A continuous real-valued function on a nonempty compact set attains its
maximum and minimum ([[thm-extreme-value-r]]).

[L3] If $|f^{(n+1)}(t)|\le M$ throughout the closed interval between $a$ and
$x$, then
$$|R_{n,a}f(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}$$
([[cor-taylor-remainder-bound]]).

[L4] A sequence $(g_n)$ converges uniformly to $g$ on a set $E$ exactly when,
for every $\varepsilon>0$, there is $N$ such that
$|g_n(x)-g(x)|<\varepsilon$ for every $x\in E$ and every $n\ge N$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in I$. If $T_{n,a}f(x)\to f(x)$, then $R_{n,a}f(x)=f(x)-T_{n,a}f(x)\to0$. [L1, assume-hyp, algebra]

1.2 Conversely, if $R_{n,a}f(x)\to0$, then $T_{n,a}f(x)=f(x)-R_{n,a}f(x)\to f(x)$. [L1, assume-hyp, algebra]

1.3 For each $n\ge0$, the function $|f^{(n+1)}|$ is continuous on the nonempty compact interval $[a-r,a+r]$, so the displayed number $M_{n+1}$ exists. [A1, L2]

1.4 For every $y\in[a-r,a+r]$ and every $n\ge0$, $|f(y)-T_{n,a}f(y)|=|R_{n,a}f(y)|\le M_{n+1}|y-a|^{n+1}/(n+1)!\le M_{n+1}r^{n+1}/(n+1)!$. [A1, L1, L3]

1.5 Given $\varepsilon>0$, choose $N$ such that $M_{n+1}r^{n+1}/(n+1)!<\varepsilon$ whenever $n\ge N$. [A1, choose]

2.1 Thus, for this arbitrary $x$, the Taylor series sums to $f(x)$ if and only if $R_{n,a}f(x)\to0$. [step 1.1, step 1.2]

2.2 For every $n\ge N$ and every $y\in[a-r,a+r]$, $|f(y)-T_{n,a}f(y)|<\varepsilon$. [step 1.4, step 1.5]

3.1 Hence $T_{n,a}f\to f$ uniformly on $[a-r,a+r]$. [L4, step 2.2] ∎
