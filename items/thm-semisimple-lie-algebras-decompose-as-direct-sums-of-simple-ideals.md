---
id: thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals
kind: theorem
title: Semisimple Lie algebras decompose into simple ideals
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cartans-semisimplicity-criterion, lem-orthogonal-complements-under-invariant-forms-are-ideals, def-simple-semisimple-and-reductive-lie-algebras]
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 4.15"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, Theorem 4.15, printed p. 44"
---

## Statement

Every finite-dimensional semisimple Lie algebra over a characteristic-zero
field is a finite direct sum of simple ideals.

## Facts & Assumptions

**Given:** A finite-dimensional semisimple characteristic-zero Lie algebra
$\mathfrak g$.

[L1] Its Killing form $K$ is nondegenerate
([[thm-cartans-semisimplicity-criterion]]).

[L2] Orthogonal complements of ideals under $K$ are ideals
([[lem-orthogonal-complements-under-invariant-forms-are-ideals]]).

[L3] Simple means nonabelian with no nontrivial ideals, and semisimple means
zero radical ([[def-simple-semisimple-and-reductive-lie-algebras]]).

## Proof

**Proof technique:** induction on dimension.

1.1 The assertion for $\mathfrak g=0$ is the empty direct sum. For nonzero $\mathfrak g$, if $\mathfrak a$ is any ideal, then $\mathfrak a\cap\mathfrak a^\perp$ is abelian. Indeed, for $u,v$ in that intersection and $z\in\mathfrak g$, invariance gives $K([u,v],z)=K(u,[v,z])=0$, because $[v,z]\in\mathfrak a$. By [L1], $[u,v]=0$. Semisimplicity makes this abelian ideal zero. [L1, L2, L3, base]
2.1 If $\mathfrak g\ne0$, choose a nonzero ideal $\mathfrak a$ of least positive dimension; finite dimension makes this a choice from a finite set of integers. By step 1.1 and dimension, $\mathfrak g=\mathfrak a\oplus\mathfrak a^\perp$. Both summands are ideals, and their bracket lies in their intersection, hence is zero. [L2, step 1.1]
3.1 The minimal ideal $\mathfrak a$ is not abelian, because a nonzero abelian ideal is solvable. If $0\ne\mathfrak j\lhd\mathfrak a$, then $[\mathfrak a^\perp,\mathfrak j]=0$ and $[\mathfrak a,\mathfrak j]\subseteq\mathfrak j$, so $\mathfrak j$ is an ideal of $\mathfrak g$; minimality gives $\mathfrak j=\mathfrak a$. Thus $\mathfrak a$ is simple. Assume inductively that every semisimple algebra of smaller dimension has the asserted decomposition. [L3, step 2.1, IH]
4.1 The complement $\mathfrak a^\perp$ is semisimple: any solvable ideal in it is, because the two summands commute, also a solvable ideal of $\mathfrak g$, and hence zero. Its dimension is smaller, so the induction hypothesis in step 3.1 decomposes it into finitely many simple ideals. Adjoining $\mathfrak a$ proves the result; a simple $\mathfrak g$ is the one-summand case. [L3, step 2.1, step 3.1, discharge-induction: step 1.1] ∎
