---
id: lem-finite-field-quadratic-isotropy-in-dimension-at-least-three
kind: lemma
title: "Quadratic forms of dimension at least three over odd finite fields are isotropic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-finite-field-and-its-order, thm-multiplicative-group-of-a-finite-field-is-cyclic, def-quadratic-form-and-polar-form, cor-quadratic-forms-diagonalize-in-characteristic-not-two]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.5"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $F$ be a finite field of odd order, and let $q$ be a quadratic form on an
$F$-vector space of dimension at least $3$. Then $q$ is isotropic.

## Facts & Assumptions

**Given:** A finite field $F$ of odd order and a quadratic form $q$ on an
$n$-dimensional $F$-vector space with $n\ge3$.

[L1] Over characteristic not $2$, a quadratic form diagonalizes
([[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]).

[L2] The multiplicative group of a finite field is cyclic
([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[L3] A finite field has finite order ([[def-finite-field-and-its-order]]); in the present statement that order is assumed odd.

## Proof

**Proof technique:** direct.

1.1 By [L1], after choosing a basis we may write $q(x_1,\dots,x_n)=a_1x_1^2+\cdots+a_nx_n^2$. If some $a_i=0$, then the corresponding basis vector is a nonzero isotropic vector. So we may assume $a_1,a_2,a_3\ne0$ and restrict to the ternary subform $a_1x^2+a_2y^2+a_3z^2$. [L1, given, cases]

2.1 Let $Q=\{u^2:u\in F\}$ be the set of square classes including $0$. By [L2] and [L3], $F^\times$ has even order, so the nonzero squares form an index-two subgroup and $|Q|=(|F|+1)/2$. The sets $a_1Q$ and $-a_3-a_2Q$ therefore each have more than half the elements of $F$, so they intersect. Hence there exist $x,y\in F$ with $a_1x^2=-a_3-a_2y^2$, and then $(x,y,1)$ is a nonzero isotropic vector for the ternary subform and therefore for $q$. [L2, L3, step 1.1, algebra] ∎
