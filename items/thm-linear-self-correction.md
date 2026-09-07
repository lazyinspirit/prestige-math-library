---
id: thm-linear-self-correction
kind: theorem
title: "Pointwise correctness under less than quarter noise"
status: draft
origin: pipeline
deps: [def-self-correction-of-a-noisy-linear-function, lem-boolean-cube-fourier-inversion-and-parseval]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a718.4.1 Local decoding pp.364\u2013365"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $n\geq0$ and suppose a fixed $f:\mathbb F_2^n\to\mathbb F_2$ has distance $\delta<1/4$ from a linear function $\ell$. Then $\ell$ is the unique linear function at distance less than $1/4$ from $f$. At every fixed requested point $x$, the two-query corrector outputs $\ell(x)$ with probability at least $1-2\delta>1/2$, using two oracle calls and $n$ random bits.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The corrector samples uniform y and returns f(y)+f(x+y) with two queries and n random bits ([[def-self-correction-of-a-noisy-linear-function]]).

[F2] Distinct linear Boolean functions disagree at exactly half of the cube points ([[lem-boolean-cube-fourier-inversion-and-parseval]]).

## Proof

1.1 If another linear function $m\ne\ell$ had distance less than $1/4$ from $f$, each point where $\ell\ne m$ would be a disagreement of at least one of them with $f$. Counting these points gives $\operatorname{dist}(\ell,m)\leq\operatorname{dist}(\ell,f)+\operatorname{dist}(f,m)<1/2$, contradicting their exact half-distance. Thus the nearby linear function is unique. [F2, given, algebra]

1.2 Let $E=\{z:f(z)\ne\ell(z)\}$, of size $\delta2^n$. For fixed $x$, both $y$ and $x+y$ are uniform, since translation is a bijection. Thus each event $y\in E$, $x+y\in E$ has probability $\delta$. The indicator of their union is at most their indicator sum, so with probability at least $1-2\delta$ neither event occurs. Independence of these two locations is unnecessary. [F1, given, algebra]

2.1 On that event the output is $\ell(y)+\ell(x+y)=\ell(x)$ by linearity. The sampling and calls are exactly those of the corrector. For $x=0$, the two queried values are identical and their sum is always zero, which equals $\ell(0)$. For $n=0$, the hypothesis forces $\delta=0$ on the singleton cube; the same algorithm uses zero random bits. Zero noise gives success one for every point; the excluded endpoint $\delta=1/4$ would give only the lower bound one half. [F1, step 1.1, step 1.2, algebra] ∎
