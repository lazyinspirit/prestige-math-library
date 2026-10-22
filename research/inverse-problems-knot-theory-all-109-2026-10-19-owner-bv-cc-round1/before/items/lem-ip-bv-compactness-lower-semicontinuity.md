---
id: lem-ip-bv-compactness-lower-semicontinuity
kind: lemma
title: Compactness and lower semicontinuity for bounded-domain BV
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic
  - lem-ip-bv-extension-and-translation
  - lem-ip-bv-test-field-characterization-and-lsc
  - thm-frechet-kolmogorov-compactness-criterion-in-lp
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

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by Lipschitz graph neighborhoods with $\Omega$ on one side of each graph. Total variation is lower semicontinuous under $L^1(\Omega)$ convergence of BV functions. Every sequence $(u_k)\subset BV(\Omega)$ satisfying $$\sup_k\bigl(\|u_k\|_{L^1(\Omega)}+TV(u_k;\Omega)\bigr)<\infty$$ has a subsequence converging in $L^1(\Omega)$ to a function in $BV(\Omega)$.

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The spatial BV and total-variation definitions.]]

[[lem-ip-bv-extension-and-translation|A bounded zero extension and the BV translation estimate.]]

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain $\Omega$, and a sequence bounded in the BV norm.

[F1] Zero extensions have common bounded support and uniformly bounded BV norms, and translations obey the linear BV estimate. This supplier's trace dependency is unresolved. ([[lem-ip-bv-extension-and-translation]])

[F2] The Fréchet–Kolmogorov criterion gives subsequential compactness from boundedness, tight tails, and uniform translation continuity in $L^1(\mathbb R^n)$; its current library statement assumes both Countable and Dependent Choice. ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]])

[F3] The test-field characterization gives lower semicontinuity for BV limits without a choice axiom. ([[lem-ip-bv-test-field-characterization-and-lsc]])

## Escalation

The usual zero-extension/translation/Fréchet–Kolmogorov proof supplies the compactness route, and Terra Theorem 7.49 gives the bounded Lipschitz-domain result (printed pp. 268–269). Two obligations remain open for the assigned interface: the zero-extension supplier [F1] still depends on the unproved trace theorem, and the available Fréchet–Kolmogorov supplier [F2] assumes Dependent Choice whereas this statement is currently only Countable Choice. Either prove the required compactness implication under Countable Choice or reconcile the axiom strength with the owner. The lower-semicontinuity clause is already supplied by [F3]. No proof contract or readiness decision is supplied for this item.
