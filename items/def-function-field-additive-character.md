---
dependency_level: 0
id: def-function-field-additive-character
kind: definition
title: "Function-Field Additive Character and Degree Balls"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-finite-field-and-its-order
  - def-left-haar-integral-and-left-haar-measure
  - def-countable-choice
justified_by:
  - lem-function-field-character-orthogonality
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "T. D. Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "§17, harmonic-analysis definitions before (17.1)"
---

## Definition

Let $\mathbb F_q$ be a finite field of order $q=p^m$, where $p$ is prime. Put $\mathcal O=\mathbb F_q[t]$, $K_\infty=\mathbb F_q((1/t))$, and $\mathbb T=\{\alpha\in K_\infty:\operatorname{ord}\alpha<0\}$, where $\operatorname{ord}\alpha$ is the largest exponent with nonzero coefficient in its Laurent expansion and $\operatorname{ord}0=-\infty$. For $\alpha=\sum_i a_i t^i$, define

$$e_\infty(\alpha)=\exp\!\left(\frac{2\pi i}{p}\widetilde{\operatorname{Tr}_{\mathbb F_q/\mathbb F_p}(a_{-1})}\right),$$

where the tilde is any integer representative of the indicated element of $\mathbb F_p$. The additive group $\mathbb T$ has its Laurent-series topology. For the measure convention assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: use the unique normalized Radon Haar probability on $\mathbb T$ and its finite product on $\mathbb T^k$. Existence, uniqueness, the digit-cylinder law and finite product construction are justified by the accompanying character-orthogonality lemma. The field, Laurent-series, character and degree-ball formulas themselves require no choice assumption. For every integer $d\ge0$, put $\mathcal O_d=\{\nu\in\mathcal O:\deg\nu\le d\}$ with $\deg0=-\infty$. For a nonzero polynomial $f\in\mathcal O$, put $|f|=q^{\deg f}$. If $f$ is monic, a sum over $u\bmod f$ uses the unique polynomial representatives of degree less than $\deg f$.

## Definition references

[[def-finite-field-and-its-order]]

[[def-left-haar-integral-and-left-haar-measure]]

[Wooley, §17](https://arxiv.org/pdf/1708.01220v2)

[[def-countable-choice]]

[[lem-function-field-character-orthogonality]]
