---
id: ex-orientation-reversal-preserves-area-and-negates-flux
kind: example
title: 'Opposite parametrizations preserve area and negate flux'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-surface-area-and-scalar-integrals-are-reparametrization-invariant, thm-flux-under-surface-reparametrization, def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, thm-surface-area-density-is-cross-product-norm, def-cross-product-in-r3]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, An Invariance Property'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Example

The parametrizations $\varphi(u,v)=(u,v,0)$ and $\psi(s,t)=(t,s,0)$ of the horizontal unit square both give area $1$. For the constant field $F=(0,0,1)$, their fluxes are $1$ and $-1$ respectively.

## Facts & Assumptions

**Given:** The two maps on $[0,1]^2$ and the coordinate swap $h(s,t)=(t,s)$, so $\psi=\varphi\circ h$.

[L1] Regular reparametrization leaves area unchanged and negates flux when it reverses orientation ([[thm-surface-area-and-scalar-integrals-are-reparametrization-invariant]], [[thm-flux-under-surface-reparametrization]]).

[L2] A regular patch has nonzero parameter cross product in the interior and no interior parameter point shares its image with a distinct point of the parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[L3] The area of a regular patch is $\int_DJ_\varphi$ with $J_\varphi=\|\varphi_u\times\varphi_v\|_2$, and the flux of a continuous field $F$ in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$, the cross product being given by the coordinate formula ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]], [[def-cross-product-in-r3]]).

## Verification

**Proof technique:** direct.

1.1 The derivatives of $\varphi$ are $(1,0,0)$ and $(0,1,0)$, with cross product $(0,0,1)$; those of $\psi$ are reversed, with cross product $(0,0,-1)$. Both maps meet [L2], and $\det Dh=-1$. [given, L2, algebra]

2.1 By [L3] the two area integrands are the constant $\|(0,0,\pm1)\|_2=1$ and the two flux integrands are $(0,0,1)\cdot(0,0,1)=1$ and $(0,0,1)\cdot(0,0,-1)=-1$. Integrating over the unit square gives area $1$ for both maps and fluxes $1$ and $-1$. [step 1.1, L3, algebra]

3.1 The calculation agrees with [L1]: the coordinate swap preserves area and reverses the flux sign. [step 1.1, step 2.1, L1] ∎
