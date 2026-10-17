---
id: ex-emg-ml-b07
kind: example
title: Exact finite-frequency transverse Maxwell wave
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - def-emg-matter-observables
  - def-emg-matter-formal-systems
  - lem-emg-observer-field-decomposition
  - pthm-emg-controlled-test-geometric-optics
  - pthm-emg-source-test-backreaction-scope
dependency_roles:
  def-emg-matter-observables: formulation-prerequisite
  def-emg-matter-formal-systems: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  pthm-emg-controlled-test-geometric-optics: physical-result
  pthm-emg-source-test-backreaction-scope: physical-result
physical_scope: "An exact real, source-free plane-wave solution of the prescribed Minkowski Maxwell test model at every stated positive epsilon, with transverse electric/magnetic components. Its nonzero stress prevents it from solving the source-free coupled Einstein–Maxwell equation with Lambda=0 on the unchanged Minkowski metric. This is an ideal solution, not an experiment or photon-energy claim."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Harte, Gravitational lensing beyond geometric optics: I. Formalism and observables, arXiv:1808.06203v2 (2018), complete 38-page article"
      url: https://arxiv.org/pdf/1808.06203v2
      locator: "§§3.1–3.3, PDF pp. 10–13, discusses transverse leading electromagnetic fields and polarization; Appendix A, PDF pp. 33–34, treats finite truncation residuals. This constant-amplitude plane wave is checked exactly here."
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, complete 125-page notes, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.12)–(6.14), PDF pp. 63–64, give the null geometric-optics ray calculation. The finite-frequency field equations and coupled-solution distinction are verified locally using the listed item suppliers."
verification:
  precheck: pass
---

## Example

On Minkowski spacetime in standard positively oriented inertial coordinates $(x^0,x,y,z)$, with signature $(-,+,+,+)$ and future unit observer $n=\partial_0$, choose constants $\kappa>0$ with units $\mathrm{m}^{-1}$, $A_*\in\mathbb R\setminus\{0\}$ with units $\mathrm{T\,m}$, and dimensionless $0<\epsilon\le1$. Define

$$A_\epsilon=\epsilon A_*\cos\!\left(\frac{\kappa(x^0-z)}{\epsilon}\right)dx.$$

The real field $F_\epsilon=dA_\epsilon$ is an exact source-free Maxwell wave for every such $\epsilon$. Its nonzero components are

$$F_{0x}=-\kappa A_*\sin\!\left(\frac{\kappa(x^0-z)}{\epsilon}\right),\qquad F_{zx}=\kappa A_*\sin\!\left(\frac{\kappa(x^0-z)}{\epsilon}\right).$$

For the inertial observer $n=\partial_0$, the SI convention gives $E_x=c\kappa A_*\sin(\kappa(x^0-z)/\epsilon)$ and $B_y=\kappa A_*\sin(\kappa(x^0-z)/\epsilon)$, with all other components zero. At points where the sine is nonzero, the field energy is positive. The field is an exact test-background wave, but it is not an exact source-free coupled Einstein–Maxwell field with $\Lambda=0$ on the unchanged Minkowski metric.

## Facts & Assumptions

**Given:** Minkowski metric with signature $(-,+,+,+)$, the stated real potential and constants, and the test-model and Maxwell-stress conventions below.

[F1] [[def-emg-matter-observables]]: the observer electric and magnetic fields are the contractions with $F$ and $\star_gF$ in the supplied oriented Lorentzian convention, and the electromagnetic stress is the displayed quadratic SI tensor.

[F2] [[lem-emg-observer-field-decomposition]]: for a positively oriented future tetrad with time vector $n$ and $\epsilon_{123}=+1$, $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$; the Hodge convention is $({\star_gF})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$.

[F3] [[pthm-emg-controlled-test-geometric-optics]]: under the exact $C^4/C^3$ regularity, four ansatz constraints and compact-chart bounds, the potential ansatz has the stated affine null rays and transverse polarization class; it asserts no convergence or exact-solution error estimate.

[F4] [[pthm-emg-source-test-backreaction-scope]]: on a fixed vacuum metric, a nonzero smooth source-free Maxwell field has nonzero quadratic Einstein residual; in particular, for Minkowski with $\Lambda=0$ a nonzero field cannot solve the source-free coupled Einstein equation on the unchanged metric.

