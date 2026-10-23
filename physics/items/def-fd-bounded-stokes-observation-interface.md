---
id: def-fd-bounded-stokes-observation-interface
kind: definition
title: "Bounded Stokes pressure sensors"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
dependency_roles:
  def-na-stokes-zero-mean-pressure-and-velocity-spaces: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53 — Stokes Equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1 and 53.2.1: weak Stokes formulation and zero-mean pressure gauge."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§8.2.1, pp. 462–463: mixed Stokes formulation and pressure modulo constants."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Definition

Assume Countable Choice. Let $d\in\{2,3\}$ and let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz open set. Put $Q:=L^2_0(D)=\{q\in L^2(D;\mathbb R):\int_Dq\,dx=0\}$ with the $L^2$ norm, and write $Q'$ for the continuous real dual of $Q$. A bounded Stokes pressure sensor on $D$ is a bounded real-linear functional $S:Q\to\mathbb R$, where bounded means that its operator norm $\|S\|_{Q'}:=\sup_{\|q\|_{L^2(D)}\le1}|S(q)|$ is finite. The reading of $S$ at a normalized pressure $q\in Q$ is $S(q)$.

## Definition references

[Guermond, MATH 661, Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), §§53.1 and 53.2.1, weak Stokes formulation and zero-mean pressure gauge.

[Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications*](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), §8.2.1, pp. 462–463, mixed formulation and pressure modulo constants.

The normalized pressure-space convention $Q=L^2_0(D)$ is supplied by [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], under Countable Choice.
