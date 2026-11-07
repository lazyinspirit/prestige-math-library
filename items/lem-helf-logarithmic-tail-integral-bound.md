---
dependency_level: 0
id: lem-helf-logarithmic-tail-integral-bound
kind: lemma
title: "An analytic logarithmic tail integral bound with constant6.01"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-range-reduced-exp-log-and-arctan-series-enclosures
  - def-real-elementary-functions-and-domains
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-sine-and-cosine-addition-formulas
  - lem-sine-chord-and-lipschitz-bounds
  - thm-tangent-cotangent-secant-cosecant-derivatives-and-periods
  - thm-sine-cosine-signs-monotonicity-and-ranges
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Goldbach analytic proof; bounded local reconstruction"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "\u00a74.1 equations4.12\u20134.15: exact Poisson/log-series replacement for the numerical226.844 integral; pointwise L-function bound remains separate"
---

## Statement

Put $A=10351/2500=4.1404$. The improper integral satisfies
$$\frac1{2\pi}\int_{-\infty}^{\infty}\frac{\left(A+\log\pi+\tfrac12\log(t^2+9/4)\right)^2}{t^2+1/4}\,dt<\left(\frac{601}{100}\right)^2.$$
Consequently, for $q\ge1$ and continuous $H:\mathbb R\to\mathbb C$ with
$$|H(t)|\le\log q+\log\pi+A+\tfrac12\log(t^2+9/4),$$
one has
$$\left(\frac1{2\pi}\int_{-\infty}^{\infty}\frac{|H(t)|^2}{t^2+1/4}\,dt\right)^{1/2}\le\log q+6.01.$$
This is an analytic integral estimate with explicit rational bounds, not an adopted numerical quadrature or a claim that an $L$-function satisfies the pointwise premise.

## Facts & Assumptions

**Given:** The fixed rational $A$, and for the second assertion the pointwise bound and continuous function.

[F1] Exponential, logarithm and integral-defined arctangent have their ordinary definitions and the range-reduced series with explicit tails. [[def-real-elementary-functions-and-domains]] [[lem-range-reduced-exp-log-and-arctan-series-enclosures]]

[F2] Logarithm laws and its derivative hold. [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]]

[F3] Sine/cosine addition, tangent derivative and the usual monotone first-quadrant ranges hold; sine has the chord lower bound. [[thm-sine-and-cosine-addition-formulas]] [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]] [[thm-sine-cosine-signs-monotonicity-and-ranges]] [[lem-sine-chord-and-lipschitz-bounds]]

## Proof

1.1 Substitute $t=\tfrac12\tan\theta$, $-\pi/2<\theta<\pi/2$. The measure $dt/[2\pi(t^2+1/4)]$ becomes $d\theta/\pi$. Write $r=1/2$. Factoring the numerator $\tfrac32\cos\theta+\tfrac i2\sin\theta=e^{i\theta}+r e^{-i\theta}$ gives $\tfrac12\log(t^2+9/4)=\log2+\log|1+r e^{-2i\theta}|-\log|1+e^{-2i\theta}|$. Here $|1+e^{-2i\theta}|=2\cos\theta>0$ inside the interval. [given, F2, F3, algebra]

1.2 For $0\le v<1$, differentiate $\log|1+v e^{iu}|$ in $v$, expand its geometric denominator and integrate from zero. Uniform convergence on each $0\le v\le v_0<1$ yields $\log|1+v e^{iu}|=\sum_{n\ge1}(-1)^{n+1}v^n\cos(nu)/n$. Finite cosine orthogonality on $(-\pi/2,\pi/2)$ then shows that the mean of the difference with parameters $r,v$ is zero and its mean square is $\tfrac12\sum_{n\ge1}(r^n-v^n)^2/n^2$. This uses actual one-variable integrals of finite trigonometric sums, not finite-group Parseval. [F1, F2, F3, construct, algebra]

