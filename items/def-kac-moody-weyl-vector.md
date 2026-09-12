---
id: def-kac-moody-weyl-vector
kind: definition
title: Kac Moody Weyl vector
deps: ["def-realization-of-a-generalized-cartan-matrix", "def-simple-reflections-and-the-kac-moody-weyl-group"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 2.3
        and 10.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Chapter 11
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Definition

For the finite minimal realization in [[def-realization-of-a-generalized-cartan-matrix]], a **Weyl vector** is a functional $\rho\in\mathfrak h^*$ such that $\rho(h_i)=1$ for every simple coroot. It exists: the independent finite family $h_i$ extends to a basis of the finite-dimensional Cartan, and assigning value one on the $h_i$ and arbitrary values on the complementary basis defines such a functional.

If $\rho'$ is another choice, $\eta=\rho'-\rho$ vanishes on all $h_i$. The reflection formula of [[def-simple-reflections-and-the-kac-moody-weyl-group]] gives $s_i\eta=\eta$ for every $i$, hence $w\eta=\eta$ for each finite Weyl word. Therefore
$$w(\Lambda+\rho')-\rho'=w(\Lambda+\rho)-\rho.$$
A shifted alternant with exponent $w(\Lambda+\rho)$ and a denominator with prefactor $e^\rho$ both acquire the same monomial factor $e^\eta$ when $\rho$ changes, so their quotient is unchanged whenever these formal expressions are defined. If the simple coroots span the Cartan, the choice is unique; otherwise the free complementary values account for exactly its nonuniqueness. Only a finite basis extension is used, not AC.
