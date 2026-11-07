---
id: lem-smoothed-dirichlet-polynomial-kernel-bound
kind: lemma
title: "Smoothed Dirichlet-Polynomial Kernel Bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-logarithm-derivative-and-integral
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-newton-leibniz-with-interior-derivative
  - thm-integration-by-parts-with-interior-derivatives
  - thm-continuous-implies-integrable
justified_by: []
aliases: []
forward_refs: []
dependency_level: 0
proof_strategy: direct
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §27.1, equation (27.14) and the proof of Theorem 27.3"
      url: "https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf"
    - title: "E. Assing, Topics in Analytic Number Theory, Corollary 4 and Proposition 5"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf"
---

## Statement

For a positive integer $N$ and real $u$, put
$$K_N(u):=\sum_{n=1}^{2N}\left(1-\frac{n}{2N}\right)n^{-iu},\qquad n^{-iu}:=\exp(-iu\log n).$$
There is an absolute constant $C$ such that
$$|K_N(u)|\le C\left(\frac{N}{1+u^2}+\sqrt{1+|u|}\log(2+|u|)\right).$$

## Statement references

[Montgomery–Vaughan, weighted partial-sum estimate (27.14) and Theorem 27.3 proof](https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf)

[Assing, pointwise partial-sum Corollary 4 and separated-sample Proposition 5](https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf)

## Facts & Assumptions

**Given:** A positive integer $N$, a real number $u$, and the finite sum $K_N(u)$ in the statement.

[A1] For $x>0$, $x^{-iu}$ denotes $\exp(-iu\log x)$; $\log$ is the natural logarithm, and $\{x\}:=x-\lfloor x\rfloor$ is the fractional part.

[F1] On $(0,\infty)$ the derivative of $\log x$ is $1/x$; the complex exponential is entire and its derivative equals itself. Consequently the real-variable chain and product rules give $(x^{-it})'=(-it)x^{-it-1}$ and $(x^{-it})''=(-it)(-it-1)x^{-it-2}$; also $(-t\log x)''=t/x^2$. [[thm-logarithm-derivative-and-integral]] [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F2] A continuous real function on a compact interval is Riemann integrable. Newton–Leibniz and integration by parts therefore apply to real $C^1$ functions on such intervals, and applying them to real and imaginary parts gives the complex versions. [[thm-continuous-implies-integrable]] [[thm-newton-leibniz-with-interior-derivative]] [[thm-integration-by-parts-with-interior-derivatives]]

## Proof

**Given:** A positive integer $N$, a real number $u$, and the finite sum $K_N(u)$ in the statement.

[A1] For $x>0$, $x^{-iu}$ denotes $\exp(-iu\log x)$; $\log$ is the natural logarithm, and $\{x\}:=x-\lfloor x\rfloor$ is the fractional part.

[F1] On $(0,\infty)$ the derivative of $\log x$ is $1/x$; the complex exponential is entire and its derivative equals itself. Consequently the real-variable chain and product rules give $(x^{-it})'=(-it)x^{-it-1}$ and $(x^{-it})''=(-it)(-it-1)x^{-it-2}$; also $(-t\log x)''=t/x^2$. [[thm-logarithm-derivative-and-integral]] [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F2] A continuous real function on a compact interval is Riemann integrable. Newton–Leibniz and integration by parts therefore apply to real $C^1$ functions on such intervals, and applying them to real and imaginary parts gives the complex versions. [[thm-continuous-implies-integrable]] [[thm-newton-leibniz-with-interior-derivative]] [[thm-integration-by-parts-with-interior-derivatives]]



1.1 If $|u|\le2$, then $|K_N(u)|\le\sum_{n=1}^{2N}(1-n/(2N))=N-1/2\le N$, while $N/(1+u^2)\ge N/5$. Also $K_N(-u)=\overline{K_N(u)}$. Thus it remains to consider $t:=|u|>2$. [A1, algebra]

