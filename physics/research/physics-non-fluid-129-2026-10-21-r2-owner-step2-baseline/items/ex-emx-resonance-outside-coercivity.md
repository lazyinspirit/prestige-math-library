---
id: ex-emx-resonance-outside-coercivity
kind: example
title: A rectangular PEC resonance is outside the positive-shift estimate
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
domain: physics
library: physics
proof_strategy: direct
deps:
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - pthm-em-rectangular-mode-candidates
  - pthm-emx-coercive-maxwell-galerkin
dependency_roles:
  def-na-hcurl-space: mathematical-premise
  def-na-zero-tangential-hcurl: mathematical-premise
  pthm-em-rectangular-mode-candidates: physical-result
  pthm-emx-coercive-maxwell-galerkin: physical-result
aliases: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: An exact lossless, constant-coefficient rectangular PEC cavity example at one explicitly computed real resonance. The example proves its electric eigenfield lies in the closure-defined H_0(curl) space and is a nonzero kernel vector of the real-frequency weak operator. It does not claim that the positive-shift theorem fails under its stated s>0 hypothesis, nor any empirical cavity measurement.
sources:
  references:
    - title: "Ralf Hiptmair, Finite elements in computational electromagnetism, Acta Numerica 11 (2002), pp. 237-339, complete author-hosted PDF"
      url: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf
      locator: "Entire 103-page PDF inspected. Section 5.1, printed pp. 307-309: the real-frequency Maxwell source form is indefinite and the nonresonance condition is required for uniqueness."
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete University of California, Irvine lecture notes, updated May 17 2024"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Entire 10-page PDF inspected. Sections 1.1 and 2, PDF pp. 1-3 and 6-8: explicit lowest-order edge elements and the PEC Maxwell variational setting. The concrete cavity field and kernel calculation are verified locally."
---

## Example

Let Omega=(0,a) x (0,b) x (0,d) with a,b,d>0 metres, set e_z:=(0,0,1), and take constant scalar epsilon>0 in F m^-1 and mu>0 in H m^-1, with zero conductivity and zero forcing. For integers m,n>=1 define

$$f_{mn}(x,y):=\sin\frac{m\pi x}{a}\sin\frac{n\pi y}{b},\qquad k_{mn}^2:=\left(\frac{m\pi}{a}\right)^2+\left(\frac{n\pi}{b}\right)^2,\qquad \omega_{mn}:=\frac{k_{mn}}{\sqrt{\varepsilon\mu}}>0.$$

Fix E_*>0 in V m^-1 and set u(x,y,z):=E_* f_{mn}(x,y)e_z, the spatial electric amplitude. This is the beta=0 TM member of the already verified rectangular mode family; its real time-dependent electric field is u cos(omega_mn t), with the associated magnetic field given by that mode. It satisfies the PEC tangential condition on the four side walls because f_mn vanishes there, and on the end walls because u is parallel to their normal e_z. Define V:=closure(C_c^\infty(Omega;R3)) in the real H(curl;Omega) graph norm and, for w,v in V, define the real-frequency form

$$a_{\omega_{mn}}(w,v):=\int_\Omega\left(\mu^{-1}\operatorname{curl}w\cdot\operatorname{curl}v-\omega_{mn}^2\varepsilon w\cdot v\right)\,dx.$$

This is the weak operator obtained by replacing +s^2 epsilon in the positive-shift problem by -omega_mn^2 epsilon. It has a nonzero kernel at omega_mn.

## Example references

[[pthm-em-rectangular-mode-candidates]]

[[pthm-emx-coercive-maxwell-galerkin]]

## Facts & Assumptions

**Given:** The rectangular cavity and positive constants in the Example, a,b,d in metres, epsilon and mu in SI units, integers m,n>=1, the nonzero electric amplitude E_*, the real frequency omega_mn, and the real H(curl) and closure-defined PEC conventions.

