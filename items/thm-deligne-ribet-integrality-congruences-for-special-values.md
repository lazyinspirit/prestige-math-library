---

id: thm-deligne-ribet-integrality-congruences-for-special-values
kind: theorem
title: "Deligne–Ribet integrality measure and congruences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-totally-real-ray-class-group-and-norm-character
  - thm-hilbert-modular-g-expansion-integrality-at-all-cusps
  - thm-hilbert-eisenstein-special-value-expansion
  - thm-siegel-rationality-of-totally-real-abelian-l-values
  - def-schwartz-functions-on-the-total-real-ideal-space
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_level: 24
justified_by: []
axiom_use: >-
  AC, Countable Choice, and DC are used through the moduli and global class-field/Artin interfaces; the bounded measure construction also depends on the finite-level arithmetic.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "P. Deligne and G. Pappas"
      url: "https://www.numdam.org/item/CM_1994__90_1_59_0.pdf"
      locator: "Introduction pp. 59\u201360; \u00a7\u00a72.1\u20132.4, 3.1\u20133.5, 4.1\u20134.5."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
    - title: "E. Goren"
      url: "https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf"
      locator: "Ch. 5 \u00a75.1, pp. 65\u201367; \u00a75.2, pp. 147\u2013151."
verification: {}
---
## Statement

Assume AC, Countable Choice, and DC through the named moduli and class-field interfaces. Let $K\ne\mathbb Q$ be totally real, let $\mathcal I_K$ be its Deligne–Ribet ideal space, and let $c\in\mathcal G_K$ be an element of the inverse-limit strict ray class group. Write $\widehat{\mathbb Q}=\widehat{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q$ for the finite adeles of $\mathbb Q$. For a locally constant compactly supported function $\phi:\mathcal I_K\to\widehat{\mathbb Q}$, put $\phi_c(x)=\phi(cx)$ and
$$A_c(1-k,\phi)=L(1-k,\phi)-N(c)^kL(1-k,\phi_c),$$
where the special-value functional is extended linearly from rational-valued finite-congruence test functions. There is a bounded $\widehat{\mathbb Z}$-valued measure $\mu_c$ on the full space $\mathcal I_K$ such that, for every integer $k\ge1$,
$$\int_{\mathcal I_K}N(x)^{k-1}\phi(x)\,d\mu_c(x)=A_c(1-k,\phi).$$
These moment identities are the Deligne–Ribet congruences; the weight-one Eisenstein correction is included in their construction. The integrals are understood componentwise in the finite adeles, with a common denominator on each compact support.

For a rational prime $p$, write $N_p$ and $\mu_{c,p}$ for the $p$-components. On the clopen subset $\mathcal I_K^{(p),\times}=\{x:N_p(x)\in\mathbb Z_p^\times\}$ the normalized bounded measure
$$\lambda_{c,p}=N_p^{-1}\,\mu_{c,p}|_{\mathcal I_K^{(p),\times}}$$
is defined, and for every locally constant compactly supported $\mathbb Q_p$-valued $\phi$ supported there it satisfies
$$\int_{\mathcal I_K^{(p),\times}}N_p(x)^k\phi(x)\,d\lambda_{c,p}(x)=A_c(1-k,\phi).$$
The normalized assertion is on the unit-norm locus; the full-space assertion is the one for $\mu_c$.

## Facts & Assumptions

**Given:** $K,c$, the ideal space $\mathcal I_K$, and the Schwartz function $\phi$.

[F1] Rational-valued special values at $1-k$ define distributions on finite congruence data of bounded-denominator supports. [[thm-siegel-rationality-of-totally-real-abelian-l-values]] [[def-schwartz-functions-on-the-total-real-ideal-space]]

[F2] The Hilbert Eisenstein series has the stated special-value constant terms and integral nonconstant divisor-sum coefficients at every cusp. [[thm-hilbert-eisenstein-special-value-expansion]]

[F3] A form with one integral cusp expansion has integral nonconstant coefficients at every cusp, with integral differences between constant terms. [[thm-hilbert-modular-g-expansion-integrality-at-all-cusps]]

[F4] The norm is continuous and multiplicative on $\mathcal I_K$ with values in $\widehat{\mathbb Q}$; its restriction to invertible elements has values in $\widehat{\mathbb Z}^{\times}$. [[def-totally-real-ray-class-group-and-norm-character]]

[A1] The finite-level congruence-to-measure argument, including its parity reduction and the weight-one correction, has not been reconstructed from [F1]–[F4] in this item. The actual global Artin inputs in the ray-class interpretation remain conditional as recorded in the cross-batch audit.

[A2] AC, Countable Choice, and DC enter through the cited moduli and class-field suppliers. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data above.

1.1 For each $k$, rational special values define the difference distribution $\phi\mapsto A_c(1-k,\phi)$ on rational-valued finite-congruence test functions, then on finite-adelic-valued ones by finite linearity, by [F1]. The case $k=1$ specifies the candidate measure distribution; its boundedness and the higher moment identities still require proof. The multiplier $N^{k-1}\phi$ is continuous and compactly supported by [F4], with a common denominator on each compact support. [F1, F4, A2, given]

2.1 The Eisenstein construction [F2] and all-cusp integrality [F3] provide the intended congruences between these distributions on locally constant functions. AC, Countable Choice, and DC enter through [A2]. However, the finite-level parity argument that proves the required $\widehat{\mathbb Z}$-boundedness, and the passage from compatible congruences to a measure, are not proved here; thus existence of $\mu_c$ is escalated. [F2, F3, A1, A2]

## Normalization and construction status

Deligne–Ribet Theorem (8.2), printed p. 278, states the full-space measure $\mu_c$ and its $N^{k-1}$ moments. The source does not insert an inverse norm at points of nonunit or zero norm. The local normalization above is multiplication by a continuous unit-valued function on its stated locus, so it is bounded whenever $\mu_c$ exists. Rational special values, finite-level parity/boundedness, the weight-one correction, and the congruence-to-measure construction remain the proof obligations in [A1]; this source correction does not discharge them.

## Statement references

[[def-totally-real-ray-class-group-and-norm-character]]

[[thm-hilbert-modular-g-expansion-integrality-at-all-cusps]]

[[thm-hilbert-eisenstein-special-value-expansion]]

[P. Deligne and K. A. Ribet, Theorem 8.2 and proof, pp. 278–285](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
