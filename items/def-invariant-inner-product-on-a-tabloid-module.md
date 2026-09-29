---
id: def-invariant-inner-product-on-a-tabloid-module
kind: definition
title: Invariant Hermitian product on a tabloid module
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-young-subgroup-tabloid-and-permutation-module]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Chapter 9, Definition 9.1 and Remark 9.2, printed pp. 31-32; the Hermitian version is defined and checked here"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Section 2.1, printed pp. 19-21"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Definition

Let $\lambda\vdash n$ and write vectors in the finite tabloid basis of
$M^\lambda$ as $x=\sum_T a_TT$ and $y=\sum_T b_TT$, where $T$ ranges over the
$\lambda$-tabloids
([[def-young-subgroup-tabloid-and-permutation-module]]). Give this complex
permutation space the Hermitian product
$$\langle x,y\rangle:=\sum_T\overline{a_T}b_T,$$
conjugate-linear in the first argument and linear in the second. This is the
Hermitian version of the tabloid-basis form: Chan defines the symmetric
bilinear version on a permutation basis (Chapter 9, Definition 9.1 and
Remark 9.2, printed pp. 31–32), while the complex Hermitian form used here is
specified explicitly.

The tabloid basis is orthonormal. Also
$\langle x,x\rangle=\sum_T|a_T|^2$, which is positive for every nonzero
$x$, so the form is positive definite. Each $\sigma\in S_n$ permutes the
tabloid basis, hence
$\langle\sigma x,\sigma y\rangle=\langle x,y\rangle$. Thus the action is
unitary and its adjoint is $\sigma^{-1}$. Extend the group-algebra adjoint
conjugate-linearly; since $\operatorname{sgn}(\gamma)\in\{1,-1\}$ and
$\gamma\mapsto\gamma^{-1}$ permutes $C_t$,
$$\kappa_t^*=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma^{-1}=\kappa_t.$$
Every column antisymmetrizer is therefore self-adjoint.
