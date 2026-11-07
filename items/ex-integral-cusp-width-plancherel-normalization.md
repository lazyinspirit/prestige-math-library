---
id: ex-integral-cusp-width-plancherel-normalization
kind: example
title: Integral cusp-width Plancherel normalization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-finite-cusp-eisenstein-transform-completeness
- def-finite-cusp-pseudo-laplacian-data
- def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: unit-period cusp normalization; the width conversion is calculated locally.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 5.3–5.6, printed pp. 24–30 / PDF pp. 24–30: unit-period Plancherel convention; the integral-width conversion is calculated locally.'
dependency_level: 12
axiom_use: Axiom of Choice is an explicit public hypothesis; Countable and Dependent Choice follow.
---

## Example

Assume AC and the finite-cusp spectral theorem. Let $\sigma\in\operatorname{PSL}_2(\mathbb R)$ take $\infty$ to a cusp $\xi$ and normalize its stabilizer by $\sigma^{-1}\Delta_\xi\sigma=\langle z\mapsto z+n w:n\in\mathbb Z\rangle$ for a width $w>0$. The unit-period scaling matrix is $\tau=\sigma\operatorname{diag}(\sqrt w,1/\sqrt w)$ and its Eisenstein series is $E^{(1)}(z,s)=w^{-s}E(z,s)$. On $\operatorname{Re}s=\tfrac12$, the product $F_f(t)\overline{F_g(t)}$ acquires exactly the factor $1/w$, so the real-line spectral coefficient in width-$w$ coordinates is $1/(4\pi w)$, independently of the phase $w^{it}$.

## Example references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The complete objects, conventions and PUBLIC Axiom of Choice in the Example.

[F1] The full unit-period Plancherel formula and exact integral-width conversion ([[thm-finite-cusp-eisenstein-transform-completeness]]).

## Verification

1.1 The coordinatez↦z/w preserves hyperbolic area and sends translation by w to translation by 1. Its incoming height power isw^(−s)y^s, so the Poincaré sums differ by preciselyw^(−s), not by an independently chosen normalization. [given, F1]

2.1 With the inner product linear in the first variable, F^(1)f(t)=w^(−1/2+it)Ff(t). Multiplying by the conjugate transform ofg cancels the two phases and leavesw^−1. Substitution into the 1/(4π) unit-period formula gives exactly1/(4πw). [given, F1, step 1.1] ∎


## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
