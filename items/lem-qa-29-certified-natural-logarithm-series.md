---
id: lem-qa-29-certified-natural-logarithm-series
kind: lemma
title: "A terminating rational enclosure for the natural logarithm"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - alg-qa-29-certified-natural-logarithm-enclosure
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - lem-derivative-of-a-power
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-monotonicity-of-the-integral
  - lem-geometric-sequence-null
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the construction uses finite rational arithmetic and a terminating natural-number search."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis I, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
verification:
  precheck: n/a
---

## Statement

For a rational $x>0$, put $y=(x-1)/(x+1)$. For each integer $N\ge1$, define the rational partial sum and remainder bound
$$S_N(x):=2\sum_{j=0}^{N-1}\frac{y^{2j+1}}{2j+1},\qquad T_N(x):=\frac{2|y|^{2N+1}}{(2N+1)(1-y^2)}.$$
Then $|y|<1$ and
$$|\ln x-S_N(x)|\le T_N(x).$$
For every rational tolerance $\tau>0$, the algorithm [[alg-qa-29-certified-natural-logarithm-enclosure]] terminates using rational comparisons. It returns the certified interval $[S_N(x)-T_N(x),S_N(x)+T_N(x)]$, whose width is at most $2\tau$ and which contains $\ln x$.

## Facts & Assumptions

**Given:** A rational $x>0$, an integer $N\ge1$, and, for the termination claim, a rational tolerance $\tau>0$.

[F1] [[def-natural-logarithm]] defines $\ln$ as the inverse of $\exp$ on $(0,\infty)$; [[def-real-exponential-function-and-e]] gives $\exp(0)=1$.

[F2] [[cor-exponential-reciprocal-and-positivity]]: $\exp(u)>0$ and $\exp(-u)=1/\exp(u)$ for every real $u$.

[F3] [[thm-logarithm-derivative-and-integral]]: $\ln'(z)=1/z$ for $z>0$.

[F4] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]] give the chain and quotient rules on the open interval where $1-u$ and $1+u$ are nonzero.

[F5] [[lem-derivative-of-a-power]] differentiates every finite polynomial term by term.

[F6] [[thm-continuous-implies-integrable]] and [[thm-ftc-second-part]]: a continuous function on a compact interval is integrable, and the integral of a continuous derivative is the endpoint increment.

[F7] [[thm-monotonicity-of-the-integral]] compares integrals of integrable functions under a pointwise inequality.

[F8] [[lem-geometric-sequence-null]]: if $0<r<1$, then $r^m\to0$ as the integer $m$ increases.

[F9] [[alg-qa-29-certified-natural-logarithm-enclosure]] starts at $N=1$, tests the rational bound $T_N(x)\le\tau$, increments $N$ upon failure, and returns $[S_N(x)-T_N(x),S_N(x)+T_N(x)]$ upon success.

## Proof

1.1 Since $x+1>0$, we have $1-y=2/(x+1)>0$ and $1+y=2x/(x+1)>0$. Hence $-1<y<1$, so the denominator $1-y^2$ in $T_N(x)$ is positive; direct algebra gives $(1+y)/(1-y)=x$. [given, algebra]

1.2 Fix $s$ with $0\le s<1$. On $(-1,1)$, set $H(u)=\ln((1+u)/(1-u))$. The quotient and chain rules [F3]–[F4] give $H'(u)=\frac{2}{(1-u)^2}\frac{1-u}{1+u}=\frac{2}{1-u^2}$ and $H(0)=0$. [F1, F3, F4, algebra]

2.1 Put $P_N(u)=2\sum_{j=0}^{N-1}u^{2j+1}/(2j+1)$. By [F5], $P_N'(u)=2\sum_{j=0}^{N-1}u^{2j}$. The finite telescoping identity $(1-u^2)\sum_{j=0}^{N-1}u^{2j}=1-u^{2N}$ therefore gives $H'(u)-P_N'(u)=\frac{2u^{2N}}{1-u^2}$ and $H(0)-P_N(0)=0$. [given, F5, step 1.2, algebra]

3.1 If $s=0$ then $H(s)-P_N(s)=0$ directly. If $0<s<1$, the derivative difference in step 2.1 is continuous on $[0,s]$. Applying [F6] to $H-P_N$ gives the exact remainder $H(s)-P_N(s)=\int_0^s\frac{2u^{2N}}{1-u^2}\,du$. [step 2.1, F6]

4.1 If $s=0$, the remainder and the stated upper bound are both zero. For $0<s<1$, at every $0\le u\le s$ we have $0\le u^{2N}$ and $1-u^2\ge1-s^2>0$, so $0\le\frac{2u^{2N}}{1-u^2}\le\frac{2u^{2N}}{1-s^2}$. By [F7] and [F6], $0\le H(s)-P_N(s)\le\int_0^s\frac{2u^{2N}}{1-s^2}\,du=\frac{2s^{2N+1}}{(2N+1)(1-s^2)}$, where the last equality follows by applying [F6] to the polynomial antiderivative. [step 3.1, F5, F6, F7, algebra]

5.1 If $y\ge0$, set $s=y$; step 1.1 gives $\ln x=H(s)$ and $S_N(x)=P_N(s)$, so step 4.1 is the required bound. If $y<0$, set $s=-y$. Then $x=(1-s)/(1+s)=1/X$ for $X=(1+s)/(1-s)>0$. By [F1]–[F2], $\ln(1/X)=-\ln X$, while $S_N(x)=-P_N(s)$. Thus the absolute error is the same as in the nonnegative case. These cases also include $y=0$, where the partial sum and logarithm are both zero. [given, F1, F2, step 1.1, step 4.1, algebra]

6.1 If $|y|=0$, then $T_N(x)=0$ for every $N$. Otherwise put $r=|y|\in(0,1)$. By [F8], $r^{2N+1}\to0$, while $(2N+1)(1-r^2)\ge1-r^2>0$; hence $T_N(x)\to0$. Given $\tau>0$, some integer $N$ therefore satisfies the rational comparison $T_N(x)\le\tau$. By [F9], the search reaches such an $N$ after finitely many rational tests. Step 5.1 certifies the returned interval, and its width $2T_N(x)\le2\tau$ is the stated one. [given, F8, F9, step 1.1, step 5.1, algebra] ∎
