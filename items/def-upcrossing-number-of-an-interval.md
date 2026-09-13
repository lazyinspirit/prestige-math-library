---
id: def-upcrossing-number-of-an-interval
kind: definition
title: Upcrossing number of an interval
status: draft
origin: pipeline
deps: [def-random-element-and-real-random-variable, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.4, pp. 13–14", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Definition

For a real sequence $x=(x_n)_{n\ge0}$, reals $a<b$, and $N\ge0$, define
$$U_N[a,b](x)=\max\bigl\{k:\exists\,0\le s_1<t_1<\cdots<s_k<t_k\le N,\ x_{s_i}\le a,\ x_{t_i}\ge b\bigr\},$$
where the empty tuple makes $0$ admissible, and put
$$U_\infty[a,b](x)=\sup_{N\ge0}U_N[a,b](x).$$
For a real process $X$, these definitions are applied pathwise.

For fixed $N$ there are finitely many candidate tuples. For each $k$, the event $\{U_N\ge k\}$ is a finite union of finite intersections of events $\{X_s\le a\}$ and $\{X_t\ge b\}$, hence is measurable. Thus the integer-valued $U_N$ is measurable. Since $U_N\uparrow U_\infty$, measurability of the countable pointwise supremum follows from [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]. No optimizing tuple is selected, so the definition is choice-free.
