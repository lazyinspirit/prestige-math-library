---
id: ex-emx-polarization-latitude-phase
kind: example
title: Latitude-loop Berry holonomy
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-emx-helicity-rotation-weight
  - pthm-emx-helicity-berry-curvature
dependency_roles:
  pthm-emx-helicity-rotation-weight: physical-result
  pthm-emx-helicity-berry-curvature: physical-result
proof_strategy: direct
physical_scope: >-
  A constructed path in the conditional classical Maxwell-Lorentz vacuum
  helicity model's smooth source-free nonzero-Fourier-mode regime, with no extra
  approximation. The loop, solid angle, and phase are dimensionless geometric
  quantities; no experimental measurement, material medium, quantization, or
  photon position operator is asserted.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 2, PDF pp. 3–4: direction-sphere polarization phases; this finite latitude calculation is derived from the local theorem."
    - title: "David Tong, The Quantum Hall Effect, TIFR Infosys Lecture Notes (2016)"
      url: "https://www.damtp.cam.ac.uk/user/tong/qhe/qhe.pdf"
      locator: "§1.5.1–1.5.2, printed pp. 28–34: Berry phase as a connection integral and the surface solid-angle calculation. The spin-1/2 quantum model and its sign convention are not imported."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Fix $\sigma\in\{+1,-1\}$ and $0<\theta_0<\pi$. Let $\gamma(t)=(\theta_0,2\pi t)$ for $0\le t\le1$ be the latitude loop in the direction sphere, and set $\Omega:=\int_0^{2\pi}\int_0^{\theta_0}\sin\theta\,d\theta\,d\phi=2\pi(1-\cos\theta_0)$, the outward solid angle of its north cap. The spherical gauge gives $\mathrm{Hol}_\gamma=\exp(i2\pi\sigma\cos\theta_0)$. The north-pole regular gauge $v_N=e^{i\sigma\phi}v_\sigma$ has $A_N=\sigma(\cos\theta-1)d\phi$ and is smooth on the cap; its loop integral and the cap flux are both $-\sigma\Omega$. Hence $\mathrm{Hol}_\gamma=\exp(-i\sigma\Omega)=\exp(i2\pi\sigma\cos\theta_0)$.

## Example references

[[pthm-emx-helicity-rotation-weight]]

## Facts & Assumptions

**Given:** A fixed $\sigma\in\{+1,-1\}$ and a latitude parameter $0<\theta_0<\pi$.

[F1] [[pthm-emx-helicity-rotation-weight]] states that in a single unit frame defined on a neighborhood of the loop, $\mathrm{Hol}_\gamma=\exp(i\oint_\gamma A)$. For its Stokes clause, when $\gamma$ is piecewise smooth with associated finite smooth singular path chain $c_\gamma$, a finite smooth singular $2$-chain $\Sigma$ in one unit-frame domain satisfying $\partial\Sigma=c_\gamma$ gives $\mathrm{Hol}_\gamma=\exp(i\int_\Sigma F_\sigma)$.

[F2] [[pthm-emx-helicity-berry-curvature]] gives $F_\sigma=-\sigma\sin\theta\,d\theta\wedge d\phi$, and [[pthm-emx-helicity-rotation-weight]] gives $A_\sigma=\sigma\cos\theta\,d\phi$ and its holonomy rule.

## Verification

1.1 On the punctured cap, the phase change $v_N=e^{i\sigma\phi}v_\sigma$ gives $A_N=A_\sigma-\sigma d\phi=\sigma(\cos\theta-1)d\phi$. Put $x=\sin\theta\cos\phi$, $y=\sin\theta\sin\phi$, and $z=\cos\theta$. Since $d\phi=(x\,dy-y\,dx)/(1-z^2)$, this is $A_N=-\sigma(x\,dy-y\,dx)/(1+z)$, which extends smoothly across the north pole because $1+z>0$ there. The rephased frame itself also extends: for $\sigma=+1$ its components are $\frac{1}{2\sqrt2(1+z)}\bigl((1+z)^2-(x+iy)^2,\ i((1+z)^2+(x+iy)^2),\ -2(x+iy)(1+z)\bigr)^T$, and for $\sigma=-1$ they are the complex conjugates. These formulas have nonzero denominator throughout the north patch. [F2, algebra]

2.1 Along the loop, $\oint_\gamma A_N=\int_0^{2\pi}\sigma(\cos\theta_0-1)\,d\phi=-\sigma\Omega$, so [F1] gives $\mathrm{Hol}_\gamma=e^{-i\sigma\Omega}$. Direct integration of the global curvature over the north cap gives $\int_{\Sigma_N}F_\sigma=-\sigma\int_0^{2\pi}\int_0^{\theta_0}\sin\theta\,d\theta\,d\phi=-\sigma\Omega$ as well. Thus the cap-flux expression agrees without using the singular spherical gauge at its pole. [F1, F2, step 1.1, algebra]

3.1 In the spherical gauge, $\oint_\gamma A_\sigma=2\pi\sigma\cos\theta_0=-\sigma\Omega+2\pi\sigma$. Since $e^{i2\pi\sigma}=1$ for the integer helicities specified by [F1], exponentiation gives the same holonomy in both gauges. [F1, F2, step 2.1, algebra] ∎
