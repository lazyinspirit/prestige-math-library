---
id: cor-weyl-kac-specializes-to-the-finite-weyl-character-formula
kind: corollary
title: Weyl Kac specializes to the finite Weyl character formula
deps: ["thm-weyl-kac-character-formula", "prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras", "lem-finite-type-kac-moody-roots-descend-to-simple-roots", "prop-real-root-spaces-are-one-dimensional-sl2-roots"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Theorem 10.2.1 and finite-type discussion
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Theorem 11.2.1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For finite-type $A$, Weyl–Kac becomes the ordinary Weyl character formula for the corresponding complex semisimple Lie algebra:
$$\operatorname{ch}L(\Lambda)=\frac{\sum_{w\in W}\det(w)e^{w(\Lambda+\rho)}}{e^\rho\prod_{\alpha\in\Delta^+}(1-e^{-\alpha})}.$$
Here the root set and Weyl group are finite, and all root multiplicities are one; the positive Borel fixes the highest-weight convention.

## Facts & Assumptions

**Given:** A finite-type GCM and dominant integral $\Lambda$.

[F1] The character formula is [[thm-weyl-kac-character-formula]].

[F2] [[prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras]] identifies the algebra as finite-dimensional semisimple with the specified simple-root/coroot matrix.

[F3] Real-root multiplicities are one by [[prop-real-root-spaces-are-one-dimensional-sl2-roots]].

[F4] Every finite-type root is real and the root set is finite by [[lem-finite-type-kac-moody-roots-descend-to-simple-roots]].

## Proof

1.1 By F4 the root set is finite and all its roots are real, so F3 gives multiplicity one. Weyl transformations permute the real roots. This permutation action is faithful: the finite-type Cartan matrix is nonsingular, so in its minimal realization the independent simple roots are a basis of the dual Cartan, and a linear map fixing every root fixes that basis. Thus $W$ embeds in the permutation group of a finite set and is finite. [F2, F3, F4, algebra]

2.1 Substitute the multiplicities of step 1.1 into F1. Its infinite-index notation is now the finite sum and finite product displayed above. The semisimple algebra, Cartan, simple coroot labels and positive generators coincide under F2's generator identification, so the simple highest-weight module and dominance convention are the same. This is the finite Weyl character formula with that positive Borel. The quotient denotes the equality after multiplication by its denominator, or the formal inverse used in F1; no division by a numerically zero specialization is made. Disconnected finite types are included by F2, and empty data give one monomial. No choice beyond finite linear algebra enters. [F1, F2, step 1.1, algebra] ∎
