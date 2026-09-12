---
id: prop-the-derived-affine-algebra-omits-only-the-degree-derivation
kind: proposition
title: The derived affine algebra omits only the degree derivation
deps: ["def-degree-derivation-and-full-untwisted-affine-algebra", "lem-finite-semisimple-cartan-root-and-string-structure"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 7.1-7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Section 12.2.1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For the full untwisted affine algebra of a nonzero finite-dimensional complex simple $\mathfrak g$,
$$[\widehat{\mathfrak g},\widehat{\mathfrak g}]=L\mathfrak g\oplus\mathbb Cc.$$
Consequently $\widehat{\mathfrak g}$ is not perfect, and its derived algebra is precisely the one-dimensional central extension of $L\mathfrak g$.

## Facts & Assumptions

**Given:** $\mathfrak g$ is nonabelian and simple, and derived subspaces are spans of brackets.

[F1] The full affine bracket and direct sum are [[def-degree-derivation-and-full-untwisted-affine-algebra]].

[F2] The finite root data of [[lem-finite-semisimple-cartan-root-and-string-structure]] include nonzero Cartan and nondegenerate Cartan form for nonzero semisimple $\mathfrak g$.

## Proof

1.1 Jacobi makes $[\mathfrak g,\mathfrak g]$ an ideal. It is nonzero because $\mathfrak g$ is nonabelian, so simplicity gives $[\mathfrak g,\mathfrak g]=\mathfrak g$. Write any $x\in\mathfrak g$ as a finite sum $\sum_j[y_j,z_j]$. For any $m\in\mathbb Z$, $\sum_j[(y_j)_m,(z_j)_0]=x_m$: the central coefficient is $m\delta_{m,0}=0$. Thus every loop mode, including degree zero, lies in the derived algebra, using only brackets within $\overline{L\mathfrak g}$. [F1, given, algebra]

1.2 Choose $h,h'\in\mathfrak h$ with $B(h,h')=1$, possible by F2 and rescaling the nondegenerate form. The Cartan is nonzero since its roots span the dual and a nonzero simple algebra cannot have an empty root decomposition. Then $[h_1,h'_{-1}]=c$, because $[h,h']=0$. Hence $c$ also lies in the derived algebra. This uses just two finite-dimensional vector choices, not AC. [F1, F2, algebra]

2.1 Every defining bracket has zero $d$ coordinate. Bilinearity gives $[\widehat{\mathfrak g},\widehat{\mathfrak g}]\subseteq L\mathfrak g\oplus\mathbb Cc$, while steps 1.1–1.2 give the reverse inclusion. Since $d$ is a separate nonzero basis vector, this subspace is proper. The same two steps also show the central extension itself is perfect. [F1, step 1.1, step 1.2, algebra] ∎

