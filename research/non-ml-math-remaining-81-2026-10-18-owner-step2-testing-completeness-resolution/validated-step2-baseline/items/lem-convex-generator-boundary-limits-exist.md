---
id: lem-convex-generator-boundary-limits-exist
kind: lemma
title: Boundary limits of a normalized finite convex generator exist
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-complete-ordered-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Igal Sason and Sergio Verdú, f-Divergence Inequalities, §II-B, equations (35)–(39)"
      url: "https://arxiv.org/pdf/1508.00335"
---

## Statement

Let $f:(0,\infty)\to\mathbb R$ be convex and satisfy $f(1)=0$. Then $f$
is continuous on $(0,\infty)$, and both extended-real limits
$$f(0):=\lim_{t\downarrow0}f(t),\qquad f_\infty:=\lim_{t\to\infty}\frac{f(t)}t$$
exist in $\mathbb R\cup\{+\infty\}$; neither limit is $-\infty$.

## Facts & Assumptions

**Given:** A finite convex function $f:(0,\infty)\to\mathbb R$ with
$f(1)=0$.

[F1] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]:
convexity means $f((1-s)x+sy)\le(1-s)f(x)+sf(y)$ for positive $x,y$
and $s\in[0,1]$.

[F2] [[def-complete-ordered-field]]: every nonempty set of real numbers
bounded above has a real supremum, and every nonempty set bounded below has
a real infimum.

## Proof

1.1 Fix $c>0$ and let $u=c/2$, $a=3c/4$, $b=5c/4$, and $v=3c/2$. For $r<s$, write $m(r,s)=(f(s)-f(r))/(s-r)$. If $a\le x<y\le b$, convexity at $a$ between $u,x$, at $x$ between $u,y$, at $y$ between $x,v$, and at $b$ between $y,v$ gives $m(u,a)\le m(u,x)\le m(x,y)\le m(y,v)\le m(b,v)$ by rearranging the four two-point inequalities in [F1]. All these endpoint slopes are finite. Thus with $M=\max\{|m(u,a)|,|m(b,v)|\}$, one has $|f(y)-f(x)|\le M|y-x|$ for $x,y\in[a,b]$, including $x=y$. [F1, given, construct, algebra]

1.2 Fix $a=1/2$ and set $n(x)=(f(a)-f(x))/(a-x)$ for $0<x<a$. If $0<x<y<a$, then $y$ is a convex combination of $x$ and $a$; [F1] gives $f(y)\le\frac{a-y}{a-x}f(x)+\frac{y-x}{a-x}f(a)$. Rearranging yields $n(x)\le n(y)$. Also $a$ is a convex combination of $x$ and $1$, so another application of [F1] gives $n(x)\le(f(1)-f(a))/(1-a)$, a finite upper bound. Therefore $L:=\inf_{0<x<a}n(x)$ is either real or $-\infty$; the infimum property from [F2] gives $n(x)\to L$ as $x\downarrow0$ (if $L$ is finite, approximate it within any $\varepsilon>0$; if $L=-\infty$, use any real lower target). Since $f(x)=f(a)-(a-x)n(x)$, its limit is $f(a)-aL$ if $L$ is finite and $+\infty$ if $L=-\infty$. Thus $f(0)$ exists and is not $-\infty$. [F1, F2, given, algebra]

2.1 Given $\varepsilon>0$, choose $\delta=\min\{c/4,\varepsilon/(M+1)\}$. If $|x-c|<\delta$, then $x,c\in[a,b]$, and step 1.1 gives $|f(x)-f(c)|\le M|x-c|<\varepsilon$. This is continuity at the arbitrary $c>0$, so $f$ is continuous on $(0,\infty)$. [step 1.1, given, choose, algebra]

3.1 For $t>1$, put $r(t)=f(t)/(t-1)$. If $1<s<t$, then $s$ is a convex combination of $1$ and $t$. By [F1] and $f(1)=0$, this gives $r(s)\le r(t)$. Hence $r$ is nondecreasing on $(1,\infty)$ and bounded below on $[2,\infty)$ by the finite value $r(2)$. By the supremum property in [F2], its limit is the real supremum $R$ if it is bounded above, and is $+\infty$ otherwise: for finite $R$, values eventually lie between $R-\varepsilon$ and $R$; when unbounded, they eventually exceed any prescribed real number. Since $f(t)/t=((t-1)/t)r(t)$ and $(t-1)/t\to1$, this quotient tends to $R$ if $R$ is finite; if $R=+\infty$, the factor is at least $1/2$ for $t\ge2$ and the quotient tends to $+\infty$. Thus $f_\infty$ exists and is not $-\infty$. [F1, F2, given, algebra] ∎
