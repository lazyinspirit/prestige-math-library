---
id: thm-periodic-centered-wave-amplification-and-endpoint
kind: theorem
title: Periodic leapfrog amplification, finite-time bounds, and the Nyquist endpoint
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-centered-leapfrog-wave-scheme, def-uniform-grid-and-difference-operators, lem-periodic-heat-difference-amplification-symbol, lem-orthogonality-of-characters-on-a-finite-cyclic-group, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.4, PDF pp. 91–96: periodic wave characteristic roots and practical finite-time estimates; §6.3, PDF pp. 87–89: strict CFL energy and endpoint coercivity distinction."
---

## Statement

On a periodic grid of length $L=Nh$, let $\nu=ck/h>0$, $V^0=(U^1-U^0)/k$, and write $U^n=\sum_{\ell=0}^{N-1}w_\ell^n\phi_\ell$ in the discrete Fourier basis; write $\widehat V_\ell^0$ for the coefficient of $V^0$ in the same basis. Then
$$ w_\ell^{n+1}-2(1-2\nu^2s_\ell)w_\ell^n+w_\ell^{n-1}=0,\qquad s_\ell=\sin^2(\pi\ell/N). $$
For $0<\nu\le\nu_0<1$, the nonconstant roots are distinct and have modulus one, and
$$ \|U^n\|_{2,h}\le\left(1+\frac{\nu_0}{\sqrt{1-\nu_0^2}}\right)\|U^0\|_{2,h}+t_n\|V^0\|_{2,h}. $$
The mean mode is $w_0^n=w_0^0+t_n\widehat V_0^0$. At $\nu=1$ and even $N$, the Nyquist mode has the repeated root $-1$ and solution $w_{N/2}^n=(-1)^n(A+nB)$, where $B=0$ exactly when $w_{N/2}^1=-w_{N/2}^0$. Thus arbitrary starting pairs do not have a uniform endpoint power bound.

## Facts & Assumptions

**Given:** $N\ge2$, fixed $L=Nh$, $c,h,k>0$, and the periodic centered leapfrog scheme.

[F1] The periodic branch obeys $U_j^{n+1}-2U_j^n+U_j^{n-1}=\nu^2(U_{j+1}^n-2U_j^n+U_{j-1}^n)$ ([[def-centered-leapfrog-wave-scheme]]).

[F2] The one-dimensional specialization of the periodic heat symbol lemma with unit diffusivity gives $-\Delta_h\phi_\ell=4h^{-2}s_\ell\phi_\ell$ ([[lem-periodic-heat-difference-amplification-symbol]]).

[F3] The displayed periodic Fourier modes form a basis of the complexified grid space ([[lem-periodic-heat-difference-amplification-symbol]]).

[F4] The finite root-of-unity sum gives orthogonality of distinct periodic Fourier modes ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F5] Complex conjugation and modulus have their coordinate, multiplication, and triangle laws ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F6] The periodic grid norm is $\|v\|_{2,h}^2=h\sum_j|v_j|^2$ ([[def-uniform-grid-and-difference-operators]]).

## Proof

1.1 Substituting one mode from [F2] into [F1] uses $-\Delta_h\phi_\ell=4h^{-2}s_\ell\phi_\ell$ and gives the displayed scalar recurrence, whose characteristic polynomial is $$ p_\ell(r)=r^2-2(1-2\nu^2s_\ell)r+1. $$ [F1, F2, algebra]

2.1 For $\ell=0$, $s_0=0$, so successive first differences are constant and $w_0^n=w_0^0+n(w_0^1-w_0^0)=w_0^0+t_n\widehat V_0^0$. For $\ell\ne0$ and $\nu<1$, put $q=1-2\nu^2s_\ell$; then $-1<q<1$, and $\rho=q+i\sqrt{1-q^2}$ and $\bar\rho$ are distinct roots with modulus one. [F5, step 1.1, algebra]

2.2 For a nonconstant mode the recurrence solution matching $w_\ell^0,w_\ell^1$ is $$ w_\ell^n=w_\ell^0\frac{\rho^n+\bar\rho^n}{2}+(w_\ell^1-qw_\ell^0)\frac{\rho^n-\bar\rho^n}{\rho-\bar\rho}. $$ Indeed both sequences solve the recurrence and the right side equals $w_\ell^0,w_\ell^1$ at $n=0,1$. The quotient is $\sum_{r=0}^{n-1}\rho^{n-1-r}\bar\rho^r$, so its modulus is at most $n$. Also $|(\rho^n-\bar\rho^n)/(\rho-\bar\rho)|\le1/\sqrt{1-q^2}$ since $|\rho^n-\bar\rho^n|\le2$ and $|\rho-\bar\rho|=2\sqrt{1-q^2}$. [step 1.1, F5, algebra]

3.1 Since $w_\ell^1-qw_\ell^0=k\widehat V_\ell^0+(1-q)w_\ell^0$ and $$ \frac{1-q}{\sqrt{1-q^2}}=\frac{\nu\sqrt{s_\ell}}{\sqrt{1-\nu^2s_\ell}}\le\frac{\nu_0}{\sqrt{1-\nu_0^2}}, $$ step 2.2 gives $|w_\ell^n|\le(1+\nu_0/\sqrt{1-\nu_0^2})|w_\ell^0|+t_n|\widehat V_\ell^0|$. The same bound holds for the mean mode. [F2, step 2.2, algebra]

4.1 The modes are a basis by [F3] and orthogonal by [F4]. By [F6], each has squared norm $Nh$, so Parseval's identity holds in $\|\cdot\|_{2,h}$. Squaring the coefficient bounds, summing, and using $$ \left(\sum_\ell a_\ell b_\ell\right)^2\le\left(\sum_\ell a_\ell^2\right)\left(\sum_\ell b_\ell^2\right), $$ which follows by expanding $\sum_{\ell<r}(a_\ell b_r-a_rb_\ell)^2\ge0$, yields the stated weighted-grid norm estimate. [F3, F4, F5, F6, step 3.1, algebra]

5.1 If $\nu=1$, $N$ is even, and $\ell=N/2$, then $s_\ell=1$ and $p_\ell(r)=(r+1)^2$. Its solutions are $(-1)^n(A+nB)$; the initial values give $B=-w_\ell^1-w_\ell^0$, so $B=0$ exactly when $w_\ell^1=-w_\ell^0$. For $B\ne0$ the mode grows linearly in $n$, proving the endpoint caveat. [F1, step 1.1, algebra] ∎
