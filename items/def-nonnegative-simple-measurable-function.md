---
id: def-nonnegative-simple-measurable-function
kind: definition
title: "Nonnegative simple measurable functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-real-valued-measurable-function]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. A measurable function
$s:X\to[0,+\infty)\subseteq\overline{\mathbb R}$
([[def-extended-real-valued-measurable-function]]) is a
**nonnegative simple measurable function** when it has finite range.

Equivalently, there are pairwise disjoint measurable sets
$E_1,\dots,E_m\in\mathcal A$ and coefficients $c_1,\dots,c_m\in[0,+\infty)$
such that
$$s=\sum_{j=1}^m c_j\chi_{E_j}.$$
Any such display is a **simple representation** of $s$.
