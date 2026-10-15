---
id: post-qft-regulated-equilibrium-state
kind: postulate
domain: physics
library: physics
title: Adopted finite-regulator equilibrium state
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 6
deps:
  - post-qft-regulated-polynomial-model
  - def-qft-regulated-thermal-parameter
  - thm-qft-regulated-gibbs-trace
  - def-countable-choice
dependency_roles:
  post-qft-regulated-polynomial-model: formulation-prerequisite
  def-qft-regulated-thermal-parameter: formulation-prerequisite
  thm-qft-regulated-gibbs-trace: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "A canonical finite-temperature state for one fixed finite regulator with T>0 and finite Gibbs trace. No thermalization dynamics, empirical temperature measurement, infinite-volume trace, or zero-temperature limit is asserted."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted lecture notes, Chapter 1, §§1.3–1.3.1, canonical ensemble and density matrix"
      url: "https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html"
      locator: "Complete Chapter 1 HTML; canonical beta, density matrix, and partition function."
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §6.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Printed pp.163–169, trace-class operators and basis-independent trace."
---

## Postulate

Assume Countable Choice ([[def-countable-choice]]) for the finite-regulator
spectral and trace construction. For the fixed model of
[[post-qft-regulated-polynomial-model]] and a declared
temperature input $T>0$, use
[[def-qft-regulated-thermal-parameter]] to set
$\beta_{\rm phys}=(k_BT)^{-1}$ and
$\widehat\beta=E_*\beta_{\rm phys}>0$. Let $h$ be the model's specified
self-adjoint form realization and $H_{\rm phys}=E_*h$. When the finite-mode
coercivity hypotheses hold, [[thm-qft-regulated-gibbs-trace]] proves that
$\rho_\gamma$ is positive trace class with finite positive trace for every
dimensionless $\gamma>0$. Make its spectral construction explicit: let
$(\psi_k,\lambda_k)_{k\ge0}$ be the complete orthonormal eigenbasis and
repeated eigenvalues used in that supplier. For $f\in H_N$, define

$$G_\gamma f:=\sum_{k\ge0}e^{-\gamma\lambda_k}\langle f,\psi_k\rangle\psi_k.$$

The vector series converges in $H_N$ for every $f$, and this is the action of
the supplier's operator $\rho_\gamma$, obtained there as the operator-norm
limit of its finite-rank truncations. In this item the notation
$e^{-\gamma h}$ means this explicitly defined operator $G_\gamma$. Since
$H_{\rm phys}\psi_k=E_*\lambda_k\psi_k$, define
$e^{-\beta_{\rm phys}H_{\rm phys}}$ on $H_N$ by the corresponding series
$e^{-\beta_{\rm phys}H_{\rm phys}}f:=\sum_{k\ge0}e^{-\beta_{\rm phys}E_*\lambda_k}\langle f,\psi_k\rangle\psi_k$.
Since $\widehat\beta=E_*\beta_{\rm phys}$, its coefficients equal those of
$G_{\widehat\beta}$ term by term, and both series converge in $H_N$.
Therefore, as operators on $H_N$,
$e^{-\beta_{\rm phys}H_{\rm phys}}=G_{\widehat\beta}=e^{-\widehat\beta h}$.
The Gibbs-trace supplier consequently applies to exactly the operator in the
state assignment below. Adopt the normalized operator

$$\rho_T:=\frac{e^{-\beta_{\rm phys}H_{\rm phys}}}{Z_T}=\frac{e^{-\widehat\beta h}}{Z_T},\qquad Z_T:=\operatorname{Tr}(e^{-\beta_{\rm phys}H_{\rm phys}})=\operatorname{Tr}(e^{-\widehat\beta h})$$

as this finite-regulator model's canonical equilibrium state. This is a
physical state assignment, not a deduction that the dynamics reach
equilibrium. It asserts no infinite-volume trace, no zero-temperature state,
and no empirical observation.
