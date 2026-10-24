---
id: ex-harmonic-baoab-thermostat-covariance
kind: example
title: "Harmonic BAOAB thermostat: exact position variance and kinetic bias"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - def-axiom-of-choice
  - alg-baoab-underdamped-langevin-splitting
  - thm-harmonic-baoab-invariant-law-and-stability-limit
justified_by: []
axiom_base: Full AC
axiom_use: "AC is inherited through the cited model and invariant-law suppliers; the example arithmetic uses no further choice."
proof_strategy: direct
verification:
  precheck: pass
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

Take a one-dimensional harmonic oscillator with mass $m=2$, stiffness $k=8$, inverse temperature $\beta=1$, friction $\gamma=1$, and BAOAB step $h=1/2$. The stability threshold is $h<2\sqrt{m/k}=1$. The example concerns the exact stationary covariance of the discrete BAOAB chain, not Monte Carlo error from a finite trajectory.

## Facts & Assumptions

**Given:** $m=2$, $k=8$, $\beta=1$, $\gamma=1$, $h=1/2$, and the harmonic BAOAB theorem.

[F1] [[thm-harmonic-baoab-invariant-law-and-stability-limit]]: when $0<h<2\sqrt{m/k}$, $\operatorname{Var}(Q)=1/(\beta k)$ and $\operatorname{Var}(P)=(m/\beta)(1-h^2k/(4m))$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]; the parameter substitution and arithmetic use no additional choice.

## Verification

**Given:** $m=2$, $k=8$, $\beta=1$, $\gamma=1$, $h=1/2$, and the harmonic BAOAB theorem.

[F1] [[thm-harmonic-baoab-invariant-law-and-stability-limit]]: when $0<h<2\sqrt{m/k}$, $\operatorname{Var}(Q)=1/(\beta k)$ and $\operatorname{Var}(P)=(m/\beta)(1-h^2k/(4m))$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]; the parameter substitution and arithmetic use no additional choice.



**Given:** The parameter values in the Example.

1.1 Here $2\sqrt{m/k}=2\sqrt{2/8}=1$, so $h=1/2$ is in the strict stable range of [F1]. The dimensionless quantity is $r=h^2k/(4m)=(1/4)8/8=1/4$. [F1, given, algebra]

2.1 The discrete stationary position variance is $1/(\beta k)=1/8$, exactly the canonical Gibbs position variance. The momentum variance is $(2/1)(1-1/4)=3/2$, whereas the continuous canonical value is $m/\beta=2$, so the momentum bias is $-1/2=-h^2k/(4\beta)$. [A1, F1, step 1.1, algebra] ∎
