---
id: lem-range-reduced-exp-log-and-arctan-series-enclosures
kind: lemma
title: Range-reduced exponential, logarithm and arctangent series have certified tails
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-real-elementary-functions-and-domains, lem-mean-value-theorem-on-closed-interval, lem-derivative-algebra-and-chain-rules, lem-power-series-termwise-differentiation, lem-real-and-complex-modulus-rules, lem-elementary-power-series-converge-uniformly-on-bounded-sets]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §§5–7"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 22: Differentiating and Integrating Power Series"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec22.pdf"
    - title: "Tucker, Validated Numerics: A Short Introduction to Rigorous Computations, Ch. 1"
      url: "https://pup-assets.imgix.net/onix/images/9780691247656/9780691247656.pdf?fm=pdf"
---

## Statement

For $|u|\le1/2$ and integer $N\ge1$, set
$E_N(u)=\sum_{k=0}^N u^k/k!$ and
$R_E=|u|^{N+1}/((N+1)!(1-|u|/(N+2)))$. Then
$\exp(u)\in[E_N(u)-R_E,E_N(u)+R_E]$, and the lower endpoint is positive.
For $y\in[1,2]$, put $v=(y-1)/(y+1)$ and
$L_N(v)=2\sum_{k=0}^N v^{2k+1}/(2k+1)$. Then
$$\left|\ln y-L_N(v)\right|\le \frac{2|v|^{2N+3}}{(2N+3)(1-v^2)}.$$
For every integer $j$ and $y>0$, the natural logarithm also satisfies
$\ln(2^j y)=j\ln2+\ln y$.
For $|t|\le1/2$, set $A_N(t)=\sum_{k=0}^N(-1)^kt^{2k+1}/(2k+1)$. Then
$$\left|\arctan t-A_N(t)\right|\le \frac{|t|^{2N+3}}{(2N+3)(1-t^2)}.$$

## Facts & Assumptions

**Given:** The point-function definitions in
[[def-real-elementary-functions-and-domains]], the closed-interval MVT
[[lem-mean-value-theorem-on-closed-interval]], the derivative rules
[[lem-derivative-algebra-and-chain-rules]], and power-series differentiation
[[lem-power-series-termwise-differentiation]].

[L1] [[def-real-elementary-functions-and-domains]]: $\exp$ is its absolutely
convergent power series; $\ln y=\int_1^y dt/t$ for $y>0$; and
$\arctan t=\int_0^t du/(1+u^2)$. Its integral-defined functions have the
average-value difference quotient from the local Darboux construction.

[L2] [[lem-mean-value-theorem-on-closed-interval]]: if $H$ is continuous on
$[u,v]$, differentiable on $(u,v)$, and $u<v$, some $w\in(u,v)$ satisfies
$H(v)-H(u)=H'(w)(v-u)$.

[L3] [[lem-derivative-algebra-and-chain-rules]]: differentiability implies
continuity, and the sum, product, quotient, and composition rules hold for
derivatives defined by difference quotients.

[L4] [[lem-power-series-termwise-differentiation]]: inside the radius of
convergence, a power series with an absolutely convergent derivative series
has that termwise derivative.

[L5] [[lem-real-and-complex-modulus-rules]]: real absolute value is
multiplicative and satisfies the triangle inequality.

[L6] [[lem-elementary-power-series-converge-uniformly-on-bounded-sets]]:
factorial series and their formal derivatives converge on bounded intervals;
geometric and odd power series and their derivatives converge inside radius
one.

## Proof

1.1 For $k\ge N+1$, consecutive absolute exponential terms have ratio $|u|/(k+1)\le q:=|u|/(N+2)<1$. Their tail is bounded by the first omitted term times $1+q+q^2+\cdots=1/(1-q)$, giving $R_E$. The defining power series lies between its partial sum plus or minus this absolute tail. For $N\ge1$, the partial sum is at least $1-|u|\ge1/2$ by alternating-series grouping when $u<0$ and by positivity when $u\ge0$; also $R_E\le(1/2)^2/(2(1-1/6))=3/20<1/2$. Thus the lower bound is positive. [given, L1, L5, L6, algebra]

1.2 For $y\in[1,2]$, $v=(y-1)/(y+1)\in[0,1/3]$. Set $G(v)=2\sum_{k=0}^{\infty}v^{2k+1}/(2k+1)$. Its derivative series is absolutely convergent for $|v|<1$ by [L6], so [L4] gives $G'(v)=2/(1-v^2)$. By [L3], $H(y)=G(v(y))$ has derivative $4/((y+1)^2(1-v^2))=1/y$. The integral definition [L1] has derivative $1/y$, since its difference quotient is the average of the continuous integrand $1/t$ near $y$; also $H(1)=\ln1=0$. For $y>1$, apply [L2] to $H-\ln$ on $[1,y]$; its derivative is zero, so $H(y)-\ln y=H(1)-\ln1=0$. Equality at $y=1$ holds by the integral definition. Hence $H(y)=\ln y$ on $[1,2]$. [given, L1, L2, L3, L4, L6, algebra]

1.3 Fix $y>0$ and let $h(x)=\ln(xy)-\ln x$ for $x>0$. From [L1], the integral difference quotient gives $(\ln x)'=1/x$. The chain rule [L3] therefore gives $h'(x)=y/(xy)-1/x=0$. Applying [L2] on the positive segment between $1$ and any $x>0$ shows $h(x)=h(1)=\ln y$, so $\ln(xy)=\ln x+\ln y$. Repeated use gives the identity for positive integer powers of $2$; applying it to $2\cdot(1/2)=1$ gives $\ln(1/2)=-\ln2$, hence the same identity for negative integer powers and $j=0$. Thus $\ln(2^j y)=j\ln2+\ln y$ for every integer $j$. [given, L1, L2, L3, algebra]

1.4 For $|t|\le1/2$, the power series $P(t)=\sum_{k=0}^{\infty}(-1)^kt^{2k+1}/(2k+1)$ has radius $1$ by [L6], and [L4] gives $P'(t)=\sum_{k\ge0}(-1)^kt^{2k}=1/(1+t^2)$ by the geometric series. The integral definition [L1] has the same derivative by the average-value difference quotient and the same value $0$ at $t=0$. If $t>0$, [L2] applied to $P-\arctan$ on $[0,t]$ gives equality; if $t<0$, apply [L2] on $[t,0]$; at $t=0$ both are zero. Thus $P(t)=\arctan t$ on the stated interval. [given, L1, L2, L4, L5, L6, algebra]

2.1 For each $k\ge N+1$, the absolute logarithm-series term is at most $2|v|^{2N+3}|v|^{2(k-N-1)}/(2N+3)$. Summing this geometric majorant gives $2|v|^{2N+3}/((2N+3)(1-v^2))$. Removing the first $N+1$ terms of $H$ leaves exactly this bounded tail. [step 1.2, L5, L6, algebra]

3.1 For every omitted term index $k\ge N+1$, its magnitude is at most $|t|^{2N+3}|t|^{2(k-N-1)}/(2N+3)$. Summing gives the displayed geometric tail, so $A_N(t)$ plus or minus that tail encloses $\arctan t$. [step 1.4, L5, L6, algebra] ∎

