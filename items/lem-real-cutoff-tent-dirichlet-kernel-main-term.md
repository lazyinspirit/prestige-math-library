---
dependency_level: 1
id: lem-real-cutoff-tent-dirichlet-kernel-main-term
kind: lemma
title: Real-cutoff tent kernel with its principal term
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- thm-logarithm-derivative-and-integral
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-newton-leibniz-with-interior-derivative
- thm-integration-by-parts-with-interior-derivatives
- thm-continuous-implies-integrable
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Matomäki–Radziwiłł, Multiplicative Functions in Short Intervals, Lemmas8,11,13; elementary local alternative arguments and refined kernel calculation
    url: https://arxiv.org/pdf/1501.04585v4
  - title: Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals, Lemma2.5; local Selberg/tent-kernel alternative
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

For real $L\ge1$ and $u\in\mathbb R$, put $K_L(u)=\sum_{1\le n\le L}(1-n/L)n^{-iu}$. Then

$$K_L(u)=\frac{L^{1-iu}}{(1-iu)(2-iu)}+O\bigl(\sqrt{1+|u|}\log(2+|u|)\bigr),$$

uniformly with an absolute constant. Here $n^{-iu}=\exp(-iu\log n)$.

## Statement references

[[thm-logarithm-derivative-and-integral]]

[[thm-complex-exponential-is-entire-with-derivative-itself]]

[[thm-newton-leibniz-with-interior-derivative]]

[[thm-integration-by-parts-with-interior-derivatives]]

[[thm-continuous-implies-integrable]]

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] On positive real inputs, $(\log x)'=1/x$, and the complex exponential has derivative itself. The chain and product rules therefore give $(x^{-it})'=(-it)x^{-it-1}$ and $(x^{-it})''=(-it)(-it-1)x^{-it-2}$. [[thm-logarithm-derivative-and-integral]] [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F2] Continuous real functions on compact intervals are Riemann integrable. Newton–Leibniz and integration by parts apply on these intervals with interior derivatives; their complex versions follow by real and imaginary parts. Apply them separately on the finitely many unit intervals when a periodic Bernoulli function is only piecewise smooth. [[thm-continuous-implies-integrable]] [[thm-newton-leibniz-with-interior-derivative]] [[thm-integration-by-parts-with-interior-derivatives]]

## Proof

1.1 For $|u|\le2$, put $g(x)=x^{-iu}$. Euler summation on unit intervals gives $\sum_{a\le n<b}g(n)-\int_a^bg(x)dx=(g(a)-g(b))/2+\int_a^b(\{x\}-1/2)g'(x)dx$. Integrate the last term by parts using the bounded continuous periodic function $B_2(x)=(\{x\}^2-\{x\}+1/6)/2$, whose derivative off the integers is $\{x\}-1/2$. Since $|g''(x)|\le6/x^2$ and $|g'(x)|\le2/x$, starting at $a=1$ makes all error and boundary terms uniformly bounded. It follows that $S(x,u):=\sum_{n\le x}n^{-iu}=x^{1-iu}/(1-iu)+O(1)$ for all $x\ge0$ (the interval $0\le x<1$ is immediate). For $u<-2$ use conjugation. For $t=u>2$, the following elementary estimates establish the same identity with error $O(\sqrt t\log t)$. [given, F1, F2, algebra]

2.1 Let $\phi$ be a real $C^2$ function on an interval containing consecutive integers $m,m+1,\ldots,m+L$, where $L\ge1$, and put $\Delta_n:=\phi(n+1)-\phi(n)$ for $m\le n<m+L$. If these increments are monotone and lie in one component of $\mathbb R\setminus2\pi\mathbb Z$, at distance at least $\eta\in(0,1]$ from $2\pi\mathbb Z$, set $z_n=e^{i\phi(n)}$ and $h(\theta):=(1-e^{i\theta})^{-1}$. Then $z_n=h(\Delta_n)(z_n-z_{n+1})$, and summation by parts gives $\sum_{n=p}^{q}z_n=h(\Delta_p)z_p-h(\Delta_q)z_{q+1}+\sum_{n=p+1}^{q}(h(\Delta_n)-h(\Delta_{n-1}))z_n$ for $m\le p\le q<m+L$. Define $d(\theta,2\pi\mathbb Z):=\inf_{k\in\mathbb Z}|\theta-2\pi k|$. On the component, $|1-e^{i\theta}|\gg d(\theta,2\pi\mathbb Z)$, so $|h(\theta)|\ll\eta^{-1}$ and $|h'(\theta)|\ll d(\theta,2\pi\mathbb Z)^{-2}$. Integrating this derivative bound from distance $\eta$ to the midpoint between neighboring multiples of $2\pi$ gives total variation $O(\eta^{-1})$; monotonicity of $\Delta_n$ bounds the variation sum by that integral. Hence every such consecutive phase sum is $O(\eta^{-1})$. [given, F1, F2, step 1.1, algebra]