[F5] [[def-emg-matter-formal-systems]]: the tangent-bundle smooth structure inherits only the Axiom of Countable Choice $\mathrm{AC}_\omega$.

[A1] The phase is $\theta=\kappa(x^0-z)$, $a_0=A_*dx$, and $a_1=0$. The real finite-frequency potential is the real part of $\epsilon A_*e^{i\theta/\epsilon}dx$.

[A2] The inherited $\mathrm{AC}_\omega$ setting of [F5] is in force when applying [F2] and [F3]; no full Axiom of Choice or stronger choice principle is assumed.

## Verification

1.1 For $\theta=\kappa(x^0-z)$ and $a_0=A_*dx$, $k=\kappa(dx^0-dz)$ is nowhere zero and $g^{-1}(k,k)=-\kappa^2+\kappa^2=0$, while $g^{-1}(k,a_0)=0$. In the stated inertial coordinates $a_0$ and $k$ have constant components and Minkowski curvature is zero, so $La_0=0$ and $Pa_0=0$; also $\nabla^a(a_0)_a=0$. Since $a_1=0$, both $La_1=0$ and $ik^a(a_1)_a=0$. These verify all four constraints. On each compact coordinate set the coefficient bounds of [F3] hold with $K_0=\kappa$ and $D_0=C_0=B_0=B_1=0$. The inherited $\mathrm{AC}_\omega$ hypothesis in [A2] matches the exact mathematical supplier framework [F5]. Finally $a_0$ is not proportional to $k$ because $A_*\ne0$ and $k$ has no $dx$ component, so its transverse polarization class is nonzero. Hence [F3] supplies the affine null rays and that nonzero polarization class for this ansatz. [given, F3, F5, A1, A2, algebra]

1.2 Write $\psi=\kappa(x^0-z)/\epsilon$. Differentiating the real potential in [A1] gives $F_{0x}=-\kappa A_*\sin\psi$ and $F_{zx}=\kappa A_*\sin\psi$, with all other independent components zero. To check $dF=0$ directly, its only possibly nonzero three-form component is $(dF)_{0zx}=\partial_0F_{zx}+\partial_zF_{x0}$; these terms are $\kappa^2A_*\epsilon^{-1}\cos\psi$ and $-\kappa^2A_*\epsilon^{-1}\cos\psi$, so they cancel. Raising indices with $\eta=\operatorname{diag}(-1,1,1,1)$ gives $F^{0x}=F^{zx}=\kappa A_*\sin\psi$. Thus $\partial_aF^{ax}=\partial_0F^{0x}+\partial_zF^{zx}=0$ by the same cancellation. For the other divergence components, $\partial_aF^{a0}=\partial_xF^{x0}=0$, $\partial_aF^{ay}=0$, and $\partial_aF^{az}=\partial_xF^{xz}=0$, since the field is independent of $x,y$. This proves both source-free Maxwell equations. From [F1], $E^x=cF^x{}_0=cF_{x0}=c\kappa A_*\sin\psi$. Also $B_y=-({\star_gF})_{y0}$ by [F1]. The Hodge formula in [F2], $(\mathrm{vol}_g)_{y0xz}=+1$, and $F^{xz}=F_{xz}=-\kappa A_*\sin\psi$ give $({\star_gF})_{y0}=F^{xz}=-\kappa A_*\sin\psi$, hence $B_y=\kappa A_*\sin\psi$. All other observer components vanish because the only field components are the stated $0x$ and $zx$ components. [F1, F2, A1, algebra]

2.1 Substitution of the components from step 1.2 into the tensor formula of [F1] gives $T_{\mathrm{EM}}^{00}=(E_x^2/c^2+B_y^2)/(2\mu_0)=(\varepsilon_0E_x^2+B_y^2/\mu_0)/2$. Because $E_x=cB_y$, this is $u=B_y^2/\mu_0>0$ whenever the sine is nonzero. [F1, step 1.2, algebra]

3.1 Minkowski has $G_{ab}=0$, so the source-free coupled Einstein equation with cosmological constant $\Lambda=0$ on the unchanged metric would require zero Einstein residual. Apply [F4] to the source-free field of step 1.2 by taking its reference field to be $F_0=F_\epsilon$ and scale $\delta=1$; since the field is nonzero wherever the sine is nonzero, the residual is nonzero there. This excludes that exact coupled solution while retaining the exact Maxwell test-field solution of step 1.2. [F4, step 1.2, step 2.1, algebra] ∎
