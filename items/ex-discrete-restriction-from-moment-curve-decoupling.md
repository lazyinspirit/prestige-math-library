---
id: ex-discrete-restriction-from-moment-curve-decoupling
kind: example
title: Discrete Restriction from Moment-Curve Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
- thm-bourgain-demeter-guth-sharp-moment-curve-decoupling
- thm-minkowski-inequality-for-integrals
- thm-holder-inequality-for-integrals
- def-polynomial-decoupling-weight-and-norm
- def-moment-curve
- def-moment-curve-extension-operator
- lem-polynomial-weight-localization
- def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§4, Theorem 4.1, pp. 637–638: discrete restriction estimate deduced
      from Theorem 1.2.'
axiom_use: Countable Choice is inherited from the actual complete Lebesgue, Fourier
  and weighted decoupling suppliers; no full Axiom of Choice is used.
---

## Example

Assume Countable Choice. Fix integers $n\ge2$ and $N\ge1$, a real number $E\ge100n$, a real exponent $2\le p<\infty$, points $t_i\in((i-1)/N,i/N]$ and coefficients $a_i\in\mathbb C$ for $1\le i\le N$. If $B_R\subset\mathbb R^n$ is any ball of radius $R\ge N^n$, then
$$\left(\frac1{|B_R|}\int_{\mathbb R^n}\left|\sum_{i=1}^N a_i e^{2\pi i(x_1t_i+x_2t_i^2+\cdots+x_nt_i^n)}\right|^p w_{B_R,E}(x)\,dx\right)^{1/p}\le C_{n,p,E,\varepsilon}\left(N^\varepsilon+N^{\frac12(1-\frac{n(n+1)}p)+\varepsilon}\right)\left(\sum_{i=1}^N|a_i|^2\right)^{1/2}$$
for every $\varepsilon>0$, where $|B_R|$ is Lebesgue measure and the constant is independent of $N$, $R$, the points, and the coefficients.

## Example references

[Sharp moment-curve decoupling theorem]([[thm-bourgain-demeter-guth-sharp-moment-curve-decoupling]])

[Moment-curve extension operator]([[def-moment-curve-extension-operator]])

[Polynomially weighted norm]([[def-polynomial-decoupling-weight-and-norm]])

