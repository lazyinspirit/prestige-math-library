---
id: thm-rademacher-symmetrization-bound
kind: theorem
title: "One-sided Rademacher symmetrization bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-rademacher-complexity
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-change-of-variables-for-expectation
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorem 3.3 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, JMLR 3 (2002), Theorem 8 and proof"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal Z,\mathcal A,P)$ be a probability space, let $m\ge1$, and let $\mathcal G$ be a nonempty class of measurable functions $g:\mathcal Z\to[0,1]$. Let $S=(Z_1,\ldots,Z_m)$ be IID with law $P$, let $S'=(Z_1',\ldots,Z_m')$ be an independent IID copy on a finite product probability extension, and let $\sigma_1,\ldots,\sigma_m$ be independent uniform signs independent of both samples. Write $P_mg=m^{-1}\sum_i g(Z_i)$ and $P_m'g=m^{-1}\sum_i g(Z_i')$. Assume the random suprema $\sup_g(Pg-P_mg)$, $\sup_g(P_m'g-P_mg)$, $\sup_g\sum_i\sigma_i(g(Z_i')-g(Z_i))$, and $\sup_g\sum_i\sigma_i g(Z_i)$ are measurable on their respective product sigma algebras. Then, with $\mathfrak R_m(\mathcal G)$ the expected one-sided Rademacher complexity,

$$\mathbb E_S\sup_{g\in\mathcal G}(Pg-P_mg)\le2\mathfrak R_m(\mathcal G).$$

This is a one-sided expectation inequality; it does not assert a tail bound or an absolute-value deviation bound. No choice axiom is assumed.

## Statement references

[[def-rademacher-complexity]]: $\mathfrak R_m(\mathcal G)$ is the expected empirical one-sided sign supremum with normalization $1/m$.

[Mohri et al., Theorem 3.3 proof, printed pp. 31–33](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): the complete ghost-sample and sign-symmetrization argument for the one-sided bound.

[Bartlett and Mendelson, Theorem 8 proof, printed pp. 466–467](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): an independent ghost-sample proof in their different $2/m$ absolute-value convention.

## Facts & Assumptions

**Given:** A probability law $P$, a nonempty measurable $[0,1]$-valued class, an IID sample, an independent copy, independent uniform signs and the stated measurability of the suprema.

[A1] The random suprema over the sample, independent copy and signs named in the Statement are measurable.

[F1] For each $g\in\mathcal G$, $Pg=\int g\,dP$, $P_mg=m^{-1}\sum_i g(Z_i)$, and $\mathfrak R_m(\mathcal G)=\mathbb E_S\mathbb E_\sigma\sup_{g\in\mathcal G}m^{-1}\sum_i\sigma_i g(Z_i)$. [[def-rademacher-complexity]]

[F2] IID means mutual independence with common law; a finite family of independent random elements has product joint law. [[def-identically-distributed-and-iid-random-variables]], [[thm-independent-random-elements-have-product-joint-law]]

[F3] For a measurable bounded $g$ and a random element with law $P$, its expectation is $\int g\,dP$. [[thm-change-of-variables-for-expectation]]

[F4] A finite product measure is determined by its rectangle values. Consequently, permuting coordinates of a finite product of the same probability law preserves that product law. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F5] Fubini gives equality of product and iterated integrals for an integrable product-measurable function on sigma-finite factors. Here each factor carries a probability measure and is sigma-finite, while the product-measurable sample-copy supremum is bounded on a probability product and hence integrable. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 For each fixed sample $S$ and each $g\in\mathcal G$, [F2]–[F3] give $\mathbb E_{S'}P_m'g=Pg$, so $Pg-P_mg=\mathbb E_{S'}(P_m'g-P_mg)$. For any bounded family $X_g$, $\sup_g\mathbb E X_g\le\mathbb E\sup_gX_g$, since each $\mathbb E X_g$ is at most $\mathbb E\sup_hX_h$. Applying this conditionally on $S$ and integrating, with [F5] to identify the iterated and joint product expectations, gives $\mathbb E_S\sup_g(Pg-P_mg)\le\mathbb E_{S,S'}\sup_g(P_m'g-P_mg)$. [A1, F1, F2, F3, F5, given, algebra]

2.1 By [F2], the $2m$ coordinates of $(S,S')$ have product law $P^{2m}$. For each fixed sign vector, swap $Z_i$ and $Z_i'$ exactly when $\sigma_i=-1$. This coordinate permutation preserves the product law by [F4] and sends each difference $g(Z_i')-g(Z_i)$ to $\sigma_i(g(Z_i')-g(Z_i))$. Averaging over the finite sign space gives $\mathbb E_{S,S'}\sup_g(P_m'g-P_mg)=\mathbb E_{S,S',\sigma}\sup_g m^{-1}\sum_i\sigma_i(g(Z_i')-g(Z_i))$. [A1, F2, F4, step 1.1]

3.1 For every pair of samples and sign vector, subadditivity gives $\sup_g m^{-1}\sum_i\sigma_i(g(Z_i')-g(Z_i))\le\sup_g m^{-1}\sum_i\sigma_i g(Z_i')+\sup_g m^{-1}\sum_i(-\sigma_i)g(Z_i)$. The first term has expectation $\mathfrak R_m(\mathcal G)$ by [F1] and the law of $S'$; the second has the same expectation because $-\sigma$ is uniform on the sign cube and $S$ has law $P^m$ by [F2]. Combining with steps 1.1–2.1 proves the result. [F1, F2, step 1.1, step 2.1, algebra] ∎
