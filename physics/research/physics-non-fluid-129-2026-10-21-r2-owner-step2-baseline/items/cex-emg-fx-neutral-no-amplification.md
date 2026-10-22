---
id: cex-emg-fx-neutral-no-amplification
kind: counterexample
title: A charged RN background does not amplify a neutral test scalar
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - prop-emg-fx-superradiant-wronskian
dependency_roles:
  prop-emg-fx-superradiant-wronskian: mathematical-premise
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, second edition"
      url: https://arxiv.org/pdf/1501.06570
      locator: "Section 4.6.1, equation (4.56): the reflected amplitude depends on the test-field charge through the horizon frequency. The neutral specialization is verified locally."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, University of Sheffield (2022)"
      url: https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0
      locator: "Chapter 3, Section 3.3.4, equations (3.83)-(3.84): classical charge superradiance requires the sign-changing product of field and black-hole charges. The exact neutral case below follows from the local flux identity."
verification:
  precheck: pass
---

## Statement refuted

Every admitted scattering mode on a nonzero charged subextremal electric
Reissner--Nordström background is amplified, regardless of the test scalar's
charge.

## Statement references

[[def-emg-fx-charged-radial-scattering]]

## Facts & Assumptions

**Given:** A nonzero-charge subextremal electric RN background and an admitted
scattering solution of the charged radial problem with $\omega>0$.

[F1] [[prop-emg-fx-superradiant-wronskian]]: $|R|^2=1-(\omega-eQ/r_+) |T|^2/\omega$ for every admitted scattering solution.

[A1] The test-scalar coupling is $e=0$. No scattering-solution existence claim is made; the counterexample applies to any solution satisfying the stated boundary conditions.

## Counterexample

1.1 Set $e=0$ in [F1]. Then the horizon frequency is $\omega-eQ/r_+=\omega$, so
$$|R|^2=1-|T|^2.$$
[given, F1, A1, algebra]

2.1 Since $|T|^2\ge0$, $|R|^2\le1$. The reflected radial flux therefore does
not exceed the incident radial flux. This contradicts the universal
amplification statement even though the background charge $Q$ is nonzero.
[given, step 1.1, algebra] ∎

## Remarks

The conclusion concerns the neutral test-field case on the same fixed
background. It does not classify charged-field modes or assert that a
scattering solution exists for every parameter choice.
