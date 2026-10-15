---
id: def-rpm-h-background-and-model-quantities
kind: definition
title: "Lorentz background, particle quantities and parameter units"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - def-rpm-h-cotangent-phase-space
  - def-rpm-spacetime-observer-and-worldline
physical_scope: "Classical spinless test-particle quantities on a prescribed smooth time-oriented Lorentzian four-manifold. Mass and c are primitive parameters of this model; no particle action, force law, backreaction, empirical result, or universal identification with another framework is included."
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
---

## Definition

Assume countable choice ACω, as in [[def-countable-choice]], for the smooth cotangent-bundle carrier convention used by this page; no full Axiom of Choice is assumed.

Fix a prescribed smooth time-oriented Lorentzian four-manifold $(M,g,T)$ with signature $(-+++)$, as in [[def-gr-smooth-lorentzian-objects]]. Here $T$ denotes the supplied smooth timelike field selecting the future cone, called $N$ in that geometric definition. Use the distinction among a spacetime, a worldline, a pointwise observer, an observer congruence, a tetrad and a chart given in [[def-rpm-spacetime-observer-and-worldline]]. This definition does not make $g$ dynamical.

In this relativistic-particle model, $m>0$ is a fixed **primitive mass parameter** measured in kilograms, and $c>0$ is a fixed **primitive conversion parameter** measured in metres per second. They are parameters of the adopted physical formulation, not quantities derived by this definition. Coordinates $x^a$ in an SI chart have length units; a cotangent vector $p=p_a\,dx^a$ has units of momentum, $\mathrm{kg\,m\,s^{-1}}$, when all four coordinates are in metres. The canonical one-form $p_a\,dx^a$ therefore has action units $\mathrm{J\,s}$. Along a future-directed timelike curve with tangent $V=dx/d\lambda$, set $s:=\sqrt{-g(V,V)}$; then $d\tau=s\,d\lambda/c$, independently of the increasing regular parameter. The length action $-mc\int s\,d\lambda$ has action units. For a future unit observer $n$ and future causal covector $p$, define the model normal-observer energy and spatial momentum covector by

$$E_n(p):=-c\,p(n),\qquad q_n(p):=p+p(n)n^\flat,$$

where $n^\flat=g(n,\cdot)$. The restriction of $g^{-1}$ to covectors annihilating $n$ is positive definite, so it supplies the norm of $q_n(p)$. These are quantity definitions and unit conventions; they do not identify canonical momentum with mechanical momentum, assert that an apparatus measured these values, or establish a dynamical law.
