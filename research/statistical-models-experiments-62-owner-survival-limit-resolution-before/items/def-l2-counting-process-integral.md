---
id: def-l2-counting-process-integral
kind: definition
title: "L² counting-process integral when the limit exists"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-elementary-predictable-counting-process-integral
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-axiom-of-choice
justified_by:
  - thm-l2-counting-process-integral-isometry
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.5, PDF p. 5"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
verification:
  precheck: n/a

---

## Definition

For the compensator contract on $[0,T]$, let $H$ be a predictable real
process with
$$\mathbb E\int_0^T H_s^2\,dA_s<\infty.$$
When the elementary integrals of a sequence of bounded predictable step
processes converging to $H$ in this norm converge in $L^2(P)$, denote the
resulting $L^2(P)$ class at time $t$ by
$$\int_0^t H_s\,dM_s.$$
The definition is conditional on existence of the limit. The L²-extension
theorem below proves existence for every such predictable $H$, independence
from the approximating sequence, the martingale property, and the isometry.
The Axiom of Choice is inherited through the conditional-expectation and
$L^2$-completion interfaces used by that theorem.

## Source notes

Bass describes the construction of the jump-martingale stochastic integral as
the $L^2$ completion of elementary predictable integrals. This local
definition states the domain through the actual compensator $A$ and leaves the
existence claim to the following theorem.
