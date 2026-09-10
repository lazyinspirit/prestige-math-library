---
id: def-brauer-homomorphism-for-a-p-subgroup
kind: definition
title: Brauer homomorphism for a p subgroup
deps: [def-p-blocks-by-primitive-central-idempotents]
provenance:
  statement: literature-derived
  proof: not-applicable
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
---

## Definition

Let $G$ be finite, $k$ the characteristic-$p$ residue field from [[def-p-blocks-by-primitive-central-idempotents]], and $P\le G$ a $p$-subgroup. On the conjugation-fixed algebra $A_P=(kG)^P$ define
$$\operatorname{Br}_P\left(\sum_{g\in G}a_gg\right)=\sum_{g\in C_G(P)}a_gg\quad\in kC_G(P).$$
This coefficient projection is called the **Brauer map**. The next theorem proves it is a unital surjective algebra homomorphism on this domain. No multiplicativity is asserted on all of $kG$. For $P=1$ it is the identity.

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
