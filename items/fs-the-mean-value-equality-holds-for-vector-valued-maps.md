---
id: fs-the-mean-value-equality-holds-for-vector-valued-maps
kind: false-statement
title: "FALSE: the mean value equality holds for vector-valued maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-circular-curve-defeats-vector-valued-mean-value-equality,
       thm-mean-value-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 8.3 and 11.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, section 2.1 Differentiation of real-valued functions"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.1.html"
    - title: "W. S. Hall and M. L. Newell, The Mean Value Theorem for Vector Valued Functions: A Simple Proof"
      url: "https://www.maths.tcd.ie/pub/ims/news07/news_all07.pdf"
pipeline_run: null
---

## Statement

**False claim.** Let $m\in\mathbb N$ with $m\ge1$, let $a<b$ be real, and let
$f:[a,b]\to\mathbb R^m$ be continuous on $[a,b]$ and differentiable on
$(a,b)$. Then some $\xi\in(a,b)$ satisfies

$$f(b)-f(a)=(b-a)f'(\xi).$$

## Facts & Assumptions

**Given:** The universal equality claim in the Statement.

[L1] The curve $f(t)=(\cos t,\sin t)$ on $[0,2\pi]$ is continuous on its interval and differentiable in its interior, its endpoint increment is zero, and $\lVert f'(t)\rVert_2=1$ for every $t\in(0,2\pi)$; hence no $\xi\in(0,2\pi)$ satisfies the claimed equality ([[cex-circular-curve-defeats-vector-valued-mean-value-equality]]).

[L2] Let $m\in\mathbb N$ with $m\ge1$, let $a<b$ be real, and let $M\ge0$ be real. If $f:[a,b]\to\mathbb R^m$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $\lVert f'(t)\rVert_2\le M$ throughout $(a,b)$, then $\lVert f(b)-f(a)\rVert_2\le M(b-a)$ ([[thm-mean-value-inequality]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] supplies an instance with $m=2$, $a=0$, and $b=2\pi$ that satisfies both hypotheses of the false claim but not its conclusion. [L1]

2.1 Therefore the universal equality claim is false. [step 1.1]

3.1 The failure does not affect the vector-valued mean value inequality: under its derivative-bound hypothesis, the estimate in [L2] remains valid. [L2] ∎

## Remarks

When $m=1$, the scalar mean value theorem does give the equality. The circular curve shows that the passage to a vector codomain, not a loss of regularity, is what breaks it.
