---
id: def-coloured-reduced-burau-matrix
kind: definition
title: "The coloured reduced Burau matrix"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-reduced-burau-representation, def-unreduced-burau-matrices,
       def-invertible-matrix-and-similarity-over-a-commutative-ring,
       def-determinant-of-a-square-matrix, def-braid-group-by-the-artin-presentation,
       def-group-ring, thm-topological-and-matrix-burau-representations-agree, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "H. R. Morton, The multivariable Alexander polynomial for a closed braid, arXiv:math/9803138, section 2.1 printed pp. 2-3 (the labelled strings, the matrices C_i(a) and the labelled product B_beta)"
      url: "https://arxiv.org/pdf/math/9803138"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.2 printed pp. 45-47 (the unreduced and reduced Burau representations)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Definition

Let $n\ge2$ and let $\sigma_1,\dots,\sigma_{n-1}$ be the standard generators of
$B_n$ ([[def-braid-group-by-the-artin-presentation]]). Let
$\beta=\prod_{r=1}^{l}\sigma_{i_r}^{\varepsilon_r}\in B_n$ be a braid word.
**Labelling of the strings.** Put the label $t_j$ on the string of $\beta$
which starts at the point $j$ at the bottom of the braid diagram, so that the
labels are $t_1,\dots,t_n$ read from the bottom left. Reading the letters of the
word from left to right as the crossings from the top of the diagram, let $a_r$
be the label of the **undercrossing string** at crossing $r$, where for the
positive generator $\sigma_i$ the undercrossing string is the one entering the
crossing at position $i$ and for the negative generator $\sigma_i^{-1}$ the one
entering at position $i+1$; this is the convention of Morton §2.1, checked
against his example $\beta=\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}\sigma_3\in B_4$,
where $a_1,\dots,a_7=t_1,t_4,t_2,t_1,t_4,t_2,t_4$.

**The matrices.** For $1\le i\le n-1$ and a label $a$ let $\overline C_i(a)$ be
the $(n-1)\times(n-1)$ matrix over the Laurent ring $\mathbb Z[a^{\pm1}]$ which
agrees with the identity matrix
([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]) except that
its $i$-th row has the three entries
$$(\overline C_i(a))_{i,i-1}=a,\qquad (\overline C_i(a))_{i,i}=-a,\qquad (\overline C_i(a))_{i,i+1}=1,$$
where an entry is omitted when its column index lies outside
$\{1,\dots,n-1\}$: for $i=1$ the entry $a$ in column $0$ is omitted and for
$i=n-1$ the entry $1$ in column $n$ is omitted, so that for $n>2$ each boundary row has exactly two non-zero entries, while for $n=2$ the sole row is the single entry $-a$. Each $\overline C_i(a)$ is
upper triangular except for the single entry $a$ in position $(i,i-1)$, so
$\det\overline C_i(a)=-a$ is a unit of $\mathbb Z[a^{\pm1}]$ and the matrix is
invertible ([[def-determinant-of-a-square-matrix]]); its inverse is the matrix
whose $i$-th row has entries $(\overline C_i(a)^{-1})_{i,i-1}=1$,
$(\overline C_i(a)^{-1})_{i,i}=-a^{-1}$ and
$(\overline C_i(a)^{-1})_{i,i+1}=a^{-1}$, again truncated at the boundary
columns. This is Morton's matrix $\overline C_i(a)$ (§2.1); the three places
are the entries on row $i$ produced by the Fox derivatives of the elementary
braid, and the truncation rule is his.

**The coloured reduced Burau matrix.** The **coloured reduced Burau matrix** of
the braid word is
$$\overline B_\beta(t_1,\dots,t_n):=\prod_{r=1}^{l}\bigl(\overline C_{i_r}(a_r)\bigr)^{\varepsilon_r},$$
the product taken in the order of the word, an element of
$\operatorname{GL}_{n-1}(\mathbb Z[t_1^{\pm1},\dots,t_n^{\pm1}])$. It is a
direct matrix product, so no well-definedness issue beyond matrix
multiplication arises; the chosen word enters only through the labels $a_r$.

**Equal labels and conventions.** Specialising $t_1=\cdots=t_n=t$ gives
Morton's equal-label matrix $\overline B_\beta(t,\dots,t)$ over
$\Lambda_1=\mathbb Z[t^{\pm1}]$. For comparison with the topological
representation, assume AC, as in [[def-reduced-burau-representation]]
and [[def-axiom-of-choice]]. Put $D=\operatorname{diag}(t,t^2,\dots,t^{n-1})$.
The fixed adjacent weighted basis of that representation is
$b_i=t^i(h_i-h_{i+1})$ with $h_n=0$. Its generator matrix has row $i$ entries
$1,-t,t$, truncated at the boundary, by
[[thm-topological-and-matrix-burau-representations-agree]]. Diagonal
conjugation of the displayed row $t,-t,1$ gives these entries, so
$$\bar\rho_n(\sigma_i)=D^{-1}\overline C_i(t)D,\qquad \bar\rho_n(\beta)=D^{-1}\overline B_\beta(t,\dots,t)D.$$
Consequently $\det(I-\overline B_\beta(t,\dots,t))=\det(I-\bar\rho_n(\beta))$.
These identities concern equal labels; the labelled matrix remains defined
algebraically for the chosen word without a Choice assumption.

## Remarks

- The determinant of each $\overline C_i(a)$ is $-a$, so
  $\det\overline B_\beta=(-1)^{l}\prod_{r}a_r^{\varepsilon_r}$ for a word of
  length $l$, a monomial in the labels; in particular the coloured matrix is
  invertible over $\mathbb Z[t_1^{\pm1},\dots,t_n^{\pm1}]$.
- Morton's matrices act on column vectors with the product ordered as the word,
  exactly as displayed; no inverse order is taken. At equal labels the
  generator matrix $\overline C_i(t)$ has the same characteristic polynomial
  $(\lambda-1)^{n-2}(\lambda+t)$ as the reduced Burau generator. The determinant comparison for arbitrary braid words follows from simultaneous conjugacy by the fixed matrix $D$, rather than from the characteristic polynomials of individual generators alone.
