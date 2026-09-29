---
id: def-bigraded-complex-differential-forms
kind: definition
title: Bigraded complex forms and the Dolbeault operators
status: published
origin: pipeline
deps:
  - def-smooth-differential-k-form
  - prop-local-coordinate-expression-for-a-differential-form
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - def-wirtinger-operators-in-several-complex-variables
  - thm-chain-rule-for-holomorphic-maps-in-several-variables
  - thm-the-exterior-derivative-commutes-with-pullback
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapters 4–5"
      url: https://www.jirka.org/scv/scv.pdf
    - title: "Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.2"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
    - title: "Guillemin and Campbell, MIT 18.117 Lecture Notes, Lectures 1–4"
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Let $U\subseteq\mathbb C^n$ be open. Write $\Omega^k(U;\mathbb C)$ for smooth
complex-valued $k$-forms. For increasing multi-indices
$I=(i_1<\cdots<i_p)$ and $J=(j_1<\cdots<j_q)$, write
$dz^I=dz_{i_1}\wedge\cdots\wedge dz_{i_p}$ and
$d\bar z^J=d\bar z_{j_1}\wedge\cdots\wedge d\bar z_{j_q}$. The invertible
change of cotangent basis
$dz_j=dx_j+i\,dy_j$, $d\bar z_j=dx_j-i\,dy_j$ gives the direct sum
decomposition

$$\Omega^k(U;\mathbb C)=\bigoplus_{p+q=k}\Omega^{p,q}(U),\qquad \Omega^{p,q}(U)=\left\{\sum_{I,J}a_{I,J}(z)\,dz^I\wedge d\bar z^J:a_{I,J}\in C^\infty(U;\mathbb C)\right\},$$

where $0\le p,q\le n$ and every sum is finite. On a $(p,q)$ form
$\eta=\sum_{I,J}a_{I,J}dz^I\wedge d\bar z^J$, define

$$\partial\eta=\sum_{I,J,j}(\partial_{z_j}a_{I,J})\,dz_j\wedge dz^I\wedge d\bar z^J,\qquad \bar\partial\eta=\sum_{I,J,j}(\partial_{\bar z_j}a_{I,J})\,d\bar z_j\wedge dz^I\wedge d\bar z^J.$$

Repeated differentials vanish by alternation; components outside the range
$0\le p,q\le n$ are zero. These operators are the components of $d$ of
bidegrees $(p+1,q)$ and $(p,q+1)$.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^n$ and a smooth complex-valued form on $U$.

[F1] A smooth differential $k$-form is a smooth section of the exterior power of the cotangent bundle ([[def-smooth-differential-k-form]]).

[F2] In a chart, every smooth form has a unique expansion in the increasing wedge basis ([[prop-local-coordinate-expression-for-a-differential-form]]).

[F3] In local coordinates, $d(\sum_I a_I dx^I)=\sum_I da_I\wedge dx^I$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

[F4] The Wirtinger derivatives are $\partial_{z_j}=\tfrac12(\partial_{x_j}-i\partial_{y_j})$ and $\partial_{\bar z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F5] The complex derivative of a composite of holomorphic maps is the composite of their complex derivatives ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[F6] Exterior differentiation commutes with pullback: $d(\Phi^*\omega)=\Phi^*(d\omega)$ ([[thm-the-exterior-derivative-commutes-with-pullback]]).

## Proof

**Proof technique:** direct.

1.1 At each point, the displayed change from $(dx_j,dy_j)$ to $(dz_j,d\bar z_j)$ is an invertible complex-linear change of cotangent basis. Its increasing wedges therefore form a basis of the complexified alternating cotensors. By [F1] and [F2], every smooth complex-valued form has a unique expansion in this basis, and its coefficient functions are smooth. Grouping the terms by the numbers $p$ and $q$ of holomorphic and antiholomorphic factors gives the stated direct sum. [F1, F2, given, algebra]

2.1 For a coefficient function $a$, the real-coordinate formula for $da$ and [F4] give $da=\sum_j(\partial_{z_j}a)dz_j+(\partial_{\bar z_j}a)d\bar z_j$. Since $d(dz_j)=d(d\bar z_j)=0$, [F3] applied termwise to $a_{I,J}dz^I\wedge d\bar z^J$ splits $d\eta$ into exactly the two displayed sums. Their bidegrees differ, so projection onto those summands recovers the coefficient formulas and proves $d=\partial+\bar\partial$. [F3, F4, step 1.1, algebra]

3.1 If $\Phi$ is a holomorphic coordinate change, [F5] makes its differential complex-linear; hence $\Phi^*dz_j$ is a linear combination of holomorphic differentials and $\Phi^*d\bar z_j$ is the conjugate linear combination of antiholomorphic differentials. Thus pullback preserves each bidegree. By [F6], pullback also commutes with $d$; uniqueness of the bidegree decomposition from step 1.1 implies it commutes separately with its two projections $\partial$ and $\bar\partial$. The definitions are therefore independent of holomorphic coordinates. [F5, F6, step 1.1, step 2.1, algebra] ∎
