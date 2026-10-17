---
id: ex-upwind-versus-downwind-advection
kind: example
title: Upwind damping versus downwind growth on a periodic grid
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-periodic-one-way-advection-schemes, lem-periodic-advection-amplification-symbols, thm-periodic-advection-power-stability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 2–3: upwind conditional stability and downwind instability; present sign convention is reflected."
---

## Example

On a four-point periodic grid take $\nu=1/2$ and the Fourier mode $z=i$. Its upwind multiplier has modulus $1/\sqrt2$, while its downwind multiplier has modulus $\sqrt{5/2}$.

## Facts & Assumptions

**Given:** $N=4$, $z=\exp(2\pi i/4)=i$, and $\nu=1/2$.

[F1] The upwind and downwind factors are $1-\nu+\nu z^{-1}$ and $1+\nu-\nu z$ ([[lem-periodic-advection-amplification-symbols]]).

[F2] A Fourier multiplier of modulus less than one decays under powers, while a multiplier of modulus greater than one grows under powers ([[thm-periodic-advection-power-stability]]).

## Verification

1.1 Since $z^{-1}=-i$, the upwind factor is $(1-i)/2$, whose squared modulus is $((1)^2+(-1)^2)/4=1/2$. [F1, algebra]

1.2 The downwind factor is $3/2-i/2$, whose squared modulus is $(9+1)/4=5/2$. [F1, algebra]

2.1 Taking powers multiplies this mode by the corresponding factor to the same power. Thus the upwind component decays and the downwind component grows geometrically. [F2, step 1.1, step 1.2, algebra] ∎
