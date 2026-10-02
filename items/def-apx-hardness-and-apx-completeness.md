---
id: def-apx-hardness-and-apx-completeness
kind: definition
title: "APX-hardness and APX-completeness under L-reductions"
status: draft
origin: pipeline
deps:
  - def-ptas-fptas-and-apx
  - def-l-reduction
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §16.2 Definition 16.4 and Theorems 16.5–16.6, printed pp. 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Under the explicitly selected L-reduction convention of
[[def-l-reduction]], an optimization problem $\Gamma$ in the finite-instance
model is **APX-hard** when every problem $\Pi$ in the locally defined class APX
has an L-reduction to $\Gamma$. The problem $\Gamma$ is **APX-complete** under
this convention when it is APX-hard and also belongs to APX.

The class APX here is the one fixed in [[def-ptas-fptas-and-apx]]: problems in
the finite-instance model of
[[def-optimization-problem-and-approximation-ratio]] that admit one
polynomial-time fixed-factor approximation in their objective direction. Thus
APX-hardness quantifies over every such source problem, with the reduction maps
and constants of [[def-l-reduction]], and APX-completeness adds membership of
the target in that class. The reduction notion is part of this definition: this
page explicitly chooses L-reductions and does not claim that all of the
literature uses the same convention for APX-hardness or APX-completeness.

No concrete target is certified APX-hard or APX-complete here. In particular a
PCP constant-gap or no-PTAS result, such as the consequences proved on this
page for Max-3SAT and maximum independent set, establishes no APX-hardness or
APX-completeness under this definition; those self-contained no-PTAS arguments
do not exhibit L-reductions from all APX problems. The composition and transfer
properties of this reduction notion are established separately in
[[lem-l-reductions-transfer-apx-hardness]].
