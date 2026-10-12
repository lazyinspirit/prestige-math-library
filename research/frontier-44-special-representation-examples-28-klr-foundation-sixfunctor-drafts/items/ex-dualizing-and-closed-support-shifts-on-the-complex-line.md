---
id: ex-dualizing-and-closed-support-shifts-on-the-complex-line
kind: example
title: Dualizing and support shifts on the complex line
status: draft
origin: pipeline
deps:
- thm-verdier-duality-on-oriented-stratified-complex-varieties
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Example

On the complex line $\omega_{\mathbb C}=k_{\mathbb C}[2]$. For $i:\{0\}\to\mathbb C$, $i^!k_{\mathbb C}=k[-2]$ and $i^!\omega_{\mathbb C}=k$.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[thm-verdier-duality-on-oriented-stratified-complex-varieties]] is used with its stated hypotheses.

## Verification

1.1 A positively complex-oriented disk has relative finite cellular cochains with its single generator in degree2. Therefore its compact-support dual local cochains have k in degree−2, giving the dualizing shift k_C[2] through the Verdier normalization. [given, construct, algebra]

2.1 Closed-support cohomology at the origin is the relative cohomology of (disk,disk\{0}); radial retraction of the punctured disk gives its single relative generator in degree2. Hence i^!k_C=k[−2]. Applying the shift [2] gives i^!ω_C=k, consistently with dualizing transitivity. The same positive orientation generator is used in both computations. [given, construct, algebra] ∎

