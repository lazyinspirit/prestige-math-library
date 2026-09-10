---
id: lem-brauer-kernel-and-relative-trace-support
kind: lemma
title: Brauer kernel and relative trace support
deps: [def-brauer-homomorphism-for-a-p-subgroup, thm-brauer-homomorphism-is-multiplicative, thm-p-group-fixed-point-congruence]
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

For a $p$-subgroup $P$, $\ker\operatorname{Br}_P=\sum_{Q<P}\operatorname{Tr}_Q^P((kG)^Q)$. If $H\le G$, $a\in(kG)^H$, and $\operatorname{Br}_P(\operatorname{Tr}_H^G(a))\ne0$, then $P$ is conjugate into $H$.

## Facts & Assumptions

**Given:** Finite $G$, characteristic-$p$ field, and the subgroups and fixed elements stated.

[F1] Brauer truncation retains the $P$-fixed group basis elements. ([[def-brauer-homomorphism-for-a-p-subgroup]])

[F2] The fixed-algebra projection is multiplicative. ([[thm-brauer-homomorphism-is-multiplicative]])

[F3] Non-singleton $P$-orbits have cardinality divisible by $p$. ([[thm-p-group-fixed-point-congruence]])

## Proof

**Proof technique:** direct.

1.1 The conjugation-fixed space has a basis of orbit sums. A nontrivial orbit with representative $x$ and stabilizer $Q=C_P(x)<P$ has sum $\operatorname{Tr}_Q^P(x)$ and maps to zero. Conversely for $Q<P$ and $a\in(kG)^Q$, the coefficient of $z\in C_G(P)$ in $\operatorname{Tr}_Q^P(a)$ is $[P:Q]a_z=0$. Hence the traces are in the kernel and span precisely the orbit sums removed by truncation. For $P=1$ the kernel and empty trace sum are both zero. [F1, F2, F3]

2.1 In $\operatorname{Tr}_H^G(a)$, index the conjugates by $G/H$ and group them into $P$-orbits. At $z\in C_G(P)$, all coefficients within one orbit agree, since conjugation by $P$ fixes $z$. Every non-singleton orbit contributes zero. A surviving coefficient therefore requires a fixed coset $gH$, and $PgH=gH$ means $g^{-1}Pg\le H$. This proves the trace-support assertion. [F1, F3] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
