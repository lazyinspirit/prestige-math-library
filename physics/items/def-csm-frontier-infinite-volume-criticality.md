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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §1.2.1, printed pp. 12–13, on finite-volume partition-function analyticity and the possibility of thermodynamic-limit singularities; §§2.2.3–2.2.4, printed pp. 46–50, on correlation length and critical scaling.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 1, §1.5, printed pp. 47–48, on finite-volume real analyticity and singular behavior arising only after the thermodynamic limit.
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: §V.F, printed pp. 55–56 / PDF pp. 54–55, on thermodynamic limits of free-energy functions; §§V.D–V.E on canonical phase-transition qualifications.
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open interval of values of a scalar control parameter $\theta$, expressed in one fixed unit if it is dimensional. A function $g:I\to\mathbb R$ is **real analytic** if for every $\theta_0\in I$ there are $\epsilon>0$ and real coefficients $(a_k)_{k\ge0}$ such that $(\theta_0-\epsilon,\theta_0+\epsilon)\subseteq I$, the series $\sum_{k=0}^{\infty}a_k(\theta-\theta_0)^k$ converges there, and its sum equals $g(\theta)$ throughout that interval. Let $(N_n)_{n\ge1}$ be positive integers with $N_n\to\infty$, interpreted as finite system sizes such as site counts. A finite-volume partition-function sequence on $I$ is a sequence of real-analytic functions $Z_n:I\to(0,\infty)$. For each $n$, define its dimensionless log partition density per site by $p_n(\theta):=N_n^{-1}\log Z_n(\theta)$, where $\log$ is the natural logarithm. If the pointwise limit $p(\theta):=\lim_{n\to\infty}p_n(\theta)$ exists as a finite real number for every $\theta\in I$, call $p$ the infinite-volume pressure associated with this sequence. A point $\theta_c\in I$ is critical under the nonanalytic-pressure criterion exactly when there do not exist $\epsilon>0$ with $(\theta_c-\epsilon,\theta_c+\epsilon)\subseteq I$ and real coefficients $(a_k)_{k\ge0}$ such that $\sum_{k=0}^{\infty}a_k(\theta-\theta_c)^k$ converges and equals $p(\theta)$ throughout that interval.

This definition specifies only the nonanalytic-pressure criterion and makes no claim that a particular model satisfies it.

## Definition references

[[def-natural-logarithm]]
