---
id: thm-c1-field-has-trivial-brauer-group
kind: theorem
title: A C1 field has trivial Brauer group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- lem-central-division-reduced-norm-and-c1-splitting
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: SGA 4½, Exposé I, §3.2, Proposition 3.2.2
    url: https://grothendiecksga.com/read/sga4.5/en/I_3.html
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §§2–3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
verification: {}
---

## Statement

Let $F$ be a field with the $C_1$ property: every nonzero homogeneous
polynomial of degree $d\ge1$ in $n>d$ variables over $F$ has a nonzero zero.
Then its Brauer group is zero, $\operatorname{Br}(F)=0$.

## Statement references

[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[SGA 4½, Exposé I, §3.2, Proposition 3.2.2](https://grothendiecksga.com/read/sga4.5/en/I_3.html)

## Facts & Assumptions

**Given:** A field $F$ with the $C_1$ property in the Statement.

[F1] The $C_1$ property is the given hypothesis: every nonzero homogeneous degree-$d$ form in more than $d$ variables has a nonzero zero.

[F2] Reduced determinant descends to a homogeneous degree-$r$ anisotropic form in $r^2$ coordinates of a central division algebra, without a choice axiom. Every central simple algebra has a division representative; consequently the $C_1$ property forces it to split. [[lem-central-division-reduced-norm-and-c1-splitting]]

[F3] The algebraic Brauer group is the group of similarity classes of finite-dimensional central simple algebras, with matrix algebras as zero. This group construction is unqualified and does not require the separately conditional absolute cohomology comparison. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

## Proof

**Given:** The data in the Statement.

1.1 By [F2], a central division representative $D$ of degree $r$ has a homogeneous reduced norm of degree $r$ in $r^2$ coordinates, with value $1$ at the identity and no nonzero zero. If $r>1$, then $r^2>r$ and [F1] contradicts its anisotropy. Hence $r=1$, so $D=F$ and every central simple algebra is a matrix algebra over $F$. Only the finite-dimensional unqualified construction [F2] is used. [F1, F2, given, algebra]

2.1 Every Brauer class is therefore zero by [F3]. This proves the full unqualified assertion, including the scalar degree-one case, with no absolute Galois cohomology comparison or additional choice axiom. [F3, step 1.1, algebra] ∎
