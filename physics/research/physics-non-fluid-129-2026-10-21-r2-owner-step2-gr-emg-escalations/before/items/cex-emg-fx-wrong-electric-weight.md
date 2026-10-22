---
id: cex-emg-fx-wrong-electric-weight
kind: counterexample
title: Unscaled electric vectors fail the transformed Gauss law
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - lem-emg-fx-conformal-constraints
dependency_roles:
  lem-emg-fx-conformal-constraints: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.A, equations (3.6)-(3.10), derives the divergence-preserving vector weight; this explicit counterexample tests the incorrect unscaled assignment."
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012), author preprint arXiv:gr-qc/0703035v1"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Section 6.3, equations (6.34)-(6.38), derives the conformal divergence formula for a contravariant vector; the failed field below is computed directly."
verification:
  precheck: pass
---

## Statement refuted

The assignment $E=\bar E$ always preserves the source-free electric divergence constraint under $h=\psi^4\bar h$.

## Statement refuted references

[[lem-emg-fx-conformal-constraints]]

## Facts & Assumptions

**Given:** The Euclidean manifold $\Sigma=\mathbb R^3$ with Cartesian coordinate $x$, seed metric $\bar h=\delta$, positive conformal factor $\psi=e^x$, and constant seed vector $\bar E=\partial_x$. Set $\bar B=B=0$ and use $h=\psi^4\delta$.

[F1] [[lem-emg-fx-conformal-constraints]]: the divergence-preserving geometric field is $E=\psi^{-6}\bar E$, and $D_iE^i=\psi^{-6}\bar D_i\bar E^i$.

## Counterexample

1.1 The seed vector $\bar E=\partial_x$ has Euclidean divergence $\bar D_i\bar E^i=\partial_x(1)=0$, so it satisfies the source-free seed Gauss condition. The function $\psi=e^x$ is smooth and positive on all of $\mathbb R^3$. [given, F1, algebra]

2.1 If instead one assigns the unscaled vector $E=\bar E$, then $\sqrt{\det h}=\psi^6=e^{6x}$ and the coordinate divergence formula gives $D_iE^i=(\sqrt{\det h})^{-1}\partial_i(\sqrt{\det h}\,E^i)=e^{-6x}\partial_x(e^{6x})=6$. Thus the claimed universal preservation fails: this smooth field violates $D_iE^i=0$ everywhere. [given, step 1.1, algebra]

3.1 The correct conformal field is $E=\psi^{-6}\bar E=e^{-6x}\partial_x$, for which step 1.1's seed identity gives $D_iE^i=e^{-6x}\bar D_i\bar E^i=0$. Hence the counterexample isolates the missing vector weight and uses no singular source at a removed point. [F1, step 1.1, step 2.1, algebra] ∎

