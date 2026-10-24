---
id: ex-qftx-su2-bps-monopole
kind: example
title: Unit-charge SU(2) Prasad–Sommerfield monopole profile
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-solitons-monopoles-examples
dependency_level: 4
deps:
  - def-countable-choice
  - def-qftx-adjoint-higgs-monopole-sector
  - lem-qftx-su2-compact-nonabelian-invariant-form
  - pthm-qftx-su2-monopole-flux-quantization
  - pthm-qftx-bogomolny-monopole-energy-bound
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-adjoint-higgs-monopole-sector: formulation-prerequisite
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  pthm-qftx-su2-monopole-flux-quantization: physical-result
  pthm-qftx-bogomolny-monopole-energy-bound: physical-result
proof_strategy: direct
axiom_base: "ZF + AC_omega, inherited through the stated classical model and mathematical surface and divergence conventions."
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "One explicit smooth positive-unit-flux field configuration in the fixed classical SU(2) adjoint-Higgs Prasad–Sommerfield model, verifying the first-order Bogomolny equation, finite energy, quantized surface charge, and energy saturation. It asserts no quantum state or empirical monopole."
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://arxiv.org/pdf/hep-th/0509216
      locator: "§2.1.3, equation (2.19), printed p. 44 (PDF p. 45): the smooth unit-charge SU(2) Prasad–Sommerfield hedgehog fields. The scalar sign and gauge-component convention here are fixed by B_i=+epsilon_ijk F_jk/2 and the right-action D_i=partial_i+[A_i, Phi]."
    - title: "Jeffrey A. Harvey, Magnetic Monopoles, Duality, and Supersymmetry"
      url: https://arxiv.org/pdf/hep-th/9603086
      locator: "§2.1, ansatz (2.1) and equations (2.3)–(2.6); §2.2, equations (2.7)–(2.9): radial reduction of the Bogomolny equation and H(u)=u coth(u)-1, K(u)=u/sinh(u). Harvey's magnetic-field sign differs and is translated explicitly."
verification:
  precheck: pending
---

## Example

Assume $\mathrm{AC}_\omega$ and use natural units on oriented Euclidean $\mathbb R^3$ with $\epsilon_{123}=1$, the zero-potential static model with one real adjoint Higgs field, no other dynamical matter, and global group $SU(2)$ (not $SO(3)$). Let $A_i,\Phi\in C^\infty(\mathbb R^3,\mathfrak{su}(2))$ have dimensions $[A_i]=[\Phi]=\mathrm{length}^{-1}$. Let $T_a=-i\sigma_a/2$, $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ with $\kappa(T_a,T_b)=\delta_{ab}$, $g>0$ be dimensionless, and $v>0$ have dimension $\mathrm{length}^{-1}$. The fields use $F_{ij}=\partial_iA_j-\partial_jA_i+[A_i,A_j]$, $D_i\Phi=\partial_i\Phi+[A_i,\Phi]$, $B_i=\tfrac12\epsilon_{ijk}F_{jk}$, and $E=(2g^2)^{-1}\int\sum_i\bigl(\kappa(B_i,B_i)+\kappa(D_i\Phi,D_i\Phi)\bigr)\,d^3x$. The allowed external electric probes include the fundamental doublet. For $x\in\mathbb R^3$ with $r=|x|>0$, $n_i=x_i/r$, and $u=vr$, define

$$H(u)=\coth u-\frac1u,\qquad K(u)=\frac{u}{\sinh u},\qquad \Phi^a(x)=-vH(u)n_a,\qquad A_i^a(x)=\epsilon_{aij}n_j\frac{1-K(u)}r.$$

Use the removable analytic limits $H(0)=0$ and $K(0)=1$. At infinity $\Phi\to-v\,\hat x^aT_a$, the unbroken algebra is its pointwise stabilizer, and the equatorial transition $h(\varphi)=\exp(\theta(\varphi)T_3)$ has integer $\nu=-(\theta(2\pi)-\theta(0))/(4\pi)$ in the fundamental-doublet-compatible SU(2) convention. In these conventions the fields extend smoothly to $r=0$, satisfy the positive-charge Bogomolny equation $B_i=D_i\Phi$, have $m=4\pi v$ and $\nu=1$, and have finite energy $E=4\pi v/g^2$. They give an explicit smooth unit-flux solution of the first-order classical Bogomolny equation that saturates the classical energy bound. No quantum state, supersymmetry representation, or empirical observation is asserted.

## Example references

