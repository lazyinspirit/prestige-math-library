---
id: def-ip-noise-level-free-parameter-rule
kind: definition
title: Noise-level-free parameter-choice rule
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-compact-linear-inverse-model
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, Definition 4.4"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 4, Definition 4.4, PDF p. 34; categories of parameter-choice rules."
    - title: "Ferdia Sherry, Inverse Problems: Lecture Notes 2024, Section 3.2.3"
      url: "https://ferdiasherry.com/LectureNotes2024.pdf"
      locator: "Section 3.2.3, PDF pp. 33–34; heuristic parameter rules and Theorem 3.12."
---

## Definition

Fix a compact Hilbert inverse model $K:X\to Y$ and a family of reconstruction
maps $(R_\alpha)_{\alpha>0}$, with each $R_\alpha:Y\to X$, both held fixed. A
deterministic parameter-choice rule is a function
$\alpha:Y\to(0,\infty)$. It is **noise-level-free** (also called **heuristic**)
when the value $\alpha(z)$ for an observed datum $z\in Y$ uses only $K$, the
fixed family, and $z$; it does not take the exact datum or a noise bound
$\delta$ as input. Here $\delta\ge0$ is a valid noise bound for $z$ and an
exact datum $y$ when $\|z-y\|_Y\le\delta$. The resulting reconstruction is
$R_{\alpha(z)}z$.

## Definition references

[[def-ip-compact-linear-inverse-model|Compact Hilbert inverse model]]

[Clason, Regularization of Inverse Problems, Definition 4.4](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Sherry, Inverse Problems: Lecture Notes 2024, Section 3.2.3](https://ferdiasherry.com/LectureNotes2024.pdf)
