---
status: published
id: lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups
kind: lemma
title: Bounded elementary generation of SLn(R) by transvections
deps:
  - def-elementary-matrix
  - def-elementary-row-operations-and-row-equivalence
  - cor-elementary-matrices-are-invertible
  - thm-matrix-multiplication-laws
  - def-matrix-product-and-identity-matrix
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
axiom_audit: "No choice is used; at each pivot repair the least available index in a nonempty finite set may be used."
sources:
  references:
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups, complete notes with exercise sheets"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2, II.1, printed p. 3/PDF p. 33: asks to prove bounded generation of SL_n(R) for n>2 by elementary subgroups; it is an exercise prompt and supplies no proof or numerical bound. The complete elimination proof and bound below are local."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, §§1.1–1.4, printed pp. 31–55: property (T) context for SL_n(R); not used for the explicit transvection count."
---

## Statement

Let $n\ge2$. Throughout this item, label rows and columns by
$1,\ldots,n$: an entry with labels $(i,j)$ is the entry indexed by
$(i-1,j-1)$ in the zero-based matrix interfaces below. Products and
determinants use those interfaces under this relabeling. For
$1\le i\ne j\le n$, let $e_{ij}$ be the standard matrix unit and put $E_{ij}(t):=I_n+t e_{ij}$ for $t\in\mathbb R$, the elementary
transvection ([[def-elementary-matrix]],
[[def-elementary-row-operations-and-row-equivalence]],
[[def-matrix-product-and-identity-matrix]]). Define
$$\mathrm{SL}_n(\mathbb R):=\{g\in M_n(\mathbb R):\det g=1\}$$
using the determinant ([[def-determinant-of-a-square-matrix]]). Then every
$g\in\mathrm{SL}_n(\mathbb R)$ is a product of at most
$M(n):=2n^2+6n$ elementary transvections $E_{ij}(t)$ (factors $E_{ij}(0)=I_n$
are allowed). In particular, $\mathrm{SL}_n(\mathbb R)$ is boundedly generated
by its elementary root subgroups
$H_{ij}:=\{E_{ij}(t):t\in\mathbb R\}$.

## Facts & Assumptions

**Given:** An integer $n\ge2$ and a matrix $g\in M_n(\mathbb R)$ with $\det g=1$.

[F1] For $i\ne j$, $e_{ij}^2=0$, and multiplication on the left by $E_{ij}(t)$ adds $t$ times row $j$ to row $i$, while multiplication on the right adds $t$ times column $i$ to column $j$ ([[def-elementary-matrix]], [[def-elementary-row-operations-and-row-equivalence]], [[def-matrix-product-and-identity-matrix]]).

[F2] Matrix multiplication is associative, distributive and unital ([[thm-matrix-multiplication-laws]]).

[F3] The determinant is given by its finite Leibniz formula and is multiplicative for square matrices over a commutative ring ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]]).

[F4] Every elementary transvection is invertible, with inverse given by the inverse row-add operation ([[cor-elementary-matrices-are-invertible]]).

## Proof

**Proof technique:** simultaneous row and column elimination, followed by a six-transvection diagonal factorization.

1.1 Each $E_{ij}(t)$ has determinant $1$: in its Leibniz expansion the identity permutation contributes $1$, and every nonidentity permutation term vanishes because the only nonzero off-diagonal entry is at $(i,j)$. By [F4], its inverse is the transvection $E_{ij}(-t)$; also $E_{ij}(s)E_{ij}(t)=E_{ij}(s+t)$ by [F1]–[F2], so each $H_{ij}$ is a subgroup. [F1, F2, F3, F4, algebra]

2.1 Start with $M=g$. At stage $k$, where $1\le k<n$, the first $k-1$ rows and columns have already been cleared off the diagonal, their pivots $d_1,\dots,d_{k-1}$ are nonzero, and $\det M=1$. If $M_{kk}=0$, row $k$ is not zero because $\det M\ne0$; its entries in columns $j<k$ are zero, so some $j>k$ has $M_{kj}\ne0$. Choose the least such $j$ and replace $M$ by $M E_{j,k}(1)$, which adds column $j$ to column $k$ and makes the pivot $M_{kk}+M_{kj}=M_{kj}\ne0$. The cleared earlier rows remain unchanged because their entries in columns $j$ and $k$ are zero. This uses at most one transvection for pivot repair. [F1, F2, F3, step 1.1]

3.1 With $p:=M_{kk}\ne0$, for each $j>k$ right-multiply by $E_{k,j}(-M_{kj}/p)$ to clear entry $(k,j)$, then for each $i>k$ left-multiply by $E_{i,k}(-M_{ik}/p)$ to clear entry $(i,k)$. These operations leave the earlier rows and columns cleared: earlier rows have zero entries in columns $k,j$, and row $k$ has zero entries outside its pivot after the first set of operations. Thus row and column $k$ are isolated with a nonzero pivot $d_k=p$. This costs at most $2(n-k)$ further transvections. [F1, F2, step 2.1]

4.1 The operations in steps 2.1–3.1 are transvections, so [F1]–[F3] preserve $\det M=1$. Associativity collects the left multiplications into a product $U$ and the right multiplications into a product $V$, giving $UgV=D:=\operatorname{diag}(d_1,\dots,d_n)$. Summing the stage costs gives $\sum_{k=1}^{n-1}(2(n-k)+1)=n^2-1$, so each of $U,V$ has at most $n^2-1$ factors. Every pivot $d_i$ is nonzero, and $\prod_{i=1}^n d_i=\det D=1$. [F1, F2, F3, step 2.1, step 3.1]

5.1 For $1\le k<n$, put $s_k=d_1\cdots d_k$ and let $D_k$ be diagonal with $s_k$ at position $k$, $s_k^{-1}$ at position $k+1$, and $1$ elsewhere. Then $D=\prod_{k=1}^{n-1}D_k$: the first diagonal entry is $s_1=d_1$, an interior entry $j$ is $s_{j-1}^{-1}s_j=d_j$, and the last is $s_{n-1}^{-1}=d_n$ because $\prod_i d_i=1$. [F2, F3, step 4.1]

6.1 In the $(k,k+1)$ block write $T_+(u)=E_{k,k+1}(u)$ and $T_-(v)=E_{k+1,k}(v)$. For every nonzero $a$, direct multiplication gives $T_+(a)T_-(-a^{-1})T_+(a)=\begin{pmatrix}0&a\\-a^{-1}&0\end{pmatrix}$ and $T_+(-1)T_-(1)T_+(-1)=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, so their product is $\operatorname{diag}(a,a^{-1})$. Taking $a=s_k$ shows that each $D_k$ is a product of six transvections; therefore $D$ is a product of at most $6(n-1)$ transvections. [F1, F2, step 5.1, algebra]

7.1 From $UgV=D$ we have $g=U^{-1}DV^{-1}$. By [F4], the inverses of the transvections in $U$ and $V$ are transvections, so $U^{-1}$ and $V^{-1}$ each use at most $n^2-1$ factors. Together with step 6.1, this writes $g$ as a product of at most $2(n^2-1)+6(n-1)=2n^2+6n-8\le M(n)$ transvections. Thus the stated bounded-generation claim holds. [F4, step 4.1, step 6.1, algebra] ∎
