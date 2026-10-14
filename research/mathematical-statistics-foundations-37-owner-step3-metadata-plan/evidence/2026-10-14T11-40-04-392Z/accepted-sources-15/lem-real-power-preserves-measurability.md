---
id: lem-real-power-preserves-measurability
kind: lemma
title: "Positive real powers preserve measurability"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-mean-value-theorem
  - def-measurable-function-between-measurable-spaces
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
---

## Statement

Let $r>0$. The map $t\mapsto t^r$ is strictly increasing on $[0,\infty)$. Consequently, if $(X,\mathcal A)$ is a measurable space and $h:X\to[0,\infty)$ is measurable, then $h^r$ is measurable.

## Facts & Assumptions

**Given:** A measurable $h:X\to[0,\infty)$ and a real exponent $r>0$.

[F1] For $r>0$, $t\mapsto t^r$ is continuous and differentiable on $(0,\infty)$ with derivative $rt^{r-1}$; also $0^r=0$ and $t^r>0$ for $t>0$ ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]]).

[F2] Positive-base real powers obey $(a^s)^r=a^{sr}$, so $(c^{1/r})^r=c$ for $c>0$ ([[thm-real-power-laws]]).

[F3] A real-valued function is measurable exactly when all threshold sets of the form $\{x:g(x)>c\}$ are measurable ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]], [[def-measurable-function-between-measurable-spaces]]).

[F4] The mean value theorem applies on every compact interval where the function is continuous on the interval and differentiable in its interior ([[cor-mean-value-theorem]]).

## Proof

**Given:** A real exponent $r>0$ and, for the measurability clause, a measurable function $h:X\to[0,\infty)$.

1.1 The map $t\mapsto t^r$ is strictly increasing on $[0,\infty)$. If $0<s<t$, [F1] gives continuity on $[s,t]$ and positive derivative $ru^{r-1}$ at every $u\in(s,t)$, so [F4] gives $s^r<t^r$; if $s=0<t$, [F1] gives $s^r=0<t^r$. [F1, F4, algebra]

2.1 For a threshold $c<0$, $\{h^r>c\}=X$. For $c=0$, the set is $\{h>0\}$. For $c>0$, [F2] and strict increase from step 1.1 give $\{h^r>c\}=\{h>c^{1/r}\}$. Each such set is measurable because $h$ is measurable, so [F3] implies $h^r$ is measurable. [F2, F3, step 1.1, given] ∎
