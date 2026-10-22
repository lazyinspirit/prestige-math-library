---
id: def-nrqmx-periodic-ring-domain
kind: definition
domain: mathematics
library: physics
title: Periodic Sobolev domain for a circle
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-nrqm-intervals-endpoint-trace-and-half-line-decay
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition, Chapter 9, interval Sobolev domains and boundary traces"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.1, particle configuration with a flux tube removed"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let
$S^1=\mathbb R/(2\pi\mathbb Z)$ with angular coordinate $\phi$, and identify
$L^2(S^1;\mathbb C)$ with $L^2((0,2\pi),d\phi;\mathbb C)$; the omitted
endpoint has measure zero. Let $H^2(0,2\pi)$ be the interval Sobolev space whose elements and first two weak derivatives are in $L^2$. For $f\in H^2(0,2\pi)$ use the continuous endpoint representatives of $f$ and $f'$, and denote their traces by $f^*(0),f^*(2\pi)$ and $(f')^*(0),(f')^*(2\pi)$. Define
the periodic second-order domain
$$H^2_{\mathrm{per}}(S^1)=\{f\in H^2(0,2\pi):f^*(0)=f^*(2\pi),\ (f')^*(0)=(f')^*(2\pi)\}.$$
It is the domain used for the periodic realization of the second derivative;
it imposes no boundary at the angular seam beyond periodic matching.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-nrqm-intervals-hilbert-sobolev-spaces]]

[[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]
