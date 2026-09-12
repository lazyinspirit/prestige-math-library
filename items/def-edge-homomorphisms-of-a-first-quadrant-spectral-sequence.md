---
id: def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence
kind: definition
title: Edge homomorphisms of a first quadrant spectral sequence
deps: ["def-abutment-to-a-filtered-object", "prop-degree-reasons-force-stabilization-in-a-bounded-region"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
---




## Definition

Let a homological spectral sequence be first quadrant from page s≥2, with finite abutment data as in [[def-abutment-to-a-filtered-object]], normalized by $F_{-1}H_n=0$ and $F_nH_n=H_n$ for n≥0. By [[prop-degree-reasons-force-stabilization-in-a-bounded-region]] the axis terms stabilize. The **edge maps** are the composites
$$E^s_{0,n}\twoheadrightarrow E^\infty_{0,n}\cong F_0H_n\hookrightarrow H_n,$$
$$H_n\twoheadrightarrow H_n/F_{n-1}H_n\cong E^\infty_{n,0}\hookrightarrow E^s_{n,0}.$$
The first surjection is obtained by composing the finitely many transition quotient maps on the vertical axis: every outgoing differential there lands at negative first coordinate. On the horizontal axis, every incoming source has second coordinate $1-r<0$, so the transitions identify successive kernels as subobjects; their composite gives the second inclusion. Further stationary transitions do not change these maps.

For cohomological first-quadrant indexing, normalize $F^0H^n=H^n$ and $F^{n+1}H^n=0$. The analogous arrows are $E_s^{n,0}\to H^n$ through $F^nH^n$, and $H^n\to E_s^{0,n}$ through $H^n/F^1H^n$. Neither the first whole-target map is necessarily epic nor the second monic: for example, in an abelian category with a supplied nonzero object $M$, with page terms fixed equal to $M$ at (0,1) and (1,0), zero elsewhere and zero differentials, the abutment $H_1=M\oplus M$ filtered by its first summand has edges the summand inclusion and the other summand projection. These respectively miss the second summand and kill the first.

## Source notes

[Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.2.6 p.124. The whole-target epic/monic claims in Sharifi Remark 4.1.16 are not used.