[David Tong, §2.1.3, equation (2.19), unit-charge SU(2) solution](https://arxiv.org/pdf/hep-th/0509216)

[Jeffrey A. Harvey, §§2.1–2.2, radial Bogomolny equation and Prasad–Sommerfield profiles](https://arxiv.org/pdf/hep-th/9603086)

[[def-qftx-adjoint-higgs-monopole-sector|Static SU(2) adjoint-Higgs model]]

[[lem-qftx-su2-compact-nonabelian-invariant-form|Normalized invariant form and SU(2) bracket]]

[[pthm-qftx-su2-monopole-flux-quantization|SU(2) surface-flux quantization]]

[[pthm-qftx-bogomolny-monopole-energy-bound|Classical monopole energy identity and bound]]

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is the Axiom of Countable Choice, inherited through the model and surface-Stokes inputs. [[def-countable-choice]]

[F1] The fields are interpreted in the static zero-potential SU(2) adjoint-Higgs model with $F_{ij}=\partial_iA_j-\partial_jA_i+[A_i,A_j]$, $D_i\Phi=\partial_i\Phi+[A_i,\Phi]$, $B_i=\tfrac12\epsilon_{ijk}F_{jk}$, and energy coefficient $1/(2g^2)$. [[def-qftx-adjoint-higgs-monopole-sector]]

[F2] The basis has $[T_a,T_b]=\epsilon_{abc}T_c$ and the positive invariant form has $\kappa(T_a,T_b)=\delta_{ab}$. [[lem-qftx-su2-compact-nonabelian-invariant-form]]

[F3] Flux quantization in this model gives $m=4\pi v\nu$ and $T=m/g^2$. [[pthm-qftx-su2-monopole-flux-quantization]]

[F4] The two square identities imply that a finite-energy positive-charge configuration with $B_i=D_i\Phi$ has $E=T$. [[pthm-qftx-bogomolny-monopole-energy-bound]]

## Verification

**Given:** [A1], [F1]–[F4], $g>0$, $v>0$, $u=vr$, and the radial functions and fields in the Example.

1.1 The Taylor expansions $\sinh u=u+u^3/6+O(u^5)$ and $\cosh u=1+u^2/2+O(u^4)$ give $H(u)=u/3+O(u^3)$ and $K(u)=1-u^2/6+O(u^4)$. Hence $H(u)/u$ and $(1-K(u))/u^2$ are analytic in $u^2$ near zero; writing $n_a=x_a/r$ shows $\Phi^a=-v^2x_a/3+O(r^2x_a)$ and $A_i^a=(v^2/6+O(r^2))\epsilon_{aij}x_j$. Thus both fields extend smoothly through the origin. [given, algebra]

1.2 For $u>0$, differentiation gives $H'(u)=1/u^2-1/\sinh^2u=(1-K(u)^2)/u^2$ and $K'(u)=K(u)(1/u-\coth u)=-K(u)H(u)$. Also $\partial_i n_a=(\delta_{ia}-n_in_a)/r$. [given, algebra]

2.1 Substitution into $D_i\Phi=\partial_i\Phi+[A_i,\Phi]$ gives the ordinary derivative $-v^2H'(u)n_in_a-vH(u)(\delta_{ia}-n_in_a)/r$. The commutator term is $vH(u)(1-K(u))(\delta_{ia}-n_in_a)/r$, using $\epsilon_{abc}\epsilon_{bij}n_jn_c=n_in_a-\delta_{ia}$. Thus $D_i\Phi^a=-v^2H'(u)n_in_a-vH(u)K(u)(\delta_{ia}-n_in_a)/r=-(1-K(u)^2)n_in_a/r^2+vK'(u)(\delta_{ia}-n_in_a)/r$, by step 1.2 and $u=vr$. [F1, F2, step 1.2, algebra]

3.1 Write $A_i^a=f(r)\epsilon_{aij}x_j$ with $f(r)=(1-K(vr))/r^2$. Direct differentiation gives $\partial_iA_j^a-\partial_jA_i^a=f'(r)r(n_i\epsilon_{aj\ell}n_\ell-n_j\epsilon_{ai\ell}n_\ell)-2f(r)\epsilon_{aij}$. The commutator is $[A_i,A_j]^a=f(r)^2r^2\epsilon_{ij\ell}n_\ell n_a$, since $(e_i\times n)\times(e_j\times n)=\epsilon_{ij\ell}n_\ell n$. Contracting their sum with $\epsilon_{kij}/2$ and substituting $f=(1-K(vr))/r^2$ yields $B_k^a=-(1-K(u)^2)n_kn_a/r^2+vK'(u)(\delta_{ka}-n_kn_a)/r$. This equals step 2.1, so $B_i=D_i\Phi$ for $r>0$, and smoothness extends the equality to $r=0$. [F1, F2, step 1.2, step 2.1, algebra]

4.1 As $u\to\infty$, $H(u)=1-u^{-1}+O(e^{-2u})$, $H'(u)=O(u^{-2})$, and $K(u),K'(u)=O(ue^{-u})$. The formulas in steps 2.1 and 3.1 therefore give $B_i,D_i\Phi=O(r^{-2})$ at infinity, whose squared magnitude is integrable because $\int_1^\infty r^2r^{-4}\,dr<\infty$; smoothness gives local integrability at the origin. Thus the energy is finite. The radial component is $B_i^a n_i=-(1-K(u)^2)n_a/r^2$, while $\Phi^a=-vH(u)n_a$, so $\kappa(\Phi,B_i)n_i=vH(u)(1-K(u)^2)/r^2$. Taking the surface limit gives $m=4\pi v$. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 By step 4.1 the asymptotic Higgs direction is $n_\infty(\omega)=-\omega_aT_a$. For $\omega\in S^2$, put $w=-\omega$ and $d_\pm=\sqrt{2(1\pm w_3)}$. On $U_N=\{\omega\in S^2:\omega_3>-1\}$ and $U_S=\{\omega\in S^2:\omega_3<1\}$, respectively, define
$$u_N=\frac1{d_-}\begin{pmatrix}w_1-iw_2&-(1-w_3)\\1-w_3&w_1+iw_2\end{pmatrix},\qquad u_S=\frac1{d_+}\begin{pmatrix}1+w_3&-w_1+iw_2\\w_1+iw_2&1+w_3\end{pmatrix}.$$
The denominators are positive on the respective domains, which contain the closed northern and southern hemispheres. Since $|w|=1$, multiplication gives $u_\alpha^*u_\alpha=I$, $\det u_\alpha=1$, and $u_\alpha\sigma_3u_\alpha^{-1}=w_a\sigma_a$; these are smooth SU(2) lifts of $n_\infty=w_aT_a$. On the positively oriented equator $\omega=(\cos\varphi,\sin\varphi,0)$, multiplication gives $u_N^{-1}u_S=\operatorname{diag}(-e^{i\varphi},-e^{-i\varphi})=\exp((-2\varphi-2\pi)T_3)$. Thus $\theta(\varphi)=-2\varphi-2\pi$ is an explicit smooth real lift, with increment $-4\pi$. [F1, F2, step 4.1, given, algebra]

6.1 With $\iota_R(\omega)=R\omega$, the given gauge potential has angular pullback $\iota_R^*A=-(1-K(vR))(\omega\times d\omega)_aT_a$. Since $K(vR)\to0$ and is independent of $\omega$, the adapted connections $\mathcal A_{\alpha,R}=\operatorname{Ad}_{u_\alpha^{-1}}(\iota_R^*A)+u_\alpha^{-1}du_\alpha$ converge in $C^1$ on each closed hemisphere to the $C^1$ form $\mathcal A_{\alpha,\infty}= -\operatorname{Ad}_{u_\alpha^{-1}}((\omega\times d\omega)_aT_a)+u_\alpha^{-1}du_\alpha$. The radial magnetic field from step 3.1 gives $\mathcal F_{\alpha,R}=\operatorname{Ad}_{u_\alpha^{-1}}(\iota_R^*F)=(1-K(vR)^2)T_3\,d\Omega$, where $d\Omega$ is the outward area form of the unit sphere; hence these angular curvature forms converge uniformly to $T_3\,d\Omega$, the curvature of $\mathcal A_{\alpha,\infty}$. In the same fixed frames, $q_{\alpha,R}=\operatorname{Ad}_{u_\alpha^{-1}}(\Phi(R\omega)/v)=H(vR)T_3\to T_3$ uniformly. In the original frame the limiting angular connection is $A_\infty=-(\omega\times d\omega)_aT_a$ and $n_\infty=-\omega_aT_a$, so $dn_\infty+[A_\infty,n_\infty]=0$ by $(\omega\times d\omega)\times\omega=d\omega$. Covariance gives $[\mathcal A_{\alpha,\infty},T_3]=0$. The scaled radial limit is $B_\infty=-\omega_aT_a=n_\infty$, so its stabilizer condition holds. Since $H(vR)$ is constant in $\omega$, the Higgs limit holds in $C^\infty$. Thus all the model's boundary conditions and the flux theorem's hypotheses hold. [F1, F2, step 3.1, step 5.1, given, algebra]

7.1 By [F3] and step 4.1, $4\pi v=m=4\pi v\nu$, so $\nu=1$ because $v>0$. Then $T=4\pi v/g^2>0$. Steps 2.1 and 3.1 give $B_i=D_i\Phi$, so [F4] gives $E=T=4\pi v/g^2$. This verifies a classical unit-flux first-order solution and its saturation without asserting a quantum state. [A1, F3, F4, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎
