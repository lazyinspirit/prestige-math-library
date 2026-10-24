---
id: ex-absolutely-convergent-rational-integral-on-the-line
kind: example
title: '$\int_{-\infty}^{\infty}(1+x^2)^{-1}\,dx$ converges absolutely'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mixed-improper-integral,
       def-absolute-and-conditional-improper-convergence,
       thm-comparison-test-for-improper-integrals,
       thm-improper-p-test-rational,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       thm-algebra-of-continuous-functions, thm-continuous-implies-integrable,
       def-darboux-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

The whole-line integral
$$\int_{-\infty}^{\infty}\frac{dx}{1+x^2}$$
converges absolutely. No evaluation of its value is needed.

## Facts & Assumptions

**Given:** $f(x)=(1+x^2)^{-1}$ on $\mathbb R$.

[L1] Continuous functions are properly Riemann integrable on compact intervals ([[thm-algebra-of-continuous-functions]], [[thm-continuous-implies-integrable]]).

[L2] For $|x|\ge1$, $0<f(x)\le x^{-2}$.

[L3] The $p=2$ tail integral converges, and comparison transfers convergence ([[thm-improper-p-test-rational]], [[thm-comparison-test-for-improper-integrals]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the integral over $[-1,1]$ is proper. On $[1,\infty)$, [L2] and [L3] prove convergence. Substitution $t=-x$ gives the identical conclusion on $(-\infty,-1]$. [L1, L2, L3]

2.1 Since $f\ge0$, $|f|=f$. Both tails converge separately and the middle piece is proper, so the mixed integral is absolutely convergent by definition. [given] ∎
