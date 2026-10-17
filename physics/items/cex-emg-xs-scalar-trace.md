---
id: cex-emg-xs-scalar-trace
kind: counterexample
title: Zero scalar curvature does not imply vacuum Ricci
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - lem-emg-xs-rn-tensor-identities
dependency_roles:
  lem-emg-xs-rn-tensor-identities: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): RN field and charge parameters"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN field and exact Einstein-Maxwell verification"
physical_scope: null
---


## Statement refuted

For every four-dimensional Lorentzian metric, scalar curvature $S=0$ implies
$\operatorname{Ric}=0$.

## Counterexample instance

Let $\ell>0$, set $M=0$, $q_e=\ell$, $q_m=0$, and choose the RN datum on a
small open interval about $r=2\ell$. Then $f=1+\ell^2/r^2$ is positive there,
so the metric is smooth Lorentzian and nondegenerate.

## Facts & Assumptions

**Given:** The RN metric and curvature formulas for $r>0$ and $f\ne0$.

[F1] [[lem-emg-xs-rn-tensor-identities]]: $S=0$ and
$\operatorname{Ric}_{22}=Q^2/r^2$ for the dyonic RN datum.

[A1] $\ell>0$, $M=0$, $q_e=\ell$, $q_m=0$, and $r=2\ell$ lies in the selected
positive-radius interval.

## Verification


1.1 At $r=2\ell$, $Q^2=\ell^2$ and $\operatorname{Ric}_{22}=Q^2/r^2=1/4\ne0$, while [F1] gives $S=0$. By continuity the same nonvanishing holds on a sufficiently small open neighborhood of that radius. [A1, F1, algebra]

2.1 The hypotheses of the refuted statement hold on this smooth RN chart but its conclusion fails because the displayed Ricci component is nonzero. Hence the universal implication is false. [F1, step 1.1, algebra] ∎

