---
id: ex-ula-and-baoab-have-distinct-harmonic-variance-bias
kind: example
title: "Overdamped ULA and underdamped BAOAB have different harmonic variance errors"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-harmonic-baoab-invariant-law-and-stability-limit
  - def-axiom-of-choice
  - thm-ula-gaussian-target-invariant-law-and-stationary-variance
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
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §3.3"
      url: "https://arxiv.org/pdf/1507.05021v3"
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
---

## Example

For overdamped ULA targeting $N(0,1)$, take step $\eta=1$. For underdamped BAOAB, take the harmonic oscillator $m=k=\beta=\gamma=1$ and step $h=1$. The two invariant laws concern different state variables and transition kernels; their variance formulas are juxtaposed only to make that distinction explicit.

## Facts & Assumptions

**Given:** The ULA Gaussian theorem, the harmonic BAOAB theorem, $\eta=1$, and $m=k=\beta=\gamma=1$, $h=1$.

[F1] [[thm-ula-gaussian-target-invariant-law-and-stationary-variance]]: for the standard normal target and $0<\eta<2$, ULA has invariant variance $2/(2-\eta)$.

[F2] [[thm-harmonic-baoab-invariant-law-and-stability-limit]]: for $0<h<2\sqrt{m/k}$, BAOAB has $\operatorname{Var}(Q)=1/(\beta k)$ and $\operatorname{Var}(P)=(m/\beta)(1-h^2k/(4m))$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1] and [F2]; the side-by-side substitutions use no additional choice.

## Verification

**Given:** The ULA Gaussian theorem, the harmonic BAOAB theorem, $\eta=1$, and $m=k=\beta=\gamma=1$, $h=1$.

[F1] [[thm-ula-gaussian-target-invariant-law-and-stationary-variance]]: for the standard normal target and $0<\eta<2$, ULA has invariant variance $2/(2-\eta)$.

[F2] [[thm-harmonic-baoab-invariant-law-and-stability-limit]]: for $0<h<2\sqrt{m/k}$, BAOAB has $\operatorname{Var}(Q)=1/(\beta k)$ and $\operatorname{Var}(P)=(m/\beta)(1-h^2k/(4m))$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1] and [F2]; the side-by-side substitutions use no additional choice.



**Given:** The parameters in the Example.

1.1 Since $0<\eta=1<2$, [F1] gives the ULA invariant variance $2/(2-1)=2$, compared with the target variance $1$. [F1, given, algebra]

2.1 For BAOAB, $h=1<2\sqrt{m/k}=2$ and $r=h^2k/(4m)=1/4$. Thus [F2] gives position variance $1$ and momentum variance $1(1-1/4)=3/4$, compared with the canonical momentum variance $1$. The ULA variance describes a single overdamped coordinate; the BAOAB pair describes both position and momentum. Neither result supplies the other's invariant-law claim. [A1, F2, given, algebra] ∎
