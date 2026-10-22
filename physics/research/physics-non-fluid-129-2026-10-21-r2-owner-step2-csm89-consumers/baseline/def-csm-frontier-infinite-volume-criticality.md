---
id: def-csm-frontier-infinite-volume-criticality
kind: definition
title: Infinite-volume nonanalytic-pressure criticality
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-natural-logarithm
dependency_roles:
  def-natural-logarithm: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §1.2.3, printed pp. 16–20, on analytic finite-volume functions and possible thermodynamic-limit singularities; §§2.2.3–2.2.4 on diverging correlation length and critical scaling.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, §3.10, printed pp. 118–121, on finite-volume analyticity and failure of analyticity in the thermodynamic limit.
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: §V.F, printed pp. 55–56 / PDF pp. 54–55, on thermodynamic limits of free-energy functions; §§V.D–V.E on canonical phase-transition qualifications.
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open interval of values of a scalar control parameter $\theta$, expressed in one fixed unit if it is dimensional. Let $(N_n)_{n\ge1}$ be positive integers with $N_n\to\infty$, interpreted as finite system sizes such as site counts. A finite-volume partition-function sequence on $I$ is a sequence of real-analytic functions $Z_n:I\to(0,\infty)$. For each $n$, define its dimensionless log partition density per site by $p_n(\theta):=N_n^{-1}\log Z_n(\theta)$, where $\log$ is the natural logarithm. If the pointwise limit $p(\theta):=\lim_{n\to\infty}p_n(\theta)$ exists as a finite real number for every $\theta\in I$, call $p$ the infinite-volume pressure associated with this sequence. A point $\theta_c\in I$ is critical under the nonanalytic-pressure criterion exactly when there do not exist $\epsilon>0$ with $(\theta_c-\epsilon,\theta_c+\epsilon)\subseteq I$ and real coefficients $(a_k)_{k\ge0}$ such that $p(\theta)=\sum_{k=0}^{\infty}a_k(\theta-\theta_c)^k$ throughout that interval. Finite-volume analyticity and a finite-size maximum of a derivative do not, by themselves, establish criticality under this definition.

This is one precise thermodynamic criticality criterion; it makes no claim that a particular interacting model satisfies it. A divergent correlation length is a separate criterion and is not identified with pressure nonanalyticity without an additional theorem.

## Definition references

[[def-natural-logarithm]]
