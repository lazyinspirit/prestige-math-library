---
id: ex-cm17-elastic-plane-wave-and-energy-check
kind: example
title: "A longitudinal plane wave in the linear elastic branch: stress, equation of motion and strain energy computed"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [pthm-cm17-elastic-plane-wave-speeds, pthm-cm17-linear-elastic-equation-of-motion, post-cm17-linear-elastic-constitutive, def-cm-linear-elastic-constitutive-law, lem-cm-isotropic-elastic-strain-energy-positivity, def-cm-euclidean-spatial-calculus, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-ck-euclidean-maps-and-diffeomorphisms, def-cm17-continuum-body-and-units]
dependency_roles:
  pthm-cm17-elastic-plane-wave-speeds: physical-result
  pthm-cm17-linear-elastic-equation-of-motion: physical-result
  post-cm17-linear-elastic-constitutive: physical-assumption
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  lem-cm-isotropic-elastic-strain-energy-positivity: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked longitudinal plane wave of the adopted linear elastic branch: explicit strain, stress, verification of the displacement equation at the longitudinal speed root((lambda+2mu_s)/rho_0) and the positive strain-energy density of the wave. The computation is exact within the branch and asserts no measurement and no completeness of plane waves."
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.7 (the longitudinal plane elastic wave and its speed, and the elastic energy density)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 and Problem 11.5 (isotropic linear elasticity and the positive definite strain energy)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Example

Adopt the isotropic linear elastic branch of
[[post-cm17-linear-elastic-constitutive]] with reference density
$\rho_0>0$ of dimension $\mu\ell^{-3}$ and moduli $\lambda,\mu_s$ of
dimension $\mu\ell^{-1}\tau^{-2}$, with $\mu_s>0$ and
$\lambda+\tfrac{2\mu_s}{3}>0$ ([[def-cm17-continuum-body-and-units]]). Use $I=\mathbb R$, $O=\mathbb R^3$ and let
$x_1$ be the reference position in metres and $t$ time in seconds. The amplitude $A\ne0$ has
dimension $\ell$, and the wave number $\kappa\ne0$ has dimension $\ell^{-1}$.
Define the positive longitudinal speed and angular frequency by
$c_L:=\sqrt{(\lambda+2\mu_s)/\rho_0}$ and $\omega:=\kappa c_L$; then
$[c_L]=\ell\tau^{-1}$, $[\omega]=\tau^{-1}$ and the phase is dimensionless.
Let

$$\xi(t,x):=A\cos\bigl(\kappa x_1-\omega t\bigr)\,e_1,$$

with $A\ne0$, $\kappa\ne0$ and $e_1$ the first standard basis vector: a
longitudinal plane wave travelling along $e_1$. This is a solution of the linear reference-field model for every declared $A,\kappa$; physical small-strain use requires small $|A\kappa|$. No finite-motion diffeomorphism is inferred: its candidate placement has determinant $1-A\kappa\sin(\kappa x_1-\omega t)$, which need not be positive for these unrestricted algebraic data. Then:

1. the linear strain is $e_{11}(t,x)=-A\kappa\sin(\kappa x_1-\omega t)$ with
   all other entries zero, so $\operatorname{tr}e=e_{11}$ and
   $e_0=e-\tfrac13(\operatorname{tr}e)I_3$ has Frobenius squared norm
   $\tfrac23e_{11}^2$;
2. the stress matrix is
   $$\sigma(t,x)=(\lambda+2\mu_s)e_{11}(t,x)\,e_1e_1^{\mathsf T}+\lambda e_{11}(t,x)\,(e_2e_2^{\mathsf T}+e_3e_3^{\mathsf T});$$
3. the displacement equation (E) of
   [[pthm-cm17-linear-elastic-equation-of-motion]] with $b\equiv0$ holds
   exactly: $\rho_0\partial_t^2\xi_1=(\lambda+2\mu_s)\partial_1^2\xi_1$;
4. the strain-energy density, of dimension $\mu\ell^{-1}\tau^{-2}$, is
   $W(e)=(\tfrac\lambda2+\mu_s)e_{11}^2=\mu_s\tfrac23e_{11}^2
   +(\tfrac\lambda2+\tfrac{\mu_s}3)e_{11}^2\ge0$, with equality only where
   $e_{11}=0$; both coefficients in the decomposition are positive under the
   branch's hypotheses, and the squared speed
   $c_L^2=(\lambda+2\mu_s)/\rho_0$ is positive with $[c_L]=\ell\tau^{-1}$.

## Facts & Assumptions

**Given:** the branch data $(\rho_0,\lambda,\mu_s)$; the amplitude $A\ne0$, wave number $\kappa\ne0$ and the wave $\xi$.

[F1] Branch data and stress ([[post-cm17-linear-elastic-constitutive]], [[def-cm-linear-elastic-constitutive-law]]): $e=\tfrac12(D\xi+D\xi^{\mathsf T})$ and $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_s e$, with $\mu_s>0$ and $\lambda+\tfrac{2\mu_s}{3}>0$.

[F2] Displacement equation ([[pthm-cm17-linear-elastic-equation-of-motion]]): in the branch's description with $b\equiv0$, $\rho_0\partial_t^2\xi=\mu_s\Delta\xi+(\lambda+\mu_s)\nabla(\operatorname{div}\xi)$.

