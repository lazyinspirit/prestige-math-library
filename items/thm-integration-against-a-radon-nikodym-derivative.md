---
id: thm-integration-against-a-radon-nikodym-derivative
kind: theorem
title: "Integrating against a Radon-Nikodym derivative recovers integration against the measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-radon-nikodym-derivative, def-simple-integral-against-a-signed-or-complex-measure, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\mu$ be a sigma-finite positive measure and let $\nu$ be a signed measure or a finite complex measure with $\nu\ll\mu$. If $h$ is a representative of $d\nu/d\mu$, then
$$\nu(E)=\int_E h\,d\mu\qquad(E\in\mathcal A).$$
More generally, if
$$g=\sum_{j=1}^m c_j\mathbf 1_{E_j}$$
is the canonical disjoint representation of a simple measurable function and $|\nu|(E_j)<+\infty$ for every $j$, then
$$\int g\,d\nu=\sum_{j=1}^m c_j\int_{E_j} h\,d\mu.$$
In particular, whenever the Lebesgue integral of $gh$ is defined, one has
$$\int g\,d\nu=\int gh\,d\mu.$$

## Facts & Assumptions

**Given:** A representative $h$ of $d\nu/d\mu$.

[L1] A representative of a Radon-Nikodym derivative recovers the measurable-set values of the measure: for signed measures by the Radon-Nikodym theorem, and for finite complex measures by the complex corollary. ([[def-radon-nikodym-derivative]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]])

[L3] For a simple function in canonical disjoint form with each $|\nu|(E_j)<+\infty$, the simple integral against $\nu$ is $$\int g\,d\nu=\sum_{j=1}^m c_j\nu(E_j).$$ ([[def-simple-integral-against-a-signed-or-complex-measure]])

[L4] The Lebesgue integral is linear on $L^1(\mu)$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 The measurable-set identity $\nu(E)=\int_Eh\,d\mu$ is exactly [L1]. [L1, given]

2.1 If $g=\sum_{j=1}^m c_j\chi_{E_j}$ is canonical disjoint and each $|\nu|(E_j)<+\infty$, then [L3] and step 1.1 give $$\int g\,d\nu=\sum_{j=1}^m c_j\nu(E_j)=\sum_{j=1}^m c_j\int_{E_j}h\,d\mu.$$ If, in addition, the Lebesgue integral of $gh$ is defined, then [L4] identifies the same finite sum with $\int gh\,d\mu$. [L3, L4, step 1.1, algebra] ∎
