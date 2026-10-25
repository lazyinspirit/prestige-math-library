---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/rem-measurable-function-codomain-convention.json
  precheck: n/a
id: rem-measurable-function-codomain-convention
kind: remark
title: "Measurability is relative to sigma-algebras on both domain and codomain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measurable-space]
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Chapter 3"
      url: "https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf"
---

In a measurable space [[def-measurable-space]], the word **measurable** never
belongs to a function by itself. It belongs to a function together with a source
sigma-algebra and a target sigma-algebra. On this page the target on
$\mathbb{R}$ or $\overline{\mathbb{R}}$ is always the **Borel** sigma-algebra,
not the Lebesgue sigma-algebra.

That convention is load-bearing. A **Lebesgue measurable function on
$\mathbb{R}^n$** means

$$f : (\mathbb{R}^n,\mathcal{L}(\mathbb{R}^n)) \to (\mathbb{R}^m,\mathcal{B}(\mathbb{R}^m)),$$

not a map into $(\mathbb{R}^m,\mathcal{L}(\mathbb{R}^m))$. The distinction is
exactly what makes the later counterexample
$g \circ f$ with $g$ merely Lebesgue measurable possible.
