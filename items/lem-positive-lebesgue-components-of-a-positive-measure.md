---
id: lem-positive-lebesgue-components-of-a-positive-measure
kind: lemma
title: "Lebesgue components of a positive finite measure are positive"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-mutually-singular-measures
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.5 and proof, §13.3 (book pagination)"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8 (notes pp. 75–77)"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\nu$ be a finite positive measure and $\mu$ a positive measure on the same
measurable space. If $\nu=\nu_{\mathrm{ac}}+\nu_{\mathrm{s}}$ with
$\nu_{\mathrm{ac}}\ll\mu$ and $\nu_{\mathrm{s}}\perp\mu$, then
$\nu_{\mathrm{ac}}$ and $\nu_{\mathrm{s}}$ are positive measures.

## Facts & Assumptions

**Given:** A finite positive measure $\nu$, a positive measure $\mu$, and a
decomposition $\nu=\nu_{\mathrm{ac}}+\nu_{\mathrm{s}}$ with
$\nu_{\mathrm{ac}}\ll\mu$ and $\nu_{\mathrm{s}}\perp\mu$.

[F1] [[def-mutually-singular-measures]]: singularity supplies a measurable carrier $N$ whose measurable subsets are $\mu$-null, while $\nu_{\mathrm{s}}$ vanishes on every measurable subset of $X\setminus N$.

[F2] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]: $\nu_{\mathrm{ac}}\ll\mu$ makes $\nu_{\mathrm{ac}}$ vanish on every measurable $\mu$-null set.

[F3] [[def-measure]] and [[def-finite-sigma-finite-and-semifinite-measures]]: a measure has nonnegative values on measurable sets, and a finite measure has finite values on all of them.

## Proof

**Proof technique:** direct.

1.1 Choose the singular carrier $N$ from [F1]. For any measurable $E$, the singular part vanishes on $E\setminus N$, so the decomposition gives $\nu_{\mathrm{ac}}(E\setminus N)=\nu(E\setminus N)\ge0$. Also $\nu_{\mathrm{ac}}(E\cap N)=0$ by [F1] and [F2]. Additivity therefore gives $\nu_{\mathrm{ac}}(E)=\nu_{\mathrm{ac}}(E\setminus N)\ge0$. All displayed component values are finite because the sum is the finite value $\nu$ and the other component is zero on the set being evaluated. [F1, F2, F3, given, choose]

2.1 On $E\cap N$, [F2] gives $\nu_{\mathrm{ac}}(E\cap N)=0$, so the decomposition yields $\nu_{\mathrm{s}}(E\cap N)=\nu(E\cap N)\ge0$. The singular part vanishes on $E\setminus N$ by [F1]; hence $\nu_{\mathrm{s}}(E)=\nu_{\mathrm{s}}(E\cap N)\ge0$. Since $E$ was arbitrary, both components are positive measures. [F1, F2, F3, given, algebra] ∎
