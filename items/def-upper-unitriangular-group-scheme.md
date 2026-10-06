---
id: def-upper-unitriangular-group-scheme
kind: definition
title: The upper unitriangular group scheme U_n and its coordinate ring
dependency_level: 1
deps:
  - def-linear-basis
  - def-morphism-and-closed-subgroup-scheme
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
  - lem-closed-subgroup-scheme-valued-point-criterion
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - thm-affine-closed-immersions-quotient-rings
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Sections 2.2-2.5, printed pp. 39-40; Example 6.49, printed pp. 136-137
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Example 8.46, printed pp. 137-138; Theorem 15.5, coproduct equation (103), printed p. 253
---
## Definition

Let $k$ be a field and let $n\ge1$. Let $\mathrm{GL}_n$ be the general linear group scheme over $k$ with its coordinate ring $k[x_{ij},\det^{-1}]$ ([[lem-general-linear-group-scheme-and-its-coordinate-ring]]) and let $T_n$, $D_n$, $U_n$ be the closed subschemes of $\mathrm{GL}_n$ defined by the following equations on the matrix entries, cut out as quotients of the coordinate ring of $\mathrm{GL}_n$ ([[thm-affine-closed-immersions-quotient-rings]]):

- $T_n$: the **upper triangular** matrices, defined by $x_{ij}=0$ for $i>j$;
- $D_n$: the **diagonal** matrices, defined by $x_{ij}=0$ for $i\ne j$;
- $U_n$: the **upper unitriangular** matrices, defined by $x_{ij}=0$ for $i>j$ and $x_{ii}=1$.

These are closed subgroup schemes of $\mathrm{GL}_n$ ([[def-morphism-and-closed-subgroup-scheme]]), because for each of them the defining equations are stable under matrix multiplication, inverse and identity; equivalently, by the valued-point criterion ([[lem-closed-subgroup-scheme-valued-point-criterion]]), for every commutative unital $k$-algebra $R$ the $R$-points are the corresponding subgroups $T_n(R),D_n(R),U_n(R)$ of $\mathrm{GL}_n(R)$, described by the same equations. In particular
$$U_n(R)=\{(\alpha_{ij})\in\mathrm{GL}_n(R):\alpha_{ij}=0\ (i>j),\ \alpha_{ii}=1\},$$
the group of upper unitriangular matrices, and $T_n=D_n\ltimes U_n$ is the group of invertible upper triangular matrices, the semidirect product for the conjugation action of $D_n$ on $U_n$ ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]).

The coordinate ring of $U_n$ is $O(U_n)=k[X_{ij}\mid1\le i<j\le n]$ with comultiplication
$$\Delta(X_{ij})=X_{ij}\otimes1+1\otimes X_{ij}+\sum_{i<l<j}X_{il}\otimes X_{lj},$$
counit $\varepsilon(X_{ij})=0$ and antipode determined by the inverse of a unitriangular matrix; the displayed formula is the matrix multiplication formula restricted to unitriangular matrices and visibly preserves the polynomial ring, so $O(U_n)$ is a polynomial algebra on the $\binom n2$ entries strictly above the diagonal ([[def-linear-basis]]).
