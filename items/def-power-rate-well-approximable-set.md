---
id: def-power-rate-well-approximable-set
kind: definition
title: "Power-rate well-approximable set on the unit interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-rational-approximation-limsup-set
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §3.2"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
---

## Definition

For $\tau>0$, the power-rate well-approximable set is

$$W(\tau):=\left\{x\in[0,1]:\left|x-\frac aq\right|\le q^{-(\tau+1)}\text{ for infinitely many }q\in\mathbb N\text{ and some }a\in\{0,1,\ldots,q\}\right\}.$$

The denominator $q$ is positive, numerators lie in $\{0,\ldots,q\}$ and approximants are not required to be reduced. This is the rational-approximation limsup set for $\psi(q)=q^{-\tau}$ under the closed-interval and numerator convention in the preceding definition.

## Definition references

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §3.2](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)
