---
id: lem-ip-bv-coarea-formula
kind: lemma
title: Coarea formula for spatial BV
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-ip-bv-strict-approximation
  - lem-ip-bv-smooth-coarea
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
    - title: "BV Functions minicourse, Oxford Mathematical Institute, Version 3.0"
      url: "https://www.maths.ox.ac.uk/system/files/attachments/BV_minicourse_Slides_Version3_0.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let $u\in BV(\Omega)$, and for $t>0$ set $E_t^+:=\{x\in\Omega:u(x)>t\}$ while for $t<0$ set $E_t^-:=\{x\in\Omega:u(x)<t\}$. Then for almost every applicable $t$ these sets have finite perimeter relative to $\Omega$, and $$TV(u;\Omega)=\int_0^\infty P(E_t^+;\Omega)\,dt+\int_{-\infty}^0P(E_t^-;\Omega)\,dt.$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The spatial BV and relative-perimeter definitions.]]

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, and $u\in BV(\Omega)$.

[A1] Countable Choice is the assigned axiom strength for this item. ([[def-countable-choice]])

[F1] Strict smooth approximation and the smooth-level coarea calculation are available under Countable Choice. ([[lem-ip-bv-strict-approximation]], [[lem-ip-bv-smooth-coarea]])

[F2] The existing finite-test-supremum representation theorem converts finite distributional variation of an arbitrary $L^1$ limit into a finite Radon derivative under Dependent Choice. ([[lem-ip-bv-test-field-characterization-and-lsc]], [[def-dependent-choice]])

## Escalation

The Oxford BV minicourse (pp. 39–43) gives a complete classical proof by strict approximation, convergence of level indicators, lower semicontinuity of perimeter, Fatou, and signed layer cake; Terra §7.3 and Rybka §1.1 provide independent statements and context, while Rybka's proof is only a sketch. The unresolved local axiom obligation is the passage from finite liminf perimeter of approximating level sets to finite perimeter of the limiting level set under the assigned Countable Choice hypothesis. The currently available finite-test-supremum representation supplier [F2] assumes Dependent Choice for that implication. Supply a complete Countable-Choice-only representation/lower-semicontinuity argument for the level indicators, or reconcile the axiom strength with the owner. The statement remains at the assigned Countable Choice strength; no proof contract or readiness decision is supplied.