1.2 Let $\phi$ be a real $C^2$ function on an interval containing consecutive integers $m,m+1,\ldots,m+L$, where $L\ge1$, and put $\Delta_n:=\phi(n+1)-\phi(n)$ for $m\le n<m+L$. If these increments are monotone and lie in one component of $\mathbb R\setminus2\pi\mathbb Z$, at distance at least $\eta\in(0,1]$ from $2\pi\mathbb Z$, set $z_n=e^{i\phi(n)}$ and $h(\theta):=(1-e^{i\theta})^{-1}$. Then $z_n=h(\Delta_n)(z_n-z_{n+1})$, and summation by parts gives $\sum_{n=p}^{q}z_n=h(\Delta_p)z_p-h(\Delta_q)z_{q+1}+\sum_{n=p+1}^{q}(h(\Delta_n)-h(\Delta_{n-1}))z_n$ for $m\le p\le q<m+L$. Define $d(\theta,2\pi\mathbb Z):=\inf_{k\in\mathbb Z}|\theta-2\pi k|$. On the component, $|1-e^{i\theta}|\gg d(\theta,2\pi\mathbb Z)$, so $|h(\theta)|\ll\eta^{-1}$ and $|h'(\theta)|\ll d(\theta,2\pi\mathbb Z)^{-2}$. Integrating this derivative bound from distance $\eta$ to the midpoint between neighboring multiples of $2\pi$ gives total variation $O(\eta^{-1})$; monotonicity of $\Delta_n$ bounds the variation sum by that integral. Hence every such consecutive phase sum is $O(\eta^{-1})$. [A1, F1, F2, algebra]

2.1 Suppose $\phi$ is real and $C^2$ on an interval containing $m,m+1,\ldots,m+L$, and for fixed $C_0\ge1$ its second derivative has constant sign and satisfies $\lambda\le|\phi''(x)|\le C_0\lambda$ there, where $0<\lambda\le1/4$. Writing $\Delta_n=\phi(n+1)-\phi(n)$, we have $\Delta_{n+1}-\Delta_n=\int_0^1\int_{n+s}^{n+s+1}\phi''(v)\,dv\,ds$ for $m\le n<m+L-1$, so the increments are monotone, have gaps at least $\lambda$, and have total range length $O(L\lambda)$. With $\eta:=\sqrt\lambda$, this range meets $O(L\lambda+1)$ neighborhoods of radius $\eta$ around multiples of $2\pi$, and each neighborhood contains $O(\eta/\lambda+1)$ increments. Thus the number of indices within distance $\eta$ of $2\pi\mathbb Z$ is $O((L\lambda+1)(\eta/\lambda+1))=O(L\sqrt\lambda+\lambda^{-1/2})$. The remaining indices can be cut at every jump crossing a multiple of $2\pi$; there are $O(L\lambda+1)$ such jumps because the increment range has length $O(L\lambda)$. Together with the $O(L\lambda+1)$ contiguous near-multiple clusters, these cuts form $O(L\lambda+1)$ consecutive blocks, each lying in an interval $[2\pi k+\eta,2\pi(k+1)-\eta]$ for some integer $k$. Step 1.2 bounds the phase sum on each block by $O(\eta^{-1})$. The removed terms have modulus one, so $\left|\sum_{n=m}^{m+L-1}e^{i\phi(n)}\right|=O(L\sqrt\lambda+\lambda^{-1/2})$, with implied constant depending only on $C_0$. [A1, F1, F2, step 1.2, choose, algebra]

