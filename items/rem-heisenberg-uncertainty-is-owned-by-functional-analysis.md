---
id: rem-heisenberg-uncertainty-is-owned-by-functional-analysis
kind: remark
title: The sharp Heisenberg theorem is owned by functional analysis
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-countable-choice
  - lem-centering-by-translation-and-modulation-preserves-the-variance-product
  - lem-position-derivative-commutator-estimate
forward_refs:
  - ex-gaussian-attains-heisenberg-equality
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Theorem 14.15, pp. 385–386"
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§3, pp. 5–8 (3.3–3.12) and §5, Corollary 5.3, pp. 11–12"
---

## Remarks

Assume countable choice, as does the cited theorem. The sharp Heisenberg
uncertainty inequality and its equality classification are owned by functional
analysis: the published theorem [[thm-heisenberg-uncertainty-inequality]] of
the functional-analysis track states that for $f\in\mathcal S(\mathbb R^n)$ and
$a,b\in\mathbb R^n$
$$\bigl\||x-a|f\bigr\|_2\,\bigl\||\xi-b|\widehat f\bigr\|_2\ge\frac{n}{4\pi}\|f\|_2^2,$$
with equality for nonzero $f$ exactly for
$f(x)=c\exp(-\lambda|x-a|^2/2)\exp(2\pi ib\cdot x)$, $c\ne0$, $\lambda>0$.
Both this inequality and its sharp equality classification are quoted here
only on the Schwartz domain of the published source. Under this library's
$e^{-2\pi ix\cdot\xi}$ convention its coordinate form on that domain is
$\|x_jf\|_2\|\xi_j\widehat f\|_2\ge(4\pi)^{-1}\|f\|_2^2$.

This page does not extend the source's equality classification beyond
Schwartz functions. Separately, the local cutoff argument in
[[lem-position-derivative-commutator-estimate]] supplies the coordinate
real-variable inequality on the natural $H^1$ domain with $xf\in L^2$,
[[lem-centering-by-translation-and-modulation-preserves-the-variance-product]]
centres the variance formulation, and
[[cor-dimensional-heisenberg-uncertainty-inequality]] records the summed
$n$-dimensional inequality on that same domain. Gaussian attainment in this convention
is checked in [[ex-gaussian-attains-heisenberg-equality]].
