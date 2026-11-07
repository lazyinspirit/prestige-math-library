---
id: thm-elliptic-curve-y2-x3-minus-3-has-exactly-one-q-point
kind: theorem
title: The curve y² = x³ − 3 has exactly one rational point
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - thm-plane-cubic-chord-tangent-group-law
  - lem-mordell-minus-three-three-divisibility
  - lem-elliptic-y2-x3-minus-3-has-trivial-rational-torsion
  - thm-mordell-weil-for-abelian-varieties-over-number-fields
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC and DC are inherited from the finite-generation supplier and are also assumed in the consuming example.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Bjorn Poonen, Rational Points on Varieties
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
      locator: The consuming quadric-bundle example cites this curve. The cubic descent and torsion proof are supplied by the explicit local helpers, not by attributing an unexamined computational rank claim to this reference.
---

## Statement

Assume AC and DC. Let $E/\mathbb Q$ be the smooth projective curve $y^2=x^3-3$, with its point $O$ at infinity. Then $E(\mathbb Q)=\{O\}$.

## Statement references

[[thm-plane-cubic-chord-tangent-group-law]]

## Facts & Assumptions

**Given:** AC, DC, and the displayed curve.

[F1] The cubic is an elliptic curve and its rational points form an abelian group with identity $O$. [[thm-plane-cubic-chord-tangent-group-law]]

[F2] Every rational point is divisible by $3$ in that group. [[lem-mordell-minus-three-three-divisibility]]

[F3] The rational torsion subgroup is trivial. [[lem-elliptic-y2-x3-minus-3-has-trivial-rational-torsion]]

[F4] The rational points of an abelian variety over a number field form a finitely generated abelian group. [[thm-mordell-weil-for-abelian-varieties-over-number-fields]]

[F5] A finitely generated abelian group is a direct sum of a finite torsion subgroup and a free abelian group of finite rank. [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]

[A1] AC and DC are the inherited hypotheses of the arithmetic finite-generation theorem. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** combine the explicit cubic descent with finite generation and the separate torsion calculation.

1.1 By [F1] and [F4], $G=E(\mathbb Q)$ is a finitely generated abelian group. By [F5], write $G\cong\mathbb Z^r\oplus T$ with $T$ finite. The equality $G=3G$ from [F2] forces the induced multiplication-by-three map on $\mathbb Z^r$ to be surjective; hence $r=0$. Thus $G=T$ is torsion. [A1, F1, F2, F4, F5, given, algebra]

2.1 By [F3], $T=0$, so the only rational point is the identity $O$, which exists on the projective cubic. [F1, F3, step 1.1, algebra] ∎
