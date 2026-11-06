---
id: ex-r5-string-brane-gas-cosmology
kind: example
title: String/brane gas cosmology proposal
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
- def-r5-alternative-cosmology-model-data
dependency_roles:
  def-r5-alternative-cosmology-model-data: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: §7.2, PDF pp. 134–135; HTML Eq. (339) / PDF Eq. (317) gives the one-circle mass spectrum and the radius/momentum/winding duality, alongside the source limitations on the Hagedorn phase, dilaton stabilization and realistic cosmological setups.
  - title: 'Y. Li, Y.-F. Hang, H.-J. He and S. He, Scattering amplitudes of Kaluza-Klein strings and extended massive double-copy, arXiv:2111.12042'
    url: https://arxiv.org/pdf/2111.12042
    locator: §2.1, Eqs. (2.3)–(2.6), for the closed-string mass shell and level-matching relation $nw=\widetilde N-N$; the local convention here sets $N_L=N$ and $N_R=\widetilde N$.
physical_scope: A one-circle closed-bosonic-string spectrum and its exact momentum/winding duality in source units. It does
  not assert a Hagedorn cosmological solution, stabilized compactification, perturbation production, or empirical history.
---

## Example

A string/brane-gas proposal treats strings and specified branes as thermal sources; a brane here is an extended object with a declared spatial worldvolume dimension and wrapping. On a compact circle of dimensionless radius $R$ in the source convention $\alpha'=1/2$, the integer $n$ labels quantized momentum and the integer $m$ is the signed winding number, counting wraps of the string around the circle. A “Hagedorn regime” here means a proposed thermal phase near a limiting temperature associated with exponential growth of the string-state density. A “quasi-static” phase would require the model to state an interval and tolerance on the scale-factor variation; neither is supplied here. Such proposals also require a specified thermal ensemble, stabilization mechanism, perturbation production and controlled transition; these are not consequences of the one-circle spectrum below.

Consider a closed bosonic string on a target with one compact spatial circle of dimensionless string-frame radius $R>0$. In the source convention $\alpha'=1/2$, $R$ and $M$ in the displayed spectrum are dimensionless numerical values in the corresponding string units; $n,m\in\mathbb Z$ and the oscillator levels $N_L,N_R\in\mathbb N_0$ are dimensionless. With the declared convention $N_L=N$, $N_R=\widetilde N$, an allowed state satisfies the level-matching condition $N_R-N_L=nm$. The mass formula is $M^2=\frac{n^2}{4R^2}+m^2R^2+N_L+N_R-2$. This one-circle spectrum is a precise closed-string input. No universal Hagedorn temperature is assigned. The gas ensemble, thermodynamic state, stabilization mechanism, quasi-static solution and transition dynamics are missing inputs, as is perturbation generation/transfer. Adding branes requires their species, wrapping and source data; none is specified in this toy spectrum.

## Example references

[[def-r5-alternative-cosmology-model-data]]

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

[Y. Li, Y.-F. Hang, H.-J. He and S. He, Scattering amplitudes of Kaluza-Klein strings and extended massive double-copy, arXiv:2111.12042](https://arxiv.org/pdf/2111.12042)

## Facts & Assumptions

[F1] [[def-r5-alternative-cosmology-model-data]]: A datum specifies the action and fields, a background branch, sources and transitions, perturbation variables and transfer, control conditions, and observable outputs; missing thermal or transfer data are not inferred.

[A1] Adopt the source-reported one-circle bosonic closed-string spectrum in $\alpha'=1/2$ string units, with the allowed-state condition $N_R-N_L=nm$ in the left-right convention $N_L=N$, $N_R=\widetilde N$ of the cited level-matching formula. The dimensionless $R$ and $M$ are the string-frame circle radius and mass in the source's numerical string-unit convention; the duality acts on the momentum/winding integers.

## Verification

**Given:** $R>0$, $n,m\in\mathbb Z$, and an allowed state in [A1] with fixed $N_L,N_R\in\mathbb N_0$ and $N_R-N_L=nm$.

1.1 Define $R'=1/(2R)$, $n'=m$, and $m'=n$. Then $\frac{(n')^2}{4(R')^2}=m^2R^2$ and $(m')^2(R')^2=\frac{n^2}{4R^2}$, so the momentum and winding contributions exchange exactly. [given, A1, algebra]

2.1 The oscillator contribution $N_L+N_R-2$ is unchanged, and $n'm'=nm=N_R-N_L$, so the allowed-state level-matching condition remains true under the same interchange. Therefore $M'^2=M^2$ for every allowed state in this model. [A1, step 1.1, algebra]

2.2 The fixed positive radius satisfies $R=1/(2R)$, hence $R_c=1/\sqrt2$. The map identifies radii on opposite sides of $R_c$ while exchanging momentum and winding labels. [step 1.1, algebra]

3.1 The source's Hagedorn/string-gas cosmology discussion is a proposal requiring a specified thermal ensemble and stabilized moduli; the spectral identity in steps 1.1–2.2 does not derive a quasi-static cosmological phase, a transition, or observed perturbations. [F1, A1, step 2.1] ∎

## Remarks

The commutative square summarizes the exact mass-spectrum invariance established in steps 1.1–2.1. Its horizontal arrow is the map $(R,n,m)\mapsto(1/(2R),m,n)$ at fixed oscillator levels; the vertical arrows evaluate the source mass formula. The diagram records the calculation but is not a proof premise.

```tikzcd
(R,n,m,N_L,N_R) \arrow[r,"\mathsf{T}"] \arrow[d,"\mathsf{M}^2"'] & (\frac{1}{2R},m,n,N_L,N_R) \arrow[d,"\mathsf{M}^2"] \\
M^2(R,n,m,N_L,N_R) \arrow[r,"="] & M^2(\frac{1}{2R},m,n,N_L,N_R)
```
