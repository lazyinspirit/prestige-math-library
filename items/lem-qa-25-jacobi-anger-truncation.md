---
id: lem-qa-25-jacobi-anger-truncation
kind: lemma
title: Jacobi–Anger Chebyshev truncation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-25-hamiltonian-simulation-polynomial
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-is-entire-with-derivative-itself
  - alg-qa-25-qubitized-hamiltonian-simulation
  - alg-qa-25-small-time-aware-simulator
proof_strategy: direct
axiom_use: "None; every sum and integral is finite-dimensional or absolutely convergent."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 57 and proof"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4.1"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

With $J_k,T_k$ defined in [[def-qa-25-hamiltonian-simulation-polynomial]], for every real $\tau$ and integer $d\ge0$,
$$\sup_{|x|\le1}\left|\exp(-i\tau x)-\left(J_0(\tau)+2\sum_{k=1}^{d}(-i)^kJ_k(\tau)T_k(x)\right)\right| \le 2\sum_{k>d}|J_k(\tau)| \le \frac{2(|\tau|/2)^{d+1}}{(d+1)!\left(1-|\tau|/(2(d+2))\right)}$$
whenever $|\tau|/(2(d+2))<1$. In the OP4 simulator, $\rho=\epsilon^2/10000$ and the factorial-tail stopping test therefore certifies truncation error at most $\rho/8$; rounding each coefficient to error at most $\rho/(32(d+1))$ keeps the combined polynomial error below $\rho$. For the nontrivial simulation regime $|\tau|>\epsilon$, an integer $d$ passing OP4's test exists with
$$d=O\left(|\tau|+\frac{\ln(1/\epsilon)}{\ln(e+\ln(1/\epsilon)/|\tau|)}\right).$$
For $|\tau|\le\epsilon$, the constant polynomial $1$ approximates the target within $\epsilon$; the wrapper algorithm uses the exact identity circuit in that branch.

## Facts & Assumptions

**Given:** Real $\tau$, the coefficient series and Chebyshev recurrence in [[def-qa-25-hamiltonian-simulation-polynomial]], and rational $0<\epsilon<1$.

[F1] [[def-qa-25-hamiltonian-simulation-polynomial]]: $J_k(\tau)=\sum_{j\ge0}(-1)^j(\tau/2)^{2j+k}/(j!(j+k)!)$, $T_0=1,T_1=x,T_{k+1}=2xT_k-T_{k-1}$, and $f_\tau(x)=e^{-i\tau x}$.

[F2] [[def-complex-exponential]]: $e^z=\sum_{n\ge0}z^n/n!$.

[F3] [[lem-complex-exponential-series-converges-everywhere]]: the exponential series converges absolutely at every complex argument.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $|e^{iu}|=1$ for real $u$.

[F5] [[thm-complex-exponential-is-entire-with-derivative-itself]]: the complex exponential is differentiable with derivative equal to itself.

[F6] [[thm-complex-exponential-addition-and-real-extension]]: the complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ for all complex $z,w$.

[F7] [[alg-qa-25-qubitized-hamiltonian-simulation]]: OP4 sets $\rho=\epsilon^2/10000$, starts the degree loop at $d=\max(1,\lceil|\tau|\rceil)$, accepts a factorial-tail bound at most $\rho/8$, and rounds $d+1$ coefficients within $\rho/(32(d+1))$ each.

[F8] [[alg-qa-25-small-time-aware-simulator]]: if $\alpha|t|\le\epsilon$, the wrapper returns the exact identity circuit.

## Proof

**Given:** As in Facts & Assumptions.

1.1 The Chebyshev recurrence and $\cos((k+1)\theta)+\cos((k-1)\theta)=2\cos\theta\cos(k\theta)$ show by induction that $T_k(\cos\theta)=\cos(k\theta)$ for all $k\ge0$. Every $x\in[-1,1]$ is $\cos\theta$ for some real $\theta$, so $|T_k(x)|\le1$. [F1, algebra, induction]

1.2 If $\tau\ne0$, the ratio of consecutive absolute terms in the defining series of $J_k(\tau)$ is $|\tau|^2/[4(j+1)(j+k+1)]$, which tends to zero, so the series converges absolutely; for $\tau=0$ the series is immediate. For the integral $I_{k,j}=\int_0^1 u^{j-1/2}(1-u)^{k-1/2}\,du$, splitting $1=u+(1-u)$ and integrating the derivative of $u^{j+1/2}(1-u)^{k+1/2}$ gives $I_{k,j+1}/I_{k,j}=(j+1/2)/(j+k+1)$. Iterating yields $I_{k,j}/I_{k,0}=(2j)!k!/[4^j j!(j+k)!]$. Expanding $e^{i\tau t}$ uniformly on $[-1,1]$, substituting $u=t^2$, and using this moment ratio gives $J_k(\tau)=\frac{(\tau/2)^k}{k! I_{k,0}}\int_{-1}^{1}e^{i\tau t}(1-t^2)^{k-1/2}\,dt.$ The weight is nonnegative and its normalized integral is one; [F4] therefore gives $|J_k(\tau)|\le(|\tau|/2)^k/k!$. [F1, F2, F3, F4, algebra]

