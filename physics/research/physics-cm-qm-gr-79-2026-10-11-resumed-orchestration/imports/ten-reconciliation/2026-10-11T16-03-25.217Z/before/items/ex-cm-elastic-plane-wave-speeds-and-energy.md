---
id: ex-cm-elastic-plane-wave-speeds-and-energy
kind: example
title: "A longitudinal plane wave in the isotropic elastic model: dispersion check and strain energy at explicit parameters"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-plane-elastic-waves, def-cm-linear-elastic-constitutive-law, lem-cm-isotropic-elastic-strain-energy-positivity, def-cm-euclidean-spatial-calculus, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, def-euclidean-inner-product, def-matrix-space, def-trace-of-a-square-matrix]
dependency_roles:
  thm-cm-plane-elastic-waves: mathematical-premise
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  lem-cm-isotropic-elastic-strain-energy-positivity: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 (linearized elasticity and strain energy)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.7 (plane longitudinal and transverse elastic waves and their speeds)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
proof_strategy: direct
---

## Example

Take $\lambda=2$, $\mu=1$, $\rho_0=1$ ([[def-cm-linear-elastic-constitutive-law]]: here $\lambda+\frac{2\mu}{3}=\frac83>0$). Let $k=(\pi,0,0)$, $a=(1,0,0)$ and

$$\xi(t,x)=a\cos(\pi x_1-\omega t),\qquad \omega:=2\pi .$$

Then $\xi$ is a longitudinal plane wave with speed $\sqrt{(\lambda+2\mu)/\rho_0}=2$, and the associated strain and stress satisfy the elastic momentum identity; the strain energy density at time $t$ equals both $W(e)=2\pi^2\sin^2(\pi x_1-\omega t)$ and the decomposition $\mu|e_0|_F^2+(\lambda/2+\mu/3)(\operatorname{tr}e)^2$ with the same value.

## Facts & Assumptions

**Given:** The parameters $\lambda=2,\mu=1,\rho_0=1$; the vectors $a=(1,0,0)$, $k=(\pi,0,0)$, $\omega=2\pi$; the field $\xi(t,x)=a\cos(\pi x_1-\omega t)$.

[L1] Plane-wave dispersion: the momentum identity holds for this ansatz exactly when $\rho_0\omega^2a=\mu|k|_2^2a+(\lambda+\mu)\langle k,a\rangle_2k$; for $a\parallel k$ this is $\rho_0\omega^2=(\lambda+2\mu)|k|_2^2$ ([[thm-cm-plane-elastic-waves]]).

[L2] Strain and stress: $e=\frac12(D\xi+D\xi^{\mathsf T})$ and $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu e$; here $D\xi$ has the single entry $\partial_1\xi_1=-\pi\sin\theta$ with $\theta:=\pi x_1-\omega t$, so $e=\operatorname{diag}(-\pi\sin\theta,0,0)$, $\operatorname{tr}e=-\pi\sin\theta$ ([[def-cm-linear-elastic-constitutive-law]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-cm-euclidean-spatial-calculus]], [[def-trace-of-a-square-matrix]], [[def-matrix-space]]).

[L3] Strain-energy decomposition: $W(e)=\mu|e_0|_F^2+(\lambda/2+\mu/3)(\operatorname{tr}e)^2$ with $e_0=e-\frac{\operatorname{tr}e}{3}I_3$ and $|A|_F^2=\operatorname{tr}(A^{\mathsf T}A)$ ([[lem-cm-isotropic-elastic-strain-energy-positivity]]); trigonometric values and derivatives as usual ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** direct; substitute the numbers into the dispersion relation and the two energy expressions.

1.1 Check the dispersion relation: $\mu|k|_2^2=1\cdot\pi^2=\pi^2$, $(\lambda+2\mu)|k|_2^2=(2+2)\pi^2=4\pi^2$, and $\rho_0\omega^2=1\cdot(2\pi)^2=4\pi^2$; the relation of [L1] holds, so the ansatz solves the elastic momentum equation at these parameters. [given, L1, algebra]

2.1 Compute the strain energy directly: from [L2], $\operatorname{tr}(e^2)=e_{11}^2=\pi^2\sin^2\theta$, so $W=\frac{\lambda}{2}(\operatorname{tr}e)^2+\mu\operatorname{tr}(e^2)=\pi^2\sin^2\theta+\pi^2\sin^2\theta=2\pi^2\sin^2\theta$. [step 1.1, L2, L3, algebra]

3.1 Compute the decomposition: $e_0=e-\frac{\operatorname{tr}e}{3}I_3=\operatorname{diag}\bigl(-\frac{2\pi}{3}\sin\theta,\frac{\pi}{3}\sin\theta,\frac{\pi}{3}\sin\theta\bigr)$, so $|e_0|_F^2=\frac{4+1+1}{9}\pi^2\sin^2\theta=\frac{2}{3}\pi^2\sin^2\theta$; also $(\lambda/2+\mu/3)(\operatorname{tr}e)^2=(1+\frac13)\pi^2\sin^2\theta=\frac43\pi^2\sin^2\theta$. Then $\mu|e_0|_F^2+(\lambda/2+\mu/3)(\operatorname{tr}e)^2=\frac23\pi^2\sin^2\theta+\frac43\pi^2\sin^2\theta=2\pi^2\sin^2\theta$, in agreement with step 2.1. [step 2.1, L2, L3, algebra] ∎

## Remarks

- The example is a finite parametric check of the theorem and of the energy identity; it does not show that every elastic solution is such a wave, and no material is identified with these Lamé parameters.
