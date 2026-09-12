---
id: thm-kac-moody-denominator-identity
kind: theorem
title: Kac Moody denominator identity
deps: ["lem-the-denominator-quotient-has-only-imaginary-cone-support", "lem-casimir-norm-excludes-nonzero-denominator-corrections"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Theorem 10.2.1 at Lambda=0
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Theorem 11.2.1 at lambda=0
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a finite symmetrizable generalized Cartan matrix, with Weyl vector $\rho$, positive roots $\Delta^+$ and root multiplicities $m_\alpha$,
$$e^\rho\prod_{\alpha\in\Delta^+}(1-e^{-\alpha})^{m_\alpha}=\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho}.$$
Both sides are coefficientwise locally finite in the downward-cone completion.

## Facts & Assumptions

**Given:** The stated symmetrizable root datum.

[F1] [[lem-the-denominator-quotient-has-only-imaginary-cone-support]] constructs the locally finite alternant $A_\rho$ and quotient $C=D/A_\rho$.

[F2] [[lem-casimir-norm-excludes-nonzero-denominator-corrections]] proves $C=1$.

## Proof

1.1 By F1 the normalized alternant $a=e^{-\rho}A_\rho$ has constant coefficient one and an inverse, and the normalized product $p=e^{-\rho}D$ satisfies $p=aC$. The product is coefficientwise defined. [F1, algebra]

2.1 F2 gives $C=1$, hence $p=a$ by step 1.1. Multiplying by the monomial $e^\rho$ gives exactly the asserted equality, with the original exponents $m_\alpha$ on every factor. All products used are coefficientwise finite by F1. [F1, F2, step 1.1, algebra] ∎
