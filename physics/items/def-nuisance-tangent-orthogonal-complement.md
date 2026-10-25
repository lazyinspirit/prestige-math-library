---
id: def-nuisance-tangent-orthogonal-complement
kind: definition
title: Orthogonal complement of a nuisance tangent space
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps:
  - def-nuisance-tangent-space
  - def-mean-zero-square-integrable-space
  - def-countable-choice
  - thm-mean-zero-square-integrable-space-is-hilbert
  - def-orthogonality-and-orthogonal-complement
  - lem-orthogonal-complement-is-closed
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

Assume Countable Choice ([[def-countable-choice]]), so that $L^2_0(P)$ is the real Hilbert space of [[thm-mean-zero-square-integrable-space-is-hilbert]]. The **orthogonal complement of the nuisance tangent space within $L^2_0(P)$** is

$$\mathcal T_\eta(P)^\perp:=\{h\in L^2_0(P):\langle h,g\rangle_P=0\text{ for every }g\in\mathcal T_\eta(P)\},\qquad \langle h,g\rangle_P:=P(hg).$$

This is the ordinary orthogonal complement from [[def-orthogonality-and-orthogonal-complement]] applied in the mean-zero Hilbert space, not in all of $L^2(P)$. It is a closed linear subspace by [[lem-orthogonal-complement-is-closed]].
