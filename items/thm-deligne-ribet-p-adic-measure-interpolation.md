---
id: thm-deligne-ribet-p-adic-measure-interpolation
kind: theorem
title: "Deligne–Ribet p-adic measure interpolates modified special values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-fourier-transform-on-the-total-real-ideal-space
  - def-p-adic-measure-on-profinite-abelian-group
  - def-schwartz-functions-on-the-total-real-ideal-space
  - def-totally-real-ray-class-group-and-norm-character
  - thm-deligne-ribet-integrality-congruences-for-special-values
  - thm-functional-equation-for-total-real-ideal-space-l-series
  - thm-hilbert-eisenstein-special-value-expansion
  - thm-hilbert-modular-g-expansion-integrality-at-all-cusps
  - thm-siegel-rationality-of-totally-real-abelian-l-values
justified_by: []
axiom_use: >-
  AC, Countable Choice, and DC are used through the cited moduli, ray-class, and class-field interfaces.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet, Values of Abelian L-Functions at Negative Integers over Totally Real Fields"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "§0 pp. 227–232 and §8.2 with proof, printed pp. 278–285"
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "§3.2, printed pp. 119–121"
verification: {}
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice through the named Hilbert–Blumenthal moduli, ray-class, and class-field interfaces. Let $K\ne\mathbb Q$ be a totally real number field, let $\mathfrak f$ be a nonzero integral conductor divisible by every prime above $p$, let $\mathcal I_{K,p}$ be the $p$-adic component of its Deligne–Ribet ideal space built from conductors divisible by $\mathfrak f$, on which the norm takes unit values, let $c$ be an element of the inverse-limit strict ray class group, and let $\phi:\mathcal I_{K,p}\to\mathbb Z_p$ be locally constant and compactly supported, factoring through a finite ray-class quotient of conductor divisible by $\mathfrak f$. For $k\ge1$, put $\phi_c(x)=\phi(cx)$ and define
$$A_c(1-k,\phi)=L(1-k,\phi)-N(c)^kL(1-k,\phi_c),$$
where the special-value functional is extended $\mathbb Q_p$-linearly from finite ray-class functions using the rational special values. The Deligne–Ribet measure assertion is that a bounded $\mathbb Z_p$-valued measure $\mu_c$ exists with
$$\int_{\mathcal I_{K,p}}N(x)^{k-1}\phi(x)\,d\mu_c(x)=A_c(1-k,\phi)$$
for every $k\ge1$. Since $N$ is a continuous unit-valued function on this component, the normalized measure $\lambda_c=N^{-1}\mu_c$ then satisfies $\int N(x)^k\phi(x)\,d\lambda_c(x)=A_c(1-k,\phi)$. The weight-one correction in the Hilbert Eisenstein constant term is part of the claimed construction.

## Statement references

[P. Deligne and K. A. Ribet, Theorem 8.2 and proof, §0.5, printed pp. 278–285](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §3.2, pp. 119–121](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)


## Facts & Assumptions

**Given:** AC, Countable Choice and Dependent Choice, the totally real field $K\ne\mathbb Q$, the conductor, ray-class element, integer $k$ and test function in the unchanged Statement.

[F1] The full-space Deligne–Ribet supplier states a bounded measure $\mu_c$ with $\int N^{k-1}\phi\,d\mu_c=A_c(1-k,\phi)$, and states its $p$-component restriction and inverse-norm normalization for every compactly supported $\mathbb Q_p$-valued function on the unit-norm locus. [[thm-deligne-ribet-integrality-congruences-for-special-values]]

[F2] The ideal space is the inverse limit over conductors, its norm is continuous, and the unit-norm $p$-component is the inverse image of $\mathbb Z_p^\times$. [[def-totally-real-ray-class-group-and-norm-character]]

[F3] Schwartz functions in the given scope are locally constant, compactly supported and factor through finite data on their support. [[def-schwartz-functions-on-the-total-real-ideal-space]]

[A1] The choice hypotheses in [F1]–[F3] are exactly the assumptions already present in the Statement. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** Restrict the declared full-space measure to its $p$-unit component and apply its normalized moment formula.

1.1 The nonzero conductors divisible by the fixed $\mathfrak f$ form a cofinal subsystem: for any conductor $\mathfrak g$, the product $\mathfrak f\mathfrak g$ is contained in both and supplies a common refinement. Therefore the inverse limit and its reductions are unchanged when restricted to these conductors. By [F2], the specified $\mathcal I_{K,p}$ is the $p$-unit norm locus of that same ideal space, and it is clopen because $\mathbb Z_p^\times$ is clopen in $\mathbb Q_p$. The stated test $\phi$ is compactly supported and belongs to the class allowed by [F1] and [F3]. [F1, F2, F3, A1, given, algebra]

2.1 Apply [F1] to the given $c$. Its $p$-component, restricted to the unit locus identified in step 1.1, is a bounded $\mathbb Z_p$-valued measure $\mu_c$ and satisfies $\int N^{k-1}\phi\,d\mu_c=A_c(1-k,\phi)$ for every $k\ge1$. Since $N$ is continuous and takes unit values on this locus, [F1] also defines $\lambda_c=N^{-1}\mu_c$ and gives $\int N^k\phi\,d\lambda_c=\int N^{k-1}\phi\,d\mu_c=A_c(1-k,\phi)$. The $\mathbb Z_p$-valued finite-conductor functions in the original Statement are included among the $\mathbb Q_p$-valued functions in [F1]. The weight-one term is inherited exactly from [F1], not obtained by substituting into an uncorrected higher-weight formula. This proves both displayed assertions at the unchanged scope. [F1, F2, F3, step 1.1, algebra] ∎
