---
id: def-elementary-predictable-counting-process-integral
kind: definition
title: "Elementary predictable integral against a counting-process martingale"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-continuous-time-adapted-process-and-martingale
  - def-progressively-measurable-and-predictable-process
  - def-axiom-of-choice
justified_by:
  - lem-elementary-counting-process-integral-isometry
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 10: Combining Martingales, Stochastic Integrals, and Applications, PDF pp. 4–5"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale3.pdf"
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.5, PDF p. 5"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15

---

## Definition

Let $M$ be a square-integrable martingale on a finite horizon $[0,T]$ in the
all-pairs convention of
[[def-continuous-time-adapted-process-and-martingale]] (in particular, it may
be the compensated counting-process martingale of
[[def-counting-process-intensity-and-compensator-contract]]). Let
$$0=t_0<t_1<\cdots<t_m=T$$
be a deterministic partition, and let each bounded random variable $H_j$ be
$\mathcal F_{t_j}$-measurable. The associated **bounded predictable step
integrand** is $H_0=0$ at time $0$ and $H_s=H_j$ on $(t_j,t_{j+1}]$. For this
chosen step representation define, for $0\le t\le T$,
$$I_t(H):=\sum_{j=0}^{m-1}H_j\bigl(M_{t\wedge t_{j+1}}-M_{t\wedge t_j}\bigr).$$
This is a finite sum of square-integrable random variables. At this stage the
representation is part of the input; representation independence and the
isometry are established in
[[lem-elementary-counting-process-integral-isometry]].
The Axiom of Choice is inherited from the all-pairs martingale and
conditional-expectation interface; the finite-sum definition makes no
additional choice.

## Source notes

The displayed finite-sum convention agrees with Tian's bounded predictable
step-integral construction and Bass's construction for jump martingales. The
local martingale and isometry properties are proved separately below.
