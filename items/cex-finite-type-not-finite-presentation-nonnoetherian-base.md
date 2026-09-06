---
id: cex-finite-type-not-finite-presentation-nonnoetherian-base
kind: counterexample
title: "Finite type need not mean finite presentation"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-locally-finite-type-and-finite-type-morphism, def-locally-finite-presentation-morphism, def-affine-scheme]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 22"
      url: "https://stacks.math.columbia.edu/tag/01TY"
---
## Statement refuted

Every finite-type morphism is of finite presentation.

## Facts & Assumptions

**Given:** Let $k$ be a field, $A=k[x_1,x_2,\ldots]$, and $I=(x_1,x_2,\ldots)$. The ideal $I$ is not finitely generated: a finite list of its elements involves only finitely many variables and cannot generate a later variable.

[F1] A finite-type morphism is locally defined by finite-type ring maps [[def-locally-finite-type-and-finite-type-morphism]].

[F2] A locally finite-presentation morphism is locally defined by finitely presented ring maps [[def-locally-finite-presentation-morphism]].

## Counterexample

**Proof technique:** direct.

1.1 The quotient map $A\to A/I$ is generated as an $A$-algebra by the empty set, so it is of finite type and its affine scheme morphism is finite type. [F1, given]

2.1 The source is the single point corresponding to $I$. Every affine target neighbourhood contains some $D(f)$ with $f\notin I$. Modulo $I$, such an $f$ is a nonzero scalar. The vector space $I/I^2$ has basis given by the classes of the $x_i$, and localization at $f$ leaves it infinite-dimensional because $f$ acts on it by that nonzero scalar. Hence $$I_f/I_f^2\cong(I/I^2)_f$$ is not finitely generated over $A_f/I_f\cong k$, so $I_f$ itself is not finitely generated. Thus $A_f\to A_f/I_f$ is not finitely presented on any target neighbourhood of the source point. By [F2], the affine morphism is not locally of finite presentation and therefore not of finite presentation. [F2, step 1.1, algebra] ∎
