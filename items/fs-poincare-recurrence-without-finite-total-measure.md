---
id: fs-poincare-recurrence-without-finite-total-measure
kind: false-statement
title: 'False: Poincare recurrence needs no finite total measure'
deps: ["thm-lebesgue-measure-is-a-complete-measure", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "def-measure-preserving-transformation-and-system", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.12 pp.21–22
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Poincaré recurrence is false if the finite-total-measure hypothesis is omitted. Assuming countable choice, $T(x)=x+1$ on $(\mathbb R,\mathcal L,\lambda)$ preserves measure, but no point of the positive-measure set $E=[0,1)$ ever returns to $E$ at a positive time.

## Facts & Assumptions

[F1] Under countable choice, Lebesgue measure on the real line is a measure and has infinite total mass. [[thm-lebesgue-measure-is-a-complete-measure]].

[F2] The half-open interval $[0,1)$ is measurable of measure one. [[thm-lebesgue-measure-of-a-box-of-every-kind]].

[F3] Translation preserves Lebesgue measurability and measure. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].

[F4] A measurable self-map preserves measure exactly when each measurable inverse image has the original measure. [[def-measure-preserving-transformation-and-system]].

## Refutation

**Given:** Poincaré recurrence is false if the finite-total-measure hypothesis is omitted. Assuming countable choice, $T(x)=x+1$ on $(\mathbb R,\mathcal L,\lambda)$ preserves measure, but no point of the positive-measure set $E=[0,1)$ ever returns to $E$ at a positive time.

1.1 By [F1] this is a measure space with $\lambda(\mathbb R)=\infty$. For every Lebesgue measurable $A$, one has $T^{-1}A=A-1$, which is measurable and has measure $\lambda(A)$ by [F3]. Thus $T$ is measurable and measure preserving by [F4], even though the total measure is infinite. The set $E$ has measure one by [F2]. Countable choice is used to obtain the Lebesgue measure in [F1] and the interval value in [F2]. [F1, F2, F3, F4]

2.1 Induction gives $T^n x=x+n$ for every $n\ge0$. If $x\in[0,1)$ and $n\ge1$, then $x+n\ge1$, so $T^n x\notin[0,1)$. The exceptional set for recurrence is therefore all of $E$, of measure one, rather than a null subset. The time-zero visit does not satisfy the positive-return conclusion. [1.1] ∎

