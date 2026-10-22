---
id: cex-qftx-fixed-polarization-tensor-factor
kind: counterexample
title: A fixed Cartesian polarization is not a global transverse helicity frame
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qftx-photon-helicity-bundle
  - prop-qftx-helicity-chern-obstruction
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-qftx-photon-helicity-bundle: mathematical-premise
  prop-qftx-helicity-chern-obstruction: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eric Palmerduca and Hong Qin, Photon topology, arXiv:2308.11147v2
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page PDF retrieved; section III, theorem 18 and the discussion following equation 65, for the nonexistence of global circular-helicity unit vectors.
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page PDF retrieved; section I, equation 1 and the transversality discussion of separate orbital and spin angular momenta.
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter; section 6.2.1, equations 6.513–6.514, for momentum-dependent transversality of polarization vectors.
verification:
  precheck: pending
---

## Statement refuted

Let $e_1,e_2,e_3$ be the standard coordinate basis of $\mathbb R^3$. The constant Cartesian circular vectors $e_\sigma^0=(e_1+i\sigma e_2)/\sqrt2$, for $\sigma=\pm1$, form a transverse helicity frame for every nonzero momentum direction; consequently this fixed pair supplies a momentum-independent polarization factor on the transverse one-photon space.

## Statement references

[[def-qftx-photon-helicity-bundle]]

## Facts & Assumptions

**Given:** The transverse helicity fibers, the nonzero Chern numbers of their line bundles, and the total rotation generators on the transverse Hilbert space.

[F1] Each helicity fiber $\mathcal L_{\sigma,\mathbf n}$ lies in the transverse plane $\mathbf n^\perp$. [[def-qftx-photon-helicity-bundle]]

[F2] The standard first Chern number of $\mathcal L_{\sigma}$ is $-2\sigma\ne0$, and no global smooth unit helicity section exists. [[prop-qftx-helicity-chern-obstruction]]

[F3] On the dense smooth transverse domain the total rotation generator is $J_{\mathbf a}=L_{\mathbf a}+S_{\mathbf a}^{\mathrm{op}}$, while the orbital and spin terms generally do not separately preserve transversality. [[thm-qftx-photon-rotations-helicity]]

## Counterexample

**Given:** A nonzero momentum $\mathbf k\in M$ and the constant vectors in the Statement.

1.1 Take $\mathbf k=\kappa e_1$ with $\kappa>0$. Then $\mathbf k\cdot e_\sigma^0=\kappa/\sqrt2\ne0$ for either $\sigma$, so neither fixed vector lies in the transverse plane $\mathbf k^\perp$. By [F1], neither can belong to the corresponding helicity line at this momentum. [F1, given, algebra]

1.2 Independently, [F2] excludes any global smooth unit helicity eigenvector, even if the polarization vector is allowed to depend on momentum. Thus a smooth global helicity gauge cannot repair the fixed-frame claim. [F2, given]

2.1 The displayed fixed pair therefore is not a transverse helicity frame on all momentum directions and cannot induce the stated fixed-frame polarization factor. This refutes the statement. [step 1.1, discharge-contradiction]

3.1 The proposed separate position and polarization rotation actions also fail on this constrained space: by [F3], their orbital and spin terms can each produce a longitudinal component, which cancels only in the total generator. This rules out the proposed canonical factorization by those independent actions. It does not rule out every abstract Hilbert-space tensor-product isomorphism. [F3, given] ∎
