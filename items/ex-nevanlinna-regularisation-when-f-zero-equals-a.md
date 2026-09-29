---
id: ex-nevanlinna-regularisation-when-f-zero-equals-a
kind: example
title: "A centre a-point requires regularised counting"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, lem-meromorphic-jensen-formula-with-centre-divisor, thm-nevanlinna-first-main-theorem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §1, equation (2) and footnotes 1–2"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §§2,4"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Example

Let $a,c\in\mathbb C$, let $m\ge1$ be an integer, and suppose $c\ne0$. Set
$f(z)=a+cz^m$. For every $r>0$, the central $a$-point has multiplicity $m$,
so $n(0,a;f)=m$ and $N(r,a;f)=m\log r$, although the unregularized integral
$\int_0^r n(t,a;f)\,dt/t$ diverges. The centre Jensen mean is
$M_r\log|f-a|=\log|c|+m\log r$, and the exact First Main Theorem constant is
$\tfrac12\log(1+|a|^2)-\log|c|$. The finite formulas use $c$ because
$f(0)-a=0$.

## Verification

**Given:** $a,c\in\mathbb C$, integer $m\ge1$, $c\ne0$, and $f(z)=a+cz^m$.

[F1] For finite $w,a$, $\delta(w,a)=|w-a|/(\sqrt{1+|w|^2}\sqrt{1+|a|^2})$; $m(r,a;f)$ is the circular mean of $\log(1/\delta(f,a))$, and $T(r,f)=m(r,\infty;f)+N(r,\infty;f)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] $N(r,b;f)=n(0,b;f)\log r+\int_0^r(n(t,b;f)-n(0,b;f))\,dt/t$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] For a finite target $b$, $M_r\log|f-b|=\log|c_b|+N(r,b;f)-N(r,\infty;f)$, where $c_b$ is the first nonzero Laurent coefficient of $f-b$ at $0$ ([[lem-meromorphic-jensen-formula-with-centre-divisor]]).

[F4] For nonconstant meromorphic $f$ and finite $b$, $m(r,b;f)+N(r,b;f)=T(r,f)+C(f,b)$ ([[thm-nevanlinna-first-main-theorem]]).

[F5] When $f(z)-b=c_bz^{k_b}+\cdots$ at $0$, the exact constant is $C(f,b)=\tfrac12\log(1+|b|^2)-\log|c_b|$ ([[thm-nevanlinna-first-main-theorem]]).

1.1 Since $f(z)-a=cz^m$ with $c\ne0$, its only $a$-point is $0$, of multiplicity $m$, and it has no poles. Thus $n(t,a;f)=m$ for every $t\ge0$, while $n(t,\infty;f)=0$. [given, algebra]

1.2 Substituting these counts into [F2] gives $N(r,a;f)=m\log r+\int_0^r(m-m)\,dt/t=m\log r$ for every $r>0$. The central term is the whole regularized count. [F2, algebra]

1.3 For $0<\varepsilon<r$, the unregularized integral from $\varepsilon$ to $r$ is $\int_\varepsilon^r n(t,a;f)\,dt/t=m\log(r/\varepsilon)\to+\infty$ as $\varepsilon\downarrow0$. Thus $\int_0^r n(t,a;f)\,dt/t$ diverges for every $r>0$, even though the regularized $N(r,a;f)$ is finite. [F2, algebra]

2.1 On $|z|=r$, $\log|f(z)-a|=\log|c|+m\log r$, so its circular mean is $\log|c|+m\log r$. Since $N(r,\infty;f)=0$, [F3] gives $M_r\log|f-a|=\log|c|+N(r,a;f)=\log|c|+m\log r$, agreeing with the direct boundary calculation. [F3, step 1.2, algebra]

3.1 By [F1], the finite-target chordal identity averages to $m(r,a;f)=T(r,f)+\tfrac12\log(1+|a|^2)-M_r\log|f-a|$, because $f$ has no poles and hence $T(r,f)=m(r,\infty;f)$. Using step 2.1 gives $m(r,a;f)+N(r,a;f)=T(r,f)+\tfrac12\log(1+|a|^2)-\log|c|$. This computes the finite-target constant directly. [F1, step 2.1, algebra]

4.1 Here $f(z)-a=cz^m$, so $c_a=c$ and $k_a=m$ in [F3] and [F5]; the First Main Theorem constant is exactly $C(f,a)=\tfrac12\log(1+|a|^2)-\log|c|$, agreeing with step 3.1. Since $f(0)-a=0$, $\log|f(0)-a|$ is not a finite logarithm and cannot replace the term $\log|c|$. [F3, F4, F5, step 3.1, algebra] ∎
