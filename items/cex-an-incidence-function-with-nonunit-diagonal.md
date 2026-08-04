---
id: cex-an-incidence-function-with-nonunit-diagonal
kind: counterexample
title: "On a two-element chain, an incidence function with a zero diagonal value is not convolution-invertible"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-incidence-algebra-invertibility-criterion, def-delta-and-zeta-incidence-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Statement refuted

Every incidence function on a finite poset is convolution-invertible.

## Facts & Assumptions

**Given:** A two-element chain $0<1$, a nonzero commutative ring $R$, and the incidence function $f$ with $f(0,0)=0_R$, $f(0,1)=0_R$, and $f(1,1)=1_R$.

[L1] An incidence function is convolution-invertible exactly when every diagonal value is a unit ([[thm-incidence-algebra-invertibility-criterion]]).

[F1] The convolution identity has $\delta(0,0)=1_R$ ([[def-delta-and-zeta-incidence-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 If $g$ were a convolution inverse, evaluation at $(0,0)$ would give $(f*g)(0,0)=f(0,0)g(0,0)=0_R$. [given]

2.1 But an inverse equation requires $(f*g)(0,0)=\delta(0,0)=1_R$, and $0_R\ne1_R$ because the ring is nonzero. [step 1.1, F1]

3.1 Therefore $f$ is not invertible, in agreement with [L1] because its diagonal value $0_R$ is not a unit. [step 2.1, L1] ∎
