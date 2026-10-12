---
id: pthm-cm17-elastic-plane-wave-speeds
kind: physics-theorem
title: "Plane elastic waves in the adopted model: the dispersion condition and the longitudinal and transverse speeds"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [pthm-cm17-linear-elastic-equation-of-motion, post-cm17-linear-elastic-constitutive, thm-cm-plane-elastic-waves, def-cm-linear-elastic-constitutive-law, def-euclidean-inner-product, def-cm17-continuum-body-and-units, def-cm01-units]
dependency_roles:
  pthm-cm17-linear-elastic-equation-of-motion: physical-result
  post-cm17-linear-elastic-constitutive: physical-assumption
  thm-cm-plane-elastic-waves: mathematical-premise
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the small-strain isotropic linear elastic branch: a plane displacement wave a cos(<k,x> - omega t) satisfies the model's displacement equation with zero body force on all of space-time if and only if the dispersion relation rho_0 omega^2 a = mu_s |k|^2 a + (lambda + mu_s) <k,a> k holds; parallel amplitudes give the longitudinal speed root((lambda+2mu_s)/rho_0) and orthogonal amplitudes give the transverse speed root(mu_s/rho_0), both real and positive under the branch's positivity hypotheses. The theorem asserts no completeness of plane waves, no measured modulus and no empirical value."
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.7 (plane longitudinal and transverse elastic waves and their speeds)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 (the isotropic linearized elastic field equations)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the small-displacement isotropic linear elastic branch of
[[post-cm17-linear-elastic-constitutive]] with reference density $\rho_0>0$
and Lamé parameters $\lambda,\mu_s$ satisfying $\mu_s>0$ and
$\lambda+\tfrac{2\mu_s}{3}>0$, and let (E) be the displacement equation of
[[pthm-cm17-linear-elastic-equation-of-motion]] with body force
$b\equiv0$. Let $k,a\in\mathbb R^3$ and $\omega\in\mathbb R\setminus\{0\}$,
and define the **plane displacement wave**

$$\xi(t,x):=a\cos\bigl(\langle k,x\rangle_2-\omega t\bigr),$$

with the Euclidean inner product $\langle\cdot,\cdot\rangle_2$
([[def-euclidean-inner-product]]). Then $\xi$ satisfies (E) on all of
$\mathbb R\times\mathbb R^3$ if and only if

$$\rho_0\omega^2a=\mu_s|k|_2^2\,a+(\lambda+\mu_s)\,\langle k,a\rangle_2\,k. \tag{D}$$

Consequently, for $a\ne0$: if $a$ is parallel to $k$ (**longitudinal**), then
$\rho_0\omega^2=(\lambda+2\mu_s)|k|_2^2$, and the squared speed
$c_L^2:=(\lambda+2\mu_s)/\rho_0$ is real and positive; if $a$ is orthogonal to
$k$ (**transverse**), then $\rho_0\omega^2=\mu_s|k|_2^2$, and
$c_T^2:=\mu_s/\rho_0$ is real and positive. Both $c_L$ and $c_T$ have the
dimension of velocity, $[c_L]=[c_T]=\ell\tau^{-1}$
([[def-cm17-continuum-body-and-units]], [[def-cm01-units]]). No assertion is
made that every solution of (E) is a superposition of plane waves, and no
measured modulus or speed is claimed.

## Facts & Assumptions

**Given:** the linear elastic branch data $(\rho_0,\lambda,\mu_s)$; the vectors $k,a$ and the frequency $\omega$; the plane wave $\xi$.

[F1] Displacement equation ([[pthm-cm17-linear-elastic-equation-of-motion]]): in the branch's description the momentum equation is $\rho_0\partial_t^2\xi=\rho_0b+\mu_s\Delta\xi+(\lambda+\mu_s)\nabla(\operatorname{div}\xi)$; with $b\equiv0$ the right-hand side is the displayed operator applied to $\xi$.

[F2] Plane-wave theorem ([[thm-cm-plane-elastic-waves]], [[def-cm-linear-elastic-constitutive-law]]): for $\xi(t,x)=a\cos(\langle k,x\rangle-\omega t)$ with $\omega\ne0$, the identity $\rho_0\partial_t^2\xi_i=\sum_j\partial_j\sigma_{ij}$ holds on $\mathbb R\times\mathbb R^3$ for the stress $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_s e$ if and only if (D) holds; and for $a\ne0$ parallel to $k$ one has $\rho_0\omega^2=(\lambda+2\mu_s)|k|_2^2$, while for $a$ orthogonal to $k$ one has $\rho_0\omega^2=\mu_s|k|_2^2$.

[F3] Positivity hypotheses ([[post-cm17-linear-elastic-constitutive]] clause (ii)): the branch's moduli satisfy $\mu_s>0$ and $\lambda+\tfrac{2\mu_s}{3}>0$.

## Proof

**Proof technique:** direct; identify the branch's displacement equation with the stress-divergence identity of the cited plane-wave theorem, then read off the two polarization branches and their positivity.

1.1 The field $\xi$ is $C^\infty$ on $\mathbb R\times\mathbb R^3$ and the branch's displacement equation (E) of [F1] with $b\equiv0$ has right-hand side $\mu_s\Delta\xi+(\lambda+\mu_s)\nabla(\operatorname{div}\xi)$, which is exactly the divergence of the branch's stress $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_se$ as computed by [F1]; the cited plane-wave theorem [F2] therefore gives that (E) holds on all of $\mathbb R\times\mathbb R^3$ if and only if (D) holds. [given, F1, F2]

2.1 Polarization branches: let $a\ne0$. If $a\parallel k$, then $a=\alpha k$ with $\alpha\ne0$, and substituting into (D) gives $\rho_0\omega^2\alpha k=\mu_s|k|^2\alpha k+(\lambda+\mu_s)|k|^2\alpha k$; dividing by $\alpha\ne0$ gives $\rho_0\omega^2=(\lambda+2\mu_s)|k|^2$. If $a\perp k$, the inner product term of (D) vanishes, so $\rho_0\omega^2a=\mu_s|k|^2a$; dividing by the nonzero vector $a$ gives $\rho_0\omega^2=\mu_s|k|^2$. [step 1.1, F2, algebra]

3.1 Positivity and dimensions: by [F3], $\mu_s>0$ gives $c_T^2=\mu_s/\rho_0>0$, and $\lambda+2\mu_s=(\lambda+\tfrac{2\mu_s}{3})+\tfrac{4\mu_s}{3}>0$ gives $c_L^2=(\lambda+2\mu_s)/\rho_0>0$, so both squared speeds are real and positive. With $[\lambda]=[\mu_s]=\mu\ell^{-1}\tau^{-2}$ and $[\rho_0]=\mu\ell^{-3}$ their quotients have dimension $\ell^2\tau^{-2}$. No completeness, boundary-value or empirical claim is made. [step 2.1, F3, algebra] ∎

## Remarks

- **Exact solutions of the model's linear equation.** The waves displayed are
  exact solutions of (E) with $b\equiv0$, not approximations, but they are
  special solutions: a general initial-value problem must be solved by other
  means, and the smooth fixed-end and chain items below supply existence
  results for particular geometries. Existence for general data in
  $\mathbb R^3$ is not asserted on this page.

- **Reading of the speeds.** For a material with measured moduli the speeds
  $c_L=\sqrt{(\lambda+2\mu_s)/\rho_0}$ and $c_T=\sqrt{\mu_s/\rho_0}$ are model
  predictions; comparing them with measured sound speeds tests the model and
  its idealizations, and any such comparison uses the moduli as qualified
  empirical premises. No measured value is asserted here.
