---
id: rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel
kind: remark
title: "Two different objects are called Poisson's formula"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-poisson-formula-for-the-two-dimensional-wave-equation, thm-poisson-kernel-for-a-ball-in-rn, def-wave-equation-cauchy-data-and-wave-speed]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 172, Poisson's formula (7.14)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.6, printed pp. 132–134, the harmonic Poisson kernel for a ball (only for the naming contrast)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.4, printed pp. 285–286, the two-dimensional wave formula (9.1.16)"
---


## Remark

The name "Poisson's formula" denotes two different objects that should not be conflated. The two-dimensional **wave** formula of [[thm-poisson-formula-for-the-two-dimensional-wave-equation]] is the weighted disk integral
$$u(x,t)=\frac{1}{2\pi c}\Bigl[\frac{\partial}{\partial t}\int_{B_{ct}(x)}\frac{u_0(y)\,dy}{\sqrt{c^2t^2-|y-x|^2}}+\int_{B_{ct}(x)}\frac{u_1(y)\,dy}{\sqrt{c^2t^2-|y-x|^2}}\Bigr],$$
whose kernel $(2\pi c)^{-1}(c^2t^2-|y-x|^2)^{-1/2}$ is an interior singular weight on the expanding disk, while the **harmonic** Poisson kernel of [[thm-poisson-kernel-for-a-ball-in-rn]] integrates *boundary* data against a positive density on the sphere. The two solve different problems — an initial-value (Cauchy) problem in space-time versus the Dirichlet boundary-value problem — use respectively a time parameter $t$ and a fixed radius $R$. The shared name does not identify their kernels or transfer estimates between these problems.

The wave formula is stated for the speed-$c$ convention of [[def-wave-equation-cauchy-data-and-wave-speed]]; the harmonic kernel is the ball boundary-value kernel of the Poisson-problem page. The remark asserts no new mathematics: it isolates the naming collision so that no consumer imports a boundary-value estimate into the wave representation.
