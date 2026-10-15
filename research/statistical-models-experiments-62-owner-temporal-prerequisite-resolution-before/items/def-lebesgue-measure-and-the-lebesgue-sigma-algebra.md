---
id: def-lebesgue-measure-and-the-lebesgue-sigma-algebra
kind: definition
title: "Lebesgue measurable sets, the family $\\mathcal{L}(\\mathbb{R}^n)$, and the restricted set function $\\lambda_n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-lebesgue-outer-measure, def-caratheodory-measurable-set]
justified_by: [thm-lebesgue-measure-is-a-complete-measure]
aliases: []
landmark: true
short: "Lebesgue measure"
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Definition 2.10"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Definition

Fix $n \ge 1$ and let $\lambda_n^*$ be the Lebesgue outer set function on $\mathbb{R}^n$
([[def-lebesgue-outer-measure]]). A set $E \subseteq \mathbb{R}^n$ is
**Lebesgue measurable** when

$$\lambda_n^*(A) \;=\; \lambda_n^*(A \cap E) \;+\; \lambda_n^*(A \setminus E) \qquad \text{for every } A \subseteq \mathbb{R}^n .$$

This formula makes sense before any outer-measure theorem is invoked. Under
countable choice, [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]
makes $\lambda_n^*$ an outer measure, and the displayed condition is then exactly
Carathéodory measurability in the sense of [[def-caratheodory-measurable-set]].

The family of Lebesgue measurable sets is written $\mathcal{L}(\mathbb{R}^n)$,
and **Lebesgue measure** is the restriction

$$\lambda_n \;:=\; \lambda_n^*\!\restriction_{\mathcal{L}(\mathbb{R}^n)} .$$

On the real line the subscript is dropped and $\lambda := \lambda_1$.

The quantifier over every test set $A$ is part of the condition, and no
hypothesis on $E$ is imposed before it is tested. That
$\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and that $\lambda_n$ is a complete
measure on it are not part of this definition: they are proved, under the Axiom
of Countable Choice, in [[thm-lebesgue-measure-is-a-complete-measure]], which is
recorded in this item's `justified_by` because it is a statement about the
objects introduced here. Until that theorem the symbols $\mathcal{L}(\mathbb{R}^n)$
and $\lambda_n$ name a family of sets and a restricted set function, nothing more.

## Remarks

- **Why the Carathéodory criterion rather than the inner-outer criterion.**
  Lebesgue's original definition compares the outer measure of $E$ with that of
  its complement inside a large box, and it is available only for bounded $E$;
  the criterion above is stated for every subset at once and is what makes the
  published Carathéodory machinery apply verbatim. The two agree, and the
  equivalence with the approximation criteria is
  [[thm-littlewood-characterisations-of-lebesgue-measurability]].

- **The definition is relative to $\lambda_n^*$ and to nothing else.** Changing
  the outer measure changes the family; the family attached to a general outer
  measure is written $\mathcal{M}_{\mu^*}$ in
  [[def-caratheodory-measurable-set]], and $\mathcal{L}(\mathbb{R}^n)$ is the
  name reserved for the instance $\mu^* = \lambda_n^*$.
