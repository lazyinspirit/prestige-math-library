---
id: pthm-st-open-bosonic-no-ghost
kind: physics-theorem
title: "Open Bosonic No Ghost"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 13
deps:
  - def-st-bosonic-covariant-state-space
  - pthm-st-critical-dimension-flat-bosonic-string
  - pthm-st-nonzero-momentum-pplus-chart
  - pthm-st-open-oldcovariant-brst-equivalence
  - pthm-st-open-bosonic-brst-no-ghost
dependency_roles:
  def-st-bosonic-covariant-state-space: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-nonzero-momentum-pplus-chart: physical-result
  pthm-st-open-oldcovariant-brst-equivalence: physical-result
  pthm-st-open-bosonic-brst-no-ghost: physical-result
physical_scope: "Old-covariant open-string physical quotients at D=26, intercept one, all finite oscillator levels and nonzero on-shell momentum; p=0 is excluded."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§2.1–2.1.2 (PDF file pp.35–38; printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–32); old-covariant conditions and indefinite ambient form. Full positivity proof is not supplied by this locator."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the standard flat open bosonic string at $D=26$ and $a=1$, every nonzero on-shell momentum p, and the physical inner product induced by pthm-st-open-oldcovariant-brst-equivalence, the old-covariant quotient $P_{N}(p)/Rad(P_{N}(p))$ has positive-definite induced inner product. The zero-momentum sector is excluded.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§2.1–2.1.2 (PDF file pp.35–38; printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–31); printed pp.28–32); old-covariant conditions and indefinite ambient form. Full positivity proof is not supplied by this locator.

## Facts & Assumptions

**Given:** The standard critical flat open bosonic model, any fixed finite oscillator level and nonzero on-shell real momentum.

[F1] [[def-st-bosonic-covariant-state-space]] defines $P_N$ and its radical quotient.

[F2] [[pthm-st-critical-dimension-flat-bosonic-string]] supplies $D=26,a=1$ in the stated model.

[F3] [[pthm-st-nonzero-momentum-pplus-chart]] supplies the form-preserving nonzero-$p^+$ chart.

[F4] [[pthm-st-open-oldcovariant-brst-equivalence]] proves the actual natural isometric bijection $[v]\mapsto[v|\downarrow\rangle]$ from the old-covariant quotient onto relative ghost-number-one cohomology, with kernel exactly the radical before quotienting.

[F5] [[pthm-st-open-bosonic-brst-no-ghost]] proves positive definiteness of that relative cohomology with the same $c_0$ Hermitian form, at every finite level and nonzero on-shell momentum.

## Proof

1.1 Use [F3] to work in a nonzero-$p^+$ chart. The actual map in [F4] identifies each quotient class with a relative BRST class and preserves its Hermitian form; the critical values are [F2]. Thus a nonzero old-covariant class maps to a nonzero BRST class. [given, F1, F2, F3, F4]

2.1 By [F5], that nonzero target class has strictly positive norm. Isometry gives the same strictly positive norm to the original class. Spatial-rotation transport in [F3] proves the result for every admitted nonzero momentum. The radical kernel and all-level completeness are the proved map in [F4], not a separate assumed DDF completeness assertion. [F3, F4, F5, step 1.1, algebra] ∎