[F3] Strain-energy decomposition and positivity ([[lem-cm-isotropic-elastic-strain-energy-positivity]], [[def-cm-linear-elastic-constitutive-law]]): $W(e)=\tfrac{\lambda}{2}(\operatorname{tr}e)^2+\mu_s\operatorname{tr}(e^2)=\mu_s|e_0|_F^2+(\tfrac\lambda2+\tfrac{\mu_s}3)(\operatorname{tr}e)^2\ge0$, with equality only for $e=0$, under the stated positivity hypotheses.

[F4] Calculcus of the wave ([[thm-sine-and-cosine-derivatives]], [[def-cm-euclidean-spatial-calculus]], [[cor-trigonometric-parity-and-pythagorean-identity]]): $\partial_1\xi_1=-A\kappa\sin(\kappa x_1-\omega t)$, $\partial_1^2\xi_1=-A\kappa^2\cos(\kappa x_1-\omega t)$, $\partial_t^2\xi_1=-A\omega^2\cos(\kappa x_1-\omega t)$, and $\omega^2=\kappa^2c_L^2$.

[F5] Quantity dimensions ([[def-cm17-continuum-body-and-units]]): $[\xi]=\ell$, $[e]=1$, and the stress and strain-energy density have dimension $\mu\ell^{-1}\tau^{-2}$.

## Verification

**Proof technique:** direct computation; differentiate the wave, form the strain and stress with the branch's formulae, and compare the two sides of the displacement equation.

1.1 Strain: $\xi$ depends on $x$ only through $x_1$ and only its first component is nonzero, so $D\xi$ has the single nonzero entry $\partial_1\xi_1=-A\kappa\sin(\kappa x_1-\omega t)$; hence $e_{11}=\partial_1\xi_1$ and all other entries of $e$ vanish, $\operatorname{tr}e=e_{11}$, and $e_0=\mathrm{diag}(\tfrac23,-\tfrac13,-\tfrac13)e_{11}$ has $|e_0|_F^2=\tfrac23e_{11}^2$. [given, F1, F4]

2.1 Stress: substituting $e$ into $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_s e$ gives $\sigma_{11}=(\lambda+2\mu_s)e_{11}$ and $\sigma_{22}=\sigma_{33}=\lambda e_{11}$, all off-diagonal entries zero, which is the displayed matrix. [step 1.1, F1, algebra]

3.1 Displacement equation: the right side of (E) of [F2] is $\mu_s\Delta\xi+(\lambda+\mu_s)\nabla(\operatorname{div}\xi)$; since $\Delta\xi=\partial_1^2\xi_1e_1$ and $\nabla(\operatorname{div}\xi)=\partial_1^2\xi_1e_1$, it equals $(\lambda+2\mu_s)\partial_1^2\xi_1e_1$. The left side is $\rho_0\partial_t^2\xi_1e_1$ with $\partial_t^2\xi_1=-\omega^2A\cos(\kappa x_1-\omega t)$ by [F4]; since $\omega^2=\kappa^2c_L^2=\kappa^2(\lambda+2\mu_s)/\rho_0$, one has $\rho_0\partial_t^2\xi_1=-\rho_0A\omega^2\cos(\kappa x_1-\omega t)=-(\lambda+2\mu_s)A\kappa^2\cos(\kappa x_1-\omega t)=(\lambda+2\mu_s)\partial_1^2\xi_1$, so the equation holds exactly for every $(t,x)$. [step 2.1, F2, F4, algebra]

4.1 Energy: by [F3] and step 1.1, $W=\mu_s|e_0|_F^2+(\tfrac\lambda2+\tfrac{\mu_s}3)(\operatorname{tr}e)^2=(\tfrac{2\mu_s}3+\tfrac\lambda2+\tfrac{\mu_s}3)e_{11}^2=(\tfrac\lambda2+\mu_s)e_{11}^2$; the coefficients $\mu_s>0$ and $\tfrac\lambda2+\tfrac{\mu_s}3=\tfrac{3\lambda+2\mu_s}6>0$ are positive by [F1], so $W\ge0$ with equality exactly where $e_{11}=0$. By [F5], $e$ is dimensionless and $W$ has dimension $\mu\ell^{-1}\tau^{-2}$, consistent with the constitutive formula. Finally $c_L^2=(\lambda+2\mu_s)/\rho_0$ is positive because $\lambda+2\mu_s=(\lambda+\tfrac{2\mu_s}3)+\tfrac{4\mu_s}3>0$ and $\rho_0>0$. [step 1.1, step 3.1, F1, F3, F5, algebra] ∎

## Remarks

- The computation exhibits the branch's structure concretely: the wave is longitudinal (the displacement is parallel to the propagation direction) and its speed is the longitudinal speed of [[pthm-cm17-elastic-plane-wave-speeds]]; the transverse branch, with speed $\sqrt{\mu_s/\rho_0}$, is not recomputed here.

- The energy density computed is the model's strain energy of the branch ([[def-cm-linear-elastic-constitutive-law]]); it is a nonnegative function of the strain and is zero exactly when the linear strain vanishes, under the branch's positivity hypotheses. Rigid translations and infinitesimal rigid rotations both have zero linear strain; for this particular longitudinal wave, zero energy is exactly $e_{11}=0$. No measured modulus or speed appears.
