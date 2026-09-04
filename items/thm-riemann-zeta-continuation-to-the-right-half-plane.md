---
id: thm-riemann-zeta-continuation-to-the-right-half-plane
kind: theorem
title: "For $\\operatorname{Re}s>0$, zeta admits the fractional-part integral formula with a simple residue-one pole at $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-zeta-function, thm-p-series-rational]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

For every complex number $s$ with $\operatorname{Re}s>0$ and $s\ne1$,

$$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty \{x\}x^{-s-1}\,dx,$$

where $\{x\}=x-\lfloor x\rfloor$ is the fractional part. The integral defines a
holomorphic function on $\operatorname{Re}s>0$, so the right-hand side is
meromorphic there with a single simple pole at $s=1$ of residue $1$.

## Facts & Assumptions

**Given:** A complex number $s$ with $\operatorname{Re}s>1$.

[L1] On $\operatorname{Re}s>1$, $\zeta(s)=\sum_{n\ge1}n^{-s}$
([[def-riemann-zeta-function]]).

[L2] For rational $p>1$, the series $\sum_{n\ge1}n^{-p}$ converges
([[thm-p-series-rational]]).

## Proof

**Proof technique:** direct.

1.1 For $N\ge2$, $$s\int_1^N \lfloor x\rfloor x^{-s-1}\,dx=\sum_{n=1}^{N-1} n\!\int_n^{n+1} s x^{-s-1}\,dx=\sum_{n=1}^{N-1} n(n^{-s}-(n+1)^{-s}).$$ Expanding the last sum gives $$s\int_1^N \lfloor x\rfloor x^{-s-1}\,dx=\sum_{n=1}^{N-1}n^{-s}-(N-1)N^{-s},$$ and therefore $$\sum_{n=1}^{N}n^{-s}=N^{1-s}+s\int_1^N \lfloor x\rfloor x^{-s-1}\,dx.$$ [given, L1, algebra]

2.1 Since $\operatorname{Re}s>1$, the term $N^{1-s}$ tends to $0$ as $N\to\infty$. Letting $N\to\infty$ in step 1.1 and using [L1] yields $$\zeta(s)=s\int_1^\infty \lfloor x\rfloor x^{-s-1}\,dx=s\int_1^\infty (x-\{x\})x^{-s-1}\,dx.$$ Also $$s\int_1^\infty x^{-s}\,dx=\frac{s}{s-1},$$ so $$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty \{x\}x^{-s-1}\,dx$$ on $\operatorname{Re}s>1$. [step 1.1, L1, algebra]

3.1 Let $K\subseteq\{s\in\mathbb C:\operatorname{Re}s>0\}$ be compact, and choose $\sigma>0$ with $\operatorname{Re}s\ge\sigma$ on $K$. Because $0\le\{x\}<1$, $$\bigl|\{x\}x^{-s-1}\bigr|\le x^{-\sigma-1}\qquad(x\ge1,\ s\in K).$$ Taking $\sigma$ rational with $\sigma>0$, [L2] implies $\int_1^\infty x^{-\sigma-1}\,dx<\infty$, so the integral in step 2.1 converges absolutely and locally uniformly on $\operatorname{Re}s>0$. Hence it defines a holomorphic function there. Therefore the displayed formula continues meromorphically to $\operatorname{Re}s>0$, and the only singularity is the simple pole of $s/(s-1)$ at $1$, whose residue is $1$. [step 2.1, L2, choose, algebra] ∎
