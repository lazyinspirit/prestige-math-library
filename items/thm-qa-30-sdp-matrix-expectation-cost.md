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
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-qc-dirac-notation-conversion
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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

Let $M=M^*$ with $\|M\|\le1$, and let the coherent signed sampler from [[alg-qa-30-sdp-matrix-expectation-oracle]] be supplied. For additive tolerance $0<\tau\le2$ and failure $0<\delta<1$, supply rational $\tau/2<t\le\tau$ and $\delta/2<\beta\le\delta$, and run that procedure at inputs $(t,\beta)$. The QA29 estimator returns an estimate of $\operatorname{tr}(M\rho)$ within $\tau$ with probability at least $1-\delta$ in either declared QA13 access mode. In repeated controlled-$Q$ access it uses $O(\tau^{-1}(1+\ln(1/\delta)))$ coherent sampler/reflection rounds; in supplied controlled-power access sum the separately declared power-query costs. When the supplied purification is itself an approximate Gibbs purification at vector error $\xi\le\tau/4$, the expectation bias is at most $2\xi$; use its rational sampling tolerance $t/2\le\tau/2$ to keep total error at most $\tau$. In an SDP iteration, use a union bound across all $m$ observables and charge each Gibbs preparation/inverse, observable access, controlled call, and state/phase implementation.

## Facts & Assumptions

**Given:** The signed variable lies in $[-1,1]$, QA29's expectation guarantee, and the purification error bound. The sampler/reflection-round bound uses repeated controlled-$Q$ access; the accuracy and bias assertions permit either declared access mode.

[F1] [[alg-qa-30-sdp-matrix-expectation-oracle]]: the encoded variable has mean $\operatorname{tr}(M\rho)$ and range $[-1,1]$.

[F2] [[thm-qa-29-quantum-expectation-error-cost]]: for an encoded variable in $[a,b]$, error $\epsilon$ and failure $\delta$, the median estimator has error $\epsilon$ with probability $1-\delta$ in either mode and query order $(b-a)\epsilon^{-1}(1+\ln(1/\delta))$ in repeated controlled-$Q$ access. Supplied controlled-power access instead charges its actual power queries separately.

[F3] [[thm-qa-30-sdp-gibbs-state-error-cost]]: vector error $\xi\le\tau/4$ bounds the conditional purification deviation.

[F4] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle u,v\rangle|\le\|u\|\,\|v\|$ in finite-dimensional complex inner-product spaces.

[F5] [[def-qc-dirac-notation-conversion]] identifies Dirac pairings with the root inner product; [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] gives $\|Mu\|\le\|M\|\,\|u\|$.

## Proof

**Proof technique:** direct.

1.1 Apply [F2] to the interval $[-1,1]$ with rational tolerance $t/2$ and rational failure budget $\beta$; its interval width is $2$, so it returns the approximate-purification mean estimate within $t/2\le\tau/2$ with probability at least $1-\beta\ge1-\delta$ and, in repeated controlled-$Q$ access, uses $O(\tau^{-1}(1+\ln(1/\delta)))$ coherent rounds, since $t>\tau/2$ and $\beta>\delta/2$. In supplied-power access the same accuracy holds with the separately priced power-query implementation in [F2]. [given, F1, F2, algebra]

2.1 For unit vectors $|u\rangle,|v\rangle$ and a contraction $M$, expand $\langle u|M|u\rangle_D-\langle v|M|v\rangle_D=\langle u-v|M|u\rangle_D+\langle v|M|u-v\rangle_D$. Cauchy–Schwarz [F4], the Dirac conversion and operator norm [F5], and unit norms bound its absolute value by $2\|u-v\|\|M\|\le2\xi$. Thus the chosen rational tolerance gives total error at most $t/2+2\xi\le\tau$ when the target is the ideal Gibbs mean; a union bound makes $m$ simultaneous estimates fail with probability at most the sum of their declared failure budgets. [given, F3, F4, F5, algebra] ∎
