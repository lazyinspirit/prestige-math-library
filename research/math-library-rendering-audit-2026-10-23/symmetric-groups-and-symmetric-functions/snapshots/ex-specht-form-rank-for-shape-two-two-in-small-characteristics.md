---
id: ex-specht-form-rank-for-shape-two-two-in-small-characteristics
kind: example
title: Specht Gram rank for shape (2,2)
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-modular-specht-form-and-radical-quotient
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-integral-specht-lattice-and-base-change
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-young-tableau-standard-tableau-and-shape
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §10.4 and §11.1, printed pp. 37-39 (Gram gcd and the vanishing of D^lambda)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Exercise 2.4 and §2.3, printed pp. 23-25"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Let $\lambda=(2,2)\vdash4$, and let
$$s_1=\begin{matrix}1&2\\3&4\end{matrix},\qquad s_2=\begin{matrix}1&3\\2&4\end{matrix}$$
be the two standard $\lambda$-tableaux, written with the entries of the first
row first; recall that a $\lambda$-tabloid is determined by the two row sets
of size $2$
([[def-young-subgroup-tabloid-and-permutation-module]],
[[def-young-tableau-standard-tableau-and-shape]]). Then the integral Gram
matrix of the standard polytabloids of shape $(2,2)$ is
$$G_{(2,2)}=\bigl(\beta(e_{s_i},e_{s_j})\bigr)_{i,j\in\{1,2\}} =\begin{pmatrix}4&2\\2&4\end{pmatrix}\in M_2(\mathbb Z),$$
in the notation of
[[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]. Consequently,
for a prime $p$, a splitting field $k$ of characteristic $p$ for $S_4$, and
the modular quotient $D^{(2,2)}=S^{(2,2)}_k/R^{(2,2)}$ of
[[def-modular-specht-form-and-radical-quotient]],
$$\dim_kD^{(2,2)}=\operatorname{rank}_k \bigl(G_{(2,2)}\bmod p\bigr) =\begin{cases}0,&p=2,\\ 1,&p=3,\\ 2,&p>3.\end{cases}$$
In particular, in characteristic $2$ the Specht module $S^{(2,2)}_k$ is
nonzero of dimension $2$, while its invariant form is identically zero and
its form quotient $D^{(2,2)}$ vanishes; this is the phenomenon that the
prime-divisibility criterion for the Gram entries detects.

## Facts & Assumptions

**Given:** The partition $\lambda=(2,2)$ of $n=4$ and its two standard
tableaux $s_1,s_2$.

[F1] A $\lambda$-tableau is a bijection from the cells of $[\lambda]$ onto
$\{1,\dots,4\}$; the $\lambda$-tabloid $\{t\}=\{\rho\cdot t:\rho\in R_t\}$ is
determined by its row sets, and distinct tabloids are distinct as pairs of
row sets ([[def-young-subgroup-tabloid-and-permutation-module]],
[[def-young-tableau-standard-tableau-and-shape]]).

[F2] $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$ and
$e_t=\kappa_t\{t\}=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)
\{\gamma\cdot t\}$; $C_t\cap R_t=\{1\}$, so the tabloids
$\{\gamma\cdot t\}$ for $\gamma\in C_t$ are pairwise distinct and every
coefficient of $e_t$ lies in $\{0,1,-1\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] The integral tabloid form $\beta$ has the tabloids as an orthonormal
$\mathbb Z$-basis, so $\beta(\sum_Ta_TT,\sum_Tb_TT)=\sum_Ta_Tb_T$ for
integer coefficients, and for every commutative ring $R$ scalar extension
gives the $R$-bilinear form $\beta_R$ with orthonormal tabloid basis
([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F4] The standard polytabloids of $S^\lambda_{\mathbb Z}$ form a
$\mathbb Z$-basis, and for every commutative ring $R$ the natural map
$R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}\to M^\lambda_R$ is injective onto
the polytabloid span with the images of the standard polytabloids as basis
([[def-integral-specht-lattice-and-base-change]]).

[F5] For a splitting $p$-modular system $(K,\mathcal O,k)$ with the field
$k$ of characteristic $p$, the quotient
$D^\lambda=S^\lambda_k/R^\lambda$ satisfies
$\dim_kD^\lambda=\operatorname{rank}_k(G_\lambda\bmod p)$, the rank of the
reduction of the integral Gram matrix in the standard basis
([[def-modular-specht-form-and-radical-quotient]]).

