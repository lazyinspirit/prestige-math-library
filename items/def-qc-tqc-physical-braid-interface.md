---
id: def-qc-tqc-physical-braid-interface
kind: definition
title: Physical braid implementation interface
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qa-36-finite-adiabatic-path-model
  - thm-qa-36-jrs-finite-adiabatic-bound
dependency_level: 0
axiom_use: None; the finite-dimensional path interface and its JRS error estimate use no choice principle.
provenance:
  statement: ai-altered
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

1. a finite-dimensional physical Hilbert space $\mathcal H_{\mathrm{phys}}$;
2. a $C^2$ path $H(s):\mathcal H_{\mathrm{phys}}\to\mathcal H_{\mathrm{phys}}$ of
   Hermitian endomorphisms, $0\le s\le1$, and a norm-continuous constant-rank
   orthogonal spectral projection $P(s)$ of rank $m=\dim V$ that is a
   coherently followed band in the sense of
   [[def-qa-36-finite-adiabatic-path-model]], including its local-contour
   continuation, and is separated from its complement by a uniform positive
   full gap. The initial low-energy sector is $\operatorname{ran}P(0)$;
3. a unitary identification $\iota_0:V\to\operatorname{ran}P(0)$, an explicit
   preparation isometry $A_0:\mathbb C^m\to\mathcal H_{\mathrm{phys}}$ with
   image exactly $\operatorname{ran}P(0)$, its declared preparation cost, and
   a stated slow-time schedule $T>0$;
4. a unitary final-band identification $\iota_1:V\to\operatorname{ran}P(1)$ and
   a separate identification of the band's transported action along the chosen
   exchange path, using $\iota_0$ and $\iota_1$, with $\rho(b)$ up to a stated
   scalar phase.

The first three clauses form an instance of the finite adiabatic path model
[[def-qa-36-finite-adiabatic-path-model]] on $\mathcal H_{\mathrm{phys}}$.
Under those hypotheses,
[[thm-qa-36-jrs-finite-adiabatic-bound]] bounds the deviation from ideal
adiabatic band following. That estimate does not establish that a material
realizes the fusion category, that the exchange path has the prescribed
holonomy, or that the initial state can be prepared at no cost. Locality,
temperature, quasiparticle separation, stray excitations, and tunnelling
require their own physical error model.
