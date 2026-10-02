---
id: ex-decomposition-matrices-of-s3-in-characteristics-two-and-three
kind: example
title: Decomposition matrices of S3 at p=2 and p=3
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-modular-specht-form-and-radical-quotient
  - thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads
  - thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular
  - def-decomposition-numbers-and-decomposition-matrix
  - def-sign-representation-and-restriction-of-a-representation
  - def-p-regular-and-p-restricted-partitions
  - def-dominance-order-on-partitions
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-young-tableau-standard-tableau-and-shape
  - def-splitting-p-modular-system-for-a-finite-group
  - def-simple-module
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Example 5.1, Theorem 12.1 and Example 12.4, printed pp. 18 and 42-43"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3 and Exercise 2.4, printed pp. 23-25"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Example

Let $p\in\{2,3\}$ and let $(K,\mathcal O,k)$ be a splitting $p$-modular
system for $S_3$. In the decomposition matrix of $S_3$, with rows
$S^{(3)},S^{(2,1)},S^{(1,1,1)}$ and columns the $p$-regular labels
$D^{(3)},D^{(2,1)}$,

$$p=2:\quad \begin{pmatrix}1&0\\0&1\\1&0\end{pmatrix}, \qquad\qquad p=3:\quad \begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}.$$

Thus $d_{(2,1),(3)}=0$ for $p=2$ but $d_{(2,1),(3)}=1$ for $p=3$, while both
matrices satisfy the dominance bound and the unitriangular shape of
[[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]].

## Facts & Assumptions

**Given:** A prime $p\in\{2,3\}$, a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_3$ ([[def-splitting-p-modular-system-for-a-finite-group]]), the base-changed Specht modules $S^\lambda_k\subseteq M^\lambda_k$ for the three partitions $\lambda\vdash3$, and the modular form quotients $D^\lambda=S^\lambda_k/R^\lambda$ ([[def-integral-specht-lattice-and-base-change]], [[def-modular-specht-form-and-radical-quotient]]).

[F1] For every field $k$ the images of the standard polytabloids form a $k$-basis of $S^\lambda_k$ ([[def-integral-specht-lattice-and-base-change]]); the standard tableaux are $12/3$, $13/2$ for $(2,1)$, the single $123$ for $(3)$ and the single column $1/2/3$ for $(1,1,1)$ ([[def-young-tableau-standard-tableau-and-shape]]). Hence $\dim_kS^{(3)}_k=\dim_kS^{(1,1,1)}_k=1$ and $\dim_kS^{(2,1)}_k=2$.

[F2] The $(2,1)$-tabloids are $v_1,v_2,v_3$, where $v_i$ is the tabloid with singleton second row $\{i\}$, and they form a $k$-basis of $M^{(2,1)}_k$ with $\sigma\cdot v_i=v_{\sigma(i)}$; the $(3)$-tabloids reduce to the single tabloid $v$ of the one-row shape, and the $(1,1,1)$-tabloids are the six orderings of $1,2,3$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F3] For a tableau $t$ one has $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$ and $e_t=\kappa_t\cdot\{t\}$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]). For $t=12/3$ and $u=13/2$ the column stabilizers are $C_t=\{1,(13)\}$ and $C_u=\{1,(12)\}$, and both $(13)\cdot t$ and $(12)\cdot u$ have singleton second row $\{1\}$; hence $e_t=v_3-v_1$ and $e_u=v_2-v_1$ in $M^{(2,1)}_k$ over every field $k$.

[F4] The integral tabloid form $\beta$ has the tabloids as an orthonormal basis, its scalar extension $\beta_k$ is symmetric and nondegenerate, and $\dim_kD^\lambda=\operatorname{rank}_k(G_\lambda\bmod p)$ ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]], [[def-modular-specht-form-and-radical-quotient]]).

[F5] For $p\in\{2,3\}$ the $p$-regular partitions of $3$ are $(3)$ and $(2,1)$, while $(1,1,1)$ has $z_1=3\ge p$ and is $p$-singular ([[def-p-regular-and-p-restricted-partitions]]).

