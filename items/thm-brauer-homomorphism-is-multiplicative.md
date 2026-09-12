---
id: thm-brauer-homomorphism-is-multiplicative
kind: theorem
title: Brauer homomorphism is multiplicative
deps: [def-brauer-homomorphism-for-a-p-subgroup, thm-p-group-fixed-point-congruence]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
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

The Brauer map $\operatorname{Br}_P:(kG)^P\to kC_G(P)$ is a unital surjective $k$-algebra homomorphism.

## Facts & Assumptions

**Given:** A finite group, characteristic-$p$ field, and a $p$-subgroup $P$.

[F1] The Brauer map retains exactly the coefficients centralizing $P$. ([[def-brauer-homomorphism-for-a-p-subgroup]])

[F2] Non-singleton orbits of a finite $p$-group have size divisible by $p$. ([[thm-p-group-fixed-point-congruence]])

## Proof

**Proof technique:** direct.

1.1 Let $a=\sum a_xx$ and $b=\sum b_yy$ be $P$-fixed and fix $z\in C_G(P)$. The coefficient of $z$ in $ab$ is $\sum_{xy=z}a_xb_y$. Conjugation by $P$ preserves the indexing set, since $z$ centralizes $P$, and preserves each coefficient product. Each non-singleton orbit contributes its cardinality times one coefficient, which is zero in characteristic $p$. The singleton pairs are precisely those with both $x,y\in C_G(P)$. Hence this coefficient equals that of $z$ in $\operatorname{Br}_P(a)\operatorname{Br}_P(b)$. [F1, F2]

2.1 Equality at each basis element $z$ proves multiplicativity. Projection is $k$-linear, retains the identity group element, and fixes every element of $kC_G(P)$, which is contained in $(kG)^P$. It is therefore unital and surjective, including when $P=1$. [F1, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
