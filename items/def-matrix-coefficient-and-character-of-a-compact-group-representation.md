---
id: def-matrix-coefficient-and-character-of-a-compact-group-representation
kind: definition
title: Matrix coefficients and characters
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-continuous-and-unitary-representation-of-a-compact-lie-group, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, cor-trace-is-invariant-under-similarity]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, definitions of matrix coefficient and character"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z §Z.1"
---

## Definition

Let $\pi:G\to\operatorname{GL}(V)$ be a finite-dimensional continuous complex
representation of a compact Lie group $G$
([[def-continuous-and-unitary-representation-of-a-compact-lie-group]]). Fix a
positive-definite Hermitian inner product on $V$ for which $\pi$ is unitary,
which exists by
[[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]],
and fix an orthonormal basis $e_1,\dots,e_d$ of $V$.

- A **matrix coefficient** of $\pi$ is the continuous function
  $$g\longmapsto\langle\pi(g)v,w\rangle,\qquad v,w\in V,$$
  and the **matrix coefficient functions** in the chosen basis are
  $$\pi_{ij}(g):=\langle\pi(g)e_j,e_i\rangle,\qquad i,j\in\{1,\dots,d\}.$$
  With this convention the matrix of $\pi(g)$ in the basis $(e_j)$ has
  $(i,j)$-entry $\pi_{ij}(g)$, so that
  $\pi(g)e_j=\sum_{i=1}^d\pi_{ij}(g)e_i$. The functions $\pi_{ij}$ are
  continuous because the representation is continuous, and they span a
  finite-dimensional space stable under left and right translation.
- The **character** of $\pi$ is
  $$\chi_\pi(g):=\operatorname{tr}\pi(g)=\sum_{i=1}^d\pi_{ii}(g),$$
  the trace of the linear operator $\pi(g)$; it is independent of the
  orthonormal basis used to compute it, because the trace of a linear operator
  is basis-independent and the trace of similar matrices is equal
  ([[cor-trace-is-invariant-under-similarity]]).
- The **dimension** is $d_\pi:=\dim_{\mathbb C}V$, and $\chi_\pi(e)=d_\pi$.

Two equivalent representations have equal characters, and a character is a
**class function**: for all $g,h\in G$,
$$\chi_\pi(ghg^{-1})=\operatorname{tr}\bigl(\pi(g)\pi(h)\pi(g)^{-1}\bigr)=\operatorname{tr}\pi(h)=\chi_\pi(h),$$
again by invariance of the trace under similarity. Direct sums and tensor
products of representations have characters equal to the sum and the product of
the characters, respectively, and the conjugate of a unitary representation has
character $\overline{\chi_\pi}$.

## Remarks

- The symbol $\pi_{ij}$ always refers to the convention
  $\pi_{ij}(g)=\langle\pi(g)e_j,e_i\rangle$ fixed above; this is the convention
  used by Schur orthogonality and by the Peter–Weyl theorem on this page.
- For the trivial representation on $\mathbb C$ the only matrix coefficient is
  the constant function $1$ and the character is constantly $1$.
