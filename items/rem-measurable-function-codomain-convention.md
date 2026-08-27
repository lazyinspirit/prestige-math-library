---
id: rem-measurable-function-codomain-convention
kind: remark
title: "Measurability is relative to sigma-algebras on both domain and codomain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measurable-space]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Chapter 3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
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
`g \circ f` with $g$ merely Lebesgue measurable possible.
