---
id: ex-qsm-oscillator-spin-ensembles
kind: example
title: "Zero-point energy and ground-degeneracy entropy"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-qsm-oscillator-spin-ensembles
dependency_roles:
  pthm-qsm-oscillator-spin-ensembles: physical-result
physical_scope: "A direct low-temperature comparison of the one-dimensional harmonic oscillator and the zero-field two-state spin model covered by the linked theorem. It records a model result, not a universal third-law statement or observation."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 22, oscillator and two-level examples"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7f26f530bdda5d69c399057bd4b1bd28_MIT8_333F13_Lec22.pdf"
---

## Example

For an oscillator with gap $\epsilon=\hbar\omega>0$, the $T\downarrow0$ canonical state approaches the nondegenerate ground level, with energy $\epsilon/2$ and entropy zero. For the separate spin Hamiltonian $H_s=-h\sigma_z$, choosing $h=0$ leaves two exactly degenerate states equally occupied at every temperature, with entropy $k_B\log2$. These model calculations show why ground degeneracy must be included when stating a low-temperature entropy limit.

## Verification

**Given:** $\epsilon>0$, the oscillator and spin models in [[pthm-qsm-oscillator-spin-ensembles]], and $k_B>0$.

[F1] [[pthm-qsm-oscillator-spin-ensembles]], Statement: oscillator energy tends to $\epsilon/2$ and entropy to zero; the spin entropy is $k_B\log2$ when $h=0$.

1.1 Since $e^{-\beta\epsilon}\to0$ as $T\downarrow0$, the oscillator formulas give $\bar n\to0$, $U=\epsilon(1/2+\bar n)\to\epsilon/2$, and the entropy function in [F1] tends zero. [given, F1, algebra]

2.1 With $h=0$, the spin Gibbs weights are both $1/2$, so $S=-k_B(2)(1/2)\log(1/2)=k_B\log2$ independently of $T$. Both conclusions are exact consequences of these declared Hamiltonians. [given, F1, algebra] ∎
