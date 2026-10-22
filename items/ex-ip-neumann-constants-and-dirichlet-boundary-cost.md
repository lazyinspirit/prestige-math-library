---
id: ex-ip-neumann-constants-and-dirichlet-boundary-cost
kind: example
title: Neumann constants and the Dirichlet boundary cost
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-ip-boundary-tv-conventions
  - def-ip-spatial-bv-and-distributional-tv
  - ex-ip-bv-jump-across-smooth-curve
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-ftc-second-part
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of total variation regularized linear inverse problems, Inverse Problems 34 (2018), 055011"
      url: "https://arxiv.org/pdf/1711.06495"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
---

## Example

Assume Countable Choice. On every bounded Lipschitz domain $\Omega\subset\mathbb R^n$ (a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph), a constant function $u\equiv c$ has $TV_N(u;\Omega)=0$. On the unit disk $B\subset\mathbb R^2$, if $c\ne0$ then $TV_D(c;B)=2\pi|c|$.

## Example references

[[def-ip-boundary-tv-conventions|The definitions of Neumann variation and Dirichlet variation by zero extension.]]

[[ex-ip-bv-jump-across-smooth-curve|The unit disk indicator has total variation equal to twice pi.]]

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain $\Omega$, a real constant $c$, and the unit disk $B\subset\mathbb R^2$.

[A1] Countable Choice is used for Lebesgue Fubini and the Riemann-to-Lebesgue integral comparison. ([[def-countable-choice]])

[F1] Neumann variation is the mass of the derivative inside the open domain; Dirichlet variation is the total variation of the zero extension. ([[def-ip-boundary-tv-conventions]])

[F2] The unit disk indicator belongs to BV and has total variation $2\pi$. ([[ex-ip-bv-jump-across-smooth-curve]])

[F3] Distributional derivative acts by the negative-transpose test formula. ([[def-ip-spatial-bv-and-distributional-tv]])

[F4] Lebesgue measure on $\mathbb R^n$ is finite on bounded sets under Countable Choice. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]])

[F5] Fubini identifies integrals of integrable functions on Euclidean product spaces with iterated integrals. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F6] Bounded Riemann-integrable functions on compact intervals have the same Lebesgue integral under Countable Choice. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[F7] A continuous derivative is Riemann integrable and its interval integral is the endpoint difference. ([[thm-continuous-implies-integrable]], [[thm-ftc-second-part]])

## Verification

**Given:** Countable Choice, the constant $u\equiv c$, and the conventions in [F1].

1.1 For every $\phi\in C_c^\infty(\Omega)$, extend $\phi$ by zero to a smooth compactly supported function on $\mathbb R^n$. It and each derivative are integrable by [F4]. Fubini [F5] reduces $\int_{\mathbb R^n}\partial_i\phi$ to one-dimensional integrals along coordinate lines; on each line the derivative is continuous with compact support, so [F6] identifies its Lebesgue integral with its Riemann integral and [F7] makes that integral zero. Thus $\langle D_i u,\phi\rangle=-c\int_\Omega\partial_i\phi\,dx=0$ for every coordinate, so $Du=0$ and $TV_N(u;\Omega)=0$ by [F1]. [A1, F1, F3, F4, F5, F6, F7, given]

2.1 On the disk, the zero extension of $c$ is $c\chi_B$. Its distributional derivative is $cD\chi_B$, so homogeneity of the partition variation and [F2] give $TV_D(c;B)=|c|TV(\chi_B;\mathbb R^2)=2\pi|c|$. [F1, F2, step 1.1, given, algebra] ∎