3.1 Put $g(x):=x^{-it}$ and $S(x,t):=\sum_{1\le n\le x}n^{-it}$ for $x\ge0$, with an empty sum when $x<1$. If $2<t<4$, then $a_0:=\lceil t^{3/2}\rceil\le8$, so for $1\le x\le a_0$ the sum and integral each have size at most $8$ and their difference is $O(\sqrt t\log t)$. Suppose now $t\ge4$ and partition each range $[1,2\sqrt t]$, $[2\sqrt t,t]$, and $[t,t^{3/2}]$ into dyadic half-open intervals $[M,2M)$, truncating at the range endpoints and at the endpoint under consideration. In the first range, each sum and matching integral is trivially $O(M)$, giving total $O(\sqrt t)$. For a block in the second range, $M\ge2\sqrt t$; set $\lambda_0:=t/(2M+1)^2$. On $[M,2M+1]$, $\phi(x)=-t\log x$ has second derivative between $\lambda_0$ and $9\lambda_0$, and $\lambda_0\le1/16$. The block contains at most $M+1\le2M$ integers, so step 2.1 bounds its sum by $O(M\sqrt{\lambda_0}+\lambda_0^{-1/2})=O(\sqrt t+M/\sqrt t)=O(\sqrt t)$; the matching integral is $O(M/t)=O(1)$ by $\int x^{-it}\,dx=x^{1-it}/(1-it)$. There are $O(\log t)$ such blocks. In the third range, $t\le M<t^{3/2}$; $\Delta_n=-t\log(1+1/n)$ is monotone and lies in $(-1,0)$, while $|\Delta_n|\ge t/(2M+1)\in(0,1]$. Step 1.2 bounds each sum by $O(M/t)$, and the same integral formula gives this bound for the matching integral; the dyadic bounds sum geometrically to $O(\sqrt t)$. The ranges partition $[1,t^{3/2}]$ with each boundary assigned once, and the possible extra endpoint term and integral segment up to $a_0=\lceil t^{3/2}\rceil$ contribute $O(1)$. Therefore, uniformly for $1\le x\le a_0$, $S(x,t)-\int_1^xv^{-it}\,dv=O(\sqrt t\log t)$. [A1, F1, F2, step 1.2, step 2.1, algebra]

4.1 For integers $a<b$, put $P_1(x):=\{x\}-1/2$ and $P_2(x):=\tfrac12(\{x\}^2-\{x\}+1/6)$. Integration by parts on each unit interval gives $\sum_{a\le n<b}g(n)-\int_a^b g(x)\,dx=(g(a)-g(b))/2+\int_a^bP_1(x)g'(x)\,dx$. The bounded continuous periodic function $P_2$ has derivative $P_1$ on each open unit interval. Set $a_0:=\lceil t^{3/2}\rceil$. For $x\ge a_0$, integrate the last integral by parts using $P_2$: its boundary term is $O(t/a_0)$ and the remaining integral is $O(t^2\int_{a_0}^{\infty}x^{-2}\,dx)=O(t^2/a_0)$, since $|g'(x)|=t/x$ and $|g''(x)|\le2t^2/x^2$. With $b=\lfloor x\rfloor+1$, the endpoint correction $(g(a_0)-g(b))/2$ is $O(1)$, and replacing $b$ by $x$ in the integral costs $O(1)$. As $t^2/a_0=O(\sqrt t)$, this and step 3.1 give $S(x,t)=\int_1^xv^{-it}\,dv+O(\sqrt t\log t)=(x^{1-it}-1)/(1-it)+O(\sqrt t\log t)=x^{1-it}/(1-it)+O(\sqrt t\log t)$ uniformly for $x\ge1$. For $0<x<1$, $S(x,t)=0$ and $|x^{1-it}/(1-it)|\le1/t$; the same holds at $x=0$ by continuous extension. [A1, F1, F2, step 3.1, algebra]

5.1 For $t\ge2$, finite summation gives $K_N(t)=(2N)^{-1}\int_0^{2N}S(x,t)\,dx$. Substituting step 4.1 and integrating the main term yields $K_N(t)=(2N)^{1-it}/((1-it)(2-it))+O(\sqrt t\log t)$. The main term is $O(N/t^2)=O(N/(1+t^2))$ for $t\ge2$, while $\sqrt t\log t\ll\sqrt{1+t}\log(2+t)$. Step 1.1 handles $|u|\le2$, and conjugation handles negative $u$, proving the asserted bound. [A1, F1, F2, step 1.1, step 4.1, algebra] ∎