[F6] For a $p$-regular $\lambda$ the quotient $D^\lambda$ is a nonzero simple $k[S_3]$-module; the modules $D^\lambda$ over the $p$-regular labels are pairwise non-isomorphic, they are self-dual and absolutely irreducible, and every simple $k[S_3]$-module is isomorphic to exactly one of them; for $p$-singular $\lambda$ one has $D^\lambda=0$ ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]).

[F7] The decomposition numbers $d_{\lambda\mu}=[S^\lambda_k:D^\mu]$ are indexed by all rows $\lambda\vdash3$ and the $p$-regular columns $\mu$; the dominance bound $d_{\lambda\mu}=0$ unless $\mu\unrhd\lambda$, the diagonal $d_{\lambda\lambda}=1$ for $p$-regular $\lambda$, the lower unitriangular shape in decreasing lexicographic order, and $(3)\rhd(2,1)\rhd(1,1,1)$ with $(2,1)\ntrianglerighteq(3)$ all hold ([[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]], [[def-decomposition-numbers-and-decomposition-matrix]], [[def-dominance-order-on-partitions]]).

[F8] The sign representation is the one-dimensional representation with $\sigma\mapsto\operatorname{sgn}(\sigma)$ ([[def-sign-representation-and-restriction-of-a-representation]]); since $\operatorname{sgn}(\sigma)=\pm1$, it is trivial in characteristic $2$ and nontrivial in characteristic $3$. A one-dimensional $k[S_3]$-module is nonzero and has no proper nonzero subspace, so it is simple ([[def-simple-module]]).

## Verification

**Proof technique:** direct.

1.1 By [F2] and [F3], $M^{(2,1)}_k$ has $k$-basis $v_1,v_2,v_3$ and $S^{(2,1)}_k$ has $k$-basis $e_t=v_3-v_1$, $e_u=v_2-v_1$. Applying the orthonormal form $\beta_k$ of [F4], $$\beta(e_t,e_t)=\beta(v_3-v_1,v_3-v_1)=1+1=2,\qquad \beta(e_u,e_u)=2,\qquad \beta(e_t,e_u)=\beta(v_3-v_1,v_2-v_1)=1,$$ so $G_{(2,1)}=\begin{pmatrix}2&1\\1&2\end{pmatrix}$. [given, F2, F3, F4, algebra]

1.2 The unique $(3)$-tabloid $v$ is fixed by $S_3$, so $S^{(3)}_k=kv$ is the one-dimensional trivial module, and $G_{(3)}=(1)$ has rank $1$; over a field of characteristic $2$ the sign representation is trivial by [F8], and over a field of characteristic $3$ it is nontrivial. The column stabilizer of a $(1,1,1)$-tableau $w$ is all of $S_3$, and the single standard polytabloid is $$e=\sum_{\sigma\in S_3}\operatorname{sgn}(\sigma)\,\{\sigma\cdot w\};$$ its six tabloid coefficients are $\pm1$ at the six distinct orderings, so $e\ne0$, and for $\tau\in S_3$ the substitution $\sigma'=\tau\sigma$ gives $$\tau\cdot e=\sum_{\sigma}\operatorname{sgn}(\sigma)\,\{\tau\sigma\cdot w\} =\operatorname{sgn}(\tau)\sum_{\sigma'}\operatorname{sgn}(\sigma')\, \{\sigma'\cdot w\}=\operatorname{sgn}(\tau)\,e.$$ Hence $S^{(1,1,1)}_k=ke$ is the one-dimensional sign representation. [given, F1, F2, F3, F8, algebra]

2.1 Reducing $G_{(2,1)}$ modulo $p$: for $p=2$ the reduction $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has determinant $1$, hence rank $2$; for $p=3$ the reduction is nonzero with determinant $3\equiv0$, hence rank $1$, its columns being proportional. By the dimension formula of [F4], $$\dim_kD^{(2,1)}=\operatorname{rank}_p(G_{(2,1)}\bmod p) =\begin{cases}2,&p=2,\\1,&p=3.\end{cases}$$ Also $\dim_kD^{(3)}=\operatorname{rank}_p(1)=1$ for both primes. [given, F4, step 1.1, algebra]

