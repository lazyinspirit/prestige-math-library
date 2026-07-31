---
id: thm-cauchy-hadamard-for-real-power-series
kind: theorem
title: "Cauchy–Hadamard: the reciprocal radius is $\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}$, with the zero and infinite cases included"
status: published
origin: session
deps: [def-real-power-series-and-radius-of-convergence, def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, thm-root-test, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
verification:
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put

$$L:=\limsup_{k\to\infty}|a_{k+1}|^{1/(k+1)}\in[0,+\infty].$$

Then $R$ is the reciprocal of $L$ in the following explicit sense:

$$R=\begin{cases}+\infty,&L=0,\\[2pt]1/L,&0<L<+\infty,\\[2pt]0,&L=+\infty.\end{cases}$$

Equivalently, with the conventions $1/0:=+\infty$ and $1/(+\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\mathbb N$ starts at $0$ and a zeroth root is undefined.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$, its radius $R$, the nonnegative root sequence $q_k:=|a_{k+1}|^{1/(k+1)}$, and $L:=\limsup_k q_k$.

[L1] The limit superior $L$ exists in $\overline{\mathbb R}$ for every real sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] If $L$ is real, then for every real $\varepsilon>0$, $q_k<L+\varepsilon$ eventually and $q_k>L-\varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L3] The root test says that a real series from index $1$ converges absolutely when the limit superior of its shifted roots is $<1$, and diverges when that limit superior is $>1$ ([[thm-root-test]]).

[L4] Absolute convergence means convergence of the series of absolute values ([[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb R$ and put $d:=|x-c|$. The shifted roots of the terms $a_n(x-c)^n$, $n\ge1$, are $|a_{k+1}(x-c)^{k+1}|^{1/(k+1)}=q_kd$. [given, algebra]

2.1 If $L=0$, then for $d=0$ every root in step 1.1 is $0$, while for $d>0$ and any $\eta>0$, [L2] applied with $\varepsilon=\eta/d$ makes $q_kd<\eta$ eventually. Thus $\limsup_k(q_kd)=0<1$ for every $x$. [step 1.1, L2]

2.2 Suppose $0<L<+\infty$. If $d<1/L$, choose a real $t$ with $L<t<1/d$ (with the second inequality omitted when $d=0$). By [L2], $q_k<t$ eventually, so $\limsup_k(q_kd)\le td<1$. If $d>1/L$, choose $t$ with $1/d<t<L$; [L2] gives $q_k>t$ frequently, so $\limsup_k(q_kd)\ge td>1$. [step 1.1, L2, choose]

2.3 If $L=+\infty$ and $d>0$, then for every real $M>0$ and every index $N$ there is $k\ge N$ with $q_k>M$: otherwise $M$ would bound a tail and its supremum, forcing the infimum of the tail suprema to be finite. Taking $M>1/d$ shows $q_kd>1$ arbitrarily late, hence $\limsup_k(q_kd)>1$. [L1, step 1.1, choose]

3.1 By [L3] and [L4], step 2.1 gives absolute convergence at every real $x$ when $L=0$; step 2.2 gives absolute convergence for $d<1/L$ and divergence for $d>1/L$ when $0<L<+\infty$; and step 2.3 gives divergence at every $x\ne c$ when $L=+\infty$, while the series converges at $c$ to $a_0$. [step 2.1, step 2.2, step 2.3, L3, L4]

4.1 Reading these three alternatives through the definition of the radius yields $R=+\infty$, $R=1/L$, and $R=0$, respectively, which is the stated convention-complete formula. [step 3.1] ∎
