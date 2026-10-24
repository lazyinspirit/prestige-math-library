---
id: def-na-fortin-operator
kind: definition
title: "Fortin operator for a discrete constraint"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [ "def-na-stokes-zero-mean-pressure-and-velocity-spaces" ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification: { precheck: n/a , judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
---

## Definition

Let $V,Q,b$ be as in [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], and let $V_h\subset V$, $Q_h\subset Q$ be finite-dimensional subspaces. A **Fortin operator** is a bounded linear map $\Pi_h:V\to V_h$ for which there is a constant $C_F$ such that
$$\|\Pi_hv\|_V\le C_F\|v\|_V\quad(v\in V),\qquad b(\Pi_hv,q_h)=b(v,q_h)\quad(v\in V,\ q_h\in Q_h).$$
The second condition is exact constraint preservation. It does not assert $\operatorname{div}\Pi_hv=\operatorname{div}v$ pointwise.
