---
id: def-kac-moody-algebra-associated-to-a-gcm
kind: definition
title: "Kac moody algebra associated to a gcm"
status: published
origin: pipeline
deps: ["lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Definition 1.4.1, p.16"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

The **Kac–Moody algebra** of $A$ is $\mathfrak g(A)=\widetilde{\mathfrak g}(A)/\mathfrak r$, using the largest Cartan-disjoint ideal constructed in [[lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h]]. We retain the names $h,e_i,f_i$ for their images and put $\mathfrak n^\pm=\widetilde{\mathfrak n}^\pm/\mathfrak r^\pm$.

The Cartan embeds because $\mathfrak r\cap\mathfrak h=0$. The sign-changing involution preserves $\mathfrak r$ by its defining largest-ideal property, and descends. Every nonzero ideal of $\mathfrak g(A)$ meets $\mathfrak h$ nontrivially: otherwise its inverse image would be a larger Cartan-disjoint ideal in $\widetilde{\mathfrak g}$. This does not assert simplicity for singular or decomposable matrices.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Definition 1.4.1, p.16.
