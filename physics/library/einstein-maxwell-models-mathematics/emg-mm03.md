---
page: emg-mm03
title: "Finite WKB Maxwell residual, null rays and polarization quotient"
status: draft
library: mathematics
requires:
  - emg-c01
  - emg-mm01
  - rpm-external-charge
items:
  - lem-emg-potential-maxwell-wave-identity
  - lem-emg-controlled-maxwell-wkb
  - lem-emg-source-and-test-scaling
  - thm-emg-weak-slow-test-lorentz-limit
examples: []
---

## Scope

This page proves the curved-potential wave identity as a local mathematical intermediate, then derives exact finite-parameter Maxwell residual and leading-field bounds from a two-amplitude ansatz. The title's WKB label means exactly the finite phase-amplitude family and four constraints of [[lem-emg-controlled-maxwell-wkb]], with no convergence of a longer series asserted. The assumptions include a nowhere-zero null phase gradient, explicit transversality, transport and gauge constraints, and compact-chart component bounds. Local phase rays are affine null geodesics; for any chosen nonzero initial value of the scalar transport amplitude, the normalized transverse one-form $a_0/\mathcal A$ is parallel transported, and the distinct polarization class lies in the two-complex-dimensional quotient $k^\perp/\operatorname{span}_{\mathbb C}\{k\}$.

Separate results scale smooth Maxwell sources and charged-dust fields, compute a fixed-metric Einstein residual, and give a finite Coulomb-shell energy divergence. A weak-field, slow-motion theorem proves a finite-time trajectory estimate for a prescribed external Lorentz-force field under explicit metric remainder, field-scaling, speed and compact-containment assumptions. All results are mathematical conditionals; no convergence of a formal series extending the finite ansatz, continuation of local ray/amplitude data beyond their stated domains, self-field, backreaction family, or empirical claim is asserted.
