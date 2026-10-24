---
id: def-polynomial-glr-highest-weights-as-partitions
kind: definition
title: Polynomial representations of GL_r and their highest weights
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
deps:
  - def-axiom-of-choice
  - thm-schur-weyl-decomposition-with-length-cutoff
  - def-commuting-symmetric-and-linear-actions-on-tensor-power
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-partition-young-diagram-and-conjugate-partition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 9 Definition 9.1 and Remarks 9.4--9.6, printed pp. 51--52 (polynomial and rational representations of $GL(V)$; weights of a polynomial representation are nonnegative); Ch. 11 Definition 11.1, Theorems 11.6--11.8, printed pp. 54--56 (Schur modules, classification of polynomial irreducibles, characters, irreducibility)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.2--27.4, printed pp. 145--150: representations of $SL_n$ and $GL_n$, polynomial representations, highest weights and Schur--Weyl duality, including the statement that polynomial irreducibles of $GL_n$ correspond to partitions with at most $n$ parts."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 5 §5.5.4 Theorem 5.5.22, printed pp. 273--275 (classification of irreducible rational representations of $GL_n$ by dominant integral weights, with the determinant twist); Ch. 8 §8.1.2, printed pp. 377--381 (weight basis $\\{u_A\\}$ of $F^\\lambda_n$ indexed by semistandard tableaux, Corollary 8.1.7)."
---

## Definition

Assume the Axiom of Choice. Let $V$ be a finite-dimensional complex vector
space of dimension $r\ge1$ and put $G=\operatorname{GL}(V)$; fixing a basis,
identify $G$ with $\operatorname{GL}_r(\mathbb C)$ and let $g_{ij}$ denote the
matrix entries of $g\in G$. A finite-dimensional representation
$\rho\colon G\to\operatorname{GL}(W)$ is **polynomial** if in some pair of
bases (equivalently, in every pair of bases) the matrix coefficients of
$\rho$ are polynomial functions of the $g_{ij}$; it is **rational** if these
coefficients are rational functions defined on all of $G$.

For the diagonal torus
$T=\{\operatorname{diag}(t_1,\dots,t_r):t_i\in\mathbb C^\times\}$ a polynomial
representation is a direct sum of **weight spaces**
$$W_\alpha=\{w\in W:\rho(t)w=t^\alpha w\ \text{for all }t\in T\},\qquad \alpha=(\alpha_1,\dots,\alpha_r)\in\mathbb Z^r,\quad t^\alpha=t_1^{\alpha_1}\cdots t_r^{\alpha_r},$$
the eigenvalues $\alpha$ with $W_\alpha\ne0$ being the **weights** of $W$
(Etingof §27.3; Goodman--Wallach Ch. 8 §8.1.2). A weight of a polynomial
representation has nonnegative entries, $\alpha\in\mathbb Z_{\ge0}^r$: the
matrix coefficients are polynomial and $t\mapsto t^\alpha$ occurs as a
polynomial character, so $\alpha_i<0$ is impossible. Consequently the highest
weight of a polynomial irreducible representation of $G$ (with respect to the
Borel subgroup of upper triangular matrices) is a partition
$\lambda=(\lambda_1\ge\dots\ge\lambda_r\ge0)$ padded by zeros, that is, a
partition with at most $r$ parts
([[def-partition-young-diagram-and-conjugate-partition]]).

For every partition $\lambda$ with $\ell(\lambda)\le r$ put
$n=|\lambda|$ and let
$S_\lambda(V):=\operatorname{Hom}_{S_n}\bigl(S^\lambda,V^{\otimes n}\bigr)$ be
the Schur--Weyl module of
[[thm-schur-weyl-decomposition-with-length-cutoff]], where $S^\lambda$ is the
complex Specht module
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]) and $S_n$ acts
on $V^{\otimes n}$ by place permutations
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]). Then
$S_\lambda(V)$ is a nonzero polynomial irreducible representation of $G$ of
highest weight $\lambda$, and distinct partitions with at most $r$ parts give
non-isomorphic modules ([[thm-schur-weyl-decomposition-with-length-cutoff]]
parts (1)--(4)). Conversely every polynomial irreducible representation of $G$
is isomorphic to $S_\lambda(V)$ for exactly one partition $\lambda$ with
$\ell(\lambda)\le r$: this is the classical type-$A$ highest-weight
classification of polynomial representations (Etingof §27.3--27.4;
Goodman--Wallach Theorem 5.5.22 for the corresponding rational
classification; see [[def-schur-module-and-schur-polynomial-character]] for
the module notation used below).
