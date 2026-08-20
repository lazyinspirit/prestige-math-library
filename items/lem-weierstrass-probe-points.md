---
id: lem-weierstrass-probe-points
kind: lemma
title: "Nearest-integer probe points for the Weierstrass function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-classical-weierstrass-function, lem-integer-part,
       thm-sine-and-cosine-addition-formulas,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       thm-quarter-turn-values-and-shift-formulas,
       thm-sine-and-cosine-derivatives,
       lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
short: "Weierstrass probe points"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, equations (4) to (6)"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Statement

Let $0<a<1$, let $b>1$ be an odd integer, and fix $x_0\in\mathbb R$. For each
$m\in\mathbb N$, define

$$k_m:=\left\lfloor b^m x_0+\frac12\right\rfloor,\qquad z_m:=b^m x_0-k_m,\qquad x_m:=\frac{k_m+1}{b^m}.$$

Then $k_m$ is an integer, $-1/2\le z_m<1/2$, and
$0<x_m-x_0\le 3/(2b^m)$ and $x_m\to x_0$.

For every $n\ge m$, $\cos(b^n\pi x_m)=-(-1)^{k_m}$ and $\cos(b^n\pi x_0)=(-1)^{k_m}\cos(b^{n-m}z_m\pi)$.

## Facts & Assumptions

**Given:** Parameters and points as in the Statement.

[L1] In the classical Weierstrass construction, $0<a<1$ and $b>1$ is an odd integer ([[def-classical-weierstrass-function]]).

[L2] For every real $x$ there is exactly one integer $k$ with $k\le x<k+1$, namely $k=\lfloor x\rfloor$ ([[lem-integer-part]]).

[L3] If $|r|>1$, then $|r|^m$ diverges to $+\infty$ ([[lem-geometric-sequence-null]]).

[L4] For all reals $x,y$, $\cos(x+y)=\cos x\cos y-\sin x\sin y$ ([[thm-sine-and-cosine-addition-formulas]]).

[L5] Both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L6] For every real $x$, $\sin(x+\pi)=-\sin x$ and $\cos(x+\pi)=-\cos x$, with $\sin0=0$ and $\cos0=1$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to $b^m x_0+1/2$. The resulting integer $k_m$ satisfies $k_m\le b^m x_0+1/2<k_m+1$, hence $-1/2\le z_m=b^m x_0-k_m<1/2$. [L1, L2, construct, algebra]

2.1 Since $x_m-x_0=(1-z_m)/b^m$, step 1.1 and $b^m>0$ give $0<x_m-x_0\le3/(2b^m)$. [step 1.1, algebra]

3.1 Let $\varepsilon>0$. By [L3], for all sufficiently large $m$ one has $b^m>3/(2\varepsilon)$, hence step 2.1 gives $0<x_m-x_0\le3/(2b^m)<\varepsilon$. Thus $x_m\to x_0$. [step 2.1, L3, algebra]

4.1 For $n\ge m$, the integer $b^{n-m}$ is odd. The identities $b^n x_m=b^{n-m}(k_m+1)$ and $b^n x_0=b^{n-m}(k_m+z_m)$, followed by repeated use of [L4] to shift through integer multiples of $\pi$, give the two asserted cosine values; oddness preserves the parity of $k_m$ and reverses the parity of $k_m+1$. [step 1.1, L1, L4, L5, L6, algebra] ∎