3.1 Suppose $\phi$ is real and $C^2$ on an interval containing $m,m+1,\ldots,m+L$, and for fixed $C_0\ge1$ its second derivative has constant sign and satisfies $\lambda\le|\phi''(x)|\le C_0\lambda$ there, where $0<\lambda\le1/4$. Writing $\Delta_n=\phi(n+1)-\phi(n)$, we have $\Delta_{n+1}-\Delta_n=\int_0^1\int_{n+s}^{n+s+1}\phi''(v)\,dv\,ds$ for $m\le n<m+L-1$, so the increments are monotone, have gaps at least $\lambda$, and have total range length $O(L\lambda)$. With $\eta:=\sqrt\lambda$, this range meets $O(L\lambda+1)$ neighborhoods of radius $\eta$ around multiples of $2\pi$, and each neighborhood contains $O(\eta/\lambda+1)$ increments. Thus the number of indices within distance $\eta$ of $2\pi\mathbb Z$ is $O((L\lambda+1)(\eta/\lambda+1))=O(L\sqrt\lambda+\lambda^{-1/2})$. The remaining indices can be cut at every jump crossing a multiple of $2\pi$; there are $O(L\lambda+1)$ such jumps because the increment range has length $O(L\lambda)$. Together with the $O(L\lambda+1)$ contiguous near-multiple clusters, these cuts form $O(L\lambda+1)$ consecutive blocks, each lying in an interval $[2\pi k+\eta,2\pi(k+1)-\eta]$ for some integer $k$. Step 2.1 bounds the phase sum on each block by $O(\eta^{-1})$. The removed terms have modulus one, so $\left|\sum_{n=m}^{m+L-1}e^{i\phi(n)}\right|=O(L\sqrt\lambda+\lambda^{-1/2})$, with implied constant depending only on $C_0$. [given, F1, F2, step 2.1, algebra]

4.1 Put $g(x):=x^{-it}$ and $S(x,t):=\sum_{1\le n\le x}n^{-it}$ for $x\ge0$, with an empty sum when $x<1$. If $2<t<4$, then $a_0:=\lceil t^{3/2}\rceil\le8$, so for $1\le x\le a_0$ the sum and integral each have size at most $8$ and their difference is $O(\sqrt t\log t)$. Suppose now $t\ge4$ and partition each range $[1,2\sqrt t]$, $[2\sqrt t,t]$, and $[t,t^{3/2}]$ into dyadic half-open intervals $[M,2M)$, truncating at the range endpoints and at the endpoint under consideration. In the first range, each sum and matching integral is trivially $O(M)$, giving total $O(\sqrt t)$. For a block in the second range, $M\ge2\sqrt t$; set $\lambda_0:=t/(2M+1)^2$. On $[M,2M+1]$, $\phi(x)=-t\log x$ has second derivative between $\lambda_0$ and $9\lambda_0$, and $\lambda_0\le1/16$. The block contains at most $M+1\le2M$ integers, so step 3.1 bounds its sum by $O(M\sqrt{\lambda_0}+\lambda_0^{-1/2})=O(\sqrt t+M/\sqrt t)=O(\sqrt t)$; the matching integral is $O(M/t)=O(1)$ by $\int x^{-it}\,dx=x^{1-it}/(1-it)$. There are $O(\log t)$ such blocks. In the third range, $t\le M<t^{3/2}$; $\Delta_n=-t\log(1+1/n)$ is monotone and lies in $(-1,0)$, while $|\Delta_n|\ge t/(2M+1)\in(0,1]$. Step 2.1 bounds each sum by $O(M/t)$, and the same integral formula gives this bound for the matching integral; the dyadic bounds sum geometrically to $O(\sqrt t)$. The ranges partition $[1,t^{3/2}]$ with each boundary assigned once, and the possible extra endpoint term and integral segment up to $a_0=\lceil t^{3/2}\rceil$ contribute $O(1)$. Therefore, uniformly for $1\le x\le a_0$, $S(x,t)-\int_1^xv^{-it}\,dv=O(\sqrt t\log t)$. [given, F1, F2, step 3.1, algebra]

5.1 For integers $a<b$, put $P_1(x):=\{x\}-1/2$ and $P_2(x):=\tfrac12(\{x\}^2-\{x\}+1/6)$. Integration by parts on each unit interval gives $\sum_{a\le n<b}g(n)-\int_a^b g(x)\,dx=(g(a)-g(b))/2+\int_a^bP_1(x)g'(x)\,dx$. The bounded continuous periodic function $P_2$ has derivative $P_1$ on each open unit interval. Set $a_0:=\lceil t^{3/2}\rceil$. For $x\ge a_0$, integrate the last integral by parts using $P_2$: its boundary term is $O(t/a_0)$ and the remaining integral is $O(t^2\int_{a_0}^{\infty}x^{-2}\,dx)=O(t^2/a_0)$, since $|g'(x)|=t/x$ and $|g''(x)|\le2t^2/x^2$. With $b=\lfloor x\rfloor+1$, the endpoint correction $(g(a_0)-g(b))/2$ is $O(1)$, and replacing $b$ by $x$ in the integral costs $O(1)$. As $t^2/a_0=O(\sqrt t)$, this and step 4.1 give $S(x,t)=\int_1^xv^{-it}\,dv+O(\sqrt t\log t)=(x^{1-it}-1)/(1-it)+O(\sqrt t\log t)=x^{1-it}/(1-it)+O(\sqrt t\log t)$ uniformly for $x\ge1$. For $0<x<1$, $S(x,t)=0$ and $|x^{1-it}/(1-it)|\le1/t$; the same holds at $x=0$ by continuous extension. [given, F1, F2, step 4.1, algebra]

6.1 For real $L\ge1$, finite integration of the counting step function gives $K_L(u)=L^{-1}\int_0^LS(x,u)dx$. Substitute the uniform estimate proved in steps 1.1–5.1 and integrate the main term. The result is $K_L(u)=L^{1-iu}/((1-iu)(2-iu))+O(\sqrt{1+|u|}\log(2+|u|))$. The formula holds at integer and noninteger cutoffs because a possible term at $n=L$ has weight zero. [given, F1, F2, step 5.1, algebra] ∎
