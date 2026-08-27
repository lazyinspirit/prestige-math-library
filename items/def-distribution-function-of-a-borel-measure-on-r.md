---
id: def-distribution-function-of-a-borel-measure-on-r
kind: definition
title: "The distribution function of a Borel measure on $\\mathbb{R}$, normalized at $0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-borel-measure-finite-on-compact-sets-on-r, thm-heine-borel-r, prop-measure-monotonicity]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Section 2.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $\mu$ be a Borel measure on $\mathbb{R}$ finite on compact sets. Its
**distribution function normalized at $0$** is the function
$F_\mu : \mathbb{R} \to \mathbb{R}$ defined by

$$F_\mu(x) := \begin{cases} \mu((0,x]), & x \ge 0,\\ -\mu((x,0]), & x < 0. \end{cases}$$

Both interval measures are finite: the relevant half-open interval is
contained in the closed bounded interval with endpoints $0$ and $x$, which is
compact by [[thm-heine-borel-r]], and measure monotonicity
[[prop-measure-monotonicity]] applies.

The two cases agree at $x = 0$, where both give $0$. This normalization removes
the additive-constant ambiguity that would remain if one used only interval
increments.
