---
id: def-tangent-space
kind: definition
title: Closed tangent space
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-tangent-set
  - def-mean-zero-square-integrable-space
  - def-countable-choice
  - thm-mean-zero-square-integrable-space-is-hilbert
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) so that $L^2_0(P)$ is the real Hilbert space established by [[thm-mean-zero-square-integrable-space-is-hilbert]]. For a tangent set $\dot{\mathcal M}(P)\subseteq L^2_0(P)$, its **linear span** is the set of all finite real linear combinations of elements of $\dot{\mathcal M}(P)$; the span of the empty set is $\{0\}$. Its **tangent space** $\mathcal T(P)$ is the closure of that span in the $L^2(P)$ norm. The closure consists of limits of sequences from the span, equivalently of points every positive-radius norm ball around which meets the span.

The tangent set itself is retained separately and may be a cone rather than a vector space.