1.3 Put $L=\ln(1/\epsilon)>0$, $\tau_0=|\tau|>\epsilon$, and $S=\tau_0+L/\ln(e+L/\tau_0)$. If $\tau_0\ge1/4$, then $S\ge1/4$. If $\tau_0<1/4$, put $u=1/\tau_0>4$, so $L>\ln u$. The function $g(y)=y/\ln(e+uy)$ is increasing for $y>0$, since its derivative has numerator $\ln(e+uy)-uy/(e+uy)>0$; the first term exceeds $1$ and the second is below $1$. Also $\ln u\le u/2$ for $u\ge4$ (the difference has positive derivative and is positive at $4$), and $e\le u^2/2$, so $e+u\ln u\le u^2$. Therefore $S\ge g(L)>g(\ln u)\ge1/2$. In all cases $S\ge1/4$. Set $m=\lceil64S\rceil$; then $m\ge16$, $m\ge64\tau_0$, and $d=m-1\ge\max(1,\lceil\tau_0\rceil)$, so this is an eligible candidate in the OP4 loop starting rule [F7]. The real parameter $\tau$ is defined in [F1]. [F1, F7, given, algebra]

2.1 For $x=\cos\theta$, [F6] writes $e^{-i\tau x}$ as the product of the absolutely convergent exponential series for $e^{-i\tau e^{i\theta}/2}$ and $e^{-i\tau e^{-i\theta}/2}$. Absolute convergence permits grouping terms by the exponent difference $k$; for each $k\ge0$ the coefficient of $e^{ik\theta}$ is $(-i)^kJ_k(\tau)$, and the coefficient of $e^{-ik\theta}$ is the same. Pairing these terms and using [F1] gives $e^{-i\tau x}=J_0(\tau)+2\sum_{k\ge1}(-i)^kJ_k(\tau)T_k(x).$ By [F1], [F3], [F4], and [F6], the defining product is absolutely and uniformly convergent in $\theta$ on bounded intervals, so the regrouping is valid. [F1, F2, F3, F4, F6, step 1.1, algebra]

3.1 Subtracting the degree-$d$ partial sum in step 2.1, applying the triangle inequality, and using $|T_k(x)|\le1$ from step 1.1 gives error at most $2\sum_{k>d}|J_k(\tau)|$. With $m=d+1$, the ratio of consecutive factorial majorants $(|\tau|/2)^k/k!$ for $k\ge m$ is at most $u=|\tau|/(2(m+1))<1$. The geometric-series bound from step 1.2 now yields the stated factorial tail. [F1, step 1.1, step 1.2, step 2.1, algebra]

4.1 By [F7], each of the $d+1$ OP4 coefficient errors is at most $\rho/(32(d+1))$. Since a nonconstant Chebyshev term has coefficient multiplier $2$, their total uniform contribution is at most $(1+2d)\rho/(32(d+1))<\rho/16$; adding the tail $\rho/8$ from step 3.1 gives a combined error $<\rho$. The coefficients and multiplier $2$ are those of the expansion in [F1]. [F1, F7, step 3.1, algebra]

4.2 Let $r=L/\tau_0$. If $r\ge1$, then $m\ge64\tau_0(1+r/\ln(e+r))$. Since $\ln y\le\sqrt y$ for $y\ge1$ and $r/(e+r)\ge1/(e+1)$, we have $r/\ln(e+r)\ge\sqrt{e+r}/(e+1)$. Thus $2m/(e\tau_0)\ge[128/(e(e+1))]\sqrt{e+r}>\sqrt{e+r}$, because $e<3$ gives $128/(e(e+1))>128/12>1$; hence $\ln(2m/(e\tau_0))\ge\frac12\ln(e+r)$. If $r<1$, $m\ge64\tau_0$ gives $2m/(e\tau_0)\ge128/e$, hence $\ln(2m/(e\tau_0))>1$, since $e<3$ implies $128/e>42>e$. For $r\ge1$, these bounds give $m\ln(2m/(e\tau_0))\ge32\tau_0(\ln(e+r)+r)\ge32(L+\tau_0)$, because $\ln(e+r)>1$. For $r<1$, they give $m\ln(2m/(e\tau_0))>64\tau_0>32(L+\tau_0)$, because $L<\tau_0$. Also $u_m=\tau_0/[2(m+1)]\le1/128$, so $2/(1-u_m)\le256/127<4$, and the factorial tail expression is bounded by the estimate of step 3.1. The real $\tau$ is defined in [F1]. $\ln(m!)=\sum_{j=1}^m\ln j\ge\int_1^m\ln x\,dx\ge m\ln m-m,$ so $m!\ge(m/e)^m$. The factorial-tail test at $d=m-1$ is consequently at most $\frac{2(\tau_0/2)^m}{m!(1-u_m)} \le4\exp\!\left(-m\ln\frac{2m}{e\tau_0}\right) \le4e^{-32(L+\tau_0)} \le e^{-2L}/80000=\rho/8.$ The last inequality holds because $L+\tau_0>1$: for $0<\epsilon<1$, the function $\ln(1/\epsilon)-(1-\epsilon)$ is positive (its derivative is $(\epsilon-1)/\epsilon<0$ as $\epsilon$ increases to $1$, and its value at $1$ is zero), and $\tau_0>\epsilon$. Hence $30(L+\tau_0)>30>\ln(320000)$; the numerical comparison follows from $e>2$, which gives $e^{30}>2^{30}>320000$. Since $m\le64S+1\le68S$ using $S\ge1/4$, the passing degree $d=m-1$ is $O(S)$. The factorial tail is the estimate of step 3.1 and the OP4 threshold is [F7]. [F1, F7, given, step 3.1, algebra]

5.1 If $\tau_0\le\epsilon$, the derivative fact [F5] and $|e^{-isx}|=1$ from [F4] give $e^{-i\tau x}-1=\int_0^\tau -ix e^{-isx}\,ds,\qquad |e^{-i\tau x}-1|\le|\tau x|\le\epsilon$ for every $x\in[-1,1]$. Thus the wrapper [F8] has the stated small-time error, including $\tau=0$. [F4, F5, F8, given, algebra] ∎