2.1 Let $v\uparrow1$. Since $|1+v e^{-2i\theta}|^2=(1-v)^2+4v\cos^2\theta$, for $v\ge1/2$ its logarithm is bounded in absolute value by a fixed constant plus $|\log\cos\theta|$. The square of this bound is integrable: [F3] compares $\cos\theta$ to the distance to the nearer endpoint, and $\int_0^\epsilon|\log s|^2ds=\epsilon((\log\epsilon)^2-2\log\epsilon+2)\to0$. Thus one can first remove endpoint strips of arbitrarily small uniformly bounded square integral, then use uniform convergence on the remaining compact interval. The series limits follow from the summable bound $4/n^2$. It follows that the random variable $L=\tfrac12\log(t^2+9/4)$ in step 1.1 has mean $\log2$ and variance $V=\tfrac12\sum_{n\ge1}(1-2^{-n})^2/n^2$. No unproved exchange at the logarithmic endpoints is used. [step 1.1, step 1.2, F3, algebra]

3.1 The variance is smaller than $3/8$ by explicit positive-series estimates. Indeed $\sum n^{-2}\le\sum_{n=1}^{20}n^{-2}+1/20<8231/5000$. Also $\sum 2^{-n}/n^2\ge\sum_{n=1}^{8}2^{-n}/n^2$, while $\sum4^{-n}/n^2\le\sum_{n=1}^{4}4^{-n}/n^2+4^{-5}/[25(1-1/4)]$. Substituting these three rational expressions in $V$ gives a rational upper bound smaller than $3/8$ by integer cross-multiplication. The inequalities use only positive terms and the integral bound on the first series tail. [step 2.1, algebra]

4.1 For completeness, all logarithmic constants can be enclosed with [F1]. Tangent addition gives $\pi=16\arctan(1/5)-4\arctan(1/239)$: doubling tangent twice gives $120/119$, subtracting $1/239$ gives tangent $1$, and the angle lies in the first quadrant. The integral-defined arctangent is the inverse there, by differentiating its composition with tangent and matching zero values. The arctangent partial sums with indices $4$ and $1$, plus their [F1] absolute tails, give $\pi<3927/1250=3.1416$. Also $\pi\ge2$ follows directly from $\pi=4\int_0^1(1+t^2)^{-1}dt$. For $y\in[1,2]$, put $v_y=(y-1)/(y+1)$ and $U(y)=2\sum_{j=0}^{6}v_y^{2j+1}/(2j+1)+2v_y^{15}/[15(1-v_y^2)]$. Then [F1] gives $\log2<U(2)$ and $\log(2\pi)\le2\log2+\log(3927/2500)<2U(2)+U(3927/2500)<919/500=1.838$. The last two finite rational comparisons, and those in step 3.1, require no decimal approximation or integration oracle. [F1, F2, F3, algebra]

5.1 The first integral in the Statement is the second moment of $A+\log\pi+L$. By steps 2.1--4.1 it is at most $(A+\log(2\pi))^2+V<(10351/2500+919/500)^2+3/8=36.11626656<(601/100)^2$. All displayed terminating decimals in this last comparison are exact rationals. This proves the first bound. [step 2.1, step 3.1, step 4.1, algebra]

6.1 Write $w(t)=1/[2\pi(t^2+1/4)]$, which has total improper integral $1$ by step 1.1, and put $K(t)=A+\log\pi+\tfrac12\log(t^2+9/4)>0$. On $[-T,T]$, $T>0$, let $m_T=\int_{-T}^T w$, $a_T=\int_{-T}^T Kw$, and $b_T=\int_{-T}^T K^2w$. Integrating the nonnegative continuous function $(K-a_T/m_T)^2w$ gives $a_T^2\le m_Tb_T$. Step 5.1 gives a finite limit $b=\lim b_T<6.01^2$. Since $K\ge0$, the $a_T$ increase and are bounded by $\sqrt{m_Tb_T}\le\sqrt b$; thus they converge to $a\le\sqrt b$. The pointwise premise gives $|H|^2\le(\log q+K)^2$, whose finite weighted integrals are $(\log q)^2m_T+2\log q\,a_T+b_T$. These converge to $(\log q)^2+2\log q\,a+b\le(\log q+\sqrt b)^2$. The nonnegative continuous integrals of $|H|^2w$ therefore converge as well and satisfy the same bound. Taking square roots proves the stated consequent, since $\log q\ge0$ and $\sqrt b<6.01$. This argument uses finite continuous integrals and their established tails, without a Riemann--Lebesgue comparison premise. [given, step 1.1, step 5.1, algebra] ∎
