---
id: thm-maass-hecke-prime-power-relations
kind: theorem
title: "Maass Hecke Prime-Power Relations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-hecke-operator-on-maass-forms
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - def-maass-spectral-parameter
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.2, equation (4.10), printed pp. 28–29: the Hecke coefficient identity and prime-power recurrence."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§7, Hecke eigenvalue recurrences for Maass forms; printed pp. 37–41."
---

## Statement

Let $N\ge1$, let $\chi$ be an even unitary Dirichlet character modulo $N$,
let $u$ be a weight-zero Maass cusp form with spectral parameter $t$, and
assume its Fourier–Whittaker expansion at infinity is
$$u(x+iy)=\sum_{k\in\mathbb Z\setminus\{0\}}\rho_u(k)\sqrt y\, K_{it}(2\pi|k|y)e^{2\pi ikx}.$$
Write $a_k(u):=\rho_u(k)$ for these coefficients.
For every positive integer $n$ coprime to $N$, the pointwise finite function
$T_nu$ has an expansion in the same kernels
$\sqrt y K_{it}(2\pi|m|y)e^{2\pi imx}$; denote its scalar coefficient at a
nonzero integer frequency $m$ by $a_m(T_nu)$. Then for every such $m$,
$$a_m(T_nu)=\sum_{d\mid\gcd(n,m)}\chi(d)\, a_{mn/d^2}(u).$$
If $p$ is prime with $p\nmid N$, then for every integer $r\ge2$ the finite
functions satisfy
$$T_{p^r}u=T_p(T_{p^{r-1}}u)-\chi(p)\,T_{p^{r-2}}u.$$
This theorem concerns the Fourier coefficients and pointwise operator identity;
it does not assert that the Hecke operators are normal, commute on the full
cuspidal Hilbert space, or have a simultaneous orthogonal eigenbasis.

## Statement references

[[def-hecke-operator-on-maass-forms]]

[[thm-fourier-whittaker-expansion-maass-cusp-forms]]

[[def-maass-spectral-parameter]]

## Facts & Assumptions

**Given:** $N\ge1$, an even unitary character $\chi$ modulo $N$, a weight-zero
Maass cusp form with the displayed Fourier–Whittaker expansion, and the finite
operators $T_n$ from the definition.

[F1] A weight-zero Maass cusp form has expansion
$u(x+iy)=\sum_{n\in\mathbb Z\setminus\{0\}}\rho_u(n)\sqrt y\,
K_{it}(2\pi|n|y)e^{2\pi inx}$, with absolute and uniform convergence in $x$
for each fixed $y>0$.
([[thm-fourier-whittaker-expansion-maass-cusp-forms]])

[F2] For $(n,N)=1$, $T_nu(z)=n^{-1/2}\sum_{ad=n,d>0}
\chi(a)\sum_{r=0}^{d-1}u((az+r)/d)$.
([[def-hecke-operator-on-maass-forms]])

[F3] The Fejér means of a continuous one-periodic function converge uniformly
to that function. ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]])

## Proof

1.1 Fix $y>0$ and insert [F1] into [F2]. For a Fourier mode $k$, the sum $\sum_{r=0}^{d-1}e^{2\pi ikr/d}$ equals $d$ if $d\mid k$ and $0$ otherwise, by the finite geometric-series formula. Writing $k=d\ell$ in the surviving terms cancels the factor $n^{-1/2}$ against $d\sqrt{a/d}$ because $n=ad$. The resulting mode is $a_{d\ell}(u)\chi(a)\sqrt y\, K_{it}(2\pi|a\ell|y)e^{2\pi ia\ell x}$. Since the input has no zero frequency, the finite sum also has no zero mode. Thus it is one-periodic in $x$. [F1, F2, algebra]

2.1 For nonzero output frequency $m=a\ell$, the conditions are $a\mid n$ and $a\mid |m|$; the signed input frequency is $d\ell=mn/a^2$. Reindexing $a$ as a positive divisor of $\gcd(n,|m|)$ gives the stated coefficient formula. Each sum over $a,d,r$ is finite, so the reindexing introduces no convergence interchange. [step 1.1, algebra]

3.1 Let $s=v_p(|m|)$. Applying the coefficient formula to the two terms of $T_pT_{p^{r-1}}u$ gives the terms $$\sum_{j=0}^{\min(r-1,s+1)}\chi(p)^{j} a_{mp^r/p^{2j}}(u) +\sum_{j=0}^{\min(r-1,s-1)}\chi(p)^{j+1} a_{mp^{r-2}/p^{2j}}(u),$$ where the second sum is empty for $s=0$. The coefficient of $T_{p^r}u$ is $\sum_{j=0}^{\min(r,s)}\chi(p)^{j}a_{mp^r/p^{2j}}(u)$. The first displayed sum contains the target indices $j=0,\ldots,\min(r-1,s)$; its only extra index, when $s<r-1$, is $j=s+1$. The second sum duplicates the target indices $j=1,\ldots,\min(r,s)$. Meanwhile the coefficient of $\chi(p)T_{p^{r-2}}u$ has indices $j=1,\ldots,\min(r-1,s+1)$, which removes exactly those duplicates and the extra index. Thus the prime-power identity holds coefficient by coefficient. [step 2.1, algebra]

4.1 At fixed $y$, each side of the operator identity is continuous and one-periodic in $x$. Their zero Fourier coefficients both vanish by step 1.1; the nonzero Fourier coefficients agree by step 3.1 (and the same finite-sum coefficient calculation applied to the intermediate function). By [F3], a continuous periodic function is determined by its Fourier coefficients, so the two sides agree for every $x$ and $y$. [F3, step 3.1, algebra] ∎

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.
