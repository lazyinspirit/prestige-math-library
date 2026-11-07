---
dependency_level: 7
id: def-tate-twist-of-an-l-adic-sheaf
kind: definition
title: Tate twists of rational adic sheaves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-l-adic-sheaf-as-compatible-system
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-roots-of-unity-in-a-field
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: J. S. Milne, Lectures on Étale Cohomology
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
      locator: Roots-of-unity systems and Tate twists in the adic duality conventions
---

## Definition

Let $\ell$ be invertible on a scheme $X$. For an étale $V\to X$, let $\mu_{\ell^n}(V)$ be the group of units $u\in\Gamma(V,\mathcal O_V)^\times$ satisfying $u^{\ell^n}=1$. With the module structure induced by exponentiation, the sheaves $\mu_{\ell^n}$ and transitions $u\mapsto u^\ell$ give the rank-one roots-of-unity system $\mathbb Z_\ell(1)$. Its rationalization is $\mathbb Q_\ell(1)$. The dual rank-one system is $\mathbb Z_\ell(-1)$, whose finite levels are $\underline{\operatorname{Hom}}_{\mathbb Z/\ell^n}(\mu_{\ell^n},\mathbb Z/\ell^n)$ with the dual compatible reductions. For an integer $r$, define $\mathbb Z_\ell(r)$ by tensor powers of the positive system for $r>0$, of the dual system for $r<0$, and by the constant unit system for $r=0$.

For a rational adic sheaf $F$, its **Tate twist** is $F(r)=F\otimes_{\mathbb Q_\ell}\mathbb Q_\ell(r)$, computed at finite integral levels by tensoring with the rank-one system and then rationalizing. For a normalized adic complex use derived tensor. Over $\mathbb F_q$, arithmetic Frobenius acts on the positive roots-of-unity stalk by $q$, and geometric Frobenius acts by $q^{-1}$; these conventions fix the signs of twists in cup-product and trace formulas.

## Definition references

[[def-l-adic-sheaf-as-compatible-system]]

[[def-lisse-l-adic-sheaf-on-a-scheme]]

[[def-roots-of-unity-in-a-field]]

[Milne, Lectures on Étale Cohomology](https://jmilne.org/math/CourseNotes/LEC.pdf)
