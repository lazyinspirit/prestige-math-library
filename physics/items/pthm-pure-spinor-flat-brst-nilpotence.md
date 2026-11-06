---
id: pthm-pure-spinor-flat-brst-nilpotence
kind: physics-theorem
title: "Pure Spinor Flat BRST Nilpotence"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 3
domain: physics
physical_scope: "Formal flat-space holomorphic operator-algebra deduction for the minimal pure-spinor BRST charge. It does not prove BRST cohomology, curved-background consistency, or existence of a global measure."
deps:
  - post-pure-spinor-superstring-model
dependency_roles:
  post-pure-spinor-superstring-model: physical-assumption
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nathan Berkovits and Carlos R. Mafra, Pure spinor formulation of the superstring and its applications, arXiv:2210.10510v2"
      url: "https://arxiv.org/pdf/2210.10510v2"
      locator: "§2.2, printed pp. 6–9: constrained pure-spinor ghosts, d and Π currents, OPEs, and nilpotent BRST charge."
    - title: "Nathan Berkovits, ICTP Lectures on Covariant Quantization of the Superstring, arXiv:hep-th/0209059v1"
      url: "https://arxiv.org/pdf/hep-th/0209059v1"
      locator: "§§3.1–3.2, printed pp. 17–22: Green–Schwarz constraints, pure-spinor variables, and flat-space quantization."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the flat ten-dimensional pure-spinor model with $Q=\int dz\,\lambda^\alpha d_\alpha$ and OPE $d_\alpha(z)d_\beta(w)\sim-(\gamma^m)_{\alpha\beta}\Pi_m(w)/(z-w)$, one has $Q^2=0$ because the only simple-pole obstruction is proportional to $\lambda\gamma^m\lambda$, which vanishes by the pure-spinor constraint. This is a flat-background operator-algebra statement and does not establish the full BRST cohomology or quantum consistency in an arbitrary curved background.

## Statement references

[Nathan Berkovits and Carlos R. Mafra, Pure spinor formulation of the superstring and its applications, arXiv:2210.10510v2](https://arxiv.org/pdf/2210.10510v2)

[Nathan Berkovits, ICTP Lectures on Covariant Quantization of the Superstring, arXiv:hep-th/0209059v1](https://arxiv.org/pdf/hep-th/0209059v1)

## Facts & Assumptions

**Given:** The minimal flat pure-spinor model and its holomorphic OPE convention.

[F1] [[post-pure-spinor-superstring-model]] fixes $Q=\oint\frac{dz}{2\pi i}\lambda^\alpha d_\alpha$, the regular $\lambda$ OPE, the simple-pole OPE $d_\alpha(z)d_\beta(w)\sim-(\gamma^m)_{\alpha\beta}\Pi_m(w)/(z-w)$, and the constraint $\lambda\gamma^m\lambda=0$.

## Proof

1.1 Since $\lambda$ is bosonic and has regular OPE with itself and with $d$, the singular part of the BRST-current product $j_B(z)j_B(w)$, where $j_B=\lambda^\alpha d_\alpha$, is only the contraction of the two $d$ factors. Substitution of [F1] gives
$$j_B(z)j_B(w)\sim-\frac{(\lambda\gamma^m\lambda)\Pi_m(w)}{z-w}.$$
The displayed pole coefficient vanishes identically by the pure-spinor constraint in [F1]. [given, F1, algebra]

2.1 The square of an odd contour charge is one half of its graded anticommutator; the contour residue of the simple pole in step 1.1 is therefore the only contribution to $Q^2$. Since that residue is zero as an operator, $Q^2=0$. The proof uses only the flat chiral OPE and does not assert any cohomology or curved-background result. [F1, step 1.1, algebra] ∎
