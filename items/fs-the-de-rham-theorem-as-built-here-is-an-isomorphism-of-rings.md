---
id: "fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings"
kind: "false-statement"
title: "The vector-space de Rham comparison is automatically a ring isomorphism"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-de-rham-integration-respects-wedge-and-cup-in-cohomology","def-singular-cohomology-ring"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Joel W. Robbin, The de Rham Theorem, multiplicative comparison discussion
      url: https://people.math.wisc.edu/~jwrobbin/751dir/deRham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "counterexample"
---

## Statement

**False.** Once the de Rham comparison has been proved to be a degreewise vector-space isomorphism, it is automatically an isomorphism of graded rings, without a separate comparison of wedge and cup products.

## Facts & Assumptions

[F1] [[def-singular-cohomology-ring]] defines the target multiplication by the front/back cup product on representatives.

[F2] [[lem-de-rham-integration-respects-wedge-and-cup-in-cohomology]] supplies the additional cochain-homotopy identity showing that integration takes wedge products to cup products on cohomology.

## Refutation

**Given:** A degreewise vector-space comparison, with no multiplicativity hypothesis.

1.1 A degreewise linear isomorphism need not preserve multiplication even when it preserves the unit. Let $A=\mathbb R[u]/(u^3)$ with $|u|=2$, and define the degree-preserving linear bijection $T:A\to A$ by $$T(1)=1,\qquad T(u)=2u,\qquad T(u^2)=2u^2.$$ It is invertible on the basis $(1,u,u^2)$, but $T(u^2)=2u^2$ whereas $T(u)T(u)=4u^2$. Hence linear bijectivity alone cannot imply multiplicativity. [construct, algebra]

2.1 In the de Rham comparison the source product is wedge and the target product is the cup product of [F1]. The missing assertion is therefore the equality $I_*([\alpha]\wedge[\beta])=I_*[\alpha]\smile I_*[\beta]$. This does not follow from degreewise bijectivity; [F2] proves it by constructing a specific cochain homotopy between $I(\alpha\wedge\beta)$ and $I\alpha\smile I\beta$. Only after adjoining that result may a bijective de Rham comparison be called a ring isomorphism. [F1, F2, step 1.1]

3.1 The zero ring and empty-space cases satisfy multiplicativity vacuously, and in degree zero on a point both products are ordinary scalar multiplication; neither special case establishes the general product law. The unit alone is insufficient, as step 1.1 already preserves it. No endpoint or representative-choice issue occurs, and [F2]'s compatibility is choice-free. The false claim is the word "automatically," not the ring theorem obtained after proving [F2]. [F1, F2, step 1.1, step 2.1] ∎
