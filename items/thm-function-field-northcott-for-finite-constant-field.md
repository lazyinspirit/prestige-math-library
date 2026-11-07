---
id: thm-function-field-northcott-for-finite-constant-field
kind: theorem
title: "Northcott finiteness for zero canonical height over a finite constant field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-vector-valued-height-over-finitely-generated-field
  - def-polarized-endomorphism-of-projective-variety
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexander Carney, Heights and arithmetic dynamics over finitely generated fields"
      url: "https://arxiv.org/pdf/2010.07200v1"
      locator: "§5.2, Theorem 5.10 and Corollary 5.11"
---

## Statement

Let $k=\mathbb F_q$ be a finite field, let $K/k$ be a finitely generated extension, let $X/K$ be projective, and let $(X,f,L,d)$ be a polarized dynamical system. For every integer $D\ge1$, the set
$$
\{P\in X(\overline K): h_f^{\mathrm{vec}}(P)\equiv0,\ [K(P):K]\le D\}
$$
is finite. Consequently, for every algebraic point $P\in X(\overline K)$, $h_f^{\mathrm{vec}}(P)\equiv0$ if and only if its forward orbit under $f$ is finite; such a point is called preperiodic.

## Statement references

[[def-vector-valued-height-over-finitely-generated-field]]

[[def-polarized-endomorphism-of-projective-variety]]

## Facts & Assumptions

**Given:** A finite constant field $k=\mathbb F_q$, a finitely generated extension $K/k$, a projective $X/K$, and a polarization $(f,L,d)$.

[F1] $h_f^{\mathrm{vec}}$ is the vector-valued canonical height, and $h_f^{\mathrm{vec}}(P)\equiv0$ denotes numerical triviality in the completed integrable Picard group. ([[def-vector-valued-height-over-finitely-generated-field]])

## Remaining local proof obligations

Carney's Theorem 5.10 proves this using a model height, the finiteness theorem for limited sets from Chatzidakis–Hrushovski, and the implication that a dense limited set forces a positive-dimensional constructibly isotrivial periodic subsystem. Those model-theoretic and vector-valued Northcott arguments are not locally supplied. The bounded-degree finiteness statement therefore remains escalated.
