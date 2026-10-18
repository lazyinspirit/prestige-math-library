---
id: lem-boys-upward-downward-recurrence-error-amplification
kind: lemma
title: Upward and downward Boys recurrence error amplification bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, thm-boys-integral-identities-series-and-incomplete-gamma, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-directed-dyadic-rounding-enclosure-and-error]
proof_strategy: direct
axiom_use: None. The error recurrences are finite interval estimates.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; upward/downward Boys recurrences and numerical regimes on p. 20. Error-amplification inequalities are proved here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18, recurrence directions and their numerical warning."
---

## Statement

Let $m\ge0$, $T>0$, and let $I_m=[c_m-r_m,c_m+r_m]$ enclose $F_m(T)$ while $J=[c_e-r_e,c_e+r_e]$ encloses $e^{-T}$. The exact upward recurrence image for $F_{m+1}$ has radius at most
$$\frac{(2m+1)r_m+r_e}{2T},$$
and the exact downward recurrence image for $F_m$, from an interval of radius $r_{m+1}$ for $F_{m+1}$, has radius at most
$$\frac{2Tr_{m+1}+r_e}{2m+1}.$$
Outward-rounded intervals add at most the mean of the two endpoint-rounding errors to these radii. Iterating the displayed bounds gives valid finite error-amplification estimates for any requested order range. Upward recurrence is undefined at $T=0$; direct values $F_m(0)=1/(2m+1)$ are exact.

## Facts & Assumptions

**Given:** The recurrence identity in [[thm-boys-integral-identities-series-and-incomplete-gamma]], enclosing intervals $I_m,J$, and the outward interval operations in [[def-outward-rounded-interval-and-ball-operations]].

[F1] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F_{m+1}=((2m+1)F_m-e^{-T})/(2T)$ for $T>0$, and equivalently $F_m=(2TF_{m+1}+e^{-T})/(2m+1)$.

[F2] [[def-outward-rounded-interval-and-ball-operations]]: interval affine operations compute exact endpoint hulls and round lower endpoints down and upper endpoints up.

[F3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: finite outward interval expression graphs enclose their exact values.

[F4] [[lem-directed-dyadic-rounding-enclosure-and-error]]: each finite rounded endpoint lies on the outward side of the exact endpoint, with its stated finite rounding-error bound.

## Proof

1.1 The exact upward map is affine with positive coefficient $(2m+1)/(2T)$ on $F_m$ and coefficient $-1/(2T)$ on $e^{-T}$. Therefore the radius of its exact interval image is at most $((2m+1)r_m+r_e)/(2T)$. The downward map has positive coefficients $2T/(2m+1)$ and $1/(2m+1)$, so its exact interval image radius is at most $(2Tr_{m+1}+r_e)/(2m+1)$. [given, F1, algebra]

2.1 By [F2]–[F4], the computed interval endpoints are the downward and upward roundings of those exact affine endpoints. If their outward endpoint errors are $\delta_-$ and $\delta_+$, the stored interval radius exceeds the exact-image radius by at most $(\delta_-+\delta_+)/2$. [F2, F3, F4, step 1.1, algebra]

3.1 The recurrence identities in [F1] show that each exact target value belongs to its exact interval image; [F3] preserves this inclusion through every finite recurrence step. Applying steps 1.1 and 2.1 successively yields the stated finite propagated bounds. At $T=0$, [F1]'s integral definition gives $F_m(0)=1/(2m+1)$, while the upward formula divides by zero and is excluded. [given, F1, F3, step 1.1, step 2.1, algebra] ∎
