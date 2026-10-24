---
id: "fs-localization-identifies-a-quasi-isomorphism-with-an-identity-morphism"
kind: "false-statement"
deps: ["prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms", "prop-cohomology-factors-through-the-derived-category"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every quasi-isomorphism $s$, its image $Q(s)$ in the derived category is literally an identity morphism.

## Facts & Assumptions

**Given:** For every quasi-isomorphism $s$, its image $Q(s)$ in the derived category is literally an identity morphism.

[F1] Localization sends quasi-isomorphisms to invertible arrows ([[prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms]]).

[F2] Cohomology factors through the derived category ([[prop-cohomology-factors-through-the-derived-category]]).

## Refutation

1.1 Take $s=-1:\mathbb Z[0]\to\mathbb Z[0]$. Its degree-zero map is invertible, and all other cohomology groups are zero, so it is a quasi-isomorphism. Thus $Q(s)$ is invertible. [F1, algebra]

2.1 The descended $H^0$ sends $Q(s)$ to multiplication by $-1$, whereas it sends the identity to $1$. These maps differ on $1\in\mathbb Z$. A functor preserves equality, so $Q(s)$ is not the identity. Invertibility, which is what localization asserts, does not imply literal equality with the identity. [F2, step 1.1, algebra] ∎
