---
id: def-levine-tristram-hermitian-form-and-signature
kind: definition
title: "Levine–Tristram Hermitian form and signature"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-seifert-matrix-s-equivalence
  - lem-levine-tristram-hermitian-form-singular-set
  - def-axiom-of-choice
justified_by:
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - lem-levine-tristram-one-sided-averages-exist
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony Conway, The Levine–Tristram signature: a survey, 2019–20 MATRIX Annals (2021), pp. 31–56 (arXiv:1903.04477)"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1, printed pp. 2–4: Hermitian form convention; §2.4, printed p. 6: averaged signature at roots; complete 18-page PDF inspected."
---
## Definition

Assume full AC. Let $K$ be a smooth oriented knot in the oriented standard $3$-sphere, let $F$ be a connected compact smooth oriented surface with oriented boundary $K$, let $V$ be the matrix of the Seifert pairing $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ in an ordered integral basis, and let $\omega\in S^1\setminus\{1\}$. Define the **Levine–Tristram Hermitian matrix** by
$$H_\omega(V)=(1-\omega)V+(1-\bar\omega)V^T.$$
It is Hermitian because $V$ is real and $\bar\omega=\omega^{-1}$. Its signature is the number of positive eigenvalues minus the number of negative eigenvalues, both counted with multiplicity and with zero eigenvalues omitted. When $\Delta_K(\omega)\ne0$, define $\sigma_\omega(K)$ to be this signature. At a root $\omega_0\ne1$ of $\Delta_K$, define $\sigma_{\omega_0}(K)$ to be the arithmetic mean of the two one-sided limits of $\sigma_{e^{i\theta}}(K)$ as $\theta$ approaches an argument of $\omega_0$ from below and above. The invariance and one-sided-existence lemmas justify treating these values as independent of the chosen surface and basis.

## Definition references

[[def-knot-seifert-pairing-and-matrix|The Seifert matrix from positive push-offs and linking numbers]]

[[lem-levine-tristram-hermitian-form-singular-set|Singularity occurs exactly at Alexander roots]]

[[lem-seifert-stabilization-preserves-levine-tristram-signature|Surface and basis invariance]]

[[lem-levine-tristram-one-sided-averages-exist|Existence of one-sided limits at roots]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot, a connected compact oriented spanning surface, an ordered integral basis, and a point $\omega$ on the unit circle other than $1$.

[A1] Full AC is the stated ambient axiom for the Alexander-module and Seifert-pairing conventions. [[def-axiom-of-choice]]

[F1] For real $V$, $H_\omega(V)^*=H_\omega(V)$ because conjugation exchanges the coefficients of $V$ and $V^T$. [[lem-levine-tristram-hermitian-form-singular-set]]

[F2] Integral basis change is unimodular congruence; elementary surface enlargements are the two rank-two Seifert matrices in the S-equivalence definition. [[def-seifert-matrix-s-equivalence]]

