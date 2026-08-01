---
id: thm-exponential-two-point-convexity
kind: theorem
title: "The two-point convexity inequality for the exponential function"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-mean-value-theorem, thm-exponential-is-strictly-increasing]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

For all $x,y\in\mathbb R$ and $0\le t\le1$,
$$\exp((1-t)x+ty)\le(1-t)\exp x+t\exp y.$$
If $0<t<1$, equality holds exactly when $x=y$.

## Facts & Assumptions

**Given:** Reals $x,y$ and $t\in[0,1]$.

[L1] $\exp'=\exp$; the chain rule differentiates compositions, and the algebra of derivatives differentiates finite linear combinations ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L2] The mean value theorem applies on a closed interval to a function differentiable in its interior ([[cor-mean-value-theorem]]).

[L3] The exponential is positive and strictly increasing ([[thm-exponential-is-strictly-increasing]]).



## Proof

**Proof technique:** direct.

1.1 Put $d=y-x$ and $g(s)=1-s+s\exp d-\exp(sd)$. Then $g(0)=g(1)=0$ and $g''(s)=-d^2\exp(sd)\le0$. [L1, L3]

2.1 If $0<s<1$, apply the mean value theorem to $g$ on $[0,s]$ and $[s,1]$; since $g'$ is nonincreasing by the mean value theorem applied to $g'$, their slopes give $g(s)/s\ge-g(s)/(1-s)$, hence $g(s)\ge0$. [step 1.1, L1, L2]

3.1 Multiplying by $\exp x>0$ converts $g(t)\ge0$ into the displayed inequality. [step 2.1, L3]

4.1 When $0<t<1$ and $d\ne0$, $g''<0$, so the slope comparison is strict and $g(t)>0$; when $d=0$, equality is immediate. [step 1.1, step 2.1, L3] ∎
