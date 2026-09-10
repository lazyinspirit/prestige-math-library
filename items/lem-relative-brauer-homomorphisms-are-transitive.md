---
id: lem-relative-brauer-homomorphisms-are-transitive
kind: lemma
title: Relative Brauer homomorphisms are transitive
deps: [def-relative-brauer-homomorphism, lem-brauer-homomorphism-is-conjugation-equivariant]
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

Let $P\le G$ be a $p$-subgroup. If $Q\trianglelefteq R\trianglelefteq P$ and also $Q\trianglelefteq P$, then on $(kC_G(Q))^P$ one has $\operatorname{Br}_{P/R}\circ\operatorname{Br}_{R/Q}=\operatorname{Br}_{P/Q}$. Also $\operatorname{Br}_{P/Q}(\operatorname{Br}_Q(a))=\operatorname{Br}_P(a)$ for $a\in(kG)^P$ when $Q\trianglelefteq P$.

## Facts & Assumptions

**Given:** The $p$-subgroup $P$ and the normalities in the statement; normality is not assumed transitive.

[F1] Relative maps truncate from one centralizer to the smaller centralizer on the appropriate fixed domain. ([[def-relative-brauer-homomorphism]])

[F2] Brauer maps commute with conjugation. ([[lem-brauer-homomorphism-is-conjugation-equivariant]])

## Proof

**Proof technique:** direct.

1.1 For $a\in(kC_G(Q))^P$, truncating to $C_G(R)$ leaves a $P$-fixed element: $P$ normalizes both centralizers by the stated normalities and permutes their basis coefficients, so [F2] applies. Thus the composite has the displayed domain. Since $C_G(P)\subseteq C_G(R)\subseteq C_G(Q)$, truncating first to the middle set and then to the smallest retains exactly the same coefficients as truncating directly to the smallest. [F1, F2]

2.1 If instead $a\in(kG)^P$ and $Q\trianglelefteq P$, equivariance puts $\operatorname{Br}_Q(a)$ in $(kC_G(Q))^P$. Truncation to $C_G(Q)$ and then $C_G(P)$ retains exactly the $C_G(P)$ coefficients of $a$. This proves the second identity, also when any two subgroups agree. [F1, F2] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
