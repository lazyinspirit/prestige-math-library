---
id: lem-levine-tristram-one-sided-averages-exist
kind: lemma
title: "One-sided Levine–Tristram signature limits exist"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - def-levine-tristram-hermitian-form-and-signature
  - lem-levine-tristram-hermitian-form-singular-set
  - lem-square-seifert-presentation-and-alexander-normalization
  - lem-complex-hermitian-eigenvalues-lipschitz
  - thm-intermediate-value
  - def-knot-seifert-pairing-and-matrix
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477)"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1, printed pp. 3–4: Hermitian form convention; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected."
---
## Statement

Assume the hypotheses and conventions of the Levine–Tristram form definition. At every root $\omega_0\in S^1\setminus\{1\}$ of $\Delta_K$, each one-sided limit of the nonroot signature as the parameter moves along the unit circle to $\omega_0$ exists and is an integer.

## Statement references

[[def-levine-tristram-hermitian-form-and-signature|The matrix and one-sided limit convention]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot, its Seifert matrix $V$, and an Alexander root $\omega_0\ne1$.

[A1] Full AC and the chosen surface/basis supply a finite real Seifert matrix. [[def-knot-seifert-pairing-and-matrix]], [[def-axiom-of-choice]]

[F1] $H_{e^{i\theta}}$ is a continuous Hermitian matrix family, and its singular parameters away from $1$ are exactly the zeros of a nonzero Alexander polynomial. [[def-levine-tristram-hermitian-form-and-signature]], [[lem-levine-tristram-hermitian-form-singular-set]], [[lem-square-seifert-presentation-and-alexander-normalization]]

[F2] Ordered Hermitian eigenvalues vary continuously, indeed Lipschitzly in operator norm. [[lem-complex-hermitian-eigenvalues-lipschitz]]

[F3] A continuous real function on an interval cannot take both positive and negative values without vanishing between them. [[thm-intermediate-value]]

## Proof

1.1 The entries of $H_{e^{i\theta}}$ are continuous functions of $\theta$. By [F2], each ordered eigenvalue $\lambda_j(\theta)$ is continuous. The determinant presentation in [F1] is a nonzero Laurent polynomial because its value at $t=1$ is $\pm1$; hence it has only finitely many roots on the unit circle. Choose $\epsilon>0$ so that each punctured one-sided arc $(\theta_0-\epsilon,\theta_0)$ and $(\theta_0,\theta_0+\epsilon)$ contains no other root. On each such arc, [F1] makes every eigenvalue nonzero. [A1, F1, F2, given, choose]

2.1 On either arc, a continuous real function $\lambda_j$ that never vanishes has constant sign: if it took both signs, [F3] would give a zero. Thus every positive/negative eigenvalue count is constant on each one-sided arc, and the signature there is a fixed integer. Each one-sided limit is that integer. [F1, F3, step 1.1, algebra] ∎

