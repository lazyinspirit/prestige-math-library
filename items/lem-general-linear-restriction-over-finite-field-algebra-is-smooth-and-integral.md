---
dependency_level: 0
id: lem-general-linear-restriction-over-finite-field-algebra-is-smooth-and-integral
kind: lemma
title: General linear restriction over a finite field algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-adjugate-identity-over-a-commutative-ring
- thm-jacobian-criterion-smooth-morphism
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique
      des invariants
    url: https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf
    locator: Chapter II §2, restriction-of-scalars group and Lang-cover construction;
      explicit norm-open proof.
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $B$ be a finite-dimensional commutative $\mathbb F_q$-algebra of dimension $d$, including the zero algebra, and let $r\ge1$. The functor $R\mapsto\mathrm{GL}_r(B\otimes_{\mathbb F_q}R)$ on commutative $\mathbb F_q$-algebras is represented by a smooth affine geometrically integral group scheme $G$ of dimension $dr^2$. It is a principal open of affine $dr^2$-space, and $G(\mathbb F_q)=\mathrm{GL}_r(B)$ is finite. No reducedness assumption on $B$ is imposed.

## Facts & Assumptions

**Given:** AC, $B$, $d$, and $r$ in the Statement.

[F1] A matrix with unit determinant is invertible by its adjugate. ([[thm-adjugate-identity-over-a-commutative-ring]])

[F2] Under AC a localization of a polynomial ring is smooth of its polynomial relative dimension, by the empty-equation presentation in the Jacobian criterion. ([[thm-jacobian-criterion-smooth-morphism]], [[def-axiom-of-choice]])

## Proof

1.1 Fix a basis of $B$. An $r$ by $r$ matrix over $B\otimes R$ is then specified by $dr^2$ elements of $R$. For the universal such matrix $g$, its determinant $b=\det(g)$ belongs to $B\otimes\mathbb F_q[x_1,\ldots,x_{dr^2}]$. Let $P$ be the determinant of multiplication by $b$ on the free rank-$d$ module $B\otimes\mathbb F_q[x_1,\ldots,x_{dr^2}]$. For every $R$, $b$ is a unit if and only if $P$ is a unit: a unit $b$ gives an invertible multiplication matrix, and if that matrix has unit determinant [F1] gives an inverse and hence an element $c$ with $bc=1$. The same criterion [F1] for $g$ shows that $D(P)$ represents the required functor. [F1, given, construct, algebra]

2.1 Matrix multiplication has polynomial coordinates. On $D(P)$ the inverse of multiplication by $b$ has entries given by its adjugate divided by $P$, so $b^{-1}$ is regular there. The formula $g^{-1}=b^{-1}\operatorname{adj}(g)$ consequently has regular coordinates. These operations and the identity matrix make $D(P)$ an affine group scheme. At the identity, $P=1$, so $P$ is a nonzero polynomial after every field extension. Every such base change is therefore a nonempty open of integral affine space, hence integral; this proves geometric integrality and connectedness. [F1, step 1.1, construct, algebra]

3.1 The coordinate ring is the localization $\mathbb F_q[x_1,\ldots,x_{dr^2}]_P$. By [F2] it is smooth of dimension $dr^2$. Its rational points are the asserted invertible matrices and form a finite set because $B$ is finite as a set. If $d=0$, the empty multiplication determinant is $1$ and the matrix functor has one element, so $G=\operatorname{Spec}\mathbb F_q$; this is the same construction. AC is used through [F2], with no restriction on nilpotents of $B$. [F2, step 1.1, step 2.1, algebra] ∎
