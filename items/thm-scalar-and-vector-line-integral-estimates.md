---
id: thm-scalar-and-vector-line-integral-estimates
kind: theorem
title: "Line-integral estimates by arc length and the supremum of the field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-cauchy-schwarz-and-the-euclidean-norm, thm-monotonicity-of-the-integral, thm-linearity-of-the-integral, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Proposition 9.2.10"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

Let $\gamma$ be a piecewise-$C^1$ path of length $L(\gamma)$, let $f$ be a continuous scalar field and $F$ a continuous vector field on its trace, and let $M\geq0$.

1. If $|f(x)|\leq M$ on the trace of $\gamma$, then
   $$\left|\int_\gamma f\,ds\right|\leq M L(\gamma).$$
2. If $\lVert F(x)\rVert_2\leq M$ on the trace of $\gamma$, then
   $$\left|\int_\gamma F\cdot d\mathbf r\right|\leq M L(\gamma).$$

## Facts & Assumptions
**Given:** The path, fields, and bound in the Statement.

[L1] Line integrals are sums over smooth pieces of $f(\gamma(t))\lVert v_i(t)\rVert_2$ or $\langle F(\gamma(t)),v_i(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] The Euclidean Cauchy-Schwarz inequality is $|\langle x,y\rangle|\leq\lVert x\rVert_2\lVert y\rVert_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L3] The Riemann integral is linear, and pointwise order between integrable functions is preserved by integration ([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]]).

[L4] For an admissible partition, $L(\gamma)$ is the sum of the integrals of the speeds $\lVert v_i\rVert_2$ ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).



## Proof

**Proof technique:** direct.

1.1 On each smooth piece, $$-M\lVert v_i(t)\rVert_2\leq f(\gamma(t))\lVert v_i(t)\rVert_2\leq M\lVert v_i(t)\rVert_2.$$ [given, algebra]

1.2 By [L2] and the bound on $F$, $$-M\lVert v_i(t)\rVert_2\leq\langle F(\gamma(t)),v_i(t)\rangle\leq M\lVert v_i(t)\rVert_2.$$ [given, L2, algebra]

2.1 Integrate the two inequalities in step 1.1 using [L3], sum them using [L1], and identify the speed sum with [L4]. This gives $$-M L(\gamma)\leq\int_\gamma f\,ds\leq M L(\gamma),$$ hence the scalar estimate. [step 1.1, L1, L3, L4, algebra]

3.1 Repeating step 2.1 with step 1.2 gives the vector estimate. [step 2.1, step 1.2, L1, L3, L4]

4.1 If $M=0$ or $L(\gamma)=0$, either two-sided bound has both endpoints equal to zero, so the corresponding integral is zero and the asserted estimate still holds. [step 2.1, step 3.1, algebra] ∎
