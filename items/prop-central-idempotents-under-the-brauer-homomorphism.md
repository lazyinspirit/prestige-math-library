---
id: prop-central-idempotents-under-the-brauer-homomorphism
kind: proposition
title: Central idempotents under the Brauer homomorphism
deps: [thm-brauer-homomorphism-is-multiplicative, def-p-blocks-by-primitive-central-idempotents]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

For a central block idempotent $b\in kG$, $\operatorname{Br}_P(b)$ is a central idempotent of $kC_G(P)$, possibly zero. It equals the sum of exactly those primitive central idempotents $e$ for which $\operatorname{Br}_P(b)e=e$.

## Facts & Assumptions

**Given:** A block $b$ and a $p$-subgroup $P$.

[F1] The Brauer map is a unital surjective algebra homomorphism. ([[thm-brauer-homomorphism-is-multiplicative]])

[F2] The identity is the sum of orthogonal primitive central block idempotents. ([[def-p-blocks-by-primitive-central-idempotents]])

## Proof

**Proof technique:** direct.

1.1 Multiplicativity gives $\operatorname{Br}_P(b)^2=\operatorname{Br}_P(b)$. Every element $c$ of the target has a lift $a$ in the domain. Since $b$ commutes with $a$, their images commute, so $\operatorname{Br}_P(b)$ is central. [F1]

2.1 Write $1=\sum e_j$ for the block decomposition of the centralizer algebra. Each $\operatorname{Br}_P(b)e_j$ is a central idempotent below primitive $e_j$, so is either zero or $e_j$: otherwise it and $e_j-\operatorname{Br}_P(b)e_j$ split $e_j$. Multiplying the decomposition of one by $\operatorname{Br}_P(b)$ yields exactly the asserted sum. If all products vanish, the sum is empty and equals zero. [F2, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
