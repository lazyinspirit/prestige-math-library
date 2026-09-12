---
id: def-relative-brauer-homomorphism
kind: definition
title: Relative Brauer homomorphism
deps: [def-brauer-homomorphism-for-a-p-subgroup, thm-brauer-homomorphism-is-multiplicative]
provenance:
  statement: literature-derived
  proof: not-applicable
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
---

## Definition

For $Q\trianglelefteq P\le G$ with $P$ a $p$-group, put $B_Q=kC_G(Q)$ and define
$$\operatorname{Br}_{P/Q}:B_Q^P\longrightarrow kC_G(P),\qquad \sum_{g\in C_G(Q)}a_gg\longmapsto\sum_{g\in C_G(P)}a_gg.$$
Normality makes $P$ act on $C_G(Q)$, and $Q$ acts trivially, so this is a $P/Q$ action. The orbit calculation in [[thm-brauer-homomorphism-is-multiplicative]] applies to its permutation basis and proves that this map is a unital surjective algebra homomorphism. In particular a product coefficient at a $P$-fixed basis element has cancelling non-singleton $P/Q$ orbits; the surviving pairs are in $C_G(P)$. This specifies the domain needed for a **relative Brauer map**, extending the notation in [[def-brauer-homomorphism-for-a-p-subgroup]]. When $Q=P$ it is the identity on $kC_G(P)$.

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
