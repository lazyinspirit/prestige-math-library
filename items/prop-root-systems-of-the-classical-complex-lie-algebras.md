---
id: prop-root-systems-of-the-classical-complex-lie-algebras
kind: proposition
title: Root systems of the classical complex Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-classical-complex-matrix-lie-algebras, prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-reduced-crystallographic-euclidean-root-system, def-cartan-subalgebra-of-a-lie-algebra, thm-existence-of-each-classified-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20.3, Examples 20.12-20.14, printed pp. 110-111"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50) with §1, printed pp. 150 and 155"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be the diagonal Cartan subalgebra of one of
$\mathfrak{sl}_n(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$,
$\mathfrak{so}_{2n}(\mathbb C)$, $\mathfrak{so}_{2n+1}(\mathbb C)$
([[prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras]]), where
$n\ge2$ in the special-linear and even-orthogonal cases and $n\ge1$ in the
symplectic and odd-orthogonal cases, and let
$\varepsilon_1,\dots,\varepsilon_n\in\mathfrak h^{*}$ be the coordinate
functionals, $\varepsilon_i(H)=H_{ii}$. Then the roots and root spaces are:
1. $\mathfrak{sl}_n(\mathbb C)$: the roots $\varepsilon_i-\varepsilon_j$,
   $i\ne j$, with root spaces $\mathbb CE_{ij}$;
2. $\mathfrak{sp}_{2n}(\mathbb C)$: the roots $\pm\varepsilon_i\pm\varepsilon_j$,
   $i<j$, with root spaces spanned by the corresponding $b$- and $c$-block
   matrix units, and the roots $\pm2\varepsilon_i$, with root spaces
   $\mathbb CE_{i,n+i}$ and $\mathbb CE_{n+i,i}$;
3. $\mathfrak{so}_{2n}(\mathbb C)$: the roots $\pm\varepsilon_i\pm\varepsilon_j$,
   $i<j$, with root spaces spanned by the corresponding block matrix units;
4. $\mathfrak{so}_{2n+1}(\mathbb C)$: the roots $\pm\varepsilon_i\pm\varepsilon_j$,
   $i<j$, together with the roots $\pm\varepsilon_i$, with root spaces spanned
   by the corresponding block matrix units.

In every case every root space is one-dimensional, and the listed root sets are
reduced crystallographic Euclidean root systems of types $A_{n-1}$, $C_n$,
$D_n$, $B_n$ respectively, with the low-rank identifications
$B_1=C_1=A_1$, $C_2=B_2$, $D_2=A_1\sqcup A_1$, and $D_3=A_3$.

## Remarks

The low-rank identifications are checked directly in step 3.1. The later
example collecting those coincidences is therefore explanatory rather than a
logical prerequisite, which breaks the former circular dependency.

## Facts & Assumptions

**Given:** One of the classical matrix Lie algebras $\mathfrak g$, its diagonal subalgebra $\mathfrak h$, the coordinate functionals $\varepsilon_i$, and the matrix units $E_{ab}$.

[L1] The algebras and their block decompositions are as in [[def-classical-complex-matrix-lie-algebras]]; for diagonal $H$ and matrix units $E_{ab}$ one has $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$, and the off-diagonal block units satisfy the symmetry conditions $b=b^{T}$ (symplectic), $b=-b^{T}$ (orthogonal), with the odd case adding the $u$ and $w$ blocks.

[L2] The diagonal subalgebra $\mathfrak h$ is a Cartan subalgebra with simultaneous diagonalization of the adjoint action ([[prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L3] Every type on the classification list has a reduced crystallographic realization with its indicated Dynkin diagram ([[thm-existence-of-each-classified-root-system]]).

[L4] A root system in the sense used here is a reduced crystallographic root system ([[def-reduced-crystallographic-euclidean-root-system]]).

## Proof

**Proof technique:** direct.

1.1 For each algebra the eigenvalues of $\operatorname{ad}_H$, $H=\operatorname{diag}(x_1,\dots,x_n)\in\mathfrak h$, on the matrix-unit basis of the ambient matrix space are: $x_i-x_j$ on the diagonal blocks, $x_i+x_j$ on the $b$-block and $-(x_i+x_j)$ on the $c$-block, and in the odd orthogonal case $x_i$ on the $w$-block and $-x_i$ on the $u$-block. Reading these in terms of $\varepsilon_i$ gives exactly the four lists of roots in the statement, with the listed matrix units as nonzero eigenvectors. [L1, L2, algebra]

2.1 Conversely every eigenvector of $\operatorname{ad}(\mathfrak h)$ is a linear combination of matrix units with the same eigenvalue, and the matrix units listed for a given root span its eigenspace; since distinct listed units have distinct eigenvalue functionals, each root space is exactly one line. Hence the root set is the listed set and every root space is one-dimensional. [L1, step 1.1, algebra]

2.2 Each listed root set is a reduced crystallographic Euclidean root system: it is finite, spans the dual of the diagonal subalgebra, excludes $0$, and the functions $\pm\varepsilon_i\pm\varepsilon_j$ have only $\pm$ themselves on their lines. Integrality: the squared lengths are $2$ for $\varepsilon_i-\varepsilon_j$ and $\varepsilon_i\pm\varepsilon_j$ and $1$ or $4$ for $\pm\varepsilon_i$ and $\pm2\varepsilon_i$, and the inner products are $0,\pm1,\pm2$; hence $2(\beta,\alpha)/(\alpha,\alpha)\in\{0,\pm1,\pm2\}$ in every case. Reflection closure: the reflections act by the signed permutations of coordinates described in the explicit construction of these systems, so they permute each listed set. [L1, step 1.1, L4, algebra]

3.1 The standard simple roots in the four lists are $\varepsilon_i-\varepsilon_{i+1}$, with the last root respectively absent, $2\varepsilon_n$, $\varepsilon_{n-1}+\varepsilon_n$, or $\varepsilon_n$. Their Cartan matrices are the matrices of $A_{n-1},C_n,D_n,B_n$ from [L3], so the four root sets have the asserted types in the stable ranges. The remaining ranks follow directly from the same lists: $B_1=\{\pm\varepsilon_1\}$ and $C_1=\{\pm2\varepsilon_1\}$ are both $A_1$ after uniform rescaling; the map $\varepsilon_1\mapsto\varepsilon_1+\varepsilon_2$, $\varepsilon_2\mapsto\varepsilon_1-\varepsilon_2$ carries the eight roots of $B_2$ to those of $C_2$ and rescales every inner product by $2$; $D_2=\{\pm(\varepsilon_1-\varepsilon_2),\pm(\varepsilon_1+\varepsilon_2)\}$ is the orthogonal union $A_1\sqcup A_1$; and the three simple roots $\varepsilon_1-\varepsilon_2$, $\varepsilon_2-\varepsilon_3$, $\varepsilon_2+\varepsilon_3$ of $D_3$ have the three-vertex path Cartan matrix of $A_3$. Combined with steps 2.1 and 2.2, this proves every assertion without using the later low-rank example as a prerequisite. [L3, step 2.1, step 2.2, algebra] ∎
