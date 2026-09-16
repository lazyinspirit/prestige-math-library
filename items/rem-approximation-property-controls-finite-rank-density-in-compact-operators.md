---
id: rem-approximation-property-controls-finite-rank-density-in-compact-operators
kind: remark
title: Approximation property controls finite rank density in compact operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-approximation-property-and-bounded-approximation-property, def-approximable-operator, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-metric-convergence, def-banach-space]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.188, Exercise 4.29 forward direction"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

Let $X$ be a normed space and let $Y$ be a Banach space with the approximation
property ([[def-approximation-property-and-bounded-approximation-property]]).
Then every compact operator $T:X\to Y$ ([[def-compact-linear-operator]]) is
approximable ([[def-approximable-operator]]), that is, $T$ lies in the
operator-norm closure of the bounded finite-rank operators $X\to Y$.

The argument is short and worth recording. The set
$C:=\overline{T(\overline B_X)}\subseteq Y$ is compact, because $T$ is compact.
For a real $\varepsilon>0$ the approximation property of $Y$ supplies a bounded
finite-rank operator $R:Y\to Y$ with
$\sup_{c\in C}\|Rc-c\|<\varepsilon$. Then $R\circ T$ is a bounded operator whose
range lies in the finite-dimensional range of $R$, hence $RT$ is finite rank,
and for every $x\in X$ with $\|x\|\le1$ the point $Tx$ lies in $C$, so
$\|RTx-Tx\|<\varepsilon$; taking the supremum over the closed unit ball gives
$\|RT-T\|\le\varepsilon$ ([[def-operator-norm]],
[[def-bounded-linear-operator]]). Since $\varepsilon>0$ was arbitrary, $T$ is in
the norm closure of the bounded finite-rank operators, which is exactly
approximability.

**This is not a universal finite-rank approximation theorem for arbitrary
Banach targets.** The argument uses the approximation property as a hypothesis;
without it, nothing here produces finite-rank operators close to $T$ on the
compact set $C$. In particular no counterexample for a target $Y$ failing the
approximation property is asserted, and the converse implication — that
approximability of every compact operator into $Y$ forces the approximation
property of $Y$ — is a separate statement that is neither proved nor used here.
