---
id: lem-diagonal-pade-remainder-bound
kind: lemma
title: "A finite scalar remainder bound for the diagonal Padé exponential"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-diagonal-pade-approximant-for-exponential
  - def-complex-exponential
  - lem-exponential-series-of-a-bounded-operator
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
---

## Statement

For $m\ge0$ and $\rho\ge0$, put
$$d_m(\rho):=1-\sum_{j=1}^m a_{m,j}\rho^j,$$
with the empty sum equal to zero and $a_{m,j}$ as in
[[def-diagonal-pade-approximant-for-exponential]]. If $d_m(\rho)>0$, then
$q_m$ has no zero in $|z|\le\rho$ and, for every such $z$,
$$\left|e^z-r_m(z)\right| \le \frac{\rho^{2m+1}e^\rho(m!)^2} {(2m)!(2m+1)!\,d_m(\rho)}.$$
This is a finite-order bound; it makes no adaptive choice of $m$ or scaling.

## Facts & Assumptions

**Given:** An integer $m\ge0$, a radius $\rho\ge0$ with $d_m(\rho)>0$, and a complex number $z$ with $|z|\le\rho$.

[F1] The Padé numerator and denominator coefficients are $a_{m,j}=(2m-j)!m!/((2m)!j!(m-j)!)$ and $q_m(z)=p_m(-z)$ ([[def-diagonal-pade-approximant-for-exponential]]).

[F2] The scalar exponential is its everywhere absolutely convergent series ([[def-complex-exponential]]); the bounded-operator exponential lemma includes absolute convergence of the same series when the operator is multiplication by a scalar ([[lem-exponential-series-of-a-bounded-operator]]).

## Proof

1.1 Set $g_m(t)=t^m(1-t)^m$. For real $h\ne0$ and fixed $t,z$, the power series in [F2] gives $\frac{e^{(t+h)z}-e^{tz}}h=\sum_{n\ge1}\frac{z^n}{n!}\sum_{\ell=0}^{n-1}(t+h)^{n-1-\ell}t^\ell$. For $|h|\le1$, the inner sum is bounded by $n(|t|+1)^{n-1}$, so the summable majorant $\sum_{n\ge1}n|z|^n(|t|+1)^{n-1}/n!$ makes the tails uniform in $h$; termwise limits of finite partial sums then give $\frac{d}{dt}e^{tz}=z e^{tz}$. For $z\ne0$, integration by parts $2m+1$ times, using $g_m^{(2m+1)}=0$, gives $\int_0^1 e^{tz}g_m(t)\,dt= \left[e^{tz}\sum_{k=0}^{2m}\frac{(-1)^k g_m^{(k)}(t)}{z^{k+1}}\right]_{t=0}^{t=1}.$ For $k<m$, both endpoint derivatives vanish. For $k=m+\ell$ with $0\le\ell\le m$, expansion of $t^m(1-t)^m$ at the endpoints gives $g_m^{(k)}(1)=(-1)^m\binom m\ell(m+\ell)!$ and $g_m^{(k)}(0)=(-1)^\ell\binom m\ell(m+\ell)!$. After multiplication by $(-1)^m z^{2m+1}/(2m)!$, the coefficient of $e^z z^{m-\ell}$ is $(-1)^{m-\ell}\binom m\ell(m+\ell)!/(2m)!=(-1)^{m-\ell}a_{m,m-\ell}$, and the coefficient of $z^{m-\ell}$ without $e^z$ is $-\binom m\ell(m+\ell)!/(2m)!=-a_{m,m-\ell}$. These are exactly the coefficients of $q_m(z)e^z-p_m(z)$, so collecting the powers gives $q_m(z)e^z-p_m(z)=\frac{(-1)^m z^{2m+1}}{(2m)!} \int_0^1 e^{tz}t^m(1-t)^m\,dt.$ Both sides are continuous at $z=0$, so the identity holds there as well. [F1, F2, algebra]

2.1 By the triangle inequality, $|q_m(z)|=|p_m(-z)|\ge1-\sum_{j=1}^m a_{m,j}|z|^j\ge d_m(\rho)>0$. Thus $q_m$ has no zero in the disk. Also $\int_0^1t^m(1-t)^m\,dt=\frac{(m!)^2}{(2m+1)!},$ as follows by integrating by parts $m$ times and then integrating $(1-t)^{2m}$. Hence $\left|\int_0^1e^{tz}t^m(1-t)^m\,dt\right| \le e^\rho(m!)^2/(2m+1)!$. [given, step 1.1, algebra]

3.1 Divide the identity in step 1.1 by the nonzero $q_m(z)$ from step 2.1 and use $|z|^{2m+1}\le\rho^{2m+1}$. This gives the stated remainder bound. [step 1.1, step 2.1, algebra] ∎
