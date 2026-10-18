---
id: def-qa-37-resource-cost-model
kind: definition
title: "Anyon compiler resource ledger"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-qa-37-anyon-task-and-promise
  - def-qc-circuit-cost-model
  - def-qa-classical-bit-cost
  - def-qa-nonoracle-gate-cost
justified_by: []
axiom_use: "None; this is an explicit finite resource convention."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.C, physical implementation limitations, PDF pp. 58–63."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, PDF pp. 26–29."
---

## Definition

For a finite anyon solver instance and one run, record separately the tuple
$$\bigl(L_{\rm in},\ |b|,\ N_{\rm meas},\ b_{\max},\ t_{\rm cl},\ \epsilon_{\rm op},\epsilon_{\rm tr},\ell_{\rm leak},\ p_{\rm leak},\ N_{\rm phase},\ t_{\rm phase}\bigr).$$
Here $L_{\rm in}$ is the complete input-description bit length; $|b|$ is the
number of braid-generator occurrences (inverse generators count as one);
$N_{\rm meas}$ is the number of fusion measurements; $b_{\max}$ is the
largest unary precision query to a certified matrix name; $t_{\rm cl}$ is
the classical bit time used by search and postprocessing; $\epsilon_{\rm op}$
is a stated operator-norm approximation bound; $\epsilon_{\rm tr}$ is a
separately assumed in-band transport bound; $\ell_{\rm leak}$ and
$p_{\rm leak}$ are leakage amplitude and probability bounds; and
$N_{\rm phase},t_{\rm phase}$ count phase corrections and their classical
control cost. Circuit description and elementary wire costs follow
[[def-qc-circuit-cost-model]], while classical input bit cost follows
[[def-qa-classical-bit-cost]] and finite nonoracle gates follow
[[def-qa-nonoracle-gate-cost]]. An inapplicable coordinate is marked “not
applicable”; it is not assigned value zero. Unless an interface explicitly
states a bound, no braid length, matrix precision, measurement, search step,
or phase correction is free. The tuple is a bookkeeping convention; it does
not assert any of its error or runtime bounds.
