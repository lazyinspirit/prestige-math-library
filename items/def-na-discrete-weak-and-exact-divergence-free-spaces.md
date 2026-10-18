---
id: def-na-discrete-weak-and-exact-divergence-free-spaces
kind: definition
title: "Weak and pointwise divergence-free discrete velocities"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    "def-na-stokes-zero-mean-pressure-and-velocity-spaces",
    "def-na-mini-element-p1-bubble-p1-spaces"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation
        and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2,
        8.5.5, 8.6.1, 8.7.1 and 8.10."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

For the conforming mini-element spaces $V_h,Q_h$, define the **weak discrete divergence kernel** by
$$Z_h:=\{v_h\in V_h:b(v_h,q_h)=0\text{ for every }q_h\in Q_h\},$$
and the **exact discrete divergence kernel** by
$$Z_h^0:=\{v_h\in V_h:\operatorname{div}v_h=0\text{ almost everywhere on }D\}.$$
Since $b(v_h,q_h)=-\int_Dq_h\operatorname{div}v_h$, one has $Z_h^0\subseteq Z_h$. Equality is not part of either definition; the companion example proves strictness for a concrete mesh.
