---
id: def-bochner-integrable-function
kind: definition
title: "Bochner-integrable function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-strongly-measurable-banach-valued-function, lem-banach-valued-simple-integral-is-well-defined]
justified_by: [thm-bochner-integrability-criterion]
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, definition preceding Lemma 11.31, printed p. 333"
pipeline_run: phase-2-next-18
---

## Definition

Let $(\Omega,\mathcal A,\mu)$ be a measure space and $X$ a real or complex
Banach space. A strongly measurable function $f:\Omega\to X$ is
**Bochner integrable** if there is a sequence of integrable $X$-valued simple
functions $(s_n)$ such that

$$\lim_{n\to\infty}\int_\Omega\|f-s_n\|\,d\mu=0.$$

For such a sequence define

$$\int_\Omega f\,d\mu:=\lim_{n\to\infty}\int_\Omega s_n\,d\mu.$$

The displayed norm limit exists: the simple integral inequality gives

$$\left\|\int s_n-\int s_m\right\|\leq\int\|s_n-s_m\|\leq\int\|s_n-f\|+\int\|f-s_m\|,$$

so the simple integrals form a Cauchy sequence, and $X$ is complete. The next
theorem proves that the value is independent of the approximating sequence and
characterizes existence by integrability of $\|f\|$.

For $E\in\mathcal A$, write
$\int_Ef\,d\mu:=\int_\Omega\mathbf1_Ef\,d\mu$ whenever this function is
Bochner integrable.

## Remarks

The zero function and every integrable simple function are Bochner integrable,
witnessed by constant approximating sequences. No choice principle is used in
this definition or in the Cauchy estimate.
