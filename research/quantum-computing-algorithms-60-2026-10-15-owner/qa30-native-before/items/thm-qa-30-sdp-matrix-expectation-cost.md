---
id: thm-qa-30-sdp-matrix-expectation-cost
kind: theorem
title: "SDP matrix-expectation estimation error and cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - alg-qa-30-sdp-matrix-expectation-oracle
  - thm-qa-29-quantum-expectation-error-cost
  - thm-qa-30-sdp-gibbs-state-error-cost
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1504.06987v3"
      url: "https://arxiv.org/pdf/1504.06987v3"
verification:
  precheck: pass
---

## Statement

Let $M=M^*$ with $\|M\|\le1$, and let the coherent signed sampler from [[alg-qa-30-sdp-matrix-expectation-oracle]] be supplied. For additive tolerance $0<\tau\le2$ and failure $0<\delta<1$, the QA29 estimator returns an estimate of $\operatorname{tr}(M\rho)$ within $\tau$ with probability at least $1-\delta$, using $O(\tau^{-1}(1+\ln(1/\delta)))$ coherent sampler/reflection rounds. When the supplied purification is itself an approximate Gibbs purification at vector error $\xi\le\tau/4$, the expectation bias is at most $2\xi$; allocate sampling tolerance $\tau/2$ to keep total error at most $\tau$. In an SDP iteration, use a union bound across all $m$ observables and charge each Gibbs preparation/inverse, observable access, controlled call, and state/phase implementation.

## Facts & Assumptions

**Given:** The signed variable lies in $[-1,1]$, QA29's expectation guarantee, and the purification error bound.

[F1] [[alg-qa-30-sdp-matrix-expectation-oracle]]: the encoded variable has mean $\operatorname{tr}(M\rho)$ and range $[-1,1]$.

[F2] [[thm-qa-29-quantum-expectation-error-cost]]: for an encoded variable in $[a,b]$, error $\epsilon$ and failure $\delta$, the median estimator has error $\epsilon$ with probability $1-\delta$ and query order $(b-a)\epsilon^{-1}(1+\ln(1/\delta))$.

[F3] [[thm-qa-30-sdp-gibbs-state-error-cost]]: vector error $\xi\le\tau/4$ bounds the conditional purification deviation.

## Proof

**Proof technique:** direct.

1.1 Apply [F2] to the interval $[-1,1]$ with tolerance $\tau/2$; its interval width is $2$, so it returns the approximate-purification mean estimate within $\tau/2$ with probability at least $1-\delta$ and uses $O(\tau^{-1}(1+\ln(1/\delta)))$ coherent rounds. [given, F1, F2, algebra]

2.1 For unit vectors $|u\rangle,|v\rangle$ and a contraction $M$, expand $\langle u|M|u\rangle_D-\langle v|M|v\rangle_D=\langle u-v|M|u\rangle_D+\langle v|M|u-v\rangle_D$. Cauchy–Schwarz and unit norms bound its absolute value by $2\|u-v\|\|M\|\le2\xi$. Thus allocate $\tau-2\xi>0$ to the estimator when the target is the ideal Gibbs mean; a union bound makes $m$ simultaneous estimates fail with probability at most the sum of their declared failure budgets. [given, F3, algebra] ∎
