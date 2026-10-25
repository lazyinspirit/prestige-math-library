---
id: def-time-dependent-hamiltonian-vector-field-and-flow
kind: definition
title: Time-dependent Hamiltonian vector field and flow
status: published
origin: pipeline
deps: ["def-countable-choice", "def-time-dependent-vector-field-and-evolution-operator", "thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §5.1, Definition 5.1 and Moser-flow discussion, pp. 56--58
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$, let $(M,\omega)$ be a symplectic manifold, and
let $I\subseteq\mathbb R$ be an interval. A smooth function
$H:I\times M\to\mathbb R$ determines the **time-dependent Hamiltonian vector
field** $X_{H_t}$ by

$$\iota_{X_{H_t}}\omega=d(H_t).$$

Its **Hamiltonian evolution** is the two-time local evolution
$\Phi_{t,s}$ satisfying
$\partial_t\Phi_{t,s}=X_{H_t}\circ\Phi_{t,s}$ and
$\Phi_{s,s}=\operatorname{id}$, wherever it exists. Neither this definition
nor pointwise existence of $X_{H_t}$ asserts completeness of the evolution.
