---
id: pthm-csm-bernoulli-fluctuation-bounds
kind: physics-theorem
title: "Finite Bernoulli fluctuations and matching exponential rates"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-csm-finite-variance
  - def-moment-generating-function
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
  - thm-logarithm-slower-than-every-positive-power
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  def-finite-probability-space-and-event: mathematical-premise
  def-finite-real-random-variable-and-distribution: mathematical-premise
  def-expectation-on-a-finite-probability-space: mathematical-premise
  def-csm-finite-variance: mathematical-premise
  def-moment-generating-function: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-logarithm-slower-than-every-positive-power: mathematical-premise
physical_scope: "Exact bounds for the explicitly adopted finite IID Bernoulli product law; no laboratory sampling, observations, calibration, or empirical inference is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, §§4.1 and 5.1 (Spring 2019 notes)"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
    - title: "MIT OpenCourseWare 18.200, Chernoff Bounds and Some Applications, Lecture Notes (Spring 2024)"
      url: "https://ocw.mit.edu/courses/18-200-principles-of-discrete-applied-mathematics-spring-2024/mit18_200_s24_lec_chernoff.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $n\ge1$ be an integer, let $p\in(0,1)$, and give $\Omega_n=\{0,1\}^n$ the explicitly stipulated product probability whose singleton weights are
$$P_p(\{(x_1,\ldots,x_n)\})=\prod_{i=1}^n p^{x_i}(1-p)^{1-x_i};$$
for an event $A\subseteq\Omega_n$, $P_p(A)$ is the sum of these weights over $x\in A$.
Write $X_i(x)=x_i$, $K=\sum_{i=1}^nX_i$, and $\overline X=K/n$. These variables and all probabilities are dimensionless. The product law is an adopted sampling model; independence is an assumption of that law, not an inference about any apparatus or equilibrium system.

For $a\in(0,1)$ define the Bernoulli relative-entropy rate
$$D(a\Vert p)=a\log\frac ap+(1-a)\log\frac{1-a}{1-p},$$
and set $D(0\Vert p)=-\log(1-p)$ and $D(1\Vert p)=-\log p$. Then
$$\mathbb E K=np,\qquad \operatorname{Var}(K)=np(1-p),$$
and for every dimensionless $\varepsilon>0$,
$$P_p\bigl(|\overline X-p|\ge\varepsilon\bigr)\le\frac{p(1-p)}{n\varepsilon^2},\qquad P_p\bigl(|\overline X-p|\ge\varepsilon\bigr)\le 2e^{-2n\varepsilon^2}.$$
For $p<a<1$ and $0<a<p$, respectively,
$$P_p(K\ge na)\le e^{-nD(a\Vert p)},\qquad P_p(K\le na)\le e^{-nD(a\Vert p)}.$$
For each integer $0\le k\le n$, putting $a=k/n$ gives the point-mass bounds
$$\frac1{n+1}e^{-nD(a\Vert p)}\le P_p(K=k)\le e^{-nD(a\Vert p)}.$$
Consequently, for every sequence of integers $k_n\in\{0,\ldots,n\}$ with $k_n/n\to a\in(0,1)$,
$$\lim_{n\to\infty}\frac1n\log P_p(K=k_n)=-D(a\Vert p).$$
All conclusions are conditional calculations for this finite product model and make no claim that physical outcomes are independent or that a small model probability is a logical contradiction.

## Facts & Assumptions

**Given:** The stated finite product law, $n\ge1$, $p\in(0,1)$, and the definitions of $K$, $\overline X$, and $D(a\Vert p)$ in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: consuming the named finite model may state its product preparation as a separate explicit probability law; such a preparation is an adopted assumption, not evidence that a laboratory realizes it.

[F2] [[def-finite-probability-space-and-event]]: a finite probability space is a finite outcome set with nonnegative weights summing to one; event probabilities are sums of those weights.

[F3] [[def-finite-real-random-variable-and-distribution]]: a real random variable on a finite probability space is a function from the outcome set to $\mathbb R$.

[F4] [[def-expectation-on-a-finite-probability-space]]: $\mathbb E Y=\sum_{x\in\Omega_n}P_p(x)Y(x)$.

[F5] [[def-moment-generating-function]]: for a finite real random variable $Y$, $M_Y(s)=\mathbb E[\exp(sY)]$ for every real $s$.

