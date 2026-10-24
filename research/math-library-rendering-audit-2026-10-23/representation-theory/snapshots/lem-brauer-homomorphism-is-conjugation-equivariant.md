---
id: lem-brauer-homomorphism-is-conjugation-equivariant
kind: lemma
title: Brauer homomorphism is conjugation equivariant
deps: [def-brauer-homomorphism-for-a-p-subgroup]
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

For $g\in G$ and $a\in(kG)^P$, write ${}^ga=gag^{-1}$ and ${}^gP=gPg^{-1}$. Then ${}^ga\in(kG)^{{}^gP}$ and $\operatorname{Br}_{{}^gP}({}^ga)={}^g\operatorname{Br}_P(a)$.

## Facts & Assumptions

**Given:** $G,P,g,a$ as stated.

[F1] The map retains centralizer coefficients. ([[def-brauer-homomorphism-for-a-p-subgroup]])

## Proof

**Proof technique:** direct.

1.1 For $p\in P$, conjugating ${}^ga$ by $gpg^{-1}$ gives $gpap^{-1}g^{-1}=gag^{-1}$, proving the required fixed-algebra membership. Also $x\in C_G(P)$ holds exactly when $gxg^{-1}\in C_G(gPg^{-1})$, by conjugating each commutation equation. [F1]

2.1 Writing $a=\sum_x a_xx$, either order of conjugation and truncation yields $\sum_{x\in C_G(P)}a_xgxg^{-1}$. This is the required equality; no coefficient is changed. [F1, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
