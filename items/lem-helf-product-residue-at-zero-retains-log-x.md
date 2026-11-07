---
dependency_level: 0
id: lem-helf-product-residue-at-zero-retains-log-x
kind: lemma
title: "The product residue retains the logarithmic scale term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-laurent-coefficient-formula-and-uniqueness
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Goldbach analytic proof; bounded local reconstruction"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "\u00a74.1 equations4.6\u20134.8: full integrand residue, correcting omission of x^s in the displayed residue definition"
---

## Statement

Let $x>0$, and let $H,G$ be meromorphic near zero with Laurent expansions $H(s)=\epsilon/s+A+O(s)$ and $G(s)=a/s+B+O(s)$, where $a,A,B,\epsilon\in\mathbb C$. Define $x^s=\exp(s\log x)$. Then
$$\operatorname{Res}_{s=0}\bigl(H(s)G(s)x^s\bigr)=aA+\epsilon B+\epsilon a\log x.$$
In particular, when $\epsilon a\ne0$ one cannot delete the scale term by taking the residue of $HG$ instead of $HGx^s$.

## Facts & Assumptions

**Given:** The two Laurent expansions and the positive scale.

[F1] A residue is the coefficient of $s^{-1}$ in the convergent Laurent expansion, whose coefficients are unique. [[thm-laurent-coefficient-formula-and-uniqueness]]

[F2] The complex exponential is holomorphic with derivative itself, and $\log x$ is defined for $x>0$. [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-natural-logarithm-laws]]

## Proof

1.1 Multiplying the two Laurent expansions gives $H(s)G(s)=\epsilon a/s^2+(\epsilon B+aA)/s+O(1)$. By [F2], $x^s=1+s\log x+O(s^2)$. Only the constant and linear terms of this last expansion can contribute to the coefficient of $s^{-1}$. [given, F2, algebra]

2.1 Their coefficient is $\epsilon B+aA+\epsilon a\log x$, which is the residue by [F1]. The term multiplying $\log x$ is nonzero exactly when $\epsilon a\ne0$, so no scale-independent residue formula can omit it in that case. This proves the claim without making any contour-shift assertion. [F1, step 1.1, algebra] ∎
