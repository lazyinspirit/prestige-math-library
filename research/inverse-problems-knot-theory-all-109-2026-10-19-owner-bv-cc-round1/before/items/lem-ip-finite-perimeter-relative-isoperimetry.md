---
id: lem-ip-finite-perimeter-relative-isoperimetry
kind: lemma
title: Relative isoperimetric inequality on bounded connected Lipschitz domains
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-compactness-lower-semicontinuity
  - lem-ip-bv-extension-and-translation
  - lem-ip-bv-sobolev-inequality
  - lem-ip-bv-zero-gradient-constant-on-connected-domain
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
---

## Statement

Assume Countable Choice, let $n\ge2$, and let $\Omega\subseteq\mathbb R^n$ be a bounded connected Lipschitz domain (a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph, and not separable into two disjoint nonempty relatively open subsets). There is a constant $C_\Omega<\infty$ such that every measurable $E\subseteq\Omega$ with $\chi_E\in BV(\Omega)$ satisfies $$\min\{|E|,|\Omega\setminus E|\}^{(n-1)/n}\le C_\Omega P(E;\Omega).$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|Finite perimeter relative to an open set.]]

[[lem-ip-bv-sobolev-inequality|The full-space BV Sobolev inequality.]]

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, a bounded connected Lipschitz domain $\Omega$, and a finite-perimeter set $E\subseteq\Omega$.

[F1] Zero extension has a BV bound controlled by interior variation and the $L^1$ norm, but its trace proof is unresolved. ([[lem-ip-bv-extension-and-translation]])

[F2] Bounded BV families on $\Omega$ are compact in $L^1$ under the assigned interface, but that supplier's axiom and trace obligations remain unresolved. ([[lem-ip-bv-compactness-lower-semicontinuity]])

[F3] A zero distributional gradient on a connected open domain forces an almost-everywhere constant under Countable Choice. ([[lem-ip-bv-zero-gradient-constant-on-connected-domain]])

[F4] The full-space BV Sobolev inequality holds under Countable Choice. ([[lem-ip-bv-sobolev-inequality]])

## Escalation

The proposed proof separates small and intermediate volumes. For $m:=\min(|E|,|\Omega\setminus E|)$, apply [F4] to the zero extension of the smaller side and use [F1] to obtain $m^{(n-1)/n}\le C_\Omega(m+P(E;\Omega))$; for sufficiently small $m$, absorb the $m$ term. If $m$ is bounded below, a sequence with perimeter tending to zero would have an $L^1$-convergent subsequence by [F2]; lower semicontinuity and [F3] would force its indicator limit to be constant, contradicting the volume bounds. This route is conditional on the unresolved trace/compactness suppliers [F1]–[F2]. The current compactness route also invokes a theorem whose published hypothesis includes Dependent Choice, while this assigned statement assumes Countable Choice. No proof contract or readiness decision is supplied for this item.
