---
id: lem-emx-lorentz-star-square
kind: lemma
title: Lorentzian duality sign
status: published
origin: session
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emx-lorentz-star
dependency_roles:
  def-emx-lorentz-star: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: John C. Baez and Javier P. Muniain, Gauge Fields, Knots, and Gravity (1994)
      url: https://djvu.online/file/8KettTaCShh22
      locator: Part I, §1.5.3, pp. 87–90, semi-Riemannian Hodge star and the complementary-basis calculation.
    - title: Fionn Fitzmaurice, Differential Geometry (notes for Peter Taylor's course, 2011)
      url: https://www.maths.tcd.ie/~fionn/dg/dg.pdf
      locator: §12.5, PDF p. 57, Lorentzian Hodge dual and its signature-dependent square formula.
proof_strategy: direct
---

## Statement

For the orientation and signature $\eta=\operatorname{diag}(-1,1,1,1)$ fixed in [[def-emx-lorentz-star]], the Hodge star satisfies $\star_\eta^2=(-1)^{k(4-k)+1}\operatorname{id}$ on $k$-forms, $0\le k\le4$. In particular, on two-forms $\star_\eta^2=-\operatorname{id}$, $\star_\eta(dx^0\wedge dx^1)=-dx^2\wedge dx^3$, and $\star_\eta(dx^2\wedge dx^3)=dx^0\wedge dx^1$.

## Statement references

[[def-emx-lorentz-star]]

## Facts & Assumptions

**Given:** The coframe, orientation, Lorentzian signs, and Hodge-star definition in the Statement.

[F1] [[def-emx-lorentz-star]] gives $\star_\eta e^I=\epsilon_I s(I,I^c)e^{I^c}$, with exactly one negative $\epsilon_i$, and defines the orientation sign $s(I,I^c)$.

## Proof

1.1 For any increasing $I\subseteq\{0,1,2,3\}$ of size $k$, apply [F1] twice to obtain $\star_\eta^2e^I=\epsilon_I\epsilon_{I^c}s(I,I^c)s(I^c,I)e^I$. [F1, given, algebra]

2.1 The product $\epsilon_I\epsilon_{I^c}$ is $-1$, since the two complementary index sets contain the unique negative metric sign exactly once. Reversing the blocks $I,I^c$ uses $k(4-k)$ transpositions, so $s(I,I^c)s(I^c,I)=(-1)^{k(4-k)}$. Thus the general square formula follows on the basis $e^I$. For $I=\{0,1\}$, the star is $-e^{23}$; for $I=\{2,3\}$, it is $e^{01}$, which gives the two displayed special cases. [F1, step 1.1, algebra] ∎
