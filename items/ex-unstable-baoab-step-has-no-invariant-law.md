---
id: ex-unstable-baoab-step-has-no-invariant-law
kind: example
title: "An unstable harmonic BAOAB step has no invariant probability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-baoab-underdamped-langevin-splitting
  - def-axiom-of-choice
  - thm-harmonic-baoab-invariant-law-and-stability-limit
justified_by: []
axiom_base: Full AC
axiom_use: "AC is inherited through the cited model and invariant-law suppliers; the example arithmetic uses no further choice."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.2"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
---

## Example

For the one-dimensional harmonic oscillator with $m=k=\beta=\gamma=1$, choose the BAOAB step $h=5/2$. The method's affine Gaussian transition is unstable, so this discrete chain has no invariant probability.

## Facts & Assumptions

**Given:** $m=k=\beta=\gamma=1$, $h=5/2$, and the harmonic BAOAB theorem.

[F1] [[thm-harmonic-baoab-invariant-law-and-stability-limit]]: for the scalar harmonic chain, no invariant probability exists when $h>2\sqrt{m/k}$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]; the threshold comparison uses no additional choice.

## Verification

**Given:** $m=k=\beta=\gamma=1$, $h=5/2$, and the harmonic BAOAB theorem.

[F1] [[thm-harmonic-baoab-invariant-law-and-stability-limit]]: for the scalar harmonic chain, no invariant probability exists when $h>2\sqrt{m/k}$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]; the threshold comparison uses no additional choice.



**Given:** The parameters in the Example.

1.1 The threshold is $2\sqrt{m/k}=2$, and $5/2>2$. Thus the strict unstable case of [F1] applies. [F1, given, algebra]

2.1 Therefore the BAOAB transition at this step size has no invariant probability law. This example does not infer failure at the boundary $h=2$. [A1, F1, step 1.1] ∎
