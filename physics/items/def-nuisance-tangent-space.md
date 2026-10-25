---
id: def-nuisance-tangent-space
kind: definition
title: Nuisance tangent space
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-countable-choice
  - def-tangent-set
  - def-tangent-space
  - thm-tangent-space-is-closed-linear-subspace
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Definition

Assume Countable Choice ([[def-countable-choice]]), as required by the ambient Hilbert-space and tangent-space conventions. Let $\mathcal M$ be a model through $P$, let $\psi:\mathcal M\to\mathbb R^k$ be a specified finite-dimensional parameter-of-interest functional, and let the model designate its nuisance submodels. A **nuisance submodel** is a designated allowed DQM path $t\mapsto P_t$ through $P$ for which the right derivative $\lim_{t\downarrow0}(\psi(P_t)-\psi(P))/t$ exists and is the zero vector in $\mathbb R^k$. Its score belongs to the tangent set $\dot{\mathcal M}(P)$ ([[def-tangent-set]]).

The **nuisance tangent space** $\mathcal T_\eta(P)$ is the norm closure in $L^2_0(P)$ of the finite real linear span of scores of nuisance submodels. It is a closed linear subspace by [[def-tangent-space]] and [[thm-tangent-space-is-closed-linear-subspace]]. The designated nuisance submodels are part of the model specification; this definition does not assert that every path with zero first-order target derivative is nuisance unless the model designates it as such.
