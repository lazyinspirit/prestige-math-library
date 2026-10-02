---
id: rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity
kind: remark
title: "Triangularity does not compute every modular decomposition number"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-splitting-p-modular-system-for-a-finite-group
  - thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular
  - def-decomposition-numbers-and-decomposition-matrix
  - def-dominance-order-on-partitions
  - def-p-regular-and-p-restricted-partitions
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Example 12.4, printed p. 43 (decomposition matrices of S_3 at p=2 and p=3)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §24 opening, printed p. 98 (partial results and the general determination problem)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Remark

The unitriangularity theorem of this page
([[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]]) is a
constraint on the decomposition matrix, not a computation of it. It fixes
three things: the positions that are forced to be zero, namely those with
$d_{\lambda\mu}=0$ unless $\mu\unrhd\lambda$
([[def-decomposition-numbers-and-decomposition-matrix]],
[[def-dominance-order-on-partitions]]); the diagonal values $d_{\lambda\lambda}
=1$ for $p$-regular $\lambda$; and the resulting lower unitriangular shape of
the square block of $p$-regular rows and columns. It says nothing about the
value of an off-diagonal entry $d_{\lambda\mu}$ at an allowed position, that
is, at a pair with $\mu\rhd\lambda$ and $\mu$ $p$-regular: such an entry may be
zero or positive, and the triangularity argument does not compute it.

This is a genuine limitation of the triangle data, not merely of the proof.
For $n=3$ the formal constraints are the same at $p=2$ and at $p=3$: the
$p$-regular partitions used as column labels are $(3),(2,1)$ in both
characteristics, the forced zero at the position
$\bigl((3),(2,1)\bigr)$ is present in both, and the same diagonal positions
$d_{(3),(3)}=d_{(2,1),(2,1)}=1$ are required. Yet the actual matrices,
as recorded in James's Example 12.4, differ exactly at an allowed position,
$d_{(2,1),(3)}=0$ for $p=2$ and $d_{(2,1),(3)}=1$ for $p=3$. Hence a rule
that reads off off-diagonal entries from the dominance-zero pattern and the
diagonal alone cannot produce the decomposition matrix; the value depends on
the modular composition factors of the Specht modules, which are separate
input. The source separates the two problems in the same way: it opens the
chapter on decomposition matrices by recording that there is "no known way of
determining the composition factors of the general Specht module when the
ground field $F$ has characteristic a prime $p$", and closes the paragraph
with "The theorems we expound give only partial results" (James, §24, printed
p. 98). This pair proves the triangularity constraints and a small number of
explicit finite computations, and asserts no formula or algorithm for the
general positive-characteristic decomposition matrix; the later
Hecke-algebra and canonical-basis regimes involve further tools and
hypotheses and are used nowhere on this pair.

## Facts & Assumptions

**Given:** A prime $p$, an integer $n\ge0$, and a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$ ([[def-splitting-p-modular-system-for-a-finite-group]]). For the witness, $n=3$ and $p=2$ or $p=3$.

[F1] By the unitriangularity theorem ([[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]]), with $d_{\lambda\mu}=[S^\lambda_k:D^\mu]$ the decomposition numbers of the ordinary irreducibles $S^\lambda_K$ ([[def-decomposition-numbers-and-decomposition-matrix]]): $d_{\lambda\mu}=0$ unless $\mu\unrhd\lambda$; $d_{\lambda\lambda}=1$ for every $p$-regular $\lambda\vdash n$; and with the $p$-regular partitions listed in decreasing lexicographic order the leading square block is lower unitriangular.

[F2] Combined with [[def-p-regular-and-p-restricted-partitions]]: a partition is $p$-regular when every positive part occurs fewer than $p$ times. For $n=3$ one has $z_1(1,1,1)=3\ge p$ for $p\in\{2,3\}$, so $(1,1,1)$ is $p$-singular for both primes; and $z_3(3)=1<p$, $z_2(2,1)=z_1(2,1)=1<p$ for both, so $(3)$ and $(2,1)$ are $p$-regular for both primes. In the dominance order on partitions of $3$ one has $(3)\rhd(2,1)\rhd(1,1,1)$, and the dominance relation does not depend on $p$ ([[def-dominance-order-on-partitions]]).

