---
id: lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity
kind: lemma
title: Handle slides, renumberings and reorientations reduce a unimodular middle-handle matrix to the identity
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 15
deps:
- def-countable-choice
- def-determinant-of-a-square-matrix
- def-matrix-equivalence-and-smith-normal-form-over-a-pid
- def-middle-handle-intersection-matrix-of-an-h-cobordism
- lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular
- lem-handle-slides-act-by-elementary-basis-change-on-handle-chains
- lem-handle-slides-preserve-the-relative-diffeomorphism-type
- thm-smith-normal-form-existence-over-a-pid
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170); Proposition 8.32 and its proof
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Lemma 1.24 and the diagonalisation step of Theorem 1.2
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). (i) Every invertible
integer matrix $A\in\operatorname{GL}_r(\mathbb Z)$ can be carried to the
identity by finitely many operations of the following three kinds: add an
integer multiple of one row (respectively column) to another row (respectively
column); interchange two rows (respectively columns); multiply a row
(respectively column) by $-1$. (ii) Consequently, if an h-cobordism as in the
previous lemma is presented with handles only in indices $k,k+1$ and
middle-handle intersection matrix $M\in\operatorname{GL}_r(\mathbb Z)$
([[lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular]]),
then $W$ admits a presentation relative to $M_0$ with the same indices and the
same number of handles whose middle-handle intersection matrix is the identity
$I_r$: each operation of (i) is realised by a handle slide, a renumbering of
equal-index handles or a reorientation of a handle core or cocore, all of which
preserve $W$ relative to $M_0$.

## Facts & Assumptions

**Given:** An integer matrix $A\in\operatorname{GL}_r(\mathbb Z)$; and an h-cobordism presented with handles only in indices $k,k+1$, $2\le k\le n-2$, whose middle-handle intersection matrix is $M\in\operatorname{GL}_r(\mathbb Z)$; $\mathrm{AC}_\omega$.

[F1] The Smith normal form existence theorem over the PID $\mathbb Z$ supplies a matrix-equivalent diagonal matrix $\operatorname{diag}(d_1,\dots,d_r)$ with $d_1\mid\cdots\mid d_r$ and the elementary implementation needed here is proved directly in step 1.1 below; over $\mathbb Z$ the units are $\pm1$ ([[thm-smith-normal-form-existence-over-a-pid]], [[def-matrix-equivalence-and-smith-normal-form-over-a-pid]]).

[F2] The determinant of a diagonal matrix is the product of its diagonal entries, so if $A$ is invertible with $\det A=\pm1$ then $\prod_id_i=\pm1$ and each $d_i=\pm1$; sign changes turn the diagonal matrix into $I_r$ ([[def-determinant-of-a-square-matrix]]).

[F3] Under the disk-push comparison together with its specified lower-stage homotopy, a slide changes an upper or lower core basis generator by adding $\pm$ another generator, and preserves the relative diffeomorphism type. [[lem-handle-slides-act-by-elementary-basis-change-on-handle-chains]], [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]

[F4] Rows index upper handles and columns index lower handles; the differential acts on row vectors by $x\mapsto xM$. Relabeling or reorienting a core relabels or changes the sign of its basis generator. [[def-middle-handle-intersection-matrix-of-an-h-cobordism]]

## Proof

**Proof technique:** direct.

1.1 A finite elementary reduction exists directly over $\mathbb Z$. For $r=0$ there is nothing to do. For $r\ge1$, the entries of the first column of $A$ have gcd $1$: the first row of the integer inverse of $A$ supplies an integer linear combination equal to $1$. Apply the Euclidean algorithm to pairs of entries, using row swaps and subtraction of integer multiples; every nonzero remainder is smaller in absolute value than the previous divisor, so each pair reduction terminates. Iterating through the finite column yields $(1,0,\ldots,0)^T$, with a final sign change if needed. Then subtract suitable multiples of column one from the other columns to clear the first row. The resulting matrix is $\operatorname{diag}(1,B)$ with $B\in\operatorname{GL}_{r-1}(\mathbb Z)$, because the performed operations are invertible over $\mathbb Z$. Repeat on $B$; induction on the matrix size terminates with $I_r$. All operations are exactly additions, swaps and sign changes, proving (i). This also gives the required elementary implementation of the Smith-form conclusion of [F1]. [F1, F2, given, algebra]

2.1 For an upper slide $g_{i'}'=g_{i'}+\varepsilon g_i$, linearity gives $R_{i'}'=R_{i'}+\varepsilon R_i$. For a lower slide $e_{j'}'=e_{j'}+\varepsilon e_j$, rewrite each boundary in the new basis: $e_{j'}=e_{j'}'-\varepsilon e_j'$. Thus $C_j'=C_j-\varepsilon C_{j'}$ and the other columns are unchanged. Choosing the opposite slide direction realizes any desired target column addition; finitely repeating a unit addition realizes any integer multiple. In ambient dimension $n+1$, both handle indices $k,k+1$ lie between $1$ and $(n+1)-2=n-1$, so [F3] applies throughout $2\le k\le n-2$. Swaps and sign changes are relabelings and reorientations by [F4]. [F3, F4, step 1.1, algebra]

3.1 Apply to the presentation of (ii) the finite sequence of handle slides, renumberings and reorientations corresponding to the algebraic sequence of step 1.1: each step preserves $W$ relative to $M_0$, so the final presentation has the same indices and the same number of handles and its middle-handle intersection matrix is $I_r$ by [F1] and the definition of the matrix as the differential $\partial_{k+1}$ in the handle bases. [F4, given, step 2.1] ∎
