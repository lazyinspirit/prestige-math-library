---
id: lem-loggamma-series-convergence-and-gamma-identity
kind: lemma
title: Weierstrass log-Gamma series converges to a Gamma branch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-loggamma-right-halfplane-branch, def-euler-beta-function, def-euler-gamma-function, def-euler-mascheroni-constant, thm-euler-mascheroni-constant-and-harmonic-asymptotic, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-ftc-second-part, thm-continuous-implies-integrable, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, thm-substitution-for-improper-integrals, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, thm-derivative-of-exponential, lem-mean-value-theorem-on-closed-interval, thm-algebra-of-derivatives, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, thm-chain-rule-for-total-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, lem-gamma-integral-converges-locally-uniformly, thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.2, Gamma function and Euler constant
      url: https://dlmf.nist.gov/5.2
    - title: DLMF, §5.8(ii), equation 5.8.2
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Statement

For every $z$ with $\operatorname{Re}z>0$, the series defining
$\ell_+(z)$ in [[def-loggamma-right-halfplane-branch]] converges locally
uniformly, defines a holomorphic function, and satisfies
$e^{\ell_+(z)}=\Gamma(z)$ for Euler's Gamma function on that half-plane.

## Facts & Assumptions

**Given:** $\operatorname{Re}z>0$ and the definitions in
[[def-loggamma-right-halfplane-branch]].

[F1] [[def-euler-beta-function]]:
$$B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt \qquad(\operatorname{Re}p,\operatorname{Re}q>0).$$

[F2] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
$\operatorname{Log}'(w)=1/w$ and $\exp(\operatorname{Log}w)=w$ on the slit
plane.

[F3] [[thm-ftc-second-part]] and
[[thm-continuous-implies-integrable]]: a continuously differentiable real
function integrates its derivative to its endpoint difference, and a
continuous derivative on a compact interval is integrable; apply componentwise
to complex-valued functions of a real parameter.

[F4] [[thm-linearity-of-the-integral]] and
[[thm-monotonicity-of-the-integral]]: addition commutes with the real integral,
and pointwise order gives the corresponding integral bounds; apply to
components of complex-valued integrands.

[F5] [[thm-logarithm-derivative-and-integral]] and
[[thm-natural-logarithm-laws]]: $\log'(x)=1/x$ for $x>0$,
$\log(xy)=\log x+\log y$, and $\log 1=0$.

[F6] [[thm-complex-exponential-is-entire-with-derivative-itself]],
[[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]],
and [[thm-chain-rule-for-total-derivatives]]: the complex exponential is
real-totally differentiable with derivative multiplication by its value, so
the real-parameter derivative of $t\mapsto \exp(z\log t)$ is
$zt^{z-1}$. [[thm-complex-exponential-addition-and-real-extension]] gives
the addition law; [[thm-algebra-of-derivatives]] supplies the product rule
used for $t^z(1-t)^N$. The same complex-to-real derivative correspondence and total chain rule apply to the holomorphic principal logarithm along the affine real-parameter paths in step 1.1.

[F7] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
for $u>0$, $|u^{z-1}|=u^{\operatorname{Re}z-1}$ under the real-log power
convention.

[F8] [[def-euler-gamma-function]] and
[[lem-gamma-integral-converges-locally-uniformly]]: for
$\operatorname{Re}z>0$, $\Gamma(z)=\int_0^\infty u^{z-1}e^{-u}\,du$, and
the corresponding positive real majorant is integrable.

