---
id: def-ale-toy-added-mass-recurrence
kind: definition
title: "Scalar added-mass staggered recurrence"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, §§5.2–5.7: one-degree-of-freedom interface models, mass-ratio dependence, and the limits of sequential partitioned convergence. The recurrence below is the narrower toy specified here."
---

## Definition

For positive scalars $m_s$ and $m_f$, call $m_s$ the structure mass and $m_f$ the fluid added mass in the **scalar toy added-mass recurrence**. Given a scalar initial velocity increment $\delta v_0$, define successive increments by

$$m_s\,\delta v_{n+1}=-m_f\,\delta v_n\qquad(n\ge0).$$

This is a stipulated one-mode sequential update used only to expose its amplification factor. It is not derived from, and makes no stability claim about, a general fluid-structure discretization.
