---
id: ex-lubin-tate-formal-multiplicative-group
kind: example
title: "The multiplicative formal group as a Lubin–Tate group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-axiom-of-choice
  - def-lubin-tate-formal-group
  - thm-lubin-tate-formal-group-law-exists
  - thm-lubin-tate-explicit-local-reciprocity
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is inherited from local class formation; DC is inherited from the local
  reciprocity convention in the Lubin–Tate theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter I §2, Example 2.10 and Example 2.13"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Example

Assume AC and DC. Let $K=\mathbb Q_p$, $\pi=p$, and
$F(X,Y)=X+Y+XY$. Then $F$ is a Lubin–Tate formal group with
$[a]_F(X)=(1+X)^a-1$ for $a\in\mathbb Z_p$. Its level-$n$ torsion points
are $\zeta_{p^n}-1$ for $p^n$th roots of unity, and the associated extension
is $\mathbb Q_p(\zeta_{p^n})/\mathbb Q_p$ with Galois group
$(\mathbb Z/p^n\mathbb Z)^\times$. Local reciprocity by a unit $u$ acts on
these torsion points by $\zeta_{p^n}\mapsto\zeta_{p^n}^{u^{-1}}$.

## Example references

[[def-lubin-tate-formal-group]]

[[thm-lubin-tate-formal-group-law-exists]]

[[thm-lubin-tate-explicit-local-reciprocity]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[J. S. Milne, *Class Field Theory*, Chapter I §2, Examples 2.10 and 2.13, printed pp. 32–34](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC and DC, the power series, and the explicit Lubin–Tate reciprocity theorem.

[F1] A Lubin–Tate formal group is a commutative formal group with an $\mathcal O_K$-action and the stated uniformizer endomorphism. [[def-lubin-tate-formal-group]]

[F2] On level-$n$ torsion, a unit acts by the inverse formal-module endomorphism under arithmetic reciprocity. [[thm-lubin-tate-explicit-local-reciprocity]]

[A1] Dependent Choice is used through local reciprocity. [[def-dependent-choice]]

[A2] AC is required by the local class-formation supplier used in local reciprocity. [[def-axiom-of-choice]]

## Verification

1.1 The identity $1+F(X,Y)=(1+X)(1+Y)$ proves associativity and commutativity, with identity $0$ and inverse $(1+X)^{-1}-1$. For $a\in\mathbb Z_p$, the binomial series $(1+X)^a-1$ has tangent coefficient $a$ and satisfies the additive and multiplicative formal-module laws. Its $p$-series is $(1+X)^p-1=pX+\binom p2X^2+\cdots+X^p$, which is congruent to $X^p$ modulo $p$. Thus it is the Lubin–Tate group for $p$. [F1, given, algebra]

2.1 The equation $[p^n]_F(X)=0$ is $(1+X)^{p^n}=1$, so its roots are exactly $\zeta_{p^n}-1$. Hence adjoining the torsion points gives $\mathbb Q_p(\zeta_{p^n})$. The map $\bar u\mapsto(\zeta\mapsto\zeta^u)$ identifies its Galois group with $(\mathbb Z/p^n\mathbb Z)^\times$. [F1, step 1.1, algebra]

3.1 Apply [F2] to the torsion parameter $\lambda=\zeta_{p^n}-1$: the local reciprocity image of a unit $u$ acts as $[u^{-1}]_F(\lambda)=(1+\lambda)^{u^{-1}}-1=\zeta_{p^n}^{u^{-1}}-1$. This is the asserted formula. [A1, A2, F2, step 2.1] ∎ 