[BDG, Theorem 4.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The data in the Example and the critical exponent $p_c=n(n+1)$.

[F1] The sharp decoupling theorem states that for every $\eta>0$, every $0<\delta\le1$, every ball $B\subset\mathbb R^n$ of radius $\delta^{-n}$, and every $g\in L^1([0,1])$, $$\|E^{(n)}g\|_{L^{p_c}(w_{B,E})}\le C_{n,E,\eta}\delta^{-\eta}\left(\sum_{J\in\mathcal P_\delta}\|E_J^{(n)}g\|_{L^{p_c}(w_{B,E})}^2\right)^{1/2}.$$ ([[thm-bourgain-demeter-guth-sharp-moment-curve-decoupling]])

[F2] The weight is $w_{B,E}(x)=(1+|x-c_B|/R_B)^{-E}$ and the normalized weighted norm is $|B|^{-1/p}\|F\|_{L^p(w_{B,E})}$ for a ball of radius $R_B$. ([[def-polynomial-decoupling-weight-and-norm]])

[F3] The moment curve is $\Gamma_n(t)=(t,t^2,\ldots,t^n)$. ([[def-moment-curve]])

[F4] The extension operator is $E_J^{(n)}g(x)=\int_Jg(t)e^{2\pi i x\cdot\Gamma_n(t)}dt$. ([[def-moment-curve-extension-operator]])

[F5] For every finite $q\ge1$, $\|u+v\|_{L^q}\le\|u\|_{L^q}+\|v\|_{L^q}$. ([[thm-minkowski-inequality-for-integrals]])

[F6] Holder's inequality holds for conjugate exponents on any measure space. ([[thm-holder-inequality-for-integrals]])

[F7] For $\Lambda=c_0+r\mathbb Z^n$, $0<r\le R$, and every measurable $F$, $\int|F(x)|^pw_{B_R,E}(x)dx\asymp\sum_{c\in\Lambda}w_{B_R,E}(c)\int|F(x)|^pw_{B(c,r),E}(x)dx$ for $0<p<\infty$. ([[lem-polynomial-weight-localization]])

## Verification

**Proof technique:** Apply critical decoupling at scale $N^{-1}$, pass from short interval averages to point masses, then use monotonicity and $L^\infty$ interpolation.

1.1 The substitution $x=c_B+Ry$ gives $\int w_{B_R,E}(x)dx=R^n\int(1+|y|)^{-E}dy=C_{n,E}|B_R|$, since $E>n$. Put $r=N^n$, choose a translate $\Lambda=c_0+r\mathbb Z^n$, and write $B_c=B(c,r)$. By [F7], the large-ball weighted $p_c$-norm to the $p_c$th power is comparable to $\sum_{c\in\Lambda}w_{B_R,E}(c)\|E^{(n)}g\|_{L^{p_c}(w_{B_c,E})}^{p_c}$. Apply [F1] to each $B_c$ at $\delta=N^{-1}$. For $a_{c,J}=\|E_J^{(n)}g\|_{L^{p_c}(w_{B_c,E})}$, Minkowski on the weighted counting measure $w_{B_R,E}(c)$, with exponent $p_c/2\ge1$, gives
$$\left(\sum_cw_{B_R,E}(c)\left(\sum_Ja_{c,J}^2\right)^{p_c/2}\right)^{2/p_c}\le\sum_J\left(\sum_cw_{B_R,E}(c)a_{c,J}^{p_c}\right)^{2/p_c}.$$
The upper comparison in [F7], applied to each $E_J^{(n)}g$, bounds the inner sums by $C\|E_J^{(n)}g\|_{L^{p_c}(w_{B_R,E})}^{p_c}$. Taking the $p_c$th root proves
$$\|E^{(n)}g\|_{L^{p_c}(w_{B_R,E})}\le C_{n,E,\eta}N^\eta\left(\sum_{J\in\mathcal P_{1/N}}\|E_J^{(n)}g\|_{L^{p_c}(w_{B_R,E})}^2\right)^{1/2}.$$
[F1, F2, F5, F7, given, algebra]

2.1 Choose $0<\tau<\min_i(t_i-(i-1)/N)$ and set $K_i=[t_i-\tau,t_i]$ and $g_\tau=\sum_i a_i\tau^{-1}\mathbf1_{K_i}$. Each $K_i$ lies in the $i$th partition interval, so its contribution to the corresponding extension piece is the only one there. For each fixed $x$, the average $\tau^{-1}\int_{t_i-\tau}^{t_i}e^{2\pi i x\cdot\Gamma_n(t)}dt$ tends to $e^{2\pi i x\cdot\Gamma_n(t_i)}$ as $\tau\downarrow0$, and its modulus is at most $1$. The weight is integrable by step 1.1, so dominated convergence applies to the finitely many pieces and their sum. [F2, F3, F4, step 1.1, given, choose, construct, algebra]

3.1 Letting $\tau\downarrow0$ in the estimate of step 1.1 using the construction and convergence from step 2.1, and dividing by $|B_R|^{1/p_c}$, proves the Example at $p=p_c$ with right side $C N^\eta(\sum_i|a_i|^2)^{1/2}$. [step 1.1, step 2.1, F2, given, algebra]

4.1 For $2\le p<p_c$, Holder's inequality [F6] with exponents $p_c/p$ and its conjugate gives $\|S\|_{L^p(\mu)}\le\mu(\mathbb R^n)^{1/p-1/p_c}\|S\|_{L^{p_c}(\mu)}$ for $d\mu=|B_R|^{-1}w_{B_R,E}(x)dx$; its mass is $C_{n,E}$ by step 1.1. The case $p=p_c$ is step 3.1. For $p>p_c$, the pointwise bound $|\sum_i a_ie^{2\pi ix\cdot\Gamma_n(t_i)}|\le\sum_i|a_i|\le N^{1/2}(\sum_i|a_i|^2)^{1/2}$ and interpolation with the $p_c$ estimate give the factor $N^{\frac12(1-p_c/p)+\eta p_c/p}$. Taking the input $\eta$ sufficiently small absorbs the exponent into the displayed $\varepsilon$; for $p\le p_c$ the first displayed term absorbs the critical $N^\eta$. [F6, step 1.1, step 3.1, given, algebra]

5.1 Steps 3.1 and 4.1 give the stated bound for every finite $p\ge2$, with constants depending only on $n,p,E,\varepsilon$. [step 3.1, step 4.1, given] ∎