[F6] [[def-real-exponential-function-and-e]]: $\exp$ is defined by its everywhere-convergent real power series.

[F7] [[def-natural-logarithm]]: $\log x$ is the unique real $y$ with $\exp(y)=x$, for $x>0$.

[F8] [[thm-natural-logarithm-laws]]: for positive $x,y$, $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$.

[F9] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log$ is differentiable with $\log'(x)=1/x$.

[F10] [[cor-mean-value-theorem]]: if $g$ is continuous on a closed interval and differentiable in its interior, then $g(b)-g(a)=g'(c)(b-a)$ for some interior $c$.

[F11] [[thm-logarithm-slower-than-every-positive-power]]: for every $\alpha>0$, $\log x/x^\alpha\to0$ as $x\to+\infty$.

[F12] [[def-csm-finite-variance]]: on a finite probability space, $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb E[Y])^2]$.

## Proof

**Given:** The finite IID Bernoulli model and all hypotheses in the Statement.

1.1 The total weight is $\prod_{i=1}^n(p+(1-p))=1$, so the stipulated weights form a finite probability law. Summing over all coordinates except $i$ gives $P(X_i=1)=p$ and $P(X_i=0)=1-p$; the product factorization also gives independence. For $0\le k\le n$ put $c_{n,k}:=\#\{S\subseteq\{1,\ldots,n\}:|S|=k\}$. The set of coordinates with value $1$ gives a bijection between outcomes with $K=k$ and such subsets, so $P(K=k)=c_{n,k}p^k(1-p)^{n-k}$. By [F4] and [F12], $\mathbb E X_i=p$ and $\operatorname{Var}(X_i)=\mathbb E[(X_i-p)^2]=p(1-p)$. For $i\ne j$, the product weights factor the finite sum, giving $\mathbb E[(X_i-p)(X_j-p)]=\mathbb E(X_i-p)\mathbb E(X_j-p)=0$. Expanding $K$ and $(K-np)^2$ therefore yields $\mathbb E K=np$ and $\operatorname{Var}(K)=np(1-p)$. [given, F1, F2, F3, F4, F12, algebra]

1.2 The finite-sum definition [F5] and product weights give $$M_K(s)=\sum_{x\in\Omega_n}P_p(x)e^{s\sum_i x_i}=\prod_{i=1}^n\bigl((1-p)+pe^s\bigr)=(1-p+pe^s)^n.$$ This is a finite factorization, so no limiting interchange is involved. [given, F5, F6, algebra]

1.3 On $0<a<1$, differentiating the displayed expression for $D$ with [F9] gives $D(p\Vert p)=0$, $\partial_aD(a\Vert p)|_{a=p}=0$, and $\partial_a^2D(a\Vert p)=1/[a(1-a)]\ge4$, since $a(1-a)\le1/4$. Let $G(a)=D(a\Vert p)-2(a-p)^2$. Then $G(p)=G'(p)=0$ and $G''\ge0$. For $a>p$, the mean value theorem applied first to $G'$ and then to $G$ gives $G'(a)\ge0$ and $G(a)\ge0$; for $a<p$, the same two applications give $G'(a)\le0$ and again $G(a)\ge0$. Thus $D(a\Vert p)\ge2(a-p)^2$ for interior $a$. At $a\downarrow0$, the only noncontinuous-looking term is $a\log a=-\log(1/a)/(1/a)$, which tends to zero by [F11]; at $a\uparrow1$ the analogous term is $(1-a)\log(1-a)$. The remaining factors are continuous, so the endpoint extensions preserve the inequality. [given, F7, F8, F9, F10, F11, algebra]

