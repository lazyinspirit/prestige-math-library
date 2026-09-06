---
id: cex-nonintegral-reflection-does-not-produce-a-singular-power
kind: counterexample
title: "A nonintegral reflection does not produce a singular power"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-verma-module]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement refuted

For every complex $\lambda$, the formal power $f^{\langle\lambda+\rho,\alpha^\vee\rangle}v_\lambda$ is a singular vector in the Verma module.

## Counterexample

**Given:** The Verma-module convention [[def-verma-module]].

**Proof technique:** direct.

1.1 In $\mathfrak{sl}_2$, take $\lambda=-\tfrac12$, so $\langle\lambda+\rho,\alpha^\vee\rangle=\tfrac12$. PBW gives vectors $f^n v_\lambda$ only for integers $n\ge0$; $f^{1/2}v_\lambda$ is not a vector of $M(\lambda)$. [given]

2.1 Thus the asserted formal power does not even define a candidate singular vector. The integrality condition is necessary before the rank-one singular-vector calculation can begin. [step 1.1] ∎
