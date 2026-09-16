---
id: def-hilbert-space
kind: definition
title: Hilbert space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, def-banach-space, def-complete-metric-space]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 1.41, p.39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Bruce Blackadar, Ilijas Farah and Asaf Karagila, Hilbert spaces without the Countable Axiom of Choice, Definitions 1.0.1 and 2.0.1"
      url: "https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf"
---

## Definition

A **real Hilbert space** is a real inner-product space $H$ ([[def-real-and-complex-inner-product-space]]) whose induced-length metric is complete in the sense of [[def-complete-metric-space]]: every Cauchy sequence in $H$ for the norm $\|v\|=\sqrt{\langle v,v\rangle}$ ([[cor-inner-product-induces-a-norm]]) converges to a point of $H$. A **complex Hilbert space** is a complex inner-product space with the same completeness property, so that a Hilbert space is exactly a real or complex inner-product space that is a Banach space for its induced norm ([[def-banach-space]]).

**The completion convention is the Cauchy-sequence one.**
[[def-banach-space]] defines completeness by convergence of Cauchy sequences, and this page keeps that convention throughout. It is weaker than $\sigma$-completeness — the assertion that every decreasing sequence of nonempty closed subsets with diameters tending to zero has a nonempty intersection. The two agree in ZFC, but Blackadar, Farah and Karagila note that the closest-point theorem on a $\sigma$-complete inner-product space is provable in ZF, whereas the Cauchy-complete form used below consumes the Axiom of Countable Choice; nothing here silently imports the stronger notion.