[F6] The standard $\lambda$-tableaux are the tableaux strictly increasing
along rows and down columns; for $\lambda=(2,2)$ they are exactly
$s_1=12/34$ and $s_2=13/24$
([[def-young-tableau-standard-tableau-and-shape]]).

## Verification

**Proof technique:** direct.

1.1 The column stabilizer of $s_1=12/34$ is $C_{s_1}=\{1,(13),(24),(13)(24)\}$, and the four tabloids of its column orbit are pairwise distinct: $1$ gives $T_1=\{\{1,2\},\{3,4\}\}$; $(13)$ gives the tableau $32/14$ with row sets $\{2,3\},\{1,4\}$, so $\{(13)s_1\}=T_2=\{\{2,3\},\{1,4\}\}$; $(24)$ gives $14/32$ with row sets $\{1,4\},\{2,3\}$, so $\{(24)s_1\}=T_3=\{\{1,4\},\{2,3\}\}$; and $(13)(24)$ gives $34/12$, so $\{(13)(24)s_1\}=T_4=\{\{3,4\},\{1,2\}\}$. Hence $e_{s_1}=T_1-T_2-T_3+T_4$. Similarly $C_{s_2}=\{1,(12),(34),(12)(34)\}$ for $s_2=13/24$: $1$ gives $U_1=\{\{1,3\},\{2,4\}\}$; $(12)$ gives $23/14$, so $T_2$; $(34)$ gives $14/23$, so $T_3$; and $(12)(34)$ gives $24/13$, so $U_4=\{\{2,4\},\{1,3\}\}$. Hence $e_{s_2}=U_1-T_2-T_3+U_4$. The tabloids $T_1,T_2,T_3,T_4$ are distinct, as are $U_1,T_2,T_3,U_4$, by [F1] and [F2]. [given, F1, F2, algebra]

2.1 Because the tabloid basis is orthonormal by [F3], a polytabloid whose expansion in tabloids has all coefficients in $\{0,1,-1\}$ at pairwise distinct tabloids pairs with itself to the number of its nonzero terms; by step 1.1, $\beta(e_{s_1},e_{s_1})=4$ and $\beta(e_{s_2},e_{s_2})=4$. The supports of $e_{s_1}$ and $e_{s_2}$ meet exactly in the two tabloids $T_2$ and $T_3$, where the coefficients are $-1$ in both polytabloids, so $\beta(e_{s_1},e_{s_2})=(-1)(-1)+(-1)(-1)=2$; symmetry of $\beta$ gives $\beta(e_{s_2},e_{s_1})=2$ as well. Therefore $$G_{(2,2)}=\begin{pmatrix}4&2\\2&4\end{pmatrix}.$$ [given, F2, F3, step 1.1, algebra]

3.1 Let $p$ be a prime and reduce the entries of $G_{(2,2)}$ modulo $p$. For $p=2$ all four entries vanish, so the reduced matrix is the zero matrix of rank $0$. For $p=3$ the reduction is $\begin{pmatrix}1&2\\2&1\end{pmatrix}$, which is nonzero while its determinant $1\cdot1-2\cdot2=-3$ vanishes, so its rank is $1$; its first row is nonzero, and the two columns are proportional, which confirms the rank directly. For $p>3$ the determinant $12=2^2\cdot3$ is nonzero in $k$, so the rank is $2$. The determinant and the largest nonvanishing minor of an integer matrix depend only on the characteristic of $k$, so the same answer holds for every field of the given characteristic. [given, F3, step 2.1, algebra]

4.1 By [F5] the dimension of the modular quotient $D^{(2,2)}$ over a splitting field $k$ of characteristic $p$ is the rank computed in step 3.1, namely $0$ for $p=2$, $1$ for $p=3$ and $2$ for $p>3$. Finally, by [F4] the images of the standard polytabloids $e_{s_1},e_{s_2}$ form a $k$-basis of $S^{(2,2)}_k$ for every field $k$, so $\dim_kS^{(2,2)}_k=2$ in every characteristic; in characteristic $2$, where the reduced Gram matrix vanishes and hence $R^{(2,2)}=S^{(2,2)}_k$, this exhibits a nonzero Specht module whose invariant bilinear form is identically zero and whose form quotient is zero. [given, F4, F5, F6, step 2.1, step 3.1] ∎
