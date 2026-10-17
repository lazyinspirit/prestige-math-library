---
id: thm-taylor-schlomilch-roche-remainder
kind: theorem
title: "Taylor's Schlömilch–Roche remainder formula"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-taylor-polynomial-and-remainder, lem-taylor-polynomial-derivatives, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, lem-cauchy-mean-value-quotient-form, thm-algebra-of-derivatives, lem-derivative-of-a-power, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "MathWorld, Schlömilch's remainder"
      url: "https://mathworld.wolfram.com/SchloemilchRemainder.html"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$, let $a<x$, and suppose $f$ has derivatives through order $n+1$ on $[a,x]$, with the usual endpoint continuity. For every natural $p$ with $1\le p\le n+1$, some $\xi\in(a,x)$ satisfies
$$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi)}{\iota(p)\,\iota(n!)}(x-\xi)^{n+1-p}(x-a)^p.$$
The reflected formula holds when $x<a$.

## Facts & Assumptions

**Given:** $f,a,x,n,p$ as stated.

[L1] The Taylor polynomial and remainder are those of [[def-taylor-polynomial-and-remainder]], with coefficient identities from [[lem-taylor-polynomial-derivatives]].

[L2] The Cauchy mean-value quotient form is [[lem-cauchy-mean-value-quotient-form]].

[L3] Finite-sum differentiation is licensed by [[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]], and [[lem-finite-sum-laws]].

[L4] If $p\ge1$, then the canonical real $\iota(p)$ is positive and nonzero ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi(t):=f(x)-\sum_{j=0}^{n}f^{(j)}(t)(x-t)^j/\iota(j!)$ and $\Psi(t):=(x-t)^p$. Telescoping after differentiating the sum gives $\Phi'(t)=-f^{(n+1)}(t)(x-t)^n/\iota(n!)$, while $\Psi'(t)=-\iota(p)(x-t)^{p-1}$.  [L1, L3, algebra]

1.2 We have $\Phi(a)=R_{n,a}f(x)$, $\Phi(x)=0$, $\Psi(a)=(x-a)^p$, and $\Psi(x)=0$. Also $\Psi'\ne0$ on $(a,x)$, because $p\ge1$, $\iota(p)>0$, and $x-t>0$.  [given, L1, L4, algebra]

2.1 Apply [L2] to $\Phi,\Psi$. For some $\xi\in(a,x)$, $\Phi(a)/\Psi(a)=\Phi'(\xi)/\Psi'(\xi)=f^{(n+1)}(\xi)(x-\xi)^{n+1-p}/(\iota(p)\iota(n!))$.  [step 1.1, step 1.2, L2]

3.1 Multiply by $(x-a)^p$. If $x<a$, interchange the interval endpoints; the same algebraic identity results.  [step 2.1, algebra] ∎
