---
id: lem-qftx-finite-heavy-gaussian-square
kind: lemma
domain: mathematics
library: mathematics
title: Finite-dimensional heavy Gaussian source shift
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-measure-preserving-transformation-and-system
  - thm-integrals-are-invariant-under-measure-preserving-maps
justified_by: []
forward_refs: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
  thm-nondegenerate-multivariate-normal-law-has-density: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  def-measure-preserving-transformation-and-system: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Skinner, Advanced Quantum Field Theory, Chapter 2: QFT in Zero Dimensions"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf"
      locator: "§§2.1–2.2, printed pp.13–16, equations (2.6)–(2.18), especially the finite Gaussian source identity (2.10)–(2.12)."
    - title: "Nima Moshayedi, Quantum Field Theory and Functional Integrals"
      url: "https://arxiv.org/pdf/1902.08652"
      locator: "§11.2, printed pp.44–48: finite-dimensional Gaussian laws and generating functions."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, let $K\in\mathbb R^{d\times d}$ be symmetric positive definite, and let $j\in\mathbb R^d$. Let $\gamma_{K^{-1}}=N_d(0,K^{-1})$, where covariance is the matrix $\mathbb E[XX^T]$. Then
$$\frac{\int_{\mathbb R^d}\exp(-\tfrac12x^TKx+j^Tx)\,dx} {\int_{\mathbb R^d}\exp(-\tfrac12x^TKx)\,dx} =\int_{\mathbb R^d}e^{j^Tx}\,d\gamma_{K^{-1}}(x) =\exp\!\left(\tfrac12j^TK^{-1}j\right).$$
Equivalently, in the finite real Gaussian regulator with normalized weight $e^{-S}$ and $\hbar=1$, completing the source shift $\chi=K^{-1}j+\eta$ gives
$$\tfrac12\chi^TK\chi-j^T\chi=\tfrac12\eta^TK\eta-\tfrac12j^TK^{-1}j.$$
Use $\hbar=1$ and coordinate/source units for which $x^TKx$ and $j^Tx$ are dimensionless. Both integrals are finite; their common Gaussian normalization cancels in the ratio. No infinite-dimensional Lebesgue measure or determinant is asserted.

## Facts & Assumptions

**Given:** AC; a finite dimension $d\ge1$; symmetric positive-definite $K$; $j\in\mathbb R^d$; and the covariance convention in the Statement.

[A1] [[def-axiom-of-choice]]: AC is the assumption used by the finite-dimensional normal-law and density suppliers.

[F1] [[def-multivariate-normal-law]]: $N_d(m,\Sigma)$ has covariance $\Sigma$ for every real symmetric positive-semidefinite $\Sigma$.

[F2] [[thm-nondegenerate-multivariate-normal-law-has-density]]: if $\Sigma$ is positive definite, $N_d(m,\Sigma)$ has density $(2\pi)^{-d/2}\det(\Sigma)^{-1/2}\exp(-\tfrac12(x-m)^T\Sigma^{-1}(x-m))$.

[F3] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: Lebesgue measure is invariant under translations.

[F4] [[def-measure-preserving-transformation-and-system]]: a measurable self-map is measure preserving when inverse images preserve measure.

[F5] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: a measure-preserving map preserves integrals of nonnegative measurable functions, including extended-valued integrals.

## Proof

**Proof technique:** direct Gaussian density and translation.

**Given:** The objects and conventions in the Statement.

1.1 By [F1]–[F2], $\gamma_{K^{-1}}$ has Lebesgue density $c_K\exp(-\tfrac12x^TKx)$, where $c_K=(2\pi)^{-d/2}\det(K^{-1})^{-1/2}>0$. The expectation in the Statement is therefore the ratio of the displayed Lebesgue integrals, provided the numerator is finite. [A1, F1, F2, given]

2.1 Since $K$ is invertible, direct expansion gives
$$\tfrac12x^TKx-j^Tx=\tfrac12(x-K^{-1}j)^TK(x-K^{-1}j)-\tfrac12j^TK^{-1}j.$$
The translation $x\mapsto x-K^{-1}j$ preserves Lebesgue measure by [F3]–[F5], so the numerator is the denominator multiplied by $\exp(\tfrac12j^TK^{-1}j)$. The denominator is finite and positive because it is the normalizing integral of the probability density in [F2]; hence the numerator is also finite, and division proves both equalities. Expanding the same square proves the action identity. [F2, F3, F4, F5, step 1.1, algebra] ∎
