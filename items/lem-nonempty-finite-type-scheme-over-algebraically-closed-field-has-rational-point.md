---
id: lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point
kind: lemma
title: "A nonempty finite-type scheme over an algebraically closed field has a rational point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - def-axiom-of-choice
  - def-affine-open-subscheme
  - def-algebraically-closed-field
  - def-finite-type-and-module-finite-algebras
  - def-locally-finite-type-and-finite-type-morphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Corollary 13.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "§13, Corollary 13.9, printed p. 60 / PDF p. 60; complete coordinate-form proof inspected 2026-10-26."
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary (15.5)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
      locator: "Chapter 15, Corollary (15.5), PDF p. 98; complete proof inspected 2026-10-26."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let
$X$ be a nonempty scheme of finite type over $k$. Then $X$ has a $k$-rational
point.

## Statement references

[[def-axiom-of-choice]]

[[def-algebraically-closed-field]]

[[def-finite-type-and-module-finite-algebras]]

[[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and a nonempty finite-type
$k$-scheme $X$.

[A1] AC states that every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F1] Every point of a scheme has an affine open neighbourhood; for a finite-type
$k$-scheme such an affine open has coordinate ring a finite-type $k$-algebra.
([[def-affine-open-subscheme]],
[[def-locally-finite-type-and-finite-type-morphism]])

[F2] A finite-type $k$-algebra is a quotient of a polynomial ring in finitely
many variables over $k$.
([[def-finite-type-and-module-finite-algebras]])

[F3] Every maximal ideal of $k[x_1,\ldots,x_n]$ is the evaluation ideal of a
unique point of $k^n$.
([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Proof technique:** choose a maximal ideal in a nonzero affine chart and apply
the coordinate form of the weak Nullstellensatz.

**Given:** The data above.

1.1 Since $X$ is nonempty, choose a point $x\in X$ and an affine open neighbourhood $U=\operatorname{Spec}A$ of $x$. By [F1], $A$ is a finite-type $k$-algebra. It is nonzero because $U$ is nonempty. [F1, given, choose]

2.1 By [A1] and Zorn's lemma, the partially ordered set of proper ideals of $A$ has a maximal member $\mathfrak m$: the union of any chain of proper ideals is proper, so it is an upper bound in that set. By [F2], write $A\cong k[x_1,\ldots,x_n]/I$ for an ideal $I$, and let $\widetilde{\mathfrak m}$ be the inverse image of $\mathfrak m$ in the polynomial ring. Since $A/\mathfrak m$ is a field, $\widetilde{\mathfrak m}$ is maximal. By [F3], $\widetilde{\mathfrak m}=(x_1-a_1,\ldots,x_n-a_n)$ for some $a_i\in k$; therefore $A/\mathfrak m\cong k$. The point of $U$ defined by $\mathfrak m$ then gives a $k$-rational point of $X$. [A1, F2, F3, step 1.1, choose] ∎