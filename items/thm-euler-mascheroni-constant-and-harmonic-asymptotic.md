---
id: thm-euler-mascheroni-constant-and-harmonic-asymptotic
kind: theorem
title: "The Euler–Mascheroni constant and the harmonic asymptotic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-logarithm-derivative-and-integral, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, thm-monotone-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-14
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, Exercise 4.3.14"
      url: "https://digitalcommons.trinity.edu/mono/7/"
pipeline_run: null
---

## Statement

For $n\ge1$, let

$$H_n=\sum_{k=1}^{n}\frac1k,\qquad \gamma_n=H_n-\log n.$$

The sequence $(\gamma_n)$ is strictly decreasing and is bounded below by
$1-\log2$. It therefore converges to a constant $\gamma$ satisfying
$0<\gamma<1$, and

$$H_n=\log n+\gamma+o(1).$$

Consequently, $H_n/\log n\to1$ as $n\to\infty$, with the quotient considered
for $n\ge2$.

## Facts & Assumptions

**Given:** The sequences $(H_n)$ and $(\gamma_n)$ displayed in the statement.

[A1] For every $n\ge1$,
$H_n=\sum_{k=1}^n1/k$ and $\gamma_n=H_n-\log n$.

[L1] For $x>0$, $\log x=\int_1^x dt/t$, and the derivative of $\log$ is
$1/x$ ([[thm-logarithm-derivative-and-integral]]).

[L2] Let $a<b$ and let $f,g:[a,b]\to\mathbb R$ be integrable. If $f(x)\ge0$
for every $x\in[a,b]$, then $\int_a^b f\ge0$; if $f(x)\le g(x)$ for every
$x\in[a,b]$, then $\int_a^b f\le\int_a^b g$; and if $m\le f(x)\le M$ for every
$x\in[a,b]$, with $m,M$ real, then
$m(b-a)\le\int_a^b f\le M(b-a)$ ([[thm-monotonicity-of-the-integral]]).

[L3] If $a<c<b$, then a bounded function on $[a,b]$ is integrable there exactly
when its restrictions to $[a,c]$ and $[c,b]$ are integrable, and in that case
$\int_a^b f=\int_a^c f+\int_c^b f$
([[thm-additivity-over-subintervals]]).

[L4] Every nonincreasing real sequence that is bounded below converges to its
infimum ([[thm-monotone-convergence]]).

## Proof

**Proof technique:** direct.

1.1 For every $n\ge1$, $\gamma_{n+1}-\gamma_n=1/(n+1)-\int_n^{n+1}dt/t$. [A1, L1, L3, algebra]

1.2 Splitting the integral at $n+1/2$ gives $\int_n^{n+1}dt/t\ge (1/2)/(n+1/2)+(1/2)/(n+1)>1/(n+1)$. [L2, L3, algebra]

1.3 If $n\ge2$, additivity and $1/t\le1/k$ on $[k,k+1]$ give $\log n=\log2+\sum_{k=2}^{n-1}\int_k^{k+1}dt/t\le\log2+\sum_{k=2}^{n-1}1/k$, where the sum is empty when $n=2$; thus $\gamma_n\ge1-\log2+1/n>1-\log2$. [A1, L1, L2, L3, algebra]

1.4 Splitting $[1,2]$ at $3/2$ gives $\log2=\int_1^2dt/t\le1/2+1/3=5/6<1$; in particular, $\gamma_1=1\ge1-\log2>0$. [A1, L1, L2, L3, algebra]

1.5 For every integer $m\ge1$, splitting $[1,2^m]$ into $[2^j,2^{j+1}]$ gives $\log(2^m)=\sum_{j=0}^{m-1}\int_{2^j}^{2^{j+1}}dt/t\ge\sum_{j=0}^{m-1}1/2=m/2$. [L1, L2, L3, algebra]

2.1 Hence $\gamma_{n+1}<\gamma_n$ for every $n\ge1$. [step 1.1, step 1.2, algebra]

2.2 Therefore $\gamma_n\ge1-\log2$ for every $n\ge1$. [step 1.3, step 1.4]

2.3 It follows that $\log n\to\infty$. Let $m\ge1$ and $n\ge2^m$. If $n=2^m$ then $\log n=\log(2^m)$. If $n>2^m$ then $1<2^m<n$, so $\log n=\int_1^ndt/t=\int_1^{2^m}dt/t+\int_{2^m}^ndt/t=\log(2^m)+\int_{2^m}^ndt/t$, and $1/t\ge0$ on $[2^m,n]$ makes that last integral nonnegative. Either way $\log n\ge\log(2^m)\ge m/2$. [L1, L2, L3, step 1.5, algebra]

3.1 By monotone convergence, there is a real number $\gamma$ such that $\gamma_n\to\gamma$. [L4, step 2.1, step 2.2]

3.2 The lower bound and strict decrease give $0<\gamma_n\le\gamma_1=1$ for every $n\ge1$. [step 1.4, step 2.1, step 2.2]

4.1 Since $\gamma$ is the infimum of the $\gamma_n$, $\gamma\ge1-\log2>0$; and since the sequence is strictly decreasing, $\gamma\le\gamma_2<\gamma_1=1$. Hence $0<\gamma<1$. [step 1.4, step 2.1, step 2.2, step 3.1, algebra]

4.2 The identity $H_n=\log n+\gamma_n$ and the convergence $\gamma_n\to\gamma$ give $H_n=\log n+\gamma+(\gamma_n-\gamma)=\log n+\gamma+o(1)$. [A1, step 3.1, algebra]

4.3 Consequently, $\gamma_n/\log n\to0$ as $n\to\infty$. [step 2.3, step 3.2, algebra]

5.1 Finally, for $n\ge2$, $H_n/\log n=1+\gamma_n/\log n\to1$. [A1, step 4.3, algebra] ∎
