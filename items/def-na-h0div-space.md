---
id: def-na-h0div-space
kind: definition
title: Zero-normal-trace H(div) space
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [lem-na-hdiv-weak-normal-trace, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1.1, equation (2.1.21), zero-normal-trace subspace of H(div)."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.1 normal-facet flux convention used for the zero-normal finite element subspace."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice for the Sobolev and weak normal trace interfaces. For an open set $D\subseteq\mathbb R^d$, let $T_D=H^1(D)/H^1_0(D)$ be the trace quotient of [[lem-na-hdiv-weak-normal-trace]], and let $\gamma_n:H(\operatorname{div};D)\to T_D'$ be its weak normal trace. Define
$$
H_0(\operatorname{div};D):=\{v\in H(\operatorname{div};D):\gamma_n v=0\text{ in }T_D'\}.
$$
Thus zero normal trace means that the Green-duality functional vanishes on every H1 trace class; no pointwise normal value is required.
