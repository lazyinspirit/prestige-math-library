---
id: lem-separable-subfield-centralizer-and-splitting
kind: lemma
title: Centralizers and splitting for a separable subfield of a central division algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- lem-finite-density-and-central-simple-base-change
- thm-splitting-fields-exist-for-nonzero-polynomials
justified_by: []
proof_strategy: direct
axiom_use: None. Every field adjunction, basis and generic polynomial witness is finite; a finite polynomial splitting field replaces any generic algebraic or separable closure.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §3, Theorem 3.1 and Corollaries 3.4–3.6; adapted finite splitting-field/block-matrix derivation.
verification: {}
---

## Statement

Let $D/K$ be a central division algebra of dimension $d^2$, and let $E\subset D$ be a finite separable extension of $K$ of degree $f$. Put $C=\operatorname{Cent}_D(E)$. Then $Z(C)=E$ and
$$\dim_K C=d^2/f,\qquad \dim_E C=d^2/f^2.$$
If $C=E$, then $f=d$ and $D\otimes_KE\cong M_d(E)$.

## Statement references

[[lem-finite-density-and-central-simple-base-change]]

[[thm-splitting-fields-exist-for-nonzero-polynomials]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] Central simple algebras are stable under field extension and have a finite splitting field. [[lem-finite-density-and-central-simple-base-change]]

[F2] A polynomial has a splitting field. [[thm-splitting-fields-exist-for-nonzero-polynomials]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Choose a finite extension $F/K$ splitting $D$ by [F1], and enlarge it using [F2] so that $E\otimes_KF\cong F^f$. This last identity follows by writing the finite separable extension as a simple extension and evaluating its distinct conjugate roots; alternatively successive separable generators give the same product decomposition. Let $p_1,\ldots,p_f$ be its primitive idempotents acting on the column module $F^d$ of $D_F=M_d(F)$, and write their ranks as $r_i$. [F1, F2, given, choose, algebra]

2.1 As a left $E$-vector space, $D$ is free of rank $d^2/f$. Hence each $p_iD_F$ has $F$-dimension $d^2/f$. In matrices left multiplication by a rank-$r_i$ idempotent has image of dimension $r_id$. Thus all $r_i=d/f$, in particular $f$ divides $d$. The centralizer of these idempotents is the block diagonal algebra $\prod_{i=1}^fM_{d/f}(F)$. [step 1.1, algebra]

3.1 The equations $xe=ex$, for a $K$-basis of $E$, are finitely many linear equations in $D$, whose kernels commute with field extension. Therefore $C_F$ is this block diagonal algebra. Its dimension is $d^2/f$. Applying the same kernel observation to commutation with a basis of $C$ gives $Z(C)_F=Z(C_F)=F^f=E_F$. Since $E\subseteq Z(C)$, dimensions give $Z(C)=E$. Dividing $\dim_KC$ by $[E:K]$ gives the second formula. [step 2.1, algebra]

4.1 If $C=E$, the formula gives $f=d$. Regard $D$ as a right $E$-vector space of dimension $d$. The map $D\otimes_KE\to\operatorname{End}_E(D)$, $a\otimes e\mapsto(x\mapsto axe)$, is a unital homomorphism. Its domain is simple by [F1], so it is injective. Both sides have $E$-dimension $d^2$, so it is an isomorphism. This includes $D=E=K$. [F1, step 3.1, algebra] ∎

