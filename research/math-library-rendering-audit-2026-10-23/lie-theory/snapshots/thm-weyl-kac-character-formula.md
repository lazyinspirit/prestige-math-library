---
id: thm-weyl-kac-character-formula
kind: theorem
title: Weyl Kac character formula
deps: ["thm-kac-moody-denominator-identity", "lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator", "thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kleshchev, Theorem 10.2.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Theorem 11.2.1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $A$ be a finite symmetrizable GCM and $\Lambda$ a dominant integral weight. With $P=\prod_{\alpha>0}(1-e^{-\alpha})^{\dim\mathfrak g_\alpha}$ and $D=e^\rho P$, one has
$$D\operatorname{ch}L(\Lambda)=\sum_{w\in W}\det(w)e^{w(\Lambda+\rho)},\qquad \operatorname{ch}L(\Lambda)=P^{-1}\sum_{w\in W}\det(w)e^{w(\Lambda+\rho)-\rho}.$$
These are equivalent coefficientwise identities in the downward-cone completion.

## Facts & Assumptions

**Given:** The stated datum and highest weight.

[F1] [[thm-kac-moody-denominator-identity]] identifies $D$ with its locally finite alternant.

[F2] [[lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator]] identifies every coefficient of the numerator, proves orbit distinctness, and bounds $\ell(w)$ by the height of $\Lambda+\rho-w(\Lambda+\rho)$.

[F3] [[thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules]] supplies integrability for dominant integral $\Lambda$.

## Proof

1.1 F3 permits application of F2. Its complete coefficient description gives the first displayed equality. In particular no additional exponents or cancellations from a stabilizer are omitted. Its length bound proves that at any fixed depth only finitely many Weyl terms occur. F1 ensures that the denominator here is the actual root-multiplicity product, not a product with artificial imaginary-root multiplicities. [F1, F2, F3, algebra]

2.1 The series $P$ has constant coefficient one and other support in $-Q^+\setminus\{0\}$. Its inverse is the formal geometric series in $1-P$: at depth $n$ only powers at most $n$ contribute, and finite telescoping verifies both inverse identities. Multiplying step 1.1 by $e^{-\rho}P^{-1}$ gives the second formula, with finite coefficient sums because each simple-root coordinate is bounded by the target depth. Conversely multiplication by $e^\rho P$ recovers the first. At $\Lambda=0$ this is F1, since the trivial module is the simple highest-weight module of weight zero. Empty root data give a single monomial. All operations are formal and choice-free. [F1, F2, step 1.1, algebra] ∎
