---
id: thm-real-gamma-endpoint-behaviour-and-unique-minimum
kind: theorem
title: 'The real Gamma function has one minimum and diverges at both ends of its domain'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-functional-equation, cor-real-gamma-positive-integer-values, thm-real-gamma-is-smooth, thm-real-gamma-is-log-convex, thm-differentiable-convex-functions-and-monotone-derivatives, cor-mean-value-theorem, thm-monotonicity-from-the-derivative, def-factorial-and-falling-factorial, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.3(c,d)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

As $s\downarrow0$, $s\Gamma(s)\to1$ and $\Gamma(s)\to+\infty$. As $s\to+\infty$, both $\Gamma(s)$ and $\Gamma(s)/s$ tend to $+\infty$. Moreover there is a unique $s_0\in(1,2)$ at which $\Gamma$ attains its global minimum; it decreases on $(0,s_0]$ and increases on $[s_0,\infty)$.

## Facts & Assumptions

**Given:** The positive smooth function $\Gamma$ on $(0,\infty)$ and $g:=\log\Gamma$.

[F1] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F2] The real Gamma function is strictly log-convex on $(0,\infty)$ ([[thm-real-gamma-is-log-convex]]).

[F3] The real Gamma function is smooth on $(0,\infty)$ ([[thm-real-gamma-is-smooth]]).

[F4] For every natural $n$, $\Gamma(n+1)=n!$ ([[cor-real-gamma-positive-integer-values]]).

[F5] For a differentiable $f$ on an open interval, $f$ is convex if and only if $f'$ is nondecreasing ([[thm-differentiable-convex-functions-and-monotone-derivatives]]).

[F6] If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$ ([[cor-mean-value-theorem]]); a function with positive derivative on an interval is increasing there and one with negative derivative is decreasing ([[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** direct.

1.1 By continuity at $1$ and [F1], $s\Gamma(s)=\Gamma(s+1)\to\Gamma(1)=1$ as $s\downarrow0$. Since $s\to0^+$, this also gives $\Gamma(s)\to+\infty$. [F1, algebra]

1.2 One has $g(1)=g(2)=0$, while strict convexity [F2] gives $g(x)<0$ for $1<x<2$. Fixing such an $x$ and applying [F6] on $[1,x]$ and on $[x,2]$ gives $\xi\in(1,x)$ with $g'(\xi)<0$ and $\eta\in(x,2)$ with $g'(\eta)>0$. [F2, F6, algebra]

2.1 By [F2] and [F5], $g'$ is nondecreasing. If $g'(u)=g'(v)$ for some $u<v$, then $g'$ is constant on $[u,v]$, so $g$ is affine there, contradicting the strict convexity of [F2]; hence $g'$ is strictly increasing and has at most one zero. By [F3] it is continuous, so the sign change in step 1.2 gives exactly one zero $s_0\in(1,2)$. Strict increase makes $g'$ negative before $s_0$ and positive after it, so [F6] makes $g$, and hence $\Gamma$, decreasing on $(0,s_0]$ and increasing on $[s_0,\infty)$, and $s_0$ is the unique global minimum. [step 1.2, F2, F3, F5, F6]

3.1 By [F4], $\Gamma(n+1)=n!$. For $n\ge3$, the ratios of $(n-1)!/(n+1)$ grow by a factor exceeding $2$, so this sequence tends to infinity. By the eventual increase from step 2.1, if $n\le s<n+1$ then $\Gamma(s)\ge\Gamma(n)=(n-1)!$ and $\Gamma(s)/s\ge(n-1)!/(n+1)$. Thus both quantities tend to infinity. [step 2.1, F4, algebra] ∎
