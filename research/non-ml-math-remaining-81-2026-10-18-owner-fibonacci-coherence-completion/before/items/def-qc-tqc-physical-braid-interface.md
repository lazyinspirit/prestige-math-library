---
id: def-qc-tqc-physical-braid-interface
kind: definition
title: Physical braid implementation interface
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qa-36-finite-adiabatic-path-model
  - thm-qa-36-jrs-finite-adiabatic-bound
dependency_level: 0
axiom_use: None; the finite-dimensional path interface and its JRS error estimate use no choice principle.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11; physical implementation caveats in §IV, PDF pp. 58–63
    - title: "Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation"
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Theorem 3 and Lemmas 1–8, PDF pp. 5–12
---

## Definition

Let $V$ be a nonzero finite-dimensional complex inner-product space and let
$\rho:B_n\to U(V)$ be a fixed mathematical braid representation. A **physical
implementation record** for a braid $b\in B_n$ consists of all of the following
data and hypotheses:

1. a finite-dimensional physical state space identified with $V$ on a specified
   low-energy sector;
2. a $C^2$ path $H(s)$ of Hermitian endomorphisms, $0\le s\le1$, and a
   norm-continuous constant-rank orthogonal spectral projection $P(s)$ that
   selects the followed band and is separated from its complement by a
   uniform positive full gap;
3. an explicit initial preparation isometry into $\operatorname{ran}P(0)$ and
   a stated slow-time schedule $T>0;$
4. a separate identification of the band's transported action for the chosen
   exchange path with $\rho(b)$, up to a stated scalar phase.

The first three clauses form an instance of the finite adiabatic path model
[[def-qa-36-finite-adiabatic-path-model]]. Under those hypotheses,
[[thm-qa-36-jrs-finite-adiabatic-bound]] bounds the deviation from ideal
adiabatic band following. That estimate does not establish that a material
realizes the fusion category, that the exchange path has the prescribed
holonomy, or that the initial state can be prepared at no cost. Locality,
temperature, quasiparticle separation, stray excitations, and tunnelling
require their own physical error model.