[F3] James's Example 12.4 (printed p. 43) records the decomposition matrices of $S_3$ with rows $S^{(3)},S^{(2,1)},S^{(1,1,1)}$ and columns $D^{(3)},D^{(2,1)}$; at $p=2$ $$\begin{pmatrix}1&0\\0&1\\1&0\end{pmatrix}, \qquad\text{and at }p=3\qquad \begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}.$$ At $p=2$ the equality $S^{(1,1,1)}_k\cong S^{(3)}_k$ holds because the sign representation equals the trivial representation in characteristic $2$; at $p=3$ the row $S^{(2,1)}$ contains a trivial composition factor and a sign composition factor, each once.

[F4] James §24 (printed p. 98) opens: "There is no known way of determining the composition factors of the general Specht module when the ground field $F$ has characteristic a prime $p$." The same paragraph closes: "The theorems we expound give only partial results."

## Proof

**Proof technique:** direct.

1.1 By [F1] the triangle data for given $n$ and $p$ consist of: the index sets of rows and columns (all partitions of $n$, and the $p$-regular partitions of $n$), the set of positions forced to be zero $\{(\lambda,\mu):\mu\ntrianglerighteq\lambda\}$, the diagonal positions $\{(\lambda,\lambda):\lambda\ p\text{-regular}\}$ with value $1$, and the lex ordering of the square block. No condition of [F1] assigns a value to an allowed position $(\lambda,\mu)$ with $\mu\rhd\lambda$, $\mu$ $p$-regular, $\lambda\ne\mu$; in particular $\mu\ntrianglerighteq\lambda$ holds for $\mu=(2,1)$, $\lambda=(3)$ in $n=3$, so the position $((3),(2,1))$ is forced to be zero, while the position $((2,1),(3))$ is allowed because $(3)\rhd(2,1)$ by [F2]. [given, F1, F2]

1.2 By [F2] the $p$-regular partitions of $3$ are $(3),(2,1)$ for $p=2$ and for $p=3$, and $(1,1,1)$ is $p$-singular for both primes; by [F3] the corresponding matrices $M_p$ with rows $(3),(2,1),(1,1,1)$ and columns $(3),(2,1)$ are $$M_2=\begin{pmatrix}1&0\\0&1\\1&0\end{pmatrix},\qquad M_3=\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}.$$ [given, F2, F3]

2.1 Both $M_2$ and $M_3$ satisfy every condition of step 1.1. Indeed, the left column is indexed by $(3)$ and the right column by $(2,1)$ in both matrices; for the row $(3)$ the entry at column $(2,1)$ is $0$ in both, as required since $(2,1)$ does not dominate $(3)$; the diagonal entries $d_{(3),(3)}=1$ and $d_{(2,1),(2,1)}=1$ are present in both; and the row $(1,1,1)$ carries no diagonal requirement because $(1,1,1)$ is $p$-singular for both primes, its entries lying in allowed positions. The two matrices nevertheless differ: $d_{(2,1),(3)}=0$ in $M_2$ and $d_{(2,1),(3)}=1$ in $M_3$, at the position $((2,1),(3))$, which is allowed in both cases by step 1.1. Since the dominance pattern and the diagonal positions are the same while the entry differs, the conditions of [F1] do not determine the entries at allowed positions. [given, F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 By step 2.1 the triangularity theorem's data are strictly weaker than a determination of the decomposition matrix: they are satisfied by two different matrices, realized in characteristics $2$ and $3$ respectively, so an off-diagonal entry depends on the modular composition factors of the Specht modules and not on the triangular shape alone. A determination of the general off-diagonal entry therefore needs an additional input beyond the results of this pair, as the source's own separation of the two problems in [F4] records: the general composition factors are not determined by the theory expounded there, whose theorems "give only partial results". This pair establishes the unitriangularity constraints and the explicit small-shape computations only, and asserts no general formula or algorithm for decomposition numbers in positive characteristic; no step of its proofs computes an off-diagonal entry in the allowed region by a general rule. [given, F4, step 2.1] ∎