[F1] [[pthm-em-rectangular-mode-candidates]]: in the lossless isotropic scalar branch, the TM profile e_mn=sin(m pi x/a)sin(n pi y/b) with beta^2=omega^2 epsilon mu-k_mn^2 gives the electric amplitude E_* e_z e_mn and obeys Maxwell's equations on the rectangular guide with the stated PEC side-wall conditions. At omega=omega_mn, beta=0.

[F2] [[def-na-hcurl-space]]: H(curl;Omega) is the L^2 graph space of distributional curl; [[def-na-zero-tangential-hcurl]] defines H_0(curl;Omega) as the graph closure of C_c^\infty vector fields, without replacing it by an unproved trace kernel.

[F3] [[pthm-emx-coercive-maxwell-galerkin]]: for real s>0 the positive-shift form has the coercive estimate on H_0(curl;Omega); its hypotheses do not include the real-frequency sign -omega^2.

## Verification

**Given:** The field and resonance frequency of the Example.

1.1 Put k^2=k_mn^2. Since -Delta_t f_mn=k^2 f_mn and u=E_* f_mn e_z, direct coordinate differentiation gives curl u=E_*(partial_y f_mn,-partial_x f_mn,0) and curl curl u=E_*(0,0,-Delta_t f_mn)=k^2u. The field is nonzero because f_mn(a/(2m),b/(2n))=1 and E_*>0. The end-wall tangential trace is zero because u is normal to z=0,d; on x=0,a and y=0,b the whole field vanishes because the corresponding sine factor is zero. Thus the smooth field has PEC tangential data, as also supplied for its guide-mode form by [F1]. [F1, given, algebra]

2.1 To verify the closure-defined condition in [F2], choose smooth one-dimensional cutoffs chi_delta^x,chi_delta^y,chi_delta^z that vanish within distance delta of their interval endpoints, equal one at distance at least 2delta, take values in [0,1], and satisfy |(chi_delta^.)'|<=C/delta. Put chi_delta=chi_delta^x chi_delta^y chi_delta^z and u_delta=chi_delta u; then u_delta is compactly supported and smooth in Omega. The L^2 norm of u_delta-u tends to zero because its support lies in boundary layers of volume O(delta). Also curl(u_delta-u)=(chi_delta-1)curl u+grad(chi_delta) x u. The first term tends to zero in L^2 by the same shrinking-support bound. In the second term, the z-cutoff derivative is parallel to u and has zero cross product; on the x- and y-boundary layers, |f_mn|<=C delta by the vanishing sine factor, so each remaining product |(chi_delta^.)' f_mn| is uniformly bounded on a set of volume O(delta), and its L^2 norm tends to zero. Hence u_delta->u in the H(curl) graph norm and u lies in H_0(curl;Omega). [F2, step 1.1, construct, algebra]

3.1 For every v in C_c^\infty(Omega;R3), the distributional-curl definition and the smoothness of u give integral(curl u dot curl v)=integral(curl curl u dot v)=k^2 integral(u dot v). The identity extends to every v in H_0(curl;Omega) because C_c^\infty is graph-dense there and both pairings are continuous in that norm. Since omega_mn^2 epsilon=k^2/mu, the real-frequency form satisfies $\int_\Omega\left(\mu^{-1}\operatorname{curl}u\cdot\operatorname{curl}v-\omega_{mn}^2\varepsilon u\cdot v\right)\,dx=0\quad(v\in H_0(\operatorname{curl};\Omega))$. Taking v=u gives a_omega(u,u)=0. Since u is nonzero, ||u||_{V,ell_0}>0 for every ell_0>0, so the form is not coercive and the zero-forcing weak problem has both the zero solution and a nonzero solution. This is an actual real-frequency cavity resonance and does not contradict the positive-shift theorem, which assumes real s>0 and a plus sign. [F2, F3, step 1.1, step 2.1, algebra] ∎
