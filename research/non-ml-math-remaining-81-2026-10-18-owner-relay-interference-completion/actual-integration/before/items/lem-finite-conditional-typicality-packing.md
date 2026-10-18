---
id: lem-finite-conditional-typicality-packing
kind: lemma
title: Conditional joint-typicality packing bound for finite alphabets
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-strongly-typical-set
  - def-it-finite-conditional-mutual-information
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the probability vectors and sums are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapters 12–13, conditional packing and joint-typicality error exponents, printed pp. 305–330.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Cambridge University Press prepublication book"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 18, §18.2, Shannon random-coding bound and Corollary 18.4 (information-density tails), printed pp. 351–355.
---

## Statement

Let $(V,U,Z)$ have any joint law $P_{VUZ}$ on finite alphabets. Fix $\eta>0$. For every sufficiently small strong-typicality tolerance, every sufficiently large $n$, and every fixed $(v^n,z^n)$ typical for the marginal $P_{VZ}$, an independent candidate word drawn from the product law $P_{U|V}^{\otimes n}(\cdot|v^n)$ satisfies
$$\Pr\{(v^n,U^n,z^n)\text{ is jointly typical for }P_{VUZ}\}\le e^{-n(I_P(U;Z|V)-\eta)}.$$
The conclusion includes the case that $V$ is constant, giving the exponent $I_P(U;Z)$.

## Facts & Assumptions

**Given:** A finite joint law $P_{VUZ}$, $\eta>0$, and fixed typical $(v^n,z^n)$.

[F1] [[def-it-finite-strongly-typical-set]]: typicality restricts empirical distributions to a finite-alphabet neighborhood of the target law and excludes unsupported atoms.

[F2] [[def-it-finite-conditional-mutual-information]]: $I(U;Z|V)$ is the finite conditional-KL average in nats.

## Proof

1.1 For any jointly typical supported candidate $u^n$,
$$\ln\frac{P_{U|V}^{\otimes n}(u^n|v^n)}{P_{U|V,Z}^{\otimes n}(u^n|v^n,z^n)}=n\sum_{v,u,z}\widehat P_{v^nu^nz^n}(v,u,z)\ln\frac{P(u|v)}{P(u|v,z)}.$$
The logarithms are finite on the positive target support. At $P_{VUZ}$ the finite sum equals $-I_P(U;Z|V)$ by [F2], and it is linear in the empirical probabilities. Choose the typicality tolerance small enough that every jointly typical triple has this sum at most $-I_P(U;Z|V)+\eta$. [F1, F2, given, algebra]

2.1 Sum the likelihood-ratio expression of step 1.1 over the jointly typical candidates. The target conditional law is a probability vector, so its mass on that set is at most one; the exponential likelihood ratio is at most $e^{-n(I_P(U;Z|V)-\eta)}$. This gives the claimed bound. Joint typicality excludes unsupported triples; on each supported target triple both conditional probabilities in the ratio are positive. [F1, step 1.1, algebra] ∎
