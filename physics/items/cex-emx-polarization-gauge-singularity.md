---
id: cex-emx-polarization-gauge-singularity
kind: counterexample
title: The polar helicity frame is singular while its projector is smooth
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-emx-helicity-line-bundle
  - pthm-emx-helicity-berry-curvature
dependency_roles:
  def-emx-helicity-line-bundle: formulation-prerequisite
  pthm-emx-helicity-berry-curvature: physical-result
proof_strategy: direct
physical_scope: >-
  Conditional classical Maxwell-Lorentz vacuum model in the smooth source-free
  nonzero-Fourier-mode regime stated by the supplier, with no extra approximation.
  The example distinguishes a coordinate-dependent phase frame from the smooth
  helicity projection; it makes no empirical claim, quantization assertion, or
  claim of a global nonvanishing polarization basis.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 2, PDF pp. 3–4: spherical polarization frames on the direction sphere; the smooth projector counterexample is verified locally."
    - title: "David Tong, The Quantum Hall Effect, TIFR Infosys Lecture Notes (2016)"
      url: "https://www.damtp.cam.ac.uk/user/tong/qhe/qhe.pdf"
      locator: "§1.5.1–1.5.2, printed pp. 28–34: phase-gauge changes and a local eigenvector chart failure despite smooth curvature; the quantum Hamiltonian is not assumed here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

For the helicity line on $S^2$, the fact that the spherical unit frame $v_\sigma=(e_\theta+i\sigma e_\phi)/\sqrt2$ is undefined at the coordinate poles implies that the projection family $P_\sigma(n)$ is itself undefined or nonsmooth there.

## Statement references

[[def-emx-helicity-line-bundle]]

## Facts & Assumptions

**Given:** The direction sphere $S^2$, $\sigma\in\{+1,-1\}$, and the projector and line bundle of [[def-emx-helicity-line-bundle]].

[F1] [[def-emx-helicity-line-bundle]] defines $P_T(n)z=z-n(n\cdot z)$ and $P_\sigma(n)=\tfrac12(P_T(n)+\sigma i n\times)$ for every $n\in S^2$ and proves that its range is a smooth line bundle with local smooth unit frames.

[F2] [[pthm-emx-helicity-berry-curvature]] proves that the line has no globally smooth unit frame. This is an obstruction to one global phase basis, not a singularity of the projection family.

## Counterexample

**Given:** The facts [F1] and [F2].

1.1 Since $n\cdot n=1$, the formula in [F1] is equivalently $P_\sigma(n)=\tfrac12(I-nn^T+\sigma i N_n)$, where $N_nz=n\times z$. Each matrix entry is a polynomial in the real coordinates of $n$, so $n\mapsto P_\sigma(n)$ is smooth on all of $S^2$, including both poles. [F1, algebra]

2.1 The local formula for $v_\sigma$ uses $\phi$, which is not a coordinate at either pole, while the projection matrix from step 1.1 is defined and smooth there. By [F1], projecting a fixed vector with nonzero projection at a given point and normalizing it gives a smooth local unit frame near that point. Thus local polarization sections remain smooth; [F2] rules out only a single nowhere-zero unit frame on the entire sphere. The displayed false implication is refuted. [F1, F2, step 1.1, algebra] ∎
