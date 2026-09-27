---
id: thm-integration-against-a-radon-nikodym-derivative
kind: theorem
title: "Integrating against a Radon-Nikodym derivative recovers integration against the measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-radon-nikodym-derivative, def-simple-integral-against-a-signed-or-complex-measure, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L1] By definition, a representative of a Radon-Nikodym derivative satisfies the measurable-set integral formula ([[def-radon-nikodym-derivative]]). Its existence is not needed here because $h$ is supplied.

[L3] For a simple function in canonical disjoint form with each $|\nu|(E_j)<+\infty$, the simple integral against $\nu$ is $$\int g\,d\nu=\sum_{j=1}^m c_j\nu(E_j).$$ ([[def-simple-integral-against-a-signed-or-complex-measure]])

[L4] The Lebesgue integral is linear on $L^1(\mu)$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 The measurable-set identity $\nu(E)=\int_Eh\,d\mu$ is exactly [L1]. [L1, given]

2.1 For each nonzero level set $E_j$, the hypothesis $|\nu|(E_j)<+\infty$ makes $h\mathbf1_{E_j}$ integrable. In the signed case, apply step 1.1 to $E_j\cap\{h\ge0\}$ and $E_j\cap\{h<0\}$: the positive and negative integrals are finite because the corresponding values of $\nu$ have absolute value at most $|\nu|(E_j)$. In the finite complex case, $h\in L^1(\mu)$ already by the definition of its derivative. [L1, given, algebra]

3.1 If $g=\sum_{j=1}^m c_j\chi_{E_j}$ is canonical disjoint, then [L3] and step 1.1 give $$\int g\,d\nu=\sum_{j=1}^m c_j\nu(E_j)=\sum_{j=1}^m c_j\int_{E_j}h\,d\mu.$$ By step 2.1, every $h\mathbf1_{E_j}$ is in $L^1(\mu)$, so [L4] identifies this finite sum with $\int gh\,d\mu$. [L3, L4, step 1.1, step 2.1, algebra] ∎