2.1 Fix $1\le k\le n-1$ and let $a=k/n$. For $0\le j\le n$ put $q_j=c_{n,j}a^j(1-a)^{n-j}$. These are the count probabilities under the finite product weights with parameter $a$; their sum is $1$ by factoring the total weight as $(a+(1-a))^n$. For each $0\le j<n$, count pairs $(S,T)$ with $S\subset T\subseteq\{1,\ldots,n\}$, $|S|=j$, and $|T|=j+1$. Choosing $S$ first gives $c_{n,j}(n-j)$ pairs, while choosing $T$ first gives $c_{n,j+1}(j+1)$; hence $c_{n,j+1}/c_{n,j}=(n-j)/(j+1)$. Therefore $$\frac{q_{j+1}}{q_j}=\frac{n-j}{j+1}\frac{a}{1-a}.$$ The factor $(n-j)/(j+1)$ decreases strictly with $j$, since $(n-j-1)(j+1)<(n-j)(j+2)$ for $j<n-1$. At $j=k-1$ the ratio is $(n-k+1)/(n-k)>1$, and at $j=k$ it is $k/(k+1)<1$. Thus the sequence increases through $q_k$ and decreases after it, so $q_k$ is the largest of its $n+1$ masses. Their sum is $1$, whence $1/(n+1)\le q_k\le1$. [given, step 1.1, algebra]

2.2 Pointwise on $\Omega_n$, $\mathbf 1_{\{|\overline X-p|\ge\varepsilon\}}\le (\overline X-p)^2/\varepsilon^2$. Summing this inequality with the finite weights and using step 1.1 gives the first probability bound. [given, F4, step 1.1, algebra]

2.3 Suppose first $p<a<1$ and put $s=\log\!\bigl(a(1-p)/(p(1-a))\bigr)>0$. On $\{K\ge na\}$, $e^{sK}\ge e^{sna}$, so the finite expectation of the nonnegative random variable $e^{sK}$ is at least $e^{sna}P_p(K\ge na)$. By step 1.2, $$P_p(K\ge na)\le e^{-sna}(1-p+pe^s)^n=e^{-nD(a\Vert p)},$$ where $e^s=a(1-p)/(p(1-a))$, $1-p+pe^s=(1-p)/(1-a)$, and [F7]–[F8] simplify the logarithm. If $0<a<p$, the same value of $s$ is negative; on $\{K\le na\}$ one again has $e^{sK}\ge e^{sna}$, and the same substitution yields $P_p(K\le na)\le e^{-nD(a\Vert p)}$. This proves both exponential tail bounds without using a general concentration theorem as a premise. [given, F4, F5, F6, F7, F8, step 1.2, algebra]

3.1 Direct division of the two point probabilities, using the same subset count $c_{n,k}$ from step 1.1, gives $$\frac{P_p(K=k)}{q_k}=\left(\frac pa\right)^k\left(\frac{1-p}{1-a}\right)^{n-k}.$$ Since $k=na$ and $n-k=n(1-a)$, [F7]–[F8] give the logarithm of this ratio as $n a\log(p/a)+n(1-a)\log((1-p)/(1-a))=-nD(a\Vert p)$, so the ratio is $e^{-nD(a\Vert p)}$. Combining with step 2.1 proves the claimed bounds for $1\le k\le n-1$. For $k=0$ and $k=n$, direct evaluation gives $P_p(K=0)=(1-p)^n=e^{-nD(0\Vert p)}$ and $P_p(K=n)=p^n=e^{-nD(1\Vert p)}$, which satisfy the same inequalities. [given, F7, F8, step 1.1, step 2.1, algebra]

3.2 If $0<\varepsilon<1$, split the deviation event into the upper threshold $a_+=p+\varepsilon$ and lower threshold $a_-=p-\varepsilon$. For an interior threshold apply step 2.3 and then step 1.3; at $a_+=1$ or $a_-=0$ use the exact endpoint probability $p^n$ or $(1-p)^n$ and the endpoint case of step 1.3; a threshold outside $[0,1]$ gives an empty event. Each nonempty tail is at most $e^{-2n\varepsilon^2}$, so their sum is at most $2e^{-2n\varepsilon^2}$. If $\varepsilon\ge1$, the deviation event is empty because $0\le\overline X\le1$ and $0<p<1$. [given, step 2.3, step 1.3, algebra]

4.1 If $k_n/n\to a\in(0,1)$, then $D(k_n/n\Vert p)\to D(a\Vert p)$ by continuity on $(0,1)$. Taking logarithms of step 3.1 and dividing by $n$ bounds $n^{-1}\log P_p(K=k_n)$ between $-D(k_n/n\Vert p)-\log(n+1)/n$ and $-D(k_n/n\Vert p)$. By [F11], $\log(n+1)/n\to0$, so the squeeze theorem gives the stated rate. These probabilities remain conditional on the explicitly stipulated product law; no finite sample or measurement is asserted. [given, F7, F11, step 3.1] ∎

