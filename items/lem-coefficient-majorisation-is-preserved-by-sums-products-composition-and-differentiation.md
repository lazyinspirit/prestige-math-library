---
id: lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation
kind: lemma
title: Operations preserving coefficient majorisation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §1 Exercise 3, printed p. 2; §3 equations (25), (28)–(30), pp. 7–8. The convolution and substitution arguments below provide the formal details.
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-coefficientwise-majorisation-of-multivariable-power-series", "thm-power-series-define-holomorphic-functions-in-several-variables", "thm-geometric-series"]
---

## Statement

For scalar formal series in finitely many variables, $f\ll F$ and $g\ll G$ imply $f+g\ll F+G$, $fg\ll FG$, and $\partial_jf\ll\partial_jF$. If $h_i\ll H_i$ and every $h_i,H_i$ has zero constant coefficient, then $f(h_1,\ldots,h_k)\ll F(H_1,\ldots,H_k)$. The same statements hold componentwise for finite vectors wherever the operations are defined. For convergent series these formal operations represent the corresponding analytic operations on sufficiently small polydiscs. If a convergent series $f$ has $f(0)\ne0$, its reciprocal is also analytic near zero.

## Facts & Assumptions

**Given:** Finite-variable formal series $f\ll F$, $g\ll G$, and, for composition, $h_i\ll H_i$ with zero constant coefficients. Analytic-operation claims additionally assume the displayed series converge; the reciprocal claim assumes $f(0)\ne0$.

[F1] Majorisation compares absolute ordinary coefficients. ([[def-coefficientwise-majorisation-of-multivariable-power-series]]).

[F2] Geometrically bounded power series differentiate termwise on smaller polydiscs. ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[F3] The real geometric series sums to $1/(1-r)$ for $|r|<1$. ([[thm-geometric-series]]).

## Proof

1.1 Write $f=\sum a_\alpha z^\alpha$, $g=\sum c_\alpha z^\alpha$, $F=\sum A_\alpha z^\alpha$, $G=\sum C_\alpha z^\alpha$. For every $\alpha$, $|a_\alpha+c_\alpha|\le A_\alpha+C_\alpha$ and $|\sum_{\beta+\gamma=\alpha}a_\beta c_\gamma|\le\sum_{\beta+\gamma=\alpha}A_\beta C_\gamma$. Each convolution is finite, including degree zero, proving the sum and product claims. [given, F1, algebra]

1.2 The coefficient of $z^\alpha$ in $\partial_j f$ is $(\alpha_j+1)a_{\alpha+e_j}$; its modulus is at most $(\alpha_j+1)A_{\alpha+e_j}$, the coefficient in $\partial_jF$. Thus differentiation preserves the relation. [given, F1, algebra]

2.1 In degree at most $q$, a product $h^\beta$ can contribute only when $|\beta|\le q$, since every factor has order at least one. There are finitely many such $\beta$ and finitely many decompositions of any fixed multi-index. Repeated application of step 1.1 bounds each coefficient of $a_\beta h^\beta$ by the corresponding coefficient of $A_\beta H^\beta$. Adding these finitely many bounds proves the composition claim. [given, step 1.1, F1]

3.1 For convergent inner series choose a positive smaller polyradius $s$ for which the sums $S_i(s)=\sum_\alpha |[z^\alpha]h_i|s^\alpha$ are strictly below the outer convergence radii. Such an $s$ exists because $S_i(s)\to0$ as all coordinates of $s$ decrease to zero. The absolute sum of the expanded substitution is bounded by $\sum_\beta |a_\beta|\prod_i S_i(s)^{\beta_i}<\infty$. Absolute rearrangement therefore identifies the formal substitution with the actual function composition; the same argument applies to products. On still smaller polydiscs F2 identifies the formal derivatives with derivatives of the sums. [given, F2, step 2.1]

4.1 Write $f=a+h$ with $a\ne0$ and $h(0)=0$. Shrink $s$ until $\sum_\alpha |[z^\alpha](h/a)|s^\alpha<1$. F3 bounds the absolute sum of $a^{-1}\sum_{k\ge0}(-h/a)^k$ by $|a|^{-1}/(1-S)$ with $S<1$. The finite geometric identity gives $(a+h)a^{-1}\sum_{k=0}^K(-h/a)^k=1-(-h/a)^{K+1}$; the last term tends uniformly to zero on this polydisc. Hence the convergent series is exactly $1/f$. This proves the reciprocal and all asserted analytic-operation claims. [given, F3, step 3.1, algebra] ∎

## Source notes

Gantumur, §1 Exercise 3, printed p. 2; §3 equations (25), (28)–(30), pp. 7–8. The convolution and substitution arguments below provide the formal details.
