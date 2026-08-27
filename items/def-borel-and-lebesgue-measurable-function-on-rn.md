---
id: def-borel-and-lebesgue-measurable-function-on-rn
kind: definition
title: "Borel measurable and Lebesgue measurable functions on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-borel-sigma-algebra, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-measurable-function-between-measurable-spaces, thm-lebesgue-measure-is-a-complete-measure, def-countable-choice]
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 3.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Assume the Axiom of Countable Choice
([[def-countable-choice]]), so
[[thm-lebesgue-measure-is-a-complete-measure]] makes
$\mathcal L(\mathbb R^n)$ a sigma-algebra. Let $n,m\in\mathbb N$ with
$n,m \ge 1$.

- A function $f : \mathbb{R}^n \to \mathbb{R}^m$ is **Borel measurable** when
  it is measurable as a map

  $$f : (\mathbb{R}^n,\mathcal{B}(\mathbb{R}^n)) \to (\mathbb{R}^m,\mathcal{B}(\mathbb{R}^m))$$

  in the sense of [[def-measurable-function-between-measurable-spaces]].

- A function $f : \mathbb{R}^n \to \mathbb{R}^m$ is **Lebesgue measurable** when
  it is measurable as a map

  $$f : (\mathbb{R}^n,\mathcal{L}(\mathbb{R}^n)) \to (\mathbb{R}^m,\mathcal{B}(\mathbb{R}^m)),$$

  where $\mathcal{L}(\mathbb{R}^n)$ is the Lebesgue sigma-algebra of
  [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

When $m=1$, these are the corresponding notions for real-valued functions.
