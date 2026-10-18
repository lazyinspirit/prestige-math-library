---
id: ex-highly-contracted-gaussian-coefficients-amplify-error
kind: example
title: Highly contracted Gaussian coefficients amplify primitive integral error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-finite-gaussian-basis-variational-energy-and-gradient, thm-gaussian-contraction-error-energy-gradient-bounds]
proof_strategy: direct
axiom_use: None. The witness is a finite real tensor calculation.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; primitive-to-contracted finite tensor sums on pp. 4–5 and 27–28."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §V and Table 1, finite contraction sums on pp. 19–21."
---

## Example

Let $n=2$, $r=1$, $D=(1)$, $C=(K,K)^T$ with $K>0$, and suppose every primitive four-index tensor error is $\Delta G_{abcd}=\varepsilon>0$ while $\Delta H=0$. Then the transformed four-index error is $16K^4\varepsilon$, the energy error is $8K^4\varepsilon$, and the gradient error has Frobenius norm $16\sqrt2K^3\varepsilon$. Both bounds in [[thm-gaussian-contraction-error-energy-gradient-bounds]] are attained for this aligned-sign perturbation.

## Facts & Assumptions

**Given:** The finite energy functional in [[def-finite-gaussian-basis-variational-energy-and-gradient]], with the two-dimensional coefficient vector and entrywise perturbation in the Example.

[F1] [[def-finite-gaussian-basis-variational-energy-and-gradient]]: $G'_{1111}=\sum_{a,b,c,d=1}^2C_{a1}C_{b1}C_{c1}C_{d1}G_{abcd}$ and $E_2=\tfrac12D_{11}^2G'_{1111}$.

[F2] [[thm-gaussian-contraction-error-energy-gradient-bounds]]: energy and gradient errors are bounded by the explicit $n,r,B,M$ formulas in its Statement.

## Verification

1.1 There are $2^4=16$ primitive entries, each perturbed by $\varepsilon$, and each product of four coefficients is $K^4$. Thus $\Delta G'_{1111}=16K^4\varepsilon$ and $\Delta E=\tfrac12\Delta G'_{1111}=8K^4\varepsilon$. The perturbed energy is $\tfrac12\varepsilon(C_1+C_2)^4$, so each gradient component is $2\varepsilon(C_1+C_2)^3=16K^3\varepsilon$; its two-entry Frobenius norm is $16\sqrt2K^3\varepsilon$. [given, F1, algebra]

2.1 Here $B=\|C\|_F=\sqrt2K$ and $M=\|D\|_F=1$. Substitution into [F2] gives energy bound $\tfrac12(1)^2(1)^2(2)^2(\sqrt2K)^4\varepsilon=8K^4\varepsilon$ and gradient bound $2(2)^2(1)^2(\sqrt2K)^3(1)^2\varepsilon=16\sqrt2K^3\varepsilon$, equal to the errors in step 1.1. [given, F2, step 1.1, algebra] ∎
