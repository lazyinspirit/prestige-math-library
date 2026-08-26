---
id: cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms
kind: counterexample
title: "A Laurent series on a punctured disc can have infinitely many negative powers"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-laurent-expansion-annulus, thm-pole-characterizations, cex-exp-one-over-z-is-essential-and-omits-zero]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every Laurent series on a punctured disc has only finitely
many negative powers.

The witness is the Laurent expansion of $e^{1/z}$ on $0<|z|<1$.

## Facts & Assumptions

**Given:** The function $f(z)=e^{1/z}$ on $0<|z|<1$.

[L1] Every holomorphic function on a punctured disc has a Laurent expansion there ([[thm-laurent-expansion-annulus]]).

[L2] A finite nonzero principal part characterizes a pole ([[thm-pole-characterizations]]).

[L3] The function $e^{1/z}$ has an essential singularity at $0$ ([[cex-exp-one-over-z-is-essential-and-omits-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the function $e^{1/z}$ has a Laurent expansion on $0<|z|<1$. [L1]

2.1 If that Laurent expansion had only finitely many negative powers, its principal part would be finite. It cannot be zero, because then the singularity would be removable and hence not essential. So the principal part would be finite and nonzero. [step 1.1, L3]

3.1 By [L2], a finite nonzero principal part would make the singularity a pole, contradicting [L3]. Therefore the Laurent expansion of $e^{1/z}$ has infinitely many negative powers. [step 2.1, L2, L3] ∎