[F9] [[def-euler-mascheroni-constant]] and
[[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]:
if $H_N=\sum_{n=1}^N1/n$, then $H_N-\log N\to\gamma$.

[F10] [[thm-exponential-is-strictly-increasing]],
[[thm-derivative-of-exponential]], and
[[lem-mean-value-theorem-on-closed-interval]]: the real exponential is
increasing, has derivative $e^x$, and its mean-value estimate applies on
compact intervals.

[F11] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally
uniform limit of holomorphic functions is holomorphic.

[F12] [[thm-substitution-for-improper-integrals]]:
monotone affine changes of variable preserve the corresponding proper and
improper integrals; apply componentwise to the complex Beta integrand.

## Proof
1.1 For $w=z/n$ with $\operatorname{Re}z>0$, the path $1+tw$ lies in the principal-logarithm domain. Its derivative integrand is continuous on $[0,1]$ and is integrable by [F3]. By [F2], [F3], and the real-parameter chain rule,
$$\operatorname{Log}(1+w)=\int_0^1\frac{w}{1+tw}\,dt,\qquad w-\operatorname{Log}(1+w)=\int_0^1\frac{tw^2}{1+tw}\,dt.$$
Since $|1+tw|^2=1+2t\operatorname{Re}w+t^2|w|^2\ge1$, the summand has
absolute value at most $|z|^2/(2n^2)$. Summing this bound is uniform on every
compact subset of the right half-plane. Each summand is holomorphic there,
so the series converges locally uniformly and defines a holomorphic function
by [F11]. [given, F2, F3, F6, F11, algebra]

2.1 For $N\ge1$, the Beta integrals satisfy
$$B(z,1)=\frac1z,\qquad B(z,N+1)=\frac{N}{z+N}B(z,N).$$
For the base formula, apply [F3] componentwise on $[\varepsilon,1]$ to the
primitive $t^z/z$ and let $\varepsilon\downarrow0$; the lower boundary tends
to $0$ since $|\varepsilon^z|=\varepsilon^{\operatorname{Re}z}$. For $N\ge1$,
differentiate $g(t)=t^z(1-t)^N$ on $[\varepsilon,1]$. By [F6],
$$g'(t)=zt^{z-1}(1-t)^N-Nt^z(1-t)^{N-1}.$$
The derivative is continuous and integrable on this compact interval by
[F3]. Applying the componentwise fundamental theorem and then letting
$\varepsilon\downarrow0$ gives $zB(z,N+1)=NB(z+1,N)$; both boundary terms
vanish. The integrand identity
$t^{z-1}(1-t)^{N-1}=t^{z-1}(1-t)^N+t^z(1-t)^{N-1}$ and [F4] give
$B(z,N)=B(z,N+1)+B(z+1,N)$. Combining these two equalities yields
$(z+N)B(z,N+1)=NB(z,N)$, proving the recurrence. Iterating it from
$B(z,1)=1/z$ gives
$$B(z,N+1)=\frac{N!}{z(z+1)\cdots(z+N)}.$$
All denominators are nonzero because $\operatorname{Re}(z+j)>0$ for
$j\ge0$. [F1, F3, F4, F6, algebra, induction]

2.2 Define
$$A_N(z):=\frac{N!\,N^z}{z(z+1)\cdots(z+N)},\qquad N^z:=\exp(z\log N).$$
By step 2.1 and the substitution $u=Nt$ in [F12],
$$A_N(z)=N^zB(z,N+1) =\int_0^N u^{z-1}\left(1-\frac{u}{N}\right)^Ndu.$$
The real logarithm laws in [F5] preserve the stated power convention under
this substitution. [F1, F5, F12, step 2.1, algebra]

3.1 Fix $z$ with $a:=\operatorname{Re}z>0$, and define $K_N(u)=(1-u/N)^N$
for $0\le u\le N$ and $K_N(u)=0$ for $u>N$. For $0\le u<N$, [F5] and
[F12] give
$$\log(1-u/N)=-\int_0^{u/N}\frac{ds}{1-s}\le-\frac{u}{N},$$
so $0\le K_N(u)\le e^{-u}$ by exponential monotonicity and the addition law;
the same bound holds at $u=N$. On a fixed interval $[0,R]$, for $N>2R$,
$$N\log(1-u/N)=-u-\delta_N(u),\qquad 0\le\delta_N(u)=N\int_0^{u/N}\frac{s}{1-s}\,ds\le\frac{R^2}{N}.$$
The mean value theorem in [F10] and $e^t\le1$ for $t\le0$ give
$|K_N(u)-e^{-u}|\le R^2/N$ uniformly on $[0,R]$. [F5, F9, F10, F12, algebra]

3.2 By [F7], $|u^{z-1}|=u^{a-1}$. For each real or imaginary component, the
integral difference on $[0,R]$ is bounded, using [F4], by
$$\frac{R^2}{N}\int_0^R u^{a-1}\,du=\frac{R^{a+2}}{aN}.$$
On $[R,\infty)$, $K_N(u)\le e^{-u}$ bounds the difference in each component
by $2\int_R^\infty u^{a-1}e^{-u}\,du$, which tends to $0$ as
$R\to\infty$ by [F8]. First choosing $R$ large and then $N$ large proves
$A_N(z)\to\Gamma(z)$. [F4, F7, F8, step 3.1, algebra]

4.1 Let $\ell_N(z)$ be the defining partial sum through $N$ and put
$$P_N(z):=z\exp(\gamma_E z)\prod_{n=1}^N\left(1+\frac zn\right)e^{-z/n}.$$
The principal-log identity $\exp(\operatorname{Log}w)=w$, the exponential
addition law in [F6], and the formula from step 2.1 give
$$\exp(\ell_N(z))=P_N(z)^{-1},\qquad P_N(z)A_N(z)=\exp\!\left(z(\gamma_E+\log N-H_N)\right).$$
By [F9] the second expression tends to $1$. By step 1.1,
$\ell_N(z)\to\ell_+(z)$; continuity of the complex exponential gives
$P_N(z)\to\exp(-\ell_+(z))$. Step 3.2 gives $A_N(z)\to\Gamma(z)$, so
$$\exp(-\ell_+(z))\Gamma(z)=1.$$
Multiplying by $\exp(\ell_+(z))$ and using the addition law proves
$e^{\ell_+(z)}=\Gamma(z)$. [F2, F6, F8, F9, step 1.1, step 2.1, step 2.2, step 3.2, algebra] ∎
