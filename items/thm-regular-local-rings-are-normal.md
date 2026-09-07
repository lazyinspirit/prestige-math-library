---
id: "thm-regular-local-rings-are-normal"
kind: "theorem"
title: "regular local rings are normal"
deps: ["lem-regular-local-domain-induction", "cor-regular-local-ring-satisfies-r-one", "cor-regular-local-ring-satisfies-s-two", "thm-serre-normality-criterion", "thm-localisation-and-polynomial-extension-of-regular-rings", "lem-reduced-noetherian-total-fractions-and-normal-components"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.157.5"
      url: "https://stacks.math.columbia.edu/tag/031O"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every regular local ring is an integrally closed domain. Every commutative regular Noetherian ring is normal and is a finite product of regular domains, with the zero ring corresponding to the empty product.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-domain-induction]]: Every regular local ring is an integral domain.

[F2] [[cor-regular-local-ring-satisfies-r-one]]: Every regular local ring satisfies $(R_1)$. Its height-zero localizations are fields, and its height-one localizations are DVRs.

[F3] [[cor-regular-local-ring-satisfies-s-two]]: Every regular local ring satisfies $(S_j)$ for every integer $j\ge0$, in particular $(S_2)$.

[F4] [[thm-serre-normality-criterion]]: For every commutative Noetherian ring $R$, including rings with zero divisors and the zero ring, $R$ is normal if and only if it satisfies $(R_1)$ and $(S_2)$.

[F5] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. More generally, for a finite module over any commutative Noetherian ring, projective dimension is the supremum of its prime-local projective dimensions. Dedekind domains and their finite polynomial extensions are regular.

[F6] [[lem-reduced-noetherian-total-fractions-and-normal-components]]: For a reduced commutative Noetherian ring $R$ with minimal primes $\mathfrak p_1,\ldots,\mathfrak p_s$, there is a canonical isomorphism $Q(R)\cong\prod_{i=1}^s\operatorname{Frac}(R/\mathfrak p_i)$. The following are equivalent: $R$ is normal; $R$ is integrally closed in $Q(R)$; and $R$ is a finite product of normal domains. For $R=0$ this is the empty product.

## Proof

1.1 A regular local ring is a domain and satisfies $(R_1)$ and $(S_2)$. Serre normality therefore makes it normal; at its maximal ideal the localization is the ring itself, so it is integrally closed. [F1, F2, F3, F4]

2.1 For a regular Noetherian ring, every prime localization is regular local, hence an integrally closed domain by the preceding argument. It is therefore normal. The normal-component theorem expresses it as a finite product of normal domains; each factor is regular since its prime localizations are those of the product. The zero ring is the empty product. No factoriality assertion is made. [F5, F4, F6, step 1.1] ∎
