---
id: ex-polynomials-are-not-complete-in-the-supremum-norm
kind: example
title: "Polynomials are not complete in the supremum norm on a compact interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-c-of-a-compact-space-is-banach,
       cor-normed-space-completions-are-uniquely-linearly-isometric,
       thm-real-stone-weierstrass-for-compact-metric-spaces]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Stone-Weierstrass Theorem (University of Chicago)"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: frontier-27
---

## Example

Let $a<b$ be real numbers, and let $P[a,b]$ be the real polynomial functions on
$[a,b]$ with the supremum norm. Then $P[a,b]$ is not complete. Its completion
is $C([a,b])$.

## Facts & Assumptions

**Given:** Real numbers $a<b$, the midpoint $c:=(a+b)/2$, and the function $h(x):=|x-c|$ on $[a,b]$.

[L1] The real Stone-Weierstrass theorem makes the polynomial algebra dense in $C([a,b])$ for the supremum norm ([[thm-real-stone-weierstrass-for-compact-metric-spaces]]).

[L2] The space $C([a,b])$ is Banach for the supremum norm ([[ex-c-of-a-compact-space-is-banach]]).

[L3] Any two completions of a normed space are uniquely linearly isometric ([[cor-normed-space-completions-are-uniquely-linearly-isometric]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the polynomial algebra $P[a,b]$ is dense in $C([a,b])$, so in particular the continuous function $h(x)=|x-c|$ lies in its supremum-norm closure. [L1]

1.2 The function $h$ is not a polynomial on $[a,b]$: if a polynomial $p$ agreed with $h$, then on $[c,b]$ it would satisfy $p(x)=x-c$, and on $[a,c]$ it would satisfy $p(x)=c-x$. So the polynomial $p(x)-(x-c)$ would vanish on the interval $[c,b]$, hence be identically zero, and similarly $p(x)-(c-x)$ would be identically zero, forcing $x-c=c-x$ for all $x$, impossible because $a<b$. [given, algebra]

2.1 Steps 1.1 and 1.2 show that $P[a,b]$ is dense and proper in the Banach space $C([a,b])$, so it is not complete. [step 1.1, step 1.2, L2]

3.1 Since $C([a,b])$ is Banach by [L2] and contains $P[a,b]$ densely, [L3] identifies the completion of $P[a,b]$ with $C([a,b])$. [step 2.1, L2, L3] ∎
