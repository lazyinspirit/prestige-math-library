---
id: fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative
kind: false-statement
title: "The Grothendieck ring of a tensor category is always commutative"
status: published
origin: pipeline
deps: [thm-duality-induces-an-anti-involution-on-the-grothendieck-ring]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Section 4.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

**False claim.** The Grothendieck ring of a tensor category is always commutative.

## Facts & Assumptions

**Given:** A tensor category.

[F1] Duality gives an anti-isomorphism, reversing product order ([[thm-duality-induces-an-anti-involution-on-the-grothendieck-ring]]).

## Refutation

**Proof technique:** direct.

1.1 Let $G=S_3$ and let $\mathbf{Vec}_G$ be the category of finite-dimensional $G$-graded vector spaces.  Its simple objects $\delta_g$ are indexed by $g\in G$, and $\delta_g\otimes\delta_h\cong\delta_{gh}$; it is a tensor category. [given, construct]

2.1 Thus $K_0(\mathbf{Vec}_G)\cong\mathbb Z[G]$.  Since $S_3$ is nonabelian, for example $(12)(23)\ne(23)(12)$, this ring is not commutative.  The order reversal in [F1] is consistent with, but does not remove, this counterexample. [step 1.1, F1] ∎