3.1 Let $p=2$. Since $\dim_kD^{(2,1)}=2=\dim_kS^{(2,1)}_k$ by steps 2.1 and 1.1, the radical $R^{(2,1)}$ is zero and $S^{(2,1)}_k=D^{(2,1)}$ is simple by [F6]. Since $\dim_kD^{(3)}=1=\dim_kS^{(3)}_k$, also $S^{(3)}_k=D^{(3)}$, the trivial module, and by [F8] and step 1.2 the sign module satisfies $S^{(1,1,1)}_k\cong S^{(3)}_k=D^{(3)}$. Therefore $d_{(3),(3)}=1$, $d_{(3),(2,1)}=0$; $d_{(2,1),(3)}=0$, $d_{(2,1),(2,1)}=1$; $d_{(1,1,1),(3)}=1$, $d_{(1,1,1),(2,1)}=0$, which is the matrix displayed for $p=2$. [given, F5, F6, F8, step 1.1, step 1.2, step 2.1]

3.2 Let $p=3$. Here $D^{(3)}$ is the trivial module of dimension $1$ by step 1.2 and step 2.1, and $D^{(2,1)}$ is a simple module of dimension $1$ that is not isomorphic to $D^{(3)}$ by [F6]. The sign module $S^{(1,1,1)}_k$ of step 1.2 is one-dimensional, hence simple by [F8], so it is isomorphic to $D^{(3)}$ or to $D^{(2,1)}$ by [F6]; it is nontrivial in characteristic $3$ by step 1.2, hence it is not $D^{(3)}$ and $S^{(1,1,1)}_k\cong D^{(2,1)}$, so $d_{(1,1,1),(3)}=0$ and $d_{(1,1,1),(2,1)}=1$. For $S^{(2,1)}_k$, by [F3] $$w:=e_t+e_u=(v_3-v_1)+(v_2-v_1)=v_1+v_2+v_3-3v_1=v_1+v_2+v_3$$ because $3v_1=0$ in characteristic $3$; here $w\ne0$ and $\sigma\cdot w=w$ for every $\sigma\in S_3$ by [F2], so $kw$ is a one-dimensional trivial submodule of $S^{(2,1)}_k$, isomorphic to $D^{(3)}$. On the quotient $S^{(2,1)}_k/kw$, which is one-dimensional, the transposition $(12)$ acts by $(12)\cdot e_t=v_3-v_2\equiv-e_t$, since $v_3-v_2+e_t=2v_3-v_1-v_2=3v_3-w\equiv0 \pmod{kw}$; the quotient therefore is a nontrivial one-dimensional simple module, hence isomorphic to $D^{(2,1)}$. Its dimension $2$ equals $1+1$, so the composition factors of $S^{(2,1)}_k$ are $D^{(3)}$ and $D^{(2,1)}$, each once: $d_{(2,1),(3)}=d_{(2,1),(2,1)}=1$. With $d_{(3),(3)}=1$ and $d_{(3),(2,1)}=0$ from $S^{(3)}_k=D^{(3)}$, this is the matrix displayed for $p=3$. [given, F3, F5, F6, F8, step 1.1, step 1.2, step 2.1, algebra]

4.1 Both matrices satisfy the constraints of [F7]. The forced zero $d_{(3),(2,1)}=0$ holds in both, because $(2,1)\ntrianglerighteq(3)$; the $p$-regular diagonal entries $d_{(3),(3)}=d_{(2,1),(2,1)}=1$ hold in both; and with the $p$-regular rows and columns in the decreasing lexicographic order $(3),(2,1)$ the leading block is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$ at $p=2$ and $\begin{pmatrix}1&0\\1&1\end{pmatrix}$ at $p=3$, lower unitriangular in both cases. The entries of the row $(1,1,1)$ lie in allowed positions since $(1,1,1)$ is dominated by every partition of $3$. The two matrices coincide with those recorded in the source reference for $S_3$, and the position $((2,1),(3))$ shows the characteristic dependence: $0$ at $p=2$ and $1$ at $p=3$. [given, F7, step 3.1, step 3.2] ∎
