---
id: def-rational-formal-power-series-and-reduced-denominator
kind: definition
title: "Rational formal power series, proper presentations and reduced denominators"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-formal-power-series-and-coefficient-extraction, thm-formal-power-series-unit-criterion, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Section 4.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Sections 3.6-3.7"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring. A formal power series $F\in R\llbracket x\rrbracket$ ([[def-formal-power-series-and-coefficient-extraction]]) is **rational** if there are polynomials $P,Q\in R[x]$ such that $Q(0)$ is a unit and

$$QF=P$$

in $R\llbracket x\rrbracket$. Equivalently, $F=P/Q$, where $Q^{-1}$ is the unique formal inverse supplied by [[thm-formal-power-series-unit-criterion]].

Now let $R=K$ be a field. Multiplying numerator and denominator by $Q(0)^{-1}$ gives a **normalised presentation** with $Q(0)=1$. Such a presentation is **proper** when $P=0$ or $deg P<\deg Q$ ([[def-polynomial-degree-leading-coefficient-and-monic]]). It is **reduced** when $P$ and $Q$ have no common nonunit factor. A polynomial series has the reduced presentation $P/1$, and the zero series has reduced presentation $0/1$.

A polynomial $Q$ occurring in a normalised reduced presentation is called a **reduced denominator** of $F$. The minimal-order theorem will show that all reduced denominators of one series have the same degree.

